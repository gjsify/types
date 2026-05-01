
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GVnc from '@girs/gvnc-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GVncPulse {

    /**
     * GVncPulse-1.0
     */


    namespace AudioPulse {
        // Signal signatures
        interface SignalSignatures extends GVnc.BaseAudio.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GVnc.BaseAudio.ConstructorProps, GVnc.Audio.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class AudioPulse extends GVnc.BaseAudio implements GVnc.Audio {
        static $gtype: GObject.GType<AudioPulse>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioPulse.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AudioPulse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AudioPulse;

        // Signals
        /** @signal */
        connect<K extends keyof AudioPulse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioPulse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AudioPulse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioPulse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AudioPulse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioPulse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Request playback of a single audio sample in `sample`
         * @param sample the audio sample
         */
        playback_data(sample: GVnc.AudioSample): void;

        /**
         * Indicate that the remote desktop is about to start
         * audio playback in format `format`.
         * @param format the new audio format
         */
        playback_start(format: GVnc.AudioFormat): void;

        /**
         * Indicate that the remote desktop has completed
         * audio playback
         */
        playback_stop(): void;

        /**
         * @param sample 
         * @virtual
         */
        vfunc_playback_data(sample: GVnc.AudioSample): boolean;

        /**
         * @param format 
         * @virtual
         */
        vfunc_playback_start(format: GVnc.AudioFormat): boolean;

        /**
         * @virtual
         */
        vfunc_playback_stop(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type AudioPulseClass = typeof AudioPulse;

    /**
     * @gir-type Struct
     */
    abstract class AudioPulsePrivate {
        static $gtype: GObject.GType<AudioPulsePrivate>;
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GVncPulse;

// END
