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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gdk from '@girs/gdk-4.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gee from '@girs/gee-0.8';

export namespace Granite {
    // Workaround
    /** @ignore */
    export module GraniteServicesSettingsSerializable {
        export interface ConstructorProps extends ServicesSettingsSerializable.ConstructorProps {}
    }
    /** @ignore */
    export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}

    /**
     * Granite-7.0
     */

    /**
     * @gir-type Struct
     */
    class ServicesContractorError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static SERVICE_NOT_AVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace SettingsPageStatusType {
        export const $gtype: GObject.GType<SettingsPageStatusType>;
    }

    /**
     * @gir-type Enum
     */
    enum SettingsPageStatusType {
        ERROR,
        OFFLINE,
        SUCCESS,
        WARNING,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    export namespace BoxSpacing {
        export const $gtype: GObject.GType<BoxSpacing>;
    }

    /**
     * @gir-type Enum
     * @since 7.7.0
     */
    enum BoxSpacing {
        NONE,
        HALF,
        SINGLE,
        DOUBLE,
        LINKED,
    }

    /**
     * @gir-type Enum
     */
    export namespace HeaderLabelSize {
        export const $gtype: GObject.GType<HeaderLabelSize>;
    }

    /**
     * @gir-type Enum
     * @since 7.7.0
     */
    enum HeaderLabelSize {
        H1,
        H2,
        H3,
        H4,
    }

    /**
     * @gir-type Enum
     */
    export namespace SettingsColorScheme {
        export const $gtype: GObject.GType<SettingsColorScheme>;
    }

    /**
     * @gir-type Enum
     */
    enum SettingsColorScheme {
        NO_PREFERENCE,
        DARK,
        LIGHT,
    }

    /**
     * @gir-type Enum
     */
    export namespace ToastDismissReason {
        export const $gtype: GObject.GType<ToastDismissReason>;
    }

    /**
     * @gir-type Enum
     * @since 7.5.0
     */
    enum ToastDismissReason {
        EXPIRED,
        CLOSED,
        WITHDRAWN,
    }

    /**
     * @since 7.7.0
     */
    const CssClassACCENT: string;
    /**
     * @since 7.7.0
     */
    const CssClassCARD: string;
    /**
     * @since 7.7.0
     */
    const CssClassCHECKERBOARD: string;
    /**
     * @since 7.7.0
     */
    const CssClassCIRCULAR: string;
    /**
     * @since 7.7.0
     */
    const CssClassDESTRUCTIVE: string;
    /**
     * @since 7.7.0
     */
    const CssClassDIM: string;
    /**
     * @since 7.7.0
     */
    const CssClassERROR: string;
    /**
     * @since 7.7.0
     */
    const CssClassNUMERIC: string;
    /**
     * @since 7.7.0
     */
    const CssClassSMALL: string;
    /**
     * @since 7.7.0
     */
    const CssClassSUGGESTED: string;
    /**
     * @since 7.7.0
     */
    const CssClassSUCCESS: string;
    /**
     * @since 7.7.0
     */
    const CssClassWARNING: string;
    /**
     * @since 7.7.0
     */
    const CssClassMONOSPACE: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriLOCATION: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriONLINE_ACCOUNTS: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriNETWORK: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriPERMISSIONS: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriNOTIFICATIONS: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriSOUND_INPUT: string;
    /**
     * @since 7.3.0
     */
    const SettingsUriSHORTCUTS: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_ACCENT: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_BACK_BUTTON: string;
    /**
     * @since 7.1.0
     */
    const STYLE_CLASS_BACKGROUND: string;
    const STYLE_CLASS_BADGE: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_CARD: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_CHECKERBOARD: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_CIRCULAR: string;
    const STYLE_CLASS_COLOR_BUTTON: string;
    const STYLE_CLASS_DEFAULT_DECORATION: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_DIALOG_CONTENT_AREA: string;
    /**
     * @since 7.1.0
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_FRAME: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_H1_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_H2_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_H3_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_H4_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_KEYCAP: string;
    const STYLE_CLASS_LARGE_ICONS: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_MODE_SWITCH: string;
    const STYLE_CLASS_OSD: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_ROUNDED: string;
    /**
     * @since 7.1.0
     */
    const STYLE_CLASS_SIDEBAR: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_SMALL_LABEL: string;
    /**
     * @since 7.5.0
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_SUCCESS: string;
    const STYLE_CLASS_TERMINAL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_TITLE_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_WARMTH: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_TEMPERATURE: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_LINKED: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_MENU: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_MENUITEM: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_DIM_LABEL: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_ERROR: string;
    const STYLE_CLASS_FLAT: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_MESSAGE_DIALOG: string;
    /**
     * @since 7.1.0
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_RICH_LIST: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_SUGGESTED_ACTION: string;
    const STYLE_CLASS_VIEW: string;
    /**
     * @deprecated since 7.7.0
     */
    const STYLE_CLASS_WARNING: string;
    const TRANSITION_DURATION_CLOSE: number;
    const TRANSITION_DURATION_IN_PLACE: number;
    const TRANSITION_DURATION_OPEN: number;
    const TOOLTIP_SECONDARY_TEXT_MARKUP: string;
    /**
     * @param is_12h
     * @param with_second
     */
    function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;
    /**
     * @param date_time
     */
    function date_time_get_relative_datetime(date_time: GLib.DateTime): string;
    /**
     * @param day1
     * @param day2
     */
    function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;
    /**
     * @param with_weekday
     * @param with_day
     * @param with_year
     */
    function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;
    /**
     * @param seconds
     */
    function date_time_seconds_to_time(seconds: number): string;
    /**
     * @param count
     */
    function services_application_set_badge(count: bigint | number): globalThis.Promise<boolean>;
    /**
     * @param count
     * @param _callback_
     */
    function services_application_set_badge(
        count: bigint | number,
        _callback_: Gio.AsyncReadyCallback<bigint | number> | null,
    ): void;
    /**
     * @param count
     * @param _callback_
     */
    function services_application_set_badge(
        count: bigint | number,
        _callback_: Gio.AsyncReadyCallback<bigint | number> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * @param _res_
     */
    function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
    /**
     * @param visible
     */
    function services_application_set_badge_visible(visible: boolean): globalThis.Promise<boolean>;
    /**
     * @param visible
     * @param _callback_
     */
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    /**
     * @param visible
     * @param _callback_
     */
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * @param _res_
     */
    function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
    /**
     * @param progress
     */
    function services_application_set_progress(progress: number): globalThis.Promise<boolean>;
    /**
     * @param progress
     * @param _callback_
     */
    function services_application_set_progress(
        progress: number,
        _callback_: Gio.AsyncReadyCallback<number> | null,
    ): void;
    /**
     * @param progress
     * @param _callback_
     */
    function services_application_set_progress(
        progress: number,
        _callback_: Gio.AsyncReadyCallback<number> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * @param _res_
     */
    function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
    /**
     * @param visible
     */
    function services_application_set_progress_visible(visible: boolean): globalThis.Promise<boolean>;
    /**
     * @param visible
     * @param _callback_
     */
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    /**
     * @param visible
     * @param _callback_
     */
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * @param _res_
     */
    function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;
    /**
     * @param window
     * @param color
     * @param priority
     * @deprecated since 7.7.0
     */
    function widgets_utils_set_color_primary(
        window: Gtk.Widget,
        color: Gdk.RGBA,
        priority: number,
    ): Gtk.CssProvider | null;
    function box_spacing_to_string(): string;
    function header_label_size_to_string(): string;
    /**
     * @since 7.2.0
     */
    function init(): void;
    /**
     * @param accel
     */
    function accel_to_string(accel: string | null): string;
    /**
     * @param accels
     * @param description
     */
    function markup_accel_tooltip(accels: string[] | null, description: string | null): string;
    /**
     * @param bg_color
     */
    function contrasting_foreground_color(bg_color: Gdk.RGBA): Gdk.RGBA;
    namespace ServicesContractorProxy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'contracts-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ServicesContractorProxy extends GObject.Object {
        static $gtype: GObject.GType<ServicesContractorProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesContractorProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesContractorProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesContractorProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_instance(): ServicesContractorProxy;
        static get_all_contracts(): Gee.List;
        /**
         * @param mime_type
         */
        static get_contracts_by_mime(mime_type: string): Gee.List;
        /**
         * @param mime_types
         */
        static get_contracts_by_mimelist(mime_types: string[]): Gee.List;
        /**
         * @param file
         */
        static get_contracts_for_file(file: Gio.File): Gee.List;
        /**
         * @param files
         */
        static get_contracts_for_files(files: Gio.File[]): Gee.List;
    }

    namespace ServicesSystem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ServicesSystem extends GObject.Object {
        static $gtype: GObject.GType<ServicesSystem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesSystem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServicesSystem;

        // Signals

        /** @signal */
        connect<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesSystem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static history_is_enabled(): boolean;
    }

    namespace StyleManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_scheme: SettingsColorScheme;
            colorScheme: SettingsColorScheme;
            display: Gdk.Display;
        }
    }

    /**
     * @gir-type Class
     * @since 7.7.0
     */
    class StyleManager extends GObject.Object {
        static $gtype: GObject.GType<StyleManager>;

        // Properties

        get color_scheme(): SettingsColorScheme;
        set color_scheme(val: SettingsColorScheme);
        get colorScheme(): SettingsColorScheme;
        set colorScheme(val: SettingsColorScheme);
        /**
         * @construct-only
         */
        get display(): Gdk.Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): StyleManager;
        /**
         * @param display
         */
        static get_for_display(display: Gdk.Display): StyleManager;

        // Methods

        get_color_scheme(): SettingsColorScheme;
        /**
         * @param value
         */
        set_color_scheme(value: SettingsColorScheme): void;
        get_display(): Gdk.Display;
    }

    namespace SettingsPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::status-type': (pspec: GObject.ParamSpec) => void;
            'notify::display-widget': (pspec: GObject.ParamSpec) => void;
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            status_type: SettingsPageStatusType;
            statusType: SettingsPageStatusType;
            display_widget: Gtk.Widget | null;
            displayWidget: Gtk.Widget;
            header: string | null;
            status: string;
            icon_name: string | null;
            iconName: string;
            title: string;
            child: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     * @deprecated since 7.5.0
     */
    abstract class SettingsPage extends Gtk.Box {
        static $gtype: GObject.GType<SettingsPage>;

        // Properties

        get status_type(): SettingsPageStatusType;
        set status_type(val: SettingsPageStatusType);
        get statusType(): SettingsPageStatusType;
        set statusType(val: SettingsPageStatusType);
        /**
         * @construct-only
         */
        get display_widget(): Gtk.Widget | null;
        /**
         * @construct-only
         */
        get displayWidget(): Gtk.Widget;
        /**
         * @construct-only
         */
        get header(): string | null;
        get status(): string;
        set status(val: string);
        get icon_name(): string | null;
        set icon_name(val: string | null);
        get iconName(): string;
        set iconName(val: string);
        get title(): string;
        set title(val: string);
        get child(): Gtk.Widget;
        set child(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_status_type(): SettingsPageStatusType;
        /**
         * @param value
         */
        set_status_type(value: SettingsPageStatusType): void;
        get_display_widget(): Gtk.Widget | null;
        get_header(): string | null;
        get_status(): string;
        /**
         * @param value
         */
        set_status(value: string): void;
        get_icon_name(): string | null;
        /**
         * @param value
         */
        set_icon_name(value: string | null): void;
        get_title(): string;
        /**
         * @param value
         */
        set_title(value: string): void;
        get_child(): Gtk.Widget;
        /**
         * @param value
         */
        set_child(value: Gtk.Widget): void;
    }

    namespace SimpleSettingsPage {
        // Signal signatures
        interface SignalSignatures extends SettingsPage.SignalSignatures {
            'notify::action-area': (pspec: GObject.ParamSpec) => void;
            'notify::content-area': (pspec: GObject.ParamSpec) => void;
            'notify::status-switch': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::status-type': (pspec: GObject.ParamSpec) => void;
            'notify::display-widget': (pspec: GObject.ParamSpec) => void;
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SettingsPage.ConstructorProps {
            action_area: Gtk.Box;
            actionArea: Gtk.Box;
            content_area: Gtk.Grid;
            contentArea: Gtk.Grid;
            status_switch: Gtk.Switch | null;
            statusSwitch: Gtk.Switch;
            activatable: boolean;
            description: string;
        }
    }

    /**
     * @gir-type Class
     * @deprecated since 7.5.0
     */
    abstract class SimpleSettingsPage extends SettingsPage {
        static $gtype: GObject.GType<SimpleSettingsPage>;

        // Properties

        /**
         * @construct-only
         */
        get action_area(): Gtk.Box;
        /**
         * @construct-only
         */
        get actionArea(): Gtk.Box;
        /**
         * @construct-only
         */
        get content_area(): Gtk.Grid;
        /**
         * @construct-only
         */
        get contentArea(): Gtk.Grid;
        /**
         * @construct-only
         */
        get status_switch(): Gtk.Switch | null;
        /**
         * @construct-only
         */
        get statusSwitch(): Gtk.Switch;
        /**
         * @construct-only
         */
        get activatable(): boolean;
        get description(): string;
        set description(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleSettingsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleSettingsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleSettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_action_area(): Gtk.Box;
        get_content_area(): Gtk.Grid;
        get_status_switch(): Gtk.Switch | null;
        get_activatable(): boolean;
        get_description(): string;
        /**
         * @param value
         */
        set_description(value: string): void;
    }

    namespace AccelLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::accel-string': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            action_name: string;
            actionName: string;
            accel_string: string | null;
            accelString: string;
            label: string;
        }
    }

    /**
     * @gir-type Class
     */
    class AccelLabel extends Gtk.Box {
        static $gtype: GObject.GType<AccelLabel>;

        // Properties

        get action_name(): string;
        set action_name(val: string);
        get actionName(): string;
        set actionName(val: string);
        get accel_string(): string | null;
        set accel_string(val: string | null);
        get accelString(): string;
        set accelString(val: string);
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AccelLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AccelLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string, accel_string: string | null): AccelLabel;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        static from_action_name(label: string, action_name: string): AccelLabel;

        // Signals

        /** @signal */
        connect<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AccelLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_action_name(): string;
        /**
         * @param value
         */
        set_action_name(value: string): void;
        get_accel_string(): string | null;
        /**
         * @param value
         */
        set_accel_string(value: string | null): void;
        get_label(): string;
        /**
         * @param value
         */
        set_label(value: string): void;
    }

    namespace BackButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Button.ConstructorProps {
            label: string | any;
        }
    }

    /**
     * @gir-type Class
     * @since 7.7.0
     */
    class BackButton extends Gtk.Button {
        static $gtype: GObject.GType<BackButton>;

        // Properties

        // This accessor conflicts with another accessor's type in a parent class or interface.
        get label(): string | any;
        // This accessor conflicts with another accessor's type in a parent class or interface.
        set label(val: string | any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string): BackButton;
        // Conflicted with Gtk.Button.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof BackButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_label(): string;
        /**
         * @param args
         */
        // Conflicted with Gtk.Button.get_label
        get_label(...args: never[]): any;
        /**
         * @param value
         */
        set_label(value: string): void;
    }

    namespace Bin {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            child: Gtk.Widget | null;
        }
    }

    /**
     * @gir-type Class
     * @since 7.6.0
     */
    class Bin extends Gtk.Widget {
        static $gtype: GObject.GType<Bin>;

        // Properties

        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bin;

        // Signals

        /** @signal */
        connect<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_child(): Gtk.Widget | null;
        /**
         * @param value
         */
        set_child(value: Gtk.Widget | null): void;
    }

    namespace Box {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::child-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            child_spacing: BoxSpacing;
            childSpacing: BoxSpacing;
        }
    }

    /**
     * @gir-type Class
     * @since 7.7.0
     */
    class Box extends Gtk.Box {
        static $gtype: GObject.GType<Box>;

        // Properties

        get child_spacing(): BoxSpacing;
        set child_spacing(val: BoxSpacing);
        get childSpacing(): BoxSpacing;
        set childSpacing(val: BoxSpacing);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Box.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Box.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, child_spacing: BoxSpacing): Box;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Box.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Box.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Box.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Box.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_child_spacing(): BoxSpacing;
        /**
         * @param value
         */
        set_child_spacing(value: BoxSpacing): void;
    }

    namespace DatePicker {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::extra-menu': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-primary-text': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Gtk.Buildable.ConstructorProps {
            format: string;
            date: GLib.DateTime;
        }
    }

    /**
     * @gir-type Class
     */
    class DatePicker extends Gtk.Entry implements Gtk.Buildable {
        static $gtype: GObject.GType<DatePicker>;

        // Properties

        /**
         * @construct-only
         */
        get format(): string;
        get date(): GLib.DateTime;
        set date(val: GLib.DateTime);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DatePicker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DatePicker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_format(format: string): DatePicker;

        static ['new'](): DatePicker;

        // Signals

        /** @signal */
        connect<K extends keyof DatePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatePicker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DatePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatePicker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DatePicker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DatePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_format(): string;
        get_date(): GLib.DateTime;
        /**
         * @param value
         */
        set_date(value: GLib.DateTime): void;
    }

    namespace Dialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::focus-widget': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreened': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::handle-menubar-accel': (pspec: GObject.ParamSpec) => void;
            'notify::hide-on-close': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::suspended': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::titlebar': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Dialog extends Gtk.Dialog {
        static $gtype: GObject.GType<Dialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dialog;

        // Signals

        /** @signal */
        connect<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param button_text
         * @param response_id
         */
        add_button(button_text: string, response_id: number): Gtk.Widget;
        /**
         * @param args
         */
        // Conflicted with Gtk.Dialog.add_button
        add_button(...args: never[]): any;
    }

    namespace HeaderLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonic-widget': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::ellipsize': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            label: string;
            mnemonic_widget: Gtk.Widget | null;
            mnemonicWidget: Gtk.Widget;
            size: HeaderLabelSize;
            ellipsize: Pango.EllipsizeMode;
            secondary_text: string | null;
            secondaryText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class HeaderLabel extends Gtk.Widget {
        static $gtype: GObject.GType<HeaderLabel>;

        // Properties

        get label(): string;
        set label(val: string);
        /**
         * @since 7.4.0
         */
        get mnemonic_widget(): Gtk.Widget | null;
        set mnemonic_widget(val: Gtk.Widget | null);
        /**
         * @since 7.4.0
         */
        get mnemonicWidget(): Gtk.Widget;
        set mnemonicWidget(val: Gtk.Widget);
        /**
         * @since 7.7.0
         */
        get size(): HeaderLabelSize;
        set size(val: HeaderLabelSize);
        /**
         * @since 7.8.0
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);
        /**
         * @since 7.1.0
         */
        get secondary_text(): string | null;
        set secondary_text(val: string | null);
        /**
         * @since 7.1.0
         */
        get secondaryText(): string;
        set secondaryText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HeaderLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string): HeaderLabel;

        // Signals

        /** @signal */
        connect<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HeaderLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_label(): string;
        /**
         * @param value
         */
        set_label(value: string): void;
        get_mnemonic_widget(): Gtk.Widget | null;
        /**
         * @param value
         */
        set_mnemonic_widget(value: Gtk.Widget | null): void;
        get_size(): HeaderLabelSize;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_size
        get_size(...args: never[]): any;
        /**
         * @param value
         */
        set_size(value: HeaderLabelSize): void;
        get_ellipsize(): Pango.EllipsizeMode;
        /**
         * @param value
         */
        set_ellipsize(value: Pango.EllipsizeMode): void;
        get_secondary_text(): string | null;
        /**
         * @param value
         */
        set_secondary_text(value: string | null): void;
    }

    namespace HyperTextView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::extra-menu': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.TextView.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HyperTextView extends Gtk.TextView {
        static $gtype: GObject.GType<HyperTextView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HyperTextView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HyperTextView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HyperTextView;

        // Signals

        /** @signal */
        connect<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HyperTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ListItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::menu-model': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            text: string;
            description: string | null;
            child: Gtk.Widget | null;
            menu_model: Gio.MenuModel | null;
            menuModel: Gio.MenuModel;
        }
    }

    /**
     * @gir-type Class
     * @since 7.7.0
     */
    class ListItem extends Gtk.Widget {
        static $gtype: GObject.GType<ListItem>;

        // Properties

        get text(): string;
        set text(val: string);
        get description(): string | null;
        set description(val: string | null);
        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);
        /**
         * @since 7.8.0
         */
        get menu_model(): Gio.MenuModel | null;
        set menu_model(val: Gio.MenuModel | null);
        /**
         * @since 7.8.0
         */
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ListItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ListItem;

        // Signals

        /** @signal */
        connect<K extends keyof ListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ListItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ListItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_text(): string;
        /**
         * @param value
         */
        set_text(value: string): void;
        get_description(): string | null;
        /**
         * @param value
         */
        set_description(value: string | null): void;
        get_child(): Gtk.Widget | null;
        /**
         * @param value
         */
        set_child(value: Gtk.Widget | null): void;
        get_menu_model(): Gio.MenuModel | null;
        /**
         * @param value
         */
        set_menu_model(value: Gio.MenuModel | null): void;
    }

    namespace MessageDialog {
        // Signal signatures
        interface SignalSignatures extends Dialog.SignalSignatures {
            'notify::primary-text': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::image-icon': (pspec: GObject.ParamSpec) => void;
            'notify::badge-icon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-label': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-label': (pspec: GObject.ParamSpec) => void;
            'notify::buttons': (pspec: GObject.ParamSpec) => void;
            'notify::custom-bin': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::focus-widget': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreened': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::handle-menubar-accel': (pspec: GObject.ParamSpec) => void;
            'notify::hide-on-close': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::suspended': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::titlebar': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Dialog.ConstructorProps {
            primary_text: string;
            primaryText: string;
            secondary_text: string;
            secondaryText: string;
            image_icon: Gio.Icon;
            imageIcon: Gio.Icon;
            badge_icon: Gio.Icon;
            badgeIcon: Gio.Icon;
            primary_label: Gtk.Label;
            primaryLabel: Gtk.Label;
            secondary_label: Gtk.Label;
            secondaryLabel: Gtk.Label;
            buttons: Gtk.ButtonsType;
            custom_bin: Gtk.Box;
            customBin: Gtk.Box;
        }
    }

    /**
     * @gir-type Class
     */
    class MessageDialog extends Dialog {
        static $gtype: GObject.GType<MessageDialog>;

        // Properties

        get primary_text(): string;
        set primary_text(val: string);
        get primaryText(): string;
        set primaryText(val: string);
        get secondary_text(): string;
        set secondary_text(val: string);
        get secondaryText(): string;
        set secondaryText(val: string);
        get image_icon(): Gio.Icon;
        set image_icon(val: Gio.Icon);
        get imageIcon(): Gio.Icon;
        set imageIcon(val: Gio.Icon);
        get badge_icon(): Gio.Icon;
        set badge_icon(val: Gio.Icon);
        get badgeIcon(): Gio.Icon;
        set badgeIcon(val: Gio.Icon);
        /**
         * @construct-only
         */
        get primary_label(): Gtk.Label;
        /**
         * @construct-only
         */
        get primaryLabel(): Gtk.Label;
        /**
         * @construct-only
         */
        get secondary_label(): Gtk.Label;
        /**
         * @construct-only
         */
        get secondaryLabel(): Gtk.Label;
        /**
         * @construct-only
         */
        set buttons(val: Gtk.ButtonsType);
        /**
         * @construct-only
         */
        get custom_bin(): Gtk.Box;
        /**
         * @construct-only
         */
        get customBin(): Gtk.Box;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            primary_text: string,
            secondary_text: string,
            image_icon: Gio.Icon,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;
        // Conflicted with Granite.Dialog.new

        static ['new'](...args: never[]): any;

        static with_image_from_icon_name(
            primary_text: string,
            secondary_text: string,
            image_icon_name: string,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        // Signals

        /** @signal */
        connect<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_primary_text(): string;
        /**
         * @param value
         */
        set_primary_text(value: string): void;
        get_secondary_text(): string;
        /**
         * @param value
         */
        set_secondary_text(value: string): void;
        get_image_icon(): Gio.Icon;
        /**
         * @param value
         */
        set_image_icon(value: Gio.Icon): void;
        get_badge_icon(): Gio.Icon;
        /**
         * @param value
         */
        set_badge_icon(value: Gio.Icon): void;
        get_primary_label(): Gtk.Label;
        get_secondary_label(): Gtk.Label;
        get_custom_bin(): Gtk.Box;
        /**
         * @param error_message
         */
        show_error_details(error_message: string): void;
    }

    namespace ModeSwitch {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            active: boolean;
            primary_icon_gicon: Gio.Icon;
            primaryIconGicon: Gio.Icon;
            primary_icon_name: string;
            primaryIconName: string;
            primary_icon_tooltip_text: string;
            primaryIconTooltipText: string;
            secondary_icon_gicon: Gio.Icon;
            secondaryIconGicon: Gio.Icon;
            secondary_icon_name: string;
            secondaryIconName: string;
            secondary_icon_tooltip_text: string;
            secondaryIconTooltipText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ModeSwitch extends Gtk.Box {
        static $gtype: GObject.GType<ModeSwitch>;

        // Properties

        get active(): boolean;
        set active(val: boolean);
        get primary_icon_gicon(): Gio.Icon;
        set primary_icon_gicon(val: Gio.Icon);
        get primaryIconGicon(): Gio.Icon;
        set primaryIconGicon(val: Gio.Icon);
        get primary_icon_name(): string;
        set primary_icon_name(val: string);
        get primaryIconName(): string;
        set primaryIconName(val: string);
        get primary_icon_tooltip_text(): string;
        set primary_icon_tooltip_text(val: string);
        get primaryIconTooltipText(): string;
        set primaryIconTooltipText(val: string);
        get secondary_icon_gicon(): Gio.Icon;
        set secondary_icon_gicon(val: Gio.Icon);
        get secondaryIconGicon(): Gio.Icon;
        set secondaryIconGicon(val: Gio.Icon);
        get secondary_icon_name(): string;
        set secondary_icon_name(val: string);
        get secondaryIconName(): string;
        set secondaryIconName(val: string);
        get secondary_icon_tooltip_text(): string;
        set secondary_icon_tooltip_text(val: string);
        get secondaryIconTooltipText(): string;
        set secondaryIconTooltipText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModeSwitch.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModeSwitch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;

        // Signals

        /** @signal */
        connect<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModeSwitch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active(): boolean;
        /**
         * @param value
         */
        set_active(value: boolean): void;
        get_primary_icon_gicon(): Gio.Icon;
        /**
         * @param value
         */
        set_primary_icon_gicon(value: Gio.Icon): void;
        get_primary_icon_name(): string;
        /**
         * @param value
         */
        set_primary_icon_name(value: string): void;
        get_primary_icon_tooltip_text(): string;
        /**
         * @param value
         */
        set_primary_icon_tooltip_text(value: string): void;
        get_secondary_icon_gicon(): Gio.Icon;
        /**
         * @param value
         */
        set_secondary_icon_gicon(value: Gio.Icon): void;
        get_secondary_icon_name(): string;
        /**
         * @param value
         */
        set_secondary_icon_name(value: string): void;
        get_secondary_icon_tooltip_text(): string;
        /**
         * @param value
         */
        set_secondary_icon_tooltip_text(value: string): void;
    }

    namespace OverlayBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::overlay': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            overlay: Gtk.Overlay | null;
            label: string;
            active: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class OverlayBar extends Gtk.Widget {
        static $gtype: GObject.GType<OverlayBar>;

        // Properties

        /**
         * @construct-only
         */
        get overlay(): Gtk.Overlay | null;
        get label(): string;
        set label(val: string);
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OverlayBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OverlayBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](overlay: Gtk.Overlay | null): OverlayBar;

        // Signals

        /** @signal */
        connect<K extends keyof OverlayBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OverlayBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OverlayBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OverlayBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OverlayBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OverlayBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_overlay(): Gtk.Overlay | null;
        get_label(): string;
        /**
         * @param value
         */
        set_label(value: string): void;
        get_active(): boolean;
        /**
         * @param value
         */
        set_active(value: boolean): void;
    }

    namespace Placeholder {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            title: string;
            description: string;
            icon: Gio.Icon;
        }
    }

    /**
     * @gir-type Class
     */
    class Placeholder extends Gtk.Widget {
        static $gtype: GObject.GType<Placeholder>;

        // Properties

        get title(): string;
        set title(val: string);
        get description(): string;
        set description(val: string);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Placeholder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Placeholder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string): Placeholder;

        // Signals

        /** @signal */
        connect<K extends keyof Placeholder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Placeholder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Placeholder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Placeholder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
        /**
         * @param value
         */
        set_title(value: string): void;
        get_description(): string;
        /**
         * @param value
         */
        set_description(value: string): void;
        get_icon(): Gio.Icon;
        /**
         * @param value
         */
        set_icon(value: Gio.Icon): void;
        /**
         * @param icon
         * @param label
         * @param description
         */
        append_button(icon: Gio.Icon, label: string, description: string): Gtk.Button;
    }

    namespace SettingsSidebar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::stack': (pspec: GObject.ParamSpec) => void;
            'notify::visible-child-name': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            stack: Gtk.Stack;
            visible_child_name: string | null;
            visibleChildName: string;
        }
    }

    /**
     * @gir-type Class
     * @deprecated since 7.5.0
     */
    class SettingsSidebar extends Gtk.Widget {
        static $gtype: GObject.GType<SettingsSidebar>;

        // Properties

        /**
         * @construct-only
         */
        get stack(): Gtk.Stack;
        get visible_child_name(): string | null;
        set visible_child_name(val: string | null);
        get visibleChildName(): string;
        set visibleChildName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsSidebar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsSidebar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stack: Gtk.Stack): SettingsSidebar;

        // Signals

        /** @signal */
        connect<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsSidebar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_stack(): Gtk.Stack;
        get_visible_child_name(): string | null;
        /**
         * @param value
         */
        set_visible_child_name(value: string | null): void;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::accent-color': (pspec: GObject.ParamSpec) => void;
            'notify::prefers-color-scheme': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accent_color: Gdk.RGBA;
            accentColor: Gdk.RGBA;
            prefers_color_scheme: SettingsColorScheme;
            prefersColorScheme: SettingsColorScheme;
        }
    }

    /**
     * @gir-type Class
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * @since 7.7.0
         */
        get accent_color(): Gdk.RGBA;
        set accent_color(val: Gdk.RGBA);
        /**
         * @since 7.7.0
         */
        get accentColor(): Gdk.RGBA;
        set accentColor(val: Gdk.RGBA);
        get prefers_color_scheme(): SettingsColorScheme;
        set prefers_color_scheme(val: SettingsColorScheme);
        get prefersColorScheme(): SettingsColorScheme;
        set prefersColorScheme(val: SettingsColorScheme);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Settings;

        // Methods

        get_accent_color(): Gdk.RGBA;
        get_prefers_color_scheme(): SettingsColorScheme;
    }

    namespace SwitchModelButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::can-shrink': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps {
            text: string;
            description: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class SwitchModelButton extends Gtk.ToggleButton {
        static $gtype: GObject.GType<SwitchModelButton>;

        // Properties

        get text(): string;
        set text(val: string);
        get description(): string | null;
        set description(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwitchModelButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwitchModelButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string): SwitchModelButton;
        // Conflicted with Gtk.ToggleButton.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwitchModelButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_text(): string;
        /**
         * @param value
         */
        set_text(value: string): void;
        get_description(): string | null;
        /**
         * @param value
         */
        set_description(value: string | null): void;
    }

    namespace TimePicker {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            /**
             * @signal
             */
            'time-changed': () => void;
            'notify::format-12': (pspec: GObject.ParamSpec) => void;
            'notify::format12': (pspec: GObject.ParamSpec) => void;
            'notify::format-24': (pspec: GObject.ParamSpec) => void;
            'notify::format24': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::extra-menu': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-primary-text': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            format_12: string;
            format12: string;
            format_24: string;
            format24: string;
            time: GLib.DateTime;
        }
    }

    /**
     * @gir-type Class
     */
    class TimePicker extends Gtk.Entry {
        static $gtype: GObject.GType<TimePicker>;

        // Properties

        /**
         * @construct-only
         */
        get format_12(): string;
        /**
         * @construct-only
         */
        get format12(): string;
        /**
         * @construct-only
         */
        get format_24(): string;
        /**
         * @construct-only
         */
        get format24(): string;
        get time(): GLib.DateTime;
        set time(val: GLib.DateTime);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TimePicker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TimePicker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_format(format_12: string, format_24: string): TimePicker;

        static ['new'](): TimePicker;

        // Signals

        /** @signal */
        connect<K extends keyof TimePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimePicker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TimePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimePicker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TimePicker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TimePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_format_12(): string;
        get_format_24(): string;
        get_time(): GLib.DateTime;
        /**
         * @param value
         */
        set_time(value: GLib.DateTime): void;
    }

    namespace ToolBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps {
            content: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     * @since 7.7.0
     */
    class ToolBox extends Gtk.Widget implements Gtk.Accessible {
        static $gtype: GObject.GType<ToolBox>;

        // Properties

        get content(): Gtk.Widget;
        set content(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ToolBox.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ToolBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ToolBox;

        // Signals

        /** @signal */
        connect<K extends keyof ToolBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToolBox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ToolBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ToolBox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ToolBox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ToolBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_content(): Gtk.Widget;
        /**
         * @param value
         */
        set_content(value: Gtk.Widget): void;
        /**
         * @param widget
         */
        add_top_bar(widget: Gtk.Widget): void;
        /**
         * @param widget
         */
        add_bottom_bar(widget: Gtk.Widget): void;
        /**
         * @param widget
         */
        remove(widget: Gtk.Widget): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible identifier for the accessible object.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         *
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
    }

    namespace Toast {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @deprecated since 7.5.0
             */
            closed: () => void;
            /**
             * @signal
             */
            dismissed: (arg0: ToastDismissReason) => void;
            /**
             * @signal
             */
            'default-action': () => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Toast extends Gtk.Widget {
        static $gtype: GObject.GType<Toast>;

        // Properties

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Toast.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Toast.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string): Toast;

        // Signals

        /** @signal */
        connect<K extends keyof Toast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Toast.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Toast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Toast.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Toast.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Toast.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
        /**
         * @param value
         */
        set_title(value: string): void;
        /**
         * @param label
         */
        set_default_action(label: string | null): void;
        send_notification(): void;
        withdraw(): void;
    }

    namespace ValidatedEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'notify::is-valid': (pspec: GObject.ParamSpec) => void;
            'notify::min-length': (pspec: GObject.ParamSpec) => void;
            'notify::regex': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::extra-menu': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-primary-text': (pspec: GObject.ParamSpec) => void;
            'notify::menu-entry-icon-secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            is_valid: boolean;
            isValid: boolean;
            min_length: number;
            minLength: number;
            regex: GLib.Regex;
        }
    }

    /**
     * @gir-type Class
     */
    class ValidatedEntry extends Gtk.Entry {
        static $gtype: GObject.GType<ValidatedEntry>;

        // Properties

        get is_valid(): boolean;
        set is_valid(val: boolean);
        get isValid(): boolean;
        set isValid(val: boolean);
        get min_length(): number;
        set min_length(val: number);
        get minLength(): number;
        set minLength(val: number);
        get regex(): GLib.Regex;
        set regex(val: GLib.Regex);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ValidatedEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ValidatedEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static from_regex(regex_arg: GLib.Regex): ValidatedEntry;

        static ['new'](): ValidatedEntry;

        // Signals

        /** @signal */
        connect<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ValidatedEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_is_valid(): boolean;
        /**
         * @param value
         */
        set_is_valid(value: boolean): void;
        get_min_length(): number;
        /**
         * @param value
         */
        set_min_length(value: number): void;
        get_regex(): GLib.Regex;
        /**
         * @param value
         */
        set_regex(value: GLib.Regex): void;
    }

    /**
     * @gir-type Alias
     */
    type ServicesContractorProxyClass = typeof ServicesContractorProxy;
    /**
     * @gir-type Struct
     */
    abstract class ServicesContractorProxyPrivate {
        static $gtype: GObject.GType<ServicesContractorProxyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServicesSystemClass = typeof ServicesSystem;
    /**
     * @gir-type Struct
     */
    abstract class ServicesSystemPrivate {
        static $gtype: GObject.GType<ServicesSystemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServicesContractIface = typeof ServicesContract;
    /**
     * @gir-type Alias
     */
    type ServicesSettingsSerializableIface = typeof ServicesSettingsSerializable;
    /**
     * @gir-type Alias
     */
    type StyleManagerClass = typeof StyleManager;
    /**
     * @gir-type Struct
     */
    abstract class StyleManagerPrivate {
        static $gtype: GObject.GType<StyleManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SettingsPageClass = typeof SettingsPage;
    /**
     * @gir-type Struct
     */
    abstract class SettingsPagePrivate {
        static $gtype: GObject.GType<SettingsPagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SimpleSettingsPageClass = typeof SimpleSettingsPage;
    /**
     * @gir-type Struct
     */
    abstract class SimpleSettingsPagePrivate {
        static $gtype: GObject.GType<SimpleSettingsPagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AccelLabelClass = typeof AccelLabel;
    /**
     * @gir-type Struct
     */
    abstract class AccelLabelPrivate {
        static $gtype: GObject.GType<AccelLabelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BackButtonClass = typeof BackButton;
    /**
     * @gir-type Struct
     */
    abstract class BackButtonPrivate {
        static $gtype: GObject.GType<BackButtonPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BinClass = typeof Bin;
    /**
     * @gir-type Struct
     */
    abstract class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BoxClass = typeof Box;
    /**
     * @gir-type Struct
     */
    abstract class BoxPrivate {
        static $gtype: GObject.GType<BoxPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DatePickerClass = typeof DatePicker;
    /**
     * @gir-type Struct
     */
    abstract class DatePickerPrivate {
        static $gtype: GObject.GType<DatePickerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DialogClass = typeof Dialog;
    /**
     * @gir-type Struct
     */
    abstract class DialogPrivate {
        static $gtype: GObject.GType<DialogPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HeaderLabelClass = typeof HeaderLabel;
    /**
     * @gir-type Struct
     */
    abstract class HeaderLabelPrivate {
        static $gtype: GObject.GType<HeaderLabelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HyperTextViewClass = typeof HyperTextView;
    /**
     * @gir-type Struct
     */
    abstract class HyperTextViewPrivate {
        static $gtype: GObject.GType<HyperTextViewPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ListItemClass = typeof ListItem;
    /**
     * @gir-type Struct
     */
    abstract class ListItemPrivate {
        static $gtype: GObject.GType<ListItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MessageDialogClass = typeof MessageDialog;
    /**
     * @gir-type Struct
     */
    abstract class MessageDialogPrivate {
        static $gtype: GObject.GType<MessageDialogPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ModeSwitchClass = typeof ModeSwitch;
    /**
     * @gir-type Struct
     */
    abstract class ModeSwitchPrivate {
        static $gtype: GObject.GType<ModeSwitchPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OverlayBarClass = typeof OverlayBar;
    /**
     * @gir-type Struct
     */
    abstract class OverlayBarPrivate {
        static $gtype: GObject.GType<OverlayBarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlaceholderClass = typeof Placeholder;
    /**
     * @gir-type Struct
     */
    abstract class PlaceholderPrivate {
        static $gtype: GObject.GType<PlaceholderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SettingsSidebarClass = typeof SettingsSidebar;
    /**
     * @gir-type Struct
     */
    abstract class SettingsSidebarPrivate {
        static $gtype: GObject.GType<SettingsSidebarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;
    /**
     * @gir-type Struct
     */
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SwitchModelButtonClass = typeof SwitchModelButton;
    /**
     * @gir-type Struct
     */
    abstract class SwitchModelButtonPrivate {
        static $gtype: GObject.GType<SwitchModelButtonPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TimePickerClass = typeof TimePicker;
    /**
     * @gir-type Struct
     */
    abstract class TimePickerPrivate {
        static $gtype: GObject.GType<TimePickerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ToolBoxClass = typeof ToolBox;
    /**
     * @gir-type Struct
     */
    abstract class ToolBoxPrivate {
        static $gtype: GObject.GType<ToolBoxPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ToastClass = typeof Toast;
    /**
     * @gir-type Struct
     */
    abstract class ToastPrivate {
        static $gtype: GObject.GType<ToastPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ValidatedEntryClass = typeof ValidatedEntry;
    /**
     * @gir-type Struct
     */
    abstract class ValidatedEntryPrivate {
        static $gtype: GObject.GType<ValidatedEntryPrivate>;
    }

    namespace ServicesContract {
        /**
         * Interface for implementing ServicesContract.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_display_name(): string;
            /**
             * @virtual
             */
            vfunc_get_description(): string;
            /**
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon;
            /**
             * @param file
             * @virtual
             */
            vfunc_execute_with_file(file: Gio.File): void;
            /**
             * @param files
             * @virtual
             */
            vfunc_execute_with_files(files: Gio.File[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServicesContractNamespace {
        $gtype: GObject.GType<ServicesContract>;
        prototype: ServicesContract;
    }
    /**
     * @gir-type Interface
     */
    interface ServicesContract extends GObject.Object, ServicesContract.Interface {
        // Methods

        get_display_name(): string;
        get_description(): string;
        get_icon(): Gio.Icon;
        /**
         * @param file
         */
        execute_with_file(file: Gio.File): void;
        /**
         * @param files
         */
        execute_with_files(files: Gio.File[]): void;
    }

    export const ServicesContract: ServicesContractNamespace & {
        new (): ServicesContract; // This allows `obj instanceof ServicesContract`
    };

    namespace ServicesSettingsSerializable {
        /**
         * Interface for implementing ServicesSettingsSerializable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_settings_serialize(): string;
            /**
             * @param s
             * @virtual
             */
            vfunc_settings_deserialize(s: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServicesSettingsSerializableNamespace {
        $gtype: GObject.GType<ServicesSettingsSerializable>;
        prototype: ServicesSettingsSerializable;
    }
    /**
     * @gir-type Interface
     */
    interface ServicesSettingsSerializable extends GObject.Object, ServicesSettingsSerializable.Interface {
        // Methods

        settings_serialize(): string;
        /**
         * @param s
         */
        settings_deserialize(s: string): void;
    }

    export const ServicesSettingsSerializable: ServicesSettingsSerializableNamespace & {
        new (): ServicesSettingsSerializable; // This allows `obj instanceof ServicesSettingsSerializable`
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

export default Granite;

// END
