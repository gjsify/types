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
     * Represents a command which can be sent to a running Totem instance remotely.
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
     * Represents a boolean setting or preference on a remote Totem instance.
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
     * Return a %NULL-terminated array of paths to directories which can contain Totem plugins. This respects the GSettings disable_user_plugins setting.
     * @returns a %NULL-terminated array of paths to plugin directories
     */
    function get_plugin_paths(): string[];
    function get_resource(): Gio.Resource;
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
        pack_type: Gtk.PackType,
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
    }

    /**
     * All the fields in the #TotemObject structure are private and should never be accessed directly.
     */
    class Object extends Gtk.Application {
        // Own properties of Totem-1.0.Object

        /**
         * The content-type of the current stream.
         */
        readonly current_content_type: string;
        /**
         * The content-type of the current stream.
         */
        readonly currentContentType: string;
        /**
         * The display name of the current stream.
         */
        readonly current_display_name: string;
        /**
         * The display name of the current stream.
         */
        readonly currentDisplayName: string;
        /**
         * The MRL of the current stream.
         */
        readonly current_mrl: string;
        /**
         * The MRL of the current stream.
         */
        readonly currentMrl: string;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         */
        readonly current_time: number;
        /**
         * The player's position (time) in the current stream, in milliseconds.
         */
        readonly currentTime: number;
        /**
         * If %TRUE, Totem is in fullscreen mode.
         */
        readonly fullscreen: boolean;
        /**
         * The name of the current main page (usually "grilo", or "player").
         */
        readonly main_page: string;
        /**
         * The name of the current main page (usually "grilo", or "player").
         */
        readonly mainPage: string;
        /**
         * If %TRUE, Totem is playing an audio or video file.
         */
        readonly playing: boolean;
        /**
         * If %TRUE, the current stream is seekable.
         */
        readonly seekable: boolean;
        /**
         * The length of the current stream, in milliseconds.
         */
        readonly stream_length: number;
        /**
         * The length of the current stream, in milliseconds.
         */
        readonly streamLength: number;

        // Owm methods of Totem-1.0.Object

        /**
         * Get the full list of file content types which Totem supports playing.
         */
        static get_supported_content_types(): string[];
        /**
         * Get the full list of URI schemes which Totem supports accessing.
         */
        static get_supported_uri_schemes(): string[];

        // Owm methods of Totem-1.0.Object

        /**
         * Add `uri` to the playlist and play it immediately.
         * @param uri the URI to add to the playlist
         * @param display_name the display name of the URI
         * @param play whether to play the added item
         */
        add_to_playlist(uri: string, display_name: string | null, play: boolean): void;
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
         * Returns the &lt;code class="literal"&gt;0&lt;/code&gt;-based index of the current entry in the playlist. If
         * there is no current entry in the playlist, &lt;code class="literal"&gt;-1&lt;/code&gt; is returned.
         * @returns the index of the current playlist entry, or &lt;code class="literal"&gt;-1&lt;/code&gt;
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
         * @param playlist_index the &lt;code class="literal"&gt;0&lt;/code&gt;-based entry index
         * @returns the entry title at @index, or %NULL; free with g_free()
         */
        get_title_at_playlist_pos(playlist_index: number): string;
        /**
         * Gets Totem's video widget and increments its reference count.
         * @returns Totem's video widget
         */
        get_video_widget(): Gtk.Widget;
        /**
         * Gets the current volume level, as a value between &lt;code class="literal"&gt;0.0&lt;/code&gt; and &lt;code class="literal"&gt;1.0&lt;/code&gt;.
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
        remote_command(cmd: RemoteCommand, url: string): void;
        /**
         * Returns the value of `setting` for this instance of Totem.
         * @param setting a #TotemRemoteSetting
         * @returns %TRUE if the setting is enabled, %FALSE otherwise
         */
        remote_get_setting(setting: RemoteSetting): boolean;
        /**
         * Sets `setting` to `value` on this instance of Totem.
         * @param setting a #TotemRemoteSetting
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
         * Sets the volume, with &lt;code class="literal"&gt;1.0&lt;/code&gt; being the maximum, and &lt;code class="literal"&gt;0.0&lt;/code&gt; being the minimum level.
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

    class ObjectClass {}

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
