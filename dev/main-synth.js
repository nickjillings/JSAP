require.config({
    paths: {
        "JSAP": "../jsap"
    }
});

define([
    'JSAP'
], function (JSAP) {
    window.context = new(window.AudioContext || window.webkitAudioContext);
    window.pluginFactory = new JSAP.PluginFactory(context);

    pluginFactory.PluginGUI.setDefaultInterface("./jsap-default.html");


    var FFT1 = context.createAnalyser();
    FFT1.smoothingTimeConstant = 0.25;
    FFT1.fftSize = 2048;
    var processOut = context.createGain();
    processOut.connect(FFT1);
    processOut.connect(context.destination);
    var track = pluginFactory.createMidiSynthesiserHost();
    track.connect(processOut);

    function loadPlugin() {
        var payload = escape(document.querySelector("#js-synth-uri").value);
        payload = JSON.parse(unescape(payload));
        pluginFactory.loadPrototypeModule(payload)
        .then(function(proto) {
            return reloadPlugin();
        });
    }
    window.loadPlugin = loadPlugin;

    function spawn(event) {
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
                height: 500
            };
        }
        var w = window.open(GUI.src,plugin.name,'width='+GUI.width+',height='+GUI.height+',status=0,toolbar=0');
        plugins[0].externalInterface.registerWindow(w);
    }
    window.spawn = spawn;

    function reloadPlugin(event) {
        return new Promise(function(resolve, reject) {
            if (pluginFactory.getMidiSynthPrototypes().length > 0) {
                resolve(pluginFactory.getMidiSynthPrototypes()[0]);
            } else {
                reject();
            }
        }).then(function(proto){
            return track.loadMidiSynthesiserModule(proto);
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
    }
    window.reloadPlugin = reloadPlugin;

    var audioPlay = false;
    window.playClick = function(e) {
        if (audioPlay) {
            pluginFactory.audioStop();
        } else {
            pluginFactory.audioStart();
            window.requestAnimationFrame(draw);
        }
        audioPlay = !audioPlay;
    };


    var currentNote;
    window.fireNote = function() {
        if (currentNote) {
            killNote();
        }
        currentNote = Math.floor(Math.random()*128);
        track.midiSynthesiser.node.scheduleEvent([0x90, currentNote, Math.floor(Math.random()*128)], pluginFactory.context.currentTime+0.1);
    };

    window.killNote = function() {
        if (currentNote === undefined) {
            return;
        }
        track.midiSynthesiser.node.scheduleEvent([0x80, currentNote, Math.floor(Math.random()*128)], pluginFactory.context.currentTime+0.1);
        currentNote = undefined;
    };

    function draw() {
        pluginFactory.PluginGUI.pollAllPlugins();
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
        major_freqs.forEach(function(freq){
            // Get the position in normalised range
            var pos = (Math.log10(freq) - 1) / 3.301029995663981;
            var pixel = canvas.width * pos;
            canvContext.beginPath();
            canvContext.moveTo(pixel, 0);
            canvContext.lineTo(pixel, canvas.height);
            canvContext.stroke();
        });
        canvContext.save();
        canvContext.setLineDash([1, 2]);
        minor_freqs.forEach(function(freq){
            // Get the position in normalised range
            var pos = (Math.log10(freq) - 1) / 3.301029995663981;
            var pixel = canvas.width * pos;
            canvContext.beginPath();
            canvContext.moveTo(pixel, 0);
            canvContext.lineTo(pixel, canvas.height);
            canvContext.stroke();
        });
        canvContext.restore();
        // Draw the dB scale
        major_dB = [10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90];
        major_dB.forEach(function(dB){
            var pos = 1 - (dB + 90) / 100;
            var pixel = canvas.height * pos;
            canvContext.beginPath();
            canvContext.moveTo(0, pixel);
            canvContext.lineTo(canvas.width, pixel);
            canvContext.stroke();
        });

        // Draw the Frequency responses

        var Size = FFT1.fftSize / 2;
        FrequencyPoints = new Float32Array(Size);
        FrequencyPoints.forEach(function(e,i,a) {
            a[i] = i * ((context.sampleRate / 2) / a.length);
        });
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
        if (audioPlay) {
            window.requestAnimationFrame(draw);
        }
    }
});
