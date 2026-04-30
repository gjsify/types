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
import type TotemPlParser from '@girs/totemplparser-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Totem {
    /**
     * Totem-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace RemoteCommand {
        export const $gtype: GObject.GType<RemoteCommand>;
    }

    /**
     * Represents a command which can be sent to a running Totem instance remotely.
     * @gir-type Enum
     */
    enum RemoteCommand {
        /**
         * unknown command
         */
        UNKNOWN,
        /**
         * play the current stream
         */
        PLAY,
        /**
         * pause the current stream
         */
        PAUSE,
        /**
         * stop playing the current stream
         */
        STOP,
        /**
         * toggle play/pause on the current stream
         */
        PLAY_PAUSE,
        /**
         * play the next playlist item
         */
        NEXT,
        /**
         * play the previous playlist item
         */
        PREVIOUS,
        /**
         * seek forwards in the current stream
         */
        SEEK_FORWARD,
        /**
         * seek backwards in the current stream
         */
        SEEK_BACKWARD,
        /**
         * increase the volume
         */
        VOLUME_UP,
        /**
         * decrease the volume
         */
        VOLUME_DOWN,
        /**
         * toggle fullscreen mode
         */
        FULLSCREEN,
        /**
         * quit the instance of Totem
         */
        QUIT,
        /**
         * enqueue a new playlist item
         */
        ENQUEUE,
        /**
         * replace an item in the playlist
         */
        REPLACE,
        /**
         * show the Totem instance
         */
        SHOW,
        /**
         * go up (DVD controls)
         */
        UP,
        /**
         * go down (DVD controls)
         */
        DOWN,
        /**
         * go left (DVD controls)
         */
        LEFT,
        /**
         * go right (DVD controls)
         */
        RIGHT,
        /**
         * select the current item (DVD controls)
         */
        SELECT,
        /**
         * go to the DVD menu
         */
        DVD_MENU,
        /**
         * increase the zoom level
         */
        ZOOM_UP,
        /**
         * decrease the zoom level
         */
        ZOOM_DOWN,
        /**
         * eject the current disc
         */
        EJECT,
        /**
         * play a DVD in a drive
         */
        PLAY_DVD,
        /**
         * toggle mute
         */
        MUTE,
        /**
         * toggle the aspect ratio
         */
        TOGGLE_ASPECT_RATIO,
    }

    /**
     * @gir-type Enum
     */
    export namespace RemoteSetting {
        export const $gtype: GObject.GType<RemoteSetting>;
    }

    /**
     * Represents a boolean setting or preference on a remote Totem instance.
     * @gir-type Enum
     */
    enum RemoteSetting {
        /**
         * whether repeat is enabled
         */
        REPEAT,
    }

    /**
     * The GSettings schema under which all Totem settings are stored.
     */
    const GSETTINGS_SCHEMA: string;
    /**
     * Return a `null`-terminated array of paths to directories which can contain Totem plugins. This respects the GSettings disable_user_plugins setting.
     * @returns a `null`-terminated array of paths to plugin directories
     * @since 2.90.0
     */
    function get_plugin_paths(): string[];
    /**
     * Put the given `icon_name` into `button`, and pack `button` into `header`
     * according to `pack_type`.
     * @param header The header widget to put the button in
     * @param button The button to use in the header
     * @param icon_name The icon name for the button image
     * @param pack_type A {@link Gtk.PackType} to tell us where to include the button
     * @returns the button passed as input
     */
    function interface_create_header_button(
        header: Gtk.Widget,
        button: Gtk.Widget,
        icon_name: string,
        pack_type: Gtk.PackType,
    ): Gtk.Widget;
    /**
     * Display a modal error dialogue with `title` as its primary error text, and `reason`
     * as its secondary text.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param parent the error dialogue's parent {@link Gtk.Window}
     */
    function interface_error(title: string, reason: string, parent: Gtk.Window): void;
    /**
     * Display a modal error dialogue like `totem_interface_error()` which blocks until the user has
     * dismissed it.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param parent the error dialogue's parent {@link Gtk.Window}
     */
    function interface_error_blocking(title: string, reason: string, parent: Gtk.Window): void;
    /**
     * Display a modal error dialogue like `totem_interface_error()`,
     * but add a button which will open `uri` in a browser window.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param uri the URI to open
     * @param label a label for the URI's button, or `null` to use `uri` as the label
     * @param parent the error dialogue's parent {@link Gtk.Window}
     */
    function interface_error_with_link(
        title: string,
        reason: string,
        uri: string,
        label: string,
        parent: Gtk.Window,
    ): void;
    /**
     * @param name
     */
    function interface_get_full_path(name: string): string;
    /**
     * Load a {@link Gtk.Builder} UI file with the given name and return the {@link Gtk.Builder} instance for it. If loading the file fails, an error dialogue is shown.
     * @param name the {@link Gtk.Builder} UI file to load
     * @param fatal `true` if errors loading the file should be fatal, `false` otherwise
     * @param parent the parent window to use when displaying error dialogues, or `null`
     * @param user_data the user data to pass to `gtk_builder_connect_signals()`, or `null`
     * @returns the loaded {@link Gtk.Builder} object, or `null`
     */
    function interface_load(
        name: string,
        fatal: boolean,
        parent: Gtk.Window | null,
        user_data: any | null,
    ): Gtk.Builder;
    /**
     * Load the image called `name` in the directory given by `totem_interface_get_full_path()` into a {@link GdkPixbuf.Pixbuf}.
     * @param name the image file name
     * @returns the loaded pixbuf, or `null`
     */
    function interface_load_pixbuf(name: string): GdkPixbuf.Pixbuf;
    /**
     * Load a {@link Gtk.Builder} UI file from the given path and return the {@link Gtk.Builder} instance for it. If loading the file fails, an error dialogue is shown.
     * @param filename the {@link Gtk.Builder} UI file path to load
     * @param fatal `true` if errors loading the file should be fatal, `false` otherwise
     * @param parent the parent window to use when displaying error dialogues, or `null`
     * @param user_data the user data to pass to `gtk_builder_connect_signals()`, or `null`
     * @returns the loaded {@link Gtk.Builder} object, or `null`
     */
    function interface_load_with_full_path(
        filename: string,
        fatal: boolean,
        parent: Gtk.Window | null,
        user_data: any | null,
    ): Gtk.Builder;
    /**
     * Finds the specified `file` by looking in the plugin paths
     * listed by `totem_get_plugin_paths()` and then in the system
     * Totem data directory.
     *
     * This should be used by plugins to find plugin-specific
     * resource files.
     * @param plugin_name the plugin name
     * @param file the file to find
     * @returns a newly-allocated absolute path for the file, or `null`
     */
    function plugin_find_file(plugin_name: string, file: string): string;
    /**
     * Loads an interface file (GtkBuilder UI file) for a plugin, given its filename and
     * assuming it's installed in the plugin's data directory.
     *
     * This should be used instead of attempting to load interfaces manually in plugins.
     * @param plugin_name the plugin name
     * @param name interface filename
     * @param fatal `true` if it's a fatal error if the interface can't be loaded
     * @param parent the interface's parent {@link Gtk.Window}
     * @param user_data a pointer to be passed to each signal handler in the interface when they're called
     * @returns the {@link Gtk.Builder} instance for the interface
     */
    function plugin_load_interface(
        plugin_name: string,
        name: string,
        fatal: boolean,
        parent: Gtk.Window | null,
        user_data: any | null,
    ): Gtk.Builder;
    function remote_command_quark(): GLib.Quark;
    function remote_setting_quark(): GLib.Quark;
    namespace Object {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            /**
             * The {@link Totem.Object.SignalSignatures.file_closed | Totem.Object::file-closed} signal is emitted when Totem closes a stream.
             * @signal
             * @run-last
             */
            'file-closed': () => void;
            /**
             * The {@link Totem.Object.SignalSignatures.file_has_played | Totem.Object::file-has-played} signal is emitted when a new stream has started playing in Totem.
             * @signal
             * @run-last
             */
            'file-has-played': (arg0: string) => void;
            /**
             * The {@link Totem.Object.SignalSignatures.file_opened | Totem.Object::file-opened} signal is emitted when a new stream is opened by Totem.
             * @signal
             * @run-last
             */
            'file-opened': (arg0: string) => void;
            /**
             * The {@link Totem.Object.SignalSignatures.get_text_subtitle | Totem.Object::get-text-subtitle} signal is emitted before opening a stream, so that plugins
             * have the opportunity to detect or download text subtitles for the stream if necessary.
             * @signal
             * @run-last
             */
            'get-text-subtitle': (arg0: string) => string;
            /**
             * The {@link Totem.Object.SignalSignatures.get_user_agent | Totem.Object::get-user-agent} signal is emitted before opening a stream, so that plugins
             * have the opportunity to return the user-agent to be set.
             * @signal
             * @run-last
             */
            'get-user-agent': (arg0: string) => string;
            /**
             * The {@link Totem.Object.SignalSignatures.metadata_updated | Totem.Object::metadata-updated} signal is emitted when the metadata of a stream is updated, typically
             * when it's being loaded.
             * @signal
             * @run-last
             */
            'metadata-updated': (arg0: string, arg1: string, arg2: string, arg3: number) => void;
            'notify::current-content-type': (pspec: GObject.ParamSpec) => void;
            'notify::current-display-name': (pspec: GObject.ParamSpec) => void;
            'notify::current-mrl': (pspec: GObject.ParamSpec) => void;
            'notify::current-time': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::main-page': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
            'notify::seekable': (pspec: GObject.ParamSpec) => void;
            'notify::stream-length': (pspec: GObject.ParamSpec) => void;
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Application.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps {
            current_content_type: string;
            currentContentType: string;
            current_display_name: string;
            currentDisplayName: string;
            current_mrl: string;
            currentMrl: string;
            current_time: bigint | number;
            currentTime: bigint | number;
            fullscreen: boolean;
            main_page: string;
            mainPage: string;
            playing: boolean;
            seekable: boolean;
            stream_length: bigint | number;
            streamLength: bigint | number;
        }
    }

    /**
     * All the fields in the {@link Totem.Object} structure are private and should never be accessed directly.
     * @gir-type Class
     */
    class Object extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Object>;

        // Properties

        /**
         * The content-type of the current stream.
         * @read-only
         */
        get current_content_type(): string;
        /**
         * The content-type of the current stream.
         * @read-only
         */
        get currentContentType(): string;
        /**
         * The display name of the current stream.
         * @read-only
         */
        get current_display_name(): string;
        /**
         * The display name of the current stream.
         * @read-only
         */
        get currentDisplayName(): string;
        /**
         * The MRL of the current stream.
         * @read-only
         */
        get current_mrl(): string;
        /**
         * The MRL of the current stream.
         * @read-only
         */
        get currentMrl(): string;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         * @read-only
         */
        get current_time(): number;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         * @read-only
         */
        get currentTime(): number;
        /**
         * If `true`, Totem is in fullscreen mode.
         * @read-only
         */
        get fullscreen(): boolean;
        /**
         * The name of the current main page (usually "grilo", or "player").
         * @read-only
         */
        get main_page(): string;
        /**
         * The name of the current main page (usually "grilo", or "player").
         * @read-only
         */
        get mainPage(): string;
        /**
         * If `true`, Totem is playing an audio or video file.
         * @read-only
         */
        get playing(): boolean;
        /**
         * If `true`, the current stream is seekable.
         * @read-only
         */
        get seekable(): boolean;
        /**
         * The length of the current stream, in milliseconds.
         * @read-only
         */
        get stream_length(): number;
        /**
         * The length of the current stream, in milliseconds.
         * @read-only
         */
        get streamLength(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the full list of file content types which Totem supports playing.
         */
        static get_supported_content_types(): string[];
        /**
         * Get the full list of URI schemes which Totem supports accessing.
         */
        static get_supported_uri_schemes(): string[];

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_file_closed(): void;
        /**
         * @param mrl
         * @virtual
         */
        vfunc_file_has_played(mrl: string): void;
        /**
         * @param mrl
         * @virtual
         */
        vfunc_file_opened(mrl: string): void;
        /**
         * @param mrl
         * @virtual
         */
        vfunc_get_text_subtitle(mrl: string): string;
        /**
         * @param mrl
         * @virtual
         */
        vfunc_get_user_agent(mrl: string): string;
        /**
         * @param artist
         * @param title
         * @param album
         * @param track_num
         * @virtual
         */
        vfunc_metadata_updated(artist: string, title: string, album: string, track_num: number): void;

        // Methods

        /**
         * Add `uri` to the playlist and play it immediately.
         * @param uri the URI to add to the playlist
         * @param display_name the display name of the URI
         * @param play whether to play the added item
         */
        add_to_playlist(uri: string, display_name: string, play: boolean): void;
        /**
         * Adds a local media file to the main view.
         * @param file a {@link Gio.File} representing a media
         * @param title a title for the media, or `null`
         */
        add_to_view(file: Gio.File, title: string): void;
        /**
         * Returns true if `totem_object_seek_next()` would have an effect.
         */
        can_seek_next(): boolean;
        /**
         * Returns true if `totem_object_seek_previous()` would have an effect.
         */
        can_seek_previous(): boolean;
        /**
         * Empties the current playlist.
         */
        clear_playlist(): void;
        /**
         * Empty the GMenu section pointed to by `id`, and remove any
         * related actions. Note that menu items with specific target
         * will not have the associated action removed.
         * @param id the ID for the menu section to empty
         */
        empty_menu_section(id: string): void;
        /**
         * Closes Totem.
         */
        exit(): void;
        /**
         * Get the MRL of the current stream, or `null` if nothing's playing.
         * Free with `g_free()`.
         * @returns a newly-allocated string containing the MRL of the current stream
         */
        get_current_mrl(): string;
        /**
         * Gets the current position's time in the stream as a gint64.
         * @returns the current position in the stream
         */
        get_current_time(): number;
        /**
         * Gets Totem's main window and increments its reference count.
         * @returns Totem's main window
         */
        get_main_window(): Gtk.Window;
        /**
         * Get the {@link Gio.Menu} of the given `id` from the main Totem {@link Gtk.Builder} file.
         * @param id the ID for the menu section to look up
         * @returns a {@link Gio.Menu} or `null` on failure
         */
        get_menu_section(id: string): Gio.Menu | null;
        /**
         * Returns the length of the current playlist.
         * @returns the playlist length
         */
        get_playlist_length(): number;
        /**
         * Returns the <code class="literal">0</code>-based index of the current entry in the playlist. If
         * there is no current entry in the playlist, <code class="literal">-1</code> is returned.
         * @returns the index of the current playlist entry, or <code class="literal">-1</code>
         */
        get_playlist_pos(): number;
        /**
         * Gets the current playback rate, with `1.0` being the normal playback rate.
         * @returns the volume level
         */
        get_rate(): number;
        /**
         * Gets the title of the current entry in the playlist.
         * @returns the current entry's title, or `null`; free with `g_free()`
         */
        get_short_title(): string;
        /**
         * Gets the title of the playlist entry at `index`.
         * @param playlist_index the <code class="literal">0</code>-based entry index
         * @returns the entry title at `index`, or `null`; free with `g_free()`
         */
        get_title_at_playlist_pos(playlist_index: number): string;
        /**
         * Gets Totem's video widget and increments its reference count.
         * @returns Totem's video widget
         */
        get_video_widget(): Gtk.Widget;
        /**
         * Gets the current volume level, as a value between <code class="literal">0.0</code> and <code class="literal">1.0</code>.
         * @returns the volume level
         */
        get_volume(): number;
        /**
         * Returns `true` if Totem is fullscreened.
         * @returns `true` if Totem is fullscreened
         */
        is_fullscreen(): boolean;
        /**
         * Returns `true` if playback is paused.
         * @returns `true` if playback is paused, `false` otherwise
         */
        is_paused(): boolean;
        /**
         * Returns `true` if Totem is playing a stream.
         * @returns `true` if Totem is playing a stream
         */
        is_playing(): boolean;
        /**
         * Returns `true` if the current stream is seekable.
         * @returns `true` if the current stream is seekable
         */
        is_seekable(): boolean;
        /**
         * Switches to the next angle, if watching a DVD. If not watching a DVD, this is a
         * no-op.
         */
        next_angle(): void;
        /**
         * Pauses the current stream. If Totem is already paused, it continues
         * to be paused.
         */
        pause(): void;
        /**
         * Plays the current stream. If Totem is already playing, it continues
         * to play. If the stream cannot be played, and error dialog is displayed.
         */
        play(): void;
        /**
         * Gets the current MRL from the playlist and attempts to play it.
         * If the stream is already playing, playback is paused.
         */
        play_pause(): void;
        /**
         * Executes the specified `cmd` on this instance of Totem. If `cmd`
         * is an operation requiring an MRL, `url` is required; it can be `null`
         * otherwise.
         *
         * If Totem's fullscreened and the operation is executed correctly,
         * the controls will appear as if the user had moved the mouse.
         * @param cmd a {@link Totem.RemoteCommand}
         * @param url an MRL to play, or `null`
         */
        remote_command(cmd: RemoteCommand, url: string): void;
        /**
         * Returns the value of `setting` for this instance of Totem.
         * @param setting a {@link Totem.RemoteSetting}
         * @returns `true` if the setting is enabled, `false` otherwise
         */
        remote_get_setting(setting: RemoteSetting): boolean;
        /**
         * Sets `setting` to `value` on this instance of Totem.
         * @param setting a {@link Totem.RemoteSetting}
         * @param value the new value for the setting
         */
        remote_set_setting(setting: RemoteSetting, value: boolean): void;
        /**
         * If a DVD is being played, goes to the next chapter. If a normal stream
         * is being played, plays the next entry in the playlist.
         */
        seek_next(): void;
        /**
         * If a DVD is being played, goes to the previous chapter. If a normal stream
         * is being played, goes to the start of the stream if possible. If seeking is
         * not possible, plays the previous entry in the playlist.
         */
        seek_previous(): void;
        /**
         * Seeks to an `offset` from the current position in the stream,
         * or displays an error dialog if that's not possible.
         * @param offset the time offset to seek to
         * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
         */
        seek_relative(offset: bigint | number, accurate: boolean): void;
        /**
         * Seeks to an absolute time in the stream, or displays an
         * error dialog if that's not possible.
         * @param msec the time to seek to
         * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
         */
        seek_time(msec: bigint | number, accurate: boolean): void;
        /**
         * Add the `subtitle_uri` subtitle file to the playlist, setting it as the subtitle for the current
         * playlist entry.
         * @param subtitle_uri the URI of the subtitle file to add
         */
        set_current_subtitle(subtitle_uri: string): void;
        /**
         * Sets the playback rate, with `1.0` being the normal playback rate.
         * @param rate the new absolute playback rate
         * @returns `true` on success, `false` on failure.
         */
        set_rate(rate: number): boolean;
        /**
         * Sets the volume, with <code class="literal">1.0</code> being the maximum, and <code class="literal">0.0</code> being the minimum level.
         * @param volume the new absolute volume value
         */
        set_volume(volume: number): void;
        /**
         * Displays a non-blocking error dialog with the
         * given `title` and `reason`.
         * @param title the error dialog title
         * @param reason the error dialog text
         */
        show_error(title: string, reason: string): void;
        /**
         * Stops playback, and sets the playlist back at the start.
         */
        stop(): void;
    }

    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
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

export default Totem;

// END
