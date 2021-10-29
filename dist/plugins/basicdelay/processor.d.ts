import { AudioPlugin } from "../../JSAP/dist/index";
declare class BasicDelay extends AudioPlugin {
    constructor(factory: any, owner: any, prototype: any);
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
export default BasicDelay;
