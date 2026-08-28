
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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GnomeCmd {

    /**
     * GnomeCmd-1.0
     */


    const PLUGIN_SYSTEM_CURRENT_VERSION: number;

    /**
     * @gir-type Callback
     */
    interface FileMetadataExtractorAddTag {
        (tag: string, value: string): void;
    }

    namespace State {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class State extends GObject.Object {
        static $gtype: GObject.GType<State>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: State.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<State.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): State;

        // Signals
        /** @signal */
        connect<K extends keyof State.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, State.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof State.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, State.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof State.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<State.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a file descriptor of an active directory
         */
        get_active_dir(): FileDescriptor;

        /**
         * @returns a list of file descriptors in an active directory
         */
        get_active_dir_files(): FileDescriptor[];

        /**
         * @returns a list of selected file descriptors in an active directory
         */
        get_active_dir_selected_files(): FileDescriptor[];

        /**
         * @returns a file descriptor of an inactive directory
         */
        get_inactive_dir(): FileDescriptor;

        /**
         * @returns a list of file descriptors in an inactive directory
         */
        get_inactive_dir_files(): FileDescriptor[];

        /**
         * @returns a list of selected file descriptors in an inactive directory
         */
        get_inactive_dir_selected_files(): FileDescriptor[];

        /**
         * @param active_dir a file descriptor
         */
        set_active_dir(active_dir: FileDescriptor): void;

        /**
         * @param active_dir_files a list of file descriptors
         */
        set_active_dir_files(active_dir_files: FileDescriptor[]): void;

        /**
         * @param active_dir_selected_files a list of file descriptors
         */
        set_active_dir_selected_files(active_dir_selected_files: FileDescriptor[]): void;

        /**
         * @param inactive_dir a file descriptor
         */
        set_inactive_dir(inactive_dir: FileDescriptor): void;

        /**
         * @param inactive_dir_files a list of file descriptors
         */
        set_inactive_dir_files(inactive_dir_files: FileDescriptor[]): void;

        /**
         * @param inactive_dir_selected_files a list of file descriptors
         */
        set_inactive_dir_selected_files(inactive_dir_selected_files: FileDescriptor[]): void;
    }


    /**
     * @gir-type Alias
     */
    type ConfigurableInterface = typeof Configurable;

    /**
     * @gir-type Alias
     */
    type FileActionsInterface = typeof FileActions;

    /**
     * @gir-type Alias
     */
    type FileDescriptorInterface = typeof FileDescriptor;

    /**
     * @gir-type Alias
     */
    type FileMetadataExtractorInterface = typeof FileMetadataExtractor;

    /**
     * @gir-type Struct
     */
    class PluginInfo {
        static $gtype: GObject.GType<PluginInfo>;

        // Fields
        plugin_system_version: number;

        name: string;

        version: string;

        copyright: string;

        comments: string;

        authors: string;

        documenters: string;

        translator: string;

        webpage: string;

        // Constructors

        constructor(properties?: Partial<{
            plugin_system_version: number;
            name: string;
            version: string;
            copyright: string;
            comments: string;
            authors: string;
            documenters: string;
            translator: string;
            webpage: string;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type StateClass = typeof State;

    namespace Configurable {
        /**
         * Interface for implementing Configurable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param parent_window 
             * @virtual
             */
            vfunc_configure(parent_window: Gtk.Window): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConfigurableNamespace {
        $gtype: GObject.GType<Configurable>;
        prototype: Configurable;
    }
    /**
     * @gir-type Interface
     */
    interface Configurable extends GObject.Object, Configurable.Interface {

        // Methods
        /**
         * @param parent_window 
         */
        configure(parent_window: Gtk.Window): void;
    }


    export const Configurable: ConfigurableNamespace & {
        new (): Configurable; // This allows `obj instanceof Configurable`
    };

    namespace FileActions {
        /**
         * Interface for implementing FileActions.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Creates a menu model to be shown in an application's main menu.
             * @virtual
             */
            vfunc_create_main_menu(): Gio.MenuModel;

            /**
             * Creates a menu model to be shown in a context popup menu
             * @param state current state of both application's panels
             * @virtual
             */
            vfunc_create_popup_menu_items(state: State): Gio.MenuModel;

            /**
             * Executes a custom action defined by a plug-in
             * @param action name of the action
             * @param parameter parameter of the action
             * @param parent_window a window, plug-in may use as a parent (`transient-for`)
             * @param state current state of both application's panels
             * @virtual
             */
            vfunc_execute(action: string, parameter: GLib.Variant, parent_window: Gtk.Window, state: State): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileActionsNamespace {
        $gtype: GObject.GType<FileActions>;
        prototype: FileActions;
    }
    /**
     * @gir-type Interface
     */
    interface FileActions extends GObject.Object, FileActions.Interface {

        // Methods
        /**
         * Creates a menu model to be shown in an application's main menu.
         * @returns a menu model
         */
        create_main_menu(): Gio.MenuModel;

        /**
         * Creates a menu model to be shown in a context popup menu
         * @param state current state of both application's panels
         * @returns a menu model
         */
        create_popup_menu_items(state: State): Gio.MenuModel;

        /**
         * Executes a custom action defined by a plug-in
         * @param action name of the action
         * @param parameter parameter of the action
         * @param parent_window a window, plug-in may use as a parent (`transient-for`)
         * @param state current state of both application's panels
         */
        execute(action: string, parameter: GLib.Variant, parent_window: Gtk.Window, state: State): void;
    }


    export const FileActions: FileActionsNamespace & {
        new (): FileActions; // This allows `obj instanceof FileActions`
    };

    namespace FileDescriptor {
        /**
         * Interface for implementing FileDescriptor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_file(): Gio.File;

            /**
             * @virtual
             */
            vfunc_get_file_info(): Gio.FileInfo;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileDescriptorNamespace {
        $gtype: GObject.GType<FileDescriptor>;
        prototype: FileDescriptor;
    }
    /**
     * @gir-type Interface
     */
    interface FileDescriptor extends GObject.Object, FileDescriptor.Interface {

        // Methods
        /**
         * @returns the file
         */
        get_file(): Gio.File;

        /**
         * @returns the file info
         */
        get_file_info(): Gio.FileInfo;
    }


    export const FileDescriptor: FileDescriptorNamespace & {
        new (): FileDescriptor; // This allows `obj instanceof FileDescriptor`
    };

    namespace FileMetadataExtractor {
        /**
         * Interface for implementing FileMetadataExtractor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Returns a human readable, localized name of a tag class.
             * @param cls a tag class
             * @virtual
             */
            vfunc_class_name(cls: string): string;

            /**
             * Extracts tags from a file described by a `fd` file descriptor.
             * A callback `add` will be called for every extracted tag and its value.
             * @param fd a file descriptor
             * @param add a callback
             * @virtual
             */
            vfunc_extract_metadata(fd: FileDescriptor, add: FileMetadataExtractorAddTag): void;

            /**
             * Returns a subset of tags to be shown in a "summary"
             * @virtual
             */
            vfunc_summary_tags(): string[];

            /**
             * Returns a list of tags, the plug-in may potentially extract from files.
             * @virtual
             */
            vfunc_supported_tags(): string[];

            /**
             * Returns a localized description of a tag.
             * @param tag a tag
             * @virtual
             */
            vfunc_tag_description(tag: string): string;

            /**
             * Returns a human readable, localized name of a tag.
             * @param tag a tag
             * @virtual
             */
            vfunc_tag_name(tag: string): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileMetadataExtractorNamespace {
        $gtype: GObject.GType<FileMetadataExtractor>;
        prototype: FileMetadataExtractor;
    }
    /**
     * @gir-type Interface
     */
    interface FileMetadataExtractor extends GObject.Object, FileMetadataExtractor.Interface {

        // Methods
        /**
         * Returns a human readable, localized name of a tag class.
         * @param cls a tag class
         * @returns a name of a class
         */
        class_name(cls: string): string;

        /**
         * Extracts tags from a file described by a `fd` file descriptor.
         * A callback `add` will be called for every extracted tag and its value.
         * @param fd a file descriptor
         * @param add a callback
         */
        extract_metadata(fd: FileDescriptor, add: FileMetadataExtractorAddTag): void;

        /**
         * Returns a subset of tags to be shown in a "summary"
         * @returns a list of tags
         */
        summary_tags(): string[];

        /**
         * Returns a list of tags, the plug-in may potentially extract from files.
         * @returns a list of tags
         */
        supported_tags(): string[];

        /**
         * Returns a localized description of a tag.
         * @param tag a tag
         * @returns a description of a tag
         */
        tag_description(tag: string): string;

        /**
         * Returns a human readable, localized name of a tag.
         * @param tag a tag
         * @returns a name of a tag
         */
        tag_name(tag: string): string;
    }


    export const FileMetadataExtractor: FileMetadataExtractorNamespace & {
        new (): FileMetadataExtractor; // This allows `obj instanceof FileMetadataExtractor`
    };

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

export default GnomeCmd;

// END
