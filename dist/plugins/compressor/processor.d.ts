import { AudioPlugin } from "../../JSAP/dist/index";
declare class Compressor extends AudioPlugin {
    constructor(factory: any, owner: any, prototype: any);
    readonly GUI: {
        src: string;
        width: number;
        height: number;
    };
    readonly name: string;
    readonly version: string;
    readonly uniqueID: string;
}
declare const PluginDetail: {
    name: string;
    version: string;
    uniqueID: string;
};
export { PluginDetail };
export default Compressor;
