/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './epcui-1.0-ambient.d.ts';
import './epcui-1.0-import.d.ts';
/**
 * EpcUi-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type Epc from '@girs/epc-1.0';

export namespace EpcUi {
    module PasswordDialog {
        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcPasswordDialog class.
     */
    class PasswordDialog extends Gtk.Dialog {
        // Own properties of EpcUi-1.0.PasswordDialog

        anonymous: boolean;
        anonymous_allowed: boolean;
        anonymousAllowed: boolean;
        password: string;
        realm: string;
        username: string;

        // Owm methods of EpcUi-1.0.PasswordDialog

        attach(consumer: Epc.Consumer): void;
        get_anonymous_allowed(): boolean;
        get_password(): string;
        get_realm(): string;
        get_username(): string;
        is_anonymous(): boolean;
        set_anonymous(anonymous: boolean): void;
        set_anonymous_allowed(allowed: boolean): void;
        set_password(password: string): void;
        set_realm(realm: string): void;
        set_username(username: string): void;
    }

    module ProgressWindow {
        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcProgressWindow class.
     */
    class ProgressWindow extends Gtk.Window {
        // Own properties of EpcUi-1.0.ProgressWindow

        message: string;
        progress: number;
        title: string;

        // Constructors of EpcUi-1.0.ProgressWindow

        static ['new'](title: string, parent: Gtk.Window, message: string): ProgressWindow;

        // Owm methods of EpcUi-1.0.ProgressWindow

        static install(parent: Gtk.Window): void;

        // Owm methods of EpcUi-1.0.ProgressWindow

        update(progress: number, message: string): void;
    }

    /**
     * Virtual methods of the #EpcPasswordDialog class.
     */
    class PasswordDialogClass {}

    class PasswordDialogPrivate {}

    /**
     * Virtual methods of the #EpcProgressWindow class.
     */
    class ProgressWindowClass {}

    class ProgressWindowPrivate {}

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

export default EpcUi;
// END
