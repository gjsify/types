
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gvc-1.0-import.d.ts';
    
/**
 * Gvc-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum MixerControlState {
    CLOSED,
    READY,
    CONNECTING,
    FAILED,
}
export enum MixerStreamState {
    INVALID,
    RUNNING,
    IDLE,
    SUSPENDED,
}
export enum MixerUIDeviceDirection {
    INPUT,
    OUTPUT,
}
export enum HeadsetPortChoice {
    NONE,
    HEADPHONES,
    HEADSET,
    MIC,
}
export const MIXER_UI_DEVICE_INVALID: number
export module ChannelMap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `volume-changed`
     */
    export interface VolumeChangedSignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ChannelMap {

    // Own properties of Gvc-1.0.Gvc.ChannelMap

    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.ChannelMap

    parent: GObject.Object
    priv: ChannelMapPrivate

    // Owm methods of Gvc-1.0.Gvc.ChannelMap

    canBalance(): boolean
    canFade(): boolean
    getMapping(): string | null
    getNumChannels(): number
    getVolume(): number

    // Own virtual methods of Gvc-1.0.Gvc.ChannelMap

    volumeChanged(set: boolean): void

    // Own signals of Gvc-1.0.Gvc.ChannelMap

    connect(sigName: "volume-changed", callback: ChannelMap.VolumeChangedSignalCallback): number
    on(sigName: "volume-changed", callback: ChannelMap.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: ChannelMap.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: ChannelMap.VolumeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "volume-changed", ...args: any[]): void

    // Class property signals of Gvc-1.0.Gvc.ChannelMap

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ChannelMap extends GObject.Object {

    // Own properties of Gvc-1.0.Gvc.ChannelMap

    static name: string

    // Constructors of Gvc-1.0.Gvc.ChannelMap

    constructor(config?: ChannelMap.ConstructorProperties) 
    constructor() 
    static new(): ChannelMap
    _init(config?: ChannelMap.ConstructorProperties): void
}

export module MixerCard {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gvc-1.0.Gvc.MixerCard

        iconName?: string | null
        id?: number | null
        index?: number | null
        name?: string | null
        paContext?: any | null
        profile?: string | null
    }

}

export interface MixerCard {

    // Own properties of Gvc-1.0.Gvc.MixerCard

    readonly humanProfile: string | null
    iconName: string | null
    readonly id: number
    readonly index: number
    name: string | null
    readonly paContext: any
    profile: string | null
    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerCard

    parent: GObject.Object
    priv: MixerCardPrivate

    // Owm methods of Gvc-1.0.Gvc.MixerCard

    /**
     * Change the profile in use on this card.
     * @param profile the profile to change to or %NULL.
     * @returns %TRUE if profile successfully changed or already using this profile.
     */
    changeProfile(profile: string | null): boolean
    getGicon(): Gio.Icon
    getIconName(): string | null
    getId(): number
    getIndex(): number
    getName(): string | null
    getPorts(): MixerCardPort[]
    getProfiles(): MixerCardProfile[]
    setIconName(name: string | null): boolean
    setName(name: string | null): boolean
    setPorts(ports: MixerCardPort[]): boolean
    setProfile(profile: string | null): boolean
    setProfiles(profiles: MixerCardProfile[]): boolean

    // Class property signals of Gvc-1.0.Gvc.MixerCard

    connect(sigName: "notify::human-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::human-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::human-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::human-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::human-profile", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerCard extends GObject.Object {

    // Own properties of Gvc-1.0.Gvc.MixerCard

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerCard

    constructor(config?: MixerCard.ConstructorProperties) 
    _init(config?: MixerCard.ConstructorProperties): void
}

export module MixerControl {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-input-update`
     */
    export interface ActiveInputUpdateSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `active-output-update`
     */
    export interface ActiveOutputUpdateSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `audio-device-selection-needed`
     */
    export interface AudioDeviceSelectionNeededSignalCallback {
        (object: number, p0: boolean, p1: number): void
    }

    /**
     * Signal callback interface for `card-added`
     */
    export interface CardAddedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `card-removed`
     */
    export interface CardRemovedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `default-sink-changed`
     */
    export interface DefaultSinkChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `default-source-changed`
     */
    export interface DefaultSourceChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `input-added`
     */
    export interface InputAddedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `input-removed`
     */
    export interface InputRemovedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `output-added`
     */
    export interface OutputAddedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `output-removed`
     */
    export interface OutputRemovedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `stream-added`
     */
    export interface StreamAddedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `stream-changed`
     */
    export interface StreamChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `stream-removed`
     */
    export interface StreamRemovedSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gvc-1.0.Gvc.MixerControl

        name?: string | null
    }

}

export interface MixerControl {

    // Own properties of Gvc-1.0.Gvc.MixerControl

    readonly name: string | null
    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerControl

    parent: GObject.Object
    priv: MixerControlPrivate

    // Owm methods of Gvc-1.0.Gvc.MixerControl

    changeInput(input: MixerUIDevice): void
    changeOutput(output: MixerUIDevice): void
    changeProfileOnSelectedDevice(device: MixerUIDevice, profile: string | null): boolean
    close(): boolean
    getCards(): MixerCard[]
    getDefaultSink(): MixerStream
    getDefaultSource(): MixerStream
    getEventSinkInput(): MixerStream
    getSinkInputs(): MixerSinkInput[]
    getSinks(): MixerSink[]
    getSourceOutputs(): MixerSourceOutput[]
    getSources(): MixerSource[]
    getState(): MixerControlState
    getStreamFromDevice(device: MixerUIDevice): MixerStream
    getStreams(): MixerStream[]
    getVolMaxAmplified(): number
    getVolMaxNorm(): number
    lookupCardId(id: number): MixerCard
    lookupDeviceFromStream(stream: MixerStream): MixerUIDevice
    lookupInputId(id: number): MixerUIDevice
    lookupOutputId(id: number): MixerUIDevice
    lookupStreamId(id: number): MixerStream
    open(): boolean
    setDefaultSink(stream: MixerStream): boolean
    setDefaultSource(stream: MixerStream): boolean
    setHeadsetPort(id: number, choices: HeadsetPortChoice): void

    // Own virtual methods of Gvc-1.0.Gvc.MixerControl

    activeInputUpdate(id: number): void
    activeOutputUpdate(id: number): void
    audioDeviceSelectionNeeded(id: number, showDialog: boolean, choices: HeadsetPortChoice): void
    cardAdded(id: number): void
    cardRemoved(id: number): void
    defaultSinkChanged(id: number): void
    defaultSourceChanged(id: number): void
    inputAdded(id: number): void
    inputRemoved(id: number): void
    outputAdded(id: number): void
    outputRemoved(id: number): void
    stateChanged(newState: MixerControlState): void
    streamAdded(id: number): void
    streamChanged(id: number): void
    streamRemoved(id: number): void

    // Own signals of Gvc-1.0.Gvc.MixerControl

    connect(sigName: "active-input-update", callback: MixerControl.ActiveInputUpdateSignalCallback): number
    on(sigName: "active-input-update", callback: MixerControl.ActiveInputUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-input-update", callback: MixerControl.ActiveInputUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-input-update", callback: MixerControl.ActiveInputUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-input-update", ...args: any[]): void
    connect(sigName: "active-output-update", callback: MixerControl.ActiveOutputUpdateSignalCallback): number
    on(sigName: "active-output-update", callback: MixerControl.ActiveOutputUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-output-update", callback: MixerControl.ActiveOutputUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-output-update", callback: MixerControl.ActiveOutputUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-output-update", ...args: any[]): void
    connect(sigName: "audio-device-selection-needed", callback: MixerControl.AudioDeviceSelectionNeededSignalCallback): number
    on(sigName: "audio-device-selection-needed", callback: MixerControl.AudioDeviceSelectionNeededSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "audio-device-selection-needed", callback: MixerControl.AudioDeviceSelectionNeededSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "audio-device-selection-needed", callback: MixerControl.AudioDeviceSelectionNeededSignalCallback): NodeJS.EventEmitter
    emit(sigName: "audio-device-selection-needed", p0: boolean, p1: number, ...args: any[]): void
    connect(sigName: "card-added", callback: MixerControl.CardAddedSignalCallback): number
    on(sigName: "card-added", callback: MixerControl.CardAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-added", callback: MixerControl.CardAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-added", callback: MixerControl.CardAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-added", ...args: any[]): void
    connect(sigName: "card-removed", callback: MixerControl.CardRemovedSignalCallback): number
    on(sigName: "card-removed", callback: MixerControl.CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: MixerControl.CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: MixerControl.CardRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-removed", ...args: any[]): void
    connect(sigName: "default-sink-changed", callback: MixerControl.DefaultSinkChangedSignalCallback): number
    on(sigName: "default-sink-changed", callback: MixerControl.DefaultSinkChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-sink-changed", callback: MixerControl.DefaultSinkChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-sink-changed", callback: MixerControl.DefaultSinkChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-sink-changed", ...args: any[]): void
    connect(sigName: "default-source-changed", callback: MixerControl.DefaultSourceChangedSignalCallback): number
    on(sigName: "default-source-changed", callback: MixerControl.DefaultSourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-source-changed", callback: MixerControl.DefaultSourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-source-changed", callback: MixerControl.DefaultSourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-source-changed", ...args: any[]): void
    connect(sigName: "input-added", callback: MixerControl.InputAddedSignalCallback): number
    on(sigName: "input-added", callback: MixerControl.InputAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "input-added", callback: MixerControl.InputAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "input-added", callback: MixerControl.InputAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "input-added", ...args: any[]): void
    connect(sigName: "input-removed", callback: MixerControl.InputRemovedSignalCallback): number
    on(sigName: "input-removed", callback: MixerControl.InputRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "input-removed", callback: MixerControl.InputRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "input-removed", callback: MixerControl.InputRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "input-removed", ...args: any[]): void
    connect(sigName: "output-added", callback: MixerControl.OutputAddedSignalCallback): number
    on(sigName: "output-added", callback: MixerControl.OutputAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-added", callback: MixerControl.OutputAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-added", callback: MixerControl.OutputAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-added", ...args: any[]): void
    connect(sigName: "output-removed", callback: MixerControl.OutputRemovedSignalCallback): number
    on(sigName: "output-removed", callback: MixerControl.OutputRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-removed", callback: MixerControl.OutputRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-removed", callback: MixerControl.OutputRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-removed", ...args: any[]): void
    connect(sigName: "state-changed", callback: MixerControl.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: MixerControl.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: MixerControl.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: MixerControl.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "stream-added", callback: MixerControl.StreamAddedSignalCallback): number
    on(sigName: "stream-added", callback: MixerControl.StreamAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stream-added", callback: MixerControl.StreamAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stream-added", callback: MixerControl.StreamAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stream-added", ...args: any[]): void
    connect(sigName: "stream-changed", callback: MixerControl.StreamChangedSignalCallback): number
    on(sigName: "stream-changed", callback: MixerControl.StreamChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stream-changed", callback: MixerControl.StreamChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stream-changed", callback: MixerControl.StreamChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stream-changed", ...args: any[]): void
    connect(sigName: "stream-removed", callback: MixerControl.StreamRemovedSignalCallback): number
    on(sigName: "stream-removed", callback: MixerControl.StreamRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stream-removed", callback: MixerControl.StreamRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stream-removed", callback: MixerControl.StreamRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stream-removed", ...args: any[]): void

    // Class property signals of Gvc-1.0.Gvc.MixerControl

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerControl extends GObject.Object {

    // Own properties of Gvc-1.0.Gvc.MixerControl

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerControl

    constructor(config?: MixerControl.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): MixerControl
    _init(config?: MixerControl.ConstructorProperties): void
}

export module MixerEventRole {

    // Constructor properties interface

    export interface ConstructorProperties extends MixerStream.ConstructorProperties {

        // Own constructor properties of Gvc-1.0.Gvc.MixerEventRole

        device?: string | null
    }

}

export interface MixerEventRole {

    // Own properties of Gvc-1.0.Gvc.MixerEventRole

    device: string | null
    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerEventRole

    parent: MixerStream & GObject.Object
    priv: any

    // Class property signals of Gvc-1.0.Gvc.MixerEventRole

    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerEventRole extends MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerEventRole

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerEventRole

    constructor(config?: MixerEventRole.ConstructorProperties) 
    _init(config?: MixerEventRole.ConstructorProperties): void
}

export module MixerSink {

    // Constructor properties interface

    export interface ConstructorProperties extends MixerStream.ConstructorProperties {
    }

}

export interface MixerSink {

    // Own properties of Gvc-1.0.Gvc.MixerSink

    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerSink

    parent: MixerStream & GObject.Object
    priv: any

    // Class property signals of Gvc-1.0.Gvc.MixerSink

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerSink extends MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerSink

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerSink

    constructor(config?: MixerSink.ConstructorProperties) 
    _init(config?: MixerSink.ConstructorProperties): void
}

export module MixerSinkInput {

    // Constructor properties interface

    export interface ConstructorProperties extends MixerStream.ConstructorProperties {
    }

}

export interface MixerSinkInput {

    // Own properties of Gvc-1.0.Gvc.MixerSinkInput

    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerSinkInput

    parent: MixerStream & GObject.Object
    priv: any

    // Class property signals of Gvc-1.0.Gvc.MixerSinkInput

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerSinkInput extends MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerSinkInput

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerSinkInput

    constructor(config?: MixerSinkInput.ConstructorProperties) 
    _init(config?: MixerSinkInput.ConstructorProperties): void
}

export module MixerSource {

    // Constructor properties interface

    export interface ConstructorProperties extends MixerStream.ConstructorProperties {
    }

}

export interface MixerSource {

    // Own properties of Gvc-1.0.Gvc.MixerSource

    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerSource

    parent: MixerStream & GObject.Object
    priv: any

    // Class property signals of Gvc-1.0.Gvc.MixerSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerSource extends MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerSource

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerSource

    constructor(config?: MixerSource.ConstructorProperties) 
    _init(config?: MixerSource.ConstructorProperties): void
}

export module MixerSourceOutput {

    // Constructor properties interface

    export interface ConstructorProperties extends MixerStream.ConstructorProperties {
    }

}

export interface MixerSourceOutput {

    // Own properties of Gvc-1.0.Gvc.MixerSourceOutput

    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerSourceOutput

    parent: MixerStream & GObject.Object
    priv: any

    // Class property signals of Gvc-1.0.Gvc.MixerSourceOutput

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerSourceOutput extends MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerSourceOutput

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerSourceOutput

    constructor(config?: MixerSourceOutput.ConstructorProperties) 
    _init(config?: MixerSourceOutput.ConstructorProperties): void
}

export module MixerStream {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gvc-1.0.Gvc.MixerStream

        applicationId?: string | null
        canDecibel?: boolean | null
        cardIndex?: number | null
        channelMap?: ChannelMap | null
        decibel?: number | null
        description?: string | null
        formFactor?: string | null
        iconName?: string | null
        id?: number | null
        index?: number | null
        isEventStream?: boolean | null
        isMuted?: boolean | null
        isVirtual?: boolean | null
        name?: string | null
        paContext?: any | null
        port?: string | null
        state?: MixerStreamState | null
        sysfsPath?: string | null
        volume?: number | null
    }

}

export interface MixerStream {

    // Own properties of Gvc-1.0.Gvc.MixerStream

    applicationId: string | null
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string | null
    formFactor: string | null
    iconName: string | null
    readonly id: number
    readonly index: number
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string | null
    readonly paContext: any
    port: string | null
    state: MixerStreamState
    sysfsPath: string | null
    volume: number
    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerStream

    parent: GObject.Object
    priv: MixerStreamPrivate

    // Owm methods of Gvc-1.0.Gvc.MixerStream

    // Has conflict: changeIsMuted(isMuted: boolean): boolean
    // Has conflict: changePort(port: string | null): boolean
    getApplicationId(): string | null
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string | null
    getFormFactor(): string | null
    getGicon(): Gio.Icon
    getIconName(): string | null
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string | null
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string | null
    getVolume(): number
    isRunning(): boolean
    // Has conflict: pushVolume(): boolean
    setApplicationId(applicationId: string | null): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string | null): boolean
    setFormFactor(formFactor: string | null): boolean
    setIconName(name: string | null): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string | null): boolean
    setPort(port: string | null): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string | null): boolean
    setVolume(volume: number): boolean

    // Own virtual methods of Gvc-1.0.Gvc.MixerStream

    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string | null): boolean
    pushVolume(operation: any | null): boolean

    // Class property signals of Gvc-1.0.Gvc.MixerStream

    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::can-decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-decibel", ...args: any[]): void
    connect(sigName: "notify::card-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card-index", ...args: any[]): void
    connect(sigName: "notify::channel-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-map", ...args: any[]): void
    connect(sigName: "notify::decibel", callback: (...args: any[]) => void): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decibel", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::index", callback: (...args: any[]) => void): number
    on(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-event-stream", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-virtual", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-virtual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pa-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pa-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pa-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pa-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysfs-path", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerStream extends GObject.Object {

    // Own properties of Gvc-1.0.Gvc.MixerStream

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerStream

    constructor(config?: MixerStream.ConstructorProperties) 
    _init(config?: MixerStream.ConstructorProperties): void
}

export module MixerUIDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gvc-1.0.Gvc.MixerUIDevice

        card?: any | null
        description?: string | null
        iconName?: string | null
        origin?: string | null
        portAvailable?: boolean | null
        portName?: string | null
        streamId?: number | null
        type?: number | null
    }

}

export interface MixerUIDevice {

    // Own properties of Gvc-1.0.Gvc.MixerUIDevice

    card: any
    description: string | null
    iconName: string | null
    origin: string | null
    portAvailable: boolean
    portName: string | null
    streamId: number
    type: number
    __gtype__: number

    // Own fields of Gvc-1.0.Gvc.MixerUIDevice

    parentInstance: GObject.Object
    priv: MixerUIDevicePrivate

    // Owm methods of Gvc-1.0.Gvc.MixerUIDevice

    getActiveProfile(): string | null
    getBestProfile(selected: string | null, current: string | null): string | null
    getDescription(): string | null
    getGicon(): Gio.Icon
    getIconName(): string | null
    getId(): number
    getMatchingProfile(profile: string | null): string | null
    getOrigin(): string | null
    getPort(): string | null
    getProfiles(): MixerCardProfile[]
    getStreamId(): number
    getSupportedProfiles(): MixerCardProfile[]
    getTopPriorityProfile(): string | null
    getUserPreferredProfile(): string | null
    hasPorts(): boolean
    invalidateStream(): void
    isOutput(): boolean
    /**
     * Assigns value to
     *  - device->priv->profiles (profiles to be added to combobox)
     *  - device->priv->supported_profiles (all profiles of this port)
     *  - device->priv->disable_profile_swapping (whether to show the combobox)
     * 
     * This method attempts to reduce the list of profiles visible to the user by figuring out
     * from the context of that device (whether it's an input or an output) what profiles
     * actually provide an alternative.
     * 
     * It does this by the following.
     *  - It ignores off profiles.
     *  - It takes the canonical name of the profile. That name is what you get when you
     *    ignore the other direction.
     *  - In the first iteration, it only adds the names of canonical profiles - i e
     *    when the other side is turned off.
     *  - Normally the first iteration covers all cases, but sometimes (e g bluetooth)
     *    it doesn't, so add other profiles whose canonical name isn't already added
     *    in a second iteration.
     * @param inProfiles a list of GvcMixerCardProfile
     */
    setProfiles(inProfiles: MixerCardProfile[]): void
    setUserPreferredProfile(profile: string | null): void
    shouldProfilesBeHidden(): boolean

    // Class property signals of Gvc-1.0.Gvc.MixerUIDevice

    connect(sigName: "notify::card", callback: (...args: any[]) => void): number
    on(sigName: "notify::card", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::card", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::card", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::card", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::port-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-available", ...args: any[]): void
    connect(sigName: "notify::port-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::stream-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MixerUIDevice extends GObject.Object {

    // Own properties of Gvc-1.0.Gvc.MixerUIDevice

    static name: string

    // Constructors of Gvc-1.0.Gvc.MixerUIDevice

    constructor(config?: MixerUIDevice.ConstructorProperties) 
    _init(config?: MixerUIDevice.ConstructorProperties): void
}

export interface ChannelMapClass {

    // Own fields of Gvc-1.0.Gvc.ChannelMapClass

    parentClass: GObject.ObjectClass
    volumeChanged: (channelMap: ChannelMap, set: boolean) => void
}

export abstract class ChannelMapClass {

    // Own properties of Gvc-1.0.Gvc.ChannelMapClass

    static name: string
}

export interface ChannelMapPrivate {
}

export class ChannelMapPrivate {

    // Own properties of Gvc-1.0.Gvc.ChannelMapPrivate

    static name: string
}

export interface MixerCardClass {

    // Own fields of Gvc-1.0.Gvc.MixerCardClass

    parentClass: GObject.ObjectClass
}

export abstract class MixerCardClass {

    // Own properties of Gvc-1.0.Gvc.MixerCardClass

    static name: string
}

export interface MixerCardPort {

    // Own fields of Gvc-1.0.Gvc.MixerCardPort

    port: string | null
    humanPort: string | null
    iconName: string | null
    priority: number
    available: number
    direction: number
    profiles: any[]
}

export class MixerCardPort {

    // Own properties of Gvc-1.0.Gvc.MixerCardPort

    static name: string
}

export interface MixerCardPrivate {
}

export class MixerCardPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerCardPrivate

    static name: string
}

export interface MixerCardProfile {

    // Own fields of Gvc-1.0.Gvc.MixerCardProfile

    profile: string | null
    humanProfile: string | null
    status: string | null
    priority: number
    nSinks: number
    nSources: number

    // Owm methods of Gvc-1.0.Gvc.MixerCardProfile

    compare(b: MixerCardProfile): number
}

export class MixerCardProfile {

    // Own properties of Gvc-1.0.Gvc.MixerCardProfile

    static name: string
}

export interface MixerControlClass {

    // Own fields of Gvc-1.0.Gvc.MixerControlClass

    parentClass: GObject.ObjectClass
    stateChanged: (control: MixerControl, newState: MixerControlState) => void
    streamAdded: (control: MixerControl, id: number) => void
    streamChanged: (control: MixerControl, id: number) => void
    streamRemoved: (control: MixerControl, id: number) => void
    cardAdded: (control: MixerControl, id: number) => void
    cardRemoved: (control: MixerControl, id: number) => void
    defaultSinkChanged: (control: MixerControl, id: number) => void
    defaultSourceChanged: (control: MixerControl, id: number) => void
    activeOutputUpdate: (control: MixerControl, id: number) => void
    activeInputUpdate: (control: MixerControl, id: number) => void
    outputAdded: (control: MixerControl, id: number) => void
    inputAdded: (control: MixerControl, id: number) => void
    outputRemoved: (control: MixerControl, id: number) => void
    inputRemoved: (control: MixerControl, id: number) => void
    audioDeviceSelectionNeeded: (control: MixerControl, id: number, showDialog: boolean, choices: HeadsetPortChoice) => void
}

export abstract class MixerControlClass {

    // Own properties of Gvc-1.0.Gvc.MixerControlClass

    static name: string
}

export interface MixerControlPrivate {
}

export class MixerControlPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerControlPrivate

    static name: string
}

export interface MixerEventRoleClass {

    // Own fields of Gvc-1.0.Gvc.MixerEventRoleClass

    parentClass: MixerStreamClass
}

export abstract class MixerEventRoleClass {

    // Own properties of Gvc-1.0.Gvc.MixerEventRoleClass

    static name: string
}

export interface MixerEventRolePrivate {
}

export class MixerEventRolePrivate {

    // Own properties of Gvc-1.0.Gvc.MixerEventRolePrivate

    static name: string
}

export interface MixerSinkClass {

    // Own fields of Gvc-1.0.Gvc.MixerSinkClass

    parentClass: MixerStreamClass
}

export abstract class MixerSinkClass {

    // Own properties of Gvc-1.0.Gvc.MixerSinkClass

    static name: string
}

export interface MixerSinkInputClass {

    // Own fields of Gvc-1.0.Gvc.MixerSinkInputClass

    parentClass: MixerStreamClass
}

export abstract class MixerSinkInputClass {

    // Own properties of Gvc-1.0.Gvc.MixerSinkInputClass

    static name: string
}

export interface MixerSinkInputPrivate {
}

export class MixerSinkInputPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerSinkInputPrivate

    static name: string
}

export interface MixerSinkPrivate {
}

export class MixerSinkPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerSinkPrivate

    static name: string
}

export interface MixerSourceClass {

    // Own fields of Gvc-1.0.Gvc.MixerSourceClass

    parentClass: MixerStreamClass
}

export abstract class MixerSourceClass {

    // Own properties of Gvc-1.0.Gvc.MixerSourceClass

    static name: string
}

export interface MixerSourceOutputClass {

    // Own fields of Gvc-1.0.Gvc.MixerSourceOutputClass

    parentClass: MixerStreamClass
}

export abstract class MixerSourceOutputClass {

    // Own properties of Gvc-1.0.Gvc.MixerSourceOutputClass

    static name: string
}

export interface MixerSourceOutputPrivate {
}

export class MixerSourceOutputPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerSourceOutputPrivate

    static name: string
}

export interface MixerSourcePrivate {
}

export class MixerSourcePrivate {

    // Own properties of Gvc-1.0.Gvc.MixerSourcePrivate

    static name: string
}

export interface MixerStreamClass {

    // Own fields of Gvc-1.0.Gvc.MixerStreamClass

    parentClass: GObject.ObjectClass
    pushVolume: (stream: MixerStream, operation: any | null) => boolean
    changeIsMuted: (stream: MixerStream, isMuted: boolean) => boolean
    changePort: (stream: MixerStream, port: string | null) => boolean
}

export abstract class MixerStreamClass {

    // Own properties of Gvc-1.0.Gvc.MixerStreamClass

    static name: string
}

export interface MixerStreamPort {

    // Own fields of Gvc-1.0.Gvc.MixerStreamPort

    port: string | null
    humanPort: string | null
    priority: number
    available: boolean
}

export class MixerStreamPort {

    // Own properties of Gvc-1.0.Gvc.MixerStreamPort

    static name: string
}

export interface MixerStreamPrivate {
}

export class MixerStreamPrivate {

    // Own properties of Gvc-1.0.Gvc.MixerStreamPrivate

    static name: string
}

export interface MixerUIDeviceClass {

    // Own fields of Gvc-1.0.Gvc.MixerUIDeviceClass

    parentClass: GObject.ObjectClass
}

export abstract class MixerUIDeviceClass {

    // Own properties of Gvc-1.0.Gvc.MixerUIDeviceClass

    static name: string
}

export interface MixerUIDevicePrivate {
}

export class MixerUIDevicePrivate {

    // Own properties of Gvc-1.0.Gvc.MixerUIDevicePrivate

    static name: string
}

// END