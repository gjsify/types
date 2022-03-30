/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gegl-0.4
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Babl from './Babl-0.1';

export namespace Gegl {

enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
enum BablVariant {
    FLOAT,
    LINEAR,
    NON_LINEAR,
    PERCEPTUAL,
    LINEAR_PREMULTIPLIED,
    PERCEPTUAL_PREMULTIPLIED,
    LINEAR_PREMULTIPLIED_IF_ALPHA,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA,
    ADD_ALPHA,
}
enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
}
enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
    BLUE_NOISE,
    BLUE_NOISE_COVARIANT,
}
/**
 * Flags controlling the mapping strategy.
 */
enum MapFlags {
    /**
     * Prevent further mapping from being registered.
     */
    MAP_EXCLUDE_UNMAPPED,
}
enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
/**
 * An enumerated type specifying resolution (density) units.  If resolution
 * units are unknown, X and Y resolution specify the pixel aspect ratio.
 */
enum ResolutionUnit {
    /**
     * Unknown or resolution not applicable.
     */
    NONE,
    /**
     * Dots or pixels per inch.
     */
    DPI,
    /**
     * Dots or pixels per metre.
     */
    DPM,
}
enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
enum TileCommand {
    EGL_TILE_IDLE,
    EGL_TILE_SET,
    EGL_TILE_GET,
    EGL_TILE_IS_CACHED,
    EGL_TILE_EXIST,
    EGL_TILE_VOID,
    EGL_TILE_FLUSH,
    EGL_TILE_REFETCH,
    EGL_TILE_REINIT,
    GEGL_TILE_LAST_0_4_8_COMMAND,
    EGL_TILE_COPY,
    EGL_TILE_LAST_COMMAND,
}
enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
enum PadType {
    OUTPUT,
    INPUT,
}
enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
    BAKE_ANIM,
}
const AUTO_ROWSTRIDE: number
const CH_BACK_CENTER: number
const CH_BACK_LEFT: number
const CH_BACK_RIGHT: number
const CH_FRONT_CENTER: number
const CH_FRONT_LEFT: number
const CH_FRONT_LEFT_OF_CENTER: number
const CH_FRONT_RIGHT: number
const CH_FRONT_RIGHT_OF_CENTER: number
const CH_LAYOUT_2POINT1: number
const CH_LAYOUT_2_1: number
const CH_LAYOUT_2_2: number
const CH_LAYOUT_3POINT1: number
const CH_LAYOUT_4POINT0: number
const CH_LAYOUT_4POINT1: number
const CH_LAYOUT_5POINT0: number
const CH_LAYOUT_5POINT0_BACK: number
const CH_LAYOUT_5POINT1: number
const CH_LAYOUT_5POINT1_BACK: number
const CH_LAYOUT_6POINT0: number
const CH_LAYOUT_6POINT0_FRONT: number
const CH_LAYOUT_6POINT1: number
const CH_LAYOUT_6POINT1_BACK: number
const CH_LAYOUT_6POINT1_FRONT: number
const CH_LAYOUT_7POINT0: number
const CH_LAYOUT_7POINT0_FRONT: number
const CH_LAYOUT_7POINT1: number
const CH_LAYOUT_7POINT1_WIDE: number
const CH_LAYOUT_7POINT1_WIDE_BACK: number
const CH_LAYOUT_HEXADECAGONAL: number
const CH_LAYOUT_HEXAGONAL: number
const CH_LAYOUT_NATIVE: number
const CH_LAYOUT_OCTAGONAL: number
const CH_LAYOUT_QUAD: number
const CH_LAYOUT_STEREO: number
const CH_LAYOUT_STEREO_DOWNMIX: number
const CH_LAYOUT_SURROUND: number
const CH_LOW_FREQUENCY: number
const CH_LOW_FREQUENCY_2: number
const CH_SIDE_LEFT: number
const CH_SIDE_RIGHT: number
const CH_STEREO_LEFT: number
const CH_STEREO_RIGHT: number
const CH_SURROUND_DIRECT_LEFT: number
const CH_SURROUND_DIRECT_RIGHT: number
const CH_TOP_BACK_CENTER: number
const CH_TOP_BACK_LEFT: number
const CH_TOP_BACK_RIGHT: number
const CH_TOP_CENTER: number
const CH_TOP_FRONT_CENTER: number
const CH_TOP_FRONT_LEFT: number
const CH_TOP_FRONT_RIGHT: number
const CH_WIDE_LEFT: number
const CH_WIDE_RIGHT: number
const FLOAT_EPSILON: number
const LOOKUP_MAX_ENTRIES: number
const MAJOR_VERSION: number
const MAX_AUDIO_CHANNELS: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PARAM_NO_VALIDATE: number
function bablVariant(format: Babl.Object, variant: BablVariant): Babl.Object
function clDisable(): void
function clInit(): boolean
function clIsAccelerated(): boolean
function config(): Config
function createChain(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
function createChainArgv(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
function exit(): void
function format(formatName: string): any | null
function formatGetName(format: any): string | null
function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function graphDumpOutputs(node: Node): void
function graphDumpRequest(node: Node, roi: Rectangle): void
function hasOperation(operationType: string): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function isMainThread(): boolean
function listOperations(): string[]
function loadModuleDirectory(path: string): void
function parallelDistribute(maxN: number, func: ParallelDistributeFunc): void
function parallelDistributeArea(area: Rectangle, threadCost: number, splitStrategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
function parallelDistributeRange(size: number, threadCost: number, func: ParallelDistributeRangeFunc): void
function paramSpecAudioFragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColor(name: string, nick: string, blurb: string, defaultColor: Color, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColorFromString(name: string, nick: string, blurb: string, defaultColorString: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColorGetDefault(self: GObject.ParamSpec): Color
function paramSpecCurve(name: string, nick: string, blurb: string, defaultCurve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecEnum(name: string, nick: string, blurb: string, enumType: GObject.Type, defaultValue: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecFilePath(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecFormat(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecGetPropertyKey(pspec: GObject.ParamSpec, keyName: string): string
function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecPath(name: string, nick: string, blurb: string, defaultPath: Path, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSeed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSetPropertyKey(pspec: GObject.ParamSpec, keyName: string, value: string): void
function paramSpecString(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecUri(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function rectangleInfinitePlane(): Rectangle
function resetStats(): void
function serialize(start: Node, end: Node, basepath: string, serializeFlags: SerializeFlag): string
function stats(): Stats
interface LookupFunction {
    (value: number, data?: object | null): number
}
interface NodeFunction {
    (node: PathItem): void
}
/**
 * Specifies the type of function passed to
 * gegl_parallel_distribute_area().
 * 
 * The function should process the sub-area specified by `area`.
 */
interface ParallelDistributeAreaFunc {
    (area: Rectangle): void
}
/**
 * Specifies the type of function passed to gegl_parallel_distribute().
 * 
 * The function should process the `i-th` part of the data, out of `n`
 * equal parts.  `n` may be less-than or equal-to the `max_n` argument
 * passed to gegl_parallel_distribute().
 */
interface ParallelDistributeFunc {
    (i: number, n: number): void
}
/**
 * Specifies the type of function passed to
 * gegl_parallel_distribute_range().
 * 
 * The function should process `size` elements of the data, starting
 * at `offset`.
 */
interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (geglTileSource: TileSource, command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
}
class Metadata {
    /* Methods of Gegl-0.4.Gegl.Metadata */
    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     */
    iterGetValue(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @param iter #GeglMetadataIter to be initialised
     */
    iterInit(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     */
    iterLookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @param iter #GeglMetadataIter to be updated
     */
    iterNext(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     */
    iterSetValue(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @param fileModule String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     */
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Unregister the file module mappings and any further mappings added or
     * modified by the application.  This should be called after the file module
     * completes operations.
     */
    unregisterMap(): void
    static name: string
}
interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.AudioFragment */
    string?: string
}
class AudioFragment {
    /* Properties of Gegl-0.4.Gegl.AudioFragment */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.AudioFragment */
    getChannelLayout(): number
    getChannels(): number
    getMaxSamples(): number
    getPos(): number
    getSampleCount(): number
    getSampleRate(): number
    setChannelLayout(channelLayout: number): void
    setChannels(channels: number): void
    setMaxSamples(maxSamples: number): void
    setPos(pos: number): void
    setSampleCount(sampleCount: number): void
    setSampleRate(sampleRate: number): void
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
    connect(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioFragment_ConstructProps)
    _init (config?: AudioFragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sampleRate: number, channels: number, channelLayout: number, maxSamples: number): AudioFragment
    static $gtype: GObject.Type
}
interface Buffer_ConstructProps extends TileHandler_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Buffer */
    abyssHeight?: number
    abyssWidth?: number
    abyssX?: number
    abyssY?: number
    backend?: TileBackend
    format?: object
    height?: number
    initialized?: boolean
    path?: string
    shiftX?: number
    shiftY?: number
    tileHeight?: number
    tileWidth?: number
    width?: number
    x?: number
    y?: number
}
class Buffer {
    /* Properties of Gegl-0.4.Gegl.Buffer */
    readonly abyssHeight: number
    readonly abyssWidth: number
    readonly abyssX: number
    readonly abyssY: number
    readonly backend: TileBackend
    format: object
    height: number
    readonly initialized: boolean
    readonly path: string
    readonly pixels: number
    readonly pxSize: number
    readonly shiftX: number
    readonly shiftY: number
    readonly tileHeight: number
    readonly tileWidth: number
    width: number
    x: number
    y: number
    /* Fields of Gegl-0.4.Gegl.TileHandler */
    parentInstance: TileSource
    source: TileSource
    priv: TileHandlerPrivate
    /* Fields of Gegl-0.4.Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Buffer */
    /**
     * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    addHandler(handler?: object | null): void
    /**
     * Clears the provided rectangular region by setting all the associated memory
     * to 0.
     * @param roi a rectangular region
     */
    clear(roi: Rectangle): void
    /**
     * Copy a region from source buffer to destination buffer.
     * 
     * If the babl_formats of the buffers are the same, and the tile boundaries
     * align, this will create copy-on-write tiles in the destination buffer.
     * 
     * This function never does any scaling. When src_rect and dst_rect do not have
     * the same width and height, the size of src_rect is used.
     * @param srcRect source rectangle (or NULL to copy entire source buffer)
     * @param repeatMode the abyss policy to be using if src_rect is outside src's extent.
     * @param dst destination buffer.
     * @param dstRect position of upper left destination pixel (or NULL to match `src_rect)`
     */
    copy(srcRect: Rectangle, repeatMode: AbyssPolicy, dst: Buffer, dstRect: Rectangle): void
    /**
     * Create a new sub GeglBuffer, that is a view on a larger buffer.
     * @param extent coordinates of new buffer.
     */
    createSubBuffer(extent: Rectangle): Buffer
    /**
     * Duplicate a buffer (internally uses gegl_buffer_copy). Aligned tiles
     * will create copy-on-write clones in the new buffer.
     */
    dup(): Buffer
    /**
     * Flushes all unsaved data to disk, this is not necessary for shared
     * geglbuffers opened with gegl_buffer_open since they auto-sync on writes.
     */
    flush(): void
    /**
     * Invokes the external flush function, if any is set on the provided buffer -
     * this ensures that data pending - in the current implementation only OpenCL -
     * externally to be synchronized with the buffer. Multi threaded code should
     * call such a synchronization before branching out to avoid each of the
     * threads having an implicit synchronization of its own.
     * @param rect rectangle
     */
    flushExt(rect: Rectangle): void
    /**
     * Blocks emission of the "changed" signal for `buffer`.
     * 
     * While the signal is blocked, changes to `buffer` are accumulated, and will
     * be emitted once the signal is unblocked, using gegl_buffer_thaw_changed().
     */
    freezeChanged(): void
    /**
     * Return the abyss extent of a buffer, this expands out to the parents extent in
     * subbuffers.
     */
    getAbyss(): Rectangle
    /**
     * Returns a pointer to a GeglRectangle structure defining the geometry of a
     * specific GeglBuffer, this is also the default width/height of buffers passed
     * in to gegl_buffer_set and gegl_buffer_get (with a scale of 1.0 at least).
     */
    getExtent(): Rectangle
    /**
     * Fetch a rectangular linear buffer of pixel data from the GeglBuffer.
     * @param rect the coordinates we want to retrieve data from.
     * @param scale sampling scale, 1.0 = pixel for pixel 2.0 = magnify, 0.5 scale down.
     * @param formatName the format to store data in, if NULL the format of the buffer is used.
     * @param repeatMode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(rect: Rectangle, scale: number, formatName: string | null, repeatMode: AbyssPolicy): Uint8Array
    /**
     * Store a linear raster buffer into the GeglBuffer.
     * @param rect the rectangle to write.
     * @param formatName the format of the input data.
     * @param src pixel data to write to `buffer`.
     */
    set(rect: Rectangle, formatName: string, src: Uint8Array): void
    /**
     * This function makes sure GeglBuffer and underlying code is aware of changes
     * being made to the linear buffer. If the request was not a compatible one
     * it is written back to the buffer. Multiple concurrent users can be handed
     * the same buffer (both raw access and converted).
     * @param linear a previously returned buffer.
     */
    linearClose(linear?: object | null): void
    /**
     * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    removeHandler(handler?: object | null): void
    /**
     * Clean up resources used by sampling framework of buffer.
     */
    sampleCleanup(): void
    /**
     * Write a GeglBuffer to a file.
     * @param path the path where the gegl buffer will be saved, any writable GIO uri is valid.
     * @param roi the region of interest to write, this is the tiles that will be collected and written to disk.
     */
    save(path: string, roi: Rectangle): void
    /**
     * Changes the size and position of the abyss rectangle of a buffer.
     * 
     * Returns TRUE if the change of abyss was successful.
     * @param abyss new abyss.
     */
    setAbyss(abyss: Rectangle): boolean
    /**
     * Sets the region covered by rect to the specified color.
     * @param rect a rectangular region to fill with a color.
     * @param color the GeglColor to fill with.
     */
    setColor(rect: Rectangle, color: Color): void
    /**
     * Sets the region covered by rect to the the provided pixel.
     * @param rect a rectangular region to fill with a color.
     * @param pixel pointer to the data of a single pixel
     * @param pixelFormat the babl format of the pixel, if missing - the soft format of dst.
     */
    setColorFromPixel(rect: Rectangle, pixel: object | null, pixelFormat: Babl.Object): void
    /**
     * Changes the size and position that is considered active in a buffer, this
     * operation is valid on any buffer, reads on subbuffers outside the master
     * buffer's extent are at the moment undefined.
     * 
     * Returns TRUE if the change of extent was successful.
     * @param extent new extent.
     */
    setExtent(extent: Rectangle): boolean
    /**
     * Fill a region with a repeating pattern. Offsets parameters are
     * relative to the origin (0, 0) and not to the rectangle. So be carefull
     * about the origin of `pattern` and `buffer` extents.
     * @param rect the region of `buffer` to fill
     * @param pattern a #GeglBuffer to be repeated as a pattern
     * @param xOffset where the pattern starts horizontally
     * @param yOffset where the pattern starts vertical
     */
    setPattern(rect: Rectangle, pattern: Buffer, xOffset: number, yOffset: number): void
    /**
     * Checks if a pair of buffers share the same underlying tile storage.
     * 
     * Returns TRUE if `buffer1` and `buffer2` share the same storage.
     * @param buffer2 a #GeglBuffer.
     */
    shareStorage(buffer2: Buffer): boolean
    /**
     * This function should be used instead of g_signal_connect when connecting to
     * the GeglBuffer::changed signal handler, GeglBuffer contains additional
     * machinery to avoid the overhead of changes when no signal handler have been
     * connected, if regular g_signal_connect is used; then no signals will be
     * emitted.
     * @param detailedSignal only "changed" expected for now
     * @param cHandler c function callback
     */
    signalConnect(detailedSignal: string, cHandler: GObject.Callback): number
    /**
     * Unblocks emission of the "changed" signal for `buffer`.
     * 
     * Once all calls to gegl_buffer_freeze_changed() are matched by corresponding
     * calls to gegl_buffer_freeze_changed(), all accumulated changes are emitted.
     */
    thawChanged(): void
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void
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
    /* Signals of Gegl-0.4.Gegl.Buffer */
    connect(sigName: "changed", callback: ((object: Rectangle) => void)): number
    on(sigName: "changed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "changed", object: Rectangle): void
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
    connect(sigName: "notify::abyss-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abyss-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abyss-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abyss-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::abyss-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abyss-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abyss-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abyss-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::abyss-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abyss-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abyss-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abyss-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::abyss-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abyss-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abyss-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abyss-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initialized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initialized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shift-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shift-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shift-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shift-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shift-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shift-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shift-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shift-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shift-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shift-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(formatName: string, x: number, y: number, width: number, height: number): Buffer
    static newForBackend(extent: Rectangle, backend: TileBackend): Buffer
    /**
     * Loads an existing GeglBuffer from disk, if it has previously been saved with
     * gegl_buffer_save it should be possible to open through any GIO transport, buffers
     * that have been used as swap needs random access to be opened.
     * @param path the path to a gegl buffer on disk.
     */
    static load(path: string): Buffer
    /**
     * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
     * state so multiple instances of gegl can share the same buffer. Sets on
     * one buffer are reflected in the other.
     * @param path the path to a gegl buffer on disk.
     */
    static open(path: string): Buffer
    /**
     * Generates a unique filename in the GEGL swap directory, suitable for
     * using as swap space.  When the file is no longer needed, it may be
     * removed with gegl_buffer_swap_remove_file(); otherwise, it will be
     * removed when gegl_exit() is called.
     * @param suffix a string to suffix the filename with, for          identification purposes, or %NULL.
     */
    static swapCreateFile(suffix?: string | null): string | null
    /**
     * Tests if `path` is a swap file, that is, if it has been created
     * with gegl_buffer_swap_create_file(), and hasn't been removed
     * yet.
     * @param path a filename
     */
    static swapHasFile(path: string): boolean
    /**
     * Removes a swap file, generated using gegl_buffer_swap_create_file(),
     * unlinking the file, if exists.
     * @param path the swap file to remove, as returned by        gegl_buffer_swap_create_file()
     */
    static swapRemoveFile(path: string): void
    static $gtype: GObject.Type
}
interface Color_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Color */
    string?: string
}
class Color {
    /* Properties of Gegl-0.4.Gegl.Color */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Color */
    /**
     * Creates a copy of `color`.
     */
    duplicate(): Color
    /**
     * Get the component values of the color in `format`.
     * @param format A Babl pointer
     */
    getComponents(format: any): number[]
    getFormat(): Babl.Object
    /**
     * Retrieves the current set color as linear light non premultipled RGBA data,
     * any of the return pointers can be omitted.
     */
    getRgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    /**
     * Set the color using the component values as `format`.
     * @param format A Babl pointer
     * @param components The color components.
     */
    setComponents(format: any, components: number[]): void
    /**
     * Set color as linear light non premultipled RGBA data
     * @param red red value
     * @param green green value
     * @param blue blue value
     * @param alpha alpha value
     */
    setRgba(red: number, green: number, blue: number, alpha: number): void
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
    connect(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Color_ConstructProps)
    _init (config?: Color_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(string: string): Color
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Config */
    applicationLicense?: string
    chunkSize?: number
    mipmapRendering?: boolean
    quality?: number
    queueSize?: number
    swap?: string
    swapCompression?: string
    threads?: number
    tileCacheSize?: number
    tileHeight?: number
    tileWidth?: number
    useOpencl?: boolean
}
class Config {
    /* Properties of Gegl-0.4.Gegl.Config */
    applicationLicense: string
    chunkSize: number
    mipmapRendering: boolean
    quality: number
    queueSize: number
    swap: string
    swapCompression: string
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::application-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mipmap-rendering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mipmap-rendering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::queue-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static $gtype: GObject.Type
}
interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}
class Curve {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Curve */
    /**
     * Add a point to the curve at `x` `y` (replacing the value exactly for `x` if it
     * already exists.
     * @param x x coordinate
     * @param y y coordinate
     */
    addPoint(x: number, y: number): number
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     * @param x 
     */
    calcValue(x: number): number
    /**
     * Create a copy of `curve`.
     */
    duplicate(): Curve
    /**
     * Retrive the coordinates for an index.
     * @param index the position of the value number to retrieve.
     */
    getPoint(index: number): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounds on the values of the curve and store the values in
     * the return locaitons provided in `min_y` and `max_y`.
     */
    getYBounds(): [ /* minY */ number, /* maxY */ number ]
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     */
    numPoints(): number
    /**
     * Replace an existing point in a curve.
     * @param index the position of the value number to retrieve.
     * @param x x coordinate
     * @param y y coordinate
     */
    setPoint(index: number, x: number, y: number): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Curve_ConstructProps)
    _init (config?: Curve_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(yMin: number, yMax: number): Curve
    static newDefault(): Curve
    static $gtype: GObject.Type
}
interface MetadataHash_ConstructProps extends MetadataStore_ConstructProps {
}
class MetadataHash {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    /**
     * Name of image creator.
     */
    artist: string
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment: string
    /**
     * Copyright notice.
     */
    copyright: string
    /**
     * Description of image (possibly long).
     */
    description: string
    /**
     * Legal disclaimer.
     */
    disclaimer: string
    /**
     * Current file loader/saver module name. Valid only while a #GeglMetadata
     * mapping is registered. This property is mainly provided for use in signal
     * handlers.
     */
    readonly fileModuleName: string
    /**
     * A #GeglResolutionUnit specifying units for the image resolution (density).
     */
    resolutionUnit: ResolutionUnit
    /**
     * X resolution or density in dots per unit.
     */
    resolutionX: number
    /**
     * Y resolution or density in dots per unit.
     */
    resolutionY: number
    /**
     * Software used to create the image.
     */
    software: string
    /**
     * Device used to create the image.
     */
    source: string
    /**
     * Time of original image creation.
     */
    timestamp: GLib.DateTime
    /**
     * Short (one line) title or caption for image.
     */
    title: string
    /**
     * Warning of nature of content.
     */
    warning: string
    /* Fields of Gegl-0.4.Gegl.MetadataStore */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    /**
     * Declare a metadata value using a #GParamSpec.
     * @param pspec A #GParamSpec
     */
    declare(pspec: GObject.ParamSpec): void
    /**
     * Get name of image creator.
     */
    getArtist(): string
    /**
     * Get the comment.
     */
    getComment(): string
    /**
     * Get the copyright notice.
     */
    getCopyright(): string
    /**
     * Get description of image.
     */
    getDescription(): string
    /**
     * Get the legal disclaimer.
     */
    getDisclaimer(): string
    /**
     * Return the name registered by the current file module.
     */
    getFileModuleName(): string
    /**
     * Get the units used for resolution.
     */
    getResolutionUnit(): ResolutionUnit
    /**
     * Get the X resolution or density in dots per unit.
     */
    getResolutionX(): number
    /**
     * Get the Y resolution or density in dots per unit.
     */
    getResolutionY(): number
    /**
     * Get software used to create the image.
     */
    getSoftware(): string
    /**
     * Get device used to create the image.
     */
    getSource(): string
    /**
     * A slightly more efficient version of gegl_metadata_store_get_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_get_value().
     * @param name Metadata name
     */
    getString(name: string): string
    /**
     * Get time of original image creation.
     */
    getTimestamp(): GLib.DateTime
    /**
     * Get title or caption for image.
     */
    getTitle(): string
    /**
     * Retrieve the metadata value. `value` must be initialised with a compatible
     * type. If the value is unset or has not been previously declared `value` is
     * unchanged and an error message is logged.
     * @param name Metadata name
     * @param value An initialised #GValue.
     */
    getValue(name: string, value: any): /* value */ any
    /**
     * Get warning.
     */
    getWarning(): string
    /**
     * Test whether the #GeglMetadataStore contains a value for the specified name.
     * @param name Metadata name
     */
    hasValue(name: string): boolean
    /**
     * gegl_metadata_store_notify() is called by subclasses when the value of a
     * metadata variable changes. It emits the `::changed` signal with the variable
     * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
     * by a property so that a notify signal is emitted with the property name as
     * the detail parameter.
     * @param pspec The #GParamSpec used to declare the variable.
     * @param shadow The metadata variable shadows a property.
     */
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(localName: string, name: string, transform: GObject.ValueTransform): void
    /**
     * Set name of image creator.
     * @param artist Artist string
     */
    setArtist(artist: string): void
    /**
     * Set the miscellaneous comment; conversion from GIF comment.
     * @param comment Comment string
     */
    setComment(comment: string): void
    /**
     * Set the copyright notice.
     * @param copyright Copyright string
     */
    setCopyright(copyright: string): void
    /**
     * Set description of image.
     * @param description Description string
     */
    setDescription(description: string): void
    /**
     * Set the legal disclaimer.
     * @param disclaimer Disclaimer string
     */
    setDisclaimer(disclaimer: string): void
    /**
     * Set the units used for the resolution (density) values.
     * @param unit Units as a #GeglResolutionUnit
     */
    setResolutionUnit(unit: ResolutionUnit): void
    /**
     * Set the X resolution or density in dots per unit.
     * @param resolutionX X resolution or density
     */
    setResolutionX(resolutionX: number): void
    /**
     * Set the Y resolution or density in dots per unit.
     * @param resolutionY Y resolution or density
     */
    setResolutionY(resolutionY: number): void
    /**
     * Set software used to create the image.
     * @param software Software string
     */
    setSoftware(software: string): void
    /**
     * Set device used to create the image.
     * @param source Source string
     */
    setSource(source: string): void
    /**
     * A slightly more efficient version of gegl_metadata_store_set_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_set_value().
     * @param name Metadata name
     * @param string String value to set
     */
    setString(name: string, string: string): void
    /**
     * Set time of original image creation.
     * @param timestamp A #GDateTime
     */
    setTimestamp(timestamp: GLib.DateTime): void
    /**
     * Set title or caption for image.
     * @param title Title string
     */
    setTitle(title: string): void
    /**
     * Set the specified metadata value. If `value` is %NULL the default value from
     * the associated #GParamSpec is used. This operation will fail if the value
     * has not been previously declared.  A `changed::name` signal is emitted when
     * the value is set. If the value is shadowed by a property a `notify::name`
     * signal is also emitted.
     * @param name Metadata name
     * @param value (nullable): A valid #GValue or %NULL
     */
    setValue(name: string, value: any): void
    /**
     * Set the warning of nature of content.
     * @param warning Warning string
     */
    setWarning(warning: string): void
    /**
     * Get the declared type of the value in the #GeglMetadataStore.
     * @param name Metadata name
     */
    typeofValue(name: string): GObject.Type
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
    /* Methods of Gegl-0.4.Gegl.Metadata */
    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     */
    iterGetValue(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @param iter #GeglMetadataIter to be initialised
     */
    iterInit(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     */
    iterLookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @param iter #GeglMetadataIter to be updated
     */
    iterNext(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     */
    iterSetValue(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @param fileModule String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     */
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Unregister the file module mappings and any further mappings added or
     * modified by the application.  This should be called after the file module
     * completes operations.
     */
    unregisterMap(): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    /**
     * `::changed` is emitted when a metadata value is changed. This is analogous
     * to the `GObject::notify` signal.
     * @param pspec A #GParamSpec declaring the metadata value
     */
    connect(sigName: "changed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    /**
     * If a signal handler is connected to `::generate-value` a signal is emitted
     * when the file module accesses a value using gegl_metadata_get_value().
     * The signal handler must generate a value of the type specified in the pspec
     * argument. The signal handler's return value indicates the success of the
     * operation.
     * 
     * If no handler is connected the mapped metadata value is accessed normally,
     * @param pspec A #GParamSpec declaring the metadata value
     * @param value An initialised #GValue.
     */
    connect(sigName: "generate-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    /**
     * `::mapped` is emitted after a file module registers a mapping and before
     * other processing takes place.  An application may respond to the signal by
     * registering additional mappings or overriding existing values, for example
     * it might override the TIFF ImageDescription tag to format multiple metadata
     * values into the description.
     * @param fileModule The file module name
     * @param excludeUnmapped %TRUE if the file module cannot handle unmapped values
     */
    connect(sigName: "mapped", callback: ((fileModule: string, excludeUnmapped: boolean) => void)): number
    on(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mapped", fileModule: string, excludeUnmapped: boolean): void
    /**
     * If a signal handler is connected to `::parse-value` a signal is emitted when
     * the file module accesses a value using gegl_metadata_set_value().  The
     * signal handler should parse the value supplied in the #GValue and may set
     * any number of metadata values using gegl_metadata_store_set_value().
     * 
     * If no handler is connected the mapped metadata value is set normally,
     * @param pspec A #GParamSpec declaring the metadata value
     * @param value A #GValue containing the value to parse.
     */
    connect(sigName: "parse-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    /**
     * `::unmapped` is emitted when a file module tries to look up an unmapped
     * metadata name. When the handler returns a second attempt is made to look
     * up the metadata.
     * @param fileModule The file module name
     * @param localName The unmapped metadata name as used by the file module
     */
    connect(sigName: "unmapped", callback: ((fileModule: string, localName: string) => void)): number
    on(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmapped", callback: (fileModule: string, localName: string) => void): NodeJS.EventEmitter
    emit(sigName: "unmapped", fileModule: string, localName: string): void
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
    connect(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetadataHash_ConstructProps)
    _init (config?: MetadataHash_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MetadataHash
    static $gtype: GObject.Type
}
interface MetadataStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.MetadataStore */
    /**
     * Name of image creator.
     */
    artist?: string
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment?: string
    /**
     * Copyright notice.
     */
    copyright?: string
    /**
     * Description of image (possibly long).
     */
    description?: string
    /**
     * Legal disclaimer.
     */
    disclaimer?: string
    /**
     * A #GeglResolutionUnit specifying units for the image resolution (density).
     */
    resolutionUnit?: ResolutionUnit
    /**
     * X resolution or density in dots per unit.
     */
    resolutionX?: number
    /**
     * Y resolution or density in dots per unit.
     */
    resolutionY?: number
    /**
     * Software used to create the image.
     */
    software?: string
    /**
     * Device used to create the image.
     */
    source?: string
    /**
     * Time of original image creation.
     */
    timestamp?: GLib.DateTime
    /**
     * Short (one line) title or caption for image.
     */
    title?: string
    /**
     * Warning of nature of content.
     */
    warning?: string
}
class MetadataStore {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    /**
     * Name of image creator.
     */
    artist: string
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment: string
    /**
     * Copyright notice.
     */
    copyright: string
    /**
     * Description of image (possibly long).
     */
    description: string
    /**
     * Legal disclaimer.
     */
    disclaimer: string
    /**
     * Current file loader/saver module name. Valid only while a #GeglMetadata
     * mapping is registered. This property is mainly provided for use in signal
     * handlers.
     */
    readonly fileModuleName: string
    /**
     * A #GeglResolutionUnit specifying units for the image resolution (density).
     */
    resolutionUnit: ResolutionUnit
    /**
     * X resolution or density in dots per unit.
     */
    resolutionX: number
    /**
     * Y resolution or density in dots per unit.
     */
    resolutionY: number
    /**
     * Software used to create the image.
     */
    software: string
    /**
     * Device used to create the image.
     */
    source: string
    /**
     * Time of original image creation.
     */
    timestamp: GLib.DateTime
    /**
     * Short (one line) title or caption for image.
     */
    title: string
    /**
     * Warning of nature of content.
     */
    warning: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    /**
     * Declare a metadata value using a #GParamSpec.
     * @param pspec A #GParamSpec
     */
    declare(pspec: GObject.ParamSpec): void
    /**
     * Get name of image creator.
     */
    getArtist(): string
    /**
     * Get the comment.
     */
    getComment(): string
    /**
     * Get the copyright notice.
     */
    getCopyright(): string
    /**
     * Get description of image.
     */
    getDescription(): string
    /**
     * Get the legal disclaimer.
     */
    getDisclaimer(): string
    /**
     * Return the name registered by the current file module.
     */
    getFileModuleName(): string
    /**
     * Get the units used for resolution.
     */
    getResolutionUnit(): ResolutionUnit
    /**
     * Get the X resolution or density in dots per unit.
     */
    getResolutionX(): number
    /**
     * Get the Y resolution or density in dots per unit.
     */
    getResolutionY(): number
    /**
     * Get software used to create the image.
     */
    getSoftware(): string
    /**
     * Get device used to create the image.
     */
    getSource(): string
    /**
     * A slightly more efficient version of gegl_metadata_store_get_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_get_value().
     * @param name Metadata name
     */
    getString(name: string): string
    /**
     * Get time of original image creation.
     */
    getTimestamp(): GLib.DateTime
    /**
     * Get title or caption for image.
     */
    getTitle(): string
    /**
     * Retrieve the metadata value. `value` must be initialised with a compatible
     * type. If the value is unset or has not been previously declared `value` is
     * unchanged and an error message is logged.
     * @param name Metadata name
     * @param value An initialised #GValue.
     */
    getValue(name: string, value: any): /* value */ any
    /**
     * Get warning.
     */
    getWarning(): string
    /**
     * Test whether the #GeglMetadataStore contains a value for the specified name.
     * @param name Metadata name
     */
    hasValue(name: string): boolean
    /**
     * gegl_metadata_store_notify() is called by subclasses when the value of a
     * metadata variable changes. It emits the `::changed` signal with the variable
     * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
     * by a property so that a notify signal is emitted with the property name as
     * the detail parameter.
     * @param pspec The #GParamSpec used to declare the variable.
     * @param shadow The metadata variable shadows a property.
     */
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(localName: string, name: string, transform: GObject.ValueTransform): void
    /**
     * Set name of image creator.
     * @param artist Artist string
     */
    setArtist(artist: string): void
    /**
     * Set the miscellaneous comment; conversion from GIF comment.
     * @param comment Comment string
     */
    setComment(comment: string): void
    /**
     * Set the copyright notice.
     * @param copyright Copyright string
     */
    setCopyright(copyright: string): void
    /**
     * Set description of image.
     * @param description Description string
     */
    setDescription(description: string): void
    /**
     * Set the legal disclaimer.
     * @param disclaimer Disclaimer string
     */
    setDisclaimer(disclaimer: string): void
    /**
     * Set the units used for the resolution (density) values.
     * @param unit Units as a #GeglResolutionUnit
     */
    setResolutionUnit(unit: ResolutionUnit): void
    /**
     * Set the X resolution or density in dots per unit.
     * @param resolutionX X resolution or density
     */
    setResolutionX(resolutionX: number): void
    /**
     * Set the Y resolution or density in dots per unit.
     * @param resolutionY Y resolution or density
     */
    setResolutionY(resolutionY: number): void
    /**
     * Set software used to create the image.
     * @param software Software string
     */
    setSoftware(software: string): void
    /**
     * Set device used to create the image.
     * @param source Source string
     */
    setSource(source: string): void
    /**
     * A slightly more efficient version of gegl_metadata_store_set_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_set_value().
     * @param name Metadata name
     * @param string String value to set
     */
    setString(name: string, string: string): void
    /**
     * Set time of original image creation.
     * @param timestamp A #GDateTime
     */
    setTimestamp(timestamp: GLib.DateTime): void
    /**
     * Set title or caption for image.
     * @param title Title string
     */
    setTitle(title: string): void
    /**
     * Set the specified metadata value. If `value` is %NULL the default value from
     * the associated #GParamSpec is used. This operation will fail if the value
     * has not been previously declared.  A `changed::name` signal is emitted when
     * the value is set. If the value is shadowed by a property a `notify::name`
     * signal is also emitted.
     * @param name Metadata name
     * @param value (nullable): A valid #GValue or %NULL
     */
    setValue(name: string, value: any): void
    /**
     * Set the warning of nature of content.
     * @param warning Warning string
     */
    setWarning(warning: string): void
    /**
     * Get the declared type of the value in the #GeglMetadataStore.
     * @param name Metadata name
     */
    typeofValue(name: string): GObject.Type
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
    /* Methods of Gegl-0.4.Gegl.Metadata */
    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     */
    iterGetValue(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @param iter #GeglMetadataIter to be initialised
     */
    iterInit(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     */
    iterLookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @param iter #GeglMetadataIter to be updated
     */
    iterNext(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     */
    iterSetValue(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @param fileModule String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     */
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Unregister the file module mappings and any further mappings added or
     * modified by the application.  This should be called after the file module
     * completes operations.
     */
    unregisterMap(): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    /**
     * `::changed` is emitted when a metadata value is changed. This is analogous
     * to the `GObject::notify` signal.
     * @param pspec A #GParamSpec declaring the metadata value
     */
    connect(sigName: "changed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    /**
     * If a signal handler is connected to `::generate-value` a signal is emitted
     * when the file module accesses a value using gegl_metadata_get_value().
     * The signal handler must generate a value of the type specified in the pspec
     * argument. The signal handler's return value indicates the success of the
     * operation.
     * 
     * If no handler is connected the mapped metadata value is accessed normally,
     * @param pspec A #GParamSpec declaring the metadata value
     * @param value An initialised #GValue.
     */
    connect(sigName: "generate-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    /**
     * `::mapped` is emitted after a file module registers a mapping and before
     * other processing takes place.  An application may respond to the signal by
     * registering additional mappings or overriding existing values, for example
     * it might override the TIFF ImageDescription tag to format multiple metadata
     * values into the description.
     * @param fileModule The file module name
     * @param excludeUnmapped %TRUE if the file module cannot handle unmapped values
     */
    connect(sigName: "mapped", callback: ((fileModule: string, excludeUnmapped: boolean) => void)): number
    on(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mapped", fileModule: string, excludeUnmapped: boolean): void
    /**
     * If a signal handler is connected to `::parse-value` a signal is emitted when
     * the file module accesses a value using gegl_metadata_set_value().  The
     * signal handler should parse the value supplied in the #GValue and may set
     * any number of metadata values using gegl_metadata_store_set_value().
     * 
     * If no handler is connected the mapped metadata value is set normally,
     * @param pspec A #GParamSpec declaring the metadata value
     * @param value A #GValue containing the value to parse.
     */
    connect(sigName: "parse-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    /**
     * `::unmapped` is emitted when a file module tries to look up an unmapped
     * metadata name. When the handler returns a second attempt is made to look
     * up the metadata.
     * @param fileModule The file module name
     * @param localName The unmapped metadata name as used by the file module
     */
    connect(sigName: "unmapped", callback: ((fileModule: string, localName: string) => void)): number
    on(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmapped", callback: (fileModule: string, localName: string) => void): NodeJS.EventEmitter
    emit(sigName: "unmapped", fileModule: string, localName: string): void
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
    connect(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetadataStore_ConstructProps)
    _init (config?: MetadataStore_ConstructProps): void
    static $gtype: GObject.Type
}
interface Node_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Node */
    cachePolicy?: CachePolicy
    dontCache?: boolean
    geglOperation?: Operation
    name?: string
    operation?: string
    passthrough?: boolean
    useOpencl?: boolean
}
class Node {
    /* Properties of Gegl-0.4.Gegl.Node */
    cachePolicy: CachePolicy
    dontCache: boolean
    geglOperation: Operation
    name: string
    operation: string
    passthrough: boolean
    useOpencl: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Node */
    /**
     * Make the GeglNode `graph,` take a reference on child. This reference
     * will be dropped when the reference count on the graph reaches zero.
     * @param child a GeglNode.
     */
    addChild(child: Node): Node
    /**
     * Render a rectangular region from a node to the given buffer.
     * @param buffer the #GeglBuffer to render to.
     * @param roi the rectangle to render.
     * @param level mipmap level to render (0 for all)
     * @param abyssPolicy 
     */
    blitBuffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyssPolicy: AbyssPolicy): void
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param inputPadName the name of the input pad we are connecting to
     * @param source the node producing data we want to connect.
     * @param outputPadName the output pad we want to use on the source.
     */
    connectFrom(inputPadName: string, source: Node, outputPadName: string): boolean
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param outputPadName the output pad we want to use on the source.
     * @param sink the node we're connecting an input to
     * @param inputPadName the name of the input pad we are connecting to
     */
    connectTo(outputPadName: string, sink: Node, inputPadName: string): boolean
    /**
     * Creates a new processing node that performs the specified operation.
     * All properties of the operation will have their default values. This
     * is included as an addition to #gegl_node_new_child in the public API to have
     * a non varargs entry point for bindings as well as sometimes simpler more
     * readable code.
     * @param operation the type of node to create.
     */
    createChild(operation: string): Node
    /**
     * Performs hit detection by returning the node providing data at a given
     * coordinate pair. Currently operates only on bounding boxes and not
     * pixel data.
     * @param x x coordinate
     * @param y y coordinate
     */
    detect(x: number, y: number): Node
    /**
     * Disconnects node connected to `input_pad` of `node` (if any).
     * 
     * Returns TRUE if a connection was broken.
     * @param inputPad the input pad to disconnect.
     */
    disconnect(inputPad: string): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getChildren(): Node[]
    /**
     * Retrieve which pads on which nodes are connected to a named output_pad,
     * and the number of connections. Both the location for the generated
     * nodes array and pads array can be left as NULL. If they are non NULL
     * both should be freed with g_free. The arrays are NULL terminated.
     * 
     * Returns the number of consumers connected to this output_pad.
     * @param outputPad the output pad we want to know who uses.
     */
    getConsumers(outputPad: string): [ /* returnType */ number, /* nodes */ Node[] | null, /* pads */ string[] | null ]
    getGeglOperation(): Operation | null
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     */
    getInputProxy(padName: string): Node
    getOperation(): string
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     */
    getOutputProxy(padName: string): Node
    /**
     * Returns a GeglNode that keeps a reference on a child.
     */
    getParent(): Node
    getPassthrough(): boolean
    getProducer(inputPadName: string, outputPadName?: string | null): Node
    /**
     * Returns TRUE if the node has a pad with the specified name
     * @param padName the pad name we are looking for
     */
    hasPad(padName: string): boolean
    /**
     * Returns the position and dimensions of a rectangle spanning the area
     * defined by a node.
     */
    getBoundingBox(): Rectangle
    getProperty(propertyName: string): any
    isGraph(): boolean
    /**
     * Synthetic sugar for linking the "output" pad of `source` to the "input"
     * pad of `sink`.
     * @param sink the consumer of data.
     */
    link(sink: Node): void
    /**
     * If the node has any input pads this function returns a null terminated
     * array of pad names, otherwise it returns NULL. The return value can be
     * freed with g_strfreev().
     */
    listInputPads(): string[]
    /**
     * If the node has any output pads this function returns a null terminated
     * array of pad names, otherwise it returns NULL. The return value can be
     * freed with g_strfreev().
     */
    listOutputPads(): string[]
    newProcessor(rectangle: Rectangle): Processor
    /**
     * Render a composition. This can be used for instance on a node with a "png-save"
     * operation to render all necessary data, and make it be written to file. This
     * function wraps the usage of a GeglProcessor in a single blocking function
     * call. If you need a non-blocking operation, then make a direct use of
     * #gegl_processor_work. See #GeglProcessor.
     * 
     * ---
     * GeglNode      *gegl;
     * GeglRectangle  roi;
     * GeglNode      *png_save;
     * unsigned char *buffer;
     * 
     * gegl = gegl_parse_xml (xml_data);
     * roi      = gegl_node_get_bounding_box (gegl);
     * # create png_save from the graph, the parent/child relationship
     * # only mean anything when it comes to memory management.
     * png_save = gegl_node_new_child (gegl,
     *                                 "operation", "gegl:png-save",
     *                                 "path",      "output.png",
     *                                 NULL);
     * 
     * gegl_node_link (gegl, png_save);
     * gegl_node_process (png_save);
     * 
     * buffer = malloc (roi.w*roi.h*4);
     * gegl_node_blit (gegl,
     *                 1.0,
     *                 &roi,
     *                 babl_format("R'G'B'A u8"),
     *                 buffer,
     *                 GEGL_AUTO_ROWSTRIDE,
     *                 GEGL_BLIT_DEFAULT);
     */
    process(): void
    progress(progress: number, message: string): void
    /**
     * Removes a child from a GeglNode. The reference previously held will be
     * dropped so increase the reference count before removing when reparenting
     * a child between two graphs.
     * @param child a GeglNode.
     */
    removeChild(child: Node): Node
    setPassthrough(passthrough: boolean): void
    /**
     * This is mainly included for language bindings. Using #gegl_node_set is
     * more convenient when programming in C.
     * @param propertyName the name of the property to set
     * @param value a GValue containing the value to be set in the property.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Sets the right value in animated properties of this node and all its
     * dependendcies to be the specified time position.
     * @param time the time to set the properties which have keyfraes attached to
     */
    setTime(time: number): void
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of the composition produced by a node (and thus also
     * the nodes contributing data to the specified node). To export a
     * gegl graph, connect the internal output node to an output proxy (see
     * #gegl_node_get_output_proxy.) and use the proxy node as the basis
     * for the serialization.
     * @param pathRoot filesystem path to construct relative paths from.
     */
    toXml(pathRoot: string): string
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of a segment of a graph from `head` to `tail` nodes.
     * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
     * @param tail a #GeglNode
     * @param pathRoot filesystem path to construct relative paths from.
     */
    toXmlFull(tail: Node | null, pathRoot: string): string
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
    /* Signals of Gegl-0.4.Gegl.Node */
    connect(sigName: "computed", callback: ((object: Rectangle) => void)): number
    on(sigName: "computed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "computed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "computed", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "computed", object: Rectangle): void
    connect(sigName: "invalidated", callback: ((object: Rectangle) => void)): number
    on(sigName: "invalidated", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidated", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidated", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "invalidated", object: Rectangle): void
    connect(sigName: "progress", callback: ((object: number) => void)): number
    on(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number): void
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
    connect(sigName: "notify::cache-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dont-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dont-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gegl-operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gegl-operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static newFromFile(path: string): Node
    static newFromSerialized(chaindata: string, pathRoot: string): Node
    static newFromXml(xmldata: string, pathRoot: string): Node
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}
class Operation {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static findProperty(operationType: string, propertyName: string): GObject.ParamSpec
    static getKey(operationType: string, keyName: string): string
    static getOpVersion(opName: string): string
    static getPropertyKey(operationType: string, propertyName: string, propertyKeyName: string): string
    static listKeys(operationType: string): string[]
    static listProperties(operationType: string): GObject.ParamSpec[]
    static listPropertyKeys(operationType: string, propertyName: string): string[]
    static $gtype: GObject.Type
}
class ParamAudioFragment {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamColor {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamCurve {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamDouble {
    /* Fields of GObject-2.0.GObject.ParamSpecDouble */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * minimum value for the property specified
     */
    minimum: number
    /**
     * maximum value for the property specified
     */
    maximum: number
    /**
     * default value for the property specified
     */
    defaultValue: number
    /**
     * values closer than `epsilon` will be considered identical
     *  by g_param_values_cmp(); the default value is 1e-90.
     */
    epsilon: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamEnum {
    /* Fields of GObject-2.0.GObject.ParamSpecEnum */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * the #GEnumClass for the enum
     */
    enumClass: GObject.EnumClass
    /**
     * default value for the property specified
     */
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamFilePath {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * default value for the property specified
     */
    defaultValue: string
    /**
     * a string containing the allowed values for the first byte
     */
    csetFirst: string
    /**
     * a string containing the allowed values for the subsequent bytes
     */
    csetNth: string
    /**
     * the replacement byte for bytes which don't match `cset_first` or `cset_nth`.
     */
    substitutor: number
    /**
     * replace empty string by %NULL
     */
    nullFoldIfEmpty: number
    /**
     * replace %NULL strings by an empty string
     */
    ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamFormat {
    /* Fields of GObject-2.0.GObject.ParamSpecPointer */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamInt {
    /* Fields of GObject-2.0.GObject.ParamSpecInt */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * minimum value for the property specified
     */
    minimum: number
    /**
     * maximum value for the property specified
     */
    maximum: number
    /**
     * default value for the property specified
     */
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamPath {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSeed {
    /* Fields of GObject-2.0.GObject.ParamSpecUInt */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * minimum value for the property specified
     */
    minimum: number
    /**
     * maximum value for the property specified
     */
    maximum: number
    /**
     * default value for the property specified
     */
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamString {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * default value for the property specified
     */
    defaultValue: string
    /**
     * a string containing the allowed values for the first byte
     */
    csetFirst: string
    /**
     * a string containing the allowed values for the subsequent bytes
     */
    csetNth: string
    /**
     * the replacement byte for bytes which don't match `cset_first` or `cset_nth`.
     */
    substitutor: number
    /**
     * replace empty string by %NULL
     */
    nullFoldIfEmpty: number
    /**
     * replace %NULL strings by an empty string
     */
    ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamUri {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    /**
     * private #GParamSpec portion
     */
    parentInstance: GObject.ParamSpec
    /**
     * default value for the property specified
     */
    defaultValue: string
    /**
     * a string containing the allowed values for the first byte
     */
    csetFirst: string
    /**
     * a string containing the allowed values for the subsequent bytes
     */
    csetNth: string
    /**
     * the replacement byte for bytes which don't match `cset_first` or `cset_nth`.
     */
    substitutor: number
    /**
     * replace empty string by %NULL
     */
    nullFoldIfEmpty: number
    /**
     * replace %NULL strings by an empty string
     */
    ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    gTypeInstance: GObject.TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: GObject.ParamFlags
    /**
     * the #GValue type for this parameter
     */
    valueType: GObject.Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): GObject.ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
class Path {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Path */
    /**
     * Compute the coordinates of the path at the `position` (length measured from
     * start of path, not including discontinuities).
     * @param pos how far along the path.
     */
    calc(pos: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Compute a corresponding y coordinate for a given x input coordinate,
     * returns 0 if computed correctly and -1 if the path doesn't exist for the
     * specified x coordinate.
     * @param x x coordinate to compute for
     */
    calcYForX(x: number): [ /* returnType */ number, /* y */ number ]
    /**
     * Remove all nods from a `path`.
     */
    clear(): void
    /**
     * Figure out what and where on a path is closest to arbitrary coordinates.
     * 
     * Returns the length along the path where the closest point was encountered.
     * @param x x coordinate.
     * @param y y coordinate
     */
    closestPoint(x: number, y: number): [ /* returnType */ number, /* onPathX */ number, /* onPathY */ number, /* nodePosBefore */ number ]
    /**
     * Marks the path as dirty and issues an invalidation for the path rendering,
     * use this if modifying the values of a GeglPathPoint inline.
     */
    dirty(): void
    /**
     * Execute a provided function for every node in the path (useful for
     * drawing and otherwise traversing a path.)
     * @param eachItem a function to call for each node in the path.
     */
    foreach(eachItem: NodeFunction): void
    /**
     * Execute a provided function for the segments of a poly line approximating
     * the path.
     * @param eachItem a function to call for each node in the path.
     */
    foreachFlat(eachItem: NodeFunction): void
    /**
     * Make the `GeglPath` stop firing signals as it changes must be paired with a
     * gegl_path_thaw() for the signals to start again.
     */
    freeze(): void
    /**
     * Compute the bounding box of a path.
     */
    getBounds(): [ /* minX */ number, /* maxX */ number, /* minY */ number, /* maxY */ number ]
    /**
     * Returns the total length of the path.
     */
    getLength(): number
    /**
     * Get the transformation matrix of the path.
     */
    getMatrix(): /* matrix */ Matrix3
    /**
     * Retrieves the number of nodes in the path.
     */
    getNNodes(): number
    /**
     * Retrieve the node of the path at position `pos`.
     * 
     * Returns TRUE if the node was successfully retrieved.
     * @param index the node number to retrieve
     */
    getNode(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    /**
     * Insert the new node `node` at position `pos` in `path`.
     * if `pos` = -1, the node is added in the last position.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store
     */
    insertNode(pos: number, node: PathItem): void
    /**
     * Check if the path contains any nodes.
     * 
     * Returns TRUE if the path has no nodes.
     */
    isEmpty(): boolean
    /**
     * Parses `instructions` and appends corresponding nodes to path (call
     * gegl_path_clean() first if you want to replace the existing path.
     * @param instructions a string describing a path.
     */
    parseString(instructions: string): void
    /**
     * Removes the node number `pos` in `path`.
     * @param pos a node in the path.
     */
    removeNode(pos: number): void
    /**
     * Replaces the exiting node at position `pos` in `path`.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store.
     */
    replaceNode(pos: number, node: PathItem): void
    /**
     * Set the transformation matrix of the path.
     * 
     * The path is transformed through this matrix when being evaluated,
     * causing the calculated positions and length to be changed by the transform.
     * @param matrix a #GeglMatrix3 to copy the matrix from
     */
    setMatrix(matrix: Matrix3): void
    /**
     * Restart firing signals (unless the path has been frozen multiple times).
     */
    thaw(): void
    /**
     * Serialize the paths nodes to a string.
     */
    toString(): string
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
    /* Signals of Gegl-0.4.Gegl.Path */
    connect(sigName: "changed", callback: ((object?: object | null) => void)): number
    on(sigName: "changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "changed", object?: object | null): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static newFromString(instructions: string): Path
    /**
     * Adds a new type to the path system, FIXME this should probably
     * return something on registration conflicts, for now it expects
     * all registered paths to be aware of each other.
     * @param type a gchar to recognize in path descriptions.
     * @param items the number of floating point data items the instruction takes
     * @param description a human readable description of this entry
     */
    static addType(type: number, items: number, description: string): void
    static $gtype: GObject.Type
}
interface Processor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Processor */
    chunksize?: number
    node?: Node
    progress?: number
    rectangle?: object
}
class Processor {
    /* Properties of Gegl-0.4.Gegl.Processor */
    readonly chunksize: number
    node: Node
    progress: number
    rectangle: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Processor */
    /**
     * Returns the (cache) buffer the processor is rendering into, another way of
     * getting to the same pixel data is calling gegl_node_blit with flags
     * indicating that we want caching and accept dirty data.
     */
    getBuffer(): Buffer
    setLevel(level: number): void
    /**
     * Change the rectangle a #GeglProcessor is working on.
     * @param rectangle the new #GeglRectangle the processor shold work on or NULL to make it work on all data in the buffer.
     */
    setRectangle(rectangle: Rectangle): void
    setScale(scale: number): void
    /**
     * Do an iteration of work for the processor.
     * 
     * Returns TRUE if there is more work to be done.
     * 
     * ---
     * GeglProcessor *processor = gegl_node_new_processor (node, &roi);
     * double         progress;
     * 
     * while (gegl_processor_work (processor, &progress))
     *   g_warning ("%f%% complete", progress);
     * g_object_unref (processor);
     */
    work(): [ /* returnType */ boolean, /* progress */ number ]
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
    connect(sigName: "notify::chunksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Processor_ConstructProps)
    _init (config?: Processor_ConstructProps): void
    static $gtype: GObject.Type
}
interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}
class Stats {
    /* Properties of Gegl-0.4.Gegl.Stats */
    readonly activeThreads: number
    readonly assignedThreads: number
    readonly scratchTotal: number
    readonly swapBusy: boolean
    readonly swapFileSize: number
    readonly swapQueueFull: boolean
    readonly swapQueueStalls: number
    readonly swapQueuedTotal: number
    readonly swapReadTotal: number
    readonly swapReading: boolean
    readonly swapTotal: number
    readonly swapTotalUncompressed: number
    readonly swapWriteTotal: number
    readonly swapWriting: boolean
    readonly tileAllocTotal: number
    readonly tileCacheHits: number
    readonly tileCacheMisses: number
    readonly tileCacheTotal: number
    readonly tileCacheTotalMax: number
    readonly tileCacheTotalUncompressed: number
    readonly zoomTotal: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::active-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assigned-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assigned-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scratch-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scratch-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queue-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queue-stalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-stalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queued-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queued-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-read-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-read-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-reading", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-reading", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-write-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-write-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-writing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-writing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-alloc-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-alloc-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-hits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-hits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-misses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-misses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stats_ConstructProps)
    _init (config?: Stats_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileBackend_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileBackend */
    flushOnDestroy?: boolean
    format?: object
    tileHeight?: number
    tileWidth?: number
}
class TileBackend {
    /* Properties of Gegl-0.4.Gegl.TileBackend */
    flushOnDestroy: boolean
    readonly format: object
    readonly pxSize: number
    readonly tileHeight: number
    readonly tileSize: number
    readonly tileWidth: number
    /* Fields of Gegl-0.4.Gegl.TileSource */
    parentInstance: GObject.Object
    padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileBackend */
    /**
     * The default tile-backend command handler.  Tile backends should forward
     * commands they don't handle themselves to this function.
     * @param command the tile command
     * @param x x coordinate
     * @param y y coordinate
     * @param z tile zoom level
     * @param data user data
     */
    command(command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
    getFlushOnDestroy(): boolean
    getTileHeight(): number
    getTileSize(): number
    getTileWidth(): number
    /**
     * Gets a pointer to the GeglTileStorage that uses the backend
     */
    peekStorage(): TileSource
    /**
     * Specify the extent of the backend, can be used to pre-prime the
     * backend with the width/height information when constructing proxy
     * GeglBuffers to interact with other systems
     * @param rectangle the new extent
     */
    setExtent(rectangle: Rectangle): void
    /**
     * Control whether cached data will be written to the backend before it
     * is destroyed. If false unwritten data will be discarded.
     * @param flushOnDestroy true if the backend needs to be flushed
     */
    setFlushOnDestroy(flushOnDestroy: boolean): void
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
    connect(sigName: "notify::flush-on-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-on-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileBackend_ConstructProps)
    _init (config?: TileBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Delete a swap file from disk. This must be used by tile backends which may
     * swap to disk under certain circonstances.
     * 
     * For safety, this function will check that the swap file is in the swap
     * directory before deletion but it won't perform any other check.
     * @param path the path where the gegl tile backend has swapped.
     */
    static unlinkSwap(path: string): void
    static $gtype: GObject.Type
}
interface TileHandler_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileHandler */
    source?: GObject.Object
}
class TileHandler {
    /* Properties of Gegl-0.4.Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl-0.4.Gegl.TileSource */
    parentInstance: GObject.Object
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void
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
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileHandler_ConstructProps)
    _init (config?: TileHandler_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}
class TileSource {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileSource_ConstructProps)
    _init (config?: TileSource_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioFragmentClass {
    /* Fields of Gegl-0.4.Gegl.AudioFragmentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class AudioFragmentPrivate {
    static name: string
}
class BufferIterator {
    /* Fields of Gegl-0.4.Gegl.BufferIterator */
    length: number
    priv: BufferIteratorPriv
    items: BufferIteratorItem[]
    static name: string
}
class BufferIteratorItem {
    /* Fields of Gegl-0.4.Gegl.BufferIteratorItem */
    data: object
    roi: Rectangle
    static name: string
}
class BufferIteratorPriv {
    static name: string
}
class BufferMatrix2 {
    /* Fields of Gegl-0.4.Gegl.BufferMatrix2 */
    coeff: number[]
    /* Methods of Gegl-0.4.Gegl.BufferMatrix2 */
    determinant(): number
    isIdentity(): boolean
    isScale(): boolean
    static name: string
}
abstract class ColorClass {
    /* Fields of Gegl-0.4.Gegl.ColorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ColorPrivate {
    static name: string
}
abstract class CurveClass {
    /* Fields of Gegl-0.4.Gegl.CurveClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class Lookup {
    /* Fields of Gegl-0.4.Gegl.Lookup */
    function_: LookupFunction
    data: object
    shift: number
    positiveMin: number
    positiveMax: number
    negativeMin: number
    negativeMax: number
    bitmask: number[]
    table: number[]
    static name: string
}
class Matrix3 {
    /* Fields of Gegl-0.4.Gegl.Matrix3 */
    coeff: number[]
    /* Methods of Gegl-0.4.Gegl.Matrix3 */
    /**
     * Returns a copy of `src`.
     */
    copy(): Matrix3
    /**
     * Copies the matrix in `src` into `dst`.
     * @param src a #GeglMatrix3
     */
    copyInto(src: Matrix3): void
    /**
     * Returns the determinant for the matrix.
     */
    determinant(): number
    /**
     * Check if two matrices are equal.
     * 
     * Returns TRUE if the matrices are equal.
     * @param matrix2 a #GeglMatrix3
     */
    equal(matrix2: Matrix3): boolean
    /**
     * Set the provided `matrix` to the identity matrix.
     */
    identity(): void
    /**
     * Inverts `matrix`.
     */
    invert(): void
    /**
     * Check if a matrix only does an affine transformation.
     * 
     * Returns TRUE if the matrix only does an affine transformation.
     */
    isAffine(): boolean
    /**
     * Check if a matrix is the identity matrix.
     * 
     * Returns TRUE if the matrix is the identity matrix.
     */
    isIdentity(): boolean
    /**
     * Check if a matrix only does scaling.
     * 
     * Returns TRUE if the matrix only does scaling.
     */
    isScale(): boolean
    /**
     * Check if a matrix only does translation.
     * 
     * Returns TRUE if the matrix only does trasnlation.
     */
    isTranslate(): boolean
    /**
     * Multiples `product` = `left` · `right`
     * @param right a #GeglMatrix3
     * @param product a #GeglMatrix3 to store the result in.
     */
    multiply(right: Matrix3, product: Matrix3): void
    /**
     * Shift the origin of the transformation specified by `matrix`
     * to (`x,` `y)`. In other words, calculate the matrix that:
     * 
     * 1. Translates the input by (-`x,` -`y)`.
     * 
     * 2. Transforms the result using the original `matrix`.
     * 
     * 3. Translates the result by (`x,` `y)`.
     * @param x x coordinate of new origin
     * @param y y coordinate of new origin.
     */
    originate(x: number, y: number): void
    /**
     * Parse a transofmation matrix from a string.
     * @param string a string describing the matrix (right now a small subset of the transform strings allowed by SVG)
     */
    parseString(string: string): void
    /**
     * Rounds numerical errors in `matrix` to the nearest integer.
     */
    roundError(): void
    /**
     * Serialize a #GeglMatrix3 to a string.
     * 
     * Returns a freshly allocated string representing that #GeglMatrix3, the
     * returned string should be g_free()'d.
     */
    toString(): string
    /**
     * transforms the coordinates provided in `x` and `y` and changes to the
     * coordinates gotten when the transformed with the matrix.
     * @param x pointer to an x coordinate
     * @param y pointer to an y coordinate
     */
    transformPoint(x: number, y: number): void
    static name: string
    static new(): Matrix3
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Matrix3
}
abstract class MetadataHashClass {
    /* Fields of Gegl-0.4.Gegl.MetadataHashClass */
    parentClass: MetadataStoreClass
    static name: string
}
abstract class MetadataInterface {
    /* Fields of Gegl-0.4.Gegl.MetadataInterface */
    registerMap: (metadata: Metadata, fileModule: string, flags: number, map: MetadataMap[]) => void
    setResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    getResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    iterLookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    iterInit: (metadata: Metadata, iter: MetadataIter) => void
    iterNext: (metadata: Metadata, iter: MetadataIter) => string
    iterSetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    iterGetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    static name: string
}
class MetadataIter {
    static name: string
}
class MetadataMap {
    /* Fields of Gegl-0.4.Gegl.MetadataMap */
    /**
     * Name of metadata variable used in the file module.
     */
    localName: string
    /**
     * Standard metadata variable name used by Gegl.
     */
    name: string
    /**
     * Optional #GValue transform function.
     */
    transform: GObject.ValueTransform
    static name: string
}
abstract class MetadataStoreClass {
    /* Fields of Gegl-0.4.Gegl.MetadataStoreClass */
    setValue: (self: MetadataStore, name: string, value: any) => void
    hasValue: (self: MetadataStore, name: string) => boolean
    registerHook: (self: MetadataStore, fileModuleName: string, flags: number) => void
    static name: string
}
class OperationContext {
    static name: string
}
class ParamSpecDouble {
    /* Fields of Gegl-0.4.Gegl.ParamSpecDouble */
    parentInstance: GObject.ParamSpecDouble
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    uiDigits: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecDouble */
    setDigits(digits: number): void
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
class ParamSpecEnum {
    /* Fields of Gegl-0.4.Gegl.ParamSpecEnum */
    parentInstance: GObject.ParamSpecEnum
    excludedValues: object[]
    /* Methods of Gegl-0.4.Gegl.ParamSpecEnum */
    excludeValue(value: number): void
    static name: string
}
class ParamSpecFilePath {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFilePath */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
class ParamSpecFormat {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFormat */
    parentInstance: GObject.ParamSpecPointer
    static name: string
}
class ParamSpecInt {
    /* Fields of Gegl-0.4.Gegl.ParamSpecInt */
    parentInstance: GObject.ParamSpecInt
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecInt */
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
class ParamSpecSeed {
    /* Fields of Gegl-0.4.Gegl.ParamSpecSeed */
    parentInstance: GObject.ParamSpecUInt
    uiMinimum: number
    uiMaximum: number
    static name: string
}
class ParamSpecString {
    /* Fields of Gegl-0.4.Gegl.ParamSpecString */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
class ParamSpecUri {
    /* Fields of Gegl-0.4.Gegl.ParamSpecUri */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
abstract class PathClass {
    static name: string
}
class PathItem {
    /* Fields of Gegl-0.4.Gegl.PathItem */
    type: number
    point: PathPoint[]
    static name: string
}
class PathList {
    /* Fields of Gegl-0.4.Gegl.PathList */
    next: object
    d: PathItem
    static name: string
}
class PathPoint {
    /* Fields of Gegl-0.4.Gegl.PathPoint */
    x: number
    y: number
    static name: string
}
class Random {
    /* Methods of Gegl-0.4.Gegl.Random */
    /**
     * Return a new copy of an existing GeglRandom
     */
    duplicate(): Random
    /**
     * Return a random floating point number in range 0.0 .. 1.0.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     */
    float(x: number, y: number, z: number, n: number): number
    /**
     * Return a random floating point number in the range specified,
     * for the given x,y coordinates and GeglRandom provided, if multiple different
     * numbers are needed pass in incrementing n's.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     * @param min minimum value
     * @param max maximum value
     */
    floatRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    /**
     * Free a GeglRandom structure created with gegl_random_new() or
     * gegl_random_new_with_seed()
     */
    free(): void
    /**
     * Return a random integer number in range 0 .. MAX_UINT
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     */
    int(x: number, y: number, z: number, n: number): number
    /**
     * Return a random integer point number in the range specified,
     * for the given x,y coordinates and GeglRandom provided, if multiple different
     * numbers are needed pass in incrementing n's.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     * @param min minimum value
     * @param max maximum value+1
     */
    intRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    /**
     * Change the seed of an existing GeglRandom.
     * @param seed an integer seed, change for different permutation.
     */
    setSeed(seed: number): void
    static name: string
    static new(): Random
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Random
    static newWithSeed(seed: number): Random
}
class Rectangle {
    /* Fields of Gegl-0.4.Gegl.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Gegl-0.4.Gegl.Rectangle */
    /**
     * Aligns `rectangle` to a regular tile grid, of which `tile` is a representative
     * tile, and stores the result in `destination`.
     * 
     * `alignment` can be one of:
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_SUBSET:  Calculate the biggest aligned rectangle
     *   contained in `rectangle`.
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_SUPERSET:  Calculate the smallest aligned
     *   rectangle containing `rectangle`.
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_NEAREST:  Calculate the nearest aligned rectangle
     *   to `rectangle`.
     * 
     * `destination` may point to the same object as `rectangle` or `tile`.
     * 
     * Returns TRUE if the result is not empty.
     * @param rectangle a #GeglRectangle
     * @param tile a #GeglRectangle
     * @param alignment a #GeglRectangleAlignment value
     */
    align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment): boolean
    /**
     * Aligns `rectangle` to the tile grid of `buffer,` and stores the result in
     * `destination`.
     * 
     * `alignment` has the same meaning as for gegl_rectangle_align().
     * 
     * `destination` may point to the same object as `rectangle`.
     * 
     * Returns TRUE if the result is not empty.
     * @param rectangle a #GeglRectangle
     * @param buffer a #GeglBuffer
     * @param alignment a #GeglRectangleAlignment value
     */
    alignToBuffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean
    /**
     * Computes the bounding box of the rectangles `source1` and `source2` and stores the
     * resulting bounding box in `destination`.
     * 
     * `destination` may point to the same object as `source1` or `source2`.
     * @param source1 a #GeglRectangle
     * @param source2 a #GeglRectangle
     */
    boundingBox(source1: Rectangle, source2: Rectangle): void
    /**
     * Checks if the #GeglRectangle `child` is fully contained within `parent`.
     * 
     * Returns TRUE if the `child` is fully contained in `parent`.
     * @param child a #GeglRectangle
     */
    contains(child: Rectangle): boolean
    /**
     * Copies the rectangle information stored in `source` over the information in
     * `destination`.
     * 
     * `destination` may point to the same object as `source`.
     * @param source a #GeglRectangle
     */
    copy(source: Rectangle): void
    /**
     * For debugging purposes, not stable API.
     */
    dump(): void
    /**
     * Create a new copy of `rectangle`.
     */
    dup(): Rectangle
    /**
     * Check if two #GeglRectangles are equal.
     * 
     * Returns TRUE if `rectangle` and `rectangle2` are equal.
     * @param rectangle2 a #GeglRectangle
     */
    equal(rectangle2: Rectangle): boolean
    /**
     * Check if a rectangle is equal to a set of parameters.
     * 
     * Returns TRUE if `rectangle` and `x,``y` `width` x `height` are equal.
     * @param x X coordinate
     * @param y Y coordinate
     * @param width width of rectangle
     * @param height height of rectangle
     */
    equalCoords(x: number, y: number, width: number, height: number): boolean
    /**
     * Calculates the intersection of two rectangles. If the rectangles do not
     * intersect, dest's width and height are set to 0 and its x and y values
     * are undefined.
     * 
     * `dest` may point to the same object as `src1` or `src2`.
     * 
     * Returns TRUE if the rectangles intersect.
     * @param src1 a #GeglRectangle
     * @param src2 a #GeglRectangle
     */
    intersect(src1: Rectangle, src2: Rectangle): boolean
    /**
     * Check if a rectangle has zero area.
     * 
     * Returns TRUE if the width or height of `rectangle` is 0.
     */
    isEmpty(): boolean
    /**
     * Returns TRUE if the GeglRectangle represents an infininte plane,
     * FALSE otherwise.
     */
    isInfinitePlane(): boolean
    /**
     * Sets the `x,` `y,` `width` and `height` on `rectangle`.
     * @param x upper left x coordinate
     * @param y upper left y coordinate
     * @param width width in pixels.
     * @param height height in pixels.
     */
    set(x: number, y: number, width: number, height: number): void
    /**
     * Subtracts `subtrahend` from `minuend,` and stores the resulting rectangles in
     * `destination`.  Between 0 and 4 disjoint rectangles may be produced.
     * 
     * `destination` may contain `minuend` or `subtrahend`.
     * 
     * Returns the number of resulting rectangles.
     * @param minuend a #GeglRectangle
     * @param subtrahend a #GeglRectangle
     */
    subtract(minuend: Rectangle, subtrahend: Rectangle): number
    /**
     * Computes the bounding box of the area formed by subtracting `subtrahend`
     * from `minuend,` and stores the result in `destination`.
     * 
     * `destination` may point to the same object as `minuend` or `subtrahend`.
     * 
     * Returns TRUE if the result is not empty.
     * @param minuend a #GeglRectangle
     * @param subtrahend a #GeglRectangle
     */
    subtractBoundingBox(minuend: Rectangle, subtrahend: Rectangle): boolean
    /**
     * Computes the symmetric difference of the rectangles `source1` and `source2`,
     * and stores the resulting rectangles in `destination`.  Between 0 and 4
     * disjoint rectangles may be produced.
     * 
     * `destination` may contain `rectangle1` or `rectangle2`.
     * 
     * Returns the number of resulting rectangles.
     * @param source1 a #GeglRectangle
     * @param source2 a #GeglRectangle
     */
    xor(source1: Rectangle, source2: Rectangle): number
    static name: string
    static new(x: number, y: number, width: number, height: number): Rectangle
    constructor(x: number, y: number, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(x: number, y: number, width: number, height: number): Rectangle
    /**
     * Returns a GeglRectangle that represents an infininte plane.
     */
    static infinitePlane(): Rectangle
}
class Sampler {
    /* Methods of Gegl-0.4.Gegl.Sampler */
    /**
     * Perform a sampling with the provided `sampler`.
     * @param x x coordinate to sample
     * @param y y coordinate to sample
     * @param scale matrix representing extent of sampling area in source buffer.
     * @param output memory location for output data.
     * @param repeatMode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
    getContextRect(): Rectangle
    static name: string
}
class Tile {
    static name: string
}
abstract class TileBackendClass {
    /* Fields of Gegl-0.4.Gegl.TileBackendClass */
    parentClass: TileSourceClass
    padding: object[]
    static name: string
}
class TileBackendPrivate {
    static name: string
}
class TileCopyParams {
    /* Fields of Gegl-0.4.Gegl.TileCopyParams */
    dstBuffer: Buffer
    dstX: number
    dstY: number
    dstZ: number
    static name: string
}
abstract class TileHandlerClass {
    /* Fields of Gegl-0.4.Gegl.TileHandlerClass */
    parentClass: TileSourceClass
    static name: string
}
class TileHandlerPrivate {
    static name: string
}
abstract class TileSourceClass {
    /* Fields of Gegl-0.4.Gegl.TileSourceClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
}
export default Gegl;