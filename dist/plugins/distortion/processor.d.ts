import { AudioPlugin } from "../../JSAP/dist/index";
declare class Distortion extends AudioPlugin {
    private readonly damage_param;
    private readonly bias021_param;
    private readonly knee021_param;
    private readonly mix_param;
    private readonly inputNode;
    private readonly waveshaper;
    private readonly cleanGain;
    private readonly distGain;
    private readonly outputNode;
    constructor(factory: any, owner: any, prototype: any);
    private updateIOCurve;
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
    readonly GUI: {
        src: string;
        width: number;
        height: number;
    };
}
declare const PluginDetail: {
    name: string;
    version: string;
    uniqueID: string;
};
export { PluginDetail };
export default Distortion;
