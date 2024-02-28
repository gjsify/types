/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelrenderergst-2.8-ambient.d.ts';
import './rygelrenderergst-2.8-import.d.ts';
/**
 * RygelRendererGst-2.8
 */

import type RygelRenderer from '@girs/rygelrenderer-2.8';
import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';
import type Gst from '@girs/gst-1.0';
import type GModule from '@girs/gmodule-2.0';

export namespace RygelRendererGst {
    class PlaybinPlayerError extends GLib.Error {
        // Own fields of RygelRendererGst-2.8.PlaybinPlayerError

        NO_ELEMENT: number;

        // Constructors of RygelRendererGst-2.8.PlaybinPlayerError

        constructor(options: { message: string; code: number });
    }

    module PlaybinPlayer {
        // Constructor properties interface
    }

    class PlaybinPlayer extends GObject.Object {
        // Own properties of RygelRendererGst-2.8.PlaybinPlayer

        playbin: Gst.Element;
        readonly supported_profiles: RygelCore.DLNAProfile[];
        readonly supportedProfiles: RygelCore.DLNAProfile[];

        // Owm methods of RygelRendererGst-2.8.PlaybinPlayer

        static instance(): PlaybinPlayer;

        // Owm methods of RygelRendererGst-2.8.PlaybinPlayer

        get_playbin(): Gst.Element;
        get_supported_profiles(): RygelCore.DLNAProfile[];
    }

    module PlaybinRenderer {
        // Constructor properties interface
    }

    class PlaybinRenderer extends RygelRenderer.MediaRenderer {
        // Constructors of RygelRendererGst-2.8.PlaybinRenderer

        static ['new'](title: string): PlaybinRenderer;

        // Owm methods of RygelRendererGst-2.8.PlaybinRenderer

        get_playbin(): Gst.Element | null;
    }

    class PlaybinPlayerClass {}

    class PlaybinPlayerPrivate {}

    class PlaybinRendererClass {}

    class PlaybinRendererPrivate {}

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

export default RygelRendererGst;
// END
