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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace CryptUI {
    /**
     * CryptUI-0.0
     */

    /**
     * Used in key properties to indicate what kind of key it is
     *
     * Never ever change a values already present. These values are used
     * across applications, DBus etc...
     * @gir-type Enum
     */
    enum EncType {
        /**
         * the key is none of the below types
         */
        NONE,
        /**
         * the key's type is symmetric
         */
        SYMMETRIC,
        /**
         * the key's type is public
         */
        PUBLIC,
        /**
         * the key's type is private
         */
        PRIVATE,
        /**
         * for internal use only
         */
        MAXVALUE,
    }

    /**
     * @gir-type Enum
     */
    enum KeyChooserMode {
        RECIPIENTS,
        SIGNER,
        SUPPORT_SYMMETRIC,
        MUSTSIGN,
    }

    /**
     * Used in key properties to indicate a key's status.  These values are
     * logically OR'd together.
     *
     * Never ever change a values already present. These values are used
     * across applications, DBus etc...
     * @gir-type Enum
     */
    enum KeyFlags {
        /**
         * whether the key is valid
         */
        IS_VALID,
        /**
         * whether the key can encrypt
         */
        CAN_ENCRYPT,
        /**
         * whether the key can sign
         */
        CAN_SIGN,
        /**
         * whether the key is expired
         */
        EXPIRED,
        /**
         * whether the key is revoked
         */
        REVOKED,
        /**
         * whether the key is disabled
         */
        DISABLED,
        /**
         * whether the key is trusted
         */
        TRUSTED,
        /**
         * whether the key is exportable
         */
        EXPORTABLE,
    }

    /**
     * @gir-type Enum
     */
    enum KeyStoreMode {
        ALL,
        SELECTED,
        RESULTS,
    }

    /**
     * Indicates where a key is located.
     *
     * Never ever change a values already present. These values are used
     * across applications, DBus etc...
     * @gir-type Enum
     */
    enum Location {
        /**
         * An invalid key
         */
        INVALID,
        /**
         * A key we don't know anything about
         */
        MISSING,
        /**
         * A key we're searching for but haven't found yet
         */
        SEARCHING,
        /**
         * A key that we've found is present remotely
         */
        REMOTE,
        /**
         * A key on the local machine
         */
        LOCAL,
    }

    /**
     * What the validity of the key is.
     *
     * Never ever change a values already present. These values are used
     * across applications, DBus etc...
     * @gir-type Enum
     */
    enum Validity {
        /**
         * the key is revoked
         */
        REVOKED,
        /**
         * the key is disabled
         */
        DISABLED,
        /**
         * the key has never been valid
         */
        NEVER,
        /**
         * the key's validity is unknown
         */
        UNKNOWN,
        /**
         * the key's validity is marginal
         */
        MARGINAL,
        /**
         * the key's validity is full
         */
        FULL,
        /**
         * the key's validity is ultimate
         */
        ULTIMATE,
    }

    /**
     * @gir-type Callback
     */
    interface KeyStoreFilterFunc {
        (ckset: Keyset, key: string): boolean;
    }
    /**
     * @gir-type Struct
     */
    class KeyChooser {
        static $gtype: GObject.GType<KeyChooser>;
    }

    /**
     * @gir-type Struct
     */
    class KeyChooserClass {
        static $gtype: GObject.GType<KeyChooserClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class KeyChooserPriv {
        static $gtype: GObject.GType<KeyChooserPriv>;
    }

    /**
     * @gir-type Struct
     */
    class KeyStore {
        static $gtype: GObject.GType<KeyStore>;
    }

    /**
     * @gir-type Struct
     */
    class KeyStoreClass {
        static $gtype: GObject.GType<KeyStoreClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class KeyStorePriv {
        static $gtype: GObject.GType<KeyStorePriv>;
    }

    /**
     * @gir-type Struct
     */
    class Keyset {
        static $gtype: GObject.GType<Keyset>;
    }

    /**
     * @gir-type Struct
     */
    class KeysetClass {
        static $gtype: GObject.GType<KeysetClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class KeysetPrivate {
        static $gtype: GObject.GType<KeysetPrivate>;
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

export default CryptUI;

// END
