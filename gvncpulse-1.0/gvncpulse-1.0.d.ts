
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gvncpulse-1.0-ambient.d.ts';
import './gvncpulse-1.0-import.d.ts';
/**
 * GVncPulse-1.0
 */

import type GVnc from '@girs/gvnc-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GVncPulse {

module AudioPulse {

    // Constructor properties interface

    interface ConstructorProperties extends GVnc.Audio.ConstructorProperties, GVnc.BaseAudio.ConstructorProperties {
    }

}

interface AudioPulse extends GVnc.Audio {

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulse

    parent: GVnc.BaseAudio & GObject.Object
    priv: any

    // Class property signals of GVncPulse-1.0.GVncPulse.AudioPulse

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AudioPulse extends GVnc.BaseAudio {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulse

    static name: string
    static $gtype: GObject.GType<AudioPulse>

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

    parent_class: GVnc.BaseAudioClass
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GVncPulse;
// END