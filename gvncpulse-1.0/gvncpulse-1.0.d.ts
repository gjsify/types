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
    }

    class AudioPulse extends GVnc.BaseAudio {
        // Constructors of GVncPulse-1.0.AudioPulse

        static ['new'](): AudioPulse;
    }

    class AudioPulseClass {}

    class AudioPulsePrivate {}

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
