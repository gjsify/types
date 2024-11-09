/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type TotemPlParser from '@girs/totemplparser-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
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
     * Represents a command which can be sent to a running Totem instance remotely.
     */

    /**
     * Represents a command which can be sent to a running Totem instance remotely.
     */
    export namespace RemoteCommand {
        export const $gtype: GObject.GType<RemoteCommand>;
    }

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
     * Represents a boolean setting or preference on a remote Totem instance.
     */

    /**
     * Represents a boolean setting or preference on a remote Totem instance.
     */
    export namespace RemoteSetting {
        export const $gtype: GObject.GType<RemoteSetting>;
    }

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
     * Return a %NULL-terminated array of paths to directories which can contain Totem plugins. This respects the GSettings disable_user_plugins setting.
     * @returns a %NULL-terminated array of paths to plugin directories
     */
    function get_plugin_paths(): string[];
    /**
     * Put the given `icon_name` into `button,` and pack `button` into `header`
     * according to `pack_type`.
     * @param header The header widget to put the button in
     * @param button The button to use in the header
     * @param icon_name The icon name for the button image
     * @param pack_type A #GtkPackType to tell us where to include the button
     * @returns the button passed as input
     */
    function interface_create_header_button(
        header: Gtk.Widget,
        button: Gtk.Widget,
        icon_name: string,
        pack_type: Gtk.PackType | null,
    ): Gtk.Widget;
    /**
     * Display a modal error dialogue with `title` as its primary error text, and `reason`
     * as its secondary text.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param parent the error dialogue's parent #GtkWindow
     */
    function interface_error(title: string, reason: string, parent: Gtk.Window): void;
    /**
     * Display a modal error dialogue like totem_interface_error() which blocks until the user has
     * dismissed it.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param parent the error dialogue's parent #GtkWindow
     */
    function interface_error_blocking(title: string, reason: string, parent: Gtk.Window): void;
    /**
     * Display a modal error dialogue like totem_interface_error(),
     * but add a button which will open `uri` in a browser window.
     * @param title the error title
     * @param reason the error reason (secondary text)
     * @param uri the URI to open
     * @param label a label for the URI's button, or %NULL to use @uri as the label
     * @param parent the error dialogue's parent #GtkWindow
     */
    function interface_error_with_link(
        title: string,
        reason: string,
        uri: string,
        label: string,
        parent: Gtk.Window,
    ): void;
    function interface_get_full_path(name: string): string;
    /**
     * Load a #GtkBuilder UI file with the given name and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
     * @param name the #GtkBuilder UI file to load
     * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
     * @param parent the parent window to use when displaying error dialogues, or %NULL
     * @param user_data the user data to pass to gtk_builder_connect_signals(), or %NULL
     * @returns the loaded #GtkBuilder object, or %NULL
     */
    function interface_load(
        name: string,
        fatal: boolean,
        parent?: Gtk.Window | null,
        user_data?: any | null,
    ): Gtk.Builder;
    /**
     * Load the image called `name` in the directory given by totem_interface_get_full_path() into a #GdkPixbuf.
     * @param name the image file name
     * @returns the loaded pixbuf, or %NULL
     */
    function interface_load_pixbuf(name: string): GdkPixbuf.Pixbuf;
    /**
     * Load a #GtkBuilder UI file from the given path and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
     * @param filename the #GtkBuilder UI file path to load
     * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
     * @param parent the parent window to use when displaying error dialogues, or %NULL
     * @param user_data the user data to pass to gtk_builder_connect_signals(), or %NULL
     * @returns the loaded #GtkBuilder object, or %NULL
     */
    function interface_load_with_full_path(
        filename: string,
        fatal: boolean,
        parent?: Gtk.Window | null,
        user_data?: any | null,
    ): Gtk.Builder;
    /**
     * Finds the specified `file` by looking in the plugin paths
     * listed by totem_get_plugin_paths() and then in the system
     * Totem data directory.
     *
     * This should be used by plugins to find plugin-specific
     * resource files.
     * @param plugin_name the plugin name
     * @param file the file to find
     * @returns a newly-allocated absolute path for the file, or %NULL
     */
    function plugin_find_file(plugin_name: string, file: string): string;
    /**
     * Loads an interface file (GtkBuilder UI file) for a plugin, given its filename and
     * assuming it's installed in the plugin's data directory.
     *
     * This should be used instead of attempting to load interfaces manually in plugins.
     * @param plugin_name the plugin name
     * @param name interface filename
     * @param fatal %TRUE if it's a fatal error if the interface can't be loaded
     * @param parent the interface's parent #GtkWindow
     * @param user_data a pointer to be passed to each signal handler in the interface when they're called
     * @returns the #GtkBuilder instance for the interface
     */
    function plugin_load_interface(
        plugin_name: string,
        name: string,
        fatal: boolean,
        parent?: Gtk.Window | null,
        user_data?: any | null,
    ): Gtk.Builder;
    function remote_command_quark(): GLib.Quark;
    function remote_setting_quark(): GLib.Quark;
    module Object {
        // Signal callback interfaces

        interface FileClosed {
            (): void;
        }

        interface FileHasPlayed {
            (mrl: string): void;
        }

        interface FileOpened {
            (mrl: string): void;
        }

        interface GetTextSubtitle {
            (mrl: string): string;
        }

        interface GetUserAgent {
            (mrl: string): string;
        }

        interface MetadataUpdated {
            (artist: string, title: string, album: string, track_number: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Application.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps {
            current_content_type: string;
            currentContentType: string;
            current_display_name: string;
            currentDisplayName: string;
            current_mrl: string;
            currentMrl: string;
            current_time: number;
            currentTime: number;
            fullscreen: boolean;
            main_page: string;
            mainPage: string;
            playing: boolean;
            seekable: boolean;
            stream_length: number;
            streamLength: number;
        }
    }

    /**
     * All the fields in the #TotemObject structure are private and should never be accessed directly.
     */
    class Object extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Object>;

        // Properties

        /**
         * The content-type of the current stream.
         */
        get current_content_type(): string;
        /**
         * The content-type of the current stream.
         */
        get currentContentType(): string;
        /**
         * The display name of the current stream.
         */
        get current_display_name(): string;
        /**
         * The display name of the current stream.
         */
        get currentDisplayName(): string;
        /**
         * The MRL of the current stream.
         */
        get current_mrl(): string;
        /**
         * The MRL of the current stream.
         */
        get currentMrl(): string;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         */
        get current_time(): number;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         */
        get currentTime(): number;
        /**
         * If %TRUE, Totem is in fullscreen mode.
         */
        get fullscreen(): boolean;
        /**
         * The name of the current main page (usually "grilo", or "player").
         */
        get main_page(): string;
        /**
         * The name of the current main page (usually "grilo", or "player").
         */
        get mainPage(): string;
        /**
         * If %TRUE, Totem is playing an audio or video file.
         */
        get playing(): boolean;
        /**
         * If %TRUE, the current stream is seekable.
         */
        get seekable(): boolean;
        /**
         * The length of the current stream, in milliseconds.
         */
        get stream_length(): number;
        /**
         * The length of the current stream, in milliseconds.
         */
        get streamLength(): number;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'file-closed', callback: (_source: this) => void): number;
        connect_after(signal: 'file-closed', callback: (_source: this) => void): number;
        emit(signal: 'file-closed'): void;
        connect(signal: 'file-has-played', callback: (_source: this, mrl: string) => void): number;
        connect_after(signal: 'file-has-played', callback: (_source: this, mrl: string) => void): number;
        emit(signal: 'file-has-played', mrl: string): void;
        connect(signal: 'file-opened', callback: (_source: this, mrl: string) => void): number;
        connect_after(signal: 'file-opened', callback: (_source: this, mrl: string) => void): number;
        emit(signal: 'file-opened', mrl: string): void;
        connect(signal: 'get-text-subtitle', callback: (_source: this, mrl: string) => string): number;
        connect_after(signal: 'get-text-subtitle', callback: (_source: this, mrl: string) => string): number;
        emit(signal: 'get-text-subtitle', mrl: string): void;
        connect(signal: 'get-user-agent', callback: (_source: this, mrl: string) => string): number;
        connect_after(signal: 'get-user-agent', callback: (_source: this, mrl: string) => string): number;
        emit(signal: 'get-user-agent', mrl: string): void;
        connect(
            signal: 'metadata-updated',
            callback: (_source: this, artist: string, title: string, album: string, track_number: number) => void,
        ): number;
        connect_after(
            signal: 'metadata-updated',
            callback: (_source: this, artist: string, title: string, album: string, track_number: number) => void,
        ): number;
        emit(signal: 'metadata-updated', artist: string, title: string, album: string, track_number: number): void;

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

        vfunc_file_closed(): void;
        vfunc_file_has_played(mrl: string): void;
        vfunc_file_opened(mrl: string): void;
        vfunc_get_text_subtitle(mrl: string): string;
        vfunc_get_user_agent(mrl: string): string;
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
         * @param file a #GFile representing a media
         * @param title a title for the media, or %NULL
         */
        add_to_view(file: Gio.File, title: string): void;
        /**
         * Returns true if totem_object_seek_next() would have an effect.
         */
        can_seek_next(): boolean;
        /**
         * Returns true if totem_object_seek_previous() would have an effect.
         */
        can_seek_previous(): boolean;
        /**
         * Empties the current playlist.
         */
        clear_playlist(): void;
        /**
         * Empty the GMenu section pointed to by `id,` and remove any
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
         * Get the MRL of the current stream, or %NULL if nothing's playing.
         * Free with g_free().
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
         * Get the #GMenu of the given `id` from the main Totem #GtkBuilder file.
         * @param id the ID for the menu section to look up
         * @returns a #GMenu or %NULL on failure
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
         * @returns the current entry's title, or %NULL; free with g_free()
         */
        get_short_title(): string;
        /**
         * Gets the title of the playlist entry at `index`.
         * @param playlist_index the <code class="literal">0</code>-based entry index
         * @returns the entry title at @index, or %NULL; free with g_free()
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
         * Returns %TRUE if Totem is fullscreened.
         * @returns %TRUE if Totem is fullscreened
         */
        is_fullscreen(): boolean;
        /**
         * Returns %TRUE if playback is paused.
         * @returns %TRUE if playback is paused, %FALSE otherwise
         */
        is_paused(): boolean;
        /**
         * Returns %TRUE if Totem is playing a stream.
         * @returns %TRUE if Totem is playing a stream
         */
        is_playing(): boolean;
        /**
         * Returns %TRUE if the current stream is seekable.
         * @returns %TRUE if the current stream is seekable
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
         * is an operation requiring an MRL, `url` is required; it can be %NULL
         * otherwise.
         *
         * If Totem's fullscreened and the operation is executed correctly,
         * the controls will appear as if the user had moved the mouse.
         * @param cmd a #TotemRemoteCommand
         * @param url an MRL to play, or %NULL
         */
        remote_command(cmd: RemoteCommand | null, url: string): void;
        /**
         * Returns the value of `setting` for this instance of Totem.
         * @param setting a #TotemRemoteSetting
         * @returns %TRUE if the setting is enabled, %FALSE otherwise
         */
        remote_get_setting(setting: RemoteSetting | null): boolean;
        /**
         * Sets `setting` to `value` on this instance of Totem.
         * @param setting a #TotemRemoteSetting
         * @param value the new value for the setting
         */
        remote_set_setting(setting: RemoteSetting | null, value: boolean): void;
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
        seek_relative(offset: number, accurate: boolean): void;
        /**
         * Seeks to an absolute time in the stream, or displays an
         * error dialog if that's not possible.
         * @param msec the time to seek to
         * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
         */
        seek_time(msec: number, accurate: boolean): void;
        /**
         * Add the `subtitle_uri` subtitle file to the playlist, setting it as the subtitle for the current
         * playlist entry.
         * @param subtitle_uri the URI of the subtitle file to add
         */
        set_current_subtitle(subtitle_uri: string): void;
        /**
         * Sets the playback rate, with `1.0` being the normal playback rate.
         * @param rate the new absolute playback rate
         * @returns %TRUE on success, %FALSE on failure.
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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

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
