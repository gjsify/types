/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './spiceclientglib-2.0-ambient.d.ts';

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
        static $gtype: GObject.GType<ClientError>;

        // Static fields of SpiceClientGLib.ClientError

        /**
         * generic error code
         */
        static FAILED: number;
        /**
         * device redirection rejected by host
         */
        static USB_DEVICE_REJECTED: number;
        /**
         * device disconnected (fatal IO error)
         */
        static USB_DEVICE_LOST: number;
        /**
         * password is required
         */
        static AUTH_NEEDS_PASSWORD: number;
        /**
         * username is required
         */
        static AUTH_NEEDS_USERNAME: number;
        /**
         * password and username are required
         */
        static AUTH_NEEDS_PASSWORD_AND_USERNAME: number;
        /**
         * USB service error
         */
        static USB_SERVICE: number;

        // Constructors of SpiceClientGLib.ClientError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
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
    function main_clipboard_notify(channel: MainChannel, type: number, data: Uint8Array | string): void;
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
        data: Uint8Array | string,
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
     */
    function main_file_copy_async(
        channel: MainChannel,
        sources: Gio.File[],
        flags: Gio.FileCopyFlags,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
    ): Promise<boolean>;
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
        cancellable: Gio.Cancellable | null,
        progress_callback: Gio.FileProgressCallback | null,
        callback: Gio.AsyncReadyCallback<MainChannel> | null,
    ): void;
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
    ): Promise<boolean> | void;
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
     */
    function port_write_async(
        port: PortChannel,
        buffer: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
    ): Promise<number>;
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
        buffer: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<PortChannel> | null,
    ): void;
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
        buffer: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PortChannel> | null,
    ): Promise<number> | void;
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
    function uuid_to_string(uuid: Uint8Array | string): string;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_context: GLib.MainContext;
            mainContext: GLib.MainContext;
            session: Session;
        }
    }

    /**
     * The #SpiceAudio struct is opaque and should not be accessed directly.
     */
    abstract class Audio extends GObject.Object {
        static $gtype: GObject.GType<Audio>;

        // Own properties of SpiceClientGLib.Audio

        get main_context(): GLib.MainContext;
        get mainContext(): GLib.MainContext;
        /**
         * #SpiceSession this #SpiceAudio is associated with
         */
        get session(): Session;

        // Constructors of SpiceClientGLib.Audio

        constructor(properties?: Partial<Audio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: Session, context?: GLib.MainContext | null, name?: string | null): Audio;

        // Own static methods of SpiceClientGLib.Audio

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

        // Own virtual methods of SpiceClientGLib.Audio

        vfunc_connect_channel(channel: Channel): boolean;
        vfunc_get_playback_volume_info_async(
            cancellable: Gio.Cancellable | null,
            main_channel: MainChannel,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_playback_volume_info_finish(
            res: Gio.AsyncResult,
            mute: boolean,
            nchannels: number,
            volume: number,
        ): boolean;
        vfunc_get_record_volume_info_async(
            cancellable: Gio.Cancellable | null,
            main_channel: MainChannel,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_record_volume_info_finish(
            res: Gio.AsyncResult,
            mute: boolean,
            nchannels: number,
            volume: number,
        ): boolean;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel_id: number;
            channelId: number;
            channel_type: number;
            channelType: number;
            socket: Gio.Socket;
            spice_session: Session;
            spiceSession: Session;
            total_read_bytes: number;
            totalReadBytes: number;
        }
    }

    /**
     * The #SpiceChannel struct is opaque and should not be accessed directly.
     */
    class Channel extends GObject.Object {
        static $gtype: GObject.GType<Channel>;

        // Own properties of SpiceClientGLib.Channel

        get channel_id(): number;
        get channelId(): number;
        get channel_type(): number;
        get channelType(): number;
        /**
         * Get the underlying #GSocket. Note that you should not read or
         * write any data to it directly since this will likely corrupt
         * the channel stream.  This property is mainly useful to get some
         * connections details.
         */
        get socket(): Gio.Socket;
        get spice_session(): Session;
        get spiceSession(): Session;
        get total_read_bytes(): number;
        get totalReadBytes(): number;

        // Constructors of SpiceClientGLib.Channel

        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](s: Session, type: number, id: number): Channel;

        // Own signals of SpiceClientGLib.Channel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'channel-event', callback: (_source: this, event: ChannelEvent) => void): number;
        emit(signal: 'channel-event', event: ChannelEvent): void;
        connect_after(signal: 'open-fd', callback: (_source: this, with_tls: number) => void): number;
        emit(signal: 'open-fd', with_tls: number): void;

        // Own static methods of SpiceClientGLib.Channel

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

        // Own virtual methods of SpiceClientGLib.Channel

        vfunc_channel_event(event: ChannelEvent): void;
        vfunc_channel_reset(migrating: boolean): void;
        vfunc_channel_send_migration_handshake(): void;
        vfunc_channel_up(): void;
        vfunc_handle_msg(msg: MsgIn): void;
        vfunc_iterate_read(): void;
        vfunc_iterate_write(): void;
        vfunc_open_fd(with_tls: number): void;

        // Own methods of SpiceClientGLib.Channel

        /**
         * Connect the channel, using #SpiceSession connection informations
         * @returns %TRUE on success.
         */
        connect(): boolean;
        connect(...args: never[]): any;
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
        // Conflicted with GObject.Object.disconnect
        disconnect(...args: never[]): any;
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

        interface ConstructorProps extends Channel.ConstructorProps {
            cursor: CursorShape;
        }
    }

    /**
     * The #SpiceCursorChannel struct is opaque and should not be accessed directly.
     */
    class CursorChannel extends Channel {
        static $gtype: GObject.GType<CursorChannel>;

        // Own properties of SpiceClientGLib.CursorChannel

        /**
         * The last #SpiceCursorShape received.
         */
        get cursor(): CursorShape;

        // Constructors of SpiceClientGLib.CursorChannel

        constructor(properties?: Partial<CursorChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.CursorChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'cursor-hide', callback: (_source: this) => void): number;
        emit(signal: 'cursor-hide'): void;
        connect_after(signal: 'cursor-move', callback: (_source: this, x: number, y: number) => void): number;
        emit(signal: 'cursor-move', x: number, y: number): void;
        connect_after(signal: 'cursor-reset', callback: (_source: this) => void): number;
        emit(signal: 'cursor-reset'): void;
        connect_after(
            signal: 'cursor-set',
            callback: (
                _source: this,
                width: number,
                height: number,
                hot_x: number,
                hot_y: number,
                rgba: any | null,
            ) => void,
        ): number;
        emit(
            signal: 'cursor-set',
            width: number,
            height: number,
            hot_x: number,
            hot_y: number,
            rgba?: any | null,
        ): void;

        // Own virtual methods of SpiceClientGLib.CursorChannel

        vfunc_cursor_hide(): void;
        vfunc_cursor_move(x: number, y: number): void;
        vfunc_cursor_reset(): void;
        vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba?: any | null): void;
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

        interface ConstructorProps extends Channel.ConstructorProps {
            gl_scanout: GlScanout;
            glScanout: GlScanout;
            height: number;
            monitors: DisplayMonitorConfig[];
            monitors_max: number;
            monitorsMax: number;
            width: number;
        }
    }

    /**
     * The #SpiceDisplayChannel struct is opaque and should not be accessed directly.
     */
    class DisplayChannel extends Channel {
        static $gtype: GObject.GType<DisplayChannel>;

        // Own properties of SpiceClientGLib.DisplayChannel

        /**
         * The last #SpiceGlScanout received.
         */
        get gl_scanout(): GlScanout;
        /**
         * The last #SpiceGlScanout received.
         */
        get glScanout(): GlScanout;
        get height(): number;
        /**
         * Current monitors configuration.
         */
        get monitors(): DisplayMonitorConfig[];
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         */
        get monitors_max(): number;
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         */
        get monitorsMax(): number;
        get width(): number;

        // Constructors of SpiceClientGLib.DisplayChannel

        constructor(properties?: Partial<DisplayChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.DisplayChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(
            signal: 'display-invalidate',
            callback: (_source: this, x: number, y: number, width: number, height: number) => void,
        ): number;
        emit(signal: 'display-invalidate', x: number, y: number, width: number, height: number): void;
        connect_after(signal: 'display-mark', callback: (_source: this, mark: number) => void): number;
        emit(signal: 'display-mark', mark: number): void;
        connect_after(
            signal: 'display-primary-create',
            callback: (
                _source: this,
                format: number,
                width: number,
                height: number,
                stride: number,
                shmid: number,
                imgdata: any | null,
            ) => void,
        ): number;
        emit(
            signal: 'display-primary-create',
            format: number,
            width: number,
            height: number,
            stride: number,
            shmid: number,
            imgdata?: any | null,
        ): void;
        connect_after(signal: 'display-primary-destroy', callback: (_source: this) => void): number;
        emit(signal: 'display-primary-destroy'): void;
        connect_after(
            signal: 'gl-draw',
            callback: (_source: this, x: number, y: number, width: number, height: number) => void,
        ): number;
        emit(signal: 'gl-draw', x: number, y: number, width: number, height: number): void;
        connect_after(
            signal: 'gst-video-overlay',
            callback: (_source: this, pipeline: Gst.Pipeline) => boolean,
        ): number;
        emit(signal: 'gst-video-overlay', pipeline: Gst.Pipeline): void;
        connect_after(
            signal: 'streaming-mode',
            callback: (_source: this, streaming_mode: boolean) => any | null,
        ): number;
        emit(signal: 'streaming-mode', streaming_mode: boolean): void;

        // Own methods of SpiceClientGLib.DisplayChannel

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cancellable: Gio.Cancellable;
            channel: MainChannel;
            file: Gio.File;
            id: number;
            progress: number;
            total_bytes: number;
            totalBytes: number;
            transferred_bytes: number;
            transferredBytes: number;
        }
    }

    class FileTransferTask extends GObject.Object {
        static $gtype: GObject.GType<FileTransferTask>;

        // Own properties of SpiceClientGLib.FileTransferTask

        get cancellable(): Gio.Cancellable;
        get channel(): MainChannel;
        get file(): Gio.File;
        get id(): number;
        get progress(): number;
        get total_bytes(): number;
        get totalBytes(): number;
        get transferred_bytes(): number;
        get transferredBytes(): number;

        // Constructors of SpiceClientGLib.FileTransferTask

        constructor(properties?: Partial<FileTransferTask.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.FileTransferTask

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this, object: GLib.Error) => void): number;
        connect_after(signal: 'finished', callback: (_source: this, object: GLib.Error) => void): number;
        emit(signal: 'finished', object: GLib.Error): void;

        // Own methods of SpiceClientGLib.FileTransferTask

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

        interface ConstructorProps extends Channel.ConstructorProps {
            key_modifiers: number;
            keyModifiers: number;
        }
    }

    /**
     * The #SpiceInputsChannel struct is opaque and should not be accessed directly.
     */
    class InputsChannel extends Channel {
        static $gtype: GObject.GType<InputsChannel>;

        // Own properties of SpiceClientGLib.InputsChannel

        get key_modifiers(): number;
        get keyModifiers(): number;

        // Constructors of SpiceClientGLib.InputsChannel

        constructor(properties?: Partial<InputsChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.InputsChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'inputs-modifiers', callback: (_source: this) => void): number;
        emit(signal: 'inputs-modifiers'): void;

        // Own methods of SpiceClientGLib.InputsChannel

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
            (type: number, data: Uint8Array | string): void;
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
            (selection: number, type: number, data: Uint8Array | string): void;
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

        interface ConstructorProps extends Channel.ConstructorProps {
            agent_caps_0: number;
            agentCaps0: number;
            agent_connected: boolean;
            agentConnected: boolean;
            color_depth: number;
            colorDepth: number;
            disable_animation: boolean;
            disableAnimation: boolean;
            disable_display_align: boolean;
            disableDisplayAlign: boolean;
            disable_display_position: boolean;
            disableDisplayPosition: boolean;
            disable_font_smooth: boolean;
            disableFontSmooth: boolean;
            disable_wallpaper: boolean;
            disableWallpaper: boolean;
            max_clipboard: number;
            maxClipboard: number;
            mouse_mode: number;
            mouseMode: number;
        }
    }

    /**
     * The #SpiceMainChannel struct is opaque and should not be accessed directly.
     */
    class MainChannel extends Channel {
        static $gtype: GObject.GType<MainChannel>;

        // Own properties of SpiceClientGLib.MainChannel

        get agent_caps_0(): number;
        get agentCaps0(): number;
        get agent_connected(): boolean;
        get agentConnected(): boolean;
        get color_depth(): number;
        set color_depth(val: number);
        get colorDepth(): number;
        set colorDepth(val: number);
        get disable_animation(): boolean;
        set disable_animation(val: boolean);
        get disableAnimation(): boolean;
        set disableAnimation(val: boolean);
        /**
         * Disable automatic horizontal display position alignment.
         */
        get disable_display_align(): boolean;
        set disable_display_align(val: boolean);
        /**
         * Disable automatic horizontal display position alignment.
         */
        get disableDisplayAlign(): boolean;
        set disableDisplayAlign(val: boolean);
        get disable_display_position(): boolean;
        set disable_display_position(val: boolean);
        get disableDisplayPosition(): boolean;
        set disableDisplayPosition(val: boolean);
        get disable_font_smooth(): boolean;
        set disable_font_smooth(val: boolean);
        get disableFontSmooth(): boolean;
        set disableFontSmooth(val: boolean);
        get disable_wallpaper(): boolean;
        set disable_wallpaper(val: boolean);
        get disableWallpaper(): boolean;
        set disableWallpaper(val: boolean);
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        get max_clipboard(): number;
        set max_clipboard(val: number);
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         */
        get maxClipboard(): number;
        set maxClipboard(val: number);
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        get mouse_mode(): number;
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (%SPICE_MOUSE_MODE_CLIENT), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (%SPICE_MOUSE_MODE_SERVER), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        get mouseMode(): number;

        // Constructors of SpiceClientGLib.MainChannel

        constructor(properties?: Partial<MainChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.MainChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'main-agent-update', callback: (_source: this) => void): number;
        emit(signal: 'main-agent-update'): void;
        connect_after(
            signal: 'main-clipboard',
            callback: (_source: this, type: number, data: Uint8Array) => void,
        ): number;
        emit(signal: 'main-clipboard', type: number, data: Uint8Array | string): void;
        connect_after(signal: 'main-clipboard-grab', callback: (_source: this, types: number[]) => boolean): number;
        emit(signal: 'main-clipboard-grab', types: number[]): void;
        connect_after(signal: 'main-clipboard-release', callback: (_source: this) => void): number;
        emit(signal: 'main-clipboard-release'): void;
        connect_after(signal: 'main-clipboard-request', callback: (_source: this, types: number) => boolean): number;
        emit(signal: 'main-clipboard-request', types: number): void;
        connect_after(
            signal: 'main-clipboard-selection',
            callback: (_source: this, selection: number, type: number, data: Uint8Array) => void,
        ): number;
        emit(signal: 'main-clipboard-selection', selection: number, type: number, data: Uint8Array | string): void;
        connect_after(
            signal: 'main-clipboard-selection-grab',
            callback: (_source: this, selection: number, types: number[]) => boolean,
        ): number;
        emit(signal: 'main-clipboard-selection-grab', selection: number, types: number[]): void;
        connect_after(
            signal: 'main-clipboard-selection-release',
            callback: (_source: this, selection: number) => void,
        ): number;
        emit(signal: 'main-clipboard-selection-release', selection: number): void;
        connect_after(
            signal: 'main-clipboard-selection-request',
            callback: (_source: this, selection: number, types: number) => boolean,
        ): number;
        emit(signal: 'main-clipboard-selection-request', selection: number, types: number): void;
        connect_after(signal: 'main-mouse-update', callback: (_source: this) => void): number;
        emit(signal: 'main-mouse-update'): void;
        connect_after(signal: 'migration-started', callback: (_source: this, session: GObject.Object) => void): number;
        emit(signal: 'migration-started', session: GObject.Object): void;
        connect_after(signal: 'new-file-transfer', callback: (_source: this, task: GObject.Object) => void): number;
        emit(signal: 'new-file-transfer', task: GObject.Object): void;

        // Own methods of SpiceClientGLib.MainChannel

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
        clipboard_selection_notify(selection: number, type: number, data: Uint8Array | string): void;
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

        interface ConstructorProps extends Channel.ConstructorProps {
            min_latency: number;
            minLatency: number;
            mute: boolean;
            nchannels: number;
            volume: any;
        }
    }

    /**
     * The #SpicePlaybackChannel struct is opaque and should not be accessed directly.
     */
    class PlaybackChannel extends Channel {
        static $gtype: GObject.GType<PlaybackChannel>;

        // Own properties of SpiceClientGLib.PlaybackChannel

        get min_latency(): number;
        set min_latency(val: number);
        get minLatency(): number;
        set minLatency(val: number);
        get mute(): boolean;
        set mute(val: boolean);
        get nchannels(): number;
        set nchannels(val: number);
        get volume(): any;
        set volume(val: any);

        // Constructors of SpiceClientGLib.PlaybackChannel

        constructor(properties?: Partial<PlaybackChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.PlaybackChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(
            signal: 'playback-data',
            callback: (_source: this, data: any | null, data_size: number) => void,
        ): number;
        emit(signal: 'playback-data', data: any | null, data_size: number): void;
        connect_after(signal: 'playback-get-delay', callback: (_source: this) => void): number;
        emit(signal: 'playback-get-delay'): void;
        connect_after(
            signal: 'playback-start',
            callback: (_source: this, format: number, channels: number, rate: number) => void,
        ): number;
        emit(signal: 'playback-start', format: number, channels: number, rate: number): void;
        connect_after(signal: 'playback-stop', callback: (_source: this) => void): number;
        emit(signal: 'playback-stop'): void;

        // Own virtual methods of SpiceClientGLib.PlaybackChannel

        vfunc_playback_data(data: any | null, size: number): void;
        vfunc_playback_start(format: number, channels: number, freq: number): void;
        vfunc_playback_stop(): void;

        // Own methods of SpiceClientGLib.PlaybackChannel

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

        interface ConstructorProps extends Channel.ConstructorProps {
            port_name: string;
            portName: string;
            port_opened: boolean;
            portOpened: boolean;
        }
    }

    /**
     * The #SpicePortChannel struct is opaque and should not be accessed directly.
     */
    class PortChannel extends Channel {
        static $gtype: GObject.GType<PortChannel>;

        // Own properties of SpiceClientGLib.PortChannel

        get port_name(): string;
        get portName(): string;
        get port_opened(): boolean;
        get portOpened(): boolean;

        // Constructors of SpiceClientGLib.PortChannel

        constructor(properties?: Partial<PortChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.PortChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'port-data', callback: (_source: this, data: any | null, size: number) => void): number;
        emit(signal: 'port-data', data: any | null, size: number): void;
        connect_after(signal: 'port-event', callback: (_source: this, event: number) => void): number;
        emit(signal: 'port-event', event: number): void;

        // Own methods of SpiceClientGLib.PortChannel

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
            buffer: Uint8Array | string,
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel: PortChannel;
            ready: boolean;
        }
    }

    /**
     * Opaque data structure.
     */
    class QmpPort extends GObject.Object {
        static $gtype: GObject.GType<QmpPort>;

        // Own properties of SpiceClientGLib.QmpPort

        get channel(): PortChannel;
        get ready(): boolean;

        // Constructors of SpiceClientGLib.QmpPort

        constructor(properties?: Partial<QmpPort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.QmpPort

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'event', callback: (_source: this, name: string, node: any | null) => void): number;
        connect_after(signal: 'event', callback: (_source: this, name: string, node: any | null) => void): number;
        emit(signal: 'event', name: string, node?: any | null): void;

        // Own static methods of SpiceClientGLib.QmpPort

        /**
         * Associate a QMP port helper to the given port channel.  If there is
         * already a helper associated with the channel, it is simply returned.
         * @param channel the QMP port channel
         */
        static get(channel: PortChannel): QmpPort;

        // Own methods of SpiceClientGLib.QmpPort

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

        interface ConstructorProps extends Channel.ConstructorProps {
            mute: boolean;
            nchannels: number;
            volume: any;
        }
    }

    /**
     * The #SpiceRecordChannel struct is opaque and should not be accessed directly.
     */
    class RecordChannel extends Channel {
        static $gtype: GObject.GType<RecordChannel>;

        // Own properties of SpiceClientGLib.RecordChannel

        get mute(): boolean;
        set mute(val: boolean);
        get nchannels(): number;
        set nchannels(val: number);
        get volume(): any;
        set volume(val: any);

        // Constructors of SpiceClientGLib.RecordChannel

        constructor(properties?: Partial<RecordChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.RecordChannel

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(
            signal: 'record-start',
            callback: (_source: this, format: number, channels: number, rate: number) => void,
        ): number;
        emit(signal: 'record-start', format: number, channels: number, rate: number): void;
        connect_after(signal: 'record-stop', callback: (_source: this) => void): number;
        emit(signal: 'record-stop'): void;

        // Own virtual methods of SpiceClientGLib.RecordChannel

        vfunc_record_data(data: any | null, size: number): void;
        vfunc_record_start(format: number, channels: number, freq: number): void;
        vfunc_record_stop(): void;

        // Own methods of SpiceClientGLib.RecordChannel

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ca: Uint8Array;
            ca_file: string;
            caFile: string;
            cache_size: number;
            cacheSize: number;
            cert_subject: string;
            certSubject: string;
            ciphers: string;
            client_sockets: boolean;
            clientSockets: boolean;
            color_depth: number;
            colorDepth: number;
            disable_effects: string[];
            disableEffects: string[];
            enable_audio: boolean;
            enableAudio: boolean;
            enable_smartcard: boolean;
            enableSmartcard: boolean;
            enable_usbredir: boolean;
            enableUsbredir: boolean;
            gl_scanout: boolean;
            glScanout: boolean;
            glz_window_size: number;
            glzWindowSize: number;
            host: string;
            inhibit_keyboard_grab: boolean;
            inhibitKeyboardGrab: boolean;
            migration_state: SessionMigration;
            migrationState: SessionMigration;
            name: string;
            password: string;
            port: string;
            protocol: number;
            proxy: string;
            pubkey: Uint8Array;
            read_only: boolean;
            readOnly: boolean;
            secure_channels: string[];
            secureChannels: string[];
            share_dir_ro: boolean;
            shareDirRo: boolean;
            shared_dir: string;
            sharedDir: string;
            smartcard_certificates: string[];
            smartcardCertificates: string[];
            smartcard_db: string;
            smartcardDb: string;
            tls_port: string;
            tlsPort: string;
            unix_path: string;
            unixPath: string;
            uri: string;
            username: string;
            uuid: any;
            verify: SessionVerify;
        }
    }

    /**
     * The #SpiceSession struct is opaque and should not be accessed directly.
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Own properties of SpiceClientGLib.Session

        /**
         * CA certificates in PEM format. The text data can contain
         * several CA certificates identified by:
         *
         *  -----BEGIN CERTIFICATE-----
         *  ... (CA certificate in base64 encoding) ...
         *  -----END CERTIFICATE-----
         */
        get ca(): Uint8Array;
        set ca(val: Uint8Array);
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        get ca_file(): string;
        set ca_file(val: string);
        /**
         * File holding the CA certificates for the host the client is
         * connecting to
         */
        get caFile(): string;
        set caFile(val: string);
        /**
         * Images cache size. If 0, don't set.
         */
        get cache_size(): number;
        set cache_size(val: number);
        /**
         * Images cache size. If 0, don't set.
         */
        get cacheSize(): number;
        set cacheSize(val: number);
        get cert_subject(): string;
        set cert_subject(val: string);
        get certSubject(): string;
        set certSubject(val: string);
        get ciphers(): string;
        set ciphers(val: string);
        get client_sockets(): boolean;
        set client_sockets(val: boolean);
        get clientSockets(): boolean;
        set clientSockets(val: boolean);
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        get color_depth(): number;
        set color_depth(val: number);
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         */
        get colorDepth(): number;
        set colorDepth(val: number);
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        get disable_effects(): string[];
        set disable_effects(val: string[]);
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         */
        get disableEffects(): string[];
        set disableEffects(val: string[]);
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        get enable_audio(): boolean;
        set enable_audio(val: boolean);
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         */
        get enableAudio(): boolean;
        set enableAudio(val: boolean);
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        get enable_smartcard(): boolean;
        set enable_smartcard(val: boolean);
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         */
        get enableSmartcard(): boolean;
        set enableSmartcard(val: boolean);
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        get enable_usbredir(): boolean;
        set enable_usbredir(val: boolean);
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         */
        get enableUsbredir(): boolean;
        set enableUsbredir(val: boolean);
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        get gl_scanout(): boolean;
        set gl_scanout(val: boolean);
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         */
        get glScanout(): boolean;
        set glScanout(val: boolean);
        /**
         * Glz window size. If 0, don't set.
         */
        get glz_window_size(): number;
        set glz_window_size(val: number);
        /**
         * Glz window size. If 0, don't set.
         */
        get glzWindowSize(): number;
        set glzWindowSize(val: number);
        /**
         * URL of the SPICE host to connect to
         */
        get host(): string;
        set host(val: string);
        get inhibit_keyboard_grab(): boolean;
        set inhibit_keyboard_grab(val: boolean);
        get inhibitKeyboardGrab(): boolean;
        set inhibitKeyboardGrab(val: boolean);
        /**
         * #SpiceSessionMigration bit field indicating if a migration is in
         * progress
         */
        get migration_state(): SessionMigration;
        /**
         * #SpiceSessionMigration bit field indicating if a migration is in
         * progress
         */
        get migrationState(): SessionMigration;
        /**
         * Spice server name.
         */
        get name(): string;
        /**
         * TLS password to use
         */
        get password(): string;
        set password(val: string);
        /**
         * Port to connect to for unencrypted sessions
         */
        get port(): string;
        set port(val: string);
        /**
         * Version of the SPICE protocol to use
         */
        get protocol(): number;
        set protocol(val: number);
        /**
         * URI to the proxy server to use when doing network connection.
         * of the form <![CDATA[ [protocol://]<host>[:port] ]]>
         */
        get proxy(): string;
        set proxy(val: string);
        get pubkey(): Uint8Array;
        set pubkey(val: Uint8Array);
        /**
         * Whether this connection is read-only mode.
         */
        get read_only(): boolean;
        set read_only(val: boolean);
        /**
         * Whether this connection is read-only mode.
         */
        get readOnly(): boolean;
        set readOnly(val: boolean);
        /**
         * A string array of channel types to be secured.
         */
        get secure_channels(): string[];
        set secure_channels(val: string[]);
        /**
         * A string array of channel types to be secured.
         */
        get secureChannels(): string[];
        set secureChannels(val: string[]);
        /**
         * Whether to share the directory read-only.
         */
        get share_dir_ro(): boolean;
        set share_dir_ro(val: boolean);
        /**
         * Whether to share the directory read-only.
         */
        get shareDirRo(): boolean;
        set shareDirRo(val: boolean);
        /**
         * Location of the shared directory
         */
        get shared_dir(): string;
        set shared_dir(val: string);
        /**
         * Location of the shared directory
         */
        get sharedDir(): string;
        set sharedDir(val: string);
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        get smartcard_certificates(): string[];
        set smartcard_certificates(val: string[]);
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also spice_smartcard_manager_insert_card()
         */
        get smartcardCertificates(): string[];
        set smartcardCertificates(val: string[]);
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        get smartcard_db(): string;
        set smartcard_db(val: string);
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         */
        get smartcardDb(): string;
        set smartcardDb(val: string);
        /**
         * Port to connect to for TLS sessions
         */
        get tls_port(): string;
        set tls_port(val: string);
        /**
         * Port to connect to for TLS sessions
         */
        get tlsPort(): string;
        set tlsPort(val: string);
        /**
         * Path of the Unix socket to connect to
         */
        get unix_path(): string;
        set unix_path(val: string);
        /**
         * Path of the Unix socket to connect to
         */
        get unixPath(): string;
        set unixPath(val: string);
        /**
         * URI of the SPICE host to connect to. The URI is of the form
         * spice://hostname?port=XXX or spice://hostname?tls_port=XXX
         */
        get uri(): string;
        set uri(val: string);
        /**
         * Username to use
         */
        get username(): string;
        set username(val: string);
        /**
         * Spice server uuid.
         */
        get uuid(): any;
        /**
         * #SpiceSessionVerify bit field indicating which parts of the peer
         * certificate should be checked
         */
        get verify(): SessionVerify;
        set verify(val: SessionVerify);

        // Constructors of SpiceClientGLib.Session

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Session;

        // Own signals of SpiceClientGLib.Session

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(signal: 'channel-destroy', callback: (_source: this, channel: Channel) => void): number;
        emit(signal: 'channel-destroy', channel: Channel): void;
        connect_after(signal: 'channel-new', callback: (_source: this, channel: Channel) => void): number;
        emit(signal: 'channel-new', channel: Channel): void;
        connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
        emit(signal: 'disconnected'): void;
        connect_after(signal: 'mm-time-reset', callback: (_source: this) => void): number;
        emit(signal: 'mm-time-reset'): void;

        // Own virtual methods of SpiceClientGLib.Session

        vfunc_channel_destroy(channel: Channel): void;
        vfunc_channel_new(channel: Channel): void;

        // Own methods of SpiceClientGLib.Session

        /**
         * Open the session using the #SpiceSession:host and
         * #SpiceSession:port.
         * @returns %FALSE if the session state is invalid for connection request. %TRUE if the connection is initiated. To know whether the connection is established, you must watch for channels creation (#SpiceSession::channel-new) and the channels state (#SpiceChannel::channel-event).
         */
        connect(): boolean;
        connect(...args: never[]): any;
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

        interface ConstructorProps extends Channel.ConstructorProps {}
    }

    /**
     * The #SpiceSmartcardChannel struct is opaque and should not be accessed directly.
     */
    class SmartcardChannel extends Channel {
        static $gtype: GObject.GType<SmartcardChannel>;

        // Constructors of SpiceClientGLib.SmartcardChannel

        constructor(properties?: Partial<SmartcardChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #SpiceSmartcardManager struct is opaque and should not be accessed directly.
     */
    class SmartcardManager extends GObject.Object {
        static $gtype: GObject.GType<SmartcardManager>;

        // Constructors of SpiceClientGLib.SmartcardManager

        constructor(properties?: Partial<SmartcardManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.SmartcardManager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'card-inserted', callback: (_source: this, vreader: VReader) => void): number;
        connect_after(signal: 'card-inserted', callback: (_source: this, vreader: VReader) => void): number;
        emit(signal: 'card-inserted', vreader: VReader): void;
        connect(signal: 'card-removed', callback: (_source: this, vreader: VReader) => void): number;
        connect_after(signal: 'card-removed', callback: (_source: this, vreader: VReader) => void): number;
        emit(signal: 'card-removed', vreader: VReader): void;
        connect(signal: 'reader-added', callback: (_source: this, vreader: VReader) => void): number;
        connect_after(signal: 'reader-added', callback: (_source: this, vreader: VReader) => void): number;
        emit(signal: 'reader-added', vreader: VReader): void;
        connect(signal: 'reader-removed', callback: (_source: this, vreader: VReader) => void): number;
        connect_after(signal: 'reader-removed', callback: (_source: this, vreader: VReader) => void): number;
        emit(signal: 'reader-removed', vreader: VReader): void;

        // Own static methods of SpiceClientGLib.SmartcardManager

        /**
         * #SpiceSmartcardManager is a singleton, use this function to get a pointer
         * to it. A new SpiceSmartcardManager instance will be created the first
         * time this function is called
         */
        static get(): SmartcardManager;

        // Own virtual methods of SpiceClientGLib.SmartcardManager

        vfunc_card_inserted(reader: SmartcardReader): void;
        vfunc_card_removed(reader: SmartcardReader): void;
        vfunc_reader_added(reader: SmartcardReader): void;
        vfunc_reader_removed(reader: SmartcardReader): void;

        // Own methods of SpiceClientGLib.SmartcardManager

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hostname: string;
            password: string;
            port: number;
            scheme: string;
            user: string;
        }
    }

    /**
     * The #SpiceURI struct is opaque and cannot be accessed directly.
     */
    class URI extends GObject.Object {
        static $gtype: GObject.GType<URI>;

        // Own properties of SpiceClientGLib.URI

        get hostname(): string;
        set hostname(val: string);
        get password(): string;
        set password(val: string);
        get port(): number;
        set port(val: number);
        get scheme(): string;
        set scheme(val: string);
        get user(): string;
        set user(val: string);

        // Constructors of SpiceClientGLib.URI

        constructor(properties?: Partial<URI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of SpiceClientGLib.URI

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

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            auto_connect: boolean;
            autoConnect: boolean;
            auto_connect_filter: string;
            autoConnectFilter: string;
            free_channels: number;
            freeChannels: number;
            redirect_on_connect: string;
            redirectOnConnect: string;
            session: Session;
        }
    }

    /**
     * The #SpiceUsbDeviceManager struct is opaque and should not be accessed directly.
     */
    class UsbDeviceManager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<UsbDeviceManager>;

        // Own properties of SpiceClientGLib.UsbDeviceManager

        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        get auto_connect(): boolean;
        set auto_connect(val: boolean);
        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when #SpiceGtkSession's auto-usbredir property is TRUE, this
         * property is controlled by #SpiceGtkSession.
         */
        get autoConnect(): boolean;
        set autoConnect(val: boolean);
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
        get auto_connect_filter(): string;
        set auto_connect_filter(val: string);
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
        get autoConnectFilter(): string;
        set autoConnectFilter(val: string);
        /**
         * Get the number of available channels for redirecting USB devices.
         */
        get free_channels(): number;
        /**
         * Get the number of available channels for redirecting USB devices.
         */
        get freeChannels(): number;
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        get redirect_on_connect(): string;
        set redirect_on_connect(val: string);
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See #SpiceUsbDeviceManager:auto-connect-filter for the filter string
         * format.
         */
        get redirectOnConnect(): string;
        set redirectOnConnect(val: string);
        /**
         * #SpiceSession this #SpiceUsbDeviceManager is associated with
         */
        get session(): Session;

        // Constructors of SpiceClientGLib.UsbDeviceManager

        constructor(properties?: Partial<UsbDeviceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SpiceClientGLib.UsbDeviceManager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'auto-connect-failed',
            callback: (_source: this, device: UsbDevice, error: GLib.Error) => void,
        ): number;
        connect_after(
            signal: 'auto-connect-failed',
            callback: (_source: this, device: UsbDevice, error: GLib.Error) => void,
        ): number;
        emit(signal: 'auto-connect-failed', device: UsbDevice, error: GLib.Error): void;
        connect(signal: 'device-added', callback: (_source: this, device: UsbDevice) => void): number;
        connect_after(signal: 'device-added', callback: (_source: this, device: UsbDevice) => void): number;
        emit(signal: 'device-added', device: UsbDevice): void;
        connect(
            signal: 'device-error',
            callback: (_source: this, device: UsbDevice, error: GLib.Error) => void,
        ): number;
        connect_after(
            signal: 'device-error',
            callback: (_source: this, device: UsbDevice, error: GLib.Error) => void,
        ): number;
        emit(signal: 'device-error', device: UsbDevice, error: GLib.Error): void;
        connect(signal: 'device-removed', callback: (_source: this, device: UsbDevice) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this, device: UsbDevice) => void): number;
        emit(signal: 'device-removed', device: UsbDevice): void;

        // Own static methods of SpiceClientGLib.UsbDeviceManager

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

        // Own virtual methods of SpiceClientGLib.UsbDeviceManager

        vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void;
        vfunc_device_added(device: UsbDevice): void;
        vfunc_device_error(device: UsbDevice, error: GLib.Error): void;
        vfunc_device_removed(device: UsbDevice): void;

        // Own methods of SpiceClientGLib.UsbDeviceManager

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

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module UsbredirChannel {
        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {}
    }

    /**
     * The #SpiceUsbredirChannel struct is opaque and should not be accessed directly.
     */
    class UsbredirChannel extends Channel {
        static $gtype: GObject.GType<UsbredirChannel>;

        // Constructors of SpiceClientGLib.UsbredirChannel

        constructor(properties?: Partial<UsbredirChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module WebdavChannel {
        // Constructor properties interface

        interface ConstructorProps extends PortChannel.ConstructorProps {}
    }

    /**
     * The #SpiceWebdavChannel struct is opaque and should not be accessed directly.
     */
    class WebdavChannel extends PortChannel {
        static $gtype: GObject.GType<WebdavChannel>;

        // Constructors of SpiceClientGLib.WebdavChannel

        constructor(properties?: Partial<WebdavChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type AudioClass = typeof Audio;
    abstract class AudioPrivate {
        static $gtype: GObject.GType<AudioPrivate>;

        // Constructors of SpiceClientGLib.AudioPrivate

        _init(...args: any[]): void;
    }

    type ChannelClass = typeof Channel;
    abstract class ChannelClassPrivate {
        static $gtype: GObject.GType<ChannelClassPrivate>;

        // Constructors of SpiceClientGLib.ChannelClassPrivate

        _init(...args: any[]): void;
    }

    abstract class ChannelPrivate {
        static $gtype: GObject.GType<ChannelPrivate>;

        // Constructors of SpiceClientGLib.ChannelPrivate

        _init(...args: any[]): void;
    }

    type CursorChannelClass = typeof CursorChannel;
    abstract class CursorChannelPrivate {
        static $gtype: GObject.GType<CursorChannelPrivate>;

        // Constructors of SpiceClientGLib.CursorChannelPrivate

        _init(...args: any[]): void;
    }

    /**
     * The #SpiceCursorShape structure defines the remote cursor's shape.
     */
    class CursorShape {
        static $gtype: GObject.GType<CursorShape>;

        // Own fields of SpiceClientGLib.CursorShape

        width: number;
        height: number;
        hot_spot_x: number;
        hot_spot_y: number;
        data: any;

        // Constructors of SpiceClientGLib.CursorShape

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
        _init(...args: any[]): void;
    }

    type DisplayChannelClass = typeof DisplayChannel;
    abstract class DisplayChannelPrivate {
        static $gtype: GObject.GType<DisplayChannelPrivate>;

        // Constructors of SpiceClientGLib.DisplayChannelPrivate

        _init(...args: any[]): void;
    }

    /**
     * Holds a monitor configuration.
     */
    class DisplayMonitorConfig {
        static $gtype: GObject.GType<DisplayMonitorConfig>;

        // Own fields of SpiceClientGLib.DisplayMonitorConfig

        id: number;
        surface_id: number;
        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of SpiceClientGLib.DisplayMonitorConfig

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
        _init(...args: any[]): void;
    }

    /**
     * Holds the information necessary to use the primary surface.
     */
    class DisplayPrimary {
        static $gtype: GObject.GType<DisplayPrimary>;

        // Own fields of SpiceClientGLib.DisplayPrimary

        format: any;
        width: number;
        height: number;
        stride: number;
        shmid: number;
        data: number;
        marked: boolean;

        // Constructors of SpiceClientGLib.DisplayPrimary

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
        _init(...args: any[]): void;
    }

    type FileTransferTaskClass = typeof FileTransferTask;
    /**
     * Holds the information necessary for using the GL display scanout.
     */
    class GlScanout {
        static $gtype: GObject.GType<GlScanout>;

        // Own fields of SpiceClientGLib.GlScanout

        fd: number;
        width: number;
        height: number;
        stride: number;
        format: number;
        y0top: boolean;

        // Constructors of SpiceClientGLib.GlScanout

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
        _init(...args: any[]): void;

        // Own methods of SpiceClientGLib.GlScanout

        /**
         * Frees the `scanout`.
         */
        free(): void;
    }

    type InputsChannelClass = typeof InputsChannel;
    abstract class InputsChannelPrivate {
        static $gtype: GObject.GType<InputsChannelPrivate>;

        // Constructors of SpiceClientGLib.InputsChannelPrivate

        _init(...args: any[]): void;
    }

    type MainChannelClass = typeof MainChannel;
    abstract class MainChannelPrivate {
        static $gtype: GObject.GType<MainChannelPrivate>;

        // Constructors of SpiceClientGLib.MainChannelPrivate

        _init(...args: any[]): void;
    }

    abstract class MsgIn {
        static $gtype: GObject.GType<MsgIn>;

        // Constructors of SpiceClientGLib.MsgIn

        _init(...args: any[]): void;
    }

    abstract class MsgOut {
        static $gtype: GObject.GType<MsgOut>;

        // Constructors of SpiceClientGLib.MsgOut

        _init(...args: any[]): void;
    }

    type PlaybackChannelClass = typeof PlaybackChannel;
    abstract class PlaybackChannelPrivate {
        static $gtype: GObject.GType<PlaybackChannelPrivate>;

        // Constructors of SpiceClientGLib.PlaybackChannelPrivate

        _init(...args: any[]): void;
    }

    type PortChannelClass = typeof PortChannel;
    abstract class PortChannelPrivate {
        static $gtype: GObject.GType<PortChannelPrivate>;

        // Constructors of SpiceClientGLib.PortChannelPrivate

        _init(...args: any[]): void;
    }

    type QmpPortClass = typeof QmpPort;
    /**
     * Information about VCPU run state.
     */
    class QmpStatus {
        static $gtype: GObject.GType<QmpStatus>;

        // Own fields of SpiceClientGLib.QmpStatus

        version: number;
        running: boolean;
        singlestep: boolean;
        status: string;

        // Constructors of SpiceClientGLib.QmpStatus

        constructor(
            properties?: Partial<{
                version: number;
                running: boolean;
                singlestep: boolean;
                status: string;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of SpiceClientGLib.QmpStatus

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

    type RecordChannelClass = typeof RecordChannel;
    abstract class RecordChannelPrivate {
        static $gtype: GObject.GType<RecordChannelPrivate>;

        // Constructors of SpiceClientGLib.RecordChannelPrivate

        _init(...args: any[]): void;
    }

    type SessionClass = typeof Session;
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;

        // Constructors of SpiceClientGLib.SessionPrivate

        _init(...args: any[]): void;
    }

    type SmartcardChannelClass = typeof SmartcardChannel;
    abstract class SmartcardChannelPrivate {
        static $gtype: GObject.GType<SmartcardChannelPrivate>;

        // Constructors of SpiceClientGLib.SmartcardChannelPrivate

        _init(...args: any[]): void;
    }

    type SmartcardManagerClass = typeof SmartcardManager;
    abstract class SmartcardManagerPrivate {
        static $gtype: GObject.GType<SmartcardManagerPrivate>;

        // Constructors of SpiceClientGLib.SmartcardManagerPrivate

        _init(...args: any[]): void;
    }

    /**
     * The #SpiceSmartcardReader struct is opaque and cannot be accessed directly.
     */
    abstract class SmartcardReader {
        static $gtype: GObject.GType<SmartcardReader>;

        // Constructors of SpiceClientGLib.SmartcardReader

        _init(...args: any[]): void;

        // Own methods of SpiceClientGLib.SmartcardReader

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

    type URIClass = typeof URI;
    abstract class URIPrivate {
        static $gtype: GObject.GType<URIPrivate>;

        // Constructors of SpiceClientGLib.URIPrivate

        _init(...args: any[]): void;
    }

    /**
     * The #SpiceUsbDevice struct is opaque and cannot be accessed directly.
     */
    abstract class UsbDevice {
        static $gtype: GObject.GType<UsbDevice>;

        // Constructors of SpiceClientGLib.UsbDevice

        _init(...args: any[]): void;

        // Own methods of SpiceClientGLib.UsbDevice

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

    type UsbDeviceManagerClass = typeof UsbDeviceManager;
    abstract class UsbDeviceManagerPrivate {
        static $gtype: GObject.GType<UsbDeviceManagerPrivate>;

        // Constructors of SpiceClientGLib.UsbDeviceManagerPrivate

        _init(...args: any[]): void;
    }

    type UsbredirChannelClass = typeof UsbredirChannel;
    abstract class UsbredirChannelPrivate {
        static $gtype: GObject.GType<UsbredirChannelPrivate>;

        // Constructors of SpiceClientGLib.UsbredirChannelPrivate

        _init(...args: any[]): void;
    }

    type WebdavChannelClass = typeof WebdavChannel;
    abstract class WebdavChannelPrivate {
        static $gtype: GObject.GType<WebdavChannelPrivate>;

        // Constructors of SpiceClientGLib.WebdavChannelPrivate

        _init(...args: any[]): void;
    }

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
