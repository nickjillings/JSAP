import { AudioPlugin } from "../../JSAP/dist/index";
declare class ConvolutionReverb extends AudioPlugin {
    private preDelayParam;
    private impulseStartParam;
    private impulseEndParam;
    private dampingParam;
    private modRateParam;
    private modDepthParam;
    private dryWetParam;
    private impulseResponseAsset;
    private convolver;
    private curve;
    private ir;
    private convolutionKernel;
    private kernelStart;
    private kernelEnd;
    constructor(factory: any, owner: any, prototype: any);
    private calculateKernelLimits;
    private fillConvolutionKernel;
    private generateConvolutionKernel;
    private calculatePreDelay;
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
export default ConvolutionReverb;
