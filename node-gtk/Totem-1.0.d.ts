/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Totem-1.0
 */

import type TotemPlParser from './TotemPlParser-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
const GSETTINGS_SCHEMA: string
function getPluginPaths(): string[]
function interfaceCreateHeaderButton(header: Gtk.Widget, button: Gtk.Widget, iconName: string, packType: Gtk.PackType): Gtk.Widget
function interfaceError(title: string, reason: string, parent: Gtk.Window): void
function interfaceErrorBlocking(title: string, reason: string, parent: Gtk.Window): void
function interfaceErrorWithLink(title: string, reason: string, uri: string, label: string, parent: Gtk.Window): void
function interfaceGetFullPath(name: string): string
function interfaceLoad(name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function interfaceLoadPixbuf(name: string): GdkPixbuf.Pixbuf
function interfaceLoadWithFullPath(filename: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function pluginFindFile(pluginName: string, file: string): string
function pluginLoadInterface(pluginName: string, name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function remoteCommandQuark(): GLib.Quark
function remoteSettingQuark(): GLib.Quark
interface Object_ConstructProps extends Gtk.Application_ConstructProps {
}
class Object {
    /* Properties of Totem-1.0.Totem.Object */
    /**
     * The content-type of the current stream.
     */
    readonly currentContentType: string
    /**
     * The display name of the current stream.
     */
    readonly currentDisplayName: string
    /**
     * The MRL of the current stream.
     */
    readonly currentMrl: string
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
    readonly mainPage: string
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
    /* Properties of Gtk-3.0.Gtk.Application */
    readonly activeWindow: Gtk.Window
    appMenu: Gio.MenuModel
    menubar: Gio.MenuModel
    /**
     * Set this property to %TRUE to register with the session manager.
     */
    registerSession: boolean
    /**
     * This property is %TRUE if GTK+ believes that the screensaver is
     * currently active. GTK+ only tracks session state (including this)
     * when #GtkApplication::register-session is set to %TRUE.
     * 
     * Tracking the screensaver state is supported on Linux.
     */
    readonly screensaverActive: boolean
    /* Properties of Gio-2.0.Gio.Application */
    actionGroup: Gio.ActionGroup
    applicationId: string
    flags: Gio.ApplicationFlags
    inactivityTimeout: number
    /**
     * Whether the application is currently marked as busy through
     * g_application_mark_busy() or g_application_bind_busy_property().
     */
    readonly isBusy: boolean
    readonly isRegistered: boolean
    readonly isRemote: boolean
    resourceBasePath: string
    /* Fields of Gtk-3.0.Gtk.Application */
    parent: Gio.Application
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Totem-1.0.Totem.Object */
    /**
     * Add `uri` to the playlist and play it immediately.
     * @param uri the URI to add to the playlist
     * @param displayName the display name of the URI
     * @param play whether to play the added item
     */
    addToPlaylist(uri: string, displayName: string, play: boolean): void
    /**
     * Adds a local media file to the main view.
     * @param file a #GFile representing a media
     * @param title a title for the media, or %NULL
     */
    addToView(file: Gio.File, title: string): void
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
    emptyMenuSection(id: string): void
    /**
     * Closes Totem.
     */
    exit(): void
    /**
     * Get the MRL of the current stream, or %NULL if nothing's playing.
     * Free with g_free().
     */
    getCurrentMrl(): string
    /**
     * Gets the current position's time in the stream as a gint64.
     */
    getCurrentTime(): number
    /**
     * Gets Totem's main window and increments its reference count.
     */
    getMainWindow(): Gtk.Window
    /**
     * Get the #GMenu of the given `id` from the main Totem #GtkBuilder file.
     * @param id the ID for the menu section to look up
     */
    getMenuSection(id: string): Gio.Menu | null
    /**
     * Returns the length of the current playlist.
     */
    getPlaylistLength(): number
    /**
     * Returns the <code class="literal">0</code>-based index of the current entry in the playlist. If
     * there is no current entry in the playlist, <code class="literal">-1</code> is returned.
     */
    getPlaylistPos(): number
    /**
     * Gets the current playback rate, with `1.0` being the normal playback rate.
     */
    getRate(): number
    /**
     * Gets the title of the current entry in the playlist.
     */
    getShortTitle(): string
    /**
     * Gets the title of the playlist entry at `index`.
     * @param playlistIndex the <code class="literal">0</code>-based entry index
     */
    getTitleAtPlaylistPos(playlistIndex: number): string
    /**
     * Gets Totem's video widget and increments its reference count.
     */
    getVideoWidget(): Gtk.Widget
    /**
     * Gets the current volume level, as a value between <code class="literal">0.0</code> and <code class="literal">1.0</code>.
     */
    getVolume(): number
    /**
     * Returns %TRUE if Totem is fullscreened.
     */
    isFullscreen(): boolean
    /**
     * Returns %TRUE if playback is paused.
     */
    isPaused(): boolean
    /**
     * Returns %TRUE if Totem is playing a stream.
     */
    isPlaying(): boolean
    /**
     * Returns %TRUE if the current stream is seekable.
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
    remoteCommand(cmd: RemoteCommand, url: string): void
    /**
     * Returns the value of `setting` for this instance of Totem.
     * @param setting a #TotemRemoteSetting
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
    setCurrentSubtitle(subtitleUri: string): void
    /**
     * Sets the playback rate, with `1.0` being the normal playback rate.
     * @param rate the new absolute playback rate
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
    showError(title: string, reason: string): void
    /**
     * Stops playback, and sets the playlist back at the start.
     */
    stop(): void
    /* Methods of Gtk-3.0.Gtk.Application */
    /**
     * Installs an accelerator that will cause the named action
     * to be activated when the key combination specificed by `accelerator`
     * is pressed.
     * 
     * `accelerator` must be a string that can be parsed by gtk_accelerator_parse(),
     * e.g. "<Primary>q" or “<Control><Alt>p”.
     * 
     * `action_name` must be the name of an action as it would be used
     * in the app menu, i.e. actions that have been added to the application
     * are referred to with an “app.” prefix, and window-specific actions
     * with a “win.” prefix.
     * 
     * GtkApplication also extracts accelerators out of “accel” attributes
     * in the #GMenuModels passed to gtk_application_set_app_menu() and
     * gtk_application_set_menubar(), which is usually more convenient
     * than calling this function for each accelerator.
     * @param accelerator accelerator string
     * @param actionName the name of the action to activate
     * @param parameter parameter to pass when activating the action,   or %NULL if the action does not accept an activation parameter
     */
    addAccelerator(accelerator: string, actionName: string, parameter?: GLib.Variant | null): void
    /**
     * Adds a window to `application`.
     * 
     * This call can only happen after the `application` has started;
     * typically, you should add new application windows in response
     * to the emission of the #GApplication::activate signal.
     * 
     * This call is equivalent to setting the #GtkWindow:application
     * property of `window` to `application`.
     * 
     * Normally, the connection between the application and the window
     * will remain until the window is destroyed, but you can explicitly
     * remove it with gtk_application_remove_window().
     * 
     * GTK+ will keep the `application` running as long as it has
     * any windows.
     * @param window a #GtkWindow
     */
    addWindow(window: Gtk.Window): void
    /**
     * Gets the accelerators that are currently associated with
     * the given action.
     * @param detailedActionName a detailed action name, specifying an action     and target to obtain accelerators for
     */
    getAccelsForAction(detailedActionName: string): string[]
    /**
     * Returns the list of actions (possibly empty) that `accel` maps to.
     * Each item in the list is a detailed action name in the usual form.
     * 
     * This might be useful to discover if an accel already exists in
     * order to prevent installation of a conflicting accelerator (from
     * an accelerator editor or a plugin system, for example). Note that
     * having more than one action per accelerator may not be a bad thing
     * and might make sense in cases where the actions never appear in the
     * same context.
     * 
     * In case there are no actions for a given accelerator, an empty array
     * is returned.  %NULL is never returned.
     * 
     * It is a programmer error to pass an invalid accelerator string.
     * If you are unsure, check it with gtk_accelerator_parse() first.
     * @param accel an accelerator that can be parsed by gtk_accelerator_parse()
     */
    getActionsForAccel(accel: string): string[]
    /**
     * Gets the “active” window for the application.
     * 
     * The active window is the one that was most recently focused (within
     * the application).  This window may not have the focus at the moment
     * if another application has it — this is just the most
     * recently-focused window within this application.
     */
    getActiveWindow(): Gtk.Window | null
    /**
     * Returns the menu model that has been set with
     * gtk_application_set_app_menu().
     */
    getAppMenu(): Gio.MenuModel | null
    /**
     * Gets a menu from automatically loaded resources.
     * See [Automatic resources][automatic-resources]
     * for more information.
     * @param id the id of the menu to look up
     */
    getMenuById(id: string): Gio.Menu
    /**
     * Returns the menu model that has been set with
     * gtk_application_set_menubar().
     */
    getMenubar(): Gio.MenuModel
    /**
     * Returns the #GtkApplicationWindow with the given ID.
     * 
     * The ID of a #GtkApplicationWindow can be retrieved with
     * gtk_application_window_get_id().
     * @param id an identifier number
     */
    getWindowById(id: number): Gtk.Window | null
    /**
     * Gets a list of the #GtkWindows associated with `application`.
     * 
     * The list is sorted by most recently focused window, such that the first
     * element is the currently focused window. (Useful for choosing a parent
     * for a transient window.)
     * 
     * The list that is returned should not be modified in any way. It will
     * only remain valid until the next focus change or window creation or
     * deletion.
     */
    getWindows(): Gtk.Window[]
    /**
     * Inform the session manager that certain types of actions should be
     * inhibited. This is not guaranteed to work on all platforms and for
     * all types of actions.
     * 
     * Applications should invoke this method when they begin an operation
     * that should not be interrupted, such as creating a CD or DVD. The
     * types of actions that may be blocked are specified by the `flags`
     * parameter. When the application completes the operation it should
     * call gtk_application_uninhibit() to remove the inhibitor. Note that
     * an application can have multiple inhibitors, and all of them must
     * be individually removed. Inhibitors are also cleared when the
     * application exits.
     * 
     * Applications should not expect that they will always be able to block
     * the action. In most cases, users will be given the option to force
     * the action to take place.
     * 
     * Reasons should be short and to the point.
     * 
     * If `window` is given, the session manager may point the user to
     * this window to find out more about why the action is inhibited.
     * @param window a #GtkWindow, or %NULL
     * @param flags what types of actions should be inhibited
     * @param reason a short, human-readable string that explains     why these operations are inhibited
     */
    inhibit(window: Gtk.Window | null, flags: Gtk.ApplicationInhibitFlags, reason?: string | null): number
    /**
     * Determines if any of the actions specified in `flags` are
     * currently inhibited (possibly by another application).
     * 
     * Note that this information may not be available (for example
     * when the application is running in a sandbox).
     * @param flags what types of actions should be queried
     */
    isInhibited(flags: Gtk.ApplicationInhibitFlags): boolean
    /**
     * Lists the detailed action names which have associated accelerators.
     * See gtk_application_set_accels_for_action().
     */
    listActionDescriptions(): string[]
    /**
     * Determines if the desktop environment in which the application is
     * running would prefer an application menu be shown.
     * 
     * If this function returns %TRUE then the application should call
     * gtk_application_set_app_menu() with the contents of an application
     * menu, which will be shown by the desktop environment.  If it returns
     * %FALSE then you should consider using an alternate approach, such as
     * a menubar.
     * 
     * The value returned by this function is purely advisory and you are
     * free to ignore it.  If you call gtk_application_set_app_menu() even
     * if the desktop environment doesn't support app menus, then a fallback
     * will be provided.
     * 
     * Applications are similarly free not to set an app menu even if the
     * desktop environment wants to show one.  In that case, a fallback will
     * also be created by the desktop environment (GNOME, for example, uses
     * a menu with only a "Quit" item in it).
     * 
     * The value returned by this function never changes.  Once it returns a
     * particular value, it is guaranteed to always return the same value.
     * 
     * You may only call this function after the application has been
     * registered and after the base startup handler has run.  You're most
     * likely to want to use this from your own startup handler.  It may
     * also make sense to consult this function while constructing UI (in
     * activate, open or an action activation handler) in order to determine
     * if you should show a gear menu or not.
     * 
     * This function will return %FALSE on Mac OS and a default app menu
     * will be created automatically with the "usual" contents of that menu
     * typical to most Mac OS applications.  If you call
     * gtk_application_set_app_menu() anyway, then this menu will be
     * replaced with your own.
     */
    prefersAppMenu(): boolean
    /**
     * Removes an accelerator that has been previously added
     * with gtk_application_add_accelerator().
     * @param actionName the name of the action to activate
     * @param parameter parameter to pass when activating the action,   or %NULL if the action does not accept an activation parameter
     */
    removeAccelerator(actionName: string, parameter?: GLib.Variant | null): void
    /**
     * Remove a window from `application`.
     * 
     * If `window` belongs to `application` then this call is equivalent to
     * setting the #GtkWindow:application property of `window` to
     * %NULL.
     * 
     * The application may stop running as a result of a call to this
     * function.
     * @param window a #GtkWindow
     */
    removeWindow(window: Gtk.Window): void
    /**
     * Sets zero or more keyboard accelerators that will trigger the
     * given action. The first item in `accels` will be the primary
     * accelerator, which may be displayed in the UI.
     * 
     * To remove all accelerators for an action, use an empty, zero-terminated
     * array for `accels`.
     * 
     * For the `detailed_action_name,` see g_action_parse_detailed_name() and
     * g_action_print_detailed_name().
     * @param detailedActionName a detailed action name, specifying an action     and target to associate accelerators with
     * @param accels a list of accelerators in the format     understood by gtk_accelerator_parse()
     */
    setAccelsForAction(detailedActionName: string, accels: string[]): void
    /**
     * Sets or unsets the application menu for `application`.
     * 
     * This can only be done in the primary instance of the application,
     * after it has been registered.  #GApplication::startup is a good place
     * to call this.
     * 
     * The application menu is a single menu containing items that typically
     * impact the application as a whole, rather than acting on a specific
     * window or document.  For example, you would expect to see
     * “Preferences” or “Quit” in an application menu, but not “Save” or
     * “Print”.
     * 
     * If supported, the application menu will be rendered by the desktop
     * environment.
     * 
     * Use the base #GActionMap interface to add actions, to respond to the user
     * selecting these menu items.
     * @param appMenu a #GMenuModel, or %NULL
     */
    setAppMenu(appMenu?: Gio.MenuModel | null): void
    /**
     * Sets or unsets the menubar for windows of `application`.
     * 
     * This is a menubar in the traditional sense.
     * 
     * This can only be done in the primary instance of the application,
     * after it has been registered.  #GApplication::startup is a good place
     * to call this.
     * 
     * Depending on the desktop environment, this may appear at the top of
     * each window, or at the top of the screen.  In some environments, if
     * both the application menu and the menubar are set, the application
     * menu will be presented as if it were the first item of the menubar.
     * Other environments treat the two as completely separate — for example,
     * the application menu may be rendered by the desktop shell while the
     * menubar (if set) remains in each individual window.
     * 
     * Use the base #GActionMap interface to add actions, to respond to the
     * user selecting these menu items.
     * @param menubar a #GMenuModel, or %NULL
     */
    setMenubar(menubar?: Gio.MenuModel | null): void
    /**
     * Removes an inhibitor that has been established with gtk_application_inhibit().
     * Inhibitors are also cleared when the application exits.
     * @param cookie a cookie that was returned by gtk_application_inhibit()
     */
    uninhibit(cookie: number): void
    /* Methods of Gio-2.0.Gio.Application */
    /**
     * Activates the application.
     * 
     * In essence, this results in the #GApplication::activate signal being
     * emitted in the primary instance.
     * 
     * The application must be registered before calling this function.
     */
    activate(): void
    /**
     * Add an option to be handled by `application`.
     * 
     * Calling this function is the equivalent of calling
     * g_application_add_main_option_entries() with a single #GOptionEntry
     * that has its arg_data member set to %NULL.
     * 
     * The parsed arguments will be packed into a #GVariantDict which
     * is passed to #GApplication::handle-local-options. If
     * %G_APPLICATION_HANDLES_COMMAND_LINE is set, then it will also
     * be sent to the primary instance. See
     * g_application_add_main_option_entries() for more details.
     * 
     * See #GOptionEntry for more documentation of the arguments.
     * @param longName the long name of an option used to specify it in a commandline
     * @param shortName the short name of an option
     * @param flags flags from #GOptionFlags
     * @param arg the type of the option, as a #GOptionArg
     * @param description the description for the option in `--help` output
     * @param argDescription the placeholder to use for the extra argument    parsed by the option in `--help` output
     */
    addMainOption(longName: string, shortName: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription?: string | null): void
    /**
     * Adds main option entries to be handled by `application`.
     * 
     * This function is comparable to g_option_context_add_main_entries().
     * 
     * After the commandline arguments are parsed, the
     * #GApplication::handle-local-options signal will be emitted.  At this
     * point, the application can inspect the values pointed to by `arg_data`
     * in the given #GOptionEntrys.
     * 
     * Unlike #GOptionContext, #GApplication supports giving a %NULL
     * `arg_data` for a non-callback #GOptionEntry.  This results in the
     * argument in question being packed into a #GVariantDict which is also
     * passed to #GApplication::handle-local-options, where it can be
     * inspected and modified.  If %G_APPLICATION_HANDLES_COMMAND_LINE is
     * set, then the resulting dictionary is sent to the primary instance,
     * where g_application_command_line_get_options_dict() will return it.
     * This "packing" is done according to the type of the argument --
     * booleans for normal flags, strings for strings, bytestrings for
     * filenames, etc.  The packing only occurs if the flag is given (ie: we
     * do not pack a "false" #GVariant in the case that a flag is missing).
     * 
     * In general, it is recommended that all commandline arguments are
     * parsed locally.  The options dictionary should then be used to
     * transmit the result of the parsing to the primary instance, where
     * g_variant_dict_lookup() can be used.  For local options, it is
     * possible to either use `arg_data` in the usual way, or to consult (and
     * potentially remove) the option from the options dictionary.
     * 
     * This function is new in GLib 2.40.  Before then, the only real choice
     * was to send all of the commandline arguments (options and all) to the
     * primary instance for handling.  #GApplication ignored them completely
     * on the local side.  Calling this function "opts in" to the new
     * behaviour, and in particular, means that unrecognised options will be
     * treated as errors.  Unrecognised options have never been ignored when
     * %G_APPLICATION_HANDLES_COMMAND_LINE is unset.
     * 
     * If #GApplication::handle-local-options needs to see the list of
     * filenames, then the use of %G_OPTION_REMAINING is recommended.  If
     * `arg_data` is %NULL then %G_OPTION_REMAINING can be used as a key into
     * the options dictionary.  If you do use %G_OPTION_REMAINING then you
     * need to handle these arguments for yourself because once they are
     * consumed, they will no longer be visible to the default handling
     * (which treats them as filenames to be opened).
     * 
     * It is important to use the proper GVariant format when retrieving
     * the options with g_variant_dict_lookup():
     * - for %G_OPTION_ARG_NONE, use `b`
     * - for %G_OPTION_ARG_STRING, use `&s`
     * - for %G_OPTION_ARG_INT, use `i`
     * - for %G_OPTION_ARG_INT64, use `x`
     * - for %G_OPTION_ARG_DOUBLE, use `d`
     * - for %G_OPTION_ARG_FILENAME, use `^&ay`
     * - for %G_OPTION_ARG_STRING_ARRAY, use `^a&s`
     * - for %G_OPTION_ARG_FILENAME_ARRAY, use `^a&ay`
     * @param entries a           %NULL-terminated list of #GOptionEntrys
     */
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    /**
     * Adds a #GOptionGroup to the commandline handling of `application`.
     * 
     * This function is comparable to g_option_context_add_group().
     * 
     * Unlike g_application_add_main_option_entries(), this function does
     * not deal with %NULL `arg_data` and never transmits options to the
     * primary instance.
     * 
     * The reason for that is because, by the time the options arrive at the
     * primary instance, it is typically too late to do anything with them.
     * Taking the GTK option group as an example: GTK will already have been
     * initialised by the time the #GApplication::command-line handler runs.
     * In the case that this is not the first-running instance of the
     * application, the existing instance may already have been running for
     * a very long time.
     * 
     * This means that the options from #GOptionGroup are only really usable
     * in the case that the instance of the application being run is the
     * first instance.  Passing options like `--display=` or `--gdk-debug=`
     * on future runs will have no effect on the existing primary instance.
     * 
     * Calling this function will cause the options in the supplied option
     * group to be parsed, but it does not cause you to be "opted in" to the
     * new functionality whereby unrecognised options are rejected even if
     * %G_APPLICATION_HANDLES_COMMAND_LINE was given.
     * @param group a #GOptionGroup
     */
    addOptionGroup(group: GLib.OptionGroup): void
    /**
     * Marks `application` as busy (see g_application_mark_busy()) while
     * `property` on `object` is %TRUE.
     * 
     * The binding holds a reference to `application` while it is active, but
     * not to `object`. Instead, the binding is destroyed when `object` is
     * finalized.
     * @param object a #GObject
     * @param property the name of a boolean property of `object`
     */
    bindBusyProperty(object: GObject.Object, property: string): void
    /**
     * Gets the unique identifier for `application`.
     */
    getApplicationId(): string | null
    /**
     * Gets the #GDBusConnection being used by the application, or %NULL.
     * 
     * If #GApplication is using its D-Bus backend then this function will
     * return the #GDBusConnection being used for uniqueness and
     * communication with the desktop environment and other instances of the
     * application.
     * 
     * If #GApplication is not using D-Bus then this function will return
     * %NULL.  This includes the situation where the D-Bus backend would
     * normally be in use but we were unable to connect to the bus.
     * 
     * This function must not be called before the application has been
     * registered.  See g_application_get_is_registered().
     */
    getDbusConnection(): Gio.DBusConnection | null
    /**
     * Gets the D-Bus object path being used by the application, or %NULL.
     * 
     * If #GApplication is using its D-Bus backend then this function will
     * return the D-Bus object path that #GApplication is using.  If the
     * application is the primary instance then there is an object published
     * at this path.  If the application is not the primary instance then
     * the result of this function is undefined.
     * 
     * If #GApplication is not using D-Bus then this function will return
     * %NULL.  This includes the situation where the D-Bus backend would
     * normally be in use but we were unable to connect to the bus.
     * 
     * This function must not be called before the application has been
     * registered.  See g_application_get_is_registered().
     */
    getDbusObjectPath(): string | null
    /**
     * Gets the flags for `application`.
     * 
     * See #GApplicationFlags.
     */
    getFlags(): Gio.ApplicationFlags
    /**
     * Gets the current inactivity timeout for the application.
     * 
     * This is the amount of time (in milliseconds) after the last call to
     * g_application_release() before the application stops running.
     */
    getInactivityTimeout(): number
    /**
     * Gets the application's current busy state, as set through
     * g_application_mark_busy() or g_application_bind_busy_property().
     */
    getIsBusy(): boolean
    /**
     * Checks if `application` is registered.
     * 
     * An application is registered if g_application_register() has been
     * successfully called.
     */
    getIsRegistered(): boolean
    /**
     * Checks if `application` is remote.
     * 
     * If `application` is remote then it means that another instance of
     * application already exists (the 'primary' instance).  Calls to
     * perform actions on `application` will result in the actions being
     * performed by the primary instance.
     * 
     * The value of this property cannot be accessed before
     * g_application_register() has been called.  See
     * g_application_get_is_registered().
     */
    getIsRemote(): boolean
    /**
     * Gets the resource base path of `application`.
     * 
     * See g_application_set_resource_base_path() for more information.
     */
    getResourceBasePath(): string | null
    /**
     * Increases the use count of `application`.
     * 
     * Use this function to indicate that the application has a reason to
     * continue to run.  For example, g_application_hold() is called by GTK+
     * when a toplevel window is on the screen.
     * 
     * To cancel the hold, call g_application_release().
     */
    hold(): void
    /**
     * Increases the busy count of `application`.
     * 
     * Use this function to indicate that the application is busy, for instance
     * while a long running operation is pending.
     * 
     * The busy state will be exposed to other processes, so a session shell will
     * use that information to indicate the state to the user (e.g. with a
     * spinner).
     * 
     * To cancel the busy indication, use g_application_unmark_busy().
     * 
     * The application must be registered before calling this function.
     */
    markBusy(): void
    /**
     * Opens the given files.
     * 
     * In essence, this results in the #GApplication::open signal being emitted
     * in the primary instance.
     * 
     * `n_files` must be greater than zero.
     * 
     * `hint` is simply passed through to the ::open signal.  It is
     * intended to be used by applications that have multiple modes for
     * opening files (eg: "view" vs "edit", etc).  Unless you have a need
     * for this functionality, you should use "".
     * 
     * The application must be registered before calling this function
     * and it must have the %G_APPLICATION_HANDLES_OPEN flag set.
     * @param files an array of #GFiles to open
     * @param hint a hint (or ""), but never %NULL
     */
    open(files: Gio.File[], hint: string): void
    /**
     * Immediately quits the application.
     * 
     * Upon return to the mainloop, g_application_run() will return,
     * calling only the 'shutdown' function before doing so.
     * 
     * The hold count is ignored.
     * Take care if your code has called g_application_hold() on the application and
     * is therefore still expecting it to exist.
     * (Note that you may have called g_application_hold() indirectly, for example
     * through gtk_application_add_window().)
     * 
     * The result of calling g_application_run() again after it returns is
     * unspecified.
     */
    quit(): void
    /**
     * Attempts registration of the application.
     * 
     * This is the point at which the application discovers if it is the
     * primary instance or merely acting as a remote for an already-existing
     * primary instance.  This is implemented by attempting to acquire the
     * application identifier as a unique bus name on the session bus using
     * GDBus.
     * 
     * If there is no application ID or if %G_APPLICATION_NON_UNIQUE was
     * given, then this process will always become the primary instance.
     * 
     * Due to the internal architecture of GDBus, method calls can be
     * dispatched at any time (even if a main loop is not running).  For
     * this reason, you must ensure that any object paths that you wish to
     * register are registered before calling this function.
     * 
     * If the application has already been registered then %TRUE is
     * returned with no work performed.
     * 
     * The #GApplication::startup signal is emitted if registration succeeds
     * and `application` is the primary instance (including the non-unique
     * case).
     * 
     * In the event of an error (such as `cancellable` being cancelled, or a
     * failure to connect to the session bus), %FALSE is returned and `error`
     * is set appropriately.
     * 
     * Note: the return value of this function is not an indicator that this
     * instance is or is not the primary instance of the application.  See
     * g_application_get_is_remote() for that.
     * @param cancellable a #GCancellable, or %NULL
     */
    register(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Decrease the use count of `application`.
     * 
     * When the use count reaches zero, the application will stop running.
     * 
     * Never call this function except to cancel the effect of a previous
     * call to g_application_hold().
     */
    release(): void
    /**
     * Runs the application.
     * 
     * This function is intended to be run from main() and its return value
     * is intended to be returned by main(). Although you are expected to pass
     * the `argc,` `argv` parameters from main() to this function, it is possible
     * to pass %NULL if `argv` is not available or commandline handling is not
     * required.  Note that on Windows, `argc` and `argv` are ignored, and
     * g_win32_get_command_line() is called internally (for proper support
     * of Unicode commandline arguments).
     * 
     * #GApplication will attempt to parse the commandline arguments.  You
     * can add commandline flags to the list of recognised options by way of
     * g_application_add_main_option_entries().  After this, the
     * #GApplication::handle-local-options signal is emitted, from which the
     * application can inspect the values of its #GOptionEntrys.
     * 
     * #GApplication::handle-local-options is a good place to handle options
     * such as `--version`, where an immediate reply from the local process is
     * desired (instead of communicating with an already-running instance).
     * A #GApplication::handle-local-options handler can stop further processing
     * by returning a non-negative value, which then becomes the exit status of
     * the process.
     * 
     * What happens next depends on the flags: if
     * %G_APPLICATION_HANDLES_COMMAND_LINE was specified then the remaining
     * commandline arguments are sent to the primary instance, where a
     * #GApplication::command-line signal is emitted.  Otherwise, the
     * remaining commandline arguments are assumed to be a list of files.
     * If there are no files listed, the application is activated via the
     * #GApplication::activate signal.  If there are one or more files, and
     * %G_APPLICATION_HANDLES_OPEN was specified then the files are opened
     * via the #GApplication::open signal.
     * 
     * If you are interested in doing more complicated local handling of the
     * commandline then you should implement your own #GApplication subclass
     * and override local_command_line(). In this case, you most likely want
     * to return %TRUE from your local_command_line() implementation to
     * suppress the default handling. See
     * [gapplication-example-cmdline2.c][https://gitlab.gnome.org/GNOME/glib/-/blob/HEAD/gio/tests/gapplication-example-cmdline2.c]
     * for an example.
     * 
     * If, after the above is done, the use count of the application is zero
     * then the exit status is returned immediately.  If the use count is
     * non-zero then the default main context is iterated until the use count
     * falls to zero, at which point 0 is returned.
     * 
     * If the %G_APPLICATION_IS_SERVICE flag is set, then the service will
     * run for as much as 10 seconds with a use count of zero while waiting
     * for the message that caused the activation to arrive.  After that,
     * if the use count falls to zero the application will exit immediately,
     * except in the case that g_application_set_inactivity_timeout() is in
     * use.
     * 
     * This function sets the prgname (g_set_prgname()), if not already set,
     * to the basename of argv[0].
     * 
     * Much like g_main_loop_run(), this function will acquire the main context
     * for the duration that the application is running.
     * 
     * Since 2.40, applications that are not explicitly flagged as services
     * or launchers (ie: neither %G_APPLICATION_IS_SERVICE or
     * %G_APPLICATION_IS_LAUNCHER are given as flags) will check (from the
     * default handler for local_command_line) if "--gapplication-service"
     * was given in the command line.  If this flag is present then normal
     * commandline processing is interrupted and the
     * %G_APPLICATION_IS_SERVICE flag is set.  This provides a "compromise"
     * solution whereby running an application directly from the commandline
     * will invoke it in the normal way (which can be useful for debugging)
     * while still allowing applications to be D-Bus activated in service
     * mode.  The D-Bus service file should invoke the executable with
     * "--gapplication-service" as the sole commandline argument.  This
     * approach is suitable for use by most graphical applications but
     * should not be used from applications like editors that need precise
     * control over when processes invoked via the commandline will exit and
     * what their exit status will be.
     * @param argv      the argv from main(), or %NULL
     */
    run(argv?: string[] | null): number
    /**
     * Sends a notification on behalf of `application` to the desktop shell.
     * There is no guarantee that the notification is displayed immediately,
     * or even at all.
     * 
     * Notifications may persist after the application exits. It will be
     * D-Bus-activated when the notification or one of its actions is
     * activated.
     * 
     * Modifying `notification` after this call has no effect. However, the
     * object can be reused for a later call to this function.
     * 
     * `id` may be any string that uniquely identifies the event for the
     * application. It does not need to be in any special format. For
     * example, "new-message" might be appropriate for a notification about
     * new messages.
     * 
     * If a previous notification was sent with the same `id,` it will be
     * replaced with `notification` and shown again as if it was a new
     * notification. This works even for notifications sent from a previous
     * execution of the application, as long as `id` is the same string.
     * 
     * `id` may be %NULL, but it is impossible to replace or withdraw
     * notifications without an id.
     * 
     * If `notification` is no longer relevant, it can be withdrawn with
     * g_application_withdraw_notification().
     * @param id id of the notification, or %NULL
     * @param notification the #GNotification to send
     */
    sendNotification(id: string | null, notification: Gio.Notification): void
    /**
     * This used to be how actions were associated with a #GApplication.
     * Now there is #GActionMap for that.
     * @param actionGroup a #GActionGroup, or %NULL
     */
    setActionGroup(actionGroup?: Gio.ActionGroup | null): void
    /**
     * Sets the unique identifier for `application`.
     * 
     * The application id can only be modified if `application` has not yet
     * been registered.
     * 
     * If non-%NULL, the application id must be valid.  See
     * g_application_id_is_valid().
     * @param applicationId the identifier for `application`
     */
    setApplicationId(applicationId?: string | null): void
    /**
     * Sets or unsets the default application for the process, as returned
     * by g_application_get_default().
     * 
     * This function does not take its own reference on `application`.  If
     * `application` is destroyed then the default application will revert
     * back to %NULL.
     */
    setDefault(): void
    /**
     * Sets the flags for `application`.
     * 
     * The flags can only be modified if `application` has not yet been
     * registered.
     * 
     * See #GApplicationFlags.
     * @param flags the flags for `application`
     */
    setFlags(flags: Gio.ApplicationFlags): void
    /**
     * Sets the current inactivity timeout for the application.
     * 
     * This is the amount of time (in milliseconds) after the last call to
     * g_application_release() before the application stops running.
     * 
     * This call has no side effects of its own.  The value set here is only
     * used for next time g_application_release() drops the use count to
     * zero.  Any timeouts currently in progress are not impacted.
     * @param inactivityTimeout the timeout, in milliseconds
     */
    setInactivityTimeout(inactivityTimeout: number): void
    /**
     * Adds a description to the `application` option context.
     * 
     * See g_option_context_set_description() for more information.
     * @param description a string to be shown in `--help` output  after the list of options, or %NULL
     */
    setOptionContextDescription(description?: string | null): void
    /**
     * Sets the parameter string to be used by the commandline handling of `application`.
     * 
     * This function registers the argument to be passed to g_option_context_new()
     * when the internal #GOptionContext of `application` is created.
     * 
     * See g_option_context_new() for more information about `parameter_string`.
     * @param parameterString a string which is displayed   in the first line of `--help` output, after the usage summary `programname [OPTION...]`.
     */
    setOptionContextParameterString(parameterString?: string | null): void
    /**
     * Adds a summary to the `application` option context.
     * 
     * See g_option_context_set_summary() for more information.
     * @param summary a string to be shown in `--help` output  before the list of options, or %NULL
     */
    setOptionContextSummary(summary?: string | null): void
    /**
     * Sets (or unsets) the base resource path of `application`.
     * 
     * The path is used to automatically load various [application
     * resources][gresource] such as menu layouts and action descriptions.
     * The various types of resources will be found at fixed names relative
     * to the given base path.
     * 
     * By default, the resource base path is determined from the application
     * ID by prefixing '/' and replacing each '.' with '/'.  This is done at
     * the time that the #GApplication object is constructed.  Changes to
     * the application ID after that point will not have an impact on the
     * resource base path.
     * 
     * As an example, if the application has an ID of "org.example.app" then
     * the default resource base path will be "/org/example/app".  If this
     * is a #GtkApplication (and you have not manually changed the path)
     * then Gtk will then search for the menus of the application at
     * "/org/example/app/gtk/menus.ui".
     * 
     * See #GResource for more information about adding resources to your
     * application.
     * 
     * You can disable automatic resource loading functionality by setting
     * the path to %NULL.
     * 
     * Changing the resource base path once the application is running is
     * not recommended.  The point at which the resource path is consulted
     * for forming paths for various purposes is unspecified.  When writing
     * a sub-class of #GApplication you should either set the
     * #GApplication:resource-base-path property at construction time, or call
     * this function during the instance initialization. Alternatively, you
     * can call this function in the #GApplicationClass.startup virtual function,
     * before chaining up to the parent implementation.
     * @param resourcePath the resource path to use
     */
    setResourceBasePath(resourcePath?: string | null): void
    /**
     * Destroys a binding between `property` and the busy state of
     * `application` that was previously created with
     * g_application_bind_busy_property().
     * @param object a #GObject
     * @param property the name of a boolean property of `object`
     */
    unbindBusyProperty(object: GObject.Object, property: string): void
    /**
     * Decreases the busy count of `application`.
     * 
     * When the busy count reaches zero, the new state will be propagated
     * to other processes.
     * 
     * This function must only be called to cancel the effect of a previous
     * call to g_application_mark_busy().
     */
    unmarkBusy(): void
    /**
     * Withdraws a notification that was sent with
     * g_application_send_notification().
     * 
     * This call does nothing if a notification with `id` doesn't exist or
     * the notification was never sent.
     * 
     * This function works even for notifications sent in previous
     * executions of this application, as long `id` is the same as it was for
     * the sent notification.
     * 
     * Note that notifications are dismissed when the user clicks on one
     * of the buttons in a notification or triggers its default action, so
     * there is no need to explicitly withdraw the notification in that case.
     * @param id id of a previously sent notification
     */
    withdrawNotification(id: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.ActionGroup */
    /**
     * Emits the #GActionGroup::action-added signal on `action_group`.
     * 
     * This function should only be called by #GActionGroup implementations.
     * @param actionName the name of an action in the group
     */
    actionAdded(actionName: string): void
    /**
     * Emits the #GActionGroup::action-enabled-changed signal on `action_group`.
     * 
     * This function should only be called by #GActionGroup implementations.
     * @param actionName the name of an action in the group
     * @param enabled whether or not the action is now enabled
     */
    actionEnabledChanged(actionName: string, enabled: boolean): void
    /**
     * Emits the #GActionGroup::action-removed signal on `action_group`.
     * 
     * This function should only be called by #GActionGroup implementations.
     * @param actionName the name of an action in the group
     */
    actionRemoved(actionName: string): void
    /**
     * Emits the #GActionGroup::action-state-changed signal on `action_group`.
     * 
     * This function should only be called by #GActionGroup implementations.
     * @param actionName the name of an action in the group
     * @param state the new state of the named action
     */
    actionStateChanged(actionName: string, state: GLib.Variant): void
    /**
     * Activate the named action within `action_group`.
     * 
     * If the action is expecting a parameter, then the correct type of
     * parameter must be given as `parameter`.  If the action is expecting no
     * parameters then `parameter` must be %NULL.  See
     * g_action_group_get_action_parameter_type().
     * 
     * If the #GActionGroup implementation supports asynchronous remote
     * activation over D-Bus, this call may return before the relevant
     * D-Bus traffic has been sent, or any replies have been received. In
     * order to block on such asynchronous activation calls,
     * g_dbus_connection_flush() should be called prior to the code, which
     * depends on the result of the action activation. Without flushing
     * the D-Bus connection, there is no guarantee that the action would
     * have been activated.
     * 
     * The following code which runs in a remote app instance, shows an
     * example of a "quit" action being activated on the primary app
     * instance over D-Bus. Here g_dbus_connection_flush() is called
     * before `exit()`. Without g_dbus_connection_flush(), the "quit" action
     * may fail to be activated on the primary instance.
     * 
     * 
     * ```c
     * // call "quit" action on primary instance
     * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
     * 
     * // make sure the action is activated now
     * g_dbus_connection_flush (...);
     * 
     * g_debug ("application has been terminated. exiting.");
     * 
     * exit (0);
     * ```
     * 
     * @param actionName the name of the action to activate
     * @param parameter parameters to the activation
     */
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    /**
     * Request for the state of the named action within `action_group` to be
     * changed to `value`.
     * 
     * The action must be stateful and `value` must be of the correct type.
     * See g_action_group_get_action_state_type().
     * 
     * This call merely requests a change.  The action may refuse to change
     * its state or may change its state to something other than `value`.
     * See g_action_group_get_action_state_hint().
     * 
     * If the `value` GVariant is floating, it is consumed.
     * @param actionName the name of the action to request the change on
     * @param value the new state
     */
    changeActionState(actionName: string, value: GLib.Variant): void
    /**
     * Checks if the named action within `action_group` is currently enabled.
     * 
     * An action must be enabled in order to be activated or in order to
     * have its state changed from outside callers.
     * @param actionName the name of the action to query
     */
    getActionEnabled(actionName: string): boolean
    /**
     * Queries the type of the parameter that must be given when activating
     * the named action within `action_group`.
     * 
     * When activating the action using g_action_group_activate_action(),
     * the #GVariant given to that function must be of the type returned
     * by this function.
     * 
     * In the case that this function returns %NULL, you must not give any
     * #GVariant, but %NULL instead.
     * 
     * The parameter type of a particular action will never change but it is
     * possible for an action to be removed and for a new action to be added
     * with the same name but a different parameter type.
     * @param actionName the name of the action to query
     */
    getActionParameterType(actionName: string): GLib.VariantType | null
    /**
     * Queries the current state of the named action within `action_group`.
     * 
     * If the action is not stateful then %NULL will be returned.  If the
     * action is stateful then the type of the return value is the type
     * given by g_action_group_get_action_state_type().
     * 
     * The return value (if non-%NULL) should be freed with
     * g_variant_unref() when it is no longer required.
     * @param actionName the name of the action to query
     */
    getActionState(actionName: string): GLib.Variant | null
    /**
     * Requests a hint about the valid range of values for the state of the
     * named action within `action_group`.
     * 
     * If %NULL is returned it either means that the action is not stateful
     * or that there is no hint about the valid range of values for the
     * state of the action.
     * 
     * If a #GVariant array is returned then each item in the array is a
     * possible value for the state.  If a #GVariant pair (ie: two-tuple) is
     * returned then the tuple specifies the inclusive lower and upper bound
     * of valid values for the state.
     * 
     * In any case, the information is merely a hint.  It may be possible to
     * have a state value outside of the hinted range and setting a value
     * within the range may fail.
     * 
     * The return value (if non-%NULL) should be freed with
     * g_variant_unref() when it is no longer required.
     * @param actionName the name of the action to query
     */
    getActionStateHint(actionName: string): GLib.Variant | null
    /**
     * Queries the type of the state of the named action within
     * `action_group`.
     * 
     * If the action is stateful then this function returns the
     * #GVariantType of the state.  All calls to
     * g_action_group_change_action_state() must give a #GVariant of this
     * type and g_action_group_get_action_state() will return a #GVariant
     * of the same type.
     * 
     * If the action is not stateful then this function will return %NULL.
     * In that case, g_action_group_get_action_state() will return %NULL
     * and you must not call g_action_group_change_action_state().
     * 
     * The state type of a particular action will never change but it is
     * possible for an action to be removed and for a new action to be added
     * with the same name but a different state type.
     * @param actionName the name of the action to query
     */
    getActionStateType(actionName: string): GLib.VariantType | null
    /**
     * Checks if the named action exists within `action_group`.
     * @param actionName the name of the action to check for
     */
    hasAction(actionName: string): boolean
    /**
     * Lists the actions contained within `action_group`.
     * 
     * The caller is responsible for freeing the list with g_strfreev() when
     * it is no longer required.
     */
    listActions(): string[]
    /**
     * Queries all aspects of the named action within an `action_group`.
     * 
     * This function acquires the information available from
     * g_action_group_has_action(), g_action_group_get_action_enabled(),
     * g_action_group_get_action_parameter_type(),
     * g_action_group_get_action_state_type(),
     * g_action_group_get_action_state_hint() and
     * g_action_group_get_action_state() with a single function call.
     * 
     * This provides two main benefits.
     * 
     * The first is the improvement in efficiency that comes with not having
     * to perform repeated lookups of the action in order to discover
     * different things about it.  The second is that implementing
     * #GActionGroup can now be done by only overriding this one virtual
     * function.
     * 
     * The interface provides a default implementation of this function that
     * calls the individual functions, as required, to fetch the
     * information.  The interface also provides default implementations of
     * those functions that call this function.  All implementations,
     * therefore, must override either this function or all of the others.
     * 
     * If the action exists, %TRUE is returned and any of the requested
     * fields (as indicated by having a non-%NULL reference passed in) are
     * filled.  If the action doesn't exist, %FALSE is returned and the
     * fields may or may not have been modified.
     * @param actionName the name of an action in the group
     */
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio-2.0.Gio.ActionMap */
    /**
     * Adds an action to the `action_map`.
     * 
     * If the action map already contains an action with the same name
     * as `action` then the old action is dropped from the action map.
     * 
     * The action map takes its own reference on `action`.
     * @param action a #GAction
     */
    addAction(action: Gio.Action): void
    /**
     * A convenience function for creating multiple #GSimpleAction instances
     * and adding them to a #GActionMap.
     * 
     * Each action is constructed as per one #GActionEntry.
     * 
     * 
     * ```c
     * static void
     * activate_quit (GSimpleAction *simple,
     *                GVariant      *parameter,
     *                gpointer       user_data)
     * {
     *   exit (0);
     * }
     * 
     * static void
     * activate_print_string (GSimpleAction *simple,
     *                        GVariant      *parameter,
     *                        gpointer       user_data)
     * {
     *   g_print ("%s\n", g_variant_get_string (parameter, NULL));
     * }
     * 
     * static GActionGroup *
     * create_action_group (void)
     * {
     *   const GActionEntry entries[] = {
     *     { "quit",         activate_quit              },
     *     { "print-string", activate_print_string, "s" }
     *   };
     *   GSimpleActionGroup *group;
     * 
     *   group = g_simple_action_group_new ();
     *   g_action_map_add_action_entries (G_ACTION_MAP (group), entries, G_N_ELEMENTS (entries), NULL);
     * 
     *   return G_ACTION_GROUP (group);
     * }
     * ```
     * 
     * @param entries a pointer to           the first item in an array of #GActionEntry structs
     * @param userData the user data for signal connections
     */
    addActionEntries(entries: Gio.ActionEntry[], userData?: object | null): void
    /**
     * Looks up the action with the name `action_name` in `action_map`.
     * 
     * If no such action exists, returns %NULL.
     * @param actionName the name of an action
     */
    lookupAction(actionName: string): Gio.Action | null
    /**
     * Removes the named action from the action map.
     * 
     * If no action of this name is in the map then nothing happens.
     * @param actionName the name of the action
     */
    removeAction(actionName: string): void
    /* Signals of Totem-1.0.Totem.Object */
    /**
     * The #TotemObject::file-closed signal is emitted when Totem closes a stream.
     */
    connect(sigName: "file-closed", callback: (() => void)): number
    on(sigName: "file-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "file-closed"): void
    /**
     * The #TotemObject::file-has-played signal is emitted when a new stream has started playing in Totem.
     * @param mrl the MRL of the opened stream
     */
    connect(sigName: "file-has-played", callback: ((mrl: string) => void)): number
    on(sigName: "file-has-played", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-has-played", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-has-played", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "file-has-played", mrl: string): void
    /**
     * The #TotemObject::file-opened signal is emitted when a new stream is opened by Totem.
     * @param mrl the MRL of the opened stream
     */
    connect(sigName: "file-opened", callback: ((mrl: string) => void)): number
    on(sigName: "file-opened", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-opened", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-opened", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "file-opened", mrl: string): void
    /**
     * The #TotemObject::get-text-subtitle signal is emitted before opening a stream, so that plugins
     * have the opportunity to detect or download text subtitles for the stream if necessary.
     * @param mrl the MRL of the opened stream
     */
    connect(sigName: "get-text-subtitle", callback: ((mrl: string) => string)): number
    on(sigName: "get-text-subtitle", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-text-subtitle", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-text-subtitle", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-text-subtitle", mrl: string): void
    /**
     * The #TotemObject::get-user-agent signal is emitted before opening a stream, so that plugins
     * have the opportunity to return the user-agent to be set.
     * @param mrl the MRL of the opened stream
     */
    connect(sigName: "get-user-agent", callback: ((mrl: string) => string)): number
    on(sigName: "get-user-agent", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-user-agent", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-user-agent", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-user-agent", mrl: string): void
    /**
     * The #TotemObject::metadata-updated signal is emitted when the metadata of a stream is updated, typically
     * when it's being loaded.
     * @param artist the name of the artist, or %NULL
     * @param title the stream title, or %NULL
     * @param album the name of the stream's album, or %NULL
     * @param trackNumber the stream's track number
     */
    connect(sigName: "metadata-updated", callback: ((artist: string, title: string, album: string, trackNumber: number) => void)): number
    on(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "metadata-updated", artist: string, title: string, album: string, trackNumber: number): void
    /* Signals of Gtk-3.0.Gtk.Application */
    /**
     * Emitted when the session manager is about to end the session, only
     * if #GtkApplication::register-session is %TRUE. Applications can
     * connect to this signal and call gtk_application_inhibit() with
     * %GTK_APPLICATION_INHIBIT_LOGOUT to delay the end of the session
     * until state has been saved.
     */
    connect(sigName: "query-end", callback: (() => void)): number
    on(sigName: "query-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "query-end"): void
    /**
     * Emitted when a #GtkWindow is added to `application` through
     * gtk_application_add_window().
     * @param window the newly-added #GtkWindow
     */
    connect(sigName: "window-added", callback: ((window: Gtk.Window) => void)): number
    on(sigName: "window-added", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (window: Gtk.Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-added", window: Gtk.Window): void
    /**
     * Emitted when a #GtkWindow is removed from `application,`
     * either as a side-effect of being destroyed or explicitly
     * through gtk_application_remove_window().
     * @param window the #GtkWindow that is being removed
     */
    connect(sigName: "window-removed", callback: ((window: Gtk.Window) => void)): number
    on(sigName: "window-removed", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (window: Gtk.Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-removed", window: Gtk.Window): void
    /* Signals of Gio-2.0.Gio.Application */
    /**
     * The ::activate signal is emitted on the primary instance when an
     * activation occurs. See g_application_activate().
     */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /**
     * The ::command-line signal is emitted on the primary instance when
     * a commandline is not handled locally. See g_application_run() and
     * the #GApplicationCommandLine documentation for more information.
     * @param commandLine a #GApplicationCommandLine representing the     passed commandline
     */
    connect(sigName: "command-line", callback: ((commandLine: Gio.ApplicationCommandLine) => number)): number
    on(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void): NodeJS.EventEmitter
    emit(sigName: "command-line", commandLine: Gio.ApplicationCommandLine): void
    /**
     * The ::handle-local-options signal is emitted on the local instance
     * after the parsing of the commandline options has occurred.
     * 
     * You can add options to be recognised during commandline option
     * parsing using g_application_add_main_option_entries() and
     * g_application_add_option_group().
     * 
     * Signal handlers can inspect `options` (along with values pointed to
     * from the `arg_data` of an installed #GOptionEntrys) in order to
     * decide to perform certain actions, including direct local handling
     * (which may be useful for options like --version).
     * 
     * In the event that the application is marked
     * %G_APPLICATION_HANDLES_COMMAND_LINE the "normal processing" will
     * send the `options` dictionary to the primary instance where it can be
     * read with g_application_command_line_get_options_dict().  The signal
     * handler can modify the dictionary before returning, and the
     * modified dictionary will be sent.
     * 
     * In the event that %G_APPLICATION_HANDLES_COMMAND_LINE is not set,
     * "normal processing" will treat the remaining uncollected command
     * line arguments as filenames or URIs.  If there are no arguments,
     * the application is activated by g_application_activate().  One or
     * more arguments results in a call to g_application_open().
     * 
     * If you want to handle the local commandline arguments for yourself
     * by converting them to calls to g_application_open() or
     * g_action_group_activate_action() then you must be sure to register
     * the application first.  You should probably not call
     * g_application_activate() for yourself, however: just return -1 and
     * allow the default handler to do it for you.  This will ensure that
     * the `--gapplication-service` switch works properly (i.e. no activation
     * in that case).
     * 
     * Note that this signal is emitted from the default implementation of
     * local_command_line().  If you override that function and don't
     * chain up then this signal will never be emitted.
     * 
     * You can override local_command_line() if you need more powerful
     * capabilities than what is provided here, but this should not
     * normally be required.
     * @param options the options dictionary
     */
    connect(sigName: "handle-local-options", callback: ((options: GLib.VariantDict) => number)): number
    on(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void): NodeJS.EventEmitter
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    /**
     * The ::name-lost signal is emitted only on the registered primary instance
     * when a new instance has taken over. This can only happen if the application
     * is using the %G_APPLICATION_ALLOW_REPLACEMENT flag.
     * 
     * The default handler for this signal calls g_application_quit().
     */
    connect(sigName: "name-lost", callback: (() => boolean)): number
    on(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-lost", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "name-lost"): void
    /**
     * The ::open signal is emitted on the primary instance when there are
     * files to open. See g_application_open() for more information.
     * @param files an array of #GFiles
     * @param hint a hint provided by the calling instance
     */
    connect(sigName: "open", callback: ((files: Gio.File[], hint: string) => void)): number
    on(sigName: "open", callback: (files: Gio.File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open", callback: (files: Gio.File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open", callback: (files: Gio.File[], hint: string) => void): NodeJS.EventEmitter
    emit(sigName: "open", files: Gio.File[], hint: string): void
    /**
     * The ::shutdown signal is emitted only on the registered primary instance
     * immediately after the main loop terminates.
     */
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
    /**
     * The ::startup signal is emitted on the primary instance immediately
     * after registration. See g_application_register().
     */
    connect(sigName: "startup", callback: (() => void)): number
    on(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "startup", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "startup"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ActionGroup */
    /**
     * Signals that a new action was just added to the group.
     * This signal is emitted after the action has been added
     * and is now visible.
     * @param actionName the name of the action in `action_group`
     */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    /**
     * Signals that the enabled status of the named action has changed.
     * @param actionName the name of the action in `action_group`
     * @param enabled whether the action is enabled or not
     */
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    /**
     * Signals that an action is just about to be removed from the group.
     * This signal is emitted before the action is removed, so the action
     * is still visible and can be queried from the signal handler.
     * @param actionName the name of the action in `action_group`
     */
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    /**
     * Signals that the state of the named action has changed.
     * @param actionName the name of the action in `action_group`
     * @param value the new value of the state
     */
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    connect(sigName: "notify::current-content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-mrl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-mrl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seekable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seekable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menubar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::register-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screensaver-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Object
    /* Function overloads */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Object
    /**
     * Get the full list of file content types which Totem supports playing.
     */
    static getSupportedContentTypes(): string[]
    /**
     * Get the full list of URI schemes which Totem supports accessing.
     */
    static getSupportedUriSchemes(): string[]
    static $gtype: GObject.Type
}
abstract class ObjectClass {
    /* Fields of Totem-1.0.Totem.ObjectClass */
    parentClass: Gtk.ApplicationClass
    fileOpened: (totem: Object, mrl: string) => void
    fileClosed: (totem: Object) => void
    fileHasPlayed: (totem: Object, mrl: string) => void
    metadataUpdated: (totem: Object, artist: string, title: string, album: string, trackNum: number) => void
    getUserAgent: (totem: Object, mrl: string) => string
    getTextSubtitle: (totem: Object, mrl: string) => string
    static name: string
}
}
export default Totem;