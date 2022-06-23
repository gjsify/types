// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVncPulse-1.0
 */

import type GVnc from './GVnc-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GVncPulse {

interface AudioPulse_ConstructProps extends GVnc.Audio_ConstructProps, GVnc.BaseAudio_ConstructProps {
}

interface AudioPulse extends GVnc.Audio {

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulse

    parent: GVnc.BaseAudio
    priv: AudioPulsePrivate

    // Class property signals of GVncPulse-1.0.GVncPulse.AudioPulse

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AudioPulse extends GVnc.BaseAudio {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulse

    static name: string
    static $gtype: GObject.GType<AudioPulse>

    // Constructors of GVncPulse-1.0.GVncPulse.AudioPulse

    constructor(config?: AudioPulse_ConstructProps) 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     */
    constructor() 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     */
    static new(): AudioPulse

    // Overloads of new

    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    static new(): GVnc.BaseAudio
    _init(config?: AudioPulse_ConstructProps): void
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