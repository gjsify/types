
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './spiceclientglib-2.0-ambient.d.ts';
import './spiceclientglib-2.0-import.d.ts';
/**
 * SpiceClientGLib-2.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';

export namespace SpiceClientGLib {

/**
 * An event, emitted by #SpiceChannel::channel-event signal.
 */
enum ChannelEvent {
    /**
     * no event, or ignored event
     */
    NONE,
    /**
     * connection is authentified and ready
     */
    OPENED,
    /**
     * disconnecting from the current host and connecting to the target host.
     */
    SWITCHING,
    /**
     * connection is closed normally (sent if channel was ready)
     */
    CLOSED,
    /**
     * connection error
     */
    ERROR_CONNECT,
    /**
     * SSL error
     */
    ERROR_TLS,
    /**
     * error during link process
     */
    ERROR_LINK,
    /**
     * authentication error
     */
    ERROR_AUTH,
    /**
     * IO error
     */
    ERROR_IO,
}
/**
 * Error codes returned by spice-client API.
 */
enum ClientError {
    /**
     * generic error code
     */
    FAILED,
    /**
     * device redirection rejected by host
     */
    USB_DEVICE_REJECTED,
    /**
     * device disconnected (fatal IO error)
     */
    USB_DEVICE_LOST,
    /**
     * password is required
     */
    AUTH_NEEDS_PASSWORD,
    /**
     * username is required
     */
    AUTH_NEEDS_USERNAME,
    /**
     * password and username are required
     */
    AUTH_NEEDS_PASSWORD_AND_USERNAME,
    /**
     * USB service error
     */
    USB_SERVICE,
}
/**
 * An action to perform on the VM.
 */
enum QmpPortVmAction {
    /**
     * This command will cause the VM process to exit gracefully.
     */
    QUIT,
    /**
     * Performs a hard reset of the VM.
     */
    RESET,
    /**
     * Performs a power down operation.
     */
    POWER_DOWN,
    /**
     * Stop all VCPU execution.
     */
    PAUSE,
    /**
     * Resume all VCPU execution.
     */
    CONTINUE,
    /**
     * the last enum value.
     */
    LAST,
}
/**
 * Session migration state.
 */
enum SessionMigration {
    /**
     * no migration going on
     */
    NONE,
    /**
     * the session is switching host (destroy and reconnect)
     */
    SWITCHING,
    /**
     * the session is migrating seamlessly (reconnect)
     */
    MIGRATING,
    /**
     * the migration is connecting to destination (Since: 0.27)
     */
    CONNECTING,
}
/**
 * Constants used to synchronize modifiers between a client and a guest.
 * @bitfield 
 */
enum InputsLock {
    /**
     * Scroll Lock
     */
    SCROLL_LOCK,
    /**
     * Num Lock
     */
    NUM_LOCK,
    /**
     * Caps Lock
     */
    CAPS_LOCK,
}
/**
 * Peer certificate verification parameters flags.
 * @bitfield 
 */
enum SessionVerify {
    /**
     * verify certificate public key matching
     */
    PUBKEY,
    /**
     * verify certificate hostname matching
     */
    HOSTNAME,
    /**
     * verify certificate subject matching
     */
    SUBJECT,
}
/**
 * Spice-Gtk major version component (e.g. 1 if version is 1.2.3)
 */
const GTK_MAJOR_VERSION: number
/**
 * Spice-Gtk micro version component (e.g. 3 if version is 1.2.3)
 */
const GTK_MICRO_VERSION: number
/**
 * Spice-Gtk minor version component (e.g. 2 if version is 1.2.3)
 */
const GTK_MINOR_VERSION: number
/**
 * Gets a #GQuark representing the string "spice-client-error-quark"
 * @returns the #GQuark representing the string.
 */
function client_error_quark(): GLib.Quark
/**
 * Tells the spice server to change the preferred image compression
 * for the `channel`.
 * @param channel a #SpiceDisplayChannel
 * @param compression a #SpiceImageCompression
 */
function display_change_preferred_compression(channel: Channel, compression: number): void
/**
 * Tells the spice server to change the preferred video codec type for
 * streaming in `channel`. Application can set only one preferred video codec per
 * display channel.
 * @param channel a #SpiceDisplayChannel
 * @param codec_type a #SpiceVideoCodecType
 */
function display_change_preferred_video_codec_type(channel: Channel, codec_type: number): void
/**
 * Retrieves the GL scanout if available
 * @param channel a #SpiceDisplayChannel
 * @returns the current GL scanout, or %NULL if none or not valid
 */
function display_get_gl_scanout(channel: DisplayChannel): GlScanout
/**
 * Retrieve primary display surface `surface_id`.
 * @param channel a #SpiceDisplayChannel
 * @param surface_id a surface id
 * @param primary a #SpiceDisplayPrimary
 * @returns %TRUE if the primary surface was found and its details collected in @primary.
 */
function display_get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean
/**
 * After a SpiceDisplayChannel::gl-draw is emitted, the client should
 * draw the current display with the current GL scanout, and must
 * release the GL resource with a call to spice_display_gl_draw_done()
 * (failing to do so for each gl-draw may result in a frozen display).
 * @param channel a #SpiceDisplayChannel
 */
function display_gl_draw_done(channel: DisplayChannel): void
/**
 * Gets commandline options.
 * 
 * Bindings for other languages are available since 0.32
 * @returns a #GOptionGroup for the commandline arguments specific to Spice.  You have to call spice_set_session_option() after to set the options on a #SpiceSession.
 */
function get_option_group(): GLib.OptionGroup
/**
 * Press a mouse button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param button_state SPICE_MOUSE_BUTTON_MASK flags
 */
function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void
/**
 * Release a button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param button_state SPICE_MOUSE_BUTTON_MASK flags
 */
function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void
/**
 * Press a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputs_key_press(channel: InputsChannel, scancode: number): void
/**
 * Press and release a key event atomically (in the same message).
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void
/**
 * Release a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputs_key_release(channel: InputsChannel, scancode: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
 * @param channel a #SpiceInputsChannel
 * @param dx delta X mouse coordinates
 * @param dy delta Y mouse coordinates
 * @param button_state SPICE_MOUSE_BUTTON_MASK flags
 */
function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
 * @param channel a #SpiceInputsChannel
 * @param x X mouse coordinates
 * @param y Y mouse coordinates
 * @param display display channel id
 * @param button_state SPICE_MOUSE_BUTTON_MASK flags
 */
function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void
/**
 * Set the keyboard locks on the guest (Caps, Num, Scroll..)
 * @param channel a #SpiceInputsChannel
 * @param locks #SpiceInputsLock modifiers flags
 */
function inputs_set_key_locks(channel: InputsChannel, locks: number): void
/**
 * Test capability of a remote agent.
 * @param channel a #SpiceMainChannel
 * @param cap an agent capability identifier
 * @returns %TRUE if @cap (channel kind capability) is available.
 */
function main_agent_test_capability(channel: MainChannel, cap: number): boolean
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
function main_clipboard_grab(channel: MainChannel, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
function main_clipboard_notify(channel: MainChannel, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 */
function main_clipboard_release(channel: MainChannel): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard signal.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 */
function main_clipboard_request(channel: MainChannel, type: number): void
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
function main_clipboard_selection_grab(channel: MainChannel, selection: number, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
function main_clipboard_selection_notify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 */
function main_clipboard_selection_release(channel: MainChannel, selection: number): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard-selection signal.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 */
function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void
/**
 * See: spice_main_channel_file_copy_async()
 * @param channel a #SpiceMainChannel
 * @param sources a %NULL-terminated array of #GFile objects to be transferred
 * @param flags set of #GFileCopyFlags
 * @param cancellable optional #GCancellable object, %NULL to ignore
 * @param progress_callback function to callback with     progress information, or %NULL if progress information is not needed
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
function main_file_copy_async<Z = unknown>(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<Z> | null): void

// Overloads of main_file_copy_async

/**
 * Promisified version of {@link main_file_copy_async}
 * 
 * See: spice_main_channel_file_copy_async()
 * @param channel a #SpiceMainChannel
 * @param sources a %NULL-terminated array of #GFile objects to be transferred
 * @param flags set of #GFileCopyFlags
 * @param cancellable optional #GCancellable object, %NULL to ignore
 * @param progress_callback function to callback with     progress information, or %NULL if progress information is not needed
 * @returns A Promise of: a %TRUE on success, %FALSE on error.
 */
function main_file_copy_async<Z = unknown>(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
/**
 * Finishes copying the file started with
 * spice_main_file_copy_async().
 * @param channel a #SpiceMainChannel
 * @param result a #GAsyncResult.
 * @returns a %TRUE on success, %FALSE on error.
 */
function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean
/**
 * Request a mouse mode to the server. The server may not be able to
 * change the mouse mode, but spice-gtk will try to request it
 * when possible.
 * @param channel a %SpiceMainChannel
 * @param mode a SPICE_MOUSE_MODE
 */
function main_request_mouse_mode(channel: MainChannel, mode: number): void
/**
 * Send monitors configuration previously set with
 * spice_main_set_display() and spice_main_set_display_enabled()
 * @param channel a #SpiceMainChannel
 * @returns %TRUE on success.
 */
function main_send_monitor_config(channel: MainChannel): boolean
/**
 * Notify the guest of screen resolution change. The notification is
 * sent 1 second later, if no further changes happen.
 * @param channel a #SpiceMainChannel
 * @param id display ID
 * @param x x position
 * @param y y position
 * @param width display width
 * @param height display height
 */
function main_set_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
/**
 * When sending monitor configuration to agent guest, don't set
 * display `id,` which the agent translates to disabling the display
 * id. Note: this will take effect next time the monitor
 * configuration is sent.
 * @param channel a #SpiceMainChannel
 * @param id display ID (if -1: set all displays)
 * @param enabled wether display `id` is enabled
 */
function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void
/**
 * Update the display `id` resolution.
 * 
 * If `update` is %TRUE, the remote configuration will be updated too
 * after 1 second without further changes. You can send when you want
 * without delay the new configuration to the remote with
 * spice_main_send_monitor_config()
 * @param channel a #SpiceMainChannel
 * @param id display ID
 * @param x x position
 * @param y y position
 * @param width display width
 * @param height display height
 * @param update if %TRUE, update guest resolution after 1sec.
 */
function main_update_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
/**
 * When sending monitor configuration to agent guest, if `enabled` is %FALSE,
 * don't set display `id,` which the agent translates to disabling the display
 * id. If `enabled` is %TRUE, the monitor will be included in the next monitor
 * update. Note: this will take effect next time the monitor configuration is
 * sent.
 * 
 * If `update` is %FALSE, no server update will be triggered by this call, but
 * the value will be saved and used in the next configuration update.
 * @param channel a #SpiceMainChannel
 * @param id display ID (if -1: set all displays)
 * @param enabled wether display `id` is enabled
 * @param update if %TRUE, update guest display state after 1sec.
 */
function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
/**
 * Send an event to the port.
 * 
 * Note: The values SPICE_PORT_EVENT_CLOSED and
 * SPICE_PORT_EVENT_OPENED are managed by the channel connection
 * state.
 * @param port a #SpicePortChannel
 * @param event a SPICE_PORT_EVENT value
 */
function port_event(port: PortChannel, event: number): void
/**
 * Request an asynchronous write of count bytes from `buffer` into the
 * `port`. When the operation is finished `callback` will be called. You
 * can then call spice_port_write_finish() to get the result of
 * the operation.
 * @param port A #SpicePortChannel
 * @param buffer the buffer containing the data to write
 * @param cancellable optional GCancellable object, NULL to ignore
 * @param callback callback to call when the request is satisfied
 */
function port_write_async<Z = unknown>(port: PortChannel, buffer: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void

// Overloads of port_write_async

/**
 * Promisified version of {@link port_write_async}
 * 
 * Request an asynchronous write of count bytes from `buffer` into the
 * `port`. When the operation is finished `callback` will be called. You
 * can then call spice_port_write_finish() to get the result of
 * the operation.
 * @param port A #SpicePortChannel
 * @param buffer the buffer containing the data to write
 * @param cancellable optional GCancellable object, NULL to ignore
 * @returns A Promise of: a #gssize containing the number of bytes written to the stream.
 */
function port_write_async<Z = unknown>(port: PortChannel, buffer: Uint8Array, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
/**
 * Finishes a port write operation.
 * @param port a #SpicePortChannel
 * @param result a #GAsyncResult
 * @returns a #gssize containing the number of bytes written to the stream.
 */
function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number
/**
 * Send recorded PCM data to the guest.
 * @param channel a #SpiceRecordChannel
 * @param data PCM data
 * @param bytes size of `data`
 * @param time stream timestamp
 */
function record_send_data(channel: RecordChannel, data: any | null, bytes: number, time: number): void
/**
 * Set various properties on `session,` according to the commandline
 * arguments given to spice_get_option_group() option group.
 * @param session a #SpiceSession to set option upon
 */
function set_session_option(session: Session): void
function util_get_debug(): boolean
/**
 * Gets the version string
 * @returns Spice-GTK version as a const string.
 */
function util_get_version_string(): string
/**
 * Enable or disable Spice-GTK debugging messages.
 * @param enabled %TRUE or %FALSE
 */
function util_set_debug(enabled: boolean): void
/**
 * Creates a string representation of `uuid,` of the form
 * "06e023d5-86d8-420e-8103-383e4566087a"
 * @param uuid UUID byte array
 * @returns A string that should be freed with g_free().
 */
function uuid_to_string(uuid: number): string | null
interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
module Audio {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

        main_context?: GLib.MainContext | null
        /**
         * #SpiceSession this #SpiceAudio is associated with
         */
        session?: Session | null
        mainContext?: GLib.MainContext | null
    }

}

interface Audio {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    readonly main_context: GLib.MainContext
    readonly mainContext: GLib.MainContext
    /**
     * #SpiceSession this #SpiceAudio is associated with
     */
    readonly session: Session

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    parent: GObject.Object
    priv: AudioPrivate

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    vfunc_connect_channel(channel: Channel): boolean
    vfunc_get_playback_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_playback_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    vfunc_get_record_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_record_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    connect(sigName: "notify::main-context", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceAudio struct is opaque and should not be accessed directly.
 * @class 
 */
class Audio extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    static name: string
    static $gtype: GObject.GType<Audio>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    constructor(config?: Audio.ConstructorProperties) 
    /**
     * Once instantiated, #SpiceAudio will handle the playback and record
     * channels to stream to your local audio system.
     * @constructor 
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     * @param name a name for the audio channels (or %NULL for application name).
     * @returns a new #SpiceAudio instance or %NULL if no backend or failed.
     */
    constructor(session: Session, context: GLib.MainContext | null, name: string | null) 
    /**
     * Once instantiated, #SpiceAudio will handle the playback and record
     * channels to stream to your local audio system.
     * @constructor 
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     * @param name a name for the audio channels (or %NULL for application name).
     * @returns a new #SpiceAudio instance or %NULL if no backend or failed.
     */
    static new(session: Session, context: GLib.MainContext | null, name: string | null): Audio
    _init(config?: Audio.ConstructorProperties): void
    /**
     * Gets the #SpiceAudio associated with the passed in #SpiceSession.
     * A new #SpiceAudio instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     * @returns a weak reference to a #SpiceAudio instance or %NULL if failed.
     */
    static get(session: Session, context: GLib.MainContext | null): Audio
}

module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `channel-event`
     */
    interface ChannelEventSignalCallback {
        ($obj: Channel, event: ChannelEvent): void
    }

    /**
     * Signal callback interface for `open-fd`
     */
    interface OpenFdSignalCallback {
        ($obj: Channel, with_tls: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

        channel_id?: number | null
        channel_type?: number | null
        spice_session?: Session | null
        channelId?: number | null
        channelType?: number | null
        spiceSession?: Session | null
    }

}

interface Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    readonly channel_id: number
    readonly channelId: number
    readonly channel_type: number
    readonly channelType: number
    /**
     * Get the underlying #GSocket. Note that you should not read or
     * write any data to it directly since this will likely corrupt
     * the channel stream.  This property is mainly useful to get some
     * connections details.
     */
    readonly socket: Gio.Socket
    readonly spice_session: Session
    readonly spiceSession: Session
    readonly total_read_bytes: number
    readonly totalReadBytes: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    parent: GObject.Object
    priv: ChannelPrivate

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    /**
     * Disconnect and unref the `channel`.
     */
    destroy(): void
    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
    /**
     * Forces an asynchronous write of all user-space buffered data for
     * the given channel.
     * 
     * When the operation is finished callback will be called. You can
     * then call spice_channel_flush_finish() to get the result of the
     * operation.
     * @param cancellable optional GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    flush_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of flush_async

    /**
     * Promisified version of {@link flush_async}
     * 
     * Forces an asynchronous write of all user-space buffered data for
     * the given channel.
     * 
     * When the operation is finished callback will be called. You can
     * then call spice_channel_flush_finish() to get the result of the
     * operation.
     * @param cancellable optional GCancellable object, %NULL to ignore
     * @returns A Promise of: %TRUE if flush operation succeeded, %FALSE otherwise.
     */
    flush_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes flushing a channel.
     * @param result a #GAsyncResult
     * @returns %TRUE if flush operation succeeded, %FALSE otherwise.
     */
    flush_finish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves the #GError currently set on channel, if the #SpiceChannel
     * is in error state and can provide additional error details.
     * @returns the pointer to the error, or %NULL
     */
    get_error(): GLib.Error
    /**
     * Connect the channel using `fd` socket.
     * 
     * If `fd` is -1, a valid fd will be requested later via the
     * SpiceChannel::open-fd signal.
     * @param fd a file descriptor (socket) or -1. request mechanism
     * @returns %TRUE on success.
     */
    open_fd(fd: number): boolean
    /**
     * Enable specific channel-kind capability.
     * @param cap a capability
     */
    set_capability(cap: number): void
    /**
     * Test availability of remote "channel kind capability".
     * @param cap a capability
     * @returns %TRUE if @cap (channel kind capability) is available.
     */
    test_capability(cap: number): boolean
    /**
     * Test availability of remote "common channel capability".
     * @param cap a capability
     * @returns %TRUE if @cap (common channel capability) is available.
     */
    test_common_capability(cap: number): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    connect(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback): number
    connect_after(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback): number
    emit(sigName: "channel-event", event: ChannelEvent, ...args: any[]): void
    connect(sigName: "open-fd", callback: Channel.OpenFdSignalCallback): number
    connect_after(sigName: "open-fd", callback: Channel.OpenFdSignalCallback): number
    emit(sigName: "open-fd", with_tls: number, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    connect(sigName: "notify::channel-id", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-type", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spice-session", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class Channel extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    static name: string
    static $gtype: GObject.GType<Channel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    constructor(config?: Channel.ConstructorProperties) 
    /**
     * Create a new #SpiceChannel of type `type,` and channel ID `id`.
     * @constructor 
     * @param s the `SpiceSession` the channel is linked to
     * @param type the requested SPICECHANNELPRIVATE type
     * @param id the channel-id
     * @returns a weak reference to #SpiceChannel, the session owns the reference
     */
    constructor(s: Session, type: number, id: number) 
    /**
     * Create a new #SpiceChannel of type `type,` and channel ID `id`.
     * @constructor 
     * @param s the `SpiceSession` the channel is linked to
     * @param type the requested SPICECHANNELPRIVATE type
     * @param id the channel-id
     * @returns a weak reference to #SpiceChannel, the session owns the reference
     */
    static new(s: Session, type: number, id: number): Channel
    _init(config?: Channel.ConstructorProperties): void
    /**
     * Convert a channel-type property value to a string.
     * @param str a string representation of the channel-type property
     * @returns the channel-type property value for a @str channel
     */
    static string_to_type(str: string): number
    /**
     * Convert a channel-type property value to a string.
     * @param type a channel-type property value
     * @returns string representation of @type.
     */
    static type_to_string(type: number): string
}

module CursorChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-hide`
     */
    interface CursorHideSignalCallback {
        ($obj: CursorChannel): void
    }

    /**
     * Signal callback interface for `cursor-move`
     */
    interface CursorMoveSignalCallback {
        ($obj: CursorChannel, x: number, y: number): void
    }

    /**
     * Signal callback interface for `cursor-reset`
     */
    interface CursorResetSignalCallback {
        ($obj: CursorChannel): void
    }

    /**
     * Signal callback interface for `cursor-set`
     */
    interface CursorSetSignalCallback {
        ($obj: CursorChannel, width: number, height: number, hot_x: number, hot_y: number, rgba: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface CursorChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    /**
     * The last #SpiceCursorShape received.
     */
    readonly cursor: CursorShape

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    parent: Channel & GObject.Object

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    vfunc_cursor_hide(): void
    vfunc_cursor_move(x: number, y: number): void
    vfunc_cursor_reset(): void
    vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba: any | null): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback): number
    emit(sigName: "cursor-hide", ...args: any[]): void
    connect(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback): number
    emit(sigName: "cursor-move", x: number, y: number, ...args: any[]): void
    connect(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback): number
    emit(sigName: "cursor-reset", ...args: any[]): void
    connect(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback): number
    emit(sigName: "cursor-set", width: number, height: number, hot_x: number, hot_y: number, rgba: any | null, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceCursorChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class CursorChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    static name: string
    static $gtype: GObject.GType<CursorChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    constructor(config?: CursorChannel.ConstructorProperties) 
    _init(config?: CursorChannel.ConstructorProperties): void
}

module DisplayChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `display-invalidate`
     */
    interface DisplayInvalidateSignalCallback {
        ($obj: DisplayChannel, x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `display-mark`
     */
    interface DisplayMarkSignalCallback {
        ($obj: DisplayChannel, mark: number): void
    }

    /**
     * Signal callback interface for `display-primary-create`
     */
    interface DisplayPrimaryCreateSignalCallback {
        ($obj: DisplayChannel, format: number, width: number, height: number, stride: number, shmid: number, imgdata: any | null): void
    }

    /**
     * Signal callback interface for `display-primary-destroy`
     */
    interface DisplayPrimaryDestroySignalCallback {
        ($obj: DisplayChannel): void
    }

    /**
     * Signal callback interface for `gl-draw`
     */
    interface GlDrawSignalCallback {
        ($obj: DisplayChannel, x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `gst-video-overlay`
     */
    interface GstVideoOverlaySignalCallback {
        ($obj: DisplayChannel, pipeline: Gst.Pipeline): boolean
    }

    /**
     * Signal callback interface for `streaming-mode`
     */
    interface StreamingModeSignalCallback {
        ($obj: DisplayChannel, streaming_mode: boolean): any | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface DisplayChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    /**
     * The last #SpiceGlScanout received.
     */
    readonly gl_scanout: GlScanout
    /**
     * The last #SpiceGlScanout received.
     */
    readonly glScanout: GlScanout
    readonly height: number
    /**
     * Current monitors configuration.
     */
    readonly monitors: any[]
    /**
     * The maximum number of monitors the server or guest supports.
     * May change during client lifetime, for instance guest may
     * reboot or dynamically adjust this.
     */
    readonly monitors_max: number
    /**
     * The maximum number of monitors the server or guest supports.
     * May change during client lifetime, for instance guest may
     * reboot or dynamically adjust this.
     */
    readonly monitorsMax: number
    readonly width: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    /**
     * Retrieves the GL scanout if available
     * @returns the current GL scanout, or %NULL if none or not valid
     */
    get_gl_scanout(): GlScanout
    /**
     * After a SpiceDisplayChannel::gl-draw is emitted, the client should
     * draw the current display with the current GL scanout, and must
     * release the GL resource with a call to spice_display_gl_draw_done()
     * (failing to do so for each gl-draw may result in a frozen display).
     */
    gl_draw_done(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    connect(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback): number
    emit(sigName: "display-invalidate", x: number, y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback): number
    emit(sigName: "display-mark", mark: number, ...args: any[]): void
    connect(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback): number
    emit(sigName: "display-primary-create", format: number, width: number, height: number, stride: number, shmid: number, imgdata: any | null, ...args: any[]): void
    connect(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback): number
    emit(sigName: "display-primary-destroy", ...args: any[]): void
    connect(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback): number
    emit(sigName: "gl-draw", x: number, y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback): number
    emit(sigName: "gst-video-overlay", pipeline: Gst.Pipeline, ...args: any[]): void
    connect(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback): number
    emit(sigName: "streaming-mode", streaming_mode: boolean, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    connect(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gl-scanout", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitors", ...args: any[]): void
    connect(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitors-max", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceDisplayChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class DisplayChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    static name: string
    static $gtype: GObject.GType<DisplayChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    constructor(config?: DisplayChannel.ConstructorProperties) 
    _init(config?: DisplayChannel.ConstructorProperties): void
    /**
     * Tells the spice server to change the preferred image compression
     * for the `channel`.
     * @param channel a #SpiceDisplayChannel
     * @param compression a #SpiceImageCompression
     */
    static change_preferred_compression(channel: Channel, compression: number): void
    /**
     * Tells the spice server to change the preferred video codec type for
     * streaming in `channel`. Application can set only one preferred video codec per
     * display channel.
     * @param channel a #SpiceDisplayChannel
     * @param codec_type a #SpiceVideoCodecType
     */
    static change_preferred_video_codec_type(channel: Channel, codec_type: number): void
    /**
     * Retrieve primary display surface `surface_id`.
     * @param channel a #SpiceDisplayChannel
     * @param surface_id a surface id
     * @param primary a #SpiceDisplayPrimary
     * @returns %TRUE if the primary surface was found and its details collected in @primary.
     */
    static get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean
}

module FileTransferTask {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: FileTransferTask, object: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

        cancellable?: Gio.Cancellable | null
        channel?: MainChannel | null
        file?: Gio.File | null
        id?: number | null
    }

}

interface FileTransferTask {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    readonly cancellable: Gio.Cancellable
    readonly channel: MainChannel
    readonly file: Gio.File
    readonly id: number
    readonly progress: number
    readonly total_bytes: number
    readonly totalBytes: number
    readonly transferred_bytes: number
    readonly transferredBytes: number

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    cancel(): void
    get_filename(): string | null
    get_progress(): number
    get_total_bytes(): number
    get_transferred_bytes(): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    connect(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback): number
    emit(sigName: "finished", object: GLib.Error, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    connect(sigName: "notify::cancellable", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::channel", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-bytes", ...args: any[]): void
    connect(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transferred-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileTransferTask extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    static name: string
    static $gtype: GObject.GType<FileTransferTask>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    constructor(config?: FileTransferTask.ConstructorProperties) 
    _init(config?: FileTransferTask.ConstructorProperties): void
}

module InputsChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `inputs-modifiers`
     */
    interface InputsModifiersSignalCallback {
        ($obj: InputsChannel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface InputsChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    readonly key_modifiers: number
    readonly keyModifiers: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    /**
     * Press a mouse button.
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    button_press(button: number, button_state: number): void
    /**
     * Release a button.
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    button_release(button: number, button_state: number): void
    /**
     * Press a key.
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    key_press(scancode: number): void
    /**
     * Press and release a key event atomically (in the same message).
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    key_press_and_release(scancode: number): void
    /**
     * Release a key.
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    key_release(scancode: number): void
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
     * @param dx delta X mouse coordinates
     * @param dy delta Y mouse coordinates
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    motion(dx: number, dy: number, button_state: number): void
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
     * @param x X mouse coordinates
     * @param y Y mouse coordinates
     * @param display display channel id
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    position(x: number, y: number, display: number, button_state: number): void
    /**
     * Set the keyboard locks on the guest (Caps, Num, Scroll..)
     * @param locks #SpiceInputsLock modifiers flags
     */
    set_key_locks(locks: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    connect(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback): number
    emit(sigName: "inputs-modifiers", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    connect(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-modifiers", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceInputsChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class InputsChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    static name: string
    static $gtype: GObject.GType<InputsChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    constructor(config?: InputsChannel.ConstructorProperties) 
    _init(config?: InputsChannel.ConstructorProperties): void
}

module MainChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `main-agent-update`
     */
    interface MainAgentUpdateSignalCallback {
        ($obj: MainChannel): void
    }

    /**
     * Signal callback interface for `main-clipboard`
     */
    interface MainClipboardSignalCallback {
        ($obj: MainChannel, type: number, data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-grab`
     */
    interface MainClipboardGrabSignalCallback {
        ($obj: MainChannel, types: any | null, ntypes: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-release`
     */
    interface MainClipboardReleaseSignalCallback {
        ($obj: MainChannel): void
    }

    /**
     * Signal callback interface for `main-clipboard-request`
     */
    interface MainClipboardRequestSignalCallback {
        ($obj: MainChannel, types: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-selection`
     */
    interface MainClipboardSelectionSignalCallback {
        ($obj: MainChannel, selection: number, type: number, data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-selection-grab`
     */
    interface MainClipboardSelectionGrabSignalCallback {
        ($obj: MainChannel, selection: number, types: any | null, ntypes: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-selection-release`
     */
    interface MainClipboardSelectionReleaseSignalCallback {
        ($obj: MainChannel, selection: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-selection-request`
     */
    interface MainClipboardSelectionRequestSignalCallback {
        ($obj: MainChannel, selection: number, types: number): boolean
    }

    /**
     * Signal callback interface for `main-mouse-update`
     */
    interface MainMouseUpdateSignalCallback {
        ($obj: MainChannel): void
    }

    /**
     * Signal callback interface for `migration-started`
     */
    interface MigrationStartedSignalCallback {
        ($obj: MainChannel, session: GObject.Object): void
    }

    /**
     * Signal callback interface for `new-file-transfer`
     */
    interface NewFileTransferSignalCallback {
        ($obj: MainChannel, task: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

        color_depth?: number | null
        disable_animation?: boolean | null
        /**
         * Disable automatic horizontal display position alignment.
         */
        disable_display_align?: boolean | null
        disable_display_position?: boolean | null
        disable_font_smooth?: boolean | null
        disable_wallpaper?: boolean | null
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        max_clipboard?: number | null
        colorDepth?: number | null
        disableAnimation?: boolean | null
        /**
         * Disable automatic horizontal display position alignment.
         */
        disableDisplayAlign?: boolean | null
        disableDisplayPosition?: boolean | null
        disableFontSmooth?: boolean | null
        disableWallpaper?: boolean | null
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        maxClipboard?: number | null
    }

}

interface MainChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    readonly agent_caps_0: number
    readonly agentCaps0: number
    readonly agent_connected: boolean
    readonly agentConnected: boolean
    color_depth: number
    colorDepth: number
    disable_animation: boolean
    disableAnimation: boolean
    /**
     * Disable automatic horizontal display position alignment.
     */
    disable_display_align: boolean
    /**
     * Disable automatic horizontal display position alignment.
     */
    disableDisplayAlign: boolean
    disable_display_position: boolean
    disableDisplayPosition: boolean
    disable_font_smooth: boolean
    disableFontSmooth: boolean
    disable_wallpaper: boolean
    disableWallpaper: boolean
    /**
     * Maximum size of clipboard operations in bytes (default 100MB,
     * -1 for unlimited size);
     */
    max_clipboard: number
    /**
     * Maximum size of clipboard operations in bytes (default 100MB,
     * -1 for unlimited size);
     */
    maxClipboard: number
    /**
     * Spice protocol specifies two mouse modes, client mode and
     * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
     * affective mouse is the client side mouse: the client sends
     * mouse position within the display and the server sends mouse
     * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
     * client sends relative mouse movements and the server sends
     * position and shape commands.
     */
    readonly mouse_mode: number
    /**
     * Spice protocol specifies two mouse modes, client mode and
     * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
     * affective mouse is the client side mouse: the client sends
     * mouse position within the display and the server sends mouse
     * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
     * client sends relative mouse movements and the server sends
     * position and shape commands.
     */
    readonly mouseMode: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    /**
     * Test capability of a remote agent.
     * @param cap an agent capability identifier
     * @returns %TRUE if @cap (channel kind capability) is available.
     */
    agent_test_capability(cap: number): boolean
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     * @param ntypes the number of `types`
     */
    clipboard_selection_grab(selection: number, types: number, ntypes: number): void
    /**
     * Send the clipboard data to the guest.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     * @param size data length in bytes
     */
    clipboard_selection_notify(selection: number, type: number, data: number, size: number): void
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     */
    clipboard_selection_release(selection: number): void
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the #SpiceMainChannel::main-clipboard-selection signal.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     */
    clipboard_selection_request(selection: number, type: number): void
    /**
     * Copies the file `sources` to guest
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored by
     * setting this to a #GFileProgressCallback function. `progress_callback_data`
     * will be passed to this function. It is guaranteed that this callback will
     * be called after all data has been transferred with the total number of bytes
     * copied during the operation. Note that before release 0.31, progress_callback
     * was broken since it only provided status for a single file transfer, but did
     * not provide a way to determine which file it referred to. In release 0.31,
     * this behavior was changed so that progress_callback provides the status of
     * all ongoing file transfers. If you need to monitor the status of individual
     * files, please connect to the #SpiceMainChannel::new-file-transfer signal.
     * 
     * When the operation is finished, callback will be called. You can then call
     * spice_main_file_copy_finish() to get the result of the operation. Note that
     * before release 0.33 the callback was called for each file in multiple file
     * transfer. This behavior was changed for the same reason as the
     * progress_callback (above). If you need to monitor the ending of individual
     * files, you can connect to "finished" signal from each SpiceFileTransferTask.
     * @param sources a %NULL-terminated array of #GFile objects to be transferred
     * @param flags set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param progress_callback function to callback with     progress information, or %NULL if progress information is not needed
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of file_copy_async

    /**
     * Promisified version of {@link file_copy_async}
     * 
     * Copies the file `sources` to guest
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored by
     * setting this to a #GFileProgressCallback function. `progress_callback_data`
     * will be passed to this function. It is guaranteed that this callback will
     * be called after all data has been transferred with the total number of bytes
     * copied during the operation. Note that before release 0.31, progress_callback
     * was broken since it only provided status for a single file transfer, but did
     * not provide a way to determine which file it referred to. In release 0.31,
     * this behavior was changed so that progress_callback provides the status of
     * all ongoing file transfers. If you need to monitor the status of individual
     * files, please connect to the #SpiceMainChannel::new-file-transfer signal.
     * 
     * When the operation is finished, callback will be called. You can then call
     * spice_main_file_copy_finish() to get the result of the operation. Note that
     * before release 0.33 the callback was called for each file in multiple file
     * transfer. This behavior was changed for the same reason as the
     * progress_callback (above). If you need to monitor the ending of individual
     * files, you can connect to "finished" signal from each SpiceFileTransferTask.
     * @param sources a %NULL-terminated array of #GFile objects to be transferred
     * @param flags set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param progress_callback function to callback with     progress information, or %NULL if progress information is not needed
     * @returns A Promise of: a %TRUE on success, %FALSE on error.
     */
    file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes copying the file started with
     * spice_main_file_copy_async().
     * @param result a #GAsyncResult.
     * @returns a %TRUE on success, %FALSE on error.
     */
    file_copy_finish(result: Gio.AsyncResult): boolean
    /**
     * Request a mouse mode to the server. The server may not be able to
     * change the mouse mode, but spice-gtk will try to request it
     * when possible.
     * @param mode a SPICE_MOUSE_MODE
     */
    request_mouse_mode(mode: number): void
    /**
     * Send monitors configuration previously set with
     * spice_main_set_display() and spice_main_set_display_enabled()
     * @returns %TRUE on success.
     */
    send_monitor_config(): boolean
    /**
     * Update the display `id` resolution.
     * 
     * If `update` is %TRUE, the remote configuration will be updated too
     * after 1 second without further changes. You can send when you want
     * without delay the new configuration to the remote with
     * spice_main_send_monitor_config()
     * @param id display ID
     * @param x x position
     * @param y y position
     * @param width display width
     * @param height display height
     * @param update if %TRUE, update guest resolution after 1sec.
     */
    update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void
    /**
     * When sending monitor configuration to agent guest, if `enabled` is %FALSE,
     * don't set display `id,` which the agent translates to disabling the display
     * id. If `enabled` is %TRUE, the monitor will be included in the next monitor
     * update. Note: this will take effect next time the monitor configuration is
     * sent.
     * 
     * If `update` is %FALSE, no server update will be triggered by this call, but
     * the value will be saved and used in the next configuration update.
     * @param id display ID (if -1: set all displays)
     * @param enabled wether display `id` is enabled
     * @param update if %TRUE, update guest display state after 1sec.
     */
    update_display_enabled(id: number, enabled: boolean, update: boolean): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    connect(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback): number
    emit(sigName: "main-agent-update", ...args: any[]): void
    connect(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback): number
    emit(sigName: "main-clipboard", type: number, data: any | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback): number
    emit(sigName: "main-clipboard-grab", types: any | null, ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback): number
    emit(sigName: "main-clipboard-release", ...args: any[]): void
    connect(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback): number
    emit(sigName: "main-clipboard-request", types: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback): number
    emit(sigName: "main-clipboard-selection", selection: number, type: number, data: any | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback): number
    emit(sigName: "main-clipboard-selection-grab", selection: number, types: any | null, ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback): number
    emit(sigName: "main-clipboard-selection-release", selection: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback): number
    emit(sigName: "main-clipboard-selection-request", selection: number, types: number, ...args: any[]): void
    connect(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback): number
    emit(sigName: "main-mouse-update", ...args: any[]): void
    connect(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback): number
    emit(sigName: "migration-started", session: GObject.Object, ...args: any[]): void
    connect(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback): number
    emit(sigName: "new-file-transfer", task: GObject.Object, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    connect(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::agent-caps-0", ...args: any[]): void
    connect(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::agent-connected", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-animation", ...args: any[]): void
    connect(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-display-align", ...args: any[]): void
    connect(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-display-position", ...args: any[]): void
    connect(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-font-smooth", ...args: any[]): void
    connect(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-wallpaper", ...args: any[]): void
    connect(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-clipboard", ...args: any[]): void
    connect(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mouse-mode", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceMainChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class MainChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    static name: string
    static $gtype: GObject.GType<MainChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    constructor(config?: MainChannel.ConstructorProperties) 
    _init(config?: MainChannel.ConstructorProperties): void
}

module PlaybackChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `playback-data`
     */
    interface PlaybackDataSignalCallback {
        ($obj: PlaybackChannel, data: any | null, data_size: number): void
    }

    /**
     * Signal callback interface for `playback-get-delay`
     */
    interface PlaybackGetDelaySignalCallback {
        ($obj: PlaybackChannel): void
    }

    /**
     * Signal callback interface for `playback-start`
     */
    interface PlaybackStartSignalCallback {
        ($obj: PlaybackChannel, format: number, channels: number, rate: number): void
    }

    /**
     * Signal callback interface for `playback-stop`
     */
    interface PlaybackStopSignalCallback {
        ($obj: PlaybackChannel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

        min_latency?: number | null
        mute?: boolean | null
        nchannels?: number | null
        volume?: any | null
        minLatency?: number | null
    }

}

interface PlaybackChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    min_latency: number
    minLatency: number
    mute: boolean
    nchannels: number
    volume: any

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    /**
     * Adjust the multimedia time according to the delay.
     * @param delay_ms the delay in ms
     */
    set_delay(delay_ms: number): void

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    vfunc_playback_data(data: any | null, size: number): void
    vfunc_playback_start(format: number, channels: number, freq: number): void
    vfunc_playback_stop(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback): number
    emit(sigName: "playback-data", data: any | null, data_size: number, ...args: any[]): void
    connect(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback): number
    emit(sigName: "playback-get-delay", ...args: any[]): void
    connect(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback): number
    emit(sigName: "playback-start", format: number, channels: number, rate: number, ...args: any[]): void
    connect(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback): number
    emit(sigName: "playback-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpicePlaybackChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class PlaybackChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    static name: string
    static $gtype: GObject.GType<PlaybackChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    constructor(config?: PlaybackChannel.ConstructorProperties) 
    _init(config?: PlaybackChannel.ConstructorProperties): void
}

module PortChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `port-data`
     */
    interface PortDataSignalCallback {
        ($obj: PortChannel, data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `port-event`
     */
    interface PortEventSignalCallback {
        ($obj: PortChannel, event: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface PortChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    readonly port_name: string | null
    readonly portName: string | null
    readonly port_opened: boolean
    readonly portOpened: boolean

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    /**
     * Send an event to the port.
     * 
     * Note: The values SPICE_PORT_EVENT_CLOSED and
     * SPICE_PORT_EVENT_OPENED are managed by the channel connection
     * state.
     * @param event a SPICE_PORT_EVENT value
     */
    event(event: number): void
    /**
     * Request an asynchronous write of count bytes from `buffer` into the
     * `port`. When the operation is finished `callback` will be called. You
     * can then call spice_port_write_finish() to get the result of
     * the operation.
     * @param buffer the buffer containing the data to write
     * @param cancellable optional GCancellable object, NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    write_async(buffer: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_async

    /**
     * Promisified version of {@link write_async}
     * 
     * Request an asynchronous write of count bytes from `buffer` into the
     * `port`. When the operation is finished `callback` will be called. You
     * can then call spice_port_write_finish() to get the result of
     * the operation.
     * @param buffer the buffer containing the data to write
     * @param cancellable optional GCancellable object, NULL to ignore
     * @returns A Promise of: a #gssize containing the number of bytes written to the stream.
     */
    write_async(buffer: Uint8Array, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
    /**
     * Finishes a port write operation.
     * @param result a #GAsyncResult
     * @returns a #gssize containing the number of bytes written to the stream.
     */
    write_finish(result: Gio.AsyncResult): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "port-data", callback: PortChannel.PortDataSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "port-data", callback: PortChannel.PortDataSignalCallback): number
    emit(sigName: "port-data", data: any | null, size: number, ...args: any[]): void
    connect(sigName: "port-event", callback: PortChannel.PortEventSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "port-event", callback: PortChannel.PortEventSignalCallback): number
    emit(sigName: "port-event", event: number, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port-opened", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpicePortChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class PortChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    static name: string
    static $gtype: GObject.GType<PortChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    constructor(config?: PortChannel.ConstructorProperties) 
    _init(config?: PortChannel.ConstructorProperties): void
}

module QmpPort {

    // Signal callback interfaces

    /**
     * Signal callback interface for `event`
     */
    interface EventSignalCallback {
        ($obj: QmpPort, name: string | null, node: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

        channel?: PortChannel | null
    }

}

interface QmpPort {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    readonly channel: PortChannel
    readonly ready: boolean

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    /**
     * Query the run status of all VCPUs.
     * @param cancellable A #GCancellable
     * @param callback The async callback.
     */
    query_status_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of query_status_async

    /**
     * Promisified version of {@link query_status_async}
     * 
     * Query the run status of all VCPUs.
     * @param cancellable A #GCancellable
     * @returns A Promise of: The #SpiceQmpStatus result or %NULL, in which case @error will be set.
     */
    query_status_async(cancellable: Gio.Cancellable | null): globalThis.Promise<QmpStatus>
    /**
     * Finish the asynchronous status query.
     * @param result The async #GAsyncResult result
     * @returns The #SpiceQmpStatus result or %NULL, in which case @error will be set.
     */
    query_status_finish(result: Gio.AsyncResult): QmpStatus
    /**
     * Request the VM to perform an action.
     * @param action a VM action
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the action is complete
     */
    vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of vm_action_async

    /**
     * Promisified version of {@link vm_action_async}
     * 
     * Request the VM to perform an action.
     * @param action a VM action
     * @param cancellable a #GCancellable, or %NULL
     * @returns A Promise of the result of {@link vm_action_async}
     */
    vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes asynchronous VM action and returns the result.
     * @param result The async #GAsyncResult result
     */
    vm_action_finish(result: Gio.AsyncResult): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    connect(sigName: "event", callback: QmpPort.EventSignalCallback): number
    connect_after(sigName: "event", callback: QmpPort.EventSignalCallback): number
    emit(sigName: "event", name: string | null, node: any | null, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    connect(sigName: "notify::channel", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque data structure.
 * @class 
 */
class QmpPort extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    static name: string
    static $gtype: GObject.GType<QmpPort>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    constructor(config?: QmpPort.ConstructorProperties) 
    _init(config?: QmpPort.ConstructorProperties): void
    /**
     * Associate a QMP port helper to the given port channel.  If there is
     * already a helper associated with the channel, it is simply returned.
     * @param channel the QMP port channel
     * @returns a weak reference to the associated SpiceQmpPort
     */
    static get(channel: PortChannel): QmpPort
}

module RecordChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `record-start`
     */
    interface RecordStartSignalCallback {
        ($obj: RecordChannel, format: number, channels: number, rate: number): void
    }

    /**
     * Signal callback interface for `record-stop`
     */
    interface RecordStopSignalCallback {
        ($obj: RecordChannel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

        mute?: boolean | null
        nchannels?: number | null
        volume?: any | null
    }

}

interface RecordChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    mute: boolean
    nchannels: number
    volume: any

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    /**
     * Send recorded PCM data to the guest.
     * @param data PCM data
     * @param bytes size of `data`
     * @param time stream timestamp
     */
    send_data(data: any | null, bytes: number, time: number): void

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    vfunc_record_data(data: any | null, size: number): void
    vfunc_record_start(format: number, channels: number, freq: number): void
    vfunc_record_stop(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback): number
    emit(sigName: "record-start", format: number, channels: number, rate: number, ...args: any[]): void
    connect(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback): number
    emit(sigName: "record-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceRecordChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class RecordChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    static name: string
    static $gtype: GObject.GType<RecordChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    constructor(config?: RecordChannel.ConstructorProperties) 
    _init(config?: RecordChannel.ConstructorProperties): void
}

module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `channel-destroy`
     */
    interface ChannelDestroySignalCallback {
        ($obj: Session, channel: Channel): void
    }

    /**
     * Signal callback interface for `channel-new`
     */
    interface ChannelNewSignalCallback {
        ($obj: Session, channel: Channel): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        ($obj: Session): void
    }

    /**
     * Signal callback interface for `mm-time-reset`
     */
    interface MmTimeResetSignalCallback {
        ($obj: Session): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Session

        /**
         * CA certificates in PEM format. The text data can contain
         * several CA certificates identified by:
         * 
         *  -----BEGIN CERTIFICATE-----
         *  ... (CA certificate in base64 encoding) ...
         *  -----END CERTIFICATE-----
         */
        ca?: Uint8Array | null
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        ca_file?: string | null
        /**
         * Images cache size. If 0, don't set.
         */
        cache_size?: number | null
        cert_subject?: string | null
        ciphers?: string | null
        client_sockets?: boolean | null
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        color_depth?: number | null
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        disable_effects?: string[] | null
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        enable_audio?: boolean | null
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        enable_smartcard?: boolean | null
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        enable_usbredir?: boolean | null
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        gl_scanout?: boolean | null
        /**
         * Glz window size. If 0, don't set.
         */
        glz_window_size?: number | null
        /**
         * URL of the SPICE host to connect to
         */
        host?: string | null
        inhibit_keyboard_grab?: boolean | null
        /**
         * TLS password to use
         */
        password?: string | null
        /**
         * Port to connect to for unencrypted sessions
         */
        port?: string | null
        /**
         * Version of the SPICE protocol to use
         */
        protocol?: number | null
        /**
         * URI to the proxy server to use when doing network connection.
         * of the form <![CDATA[ [protocol://]<host>[:port] ]]>
         */
        proxy?: string | null
        pubkey?: Uint8Array | null
        /**
         * Whether this connection is read-only mode.
         */
        read_only?: boolean | null
        /**
         * A string array of channel types to be secured.
         */
        secure_channels?: string[] | null
        /**
         * Whether to share the directory read-only.
         */
        share_dir_ro?: boolean | null
        /**
         * Location of the shared directory
         */
        shared_dir?: string | null
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        smartcard_certificates?: string[] | null
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        smartcard_db?: string | null
        /**
         * Port to connect to for TLS sessions
         */
        tls_port?: string | null
        /**
         * Path of the Unix socket to connect to
         */
        unix_path?: string | null
        /**
         * URI of the SPICE host to connect to. The URI is of the form
         * spice://hostname?port=XXX or spice://hostname?tls_port=XXX
         */
        uri?: string | null
        /**
         * Username to use
         */
        username?: string | null
        /**
         * #SpiceSessionVerify bit field indicating which parts of the peer
         * certificate should be checked
         */
        verify?: SessionVerify | null
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        caFile?: string | null
        /**
         * Images cache size. If 0, don't set.
         */
        cacheSize?: number | null
        certSubject?: string | null
        clientSockets?: boolean | null
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        colorDepth?: number | null
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        disableEffects?: string[] | null
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        enableAudio?: boolean | null
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        enableSmartcard?: boolean | null
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        enableUsbredir?: boolean | null
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        glScanout?: boolean | null
        /**
         * Glz window size. If 0, don't set.
         */
        glzWindowSize?: number | null
        inhibitKeyboardGrab?: boolean | null
        /**
         * Whether this connection is read-only mode.
         */
        readOnly?: boolean | null
        /**
         * A string array of channel types to be secured.
         */
        secureChannels?: string[] | null
        /**
         * Whether to share the directory read-only.
         */
        shareDirRo?: boolean | null
        /**
         * Location of the shared directory
         */
        sharedDir?: string | null
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        smartcardCertificates?: string[] | null
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        smartcardDb?: string | null
        /**
         * Port to connect to for TLS sessions
         */
        tlsPort?: string | null
        /**
         * Path of the Unix socket to connect to
         */
        unixPath?: string | null
    }

}

interface Session {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Session

    /**
     * CA certificates in PEM format. The text data can contain
     * several CA certificates identified by:
     * 
     *  -----BEGIN CERTIFICATE-----
     *  ... (CA certificate in base64 encoding) ...
     *  -----END CERTIFICATE-----
     */
    ca: Uint8Array
    /**
     * File holding the CA certificates for the host the client is
     * connecting to
     */
    ca_file: string | null
    /**
     * File holding the CA certificates for the host the client is
     * connecting to
     */
    caFile: string | null
    /**
     * Images cache size. If 0, don't set.
     */
    cache_size: number
    /**
     * Images cache size. If 0, don't set.
     */
    cacheSize: number
    cert_subject: string | null
    certSubject: string | null
    ciphers: string | null
    client_sockets: boolean
    clientSockets: boolean
    /**
     * Display color depth to set on new display channels. If 0, don't set.
     */
    color_depth: number
    /**
     * Display color depth to set on new display channels. If 0, don't set.
     */
    colorDepth: number
    /**
     * A string array of effects to disable. The settings will
     * be applied on new display channels. The following effets can be
     * disabled "wallpaper", "font-smooth", "animation", and "all",
     * which will disable all the effects. If NULL, don't apply changes.
     */
    disable_effects: string[]
    /**
     * A string array of effects to disable. The settings will
     * be applied on new display channels. The following effets can be
     * disabled "wallpaper", "font-smooth", "animation", and "all",
     * which will disable all the effects. If NULL, don't apply changes.
     */
    disableEffects: string[]
    /**
     * If set to TRUE, the audio channels will be enabled for
     * playback and recording.
     */
    enable_audio: boolean
    /**
     * If set to TRUE, the audio channels will be enabled for
     * playback and recording.
     */
    enableAudio: boolean
    /**
     * If set to TRUE, the smartcard channel will be enabled and smartcard
     * events will be forwarded to the guest
     */
    enable_smartcard: boolean
    /**
     * If set to TRUE, the smartcard channel will be enabled and smartcard
     * events will be forwarded to the guest
     */
    enableSmartcard: boolean
    /**
     * If set to TRUE, the usbredir channel will be enabled and USB devices
     * can be redirected to the guest
     */
    enable_usbredir: boolean
    /**
     * If set to TRUE, the usbredir channel will be enabled and USB devices
     * can be redirected to the guest
     */
    enableUsbredir: boolean
    /**
     * Whether to enable gl-scanout (Unix only).  Set to TRUE by
     * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
     * environment variable is set.
     */
    gl_scanout: boolean
    /**
     * Whether to enable gl-scanout (Unix only).  Set to TRUE by
     * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
     * environment variable is set.
     */
    glScanout: boolean
    /**
     * Glz window size. If 0, don't set.
     */
    glz_window_size: number
    /**
     * Glz window size. If 0, don't set.
     */
    glzWindowSize: number
    /**
     * URL of the SPICE host to connect to
     */
    host: string | null
    inhibit_keyboard_grab: boolean
    inhibitKeyboardGrab: boolean
    /**
     * #SpiceSessionMigration bit field indicating if a migration is in
     * progress
     */
    readonly migration_state: SessionMigration
    /**
     * #SpiceSessionMigration bit field indicating if a migration is in
     * progress
     */
    readonly migrationState: SessionMigration
    /**
     * Spice server name.
     */
    readonly name: string | null
    /**
     * TLS password to use
     */
    password: string | null
    /**
     * Port to connect to for unencrypted sessions
     */
    port: string | null
    /**
     * Version of the SPICE protocol to use
     */
    protocol: number
    /**
     * URI to the proxy server to use when doing network connection.
     * of the form <![CDATA[ [protocol://]<host>[:port] ]]>
     */
    proxy: string | null
    pubkey: Uint8Array
    /**
     * Whether this connection is read-only mode.
     */
    read_only: boolean
    /**
     * Whether this connection is read-only mode.
     */
    readOnly: boolean
    /**
     * A string array of channel types to be secured.
     */
    secure_channels: string[]
    /**
     * A string array of channel types to be secured.
     */
    secureChannels: string[]
    /**
     * Whether to share the directory read-only.
     */
    share_dir_ro: boolean
    /**
     * Whether to share the directory read-only.
     */
    shareDirRo: boolean
    /**
     * Location of the shared directory
     */
    shared_dir: string | null
    /**
     * Location of the shared directory
     */
    sharedDir: string | null
    /**
     * This property is used when one wants to simulate a smartcard with no
     * hardware smartcard reader. If it's set to a NULL-terminated string
     * array containing the names of 3 valid certificates, these will be
     * used to simulate a smartcard in the guest
     * See also spice_smartcard_manager_insert_card()
     */
    smartcard_certificates: string[]
    /**
     * This property is used when one wants to simulate a smartcard with no
     * hardware smartcard reader. If it's set to a NULL-terminated string
     * array containing the names of 3 valid certificates, these will be
     * used to simulate a smartcard in the guest
     * See also spice_smartcard_manager_insert_card()
     */
    smartcardCertificates: string[]
    /**
     * Path to the NSS certificate database containing the certificates to
     * use to simulate a software smartcard
     */
    smartcard_db: string | null
    /**
     * Path to the NSS certificate database containing the certificates to
     * use to simulate a software smartcard
     */
    smartcardDb: string | null
    /**
     * Port to connect to for TLS sessions
     */
    tls_port: string | null
    /**
     * Port to connect to for TLS sessions
     */
    tlsPort: string | null
    /**
     * Path of the Unix socket to connect to
     */
    unix_path: string | null
    /**
     * Path of the Unix socket to connect to
     */
    unixPath: string | null
    /**
     * URI of the SPICE host to connect to. The URI is of the form
     * spice://hostname?port=XXX or spice://hostname?tls_port=XXX
     */
    uri: string | null
    /**
     * Username to use
     */
    username: string | null
    /**
     * Spice server uuid.
     */
    readonly uuid: any
    /**
     * #SpiceSessionVerify bit field indicating which parts of the peer
     * certificate should be checked
     */
    verify: SessionVerify

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Session

    parent: GObject.Object
    priv: SessionPrivate

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.Session

    /**
     * Open the session using the #SpiceSession:host and
     * #SpiceSession:port.
     * @returns %FALSE if the session state is invalid for connection request. %TRUE if the connection is initiated. To know whether the connection is established, you must watch for channels creation (#SpiceSession::channel-new) and the channels state (#SpiceChannel::channel-event).
     */
    connect(): boolean
    /**
     * Disconnect the `session,` and destroy all channels.
     */
    disconnect(): void
    /**
     * Get the list of current channels associated with this `session`.
     * @returns a #GList          of unowned #SpiceChannel channels.
     */
    get_channels(): Channel[]
    /**
     * Gets the `session` proxy uri.
     * @returns the session proxy #SpiceURI or %NULL.
     */
    get_proxy_uri(): URI
    /**
     * Checks whether the `session` is read-only.
     * @returns whether the @session is in read-only mode.
     */
    get_read_only(): boolean
    /**
     * See if there is a `type` channel in the channels associated with this
     * `session`.
     * @param type a #SpiceChannel:channel-type
     * @returns TRUE if a @type channel is available otherwise FALSE.
     */
    has_channel_type(type: number): boolean
    /**
     * During seamless migration, channels may be created to establish a
     * connection with the target, but they are temporary and should only
     * handle migration steps. In order to avoid other interactions with
     * the client, channels should check this value.
     * @returns %TRUE if the session is a copy created during migration
     */
    is_for_migration(): boolean
    /**
     * Open the session using the provided `fd` socket file
     * descriptor. This is useful if you create the fd yourself, for
     * example to setup a SSH tunnel.
     * 
     * Note however that additional sockets will be needed by all the channels
     * created for `session` so users of this API should hook into
     * SpiceChannel::open-fd signal for each channel they are interested in, and
     * create and pass a new socket to the channel using #spice_channel_open_fd, in
     * the signal callback.
     * 
     * If `fd` is -1, a valid fd will be requested later via the
     * SpiceChannel::open-fd signal. Typically, you would want to just pass -1 as
     * `fd` this call since you will have to hook to SpiceChannel::open-fd signal
     * anyway.
     * @param fd a file descriptor (socket) or -1
     * @returns %TRUE on success.
     */
    open_fd(fd: number): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Session

    vfunc_channel_destroy(channel: Channel): void
    vfunc_channel_new(channel: Channel): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Session

    connect(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback): number
    connect_after(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback): number
    emit(sigName: "channel-destroy", channel: Channel, ...args: any[]): void
    connect(sigName: "channel-new", callback: Session.ChannelNewSignalCallback): number
    connect_after(sigName: "channel-new", callback: Session.ChannelNewSignalCallback): number
    emit(sigName: "channel-new", channel: Channel, ...args: any[]): void
    connect(sigName: "disconnected", callback: Session.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Session.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback): number
    connect_after(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback): number
    emit(sigName: "mm-time-reset", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Session

    connect(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ca", ...args: any[]): void
    connect(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ca-file", ...args: any[]): void
    connect(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-size", ...args: any[]): void
    connect(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cert-subject", ...args: any[]): void
    connect(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ciphers", ...args: any[]): void
    connect(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-sockets", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-effects", ...args: any[]): void
    connect(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-audio", ...args: any[]): void
    connect(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-smartcard", ...args: any[]): void
    connect(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-usbredir", ...args: any[]): void
    connect(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gl-scanout", ...args: any[]): void
    connect(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::glz-window-size", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inhibit-keyboard-grab", ...args: any[]): void
    connect(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::migration-state", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pubkey", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secure-channels", ...args: any[]): void
    connect(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::share-dir-ro", ...args: any[]): void
    connect(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-dir", ...args: any[]): void
    connect(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smartcard-certificates", ...args: any[]): void
    connect(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smartcard-db", ...args: any[]): void
    connect(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tls-port", ...args: any[]): void
    connect(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unix-path", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::verify", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceSession struct is opaque and should not be accessed directly.
 * @class 
 */
class Session extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Creates a new Spice session.
     * @constructor 
     * @returns a new #SpiceSession
     */
    constructor() 
    /**
     * Creates a new Spice session.
     * @constructor 
     * @returns a new #SpiceSession
     */
    static new(): Session
    _init(config?: Session.ConstructorProperties): void
}

module SmartcardChannel {

    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface SmartcardChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    parent: Channel & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    connect(sigName: "notify::channel-id", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceSmartcardChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class SmartcardChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    static name: string
    static $gtype: GObject.GType<SmartcardChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    constructor(config?: SmartcardChannel.ConstructorProperties) 
    _init(config?: SmartcardChannel.ConstructorProperties): void
}

module SmartcardManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `card-inserted`
     */
    interface CardInsertedSignalCallback {
        ($obj: SmartcardManager, vreader: any): void
    }

    /**
     * Signal callback interface for `card-removed`
     */
    interface CardRemovedSignalCallback {
        ($obj: SmartcardManager, vreader: any): void
    }

    /**
     * Signal callback interface for `reader-added`
     */
    interface ReaderAddedSignalCallback {
        ($obj: SmartcardManager, vreader: any): void
    }

    /**
     * Signal callback interface for `reader-removed`
     */
    interface ReaderRemovedSignalCallback {
        ($obj: SmartcardManager, vreader: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SmartcardManager {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    parent: GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    /**
     * Gets the list of smartcard readers that are currently available, they
     * can be either software (emulated) readers, or hardware ones.
     * @returns a newly allocated list of SpiceSmartcardReader instances, or NULL if none were found. When no longer needed, the list must be freed after unreferencing its elements with g_boxed_free()
     */
    get_readers(): SmartcardReader[]
    /**
     * Simulates the insertion of a smartcard in the guest. Valid certificates
     * must have been set in #SpiceSession:smartcard-certificates for software
     * smartcard support to work. At the moment, only one software smartcard
     * reader is supported, that's why there is no parameter to indicate which
     * reader to insert the card in.
     * @returns TRUE if smartcard insertion was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
     */
    insert_card(): boolean
    /**
     * Simulates the removal of a smartcard in the guest. At the moment, only
     * one software smartcard reader is supported, that's why there is no
     * parameter to indicate which reader to insert the card in.
     * @returns TRUE if smartcard removal was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
     */
    remove_card(): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    vfunc_card_inserted(reader: SmartcardReader): void
    vfunc_card_removed(reader: SmartcardReader): void
    vfunc_reader_added(reader: SmartcardReader): void
    vfunc_reader_removed(reader: SmartcardReader): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    connect(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback): number
    connect_after(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback): number
    emit(sigName: "card-inserted", vreader: any, ...args: any[]): void
    connect(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback): number
    connect_after(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback): number
    emit(sigName: "card-removed", vreader: any, ...args: any[]): void
    connect(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback): number
    connect_after(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback): number
    emit(sigName: "reader-added", vreader: any, ...args: any[]): void
    connect(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback): number
    connect_after(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback): number
    emit(sigName: "reader-removed", vreader: any, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceSmartcardManager struct is opaque and should not be accessed directly.
 * @class 
 */
class SmartcardManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    static name: string
    static $gtype: GObject.GType<SmartcardManager>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    constructor(config?: SmartcardManager.ConstructorProperties) 
    _init(config?: SmartcardManager.ConstructorProperties): void
    /**
     * #SpiceSmartcardManager is a singleton, use this function to get a pointer
     * to it. A new SpiceSmartcardManager instance will be created the first
     * time this function is called
     * @returns a weak reference to the #SpiceSmartcardManager
     */
    static get(): SmartcardManager
}

module URI {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

        hostname?: string | null
        password?: string | null
        port?: number | null
        scheme?: string | null
        user?: string | null
    }

}

interface URI {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    hostname: string | null
    password: string | null
    port: number
    scheme: string | null
    user: string | null

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.URI

    get_hostname(): string
    get_password(): string
    get_port(): number
    get_scheme(): string
    get_user(): string
    set_hostname(hostname: string): void
    set_password(password: string): void
    set_port(port: number): void
    set_scheme(scheme: string): void
    set_user(user: string): void
    to_string(): string | null

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.URI

    connect(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceURI struct is opaque and cannot be accessed directly.
 * @class 
 */
class URI extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    static name: string
    static $gtype: GObject.GType<URI>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.URI

    constructor(config?: URI.ConstructorProperties) 
    _init(config?: URI.ConstructorProperties): void
}

module UsbDeviceManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `auto-connect-failed`
     */
    interface AutoConnectFailedSignalCallback {
        ($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        ($obj: UsbDeviceManager, device: UsbDevice): void
    }

    /**
     * Signal callback interface for `device-error`
     */
    interface DeviceErrorSignalCallback {
        ($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        ($obj: UsbDeviceManager, device: UsbDevice): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         * 
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        auto_connect?: boolean | null
        /**
         * Set a string specifying a filter to use to determine which USB devices
         * to autoconnect when plugged in, a filter consists of one or more rules.
         * Where each rule has the form of:
         * 
         * `class,``vendor,``product,``version,``allow`
         * 
         * Use -1 for `class/``vendor/``product/``version` to accept any value.
         * 
         * And the rules themselves are concatenated like this:
         * 
         * `rule1`|`rule2`|`rule3`
         * 
         * The default setting filters out HID (class 0x03) USB devices from auto
         * connect and auto connects anything else. Note the explicit allow rule at
         * the end, this is necessary since by default all devices without a
         * matching filter rule will not auto-connect.
         * 
         * Filter strings in this format can be easily created with the RHEV-M
         * USB filter editor tool.
         */
        auto_connect_filter?: string | null
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         * 
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        redirect_on_connect?: string | null
        /**
         * #SpiceSession this #SpiceUsbDeviceManager is associated with
         */
        session?: Session | null
        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         * 
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        autoConnect?: boolean | null
        /**
         * Set a string specifying a filter to use to determine which USB devices
         * to autoconnect when plugged in, a filter consists of one or more rules.
         * Where each rule has the form of:
         * 
         * `class,``vendor,``product,``version,``allow`
         * 
         * Use -1 for `class/``vendor/``product/``version` to accept any value.
         * 
         * And the rules themselves are concatenated like this:
         * 
         * `rule1`|`rule2`|`rule3`
         * 
         * The default setting filters out HID (class 0x03) USB devices from auto
         * connect and auto connects anything else. Note the explicit allow rule at
         * the end, this is necessary since by default all devices without a
         * matching filter rule will not auto-connect.
         * 
         * Filter strings in this format can be easily created with the RHEV-M
         * USB filter editor tool.
         */
        autoConnectFilter?: string | null
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         * 
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        redirectOnConnect?: string | null
    }

}

interface UsbDeviceManager extends Gio.Initable {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    /**
     * Set this to TRUE to automatically redirect newly plugged in device.
     * 
     * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
     * property is controlled by #SpiceGtkSession.
     */
    auto_connect: boolean
    /**
     * Set this to TRUE to automatically redirect newly plugged in device.
     * 
     * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
     * property is controlled by #SpiceGtkSession.
     */
    autoConnect: boolean
    /**
     * Set a string specifying a filter to use to determine which USB devices
     * to autoconnect when plugged in, a filter consists of one or more rules.
     * Where each rule has the form of:
     * 
     * `class,``vendor,``product,``version,``allow`
     * 
     * Use -1 for `class/``vendor/``product/``version` to accept any value.
     * 
     * And the rules themselves are concatenated like this:
     * 
     * `rule1`|`rule2`|`rule3`
     * 
     * The default setting filters out HID (class 0x03) USB devices from auto
     * connect and auto connects anything else. Note the explicit allow rule at
     * the end, this is necessary since by default all devices without a
     * matching filter rule will not auto-connect.
     * 
     * Filter strings in this format can be easily created with the RHEV-M
     * USB filter editor tool.
     */
    auto_connect_filter: string | null
    /**
     * Set a string specifying a filter to use to determine which USB devices
     * to autoconnect when plugged in, a filter consists of one or more rules.
     * Where each rule has the form of:
     * 
     * `class,``vendor,``product,``version,``allow`
     * 
     * Use -1 for `class/``vendor/``product/``version` to accept any value.
     * 
     * And the rules themselves are concatenated like this:
     * 
     * `rule1`|`rule2`|`rule3`
     * 
     * The default setting filters out HID (class 0x03) USB devices from auto
     * connect and auto connects anything else. Note the explicit allow rule at
     * the end, this is necessary since by default all devices without a
     * matching filter rule will not auto-connect.
     * 
     * Filter strings in this format can be easily created with the RHEV-M
     * USB filter editor tool.
     */
    autoConnectFilter: string | null
    /**
     * Get the number of available channels for redirecting USB devices.
     */
    readonly free_channels: number
    /**
     * Get the number of available channels for redirecting USB devices.
     */
    readonly freeChannels: number
    /**
     * Set a string specifying a filter selecting USB devices to automatically
     * redirect after a Spice connection has been established.
     * 
     * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
     * format.
     */
    redirect_on_connect: string | null
    /**
     * Set a string specifying a filter selecting USB devices to automatically
     * redirect after a Spice connection has been established.
     * 
     * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
     * format.
     */
    redirectOnConnect: string | null
    /**
     * #SpiceSession this #SpiceUsbDeviceManager is associated with
     */
    readonly session: Session

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    parent: GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    /**
     * Checks whether it is possible to redirect the `device`.
     * @param device a #SpiceUsbDevice to disconnect
     * @returns %TRUE if @device can be redirected
     */
    can_redirect_device(device: UsbDevice): boolean
    /**
     * Asynchronously connects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_connect_device_finish()
     * to get the result of the operation.
     * @param device a #SpiceUsbDevice to redirect
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of connect_device_async

    /**
     * Promisified version of {@link connect_device_async}
     * 
     * Asynchronously connects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_connect_device_finish()
     * to get the result of the operation.
     * @param device a #SpiceUsbDevice to redirect
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @returns A Promise of: %TRUE if connection is successful
     */
    connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes an async operation. See spice_usb_device_manager_connect_device_async().
     * @param res a #GAsyncResult
     * @returns %TRUE if connection is successful
     */
    connect_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Disconnects the `device`.
     * @param device a #SpiceUsbDevice to disconnect
     */
    disconnect_device(device: UsbDevice): void
    /**
     * Asynchronously disconnects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_disconnect_device_finish()
     * to get the result of the operation.
     * @param device a connected #SpiceUsbDevice to disconnect.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of disconnect_device_async

    /**
     * Promisified version of {@link disconnect_device_async}
     * 
     * Asynchronously disconnects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_disconnect_device_finish()
     * to get the result of the operation.
     * @param device a connected #SpiceUsbDevice to disconnect.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: %TRUE if disconnection is successful
     */
    disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes an async operation. See spice_usb_device_manager_disconnect_device_async().
     * @param res a #GAsyncResult
     * @returns %TRUE if disconnection is successful
     */
    disconnect_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Finds devices associated with the `manager`
     * @returns a %GPtrArray array of %SpiceUsbDevice
     */
    get_devices(): UsbDevice[]
    /**
     * Finds devices associated with the `manager` complying with the `filter`
     * @param filter filter string for selecting which devices to return,      see #SpiceUsbDeviceManager:auto-connect-filter for the filter      string format
     * @returns a %GPtrArray array of %SpiceUsbDevice
     */
    get_devices_with_filter(filter: string | null): UsbDevice[]
    /**
     * Finds if the `device` is connected.
     * @param device a #SpiceUsbDevice
     * @returns %TRUE if @device has an associated USB redirection channel
     */
    is_device_connected(device: UsbDevice): boolean
    /**
     * Checks whether a device is being redirected
     * @returns %TRUE if device redirection negotiation flow is in progress
     */
    is_redirecting(): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void
    vfunc_device_added(device: UsbDevice): void
    vfunc_device_error(device: UsbDevice, error: GLib.Error): void
    vfunc_device_removed(device: UsbDevice): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    connect(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback): number
    connect_after(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback): number
    emit(sigName: "auto-connect-failed", device: UsbDevice, error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: UsbDevice, ...args: any[]): void
    connect(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback): number
    connect_after(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback): number
    emit(sigName: "device-error", device: UsbDevice, error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", device: UsbDevice, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    connect(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-connect", ...args: any[]): void
    connect(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-connect-filter", ...args: any[]): void
    connect(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::free-channels", ...args: any[]): void
    connect(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::redirect-on-connect", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #SpiceUsbDeviceManager struct is opaque and should not be accessed directly.
 * @class 
 */
class UsbDeviceManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    static name: string
    static $gtype: GObject.GType<UsbDeviceManager>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    constructor(config?: UsbDeviceManager.ConstructorProperties) 
    _init(config?: UsbDeviceManager.ConstructorProperties): void
    /**
     * Gets the #SpiceUsbDeviceManager associated with the passed in #SpiceSession.
     * A new #SpiceUsbDeviceManager instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session #SpiceSession for which to get the #SpiceUsbDeviceManager
     * @returns a weak reference to the #SpiceUsbDeviceManager associated with the passed in #SpiceSession
     */
    static get(session: Session): UsbDeviceManager
}

module UsbredirChannel {

    // Constructor properties interface

    interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

interface UsbredirChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    parent: Channel & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    connect(sigName: "notify::channel-id", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceUsbredirChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class UsbredirChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    static name: string
    static $gtype: GObject.GType<UsbredirChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    constructor(config?: UsbredirChannel.ConstructorProperties) 
    _init(config?: UsbredirChannel.ConstructorProperties): void
}

module WebdavChannel {

    // Constructor properties interface

    interface ConstructorProperties extends PortChannel.ConstructorProperties {
    }

}

interface WebdavChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    parent: PortChannel & Channel & GObject.Object & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    connect(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port-opened", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-id", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::channel-type", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::spice-session", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Overloads of disconnect

    /**
     * Close the socket and reset connection specific data. Finally, emit
     * `reason` #SpiceChannel::channel-event on main context if not
     * #SPICE_CHANNEL_NONE.
     * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
     */
    disconnect(reason: ChannelEvent): void
}

/**
 * The #SpiceWebdavChannel struct is opaque and should not be accessed directly.
 * @class 
 */
class WebdavChannel extends PortChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    static name: string
    static $gtype: GObject.GType<WebdavChannel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    constructor(config?: WebdavChannel.ConstructorProperties) 
    _init(config?: WebdavChannel.ConstructorProperties): void
}

interface AudioClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    connect_channel: (audio: Audio, channel: Channel) => boolean
    get_playback_volume_info_async: (audio: Audio, cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback | null) => void
    get_playback_volume_info_finish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    get_record_volume_info_async: (audio: Audio, cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback | null) => void
    get_record_volume_info_finish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
}

/**
 * Class structure for #SpiceAudio.
 * @record 
 */
abstract class AudioClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass

    static name: string
}

interface AudioPrivate {
}

class AudioPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.AudioPrivate

    static name: string
}

interface ChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    channel_event: (channel: Channel, event: ChannelEvent) => void
    open_fd: (channel: Channel, with_tls: number) => void
    handle_msg: (channel: Channel, msg: MsgIn) => void
    channel_up: (channel: Channel) => void
    iterate_write: (channel: Channel) => void
    iterate_read: (channel: Channel) => void
    channel_reset: (channel: Channel, migrating: boolean) => void
    channel_send_migration_handshake: (channel: Channel) => void
}

/**
 * Class structure for #SpiceChannel.
 * @record 
 */
abstract class ChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass

    static name: string
}

interface ChannelClassPrivate {
}

class ChannelClassPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClassPrivate

    static name: string
}

interface ChannelPrivate {
}

class ChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelPrivate

    static name: string
}

interface CursorChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    cursor_set: (channel: CursorChannel, width: number, height: number, hot_x: number, hot_y: number, rgba: any | null) => void
    cursor_move: (channel: CursorChannel, x: number, y: number) => void
    cursor_hide: (channel: CursorChannel) => void
    cursor_reset: (channel: CursorChannel) => void
}

/**
 * Class structure for #SpiceCursorChannel.
 * @record 
 */
abstract class CursorChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelClass

    static name: string
}

interface CursorChannelPrivate {
}

class CursorChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelPrivate

    static name: string
}

interface CursorShape {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorShape

    /**
     * a width of the remote cursor
     * @field 
     */
    width: number
    /**
     * a height of the remote cursor
     * @field 
     */
    height: number
    /**
     * a 'x' coordinate of the remote cursor
     * @field 
     */
    hot_spot_x: number
    /**
     * a 'y' coordinate of the remote cursor
     * @field 
     */
    hot_spot_y: number
    /**
     * image data of the remote cursor
     * @field 
     */
    data: any
}

/**
 * The #SpiceCursorShape structure defines the remote cursor's shape.
 * @record 
 */
class CursorShape {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorShape

    static name: string
}

interface DisplayChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    display_primary_create: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: any) => void
    display_primary_destroy: (channel: Channel) => void
    display_invalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    display_mark: (channel: Channel, mark: boolean) => void
}

/**
 * Class structure for #SpiceDisplayChannel.
 * @record 
 */
abstract class DisplayChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass

    static name: string
}

interface DisplayChannelPrivate {
}

class DisplayChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelPrivate

    static name: string
}

interface DisplayMonitorConfig {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayMonitorConfig

    /**
     * monitor id
     * @field 
     */
    id: number
    /**
     * monitor surface id
     * @field 
     */
    surface_id: number
    /**
     * x position of the monitor
     * @field 
     */
    x: number
    /**
     * y position of the monitor
     * @field 
     */
    y: number
    /**
     * width of the monitor
     * @field 
     */
    width: number
    /**
     * height of the monitor
     * @field 
     */
    height: number
}

/**
 * Holds a monitor configuration.
 * @record 
 */
class DisplayMonitorConfig {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayMonitorConfig

    static name: string
}

interface DisplayPrimary {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayPrimary

    /**
     * primary buffer format
     * @field 
     */
    format: any
    /**
     * width of the primary
     * @field 
     */
    width: number
    /**
     * height of the primary
     * @field 
     */
    height: number
    /**
     * stride of the primary
     * @field 
     */
    stride: number
    /**
     * identifier of the shared memory segment associated with
     * the `data,` or -1 if not shm
     * @field 
     */
    shmid: number
    /**
     * pointer to primary buffer
     * @field 
     */
    data: number
    /**
     * whether the display is marked ready
     * @field 
     */
    marked: boolean
}

/**
 * Holds the information necessary to use the primary surface.
 * @record 
 */
class DisplayPrimary {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayPrimary

    static name: string
}

interface FileTransferTaskClass {
}

abstract class FileTransferTaskClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTaskClass

    static name: string
}

interface GlScanout {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout

    /**
     * a drm DMABUF file that can be imported with eglCreateImageKHR
     * @field 
     */
    fd: number
    /**
     * width of the scanout
     * @field 
     */
    width: number
    /**
     * height of the scanout
     * @field 
     */
    height: number
    /**
     * stride of the scanout
     * @field 
     */
    stride: number
    /**
     * the drm fourcc format
     * @field 
     */
    format: number
    /**
     * orientation of the scanout
     * @field 
     */
    y0top: boolean

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout

    /**
     * Frees the `scanout`.
     */
    free(): void
}

/**
 * Holds the information necessary for using the GL display scanout.
 * @record 
 */
class GlScanout {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout

    static name: string
}

interface InputsChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    inputs_modifiers: (channel: Channel) => void
}

/**
 * Class structure for #SpiceInputsChannel.
 * @record 
 */
abstract class InputsChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelClass

    static name: string
}

interface InputsChannelPrivate {
}

class InputsChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelPrivate

    static name: string
}

interface MainChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    mouse_update: (channel: Channel) => void
    agent_update: (channel: Channel) => void
}

/**
 * Class structure for #SpiceMainChannel.
 * @record 
 */
abstract class MainChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass

    static name: string
}

interface MainChannelPrivate {
}

class MainChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelPrivate

    static name: string
}

interface MsgIn {
}

class MsgIn {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MsgIn

    static name: string
}

interface MsgOut {
}

class MsgOut {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MsgOut

    static name: string
}

interface PlaybackChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    playback_start: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    playback_data: (channel: PlaybackChannel, data: any | null, size: number) => void
    playback_stop: (channel: PlaybackChannel) => void
}

/**
 * Class structure for #SpicePlaybackChannel.
 * @record 
 */
abstract class PlaybackChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelClass

    static name: string
}

interface PlaybackChannelPrivate {
}

class PlaybackChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelPrivate

    static name: string
}

interface PortChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
}

/**
 * Class structure for #SpicePortChannel.
 * @record 
 */
abstract class PortChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass

    static name: string
}

interface PortChannelPrivate {
}

class PortChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelPrivate

    static name: string
}

interface QmpPortClass {
}

abstract class QmpPortClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPortClass

    static name: string
}

interface QmpStatus {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus

    /**
     * the structure version
     * @field 
     */
    version: number
    /**
     * true if all VCPUs are runnable, false if not runnable
     * @field 
     */
    running: boolean
    /**
     * true if VCPUs are in single-step mode
     * @field 
     */
    singlestep: boolean
    /**
     * the virtual machine run state
     * @field 
     */
    status: string | null

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus

    /**
     * References a `status`.
     * @returns The same @status
     */
    ref(): QmpStatus
    /**
     * Removes a reference from the given `status`.
     */
    unref(): void
}

/**
 * Information about VCPU run state.
 * @record 
 */
class QmpStatus {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus

    static name: string
}

interface RecordChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
    record_start: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    record_data: (channel: RecordChannel, data: any | null, size: number) => void
    record_stop: (channel: RecordChannel) => void
}

/**
 * Class structure for #SpiceRecordChannel.
 * @record 
 */
abstract class RecordChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelClass

    static name: string
}

interface RecordChannelPrivate {
}

class RecordChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelPrivate

    static name: string
}

interface SessionClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    channel_new: (session: Session, channel: Channel) => void
    channel_destroy: (session: Session, channel: Channel) => void
}

/**
 * Class structure for #SpiceSession.
 * @record 
 */
abstract class SessionClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass

    static name: string
}

interface SessionPrivate {
}

class SessionPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SessionPrivate

    static name: string
}

interface SmartcardChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
}

/**
 * Class structure for #SpiceSmartcardChannel.
 * @record 
 */
abstract class SmartcardChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass

    static name: string
}

interface SmartcardChannelPrivate {
}

class SmartcardChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelPrivate

    static name: string
}

interface SmartcardManagerClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    reader_added: (manager: SmartcardManager, reader: SmartcardReader) => void
    reader_removed: (manager: SmartcardManager, reader: SmartcardReader) => void
    card_inserted: (manager: SmartcardManager, reader: SmartcardReader) => void
    card_removed: (manager: SmartcardManager, reader: SmartcardReader) => void
}

/**
 * Class structure for #SpiceSmartcardManager.
 * @record 
 */
abstract class SmartcardManagerClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass

    static name: string
}

interface SmartcardManagerPrivate {
}

class SmartcardManagerPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerPrivate

    static name: string
}

interface SmartcardReader {

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader

    /**
     * Simulates insertion of a smartcard in the software smartcard reader
     * `reader`. If `reader` is not a software smartcard reader, FALSE will be
     * returned.
     * @returns TRUE if insertion of a card was successfully simulated, FALSE otherwise
     */
    insert_card(): boolean
    /**
     * Tests if `reader` is a software (emulated) smartcard reader.
     * @returns TRUE if @reader is a software (emulated) smartcard reader, FALSE otherwise
     */
    is_software(): boolean
    /**
     * Simulates removal of a smartcard from the software smartcard reader
     * `reader`. If `reader` is not a software smartcard reader, FALSE will be
     * returned.
     * @returns TRUE if removal of a card was successfully simulated, FALSE otherwise
     */
    remove_card(): boolean
}

/**
 * The #SpiceSmartcardReader struct is opaque and cannot be accessed directly.
 * @record 
 */
class SmartcardReader {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader

    static name: string
}

interface URIClass {
}

/**
 * The #SpiceURIClass struct is opaque and cannot be accessed directly.
 * It is class structure for #SpiceURI.
 * @record 
 */
abstract class URIClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URIClass

    static name: string
}

interface URIPrivate {
}

class URIPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URIPrivate

    static name: string
}

interface UsbDevice {

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDevice

    /**
     * Get a string describing the device which is suitable as a description of
     * the device for the end user. The returned string should be freed with
     * g_free() when no longer needed.
     * 
     * The `format` positional parameters are the following:
     * 1. \%s manufacturer
     * 2. \%s product
     * 3. \%s descriptor (a [vendor_id:product_id] string)
     * 4. \%d bus
     * 5. \%d address
     * 
     * (the default format string is "\%s \%s \%s at \%d-\%d")
     * @param format an optional printf() format string with positional parameters
     * @returns a newly-allocated string holding the description, or %NULL if failed
     */
    get_description(format: string | null): string | null
    /**
     * Finds the %libusb_device associated with the `device`.
     * @returns the %libusb_device associated to %SpiceUsbDevice.
     */
    get_libusb_device(): any | null
}

/**
 * The #SpiceUsbDevice struct is opaque and cannot be accessed directly.
 * @record 
 */
class UsbDevice {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDevice

    static name: string
}

interface UsbDeviceManagerClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    device_added: (manager: UsbDeviceManager, device: UsbDevice) => void
    device_removed: (manager: UsbDeviceManager, device: UsbDevice) => void
    auto_connect_failed: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    device_error: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
}

/**
 * Class structure for #SpiceUsbDeviceManager.
 * @record 
 */
abstract class UsbDeviceManagerClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass

    static name: string
}

interface UsbDeviceManagerPrivate {
}

class UsbDeviceManagerPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerPrivate

    static name: string
}

interface UsbredirChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: ChannelClass
}

/**
 * Class structure for #SpiceUsbredirChannel.
 * @record 
 */
abstract class UsbredirChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass

    static name: string
}

interface UsbredirChannelPrivate {
}

class UsbredirChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelPrivate

    static name: string
}

interface WebdavChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: PortChannelClass
}

/**
 * Class structure for #SpiceWebdavChannel.
 * @record 
 */
abstract class WebdavChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass

    static name: string
}

interface WebdavChannelPrivate {
}

class WebdavChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default SpiceClientGLib;
// END