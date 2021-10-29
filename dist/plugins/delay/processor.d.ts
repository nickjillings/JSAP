import { AudioPlugin } from "../../JSAP/dist/index";
declare class StereoDelay extends AudioPlugin {
    readonly delayLParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly delayRParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly levelLParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly levelRParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly feedbackLParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly feedbackRParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly feedbackXParam: import("../../JSAP/dist/BasePlugin/parameters/NumberParameter").NumberParameter;
    readonly stereoLinkParam: import("../../JSAP/dist/BasePlugin/parameters/SwitchParameter").SwitchParameter;
    private previouslyLinked;
    constructor(factory: any, owner: any, prototype: any);
    private saveRightChannelStates;
    private restoreRightChannelStates;
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
export default StereoDelay;
