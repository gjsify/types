// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInterfaces-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstInterfaces {

/**
 * An enumeration indicating whether an element implements color balancing
 * operations in software or in dedicated hardware. In general, dedicated
 * hardware implementations (such as those provided by xvimagesink) are
 * preferred.
 */
enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
/**
 * An enumeration for the type of a GstMixer message received on the bus
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
enum MixerType {
    HARDWARE,
    SOFTWARE,
}
/**
 * A set of commands that may be issued to an element providing the
 * #GstNavigation interface. The available commands can be queried via
 * the gst_navigation_query_new_commands() query.
 * For convenience in handling DVD navigation, the MENU commands are aliased as:
 * GST_NAVIGATION_COMMAND_DVD_MENU            = `GST_NAVIGATION_COMMAND_MENU1`
 * GST_NAVIGATION_COMMAND_DVD_TITLE_MENU      = `GST_NAVIGATION_COMMAND_MENU2`
 * GST_NAVIGATION_COMMAND_DVD_ROOT_MENU       = `GST_NAVIGATION_COMMAND_MENU3`
 * GST_NAVIGATION_COMMAND_DVD_SUBPICTURE_MENU = `GST_NAVIGATION_COMMAND_MENU4`
 * GST_NAVIGATION_COMMAND_DVD_AUDIO_MENU      = `GST_NAVIGATION_COMMAND_MENU5`
 * GST_NAVIGATION_COMMAND_DVD_ANGLE_MENU      = `GST_NAVIGATION_COMMAND_MENU6`
 * GST_NAVIGATION_COMMAND_DVD_CHAPTER_MENU    = `GST_NAVIGATION_COMMAND_MENU7`
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
/**
 * Enum values for the various events that an element implementing the
 * GstNavigation interface might send up the pipeline.
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
/**
 * A set of notifications that may be received on the bus when navigation
 * related status changes.
 */
enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
}
enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
/**
 * Different representations of a stream volume. gst_stream_volume_convert()
 * allows to convert between the different representations.
 * Formulas to convert from a linear to a cubic or dB volume are
 * cbrt(val) and 20 * log10 (val).
 */
enum StreamVolumeFormat {
    LINEAR,
    CUBIC,
    DB,
}
/**
 * Flags indicating which optional features are supported by a mixer
 * implementation.
 * @bitfield 
 */
enum MixerFlags {
    NONE,
    AUTO_NOTIFICATIONS,
    HAS_WHITELIST,
    GROUPING,
}
/**
 * Mixer track flags.
 * @bitfield 
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
/**
 * An enumeration for flags indicating the available capabilities
 * of a #GstTunerChannel.
 * @bitfield 
 */
enum TunerChannelFlags {
    INPUT,
    OUTPUT,
    FREQUENCY,
    AUDIO,
}
function interfaces_marshal_VOID__OBJECT_BOOLEAN(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_POINTER(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_STRING(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_ULONG(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
/**
 * Check a bus message to see if it is a GstMixer notification
 * message and return the GstMixerMessageType identifying which
 * type of notification it is.
 * if the message is not a GstMixer notification.
 * @param message A GstMessage to inspect.
 */
function mixer_message_get_type(message: Gst.Message): MixerMessageType
/**
 * Extracts the contents of a mute-toggled bus message. Reads
 * the GstMixerTrack that has changed, and the new value of the mute
 * flag.
 * The GstMixerTrack remains valid until the message is freed.
 * @param message A mute-toggled change notification message.
 * @param track Pointer to hold a GstMixerTrack object, or NULL.
 * @param mute A pointer to a gboolean variable, or NULL.
 */
function mixer_message_parse_mute_toggled(message: Gst.Message, track: MixerTrack, mute: boolean): void
/**
 * Extracts the GstMixerOptions and new value from a option-changed bus notification
 * message.
 * The options and value returned remain valid until the message is freed.
 * @param message A volume-changed change notification message.
 * @param options Pointer to hold a GstMixerOptions object, or NULL.
 * @param value Result location to receive the new options value, or NULL.
 */
function mixer_message_parse_option_changed(message: Gst.Message, options: MixerOptions, value: string): void
/**
 * Extracts the GstMixerOptions whose value list has changed from an
 * options-list-changed bus notification message.
 * The options object returned remains valid until the message is freed. You
 * do not need to unref it.
 * @param message A volume-changed change notification message.
 * @param options Pointer to hold a GstMixerOptions object, or NULL.
 */
function mixer_message_parse_options_list_changed(message: Gst.Message, options: MixerOptions): void
/**
 * Extracts the contents of a record-toggled bus message. Reads
 * the GstMixerTrack that has changed, and the new value of the 
 * recording flag.
 * The GstMixerTrack remains valid until the message is freed.
 * @param message A record-toggled change notification message.
 * @param track Pointer to hold a GstMixerTrack object, or NULL.
 * @param record A pointer to a gboolean variable, or NULL.
 */
function mixer_message_parse_record_toggled(message: Gst.Message, track: MixerTrack, record: boolean): void
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
 */
function mixer_message_parse_volume_changed(message: Gst.Message, track: MixerTrack, volumes: number, num_channels: number): void
/**
 * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
 * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
 * @param event A #GstEvent to inspect.
 */
function navigation_event_get_type(event: Gst.Event): NavigationEventType
/**
 * Inspect a #GstNavigation command event and retrieve the enum value of the
 * associated command.
 * @param event A #GstEvent to inspect.
 * @param command Pointer to GstNavigationCommand to receive the type of the navigation event.
 */
function navigation_event_parse_command(event: Gst.Event, command: NavigationCommand): boolean
function navigation_event_parse_key_event(event: Gst.Event, key: string): boolean
/**
 * Retrieve the details of either a #GstNavigation mouse button press event or
 * a mouse button release event. Determine which type the event is using
 * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
 * otherwise FALSE.
 * @param event A #GstEvent to inspect.
 * @param button Pointer to a gint that will receive the button number associated with the event.
 * @param x Pointer to a gdouble to receive the x coordinate of the mouse button event.
 * @param y Pointer to a gdouble to receive the y coordinate of the mouse button event.
 */
function navigation_event_parse_mouse_button_event(event: Gst.Event, button: number, x: number, y: number): boolean
/**
 * Inspect a #GstNavigation mouse movement event and extract the coordinates
 * of the event.
 * @param event A #GstEvent to inspect.
 * @param x Pointer to a gdouble to receive the x coordinate of the mouse movement.
 * @param y Pointer to a gdouble to receive the y coordinate of the mouse movement.
 */
function navigation_event_parse_mouse_move_event(event: Gst.Event, x: number, y: number): boolean
/**
 * Check a bus message to see if it is a #GstNavigation event, and return
 * the #GstNavigationMessageType identifying the type of the message if so.
 * #GST_NAVIGATION_MESSAGE_INVALID if the message is not a #GstNavigation
 * notification.
 * @param message A #GstMessage to inspect.
 */
function navigation_message_get_type(message: Gst.Message): NavigationMessageType
/**
 * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
 * and extract the `cur_angle` and `n_angles` parameters.
 * @param message A #GstMessage to inspect.
 * @param cur_angle A pointer to a #guint to receive the new current angle number, or NULL
 * @param n_angles A pointer to a #guint to receive the new angle count, or NULL.
 */
function navigation_message_parse_angles_changed(message: Gst.Message, cur_angle: number, n_angles: number): boolean
/**
 * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
 * and extract the active/inactive flag. If the mouse over event is marked
 * active, it indicates that the mouse is over a clickable area.
 * @param message A #GstMessage to inspect.
 * @param active A pointer to a gboolean to receive the active/inactive state, or NULL.
 */
function navigation_message_parse_mouse_over(message: Gst.Message, active: boolean): boolean
/**
 * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
 * it if it is a #GstNavigation query.
 * #GST_NAVIGATION_QUERY_INVALID
 * @param query The query to inspect
 */
function navigation_query_get_type(query: Gst.Query): NavigationQueryType
/**
 * Parse the current angle number in the #GstNavigation angles `query` into the
 * #guint pointed to by the `cur_angle` variable, and the number of available
 * angles into the #guint pointed to by the `n_angles` variable.
 * @param query a #GstQuery
 * @param cur_angle Pointer to a #guint into which to store the currently selected angle value from the query, or NULL
 * @param n_angles Pointer to a #guint into which to store the number of angles value from the query, or NULL
 */
function navigation_query_parse_angles(query: Gst.Query, cur_angle: number, n_angles: number): boolean
/**
 * Parse the number of commands in the #GstNavigation commands `query`.
 * @param query a #GstQuery
 * @param n_cmds the number of commands in this query.
 */
function navigation_query_parse_commands_length(query: Gst.Query, n_cmds: number): boolean
/**
 * Parse the #GstNavigation command query and retrieve the `nth` command from
 * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
 * set to #GST_NAVIGATION_COMMAND_INVALID.
 * @param query a #GstQuery
 * @param nth the nth command to retrieve.
 * @param cmd a pointer to store the nth command into.
 */
function navigation_query_parse_commands_nth(query: Gst.Query, nth: number, cmd: NavigationCommand): boolean
/**
 * Set the #GstNavigation angles query result field in `query`.
 * @param query a #GstQuery
 * @param cur_angle the current viewing angle to set.
 * @param n_angles the number of viewing angles to set.
 */
function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
/**
 * Set the #GstNavigation command query result fields in `query`. The number
 * of commands passed must be equal to `n_commands`.
 * @param query a #GstQuery
 * @param n_cmds the number of commands to set.
 * @param cmds An array containing `n_cmds` `GstNavigationCommand` values.
 */
function navigation_query_set_commandsv(query: Gst.Query, n_cmds: number, cmds: NavigationCommand): void
function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
interface ColorBalance_ConstructProps extends Gst.Element_ConstructProps, Gst.ImplementsInterface_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `value-changed`
 */
interface ColorBalance_ValueChangedSignalCallback {
    ($obj: ColorBalance, object: ColorBalanceChannel, p0: number): void
}

interface ColorBalance extends Gst.Element, Gst.ImplementsInterface {

    // Conflicting properties

    object: any

    // Owm methods of GstInterfaces-0.10.GstInterfaces.ColorBalance

    /**
     * Get the #GstColorBalanceType of this implementation.
     */
    get_balance_type(): ColorBalanceType
    /**
     * Retrieve the current value of the indicated channel, between min_value
     * and max_value.
     * #GstColorBalanceChannel::max_value members of the
     * #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     */
    get_value(channel: ColorBalanceChannel): number
    /**
     * Retrieve a list of the available channels.
     * The list is owned by the #GstColorBalance instance and must not
     * be freed.
     */
    list_channels(): object[]
    /**
     * Sets the current value of the channel to the passed value, which must
     * be between min_value and max_value.
     * #GstColorBalanceChannel::max_value members of the
     * #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     * @param value The new value for the channel.
     */
    set_value(channel: ColorBalanceChannel, value: number): void
    /**
     * A helper function called by implementations of the GstColorBalance
     * interface. It fires the #GstColorBalance::value-changed signal on the
     * instance, and the #GstColorBalanceChannel::value-changed signal on the
     * channel object.
     * @param channel A #GstColorBalanceChannel whose value has changed
     * @param value The new value of the channel
     */
    value_changed(channel: ColorBalanceChannel, value: number): void

    // Own signals of GstInterfaces-0.10.GstInterfaces.ColorBalance

    connect(sigName: "value-changed", callback: ColorBalance_ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: ColorBalance_ValueChangedSignalCallback): number
    emit(sigName: "value-changed", object: ColorBalanceChannel, p0: number, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.ColorBalance

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColorBalance extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.ColorBalance

    static name: string
    static $gtype: GObject.GType<ColorBalance>

    // Constructors of GstInterfaces-0.10.GstInterfaces.ColorBalance

    constructor(config?: ColorBalance_ConstructProps) 
    _init(config?: ColorBalance_ConstructProps): void
}

interface Mixer_ConstructProps extends Gst.Element_ConstructProps, Gst.ImplementsInterface_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `mute-toggled`
 */
interface Mixer_MuteToggledSignalCallback {
    ($obj: Mixer, object: MixerTrack, p0: boolean): void
}

/**
 * Signal callback interface for `option-changed`
 */
interface Mixer_OptionChangedSignalCallback {
    ($obj: Mixer, object: MixerOptions, p0: string): void
}

/**
 * Signal callback interface for `record-toggled`
 */
interface Mixer_RecordToggledSignalCallback {
    ($obj: Mixer, object: MixerTrack, p0: boolean): void
}

/**
 * Signal callback interface for `volume-changed`
 */
interface Mixer_VolumeChangedSignalCallback {
    ($obj: Mixer, object: MixerTrack, p0: object): void
}

interface Mixer extends Gst.Element, Gst.ImplementsInterface {

    // Conflicting properties

    object: any

    // Owm methods of GstInterfaces-0.10.GstInterfaces.Mixer

    /**
     * Get the set of supported flags for this mixer implementation.
     */
    get_mixer_flags(): MixerFlags
    /**
     * Get the #GstMixerType of this mixer implementation.
     */
    get_mixer_type(): MixerType
    /**
     * Get the current value of a name/value option in the mixer.
     * @param opts The #GstMixerOptions that we operate on.
     */
    get_option(opts: MixerOptions): string
    /**
     * Get the current volume(s) on the given track.
     * @param track the GstMixerTrack to get the volume from.
     * @param volumes a pre-allocated array of integers (of size track->num_channels) to store the current volume of each channel in the given track in.
     */
    get_volume(track: MixerTrack, volumes: number): void
    /**
     * Returns a list of available tracks for this mixer/element. Note
     * that it is allowed for sink (output) elements to only provide
     * the output tracks in this list. Likewise, for sources (inputs),
     * it is allowed to only provide input elements in this list.
     * The list is owned by the #GstMixer instance and must not be freed
     * or modified.
     */
    list_tracks(): object[]
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the list of available
     * mixer tracks for a given mixer object has changed. Applications should
     * rebuild their interface when they receive this message.
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus.
     */
    mixer_changed(): void
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the given track
     * has changed mute state.
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus.
     * @param track the GstMixerTrack that has change mute state.
     * @param mute the new state of the mute flag on the track
     */
    mute_toggled(track: MixerTrack, mute: boolean): void
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the given options
     * object has changed state. 
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus.
     * @param opts the GstMixerOptions that has changed value.
     * @param value the new value of the GstMixerOptions.
     */
    option_changed(opts: MixerOptions, value: string): void
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the list of possible
     * options of a given options object has changed.
     * The new options are not contained in the message on purpose. Applications
     * should call gst_mixer_option_get_values() on `opts` to make `opts` update
     * its internal state and obtain the new list of values.
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus
     * for this to work.
     * @param opts the GstMixerOptions whose list of values has changed
     */
    options_list_changed(opts: MixerOptions): void
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the given track
     * has changed recording state.
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus.
     * @param track the GstMixerTrack that has changed recording state.
     * @param record the new state of the record flag on the track
     */
    record_toggled(track: MixerTrack, record: boolean): void
    /**
     * Mutes or unmutes the given channel. To find out whether a
     * track is currently muted, use GST_MIXER_TRACK_HAS_FLAG ().
     * @param track the #GstMixerTrack to operate on.
     * @param mute a boolean value indicating whether to turn on or off muting.
     */
    set_mute(track: MixerTrack, mute: boolean): void
    /**
     * Sets a name/value option in the mixer to the requested value.
     * @param opts The #GstMixerOptions that we operate on.
     * @param value The requested new option value.
     */
    set_option(opts: MixerOptions, value: string): void
    /**
     * Enables or disables recording on the given track. Note that
     * this is only possible on input tracks, not on output tracks
     * (see GST_MIXER_TRACK_HAS_FLAG () and the GST_MIXER_TRACK_INPUT
     * flag).
     * @param track the #GstMixerTrack to operate on.
     * @param record a boolean value that indicates whether to turn on or off recording.
     */
    set_record(track: MixerTrack, record: boolean): void
    /**
     * Sets the volume on each channel in a track. Short note about
     * the mixer/element, such as 'Line-in' or 'Microphone'. A
     * channel is said to be a mono-stream inside this track. A
     * stereo track thus contains two channels.
     * @param track The #GstMixerTrack to set the volume on.
     * @param volumes an array of integers (of size track->num_channels) that gives the wanted volume for each channel in this track.
     */
    set_volume(track: MixerTrack, volumes: number): void
    /**
     * This function is called by the mixer implementation to produce
     * a notification message on the bus indicating that the volume(s) for the
     * given track have changed.
     * This function only works for GstElements that are implementing the
     * GstMixer interface, and the element needs to have been provided a bus.
     * @param track the GstMixerTrack that has changed.
     * @param volumes Array of volume values, one per channel on the mixer track.
     */
    volume_changed(track: MixerTrack, volumes: number): void

    // Own signals of GstInterfaces-0.10.GstInterfaces.Mixer

    connect(sigName: "mute-toggled", callback: Mixer_MuteToggledSignalCallback): number
    connect_after(sigName: "mute-toggled", callback: Mixer_MuteToggledSignalCallback): number
    emit(sigName: "mute-toggled", object: MixerTrack, p0: boolean, ...args: any[]): void
    connect(sigName: "option-changed", callback: Mixer_OptionChangedSignalCallback): number
    connect_after(sigName: "option-changed", callback: Mixer_OptionChangedSignalCallback): number
    emit(sigName: "option-changed", object: MixerOptions, p0: string, ...args: any[]): void
    connect(sigName: "record-toggled", callback: Mixer_RecordToggledSignalCallback): number
    connect_after(sigName: "record-toggled", callback: Mixer_RecordToggledSignalCallback): number
    emit(sigName: "record-toggled", object: MixerTrack, p0: boolean, ...args: any[]): void
    connect(sigName: "volume-changed", callback: Mixer_VolumeChangedSignalCallback): number
    connect_after(sigName: "volume-changed", callback: Mixer_VolumeChangedSignalCallback): number
    emit(sigName: "volume-changed", object: MixerTrack, p0: object, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.Mixer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Mixer extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.Mixer

    static name: string
    static $gtype: GObject.GType<Mixer>

    // Constructors of GstInterfaces-0.10.GstInterfaces.Mixer

    constructor(config?: Mixer_ConstructProps) 
    _init(config?: Mixer_ConstructProps): void
}

interface Navigation_ConstructProps extends GObject.Object_ConstructProps {
}

interface Navigation {

    // Owm methods of GstInterfaces-0.10.GstInterfaces.Navigation

    /**
     * Sends the indicated command to the navigation interface.
     * @param command The command to issue
     */
    send_command(command: NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
     * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     */
    send_mouse_event(event: string, button: number, x: number, y: number): void

    // Own virtual methods of GstInterfaces-0.10.GstInterfaces.Navigation

    vfunc_send_event(structure: Gst.Structure): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.Navigation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Navigation extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.Navigation

    static name: string
    static $gtype: GObject.GType<Navigation>

    // Constructors of GstInterfaces-0.10.GstInterfaces.Navigation

    constructor(config?: Navigation_ConstructProps) 
    _init(config?: Navigation_ConstructProps): void
}

interface PropertyProbe_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `probe-needed`
 */
interface PropertyProbe_ProbeNeededSignalCallback {
    ($obj: PropertyProbe, object: object): void
}

interface PropertyProbe {

    // Owm methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    /**
     * Get a list of properties for which probing is supported.
     * by this element.
     */
    get_properties(): object[]
    /**
     * Get #GParamSpec for a property for which probing is supported.
     * @param name name of the property.
     */
    get_property(name?: string): GObject.ParamSpec

    // Overloads of get_property

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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name?: string, value?: any): void
    get_property(...args: any[]): any
    get_property(args_or_property_name?: any[] | string, value?: any): GObject.ParamSpec | void | any
    /**
     * Gets the possible (probed) values for the given property,
     * requires the property to have been probed before.
     * @param pspec the #GParamSpec property identifier.
     */
    get_values(pspec: GObject.ParamSpec): GObject.ValueArray
    /**
     * Same as gst_property_probe_get_values ().
     * @param name the name of the property to get values for.
     */
    get_values_name(name: string): GObject.ValueArray
    /**
     * Checks whether a property needs a probe. This might be because
     * the property wasn't initialized before, or because host setup
     * changed. This might be, for example, because a new device was
     * added, and thus device probing needs to be refreshed to display
     * the new device.
     * @param pspec a #GParamSpec that identifies the property to check.
     */
    needs_probe(pspec: GObject.ParamSpec): boolean
    /**
     * Same as gst_property_probe_needs_probe ().
     * @param name the name of the property to check.
     */
    needs_probe_name(name: string): boolean
    /**
     * Check whether the given property requires a new probe. If so,
     * fo the probe. After that, retrieve a value list. Meant as a
     * utility function that wraps the above functions.
     * @param pspec The #GParamSpec property identifier.
     */
    probe_and_get_values(pspec: GObject.ParamSpec): GObject.ValueArray
    /**
     * Same as gst_property_probe_probe_and_get_values ().
     * @param name the name of the property to get values for.
     */
    probe_and_get_values_name(name: string): GObject.ValueArray
    /**
     * Runs a probe on the property specified by `pspec`
     * @param pspec #GParamSpec of the property.
     */
    probe_property(pspec: GObject.ParamSpec): void
    /**
     * Runs a probe on the property specified by `name`.
     * @param name name of the property.
     */
    probe_property_name(name: string): void

    // Own virtual methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    /**
     * Get a list of properties for which probing is supported.
     * by this element.
     * @virtual 
     */
    vfunc_get_properties(): object[]
    vfunc_get_values(prop_id: number, pspec: GObject.ParamSpec): GObject.ValueArray
    vfunc_needs_probe(prop_id: number, pspec: GObject.ParamSpec): boolean
    vfunc_probe_property(prop_id: number, pspec: GObject.ParamSpec): void

    // Own signals of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    connect(sigName: "probe-needed", callback: PropertyProbe_ProbeNeededSignalCallback): number
    connect_after(sigName: "probe-needed", callback: PropertyProbe_ProbeNeededSignalCallback): number
    emit(sigName: "probe-needed", object: object, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstPropertyProbe data structure.
 * @interface 
 */
class PropertyProbe extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    static name: string
    static $gtype: GObject.GType<PropertyProbe>

    // Constructors of GstInterfaces-0.10.GstInterfaces.PropertyProbe

    constructor(config?: PropertyProbe_ConstructProps) 
    _init(config?: PropertyProbe_ConstructProps): void
}

interface StreamVolume_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstInterfaces-0.10.GstInterfaces.StreamVolume

    mute?: boolean | null
    volume?: number | null
}

interface StreamVolume {

    // Own properties of GstInterfaces-0.10.GstInterfaces.StreamVolume

    mute: boolean
    volume: number

    // Owm methods of GstInterfaces-0.10.GstInterfaces.StreamVolume

    get_mute(): boolean
    get_volume(format: StreamVolumeFormat): number
    set_mute(mute: boolean): void
    set_volume(format: StreamVolumeFormat, val: number): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.StreamVolume

    connect(sigName: "notify::mute", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamVolume extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.StreamVolume

    static name: string
    static $gtype: GObject.GType<StreamVolume>

    // Constructors of GstInterfaces-0.10.GstInterfaces.StreamVolume

    constructor(config?: StreamVolume_ConstructProps) 
    _init(config?: StreamVolume_ConstructProps): void
}

interface Tuner_ConstructProps extends Gst.Element_ConstructProps, Gst.ImplementsInterface_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `channel-changed`
 */
interface Tuner_ChannelChangedSignalCallback {
    ($obj: Tuner, object: TunerChannel): void
}

/**
 * Signal callback interface for `frequency-changed`
 */
interface Tuner_FrequencyChangedSignalCallback {
    ($obj: Tuner, object: TunerChannel, p0: number): void
}

/**
 * Signal callback interface for `norm-changed`
 */
interface Tuner_NormChangedSignalCallback {
    ($obj: Tuner, object: TunerNorm): void
}

/**
 * Signal callback interface for `signal-changed`
 */
interface Tuner_SignalChangedSignalCallback {
    ($obj: Tuner, object: TunerChannel, p0: number): void
}

interface Tuner extends Gst.Element, Gst.ImplementsInterface {

    // Conflicting properties

    object: any

    // Owm methods of GstInterfaces-0.10.GstInterfaces.Tuner

    /**
     * Called by elements implementing the #GstTuner interface when the
     * current channel changes. Fires the #GstTuner::channel-changed signal.
     * @param channel A #GstTunerChannel instance
     */
    channel_changed(channel: TunerChannel): void
    /**
     * Called by elements implementing the #GstTuner interface when the
     * configured frequency changes. Fires the #GstTuner::frequency-changed
     * signal on the tuner, and the #GstTunerChannel::frequency-changed signal
     * on the channel.
     * @param channel The current #GstTunerChannel
     * @param frequency The new frequency setting
     */
    frequency_changed(channel: TunerChannel, frequency: number): void
    /**
     * Retrieve the current frequency from the given channel. As for
     * gst_tuner_set_frequency(), the #GstTunerChannel must support frequency
     * operations, as indicated by the GST_TUNER_CHANNEL_FREQUENCY flag.
     * @param channel The #GstTunerChannel to retrieve the frequency from.
     */
    get_frequency(channel: TunerChannel): number
    /**
     * Retrieve a #GList of #GstTunerChannels available
     * (e.g. 'composite', 's-video', ...) from the given tuner object.
     * owned by the GstTuner and must not be freed.
     */
    list_channels(): object[]
    /**
     * Retrieve a GList of available #GstTunerNorm settings for the currently
     * tuned channel on the given tuner object.
     * tuner object. The list is owned by the GstTuner and must not
     * be freed.
     */
    list_norms(): object[]
    /**
     * Called by elements implementing the #GstTuner interface when the
     * current norm changes. Fires the #GstTuner::norm-changed signal.
     * @param norm A #GstTunerNorm instance
     */
    norm_changed(norm: TunerNorm): void
    /**
     * Tunes the object to the given channel, which should be one of the
     * channels returned by gst_tuner_list_channels().
     * @param channel the channel to tune to.
     */
    set_channel(channel: TunerChannel): void
    /**
     * Sets a tuning frequency on the given tuner/channel. Note that this
     * requires the given channel to be a "tuning" channel, which can be
     * checked using GST_TUNER_CHANNEL_HAS_FLAG (), with the proper flag
     * being GST_TUNER_CHANNEL_FREQUENCY.
     * The frequency is in Hz, with minimum steps indicated by the 
     * frequency_multiplicator provided in the #GstTunerChannel. The
     * valid range is provided in the min_frequency and max_frequency properties
     * of the #GstTunerChannel.
     * @param channel The #GstTunerChannel to set the frequency on.
     * @param frequency The frequency to tune in to.
     */
    set_frequency(channel: TunerChannel, frequency: number): void
    /**
     * Changes the video norm on this tuner to the given norm, which should be
     * one of the norms returned by gst_tuner_list_norms().
     * @param norm the norm to use for the current channel.
     */
    set_norm(norm: TunerNorm): void
    /**
     * Called by elements implementing the #GstTuner interface when the
     * incoming signal strength changes. Fires the #GstTuner::signal-changed
     * signal on the tuner and the #GstTunerChannel::signal-changed signal on 
     * the channel.
     * @param channel The current #GstTunerChannel
     * @param signal The new signal strength
     */
    signal_changed(channel: TunerChannel, signal: number): void
    /**
     * Get the strength of the signal on this channel. Note that this
     * requires the current channel to be a "tuning" channel, i.e. a
     * channel on which frequency can be set. This can be checked using
     * GST_TUNER_CHANNEL_HAS_FLAG (), and the appropriate flag to check
     * for is GST_TUNER_CHANNEL_FREQUENCY.
     * The valid range of the signal strength is indicated in the 
     * min_signal and max_signal properties of the #GstTunerChannel.
     * @param channel the #GstTunerChannel to get the signal strength from.
     */
    signal_strength(channel: TunerChannel): number

    // Own signals of GstInterfaces-0.10.GstInterfaces.Tuner

    connect(sigName: "channel-changed", callback: Tuner_ChannelChangedSignalCallback): number
    connect_after(sigName: "channel-changed", callback: Tuner_ChannelChangedSignalCallback): number
    emit(sigName: "channel-changed", object: TunerChannel, ...args: any[]): void
    connect(sigName: "frequency-changed", callback: Tuner_FrequencyChangedSignalCallback): number
    connect_after(sigName: "frequency-changed", callback: Tuner_FrequencyChangedSignalCallback): number
    emit(sigName: "frequency-changed", object: TunerChannel, p0: number, ...args: any[]): void
    connect(sigName: "norm-changed", callback: Tuner_NormChangedSignalCallback): number
    connect_after(sigName: "norm-changed", callback: Tuner_NormChangedSignalCallback): number
    emit(sigName: "norm-changed", object: TunerNorm, ...args: any[]): void
    connect(sigName: "signal-changed", callback: Tuner_SignalChangedSignalCallback): number
    connect_after(sigName: "signal-changed", callback: Tuner_SignalChangedSignalCallback): number
    emit(sigName: "signal-changed", object: TunerChannel, p0: number, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.Tuner

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tuner extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.Tuner

    static name: string
    static $gtype: GObject.GType<Tuner>

    // Constructors of GstInterfaces-0.10.GstInterfaces.Tuner

    constructor(config?: Tuner_ConstructProps) 
    _init(config?: Tuner_ConstructProps): void
}

interface VideoOrientation_ConstructProps extends Gst.Element_ConstructProps, Gst.ImplementsInterface_ConstructProps, GObject.Object_ConstructProps {
}

interface VideoOrientation extends Gst.Element, Gst.ImplementsInterface {

    // Conflicting properties

    object: any

    // Owm methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation

    /**
     * Get the horizontal centering offset from the given object.
     * @param center return location for the result
     */
    get_hcenter(center: number): boolean
    /**
     * Get the horizontal flipping state (%TRUE for flipped) from the given object.
     * @param flip return location for the result
     */
    get_hflip(flip: boolean): boolean
    /**
     * Get the vertical centering offset from the given object.
     * @param center return location for the result
     */
    get_vcenter(center: number): boolean
    /**
     * Get the vertical flipping state (%TRUE for flipped) from the given object.
     * @param flip return location for the result
     */
    get_vflip(flip: boolean): boolean
    /**
     * Set the horizontal centering offset for the given object.
     * @param center centering offset
     */
    set_hcenter(center: number): boolean
    /**
     * Set the horizontal flipping state (%TRUE for flipped) for the given object.
     * @param flip use flipping
     */
    set_hflip(flip: boolean): boolean
    /**
     * Set the vertical centering offset for the given object.
     * @param center centering offset
     */
    set_vcenter(center: number): boolean
    /**
     * Set the vertical flipping state (%TRUE for flipped) for the given object.
     * @param flip use flipping
     */
    set_vflip(flip: boolean): boolean

    // Own virtual methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation

    /**
     * Get the horizontal centering offset from the given object.
     * @virtual 
     * @param center return location for the result
     */
    vfunc_get_hcenter(center: number): boolean
    /**
     * Get the horizontal flipping state (%TRUE for flipped) from the given object.
     * @virtual 
     * @param flip return location for the result
     */
    vfunc_get_hflip(flip: boolean): boolean
    /**
     * Get the vertical centering offset from the given object.
     * @virtual 
     * @param center return location for the result
     */
    vfunc_get_vcenter(center: number): boolean
    /**
     * Get the vertical flipping state (%TRUE for flipped) from the given object.
     * @virtual 
     * @param flip return location for the result
     */
    vfunc_get_vflip(flip: boolean): boolean
    /**
     * Set the horizontal centering offset for the given object.
     * @virtual 
     * @param center centering offset
     */
    vfunc_set_hcenter(center: number): boolean
    /**
     * Set the horizontal flipping state (%TRUE for flipped) for the given object.
     * @virtual 
     * @param flip use flipping
     */
    vfunc_set_hflip(flip: boolean): boolean
    /**
     * Set the vertical centering offset for the given object.
     * @virtual 
     * @param center centering offset
     */
    vfunc_set_vcenter(center: number): boolean
    /**
     * Set the vertical flipping state (%TRUE for flipped) for the given object.
     * @virtual 
     * @param flip use flipping
     */
    vfunc_set_vflip(flip: boolean): boolean

    // Class property signals of GstInterfaces-0.10.GstInterfaces.VideoOrientation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstVideoOrientation data structure.
 * @interface 
 */
class VideoOrientation extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.VideoOrientation

    static name: string
    static $gtype: GObject.GType<VideoOrientation>

    // Constructors of GstInterfaces-0.10.GstInterfaces.VideoOrientation

    constructor(config?: VideoOrientation_ConstructProps) 
    _init(config?: VideoOrientation_ConstructProps): void
}

interface XOverlay_ConstructProps extends Gst.Element_ConstructProps, Gst.ImplementsInterface_ConstructProps, GObject.Object_ConstructProps {
}

interface XOverlay extends Gst.Element, Gst.ImplementsInterface {

    // Conflicting properties

    object: any

    // Owm methods of GstInterfaces-0.10.GstInterfaces.XOverlay

    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     */
    expose(): void
    /**
     * This will post a "have-xwindow-id" element message on the bus.
     * This function should only be used by video overlay plugin developers.
     * @param xwindow_id a #XID referencing the XWindow.
     */
    got_xwindow_id(xwindow_id: number): void
    /**
     * Tell an overlay that it should handle events from the window system. These
     * events are forwared upstream as navigation events. In some window system,
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the XOverlay.
     * @param handle_events a #gboolean indicating if events should be handled or not.
     */
    handle_events(handle_events: boolean): void
    /**
     * This will post a "prepare-xwindow-id" element message on the bus
     * to give applications an opportunity to call 
     * gst_x_overlay_set_xwindow_id() before a plugin creates its own
     * window.
     * This function should only be used by video overlay plugin developers.
     */
    prepare_xwindow_id(): void
    /**
     * Configure a subregion as a video target within the window set by
     * gst_x_overlay_set_window_handle(). If this is not used or not supported
     * the video will fill the area of the window set as the overlay to 100%.
     * By specifying the rectangle, the video can be overlayed to a specific region
     * of that window only. After setting the new rectangle one should call
     * gst_x_overlay_expose() to force a redraw. To unset the region pass -1 for
     * the `width` and `height` parameters.
     * This method is needed for non fullscreen video overlay in UI toolkits that
     * do not support subwindows.
     * @param x the horizontal offset of the render area inside the window
     * @param y the vertical offset of the render area inside the window
     * @param width the width of the render area inside the window
     * @param height the height of the render area inside the window
     */
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * This will call the video overlay's set_xwindow_id method. You should
     * use this method to tell to a XOverlay to display video output to a
     * specific XWindow. Passing 0 as the xwindow_id will tell the overlay to
     * stop using that window and create an internal one.
     * @param xwindow_id a #XID referencing the XWindow.
     */
    set_xwindow_id(xwindow_id: number): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.XOverlay

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstXOverlay data structure.
 * @interface 
 */
class XOverlay extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.XOverlay

    static name: string
    static $gtype: GObject.GType<XOverlay>

    // Constructors of GstInterfaces-0.10.GstInterfaces.XOverlay

    constructor(config?: XOverlay_ConstructProps) 
    _init(config?: XOverlay_ConstructProps): void
}

interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `value-changed`
 */
interface ColorBalanceChannel_ValueChangedSignalCallback {
    ($obj: ColorBalanceChannel, object: number): void
}

interface ColorBalanceChannel {

    // Own fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel

    parent: GObject.Object
    label: string
    min_value: number
    max_value: number

    // Own signals of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel

    connect(sigName: "value-changed", callback: ColorBalanceChannel_ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: ColorBalanceChannel_ValueChangedSignalCallback): number
    emit(sigName: "value-changed", object: number, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColorBalanceChannel extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel

    static name: string
    static $gtype: GObject.GType<ColorBalanceChannel>

    // Constructors of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel

    constructor(config?: ColorBalanceChannel_ConstructProps) 
    _init(config?: ColorBalanceChannel_ConstructProps): void
}

interface MixerOptions_ConstructProps extends MixerTrack_ConstructProps {
}

interface MixerOptions {

    // Own fields of GstInterfaces-0.10.GstInterfaces.MixerOptions

    parent: MixerTrack
    values: object[]
    _gst_reserved: object[]

    // Class property signals of GstInterfaces-0.10.GstInterfaces.MixerOptions

    connect(sigName: "notify::index", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::index", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::untranslated-label", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::untranslated-label", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::untranslated-label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MixerOptions extends MixerTrack {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerOptions

    static name: string
    static $gtype: GObject.GType<MixerOptions>

    // Constructors of GstInterfaces-0.10.GstInterfaces.MixerOptions

    constructor(config?: MixerOptions_ConstructProps) 
    _init(config?: MixerOptions_ConstructProps): void
}

interface MixerTrack_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstInterfaces-0.10.GstInterfaces.MixerTrack

    index?: number | null
    untranslated_label?: string | null
}

interface MixerTrack {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerTrack

    readonly index: number
    readonly untranslated_label: string

    // Own fields of GstInterfaces-0.10.GstInterfaces.MixerTrack

    parent: GObject.Object
    label: string
    flags: MixerTrackFlags
    num_channels: number
    min_volume: number
    max_volume: number

    // Class property signals of GstInterfaces-0.10.GstInterfaces.MixerTrack

    connect(sigName: "notify::index", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::index", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::index", ...args: any[]): void
    connect(sigName: "notify::untranslated-label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::untranslated-label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::untranslated-label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MixerTrack extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerTrack

    static name: string
    static $gtype: GObject.GType<MixerTrack>

    // Constructors of GstInterfaces-0.10.GstInterfaces.MixerTrack

    constructor(config?: MixerTrack_ConstructProps) 
    _init(config?: MixerTrack_ConstructProps): void
}

interface TunerChannel_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `frequency-changed`
 */
interface TunerChannel_FrequencyChangedSignalCallback {
    ($obj: TunerChannel, object: number): void
}

/**
 * Signal callback interface for `signal-changed`
 */
interface TunerChannel_SignalChangedSignalCallback {
    ($obj: TunerChannel, object: number): void
}

interface TunerChannel {

    // Own fields of GstInterfaces-0.10.GstInterfaces.TunerChannel

    parent: GObject.Object
    label: string
    flags: TunerChannelFlags
    freq_multiplicator: number
    min_frequency: number
    max_frequency: number
    min_signal: number
    max_signal: number

    // Own signals of GstInterfaces-0.10.GstInterfaces.TunerChannel

    connect(sigName: "frequency-changed", callback: TunerChannel_FrequencyChangedSignalCallback): number
    connect_after(sigName: "frequency-changed", callback: TunerChannel_FrequencyChangedSignalCallback): number
    emit(sigName: "frequency-changed", object: number, ...args: any[]): void
    connect(sigName: "signal-changed", callback: TunerChannel_SignalChangedSignalCallback): number
    connect_after(sigName: "signal-changed", callback: TunerChannel_SignalChangedSignalCallback): number
    emit(sigName: "signal-changed", object: number, ...args: any[]): void

    // Class property signals of GstInterfaces-0.10.GstInterfaces.TunerChannel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TunerChannel extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.TunerChannel

    static name: string
    static $gtype: GObject.GType<TunerChannel>

    // Constructors of GstInterfaces-0.10.GstInterfaces.TunerChannel

    constructor(config?: TunerChannel_ConstructProps) 
    _init(config?: TunerChannel_ConstructProps): void
}

interface TunerNorm_ConstructProps extends GObject.Object_ConstructProps {
}

interface TunerNorm {

    // Own fields of GstInterfaces-0.10.GstInterfaces.TunerNorm

    parent: GObject.Object
    label: string
    framerate: any

    // Class property signals of GstInterfaces-0.10.GstInterfaces.TunerNorm

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TunerNorm extends GObject.Object {

    // Own properties of GstInterfaces-0.10.GstInterfaces.TunerNorm

    static name: string
    static $gtype: GObject.GType<TunerNorm>

    // Constructors of GstInterfaces-0.10.GstInterfaces.TunerNorm

    constructor(config?: TunerNorm_ConstructProps) 
    _init(config?: TunerNorm_ConstructProps): void
}

interface ColorBalanceChannelClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannelClass

    parent: GObject.ObjectClass
    value_changed: (channel: ColorBalanceChannel, value: number) => void
    _gst_reserved: object[]
}

abstract class ColorBalanceChannelClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannelClass

    static name: string
}

interface ColorBalanceClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceClass

    klass: GObject.TypeInterface
    balance_type: ColorBalanceType
    list_channels: (balance: ColorBalance) => object[]
    set_value: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    get_value: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    value_changed: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    _gst_reserved: object[]
}

class ColorBalanceClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.ColorBalanceClass

    static name: string
}

interface MixerClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.MixerClass

    klass: GObject.TypeInterface
    mixer_type: MixerType
    list_tracks: (mixer: Mixer) => object[]
    set_volume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    get_volume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    set_mute: (mixer: Mixer, track: MixerTrack, mute: boolean) => void
    set_record: (mixer: Mixer, track: MixerTrack, record: boolean) => void
    mute_toggled: (mixer: Mixer, channel: MixerTrack, mute: boolean) => void
    record_toggled: (mixer: Mixer, channel: MixerTrack, record: boolean) => void
    volume_changed: (mixer: Mixer, channel: MixerTrack, volumes: number) => void
    set_option: (mixer: Mixer, opts: MixerOptions, value: string) => void
    get_option: (mixer: Mixer, opts: MixerOptions) => string
    option_changed: (mixer: Mixer, opts: MixerOptions, option: string) => void
    get_mixer_flags: (mixer: Mixer) => MixerFlags
    _gst_reserved: object[]
}

class MixerClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerClass

    static name: string
}

interface MixerOptionsClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.MixerOptionsClass

    parent: MixerTrackClass
    _gst_reserved: object[]
}

abstract class MixerOptionsClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerOptionsClass

    static name: string
}

interface MixerTrackClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.MixerTrackClass

    parent: GObject.ObjectClass
    _gst_reserved: object[]
}

abstract class MixerTrackClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.MixerTrackClass

    static name: string
}

interface NavigationInterface {

    // Own fields of GstInterfaces-0.10.GstInterfaces.NavigationInterface

    g_iface: GObject.TypeInterface
    send_event: (navigation: Navigation, structure: Gst.Structure) => void
    _gst_reserved: object[]
}

abstract class NavigationInterface {

    // Own properties of GstInterfaces-0.10.GstInterfaces.NavigationInterface

    static name: string
}

interface PropertyProbeInterface {

    // Own fields of GstInterfaces-0.10.GstInterfaces.PropertyProbeInterface

    klass: GObject.TypeInterface
    probe_needed: (probe: PropertyProbe, pspec: GObject.ParamSpec) => void
    get_properties: (probe: PropertyProbe) => object[]
    needs_probe: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => boolean
    probe_property: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => void
    get_values: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => GObject.ValueArray
    _gst_reserved: object[]
}

/**
 * #GstPropertyProbe interface.
 * @record 
 */
abstract class PropertyProbeInterface {

    // Own properties of GstInterfaces-0.10.GstInterfaces.PropertyProbeInterface

    static name: string
}

interface StreamVolumeInterface {

    // Own fields of GstInterfaces-0.10.GstInterfaces.StreamVolumeInterface

    parent: GObject.TypeInterface
    _gst_reserved: object[]
}

abstract class StreamVolumeInterface {

    // Own properties of GstInterfaces-0.10.GstInterfaces.StreamVolumeInterface

    static name: string
}

interface TunerChannelClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.TunerChannelClass

    parent: GObject.ObjectClass
    frequency_changed: (channel: TunerChannel, frequency: number) => void
    signal_changed: (channel: TunerChannel, signal: number) => void
    _gst_reserved: object[]
}

abstract class TunerChannelClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.TunerChannelClass

    static name: string
}

interface TunerClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.TunerClass

    klass: GObject.TypeInterface
    list_channels: (tuner: Tuner) => object[]
    set_channel: (tuner: Tuner, channel: TunerChannel) => void
    list_norms: (tuner: Tuner) => object[]
    set_norm: (tuner: Tuner, norm: TunerNorm) => void
    set_frequency: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    get_frequency: (tuner: Tuner, channel: TunerChannel) => number
    signal_strength: (tuner: Tuner, channel: TunerChannel) => number
    channel_changed: (tuner: Tuner, channel: TunerChannel) => void
    norm_changed: (tuner: Tuner, norm: TunerNorm) => void
    frequency_changed: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    signal_changed: (tuner: Tuner, channel: TunerChannel, signal: number) => void
    _gst_reserved: object[]
}

class TunerClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.TunerClass

    static name: string
}

interface TunerNormClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.TunerNormClass

    parent: GObject.ObjectClass
    _gst_reserved: object[]
}

abstract class TunerNormClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.TunerNormClass

    static name: string
}

interface VideoOrientationInterface {

    // Own fields of GstInterfaces-0.10.GstInterfaces.VideoOrientationInterface

    parent: GObject.TypeInterface
    get_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    get_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    get_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    get_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
    set_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    set_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    set_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    set_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
}

/**
 * #GstVideoOrientationInterface interface.
 * @record 
 */
abstract class VideoOrientationInterface {

    // Own properties of GstInterfaces-0.10.GstInterfaces.VideoOrientationInterface

    static name: string
}

interface XOverlayClass {

    // Own fields of GstInterfaces-0.10.GstInterfaces.XOverlayClass

    klass: GObject.TypeInterface
    set_xwindow_id: (overlay: XOverlay, xwindow_id: number) => void
    expose: (overlay: XOverlay) => void
    handle_events: (overlay: XOverlay, handle_events: boolean) => void
    set_render_rectangle: (overlay: XOverlay, x: number, y: number, width: number, height: number) => void
    _gst_reserved: object[]
}

/**
 * #GstXOverlay interface
 * @record 
 */
class XOverlayClass {

    // Own properties of GstInterfaces-0.10.GstInterfaces.XOverlayClass

    static name: string
}

}
export default GstInterfaces;