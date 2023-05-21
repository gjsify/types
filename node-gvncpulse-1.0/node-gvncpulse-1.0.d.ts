
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gvncpulse-1.0-import.d.ts';
    
/**
 * GVncPulse-1.0
 */

import type GVnc from '@girs/node-gvnc-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace GVncPulse {

module AudioPulse {

    // Constructor properties interface

    interface ConstructorProperties extends GVnc.Audio.ConstructorProperties, GVnc.BaseAudio.ConstructorProperties {
    }

}

interface AudioPulse extends GVnc.Audio {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulse

    __gtype__: number

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulse

    parent: GVnc.BaseAudio & GObject.Object
    priv: any

    // Conflicting methods

    playbackData(sample: GVnc.AudioSample): boolean
    playbackData(sample: GVnc.AudioSample): boolean

    // Overloads of playbackData

    playbackData(sample: GVnc.AudioSample): boolean
    playbackStart(format: GVnc.AudioFormat): boolean
    playbackStart(format: GVnc.AudioFormat): boolean

    // Overloads of playbackStart

    playbackStart(format: GVnc.AudioFormat): boolean
    playbackStop(): boolean
    playbackStop(): boolean

    // Overloads of playbackStop

    playbackStop(): boolean

    // Class property signals of GVncPulse-1.0.GVncPulse.AudioPulse

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
}

class AudioPulse extends GVnc.BaseAudio {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulse

    static name: string

    // Constructors of GVncPulse-1.0.GVncPulse.AudioPulse

    constructor(config?: AudioPulse.ConstructorProperties) 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     * @returns the new audio object
     */
    constructor() 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     * @returns the new audio object
     */
    static new(): AudioPulse

    // Overloads of new

    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     * @returns a new audio object
     */
    static new(): GVnc.BaseAudio
    _init(config?: AudioPulse.ConstructorProperties): void
}

interface AudioPulseClass {

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulseClass

    parentClass: GVnc.BaseAudioClass
}

abstract class AudioPulseClass {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulseClass

    static name: string
}

interface AudioPulsePrivate {
}

class AudioPulsePrivate {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulsePrivate

    static name: string
}

}

export default GVncPulse;
// END