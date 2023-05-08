
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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
export const GSETTINGS_SCHEMA: string | null
/**
 * Return a %NULL-terminated array of paths to directories which can contain Totem plugins. This respects the GSettings disable_user_plugins setting.
 * @returns a %NULL-terminated array of paths to plugin directories
 */
export function getPluginPaths(): string[]
/**
 * Put the given `icon_name` into `button,` and pack `button` into `header`
 * according to `pack_type`.
 * @param header The header widget to put the button in
 * @param button The button to use in the header
 * @param iconName The icon name for the button image
 * @param packType A #GtkPackType to tell us where to include the button
 * @returns the button passed as input
 */
export function interfaceCreateHeaderButton(header: Gtk.Widget, button: Gtk.Widget, iconName: string | null, packType: Gtk.PackType): Gtk.Widget
/**
 * Display a modal error dialogue with `title` as its primary error text, and `reason`
 * as its secondary text.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interfaceError(title: string | null, reason: string | null, parent: Gtk.Window): void
/**
 * Display a modal error dialogue like totem_interface_error() which blocks until the user has
 * dismissed it.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interfaceErrorBlocking(title: string | null, reason: string | null, parent: Gtk.Window): void
/**
 * Display a modal error dialogue like totem_interface_error(),
 * but add a button which will open `uri` in a browser window.
 * @param title the error title
 * @param reason the error reason (secondary text)
 * @param uri the URI to open
 * @param label a label for the URI's button, or %NULL to use `uri` as the label
 * @param parent the error dialogue's parent #GtkWindow
 */
export function interfaceErrorWithLink(title: string | null, reason: string | null, uri: string | null, label: string | null, parent: Gtk.Window): void
export function interfaceGetFullPath(name: string | null): string | null
/**
 * Load a #GtkBuilder UI file with the given name and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
 * @param name the #GtkBuilder UI file to load
 * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
 * @param parent the parent window to use when displaying error dialogues, or %NULL
 * @param userData the user data to pass to gtk_builder_connect_signals(), or %NULL
 * @returns the loaded #GtkBuilder object, or %NULL
 */
export function interfaceLoad(name: string | null, fatal: boolean, parent: Gtk.Window | null, userData: any | null): Gtk.Builder
/**
 * Load the image called `name` in the directory given by totem_interface_get_full_path() into a #GdkPixbuf.
 * @param name the image file name
 * @returns the loaded pixbuf, or %NULL
 */
export function interfaceLoadPixbuf(name: string | null): GdkPixbuf.Pixbuf
/**
 * Load a #GtkBuilder UI file from the given path and return the #GtkBuilder instance for it. If loading the file fails, an error dialogue is shown.
 * @param filename the #GtkBuilder UI file path to load
 * @param fatal %TRUE if errors loading the file should be fatal, %FALSE otherwise
 * @param parent the parent window to use when displaying error dialogues, or %NULL
 * @param userData the user data to pass to gtk_builder_connect_signals(), or %NULL
 * @returns the loaded #GtkBuilder object, or %NULL
 */
export function interfaceLoadWithFullPath(filename: string | null, fatal: boolean, parent: Gtk.Window | null, userData: any | null): Gtk.Builder
/**
 * Finds the specified `file` by looking in the plugin paths
 * listed by totem_get_plugin_paths() and then in the system
 * Totem data directory.
 * 
 * This should be used by plugins to find plugin-specific
 * resource files.
 * @param pluginName the plugin name
 * @param file the file to find
 * @returns a newly-allocated absolute path for the file, or %NULL
 */
export function pluginFindFile(pluginName: string | null, file: string | null): string | null
/**
 * Loads an interface file (GtkBuilder UI file) for a plugin, given its filename and
 * assuming it's installed in the plugin's data directory.
 * 
 * This should be used instead of attempting to load interfaces manually in plugins.
 * @param pluginName the plugin name
 * @param name interface filename
 * @param fatal %TRUE if it's a fatal error if the interface can't be loaded
 * @param parent the interface's parent #GtkWindow
 * @param userData a pointer to be passed to each signal handler in the interface when they're called
 * @returns the #GtkBuilder instance for the interface
 */
export function pluginLoadInterface(pluginName: string | null, name: string | null, fatal: boolean, parent: Gtk.Window | null, userData: any | null): Gtk.Builder
export function remoteCommandQuark(): GLib.Quark
export function remoteSettingQuark(): GLib.Quark
export module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `file-closed`
     */
    export interface FileClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `file-has-played`
     */
    export interface FileHasPlayedSignalCallback {
        (mrl: string | null): void
    }

    /**
     * Signal callback interface for `file-opened`
     */
    export interface FileOpenedSignalCallback {
        (mrl: string | null): void
    }

    /**
     * Signal callback interface for `get-text-subtitle`
     */
    export interface GetTextSubtitleSignalCallback {
        (mrl: string | null): string | null
    }

    /**
     * Signal callback interface for `get-user-agent`
     */
    export interface GetUserAgentSignalCallback {
        (mrl: string | null): string | null
    }

    /**
     * Signal callback interface for `metadata-updated`
     */
    export interface MetadataUpdatedSignalCallback {
        (artist: string | null, title: string | null, album: string | null, trackNumber: number): void
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
    __gtype__: number

    // Owm methods of Totem-1.0.Totem.Object

    /**
     * Add `uri` to the playlist and play it immediately.
     * @param uri the URI to add to the playlist
     * @param displayName the display name of the URI
     * @param play whether to play the added item
     */
    addToPlaylist(uri: string | null, displayName: string | null, play: boolean): void
    /**
     * Adds a local media file to the main view.
     * @param file a #GFile representing a media
     * @param title a title for the media, or %NULL
     */
    addToView(file: Gio.File, title: string | null): void
    /**
     * Returns true if totem_object_seek_next() would have an effect.
     */
    canSeekNext(): boolean
    /**
     * Returns true if totem_object_seek_previous() would have an effect.
     */
    canSeekPrevious(): boolean
    /**
     * Empties the current playlist.
     */
    clearPlaylist(): void
    /**
     * Empty the GMenu section pointed to by `id,` and remove any
     * related actions. Note that menu items with specific target
     * will not have the associated action removed.
     * @param id the ID for the menu section to empty
     */
    emptyMenuSection(id: string | null): void
    /**
     * Closes Totem.
     */
    exit(): void
    /**
     * Get the MRL of the current stream, or %NULL if nothing's playing.
     * Free with g_free().
     * @returns a newly-allocated string containing the MRL of the current stream
     */
    getCurrentMrl(): string | null
    /**
     * Gets the current position's time in the stream as a gint64.
     * @returns the current position in the stream
     */
    getCurrentTime(): number
    /**
     * Gets Totem's main window and increments its reference count.
     * @returns Totem's main window
     */
    getMainWindow(): Gtk.Window
    /**
     * Get the #GMenu of the given `id` from the main Totem #GtkBuilder file.
     * @param id the ID for the menu section to look up
     * @returns a #GMenu or %NULL on failure
     */
    getMenuSection(id: string | null): Gio.Menu | null
    /**
     * Returns the length of the current playlist.
     * @returns the playlist length
     */
    getPlaylistLength(): number
    /**
     * Returns the <code class="literal">0</code>-based index of the current entry in the playlist. If
     * there is no current entry in the playlist, <code class="literal">-1</code> is returned.
     * @returns the index of the current playlist entry, or <code class="literal">-1</code>
     */
    getPlaylistPos(): number
    /**
     * Gets the current playback rate, with `1.0` being the normal playback rate.
     * @returns the volume level
     */
    getRate(): number
    /**
     * Gets the title of the current entry in the playlist.
     * @returns the current entry's title, or %NULL; free with g_free()
     */
    getShortTitle(): string | null
    /**
     * Gets the title of the playlist entry at `index`.
     * @param playlistIndex the <code class="literal">0</code>-based entry index
     * @returns the entry title at @index, or %NULL; free with g_free()
     */
    getTitleAtPlaylistPos(playlistIndex: number): string | null
    /**
     * Gets Totem's video widget and increments its reference count.
     * @returns Totem's video widget
     */
    getVideoWidget(): Gtk.Widget
    /**
     * Gets the current volume level, as a value between <code class="literal">0.0</code> and <code class="literal">1.0</code>.
     * @returns the volume level
     */
    getVolume(): number
    /**
     * Returns %TRUE if Totem is fullscreened.
     * @returns %TRUE if Totem is fullscreened
     */
    isFullscreen(): boolean
    /**
     * Returns %TRUE if playback is paused.
     * @returns %TRUE if playback is paused, %FALSE otherwise
     */
    isPaused(): boolean
    /**
     * Returns %TRUE if Totem is playing a stream.
     * @returns %TRUE if Totem is playing a stream
     */
    isPlaying(): boolean
    /**
     * Returns %TRUE if the current stream is seekable.
     * @returns %TRUE if the current stream is seekable
     */
    isSeekable(): boolean
    /**
     * Switches to the next angle, if watching a DVD. If not watching a DVD, this is a
     * no-op.
     */
    nextAngle(): void
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
    playPause(): void
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
    remoteCommand(cmd: RemoteCommand, url: string | null): void
    /**
     * Returns the value of `setting` for this instance of Totem.
     * @param setting a #TotemRemoteSetting
     * @returns %TRUE if the setting is enabled, %FALSE otherwise
     */
    remoteGetSetting(setting: RemoteSetting): boolean
    /**
     * Sets `setting` to `value` on this instance of Totem.
     * @param setting a #TotemRemoteSetting
     * @param value the new value for the setting
     */
    remoteSetSetting(setting: RemoteSetting, value: boolean): void
    /**
     * If a DVD is being played, goes to the next chapter. If a normal stream
     * is being played, plays the next entry in the playlist.
     */
    seekNext(): void
    /**
     * If a DVD is being played, goes to the previous chapter. If a normal stream
     * is being played, goes to the start of the stream if possible. If seeking is
     * not possible, plays the previous entry in the playlist.
     */
    seekPrevious(): void
    /**
     * Seeks to an `offset` from the current position in the stream,
     * or displays an error dialog if that's not possible.
     * @param offset the time offset to seek to
     * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
     */
    seekRelative(offset: number, accurate: boolean): void
    /**
     * Seeks to an absolute time in the stream, or displays an
     * error dialog if that's not possible.
     * @param msec the time to seek to
     * @param accurate whether to use accurate seek, an accurate seek might be slower for some formats (see GStreamer docs)
     */
    seekTime(msec: number, accurate: boolean): void
    /**
     * Add the `subtitle_uri` subtitle file to the playlist, setting it as the subtitle for the current
     * playlist entry.
     * @param subtitleUri the URI of the subtitle file to add
     */
    setCurrentSubtitle(subtitleUri: string | null): void
    /**
     * Sets the playback rate, with `1.0` being the normal playback rate.
     * @param rate the new absolute playback rate
     * @returns %TRUE on success, %FALSE on failure.
     */
    setRate(rate: number): boolean
    /**
     * Sets the volume, with <code class="literal">1.0</code> being the maximum, and <code class="literal">0.0</code> being the minimum level.
     * @param volume the new absolute volume value
     */
    setVolume(volume: number): void
    /**
     * Displays a non-blocking error dialog with the
     * given `title` and `reason`.
     * @param title the error dialog title
     * @param reason the error dialog text
     */
    showError(title: string | null, reason: string | null): void
    /**
     * Stops playback, and sets the playlist back at the start.
     */
    stop(): void

    // Own virtual methods of Totem-1.0.Totem.Object

    fileClosed(): void
    fileHasPlayed(mrl: string | null): void
    fileOpened(mrl: string | null): void
    getTextSubtitle(mrl: string | null): string | null
    getUserAgent(mrl: string | null): string | null
    metadataUpdated(artist: string | null, title: string | null, album: string | null, trackNum: number): void

    // Own signals of Totem-1.0.Totem.Object

    connect(sigName: "file-closed", callback: Object.FileClosedSignalCallback): number
    on(sigName: "file-closed", callback: Object.FileClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-closed", callback: Object.FileClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-closed", callback: Object.FileClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "file-closed", ...args: any[]): void
    connect(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback): number
    on(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-has-played", callback: Object.FileHasPlayedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "file-has-played", ...args: any[]): void
    connect(sigName: "file-opened", callback: Object.FileOpenedSignalCallback): number
    on(sigName: "file-opened", callback: Object.FileOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-opened", callback: Object.FileOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-opened", callback: Object.FileOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "file-opened", ...args: any[]): void
    connect(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback): number
    on(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-text-subtitle", callback: Object.GetTextSubtitleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-text-subtitle", ...args: any[]): void
    connect(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback): number
    on(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-user-agent", callback: Object.GetUserAgentSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-user-agent", ...args: any[]): void
    connect(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback): number
    on(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "metadata-updated", callback: Object.MetadataUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "metadata-updated", title: string | null, album: string | null, trackNumber: number, ...args: any[]): void

    // Class property signals of Totem-1.0.Totem.Object

    connect(sigName: "notify::current-content-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-content-type", ...args: any[]): void
    connect(sigName: "notify::current-display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-display-name", ...args: any[]): void
    connect(sigName: "notify::current-mrl", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-mrl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-mrl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-mrl", ...args: any[]): void
    connect(sigName: "notify::current-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-time", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (...args: any[]) => void): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::main-page", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-page", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::seekable", callback: (...args: any[]) => void): number
    on(sigName: "notify::seekable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seekable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seekable", ...args: any[]): void
    connect(sigName: "notify::stream-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream-length", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-menu", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (...args: any[]) => void): number
    on(sigName: "notify::menubar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menubar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::register-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::register-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): number
    on(sigName: "notify::screensaver-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screensaver-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #TotemObject structure are private and should never be accessed directly.
 * @class 
 */
export class Object extends Gtk.Application {

    // Own properties of Totem-1.0.Totem.Object

    static name: string

    // Constructors of Totem-1.0.Totem.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
    /**
     * Get the full list of file content types which Totem supports playing.
     * @returns a %NULL-terminated array of the content types Totem supports
     */
    static getSupportedContentTypes(): string[]
    /**
     * Get the full list of URI schemes which Totem supports accessing.
     * @returns a %NULL-terminated array of the URI schemes Totem supports
     */
    static getSupportedUriSchemes(): string[]

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface ObjectClass {

    // Own fields of Totem-1.0.Totem.ObjectClass

    parentClass: Gtk.ApplicationClass
    fileOpened: (totem: Object, mrl: string | null) => void
    fileClosed: (totem: Object) => void
    fileHasPlayed: (totem: Object, mrl: string | null) => void
    metadataUpdated: (totem: Object, artist: string | null, title: string | null, album: string | null, trackNum: number) => void
    getUserAgent: (totem: Object, mrl: string | null) => string | null
    getTextSubtitle: (totem: Object, mrl: string | null) => string | null
}

export abstract class ObjectClass {

    // Own properties of Totem-1.0.Totem.ObjectClass

    static name: string
}
