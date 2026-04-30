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

export namespace GtkFrdp {
    /**
     * GtkFrdp-0.2
     */

    /**
     * @gir-type Enum
     */
    enum ErrConnect {
        CONNECT_CANCELLED,
        AUTHENTICATION_FAILED,
        SECURITY_NEGO_CONNECT_FAILED,
    }

    /**
     * @gir-type Flags
     */
    enum KeyEvent {
        PRESS,
        RELEASE,
    }

    /**
     * @gir-type Flags
     */
    enum MouseEvent {
        MOVE,
        DOWN,
        WHEEL,
        WHEEL_NEGATIVE,
        BUTTON1,
        BUTTON2,
        BUTTON3,
        BUTTON4,
        BUTTON5,
        HWHEEL,
    }

    namespace Display {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'rdp-auth-failure': (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-connected': () => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-disconnected': () => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-error': (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-needs-authentication': () => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-needs-certificate-change-verification': (
                arg0: string,
                arg1: number,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: string,
                arg7: string,
                arg8: string,
                arg9: number,
            ) => void;
            /**
             * @signal
             * @run-last
             */
            'rdp-needs-certificate-verification': (
                arg0: string,
                arg1: number,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: number,
            ) => void;
            'notify::allow-resize': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::resize-supported': (pspec: GObject.ParamSpec) => void;
            'notify::scaling': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            allow_resize: boolean;
            allowResize: boolean;
            domain: string;
            password: string;
            resize_supported: boolean;
            resizeSupported: boolean;
            scaling: boolean;
            username: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Display extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;

        // Properties

        /**
         * @default false
         */
        get allow_resize(): boolean;
        set allow_resize(val: boolean);
        /**
         * @default false
         */
        get allowResize(): boolean;
        set allowResize(val: boolean);
        /**
         * @default null
         */
        get domain(): string;
        set domain(val: string);
        /**
         * @default null
         */
        get password(): string;
        set password(val: string);
        /**
         * @default false
         */
        get resize_supported(): boolean;
        set resize_supported(val: boolean);
        /**
         * @default false
         */
        get resizeSupported(): boolean;
        set resizeSupported(val: boolean);
        /**
         * @default true
         */
        get scaling(): boolean;
        set scaling(val: boolean);
        /**
         * @default null
         */
        get username(): string;
        set username(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Display;

        // Signals

        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param username
         * @param password
         * @param domain
         * @virtual
         */
        vfunc_authenticate(username: string, password: string, domain: string): boolean;

        // Methods

        /**
         * @param username
         * @param password
         * @param domain
         */
        authenticate(username: string, password: string, domain: string): boolean;
        /**
         * @param username
         * @param password
         * @param domain
         */
        authenticate_finish(username: string, password: string, domain: string): void;
        /**
         * @param host
         * @param port
         * @param common_name
         * @param subject
         * @param issuer
         * @param fingerprint
         * @param old_subject
         * @param old_issuer
         * @param old_fingerprint
         * @param flags
         */
        certificate_change_verify_ex(
            host: string,
            port: number,
            common_name: string,
            subject: string,
            issuer: string,
            fingerprint: string,
            old_subject: string,
            old_issuer: string,
            old_fingerprint: string,
            flags: number,
        ): number;
        /**
         * @param verification
         */
        certificate_change_verify_ex_finish(verification: number): void;
        /**
         * @param host
         * @param port
         * @param common_name
         * @param subject
         * @param issuer
         * @param fingerprint
         * @param flags
         */
        certificate_verify_ex(
            host: string,
            port: number,
            common_name: string,
            subject: string,
            issuer: string,
            fingerprint: string,
            flags: number,
        ): number;
        /**
         * @param verification
         */
        certificate_verify_ex_finish(verification: number): void;
        /**
         * Request the closing of the RDP session.
         */
        close(): void;
        /**
         * Take a screenshot of the display.
         * @returns a {@link GdkPixbuf.Pixbuf} with the screenshot image buffer
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        is_keyboard_grabbed(): boolean;
        /**
         * Check if the connection for the display is currently open
         * @returns TRUE if open, FALSE if closing/closed
         */
        is_open(): boolean;
        /**
         * Opens a TCP connection to the given `host` litening on
         * `port`.
         * @param host the hostname or IP address
         * @param port the service name or port number
         */
        open_host(host: string, port: number): void;
        /**
         * Set whether the remote desktop contents is automatically
         * scaled to fit the available widget size, or whether it will
         * be rendered at 1:1 size
         * @param scaling TRUE to scale the desktop to fit, FALSE otherwise
         */
        set_scaling(scaling: boolean): void;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'rdp-auth-failure': (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            'rdp-connected': () => void;
            /**
             * @signal
             * @run-first
             */
            'rdp-disconnected': () => void;
            /**
             * @signal
             * @run-first
             */
            'rdp-error': (arg0: string) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::hostname': (pspec: GObject.ParamSpec) => void;
            'notify::monitor-layout-supported': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::scaling': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Gtk.Widget;
            domain: string;
            hostname: string;
            monitor_layout_supported: boolean;
            monitorLayoutSupported: boolean;
            password: string;
            port: number;
            scaling: boolean;
            username: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Properties

        get display(): Gtk.Widget;
        set display(val: Gtk.Widget);
        /**
         * @default null
         */
        get domain(): string;
        set domain(val: string);
        /**
         * @default null
         */
        get hostname(): string;
        set hostname(val: string);
        /**
         * @default false
         */
        get monitor_layout_supported(): boolean;
        set monitor_layout_supported(val: boolean);
        /**
         * @default false
         */
        get monitorLayoutSupported(): boolean;
        set monitorLayoutSupported(val: boolean);
        /**
         * @default null
         */
        get password(): string;
        set password(val: string);
        /**
         * @default 3389
         */
        get port(): number;
        set port(val: number);
        /**
         * @default true
         */
        get scaling(): boolean;
        set scaling(val: boolean);
        /**
         * @default null
         */
        get username(): string;
        set username(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: Display): Session;

        // Signals

        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        close(): void;
        /**
         * @param hostname
         * @param port
         * @param cancellable
         */
        connect(hostname: string, port: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param hostname
         * @param port
         * @param cancellable
         * @param callback
         */
        connect(
            hostname: string,
            port: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param hostname
         * @param port
         * @param cancellable
         * @param callback
         */
        connect(
            hostname: string,
            port: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * @param result
         */
        connect_finish(result: Gio.AsyncResult): boolean;
        is_open(): boolean;
        /**
         * @param event
         * @param x
         * @param y
         */
        mouse_event(event: MouseEvent, x: number, y: number): void;
        /**
         * @param enter
         */
        mouse_pointer(enter: boolean): void;
        /**
         * @param x
         * @param y
         * @param delta_x
         * @param delta_y
         */
        mouse_smooth_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;
        /**
         * @param key
         */
        send_key(key: Gdk.EventKey): void;
    }

    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;
    /**
     * @gir-type Struct
     */
    abstract class DisplayPrivate {
        static $gtype: GObject.GType<DisplayPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;
    /**
     * @gir-type Struct
     */
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;
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

export default GtkFrdp;

// END
