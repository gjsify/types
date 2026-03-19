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
import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstInterfaces {
    /**
     * GstInterfaces-0.10
     */

    export namespace ColorBalanceType {
        export const $gtype: GObject.GType<ColorBalanceType>;
    }

    /**
     * An enumeration indicating whether an element implements color balancing
     * operations in software or in dedicated hardware. In general, dedicated
     * hardware implementations (such as those provided by xvimagesink) are
     * preferred.
     * @gir-type Enum
     */
    enum ColorBalanceType {
        HARDWARE,
        SOFTWARE,
    }

    export namespace MixerMessageType {
        export const $gtype: GObject.GType<MixerMessageType>;
    }

    /**
     * An enumeration for the type of a GstMixer message received on the bus
     * @gir-type Enum
     * @since 0.10.14
     */
    enum MixerMessageType {
        INVALID,
        MUTE_TOGGLED,
        RECORD_TOGGLED,
        VOLUME_CHANGED,
        OPTION_CHANGED,
        OPTIONS_LIST_CHANGED,
        MIXER_CHANGED,
    }

    export namespace MixerType {
        export const $gtype: GObject.GType<MixerType>;
    }

    /**
     * @gir-type Enum
     */
    enum MixerType {
        HARDWARE,
        SOFTWARE,
    }

    export namespace NavigationCommand {
        export const $gtype: GObject.GType<NavigationCommand>;
    }

    /**
     * A set of commands that may be issued to an element providing the
     * {@link GstInterfaces.Navigation} interface. The available commands can be queried via
     * the `gst_navigation_query_new_commands()` query.
     * For convenience in handling DVD navigation, the MENU commands are aliased as:
     * GST_NAVIGATION_COMMAND_DVD_MENU            = `GST_NAVIGATION_COMMAND_MENU1`
     * GST_NAVIGATION_COMMAND_DVD_TITLE_MENU      = `GST_NAVIGATION_COMMAND_MENU2`
     * GST_NAVIGATION_COMMAND_DVD_ROOT_MENU       = `GST_NAVIGATION_COMMAND_MENU3`
     * GST_NAVIGATION_COMMAND_DVD_SUBPICTURE_MENU = `GST_NAVIGATION_COMMAND_MENU4`
     * GST_NAVIGATION_COMMAND_DVD_AUDIO_MENU      = `GST_NAVIGATION_COMMAND_MENU5`
     * GST_NAVIGATION_COMMAND_DVD_ANGLE_MENU      = `GST_NAVIGATION_COMMAND_MENU6`
     * GST_NAVIGATION_COMMAND_DVD_CHAPTER_MENU    = `GST_NAVIGATION_COMMAND_MENU7`
     * @gir-type Enum
     * @since 0.10.23
     */
    enum NavigationCommand {
        INVALID,
        MENU1,
        MENU2,
        MENU3,
        MENU4,
        MENU5,
        MENU6,
        MENU7,
        LEFT,
        RIGHT,
        UP,
        DOWN,
        ACTIVATE,
        PREV_ANGLE,
        NEXT_ANGLE,
    }

    export namespace NavigationEventType {
        export const $gtype: GObject.GType<NavigationEventType>;
    }

    /**
     * Enum values for the various events that an element implementing the
     * GstNavigation interface might send up the pipeline.
     * @gir-type Enum
     * @since 0.10.23
     */
    enum NavigationEventType {
        INVALID,
        KEY_PRESS,
        KEY_RELEASE,
        MOUSE_BUTTON_PRESS,
        MOUSE_BUTTON_RELEASE,
        MOUSE_MOVE,
        COMMAND,
    }

    export namespace NavigationMessageType {
        export const $gtype: GObject.GType<NavigationMessageType>;
    }

    /**
     * A set of notifications that may be received on the bus when navigation
     * related status changes.
     * @gir-type Enum
     * @since 0.10.23
     */
    enum NavigationMessageType {
        INVALID,
        MOUSE_OVER,
        COMMANDS_CHANGED,
        ANGLES_CHANGED,
    }

    export namespace NavigationQueryType {
        export const $gtype: GObject.GType<NavigationQueryType>;
    }

    /**
     * @gir-type Enum
     */
    enum NavigationQueryType {
        INVALID,
        COMMANDS,
        ANGLES,
    }

    export namespace StreamVolumeFormat {
        export const $gtype: GObject.GType<StreamVolumeFormat>;
    }

    /**
     * Different representations of a stream volume. `gst_stream_volume_convert()`
     * allows to convert between the different representations.
     * Formulas to convert from a linear to a cubic or dB volume are
     * cbrt(val) and 20 * log10 (val).
     * @gir-type Enum
     * @since 0.10.25
     */
    enum StreamVolumeFormat {
        LINEAR,
        CUBIC,
        DB,
    }

    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function interfaces_marshal_VOID__OBJECT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function interfaces_marshal_VOID__OBJECT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function interfaces_marshal_VOID__OBJECT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function interfaces_marshal_VOID__OBJECT_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function interfaces_marshal_VOID__OBJECT_ULONG(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * Check a bus message to see if it is a GstMixer notification
     * message and return the GstMixerMessageType identifying which
     * type of notification it is.
     * if the message is not a GstMixer notification.
     * @param message A GstMessage to inspect.
     * @returns The type of the GstMixerMessage, or GST_MIXER_MESSAGE_INVALID
     * @since 0.10.14
     */
    function mixer_message_get_type(message: Gst.Message): MixerMessageType;
    /**
     * Extracts the contents of a mute-toggled bus message. Reads
     * the GstMixerTrack that has changed, and the new value of the mute
     * flag.
     * The GstMixerTrack remains valid until the message is freed.
     * @param message A mute-toggled change notification message.
     * @param track Pointer to hold a GstMixerTrack object, or NULL.
     * @param mute A pointer to a gboolean variable, or NULL.
     * @since 0.10.14
     */
    function mixer_message_parse_mute_toggled(message: Gst.Message, track: MixerTrack, mute: boolean): void;
    /**
     * Extracts the GstMixerOptions and new value from a option-changed bus notification
     * message.
     * The options and value returned remain valid until the message is freed.
     * @param message A volume-changed change notification message.
     * @param options Pointer to hold a GstMixerOptions object, or NULL.
     * @param value Result location to receive the new options value, or NULL.
     * @since 0.10.14
     */
    function mixer_message_parse_option_changed(message: Gst.Message, options: MixerOptions, value: string): void;
    /**
     * Extracts the GstMixerOptions whose value list has changed from an
     * options-list-changed bus notification message.
     * The options object returned remains valid until the message is freed. You
     * do not need to unref it.
     * @param message A volume-changed change notification message.
     * @param options Pointer to hold a GstMixerOptions object, or NULL.
     * @since 0.10.18
     */
    function mixer_message_parse_options_list_changed(message: Gst.Message, options: MixerOptions): void;
    /**
     * Extracts the contents of a record-toggled bus message. Reads
     * the GstMixerTrack that has changed, and the new value of the
     * recording flag.
     * The GstMixerTrack remains valid until the message is freed.
     * @param message A record-toggled change notification message.
     * @param track Pointer to hold a GstMixerTrack object, or NULL.
     * @param record A pointer to a gboolean variable, or NULL.
     * @since 0.10.14
     */
    function mixer_message_parse_record_toggled(message: Gst.Message, track: MixerTrack, record: boolean): void;
    /**
     * Parses a volume-changed notification message and extracts the track object
     * it refers to, as well as an array of volumes and the size of the volumes array.
     * The track object remains valid until the message is freed.
     * The caller must free the array returned in the volumes parameter using g_free
     * when they are done with it.
     * @param message A volume-changed change notification message.
     * @param track Pointer to hold a GstMixerTrack object, or NULL.
     * @param volumes A pointer to receive an array of gint values, or NULL.
     * @param num_channels Result location to receive the number of channels, or NULL.
     * @since 0.10.14
     */
    function mixer_message_parse_volume_changed(
        message: Gst.Message,
        track: MixerTrack,
        volumes: number,
        num_channels: number,
    ): void;
    /**
     * Inspect a {@link Gst.Event} and return the {@link GstInterfaces.NavigationEventType} of the event, or
     * #GST_NAVIGATION_EVENT_INVALID if the event is not a {@link GstInterfaces.Navigation} event.
     * @param event A {@link Gst.Event} to inspect.
     * @since 0.10.23
     */
    function navigation_event_get_type(event: Gst.Event): NavigationEventType;
    /**
     * Inspect a {@link GstInterfaces.Navigation} command event and retrieve the enum value of the
     * associated command.
     * @param event A {@link Gst.Event} to inspect.
     * @param command Pointer to GstNavigationCommand to receive the type of the navigation event.
     * @returns TRUE if the navigation command could be extracted, otherwise FALSE.
     * @since 0.10.23
     */
    function navigation_event_parse_command(event: Gst.Event, command: NavigationCommand | null): boolean;
    /**
     * @param event A {@link Gst.Event} to inspect.
     * @param key A pointer to a location to receive the string identifying the key press. The returned string is owned by the event, and valid only until the event is unreffed.
     * @since 0.10.23
     */
    function navigation_event_parse_key_event(event: Gst.Event, key: string): boolean;
    /**
     * Retrieve the details of either a {@link GstInterfaces.Navigation} mouse button press event or
     * a mouse button release event. Determine which type the event is using
     * `gst_navigation_event_get_type()` to retrieve the {@link GstInterfaces.NavigationEventType}.
     * otherwise FALSE.
     * @param event A {@link Gst.Event} to inspect.
     * @param button Pointer to a gint that will receive the button number associated with the event.
     * @param x Pointer to a gdouble to receive the x coordinate of the mouse button event.
     * @param y Pointer to a gdouble to receive the y coordinate of the mouse button event.
     * @returns TRUE if the button number and both coordinates could be extracted,
     * @since 0.10.23
     */
    function navigation_event_parse_mouse_button_event(event: Gst.Event, button: number, x: number, y: number): boolean;
    /**
     * Inspect a {@link GstInterfaces.Navigation} mouse movement event and extract the coordinates
     * of the event.
     * @param event A {@link Gst.Event} to inspect.
     * @param x Pointer to a gdouble to receive the x coordinate of the mouse movement.
     * @param y Pointer to a gdouble to receive the y coordinate of the mouse movement.
     * @returns TRUE if both coordinates could be extracted, otherwise FALSE.
     * @since 0.10.23
     */
    function navigation_event_parse_mouse_move_event(event: Gst.Event, x: number, y: number): boolean;
    /**
     * Check a bus message to see if it is a {@link GstInterfaces.Navigation} event, and return
     * the {@link GstInterfaces.NavigationMessageType} identifying the type of the message if so.
     * #GST_NAVIGATION_MESSAGE_INVALID if the message is not a {@link GstInterfaces.Navigation}
     * notification.
     * @param message A {@link Gst.Message} to inspect.
     * @returns The type of the `GstNavigationMessage`, or
     * @since 0.10.23
     */
    function navigation_message_get_type(message: Gst.Message): NavigationMessageType;
    /**
     * Parse a {@link GstInterfaces.Navigation} message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
     * and extract the `cur_angle` and `n_angles` parameters.
     * @param message A {@link Gst.Message} to inspect.
     * @param cur_angle A pointer to a `guint` to receive the new current angle number, or NULL
     * @param n_angles A pointer to a `guint` to receive the new angle count, or NULL.
     * @returns `true` if the message could be successfully parsed. `false` if not.
     * @since 0.10.23
     */
    function navigation_message_parse_angles_changed(
        message: Gst.Message,
        cur_angle: number,
        n_angles: number,
    ): boolean;
    /**
     * Parse a {@link GstInterfaces.Navigation} message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
     * and extract the active/inactive flag. If the mouse over event is marked
     * active, it indicates that the mouse is over a clickable area.
     * @param message A {@link Gst.Message} to inspect.
     * @param active A pointer to a gboolean to receive the active/inactive state, or NULL.
     * @returns `true` if the message could be successfully parsed. `false` if not.
     * @since 0.10.23
     */
    function navigation_message_parse_mouse_over(message: Gst.Message, active: boolean): boolean;
    /**
     * Inspect a {@link Gst.Query} and return the {@link GstInterfaces.NavigationQueryType} associated with
     * it if it is a {@link GstInterfaces.Navigation} query.
     * #GST_NAVIGATION_QUERY_INVALID
     * @param query The query to inspect
     * @returns The {@link GstInterfaces.NavigationQueryType} of the query, or
     * @since 0.10.23
     */
    function navigation_query_get_type(query: Gst.Query): NavigationQueryType;
    /**
     * Parse the current angle number in the {@link GstInterfaces.Navigation} angles `query` into the
     * `guint` pointed to by the `cur_angle` variable, and the number of available
     * angles into the `guint` pointed to by the `n_angles` variable.
     * @param query a {@link Gst.Query}
     * @param cur_angle Pointer to a `guint` into which to store the currently selected angle value from the query, or NULL
     * @param n_angles Pointer to a `guint` into which to store the number of angles value from the query, or NULL
     * @returns `true` if the query could be successfully parsed. `false` if not.
     * @since 0.10.23
     */
    function navigation_query_parse_angles(query: Gst.Query, cur_angle: number, n_angles: number): boolean;
    /**
     * Parse the number of commands in the {@link GstInterfaces.Navigation} commands `query`.
     * @param query a {@link Gst.Query}
     * @param n_cmds the number of commands in this query.
     * @returns `true` if the query could be successfully parsed. `false` if not.
     * @since 0.10.23
     */
    function navigation_query_parse_commands_length(query: Gst.Query, n_cmds: number): boolean;
    /**
     * Parse the {@link GstInterfaces.Navigation} command query and retrieve the `nth` command from
     * it into `cmd`. If the list contains less elements than `nth`, `cmd` will be
     * set to #GST_NAVIGATION_COMMAND_INVALID.
     * @param query a {@link Gst.Query}
     * @param nth the nth command to retrieve.
     * @param cmd a pointer to store the nth command into.
     * @returns `true` if the query could be successfully parsed. `false` if not.
     * @since 0.10.23
     */
    function navigation_query_parse_commands_nth(query: Gst.Query, nth: number, cmd: NavigationCommand | null): boolean;
    /**
     * Set the {@link GstInterfaces.Navigation} angles query result field in `query`.
     * @param query a {@link Gst.Query}
     * @param cur_angle the current viewing angle to set.
     * @param n_angles the number of viewing angles to set.
     * @since 0.10.23
     */
    function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
    /**
     * Set the {@link GstInterfaces.Navigation} command query result fields in `query`. The number
     * of commands passed must be equal to `n_commands`.
     * @param query a {@link Gst.Query}
     * @param n_cmds the number of commands to set.
     * @param cmds An array containing `n_cmds` `GstNavigationCommand` values.
     * @since 0.10.23
     */
    function navigation_query_set_commandsv(query: Gst.Query, n_cmds: number, cmds: NavigationCommand | null): void;
    /**
     * @param from {@link GstInterfaces.StreamVolumeFormat} to convert from
     * @param to {@link GstInterfaces.StreamVolumeFormat} to convert to
     * @param val Volume in `from` format that should be converted
     * @returns the converted volume
     * @since 0.10.25
     */
    function stream_volume_convert_volume(
        from: StreamVolumeFormat | null,
        to: StreamVolumeFormat | null,
        val: number,
    ): number;
    export namespace MixerFlags {
        export const $gtype: GObject.GType<MixerFlags>;
    }

    /**
     * Flags indicating which optional features are supported by a mixer
     * implementation.
     * @gir-type Flags
     * @since 0.10.14
     */
    enum MixerFlags {
        NONE,
        AUTO_NOTIFICATIONS,
        HAS_WHITELIST,
        GROUPING,
    }

    export namespace MixerTrackFlags {
        export const $gtype: GObject.GType<MixerTrackFlags>;
    }

    /**
     * Mixer track flags.
     * @gir-type Flags
     */
    enum MixerTrackFlags {
        INPUT,
        OUTPUT,
        MUTE,
        RECORD,
        MASTER,
        SOFTWARE,
        NO_RECORD,
        NO_MUTE,
        WHITELIST,
        READONLY,
        WRITEONLY,
    }

    export namespace TunerChannelFlags {
        export const $gtype: GObject.GType<TunerChannelFlags>;
    }

    /**
     * An enumeration for flags indicating the available capabilities
     * of a {@link GstInterfaces.TunerChannel}.
     * @gir-type Flags
     */
    enum TunerChannelFlags {
        INPUT,
        OUTPUT,
        FREQUENCY,
        AUDIO,
    }

    namespace ColorBalanceChannel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Fired when the value of the indicated channel has changed.
             * @signal
             */
            'value-changed': (arg0: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ColorBalanceChannel extends GObject.Object {
        static $gtype: GObject.GType<ColorBalanceChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorBalanceChannel.SignalSignatures;

        // Fields

        label: string;
        min_value: number;
        max_value: number;

        // Constructors

        constructor(properties?: Partial<ColorBalanceChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ColorBalanceChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorBalanceChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ColorBalanceChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorBalanceChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ColorBalanceChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColorBalanceChannel.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerOptions {
        // Signal signatures
        interface SignalSignatures extends MixerTrack.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::max-volume': (pspec: GObject.ParamSpec) => void;
            'notify::min-volume': (pspec: GObject.ParamSpec) => void;
            'notify::num-channels': (pspec: GObject.ParamSpec) => void;
            'notify::untranslated-label': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerTrack.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MixerOptions extends MixerTrack {
        static $gtype: GObject.GType<MixerOptions>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerOptions.SignalSignatures;

        // Fields

        values: any[];

        // Constructors

        constructor(properties?: Partial<MixerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MixerOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MixerOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MixerOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerTrack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::max-volume': (pspec: GObject.ParamSpec) => void;
            'notify::min-volume': (pspec: GObject.ParamSpec) => void;
            'notify::num-channels': (pspec: GObject.ParamSpec) => void;
            'notify::untranslated-label': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            index: number;
            label: string;
            max_volume: number;
            maxVolume: number;
            min_volume: number;
            minVolume: number;
            num_channels: number;
            numChannels: number;
            untranslated_label: string;
            untranslatedLabel: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MixerTrack extends GObject.Object {
        static $gtype: GObject.GType<MixerTrack>;

        // Properties

        get flags(): number;
        get index(): number;
        get label(): string;
        get max_volume(): number;
        get maxVolume(): number;
        get min_volume(): number;
        get minVolume(): number;
        get num_channels(): number;
        get numChannels(): number;
        get untranslated_label(): string;
        get untranslatedLabel(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MixerTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MixerTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MixerTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TunerChannel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Reports that the current frequency has changed.
             * @signal
             */
            'frequency-changed': (arg0: number) => void;
            /**
             * Reports that the signal strength has changed.
             * @signal
             */
            'signal-changed': (arg0: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TunerChannel extends GObject.Object {
        static $gtype: GObject.GType<TunerChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TunerChannel.SignalSignatures;

        // Fields

        label: string;
        flags: TunerChannelFlags;
        freq_multiplicator: number;
        min_frequency: number;
        max_frequency: number;
        min_signal: number;
        max_signal: number;

        // Constructors

        constructor(properties?: Partial<TunerChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TunerChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TunerChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TunerChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TunerChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TunerChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TunerChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TunerNorm {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TunerNorm extends GObject.Object {
        static $gtype: GObject.GType<TunerNorm>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TunerNorm.SignalSignatures;

        // Fields

        label: string;

        // Constructors

        constructor(properties?: Partial<TunerNorm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TunerNorm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TunerNorm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TunerNorm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TunerNorm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TunerNorm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TunerNorm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ColorBalanceChannelClass = typeof ColorBalanceChannel;
    /**
     * @gir-type Struct
     */
    class ColorBalanceClass {
        static $gtype: GObject.GType<ColorBalanceClass>;

        // Fields

        balance_type: ColorBalanceType;
    }

    /**
     * @gir-type Struct
     */
    class MixerClass {
        static $gtype: GObject.GType<MixerClass>;

        // Fields

        mixer_type: MixerType;
    }

    /**
     * @gir-type Alias
     */
    type MixerOptionsClass = typeof MixerOptions;
    /**
     * @gir-type Alias
     */
    type MixerTrackClass = typeof MixerTrack;
    /**
     * @gir-type Alias
     */
    type NavigationInterface = typeof Navigation;
    /**
     * @gir-type Alias
     */
    type PropertyProbeInterface = typeof PropertyProbe;
    /**
     * @gir-type Alias
     */
    type StreamVolumeInterface = typeof StreamVolume;
    /**
     * @gir-type Alias
     */
    type TunerChannelClass = typeof TunerChannel;
    /**
     * @gir-type Struct
     */
    class TunerClass {
        static $gtype: GObject.GType<TunerClass>;
    }

    /**
     * @gir-type Alias
     */
    type TunerNormClass = typeof TunerNorm;
    /**
     * @gir-type Alias
     */
    type VideoOrientationInterface = typeof VideoOrientation;
    /**
     * {@link GstInterfaces.XOverlay} interface
     * @gir-type Struct
     */
    class XOverlayClass {
        static $gtype: GObject.GType<XOverlayClass>;
    }

    namespace ColorBalance {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface ColorBalanceNamespace {
        $gtype: GObject.GType<ColorBalance>;
        prototype: ColorBalance;
    }
    /**
     * @gir-type Interface
     */
    interface ColorBalance extends Gst.Element {
        // Methods

        /**
         * Get the {@link GstInterfaces.ColorBalanceType} of this implementation.
         * @returns A the {@link GstInterfaces.ColorBalanceType}.
         */
        get_balance_type(): ColorBalanceType;
        /**
         * Retrieve the current value of the indicated channel, between min_value
         * and max_value.
         * {@link GstInterfaces.ColorBalanceChannel.SignalSignatures.max_value | GstInterfaces.ColorBalanceChannel::max_value} members of the
         * {@link GstInterfaces.ColorBalanceChannel} object.
         * @param channel A {@link GstInterfaces.ColorBalanceChannel} instance
         * @returns The current value of the channel.
         */
        get_value(channel: ColorBalanceChannel): number;
        /**
         * Retrieve a list of the available channels.
         * The list is owned by the {@link GstInterfaces.ColorBalance} instance and must not
         * be freed.
         * @returns A GList containing pointers to {@link GstInterfaces.ColorBalanceChannel} objects.
         */
        list_channels(): any[];
        /**
         * Sets the current value of the channel to the passed value, which must
         * be between min_value and max_value.
         * {@link GstInterfaces.ColorBalanceChannel.SignalSignatures.max_value | GstInterfaces.ColorBalanceChannel::max_value} members of the
         * {@link GstInterfaces.ColorBalanceChannel} object.
         * @param channel A {@link GstInterfaces.ColorBalanceChannel} instance
         * @param value The new value for the channel.
         */
        set_value(channel: ColorBalanceChannel, value: number): void;
        /**
         * A helper function called by implementations of the GstColorBalance
         * interface. It fires the {@link GstInterfaces.ColorBalance.SignalSignatures.value_changed | GstInterfaces.ColorBalance::value-changed} signal on the
         * instance, and the {@link GstInterfaces.ColorBalanceChannel.SignalSignatures.value_changed | GstInterfaces.ColorBalanceChannel::value-changed} signal on the
         * channel object.
         * @param channel A {@link GstInterfaces.ColorBalanceChannel} whose value has changed
         * @param value The new value of the channel
         */
        value_changed(channel: ColorBalanceChannel, value: number): void;
    }

    export const ColorBalance: ColorBalanceNamespace & {
        new (): ColorBalance; // This allows `obj instanceof ColorBalance`
    };

    namespace Mixer {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface MixerNamespace {
        $gtype: GObject.GType<Mixer>;
        prototype: Mixer;
    }
    /**
     * @gir-type Interface
     */
    interface Mixer extends Gst.Element {
        // Methods

        /**
         * Get the set of supported flags for this mixer implementation.
         * @returns A set of or-ed GstMixerFlags for supported features.
         */
        get_mixer_flags(): MixerFlags;
        /**
         * Get the {@link GstInterfaces.MixerType} of this mixer implementation.
         * @returns A the {@link GstInterfaces.MixerType}.
         */
        get_mixer_type(): MixerType;
        /**
         * Get the current value of a name/value option in the mixer.
         * @param opts The {@link GstInterfaces.MixerOptions} that we operate on.
         * @returns current value of the name/value option.
         */
        get_option(opts: MixerOptions): string;
        /**
         * Get the current volume(s) on the given track.
         * @param track the GstMixerTrack to get the volume from.
         * @param volumes a pre-allocated array of integers (of size track->num_channels) to store the current volume of each channel in the given track in.
         */
        get_volume(track: MixerTrack, volumes: number): void;
        /**
         * Returns a list of available tracks for this mixer/element. Note
         * that it is allowed for sink (output) elements to only provide
         * the output tracks in this list. Likewise, for sources (inputs),
         * it is allowed to only provide input elements in this list.
         * The list is owned by the {@link GstInterfaces.Mixer} instance and must not be freed
         * or modified.
         * @returns A {@link GLib.List} consisting of zero or more `GstMixerTracks`.
         */
        list_tracks(): any[];
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the list of available
         * mixer tracks for a given mixer object has changed. Applications should
         * rebuild their interface when they receive this message.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus.
         */
        mixer_changed(): void;
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the given track
         * has changed mute state.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus.
         * @param track the GstMixerTrack that has change mute state.
         * @param mute the new state of the mute flag on the track
         */
        mute_toggled(track: MixerTrack, mute: boolean): void;
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the given options
         * object has changed state.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus.
         * @param opts the GstMixerOptions that has changed value.
         * @param value the new value of the GstMixerOptions.
         */
        option_changed(opts: MixerOptions, value: string): void;
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the list of possible
         * options of a given options object has changed.
         * The new options are not contained in the message on purpose. Applications
         * should call `gst_mixer_option_get_values()` on `opts` to make `opts` update
         * its internal state and obtain the new list of values.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus
         * for this to work.
         * @param opts the GstMixerOptions whose list of values has changed
         */
        options_list_changed(opts: MixerOptions): void;
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the given track
         * has changed recording state.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus.
         * @param track the GstMixerTrack that has changed recording state.
         * @param record the new state of the record flag on the track
         */
        record_toggled(track: MixerTrack, record: boolean): void;
        /**
         * Mutes or unmutes the given channel. To find out whether a
         * track is currently muted, use GST_MIXER_TRACK_HAS_FLAG ().
         * @param track the {@link GstInterfaces.MixerTrack} to operate on.
         * @param mute a boolean value indicating whether to turn on or off muting.
         */
        set_mute(track: MixerTrack, mute: boolean): void;
        /**
         * Sets a name/value option in the mixer to the requested value.
         * @param opts The {@link GstInterfaces.MixerOptions} that we operate on.
         * @param value The requested new option value.
         */
        set_option(opts: MixerOptions, value: string): void;
        /**
         * Enables or disables recording on the given track. Note that
         * this is only possible on input tracks, not on output tracks
         * (see GST_MIXER_TRACK_HAS_FLAG () and the GST_MIXER_TRACK_INPUT
         * flag).
         * @param track the {@link GstInterfaces.MixerTrack} to operate on.
         * @param record a boolean value that indicates whether to turn on or off recording.
         */
        set_record(track: MixerTrack, record: boolean): void;
        /**
         * Sets the volume on each channel in a track. Short note about
         * the mixer/element, such as 'Line-in' or 'Microphone'. A
         * channel is said to be a mono-stream inside this track. A
         * stereo track thus contains two channels.
         * @param track The {@link GstInterfaces.MixerTrack} to set the volume on.
         * @param volumes an array of integers (of size track->num_channels) that gives the wanted volume for each channel in this track.
         */
        set_volume(track: MixerTrack, volumes: number): void;
        /**
         * This function is called by the mixer implementation to produce
         * a notification message on the bus indicating that the volume(s) for the
         * given track have changed.
         * This function only works for GstElements that are implementing the
         * GstMixer interface, and the element needs to have been provided a bus.
         * @param track the GstMixerTrack that has changed.
         * @param volumes Array of volume values, one per channel on the mixer track.
         */
        volume_changed(track: MixerTrack, volumes: number): void;
    }

    export const Mixer: MixerNamespace & {
        new (): Mixer; // This allows `obj instanceof Mixer`
    };

    namespace Navigation {
        /**
         * Interface for implementing Navigation.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param structure
             * @virtual
             */
            vfunc_send_event(structure: Gst.Structure): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NavigationNamespace {
        $gtype: GObject.GType<Navigation>;
        prototype: Navigation;
    }
    /**
     * @gir-type Interface
     */
    interface Navigation extends GObject.Object, Navigation.Interface {
        // Methods

        /**
         * Sends the indicated command to the navigation interface.
         * @param command The command to issue
         */
        send_command(command: NavigationCommand | null): void;
        /**
         * @param structure
         */
        send_event(structure: Gst.Structure): void;
        /**
         * @param event The type of the key event. Recognised values are "key-press" and "key-release"
         * @param key Character representation of the key. This is typically as produced by XKeysymToString.
         */
        send_key_event(event: string, key: string): void;
        /**
         * Sends a mouse event to the navigation interface. Mouse event coordinates
         * are sent relative to the display space of the related output area. This is
         * usually the size in pixels of the window associated with the element
         * implementing the {@link GstInterfaces.Navigation} interface.
         * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
         * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
         * @param x The x coordinate of the mouse event.
         * @param y The y coordinate of the mouse event.
         */
        send_mouse_event(event: string, button: number, x: number, y: number): void;
    }

    export const Navigation: NavigationNamespace & {
        new (): Navigation; // This allows `obj instanceof Navigation`
    };

    namespace PropertyProbe {
        /**
         * Interface for implementing PropertyProbe.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get a list of properties for which probing is supported.
             * by this element.
             * @virtual
             */
            vfunc_get_properties(): any[];
            /**
             * @param prop_id
             * @param pspec
             * @virtual
             */
            vfunc_get_values(prop_id: number, pspec: GObject.ParamSpec): GObject.ValueArray;
            /**
             * @param prop_id
             * @param pspec
             * @virtual
             */
            vfunc_needs_probe(prop_id: number, pspec: GObject.ParamSpec): boolean;
            /**
             * @param prop_id
             * @param pspec
             * @virtual
             */
            vfunc_probe_property(prop_id: number, pspec: GObject.ParamSpec): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PropertyProbeNamespace {
        $gtype: GObject.GType<PropertyProbe>;
        prototype: PropertyProbe;
    }
    /**
     * Opaque {@link GstInterfaces.PropertyProbe} data structure.
     * @gir-type Interface
     */
    interface PropertyProbe extends GObject.Object, PropertyProbe.Interface {
        // Methods

        /**
         * Get a list of properties for which probing is supported.
         * by this element.
         * @returns the list of properties for which probing is supported
         */
        get_properties(): any[];
        /**
         * Get {@link GObject.ParamSpec} for a property for which probing is supported.
         * @param name name of the property.
         * @returns the {@link GObject.ParamSpec} of `null`.
         */
        get_property(name: string): GObject.ParamSpec;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * Gets the possible (probed) values for the given property,
         * requires the property to have been probed before.
         * @param pspec the {@link GObject.ParamSpec} property identifier.
         * @returns A list of valid values for the given property.
         */
        get_values(pspec: GObject.ParamSpec): GObject.ValueArray;
        /**
         * Same as gst_property_probe_get_values ().
         * @param name the name of the property to get values for.
         * @returns A list of valid values for the given property.
         */
        get_values_name(name: string): GObject.ValueArray;
        /**
         * Checks whether a property needs a probe. This might be because
         * the property wasn't initialized before, or because host setup
         * changed. This might be, for example, because a new device was
         * added, and thus device probing needs to be refreshed to display
         * the new device.
         * @param pspec a {@link GObject.ParamSpec} that identifies the property to check.
         * @returns TRUE if the property needs a new probe, FALSE if not.
         */
        needs_probe(pspec: GObject.ParamSpec): boolean;
        /**
         * Same as gst_property_probe_needs_probe ().
         * @param name the name of the property to check.
         * @returns TRUE if the property needs a new probe, FALSE if not.
         */
        needs_probe_name(name: string): boolean;
        /**
         * Check whether the given property requires a new probe. If so,
         * fo the probe. After that, retrieve a value list. Meant as a
         * utility function that wraps the above functions.
         * @param pspec The {@link GObject.ParamSpec} property identifier.
         * @returns the list of valid values for this property.
         */
        probe_and_get_values(pspec: GObject.ParamSpec): GObject.ValueArray;
        /**
         * Same as gst_property_probe_probe_and_get_values ().
         * @param name the name of the property to get values for.
         * @returns the list of valid values for this property.
         */
        probe_and_get_values_name(name: string): GObject.ValueArray;
        /**
         * Runs a probe on the property specified by `pspec`
         * @param pspec {@link GObject.ParamSpec} of the property.
         */
        probe_property(pspec: GObject.ParamSpec): void;
        /**
         * Runs a probe on the property specified by `name`.
         * @param name name of the property.
         */
        probe_property_name(name: string): void;
    }

    export const PropertyProbe: PropertyProbeNamespace & {
        new (): PropertyProbe; // This allows `obj instanceof PropertyProbe`
    };

    namespace StreamVolume {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mute: boolean;
            volume: number;
        }
    }

    export interface StreamVolumeNamespace {
        $gtype: GObject.GType<StreamVolume>;
        prototype: StreamVolume;
    }
    /**
     * @gir-type Interface
     */
    interface StreamVolume extends GObject.Object {
        // Properties

        get mute(): boolean;
        set mute(val: boolean);
        get volume(): number;
        set volume(val: number);

        // Methods

        /**
         * @returns Returns `true` if the stream is muted
         */
        get_mute(): boolean;
        /**
         * @param format {@link GstInterfaces.StreamVolumeFormat} which should be returned
         * @returns The current stream volume as linear factor
         */
        get_volume(format: StreamVolumeFormat | null): number;
        /**
         * @param mute Mute state that should be set
         */
        set_mute(mute: boolean): void;
        /**
         * @param format {@link GstInterfaces.StreamVolumeFormat} of `val`
         * @param val Linear volume factor that should be set
         */
        set_volume(format: StreamVolumeFormat | null, val: number): void;
    }

    export const StreamVolume: StreamVolumeNamespace & {
        new (): StreamVolume; // This allows `obj instanceof StreamVolume`
    };

    namespace Tuner {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface TunerNamespace {
        $gtype: GObject.GType<Tuner>;
        prototype: Tuner;
    }
    /**
     * @gir-type Interface
     */
    interface Tuner extends Gst.Element {
        // Methods

        /**
         * Called by elements implementing the {@link GstInterfaces.Tuner} interface when the
         * current channel changes. Fires the {@link GstInterfaces.Tuner.SignalSignatures.channel_changed | GstInterfaces.Tuner::channel-changed} signal.
         * @param channel A {@link GstInterfaces.TunerChannel} instance
         */
        channel_changed(channel: TunerChannel): void;
        /**
         * Called by elements implementing the {@link GstInterfaces.Tuner} interface when the
         * configured frequency changes. Fires the {@link GstInterfaces.Tuner.SignalSignatures.frequency_changed | GstInterfaces.Tuner::frequency-changed}
         * signal on the tuner, and the {@link GstInterfaces.TunerChannel.SignalSignatures.frequency_changed | GstInterfaces.TunerChannel::frequency-changed} signal
         * on the channel.
         * @param channel The current {@link GstInterfaces.TunerChannel}
         * @param frequency The new frequency setting
         */
        frequency_changed(channel: TunerChannel, frequency: number): void;
        /**
         * Retrieve the current frequency from the given channel. As for
         * `gst_tuner_set_frequency()`, the {@link GstInterfaces.TunerChannel} must support frequency
         * operations, as indicated by the GST_TUNER_CHANNEL_FREQUENCY flag.
         * @param channel The {@link GstInterfaces.TunerChannel} to retrieve the frequency from.
         * @returns The current frequency, or 0 on error.
         */
        get_frequency(channel: TunerChannel): number;
        /**
         * Retrieve a {@link GLib.List} of `GstTunerChannels` available
         * (e.g. 'composite', 's-video', ...) from the given tuner object.
         * owned by the GstTuner and must not be freed.
         * @returns A list of channels available on this tuner. The list is
         */
        list_channels(): any[];
        /**
         * Retrieve a GList of available {@link GstInterfaces.TunerNorm} settings for the currently
         * tuned channel on the given tuner object.
         * tuner object. The list is owned by the GstTuner and must not
         * be freed.
         * @returns A list of norms available on the current channel for this
         */
        list_norms(): any[];
        /**
         * Called by elements implementing the {@link GstInterfaces.Tuner} interface when the
         * current norm changes. Fires the {@link GstInterfaces.Tuner.SignalSignatures.norm_changed | GstInterfaces.Tuner::norm-changed} signal.
         * @param norm A {@link GstInterfaces.TunerNorm} instance
         */
        norm_changed(norm: TunerNorm): void;
        /**
         * Tunes the object to the given channel, which should be one of the
         * channels returned by `gst_tuner_list_channels()`.
         * @param channel the channel to tune to.
         */
        set_channel(channel: TunerChannel): void;
        /**
         * Sets a tuning frequency on the given tuner/channel. Note that this
         * requires the given channel to be a "tuning" channel, which can be
         * checked using GST_TUNER_CHANNEL_HAS_FLAG (), with the proper flag
         * being GST_TUNER_CHANNEL_FREQUENCY.
         * The frequency is in Hz, with minimum steps indicated by the
         * frequency_multiplicator provided in the {@link GstInterfaces.TunerChannel}. The
         * valid range is provided in the min_frequency and max_frequency properties
         * of the {@link GstInterfaces.TunerChannel}.
         * @param channel The {@link GstInterfaces.TunerChannel} to set the frequency on.
         * @param frequency The frequency to tune in to.
         */
        set_frequency(channel: TunerChannel, frequency: number): void;
        /**
         * Changes the video norm on this tuner to the given norm, which should be
         * one of the norms returned by `gst_tuner_list_norms()`.
         * @param norm the norm to use for the current channel.
         */
        set_norm(norm: TunerNorm): void;
        /**
         * Called by elements implementing the {@link GstInterfaces.Tuner} interface when the
         * incoming signal strength changes. Fires the {@link GstInterfaces.Tuner.SignalSignatures.signal_changed | GstInterfaces.Tuner::signal-changed}
         * signal on the tuner and the {@link GstInterfaces.TunerChannel.SignalSignatures.signal_changed | GstInterfaces.TunerChannel::signal-changed} signal on
         * the channel.
         * @param channel The current {@link GstInterfaces.TunerChannel}
         * @param signal The new signal strength
         */
        signal_changed(channel: TunerChannel, signal: number): void;
        /**
         * Get the strength of the signal on this channel. Note that this
         * requires the current channel to be a "tuning" channel, i.e. a
         * channel on which frequency can be set. This can be checked using
         * GST_TUNER_CHANNEL_HAS_FLAG (), and the appropriate flag to check
         * for is GST_TUNER_CHANNEL_FREQUENCY.
         * The valid range of the signal strength is indicated in the
         * min_signal and max_signal properties of the {@link GstInterfaces.TunerChannel}.
         * @param channel the {@link GstInterfaces.TunerChannel} to get the signal strength from.
         * @returns Signal strength, or 0 on error.
         */
        signal_strength(channel: TunerChannel): number;
    }

    export const Tuner: TunerNamespace & {
        new (): Tuner; // This allows `obj instanceof Tuner`
    };

    namespace VideoOrientation {
        /**
         * Interface for implementing VideoOrientation.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get the horizontal centering offset from the given object.
             * @param center return location for the result
             * @virtual
             */
            vfunc_get_hcenter(center: number): boolean;
            /**
             * Get the horizontal flipping state (`true` for flipped) from the given object.
             * @param flip return location for the result
             * @virtual
             */
            vfunc_get_hflip(flip: boolean): boolean;
            /**
             * Get the vertical centering offset from the given object.
             * @param center return location for the result
             * @virtual
             */
            vfunc_get_vcenter(center: number): boolean;
            /**
             * Get the vertical flipping state (`true` for flipped) from the given object.
             * @param flip return location for the result
             * @virtual
             */
            vfunc_get_vflip(flip: boolean): boolean;
            /**
             * Set the horizontal centering offset for the given object.
             * @param center centering offset
             * @virtual
             */
            vfunc_set_hcenter(center: number): boolean;
            /**
             * Set the horizontal flipping state (`true` for flipped) for the given object.
             * @param flip use flipping
             * @virtual
             */
            vfunc_set_hflip(flip: boolean): boolean;
            /**
             * Set the vertical centering offset for the given object.
             * @param center centering offset
             * @virtual
             */
            vfunc_set_vcenter(center: number): boolean;
            /**
             * Set the vertical flipping state (`true` for flipped) for the given object.
             * @param flip use flipping
             * @virtual
             */
            vfunc_set_vflip(flip: boolean): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface VideoOrientationNamespace {
        $gtype: GObject.GType<VideoOrientation>;
        prototype: VideoOrientation;
    }
    /**
     * Opaque {@link GstInterfaces.VideoOrientation} data structure.
     * @gir-type Interface
     */
    interface VideoOrientation extends Gst.Element, VideoOrientation.Interface {
        // Methods

        /**
         * Get the horizontal centering offset from the given object.
         * @param center return location for the result
         * @returns `true` in case the element supports centering
         */
        get_hcenter(center: number): boolean;
        /**
         * Get the horizontal flipping state (`true` for flipped) from the given object.
         * @param flip return location for the result
         * @returns `true` in case the element supports flipping
         */
        get_hflip(flip: boolean): boolean;
        /**
         * Get the vertical centering offset from the given object.
         * @param center return location for the result
         * @returns `true` in case the element supports centering
         */
        get_vcenter(center: number): boolean;
        /**
         * Get the vertical flipping state (`true` for flipped) from the given object.
         * @param flip return location for the result
         * @returns `true` in case the element supports flipping
         */
        get_vflip(flip: boolean): boolean;
        /**
         * Set the horizontal centering offset for the given object.
         * @param center centering offset
         * @returns `true` in case the element supports centering
         */
        set_hcenter(center: number): boolean;
        /**
         * Set the horizontal flipping state (`true` for flipped) for the given object.
         * @param flip use flipping
         * @returns `true` in case the element supports flipping
         */
        set_hflip(flip: boolean): boolean;
        /**
         * Set the vertical centering offset for the given object.
         * @param center centering offset
         * @returns `true` in case the element supports centering
         */
        set_vcenter(center: number): boolean;
        /**
         * Set the vertical flipping state (`true` for flipped) for the given object.
         * @param flip use flipping
         * @returns `true` in case the element supports flipping
         */
        set_vflip(flip: boolean): boolean;
    }

    export const VideoOrientation: VideoOrientationNamespace & {
        new (): VideoOrientation; // This allows `obj instanceof VideoOrientation`
    };

    namespace XOverlay {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface XOverlayNamespace {
        $gtype: GObject.GType<XOverlay>;
        prototype: XOverlay;
    }
    /**
     * Opaque {@link GstInterfaces.XOverlay} data structure.
     * @gir-type Interface
     */
    interface XOverlay extends Gst.Element {
        // Methods

        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;
        /**
         * This will post a "have-xwindow-id" element message on the bus.
         * This function should only be used by video overlay plugin developers.
         * @param xwindow_id a `XID` referencing the XWindow.
         */
        got_xwindow_id(xwindow_id: number): void;
        /**
         * Tell an overlay that it should handle events from the window system. These
         * events are forwared upstream as navigation events. In some window system,
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the XOverlay.
         * @param handle_events a `gboolean` indicating if events should be handled or not.
         */
        handle_events(handle_events: boolean): void;
        /**
         * This will post a "prepare-xwindow-id" element message on the bus
         * to give applications an opportunity to call
         * `gst_x_overlay_set_xwindow_id()` before a plugin creates its own
         * window.
         * This function should only be used by video overlay plugin developers.
         */
        prepare_xwindow_id(): void;
        /**
         * Configure a subregion as a video target within the window set by
         * `gst_x_overlay_set_window_handle()`. If this is not used or not supported
         * the video will fill the area of the window set as the overlay to 100%.
         * By specifying the rectangle, the video can be overlayed to a specific region
         * of that window only. After setting the new rectangle one should call
         * `gst_x_overlay_expose()` to force a redraw. To unset the region pass -1 for
         * the `width` and `height` parameters.
         * This method is needed for non fullscreen video overlay in UI toolkits that
         * do not support subwindows.
         * @param x the horizontal offset of the render area inside the window
         * @param y the vertical offset of the render area inside the window
         * @param width the width of the render area inside the window
         * @param height the height of the render area inside the window
         * @returns `false` if not supported by the sink.
         */
        set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        /**
         * This will call the video overlay's set_xwindow_id method. You should
         * use this method to tell to a XOverlay to display video output to a
         * specific XWindow. Passing 0 as the xwindow_id will tell the overlay to
         * stop using that window and create an internal one.
         * @param xwindow_id a `XID` referencing the XWindow.
         */
        set_xwindow_id(xwindow_id: number): void;
    }

    export const XOverlay: XOverlayNamespace & {
        new (): XOverlay; // This allows `obj instanceof XOverlay`
    };

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

export default GstInterfaces;

// END
