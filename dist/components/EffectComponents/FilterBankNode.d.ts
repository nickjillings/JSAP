export default class FilterBankNode {
    readonly context: AudioContext;
    private _maxFreq;
    private _minFreq;
    private _nBands;
    private _bandwidthScale;
    private _filters;
    constructor(context: AudioContext, _maxFreq: number, _minFreq: number, _nBands: number);
    private setFilterCoeffs;
    private createFilters;
    get minFreq(): number;
    set minFreq(freq: number);
    get maxFreq(): number;
    set maxFreq(freq: number);
    setFrequencyRange(minFreq: number, maxFreq: number): void;
    get nBands(): number;
    set nBands(nBands: number);
    get bandwidthScale(): number;
    set bandwidthScale(bandwidthScale: number);
    connectInput(source: AudioNode): void;
    connectSingleOutput(band: number, destination?: AudioNode): void;
    connectEachOutput(destinations?: AudioNode[]): void;
    connectAllOutputs(destination?: AudioNode): void;
    disconnectSingleOutput(band: number, destination?: AudioNode): void;
    disconnectEachOutput(destinations: AudioNode[]): void;
    disconnectAllOutputs(destination?: AudioNode): void;
    deconstruct(): void;
}
