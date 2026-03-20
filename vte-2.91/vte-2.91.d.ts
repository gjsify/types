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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Vte {
    /**
     * Vte-2.91
     */

    /**
     * @gir-type Enum
     */
    export namespace Align {
        export const $gtype: GObject.GType<Align>;
    }

    /**
     * An enumeration type that can be used to specify how the terminal
     * uses extra allocated space.
     * @gir-type Enum
     * @since 0.76
     */
    enum Align {
        /**
         * align to left/top
         */
        START,
        /**
         * align to centre
         */
        CENTER,
        /**
         * align to right/bottom
         */
        END,
    }

    /**
     * @gir-type Enum
     */
    export namespace CursorBlinkMode {
        export const $gtype: GObject.GType<CursorBlinkMode>;
    }

    /**
     * An enumerated type which can be used to indicate the cursor blink mode
     * for the terminal.
     * @gir-type Enum
     */
    enum CursorBlinkMode {
        /**
         * Follow GTK+ settings for cursor blinking.
         */
        SYSTEM,
        /**
         * Cursor blinks.
         */
        ON,
        /**
         * Cursor does not blink.
         */
        OFF,
    }

    /**
     * @gir-type Enum
     */
    export namespace CursorShape {
        export const $gtype: GObject.GType<CursorShape>;
    }

    /**
     * An enumerated type which can be used to indicate what should the terminal
     * draw at the cursor position.
     * @gir-type Enum
     */
    enum CursorShape {
        /**
         * Draw a block cursor.  This is the default.
         */
        BLOCK,
        /**
         * Draw a vertical bar on the left side of character.
         * This is similar to the default cursor for other GTK+ widgets.
         */
        IBEAM,
        /**
         * Draw a horizontal bar below the character.
         */
        UNDERLINE,
    }

    /**
     * @gir-type Enum
     */
    export namespace EraseBinding {
        export const $gtype: GObject.GType<EraseBinding>;
    }

    /**
     * An enumerated type which can be used to indicate which string the terminal
     * should send to an application when the user presses the Delete or Backspace
     * keys.
     * @gir-type Enum
     */
    enum EraseBinding {
        /**
         * For backspace, attempt to determine the right value from the terminal's IO settings.  For delete, use the control sequence.
         */
        AUTO,
        /**
         * Send an ASCII backspace character (0x08).
         */
        ASCII_BACKSPACE,
        /**
         * Send an ASCII delete character (0x7F).
         */
        ASCII_DELETE,
        /**
         * Send the "@@7" control sequence.
         */
        DELETE_SEQUENCE,
        /**
         * Send terminal's "erase" setting.
         */
        TTY,
    }

    /**
     * @gir-type Enum
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

    /**
     * An enumeration type that can be used to specify the format the selection
     * should be copied to the clipboard in.
     * @gir-type Enum
     * @since 0.50
     */
    enum Format {
        /**
         * Export as plain text
         */
        TEXT,
        /**
         * Export as HTML formatted text
         */
        HTML,
    }

    /**
     * @gir-type Enum
     */
    export namespace ProgressHint {
        export const $gtype: GObject.GType<ProgressHint>;
    }

    /**
     * An enum describing how to interpret progress state, for the
     * `VTE_TERMPROP_PROGRESS_HINT` termprop.
     * @gir-type Enum
     * @since 0.80
     */
    enum ProgressHint {
        /**
         * no progress current
         */
        INACTIVE,
        /**
         * progress is normal
         */
        ACTIVE,
        /**
         * progress is aborted by an error
         */
        ERROR,
        /**
         * progress is indeterminate
         */
        INDETERMINATE,
        /**
         * progress is paused
         */
        PAUSED,
    }

    /**
     * @gir-type Enum
     */
    export namespace PropertyId {
        export const $gtype: GObject.GType<PropertyId>;
    }

    /**
     * An enum containing the IDs of the always-installed termprops.
     * @gir-type Enum
     * @since 0.78
     */
    enum PropertyId {
        /**
         * the ID of the `VTE_TERMPROP_CURRENT_DIRECTORY_URI` termprop
         */
        CURRENT_DIRECTORY_URI,
        /**
         * the ID of the `VTE_TERMPROP_CURRENT_FILE_URI` termprop
         */
        CURRENT_FILE_URI,
        /**
         * the ID of the `VTE_TERMPROP_XTERM_TITLE` termprop
         */
        XTERM_TITLE,
        /**
         * the ID of the `VTE_TERMPROP_CONTAINER_NAME` termprop
         */
        CONTAINER_NAME,
        /**
         * the ID of the `VTE_TERMPROP_CONTAINER_RUNTIME` termprop
         */
        CONTAINER_RUNTIME,
        /**
         * the ID of the `VTE_TERMPROP_CONTAINER_UID` termprop
         */
        CONTAINER_UID,
        /**
         * the ID of the `VTE_TERMPROP_SHELL_PRECMD` termprop
         */
        SHELL_PRECMD,
        /**
         * the ID of the `VTE_TERMPROP_SHELL_PREEXEC` termprop
         */
        SHELL_PREEXEC,
        /**
         * the ID of the `VTE_TERMPROP_SHELL_POSTEXEC` termprop
         */
        SHELL_POSTEXEC,
        /**
         * the ID of the `VTE_TERMPROP_PROGRESS_HINT` termprop. Since: 0.80
         */
        PROGRESS_HINT,
        /**
         * the ID of the `VTE_TERMPROP_PROGRESS_VALUE` termprop. Since: 0.80
         */
        PROGRESS_VALUE,
        /**
         * the ID of the `VTE_TERMPROP_ICON_COLOR` termprop. Since: 0.80
         */
        ICON_COLOR,
        /**
         * the ID of the `VTE_TERMPROP_ICON_IMAGE` termprop. Since: 0.80
         */
        ICON_IMAGE,
    }

    /**
     * @gir-type Enum
     */
    export namespace PropertyType {
        export const $gtype: GObject.GType<PropertyType>;
    }

    /**
     * An enumeration type describing types of properties.
     * @gir-type Enum
     * @since 0.78
     */
    enum PropertyType {
        /**
         * no value, use for signalling
         */
        VALUELESS,
        /**
         * a bool
         */
        BOOL,
        /**
         * a signed 64-bit integer
         */
        INT,
        /**
         * an unsigned 64-bit integer
         */
        UINT,
        /**
         * a finite double-precision floating point number
         */
        DOUBLE,
        /**
         * a color
         */
        RGB,
        /**
         * a color with alpha
         */
        RGBA,
        /**
         * a string
         */
        STRING,
        /**
         * binary data
         */
        DATA,
        /**
         * a UUID
         */
        UUID,
        /**
         * a URI
         */
        URI,
        /**
         * an image. Since: 0.80
         */
        IMAGE,
    }

    /**
     * @gir-type Struct
     */
    class PtyError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Obsolete. Deprecated: 0.42
         */
        static PTY_HELPER_FAILED: number;
        /**
         * failure when using PTY98 to allocate the PTY
         */
        static PTY98_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Error domain for VTE PTY errors. Errors in this domain will be from the {@link Vte.PtyError}
         * enumeration. See {@link GLib.Error} for more information on error domains.
         */
        static quark(): GLib.Quark;
    }

    /**
     * An enum type for regex errors. In addition to the values listed above,
     * any PCRE2 error values may occur.
     * @gir-type Struct
     */
    class RegexError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The PCRE2 library was built without
         *   Unicode support which is required for VTE
         */
        static INCOMPATIBLE: number;
        /**
         * Regexes are not supported because VTE was
         *   built without PCRE2 support
         */
        static NOT_SUPPORTED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace TextBlinkMode {
        export const $gtype: GObject.GType<TextBlinkMode>;
    }

    /**
     * An enumerated type which can be used to indicate whether the terminal allows
     * the text contents to be blinked.
     * @gir-type Enum
     * @since 0.52
     */
    enum TextBlinkMode {
        /**
         * Do not blink the text.
         */
        NEVER,
        /**
         * Allow blinking text only if the terminal is focused.
         */
        FOCUSED,
        /**
         * Allow blinking text only if the terminal is unfocused.
         */
        UNFOCUSED,
        /**
         * Allow blinking text. This is the default.
         */
        ALWAYS,
    }

    /**
     * @gir-type Enum
     */
    export namespace WriteFlags {
        export const $gtype: GObject.GType<WriteFlags>;
    }

    /**
     * A flag type to determine how terminal contents should be written
     * to an output stream.
     * @gir-type Enum
     */
    enum WriteFlags {
        /**
         * Write contents as UTF-8 text.  This is the default.
         */
        DEFAULT,
    }

    /**
     * The major version number of the VTE library
     * (e.g. in version 3.1.4 this is 3).
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version number of the VTE library
     * (e.g. in version 3.1.4 this is 4).
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the VTE library
     * (e.g. in version 3.1.4 this is 1).
     */
    const MINOR_VERSION: number;
    const REGEX_FLAGS_DEFAULT: number;
    /**
     * Use this as a spawn flag (together with flags from {@link GLib.SpawnFlags}) in
     * `vte_pty_spawn_async()`.
     *
     * Normally, the spawned process inherits the environment from the parent
     * process; when this flag is used, only the environment variables passed
     * to `vte_pty_spawn_async()` etc. are passed to the child process.
     */
    const SPAWN_NO_PARENT_ENVV: number;
    /**
     * Use this as a spawn flag (together with flags from {@link GLib.SpawnFlags}) in
     * `vte_pty_spawn_async()`.
     *
     * Prevents `vte_pty_spawn_async()` etc. from moving the newly created child
     * process to a systemd user scope.
     * @since 0.60
     */
    const SPAWN_NO_SYSTEMD_SCOPE: number;
    /**
     * Use this as a spawn flag (together with flags from {@link GLib.SpawnFlags}) in
     * `vte_pty_spawn_async()`.
     *
     * Requires `vte_pty_spawn_async()` etc. to move the newly created child
     * process to a systemd user scope; if that fails, the whole spawn fails.
     *
     * This is supported on Linux only.
     * @since 0.60
     */
    const SPAWN_REQUIRE_SYSTEMD_SCOPE: number;
    /**
     * A {@link Vte.PropertyType.STRING} termprop that stores the name of the
     * container.
     * @since 0.78
     */
    const TERMPROP_CONTAINER_NAME: string;
    /**
     * A {@link Vte.PropertyType.STRING} termprop that stores the runtime of the
     * container.
     * @since 0.78
     */
    const TERMPROP_CONTAINER_RUNTIME: string;
    /**
     * A {@link Vte.PropertyType.UINT} termprop that stores the user ID of the
     * container.
     * @since 0.78
     */
    const TERMPROP_CONTAINER_UID: string;
    /**
     * A {@link Vte.PropertyType.URI} termprop that stores the current directory
     * URI as set by OSC 7.
     * Use this with `vte_terminal_ref_termprop_uri()` instead of using
     * `vte_terminal_get_current_directory_uri()`.
     *
     * Note that this termprop is not settable via the termprop OSC.
     * @since 0.78
     */
    const TERMPROP_CURRENT_DIRECTORY_URI: string;
    /**
     * A {@link Vte.PropertyType.URI} termprop that stores the current file URI
     * as set by OSC 6.
     * Use this with `vte_terminal_ref_termprop_uri()` instead of using
     * `vte_terminal_get_current_file_uri()`.
     *
     * Note that this termprop is not settable via the termprop OSC.
     * @since 0.78
     */
    const TERMPROP_CURRENT_FILE_URI: string;
    const TERMPROP_ICON_COLOR: string;
    /**
     * A {@link Vte.PropertyType.IMAGE} termprop to specify an image for use
     * as a favicon.
     *
     * Applications should prefer to use this termprop, if set, over
     * the `VTE_TERMPROP_ICON_COLOR` color.
     *
     * Note that in this vte version, this termprop is always unset.
     * @since 0.80
     */
    const TERMPROP_ICON_IMAGE: string;
    /**
     * The string prefix that any termprop's name must start with to be installed
     * by `vte_install_termprop()`.
     * @since 0.78
     */
    const TERMPROP_NAME_PREFIX: string;
    /**
     * A {@link Vte.PropertyType.INT} termprop that stores a hint how to interpret
     * the `VTE_TERMPROP_PROGRESS_VALUE` termprop value. If set, this
     * termprop's value will be from the {@link Vte.ProgressHint} enumeration.
     * An unset termprop should be treated as if it had value
     * {@link Vte.ProgressHint.ACTIVE} if the `VTE_TERMPROP_PROGRESS_VALUE`
     * termprop has a value
     *
     * Note that this termprop never will have the value
     * {@link Vte.ProgressHint.INACTIVE}.
     *
     * The value of this termprop should be ignored unless the
     * `VTE_TERMPROP_PROGRESS_VALUE` termprop has a value.
     *
     * Note that before version 0.82, this termprop could not be set by
     * the termprop OSC, but instead only by OSC 9 ; 4 (ConEmu progress).
     * @since 0.80
     */
    const TERMPROP_PROGRESS_HINT: string;
    /**
     * A {@link Vte.PropertyType.UINT} termprop that stores the progress of the running
     * command as a value between 0 and 100.
     *
     * Note that before version 0.82, this termprop could not be set by
     * the termprop OSC, but instead only by OSC 9 ; 4 (ConEmu progress).
     * @since 0.80
     */
    const TERMPROP_PROGRESS_VALUE: string;
    /**
     * An ephemeral {@link Vte.PropertyType.UINT} termprop that signals that the shell
     * has executed the commands entered at the prompt and these commands
     * have returned. The termprop value is the exit code.
     * @since 0.78
     */
    const TERMPROP_SHELL_POSTEXEC: string;
    /**
     * A {@link Vte.PropertyType.VALUELESS} termprop that signals that the shell
     * is going to prompt.
     * @since 0.78
     */
    const TERMPROP_SHELL_PRECMD: string;
    /**
     * A {@link Vte.PropertyType.VALUELESS} termprop that signals that the shell
     * is preparing to execute the command entered at the prompt.
     * @since 0.78
     */
    const TERMPROP_SHELL_PREEXEC: string;
    /**
     * A {@link Vte.PropertyType.STRING} termprop that stores the xterm window title
     * as set by OSC 0 and OSC 2.
     * Use this with `vte_terminal_get_termprop_string()` instead of using
     * `vte_terminal_get_window_title()`.
     *
     * Note that this termprop is not settable via the termprop OSC.
     * @since 0.78
     */
    const TERMPROP_XTERM_TITLE: string;
    const TEST_FLAGS_ALL: number;
    const TEST_FLAGS_NONE: number;
    /**
     * Queries whether the legacy encoding `encoding` is supported.
     *
     * If ICU support is not available, this function always returns `false`.
     *
     * Note that UTF-8 is always supported; you can select it by
     * passing `null` to `vte_terminal_set_encoding()`.
     * @param encoding the name of the legacy encoding
     * @returns `true` iff the legacy encoding `encoding` is supported
     * @since 0.60
     * @deprecated since 0.60
     */
    function get_encoding_supported(encoding: string): boolean;
    /**
     * Gets the list of supported legacy encodings.
     *
     * If ICU support is not available, this returns an empty vector.
     * Note that UTF-8 is always supported; you can select it by
     * passing `null` to `vte_terminal_set_encoding()`.
     * @param include_aliases whether to include alias names
     * @returns the list of supported encodings; free with   `g_strfreev()`
     * @since 0.60
     * @deprecated since 0.60
     */
    function get_encodings(include_aliases: boolean): string[];
    /**
     * Gets features VTE was compiled with.
     * @returns flags from {@link Vte.FeatureFlags}
     * @since 0.62
     */
    function get_feature_flags(): FeatureFlags;
    /**
     * Gets a list of features vte was compiled with.
     * @returns a string with features
     * @since 0.40
     */
    function get_features(): string;
    /**
     * Returns the major version of the VTE library at runtime.
     * Contrast this with `VTE_MAJOR_VERSION` which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the major version
     * @since 0.40
     */
    function get_major_version(): number;
    /**
     * Returns the micro version of the VTE library at runtime.
     * Contrast this with `VTE_MICRO_VERSION` which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the micro version
     * @since 0.40
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version of the VTE library at runtime.
     * Contrast this with `VTE_MINOR_VERSION` which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the minor version
     * @since 0.40
     */
    function get_minor_version(): number;
    /**
     * Gets the names of the installed termprops in an unspecified order.
     * @returns the names of the installed   termprops, or `null` if there are no termprops
     * @since 0.78
     */
    function get_termprops(): string[] | null;
    /**
     * Gets the user's shell, or `null`. In the latter case, the
     * system default (usually "/bin/sh") should be used.
     * @returns a newly allocated string with the   user's shell, or `null`
     */
    function get_user_shell(): string;
    /**
     * Installs a new terminal property that can be set by the application.
     *
     * `name` must follow the rules for termprop names as laid out above; it
     * must have at least 4 components, the first two of which must be "vte",
     * and "ext". Use the `VTE_TERMPROP_NAME_PREFIX` macro which defines this
     * name prefix.
     *
     * You should use an identifier for your terminal as the first component
     * after the prefix, as a namespace marker.
     *
     * It is a programming error to call this function with a `name` that does
     * not meet these requirements.
     *
     * It is a programming error to call this function after any {@link Vte.Terminal}
     * instances have been created.
     *
     * It is a programming error to call this function if the named termprop
     * is already installed with a different type or flags.
     * @param name a namespaced property name
     * @param type a {@link Vte.PropertyType} to use for the property
     * @param flags flags from {@link Vte.PropertyFlags}
     * @returns an ID for the termprop
     * @since 0.78
     */
    function install_termprop(name: string, type: PropertyType | null, flags: PropertyFlags | null): number;
    /**
     * Installs a new terminal property `name` as an alias for the terminal
     * property `target_name`.
     * @param name a namespaced property name
     * @param target_name the target property name
     * @returns the ID for the termprop `target_name`
     * @since 0.78
     */
    function install_termprop_alias(name: string, target_name: string): number;
    /**
     * Error domain for VTE PTY errors. Errors in this domain will be from the {@link Vte.PtyError}
     * enumeration. See {@link GLib.Error} for more information on error domains.
     * @returns the error domain for VTE PTY errors
     */
    function pty_error_quark(): GLib.Quark;
    /**
     * Gets the property type of the termprop. For properties installed by
     * `vte_install_termprop()`, the name starts with "vte.ext.".
     *
     * For an alias termprop (see `vte_install_termprop_alias()`), `resolved_name`
     * will be name of the alias' target termprop; otherwise it will be `name`.
     * @param name a termprop name
     * @returns `true` iff the termprop exists, and then `prop`, `type` and   `flags` will be filled in
     * @since 0.78
     */
    function query_termprop(name: string): [boolean, string, number, PropertyType | null, PropertyFlags | null];
    /**
     * Like `vte_query_termprop()` except that it takes the termprop by ID.
     * See that function for more information.
     *
     * For an alias termprop (see `vte_install_termprop_alias()`), `resolved_name`
     * will be name of the alias' target termprop; otherwise it will be `name`.
     * @param prop a termprop ID
     * @returns `true` iff the termprop exists, and then `name`, `type` and   `flags` will be filled in
     * @since 0.78
     */
    function query_termprop_by_id(prop: number): [boolean, string, PropertyType | null, PropertyFlags | null];
    function regex_error_quark(): GLib.Quark;
    /**
     * Checks whether `str` is a valid string representation of an UUID.
     * @param str a string
     * @param len the length of `str`, or -1 is `str` is NUL terminated
     * @param fmt a {@link Vte.UuidFormat}
     * @returns `true` iff `str` is a valid string representation
     * @since 0.78
     */
    function uuid_validate_string(str: string, len: number, fmt: UuidFormat | null): boolean;
    /**
     * @gir-type Callback
     */
    interface SelectionFunc {
        (terminal: Terminal, column: number, row: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface TerminalSpawnAsyncCallback {
        (terminal: Terminal, pid: GLib.Pid, error?: GLib.Error | null): void;
    }
    /**
     * An enumeration type for features.
     * @gir-type Flags
     * @since 0.62
     */
    enum FeatureFlags {
        /**
         * whether VTE was built with bidirectional text support
         */
        FLAG_BIDI,
        /**
         * whether VTE was built with ICU support
         */
        FLAG_ICU,
        /**
         * whether VTE was built with systemd support
         */
        FLAG_SYSTEMD,
        /**
         * whether VTE was built with SIXEL support
         */
        FLAG_SIXEL,
        /**
         * mask of all feature flags
         */
        FLAGS_MASK,
    }

    /**
     * @gir-type Flags
     */
    export namespace PropertyFlags {
        export const $gtype: GObject.GType<PropertyFlags>;
    }

    /**
     * A flags type.
     * @gir-type Flags
     * @since 0.78
     */
    enum PropertyFlags {
        /**
         * no flags, default
         */
        NONE,
        /**
         * denotes an ephemeral termprop
         */
        EPHEMERAL,
    }

    /**
     * @gir-type Flags
     */
    export namespace PtyFlags {
        export const $gtype: GObject.GType<PtyFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum PtyFlags {
        /**
         * Unused. Deprecated: 0.38
         */
        NO_LASTLOG,
        /**
         * Unused. Deprecated: 0.38
         */
        NO_UTMP,
        /**
         * Unused. Deprecated: 0.38
         */
        NO_WTMP,
        /**
         * Unused. Deprecated: 0.38
         */
        NO_HELPER,
        /**
         * Unused. Deprecated: 0.38
         */
        NO_FALLBACK,
        /**
         * Do not start a new session for the child in
         *   `vte_pty_child_setup()`. See man:setsid(2) for more information. Since: 0.58
         */
        NO_SESSION,
        /**
         * Do not set the PTY as the controlling TTY for the child
         *   in `vte_pty_child_setup()`. See man:tty_ioctl(4) for more information. Since: 0.58
         */
        NO_CTTY,
        /**
         * the default flags
         */
        DEFAULT,
    }

    /**
     * @gir-type Flags
     */
    export namespace UuidFormat {
        export const $gtype: GObject.GType<UuidFormat>;
    }

    /**
     * @gir-type Flags
     */
    enum UuidFormat {
        SIMPLE,
        BRACED,
        URN,
        ANY,
    }

    namespace Pty {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fd': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            fd: number;
            flags: PtyFlags;
        }
    }

    /**
     * @gir-type Class
     */
    class Pty extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Pty>;

        // Properties

        /**
         * The file descriptor of the PTY master.
         * @construct-only
         */
        get fd(): number;
        /**
         * Flags.
         * @construct-only
         */
        get flags(): PtyFlags;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pty.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Pty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_foreign_sync(fd: number, cancellable?: Gio.Cancellable | null): Pty;

        static new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty;

        // Signals

        /** @signal */
        connect<K extends keyof Pty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Pty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Pty.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        child_setup(): void;
        /**
         * Since 0.42 this is a no-op.
         */
        close(): void;
        /**
         * @returns the file descriptor of the PTY master in `pty`. The   file descriptor belongs to `pty` and must not be closed or have   its flags changed
         */
        get_fd(): number;
        /**
         * Reads the pseudo terminal's window size.
         *
         * If getting the window size failed, `error` will be set to a {@link GLib.IOError}.
         * @returns `true` on success, `false` on failure with `error` filled in
         */
        get_size(): [boolean, number, number];
        /**
         * Attempts to resize the pseudo terminal's window size.  If successful, the
         * OS kernel will send <literal>SIGWINCH</literal> to the child process group.
         *
         * If setting the window size failed, `error` will be set to a {@link GLib.IOError}.
         * @param rows the desired number of rows
         * @param columns the desired number of columns
         * @returns `true` on success, `false` on failure with `error` filled in
         */
        set_size(rows: number, columns: number): boolean;
        /**
         * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
         * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
         * discipline do multibyte backspace correctly.
         * @param utf8 whether or not the pty is in UTF-8 mode
         * @returns `true` on success, `false` on failure with `error` filled in
         */
        set_utf8(utf8: boolean): boolean;
        /**
         * Like `vte_pty_spawn_with_fds_async()`, except that this function does not
         * allow passing file descriptors to the child process. See `vte_pty_spawn_with_fds_async()`
         * for more information.
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        spawn_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Pid | null>;
        /**
         * Like `vte_pty_spawn_with_fds_async()`, except that this function does not
         * allow passing file descriptors to the child process. See `vte_pty_spawn_with_fds_async()`
         * for more information.
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         */
        spawn_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Like `vte_pty_spawn_with_fds_async()`, except that this function does not
         * allow passing file descriptors to the child process. See `vte_pty_spawn_with_fds_async()`
         * for more information.
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         */
        spawn_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Pid | null> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, or `false` on error with `error` filled in
         */
        spawn_finish(result: Gio.AsyncResult): [boolean, GLib.Pid | null];
        /**
         * Starts the specified command under the pseudo-terminal `pty`.
         * The `argv` and `envv` lists should be `null`-terminated.
         * The "TERM" environment variable is automatically set to a default value,
         * but can be overridden from `envv`.
         * `pty_flags` controls logging the session to the specified system log files.
         *
         * Note also that {@link GLib.SpawnFlags.STDOUT_TO_DEV_NULL}, {@link GLib.SpawnFlags.STDERR_TO_DEV_NULL},
         * and {@link GLib.SpawnFlags.CHILD_INHERITS_STDIN} are not supported in `spawn_flags`, since
         * stdin, stdout and stderr of the child process will always be connected to
         * the PTY. Also {@link GLib.SpawnFlags.LEAVE_DESCRIPTORS_OPEN} is not supported; and
         * {@link GLib.SpawnFlags.DO_NOT_REAP_CHILD} will always be added to `spawn_flags`.
         *
         * If `fds` is not `null`, the child process will map the file descriptors from
         * `fds` according to `map_fds`; `n_map_fds` must be less or equal to `n_fds`.
         * This function will take ownership of the file descriptors in `fds`;
         * you must not use or close them after this call. All file descriptors in `fds`
         * must have the FD_CLOEXEC flag set on them; it will be unset in the child process
         * before calling man:execve(2). Note also that no file descriptor may be mapped
         * to stdin, stdout, or stderr (file descriptors 0, 1, or 2), since these will be
         * assigned to the PTY. All open file descriptors apart from those mapped as above
         * will be closed when `execve()` is called.
         *
         * Beginning with 0.60, and on linux only, and unless `VTE_SPAWN_NO_SYSTEMD_SCOPE` is
         * passed in `spawn_flags`, the newly created child process will be moved to its own
         * systemd user scope; and if `VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE` is passed, and creation
         * of the systemd user scope fails, the whole spawn will fail.
         * You can override the options used for the systemd user scope by
         * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
         * for further information.
         *
         * See `vte_pty_new()`, and `vte_terminal_watch_child()` for more information.
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param fds an array of file descriptors, or `null`
         * @param map_fds an array of integers, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         */
        spawn_with_fds_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            fds: number[] | null,
            map_fds: number[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Terminal {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * This signal is emitted when the a child sends a bell request to the
             * terminal.
             * @signal
             * @run-last
             */
            bell: () => void;
            /**
             * Emitted whenever the cell size changes, e.g. due to a change in
             * font, font-scale or cell-width/height-scale.
             *
             * Note that this signal should rather be called "cell-size-changed".
             * @signal
             * @run-last
             */
            'char-size-changed': (arg0: number, arg1: number) => void;
            /**
             * This signal is emitted when the terminal detects that a child
             * watched using `vte_terminal_watch_child()` has exited.
             * @signal
             * @run-last
             */
            'child-exited': (arg0: number) => void;
            /**
             * Emitted whenever the terminal receives input from the user and
             * prepares to send it to the child process.
             * @signal
             * @run-last
             */
            commit: (arg0: string, arg1: number) => void;
            /**
             * Emitted whenever the visible appearance of the terminal has changed.
             * Used primarily by `VteTerminalAccessible`.
             * @signal
             * @run-last
             */
            'contents-changed': () => void;
            /**
             * Emitted whenever `vte_terminal_copy_clipboard()` is called.
             * @signal
             * @action
             * @run-last
             */
            'copy-clipboard': () => void;
            /**
             * Emitted when the current directory URI is modified.
             * @signal
             * @deprecated since 0.78: Use the {@link Vte.Terminal.termprop_changed} signal   for the `VTE_TERMPROP_CURRENT_DIRECTORY_URI` termprop.
             * @run-last
             */
            'current-directory-uri-changed': () => void;
            /**
             * Emitted when the current file URI is modified.
             * @signal
             * @deprecated since 0.78: Use the {@link Vte.Terminal.termprop_changed} signal   for the `VTE_TERMPROP_CURRENT_FILE_URI` termprop.
             * @run-last
             */
            'current-file-uri-changed': () => void;
            /**
             * Emitted whenever the cursor moves to a new character cell.  Used
             * primarily by `VteTerminalAccessible`.
             * @signal
             * @run-last
             */
            'cursor-moved': () => void;
            /**
             * Emitted when the user hits the '-' key while holding the Control key.
             * @signal
             * @run-last
             */
            'decrease-font-size': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'deiconify-window': () => void;
            /**
             * Emitted whenever the terminal's current encoding has changed.
             *
             * Note: support for non-UTF-8 is deprecated.
             * @signal
             * @run-last
             */
            'encoding-changed': () => void;
            /**
             * Emitted when the terminal receives an end-of-file from a child which
             * is running in the terminal.  This signal is frequently (but not
             * always) emitted with a {@link Vte.Terminal.SignalSignatures.child_exited | Vte.Terminal::child-exited} signal.
             * @signal
             * @run-last
             */
            eof: () => void;
            /**
             * Emitted when the hovered hyperlink changes.
             *
             * `uri` and `bbox` are owned by VTE, must not be modified, and might
             * change after the signal handlers returns.
             *
             * The signal is not re-emitted when the bounding box changes for the
             * same hyperlink. This might change in a future VTE version without notice.
             * @signal
             * @since 0.50
             * @run-last
             */
            'hyperlink-hover-uri-changed': (arg0: string, arg1: Gdk.Rectangle) => void;
            /**
             * @signal
             * @deprecated since 0.54: This signal is never emitted.
             * @run-last
             */
            'icon-title-changed': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'iconify-window': () => void;
            /**
             * Emitted when the user hits the '+' key while holding the Control key.
             * @signal
             * @run-last
             */
            'increase-font-size': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'lower-window': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'maximize-window': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'move-window': (arg0: number, arg1: number) => void;
            /**
             * Emitted whenever `vte_terminal_paste_clipboard()` is called.
             * @signal
             * @action
             * @run-last
             */
            'paste-clipboard': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'raise-window': () => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'refresh-window': () => void;
            /**
             * Emitted at the child application's request.
             * @signal
             * @run-last
             */
            'resize-window': (arg0: number, arg1: number) => void;
            /**
             * Never emitted.
             * @signal
             * @deprecated since 0.60
             * @run-last
             */
            'restore-window': () => void;
            /**
             * Emitted whenever the contents of terminal's selection changes.
             * @signal
             * @run-last
             */
            'selection-changed': () => void;
            /**
             * Emitted with non-`null` context before `terminal` shows a context menu.
             * The handler may set either a menu model using
             * `vte_terminal_set_context_menu_model()`, or a menu using
             * `vte_terminal_set_context_menu()`, which will then be used as context
             * menu, or keep a previously set context menu or context menu model,
             * but update the menu and/or its {@link Gio.Action.s} visibility and sensitivity.
             * If neither a menu model nor a menu are set, a context menu
             * will not be shown.
             *
             * Note that `context` is only valid during the signal emission; you may
             * not retain it to call methods on it afterwards.
             *
             * Also emitted with `null` context after the context menu has been dismissed.
             * @signal
             * @run-last
             */
            'setup-context-menu': (arg0: EventContext | null) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed': (arg0: string) => void;
            /**
             * Emitted when termprops have changed. `props` is an array containing
             * the IDs of the terminal properties that may have changed since
             * the last emission of this signal, in an undefined order.
             * Note that emission of this signal is delayed from the receipt of the
             * OSC sequences, and a termprop may have been changed more than once
             * inbetween signal emissions, but only the value set last is retrievable.
             *
             * The default handler for this signal emits the "termprop-changed"
             * signal for each changed property. Returning `true` from a handler
             * running before the default will prevent this.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop, as well as call `vte_terminal_reset_termprop()`
             * (and its by-ID variant) to reset any termprop, or emit the
             * VteTerminal::termprop-changed signal; but it must *not*
             * call *any* other API on `terminal`, including API of its parent classes.
             * @signal
             * @since 0.78
             * @run-last
             */
            'termprops-changed': (arg0: number[]) => boolean | void;
            /**
             * @signal
             * @deprecated since 0.66: This signal is never emitted.
             * @run-last
             */
            'text-deleted': () => void;
            /**
             * @signal
             * @deprecated since 0.66: This signal is never emitted.
             * @run-last
             */
            'text-inserted': () => void;
            /**
             * @signal
             * @deprecated since 0.66: This signal is never emitted.
             * @run-last
             */
            'text-modified': () => void;
            /**
             * @signal
             * @deprecated since 0.66: This signal is never emitted.
             * @run-last
             */
            'text-scrolled': (arg0: number) => void;
            /**
             * Emitted when the {@link Vte.Terminal.window_title} property is modified.
             * @signal
             * @deprecated since 0.78: Use the {@link Vte.Terminal.termprop_changed} signal   for the `VTE_TERMPROP_XTERM_TITLE` termprop.
             * @run-last
             */
            'window-title-changed': () => void;
            'notify::allow-bold': (pspec: GObject.ParamSpec) => void;
            'notify::allow-hyperlink': (pspec: GObject.ParamSpec) => void;
            'notify::audible-bell': (pspec: GObject.ParamSpec) => void;
            'notify::backspace-binding': (pspec: GObject.ParamSpec) => void;
            'notify::bold-is-bright': (pspec: GObject.ParamSpec) => void;
            'notify::cell-height-scale': (pspec: GObject.ParamSpec) => void;
            'notify::cell-width-scale': (pspec: GObject.ParamSpec) => void;
            'notify::cjk-ambiguous-width': (pspec: GObject.ParamSpec) => void;
            'notify::context-menu': (pspec: GObject.ParamSpec) => void;
            'notify::context-menu-model': (pspec: GObject.ParamSpec) => void;
            'notify::current-directory-uri': (pspec: GObject.ParamSpec) => void;
            'notify::current-file-uri': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-blink-mode': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-shape': (pspec: GObject.ParamSpec) => void;
            'notify::delete-binding': (pspec: GObject.ParamSpec) => void;
            'notify::enable-a11y': (pspec: GObject.ParamSpec) => void;
            'notify::enable-bidi': (pspec: GObject.ParamSpec) => void;
            'notify::enable-fallback-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::enable-legacy-osc777': (pspec: GObject.ParamSpec) => void;
            'notify::enable-shaping': (pspec: GObject.ParamSpec) => void;
            'notify::enable-sixel': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::font-desc': (pspec: GObject.ParamSpec) => void;
            'notify::font-options': (pspec: GObject.ParamSpec) => void;
            'notify::font-scale': (pspec: GObject.ParamSpec) => void;
            'notify::hyperlink-hover-uri': (pspec: GObject.ParamSpec) => void;
            'notify::icon-title': (pspec: GObject.ParamSpec) => void;
            'notify::input-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::pointer-autohide': (pspec: GObject.ParamSpec) => void;
            'notify::pty': (pspec: GObject.ParamSpec) => void;
            'notify::rewrap-on-resize': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-on-insert': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-on-keystroke': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-on-output': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-unit-is-pixels': (pspec: GObject.ParamSpec) => void;
            'notify::scrollback-lines': (pspec: GObject.ParamSpec) => void;
            'notify::text-blink-mode': (pspec: GObject.ParamSpec) => void;
            'notify::window-title': (pspec: GObject.ParamSpec) => void;
            'notify::word-char-exceptions': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xfill': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::yfill': (pspec: GObject.ParamSpec) => void;
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
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::allow-bold': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::allow-hyperlink': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::audible-bell': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::backspace-binding': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::bold-is-bright': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::cell-height-scale': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::cell-width-scale': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::cjk-ambiguous-width': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::context-menu': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::context-menu-model': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::current-directory-uri': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::current-file-uri': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::cursor-blink-mode': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::cursor-shape': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::delete-binding': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-a11y': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-bidi': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-fallback-scrolling': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-legacy-osc777': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-shaping': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::enable-sixel': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::encoding': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::font-desc': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::font-options': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::font-scale': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::hyperlink-hover-uri': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::icon-title': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::input-enabled': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::pointer-autohide': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::pty': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::rewrap-on-resize': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scroll-on-insert': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scroll-on-keystroke': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scroll-on-output': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scroll-unit-is-pixels': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scrollback-lines': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::text-blink-mode': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::window-title': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::word-char-exceptions': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::xalign': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::xfill': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::yalign': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::yfill': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::app-paintable': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::can-default': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::can-focus': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::composite-child': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::double-buffered': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::events': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::expand': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::focus-on-click': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::halign': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::has-default': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::has-focus': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::has-tooltip': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::height-request': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::hexpand': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::hexpand-set': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::is-focus': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-bottom': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-end': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-left': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-right': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-start': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::margin-top': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::name': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::no-show-all': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::opacity': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::parent': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::receives-default': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::scale-factor': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::sensitive': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::style': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::tooltip-markup': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::tooltip-text': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::valign': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::vexpand': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::vexpand-set': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::visible': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::width-request': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::window': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::hadjustment': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::hscroll-policy': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::vadjustment': (arg0: string) => void;
            /**
             * The "termprop-changed" signal is emitted when a termprop
             * has changed or been reset.
             *
             * The handler may use the vte_terminal_get_termprop_*()
             * functions (and their by-ID variants), to retrieve the value of
             * any termprop (not just `name`); but it must *not* call *any*
             * other API on `terminal`, including API of its parent classes.
             *
             * This signal supports detailed connections, so e.g. subscribing
             * to "termprop-changed::name" only runs the callback when the
             * termprop "name" has changed.
             * @signal
             * @since 0.78
             * @detailed
             * @run-last
             */
            'termprop-changed::vscroll-policy': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            allow_bold: boolean;
            allowBold: boolean;
            allow_hyperlink: boolean;
            allowHyperlink: boolean;
            audible_bell: boolean;
            audibleBell: boolean;
            backspace_binding: EraseBinding;
            backspaceBinding: EraseBinding;
            bold_is_bright: boolean;
            boldIsBright: boolean;
            cell_height_scale: number;
            cellHeightScale: number;
            cell_width_scale: number;
            cellWidthScale: number;
            cjk_ambiguous_width: number;
            cjkAmbiguousWidth: number;
            context_menu: Gtk.Menu;
            contextMenu: Gtk.Menu;
            context_menu_model: Gio.MenuModel;
            contextMenuModel: Gio.MenuModel;
            current_directory_uri: string;
            currentDirectoryUri: string;
            current_file_uri: string;
            currentFileUri: string;
            cursor_blink_mode: CursorBlinkMode;
            cursorBlinkMode: CursorBlinkMode;
            cursor_shape: CursorShape;
            cursorShape: CursorShape;
            delete_binding: EraseBinding;
            deleteBinding: EraseBinding;
            enable_a11y: boolean;
            enableA11y: boolean;
            enable_bidi: boolean;
            enableBidi: boolean;
            enable_fallback_scrolling: boolean;
            enableFallbackScrolling: boolean;
            enable_legacy_osc777: boolean;
            enableLegacyOsc777: boolean;
            enable_shaping: boolean;
            enableShaping: boolean;
            enable_sixel: boolean;
            enableSixel: boolean;
            encoding: string;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_options: cairo.FontOptions;
            fontOptions: cairo.FontOptions;
            font_scale: number;
            fontScale: number;
            hyperlink_hover_uri: string;
            hyperlinkHoverUri: string;
            icon_title: string;
            iconTitle: string;
            input_enabled: boolean;
            inputEnabled: boolean;
            pointer_autohide: boolean;
            pointerAutohide: boolean;
            pty: Pty;
            rewrap_on_resize: boolean;
            rewrapOnResize: boolean;
            scroll_on_insert: boolean;
            scrollOnInsert: boolean;
            scroll_on_keystroke: boolean;
            scrollOnKeystroke: boolean;
            scroll_on_output: boolean;
            scrollOnOutput: boolean;
            scroll_unit_is_pixels: boolean;
            scrollUnitIsPixels: boolean;
            scrollback_lines: number;
            scrollbackLines: number;
            text_blink_mode: TextBlinkMode;
            textBlinkMode: TextBlinkMode;
            window_title: string;
            windowTitle: string;
            word_char_exceptions: string;
            wordCharExceptions: string;
            xalign: Align;
            xfill: boolean;
            yalign: Align;
            yfill: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Terminal extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<Terminal>;

        // Properties

        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @deprecated since 0.60: There's probably no reason for this feature to exist.
         */
        get allow_bold(): boolean;
        set allow_bold(val: boolean);
        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @deprecated since 0.60: There's probably no reason for this feature to exist.
         */
        get allowBold(): boolean;
        set allowBold(val: boolean);
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
         * @since 0.50
         */
        get allow_hyperlink(): boolean;
        set allow_hyperlink(val: boolean);
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
         * @since 0.50
         */
        get allowHyperlink(): boolean;
        set allowHyperlink(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audible_bell(): boolean;
        set audible_bell(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audibleBell(): boolean;
        set audibleBell(val: boolean);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspace_binding(): EraseBinding;
        set backspace_binding(val: EraseBinding);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspaceBinding(): EraseBinding;
        set backspaceBinding(val: EraseBinding);
        /**
         * Whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @since 0.52
         */
        get bold_is_bright(): boolean;
        set bold_is_bright(val: boolean);
        /**
         * Whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @since 0.52
         */
        get boldIsBright(): boolean;
        set boldIsBright(val: boolean);
        /**
         * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
         * @since 0.52
         */
        get cell_height_scale(): number;
        set cell_height_scale(val: number);
        /**
         * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
         * @since 0.52
         */
        get cellHeightScale(): number;
        set cellHeightScale(val: number);
        /**
         * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
         * @since 0.52
         */
        get cell_width_scale(): number;
        set cell_width_scale(val: number);
        /**
         * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
         * @since 0.52
         */
        get cellWidthScale(): number;
        set cellWidthScale(val: number);
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via `vte_terminal_set_encoding()`,
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         *
         * This setting only takes effect the next time the terminal is reset, either
         * via escape sequence or with `vte_terminal_reset()`.
         */
        get cjk_ambiguous_width(): number;
        set cjk_ambiguous_width(val: number);
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via `vte_terminal_set_encoding()`,
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         *
         * This setting only takes effect the next time the terminal is reset, either
         * via escape sequence or with `vte_terminal_reset()`.
         */
        get cjkAmbiguousWidth(): number;
        set cjkAmbiguousWidth(val: number);
        /**
         * The menu used for context menus. Note that context menu model set with the
         * {@link Vte.Terminal.SignalSignatures.context_menu_model | Vte.Terminal::context-menu-model} property or `vte_terminal_set_context_menu_model()`
         * takes precedence over this.
         * @since 0.76
         */
        get context_menu(): Gtk.Menu;
        set context_menu(val: Gtk.Menu);
        /**
         * The menu used for context menus. Note that context menu model set with the
         * {@link Vte.Terminal.SignalSignatures.context_menu_model | Vte.Terminal::context-menu-model} property or `vte_terminal_set_context_menu_model()`
         * takes precedence over this.
         * @since 0.76
         */
        get contextMenu(): Gtk.Menu;
        set contextMenu(val: Gtk.Menu);
        /**
         * The menu model used for context menus. If non-`null`, the context menu is
         * generated from this model, and overrides a context menu set with the
         * {@link Vte.Terminal.SignalSignatures.context_menu | Vte.Terminal::context-menu} property or `vte_terminal_set_context_menu()`.
         * @since 0.76
         */
        get context_menu_model(): Gio.MenuModel;
        set context_menu_model(val: Gio.MenuModel);
        /**
         * The menu model used for context menus. If non-`null`, the context menu is
         * generated from this model, and overrides a context menu set with the
         * {@link Vte.Terminal.SignalSignatures.context_menu | Vte.Terminal::context-menu} property or `vte_terminal_set_context_menu()`.
         * @since 0.76
         */
        get contextMenuModel(): Gio.MenuModel;
        set contextMenuModel(val: Gio.MenuModel);
        /**
         * The current directory URI, or `null` if unset.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_CURRENT_DIRECTORY_URI` termprop.
         * @read-only
         */
        get current_directory_uri(): string;
        /**
         * The current directory URI, or `null` if unset.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_CURRENT_DIRECTORY_URI` termprop.
         * @read-only
         */
        get currentDirectoryUri(): string;
        /**
         * The current file URI, or `null` if unset.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_CURRENT_FILE_URI` termprop.
         * @read-only
         */
        get current_file_uri(): string;
        /**
         * The current file URI, or `null` if unset.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_CURRENT_FILE_URI` termprop.
         * @read-only
         */
        get currentFileUri(): string;
        /**
         * Sets whether or not the cursor will blink. Using {@link Vte.CursorBlinkMode.SYSTEM}
         * will use the {@link Gtk.Settings.gtk_cursor_blink} setting.
         */
        get cursor_blink_mode(): CursorBlinkMode;
        set cursor_blink_mode(val: CursorBlinkMode);
        /**
         * Sets whether or not the cursor will blink. Using {@link Vte.CursorBlinkMode.SYSTEM}
         * will use the {@link Gtk.Settings.gtk_cursor_blink} setting.
         */
        get cursorBlinkMode(): CursorBlinkMode;
        set cursorBlinkMode(val: CursorBlinkMode);
        /**
         * Controls the shape of the cursor.
         */
        get cursor_shape(): CursorShape;
        set cursor_shape(val: CursorShape);
        /**
         * Controls the shape of the cursor.
         */
        get cursorShape(): CursorShape;
        set cursorShape(val: CursorShape);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get delete_binding(): EraseBinding;
        set delete_binding(val: EraseBinding);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get deleteBinding(): EraseBinding;
        set deleteBinding(val: EraseBinding);
        /**
         * Controls whether or not a11y is enabled for the widget.
         * @since 0.78
         */
        get enable_a11y(): boolean;
        set enable_a11y(val: boolean);
        /**
         * Controls whether or not a11y is enabled for the widget.
         * @since 0.78
         */
        get enableA11y(): boolean;
        set enableA11y(val: boolean);
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         * @since 0.58
         */
        get enable_bidi(): boolean;
        set enable_bidi(val: boolean);
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         * @since 0.58
         */
        get enableBidi(): boolean;
        set enableBidi(val: boolean);
        get enable_fallback_scrolling(): boolean;
        set enable_fallback_scrolling(val: boolean);
        get enableFallbackScrolling(): boolean;
        set enableFallbackScrolling(val: boolean);
        /**
         * Whether legacy OSC 777 sequences are translated to
         * their corresponding termprops.
         * @since 0.78
         */
        get enable_legacy_osc777(): boolean;
        set enable_legacy_osc777(val: boolean);
        /**
         * Whether legacy OSC 777 sequences are translated to
         * their corresponding termprops.
         * @since 0.78
         */
        get enableLegacyOsc777(): boolean;
        set enableLegacyOsc777(val: boolean);
        /**
         * Controls whether or not the terminal will shape Arabic text.
         * @since 0.58
         */
        get enable_shaping(): boolean;
        set enable_shaping(val: boolean);
        /**
         * Controls whether or not the terminal will shape Arabic text.
         * @since 0.58
         */
        get enableShaping(): boolean;
        set enableShaping(val: boolean);
        /**
         * Controls whether SIXEL image support is enabled.
         * @since 0.62
         */
        get enable_sixel(): boolean;
        set enable_sixel(val: boolean);
        /**
         * Controls whether SIXEL image support is enabled.
         * @since 0.62
         */
        get enableSixel(): boolean;
        set enableSixel(val: boolean);
        /**
         * Controls the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding.  The default is defined by the
         * application's locale settings.
         * @deprecated since 0.54: Instead of using this, you should use a tool like   luit(1) when support for non-UTF-8 is required
         */
        get encoding(): string;
        set encoding(val: string);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using `gtk_widget_modify_font()`.  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using `gtk_widget_modify_font()`.  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        /**
         * The terminal's font options, or `null` to use the default font options.
         *
         * Note that on GTK4, the terminal by default uses font options
         * with {@link cairo.HintMetrics.ON} set; to override that, use this
         * function to set a {@link cairo.FontOptions} that has
         * {@link cairo.HintMetrics.OFF} set.
         * @since 0.74
         */
        get font_options(): cairo.FontOptions;
        set font_options(val: cairo.FontOptions);
        /**
         * The terminal's font options, or `null` to use the default font options.
         *
         * Note that on GTK4, the terminal by default uses font options
         * with {@link cairo.HintMetrics.ON} set; to override that, use this
         * function to set a {@link cairo.FontOptions} that has
         * {@link cairo.HintMetrics.OFF} set.
         * @since 0.74
         */
        get fontOptions(): cairo.FontOptions;
        set fontOptions(val: cairo.FontOptions);
        /**
         * The terminal's font scale.
         */
        get font_scale(): number;
        set font_scale(val: number);
        /**
         * The terminal's font scale.
         */
        get fontScale(): number;
        set fontScale(val: number);
        /**
         * The currently hovered hyperlink URI, or `null` if unset.
         * @since 0.50
         * @read-only
         */
        get hyperlink_hover_uri(): string;
        /**
         * The currently hovered hyperlink URI, or `null` if unset.
         * @since 0.50
         * @read-only
         */
        get hyperlinkHoverUri(): string;
        /**
         * @deprecated since 0.54: This property is always `null`.
         * @read-only
         */
        get icon_title(): string;
        /**
         * @deprecated since 0.54: This property is always `null`.
         * @read-only
         */
        get iconTitle(): string;
        /**
         * Controls whether the terminal allows user input. When user input is disabled,
         * key press and mouse button press and motion events are not sent to the
         * terminal's child.
         */
        get input_enabled(): boolean;
        set input_enabled(val: boolean);
        /**
         * Controls whether the terminal allows user input. When user input is disabled,
         * key press and mouse button press and motion events are not sent to the
         * terminal's child.
         */
        get inputEnabled(): boolean;
        set inputEnabled(val: boolean);
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointer_autohide(): boolean;
        set pointer_autohide(val: boolean);
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointerAutohide(): boolean;
        set pointerAutohide(val: boolean);
        /**
         * The PTY object for the terminal.
         */
        get pty(): Pty;
        set pty(val: Pty);
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback buffer, whenever the terminal's width changes.
         * @deprecated since 0.58
         */
        get rewrap_on_resize(): boolean;
        set rewrap_on_resize(val: boolean);
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback buffer, whenever the terminal's width changes.
         * @deprecated since 0.58
         */
        get rewrapOnResize(): boolean;
        set rewrapOnResize(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the text is inserted (e.g. by a paste).
         * @since 0.76
         */
        get scroll_on_insert(): boolean;
        set scroll_on_insert(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the text is inserted (e.g. by a paste).
         * @since 0.76
         */
        get scrollOnInsert(): boolean;
        set scrollOnInsert(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scroll_on_keystroke(): boolean;
        set scroll_on_keystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scrollOnKeystroke(): boolean;
        set scrollOnKeystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scroll_on_output(): boolean;
        set scroll_on_output(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scrollOnOutput(): boolean;
        set scrollOnOutput(val: boolean);
        /**
         * Controls whether the terminal's GtkAdjustment values unit is lines
         * or pixels. This can be enabled when the terminal is the child of a
         * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
         * @since 0.66
         */
        get scroll_unit_is_pixels(): boolean;
        set scroll_unit_is_pixels(val: boolean);
        /**
         * Controls whether the terminal's GtkAdjustment values unit is lines
         * or pixels. This can be enabled when the terminal is the child of a
         * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
         * @since 0.66
         */
        get scrollUnitIsPixels(): boolean;
        set scrollUnitIsPixels(val: boolean);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         *
         * Note that any value greater or equal to `G_MAXINT` is interpreted as unlimited
         * scrollback, i.e. like `-1` when passed to `vte_terminal_set_scrollback_lines()`,
         * and the value of this property for unlimited scrollback is `G_MAXUINT`.
         */
        get scrollback_lines(): number;
        set scrollback_lines(val: number);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         *
         * Note that any value greater or equal to `G_MAXINT` is interpreted as unlimited
         * scrollback, i.e. like `-1` when passed to `vte_terminal_set_scrollback_lines()`,
         * and the value of this property for unlimited scrollback is `G_MAXUINT`.
         */
        get scrollbackLines(): number;
        set scrollbackLines(val: number);
        /**
         * Controls whether or not the terminal will allow blinking text.
         * @since 0.52
         */
        get text_blink_mode(): TextBlinkMode;
        set text_blink_mode(val: TextBlinkMode);
        /**
         * Controls whether or not the terminal will allow blinking text.
         * @since 0.52
         */
        get textBlinkMode(): TextBlinkMode;
        set textBlinkMode(val: TextBlinkMode);
        /**
         * The terminal's title.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_XTERM_TITLE` termprop.
         * @read-only
         */
        get window_title(): string;
        /**
         * The terminal's title.
         * @deprecated since 0.78: Use the `VTE_TERMPROP_XTERM_TITLE` termprop.
         * @read-only
         */
        get windowTitle(): string;
        /**
         * The set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If `null`, a built-in set is used.
         * @since 0.40
         * @read-only
         */
        get word_char_exceptions(): string;
        /**
         * The set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If `null`, a built-in set is used.
         * @since 0.40
         * @read-only
         */
        get wordCharExceptions(): string;
        /**
         * The horizontal alignment of `terminal` within its allocation.
         * @since 0.76
         */
        get xalign(): Align;
        set xalign(val: Align);
        /**
         * The horizontal fillment of `terminal` within its allocation.
         * @since 0.76
         */
        get xfill(): boolean;
        set xfill(val: boolean);
        /**
         * The vertical alignment of `terminal` within its allocation
         * @since 0.76
         */
        get yalign(): Align;
        set yalign(val: Align);
        /**
         * The vertical fillment of `terminal` within its allocation.
         * Note that {@link Vte.Terminal.yfill}=`true` is only supported with
         * {@link Vte.Terminal.yalign}={@link Vte.Align.START}, and is ignored for
         * all other yalign values.
         * @since 0.76
         */
        get yfill(): boolean;
        set yfill(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Terminal.SignalSignatures;

        // Fields

        widget: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<Terminal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Terminal;

        // Signals

        /** @signal */
        connect<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Terminal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_bell(): void;
        /**
         * @param char_width
         * @param char_height
         * @virtual
         */
        vfunc_char_size_changed(char_width: number, char_height: number): void;
        /**
         * @param status
         * @virtual
         */
        vfunc_child_exited(status: number): void;
        /**
         * @param text
         * @param size
         * @virtual
         */
        vfunc_commit(text: string, size: number): void;
        /**
         * @virtual
         */
        vfunc_contents_changed(): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         * @virtual
         */
        vfunc_copy_clipboard(): void;
        /**
         * @virtual
         */
        vfunc_cursor_moved(): void;
        /**
         * @virtual
         */
        vfunc_decrease_font_size(): void;
        /**
         * @virtual
         */
        vfunc_deiconify_window(): void;
        /**
         * @virtual
         */
        vfunc_encoding_changed(): void;
        /**
         * @virtual
         */
        vfunc_eof(): void;
        /**
         * @virtual
         */
        vfunc_icon_title_changed(): void;
        /**
         * @virtual
         */
        vfunc_iconify_window(): void;
        /**
         * @virtual
         */
        vfunc_increase_font_size(): void;
        /**
         * @virtual
         */
        vfunc_lower_window(): void;
        /**
         * @virtual
         */
        vfunc_maximize_window(): void;
        /**
         * @param x
         * @param y
         * @virtual
         */
        vfunc_move_window(x: number, y: number): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child. It's called on paste menu item, or when
         * user presses Shift+Insert.
         * @virtual
         */
        vfunc_paste_clipboard(): void;
        /**
         * @virtual
         */
        vfunc_raise_window(): void;
        /**
         * @virtual
         */
        vfunc_refresh_window(): void;
        /**
         * @param width
         * @param height
         * @virtual
         */
        vfunc_resize_window(width: number, height: number): void;
        /**
         * @virtual
         */
        vfunc_restore_window(): void;
        /**
         * @virtual
         */
        vfunc_selection_changed(): void;
        /**
         * @param context
         * @virtual
         */
        vfunc_setup_context_menu(context: EventContext): void;
        /**
         * @param prop
         * @virtual
         */
        vfunc_termprop_changed(prop: string): void;
        /**
         * @param props
         * @param n_props
         * @virtual
         */
        vfunc_termprops_changed(props: number, n_props: number): boolean;
        /**
         * @virtual
         */
        vfunc_text_deleted(): void;
        /**
         * @virtual
         */
        vfunc_text_inserted(): void;
        /**
         * @virtual
         */
        vfunc_text_modified(): void;
        /**
         * @param delta
         * @virtual
         */
        vfunc_text_scrolled(delta: number): void;
        /**
         * @virtual
         */
        vfunc_window_title_changed(): void;

        // Methods

        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         */
        copy_clipboard(): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection in the form specified by `format`.
         *
         * For all formats, the selection data (see {@link Gtk.SelectionData}) will include the
         * text targets (see `gtk_target_list_add_text_targets()` and
         * `gtk_selection_data_targets_includes_text()`). For {@link Vte.Format.HTML},
         * the selection will also include the "text/html" target, which when requested,
         * returns the HTML data in UTF-16 with a U+FEFF BYTE ORDER MARK character at
         * the start.
         * @param format a {@link Vte.Format}
         */
        copy_clipboard_format(format: Format | null): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
         * selection.
         */
        copy_primary(): void;
        /**
         * Returns the value of a {@link Vte.PropertyType.STRING} termprop, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value, or `null`
         */
        dup_termprop_string(prop: string): [string | null, number];
        /**
         * Like `vte_terminal_dup_termprop_string()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value, or `null`
         */
        dup_termprop_string_by_id(prop: number): [string | null, number];
        /**
         * Returns the value of a {@link Vte.PropertyType.UUID} termprop as a {@link Vte.Uuid}, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value as a {@link Vte.Uuid}, or `null`
         */
        dup_termprop_uuid(prop: string): Uuid | null;
        /**
         * Like `vte_terminal_dup_termprop_uuid()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value as a {@link Vte.Uuid}, or `null`
         */
        dup_termprop_uuid_by_id(prop: number): Uuid | null;
        /**
         * This function does nothing.
         * @param event a {@link Gdk.Event}
         * @param regexes an array of {@link GLib.Regex}
         * @param match_flags the {@link GLib.RegexMatchFlags} to use when matching the regexes
         * @returns `false`
         */
        event_check_gregex_simple(
            event: Gdk.Event,
            regexes: GLib.Regex[],
            match_flags: GLib.RegexMatchFlags | null,
        ): [boolean, string[]];
        /**
         * Like `vte_terminal_event_check_regex_simple()`, but returns an array of strings,
         * containing the matching text (or `null` if no match) corresponding to each of the
         * regexes in `regexes`.
         *
         * You must free each string and the array; but note that this is *not* a `null`-terminated
         * string array, and so you must *not* use `g_strfreev()` on it.
         * @param event a {@link Gdk.Event}
         * @param regexes an array of {@link Vte.Regex}
         * @param match_flags PCRE2 match flags, or 0
         * @returns a newly allocated array of strings,   or `null` if none of the regexes matched
         */
        event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): string[] | null;
        /**
         * Interprets `data` as if it were data received from a child process.
         * @param data a string in the terminal's current encoding
         */
        feed(data?: Uint8Array | null): void;
        /**
         * Sends a block of UTF-8 text to the child as if it were entered by the user
         * at the keyboard.
         * @param text data to send to the child
         */
        feed_child(text?: Uint8Array | null): void;
        /**
         * Sends a block of binary data to the child.
         * @param data data to send to the child
         */
        feed_child_binary(data?: Uint8Array | null): void;
        /**
         * Checks whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @returns `true` if bolding is enabled, `false` if not
         */
        get_allow_bold(): boolean;
        /**
         * Checks whether or not hyperlinks (OSC 8 escape sequence) are allowed.
         * @returns `true` if hyperlinks are enabled, `false` if not
         */
        get_allow_hyperlink(): boolean;
        /**
         * Checks whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @returns `true` if audible bell is enabled, `false` if not
         */
        get_audible_bell(): boolean;
        /**
         * Checks whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @returns `true` if bold also enables bright, `false` if not
         */
        get_bold_is_bright(): boolean;
        /**
         * @returns the terminal's cell height scale
         */
        get_cell_height_scale(): number;
        /**
         * @returns the terminal's cell width scale
         */
        get_cell_width_scale(): number;
        /**
         * @returns the height of a character cell Note that this method should rather be called vte_terminal_get_cell_height, because the return value takes cell-height-scale into account.
         */
        get_char_height(): number;
        /**
         * @returns the width of a character cell Note that this method should rather be called vte_terminal_get_cell_width, because the return value takes cell-width-scale into account.
         */
        get_char_width(): number;
        /**
         * Returns whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via `vte_terminal_set_encoding()`,
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         * @returns 1 if ambiguous-width characters are narrow, or 2 if they are wide
         */
        get_cjk_ambiguous_width(): number;
        /**
         * Returns the background colour, as used by `terminal` when
         * drawing the background, which may be different from
         * the color set by `vte_terminal_set_color_background()`.
         *
         * Note: you must only call this function while handling the
         * GtkWidget::draw signal.
         *
         * This function is rarely useful. One use for it is if you disable
         * drawing the background (see `vte_terminal_set_clear_background()`)
         * and then need to draw the background yourself.
         */
        get_color_background_for_draw(): Gdk.RGBA;
        /**
         * @returns the number of columns
         */
        get_column_count(): number;
        /**
         * @returns the context menu, or `null`
         */
        get_context_menu(): Gtk.Widget | null;
        /**
         * @returns the context menu model, or `null`
         */
        get_context_menu_model(): Gio.MenuModel | null;
        /**
         * @returns the URI of the current directory of the   process running in the terminal, or `null`
         */
        get_current_directory_uri(): string | null;
        /**
         * @returns the URI of the current file the   process running in the terminal is operating on, or `null` if   not set
         */
        get_current_file_uri(): string | null;
        /**
         * Returns the currently set cursor blink mode.
         * @returns cursor blink mode.
         */
        get_cursor_blink_mode(): CursorBlinkMode;
        /**
         * Reads the location of the insertion cursor and returns it.  The row
         * coordinate is absolute.
         *
         * This method is unaware of BiDi. The returned column is logical column.
         */
        get_cursor_position(): [number, number];
        /**
         * Returns the currently set cursor shape.
         * @returns cursor shape.
         */
        get_cursor_shape(): CursorShape;
        /**
         * Checks whether the terminal communicates with a11y backends
         * @returns `true` if a11y is enabled, `false` if not
         */
        get_enable_a11y(): boolean;
        /**
         * Checks whether the terminal performs bidirectional text rendering.
         * @returns `true` if BiDi is enabled, `false` if not
         */
        get_enable_bidi(): boolean;
        /**
         * @returns `true` if fallback scrolling is enabled
         */
        get_enable_fallback_scrolling(): boolean;
        /**
         * @returns `true` iff legacy OSC 777 is enabled
         */
        get_enable_legacy_osc777(): boolean;
        /**
         * Checks whether the terminal shapes Arabic text.
         * @returns `true` if Arabic shaping is enabled, `false` if not
         */
        get_enable_shaping(): boolean;
        /**
         * @returns `false`
         */
        get_enable_sixel(): boolean;
        /**
         * Determines the name of the encoding in which the terminal expects data to be
         * encoded, or `null` if UTF-8 is in use.
         * @returns the current encoding for the terminal
         */
        get_encoding(): string | null;
        /**
         * Queries the terminal for information about the fonts which will be
         * used to draw text in the terminal.  The actual font takes the font scale
         * into account, this is not reflected in the return value, the unscaled
         * font is returned.
         * @returns a {@link Pango.FontDescription} describing the font the terminal uses to render text at the default font scale of 1.0.
         */
        get_font(): Pango.FontDescription;
        /**
         * @returns the terminal's font options, or `null`
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * @returns the terminal's font scale
         */
        get_font_scale(): number;
        /**
         * Fills in some `hints` from `terminal`'s geometry. The hints
         * filled are those covered by the {@link Gdk.WindowHints.RESIZE_INC},
         * {@link Gdk.WindowHints.MIN_SIZE} and {@link Gdk.WindowHints.BASE_SIZE} flags.
         *
         * See `gtk_window_set_geometry_hints()` for more information.
         *
         * `terminal` must be realized (see `gtk_widget_get_realized()`).
         * @param min_rows the minimum number of rows to request
         * @param min_columns the minimum number of columns to request
         */
        get_geometry_hints(min_rows: number, min_columns: number): Gdk.Geometry;
        /**
         * Checks if the terminal currently contains selected text.  Note that this
         * is different from determining if the terminal is the owner of any
         * {@link Gtk.Clipboard} items.
         * @returns `true` if part of the text in the terminal is selected.
         */
        get_has_selection(): boolean;
        /**
         * @returns `null`
         */
        get_icon_title(): string | null;
        /**
         * Returns whether the terminal allow user input.
         */
        get_input_enabled(): boolean;
        /**
         * Determines the value of the terminal's mouse autohide setting.  When
         * autohiding is enabled, the mouse cursor will be hidden when the user presses
         * a key and shown when the user moves the mouse.  This setting can be changed
         * using `vte_terminal_set_mouse_autohide()`.
         * @returns `true` if autohiding is enabled, `false` if not
         */
        get_mouse_autohide(): boolean;
        /**
         * Returns the {@link Vte.Pty} of `terminal`.
         * @returns a {@link Vte.Pty}, or `null`
         */
        get_pty(): Pty | null;
        /**
         * Checks whether or not the terminal will rewrap its contents upon resize.
         * @returns `true` if rewrapping is enabled, `false` if not
         */
        get_rewrap_on_resize(): boolean;
        /**
         * @returns the number of rows
         */
        get_row_count(): number;
        /**
         * @returns whether or not the terminal will forcibly scroll to the bottom of the viewable history when the new data is received from the child.
         */
        get_scroll_on_insert(): boolean;
        /**
         * @returns whether or not the terminal will forcibly scroll to the bottom of the viewable history when the user presses a key.  Modifier keys do not trigger this behavior.
         */
        get_scroll_on_keystroke(): boolean;
        /**
         * @returns whether or not the terminal will forcibly scroll to the bottom of the viewable history when the new data is received from the child.
         */
        get_scroll_on_output(): boolean;
        /**
         * @returns `true` if the scroll unit is pixels; or `false` if the unit is lines
         */
        get_scroll_unit_is_pixels(): boolean;
        /**
         * @returns length of the scrollback buffer used by the terminal. A negative value means "infinite scrollback".
         */
        get_scrollback_lines(): number;
        /**
         * For a {@link Vte.PropertyType.BOOL} termprop, sets `value` to `prop`'s value,
         *   or to `false` if `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns `true` iff the termprop is set
         */
        get_termprop_bool(prop: string): [boolean, boolean];
        /**
         * Like `vte_terminal_get_termprop_bool()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the termprop is set
         */
        get_termprop_bool_by_id(prop: number): [boolean, boolean];
        /**
         * Returns the value of a {@link Vte.PropertyType.DATA} termprop, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value, or `null`
         */
        get_termprop_data(prop: string): Uint8Array | null;
        /**
         * Like `vte_terminal_get_termprop_data()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value, or `null`
         */
        get_termprop_data_by_id(prop: number): Uint8Array | null;
        /**
         * For a {@link Vte.PropertyType.DOUBLE} termprop, sets `value` to `prop`'s value,
         *   which is finite; or to 0.0 if `prop` is unset, or `prop` is not a
         *   registered property.
         * @param prop a termprop name
         * @returns `true` iff the termprop is set
         */
        get_termprop_double(prop: string): [boolean, number];
        /**
         * Like `vte_terminal_get_termprop_double()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the termprop is set
         */
        get_termprop_double_by_id(prop: number): [boolean, number];
        /**
         * See `vte_properties_get_property_enum()` for more information.
         * @param prop a property name of a {@link Vte.PropertyType.STRING} property
         * @param gtype a {@link GObject.GType} of an enum type
         * @returns `true` iff the property was set and could be parsed a   a value of the enumeration type
         */
        get_termprop_enum(prop: string, gtype: GObject.GType): [boolean, number];
        /**
         * Like `vte_terminal_get_termprop_enum()` except that it takes the property
         * by ID. See that function for more information.
         * @param prop a property ID of a {@link Vte.PropertyType.STRING} property
         * @param gtype a {@link GObject.GType} of an enum type
         * @returns `true` iff the property was set and could be parsed a   a value of enumeration type `type`
         */
        get_termprop_enum_by_id(prop: number, gtype: GObject.GType): [boolean, number];
        /**
         * See `vte_properties_get_property_flags()` for more information.
         * @param prop
         * @param gtype a {@link GObject.GType} of a flags type
         * @param ignore_unknown_flags whether to ignore unknown flags
         * @returns `true` iff the property was set and could be parsed a   a value of the flags type
         */
        get_termprop_flags(prop: string, gtype: GObject.GType, ignore_unknown_flags: boolean): [boolean, number];
        /**
         * Like `vte_terminal_get_termprop_flags()` except that it takes the property
         * by ID. See that function for more information.
         * @param prop
         * @param gtype a {@link GObject.GType} of a flags type
         * @param ignore_unknown_flags whether to ignore unknown flags
         * @returns `true` iff the property was set and could be parsed a   a value of flags type `type`
         */
        get_termprop_flags_by_id(prop: number, gtype: GObject.GType, ignore_unknown_flags: boolean): [boolean, number];
        /**
         * For a {@link Vte.PropertyType.INT} termprop, sets `value` to `prop`'s value,
         * or to 0 if `prop` is unset, or if `prop` is not a registered property.
         *
         * If only a subset or range of values are acceptable for the given property,
         * the caller must validate the returned value and treat any out-of-bounds
         * value as if the termprop had no value; in particular it *must not* clamp
         * the values to the expected range.
         * @param prop a termprop name
         * @returns `true` iff the termprop is set
         */
        get_termprop_int(prop: string): [boolean, number];
        /**
         * Like `vte_terminal_get_termprop_int()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the termprop is set
         */
        get_termprop_int_by_id(prop: number): [boolean, number];
        /**
         * Stores the value of a {@link Vte.PropertyType.RGB} or {@link Vte.PropertyType.RGBA} termprop in `color` and
         * returns `true` if the termprop is set, or stores rgb(0,0,0) or rgba(0,0,0,1) in `color`
         * and returns `false` if the termprop is unset.
         * @param prop a termprop name
         * @returns `true` iff the termprop is set
         */
        get_termprop_rgba(prop: string): [boolean, Gdk.RGBA | null];
        /**
         * Like `vte_terminal_get_termprop_rgba()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the termprop is set
         */
        get_termprop_rgba_by_id(prop: number): [boolean, Gdk.RGBA | null];
        /**
         * Returns the value of a {@link Vte.PropertyType.STRING} termprop, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value, or `null`
         */
        get_termprop_string(prop: string): [string | null, number];
        /**
         * Like `vte_terminal_get_termprop_string()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value, or `null`
         */
        get_termprop_string_by_id(prop: number): [string | null, number];
        /**
         * For a {@link Vte.PropertyType.UINT} termprop, sets `value` to `prop`'s value,
         * or to 0 if `prop` is unset, or `prop` is not a registered property.
         *
         * If only a subset or range of values are acceptable for the given property,
         * the caller must validate the returned value and treat any out-of-bounds
         * value as if the termprop had no value; in particular it *must not* clamp
         * the values to the expected range.
         * @param prop a termprop name
         * @returns `true` iff the termprop is set
         */
        get_termprop_uint(prop: string): [boolean, number];
        /**
         * Like `vte_terminal_get_termprop_uint()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the termprop is set
         */
        get_termprop_uint_by_id(prop: number): [boolean, number];
        /**
         * Returns `true` with the value of `prop` stored in `value` (if not `null`) if,
         *   the termprop has a value, or `false` if `prop` is unset, or `prop` is not
         *   a registered property; in that case `value` will not be set.
         *
         * The value type returned depends on the termprop type:
         * * A {@link Vte.PropertyType.VALUELESS} termprop stores no value, and returns `false`
         *   from this function.
         * * A {@link Vte.PropertyType.BOOL} termprop stores a `G_TYPE_BOOLEAN` value.
         * * A {@link Vte.PropertyType.INT} termprop stores a `G_TYPE_INT64` value.
         * * A {@link Vte.PropertyType.UINT} termprop stores a `G_TYPE_UINT64` value.
         * * A {@link Vte.PropertyType.DOUBLE} termprop stores a `G_TYPE_DOUBLE` value.
         * * A {@link Vte.PropertyType.RGB} termprop stores a boxed {@link Gdk.RGBA} value with alpha 1.0 on gtk3,
         *    and nothing on gtk4.
         * * A {@link Vte.PropertyType.RGBA} termprop stores a boxed {@link Gdk.RGBA} value on gtk3,
         *    and nothing on gtk4.
         * * A {@link Vte.PropertyType.STRING} termprop stores a `G_TYPE_STRING` value.
         * * A {@link Vte.PropertyType.DATA} termprop stores a boxed {@link GLib.Bytes} value.
         * * A {@link Vte.PropertyType.UUID} termprop stores a boxed {@link Vte.Uuid} value.
         * * A {@link Vte.PropertyType.URI} termprop stores a boxed {@link GLib.Uri} value.
         * * A {@link Vte.PropertyType.IMAGE} termprop stores a boxed {@link cairo.Surface} value on gtk3,
         *     and a boxed `GdkTexture` on gtk4
         * @param prop a termprop name
         * @returns `true` iff the property has a value, with `gvalue` containig   the property's value.
         */
        get_termprop_value(prop: string): [boolean, GObject.Value | null];
        /**
         * Like `vte_terminal_get_termprop_value()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns `true` iff the property has a value, with `gvalue` containig   the property's value.
         */
        get_termprop_value_by_id(prop: number): [boolean, GObject.Value | null];
        /**
         * Extracts a view of the visible part of the terminal.
         *
         * This method is unaware of BiDi. The columns returned in `attributes` are
         * logical columns.
         *
         * Note: since 0.68, passing a non-`null` `attributes` parameter is deprecated. Starting with
         * 0.72, passing a non-`null` `attributes` parameter will make this function itself return `null`.
         * Since 0.72, passing a non-`null` `is_selected` parameter will make this function itself return `null`.
         * @param is_selected a {@link Vte.SelectionFunc} callback. Deprecated: 0.44: Always pass `null` here.
         * @returns a newly allocated text string, or `null`.
         */
        get_text(is_selected?: SelectionFunc | null): [string | null, CharAttributes[] | null];
        /**
         * Checks whether or not the terminal will allow blinking text.
         * @returns the blinking setting
         */
        get_text_blink_mode(): TextBlinkMode;
        /**
         * Returns text from the visible part of the terminal in the specified format.
         *
         * This method is unaware of BiDi. The columns returned in `attributes` are
         * logical columns.
         * @param format the {@link Vte.Format} to use
         * @returns a newly allocated text string, or `null`.
         */
        get_text_format(format: Format | null): string | null;
        /**
         * Extracts a view of the visible part of the terminal.
         *
         * This method is unaware of BiDi. The columns returned in `attributes` are
         * logical columns.
         *
         * Note: since 0.68, passing a non-`null` `array` parameter is deprecated. Starting with
         * 0.72, passing a non-`null` `array` parameter will make this function itself return `null`.
         * Since 0.72, passing a non-`null` `is_selected` parameter will make this function itself return `null`.
         * @param is_selected a {@link Vte.SelectionFunc} callback. Deprecated: 0.44: Always pass `null` here.
         * @returns a newly allocated text string, or `null`.
         */
        get_text_include_trailing_spaces(is_selected?: SelectionFunc | null): [string, CharAttributes[] | null];
        /**
         * Extracts a view of the visible part of the terminal. The
         * entire scrollback buffer is scanned, so it is possible to read the entire
         * contents of the buffer using this function.
         *
         * This method is unaware of BiDi. The columns passed in `start_col` and `end_row`,
         * and returned in `attributes` are logical columns.
         *
         * Since 0.68, passing a non-`null` `array` parameter is deprecated.
         * Since 0.72, passing a non-`null` `array` parameter will make this function
         *   itself return `null`.
         * Since 0.72, passing a non-`null` `is_selected` function will make this function
         *   itself return `null`.
         * @param start_row first row to search for data
         * @param start_col first column to search for data
         * @param end_row last row to search for data
         * @param end_col last column to search for data
         * @param is_selected a {@link Vte.SelectionFunc} callback. Deprecated: 0.44: Always pass `null` here
         * @returns a newly allocated text string, or `null`.
         */
        get_text_range(
            start_row: number,
            start_col: number,
            end_row: number,
            end_col: number,
            is_selected?: SelectionFunc | null,
        ): [string | null, CharAttributes[] | null];
        /**
         * Returns the specified range of text in the specified format.
         * @param format the {@link Vte.Format} to use
         * @param start_row the first row of the range
         * @param start_col the first column of the range
         * @param end_row the last row of the range
         * @param end_col the last column of the range
         * @returns a newly allocated string, or `null`.
         */
        get_text_range_format(
            format: Format | null,
            start_row: number,
            start_col: number,
            end_row: number,
            end_col: number,
        ): [string | null, number];
        /**
         * Gets the currently selected text in the format specified by `format`.
         * Since 0.72, this function also supports {@link Vte.Format.HTML} format.
         * @param format the {@link Vte.Format} to use
         * @returns a newly allocated string containing the selected text, or `null` if there is no selection or the format is not supported
         */
        get_text_selected(format: Format | null): string | null;
        /**
         * Gets the currently selected text in the format specified by `format`.
         * @param format the {@link Vte.Format} to use
         * @returns a newly allocated string containing the selected text, or `null` if there is no selection or the format is not supported
         */
        get_text_selected_full(format: Format | null): [string | null, number];
        /**
         * @returns the window title, or `null`
         */
        get_window_title(): string | null;
        /**
         * Returns the set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If `null`, a built-in set is used.
         * @returns a string, or `null`
         */
        get_word_char_exceptions(): string | null;
        /**
         * @returns the horizontal alignment of `terminal` within its allocation
         */
        get_xalign(): Align;
        /**
         * @returns the horizontal fillment of `terminal` within its allocation
         */
        get_xfill(): boolean;
        /**
         * @returns the vertical alignment of `terminal` within its allocation
         */
        get_yalign(): Align;
        /**
         * @returns the vertical fillment of `terminal` within its allocation
         */
        get_yfill(): boolean;
        /**
         * Returns a nonempty string: the target of the explicit hyperlink (printed using the OSC 8
         * escape sequence) at the position of the event, or `null`.
         *
         * Proper use of the escape sequence should result in URI-encoded URIs with a proper scheme
         * like "http://", "https://", "file://", "mailto:" etc. This is, however, not enforced by VTE.
         * The caller must tolerate the returned string potentially not being a valid URI.
         * @param event a {@link Gdk.Event}
         * @returns a newly allocated string containing the target of the hyperlink,  or `null`
         */
        hyperlink_check_event(event: Gdk.Event): string | null;
        /**
         * This function does nothing since version 0.60.
         * @param gregex a {@link GLib.Regex}
         * @param gflags the {@link GLib.RegexMatchFlags} to use when matching the regex
         * @returns -1
         */
        match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags | null): number;
        /**
         * Adds the regular expression `regex` to the list of matching expressions.  When the
         * user moves the mouse cursor over a section of displayed text which matches
         * this expression, the text will be highlighted.
         *
         * Note that `regex` should have been created using the <literal>PCRE2_MULTILINE</literal>
         * flag.
         * @param regex a {@link Vte.Regex}
         * @param flags PCRE2 match flags, or 0
         * @returns an integer associated with this expression
         */
        match_add_regex(regex: Regex, flags: number): number;
        /**
         * Checks if the text in and around the specified position matches any of the
         * regular expressions previously set using `vte_terminal_match_add()`.  If a
         * match exists, the text string is returned and if `tag` is not `null`, the number
         * associated with the matched regular expression will be stored in `tag`.
         *
         * If more than one regular expression has been set with
         * `vte_terminal_match_add()`, then expressions are checked in the order in
         * which they were added.
         * @param column the text column
         * @param row the text row
         * @returns a newly allocated string which matches one of the previously   set regular expressions
         */
        match_check(column: number, row: number): [string | null, number];
        /**
         * Checks if the text in and around the position of the event matches any of the
         * regular expressions previously set using `vte_terminal_match_add()`.  If a
         * match exists, the text string is returned and if `tag` is not `null`, the number
         * associated with the matched regular expression will be stored in `tag`.
         *
         * If more than one regular expression has been set with
         * `vte_terminal_match_add()`, then expressions are checked in the order in
         * which they were added.
         * @param event a {@link Gdk.Event}
         * @returns a newly allocated string which matches one of the previously   set regular expressions, or `null` if there is no match
         */
        match_check_event(event: Gdk.Event): [string | null, number];
        /**
         * Removes the regular expression which is associated with the given `tag` from
         * the list of expressions which the terminal will highlight when the user
         * moves the mouse cursor over matching text.
         * @param tag the tag of the regex to remove
         */
        match_remove(tag: number): void;
        /**
         * Clears the list of regular expressions the terminal uses to highlight text
         * when the user moves the mouse cursor.
         */
        match_remove_all(): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.  The terminal keeps a reference to `cursor`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor the {@link Gdk.Cursor} which the terminal should use when the pattern is   highlighted, or `null` to use the standard cursor
         */
        match_set_cursor(tag: number, cursor?: Gdk.Cursor | null): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor_name the name of the cursor
         */
        match_set_cursor_name(tag: number, cursor_name: string): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor_type a {@link Gdk.CursorType}
         */
        match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType | null): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child. It's called on paste menu item, or when
         * user presses Shift+Insert.
         */
        paste_clipboard(): void;
        /**
         * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
         * child. The terminal will call also paste the
         * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
         * mouse button.
         */
        paste_primary(): void;
        /**
         * Sends `text` to the terminal's child as if retrived from the clipboard,
         * this differs from `vte_terminal_feed_child()` in that it may process
         * `text` before passing it to the child (e.g. apply bracketed mode)
         * @param text a string to paste
         */
        paste_text(text: string): void;
        /**
         * Creates a new {@link Vte.Pty}, sets the emulation property
         * from {@link Vte.Terminal.emulation}, and sets the size using
         * `terminal`'s size.
         *
         * See `vte_pty_new()` for more information.
         * @param flags flags from {@link Vte.PtyFlags}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns a new {@link Vte.Pty}
         */
        pty_new_sync(flags: PtyFlags | null, cancellable?: Gio.Cancellable | null): Pty;
        /**
         * Returns the value of a {@link Vte.PropertyType.DATA} termprop as a {@link GLib.Bytes}, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value as a {@link GLib.Bytes}, or `null`
         */
        ref_termprop_data_bytes(prop: string): GLib.Bytes | null;
        /**
         * Like `vte_terminal_ref_termprop_data_bytes()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value as a {@link GLib.Bytes}, or `null`
         */
        ref_termprop_data_bytes_by_id(prop: number): GLib.Bytes | null;
        /**
         * Returns the value of a {@link Vte.PropertyType.IMAGE} termprop as a {@link GdkPixbuf.Pixbuf}, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value as a {@link GdkPixbuf.Pixbuf}, or `null`
         */
        ref_termprop_image_pixbuf(prop: string): GdkPixbuf.Pixbuf | null;
        /**
         * Like `vte_terminal_ref_termprop_image_pixbuf()` except that it takes the
         * termprop by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value as a {@link GdkPixbuf.Pixbuf}, or `null`
         */
        ref_termprop_image_pixbuf_by_id(prop: number): GdkPixbuf.Pixbuf | null;
        /**
         * Returns the value of a {@link Vte.PropertyType.IMAGE} termprop as a {@link cairo.Surface},
         *   or `null` if `prop` is unset, or `prop` is not a registered property.
         *
         * The surface will be a {@link cairo.SurfaceType.IMAGE} with format
         * {@link cairo.Format.ARGB32} or {@link cairo.Format.RGB24}.
         *
         * Note that the returned surface is owned by `terminal` and its contents
         * must not be modified.
         * @param prop a termprop name
         * @returns the property's value as a {@link cairo.Surface}, or `null`
         */
        ref_termprop_image_surface(prop: string): cairo.Surface | null;
        /**
         * Like `vte_terminal_ref_termprop_image_surface()` except that it takes the
         * termprop by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value as a {@link cairo.Surface}, or `null`
         */
        ref_termprop_image_surface_by_id(prop: number): cairo.Surface | null;
        /**
         * Returns the value of a {@link Vte.PropertyType.URI} termprop as a {@link GLib.Uri}, or `null` if
         *   `prop` is unset, or `prop` is not a registered property.
         * @param prop a termprop name
         * @returns the property's value as a {@link GLib.Uri}, or `null`
         */
        ref_termprop_uri(prop: string): GLib.Uri | null;
        /**
         * Like `vte_terminal_ref_termprop_uri()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns the property's value as a {@link GLib.Uri}, or `null`
         */
        ref_termprop_uri_by_id(prop: number): GLib.Uri | null;
        /**
         * Returns the value of `prop` as a {@link GLib.Variant}, or `null` if
         *   `prop` unset, or `prop` is not a registered property.
         *
         * The {@link GLib.VariantType} of the returned {@link GLib.Variant} depends on the termprop type:
         * * A {@link Vte.PropertyType.VALUELESS} termprop returns a `G_VARIANT_TYPE_UNIT` variant.
         * * A {@link Vte.PropertyType.BOOL} termprop returns a `G_VARIANT_TYPE_BOOLEAN` variant.
         * * A {@link Vte.PropertyType.INT} termprop returns a `G_VARIANT_TYPE_INT64` variant.
         * * A {@link Vte.PropertyType.UINT} termprop returns a `G_VARIANT_TYPE_UINT64` variant.
         * * A {@link Vte.PropertyType.DOUBLE} termprop returns a `G_VARIANT_TYPE_DOUBLE` variant.
         * * A {@link Vte.PropertyType.RGB} or {@link Vte.PropertyType.RGBA} termprop returns a "(ddddv)"
         *   tuple containing the red, green, blue, and alpha (1.0 for {@link Vte.PropertyType.RGB})
         *   components of the color and a variant of unspecified contents
         * * A {@link Vte.PropertyType.STRING} termprop returns a `G_VARIANT_TYPE_STRING` variant.
         * * A {@link Vte.PropertyType.DATA} termprop returns a "ay" variant (which is *not* a bytestring!).
         * * A {@link Vte.PropertyType.UUID} termprop returns a `G_VARIANT_TYPE_STRING` variant
         *   containing a string representation of the UUID in simple form.
         * * A {@link Vte.PropertyType.URI} termprop returns a `G_VARIANT_TYPE_STRING` variant
         *   containing a string representation of the URI
         * * A {@link Vte.PropertyType.IMAGE} termprop returns `null` since an image has no
         *   variant representation.
         * @param prop a termprop name
         * @returns a floating {@link GLib.Variant}, or `null`
         */
        ref_termprop_variant(prop: string): GLib.Variant | null;
        /**
         * Like `vte_terminal_ref_termprop_variant()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         * @returns a floating {@link GLib.Variant}, or `null`
         */
        ref_termprop_variant_by_id(prop: number): GLib.Variant | null;
        /**
         * Resets as much of the terminal's internal state as possible, discarding any
         * unprocessed input data, resetting character attributes, cursor state,
         * national character set state, status line, terminal modes (insert/delete),
         * selection state, and encoding.
         * @param clear_tabstops whether to reset tabstops
         * @param clear_history whether to empty the terminal's scrollback buffer
         */
        reset(clear_tabstops: boolean, clear_history: boolean): void;
        /**
         * Resets the termprop `prop` to its default value.
         * @param prop a termprop name
         */
        reset_termprop(prop: string): void;
        /**
         * Like `vte_terminal_reset_termprop()` except that it takes the termprop
         * by ID. See that function for more information.
         * @param prop a termprop ID
         */
        reset_termprop_by_id(prop: number): void;
        /**
         * Searches the next string matching the search regex set with
         * `vte_terminal_search_set_regex()`.
         * @returns `true` if a match was found
         */
        search_find_next(): boolean;
        /**
         * Searches the previous string matching the search regex set with
         * `vte_terminal_search_set_regex()`.
         * @returns `true` if a match was found
         */
        search_find_previous(): boolean;
        /**
         * @returns `null`
         */
        search_get_gregex(): GLib.Regex;
        /**
         * @returns the search {@link Vte.Regex} regex set in `terminal`, or `null`
         */
        search_get_regex(): Regex;
        /**
         * @returns whether searching will wrap around
         */
        search_get_wrap_around(): boolean;
        /**
         * This function does nothing since version 0.60.
         * @param gregex a {@link GLib.Regex}, or `null`
         * @param gflags flags from {@link GLib.RegexMatchFlags}
         */
        search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags | null): void;
        /**
         * Sets the regex to search for. Unsets the search regex when passed `null`.
         *
         * Note that `regex` should have been created using the
         * <literal>PCRE2_MULTILINE</literal> flag.
         * @param regex a {@link Vte.Regex}, or `null`
         * @param flags PCRE2 match flags, or 0
         */
        search_set_regex(regex: Regex | null, flags: number): void;
        /**
         * Sets whether search should wrap around to the beginning of the
         * terminal content when reaching its end.
         * @param wrap_around whether search should wrap
         */
        search_set_wrap_around(wrap_around: boolean): void;
        /**
         * Selects all text within the terminal (not including the scrollback buffer).
         */
        select_all(): void;
        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @param allow_bold `true` if the terminal should attempt to draw bold text
         */
        set_allow_bold(allow_bold: boolean): void;
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are allowed.
         * @param allow_hyperlink `true` if the terminal should allow hyperlinks
         */
        set_allow_hyperlink(allow_hyperlink: boolean): void;
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @param is_audible `true` if the terminal should beep
         */
        set_audible_bell(is_audible: boolean): void;
        /**
         * Modifies the terminal's backspace key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the backspace key.
         * @param binding a {@link Vte.EraseBinding} for the backspace key
         */
        set_backspace_binding(binding: EraseBinding | null): void;
        /**
         * Sets whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @param bold_is_bright `true` if bold should also enable bright
         */
        set_bold_is_bright(bold_is_bright: boolean): void;
        /**
         * Sets the terminal's cell height scale to `scale`.
         *
         * This can be used to increase the line spacing. (The font's height is not affected.)
         * Valid values go from 1.0 (default) to 2.0 ("double spacing").
         * @param scale the cell height scale
         */
        set_cell_height_scale(scale: number): void;
        /**
         * Sets the terminal's cell width scale to `scale`.
         *
         * This can be used to increase the letter spacing. (The font's width is not affected.)
         * Valid values go from 1.0 (default) to 2.0.
         * @param scale the cell width scale
         */
        set_cell_width_scale(scale: number): void;
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via `vte_terminal_set_encoding()`,
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         * @param width either 1 (narrow) or 2 (wide)
         */
        set_cjk_ambiguous_width(width: number): void;
        /**
         * Sets whether to paint the background with the background colour.
         * The default is `true`.
         *
         * This function is rarely useful. One use for it is to add a background
         * image to the terminal.
         * @param setting whether to clear the background
         */
        set_clear_background(setting: boolean): void;
        /**
         * Sets the background color for text which does not have a specific background
         * color assigned.  Only has effect when no background image is set and when
         * the terminal is not transparent.
         * @param background the new background color
         */
        set_color_background(background: Gdk.RGBA): void;
        /**
         * Sets the color used to draw bold text in the default foreground color.
         * If `bold` is `null` then the default color is used.
         * @param bold the new bold color or `null`
         */
        set_color_bold(bold?: Gdk.RGBA | null): void;
        /**
         * Sets the background color for text which is under the cursor.  If `null`, text
         * under the cursor will be drawn with foreground and background colors
         * reversed.
         * @param cursor_background the new color to use for the text cursor, or `null`
         */
        set_color_cursor(cursor_background?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color for text which is under the cursor.  If `null`, text
         * under the cursor will be drawn with foreground and background colors
         * reversed.
         * @param cursor_foreground the new color to use for the text cursor, or `null`
         */
        set_color_cursor_foreground(cursor_foreground?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color used to draw normal text.
         * @param foreground the new foreground color
         */
        set_color_foreground(foreground: Gdk.RGBA): void;
        /**
         * Sets the background color for text which is highlighted.  If `null`,
         * it is unset.  If neither highlight background nor highlight foreground are set,
         * highlighted text (which is usually highlighted because it is selected) will
         * be drawn with foreground and background colors reversed.
         * @param highlight_background the new color to use for highlighted text, or `null`
         */
        set_color_highlight(highlight_background?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color for text which is highlighted.  If `null`,
         * it is unset.  If neither highlight background nor highlight foreground are set,
         * highlighted text (which is usually highlighted because it is selected) will
         * be drawn with foreground and background colors reversed.
         * @param highlight_foreground the new color to use for highlighted text, or `null`
         */
        set_color_highlight_foreground(highlight_foreground?: Gdk.RGBA | null): void;
        /**
         * `palette` specifies the new values for the 256 palette colors: 8 standard colors,
         * their 8 bright counterparts, 6x6x6 color cube, and 24 grayscale colors.
         * Omitted entries will default to a hardcoded value.
         *
         * `palette_size` must be 0, 8, 16, 232 or 256.
         *
         * If `foreground` is `null` and `palette_size` is greater than 0, the new foreground
         * color is taken from `palette`[7].  If `background` is `null` and `palette_size` is
         * greater than 0, the new background color is taken from `palette`[0].
         * @param foreground the new foreground color, or `null`
         * @param background the new background color, or `null`
         * @param palette the color palette
         */
        set_colors(foreground?: Gdk.RGBA | null, background?: Gdk.RGBA | null, palette?: Gdk.RGBA[] | null): void;
        /**
         * Sets `menu` as the context menu in `terminal`.
         * Use `null` to unset the current menu.
         *
         * Note that a menu model set with `vte_terminal_set_context_menu_model()`
         * takes precedence over a menu set using this function.
         * @param menu a menu
         */
        set_context_menu(menu?: Gtk.Widget | null): void;
        /**
         * Sets `model` as the context menu model in `terminal`.
         * Use `null` to unset the current menu model.
         * @param model a {@link Gio.MenuModel}
         */
        set_context_menu_model(model?: Gio.MenuModel | null): void;
        /**
         * Sets whether or not the cursor will blink. Using {@link Vte.CursorBlinkMode.SYSTEM}
         * will use the {@link Gtk.Settings.SignalSignatures.gtk_cursor_blink | Gtk.Settings::gtk-cursor-blink} setting.
         * @param mode the {@link Vte.CursorBlinkMode} to use
         */
        set_cursor_blink_mode(mode: CursorBlinkMode | null): void;
        /**
         * Sets the shape of the cursor drawn.
         * @param shape the {@link Vte.CursorShape} to use
         */
        set_cursor_shape(shape: CursorShape | null): void;
        /**
         * Reset the terminal palette to reasonable compiled-in default color.
         */
        set_default_colors(): void;
        /**
         * Modifies the terminal's delete key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the delete key.
         * @param binding a {@link Vte.EraseBinding} for the delete key
         */
        set_delete_binding(binding: EraseBinding | null): void;
        /**
         * Controls whether or not the terminal will communicate with a11y backends.
         * @param enable_a11y `true` to enable a11y support
         */
        set_enable_a11y(enable_a11y: boolean): void;
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         * @param enable_bidi `true` to enable BiDi support
         */
        set_enable_bidi(enable_bidi: boolean): void;
        /**
         * Controls whether the terminal uses scroll events to scroll the history
         * if the event was not otherwise consumed by it.
         *
         * This function is rarely useful, except when the terminal is added to a
         * {@link Gtk.ScrolledWindow}, to perform kinetic scrolling (while vte itself does
         * not, yet, implement kinetic scrolling by itself).
         * @param enable whether to enable fallback scrolling
         */
        set_enable_fallback_scrolling(enable: boolean): void;
        /**
         * Sets whether legacy OSC 777 sequences are translated to
         * their corresponding termprops.
         * @param enable whether to enable legacy OSC 777
         */
        set_enable_legacy_osc777(enable: boolean): void;
        /**
         * Controls whether or not the terminal will shape Arabic text.
         * @param enable_shaping `true` to enable Arabic shaping
         */
        set_enable_shaping(enable_shaping: boolean): void;
        /**
         * Set whether to enable SIXEL images.
         * @param enabled whether to enable SIXEL images
         */
        set_enable_sixel(enabled: boolean): void;
        /**
         * Changes the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding. If `codeset` is `null`, it uses "UTF-8".
         *
         * Note: Support for non-UTF-8 is deprecated and may get removed altogether.
         * Instead of this function, you should use a wrapper like luit(1) when
         * spawning the child process.
         * @param codeset target charset, or `null` to use UTF-8
         * @returns `true` if the encoding could be changed to the specified one,  or `false` with `error` set to {@link GLib.ConvertError.NO_CONVERSION}.
         */
        set_encoding(codeset?: string | null): boolean;
        /**
         * Sets the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using `gtk_widget_modify_font()`.  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.  The font scale is applied to the specified font.
         * @param font_desc a {@link Pango.FontDescription} for the desired font, or `null`
         */
        set_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Sets the terminal's font options to `options`.
         *
         * Note that on GTK4, the terminal by default uses font options
         * with {@link cairo.HintMetrics.ON} set; to override that, use this
         * function to set a {@link cairo.FontOptions} that has
         * {@link cairo.HintMetrics.OFF} set.
         * @param font_options the font options, or `null`
         */
        set_font_options(font_options?: cairo.FontOptions | null): void;
        /**
         * Sets the terminal's font scale to `scale`.
         * @param scale the font scale
         */
        set_font_scale(scale: number): void;
        /**
         * Sets `terminal` as `window`'s geometry widget. See
         * `gtk_window_set_geometry_hints()` for more information.
         *
         * `terminal` must be realized (see `gtk_widget_get_realized()`).
         * @param window a {@link Gtk.Window}
         */
        set_geometry_hints_for_window(window: Gtk.Window): void;
        /**
         * Enables or disables user input. When user input is disabled,
         * the terminal's child will not receive any key press, or mouse button
         * press or motion events sent to it.
         * @param enabled whether to enable user input
         */
        set_input_enabled(enabled: boolean): void;
        /**
         * Changes the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.  This setting can be read using
         * `vte_terminal_get_mouse_autohide()`.
         * @param setting whether the mouse pointer should autohide
         */
        set_mouse_autohide(setting: boolean): void;
        /**
         * Sets `pty` as the PTY to use in `terminal`.
         * Use `null` to unset the PTY.
         * @param pty a {@link Vte.Pty}, or `null`
         */
        set_pty(pty?: Pty | null): void;
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback history, whenever the terminal's width changes.
         * @param rewrap `true` if the terminal should rewrap on resize
         */
        set_rewrap_on_resize(rewrap: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when text is inserted, e.g. by a paste.
         * @param scroll whether the terminal should scroll on insert
         */
        set_scroll_on_insert(scroll: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         * @param scroll whether the terminal should scroll on keystrokes
         */
        set_scroll_on_keystroke(scroll: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         * @param scroll whether the terminal should scroll on output
         */
        set_scroll_on_output(scroll: boolean): void;
        /**
         * Controls whether the terminal's scroll unit is lines or pixels.
         *
         * This function is rarely useful, except when the terminal is added to a
         * {@link Gtk.ScrolledWindow}.
         * @param enable whether to use pixels as scroll unit
         */
        set_scroll_unit_is_pixels(enable: boolean): void;
        /**
         * Sets the length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.
         *
         * A negative value means "infinite scrollback".
         *
         * Using a large scrollback buffer (roughly 1M+ lines) may lead to performance
         * degradation or exhaustion of system resources, and is therefore not recommended.
         *
         * Note that this setting only affects the normal screen buffer.
         * No scrollback is allowed on the alternate screen buffer.
         * @param lines the length of the history buffer
         */
        set_scrollback_lines(lines: number): void;
        /**
         * Attempts to change the terminal's size in terms of rows and columns.  If
         * the attempt succeeds, the widget will resize itself to the proper size.
         * @param columns the desired number of columns
         * @param rows the desired number of rows
         */
        set_size(columns: number, rows: number): void;
        /**
         * Suppress emissions of signals and property notifications
         * that are deprecated.
         */
        set_suppress_legacy_signals(): void;
        /**
         * Controls whether or not the terminal will allow blinking text.
         * @param text_blink_mode the {@link Vte.TextBlinkMode} to use
         */
        set_text_blink_mode(text_blink_mode: TextBlinkMode | null): void;
        /**
         * With this function you can provide a set of characters which will
         * be considered parts of a word when doing word-wise selection, in
         * addition to the default which only considers alphanumeric characters
         * part of a word.
         *
         * The characters in `exceptions` must be non-alphanumeric, each character
         * must occur only once, and if `exceptions` contains the character
         * U+002D HYPHEN-MINUS, it must be at the start of the string.
         *
         * Use `null` to reset the set of exception characters to the default.
         * @param exceptions a string of ASCII punctuation characters, or `null`
         */
        set_word_char_exceptions(exceptions: string): void;
        /**
         * Sets the horizontal alignment of `terminal` within its allocation.
         *
         * Note: `VTE_ALIGN_START_FILL` is not supported, and will be treated
         *   like {@link Vte.Align.START}.
         * @param align alignment value from {@link Vte.Align}
         */
        set_xalign(align: Align | null): void;
        /**
         * Sets the horizontal fillment of `terminal` within its allocation.
         *
         * Note: `VTE_FILL_START_FILL` is not supported, and will be treated
         *   like `VTE_FILL_START`.
         * @param fill fillment value from `VteFill`
         */
        set_xfill(fill: boolean): void;
        /**
         * Sets the vertical alignment of `terminal` within its allocation.
         * @param align alignment value from {@link Vte.Align}
         */
        set_yalign(align: Align | null): void;
        /**
         * Sets the vertical fillment of `terminal` within its allocation.
         * Note that yfill is only supported with yalign set to
         * {@link Vte.Align.START}, and is ignored for all other yalign values.
         * @param fill fillment value from `VteFill`
         */
        set_yfill(fill: boolean): void;
        /**
         * A convenience function that wraps creating the {@link Vte.Pty} and spawning
         * the child process on it. Like `vte_terminal_spawn_with_fds_async()`,
         * except that this function does not allow passing file descriptors to
         * the child process. See `vte_terminal_spawn_with_fds_async()` for more
         * information.
         * @param pty_flags flags from {@link Vte.PtyFlags}
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Vte.TerminalSpawnAsyncCallback}, or `null`
         */
        spawn_async(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: TerminalSpawnAsyncCallback | null,
        ): void;
        /**
         * Starts the specified command under a newly-allocated controlling
         * pseudo-terminal.  The `argv` and `envv` lists should be `null`-terminated.
         * The "TERM" environment variable is automatically set to a default value,
         * but can be overridden from `envv`.
         * `pty_flags` controls logging the session to the specified system log files.
         *
         * Note that {@link GLib.SpawnFlags.DO_NOT_REAP_CHILD} will always be added to `spawn_flags`.
         *
         * Note also that {@link GLib.SpawnFlags.STDOUT_TO_DEV_NULL}, {@link GLib.SpawnFlags.STDERR_TO_DEV_NULL},
         * and {@link GLib.SpawnFlags.CHILD_INHERITS_STDIN} are not supported in `spawn_flags`, since
         * stdin, stdout and stderr of the child process will always be connected to
         * the PTY.
         *
         * Note that all open file descriptors will be closed in the child. If you want
         * to keep some file descriptor open for use in the child process, you need to
         * use a child setup function that unsets the FD_CLOEXEC flag on that file
         * descriptor.
         *
         * See `vte_pty_new()`, `g_spawn_async()` and `vte_terminal_watch_child()` for more information.
         *
         * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
         * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory`,
         * e.g. by using `vte_terminal_get_current_directory_uri()`, `g_get_current_dir()` or `get_current_dir_name()`.
         * @param pty_flags flags from {@link Vte.PtyFlags}
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` on success, or `false` on error with `error` filled in
         */
        spawn_sync(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup?: GLib.SpawnChildSetupFunc | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GLib.Pid | null];
        /**
         * A convenience function that wraps creating the {@link Vte.Pty} and spawning
         * the child process on it. See `vte_pty_new_sync()`, `vte_pty_spawn_with_fds_async()`,
         * and `vte_pty_spawn_finish()` for more information.
         *
         * When the operation is finished successfully, `callback` will be called
         * with the child {@link GLib.Pid}, and a `null` {@link GLib.Error}. The child PID will already be
         * watched via `vte_terminal_watch_child()`.
         *
         * When the operation fails, `callback` will be called with a -1 {@link GLib.Pid},
         * and a non-`null` {@link GLib.Error} containing the error information.
         *
         * Note that {@link GLib.SpawnFlags.STDOUT_TO_DEV_NULL}, {@link GLib.SpawnFlags.STDERR_TO_DEV_NULL},
         * and {@link GLib.SpawnFlags.CHILD_INHERITS_STDIN} are not supported in `spawn_flags`, since
         * stdin, stdout and stderr of the child process will always be connected to
         * the PTY.
         *
         * If `fds` is not `null`, the child process will map the file descriptors from
         * `fds` according to `map_fds`; `n_map_fds` must be less or equal to `n_fds`.
         * This function will take ownership of the file descriptors in `fds`;
         * you must not use or close them after this call.
         *
         * Note that all  open file descriptors apart from those mapped as above
         * will be closed in the child. (If you want to keep some other file descriptor
         * open for use in the child process, you need to use a child setup function
         * that unsets the FD_CLOEXEC flag on that file descriptor manually.)
         *
         * Beginning with 0.60, and on linux only, and unless `VTE_SPAWN_NO_SYSTEMD_SCOPE` is
         * passed in `spawn_flags`, the newly created child process will be moved to its own
         * systemd user scope; and if `VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE` is passed, and creation
         * of the systemd user scope fails, the whole spawn will fail.
         * You can override the options used for the systemd user scope by
         * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
         * for further information.
         *
         * Note that if `terminal` has been destroyed before the operation is called,
         * `callback` will be called with a `null` `terminal`; you must not do anything
         * in the callback besides freeing any resources associated with `user_data`,
         * but taking care not to access the now-destroyed {@link Vte.Terminal}. Note that
         * in this case, if spawning was successful, the child process will be aborted
         * automatically.
         *
         * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
         * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory`,
         * e.g. by using `vte_terminal_get_current_directory_uri()`, `g_get_current_dir()` or `get_current_dir_name()`.
         * @param pty_flags flags from {@link Vte.PtyFlags}
         * @param working_directory the name of a directory the command should start   in, or `null` to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or `null`
         * @param fds an array of file descriptors, or `null`
         * @param map_fds an array of integers, or `null`
         * @param spawn_flags flags from {@link GLib.SpawnFlags}
         * @param child_setup an extra child setup function to run in the child just before `exec()`, or `null`
         * @param child_setup_data_destroy a {@link GLib.DestroyNotify} for `child_setup_data`, or `null`
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Vte.TerminalSpawnAsyncCallback}, or `null`
         */
        spawn_with_fds_async(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            fds: number[] | null,
            map_fds: number[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup: GLib.SpawnChildSetupFunc | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: TerminalSpawnAsyncCallback | null,
        ): void;
        /**
         * Clears the current selection.
         */
        unselect_all(): void;
        /**
         * Watches `child_pid`. When the process exists, the {@link Vte.Terminal.SignalSignatures.child_exited | Vte.Terminal::child-exited}
         * signal will be called with the child's exit status.
         *
         * Prior to calling this function, a {@link Vte.Pty} must have been set in `terminal`
         * using `vte_terminal_set_pty()`.
         * When the child exits, the terminal's {@link Vte.Pty} will be set to `null`.
         *
         * Note: `g_child_watch_add()` or `g_child_watch_add_full()` must not have
         * been called for `child_pid`, nor a {@link GLib.Source} for it been created with
         * `g_child_watch_source_new()`.
         *
         * Note: when using the `g_spawn_async()` family of functions,
         * the {@link GLib.SpawnFlags.DO_NOT_REAP_CHILD} flag MUST have been passed.
         * @param child_pid a {@link GLib.Pid}
         */
        watch_child(child_pid: GLib.Pid): void;
        /**
         * Write contents of the current contents of `terminal` (including any
         * scrollback history) to `stream` according to `flags`.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by triggering
         * the cancellable object from another thread. If the operation was cancelled,
         * the error {@link Gio.IOErrorEnum.CANCELLED} will be returned in `error`.
         *
         * This is a synchronous operation and will make the widget (and input
         * processing) during the write operation, which may take a long time
         * depending on scrollback history and `stream` availability for writing.
         * @param stream a {@link Gio.OutputStream} to write to
         * @param flags a set of {@link Vte.WriteFlags}
         * @param cancellable a {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` if there was an error
         */
        write_contents_sync(
            stream: Gio.OutputStream,
            flags: WriteFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    /**
     * @gir-type Struct
     * @deprecated since 0.68
     */
    class CharAttributes {
        static $gtype: GObject.GType<CharAttributes>;

        // Constructors

        constructor(properties?: Partial<{}>);
    }

    /**
     * Provides context information for a context menu event.
     * @gir-type Struct
     * @since 0.76
     */
    abstract class EventContext {
        static $gtype: GObject.GType<EventContext>;

        // Methods

        /**
         * @returns the {@link Gdk.Event} that triggered the event, or `null` if it was not   triggered by an event
         */
        get_event(): Gdk.Event;
    }

    /**
     * @gir-type Alias
     */
    type PtyClass = typeof Pty;
    /**
     * @gir-type Struct
     */
    class Regex {
        static $gtype: GObject.GType<Regex>;

        // Constructors

        constructor(pattern: string, pattern_length: number, flags: number);

        static new_for_match(pattern: string, pattern_length: number, flags: number): Regex;

        static new_for_match_full(pattern: string, pattern_length: number, flags: number, extra_flags: number): Regex;

        static new_for_search(pattern: string, pattern_length: number, flags: number): Regex;

        static new_for_search_full(pattern: string, pattern_length: number, flags: number, extra_flags: number): Regex;

        // Methods

        /**
         * If the platform supports JITing, JIT compiles `regex`.
         * @param flags PCRE2 JIT flags, or 0
         * @returns `true` if JITing succeeded (or PCRE2 was built without   JIT support), or `false` with `error` filled in
         */
        jit(flags: number): boolean;
        /**
         * Increases the reference count of `regex` by one.
         * @returns `regex`
         */
        ref(): Regex;
        /**
         * See man:pcre2api(3) and man:pcre2_substitute(3) for more information.
         * @param subject the subject string
         * @param replacement the replacement string
         * @param flags PCRE2 match flags
         * @returns the substituted string, or `null`   if an error occurred
         */
        substitute(subject: string, replacement: string, flags: number): string;
        /**
         * Decreases the reference count of `regex` by one, and frees `regex`
         * if the refcount reaches zero.
         * @returns `null`
         */
        unref(): Regex;
    }

    /**
     * @gir-type Alias
     */
    type TerminalClass = typeof Terminal;
    /**
     * @gir-type Struct
     */
    abstract class TerminalClassPrivate {
        static $gtype: GObject.GType<TerminalClassPrivate>;
    }

    /**
     * An object representing an UUID.
     * @gir-type Struct
     * @since 0.78
     */
    class Uuid {
        static $gtype: GObject.GType<Uuid>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static new_from_string(str: string, len: number, fmt: UuidFormat): Uuid;

        static new_v4(): Uuid;

        // Static methods

        /**
         * Checks whether `str` is a valid string representation of an UUID.
         * @param str a string
         * @param len the length of `str`, or -1 is `str` is NUL terminated
         * @param fmt a {@link Vte.UuidFormat}
         */
        static validate_string(str: string, len: number, fmt: UuidFormat): boolean;

        // Methods

        /**
         * Creates a copy of `uuid`.
         * @returns a new copy of @`uuid`
         */
        dup(): Uuid;
        /**
         * Compares `uuid` and `other` for equality.
         * @param other
         * @returns `true` iff `uuid` and `other` are equal
         */
        equal(other: Uuid): boolean;
        /**
         * Frees `uuid`.
         */
        free(): void;
        /**
         * Frees `uuid` and returns its string representation, see
         * `vte_uuid_to_string()` for more information.
         * @param fmt a {@link Vte.UuidFormat}
         * @param len a location to store the length of the returned string, or `null`
         * @returns a string representation of `uuid`
         */
        free_to_string(fmt: UuidFormat | null, len: number): string;
        /**
         * Creates a new UUID for `ns` and `str`.
         * @param data string data
         * @param len the length of `data`, or -1 if `str` is NUL terminated
         * @returns a new v5 UUID
         */
        new_v5(data: string, len: number): Uuid;
        /**
         * Returns the string representation of `uuid`.
         * @param fmt a {@link Vte.UuidFormat}
         * @returns a string representation of `uuid`
         */
        to_string(fmt: UuidFormat | null): [string, number];
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

export default Vte;

// END
