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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Ministream {
    /**
     * Ministream-1
     */

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static NO_COMPONENT: number;
        static NO_IDENTIFIER: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Ministream major version component.
     */
    const MAJOR_VERSION: number;
    /**
     * Ministream minor version component.
     */
    const MINOR_VERSION: number;
    function error_quark(): GLib.Quark;
    /**
     * @gir-type Struct
     */
    class Component {
        static $gtype: GObject.GType<Component>;

        // Constructors

        constructor(data: Uint8Array | string);

        static new_from_xml_data(data: Uint8Array | string): Component;

        // Methods

        /**
         * Get the bugtracker URI of this component.
         * @returns the bugtracker URI
         */
        get_bugtracker_uri(): string | null;
        /**
         * Gets the desktop launchables this component provides.
         * @returns the desktop launchables
         */
        get_desktop_launchables(): string[] | null;
        /**
         * Gets the name of the developer that has written this component in the
         * best locale available.
         * @returns the localized developer name
         */
        get_developer_name(): string | null;
        /**
         * Get the help URI of this component.
         * @returns the help URI
         */
        get_help_uri(): string | null;
        /**
         * Get the homepage URI of this component.
         * @returns the hompage URI
         */
        get_homepage_uri(): string | null;
        /**
         * Get the application identifier of this component. This should be in
         * the big-endian domain format.
         * @returns the application identifier
         */
        get_id(): string;
        /**
         * Get the application name of this component in the best locale
         * available.
         * @returns the localized application name
         */
        get_name(): string | null;
        /**
         * Get the license of the project this component is part of. This should
         * be an identifier part of the SPDX license list.
         * @returns the project license identifier
         */
        get_project_license(): string | null;
        /**
         * Gets the releases information of this component.
         * @returns the releases of this component
         */
        get_releases(): Release[] | null;
        /**
         * Increment the reference count of the component.
         *
         * This is an atomic operation and as such, threadsafe.
         * @returns the new reference of `self`
         */
        ref(): Component;
        /**
         * Decrements the reference count of the component. Once the count
         * reaches zero, `self` will be freed.
         *
         * As such, do not use `self` after calling this method.
         */
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class Release {
        static $gtype: GObject.GType<Release>;

        // Methods

        /**
         * Gets the description attached to the releease, or `null` if not set.
         *
         * The description is encoded as markup, containg paragraphs, ordered
         * and unordered lists, aswell as list items within them.
         * @returns the description of the release
         */
        get_description(): string | null;
        /**
         * Gets the version attached to the release, or `null` if not set.
         * @returns the version of the release
         */
        get_version(): string | null;
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

export default Ministream;

// END
