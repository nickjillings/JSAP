require.config({
    paths: {
        "JSAP": "../jsap"
    }
});
define([
    'JSAP'
], function (JSAP) {
    window.context = new(window.AudioContext || window.webkitAudioContext);
    var bufferStore;
    var bufferPlayback;
    var FFT1 = context.createAnalyser();
    var FFT2 = context.createAnalyser();
    FFT1.smoothingTimeConstant = 0.25;
    FFT2.smoothingTimeConstant = 0.25;
    FFT1.fftSize = 2048;
    FFT2.fftSize = 2048;
    var processIn = context.createGain();
    var processOut = context.createGain();
    FFT1.connect(processIn);
    processOut.connect(FFT2);
    FFT2.connect(context.destination);
    window.pluginFactory = new JSAP.PluginFactory(context);
    pluginFactory.PluginGUI.setDefaultInterface("./jsap-default.html");
    var track = pluginFactory.createSubFactory(processIn, processOut);

    function getGlobalVariables() {
        var keyValues = {},
            global = window; // window for browser environments
        for (var prop in global) {
            eval("keyValues." + prop + "=true");
        }
        return keyValues;
    }

    function checkDifferentVariables(oldKeys) {
        var global = window;
        var keyDiff = [];
        for (var prop in global) {
            if (eval("oldKeys." + prop + "==undefined")) {
                keyDiff.push(prop);
            }
        }
        return keyDiff;
    }

    (function() {

        // Build the audio dropper
        var audioDragArea = document.getElementById("audio-drop-point");
        var jsDragArea = document.getElementById("js-drop-point");

        window.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
        })

        audioDragArea.addEventListener('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            e.currentTarget.className = "drop-point drag-over";
        });

        audioDragArea.addEventListener('dragexit', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            e.currentTarget.className = "drop-point";
        });

        audioDragArea.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.currentTarget.className = "drop-point drag-dropped";
            var files = e.dataTransfer.files[0];
            var reader = new FileReader();
            document.getElementById("audio-drop-point").children[0].textContent = "Decoding";
            reader.onload = function(decoded) {
                context.decodeAudioData(decoded.target.result, function(decodedData) {
                    bufferStore = decodedData;
                    document.getElementById("play").disabled = false;
                    document.getElementById("audio-drop-point").style.visibility = "hidden";
                }, function() {});
            };
            reader.readAsArrayBuffer(files);
        });

        jsDragArea.addEventListener('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            e.currentTarget.className = "drop-point drag-over";
        });

        jsDragArea.addEventListener('dragexit', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            e.currentTarget.className = "drop-point";
        });

        function getGlobalVariables() {
            var keyValues = {},
                global = window; // window for browser environments
            for (var prop in global) {
                eval("keyValues." + prop + "=true");
            }
            return keyValues;
        }

        function checkDifferentVariables(oldKeys) {
            var global = window;
            var keyDiff = [];
            for (var prop in global) {
                if (eval("oldKeys." + prop + "==undefined")) {
                    keyDiff.push(prop);
                }
            }
            return keyDiff;
        }

        jsDragArea.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.currentTarget.className = "drop-point drag-dropped";
            var files = e.dataTransfer.files[0];
            var uri = URL.createObjectURL(files);
            pluginFactory.loadPrototypeModule({url: uri});
        });

        function animationFrame() {
            draw();
            window.requestAnimationFrame(animationFrame);
        }
        window.requestAnimationFrame(animationFrame);
    })();

    window.spawn = function(event) {
        var plugins = pluginFactory.getAllPlugins();
        if (plugins.length == 0) {
            return;
        }
        var plugin = plugins[0];
        var GUI = plugins[0].node.GUI;
        if (GUI === undefined) {
            GUI = {
                src: "/dev/jsap-default.html",
                width: 500,
                height: 200
            }
        }
        var w = window.open(GUI.src,plugin.name,'width='+GUI.width+',height='+GUI.height+',status=0,toolbar=0');
        plugins[0].externalInterface.registerWindow(w);
    }

    function loadPlugin() {
        return reloadPlugin();
    }
    window.loadPlugin = loadPlugin;

    window.reloadPlugin = function(event) {
        return new Promise(function(resolve, reject) {
            if (pluginFactory.getAllPlugins().length > 0) {
                track.destroyPlugin(track.getPlugins()[0]);
                var pluginInterface = document.getElementById("plugin-interface");
                pluginInterface.removeChild(pluginInterface.children[0]);
                resolve(track.parent.getPrototypes()[0]);
            } else if (pluginFactory.getAudioPluginPrototypes().length > 0){
                resolve(pluginFactory.getAudioPluginPrototypes()[0]);
            } else {
                reject();
            }
        }).then(function(proto){
            return track.createPlugin(proto);
        }).then(function(pluginInstance){
            // Populate the parameter space
            var pluginInterface = document.getElementById("plugin-interface");
            var gui = pluginInstance.node.GUI;
            if (gui == undefined) {
                gui = {
                    src: "./jsap-default.html",
                    width: 500,
                    height: 500
                };
            }
            var iframe = pluginFactory.PluginGUI.buildPluginInterface(pluginInstance, gui);
            pluginInterface.appendChild(iframe);
            pluginInstance.externalInterface.registerWindow(iframe.contentWindow);
        });
    };

    window.playClick = function(event) {
        if (bufferStore != undefined) {
            if (bufferPlayback == undefined) {
                bufferPlayback = context.createBufferSource();
                bufferPlayback.buffer = bufferStore;
                bufferPlayback.connect(FFT1);
                bufferPlayback.start(0);
                event.currentTarget.textContent = "Stop";
                pluginFactory.audioStart();
            } else {
                bufferPlayback.stop(0);
                bufferPlayback = undefined;
                event.currentTarget.textContent = "Play";
                pluginFactory.audioStop();
            }
        }
    };

    function draw() {
        // Obtain the canvas
        var canvas = document.getElementById("frequency-response");
        // Clear the canvas
        canvContext = canvas.getContext("2d");
        canvContext.clearRect(0, 0, canvas.width, canvas.height);
        canvContext.strokeStyle = "#808080";
        // Draw the log frequency scale
        major_freqs = [10, 100, 1000, 10000];
        minor_freqs = [20, 30, 40, 50, 60, 70, 80, 90, 200, 300, 400, 500, 600, 700, 800, 900, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 20000];
        // Max is Math.log10(20000) == 4.301029995663981
        // Min is Math.log10(10) == 1
        for (var freq of major_freqs) {
            // Get the position in normalised range
            var pos = (Math.log10(freq) - 1) / 3.301029995663981;
            var pixel = canvas.width * pos;
            canvContext.beginPath();
            canvContext.moveTo(pixel, 0);
            canvContext.lineTo(pixel, canvas.height);
            canvContext.stroke();
        }
        canvContext.save();
        canvContext.setLineDash([1, 2]);
        for (var freq of minor_freqs) {
            // Get the position in normalised range
            var pos = (Math.log10(freq) - 1) / 3.301029995663981;
            var pixel = canvas.width * pos;
            canvContext.beginPath();
            canvContext.moveTo(pixel, 0);
            canvContext.lineTo(pixel, canvas.height);
            canvContext.stroke();
        }
        canvContext.restore();
        // Draw the dB scale
        major_dB = [10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90];
        for (var dB of major_dB) {
            var pos = 1 - (dB + 90) / 100;
            var pixel = canvas.height * pos;
            canvContext.beginPath();
            canvContext.moveTo(0, pixel);
            canvContext.lineTo(canvas.width, pixel);
            canvContext.stroke();
        }

        // Draw the Frequency responses

        var Size = FFT1.fftSize / 2;
        FrequencyPoints = new Float32Array(Size);
        for (var i = 0; i < FrequencyPoints.length; i++) {
            FrequencyPoints[i] = i * ((context.sampleRate / 2) / FrequencyPoints.length);
        }
        FrequencyData = new Float32Array(Size);
        FFT1.getFloatFrequencyData(FrequencyData);
        canvContext.strokeStyle = "#FF0000";
        canvContext.beginPath();
        if (FrequencyData[1] > 10) {
            canvContext.moveTo(0, 0);
        } else if (FrequencyData[1] < -90) {
            canvContext.moveTo(0, canvas.height);
        } else {
            canvContext.moveTo(0, canvas.height * (1 - (FrequencyData[1] + 90) / 100));
        }
        for (var i = 0; i < FrequencyData.length; i++) {
            var x_pos = (Math.log10(FrequencyPoints[i]) - 1) / 3.301029995663981;
            var x_pixel = canvas.width * x_pos;
            var y_pos = 0;
            if (FrequencyData[i] > 10) {
                y_pos = 0;
            } else if (FrequencyData[i] < -90) {
                y_pos = 1;
            } else {
                y_pos = 1 - (FrequencyData[i] + 90) / 100;
            }
            var y_pixel = canvas.height * y_pos;
            canvContext.lineTo(x_pixel, y_pixel);
        }
        canvContext.stroke();

        FFT2.getFloatFrequencyData(FrequencyData);
        canvContext.strokeStyle = "#0000FF";
        canvContext.beginPath();
        if (FrequencyData[1] > 10) {
            canvContext.moveTo(0, 0);
        } else if (FrequencyData[1] < -90) {
            canvContext.moveTo(0, canvas.height);
        } else {
            canvContext.moveTo(0, canvas.height * (1 - (FrequencyData[1] + 90) / 100));
        }
        for (var i = 0; i < FrequencyData.length; i++) {
            var x_pos = (Math.log10(FrequencyPoints[i]) - 1) / 3.301029995663981;
            var x_pixel = canvas.width * x_pos;
            var y_pos = 0;
            if (FrequencyData[i] > 10) {
                y_pos = 0;
            } else if (FrequencyData[i] < -90) {
                y_pos = 1;
            } else {
                y_pos = 1 - (FrequencyData[i] + 90) / 100;
            }
            var y_pixel = canvas.height * y_pos;
            canvContext.lineTo(x_pixel, y_pixel);
        }

        canvContext.stroke();
    }
});
