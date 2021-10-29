import { IBasePlugin } from "../IBasePlugin";
declare class PluginParameterInterfaceNode {
    input: HTMLInputElement;
    AudioParam: AudioParam;
    processor: IBasePlugin;
    GUI: PluginUserInterface;
    constructor(input: HTMLInputElement, AudioParam: AudioParam, processor: IBasePlugin, GUI: PluginUserInterface);
    handleEvent(event: any): void;
}
declare class PluginUserInterface {
    processor: IBasePlugin;
    root: HTMLDivElement;
    dim: {
        width: number;
        height: number;
    };
    private intervalFunction;
    private updateInterval;
    private PluginParameterInterfaces;
    private _updateFunction;
    constructor(processor: IBasePlugin, width: number, height: number);
    createPluginParameterInterfaceNode(DOM: HTMLInputElement, PluginParameterInstance: AudioParam): PluginParameterInterfaceNode;
    get update(): () => void;
    set update(f: () => void);
    getRoot(): HTMLDivElement;
    getDimensions(): {
        width: number;
        height: number;
    };
    getWidth(): number;
    getHeight(): number;
    beginCallbacks(ms: any): void;
    stopCallbacks(): void;
    loadResource(url: any): Promise<unknown>;
    clearGUI(): void;
}
export { PluginUserInterface };
