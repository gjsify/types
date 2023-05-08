
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * SpiceClientGLib-2.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';

/**
 * An event, emitted by #SpiceChannel::channel-event signal.
 */
export enum ChannelEvent {
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
export enum ClientError {
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
export enum QmpPortVmAction {
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
export enum SessionMigration {
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
export enum InputsLock {
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
export enum SessionVerify {
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
export const GTK_MAJOR_VERSION: number
/**
 * Spice-Gtk micro version component (e.g. 3 if version is 1.2.3)
 */
export const GTK_MICRO_VERSION: number
/**
 * Spice-Gtk minor version component (e.g. 2 if version is 1.2.3)
 */
export const GTK_MINOR_VERSION: number
/**
 * Gets a #GQuark representing the string "spice-client-error-quark"
 * @returns the #GQuark representing the string.
 */
export function clientErrorQuark(): GLib.Quark
/**
 * Tells the spice server to change the preferred image compression
 * for the `channel`.
 * @param channel a #SpiceDisplayChannel
 * @param compression a #SpiceImageCompression
 */
export function displayChangePreferredCompression(channel: Channel, compression: number): void
/**
 * Tells the spice server to change the preferred video codec type for
 * streaming in `channel`. Application can set only one preferred video codec per
 * display channel.
 * @param channel a #SpiceDisplayChannel
 * @param codecType a #SpiceVideoCodecType
 */
export function displayChangePreferredVideoCodecType(channel: Channel, codecType: number): void
/**
 * Retrieves the GL scanout if available
 * @param channel a #SpiceDisplayChannel
 * @returns the current GL scanout, or %NULL if none or not valid
 */
export function displayGetGlScanout(channel: DisplayChannel): GlScanout
/**
 * Retrieve primary display surface `surface_id`.
 * @param channel a #SpiceDisplayChannel
 * @param surfaceId a surface id
 * @param primary a #SpiceDisplayPrimary
 * @returns %TRUE if the primary surface was found and its details collected in @primary.
 */
export function displayGetPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
/**
 * After a SpiceDisplayChannel::gl-draw is emitted, the client should
 * draw the current display with the current GL scanout, and must
 * release the GL resource with a call to spice_display_gl_draw_done()
 * (failing to do so for each gl-draw may result in a frozen display).
 * @param channel a #SpiceDisplayChannel
 */
export function displayGlDrawDone(channel: DisplayChannel): void
/**
 * Gets commandline options.
 * 
 * Bindings for other languages are available since 0.32
 * @returns a #GOptionGroup for the commandline arguments specific to Spice.  You have to call spice_set_session_option() after to set the options on a #SpiceSession.
 */
export function getOptionGroup(): GLib.OptionGroup
/**
 * Press a mouse button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
export function inputsButtonPress(channel: InputsChannel, button: number, buttonState: number): void
/**
 * Release a button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
export function inputsButtonRelease(channel: InputsChannel, button: number, buttonState: number): void
/**
 * Press a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
export function inputsKeyPress(channel: InputsChannel, scancode: number): void
/**
 * Press and release a key event atomically (in the same message).
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
export function inputsKeyPressAndRelease(channel: InputsChannel, scancode: number): void
/**
 * Release a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
export function inputsKeyRelease(channel: InputsChannel, scancode: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
 * @param channel a #SpiceInputsChannel
 * @param dx delta X mouse coordinates
 * @param dy delta Y mouse coordinates
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
export function inputsMotion(channel: InputsChannel, dx: number, dy: number, buttonState: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
 * @param channel a #SpiceInputsChannel
 * @param x X mouse coordinates
 * @param y Y mouse coordinates
 * @param display display channel id
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
export function inputsPosition(channel: InputsChannel, x: number, y: number, display: number, buttonState: number): void
/**
 * Set the keyboard locks on the guest (Caps, Num, Scroll..)
 * @param channel a #SpiceInputsChannel
 * @param locks #SpiceInputsLock modifiers flags
 */
export function inputsSetKeyLocks(channel: InputsChannel, locks: number): void
/**
 * Test capability of a remote agent.
 * @param channel a #SpiceMainChannel
 * @param cap an agent capability identifier
 * @returns %TRUE if @cap (channel kind capability) is available.
 */
export function mainAgentTestCapability(channel: MainChannel, cap: number): boolean
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
export function mainClipboardGrab(channel: MainChannel, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
export function mainClipboardNotify(channel: MainChannel, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 */
export function mainClipboardRelease(channel: MainChannel): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard signal.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 */
export function mainClipboardRequest(channel: MainChannel, type: number): void
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
export function mainClipboardSelectionGrab(channel: MainChannel, selection: number, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
export function mainClipboardSelectionNotify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 */
export function mainClipboardSelectionRelease(channel: MainChannel, selection: number): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard-selection signal.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 */
export function mainClipboardSelectionRequest(channel: MainChannel, selection: number, type: number): void
/**
 * See: spice_main_channel_file_copy_async()
 * @param channel a #SpiceMainChannel
 * @param sources a %NULL-terminated array of #GFile objects to be transferred
 * @param flags set of #GFileCopyFlags
 * @param cancellable optional #GCancellable object, %NULL to ignore
 * @param progressCallback function to callback with     progress information, or %NULL if progress information is not needed
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
export function mainFileCopyAsync(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes copying the file started with
 * spice_main_file_copy_async().
 * @param channel a #SpiceMainChannel
 * @param result a #GAsyncResult.
 * @returns a %TRUE on success, %FALSE on error.
 */
export function mainFileCopyFinish(channel: MainChannel, result: Gio.AsyncResult): boolean
/**
 * Request a mouse mode to the server. The server may not be able to
 * change the mouse mode, but spice-gtk will try to request it
 * when possible.
 * @param channel a %SpiceMainChannel
 * @param mode a SPICE_MOUSE_MODE
 */
export function mainRequestMouseMode(channel: MainChannel, mode: number): void
/**
 * Send monitors configuration previously set with
 * spice_main_set_display() and spice_main_set_display_enabled()
 * @param channel a #SpiceMainChannel
 * @returns %TRUE on success.
 */
export function mainSendMonitorConfig(channel: MainChannel): boolean
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
export function mainSetDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
/**
 * When sending monitor configuration to agent guest, don't set
 * display `id,` which the agent translates to disabling the display
 * id. Note: this will take effect next time the monitor
 * configuration is sent.
 * @param channel a #SpiceMainChannel
 * @param id display ID (if -1: set all displays)
 * @param enabled wether display `id` is enabled
 */
export function mainSetDisplayEnabled(channel: MainChannel, id: number, enabled: boolean): void
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
export function mainUpdateDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
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
export function mainUpdateDisplayEnabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
/**
 * Send an event to the port.
 * 
 * Note: The values SPICE_PORT_EVENT_CLOSED and
 * SPICE_PORT_EVENT_OPENED are managed by the channel connection
 * state.
 * @param port a #SpicePortChannel
 * @param event a SPICE_PORT_EVENT value
 */
export function portEvent(port: PortChannel, event: number): void
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
export function portWriteAsync(port: PortChannel, buffer: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes a port write operation.
 * @param port a #SpicePortChannel
 * @param result a #GAsyncResult
 * @returns a #gssize containing the number of bytes written to the stream.
 */
export function portWriteFinish(port: PortChannel, result: Gio.AsyncResult): number
/**
 * Send recorded PCM data to the guest.
 * @param channel a #SpiceRecordChannel
 * @param data PCM data
 * @param bytes size of `data`
 * @param time stream timestamp
 */
export function recordSendData(channel: RecordChannel, data: any | null, bytes: number, time: number): void
/**
 * Set various properties on `session,` according to the commandline
 * arguments given to spice_get_option_group() option group.
 * @param session a #SpiceSession to set option upon
 */
export function setSessionOption(session: Session): void
export function utilGetDebug(): boolean
/**
 * Gets the version string
 * @returns Spice-GTK version as a const string.
 */
export function utilGetVersionString(): string | null
/**
 * Enable or disable Spice-GTK debugging messages.
 * @param enabled %TRUE or %FALSE
 */
export function utilSetDebug(enabled: boolean): void
/**
 * Creates a string representation of `uuid,` of the form
 * "06e023d5-86d8-420e-8103-383e4566087a"
 * @param uuid UUID byte array
 * @returns A string that should be freed with g_free().
 */
export function uuidToString(uuid: number): string | null
export interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
export module Audio {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

        mainContext?: GLib.MainContext | null
        /**
         * #SpiceSession this #SpiceAudio is associated with
         */
        session?: Session | null
    }

}

export interface Audio {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    readonly mainContext: GLib.MainContext
    /**
     * #SpiceSession this #SpiceAudio is associated with
     */
    readonly session: Session
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    parent: GObject.Object
    priv: AudioPrivate

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    connectChannel(channel: Channel): boolean
    getPlaybackVolumeInfoAsync(cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback: Gio.AsyncReadyCallback | null): void
    getPlaybackVolumeInfoFinish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    getRecordVolumeInfoAsync(cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback: Gio.AsyncReadyCallback | null): void
    getRecordVolumeInfoFinish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceAudio struct is opaque and should not be accessed directly.
 * @class 
 */
export class Audio extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    static name: string

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

export module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `channel-event`
     */
    export interface ChannelEventSignalCallback {
        (event: ChannelEvent): void
    }

    /**
     * Signal callback interface for `open-fd`
     */
    export interface OpenFdSignalCallback {
        (withTls: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

        channelId?: number | null
        channelType?: number | null
        spiceSession?: Session | null
    }

}

export interface Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    readonly channelId: number
    readonly channelType: number
    /**
     * Get the underlying #GSocket. Note that you should not read or
     * write any data to it directly since this will likely corrupt
     * the channel stream.  This property is mainly useful to get some
     * connections details.
     */
    readonly socket: Gio.Socket
    readonly spiceSession: Session
    readonly totalReadBytes: number
    __gtype__: number

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
    flushAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes flushing a channel.
     * @param result a #GAsyncResult
     * @returns %TRUE if flush operation succeeded, %FALSE otherwise.
     */
    flushFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves the #GError currently set on channel, if the #SpiceChannel
     * is in error state and can provide additional error details.
     * @returns the pointer to the error, or %NULL
     */
    getError(): GLib.Error
    // Has conflict: openFd(fd: number): boolean
    /**
     * Enable specific channel-kind capability.
     * @param cap a capability
     */
    setCapability(cap: number): void
    /**
     * Test availability of remote "channel kind capability".
     * @param cap a capability
     * @returns %TRUE if @cap (channel kind capability) is available.
     */
    testCapability(cap: number): boolean
    /**
     * Test availability of remote "common channel capability".
     * @param cap a capability
     * @returns %TRUE if @cap (common channel capability) is available.
     */
    testCommonCapability(cap: number): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    channelEvent(event: ChannelEvent): void
    channelReset(migrating: boolean): void
    channelSendMigrationHandshake(): void
    channelUp(): void
    handleMsg(msg: MsgIn): void
    iterateRead(): void
    iterateWrite(): void
    openFd(withTls: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    connect(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback): number
    on(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: Channel.ChannelEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-event", ...args: any[]): void
    connect(sigName: "open-fd", callback: Channel.OpenFdSignalCallback): number
    on(sigName: "open-fd", callback: Channel.OpenFdSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: Channel.OpenFdSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: Channel.OpenFdSignalCallback): NodeJS.EventEmitter
    emit(sigName: "open-fd", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class Channel extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    static name: string

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
    static stringToType(str: string | null): number
    /**
     * Convert a channel-type property value to a string.
     * @param type a channel-type property value
     * @returns string representation of @type.
     */
    static typeToString(type: number): string | null
}

export module CursorChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-hide`
     */
    export interface CursorHideSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-move`
     */
    export interface CursorMoveSignalCallback {
        (x: number, y: number): void
    }

    /**
     * Signal callback interface for `cursor-reset`
     */
    export interface CursorResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-set`
     */
    export interface CursorSetSignalCallback {
        (width: number, height: number, hotX: number, hotY: number, rgba: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface CursorChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    /**
     * The last #SpiceCursorShape received.
     */
    readonly cursor: CursorShape
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    parent: Channel & GObject.Object

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    cursorHide(): void
    cursorMove(x: number, y: number): void
    cursorReset(): void
    cursorSet(width: number, height: number, hotX: number, hotY: number, rgba: any | null): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-hide", callback: CursorChannel.CursorHideSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-hide", ...args: any[]): void
    connect(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-move", callback: CursorChannel.CursorMoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-move", y: number, ...args: any[]): void
    connect(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-reset", callback: CursorChannel.CursorResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-reset", ...args: any[]): void
    connect(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-set", callback: CursorChannel.CursorSetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-set", height: number, hotX: number, hotY: number, rgba: any | null, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceCursorChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class CursorChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    constructor(config?: CursorChannel.ConstructorProperties) 
    _init(config?: CursorChannel.ConstructorProperties): void
}

export module DisplayChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `display-invalidate`
     */
    export interface DisplayInvalidateSignalCallback {
        (x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `display-mark`
     */
    export interface DisplayMarkSignalCallback {
        (mark: number): void
    }

    /**
     * Signal callback interface for `display-primary-create`
     */
    export interface DisplayPrimaryCreateSignalCallback {
        (format: number, width: number, height: number, stride: number, shmid: number, imgdata: any | null): void
    }

    /**
     * Signal callback interface for `display-primary-destroy`
     */
    export interface DisplayPrimaryDestroySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `gl-draw`
     */
    export interface GlDrawSignalCallback {
        (x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `gst-video-overlay`
     */
    export interface GstVideoOverlaySignalCallback {
        (pipeline: Gst.Pipeline): boolean
    }

    /**
     * Signal callback interface for `streaming-mode`
     */
    export interface StreamingModeSignalCallback {
        (streamingMode: boolean): any | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface DisplayChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

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
    readonly monitorsMax: number
    readonly width: number
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    /**
     * Retrieves the GL scanout if available
     * @returns the current GL scanout, or %NULL if none or not valid
     */
    getGlScanout(): GlScanout
    /**
     * After a SpiceDisplayChannel::gl-draw is emitted, the client should
     * draw the current display with the current GL scanout, and must
     * release the GL resource with a call to spice_display_gl_draw_done()
     * (failing to do so for each gl-draw may result in a frozen display).
     */
    glDrawDone(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    connect(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-invalidate", callback: DisplayChannel.DisplayInvalidateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-invalidate", y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-mark", callback: DisplayChannel.DisplayMarkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-mark", ...args: any[]): void
    connect(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-create", callback: DisplayChannel.DisplayPrimaryCreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-primary-create", width: number, height: number, stride: number, shmid: number, imgdata: any | null, ...args: any[]): void
    connect(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-destroy", callback: DisplayChannel.DisplayPrimaryDestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-primary-destroy", ...args: any[]): void
    connect(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gl-draw", callback: DisplayChannel.GlDrawSignalCallback): NodeJS.EventEmitter
    emit(sigName: "gl-draw", y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gst-video-overlay", callback: DisplayChannel.GstVideoOverlaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "gst-video-overlay", ...args: any[]): void
    connect(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "streaming-mode", callback: DisplayChannel.StreamingModeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "streaming-mode", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    connect(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gl-scanout", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::monitors", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::monitors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitors", ...args: any[]): void
    connect(sigName: "notify::monitors-max", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::monitors-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitors-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitors-max", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceDisplayChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class DisplayChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    constructor(config?: DisplayChannel.ConstructorProperties) 
    _init(config?: DisplayChannel.ConstructorProperties): void
    /**
     * Tells the spice server to change the preferred image compression
     * for the `channel`.
     * @param channel a #SpiceDisplayChannel
     * @param compression a #SpiceImageCompression
     */
    static changePreferredCompression(channel: Channel, compression: number): void
    /**
     * Tells the spice server to change the preferred video codec type for
     * streaming in `channel`. Application can set only one preferred video codec per
     * display channel.
     * @param channel a #SpiceDisplayChannel
     * @param codecType a #SpiceVideoCodecType
     */
    static changePreferredVideoCodecType(channel: Channel, codecType: number): void
    /**
     * Retrieve primary display surface `surface_id`.
     * @param channel a #SpiceDisplayChannel
     * @param surfaceId a surface id
     * @param primary a #SpiceDisplayPrimary
     * @returns %TRUE if the primary surface was found and its details collected in @primary.
     */
    static getPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
}

export module FileTransferTask {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (object: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

        cancellable?: Gio.Cancellable | null
        channel?: MainChannel | null
        file?: Gio.File | null
        id?: number | null
    }

}

export interface FileTransferTask {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    readonly cancellable: Gio.Cancellable
    readonly channel: MainChannel
    readonly file: Gio.File
    readonly id: number
    readonly progress: number
    readonly totalBytes: number
    readonly transferredBytes: number
    __gtype__: number

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    cancel(): void
    getFilename(): string | null
    getProgress(): number
    getTotalBytes(): number
    getTransferredBytes(): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    connect(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback): number
    on(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: FileTransferTask.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::total-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-bytes", ...args: any[]): void
    connect(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transferred-bytes", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FileTransferTask extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    constructor(config?: FileTransferTask.ConstructorProperties) 
    _init(config?: FileTransferTask.ConstructorProperties): void
}

export module InputsChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `inputs-modifiers`
     */
    export interface InputsModifiersSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface InputsChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    readonly keyModifiers: number
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    /**
     * Press a mouse button.
     * @param button a SPICE_MOUSE_BUTTON
     * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
     */
    buttonPress(button: number, buttonState: number): void
    /**
     * Release a button.
     * @param button a SPICE_MOUSE_BUTTON
     * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
     */
    buttonRelease(button: number, buttonState: number): void
    /**
     * Press a key.
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    keyPress(scancode: number): void
    /**
     * Press and release a key event atomically (in the same message).
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    keyPressAndRelease(scancode: number): void
    /**
     * Release a key.
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    keyRelease(scancode: number): void
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
     * @param dx delta X mouse coordinates
     * @param dy delta Y mouse coordinates
     * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
     */
    motion(dx: number, dy: number, buttonState: number): void
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
     * @param x X mouse coordinates
     * @param y Y mouse coordinates
     * @param display display channel id
     * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
     */
    position(x: number, y: number, display: number, buttonState: number): void
    /**
     * Set the keyboard locks on the guest (Caps, Num, Scroll..)
     * @param locks #SpiceInputsLock modifiers flags
     */
    setKeyLocks(locks: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    connect(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "inputs-modifiers", callback: InputsChannel.InputsModifiersSignalCallback): NodeJS.EventEmitter
    emit(sigName: "inputs-modifiers", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    connect(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::key-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-modifiers", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceInputsChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class InputsChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    constructor(config?: InputsChannel.ConstructorProperties) 
    _init(config?: InputsChannel.ConstructorProperties): void
}

export module MainChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `main-agent-update`
     */
    export interface MainAgentUpdateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `main-clipboard`
     */
    export interface MainClipboardSignalCallback {
        (type: number, data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-grab`
     */
    export interface MainClipboardGrabSignalCallback {
        (types: any | null, ntypes: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-release`
     */
    export interface MainClipboardReleaseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `main-clipboard-request`
     */
    export interface MainClipboardRequestSignalCallback {
        (types: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-selection`
     */
    export interface MainClipboardSelectionSignalCallback {
        (selection: number, type: number, data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-selection-grab`
     */
    export interface MainClipboardSelectionGrabSignalCallback {
        (selection: number, types: any | null, ntypes: number): boolean
    }

    /**
     * Signal callback interface for `main-clipboard-selection-release`
     */
    export interface MainClipboardSelectionReleaseSignalCallback {
        (selection: number): void
    }

    /**
     * Signal callback interface for `main-clipboard-selection-request`
     */
    export interface MainClipboardSelectionRequestSignalCallback {
        (selection: number, types: number): boolean
    }

    /**
     * Signal callback interface for `main-mouse-update`
     */
    export interface MainMouseUpdateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `migration-started`
     */
    export interface MigrationStartedSignalCallback {
        (session: GObject.Object): void
    }

    /**
     * Signal callback interface for `new-file-transfer`
     */
    export interface NewFileTransferSignalCallback {
        (task: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

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

export interface MainChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    readonly agentCaps0: number
    readonly agentConnected: boolean
    colorDepth: number
    disableAnimation: boolean
    /**
     * Disable automatic horizontal display position alignment.
     */
    disableDisplayAlign: boolean
    disableDisplayPosition: boolean
    disableFontSmooth: boolean
    disableWallpaper: boolean
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
    readonly mouseMode: number
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    /**
     * Test capability of a remote agent.
     * @param cap an agent capability identifier
     * @returns %TRUE if @cap (channel kind capability) is available.
     */
    agentTestCapability(cap: number): boolean
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     * @param ntypes the number of `types`
     */
    clipboardSelectionGrab(selection: number, types: number, ntypes: number): void
    /**
     * Send the clipboard data to the guest.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     * @param size data length in bytes
     */
    clipboardSelectionNotify(selection: number, type: number, data: number, size: number): void
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     */
    clipboardSelectionRelease(selection: number): void
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the #SpiceMainChannel::main-clipboard-selection signal.
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     */
    clipboardSelectionRequest(selection: number, type: number): void
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
     * @param progressCallback function to callback with     progress information, or %NULL if progress information is not needed
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    fileCopyAsync(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes copying the file started with
     * spice_main_file_copy_async().
     * @param result a #GAsyncResult.
     * @returns a %TRUE on success, %FALSE on error.
     */
    fileCopyFinish(result: Gio.AsyncResult): boolean
    /**
     * Request a mouse mode to the server. The server may not be able to
     * change the mouse mode, but spice-gtk will try to request it
     * when possible.
     * @param mode a SPICE_MOUSE_MODE
     */
    requestMouseMode(mode: number): void
    /**
     * Send monitors configuration previously set with
     * spice_main_set_display() and spice_main_set_display_enabled()
     * @returns %TRUE on success.
     */
    sendMonitorConfig(): boolean
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
    updateDisplay(id: number, x: number, y: number, width: number, height: number, update: boolean): void
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
    updateDisplayEnabled(id: number, enabled: boolean, update: boolean): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    connect(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-agent-update", callback: MainChannel.MainAgentUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-agent-update", ...args: any[]): void
    connect(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard", callback: MainChannel.MainClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard", data: any | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-grab", callback: MainChannel.MainClipboardGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-grab", ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-release", callback: MainChannel.MainClipboardReleaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-release", ...args: any[]): void
    connect(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-request", callback: MainChannel.MainClipboardRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-request", ...args: any[]): void
    connect(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection", callback: MainChannel.MainClipboardSelectionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection", type: number, data: any | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-grab", callback: MainChannel.MainClipboardSelectionGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-grab", types: any | null, ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-release", callback: MainChannel.MainClipboardSelectionReleaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-release", ...args: any[]): void
    connect(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-request", callback: MainChannel.MainClipboardSelectionRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-request", types: number, ...args: any[]): void
    connect(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-mouse-update", callback: MainChannel.MainMouseUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-mouse-update", ...args: any[]): void
    connect(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "migration-started", callback: MainChannel.MigrationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "migration-started", ...args: any[]): void
    connect(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-file-transfer", callback: MainChannel.NewFileTransferSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-file-transfer", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    connect(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::agent-caps-0", ...args: any[]): void
    connect(sigName: "notify::agent-connected", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::agent-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::agent-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::agent-connected", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::disable-animation", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::disable-animation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-animation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-animation", ...args: any[]): void
    connect(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::disable-display-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-display-align", ...args: any[]): void
    connect(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::disable-display-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-display-position", ...args: any[]): void
    connect(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-font-smooth", ...args: any[]): void
    connect(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-wallpaper", ...args: any[]): void
    connect(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::max-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-clipboard", ...args: any[]): void
    connect(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::mouse-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mouse-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mouse-mode", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceMainChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class MainChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    constructor(config?: MainChannel.ConstructorProperties) 
    _init(config?: MainChannel.ConstructorProperties): void
}

export module PlaybackChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `playback-data`
     */
    export interface PlaybackDataSignalCallback {
        (data: any | null, dataSize: number): void
    }

    /**
     * Signal callback interface for `playback-get-delay`
     */
    export interface PlaybackGetDelaySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `playback-start`
     */
    export interface PlaybackStartSignalCallback {
        (format: number, channels: number, rate: number): void
    }

    /**
     * Signal callback interface for `playback-stop`
     */
    export interface PlaybackStopSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

        minLatency?: number | null
        mute?: boolean | null
        nchannels?: number | null
        volume?: any | null
    }

}

export interface PlaybackChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    minLatency: number
    mute: boolean
    nchannels: number
    volume: any
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    /**
     * Adjust the multimedia time according to the delay.
     * @param delayMs the delay in ms
     */
    setDelay(delayMs: number): void

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    playbackData(data: any | null, size: number): void
    playbackStart(format: number, channels: number, freq: number): void
    playbackStop(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-data", callback: PlaybackChannel.PlaybackDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-data", dataSize: number, ...args: any[]): void
    connect(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-get-delay", callback: PlaybackChannel.PlaybackGetDelaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-get-delay", ...args: any[]): void
    connect(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-start", callback: PlaybackChannel.PlaybackStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-start", channels: number, rate: number, ...args: any[]): void
    connect(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-stop", callback: PlaybackChannel.PlaybackStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "notify::min-latency", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpicePlaybackChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class PlaybackChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    constructor(config?: PlaybackChannel.ConstructorProperties) 
    _init(config?: PlaybackChannel.ConstructorProperties): void
}

export module PortChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `port-data`
     */
    export interface PortDataSignalCallback {
        (data: any | null, size: number): void
    }

    /**
     * Signal callback interface for `port-event`
     */
    export interface PortEventSignalCallback {
        (event: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface PortChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    readonly portName: string | null
    readonly portOpened: boolean
    __gtype__: number

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
    writeAsync(buffer: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a port write operation.
     * @param result a #GAsyncResult
     * @returns a #gssize containing the number of bytes written to the stream.
     */
    writeFinish(result: Gio.AsyncResult): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "port-data", callback: PortChannel.PortDataSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "port-data", callback: PortChannel.PortDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-data", callback: PortChannel.PortDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-data", callback: PortChannel.PortDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "port-data", size: number, ...args: any[]): void
    connect(sigName: "port-event", callback: PortChannel.PortEventSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "port-event", callback: PortChannel.PortEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-event", callback: PortChannel.PortEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-event", callback: PortChannel.PortEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "port-event", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "notify::port-name", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-opened", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpicePortChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class PortChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    constructor(config?: PortChannel.ConstructorProperties) 
    _init(config?: PortChannel.ConstructorProperties): void
}

export module QmpPort {

    // Signal callback interfaces

    /**
     * Signal callback interface for `event`
     */
    export interface EventSignalCallback {
        (name: string | null, node: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

        channel?: PortChannel | null
    }

}

export interface QmpPort {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    readonly channel: PortChannel
    readonly ready: boolean
    __gtype__: number

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    /**
     * Query the run status of all VCPUs.
     * @param cancellable A #GCancellable
     * @param callback The async callback.
     */
    queryStatusAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous status query.
     * @param result The async #GAsyncResult result
     * @returns The #SpiceQmpStatus result or %NULL, in which case @error will be set.
     */
    queryStatusFinish(result: Gio.AsyncResult): QmpStatus
    /**
     * Request the VM to perform an action.
     * @param action a VM action
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the action is complete
     */
    vmActionAsync(action: QmpPortVmAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous VM action and returns the result.
     * @param result The async #GAsyncResult result
     */
    vmActionFinish(result: Gio.AsyncResult): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    connect(sigName: "event", callback: QmpPort.EventSignalCallback): number
    on(sigName: "event", callback: QmpPort.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: QmpPort.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: QmpPort.EventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "event", node: any | null, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque data structure.
 * @class 
 */
export class QmpPort extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    static name: string

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

export module RecordChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `record-start`
     */
    export interface RecordStartSignalCallback {
        (format: number, channels: number, rate: number): void
    }

    /**
     * Signal callback interface for `record-stop`
     */
    export interface RecordStopSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

        mute?: boolean | null
        nchannels?: number | null
        volume?: any | null
    }

}

export interface RecordChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    mute: boolean
    nchannels: number
    volume: any
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    parent: Channel & GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    /**
     * Send recorded PCM data to the guest.
     * @param data PCM data
     * @param bytes size of `data`
     * @param time stream timestamp
     */
    sendData(data: any | null, bytes: number, time: number): void

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    recordData(data: any | null, size: number): void
    recordStart(format: number, channels: number, freq: number): void
    recordStop(): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-start", callback: RecordChannel.RecordStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "record-start", channels: number, rate: number, ...args: any[]): void
    connect(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback): number
    
    // Overloads of connect
    
    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-stop", callback: RecordChannel.RecordStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "record-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceRecordChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class RecordChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    constructor(config?: RecordChannel.ConstructorProperties) 
    _init(config?: RecordChannel.ConstructorProperties): void
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `channel-destroy`
     */
    export interface ChannelDestroySignalCallback {
        (channel: Channel): void
    }

    /**
     * Signal callback interface for `channel-new`
     */
    export interface ChannelNewSignalCallback {
        (channel: Channel): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `mm-time-reset`
     */
    export interface MmTimeResetSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        caFile?: string | null
        /**
         * Images cache size. If 0, don't set.
         */
        cacheSize?: number | null
        certSubject?: string | null
        ciphers?: string | null
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
        /**
         * URL of the SPICE host to connect to
         */
        host?: string | null
        inhibitKeyboardGrab?: boolean | null
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
    }

}

export interface Session {

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
    caFile: string | null
    /**
     * Images cache size. If 0, don't set.
     */
    cacheSize: number
    certSubject: string | null
    ciphers: string | null
    clientSockets: boolean
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
    disableEffects: string[]
    /**
     * If set to TRUE, the audio channels will be enabled for
     * playback and recording.
     */
    enableAudio: boolean
    /**
     * If set to TRUE, the smartcard channel will be enabled and smartcard
     * events will be forwarded to the guest
     */
    enableSmartcard: boolean
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
    glScanout: boolean
    /**
     * Glz window size. If 0, don't set.
     */
    glzWindowSize: number
    /**
     * URL of the SPICE host to connect to
     */
    host: string | null
    inhibitKeyboardGrab: boolean
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
    readOnly: boolean
    /**
     * A string array of channel types to be secured.
     */
    secureChannels: string[]
    /**
     * Whether to share the directory read-only.
     */
    shareDirRo: boolean
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
    smartcardCertificates: string[]
    /**
     * Path to the NSS certificate database containing the certificates to
     * use to simulate a software smartcard
     */
    smartcardDb: string | null
    /**
     * Port to connect to for TLS sessions
     */
    tlsPort: string | null
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
    __gtype__: number

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
    getChannels(): Channel[]
    /**
     * Gets the `session` proxy uri.
     * @returns the session proxy #SpiceURI or %NULL.
     */
    getProxyUri(): URI
    /**
     * Checks whether the `session` is read-only.
     * @returns whether the @session is in read-only mode.
     */
    getReadOnly(): boolean
    /**
     * See if there is a `type` channel in the channels associated with this
     * `session`.
     * @param type a #SpiceChannel:channel-type
     * @returns TRUE if a @type channel is available otherwise FALSE.
     */
    hasChannelType(type: number): boolean
    /**
     * During seamless migration, channels may be created to establish a
     * connection with the target, but they are temporary and should only
     * handle migration steps. In order to avoid other interactions with
     * the client, channels should check this value.
     * @returns %TRUE if the session is a copy created during migration
     */
    isForMigration(): boolean
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
    openFd(fd: number): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Session

    channelDestroy(channel: Channel): void
    channelNew(channel: Channel): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Session

    connect(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback): number
    on(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-destroy", callback: Session.ChannelDestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-destroy", ...args: any[]): void
    connect(sigName: "channel-new", callback: Session.ChannelNewSignalCallback): number
    on(sigName: "channel-new", callback: Session.ChannelNewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-new", callback: Session.ChannelNewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-new", callback: Session.ChannelNewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-new", ...args: any[]): void
    connect(sigName: "disconnected", callback: Session.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Session.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Session.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Session.DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback): number
    on(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mm-time-reset", callback: Session.MmTimeResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mm-time-reset", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.Session

    connect(sigName: "notify::ca", callback: (...args: any[]) => void): number
    on(sigName: "notify::ca", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ca", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ca", ...args: any[]): void
    connect(sigName: "notify::ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ca-file", ...args: any[]): void
    connect(sigName: "notify::cache-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-size", ...args: any[]): void
    connect(sigName: "notify::cert-subject", callback: (...args: any[]) => void): number
    on(sigName: "notify::cert-subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cert-subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cert-subject", ...args: any[]): void
    connect(sigName: "notify::ciphers", callback: (...args: any[]) => void): number
    on(sigName: "notify::ciphers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ciphers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ciphers", ...args: any[]): void
    connect(sigName: "notify::client-sockets", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-sockets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-sockets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-sockets", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::disable-effects", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-effects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-effects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-effects", ...args: any[]): void
    connect(sigName: "notify::enable-audio", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-audio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-audio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-audio", ...args: any[]): void
    connect(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-smartcard", ...args: any[]): void
    connect(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-usbredir", ...args: any[]): void
    connect(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gl-scanout", ...args: any[]): void
    connect(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::glz-window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::glz-window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::glz-window-size", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): number
    on(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inhibit-keyboard-grab", ...args: any[]): void
    connect(sigName: "notify::migration-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::migration-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::migration-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::migration-state", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::pubkey", callback: (...args: any[]) => void): number
    on(sigName: "notify::pubkey", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pubkey", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pubkey", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::secure-channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::secure-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::secure-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::secure-channels", ...args: any[]): void
    connect(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): number
    on(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::share-dir-ro", ...args: any[]): void
    connect(sigName: "notify::shared-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-dir", ...args: any[]): void
    connect(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): number
    on(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smartcard-certificates", ...args: any[]): void
    connect(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): number
    on(sigName: "notify::smartcard-db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smartcard-db", ...args: any[]): void
    connect(sigName: "notify::tls-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-port", ...args: any[]): void
    connect(sigName: "notify::unix-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::unix-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unix-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unix-path", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::verify", callback: (...args: any[]) => void): number
    on(sigName: "notify::verify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::verify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::verify", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceSession struct is opaque and should not be accessed directly.
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Session

    static name: string

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

export module SmartcardChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface SmartcardChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    parent: Channel & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceSmartcardChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class SmartcardChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    constructor(config?: SmartcardChannel.ConstructorProperties) 
    _init(config?: SmartcardChannel.ConstructorProperties): void
}

export module SmartcardManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `card-inserted`
     */
    export interface CardInsertedSignalCallback {
        (vreader: any): void
    }

    /**
     * Signal callback interface for `card-removed`
     */
    export interface CardRemovedSignalCallback {
        (vreader: any): void
    }

    /**
     * Signal callback interface for `reader-added`
     */
    export interface ReaderAddedSignalCallback {
        (vreader: any): void
    }

    /**
     * Signal callback interface for `reader-removed`
     */
    export interface ReaderRemovedSignalCallback {
        (vreader: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SmartcardManager {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    parent: GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    /**
     * Gets the list of smartcard readers that are currently available, they
     * can be either software (emulated) readers, or hardware ones.
     * @returns a newly allocated list of SpiceSmartcardReader instances, or NULL if none were found. When no longer needed, the list must be freed after unreferencing its elements with g_boxed_free()
     */
    getReaders(): SmartcardReader[]
    /**
     * Simulates the insertion of a smartcard in the guest. Valid certificates
     * must have been set in #SpiceSession:smartcard-certificates for software
     * smartcard support to work. At the moment, only one software smartcard
     * reader is supported, that's why there is no parameter to indicate which
     * reader to insert the card in.
     * @returns TRUE if smartcard insertion was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
     */
    insertCard(): boolean
    /**
     * Simulates the removal of a smartcard in the guest. At the moment, only
     * one software smartcard reader is supported, that's why there is no
     * parameter to indicate which reader to insert the card in.
     * @returns TRUE if smartcard removal was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
     */
    removeCard(): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    cardInserted(reader: SmartcardReader): void
    cardRemoved(reader: SmartcardReader): void
    readerAdded(reader: SmartcardReader): void
    readerRemoved(reader: SmartcardReader): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    connect(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback): number
    on(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-inserted", callback: SmartcardManager.CardInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-inserted", ...args: any[]): void
    connect(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback): number
    on(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: SmartcardManager.CardRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-removed", ...args: any[]): void
    connect(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback): number
    on(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-added", callback: SmartcardManager.ReaderAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reader-added", ...args: any[]): void
    connect(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback): number
    on(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-removed", callback: SmartcardManager.ReaderRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reader-removed", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceSmartcardManager struct is opaque and should not be accessed directly.
 * @class 
 */
export class SmartcardManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    static name: string

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

export module URI {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

        hostname?: string | null
        password?: string | null
        port?: number | null
        scheme?: string | null
        user?: string | null
    }

}

export interface URI {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    hostname: string | null
    password: string | null
    port: number
    scheme: string | null
    user: string | null
    __gtype__: number

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.URI

    getHostname(): string | null
    getPassword(): string | null
    getPort(): number
    getScheme(): string | null
    getUser(): string | null
    setHostname(hostname: string | null): void
    setPassword(password: string | null): void
    setPort(port: number): void
    setScheme(scheme: string | null): void
    setUser(user: string | null): void
    toString(): string | null

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.URI

    connect(sigName: "notify::hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::user", callback: (...args: any[]) => void): number
    on(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceURI struct is opaque and cannot be accessed directly.
 * @class 
 */
export class URI extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.URI

    constructor(config?: URI.ConstructorProperties) 
    _init(config?: URI.ConstructorProperties): void
}

export module UsbDeviceManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `auto-connect-failed`
     */
    export interface AutoConnectFailedSignalCallback {
        (device: UsbDevice, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        (device: UsbDevice): void
    }

    /**
     * Signal callback interface for `device-error`
     */
    export interface DeviceErrorSignalCallback {
        (device: UsbDevice, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        (device: UsbDevice): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

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
        /**
         * #SpiceSession this #SpiceUsbDeviceManager is associated with
         */
        session?: Session | null
    }

}

export interface UsbDeviceManager extends Gio.Initable {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

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
    autoConnectFilter: string | null
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
    redirectOnConnect: string | null
    /**
     * #SpiceSession this #SpiceUsbDeviceManager is associated with
     */
    readonly session: Session
    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    parent: GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    /**
     * Checks whether it is possible to redirect the `device`.
     * @param device a #SpiceUsbDevice to disconnect
     * @returns %TRUE if @device can be redirected
     */
    canRedirectDevice(device: UsbDevice): boolean
    /**
     * Asynchronously connects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_connect_device_finish()
     * to get the result of the operation.
     * @param device a #SpiceUsbDevice to redirect
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    connectDeviceAsync(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async operation. See spice_usb_device_manager_connect_device_async().
     * @param res a #GAsyncResult
     * @returns %TRUE if connection is successful
     */
    connectDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Disconnects the `device`.
     * @param device a #SpiceUsbDevice to disconnect
     */
    disconnectDevice(device: UsbDevice): void
    /**
     * Asynchronously disconnects the `device`. When completed, `callback` will be called.
     * Then it is possible to call spice_usb_device_manager_disconnect_device_finish()
     * to get the result of the operation.
     * @param device a connected #SpiceUsbDevice to disconnect.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disconnectDeviceAsync(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async operation. See spice_usb_device_manager_disconnect_device_async().
     * @param res a #GAsyncResult
     * @returns %TRUE if disconnection is successful
     */
    disconnectDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Finds devices associated with the `manager`
     * @returns a %GPtrArray array of %SpiceUsbDevice
     */
    getDevices(): UsbDevice[]
    /**
     * Finds devices associated with the `manager` complying with the `filter`
     * @param filter filter string for selecting which devices to return,      see #SpiceUsbDeviceManager:auto-connect-filter for the filter      string format
     * @returns a %GPtrArray array of %SpiceUsbDevice
     */
    getDevicesWithFilter(filter: string | null): UsbDevice[]
    /**
     * Finds if the `device` is connected.
     * @param device a #SpiceUsbDevice
     * @returns %TRUE if @device has an associated USB redirection channel
     */
    isDeviceConnected(device: UsbDevice): boolean
    /**
     * Checks whether a device is being redirected
     * @returns %TRUE if device redirection negotiation flow is in progress
     */
    isRedirecting(): boolean

    // Own virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    autoConnectFailed(device: UsbDevice, error: GLib.Error): void
    deviceAdded(device: UsbDevice): void
    deviceError(device: UsbDevice, error: GLib.Error): void
    deviceRemoved(device: UsbDevice): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    connect(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback): number
    on(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "auto-connect-failed", callback: UsbDeviceManager.AutoConnectFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "auto-connect-failed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: UsbDeviceManager.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback): number
    on(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-error", callback: UsbDeviceManager.DeviceErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: UsbDeviceManager.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    connect(sigName: "notify::auto-connect", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-connect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-connect", ...args: any[]): void
    connect(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-connect-filter", ...args: any[]): void
    connect(sigName: "notify::free-channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::free-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::free-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::free-channels", ...args: any[]): void
    connect(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): number
    on(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::redirect-on-connect", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceUsbDeviceManager struct is opaque and should not be accessed directly.
 * @class 
 */
export class UsbDeviceManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    static name: string

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

export module UsbredirChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends Channel.ConstructorProperties {
    }

}

export interface UsbredirChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    parent: Channel & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceUsbredirChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class UsbredirChannel extends Channel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    constructor(config?: UsbredirChannel.ConstructorProperties) 
    _init(config?: UsbredirChannel.ConstructorProperties): void
}

export module WebdavChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends PortChannel.ConstructorProperties {
    }

}

export interface WebdavChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    __gtype__: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    parent: PortChannel & Channel & GObject.Object & GObject.Object

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::port-name", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-opened", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::channel-type", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-type", ...args: any[]): void
    connect(sigName: "notify::socket", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket", ...args: any[]): void
    connect(sigName: "notify::spice-session", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spice-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spice-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spice-session", ...args: any[]): void
    connect(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-read-bytes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number

    // Overloads of connect

    /**
     * Connect the channel, using #SpiceSession connection informations
     * @returns %TRUE on success.
     */
    connect(): boolean
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceWebdavChannel struct is opaque and should not be accessed directly.
 * @class 
 */
export class WebdavChannel extends PortChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    static name: string

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    constructor(config?: WebdavChannel.ConstructorProperties) 
    _init(config?: WebdavChannel.ConstructorProperties): void
}

export interface AudioClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    connectChannel: (audio: Audio, channel: Channel) => boolean
    getPlaybackVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback: Gio.AsyncReadyCallback | null) => void
    getPlaybackVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    getRecordVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback: Gio.AsyncReadyCallback | null) => void
    getRecordVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
}

/**
 * Class structure for #SpiceAudio.
 * @record 
 */
export abstract class AudioClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass

    static name: string
}

export interface AudioPrivate {
}

export class AudioPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.AudioPrivate

    static name: string
}

export interface ChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    channelEvent: (channel: Channel, event: ChannelEvent) => void
    openFd: (channel: Channel, withTls: number) => void
    handleMsg: (channel: Channel, msg: MsgIn) => void
    channelUp: (channel: Channel) => void
    iterateWrite: (channel: Channel) => void
    iterateRead: (channel: Channel) => void
    channelReset: (channel: Channel, migrating: boolean) => void
    channelSendMigrationHandshake: (channel: Channel) => void
}

/**
 * Class structure for #SpiceChannel.
 * @record 
 */
export abstract class ChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass

    static name: string
}

export interface ChannelClassPrivate {
}

export class ChannelClassPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClassPrivate

    static name: string
}

export interface ChannelPrivate {
}

export class ChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.ChannelPrivate

    static name: string
}

export interface CursorChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    cursorSet: (channel: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba: any | null) => void
    cursorMove: (channel: CursorChannel, x: number, y: number) => void
    cursorHide: (channel: CursorChannel) => void
    cursorReset: (channel: CursorChannel) => void
}

/**
 * Class structure for #SpiceCursorChannel.
 * @record 
 */
export abstract class CursorChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelClass

    static name: string
}

export interface CursorChannelPrivate {
}

export class CursorChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelPrivate

    static name: string
}

export interface CursorShape {

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
    hotSpotX: number
    /**
     * a 'y' coordinate of the remote cursor
     * @field 
     */
    hotSpotY: number
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
export class CursorShape {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorShape

    static name: string
}

export interface DisplayChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    displayPrimaryCreate: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: any) => void
    displayPrimaryDestroy: (channel: Channel) => void
    displayInvalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    displayMark: (channel: Channel, mark: boolean) => void
}

/**
 * Class structure for #SpiceDisplayChannel.
 * @record 
 */
export abstract class DisplayChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass

    static name: string
}

export interface DisplayChannelPrivate {
}

export class DisplayChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelPrivate

    static name: string
}

export interface DisplayMonitorConfig {

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
    surfaceId: number
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
export class DisplayMonitorConfig {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayMonitorConfig

    static name: string
}

export interface DisplayPrimary {

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
export class DisplayPrimary {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayPrimary

    static name: string
}

export interface FileTransferTaskClass {
}

export abstract class FileTransferTaskClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTaskClass

    static name: string
}

export interface GlScanout {

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
export class GlScanout {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout

    static name: string
}

export interface InputsChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    inputsModifiers: (channel: Channel) => void
}

/**
 * Class structure for #SpiceInputsChannel.
 * @record 
 */
export abstract class InputsChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelClass

    static name: string
}

export interface InputsChannelPrivate {
}

export class InputsChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelPrivate

    static name: string
}

export interface MainChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    mouseUpdate: (channel: Channel) => void
    agentUpdate: (channel: Channel) => void
}

/**
 * Class structure for #SpiceMainChannel.
 * @record 
 */
export abstract class MainChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass

    static name: string
}

export interface MainChannelPrivate {
}

export class MainChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelPrivate

    static name: string
}

export interface MsgIn {
}

export class MsgIn {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MsgIn

    static name: string
}

export interface MsgOut {
}

export class MsgOut {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.MsgOut

    static name: string
}

export interface PlaybackChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    playbackStart: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    playbackData: (channel: PlaybackChannel, data: any | null, size: number) => void
    playbackStop: (channel: PlaybackChannel) => void
}

/**
 * Class structure for #SpicePlaybackChannel.
 * @record 
 */
export abstract class PlaybackChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelClass

    static name: string
}

export interface PlaybackChannelPrivate {
}

export class PlaybackChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelPrivate

    static name: string
}

export interface PortChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
}

/**
 * Class structure for #SpicePortChannel.
 * @record 
 */
export abstract class PortChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass

    static name: string
}

export interface PortChannelPrivate {
}

export class PortChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelPrivate

    static name: string
}

export interface QmpPortClass {
}

export abstract class QmpPortClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPortClass

    static name: string
}

export interface QmpStatus {

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
export class QmpStatus {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus

    static name: string
}

export interface RecordChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
    recordStart: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    recordData: (channel: RecordChannel, data: any | null, size: number) => void
    recordStop: (channel: RecordChannel) => void
}

/**
 * Class structure for #SpiceRecordChannel.
 * @record 
 */
export abstract class RecordChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelClass

    static name: string
}

export interface RecordChannelPrivate {
}

export class RecordChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelPrivate

    static name: string
}

export interface SessionClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    channelNew: (session: Session, channel: Channel) => void
    channelDestroy: (session: Session, channel: Channel) => void
}

/**
 * Class structure for #SpiceSession.
 * @record 
 */
export abstract class SessionClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass

    static name: string
}

export interface SessionPrivate {
}

export class SessionPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SessionPrivate

    static name: string
}

export interface SmartcardChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
}

/**
 * Class structure for #SpiceSmartcardChannel.
 * @record 
 */
export abstract class SmartcardChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass

    static name: string
}

export interface SmartcardChannelPrivate {
}

export class SmartcardChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelPrivate

    static name: string
}

export interface SmartcardManagerClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    readerAdded: (manager: SmartcardManager, reader: SmartcardReader) => void
    readerRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
    cardInserted: (manager: SmartcardManager, reader: SmartcardReader) => void
    cardRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
}

/**
 * Class structure for #SpiceSmartcardManager.
 * @record 
 */
export abstract class SmartcardManagerClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass

    static name: string
}

export interface SmartcardManagerPrivate {
}

export class SmartcardManagerPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerPrivate

    static name: string
}

export interface SmartcardReader {

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader

    /**
     * Simulates insertion of a smartcard in the software smartcard reader
     * `reader`. If `reader` is not a software smartcard reader, FALSE will be
     * returned.
     * @returns TRUE if insertion of a card was successfully simulated, FALSE otherwise
     */
    insertCard(): boolean
    /**
     * Tests if `reader` is a software (emulated) smartcard reader.
     * @returns TRUE if @reader is a software (emulated) smartcard reader, FALSE otherwise
     */
    isSoftware(): boolean
    /**
     * Simulates removal of a smartcard from the software smartcard reader
     * `reader`. If `reader` is not a software smartcard reader, FALSE will be
     * returned.
     * @returns TRUE if removal of a card was successfully simulated, FALSE otherwise
     */
    removeCard(): boolean
}

/**
 * The #SpiceSmartcardReader struct is opaque and cannot be accessed directly.
 * @record 
 */
export class SmartcardReader {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader

    static name: string
}

export interface URIClass {
}

/**
 * The #SpiceURIClass struct is opaque and cannot be accessed directly.
 * It is class structure for #SpiceURI.
 * @record 
 */
export abstract class URIClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URIClass

    static name: string
}

export interface URIPrivate {
}

export class URIPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URIPrivate

    static name: string
}

export interface UsbDevice {

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
    getDescription(format: string | null): string | null
    /**
     * Finds the %libusb_device associated with the `device`.
     * @returns the %libusb_device associated to %SpiceUsbDevice.
     */
    getLibusbDevice(): any | null
}

/**
 * The #SpiceUsbDevice struct is opaque and cannot be accessed directly.
 * @record 
 */
export class UsbDevice {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDevice

    static name: string
}

export interface UsbDeviceManagerClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    deviceAdded: (manager: UsbDeviceManager, device: UsbDevice) => void
    deviceRemoved: (manager: UsbDeviceManager, device: UsbDevice) => void
    autoConnectFailed: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    deviceError: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
}

/**
 * Class structure for #SpiceUsbDeviceManager.
 * @record 
 */
export abstract class UsbDeviceManagerClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass

    static name: string
}

export interface UsbDeviceManagerPrivate {
}

export class UsbDeviceManagerPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerPrivate

    static name: string
}

export interface UsbredirChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: ChannelClass
}

/**
 * Class structure for #SpiceUsbredirChannel.
 * @record 
 */
export abstract class UsbredirChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass

    static name: string
}

export interface UsbredirChannelPrivate {
}

export class UsbredirChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelPrivate

    static name: string
}

export interface WebdavChannelClass {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: PortChannelClass
}

/**
 * Class structure for #SpiceWebdavChannel.
 * @record 
 */
export abstract class WebdavChannelClass {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass

    static name: string
}

export interface WebdavChannelPrivate {
}

export class WebdavChannelPrivate {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelPrivate

    static name: string
}
