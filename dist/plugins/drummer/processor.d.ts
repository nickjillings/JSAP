import * as SynthComponents from "../../components/SynthComponents/index";
declare class Drummer extends SynthComponents.PolyphonicSynthesiserBasePlugin {
    constructor(factory: any, owner: any);
    generatePadParameters(): void;
    setupBaseParams(): void;
    getPadIndexNoteMapping(padIndex: any): any;
    previewNote(noteName: any): void;
    cancelAllEventsDerived(): void;
    start(): void;
    stop(): void;
    onloaded(): void;
    onunloaded(): void;
    getActiveNoteProperties(): any[];
    init(): Promise<void>;
}
export default Drummer;
