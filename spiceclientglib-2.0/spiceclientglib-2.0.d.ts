/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';

export namespace SpiceClientGLib {
    /**
     * SpiceClientGLib-2.0
     */

    export namespace ChannelEvent {
        export const $gtype: GObject.GType<ChannelEvent>;
    }

    /**
     * An event, emitted by {@link SpiceClientGLib.Channel.SignalSignatures.channel_event | SpiceClientGLib.Channel::channel-event} signal.
     * @gir-type Enum
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
     * @gir-type Struct
     */
    class ClientError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

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

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * An action to perform on the VM.
     * @gir-type Enum
     * @since 0.36
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

    export namespace SessionMigration {
        export const $gtype: GObject.GType<SessionMigration>;
    }

    /**
     * Session migration state.
     * @gir-type Enum
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
     * @since 0.24
     */
    const GTK_MAJOR_VERSION: number;
    /**
     * Spice-Gtk micro version component (e.g. 3 if version is 1.2.3)
     * @since 0.24
     */
    const GTK_MICRO_VERSION: number;
    /**
     * Spice-Gtk minor version component (e.g. 2 if version is 1.2.3)
     * @since 0.24
     */
    const GTK_MINOR_VERSION: number;
    /**
     * Gets a {@link GLib.Quark} representing the string "spice-client-error-quark"
     * @returns the {@link GLib.Quark} representing the string.
     */
    function client_error_quark(): GLib.Quark;
    /**
     * Tells the spice server to change the preferred image compression
     * for the `channel`.
     * @param channel a {@link SpiceClientGLib.DisplayChannel}
     * @param compression a `SpiceImageCompression`
     * @since 0.31
     * @deprecated since 0.35: use `spice_display_channel_change_preferred_compression()` instead.
     */
    function display_change_preferred_compression(channel: Channel, compression: number): void;
    /**
     * Tells the spice server to change the preferred video codec type for
     * streaming in `channel`. Application can set only one preferred video codec per
     * display channel.
     * @param channel a {@link SpiceClientGLib.DisplayChannel}
     * @param codec_type a `SpiceVideoCodecType`
     * @since 0.34
     * @deprecated since 0.35: use `spice_display_channel_change_preferred_video_codec_type()` instead.
     */
    function display_change_preferred_video_codec_type(channel: Channel, codec_type: number): void;
    /**
     * Retrieves the GL scanout if available
     * @param channel a {@link SpiceClientGLib.DisplayChannel}
     * @returns the current GL scanout, or `null` if none or not valid
     * @since 0.31
     * @deprecated since 0.35: use `spice_display_channel_get_gl_scanout()` instead.
     */
    function display_get_gl_scanout(channel: DisplayChannel): GlScanout;
    /**
     * Retrieve primary display surface `surface_id`.
     * @param channel a {@link SpiceClientGLib.DisplayChannel}
     * @param surface_id a surface id
     * @param primary a {@link SpiceClientGLib.DisplayPrimary}
     * @returns `true` if the primary surface was found and its details collected in `primary`.
     * @deprecated since 0.35: use `spice_display_channel_get_primary()` instead.
     */
    function display_get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;
    /**
     * After a SpiceDisplayChannel::gl-draw is emitted, the client should
     * draw the current display with the current GL scanout, and must
     * release the GL resource with a call to `spice_display_gl_draw_done()`
     * (failing to do so for each gl-draw may result in a frozen display).
     * @param channel a {@link SpiceClientGLib.DisplayChannel}
     * @since 0.31
     * @deprecated since 0.35: use `spice_display_channel_gl_draw_done()` instead.
     */
    function display_gl_draw_done(channel: DisplayChannel): void;
    /**
     * Gets commandline options.
     *
     * Bindings for other languages are available since 0.32
     * @returns a {@link GLib.OptionGroup} for the commandline arguments specific to Spice.  You have to call `spice_set_session_option()` after to set the options on a {@link SpiceClientGLib.Session}.
     */
    function get_option_group(): GLib.OptionGroup;
    /**
     * Press a mouse button.
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     * @deprecated since 0.35: use `spice_inputs_channel_button_press()` instead.
     */
    function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void;
    /**
     * Release a button.
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param button a SPICE_MOUSE_BUTTON
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     * @deprecated since 0.35: use `spice_inputs_channel_button_release()` instead.
     */
    function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void;
    /**
     * Press a key.
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     * @deprecated since 0.35: use `spice_inputs_channel_key_press()` instead.
     */
    function inputs_key_press(channel: InputsChannel, scancode: number): void;
    /**
     * Press and release a key event atomically (in the same message).
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     * @since 0.13
     * @deprecated since 0.35
     */
    function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void;
    /**
     * Release a key.
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param scancode a PC XT (set 1) key scancode.  For scancodes with an \%0xe0            prefix, drop the prefix and OR the scancode with \%0x100.
     * @deprecated since 0.35: use `spice_inputs_channel_key_release()` instead.
     */
    function inputs_key_release(channel: InputsChannel, scancode: number): void;
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param dx delta X mouse coordinates
     * @param dy delta Y mouse coordinates
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     * @deprecated since 0.35: use `spice_inputs_channel_motion()` instead.
     */
    function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void;
    /**
     * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param x X mouse coordinates
     * @param y Y mouse coordinates
     * @param display display channel id
     * @param button_state SPICE_MOUSE_BUTTON_MASK flags
     * @deprecated since 0.35: use `spice_inputs_channel_position()` instead.
     */
    function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void;
    /**
     * Set the keyboard locks on the guest (Caps, Num, Scroll..)
     * @param channel a {@link SpiceClientGLib.InputsChannel}
     * @param locks {@link SpiceClientGLib.InputsLock} modifiers flags
     * @deprecated since 0.35: use `spice_inputs_channel_set_key_locks()` instead.
     */
    function inputs_set_key_locks(channel: InputsChannel, locks: number): void;
    /**
     * Test capability of a remote agent.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param cap an agent capability identifier
     * @returns `true` if `cap` (channel kind capability) is available.
     * @deprecated since 0.35: use `spice_main_channel_agent_test_capability()` instead.
     */
    function main_agent_test_capability(channel: MainChannel, cap: number): boolean;
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     * @param ntypes the number of `types`
     * @deprecated since 0.6: use `spice_main_channel_clipboard_selection_grab()` instead.
     */
    function main_clipboard_grab(channel: MainChannel, types: number, ntypes: number): void;
    /**
     * Send the clipboard data to the guest.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     * @param size data length in bytes
     * @deprecated since 0.6: use `spice_main_channel_clipboard_selection_notify()` instead.
     */
    function main_clipboard_notify(channel: MainChannel, type: number, data: number, size: number): void;
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @deprecated since 0.6: use `spice_main_channel_clipboard_selection_release()` instead.
     */
    function main_clipboard_release(channel: MainChannel): void;
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the {@link SpiceClientGLib.MainChannel.SignalSignatures.main_clipboard | SpiceClientGLib.MainChannel::main-clipboard} signal.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param type a #VD_AGENT_CLIPBOARD type
     * @deprecated since 0.6: use `spice_main_channel_clipboard_selection_request()` instead.
     */
    function main_clipboard_request(channel: MainChannel, type: number): void;
    /**
     * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
     * @param ntypes the number of `types`
     * @since 0.6
     * @deprecated since 0.35: use `spice_main_channel_clipboard_selection_grab()` instead.
     */
    function main_clipboard_selection_grab(
        channel: MainChannel,
        selection: number,
        types: number,
        ntypes: number,
    ): void;
    /**
     * Send the clipboard data to the guest.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     * @param data clipboard data
     * @param size data length in bytes
     * @since 0.6
     * @deprecated since 0.35: use `spice_main_channel_clipboard_selection_notify()` instead.
     */
    function main_clipboard_selection_notify(
        channel: MainChannel,
        selection: number,
        type: number,
        data: number,
        size: number,
    ): void;
    /**
     * Release the clipboard (for example, when the client loses the
     * clipboard grab): Inform the guest no clipboard data is available.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @since 0.6
     * @deprecated since 0.35: use `spice_main_channel_clipboard_selection_release()` instead.
     */
    function main_clipboard_selection_release(channel: MainChannel, selection: number): void;
    /**
     * Request clipboard data of `type` from the guest. The reply is sent
     * through the {@link SpiceClientGLib.MainChannel.SignalSignatures.main_clipboard_selection | SpiceClientGLib.MainChannel::main-clipboard-selection} signal.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
     * @param type a #VD_AGENT_CLIPBOARD type
     * @since 0.6
     * @deprecated since 0.35: use `spice_main_channel_clipboard_selection_request()` instead.
     */
    function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void;
    /**
     * See: `spice_main_channel_file_copy_async()`
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
     * @param flags set of {@link Gio.FileCopyFlags}
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
     * @deprecated since 0.35: use `spice_main_channel_file_copy_async()` instead.
     */
    function main_file_copy_async(
        channel: MainChannel,
        sources: Gio.File[],
        flags: Gio.FileCopyFlags | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
    ): globalThis.Promise<boolean>;
    /**
     * See: `spice_main_channel_file_copy_async()`
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
     * @param flags set of {@link Gio.FileCopyFlags}
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
     * @deprecated since 0.35: use `spice_main_channel_file_copy_async()` instead.
     */
    function main_file_copy_async(
        channel: MainChannel,
        sources: Gio.File[],
        flags: Gio.FileCopyFlags | null,
        cancellable: Gio.Cancellable | null,
        progress_callback: Gio.FileProgressCallback | null,
        callback: Gio.AsyncReadyCallback<MainChannel> | null,
    ): void;
    /**
     * See: `spice_main_channel_file_copy_async()`
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
     * @param flags set of {@link Gio.FileCopyFlags}
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
     * @deprecated since 0.35: use `spice_main_channel_file_copy_async()` instead.
     */
    function main_file_copy_async(
        channel: MainChannel,
        sources: Gio.File[],
        flags: Gio.FileCopyFlags | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: Gio.FileProgressCallback | null,
        callback?: Gio.AsyncReadyCallback<MainChannel> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * Finishes copying the file started with
     * `spice_main_file_copy_async()`.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param result a {@link Gio.AsyncResult}.
     * @returns a `true` on success, `false` on error.
     */
    function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean;
    /**
     * Request a mouse mode to the server. The server may not be able to
     * change the mouse mode, but spice-gtk will try to request it
     * when possible.
     * @param channel a %SpiceMainChannel
     * @param mode a SPICE_MOUSE_MODE
     * @since 0.32
     * @deprecated since 0.35: use `spice_main_channel_request_mouse_mode()` instead.
     */
    function main_request_mouse_mode(channel: MainChannel, mode: number): void;
    /**
     * Send monitors configuration previously set with
     * `spice_main_set_display()` and `spice_main_set_display_enabled()`
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @returns `true` on success.
     * @deprecated since 0.35: use `spice_main_channel_send_monitor_config()` instead.
     */
    function main_send_monitor_config(channel: MainChannel): boolean;
    /**
     * Notify the guest of screen resolution change. The notification is
     * sent 1 second later, if no further changes happen.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param id display ID
     * @param x x position
     * @param y y position
     * @param width display width
     * @param height display height
     * @deprecated since 0.35: use `spice_main_channel_update_display()` instead.
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
     * display `id`, which the agent translates to disabling the display
     * id. Note: this will take effect next time the monitor
     * configuration is sent.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param id display ID (if -1: set all displays)
     * @param enabled wether display `id` is enabled
     * @since 0.6
     * @deprecated since 0.35: use `spice_main_channel_update_display_enabled()` instead.
     */
    function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void;
    /**
     * Update the display `id` resolution.
     *
     * If `update` is `true`, the remote configuration will be updated too
     * after 1 second without further changes. You can send when you want
     * without delay the new configuration to the remote with
     * `spice_main_send_monitor_config()`
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param id display ID
     * @param x x position
     * @param y y position
     * @param width display width
     * @param height display height
     * @param update if `true`, update guest resolution after 1sec.
     * @deprecated since 0.35: use `spice_main_channel_update_display()` instead.
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
     * When sending monitor configuration to agent guest, if `enabled` is `false`,
     * don't set display `id`, which the agent translates to disabling the display
     * id. If `enabled` is `true`, the monitor will be included in the next monitor
     * update. Note: this will take effect next time the monitor configuration is
     * sent.
     *
     * If `update` is `false`, no server update will be triggered by this call, but
     * the value will be saved and used in the next configuration update.
     * @param channel a {@link SpiceClientGLib.MainChannel}
     * @param id display ID (if -1: set all displays)
     * @param enabled wether display `id` is enabled
     * @param update if `true`, update guest display state after 1sec.
     * @since 0.30
     * @deprecated since 0.35: use `spice_main_channel_update_display_enabled()` instead.
     */
    function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void;
    /**
     * Send an event to the port.
     *
     * Note: The values SPICE_PORT_EVENT_CLOSED and
     * SPICE_PORT_EVENT_OPENED are managed by the channel connection
     * state.
     * @param port a {@link SpiceClientGLib.PortChannel}
     * @param event a SPICE_PORT_EVENT value
     * @since 0.15
     * @deprecated since 0.35: use `spice_port_channel_event()` instead.
     */
    function port_event(port: PortChannel, event: number): void;
    /**
     * Request an asynchronous write of count bytes from `buffer` into the
     * `port`. When the operation is finished `callback` will be called. You
     * can then call `spice_port_write_finish()` to get the result of
     * the operation.
     * @param port A {@link SpiceClientGLib.PortChannel}
     * @param buffer the buffer containing the data to write
     * @param cancellable optional GCancellable object, NULL to ignore
     * @since 0.15
     * @deprecated since 0.35: use `spice_port_channel_write_async()` instead.
     */
    function port_write_async(
        port: PortChannel,
        buffer: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<number>;
    /**
     * Request an asynchronous write of count bytes from `buffer` into the
     * `port`. When the operation is finished `callback` will be called. You
     * can then call `spice_port_write_finish()` to get the result of
     * the operation.
     * @param port A {@link SpiceClientGLib.PortChannel}
     * @param buffer the buffer containing the data to write
     * @param cancellable optional GCancellable object, NULL to ignore
     * @param callback callback to call when the request is satisfied
     * @since 0.15
     * @deprecated since 0.35: use `spice_port_channel_write_async()` instead.
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
     * can then call `spice_port_write_finish()` to get the result of
     * the operation.
     * @param port A {@link SpiceClientGLib.PortChannel}
     * @param buffer the buffer containing the data to write
     * @param cancellable optional GCancellable object, NULL to ignore
     * @param callback callback to call when the request is satisfied
     * @since 0.15
     * @deprecated since 0.35: use `spice_port_channel_write_async()` instead.
     */
    function port_write_async(
        port: PortChannel,
        buffer: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<PortChannel> | null,
    ): globalThis.Promise<number> | void;
    /**
     * Finishes a port write operation.
     * @param port a {@link SpiceClientGLib.PortChannel}
     * @param result a {@link Gio.AsyncResult}
     * @returns a `gssize` containing the number of bytes written to the stream.
     * @since 0.15
     * @deprecated since 0.35: use `spice_port_channel_write_finish()` instead.
     */
    function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number;
    /**
     * Send recorded PCM data to the guest.
     * @param channel a {@link SpiceClientGLib.RecordChannel}
     * @param data PCM data
     * @param bytes size of `data`
     * @param time stream timestamp
     * @deprecated since 0.35: use `spice_record_channel_send_data()` instead.
     */
    function record_send_data(channel: RecordChannel, data: any | null, bytes: number, time: number): void;
    /**
     * Set various properties on `session`, according to the commandline
     * arguments given to `spice_get_option_group()` option group.
     * @param session a {@link SpiceClientGLib.Session} to set option upon
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
     * @param enabled `true` or `false`
     */
    function util_set_debug(enabled: boolean): void;
    /**
     * Creates a string representation of `uuid`, of the form
     * "06e023d5-86d8-420e-8103-383e4566087a"
     * @param uuid UUID byte array
     * @returns A string that should be freed with `g_free()`.
     * @since 0.22
     */
    function uuid_to_string(uuid: number): string;
    /**
     * @gir-type Callback
     */
    interface msg_handler {
        (channel: Channel, _in: MsgIn): void;
    }
    /**
     * @gir-type Alias
     */
    type VReader = object | null;
    export namespace InputsLock {
        export const $gtype: GObject.GType<InputsLock>;
    }

    /**
     * Constants used to synchronize modifiers between a client and a guest.
     * @gir-type Flags
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

    export namespace SessionVerify {
        export const $gtype: GObject.GType<SessionVerify>;
    }

    /**
     * Peer certificate verification parameters flags.
     * @gir-type Flags
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

    namespace Audio {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_context: GLib.MainContext;
            mainContext: GLib.MainContext;
            session: Session;
        }
    }

    /**
     * The {@link SpiceClientGLib.Audio} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    abstract class Audio extends GObject.Object {
        static $gtype: GObject.GType<Audio>;

        // Properties

        get main_context(): GLib.MainContext;
        get mainContext(): GLib.MainContext;
        /**
         * {@link SpiceClientGLib.Session} this {@link SpiceClientGLib.Audio} is associated with
         */
        get session(): Session;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Audio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Audio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: Session, context?: GLib.MainContext | null, name?: string | null): Audio;

        // Signals

        /** @signal */
        connect<K extends keyof Audio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Audio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Audio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Audio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link SpiceClientGLib.Audio} associated with the passed in {@link SpiceClientGLib.Session}.
         * A new {@link SpiceClientGLib.Audio} instance will be created the first time this
         * function is called for a certain {@link SpiceClientGLib.Session}.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the {@link SpiceClientGLib.Session} itself has been unref-ed by the caller.
         * @param session the {@link SpiceClientGLib.Session} to connect to
         * @param context a {@link GLib.MainContext} to attach to (or `null` for default).
         */
        static get(session: Session, context?: GLib.MainContext | null): Audio;

        // Virtual methods

        /**
         * @param channel
         * @virtual
         */
        vfunc_connect_channel(channel: Channel): boolean;
        /**
         * @param cancellable
         * @param main_channel
         * @param callback
         * @virtual
         */
        vfunc_get_playback_volume_info_async(
            cancellable: Gio.Cancellable | null,
            main_channel: MainChannel,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param res
         * @param mute
         * @param nchannels
         * @param volume
         * @virtual
         */
        vfunc_get_playback_volume_info_finish(
            res: Gio.AsyncResult,
            mute: boolean,
            nchannels: number,
            volume: number,
        ): boolean;
        /**
         * @param cancellable
         * @param main_channel
         * @param callback
         * @virtual
         */
        vfunc_get_record_volume_info_async(
            cancellable: Gio.Cancellable | null,
            main_channel: MainChannel,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param res
         * @param mute
         * @param nchannels
         * @param volume
         * @virtual
         */
        vfunc_get_record_volume_info_finish(
            res: Gio.AsyncResult,
            mute: boolean,
            nchannels: number,
            volume: number,
        ): boolean;
    }

    namespace Channel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.Channel.SignalSignatures.channel_event | SpiceClientGLib.Channel::channel-event} signal is emitted when the
             * state of the connection is changed. In case of errors,
             * `spice_channel_get_error()` may provide additional informations
             * on the source of the error.
             * @signal
             */
            'channel-event': (arg0: ChannelEvent) => void;
            /**
             * The {@link SpiceClientGLib.Channel.SignalSignatures.open_fd | SpiceClientGLib.Channel::open-fd} signal is emitted when a new
             * connection is requested. This signal is emitted when the
             * connection is made with `spice_session_open_fd()`.
             * @signal
             */
            'open-fd': (arg0: number) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.Channel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class Channel extends GObject.Object {
        static $gtype: GObject.GType<Channel>;

        // Properties

        get channel_id(): number;
        get channelId(): number;
        get channel_type(): number;
        get channelType(): number;
        /**
         * Get the underlying {@link Gio.Socket}. Note that you should not read or
         * write any data to it directly since this will likely corrupt
         * the channel stream.  This property is mainly useful to get some
         * connections details.
         * @since 0.33
         */
        get socket(): Gio.Socket;
        get spice_session(): Session;
        get spiceSession(): Session;
        get total_read_bytes(): number;
        get totalReadBytes(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Channel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](s: Session, type: number, id: number): Channel;

        // Signals

        /** @signal */
        connect<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Channel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

        // Virtual methods

        /**
         * @param event
         * @virtual
         */
        vfunc_channel_event(event: ChannelEvent): void;
        /**
         * @param migrating
         * @virtual
         */
        vfunc_channel_reset(migrating: boolean): void;
        /**
         * @virtual
         */
        vfunc_channel_send_migration_handshake(): void;
        /**
         * @virtual
         */
        vfunc_channel_up(): void;
        /**
         * @param msg
         * @virtual
         */
        vfunc_handle_msg(msg: MsgIn): void;
        /**
         * @virtual
         */
        vfunc_iterate_read(): void;
        /**
         * @virtual
         */
        vfunc_iterate_write(): void;
        /**
         * @param with_tls
         * @virtual
         */
        vfunc_open_fd(with_tls: number): void;

        // Methods

        /**
         * Connect the channel, using {@link SpiceClientGLib.Session} connection informations
         * @returns `true` on success.
         */
        connect(): boolean;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Disconnect and unref the `channel`.
         */
        destroy(): void;
        /**
         * Close the socket and reset connection specific data. Finally, emit
         * `reason` {@link SpiceClientGLib.Channel.SignalSignatures.channel_event | SpiceClientGLib.Channel::channel-event} on main context if not
         * #SPICE_CHANNEL_NONE.
         * @param reason a channel event emitted on main context (or #SPICE_CHANNEL_NONE)
         */
        disconnect(reason: ChannelEvent | null): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.disconnect
        disconnect(...args: never[]): any;
        /**
         * Forces an asynchronous write of all user-space buffered data for
         * the given channel.
         *
         * When the operation is finished callback will be called. You can
         * then call `spice_channel_flush_finish()` to get the result of the
         * operation.
         * @param cancellable optional GCancellable object, `null` to ignore
         */
        flush_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Forces an asynchronous write of all user-space buffered data for
         * the given channel.
         *
         * When the operation is finished callback will be called. You can
         * then call `spice_channel_flush_finish()` to get the result of the
         * operation.
         * @param cancellable optional GCancellable object, `null` to ignore
         * @param callback callback to call when the request is satisfied
         */
        flush_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Forces an asynchronous write of all user-space buffered data for
         * the given channel.
         *
         * When the operation is finished callback will be called. You can
         * then call `spice_channel_flush_finish()` to get the result of the
         * operation.
         * @param cancellable optional GCancellable object, `null` to ignore
         * @param callback callback to call when the request is satisfied
         */
        flush_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes flushing a channel.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if flush operation succeeded, `false` otherwise.
         */
        flush_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieves the {@link GLib.Error} currently set on channel, if the {@link SpiceClientGLib.Channel}
         * is in error state and can provide additional error details.
         * @returns the pointer to the error, or `null`
         */
        get_error(): GLib.Error;
        /**
         * Connect the channel using `fd` socket.
         *
         * If `fd` is -1, a valid fd will be requested later via the
         * SpiceChannel::open-fd signal.
         * @param fd a file descriptor (socket) or -1. request mechanism
         * @returns `true` on success.
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
         * @returns `true` if `cap` (channel kind capability) is available.
         */
        test_capability(cap: number): boolean;
        /**
         * Test availability of remote "common channel capability".
         * @param cap a capability
         * @returns `true` if `cap` (common channel capability) is available.
         */
        test_common_capability(cap: number): boolean;
    }

    namespace CursorChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.CursorChannel.SignalSignatures.cursor_hide | SpiceClientGLib.CursorChannel::cursor-hide} signal is emitted to hide
             * the cursor/pointer on the display area.
             * @signal
             */
            'cursor-hide': () => void;
            /**
             * The {@link SpiceClientGLib.CursorChannel.SignalSignatures.cursor_move | SpiceClientGLib.CursorChannel::cursor-move} signal is emitted to update
             * the cursor position on the display area.
             * @signal
             */
            'cursor-move': (arg0: number, arg1: number) => void;
            /**
             * The {@link SpiceClientGLib.CursorChannel.SignalSignatures.cursor_reset | SpiceClientGLib.CursorChannel::cursor-reset} signal is emitted to
             * reset the cursor to its default context.
             * @signal
             */
            'cursor-reset': () => void;
            /**
             * The {@link SpiceClientGLib.CursorChannel.SignalSignatures.cursor_set | SpiceClientGLib.CursorChannel::cursor-set} signal is emitted to modify
             * cursor aspect and position on the display area.
             * @signal
             * @deprecated since 0.34: Use {@link SpiceClientGLib.CursorChannel.cursor} notify instead.
             */
            'cursor-set': (arg0: number, arg1: number, arg2: number, arg3: number, arg4: any | null) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {
            cursor: CursorShape;
        }
    }

    /**
     * The {@link SpiceClientGLib.CursorChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class CursorChannel extends Channel {
        static $gtype: GObject.GType<CursorChannel>;

        // Properties

        /**
         * The last {@link SpiceClientGLib.CursorShape} received.
         * @since 0.34
         */
        get cursor(): CursorShape;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CursorChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CursorChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof CursorChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CursorChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CursorChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_cursor_hide(): void;
        /**
         * @param x
         * @param y
         * @virtual
         */
        vfunc_cursor_move(x: number, y: number): void;
        /**
         * @virtual
         */
        vfunc_cursor_reset(): void;
        /**
         * @param width
         * @param height
         * @param hot_x
         * @param hot_y
         * @param rgba
         * @virtual
         */
        vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba?: any | null): void;
    }

    namespace DisplayChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.display_invalidate | SpiceClientGLib.DisplayChannel::display-invalidate} signal is emitted
             * when the rectangular region x/y/w/h of the primary buffer is
             * updated.
             * @signal
             */
            'display-invalidate': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.display_mark | SpiceClientGLib.DisplayChannel::display-mark} signal is emitted when
             * the `RED_DISPLAY_MARK` command is received, and the display
             * should be exposed.
             * @signal
             */
            'display-mark': (arg0: number) => void;
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.display_primary_create | SpiceClientGLib.DisplayChannel::display-primary-create} signal
             * provides main display buffer data.
             * @signal
             */
            'display-primary-create': (
                arg0: number,
                arg1: number,
                arg2: number,
                arg3: number,
                arg4: number,
                arg5: any | null,
            ) => void;
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.display_primary_destroy | SpiceClientGLib.DisplayChannel::display-primary-destroy} signal is
             * emitted when the primary surface is freed and should not be
             * accessed anymore.
             * @signal
             */
            'display-primary-destroy': () => void;
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.gl_draw | SpiceClientGLib.DisplayChannel::gl-draw} signal is emitted when the
             * rectangular region x/y/w/h of the GL scanout is updated and
             * must be drawn. When the draw is finished, you must call
             * `spice_display_gl_draw_done()` in order to release the GL
             * resources.
             * @signal
             * @since 0.31
             */
            'gl-draw': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            /**
             * The {@link SpiceClientGLib.DisplayChannel.SignalSignatures.gst_video_overlay | SpiceClientGLib.DisplayChannel::gst-video-overlay} signal is emitted when
             * pipeline is ready and can be passed to widget to register GStreamer
             * overlay interface and other GStreamer callbacks.
             * @signal
             * @since 0.36
             */
            'gst-video-overlay': (arg0: Gst.Pipeline) => boolean | void;
            /**
             * @signal
             * @since 0.35
             * @deprecated since 0.36: use {@link SpiceClientGLib.DisplayChannel.SignalSignatures.gst_video_overlay | SpiceClientGLib.DisplayChannel::gst-video-overlay} instead
             */
            'streaming-mode': (arg0: boolean) => any | null;
            'notify::gl-scanout': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::monitors-max': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {
            gl_scanout: GlScanout;
            glScanout: GlScanout;
            height: number;
            monitors: any[];
            monitors_max: number;
            monitorsMax: number;
            width: number;
        }
    }

    /**
     * The {@link SpiceClientGLib.DisplayChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class DisplayChannel extends Channel {
        static $gtype: GObject.GType<DisplayChannel>;

        // Properties

        /**
         * The last {@link SpiceClientGLib.GlScanout} received.
         * @since 0.31
         */
        get gl_scanout(): GlScanout;
        /**
         * The last {@link SpiceClientGLib.GlScanout} received.
         * @since 0.31
         */
        get glScanout(): GlScanout;
        get height(): number;
        /**
         * Current monitors configuration.
         * @since 0.13
         */
        get monitors(): any[];
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         * @since 0.13
         */
        get monitors_max(): number;
        /**
         * The maximum number of monitors the server or guest supports.
         * May change during client lifetime, for instance guest may
         * reboot or dynamically adjust this.
         * @since 0.13
         */
        get monitorsMax(): number;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DisplayChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DisplayChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof DisplayChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DisplayChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DisplayChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DisplayChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Tells the spice server to change the preferred image compression
         * for the `channel`.
         * @param channel a {@link SpiceClientGLib.DisplayChannel}
         * @param compression a `SpiceImageCompression`
         */
        static change_preferred_compression(channel: Channel, compression: number): void;
        /**
         * Tells the spice server to change the preferred video codec type for
         * streaming in `channel`. Application can set only one preferred video codec per
         * display channel.
         * @param channel a {@link SpiceClientGLib.DisplayChannel}
         * @param codec_type a `SpiceVideoCodecType`
         */
        static change_preferred_video_codec_type(channel: Channel, codec_type: number): void;
        /**
         * Retrieve primary display surface `surface_id`.
         * @param channel a {@link SpiceClientGLib.DisplayChannel}
         * @param surface_id a surface id
         * @param primary a {@link SpiceClientGLib.DisplayPrimary}
         */
        static get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;

        // Methods

        /**
         * Retrieves the GL scanout if available
         * @returns the current GL scanout, or `null` if none or not valid
         */
        get_gl_scanout(): GlScanout;
        /**
         * After a SpiceDisplayChannel::gl-draw is emitted, the client should
         * draw the current display with the current GL scanout, and must
         * release the GL resource with a call to `spice_display_gl_draw_done()`
         * (failing to do so for each gl-draw may result in a frozen display).
         */
        gl_draw_done(): void;
    }

    namespace FileTransferTask {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            finished: (arg0: GLib.Error) => void;
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
            'notify::channel': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::total-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::transferred-bytes': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class FileTransferTask extends GObject.Object {
        static $gtype: GObject.GType<FileTransferTask>;

        // Properties

        get cancellable(): Gio.Cancellable;
        get channel(): MainChannel;
        get file(): Gio.File;
        get id(): number;
        get progress(): number;
        get total_bytes(): number;
        get totalBytes(): number;
        get transferred_bytes(): number;
        get transferredBytes(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileTransferTask.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileTransferTask.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FileTransferTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileTransferTask.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileTransferTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileTransferTask.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileTransferTask.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileTransferTask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        cancel(): void;
        get_filename(): string;
        get_progress(): number;
        get_total_bytes(): number;
        get_transferred_bytes(): number;
    }

    namespace InputsChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.InputsChannel.SignalSignatures.inputs_modifiers | SpiceClientGLib.InputsChannel::inputs-modifiers} signal is emitted when
             * the guest keyboard locks are changed. You can read the current
             * state from {@link SpiceClientGLib.InputsChannel.key_modifiers} property.
             * @signal
             */
            'inputs-modifiers': () => void;
            'notify::key-modifiers': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {
            key_modifiers: number;
            keyModifiers: number;
        }
    }

    /**
     * The {@link SpiceClientGLib.InputsChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class InputsChannel extends Channel {
        static $gtype: GObject.GType<InputsChannel>;

        // Properties

        get key_modifiers(): number;
        get keyModifiers(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputsChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputsChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof InputsChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputsChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InputsChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputsChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * @param locks {@link SpiceClientGLib.InputsLock} modifiers flags
         */
        set_key_locks(locks: number): void;
    }

    namespace MainChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * Notify when the %SpiceMainChannel:agent-connected or
             * %SpiceMainChannel:agent-caps-0 property change.
             * @signal
             */
            'main-agent-update': () => void;
            /**
             * Provides guest clipboard data requested by `spice_main_clipboard_request()`.
             * @signal
             * @deprecated since 0.6: use SpiceMainChannel::main-clipboard-selection instead.
             */
            'main-clipboard': (arg0: number, arg1: any | null, arg2: number) => void;
            /**
             * Inform when clipboard data is available from the guest, and for
             * which `types`.
             * @signal
             * @deprecated since 0.6: use SpiceMainChannel::main-clipboard-selection-grab instead.
             */
            'main-clipboard-grab': (arg0: any | null, arg1: number) => boolean | void;
            /**
             * Inform when the clipboard is released from the guest, when no
             * clipboard data is available from the guest.
             * @signal
             * @deprecated since 0.6: use SpiceMainChannel::main-clipboard-selection-release instead.
             */
            'main-clipboard-release': () => void;
            /**
             * Request clipboard data from the client.
             * @signal
             * @deprecated since 0.6: use SpiceMainChannel::main-clipboard-selection-request instead.
             */
            'main-clipboard-request': (arg0: number) => boolean | void;
            /**
             * Informs that clipboard selection data are available.
             * @signal
             * @since 0.6
             */
            'main-clipboard-selection': (arg0: number, arg1: number, arg2: any | null, arg3: number) => void;
            /**
             * Inform when clipboard data is available from the guest, and for
             * which `types`.
             * @signal
             * @since 0.6
             */
            'main-clipboard-selection-grab': (arg0: number, arg1: any | null, arg2: number) => boolean | void;
            /**
             * Inform when the clipboard is released from the guest, when no
             * clipboard data is available from the guest.
             * @signal
             * @since 0.6
             */
            'main-clipboard-selection-release': (arg0: number) => void;
            /**
             * Request clipboard data from the client.
             * @signal
             * @since 0.6
             */
            'main-clipboard-selection-request': (arg0: number, arg1: number) => boolean | void;
            /**
             * Notify when the mouse mode has changed.
             * @signal
             */
            'main-mouse-update': () => void;
            /**
             * Inform when migration is starting. Application wishing to make
             * connections themself can set the {@link SpiceClientGLib.Session.client_sockets}
             * to `TRUE`, then follow {@link SpiceClientGLib.Session.SignalSignatures.channel_new | SpiceClientGLib.Session::channel-new} creation, and
             * use `spice_channel_open_fd()` once the socket is created.
             * @signal
             */
            'migration-started': (arg0: GObject.Object) => void;
            /**
             * This signal is emitted when a new file transfer task has been initiated
             * on this channel. Client applications may take a reference on the `task`
             * object and use it to monitor the status of the file transfer task.
             * @signal
             * @since 0.31
             */
            'new-file-transfer': (arg0: GObject.Object) => void;
            'notify::agent-caps-0': (pspec: GObject.ParamSpec) => void;
            'notify::agent-caps0': (pspec: GObject.ParamSpec) => void;
            'notify::agent-connected': (pspec: GObject.ParamSpec) => void;
            'notify::color-depth': (pspec: GObject.ParamSpec) => void;
            'notify::disable-animation': (pspec: GObject.ParamSpec) => void;
            'notify::disable-display-align': (pspec: GObject.ParamSpec) => void;
            'notify::disable-display-position': (pspec: GObject.ParamSpec) => void;
            'notify::disable-font-smooth': (pspec: GObject.ParamSpec) => void;
            'notify::disable-wallpaper': (pspec: GObject.ParamSpec) => void;
            'notify::max-clipboard': (pspec: GObject.ParamSpec) => void;
            'notify::mouse-mode': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.MainChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class MainChannel extends Channel {
        static $gtype: GObject.GType<MainChannel>;

        // Properties

        get agent_caps_0(): number;
        get agentCaps0(): number;
        get agent_connected(): boolean;
        get agentConnected(): boolean;
        /**
         * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older. This option is currently ignored.
         */
        get color_depth(): number;
        set color_depth(val: number);
        /**
         * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older. This option is currently ignored.
         */
        get colorDepth(): number;
        set colorDepth(val: number);
        get disable_animation(): boolean;
        set disable_animation(val: boolean);
        get disableAnimation(): boolean;
        set disableAnimation(val: boolean);
        /**
         * Disable automatic horizontal display position alignment.
         * @since 0.13
         */
        get disable_display_align(): boolean;
        set disable_display_align(val: boolean);
        /**
         * Disable automatic horizontal display position alignment.
         * @since 0.13
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
         * @since 0.22
         */
        get max_clipboard(): number;
        set max_clipboard(val: number);
        /**
         * Maximum size of clipboard operations in bytes (default 100MB,
         * -1 for unlimited size);
         * @since 0.22
         */
        get maxClipboard(): number;
        set maxClipboard(val: number);
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (`SPICE_MOUSE_MODE_CLIENT`), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (`SPICE_MOUSE_MODE_SERVER`), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        get mouse_mode(): number;
        /**
         * Spice protocol specifies two mouse modes, client mode and
         * server mode. In client mode (`SPICE_MOUSE_MODE_CLIENT`), the
         * affective mouse is the client side mouse: the client sends
         * mouse position within the display and the server sends mouse
         * shape messages. In server mode (`SPICE_MOUSE_MODE_SERVER`), the
         * client sends relative mouse movements and the server sends
         * position and shape commands.
         */
        get mouseMode(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MainChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof MainChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MainChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MainChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MainChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Test capability of a remote agent.
         * @param cap an agent capability identifier
         * @returns `true` if `cap` (channel kind capability) is available.
         */
        agent_test_capability(cap: number): boolean;
        /**
         * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD `types`.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param types an array of #VD_AGENT_CLIPBOARD types available in the clipboard
         * @param ntypes the number of `types`
         */
        clipboard_selection_grab(selection: number, types: number, ntypes: number): void;
        /**
         * Send the clipboard data to the guest.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param type a #VD_AGENT_CLIPBOARD type
         * @param data clipboard data
         * @param size data length in bytes
         */
        clipboard_selection_notify(selection: number, type: number, data: number, size: number): void;
        /**
         * Release the clipboard (for example, when the client loses the
         * clipboard grab): Inform the guest no clipboard data is available.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         */
        clipboard_selection_release(selection: number): void;
        /**
         * Request clipboard data of `type` from the guest. The reply is sent
         * through the {@link SpiceClientGLib.MainChannel.SignalSignatures.main_clipboard_selection | SpiceClientGLib.MainChannel::main-clipboard-selection} signal.
         * @param selection one of the clipboard #VD_AGENT_CLIPBOARD_SELECTION_*
         * @param type a #VD_AGENT_CLIPBOARD type
         */
        clipboard_selection_request(selection: number, type: number): void;
        /**
         * Copies the file `sources` to guest
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         *
         * If `progress_callback` is not `null`, then the operation can be monitored by
         * setting this to a {@link Gio.FileProgressCallback} function. `progress_callback_data`
         * will be passed to this function. It is guaranteed that this callback will
         * be called after all data has been transferred with the total number of bytes
         * copied during the operation. Note that before release 0.31, progress_callback
         * was broken since it only provided status for a single file transfer, but did
         * not provide a way to determine which file it referred to. In release 0.31,
         * this behavior was changed so that progress_callback provides the status of
         * all ongoing file transfers. If you need to monitor the status of individual
         * files, please connect to the {@link SpiceClientGLib.MainChannel.SignalSignatures.new_file_transfer | SpiceClientGLib.MainChannel::new-file-transfer} signal.
         *
         * When the operation is finished, callback will be called. You can then call
         * `spice_main_file_copy_finish()` to get the result of the operation. Note that
         * before release 0.33 the callback was called for each file in multiple file
         * transfer. This behavior was changed for the same reason as the
         * progress_callback (above). If you need to monitor the ending of individual
         * files, you can connect to "finished" signal from each SpiceFileTransferTask.
         * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
         * @param flags set of {@link Gio.FileCopyFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
         */
        file_copy_async(
            sources: Gio.File[],
            flags: Gio.FileCopyFlags | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
        ): globalThis.Promise<boolean>;
        /**
         * Copies the file `sources` to guest
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         *
         * If `progress_callback` is not `null`, then the operation can be monitored by
         * setting this to a {@link Gio.FileProgressCallback} function. `progress_callback_data`
         * will be passed to this function. It is guaranteed that this callback will
         * be called after all data has been transferred with the total number of bytes
         * copied during the operation. Note that before release 0.31, progress_callback
         * was broken since it only provided status for a single file transfer, but did
         * not provide a way to determine which file it referred to. In release 0.31,
         * this behavior was changed so that progress_callback provides the status of
         * all ongoing file transfers. If you need to monitor the status of individual
         * files, please connect to the {@link SpiceClientGLib.MainChannel.SignalSignatures.new_file_transfer | SpiceClientGLib.MainChannel::new-file-transfer} signal.
         *
         * When the operation is finished, callback will be called. You can then call
         * `spice_main_file_copy_finish()` to get the result of the operation. Note that
         * before release 0.33 the callback was called for each file in multiple file
         * transfer. This behavior was changed for the same reason as the
         * progress_callback (above). If you need to monitor the ending of individual
         * files, you can connect to "finished" signal from each SpiceFileTransferTask.
         * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
         * @param flags set of {@link Gio.FileCopyFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        file_copy_async(
            sources: Gio.File[],
            flags: Gio.FileCopyFlags | null,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Copies the file `sources` to guest
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         *
         * If `progress_callback` is not `null`, then the operation can be monitored by
         * setting this to a {@link Gio.FileProgressCallback} function. `progress_callback_data`
         * will be passed to this function. It is guaranteed that this callback will
         * be called after all data has been transferred with the total number of bytes
         * copied during the operation. Note that before release 0.31, progress_callback
         * was broken since it only provided status for a single file transfer, but did
         * not provide a way to determine which file it referred to. In release 0.31,
         * this behavior was changed so that progress_callback provides the status of
         * all ongoing file transfers. If you need to monitor the status of individual
         * files, please connect to the {@link SpiceClientGLib.MainChannel.SignalSignatures.new_file_transfer | SpiceClientGLib.MainChannel::new-file-transfer} signal.
         *
         * When the operation is finished, callback will be called. You can then call
         * `spice_main_file_copy_finish()` to get the result of the operation. Note that
         * before release 0.33 the callback was called for each file in multiple file
         * transfer. This behavior was changed for the same reason as the
         * progress_callback (above). If you need to monitor the ending of individual
         * files, you can connect to "finished" signal from each SpiceFileTransferTask.
         * @param sources a `null`-terminated array of {@link Gio.File} objects to be transferred
         * @param flags set of {@link Gio.FileCopyFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param progress_callback function to callback with     progress information, or `null` if progress information is not needed
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        file_copy_async(
            sources: Gio.File[],
            flags: Gio.FileCopyFlags | null,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes copying the file started with
         * `spice_main_file_copy_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns a `true` on success, `false` on error.
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
         * `spice_main_set_display()` and `spice_main_set_display_enabled()`
         * @returns `true` on success.
         */
        send_monitor_config(): boolean;
        /**
         * Update the display `id` resolution.
         *
         * If `update` is `true`, the remote configuration will be updated too
         * after 1 second without further changes. You can send when you want
         * without delay the new configuration to the remote with
         * `spice_main_send_monitor_config()`
         * @param id display ID
         * @param x x position
         * @param y y position
         * @param width display width
         * @param height display height
         * @param update if `true`, update guest resolution after 1sec.
         */
        update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void;
        /**
         * When sending monitor configuration to agent guest, if `enabled` is `false`,
         * don't set display `id`, which the agent translates to disabling the display
         * id. If `enabled` is `true`, the monitor will be included in the next monitor
         * update. Note: this will take effect next time the monitor configuration is
         * sent.
         *
         * If `update` is `false`, no server update will be triggered by this call, but
         * the value will be saved and used in the next configuration update.
         * @param id display ID (if -1: set all displays)
         * @param enabled wether display `id` is enabled
         * @param update if `true`, update guest display state after 1sec.
         */
        update_display_enabled(id: number, enabled: boolean, update: boolean): void;
    }

    namespace PlaybackChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * Provide audio data to be played.
             * @signal
             */
            'playback-data': (arg0: any | null, arg1: number) => void;
            /**
             * Notify when the current playback delay is requested
             * @signal
             */
            'playback-get-delay': () => void;
            /**
             * Notify when the playback should start, and provide audio format
             * characteristics.
             * @signal
             */
            'playback-start': (arg0: number, arg1: number, arg2: number) => void;
            /**
             * Notify when the playback should stop.
             * @signal
             */
            'playback-stop': () => void;
            'notify::min-latency': (pspec: GObject.ParamSpec) => void;
            'notify::mute': (pspec: GObject.ParamSpec) => void;
            'notify::nchannels': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.PlaybackChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class PlaybackChannel extends Channel {
        static $gtype: GObject.GType<PlaybackChannel>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaybackChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlaybackChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof PlaybackChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaybackChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlaybackChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaybackChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param data
         * @param size
         * @virtual
         */
        vfunc_playback_data(data: any | null, size: number): void;
        /**
         * @param format
         * @param channels
         * @param freq
         * @virtual
         */
        vfunc_playback_start(format: number, channels: number, freq: number): void;
        /**
         * @virtual
         */
        vfunc_playback_stop(): void;

        // Methods

        /**
         * Adjust the multimedia time according to the delay.
         * @param delay_ms the delay in ms
         */
        set_delay(delay_ms: number): void;
    }

    namespace PortChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.PortChannel.SignalSignatures.port_data | SpiceClientGLib.PortChannel::port-data} signal is emitted when new
             * port data is received.
             * @signal
             * @since 0.15
             */
            'port-data': (arg0: any | null, arg1: number) => void;
            /**
             * The {@link SpiceClientGLib.PortChannel.SignalSignatures.port_event | SpiceClientGLib.PortChannel::port-event} signal is emitted when new
             * port event is received.
             * @signal
             * @since 0.15
             */
            'port-event': (arg0: number) => void;
            'notify::port-name': (pspec: GObject.ParamSpec) => void;
            'notify::port-opened': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.PortChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class PortChannel extends Channel {
        static $gtype: GObject.GType<PortChannel>;

        // Properties

        get port_name(): string;
        get portName(): string;
        get port_opened(): boolean;
        get portOpened(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PortChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PortChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof PortChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PortChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PortChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PortChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * can then call `spice_port_write_finish()` to get the result of
         * the operation.
         * @param buffer the buffer containing the data to write
         * @param cancellable optional GCancellable object, NULL to ignore
         */
        write_async(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): globalThis.Promise<number>;
        /**
         * Request an asynchronous write of count bytes from `buffer` into the
         * `port`. When the operation is finished `callback` will be called. You
         * can then call `spice_port_write_finish()` to get the result of
         * the operation.
         * @param buffer the buffer containing the data to write
         * @param cancellable optional GCancellable object, NULL to ignore
         * @param callback callback to call when the request is satisfied
         */
        write_async(
            buffer: Uint8Array | string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Request an asynchronous write of count bytes from `buffer` into the
         * `port`. When the operation is finished `callback` will be called. You
         * can then call `spice_port_write_finish()` to get the result of
         * the operation.
         * @param buffer the buffer containing the data to write
         * @param cancellable optional GCancellable object, NULL to ignore
         * @param callback callback to call when the request is satisfied
         */
        write_async(
            buffer: Uint8Array | string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Finishes a port write operation.
         * @param result a {@link Gio.AsyncResult}
         * @returns a `gssize` containing the number of bytes written to the stream.
         */
        write_finish(result: Gio.AsyncResult): number;
    }

    namespace QmpPort {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Event emitted whenever a QMP event is received.
             * @signal
             * @since 0.36
             */
            event: (arg0: string, arg1: any | null) => void;
            'notify::channel': (pspec: GObject.ParamSpec) => void;
            'notify::ready': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel: PortChannel;
            ready: boolean;
        }
    }

    /**
     * Opaque data structure.
     * @gir-type Class
     * @since 0.36
     */
    class QmpPort extends GObject.Object {
        static $gtype: GObject.GType<QmpPort>;

        // Properties

        get channel(): PortChannel;
        get ready(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: QmpPort.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<QmpPort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof QmpPort.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QmpPort.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof QmpPort.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QmpPort.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof QmpPort.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QmpPort.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Associate a QMP port helper to the given port channel.  If there is
         * already a helper associated with the channel, it is simply returned.
         * @param channel the QMP port channel
         */
        static get(channel: PortChannel): QmpPort;

        // Methods

        /**
         * Query the run status of all VCPUs.
         * @param cancellable A {@link Gio.Cancellable}
         */
        query_status_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<QmpStatus>;
        /**
         * Query the run status of all VCPUs.
         * @param cancellable A {@link Gio.Cancellable}
         * @param callback The async callback.
         */
        query_status_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Query the run status of all VCPUs.
         * @param cancellable A {@link Gio.Cancellable}
         * @param callback The async callback.
         */
        query_status_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<QmpStatus> | void;
        /**
         * Finish the asynchronous status query.
         * @param result The async {@link Gio.AsyncResult} result
         * @returns The {@link SpiceClientGLib.QmpStatus} result or `null`, in which case `error` will be set.
         */
        query_status_finish(result: Gio.AsyncResult): QmpStatus;
        /**
         * Request the VM to perform an action.
         * @param action a VM action
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        vm_action_async(
            action: QmpPortVmAction | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Request the VM to perform an action.
         * @param action a VM action
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to call when the action is complete
         */
        vm_action_async(
            action: QmpPortVmAction | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Request the VM to perform an action.
         * @param action a VM action
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to call when the action is complete
         */
        vm_action_async(
            action: QmpPortVmAction | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous VM action and returns the result.
         * @param result The async {@link Gio.AsyncResult} result
         */
        vm_action_finish(result: Gio.AsyncResult): boolean;
    }

    namespace RecordChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            /**
             * Notify when the recording should start, and provide audio format
             * characteristics.
             * @signal
             */
            'record-start': (arg0: number, arg1: number, arg2: number) => void;
            /**
             * Notify when the recording should stop.
             * @signal
             */
            'record-stop': () => void;
            'notify::mute': (pspec: GObject.ParamSpec) => void;
            'notify::nchannels': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {
            mute: boolean;
            nchannels: number;
            volume: any;
        }
    }

    /**
     * The {@link SpiceClientGLib.RecordChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class RecordChannel extends Channel {
        static $gtype: GObject.GType<RecordChannel>;

        // Properties

        get mute(): boolean;
        set mute(val: boolean);
        get nchannels(): number;
        set nchannels(val: number);
        get volume(): any;
        set volume(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecordChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecordChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof RecordChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecordChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecordChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param data
         * @param size
         * @virtual
         */
        vfunc_record_data(data: any | null, size: number): void;
        /**
         * @param format
         * @param channels
         * @param freq
         * @virtual
         */
        vfunc_record_start(format: number, channels: number, freq: number): void;
        /**
         * @virtual
         */
        vfunc_record_stop(): void;

        // Methods

        /**
         * Send recorded PCM data to the guest.
         * @param data PCM data
         * @param bytes size of `data`
         * @param time stream timestamp
         */
        send_data(data: any | null, bytes: number, time: number): void;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.Session.SignalSignatures.channel_destroy | SpiceClientGLib.Session::channel-destroy} signal is emitted each time a {@link SpiceClientGLib.Channel} is destroyed.
             * @signal
             */
            'channel-destroy': (arg0: Channel) => void;
            /**
             * The {@link SpiceClientGLib.Session.SignalSignatures.channel_new | SpiceClientGLib.Session::channel-new} signal is emitted each time a {@link SpiceClientGLib.Channel} is created.
             * @signal
             */
            'channel-new': (arg0: Channel) => void;
            /**
             * The {@link SpiceClientGLib.Session.SignalSignatures.disconnected | SpiceClientGLib.Session::disconnected} signal is emitted when all channels have been destroyed.
             * @signal
             * @since 0.35
             */
            disconnected: () => void;
            /**
             * The {@link SpiceClientGLib.Session.SignalSignatures.mm_time_reset | SpiceClientGLib.Session::mm-time-reset} is emitted when we identify discontinuity in mm-time
             *
             * Since 0.20
             * @signal
             */
            'mm-time-reset': () => void;
            'notify::ca': (pspec: GObject.ParamSpec) => void;
            'notify::ca-file': (pspec: GObject.ParamSpec) => void;
            'notify::cache-size': (pspec: GObject.ParamSpec) => void;
            'notify::cert-subject': (pspec: GObject.ParamSpec) => void;
            'notify::ciphers': (pspec: GObject.ParamSpec) => void;
            'notify::client-sockets': (pspec: GObject.ParamSpec) => void;
            'notify::color-depth': (pspec: GObject.ParamSpec) => void;
            'notify::disable-effects': (pspec: GObject.ParamSpec) => void;
            'notify::enable-audio': (pspec: GObject.ParamSpec) => void;
            'notify::enable-smartcard': (pspec: GObject.ParamSpec) => void;
            'notify::enable-usbredir': (pspec: GObject.ParamSpec) => void;
            'notify::gl-scanout': (pspec: GObject.ParamSpec) => void;
            'notify::glz-window-size': (pspec: GObject.ParamSpec) => void;
            'notify::host': (pspec: GObject.ParamSpec) => void;
            'notify::inhibit-keyboard-grab': (pspec: GObject.ParamSpec) => void;
            'notify::migration-state': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::proxy': (pspec: GObject.ParamSpec) => void;
            'notify::pubkey': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::secure-channels': (pspec: GObject.ParamSpec) => void;
            'notify::share-dir-ro': (pspec: GObject.ParamSpec) => void;
            'notify::shared-dir': (pspec: GObject.ParamSpec) => void;
            'notify::smartcard-certificates': (pspec: GObject.ParamSpec) => void;
            'notify::smartcard-db': (pspec: GObject.ParamSpec) => void;
            'notify::tls-port': (pspec: GObject.ParamSpec) => void;
            'notify::unix-path': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
            'notify::uuid': (pspec: GObject.ParamSpec) => void;
            'notify::verify': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.Session} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Properties

        /**
         * CA certificates in PEM format. The text data can contain
         * several CA certificates identified by:
         *
         *  -----BEGIN CERTIFICATE-----
         *  ... (CA certificate in base64 encoding) ...
         *  -----END CERTIFICATE-----
         * @since 0.15
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
         * @since 0.9
         */
        get cache_size(): number;
        set cache_size(val: number);
        /**
         * Images cache size. If 0, don't set.
         * @since 0.9
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
         * @since 0.7
         * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older. This option is currently ignored.
         */
        get color_depth(): number;
        set color_depth(val: number);
        /**
         * Display color depth to set on new display channels. If 0, don't set.
         * @since 0.7
         * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older. This option is currently ignored.
         */
        get colorDepth(): number;
        set colorDepth(val: number);
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         * @since 0.7
         */
        get disable_effects(): string[];
        set disable_effects(val: string[]);
        /**
         * A string array of effects to disable. The settings will
         * be applied on new display channels. The following effets can be
         * disabled "wallpaper", "font-smooth", "animation", and "all",
         * which will disable all the effects. If NULL, don't apply changes.
         * @since 0.7
         */
        get disableEffects(): string[];
        set disableEffects(val: string[]);
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         * @since 0.8
         */
        get enable_audio(): boolean;
        set enable_audio(val: boolean);
        /**
         * If set to TRUE, the audio channels will be enabled for
         * playback and recording.
         * @since 0.8
         */
        get enableAudio(): boolean;
        set enableAudio(val: boolean);
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         * @since 0.7
         */
        get enable_smartcard(): boolean;
        set enable_smartcard(val: boolean);
        /**
         * If set to TRUE, the smartcard channel will be enabled and smartcard
         * events will be forwarded to the guest
         * @since 0.7
         */
        get enableSmartcard(): boolean;
        set enableSmartcard(val: boolean);
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         * @since 0.8
         */
        get enable_usbredir(): boolean;
        set enable_usbredir(val: boolean);
        /**
         * If set to TRUE, the usbredir channel will be enabled and USB devices
         * can be redirected to the guest
         * @since 0.8
         */
        get enableUsbredir(): boolean;
        set enableUsbredir(val: boolean);
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         * @since 0.36
         */
        get gl_scanout(): boolean;
        set gl_scanout(val: boolean);
        /**
         * Whether to enable gl-scanout (Unix only).  Set to TRUE by
         * default on EGL-enabled host, unless SPICE_DISABLE_GL_SCANOUT
         * environment variable is set.
         * @since 0.36
         */
        get glScanout(): boolean;
        set glScanout(val: boolean);
        /**
         * Glz window size. If 0, don't set.
         * @since 0.9
         */
        get glz_window_size(): number;
        set glz_window_size(val: number);
        /**
         * Glz window size. If 0, don't set.
         * @since 0.9
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
         * {@link SpiceClientGLib.SessionMigration} bit field indicating if a migration is in
         * progress
         */
        get migration_state(): SessionMigration;
        /**
         * {@link SpiceClientGLib.SessionMigration} bit field indicating if a migration is in
         * progress
         */
        get migrationState(): SessionMigration;
        /**
         * Spice server name.
         * @since 0.11
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
         * @since 0.17
         */
        get proxy(): string;
        set proxy(val: string);
        get pubkey(): Uint8Array;
        set pubkey(val: Uint8Array);
        /**
         * Whether this connection is read-only mode.
         * @since 0.8
         */
        get read_only(): boolean;
        set read_only(val: boolean);
        /**
         * Whether this connection is read-only mode.
         * @since 0.8
         */
        get readOnly(): boolean;
        set readOnly(val: boolean);
        /**
         * A string array of channel types to be secured.
         * @since 0.20
         */
        get secure_channels(): string[];
        set secure_channels(val: string[]);
        /**
         * A string array of channel types to be secured.
         * @since 0.20
         */
        get secureChannels(): string[];
        set secureChannels(val: string[]);
        /**
         * Whether to share the directory read-only.
         * @since 0.28
         */
        get share_dir_ro(): boolean;
        set share_dir_ro(val: boolean);
        /**
         * Whether to share the directory read-only.
         * @since 0.28
         */
        get shareDirRo(): boolean;
        set shareDirRo(val: boolean);
        /**
         * Location of the shared directory
         * @since 0.24
         */
        get shared_dir(): string;
        set shared_dir(val: string);
        /**
         * Location of the shared directory
         * @since 0.24
         */
        get sharedDir(): string;
        set sharedDir(val: string);
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also `spice_smartcard_manager_insert_card()`
         * @since 0.7
         */
        get smartcard_certificates(): string[];
        set smartcard_certificates(val: string[]);
        /**
         * This property is used when one wants to simulate a smartcard with no
         * hardware smartcard reader. If it's set to a NULL-terminated string
         * array containing the names of 3 valid certificates, these will be
         * used to simulate a smartcard in the guest
         * See also `spice_smartcard_manager_insert_card()`
         * @since 0.7
         */
        get smartcardCertificates(): string[];
        set smartcardCertificates(val: string[]);
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         * @since 0.7
         */
        get smartcard_db(): string;
        set smartcard_db(val: string);
        /**
         * Path to the NSS certificate database containing the certificates to
         * use to simulate a software smartcard
         * @since 0.7
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
         * @since 0.28
         */
        get unix_path(): string;
        set unix_path(val: string);
        /**
         * Path of the Unix socket to connect to
         * @since 0.28
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
         * @since 0.11
         */
        get uuid(): any;
        /**
         * {@link SpiceClientGLib.SessionVerify} bit field indicating which parts of the peer
         * certificate should be checked
         */
        get verify(): SessionVerify;
        set verify(val: SessionVerify);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Session;

        // Signals

        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param channel
         * @virtual
         */
        vfunc_channel_destroy(channel: Channel): void;
        /**
         * @param channel
         * @virtual
         */
        vfunc_channel_new(channel: Channel): void;

        // Methods

        /**
         * Open the session using the {@link SpiceClientGLib.Session.host} and
         * {@link SpiceClientGLib.Session.port}.
         * @returns `false` if the session state is invalid for connection request. `true` if the connection is initiated. To know whether the connection is established, you must watch for channels creation ({@link SpiceClientGLib.Session.SignalSignatures.channel_new | SpiceClientGLib.Session::channel-new}) and the channels state ({@link SpiceClientGLib.Channel.SignalSignatures.channel_event | SpiceClientGLib.Channel::channel-event}).
         */
        connect(): boolean;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Disconnect the `session`, and destroy all channels.
         */
        disconnect(): void;
        /**
         * Get the list of current channels associated with this `session`.
         * @returns a {@link GLib.List}          of unowned {@link SpiceClientGLib.Channel} channels.
         */
        get_channels(): Channel[];
        /**
         * Gets the `session` proxy uri.
         * @returns the session proxy {@link SpiceClientGLib.URI} or `null`.
         */
        get_proxy_uri(): URI;
        /**
         * Checks whether the `session` is read-only.
         * @returns whether the `session` is in read-only mode.
         */
        get_read_only(): boolean;
        /**
         * See if there is a `type` channel in the channels associated with this
         * `session`.
         * @param type a {@link SpiceClientGLib.Channel.channel_type}
         * @returns TRUE if a `type` channel is available otherwise FALSE.
         */
        has_channel_type(type: number): boolean;
        /**
         * During seamless migration, channels may be created to establish a
         * connection with the target, but they are temporary and should only
         * handle migration steps. In order to avoid other interactions with
         * the client, channels should check this value.
         * @returns `true` if the session is a copy created during migration
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
         * create and pass a new socket to the channel using `spice_channel_open_fd`, in
         * the signal callback.
         *
         * If `fd` is -1, a valid fd will be requested later via the
         * SpiceChannel::open-fd signal. Typically, you would want to just pass -1 as
         * `fd` this call since you will have to hook to SpiceChannel::open-fd signal
         * anyway.
         * @param fd a file descriptor (socket) or -1
         * @returns `true` on success.
         */
        open_fd(fd: number): boolean;
    }

    namespace SmartcardChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {}
    }

    /**
     * The {@link SpiceClientGLib.SmartcardChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class SmartcardChannel extends Channel {
        static $gtype: GObject.GType<SmartcardChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SmartcardChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SmartcardChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof SmartcardChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SmartcardChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SmartcardChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SmartcardChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SmartcardManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.SmartcardManager.SignalSignatures.card_inserted | SpiceClientGLib.SmartcardManager::card-inserted} signal is emitted whenever
             * a smartcard is inserted in a reader
             * @signal
             */
            'card-inserted': (arg0: VReader) => void;
            /**
             * The {@link SpiceClientGLib.SmartcardManager.SignalSignatures.card_removed | SpiceClientGLib.SmartcardManager::card-removed} signal is emitted whenever
             * a smartcard was removed from a reader.
             * @signal
             */
            'card-removed': (arg0: VReader) => void;
            /**
             * The {@link SpiceClientGLib.SmartcardManager.SignalSignatures.reader_added | SpiceClientGLib.SmartcardManager::reader-added} signal is emitted whenever
             * a new smartcard reader (software or hardware) has been plugged in.
             * @signal
             */
            'reader-added': (arg0: VReader) => void;
            /**
             * The {@link SpiceClientGLib.SmartcardManager.SignalSignatures.reader_removed | SpiceClientGLib.SmartcardManager::reader-removed} signal is emitted whenever
             * a smartcard reader (software or hardware) has been removed.
             * @signal
             */
            'reader-removed': (arg0: VReader) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The {@link SpiceClientGLib.SmartcardManager} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class SmartcardManager extends GObject.Object {
        static $gtype: GObject.GType<SmartcardManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SmartcardManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SmartcardManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SmartcardManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SmartcardManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SmartcardManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SmartcardManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SmartcardManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SmartcardManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * {@link SpiceClientGLib.SmartcardManager} is a singleton, use this function to get a pointer
         * to it. A new SpiceSmartcardManager instance will be created the first
         * time this function is called
         */
        static get(): SmartcardManager;

        // Virtual methods

        /**
         * @param reader
         * @virtual
         */
        vfunc_card_inserted(reader: SmartcardReader): void;
        /**
         * @param reader
         * @virtual
         */
        vfunc_card_removed(reader: SmartcardReader): void;
        /**
         * @param reader
         * @virtual
         */
        vfunc_reader_added(reader: SmartcardReader): void;
        /**
         * @param reader
         * @virtual
         */
        vfunc_reader_removed(reader: SmartcardReader): void;

        // Methods

        /**
         * Gets the list of smartcard readers that are currently available, they
         * can be either software (emulated) readers, or hardware ones.
         * @returns a newly allocated list of SpiceSmartcardReader instances, or NULL if none were found. When no longer needed, the list must be freed after unreferencing its elements with `g_boxed_free()`
         */
        get_readers(): SmartcardReader[];
        /**
         * Simulates the insertion of a smartcard in the guest. Valid certificates
         * must have been set in {@link SpiceClientGLib.Session.smartcard_certificates} for software
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

    namespace URI {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::hostname': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::scheme': (pspec: GObject.ParamSpec) => void;
            'notify::user': (pspec: GObject.ParamSpec) => void;
        }

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
     * The {@link SpiceClientGLib.URI} struct is opaque and cannot be accessed directly.
     * @gir-type Class
     */
    class URI extends GObject.Object {
        static $gtype: GObject.GType<URI>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URI.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof URI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URI.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URI.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URI.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URI.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_hostname(): string;
        get_password(): string;
        get_port(): number;
        get_scheme(): string;
        get_user(): string;
        /**
         * @param hostname
         */
        set_hostname(hostname: string): void;
        /**
         * @param password
         */
        set_password(password: string): void;
        /**
         * @param port
         */
        set_port(port: number): void;
        /**
         * @param scheme
         */
        set_scheme(scheme: string): void;
        /**
         * @param user
         */
        set_user(user: string): void;
        to_string(): string;
    }

    namespace UsbDeviceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link SpiceClientGLib.UsbDeviceManager.SignalSignatures.auto_connect_failed | SpiceClientGLib.UsbDeviceManager::auto-connect-failed} signal is emitted
             * whenever the auto-connect property is true, and a newly plugged in
             * device could not be auto-connected.
             * @signal
             */
            'auto-connect-failed': (arg0: UsbDevice, arg1: GLib.Error) => void;
            /**
             * The {@link SpiceClientGLib.UsbDeviceManager.SignalSignatures.device_added | SpiceClientGLib.UsbDeviceManager::device-added} signal is emitted whenever
             * a new USB device has been plugged in.
             * @signal
             */
            'device-added': (arg0: UsbDevice) => void;
            /**
             * The {@link SpiceClientGLib.UsbDeviceManager.SignalSignatures.device_error | SpiceClientGLib.UsbDeviceManager::device-error} signal is emitted whenever an
             * error happens which causes a device to no longer be available to the
             * guest.
             * @signal
             */
            'device-error': (arg0: UsbDevice, arg1: GLib.Error) => void;
            /**
             * The {@link SpiceClientGLib.UsbDeviceManager.SignalSignatures.device_removed | SpiceClientGLib.UsbDeviceManager::device-removed} signal is emitted whenever
             * an USB device has been removed.
             * @signal
             */
            'device-removed': (arg0: UsbDevice) => void;
            'notify::auto-connect': (pspec: GObject.ParamSpec) => void;
            'notify::auto-connect-filter': (pspec: GObject.ParamSpec) => void;
            'notify::free-channels': (pspec: GObject.ParamSpec) => void;
            'notify::redirect-on-connect': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
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
     * The {@link SpiceClientGLib.UsbDeviceManager} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class UsbDeviceManager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<UsbDeviceManager>;

        // Properties

        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when `SpiceGtkSession`'s auto-usbredir property is TRUE, this
         * property is controlled by `SpiceGtkSession`.
         */
        get auto_connect(): boolean;
        set auto_connect(val: boolean);
        /**
         * Set this to TRUE to automatically redirect newly plugged in device.
         *
         * Note when `SpiceGtkSession`'s auto-usbredir property is TRUE, this
         * property is controlled by `SpiceGtkSession`.
         */
        get autoConnect(): boolean;
        set autoConnect(val: boolean);
        /**
         * Set a string specifying a filter to use to determine which USB devices
         * to autoconnect when plugged in, a filter consists of one or more rules.
         * Where each rule has the form of:
         *
         * `class`,`vendor`,`product`,`version`,`allow`
         *
         * Use -1 for `class`/`vendor`/`product`/`version` to accept any value.
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
         * `class`,`vendor`,`product`,`version`,`allow`
         *
         * Use -1 for `class`/`vendor`/`product`/`version` to accept any value.
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
         * @since 0.31
         */
        get free_channels(): number;
        /**
         * Get the number of available channels for redirecting USB devices.
         * @since 0.31
         */
        get freeChannels(): number;
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See {@link SpiceClientGLib.UsbDeviceManager.auto_connect_filter} for the filter string
         * format.
         */
        get redirect_on_connect(): string;
        set redirect_on_connect(val: string);
        /**
         * Set a string specifying a filter selecting USB devices to automatically
         * redirect after a Spice connection has been established.
         *
         * See {@link SpiceClientGLib.UsbDeviceManager.auto_connect_filter} for the filter string
         * format.
         */
        get redirectOnConnect(): string;
        set redirectOnConnect(val: string);
        /**
         * {@link SpiceClientGLib.Session} this {@link SpiceClientGLib.UsbDeviceManager} is associated with
         */
        get session(): Session;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UsbDeviceManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UsbDeviceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof UsbDeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UsbDeviceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UsbDeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UsbDeviceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UsbDeviceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UsbDeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link SpiceClientGLib.UsbDeviceManager} associated with the passed in {@link SpiceClientGLib.Session}.
         * A new {@link SpiceClientGLib.UsbDeviceManager} instance will be created the first time this
         * function is called for a certain {@link SpiceClientGLib.Session}.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the {@link SpiceClientGLib.Session} itself has been unref-ed by the caller.
         * @param session {@link SpiceClientGLib.Session} for which to get the {@link SpiceClientGLib.UsbDeviceManager}
         */
        static get(session: Session): UsbDeviceManager;

        // Virtual methods

        /**
         * @param device
         * @param error
         * @virtual
         */
        vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_added(device: UsbDevice): void;
        /**
         * @param device
         * @param error
         * @virtual
         */
        vfunc_device_error(device: UsbDevice, error: GLib.Error): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_removed(device: UsbDevice): void;

        // Methods

        /**
         * Checks whether it is possible to redirect the `device`.
         * @param device a {@link SpiceClientGLib.UsbDevice} to disconnect
         * @returns `true` if `device` can be redirected
         */
        can_redirect_device(device: UsbDevice): boolean;
        /**
         * Asynchronously connects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_connect_device_finish()`
         * to get the result of the operation.
         * @param device a {@link SpiceClientGLib.UsbDevice} to redirect
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        connect_device_async(device: UsbDevice, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously connects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_connect_device_finish()`
         * to get the result of the operation.
         * @param device a {@link SpiceClientGLib.UsbDevice} to redirect
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        connect_device_async(
            device: UsbDevice,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously connects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_connect_device_finish()`
         * to get the result of the operation.
         * @param device a {@link SpiceClientGLib.UsbDevice} to redirect
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        connect_device_async(
            device: UsbDevice,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an async operation. See `spice_usb_device_manager_connect_device_async()`.
         * @param res a {@link Gio.AsyncResult}
         * @returns `true` if connection is successful
         */
        connect_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Disconnects the `device`.
         * @param device a {@link SpiceClientGLib.UsbDevice} to disconnect
         */
        disconnect_device(device: UsbDevice): void;
        /**
         * Asynchronously disconnects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_disconnect_device_finish()`
         * to get the result of the operation.
         * @param device a connected {@link SpiceClientGLib.UsbDevice} to disconnect.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        disconnect_device_async(device: UsbDevice, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously disconnects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_disconnect_device_finish()`
         * to get the result of the operation.
         * @param device a connected {@link SpiceClientGLib.UsbDevice} to disconnect.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        disconnect_device_async(
            device: UsbDevice,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously disconnects the `device`. When completed, `callback` will be called.
         * Then it is possible to call `spice_usb_device_manager_disconnect_device_finish()`
         * to get the result of the operation.
         * @param device a connected {@link SpiceClientGLib.UsbDevice} to disconnect.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        disconnect_device_async(
            device: UsbDevice,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an async operation. See `spice_usb_device_manager_disconnect_device_async()`.
         * @param res a {@link Gio.AsyncResult}
         * @returns `true` if disconnection is successful
         */
        disconnect_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finds devices associated with the `manager`
         * @returns a %GPtrArray array of %SpiceUsbDevice
         */
        get_devices(): UsbDevice[];
        /**
         * Finds devices associated with the `manager` complying with the `filter`
         * @param filter filter string for selecting which devices to return,      see {@link SpiceClientGLib.UsbDeviceManager.auto_connect_filter} for the filter      string format
         * @returns a %GPtrArray array of %SpiceUsbDevice
         */
        get_devices_with_filter(filter?: string | null): UsbDevice[];
        /**
         * Finds if the `device` is connected.
         * @param device a {@link SpiceClientGLib.UsbDevice}
         * @returns `true` if `device` has an associated USB redirection channel
         */
        is_device_connected(device: UsbDevice): boolean;
        /**
         * Checks whether a device is being redirected
         * @returns `true` if device redirection negotiation flow is in progress
         */
        is_redirecting(): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace UsbredirChannel {
        // Signal signatures
        interface SignalSignatures extends Channel.SignalSignatures {
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Channel.ConstructorProps {}
    }

    /**
     * The {@link SpiceClientGLib.UsbredirChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class UsbredirChannel extends Channel {
        static $gtype: GObject.GType<UsbredirChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UsbredirChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UsbredirChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof UsbredirChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UsbredirChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UsbredirChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UsbredirChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WebdavChannel {
        // Signal signatures
        interface SignalSignatures extends PortChannel.SignalSignatures {
            'notify::port-name': (pspec: GObject.ParamSpec) => void;
            'notify::port-opened': (pspec: GObject.ParamSpec) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::channel-type': (pspec: GObject.ParamSpec) => void;
            'notify::socket': (pspec: GObject.ParamSpec) => void;
            'notify::spice-session': (pspec: GObject.ParamSpec) => void;
            'notify::total-read-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PortChannel.ConstructorProps {}
    }

    /**
     * The {@link SpiceClientGLib.WebdavChannel} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class WebdavChannel extends PortChannel {
        static $gtype: GObject.GType<WebdavChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebdavChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebdavChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect_after<K extends keyof WebdavChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebdavChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebdavChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebdavChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type AudioClass = typeof Audio;
    /**
     * @gir-type Struct
     */
    abstract class AudioPrivate {
        static $gtype: GObject.GType<AudioPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ChannelClass = typeof Channel;
    /**
     * @gir-type Struct
     */
    abstract class ChannelClassPrivate {
        static $gtype: GObject.GType<ChannelClassPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class ChannelPrivate {
        static $gtype: GObject.GType<ChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CursorChannelClass = typeof CursorChannel;
    /**
     * @gir-type Struct
     */
    abstract class CursorChannelPrivate {
        static $gtype: GObject.GType<CursorChannelPrivate>;
    }

    /**
     * The {@link SpiceClientGLib.CursorShape} structure defines the remote cursor's shape.
     * @gir-type Struct
     */
    class CursorShape {
        static $gtype: GObject.GType<CursorShape>;

        // Fields

        width: number;
        height: number;
        hot_spot_x: number;
        hot_spot_y: number;
        data: any;

        // Constructors

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
     * @gir-type Alias
     */
    type DisplayChannelClass = typeof DisplayChannel;
    /**
     * @gir-type Struct
     */
    abstract class DisplayChannelPrivate {
        static $gtype: GObject.GType<DisplayChannelPrivate>;
    }

    /**
     * Holds a monitor configuration.
     * @gir-type Struct
     */
    class DisplayMonitorConfig {
        static $gtype: GObject.GType<DisplayMonitorConfig>;

        // Fields

        id: number;
        surface_id: number;
        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

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
     * @gir-type Struct
     */
    class DisplayPrimary {
        static $gtype: GObject.GType<DisplayPrimary>;

        // Fields

        format: any;
        width: number;
        height: number;
        stride: number;
        shmid: number;
        data: number;
        marked: boolean;

        // Constructors

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

    /**
     * @gir-type Alias
     */
    type FileTransferTaskClass = typeof FileTransferTask;
    /**
     * Holds the information necessary for using the GL display scanout.
     * @gir-type Struct
     */
    class GlScanout {
        static $gtype: GObject.GType<GlScanout>;

        // Fields

        fd: number;
        width: number;
        height: number;
        stride: number;
        format: number;
        y0top: boolean;

        // Constructors

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

        // Methods

        /**
         * Frees the `scanout`.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type InputsChannelClass = typeof InputsChannel;
    /**
     * @gir-type Struct
     */
    abstract class InputsChannelPrivate {
        static $gtype: GObject.GType<InputsChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MainChannelClass = typeof MainChannel;
    /**
     * @gir-type Struct
     */
    abstract class MainChannelPrivate {
        static $gtype: GObject.GType<MainChannelPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class MsgIn {
        static $gtype: GObject.GType<MsgIn>;
    }

    /**
     * @gir-type Struct
     */
    abstract class MsgOut {
        static $gtype: GObject.GType<MsgOut>;
    }

    /**
     * @gir-type Alias
     */
    type PlaybackChannelClass = typeof PlaybackChannel;
    /**
     * @gir-type Struct
     */
    abstract class PlaybackChannelPrivate {
        static $gtype: GObject.GType<PlaybackChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PortChannelClass = typeof PortChannel;
    /**
     * @gir-type Struct
     */
    abstract class PortChannelPrivate {
        static $gtype: GObject.GType<PortChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type QmpPortClass = typeof QmpPort;
    /**
     * Information about VCPU run state.
     * @gir-type Struct
     * @since 0.36
     */
    class QmpStatus {
        static $gtype: GObject.GType<QmpStatus>;

        // Fields

        version: number;
        running: boolean;
        singlestep: boolean;
        status: string;

        // Constructors

        constructor(
            properties?: Partial<{
                version: number;
                running: boolean;
                singlestep: boolean;
                status: string;
            }>,
        );

        // Methods

        /**
         * References a `status`.
         * @returns The same `status`
         */
        ref(): QmpStatus;
        /**
         * Removes a reference from the given `status`.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type RecordChannelClass = typeof RecordChannel;
    /**
     * @gir-type Struct
     */
    abstract class RecordChannelPrivate {
        static $gtype: GObject.GType<RecordChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;
    /**
     * @gir-type Struct
     */
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SmartcardChannelClass = typeof SmartcardChannel;
    /**
     * @gir-type Struct
     */
    abstract class SmartcardChannelPrivate {
        static $gtype: GObject.GType<SmartcardChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SmartcardManagerClass = typeof SmartcardManager;
    /**
     * @gir-type Struct
     */
    abstract class SmartcardManagerPrivate {
        static $gtype: GObject.GType<SmartcardManagerPrivate>;
    }

    /**
     * The {@link SpiceClientGLib.SmartcardReader} struct is opaque and cannot be accessed directly.
     * @gir-type Struct
     */
    abstract class SmartcardReader {
        static $gtype: GObject.GType<SmartcardReader>;

        // Methods

        /**
         * Simulates insertion of a smartcard in the software smartcard reader
         * `reader`. If `reader` is not a software smartcard reader, FALSE will be
         * returned.
         * @returns TRUE if insertion of a card was successfully simulated, FALSE otherwise
         */
        insert_card(): boolean;
        /**
         * Tests if `reader` is a software (emulated) smartcard reader.
         * @returns TRUE if `reader` is a software (emulated) smartcard reader, FALSE otherwise
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
     * @gir-type Alias
     */
    type URIClass = typeof URI;
    /**
     * @gir-type Struct
     */
    abstract class URIPrivate {
        static $gtype: GObject.GType<URIPrivate>;
    }

    /**
     * The {@link SpiceClientGLib.UsbDevice} struct is opaque and cannot be accessed directly.
     * @gir-type Struct
     */
    class UsbDevice {
        static $gtype: GObject.GType<UsbDevice>;

        // Methods

        /**
         * Get a string describing the device which is suitable as a description of
         * the device for the end user. The returned string should be freed with
         * `g_free()` when no longer needed.
         *
         * The `format` positional parameters are the following:
         * 1. \%s manufacturer
         * 2. \%s product
         * 3. \%s descriptor (a [vendor_id:product_id] string)
         * 4. \%d bus
         * 5. \%d address
         *
         * (the default format string is "\%s \%s \%s at \%d-\%d")
         * @param format an optional `printf()` format string with positional parameters
         * @returns a newly-allocated string holding the description, or `null` if failed
         */
        get_description(format?: string | null): string;
        /**
         * Finds the %libusb_device associated with the `device`.
         * @returns the %libusb_device associated to %SpiceUsbDevice.
         */
        get_libusb_device(): any | null;
    }

    /**
     * @gir-type Alias
     */
    type UsbDeviceManagerClass = typeof UsbDeviceManager;
    /**
     * @gir-type Struct
     */
    abstract class UsbDeviceManagerPrivate {
        static $gtype: GObject.GType<UsbDeviceManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UsbredirChannelClass = typeof UsbredirChannel;
    /**
     * @gir-type Struct
     */
    abstract class UsbredirChannelPrivate {
        static $gtype: GObject.GType<UsbredirChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebdavChannelClass = typeof WebdavChannel;
    /**
     * @gir-type Struct
     */
    abstract class WebdavChannelPrivate {
        static $gtype: GObject.GType<WebdavChannelPrivate>;
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
