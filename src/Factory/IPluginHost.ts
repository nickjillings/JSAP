import { LinkedStore } from "../LinkedStore";

export interface IPluginHost {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    readonly TrackData: LinkedStore
}