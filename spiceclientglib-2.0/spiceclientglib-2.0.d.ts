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
    class ClientError extends GLib.Error {
        // Own fields of SpiceClientGLib-2.0.ClientError

        /**
         * generic error code
         */
        FAILED: number;
        /**
         * device redirection rejected by host
         */
        USB_DEVICE_REJECTED: number;
        /**
         * device disconnected (fatal IO error)
         */
        USB_DEVICE_LOST: number;
        /**
         * password is required
         */
        AUTH_NEEDS_PASSWORD: number;
        /**
         * username is required
         */
        AUTH_NEEDS_USERNAME: number;
        /**
         * password and username are required
         */
        AUTH_NEEDS_PASSWORD_AND_USERNAME: number;
        /**
         * USB service error
         */
        USB_SERVICE: number;

        // Constructors of SpiceClientGLib-2.0.ClientError

        constructor(options: { message: string; code: number });
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
     * Spice-Gtk major version component (e.g. 1 if version is 1.2.3)
     */
    const GTK_MAJOR_VERSION: number;
    /**
     * Spice-Gtk micro version component (e.g. 3 if version is 1.2.3)
     */
    const GTK_MICRO_VERSION: number;
    /**
     * Spice-Gtk minor version component (e.g. 2 if version is 1.2.3)
     */
    const GTK_MINOR_VERSION: number;
    const WEBDAV_CLIPBOARD_FOLDER_PATH: string;
    /**
     * Gets a #GQuark representing the string "spice-client-error-quark"
     * @returns the #GQuark representing the string.
     */
    function client_error_quark(): GLib.Quark;
    /**
     * Retrieves the GL scanout if available
     * @param channel a #SpiceDisplayChannel
     * @returns the current GL scanout, or %NULL if none or not valid
     */
    function display_get_gl_scanout(channel: DisplayChannel): GlScanout;
    /**
     * After a SpiceDisplayChannel::gl-draw is emitted, the client should
     * draw the current display with the current GL scanout, and must
     * release the GL resource with a call to spice_display_gl_draw_done()
     * (failing to do so for each gl-draw may result in a frozen display).
     * @param channel a #SpiceDisplayChannel
     */
    function display_gl_draw_done(channel: DisplayChannel): void;
    /**
     * Gets commandline options.
     *
     * Bindings for other languages are available since 0.32
     * @returns a #GOptionGroup for the commandline arguments specific to Spice.  You have to call spice_set_session_option() after to set the options on a #SpiceSession.
     */
    function get_option_group(): GLib.OptionGroup;
    /**
     * Press a mouse button.
     * @param channel a #SpiceInputsChannel
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void;
    /**
     * Release a button.
     * @param channel a #SpiceInputsChannel
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void;
    /**
     * Press a key.
     * @param channel a #SpiceInputsChannel
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    function inputs_key_press(channel: InputsChannel, scancode: number): void;
    /**
     * Press and release a key event atomically (in the same message).
     * @param channel a #SpiceInputsChannel
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void;
    /**
     * Release a key.
     * @param channel a #SpiceInputsChannel
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     */
    function inputs_key_release(channel: InputsChannel, scancode: number): void;
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
     * @param channel a #SpiceInputsChannel
     * @param dx delta X mouse coordinates
     * @param dy delta Y mouse coordinates
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void;
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
     * @param channel a #SpiceInputsChannel
     * @param x X mouse coordinates
     * @param y Y mouse coordinates
     * @param display display channel id
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     */
    function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void;
    /**
     * Set the keyboard locks on the guest (Caps, Num, Scroll..)
     * @param channel a #SpiceInputsChannel
     * @param locks #SpiceInputsLock modifiers flags
     */
    function inputs_set_key_locks(channel: InputsChannel, locks: number): void;
    /**
     * Test capability of a remote agent.
     * @param channel a #SpiceMainChannel
     * @param cap an agent capability identifier
     * @returns %TRUE if @cap (channel kind capability) is available.
     */
    function main_agent_test_capability(channel: MainChannel, cap: number): boolean;
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param channel a #SpiceMainChannel
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     */
    function main_clipboard_grab(channel: MainChannel, types: number[]): void;
    /**
     * Send the clipboard data to the guest.
     * @param channel a #SpiceMainChannel
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     */
    function main_clipboard_notify(channel: MainChannel, type: number, data: Uint8Array): void;
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param channel a #SpiceMainChannel
     */
    function main_clipboard_release(channel: MainChannel): void;
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the #SpiceMainChannel::main-clipboard signal.
     * @param channel a #SpiceMainChannel
     * @param type a #VD_AGENT_CLIPBOARD type
     */
    function main_clipboard_request(channel: MainChannel, type: number): void;
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param channel a #SpiceMainChannel
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     */
    function main_clipboard_selection_grab(channel: MainChannel, selection: number, types: number[]): void;
    /**
     * Send the clipboard data to the guest.
     * @param channel a #SpiceMainChannel
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     */
    function main_clipboard_selection_notify(
        channel: MainChannel,
        selection: number,
        type: number,
        data: Uint8Array,
    ): void;
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param channel a #SpiceMainChannel
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     */
    function main_clipboard_selection_release(channel: MainChannel, selection: number): void;
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the #SpiceMainChannel::main-clipboard-selection signal.
     * @param channel a #SpiceMainChannel
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     */
    function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void;
    /**
     * See: spice_main_channel_file_copy_async()
     * @param channel a #SpiceMainChannel
     * @param sources a %NULL-terminated array of #GFile objects to be transferred
     * @param flags set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param progress_callback function to callback with     progress information, or %NULL if progress information is not needed
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    function main_file_copy_async(
        channel: MainChannel,
        sources: Gio.File[],
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        callback?: Gio.AsyncReadyCallback<MainChannel> | null,
    ): void;
    /**
     * Finishes copying the file started with
     * spice_main_file_copy_async().
     * @param channel a #SpiceMainChannel
     * @param result a #GAsyncResult.
     * @returns a %TRUE on success, %FALSE on error.
     */
    function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean;
    /**
     * Request a mouse mode to the server. The server may not be able to
     * change the mouse mode, but spice-gtk will try to request it
     * when possible.
     * @param channel a %SpiceMainChannel
     * @param mode a SPICE_MOUSE_MODE
     */
    function main_request_mouse_mode(channel: MainChannel, mode: number): void;
    /**
     * Send monitors configuration previously set with
     * spice_main_set_display() and spice_main_set_display_enabled()
     * @param channel a #SpiceMainChannel
     * @returns %TRUE on success.
     */
    function main_send_monitor_config(channel: MainChannel): boolean;
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
    function main_set_display(
        channel: MainChannel,
        id: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): void;
    /**
     * When sending monitor configuration to agent guest, don't set
     * display `id,` which the agent translates to disabling the display
     * id. Note: this will take effect next time the monitor
     * configuration is sent.
     * @param channel a #SpiceMainChannel
     * @param id display ID (if -1: set all displays)
     * @param enabled wether display @id is enabled
     */
    function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void;
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
    function main_update_display(
        channel: MainChannel,
        id: number,
        x: number,
        y: number,
        width: number,
        height: number,
        update: boolean,
    ): void;
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
     * @param enabled wether display @id is enabled
     * @param update if %TRUE, update guest display state after 1sec.
     */
    function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void;
    /**
     * Send an event to the port.
     *
     * Note: The values SPICE_PORT_EVENT_CLOSED and
     * SPICE_PORT_EVENT_OPENED are managed by the channel connection
     * state.
     * @param port a #SpicePortChannel
     * @param event a SPICE_PORT_EVENT value
     */
    function port_event(port: PortChannel, event: number): void;
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
    function port_write_async(
        port: PortChannel,
        buffer: Uint8Array,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PortChannel> | null,
    ): void;
    /**
     * Finishes a port write operation.
     * @param port a #SpicePortChannel
     * @param result a #GAsyncResult
     * @returns a #gssize containing the number of bytes written to the stream.
     */
    function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number;
    /**
     * Send recorded PCM data to the guest.
     * @param channel a #SpiceRecordChannel
     * @param data PCM data
     * @param bytes size of @data
     * @param time stream timestamp
     */
    function record_send_data(channel: RecordChannel, data: any | null, bytes: number, time: number): void;
    /**
     * Set various properties on `session,` according to the commandline
     * arguments given to spice_get_option_group() option group.
     * @param session a #SpiceSession to set option upon
     */
    function set_session_option(session: Session): void;
    function util_get_debug(): boolean;
    /**
     * Gets the version string
     * @returns Spice-GTK version as a const string.
     */
    function util_get_version_string(): string;
    /**
     * Enable or disable Spice-GTK debugging messages.
     * @param enabled %TRUE or %FALSE
     */
    function util_set_debug(enabled: boolean): void;
    /**
     * Creates a string representation of `uuid,` of the form
     * "06e023d5-86d8-420e-8103-383e4566087a"
     * @param uuid UUID byte array
     * @returns A string that should be freed with g_free().
     */
    function uuid_to_string(uuid: Uint8Array): string;
    interface msg_handler {
        (channel: Channel, _in: MsgIn): void;
    }
    type VReader = object | null;
    /**
     * Constants used to synchronize modifiers between a client and a guest.
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
    module Audio {
        // Constructor properties interface
    }

    /**
     * The #SpiceAudio struct is opaque and should not be accessed directly.
     */
    abstract class Audio extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.Audio

        main_context: GLib.MainContext;
        mainContext: GLib.MainContext;
        /**
         * #SpiceSession this #SpiceAudio is associated with
         */
        session: Session;

        // Constructors of SpiceClientGLib-2.0.Audio

        static ['new'](session: Session, context?: GLib.MainContext | null, name?: string | null): Audio;

        // Owm methods of SpiceClientGLib-2.0.Audio

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
        static get(session: Session, context?: GLib.MainContext | null): Audio;
    }

    module Channel {
        // Signal callback interfaces

        interface ChannelEvent {
            (event: ChannelEvent): void;
        }

        interface OpenFd {
            (with_tls: number): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceChannel struct is opaque and should not be accessed directly.
     */
    class Channel extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.Channel

        channel_id: number;
        channelId: number;
        channel_type: number;
        channelType: number;
        /**
         * Get the underlying #GSocket. Note that you should not read or
         * write any data to it directly since this will likely corrupt
         * the channel stream.  This property is mainly useful to get some
         * connections details.
         */
        readonly socket: Gio.Socket;
        spice_session: Session;
        spiceSession: Session;
        readonly total_read_bytes: number;
        readonly totalReadBytes: number;

        // Constructors of SpiceClientGLib-2.0.Channel

        static ['new'](s: Session, type: number, id: number): Channel;

        // Owm methods of SpiceClientGLib-2.0.Channel

        /**
         * Convert a channel-type property value to a string.
         * @param str a string representation of the channel-type property
         */
        static string_to_type(str: string): number;
        /**
         * Convert a channel-type property value to a string.
         * @param type a channel-type property value
         */
        static type_to_string(type: number): string;

        // Owm methods of SpiceClientGLib-2.0.Channel

        /**
         * Connect the channel, using #SpiceSession connection informations
         * @returns %TRUE on success.
         */
        connect(): boolean;
        /**
         * Disconnect and unref the `channel`.
         */
        destroy(): void;
        /**
         * Close the socket and reset connection specific data. Finally, emit
         * `reason` #SpiceChannel::channel-event on main context if not
         * #SPICE_CHANNEL_NONE.
         * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
         */
        disconnect(reason: ChannelEvent): void;
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
        flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes flushing a channel.
         * @param result a #GAsyncResult
         * @returns %TRUE if flush operation succeeded, %FALSE otherwise.
         */
        flush_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieves the #GError currently set on channel, if the #SpiceChannel
         * is in error state and can provide additional error details.
         * @returns the pointer to the error, or %NULL
         */
        get_error(): GLib.Error;
        /**
         * Connect the channel using `fd` socket.
         *
         * If `fd` is -1, a valid fd will be requested later via the
         * SpiceChannel::open-fd signal.
         * @param fd a file descriptor (socket) or -1. request mechanism
         * @returns %TRUE on success.
         */
        open_fd(fd: number): boolean;
        /**
         * Enable specific channel-kind capability.
         * @param cap a capability
         */
        set_capability(cap: number): void;
        /**
         * Test availability of remote "channel kind capability".
         * @param cap a capability
         * @returns %TRUE if @cap (channel kind capability) is available.
         */
        test_capability(cap: number): boolean;
        /**
         * Test availability of remote "common channel capability".
         * @param cap a capability
         * @returns %TRUE if @cap (common channel capability) is available.
         */
        test_common_capability(cap: number): boolean;
    }

    module CursorChannel {
        // Signal callback interfaces

        interface CursorHide {
            (): void;
        }

        interface CursorMove {
            (x: number, y: number): void;
        }

        interface CursorReset {
            (): void;
        }

        interface CursorSet {
            (width: number, height: number, hot_x: number, hot_y: number, rgba?: any | null): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceCursorChannel struct is opaque and should not be accessed directly.
     */
    class CursorChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.CursorChannel

        /**
         * The last #SpiceCursorShape received.
         */
        readonly cursor: CursorShape;
    }

    module DisplayChannel {
        // Signal callback interfaces

        interface DisplayInvalidate {
            (x: number, y: number, width: number, height: number): void;
        }

        interface DisplayMark {
            (mark: number): void;
        }

        interface DisplayPrimaryCreate {
            (format: number, width: number, height: number, stride: number, shmid: number, imgdata?: any | null): void;
        }

        interface DisplayPrimaryDestroy {
            (): void;
        }

        interface GlDraw {
            (x: number, y: number, width: number, height: number): void;
        }

        interface GstVideoOverlay {
            (pipeline: Gst.Pipeline): boolean;
        }

        interface StreamingMode {
            (streaming_mode: boolean): any | null;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceDisplayChannel struct is opaque and should not be accessed directly.
     */
    class DisplayChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.DisplayChannel

        /**
         * The last #SpiceGlScanout received.
         */
        readonly gl_scanout: GlScanout;
        /**
         * The last #SpiceGlScanout received.
         */
        readonly glScanout: GlScanout;
        readonly height: number;
        /**
         * Current monitors configuration.
         */
        readonly monitors: DisplayMonitorConfig[];
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         */
        readonly monitors_max: number;
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         */
        readonly monitorsMax: number;
        readonly width: number;

        // Owm methods of SpiceClientGLib-2.0.DisplayChannel

        /**
         * Tells the spice server to change the preferred image compression
         * for the `channel`.
         * @param compression a #SpiceImageCompression
         */
        display_change_preferred_compression(compression: number): void;
        /**
         * Tells the spice server to change the preferred video codec type for
         * streaming in `channel`. Application can set only one preferred video codec per
         * display channel.
         * @param codec_type a #SpiceVideoCodecType
         */
        display_change_preferred_video_codec_type(codec_type: number): void;
        /**
         * Tells the spice server to change the preferred image compression
         * for the `channel`.
         * @param compression a #SpiceImageCompression
         */
        display_channel_change_preferred_compression(compression: number): void;
        /**
         * Tells the spice server to change the preferred video codec type for
         * streaming in `channel`. Application can set only one preferred video codec per
         * display channel.
         * @param codec_type a #SpiceVideoCodecType
         */
        display_channel_change_preferred_video_codec_type(codec_type: number): void;
        /**
         * Tells the spice server the ordered preferred video codec types to
         * use for streaming in `channel`.
         * @param codecs an array of @ncodecs #SpiceVideoCodecType types
         * @returns %TRUE if the preferred codec list was successfully changed, and %FALSE otherwise.
         */
        display_channel_change_preferred_video_codec_types(codecs: number[]): boolean;
        /**
         * Retrieve primary display surface `surface_id`.
         * @param surface_id a surface id
         * @param primary a #SpiceDisplayPrimary
         * @returns %TRUE if the primary surface was found and its details collected in @primary.
         */
        display_channel_get_primary(surface_id: number, primary: DisplayPrimary): boolean;
        /**
         * Retrieve primary display surface `surface_id`.
         * @param surface_id a surface id
         * @param primary a #SpiceDisplayPrimary
         * @returns %TRUE if the primary surface was found and its details collected in @primary.
         */
        display_get_primary(surface_id: number, primary: DisplayPrimary): boolean;
        /**
         * Retrieves the GL scanout if available
         * @returns the current GL scanout, or %NULL if none or not valid
         */
        get_gl_scanout(): GlScanout;
        /**
         * After a SpiceDisplayChannel::gl-draw is emitted, the client should
         * draw the current display with the current GL scanout, and must
         * release the GL resource with a call to spice_display_gl_draw_done()
         * (failing to do so for each gl-draw may result in a frozen display).
         */
        gl_draw_done(): void;
    }

    module FileTransferTask {
        // Signal callback interfaces

        interface Finished {
            (object: GLib.Error): void;
        }

        // Constructor properties interface
    }

    class FileTransferTask extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.FileTransferTask

        cancellable: Gio.Cancellable;
        channel: MainChannel;
        file: Gio.File;
        id: number;
        readonly progress: number;
        readonly total_bytes: number;
        readonly totalBytes: number;
        readonly transferred_bytes: number;
        readonly transferredBytes: number;

        // Owm methods of SpiceClientGLib-2.0.FileTransferTask

        cancel(): void;
        get_filename(): string;
        get_progress(): number;
        get_total_bytes(): number;
        get_transferred_bytes(): number;
    }

    module InputsChannel {
        // Signal callback interfaces

        interface InputsModifiers {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceInputsChannel struct is opaque and should not be accessed directly.
     */
    class InputsChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.InputsChannel

        readonly key_modifiers: number;
        readonly keyModifiers: number;

        // Owm methods of SpiceClientGLib-2.0.InputsChannel

        /**
         * Press a mouse button.
         * @param button a SPICE_MOUSE_BUTTON
         * @param button_state SPICE_MOUSE_BUTTON_MASK flags
         */
        button_press(button: number, button_state: number): void;
        /**
         * Release a button.
         * @param button a SPICE_MOUSE_BUTTON
         * @param button_state SPICE_MOUSE_BUTTON_MASK flags
         */
        button_release(button: number, button_state: number): void;
        /**
         * Press a key.
         * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
         */
        key_press(scancode: number): void;
        /**
         * Press and release a key event atomically (in the same message).
         * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
         */
        key_press_and_release(scancode: number): void;
        /**
         * Release a key.
         * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
         */
        key_release(scancode: number): void;
        /**
         * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
         * @param dx delta X mouse coordinates
         * @param dy delta Y mouse coordinates
         * @param button_state SPICE_MOUSE_BUTTON_MASK flags
         */
        motion(dx: number, dy: number, button_state: number): void;
        /**
         * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
         * @param x X mouse coordinates
         * @param y Y mouse coordinates
         * @param display display channel id
         * @param button_state SPICE_MOUSE_BUTTON_MASK flags
         */
        position(x: number, y: number, display: number, button_state: number): void;
        /**
         * Set the keyboard locks on the guest (Caps, Num, Scroll..)
         * @param locks #SpiceInputsLock modifiers flags
         */
        set_key_locks(locks: number): void;
    }

    module MainChannel {
        // Signal callback interfaces

        interface MainAgentUpdate {
            (): void;
        }

        interface MainClipboard {
            (type: number, data: Uint8Array): void;
        }

        interface MainClipboardGrab {
            (types: number[]): boolean;
        }

        interface MainClipboardRelease {
            (): void;
        }

        interface MainClipboardRequest {
            (types: number): boolean;
        }

        interface MainClipboardSelection {
            (selection: number, type: number, data: Uint8Array): void;
        }

        interface MainClipboardSelectionGrab {
            (selection: number, types: number[]): boolean;
        }

        interface MainClipboardSelectionRelease {
            (selection: number): void;
        }

        interface MainClipboardSelectionRequest {
            (selection: number, types: number): boolean;
        }

        interface MainMouseUpdate {
            (): void;
        }

        interface MigrationStarted {
            (session: GObject.Object): void;
        }

        interface NewFileTransfer {
            (task: GObject.Object): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceMainChannel struct is opaque and should not be accessed directly.
     */
    class MainChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.MainChannel

        readonly agent_caps_0: number;
        readonly agentCaps0: number;
        readonly agent_connected: boolean;
        readonly agentConnected: boolean;
        color_depth: number;
        colorDepth: number;
        disable_animation: boolean;
        disableAnimation: boolean;
        /**
         * Disable automatic horizontal display position alignment.
         */
        disable_display_align: boolean;
        /**
         * Disable automatic horizontal display position alignment.
         */
        disableDisplayAlign: boolean;
        disable_display_position: boolean;
        disableDisplayPosition: boolean;
        disable_font_smooth: boolean;
        disableFontSmooth: boolean;
        disable_wallpaper: boolean;
        disableWallpaper: boolean;
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        max_clipboard: number;
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        maxClipboard: number;
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        readonly mouse_mode: number;
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        readonly mouseMode: number;

        // Owm methods of SpiceClientGLib-2.0.MainChannel

        /**
         * Test capability of a remote agent.
         * @param cap an agent capability identifier
         * @returns %TRUE if @cap (channel kind capability) is available.
         */
        agent_test_capability(cap: number): boolean;
        /**
         * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
         */
        clipboard_selection_grab(selection: number, types: number[]): void;
        /**
         * Send the clipboard data to the guest.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param type a #VD_AGENT_CLIPBOARD type
         * @param data clipboard data
         */
        clipboard_selection_notify(selection: number, type: number, data: Uint8Array): void;
        /**
         * Release the clipboard (for example, when the client loses the
         * clipboard grab): Inform the guest no clipboard data is available.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         */
        clipboard_selection_release(selection: number): void;
        /**
         * Request clipboard data of `type` from the guest. The reply is sent
         * through the #SpiceMainChannel::main-clipboard-selection signal.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param type a #VD_AGENT_CLIPBOARD type
         */
        clipboard_selection_request(selection: number, type: number): void;
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
        file_copy_async(
            sources: Gio.File[],
            flags: Gio.FileCopyFlags,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes copying the file started with
         * spice_main_file_copy_async().
         * @param result a #GAsyncResult.
         * @returns a %TRUE on success, %FALSE on error.
         */
        file_copy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request a mouse mode to the server. The server may not be able to
         * change the mouse mode, but spice-gtk will try to request it
         * when possible.
         * @param mode a SPICE_MOUSE_MODE
         */
        request_mouse_mode(mode: number): void;
        /**
         * Send monitors configuration previously set with
         * spice_main_set_display() and spice_main_set_display_enabled()
         * @returns %TRUE on success.
         */
        send_monitor_config(): boolean;
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
        update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void;
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
         * @param enabled wether display @id is enabled
         * @param update if %TRUE, update guest display state after 1sec.
         */
        update_display_enabled(id: number, enabled: boolean, update: boolean): void;
        /**
         * Update the display `id` physical size.
         *
         * If `update` is %TRUE, the remote configuration will be updated too
         * after 1 second without further changes. You can send when you want
         * without delay the new configuration to the remote with
         * spice_main_send_monitor_config()
         * @param id display ID
         * @param width_mm physical display width in millimeters
         * @param height_mm physical display height in millimeters
         * @param update if %TRUE, update guest resolution after 1sec.
         */
        update_display_mm(id: number, width_mm: number, height_mm: number, update: boolean): void;
    }

    module PlaybackChannel {
        // Signal callback interfaces

        interface PlaybackData {
            (data: any | null, data_size: number): void;
        }

        interface PlaybackGetDelay {
            (): void;
        }

        interface PlaybackStart {
            (format: number, channels: number, rate: number): void;
        }

        interface PlaybackStop {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpicePlaybackChannel struct is opaque and should not be accessed directly.
     */
    class PlaybackChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.PlaybackChannel

        min_latency: number;
        minLatency: number;
        mute: boolean;
        nchannels: number;
        volume: any;

        // Owm methods of SpiceClientGLib-2.0.PlaybackChannel

        /**
         * Adjust the multimedia time according to the delay.
         * @param delay_ms the delay in ms
         */
        set_delay(delay_ms: number): void;
    }

    module PortChannel {
        // Signal callback interfaces

        interface PortData {
            (data: any | null, size: number): void;
        }

        interface PortEvent {
            (event: number): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpicePortChannel struct is opaque and should not be accessed directly.
     */
    class PortChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.PortChannel

        readonly port_name: string;
        readonly portName: string;
        readonly port_opened: boolean;
        readonly portOpened: boolean;

        // Owm methods of SpiceClientGLib-2.0.PortChannel

        /**
         * Send an event to the port.
         *
         * Note: The values SPICE_PORT_EVENT_CLOSED and
         * SPICE_PORT_EVENT_OPENED are managed by the channel connection
         * state.
         * @param event a SPICE_PORT_EVENT value
         */
        event(event: number): void;
        /**
         * Request an asynchronous write of count bytes from `buffer` into the
         * `port`. When the operation is finished `callback` will be called. You
         * can then call spice_port_write_finish() to get the result of
         * the operation.
         * @param buffer the buffer containing the data to write
         * @param cancellable optional GCancellable object, NULL to ignore
         * @param callback callback to call when the request is satisfied
         */
        write_async(
            buffer: Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a port write operation.
         * @param result a #GAsyncResult
         * @returns a #gssize containing the number of bytes written to the stream.
         */
        write_finish(result: Gio.AsyncResult): number;
    }

    module QmpPort {
        // Signal callback interfaces

        interface Event {
            (name: string, node?: any | null): void;
        }

        // Constructor properties interface
    }

    /**
     * Opaque data structure.
     */
    class QmpPort extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.QmpPort

        channel: PortChannel;
        readonly ready: boolean;

        // Owm methods of SpiceClientGLib-2.0.QmpPort

        /**
         * Associate a QMP port helper to the given port channel.  If there is
         * already a helper associated with the channel, it is simply returned.
         * @param channel the QMP port channel
         */
        static get(channel: PortChannel): QmpPort;

        // Owm methods of SpiceClientGLib-2.0.QmpPort

        /**
         * Query the run status of all VCPUs.
         * @param cancellable A #GCancellable
         * @param callback The async callback.
         */
        query_status_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish the asynchronous status query.
         * @param result The async #GAsyncResult result
         * @returns The #SpiceQmpStatus result or %NULL, in which case @error will be set.
         */
        query_status_finish(result: Gio.AsyncResult): QmpStatus;
        /**
         * Request the VM to perform an action.
         * @param action a VM action
         * @param cancellable a #GCancellable, or %NULL
         * @param callback callback to call when the action is complete
         */
        vm_action_async(
            action: QmpPortVmAction,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous VM action and returns the result.
         * @param result The async #GAsyncResult result
         */
        vm_action_finish(result: Gio.AsyncResult): boolean;
    }

    module RecordChannel {
        // Signal callback interfaces

        interface RecordStart {
            (format: number, channels: number, rate: number): void;
        }

        interface RecordStop {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceRecordChannel struct is opaque and should not be accessed directly.
     */
    class RecordChannel extends Channel {
        // Own properties of SpiceClientGLib-2.0.RecordChannel

        mute: boolean;
        nchannels: number;
        volume: any;

        // Owm methods of SpiceClientGLib-2.0.RecordChannel

        /**
         * Send recorded PCM data to the guest.
         * @param data PCM data
         * @param bytes size of @data
         * @param time stream timestamp
         */
        send_data(data: any | null, bytes: number, time: number): void;
    }

    module Session {
        // Signal callback interfaces

        interface ChannelDestroy {
            (channel: Channel): void;
        }

        interface ChannelNew {
            (channel: Channel): void;
        }

        interface Disconnected {
            (): void;
        }

        interface MmTimeReset {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceSession struct is opaque and should not be accessed directly.
     */
    class Session extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.Session

        /**
         * CA certificates in PEM format. The text data can contain
         * several CA certificates identified by:
         *
         *  -----BEGIN CERTIFICATE-----
         *  ... (CA certificate in base64 encoding) ...
         *  -----END CERTIFICATE-----
         */
        ca: Uint8Array;
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        ca_file: string;
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        caFile: string;
        /**
         * Images cache size. If 0, don't set.
         */
        cache_size: number;
        /**
         * Images cache size. If 0, don't set.
         */
        cacheSize: number;
        cert_subject: string;
        certSubject: string;
        ciphers: string;
        client_sockets: boolean;
        clientSockets: boolean;
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        color_depth: number;
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        colorDepth: number;
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        disable_effects: string[];
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        disableEffects: string[];
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        enable_audio: boolean;
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        enableAudio: boolean;
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        enable_smartcard: boolean;
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        enableSmartcard: boolean;
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        enable_usbredir: boolean;
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        enableUsbredir: boolean;
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        gl_scanout: boolean;
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        glScanout: boolean;
        /**
         * Glz window size. If 0, don't set.
         */
        glz_window_size: number;
        /**
         * Glz window size. If 0, don't set.
         */
        glzWindowSize: number;
        /**
         * URL of the SPICE host to connect to
         */
        host: string;
        inhibit_keyboard_grab: boolean;
        inhibitKeyboardGrab: boolean;
        /**
         * #SpiceSessionMigration bit field indicating if a migration is in
         * progress
         */
        readonly migration_state: SessionMigration;
        /**
         * #SpiceSessionMigration bit field indicating if a migration is in
         * progress
         */
        readonly migrationState: SessionMigration;
        /**
         * Spice server name.
         */
        readonly name: string;
        /**
         * TLS password to use
         */
        password: string;
        /**
         * Port to connect to for unencrypted sessions
         */
        port: string;
        /**
         * Version of the SPICE protocol to use
         */
        protocol: number;
        /**
         * URI to the proxy server to use when doing network connection.
         * of the form &lt;![CDATA[ [protocol://]&lt;host&gt;[:port] ]]&gt;
         */
        proxy: string;
        pubkey: Uint8Array;
        /**
         * Whether this connection is read-only mode.
         */
        read_only: boolean;
        /**
         * Whether this connection is read-only mode.
         */
        readOnly: boolean;
        /**
         * A string array of channel types to be secured.
         */
        secure_channels: string[];
        /**
         * A string array of channel types to be secured.
         */
        secureChannels: string[];
        /**
         * Whether to share the directory read-only.
         */
        share_dir_ro: boolean;
        /**
         * Whether to share the directory read-only.
         */
        shareDirRo: boolean;
        /**
         * Location of the shared directory
         */
        shared_dir: string;
        /**
         * Location of the shared directory
         */
        sharedDir: string;
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        smartcard_certificates: string[];
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        smartcardCertificates: string[];
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        smartcard_db: string;
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        smartcardDb: string;
        /**
         * Port to connect to for TLS sessions
         */
        tls_port: string;
        /**
         * Port to connect to for TLS sessions
         */
        tlsPort: string;
        /**
         * Path of the Unix socket to connect to
         */
        unix_path: string;
        /**
         * Path of the Unix socket to connect to
         */
        unixPath: string;
        /**
         * URI of the SPICE host to connect to. The URI is of the form
         * spice://hostname?port=XXX or spice://hostname?tls_port=XXX
         */
        uri: string;
        /**
         * Username to use
         */
        username: string;
        /**
         * Spice server uuid.
         */
        readonly uuid: any;
        /**
         * #SpiceSessionVerify bit field indicating which parts of the peer
         * certificate should be checked
         */
        verify: SessionVerify;

        // Constructors of SpiceClientGLib-2.0.Session

        static ['new'](): Session;

        // Owm methods of SpiceClientGLib-2.0.Session

        /**
         * Open the session using the #SpiceSession:host and
         * #SpiceSession:port.
         * @returns %FALSE if the session state is invalid for connection request. %TRUE if the connection is initiated. To know whether the connection is established, you must watch for channels creation (#SpiceSession::channel-new) and the channels state (#SpiceChannel::channel-event).
         */
        connect(): boolean;
        /**
         * Disconnect the `session,` and destroy all channels.
         */
        disconnect(): void;
        /**
         * Get the list of current channels associated with this `session`.
         * @returns a #GList          of unowned #SpiceChannel channels.
         */
        get_channels(): Channel[];
        /**
         * Gets the `session` proxy uri.
         * @returns the session proxy #SpiceURI or %NULL.
         */
        get_proxy_uri(): URI;
        /**
         * Checks whether the `session` is read-only.
         * @returns whether the @session is in read-only mode.
         */
        get_read_only(): boolean;
        /**
         * See if there is a `type` channel in the channels associated with this
         * `session`.
         * @param type a #SpiceChannel:channel-type
         * @returns TRUE if a @type channel is available otherwise FALSE.
         */
        has_channel_type(type: number): boolean;
        /**
         * During seamless migration, channels may be created to establish a
         * connection with the target, but they are temporary and should only
         * handle migration steps. In order to avoid other interactions with
         * the client, channels should check this value.
         * @returns %TRUE if the session is a copy created during migration
         */
        is_for_migration(): boolean;
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
        open_fd(fd: number): boolean;
    }

    module SmartcardChannel {
        // Constructor properties interface
    }

    /**
     * The #SpiceSmartcardChannel struct is opaque and should not be accessed directly.
     */
    class SmartcardChannel extends Channel {}

    module SmartcardManager {
        // Signal callback interfaces

        interface CardInserted {
            (vreader: VReader): void;
        }

        interface CardRemoved {
            (vreader: VReader): void;
        }

        interface ReaderAdded {
            (vreader: VReader): void;
        }

        interface ReaderRemoved {
            (vreader: VReader): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceSmartcardManager struct is opaque and should not be accessed directly.
     */
    class SmartcardManager extends GObject.Object {
        // Owm methods of SpiceClientGLib-2.0.SmartcardManager

        /**
         * #SpiceSmartcardManager is a singleton, use this function to get a pointer
         * to it. A new SpiceSmartcardManager instance will be created the first
         * time this function is called
         */
        static get(): SmartcardManager;

        // Owm methods of SpiceClientGLib-2.0.SmartcardManager

        /**
         * Gets the list of smartcard readers that are currently available, they
         * can be either software (emulated) readers, or hardware ones.
         * @returns a newly allocated list of SpiceSmartcardReader instances, or NULL if none were found. When no longer needed, the list must be freed after unreferencing its elements with g_boxed_free()
         */
        get_readers(): SmartcardReader[];
        /**
         * Simulates the insertion of a smartcard in the guest. Valid certificates
         * must have been set in #SpiceSession:smartcard-certificates for software
         * smartcard support to work. At the moment, only one software smartcard
         * reader is supported, that's why there is no parameter to indicate which
         * reader to insert the card in.
         * @returns TRUE if smartcard insertion was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
         */
        insert_card(): boolean;
        /**
         * Simulates the removal of a smartcard in the guest. At the moment, only
         * one software smartcard reader is supported, that's why there is no
         * parameter to indicate which reader to insert the card in.
         * @returns TRUE if smartcard removal was successfully simulated, FALSE if this failed, or if software smartcard support isn't enabled.
         */
        remove_card(): boolean;
    }

    module URI {
        // Constructor properties interface
    }

    /**
     * The #SpiceURI struct is opaque and cannot be accessed directly.
     */
    class URI extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.URI

        hostname: string;
        password: string;
        port: number;
        scheme: string;
        user: string;

        // Owm methods of SpiceClientGLib-2.0.URI

        get_hostname(): string;
        get_password(): string;
        get_port(): number;
        get_scheme(): string;
        get_user(): string;
        set_hostname(hostname: string): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_scheme(scheme: string): void;
        set_user(user: string): void;
        to_string(): string;
    }

    module UsbDeviceManager {
        // Signal callback interfaces

        interface AutoConnectFailed {
            (device: UsbDevice, error: GLib.Error): void;
        }

        interface DeviceAdded {
            (device: UsbDevice): void;
        }

        interface DeviceError {
            (device: UsbDevice, error: GLib.Error): void;
        }

        interface DeviceRemoved {
            (device: UsbDevice): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceUsbDeviceManager struct is opaque and should not be accessed directly.
     */
    class UsbDeviceManager extends GObject.Object {
        // Own properties of SpiceClientGLib-2.0.UsbDeviceManager

        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        auto_connect: boolean;
        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        autoConnect: boolean;
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
        auto_connect_filter: string;
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
        autoConnectFilter: string;
        /**
         * Get the number of available channels for redirecting USB devices.
         */
        readonly free_channels: number;
        /**
         * Get the number of available channels for redirecting USB devices.
         */
        readonly freeChannels: number;
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        redirect_on_connect: string;
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        redirectOnConnect: string;
        /**
         * #SpiceSession this #SpiceUsbDeviceManager is associated with
         */
        session: Session;

        // Owm methods of SpiceClientGLib-2.0.UsbDeviceManager

        /**
         * Gets the #SpiceUsbDeviceManager associated with the passed in #SpiceSession.
         * A new #SpiceUsbDeviceManager instance will be created the first time this
         * function is called for a certain #SpiceSession.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the #SpiceSession itself has been unref-ed by the caller.
         * @param session #SpiceSession for which to get the #SpiceUsbDeviceManager
         */
        static get(session: Session): UsbDeviceManager;

        // Owm methods of SpiceClientGLib-2.0.UsbDeviceManager

        /**
         * Allocates a SpiceUsbDevice instance for the specified file descriptor.
         * @param file_descriptor an open file descriptor for the USB device.
         * @returns an allocated SpiceUsbDevice instance or %NULL in case of failure.
         */
        allocate_device_for_file_descriptor(file_descriptor: number): UsbDevice | null;
        /**
         * Checks whether it is possible to redirect the `device`.
         * @param device a #SpiceUsbDevice to disconnect
         * @returns %TRUE if @device can be redirected
         */
        can_redirect_device(device: UsbDevice): boolean;
        /**
         * Asynchronously connects the `device`. When completed, `callback` will be called.
         * Then it is possible to call spice_usb_device_manager_connect_device_finish()
         * to get the result of the operation.
         * @param device a #SpiceUsbDevice to redirect
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        connect_device_async(
            device: UsbDevice,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async operation. See spice_usb_device_manager_connect_device_async().
         * @param res a #GAsyncResult
         * @returns %TRUE if connection is successful
         */
        connect_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Creates a new shared CD device based on a disk image file
         * or a physical CD device.
         * @param filename image or device path
         * @returns %TRUE if device created successfully
         */
        create_shared_cd_device(filename: string): boolean;
        /**
         * Disconnects the `device`.
         * @param device a #SpiceUsbDevice to disconnect
         */
        disconnect_device(device: UsbDevice): void;
        /**
         * Asynchronously disconnects the `device`. When completed, `callback` will be called.
         * Then it is possible to call spice_usb_device_manager_disconnect_device_finish()
         * to get the result of the operation.
         * @param device a connected #SpiceUsbDevice to disconnect.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        disconnect_device_async(
            device: UsbDevice,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async operation. See spice_usb_device_manager_disconnect_device_async().
         * @param res a #GAsyncResult
         * @returns %TRUE if disconnection is successful
         */
        disconnect_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finds devices associated with the `manager`
         * @returns a %GPtrArray array of %SpiceUsbDevice
         */
        get_devices(): UsbDevice[];
        /**
         * Finds devices associated with the `manager` complying with the `filter`
         * @param filter filter string for selecting which devices to return,      see #SpiceUsbDeviceManager:auto-connect-filter for the filter      string format
         * @returns a %GPtrArray array of %SpiceUsbDevice
         */
        get_devices_with_filter(filter?: string | null): UsbDevice[];
        /**
         * Finds if the `device` is connected.
         * @param device a #SpiceUsbDevice
         * @returns %TRUE if @device has an associated USB redirection channel
         */
        is_device_connected(device: UsbDevice): boolean;
        /**
         * Checks whether a device is shared CD.
         * @param device a #SpiceUsbDevice to query
         * @returns %TRUE if the device is shared CD
         */
        is_device_shared_cd(device: UsbDevice): boolean;
        /**
         * Checks whether a device is being redirected
         * @returns %TRUE if device redirection negotiation flow is in progress
         */
        is_redirecting(): boolean;
    }

    module UsbredirChannel {
        // Constructor properties interface
    }

    /**
     * The #SpiceUsbredirChannel struct is opaque and should not be accessed directly.
     */
    class UsbredirChannel extends Channel {}

    module WebdavChannel {
        // Constructor properties interface
    }

    /**
     * The #SpiceWebdavChannel struct is opaque and should not be accessed directly.
     */
    class WebdavChannel extends PortChannel {}

    /**
     * Class structure for #SpiceAudio.
     */
    class AudioClass {}

    class AudioPrivate {}

    /**
     * Class structure for #SpiceChannel.
     */
    class ChannelClass {}

    class ChannelClassPrivate {}

    class ChannelPrivate {}

    /**
     * Class structure for #SpiceCursorChannel.
     */
    class CursorChannelClass {}

    class CursorChannelPrivate {}

    /**
     * The #SpiceCursorShape structure defines the remote cursor's shape.
     */
    class CursorShape {
        // Own fields of SpiceClientGLib-2.0.CursorShape

        width: number;
        height: number;
        hot_spot_x: number;
        hot_spot_y: number;
        data: any;

        // Constructors of SpiceClientGLib-2.0.CursorShape

        constructor(
            properties?: Partial<{
                type: unknown;
                width: number;
                height: number;
                hot_spot_x: number;
                hot_spot_y: number;
                data: any;
            }>,
        );
    }

    /**
     * Class structure for #SpiceDisplayChannel.
     */
    class DisplayChannelClass {}

    class DisplayChannelPrivate {}

    /**
     * Holds a monitor configuration.
     */
    class DisplayMonitorConfig {
        // Own fields of SpiceClientGLib-2.0.DisplayMonitorConfig

        id: number;
        surface_id: number;
        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of SpiceClientGLib-2.0.DisplayMonitorConfig

        constructor(
            properties?: Partial<{
                id: number;
                surface_id: number;
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
    }

    /**
     * Holds the information necessary to use the primary surface.
     */
    class DisplayPrimary {
        // Own fields of SpiceClientGLib-2.0.DisplayPrimary

        format: any;
        width: number;
        height: number;
        stride: number;
        shmid: number;
        data: number;
        marked: boolean;

        // Constructors of SpiceClientGLib-2.0.DisplayPrimary

        constructor(
            properties?: Partial<{
                format: any;
                width: number;
                height: number;
                stride: number;
                shmid: number;
                data: number;
                marked: boolean;
            }>,
        );
    }

    class FileTransferTaskClass {}

    /**
     * Holds the information necessary for using the GL display scanout.
     */
    class GlScanout {
        // Own fields of SpiceClientGLib-2.0.GlScanout

        fd: number;
        width: number;
        height: number;
        stride: number;
        format: number;
        y0top: boolean;

        // Constructors of SpiceClientGLib-2.0.GlScanout

        constructor(
            properties?: Partial<{
                fd: number;
                width: number;
                height: number;
                stride: number;
                format: number;
                y0top: boolean;
            }>,
        );

        // Owm methods of SpiceClientGLib-2.0.GlScanout

        /**
         * Frees the `scanout`.
         */
        free(): void;
    }

    /**
     * Class structure for #SpiceInputsChannel.
     */
    class InputsChannelClass {}

    class InputsChannelPrivate {}

    /**
     * Class structure for #SpiceMainChannel.
     */
    class MainChannelClass {}

    class MainChannelPrivate {}

    class MsgIn {}

    class MsgOut {}

    /**
     * Class structure for #SpicePlaybackChannel.
     */
    class PlaybackChannelClass {}

    class PlaybackChannelPrivate {}

    /**
     * Class structure for #SpicePortChannel.
     */
    class PortChannelClass {}

    class PortChannelPrivate {}

    class QmpPortClass {}

    /**
     * Information about VCPU run state.
     */
    class QmpStatus {
        // Own fields of SpiceClientGLib-2.0.QmpStatus

        version: number;
        running: boolean;
        singlestep: boolean;
        status: string;

        // Constructors of SpiceClientGLib-2.0.QmpStatus

        constructor(
            properties?: Partial<{
                version: number;
                running: boolean;
                singlestep: boolean;
                status: string;
            }>,
        );

        // Owm methods of SpiceClientGLib-2.0.QmpStatus

        /**
         * References a `status`.
         * @returns The same @status
         */
        ref(): QmpStatus;
        /**
         * Removes a reference from the given `status`.
         */
        unref(): void;
    }

    /**
     * Class structure for #SpiceRecordChannel.
     */
    class RecordChannelClass {}

    class RecordChannelPrivate {}

    /**
     * Class structure for #SpiceSession.
     */
    class SessionClass {}

    class SessionPrivate {}

    /**
     * Class structure for #SpiceSmartcardChannel.
     */
    class SmartcardChannelClass {}

    class SmartcardChannelPrivate {}

    /**
     * Class structure for #SpiceSmartcardManager.
     */
    class SmartcardManagerClass {}

    class SmartcardManagerPrivate {}

    /**
     * The #SpiceSmartcardReader struct is opaque and cannot be accessed directly.
     */
    class SmartcardReader {
        // Owm methods of SpiceClientGLib-2.0.SmartcardReader

        /**
         * Simulates insertion of a smartcard in the software smartcard reader
         * `reader`. If `reader` is not a software smartcard reader, FALSE will be
         * returned.
         * @returns TRUE if insertion of a card was successfully simulated, FALSE otherwise
         */
        insert_card(): boolean;
        /**
         * Tests if `reader` is a software (emulated) smartcard reader.
         * @returns TRUE if @reader is a software (emulated) smartcard reader, FALSE otherwise
         */
        is_software(): boolean;
        /**
         * Simulates removal of a smartcard from the software smartcard reader
         * `reader`. If `reader` is not a software smartcard reader, FALSE will be
         * returned.
         * @returns TRUE if removal of a card was successfully simulated, FALSE otherwise
         */
        remove_card(): boolean;
    }

    /**
     * The #SpiceURIClass struct is opaque and cannot be accessed directly.
     * It is class structure for #SpiceURI.
     */
    class URIClass {}

    class URIPrivate {}

    /**
     * The #SpiceUsbDevice struct is opaque and cannot be accessed directly.
     */
    class UsbDevice {
        // Owm methods of SpiceClientGLib-2.0.UsbDevice

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
        get_description(format?: string | null): string;
        /**
         * Finds the %libusb_device associated with the `device`.
         * @returns the %libusb_device associated to %SpiceUsbDevice.
         */
        get_libusb_device(): any | null;
    }

    /**
     * Class structure for #SpiceUsbDeviceManager.
     */
    class UsbDeviceManagerClass {}

    class UsbDeviceManagerPrivate {}

    /**
     * Class structure for #SpiceUsbredirChannel.
     */
    class UsbredirChannelClass {}

    class UsbredirChannelPrivate {}

    /**
     * Class structure for #SpiceWebdavChannel.
     */
    class WebdavChannelClass {}

    class WebdavChannelPrivate {}

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

export default SpiceClientGLib;
// END
