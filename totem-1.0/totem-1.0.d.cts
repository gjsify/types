
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './totem-1.0-ambient.d.ts';
import './totem-1.0-import.d.ts';
/**
 * Totem-1.0
 */

import type TotemPlParser from '@girs/totemplparser-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

/**
 * Represents a command which can be sent to a running Totem instance remotely.
 */
export enum RemoteCommand {
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
export enum RemoteSetting {
    /**
     * whether repeat is enabled
     */
    REPEAT,
}
/**
 * The GSettings schema under which all Totem settings are stored.
 */
export const GSETTINGS_SCHEMA: string
/**
 * Return a %NULL-terminated array of paths to directories which can contain Totem plugins. This respects the GSettings disable_user_plugins setting.
 * @returns a %NULL-terminated array of paths to plugin directories
 */
export function get_plugin_paths(): string[]
/**
 * Put the given `icon_name` into `button,` and pack `button` into `header`
 * according to `pack_type`.
 * @param header The header widget to put the button in
 * @param button The button to use in the header
 * @param icon_name The icon name for the button image
 * @param pack_type A #GtkPackType to tell us where to include the button
 * @returns the button passed as input
 */
export function interface_create_header_button(header: Gtk.Widget, button: Gtk.Widget, icon_name: string, pack_type: Gtk.PackType): Gtk.Widget
/**
 * Display a modal error dialogue with `title` as its primary error text, and `reason`
 * as its secondary text.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interface_error(title: string, reason: string, parent: Gtk.Window): void
/**
 * Display a modal error dialogue like totem_interface_error() which blocks until the user has
 * dismissed it.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interface_error_blocking(title: string, reason: string, parent: Gtk.Window): void
/**
 * Display a modal error dialogue like totem_interface_error(),
 * but add a button which will open `uri` in a browser window.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param uri the URI to open
 * @param label a label for the URI's button, or %NULL to use `uri` as the label
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interface_error_with_link(title: string, reason: string, uri: string, label: string, parent: Gtk.Window): void
export function interface_get_full_path(name: string): string | null
/**
 * Load a #GtkBuilder UI file with the given name and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
 * @param name the #GtkBuilder UI file to load
 * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
 * @param parent the parent window to use when displaying error dialogues, or %NULL
 * @param user_data the user data to pass to gtk_builder_connect_signals(), or %NULL
 * @returns the loaded #GtkBuilder object, or %NULL
 */
export function interface_load(name: string, fatal: boolean, parent: Gtk.Window | null, user_data: any | null): Gtk.Builder
/**
 * Load the image called `name` in the directory given by totem_interface_get_full_path() into a #GdkPixbuf.
 * @param name the image file name
 * @returns the loaded pixbuf, or %NULL
 */
export function interface_load_pixbuf(name: string): GdkPixbuf.Pixbuf
/**
 * Load a #GtkBuilder UI file from the given path and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
 * @param filename the #GtkBuilder UI file path to load
 * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
 * @param parent the parent window to use when displaying error dialogues, or %NULL
 * @param user_data the user data to pass to gtk_builder_connect_signals(), or %NULL
 * @returns the loaded #GtkBuilder object, or %NULL
 */
export function interface_load_with_full_path(filename: string, fatal: boolean, parent: Gtk.Window | null, user_data: any | null): Gtk.Builder
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
export function plugin_find_file(plugin_name: string, file: string): string | null
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
export function plugin_load_interface(plugin_name: string, name: string, fatal: boolean, parent: Gtk.Window | null, user_data: any | null): Gtk.Builder
export function remote_command_quark(): GLib.Quark
export function remote_setting_quark(): GLib.Quark
export module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `file-closed`
     */
    export interface FileClosedSignalCallback {
        ($obj: Object): void
    }

    /**
     * Signal callback interface for `file-has-played`
     */
    export interface FileHasPlayedSignalCallback {
        ($obj: Object, mrl: string | null): void
    }

    /**
     * Signal callback interface for `file-opened`
     */
    export interface FileOpenedSignalCallback {
        ($obj: Object, mrl: string | null): void
    }

    /**
     * Signal callback interface for `get-text-subtitle`
     */
    export interface GetTextSubtitleSignalCallback {
        ($obj: Object, mrl: string | null): string | null
    }

    /**
     * Signal callback interface for `get-user-agent`
     */
    export interface GetUserAgentSignalCallback {
        ($obj: Object, mrl: string | null): string | null
    }

    /**
     * Signal callback interface for `metadata-updated`
     */
    export interface MetadataUpdatedSignalCallback {
        ($obj: Object, artist: string | null, title: string | null, album: string | null, track_number: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

export interface Object extends Gio.ActionGroup, Gio.ActionMap {

    // Own properties of Totem-1.0.Totem.Object

    /**
     * The content-type of the current stream.
     */
    readonly currentContentType: string | null
    /**
     * The display name of the current stream.
     */
    readonly currentDisplayName: string | null
    /**
     * The MRL of the current stream.
     */
    readonly currentMrl: string | null
    /**
     * The player's position (time) in the current stream, in milliseconds.
     */
    readonly currentTime: number
    /**
     * If %TRUE, Totem is in fullscreen mode.
     */
    readonly fullscreen: boolean
    /**
     * The name of the current main page (usually "grilo", or "player").
     */
    readonly mainPage: string | null
    /**
     * If %TRUE, Totem is playing an audio or video file.
     */
    readonly playing: boolean
    /**
     * If %TRUE, the current stream is seekable.
     */
    readonly seekable: boolean
    /**
     * The length of the current stream, in milliseconds.
     */
    readonly streamLength: number

    // Owm methods of Totem-1.0.Totem.Object

    /**
     * Add `uri` to the playlist and play it immediately.
     * @param uri the URI to add to the playlist
     * @param display_name the display name of the URI
     * @param play whether to play the added item
     */
    add_to_playlist(uri: string, display_name: string, play: boolean): void
    /**
     * Adds a local media file to the main view.
     * @param file a #GFile representing a media
     * @param title a title for the media, or %NULL
     */
    add_to_view(file: Gio.File, title: string): void
    /**
     * Returns true if totem_object_seek_next() would have an effect.
     */
    can_seek_next(): boolean
    /**
     * Returns true if totem_object_seek_previous() would have an effect.
     */
    can_seek_previous(): boolean
    /**
     * Empties the current playlist.
     */
    clear_playlist(): void
    /**
     * Empty the GMenu section pointed to by `id,` and remove any
     * related actions. Note that menu items with specific target
     * will not have the associated action removed.
     * @param id the ID for the menu section to empty
     */
    empty_menu_section(id: string): void
    /**
     * Closes Totem.
     */
    exit(): void
    /**
     * Get the MRL of the current stream, or %NULL if nothing's playing.
     * Free with g_free().
     * @returns a newly-allocated string containing the MRL of the current stream
     */
    get_current_mrl(): string | null
    /**
     * Gets the current position's time in the stream as a gint64.
     * @returns the current position in the stream
     */
    get_current_time(): number
    /**
     * Gets Totem's main window and increments its reference count.
     * @returns Totem's main window
     */
    get_main_window(): Gtk.Window
    /**
     * Get the #GMenu of the given `id` from the main Totem #GtkBuilder file.
     * @param id the ID for the menu section to look up
     * @returns a #GMenu or %NULL on failure
     */
    get_menu_section(id: string): Gio.Menu | null
    /**
     * Returns the length of the current playlist.
     * @returns the playlist length
     */
    get_playlist_length(): number
    /**
     * Returns the <code class="literal">0</code>-based index of the current entry in the playlist. If
     * there is no current entry in the playlist, <code class="literal">-1</code> is returned.
     * @returns the index of the current playlist entry, or <code class="literal">-1</code>
     */
    get_playlist_pos(): number
    /**
     * Gets the current playback rate, with `1.0` being the normal playback rate.
     * @returns the volume level
     */
    get_rate(): number
    /**
     * Gets the title of the current entry in the playlist.
     * @returns the current entry's title, or %NULL; free with g_free()
     */
    get_short_title(): string | null
    /**
     * Gets the title of the playlist entry at `index`.
     * @param playlist_index the <code class="literal">0</code>-based entry index
     * @returns the entry title at @index, or %NULL; free with g_free()
     */
    get_title_at_playlist_pos(playlist_index: number): string | null
    /**
     * Gets Totem's video widget and increments its reference count.
     * @returns Totem's video widget
     */
    get_video_widget(): Gtk.Widget
    /**
     * Gets the current volume level, as a value between <code class="literal">0.0</code> and <code class="literal">1.0</code>.
     * @returns the volume level
     */
    get_volume(): number
    /**
     * Returns %TRUE if Totem is fullscreened.
     * @returns %TRUE if Totem is fullscreened
     */
    is_fullscreen(): boolean
    /**
     * Returns %TRUE if playback is paused.
     * @returns %TRUE if playback is paused, %FALSE otherwise
     */
    is_paused(): boolean
    /**
     * Returns %TRUE if Totem is playing a stream.
     * @returns %TRUE if Totem is playing a stream
     */
    is_playing(): boolean
    /**
     * Returns %TRUE if the current stream is seekable.
     * @returns %TRUE if the current stream is seekable
     */
    is_seekable(): boolean
    /**
     * Switches to the next angle, if watching a DVD. If not watching a DVD, this is a
     * no-op.
     */
    next_angle(): void
    /**
     * Pauses the current stream. If Totem is already paused, it continues
     * to be paused.
     */
    pause(): void
    /**
     * Plays the current stream. If Totem is already playing, it continues
     * to play. If the stream cannot be played, and error dialog is displayed.
     */
    play(): void
    /**
     * Gets the current MRL from the playlist and attempts to play it.
     * If the stream is already playing, playback is paused.
     */
    play_pause(): void
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
    remote_command(cmd: RemoteCommand, url: string): void
    /**
     * Returns the value of `setting` for this instance of Totem.
     * @param setting a #TotemRemoteSetting
     * @returns %TRUE if the setting is enabled, %FALSE otherwise
     */
    remote_get_setting(setting: RemoteSetting): boolean
    /**
     * Sets `setting` to `value` on this instance of Totem.
     * @param setting a #TotemRemoteSetting
     * @param value the new value for the setting
     */
    remote_set_setting(setting: RemoteSetting, value: boolean): void
    /**
     * If a DVD is being played, goes to the next chapter. If a normal stream
     * is being played, plays the next entry in the playlist.
     */
    seek_next(): void
    /**
     * If a DVD is being played, goes to the previous chapter. If a normal stream
     * is being played, goes to the start of the stream if possible. If seeking is
     * not possible, plays the previous entry in the playlist.
     */
    seek_previous(): void
    /**
     * Seeks to an `offset` from the current position in the stream,
     * or displays an error dialog if that's not possible.
     * @param offset the time offset to seek to
     * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
     */
    seek_relative(offset: number, accurate: boolean): void
    /**
     * Seeks to an absolute time in the stream, or displays an
     * error dialog if that's not possible.
     * @param msec the time to seek to
     * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
     */
    seek_time(msec: number, accurate: boolean): void
    /**
     * Add the `subtitle_uri` subtitle file to the playlist, setting it as the subtitle for the current
     * playlist entry.
     * @param subtitle_uri the URI of the subtitle file to add
     */
    set_current_subtitle(subtitle_uri: string): void
    /**
     * Sets the playback rate, with `1.0` being the normal playback rate.
     * @param rate the new absolute playback rate
     * @returns %TRUE on success, %FALSE on failure.
     */
    set_rate(rate: number): boolean
    /**
     * Sets the volume, with <code class="literal">1.0</code> being the maximum, and <code class="literal">0.0</code> being the minimum level.
     * @param volume the new absolute volume value
     */
    set_volume(volume: number): void
    /**
     * Displays a non-blocking error dialog with the
     * given `title` and `reason`.
     * @param title the error dialog title
     * @param reason the error dialog text
     */
    show_error(title: string, reason: string): void
    /**
     * Stops playback, and sets the playlist back at the start.
     */
    stop(): void

    // Own virtual methods of Totem-1.0.Totem.Object

    vfunc_file_closed(): void
    vfunc_file_has_played(mrl: string): void
    vfunc_file_opened(mrl: string): void
    vfunc_get_text_subtitle(mrl: string): string | null
    vfunc_get_user_agent(mrl: string): string | null
    vfunc_metadata_updated(artist: string, title: string, album: string, track_num: number): void

    // Own signals of Totem-1.0.Totem.Object

    connect(sigName: "file-closed", callback: Object.FileClosedSignalCallback): number
    connect_after(sigName: "file-closed", callback: Object.FileClosedSignalCallback): number
    emit(sigName: "file-closed", ...args: any[]): void
    connect(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback): number
    connect_after(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback): number
    emit(sigName: "file-has-played", mrl: string | null, ...args: any[]): void
    connect(sigName: "file-opened", callback: Object.FileOpenedSignalCallback): number
    connect_after(sigName: "file-opened", callback: Object.FileOpenedSignalCallback): number
    emit(sigName: "file-opened", mrl: string | null, ...args: any[]): void
    connect(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback): number
    connect_after(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback): number
    emit(sigName: "get-text-subtitle", mrl: string | null, ...args: any[]): void
    connect(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback): number
    connect_after(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback): number
    emit(sigName: "get-user-agent", mrl: string | null, ...args: any[]): void
    connect(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback): number
    connect_after(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback): number
    emit(sigName: "metadata-updated", artist: string | null, title: string | null, album: string | null, track_number: number, ...args: any[]): void

    // Class property signals of Totem-1.0.Totem.Object

    connect(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-content-type", ...args: any[]): void
    connect(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-display-name", ...args: any[]): void
    connect(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-mrl", ...args: any[]): void
    connect(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-time", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-page", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seekable", ...args: any[]): void
    connect(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream-length", ...args: any[]): void
    connect(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-menu", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #TotemObject structure are private and should never be accessed directly.
 * @class 
 */
export class Object extends Gtk.Application {

    // Own properties of Totem-1.0.Totem.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Totem-1.0.Totem.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
    /**
     * Get the full list of file content types which Totem supports playing.
     * @returns a %NULL-terminated array of the content types Totem supports
     */
    static get_supported_content_types(): string[]
    /**
     * Get the full list of URI schemes which Totem supports accessing.
     * @returns a %NULL-terminated array of the URI schemes Totem supports
     */
    static get_supported_uri_schemes(): string[]

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface ObjectClass {

    // Own fields of Totem-1.0.Totem.ObjectClass

    parent_class: Gtk.ApplicationClass
    file_opened: (totem: Object, mrl: string) => void
    file_closed: (totem: Object) => void
    file_has_played: (totem: Object, mrl: string) => void
    metadata_updated: (totem: Object, artist: string, title: string, album: string, track_num: number) => void
    get_user_agent: (totem: Object, mrl: string) => string | null
    get_text_subtitle: (totem: Object, mrl: string) => string | null
}

export abstract class ObjectClass {

    // Own properties of Totem-1.0.Totem.ObjectClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END