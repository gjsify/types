// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SpiceClientGLib-2.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Gio from './Gio-2.0';

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
 */
function clientErrorQuark(): GLib.Quark
/**
 * Tells the spice server to change the preferred image compression
 * for the `channel`.
 * @param channel a #SpiceDisplayChannel
 * @param compression a #SpiceImageCompression
 */
function displayChangePreferredCompression(channel: Channel, compression: number): void
/**
 * Tells the spice server to change the preferred video codec type for
 * streaming in `channel`. Application can set only one preferred video codec per
 * display channel.
 * @param channel a #SpiceDisplayChannel
 * @param codecType a #SpiceVideoCodecType
 */
function displayChangePreferredVideoCodecType(channel: Channel, codecType: number): void
/**
 * Retrieves the GL scanout if available
 * @param channel a #SpiceDisplayChannel
 */
function displayGetGlScanout(channel: DisplayChannel): GlScanout
/**
 * Retrieve primary display surface `surface_id`.
 * @param channel a #SpiceDisplayChannel
 * @param surfaceId a surface id
 * @param primary a #SpiceDisplayPrimary
 */
function displayGetPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
/**
 * After a SpiceDisplayChannel::gl-draw is emitted, the client should
 * draw the current display with the current GL scanout, and must
 * release the GL resource with a call to spice_display_gl_draw_done()
 * (failing to do so for each gl-draw may result in a frozen display).
 * @param channel a #SpiceDisplayChannel
 */
function displayGlDrawDone(channel: DisplayChannel): void
/**
 * Gets commandline options.
 * 
 * Bindings for other languages are available since 0.32
 */
function getOptionGroup(): GLib.OptionGroup
/**
 * Press a mouse button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
function inputsButtonPress(channel: InputsChannel, button: number, buttonState: number): void
/**
 * Release a button.
 * @param channel a #SpiceInputsChannel
 * @param button a SPICE_MOUSE_BUTTON
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
function inputsButtonRelease(channel: InputsChannel, button: number, buttonState: number): void
/**
 * Press a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputsKeyPress(channel: InputsChannel, scancode: number): void
/**
 * Press and release a key event atomically (in the same message).
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputsKeyPressAndRelease(channel: InputsChannel, scancode: number): void
/**
 * Release a key.
 * @param channel a #SpiceInputsChannel
 * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
 */
function inputsKeyRelease(channel: InputsChannel, scancode: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
 * @param channel a #SpiceInputsChannel
 * @param dx delta X mouse coordinates
 * @param dy delta Y mouse coordinates
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
function inputsMotion(channel: InputsChannel, dx: number, dy: number, buttonState: number): void
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
 * @param channel a #SpiceInputsChannel
 * @param x X mouse coordinates
 * @param y Y mouse coordinates
 * @param display display channel id
 * @param buttonState SPICE_MOUSE_BUTTON_MASK flags
 */
function inputsPosition(channel: InputsChannel, x: number, y: number, display: number, buttonState: number): void
/**
 * Set the keyboard locks on the guest (Caps, Num, Scroll..)
 * @param channel a #SpiceInputsChannel
 * @param locks #SpiceInputsLock modifiers flags
 */
function inputsSetKeyLocks(channel: InputsChannel, locks: number): void
/**
 * Test capability of a remote agent.
 * @param channel a #SpiceMainChannel
 * @param cap an agent capability identifier
 */
function mainAgentTestCapability(channel: MainChannel, cap: number): boolean
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
function mainClipboardGrab(channel: MainChannel, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
function mainClipboardNotify(channel: MainChannel, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 */
function mainClipboardRelease(channel: MainChannel): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard signal.
 * @param channel a #SpiceMainChannel
 * @param type a #VD_AGENT_CLIPBOARD type
 */
function mainClipboardRequest(channel: MainChannel, type: number): void
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
 * @param ntypes the number of `types`
 */
function mainClipboardSelectionGrab(channel: MainChannel, selection: number, types: number, ntypes: number): void
/**
 * Send the clipboard data to the guest.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 * @param data clipboard data
 * @param size data length in bytes
 */
function mainClipboardSelectionNotify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 */
function mainClipboardSelectionRelease(channel: MainChannel, selection: number): void
/**
 * Request clipboard data of `type` from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard-selection signal.
 * @param channel a #SpiceMainChannel
 * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
 * @param type a #VD_AGENT_CLIPBOARD type
 */
function mainClipboardSelectionRequest(channel: MainChannel, selection: number, type: number): void
/**
 * See: spice_main_channel_file_copy_async()
 * @param channel a #SpiceMainChannel
 * @param sources a %NULL-terminated array of #GFile objects to be transferred
 * @param flags set of #GFileCopyFlags
 * @param cancellable optional #GCancellable object, %NULL to ignore
 * @param progressCallback function to callback with     progress information, or %NULL if progress information is not needed
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
 */
function mainFileCopyAsync(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes copying the file started with
 * spice_main_file_copy_async().
 * @param channel a #SpiceMainChannel
 * @param result a #GAsyncResult.
 */
function mainFileCopyFinish(channel: MainChannel, result: Gio.AsyncResult): boolean
/**
 * Request a mouse mode to the server. The server may not be able to
 * change the mouse mode, but spice-gtk will try to request it
 * when possible.
 * @param channel a %SpiceMainChannel
 * @param mode a SPICE_MOUSE_MODE
 */
function mainRequestMouseMode(channel: MainChannel, mode: number): void
/**
 * Send monitors configuration previously set with
 * spice_main_set_display() and spice_main_set_display_enabled()
 * @param channel a #SpiceMainChannel
 */
function mainSendMonitorConfig(channel: MainChannel): boolean
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
function mainSetDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
/**
 * When sending monitor configuration to agent guest, don't set
 * display `id,` which the agent translates to disabling the display
 * id. Note: this will take effect next time the monitor
 * configuration is sent.
 * @param channel a #SpiceMainChannel
 * @param id display ID (if -1: set all displays)
 * @param enabled wether display `id` is enabled
 */
function mainSetDisplayEnabled(channel: MainChannel, id: number, enabled: boolean): void
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
function mainUpdateDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
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
function mainUpdateDisplayEnabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
/**
 * Send an event to the port.
 * 
 * Note: The values SPICE_PORT_EVENT_CLOSED and
 * SPICE_PORT_EVENT_OPENED are managed by the channel connection
 * state.
 * @param port a #SpicePortChannel
 * @param event a SPICE_PORT_EVENT value
 */
function portEvent(port: PortChannel, event: number): void
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
function portWriteAsync(port: PortChannel, buffer: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes a port write operation.
 * @param port a #SpicePortChannel
 * @param result a #GAsyncResult
 */
function portWriteFinish(port: PortChannel, result: Gio.AsyncResult): number
/**
 * Send recorded PCM data to the guest.
 * @param channel a #SpiceRecordChannel
 * @param data PCM data
 * @param bytes size of `data`
 * @param time stream timestamp
 */
function recordSendData(channel: RecordChannel, data: object | null, bytes: number, time: number): void
/**
 * Set various properties on `session,` according to the commandline
 * arguments given to spice_get_option_group() option group.
 * @param session a #SpiceSession to set option upon
 */
function setSessionOption(session: Session): void
function utilGetDebug(): boolean
/**
 * Gets the version string
 */
function utilGetVersionString(): string
/**
 * Enable or disable Spice-GTK debugging messages.
 * @param enabled %TRUE or %FALSE
 */
function utilSetDebug(enabled: boolean): void
/**
 * Creates a string representation of `uuid,` of the form
 * "06e023d5-86d8-420e-8103-383e4566087a"
 * @param uuid UUID byte array
 */
function uuidToString(uuid: number): string
interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
interface Audio_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    mainContext?: GLib.MainContext | null
    /**
     * #SpiceSession this #SpiceAudio is associated with
     */
    session?: Session | null
}

interface Audio {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    readonly mainContext: GLib.MainContext
    /**
     * #SpiceSession this #SpiceAudio is associated with
     */
    readonly session: Session

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    parent: GObject.Object
    priv: AudioPrivate

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
class Audio extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    static name: string
    static $gtype: GObject.GType<Audio>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Audio

    constructor(config?: Audio_ConstructProps) 
    /**
     * Once instantiated, #SpiceAudio will handle the playback and record
     * channels to stream to your local audio system.
     * @constructor 
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     * @param name a name for the audio channels (or %NULL for application name).
     */
    constructor(session: Session, context: GLib.MainContext | null, name: string | null) 
    /**
     * Once instantiated, #SpiceAudio will handle the playback and record
     * channels to stream to your local audio system.
     * @constructor 
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     * @param name a name for the audio channels (or %NULL for application name).
     */
    static new(session: Session, context: GLib.MainContext | null, name: string | null): Audio
    _init(config?: Audio_ConstructProps): void
    /**
     * Gets the #SpiceAudio associated with the passed in #SpiceSession.
     * A new #SpiceAudio instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session the #SpiceSession to connect to
     * @param context a #GMainContext to attach to (or %NULL for default).
     */
    static get(session: Session, context: GLib.MainContext | null): Audio
}

interface Channel_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    channelId?: number | null
    channelType?: number | null
    spiceSession?: Session | null
}

/**
 * Signal callback interface for `channel-event`
 */
interface Channel_ChannelEventSignalCallback {
    (event: ChannelEvent): void
}

/**
 * Signal callback interface for `open-fd`
 */
interface Channel_OpenFdSignalCallback {
    (withTls: number): void
}

interface Channel {

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

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    parent: GObject.Object
    priv: ChannelPrivate

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    /**
     * Connect the channel, using #SpiceSession connection informations
     */
    // TODO fix conflict: connect(): boolean
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
     */
    flushFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves the #GError currently set on channel, if the #SpiceChannel
     * is in error state and can provide additional error details.
     */
    getError(): GLib.Error
    /**
     * Connect the channel using `fd` socket.
     * 
     * If `fd` is -1, a valid fd will be requested later via the
     * SpiceChannel::open-fd signal.
     * @param fd a file descriptor (socket) or -1. request mechanism
     */
    openFd(fd: number): boolean
    /**
     * Enable specific channel-kind capability.
     * @param cap a capability
     */
    setCapability(cap: number): void
    /**
     * Test availability of remote "channel kind capability".
     * @param cap a capability
     */
    testCapability(cap: number): boolean
    /**
     * Test availability of remote "common channel capability".
     * @param cap a capability
     */
    testCommonCapability(cap: number): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    connect(sigName: "channel-event", callback: Channel_ChannelEventSignalCallback): number
    on(sigName: "channel-event", callback: Channel_ChannelEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: Channel_ChannelEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: Channel_ChannelEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-event", ...args: any[]): void
    connect(sigName: "open-fd", callback: Channel_OpenFdSignalCallback): number
    on(sigName: "open-fd", callback: Channel_OpenFdSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: Channel_OpenFdSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: Channel_OpenFdSignalCallback): NodeJS.EventEmitter
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
class Channel extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    static name: string
    static $gtype: GObject.GType<Channel>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Channel

    constructor(config?: Channel_ConstructProps) 
    /**
     * Create a new #SpiceChannel of type `type,` and channel ID `id`.
     * @constructor 
     * @param s the `SpiceSession` the channel is linked to
     * @param type the requested SPICECHANNELPRIVATE type
     * @param id the channel-id
     */
    constructor(s: Session, type: number, id: number) 
    /**
     * Create a new #SpiceChannel of type `type,` and channel ID `id`.
     * @constructor 
     * @param s the `SpiceSession` the channel is linked to
     * @param type the requested SPICECHANNELPRIVATE type
     * @param id the channel-id
     */
    static new(s: Session, type: number, id: number): Channel
    _init(config?: Channel_ConstructProps): void
    /**
     * Convert a channel-type property value to a string.
     * @param str a string representation of the channel-type property
     */
    static stringToType(str: string): number
    /**
     * Convert a channel-type property value to a string.
     * @param type a channel-type property value
     */
    static typeToString(type: number): string
}

interface CursorChannel_ConstructProps extends Channel_ConstructProps {
}

/**
 * Signal callback interface for `cursor-hide`
 */
interface CursorChannel_CursorHideSignalCallback {
    (): void
}

/**
 * Signal callback interface for `cursor-move`
 */
interface CursorChannel_CursorMoveSignalCallback {
    (x: number, y: number): void
}

/**
 * Signal callback interface for `cursor-reset`
 */
interface CursorChannel_CursorResetSignalCallback {
    (): void
}

/**
 * Signal callback interface for `cursor-set`
 */
interface CursorChannel_CursorSetSignalCallback {
    (width: number, height: number, hotX: number, hotY: number, rgba: object | null): void
}

interface CursorChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    /**
     * The last #SpiceCursorShape received.
     */
    readonly cursor: CursorShape

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    parent: Channel

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "cursor-hide", callback: CursorChannel_CursorHideSignalCallback): number
    on(sigName: "cursor-hide", callback: CursorChannel_CursorHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-hide", callback: CursorChannel_CursorHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-hide", callback: CursorChannel_CursorHideSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-hide", ...args: any[]): void
    connect(sigName: "cursor-move", callback: CursorChannel_CursorMoveSignalCallback): number
    on(sigName: "cursor-move", callback: CursorChannel_CursorMoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-move", callback: CursorChannel_CursorMoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-move", callback: CursorChannel_CursorMoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-move", y: number, ...args: any[]): void
    connect(sigName: "cursor-reset", callback: CursorChannel_CursorResetSignalCallback): number
    on(sigName: "cursor-reset", callback: CursorChannel_CursorResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-reset", callback: CursorChannel_CursorResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-reset", callback: CursorChannel_CursorResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-reset", ...args: any[]): void
    connect(sigName: "cursor-set", callback: CursorChannel_CursorSetSignalCallback): number
    on(sigName: "cursor-set", callback: CursorChannel_CursorSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-set", callback: CursorChannel_CursorSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-set", callback: CursorChannel_CursorSetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-set", height: number, hotX: number, hotY: number, rgba: object | null, ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel

    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: CursorChannel_ConstructProps) 
    _init(config?: CursorChannel_ConstructProps): void
}

interface DisplayChannel_ConstructProps extends Channel_ConstructProps {
}

/**
 * Signal callback interface for `display-invalidate`
 */
interface DisplayChannel_DisplayInvalidateSignalCallback {
    (x: number, y: number, width: number, height: number): void
}

/**
 * Signal callback interface for `display-mark`
 */
interface DisplayChannel_DisplayMarkSignalCallback {
    (mark: number): void
}

/**
 * Signal callback interface for `display-primary-create`
 */
interface DisplayChannel_DisplayPrimaryCreateSignalCallback {
    (format: number, width: number, height: number, stride: number, shmid: number, imgdata: object | null): void
}

/**
 * Signal callback interface for `display-primary-destroy`
 */
interface DisplayChannel_DisplayPrimaryDestroySignalCallback {
    (): void
}

/**
 * Signal callback interface for `gl-draw`
 */
interface DisplayChannel_GlDrawSignalCallback {
    (x: number, y: number, width: number, height: number): void
}

/**
 * Signal callback interface for `gst-video-overlay`
 */
interface DisplayChannel_GstVideoOverlaySignalCallback {
    (pipeline: Gst.Pipeline): boolean
}

/**
 * Signal callback interface for `streaming-mode`
 */
interface DisplayChannel_StreamingModeSignalCallback {
    (streamingMode: boolean): object | null
}

interface DisplayChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    /**
     * The last #SpiceGlScanout received.
     */
    readonly glScanout: GlScanout
    readonly height: number
    /**
     * Current monitors configuration.
     */
    readonly monitors: object[]
    /**
     * The maximum number of monitors the server or guest supports.
     * May change during client lifetime, for instance guest may
     * reboot or dynamically adjust this.
     */
    readonly monitorsMax: number
    readonly width: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    parent: Channel

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    /**
     * Retrieves the GL scanout if available
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

    connect(sigName: "display-invalidate", callback: DisplayChannel_DisplayInvalidateSignalCallback): number
    on(sigName: "display-invalidate", callback: DisplayChannel_DisplayInvalidateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-invalidate", callback: DisplayChannel_DisplayInvalidateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-invalidate", callback: DisplayChannel_DisplayInvalidateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-invalidate", y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "display-mark", callback: DisplayChannel_DisplayMarkSignalCallback): number
    on(sigName: "display-mark", callback: DisplayChannel_DisplayMarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-mark", callback: DisplayChannel_DisplayMarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-mark", callback: DisplayChannel_DisplayMarkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-mark", ...args: any[]): void
    connect(sigName: "display-primary-create", callback: DisplayChannel_DisplayPrimaryCreateSignalCallback): number
    on(sigName: "display-primary-create", callback: DisplayChannel_DisplayPrimaryCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-create", callback: DisplayChannel_DisplayPrimaryCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-create", callback: DisplayChannel_DisplayPrimaryCreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-primary-create", width: number, height: number, stride: number, shmid: number, imgdata: object | null, ...args: any[]): void
    connect(sigName: "display-primary-destroy", callback: DisplayChannel_DisplayPrimaryDestroySignalCallback): number
    on(sigName: "display-primary-destroy", callback: DisplayChannel_DisplayPrimaryDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-destroy", callback: DisplayChannel_DisplayPrimaryDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-destroy", callback: DisplayChannel_DisplayPrimaryDestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "display-primary-destroy", ...args: any[]): void
    connect(sigName: "gl-draw", callback: DisplayChannel_GlDrawSignalCallback): number
    on(sigName: "gl-draw", callback: DisplayChannel_GlDrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gl-draw", callback: DisplayChannel_GlDrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gl-draw", callback: DisplayChannel_GlDrawSignalCallback): NodeJS.EventEmitter
    emit(sigName: "gl-draw", y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "gst-video-overlay", callback: DisplayChannel_GstVideoOverlaySignalCallback): number
    on(sigName: "gst-video-overlay", callback: DisplayChannel_GstVideoOverlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gst-video-overlay", callback: DisplayChannel_GstVideoOverlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gst-video-overlay", callback: DisplayChannel_GstVideoOverlaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "gst-video-overlay", ...args: any[]): void
    connect(sigName: "streaming-mode", callback: DisplayChannel_StreamingModeSignalCallback): number
    on(sigName: "streaming-mode", callback: DisplayChannel_StreamingModeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "streaming-mode", callback: DisplayChannel_StreamingModeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "streaming-mode", callback: DisplayChannel_StreamingModeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "streaming-mode", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel

    connect(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gl-scanout", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::monitors", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitors", ...args: any[]): void
    connect(sigName: "notify::monitors-max", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitors-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitors-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitors-max", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: DisplayChannel_ConstructProps) 
    _init(config?: DisplayChannel_ConstructProps): void
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
     */
    static getPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
}

interface FileTransferTask_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    cancellable?: Gio.Cancellable | null
    channel?: MainChannel | null
    file?: Gio.File | null
    id?: number | null
}

/**
 * Signal callback interface for `finished`
 */
interface FileTransferTask_FinishedSignalCallback {
    (object: GLib.Error): void
}

interface FileTransferTask {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    readonly cancellable: Gio.Cancellable
    readonly channel: MainChannel
    readonly file: Gio.File
    readonly id: number
    readonly progress: number
    readonly totalBytes: number
    readonly transferredBytes: number

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    cancel(): void
    getFilename(): string
    getProgress(): number
    getTotalBytes(): number
    getTransferredBytes(): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    connect(sigName: "finished", callback: FileTransferTask_FinishedSignalCallback): number
    on(sigName: "finished", callback: FileTransferTask_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: FileTransferTask_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: FileTransferTask_FinishedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileTransferTask extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    static name: string
    static $gtype: GObject.GType<FileTransferTask>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask

    constructor(config?: FileTransferTask_ConstructProps) 
    _init(config?: FileTransferTask_ConstructProps): void
}

interface InputsChannel_ConstructProps extends Channel_ConstructProps {
}

/**
 * Signal callback interface for `inputs-modifiers`
 */
interface InputsChannel_InputsModifiersSignalCallback {
    (): void
}

interface InputsChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    readonly keyModifiers: number

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    parent: Channel

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

    connect(sigName: "inputs-modifiers", callback: InputsChannel_InputsModifiersSignalCallback): number
    on(sigName: "inputs-modifiers", callback: InputsChannel_InputsModifiersSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "inputs-modifiers", callback: InputsChannel_InputsModifiersSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "inputs-modifiers", callback: InputsChannel_InputsModifiersSignalCallback): NodeJS.EventEmitter
    emit(sigName: "inputs-modifiers", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel

    connect(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-modifiers", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: InputsChannel_ConstructProps) 
    _init(config?: InputsChannel_ConstructProps): void
}

interface MainChannel_ConstructProps extends Channel_ConstructProps {

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

/**
 * Signal callback interface for `main-agent-update`
 */
interface MainChannel_MainAgentUpdateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `main-clipboard`
 */
interface MainChannel_MainClipboardSignalCallback {
    (type: number, data: object | null, size: number): void
}

/**
 * Signal callback interface for `main-clipboard-grab`
 */
interface MainChannel_MainClipboardGrabSignalCallback {
    (types: object | null, ntypes: number): boolean
}

/**
 * Signal callback interface for `main-clipboard-release`
 */
interface MainChannel_MainClipboardReleaseSignalCallback {
    (): void
}

/**
 * Signal callback interface for `main-clipboard-request`
 */
interface MainChannel_MainClipboardRequestSignalCallback {
    (types: number): boolean
}

/**
 * Signal callback interface for `main-clipboard-selection`
 */
interface MainChannel_MainClipboardSelectionSignalCallback {
    (selection: number, type: number, data: object | null, size: number): void
}

/**
 * Signal callback interface for `main-clipboard-selection-grab`
 */
interface MainChannel_MainClipboardSelectionGrabSignalCallback {
    (selection: number, types: object | null, ntypes: number): boolean
}

/**
 * Signal callback interface for `main-clipboard-selection-release`
 */
interface MainChannel_MainClipboardSelectionReleaseSignalCallback {
    (selection: number): void
}

/**
 * Signal callback interface for `main-clipboard-selection-request`
 */
interface MainChannel_MainClipboardSelectionRequestSignalCallback {
    (selection: number, types: number): boolean
}

/**
 * Signal callback interface for `main-mouse-update`
 */
interface MainChannel_MainMouseUpdateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `migration-started`
 */
interface MainChannel_MigrationStartedSignalCallback {
    (session: GObject.Object): void
}

/**
 * Signal callback interface for `new-file-transfer`
 */
interface MainChannel_NewFileTransferSignalCallback {
    (task: GObject.Object): void
}

interface MainChannel {

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

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    parent: Channel

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    /**
     * Test capability of a remote agent.
     * @param cap an agent capability identifier
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

    connect(sigName: "main-agent-update", callback: MainChannel_MainAgentUpdateSignalCallback): number
    on(sigName: "main-agent-update", callback: MainChannel_MainAgentUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-agent-update", callback: MainChannel_MainAgentUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-agent-update", callback: MainChannel_MainAgentUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-agent-update", ...args: any[]): void
    connect(sigName: "main-clipboard", callback: MainChannel_MainClipboardSignalCallback): number
    on(sigName: "main-clipboard", callback: MainChannel_MainClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard", callback: MainChannel_MainClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard", callback: MainChannel_MainClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard", data: object | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-grab", callback: MainChannel_MainClipboardGrabSignalCallback): number
    on(sigName: "main-clipboard-grab", callback: MainChannel_MainClipboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-grab", callback: MainChannel_MainClipboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-grab", callback: MainChannel_MainClipboardGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-grab", ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-release", callback: MainChannel_MainClipboardReleaseSignalCallback): number
    on(sigName: "main-clipboard-release", callback: MainChannel_MainClipboardReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-release", callback: MainChannel_MainClipboardReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-release", callback: MainChannel_MainClipboardReleaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-release", ...args: any[]): void
    connect(sigName: "main-clipboard-request", callback: MainChannel_MainClipboardRequestSignalCallback): number
    on(sigName: "main-clipboard-request", callback: MainChannel_MainClipboardRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-request", callback: MainChannel_MainClipboardRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-request", callback: MainChannel_MainClipboardRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-request", ...args: any[]): void
    connect(sigName: "main-clipboard-selection", callback: MainChannel_MainClipboardSelectionSignalCallback): number
    on(sigName: "main-clipboard-selection", callback: MainChannel_MainClipboardSelectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection", callback: MainChannel_MainClipboardSelectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection", callback: MainChannel_MainClipboardSelectionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection", type: number, data: object | null, size: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-grab", callback: MainChannel_MainClipboardSelectionGrabSignalCallback): number
    on(sigName: "main-clipboard-selection-grab", callback: MainChannel_MainClipboardSelectionGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-grab", callback: MainChannel_MainClipboardSelectionGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-grab", callback: MainChannel_MainClipboardSelectionGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-grab", types: object | null, ntypes: number, ...args: any[]): void
    connect(sigName: "main-clipboard-selection-release", callback: MainChannel_MainClipboardSelectionReleaseSignalCallback): number
    on(sigName: "main-clipboard-selection-release", callback: MainChannel_MainClipboardSelectionReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-release", callback: MainChannel_MainClipboardSelectionReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-release", callback: MainChannel_MainClipboardSelectionReleaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-release", ...args: any[]): void
    connect(sigName: "main-clipboard-selection-request", callback: MainChannel_MainClipboardSelectionRequestSignalCallback): number
    on(sigName: "main-clipboard-selection-request", callback: MainChannel_MainClipboardSelectionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-request", callback: MainChannel_MainClipboardSelectionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-request", callback: MainChannel_MainClipboardSelectionRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-request", types: number, ...args: any[]): void
    connect(sigName: "main-mouse-update", callback: MainChannel_MainMouseUpdateSignalCallback): number
    on(sigName: "main-mouse-update", callback: MainChannel_MainMouseUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-mouse-update", callback: MainChannel_MainMouseUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-mouse-update", callback: MainChannel_MainMouseUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "main-mouse-update", ...args: any[]): void
    connect(sigName: "migration-started", callback: MainChannel_MigrationStartedSignalCallback): number
    on(sigName: "migration-started", callback: MainChannel_MigrationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "migration-started", callback: MainChannel_MigrationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "migration-started", callback: MainChannel_MigrationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "migration-started", ...args: any[]): void
    connect(sigName: "new-file-transfer", callback: MainChannel_NewFileTransferSignalCallback): number
    on(sigName: "new-file-transfer", callback: MainChannel_NewFileTransferSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-file-transfer", callback: MainChannel_NewFileTransferSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-file-transfer", callback: MainChannel_NewFileTransferSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-file-transfer", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel

    connect(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): number
    on(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::agent-caps-0", ...args: any[]): void
    connect(sigName: "notify::agent-connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::agent-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::agent-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::agent-connected", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::disable-animation", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-animation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-animation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-animation", ...args: any[]): void
    connect(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-display-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-display-align", ...args: any[]): void
    connect(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-display-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-display-position", ...args: any[]): void
    connect(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-font-smooth", ...args: any[]): void
    connect(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-wallpaper", ...args: any[]): void
    connect(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-clipboard", ...args: any[]): void
    connect(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mouse-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mouse-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mouse-mode", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: MainChannel_ConstructProps) 
    _init(config?: MainChannel_ConstructProps): void
}

interface PlaybackChannel_ConstructProps extends Channel_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    minLatency?: number | null
    mute?: boolean | null
    nchannels?: number | null
    volume?: object | null
}

/**
 * Signal callback interface for `playback-data`
 */
interface PlaybackChannel_PlaybackDataSignalCallback {
    (data: object | null, dataSize: number): void
}

/**
 * Signal callback interface for `playback-get-delay`
 */
interface PlaybackChannel_PlaybackGetDelaySignalCallback {
    (): void
}

/**
 * Signal callback interface for `playback-start`
 */
interface PlaybackChannel_PlaybackStartSignalCallback {
    (format: number, channels: number, rate: number): void
}

/**
 * Signal callback interface for `playback-stop`
 */
interface PlaybackChannel_PlaybackStopSignalCallback {
    (): void
}

interface PlaybackChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    minLatency: number
    mute: boolean
    nchannels: number
    volume: object

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    parent: Channel

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    /**
     * Adjust the multimedia time according to the delay.
     * @param delayMs the delay in ms
     */
    setDelay(delayMs: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "playback-data", callback: PlaybackChannel_PlaybackDataSignalCallback): number
    on(sigName: "playback-data", callback: PlaybackChannel_PlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-data", callback: PlaybackChannel_PlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-data", callback: PlaybackChannel_PlaybackDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-data", dataSize: number, ...args: any[]): void
    connect(sigName: "playback-get-delay", callback: PlaybackChannel_PlaybackGetDelaySignalCallback): number
    on(sigName: "playback-get-delay", callback: PlaybackChannel_PlaybackGetDelaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-get-delay", callback: PlaybackChannel_PlaybackGetDelaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-get-delay", callback: PlaybackChannel_PlaybackGetDelaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-get-delay", ...args: any[]): void
    connect(sigName: "playback-start", callback: PlaybackChannel_PlaybackStartSignalCallback): number
    on(sigName: "playback-start", callback: PlaybackChannel_PlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-start", callback: PlaybackChannel_PlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-start", callback: PlaybackChannel_PlaybackStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-start", channels: number, rate: number, ...args: any[]): void
    connect(sigName: "playback-stop", callback: PlaybackChannel_PlaybackStopSignalCallback): number
    on(sigName: "playback-stop", callback: PlaybackChannel_PlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-stop", callback: PlaybackChannel_PlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-stop", callback: PlaybackChannel_PlaybackStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "playback-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel

    connect(sigName: "notify::min-latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (...args: any[]) => void): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: PlaybackChannel_ConstructProps) 
    _init(config?: PlaybackChannel_ConstructProps): void
}

interface PortChannel_ConstructProps extends Channel_ConstructProps {
}

/**
 * Signal callback interface for `port-data`
 */
interface PortChannel_PortDataSignalCallback {
    (data: object | null, size: number): void
}

/**
 * Signal callback interface for `port-event`
 */
interface PortChannel_PortEventSignalCallback {
    (event: number): void
}

interface PortChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    readonly portName: string
    readonly portOpened: boolean

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    parent: Channel

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
     */
    writeFinish(result: Gio.AsyncResult): number

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "port-data", callback: PortChannel_PortDataSignalCallback): number
    on(sigName: "port-data", callback: PortChannel_PortDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-data", callback: PortChannel_PortDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-data", callback: PortChannel_PortDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "port-data", size: number, ...args: any[]): void
    connect(sigName: "port-event", callback: PortChannel_PortEventSignalCallback): number
    on(sigName: "port-event", callback: PortChannel_PortEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-event", callback: PortChannel_PortEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-event", callback: PortChannel_PortEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "port-event", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel

    connect(sigName: "notify::port-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-opened", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: PortChannel_ConstructProps) 
    _init(config?: PortChannel_ConstructProps): void
}

interface QmpPort_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    channel?: PortChannel | null
}

/**
 * Signal callback interface for `event`
 */
interface QmpPort_EventSignalCallback {
    (name: string, node: object | null): void
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
    queryStatusAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous status query.
     * @param result The async #GAsyncResult result
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

    connect(sigName: "event", callback: QmpPort_EventSignalCallback): number
    on(sigName: "event", callback: QmpPort_EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: QmpPort_EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: QmpPort_EventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "event", node: object | null, ...args: any[]): void

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
class QmpPort extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    static name: string
    static $gtype: GObject.GType<QmpPort>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort

    constructor(config?: QmpPort_ConstructProps) 
    _init(config?: QmpPort_ConstructProps): void
    /**
     * Associate a QMP port helper to the given port channel.  If there is
     * already a helper associated with the channel, it is simply returned.
     * @param channel the QMP port channel
     */
    static get(channel: PortChannel): QmpPort
}

interface RecordChannel_ConstructProps extends Channel_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    mute?: boolean | null
    nchannels?: number | null
    volume?: object | null
}

/**
 * Signal callback interface for `record-start`
 */
interface RecordChannel_RecordStartSignalCallback {
    (format: number, channels: number, rate: number): void
}

/**
 * Signal callback interface for `record-stop`
 */
interface RecordChannel_RecordStopSignalCallback {
    (): void
}

interface RecordChannel {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    mute: boolean
    nchannels: number
    volume: object

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    parent: Channel

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    /**
     * Send recorded PCM data to the guest.
     * @param data PCM data
     * @param bytes size of `data`
     * @param time stream timestamp
     */
    sendData(data: object | null, bytes: number, time: number): void

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "record-start", callback: RecordChannel_RecordStartSignalCallback): number
    on(sigName: "record-start", callback: RecordChannel_RecordStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-start", callback: RecordChannel_RecordStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-start", callback: RecordChannel_RecordStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "record-start", channels: number, rate: number, ...args: any[]): void
    connect(sigName: "record-stop", callback: RecordChannel_RecordStopSignalCallback): number
    on(sigName: "record-stop", callback: RecordChannel_RecordStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-stop", callback: RecordChannel_RecordStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-stop", callback: RecordChannel_RecordStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "record-stop", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel

    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::nchannels", callback: (...args: any[]) => void): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nchannels", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: RecordChannel_ConstructProps) 
    _init(config?: RecordChannel_ConstructProps): void
}

interface Session_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `channel-destroy`
 */
interface Session_ChannelDestroySignalCallback {
    (channel: Channel): void
}

/**
 * Signal callback interface for `channel-new`
 */
interface Session_ChannelNewSignalCallback {
    (channel: Channel): void
}

/**
 * Signal callback interface for `disconnected`
 */
interface Session_DisconnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `mm-time-reset`
 */
interface Session_MmTimeResetSignalCallback {
    (): void
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
    caFile: string
    /**
     * Images cache size. If 0, don't set.
     */
    cacheSize: number
    certSubject: string
    ciphers: string
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
    host: string
    inhibitKeyboardGrab: boolean
    /**
     * #SpiceSessionMigration bit field indicating if a migration is in
     * progress
     */
    readonly migrationState: SessionMigration
    /**
     * Spice server name.
     */
    readonly name: string
    /**
     * TLS password to use
     */
    password: string
    /**
     * Port to connect to for unencrypted sessions
     */
    port: string
    /**
     * Version of the SPICE protocol to use
     */
    protocol: number
    /**
     * URI to the proxy server to use when doing network connection.
     * of the form <![CDATA[ [protocol://]<host>[:port] ]]>
     */
    proxy: string
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
    sharedDir: string
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
    smartcardDb: string
    /**
     * Port to connect to for TLS sessions
     */
    tlsPort: string
    /**
     * Path of the Unix socket to connect to
     */
    unixPath: string
    /**
     * URI of the SPICE host to connect to. The URI is of the form
     * spice://hostname?port=XXX or spice://hostname?tls_port=XXX
     */
    uri: string
    /**
     * Username to use
     */
    username: string
    /**
     * Spice server uuid.
     */
    readonly uuid: object
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
     */
    // TODO fix conflict: connect(): boolean
    /**
     * Disconnect the `session,` and destroy all channels.
     */
    disconnect(): void
    /**
     * Get the list of current channels associated with this `session`.
     */
    getChannels(): Channel[]
    /**
     * Gets the `session` proxy uri.
     */
    getProxyUri(): URI
    /**
     * Checks whether the `session` is read-only.
     */
    getReadOnly(): boolean
    /**
     * See if there is a `type` channel in the channels associated with this
     * `session`.
     * @param type a #SpiceChannel:channel-type
     */
    hasChannelType(type: number): boolean
    /**
     * During seamless migration, channels may be created to establish a
     * connection with the target, but they are temporary and should only
     * handle migration steps. In order to avoid other interactions with
     * the client, channels should check this value.
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
     */
    openFd(fd: number): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.Session

    connect(sigName: "channel-destroy", callback: Session_ChannelDestroySignalCallback): number
    on(sigName: "channel-destroy", callback: Session_ChannelDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-destroy", callback: Session_ChannelDestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-destroy", callback: Session_ChannelDestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-destroy", ...args: any[]): void
    connect(sigName: "channel-new", callback: Session_ChannelNewSignalCallback): number
    on(sigName: "channel-new", callback: Session_ChannelNewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-new", callback: Session_ChannelNewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-new", callback: Session_ChannelNewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "channel-new", ...args: any[]): void
    connect(sigName: "disconnected", callback: Session_DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Session_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Session_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Session_DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "mm-time-reset", callback: Session_MmTimeResetSignalCallback): number
    on(sigName: "mm-time-reset", callback: Session_MmTimeResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mm-time-reset", callback: Session_MmTimeResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mm-time-reset", callback: Session_MmTimeResetSignalCallback): NodeJS.EventEmitter
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
class Session extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.Session

    constructor(config?: Session_ConstructProps) 
    /**
     * Creates a new Spice session.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new Spice session.
     * @constructor 
     */
    static new(): Session
    _init(config?: Session_ConstructProps): void
}

interface SmartcardChannel_ConstructProps extends Channel_ConstructProps {
}

interface SmartcardChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

    parent: Channel

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannel

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: SmartcardChannel_ConstructProps) 
    _init(config?: SmartcardChannel_ConstructProps): void
}

interface SmartcardManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `card-inserted`
 */
interface SmartcardManager_CardInsertedSignalCallback {
    (vreader: any): void
}

/**
 * Signal callback interface for `card-removed`
 */
interface SmartcardManager_CardRemovedSignalCallback {
    (vreader: any): void
}

/**
 * Signal callback interface for `reader-added`
 */
interface SmartcardManager_ReaderAddedSignalCallback {
    (vreader: any): void
}

/**
 * Signal callback interface for `reader-removed`
 */
interface SmartcardManager_ReaderRemovedSignalCallback {
    (vreader: any): void
}

interface SmartcardManager {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    parent: GObject.Object

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    /**
     * Gets the list of smartcard readers that are currently available, they
     * can be either software (emulated) readers, or hardware ones.
     */
    getReaders(): SmartcardReader[]
    /**
     * Simulates the insertion of a smartcard in the guest. Valid certificates
     * must have been set in #SpiceSession:smartcard-certificates for software
     * smartcard support to work. At the moment, only one software smartcard
     * reader is supported, that's why there is no parameter to indicate which
     * reader to insert the card in.
     */
    insertCard(): boolean
    /**
     * Simulates the removal of a smartcard in the guest. At the moment, only
     * one software smartcard reader is supported, that's why there is no
     * parameter to indicate which reader to insert the card in.
     */
    removeCard(): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    connect(sigName: "card-inserted", callback: SmartcardManager_CardInsertedSignalCallback): number
    on(sigName: "card-inserted", callback: SmartcardManager_CardInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-inserted", callback: SmartcardManager_CardInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-inserted", callback: SmartcardManager_CardInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-inserted", ...args: any[]): void
    connect(sigName: "card-removed", callback: SmartcardManager_CardRemovedSignalCallback): number
    on(sigName: "card-removed", callback: SmartcardManager_CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: SmartcardManager_CardRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: SmartcardManager_CardRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "card-removed", ...args: any[]): void
    connect(sigName: "reader-added", callback: SmartcardManager_ReaderAddedSignalCallback): number
    on(sigName: "reader-added", callback: SmartcardManager_ReaderAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-added", callback: SmartcardManager_ReaderAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-added", callback: SmartcardManager_ReaderAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reader-added", ...args: any[]): void
    connect(sigName: "reader-removed", callback: SmartcardManager_ReaderRemovedSignalCallback): number
    on(sigName: "reader-removed", callback: SmartcardManager_ReaderRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-removed", callback: SmartcardManager_ReaderRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-removed", callback: SmartcardManager_ReaderRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reader-removed", ...args: any[]): void

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

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
class SmartcardManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    static name: string
    static $gtype: GObject.GType<SmartcardManager>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager

    constructor(config?: SmartcardManager_ConstructProps) 
    _init(config?: SmartcardManager_ConstructProps): void
    /**
     * #SpiceSmartcardManager is a singleton, use this function to get a pointer
     * to it. A new SpiceSmartcardManager instance will be created the first
     * time this function is called
     */
    static get(): SmartcardManager
}

interface URI_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    hostname?: string | null
    password?: string | null
    port?: number | null
    scheme?: string | null
    user?: string | null
}

interface URI {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    hostname: string
    password: string
    port: number
    scheme: string
    user: string

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.URI

    getHostname(): string
    getPassword(): string
    getPort(): number
    getScheme(): string
    getUser(): string
    setHostname(hostname: string): void
    setPassword(password: string): void
    setPort(port: number): void
    setScheme(scheme: string): void
    setUser(user: string): void
    toString(): string

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
class URI extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.URI

    static name: string
    static $gtype: GObject.GType<URI>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.URI

    constructor(config?: URI_ConstructProps) 
    _init(config?: URI_ConstructProps): void
}

interface UsbDeviceManager_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `auto-connect-failed`
 */
interface UsbDeviceManager_AutoConnectFailedSignalCallback {
    (device: UsbDevice, error: GLib.Error): void
}

/**
 * Signal callback interface for `device-added`
 */
interface UsbDeviceManager_DeviceAddedSignalCallback {
    (device: UsbDevice): void
}

/**
 * Signal callback interface for `device-error`
 */
interface UsbDeviceManager_DeviceErrorSignalCallback {
    (device: UsbDevice, error: GLib.Error): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface UsbDeviceManager_DeviceRemovedSignalCallback {
    (device: UsbDevice): void
}

interface UsbDeviceManager extends Gio.Initable {

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
    autoConnectFilter: string
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
    redirectOnConnect: string
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
     */
    disconnectDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Finds devices associated with the `manager`
     */
    getDevices(): UsbDevice[]
    /**
     * Finds devices associated with the `manager` complying with the `filter`
     * @param filter filter string for selecting which devices to return,      see #SpiceUsbDeviceManager:auto-connect-filter for the filter      string format
     */
    getDevicesWithFilter(filter: string | null): UsbDevice[]
    /**
     * Finds if the `device` is connected.
     * @param device a #SpiceUsbDevice
     */
    isDeviceConnected(device: UsbDevice): boolean
    /**
     * Checks whether a device is being redirected
     */
    isRedirecting(): boolean

    // Own signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    connect(sigName: "auto-connect-failed", callback: UsbDeviceManager_AutoConnectFailedSignalCallback): number
    on(sigName: "auto-connect-failed", callback: UsbDeviceManager_AutoConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "auto-connect-failed", callback: UsbDeviceManager_AutoConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "auto-connect-failed", callback: UsbDeviceManager_AutoConnectFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "auto-connect-failed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-added", callback: UsbDeviceManager_DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: UsbDeviceManager_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: UsbDeviceManager_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: UsbDeviceManager_DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-error", callback: UsbDeviceManager_DeviceErrorSignalCallback): number
    on(sigName: "device-error", callback: UsbDeviceManager_DeviceErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-error", callback: UsbDeviceManager_DeviceErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-error", callback: UsbDeviceManager_DeviceErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "device-removed", callback: UsbDeviceManager_DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: UsbDeviceManager_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: UsbDeviceManager_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: UsbDeviceManager_DeviceRemovedSignalCallback): NodeJS.EventEmitter
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
class UsbDeviceManager extends GObject.Object {

    // Own properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    static name: string
    static $gtype: GObject.GType<UsbDeviceManager>

    // Constructors of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager

    constructor(config?: UsbDeviceManager_ConstructProps) 
    _init(config?: UsbDeviceManager_ConstructProps): void
    /**
     * Gets the #SpiceUsbDeviceManager associated with the passed in #SpiceSession.
     * A new #SpiceUsbDeviceManager instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session #SpiceSession for which to get the #SpiceUsbDeviceManager
     */
    static get(session: Session): UsbDeviceManager
}

interface UsbredirChannel_ConstructProps extends Channel_ConstructProps {
}

interface UsbredirChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

    parent: Channel

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannel

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: UsbredirChannel_ConstructProps) 
    _init(config?: UsbredirChannel_ConstructProps): void
}

interface WebdavChannel_ConstructProps extends PortChannel_ConstructProps {
}

interface WebdavChannel {

    // Own fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    parent: PortChannel

    // Class property signals of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannel

    connect(sigName: "notify::port-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-name", ...args: any[]): void
    connect(sigName: "notify::port-opened", callback: (...args: any[]) => void): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port-opened", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: WebdavChannel_ConstructProps) 
    _init(config?: WebdavChannel_ConstructProps): void
}

interface AudioClass {

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
    parentClass: ChannelClass
    cursorSet: (channel: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba: object | null) => void
    cursorMove: (channel: CursorChannel, x: number, y: number) => void
    cursorHide: (channel: CursorChannel) => void
    cursorReset: (channel: CursorChannel) => void
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
    data: object
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
    parentClass: ChannelClass
    displayPrimaryCreate: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: object) => void
    displayPrimaryDestroy: (channel: Channel) => void
    displayInvalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    displayMark: (channel: Channel, mark: boolean) => void
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
    format: object
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
    parentClass: ChannelClass
    inputsModifiers: (channel: Channel) => void
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
    parentClass: ChannelClass
    mouseUpdate: (channel: Channel) => void
    agentUpdate: (channel: Channel) => void
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
    parentClass: ChannelClass
    playbackStart: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    playbackData: (channel: PlaybackChannel, data: object | null, size: number) => void
    playbackStop: (channel: PlaybackChannel) => void
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
    parentClass: ChannelClass
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
    status: string

    // Owm methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus

    /**
     * References a `status`.
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
    parentClass: ChannelClass
    recordStart: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    recordData: (channel: RecordChannel, data: object | null, size: number) => void
    recordStop: (channel: RecordChannel) => void
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
    parentClass: GObject.ObjectClass
    channelNew: (session: Session, channel: Channel) => void
    channelDestroy: (session: Session, channel: Channel) => void
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
    parentClass: ChannelClass
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
     */
    insertCard(): boolean
    /**
     * Tests if `reader` is a software (emulated) smartcard reader.
     */
    isSoftware(): boolean
    /**
     * Simulates removal of a smartcard from the software smartcard reader
     * `reader`. If `reader` is not a software smartcard reader, FALSE will be
     * returned.
     */
    removeCard(): boolean
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
     */
    getDescription(format: string | null): string
    /**
     * Finds the %libusb_device associated with the `device`.
     */
    getLibusbDevice(): object | null
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
    parentClass: ChannelClass
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
    parentClass: PortChannelClass
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

}
export default SpiceClientGLib;