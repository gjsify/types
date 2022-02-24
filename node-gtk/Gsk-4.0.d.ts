/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gsk-4.0
 */

import type Graphene from './Graphene-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Gsk {

/**
 * The blend modes available for render nodes.
 * 
 * The implementation of each blend mode is deferred to the
 * rendering pipeline.
 * 
 * See <https://www.w3.org/TR/compositing-1/#blending> for more information
 * on blending and blend modes.
 */
enum BlendMode {
    /**
     * The default blend mode, which specifies no blending
     */
    DEFAULT,
    /**
     * The source color is multiplied by the destination
     *   and replaces the destination
     */
    MULTIPLY,
    /**
     * Multiplies the complements of the destination and source
     *   color values, then complements the result.
     */
    SCREEN,
    /**
     * Multiplies or screens the colors, depending on the
     *   destination color value. This is the inverse of hard-list
     */
    OVERLAY,
    /**
     * Selects the darker of the destination and source colors
     */
    DARKEN,
    /**
     * Selects the lighter of the destination and source colors
     */
    LIGHTEN,
    /**
     * Brightens the destination color to reflect the source color
     */
    COLOR_DODGE,
    /**
     * Darkens the destination color to reflect the source color
     */
    COLOR_BURN,
    /**
     * Multiplies or screens the colors, depending on the source color value
     */
    HARD_LIGHT,
    /**
     * Darkens or lightens the colors, depending on the source color value
     */
    SOFT_LIGHT,
    /**
     * Subtracts the darker of the two constituent colors from the lighter color
     */
    DIFFERENCE,
    /**
     * Produces an effect similar to that of the difference mode but lower in contrast
     */
    EXCLUSION,
    /**
     * Creates a color with the hue and saturation of the source color and the luminosity of the destination color
     */
    COLOR,
    /**
     * Creates a color with the hue of the source color and the saturation and luminosity of the destination color
     */
    HUE,
    /**
     * Creates a color with the saturation of the source color and the hue and luminosity of the destination color
     */
    SATURATION,
    /**
     * Creates a color with the luminosity of the source color and the hue and saturation of the destination color
     */
    LUMINOSITY,
}
/**
 * The corner indices used by `GskRoundedRect`.
 */
enum Corner {
    /**
     * The top left corner
     */
    TOP_LEFT,
    /**
     * The top right corner
     */
    TOP_RIGHT,
    /**
     * The bottom right corner
     */
    BOTTOM_RIGHT,
    /**
     * The bottom left corner
     */
    BOTTOM_LEFT,
}
/**
 * This defines the types of the uniforms that `GskGLShaders`
 * declare.
 * 
 * It defines both what the type is called in the GLSL shader
 * code, and what the corresponding C type is on the Gtk side.
 */
enum GLUniformType {
    /**
     * No type, used for uninitialized or unspecified values.
     */
    NONE,
    /**
     * A float uniform
     */
    FLOAT,
    /**
     * A GLSL int / gint32 uniform
     */
    INT,
    /**
     * A GLSL uint / guint32 uniform
     */
    UINT,
    /**
     * A GLSL bool / gboolean uniform
     */
    BOOL,
    /**
     * A GLSL vec2 / graphene_vec2_t uniform
     */
    VEC2,
    /**
     * A GLSL vec3 / graphene_vec3_t uniform
     */
    VEC3,
    /**
     * A GLSL vec4 / graphene_vec4_t uniform
     */
    VEC4,
}
/**
 * The type of a node determines what the node is rendering.
 */
enum RenderNodeType {
    /**
     * Error type. No node will ever have this type.
     */
    NOT_A_RENDER_NODE,
    /**
     * A node containing a stack of children
     */
    CONTAINER_NODE,
    /**
     * A node drawing a `cairo_surface_t`
     */
    CAIRO_NODE,
    /**
     * A node drawing a single color rectangle
     */
    COLOR_NODE,
    /**
     * A node drawing a linear gradient
     */
    LINEAR_GRADIENT_NODE,
    /**
     * A node drawing a repeating linear gradient
     */
    REPEATING_LINEAR_GRADIENT_NODE,
    /**
     * A node drawing a radial gradient
     */
    RADIAL_GRADIENT_NODE,
    /**
     * A node drawing a repeating radial gradient
     */
    REPEATING_RADIAL_GRADIENT_NODE,
    /**
     * A node drawing a conic gradient
     */
    CONIC_GRADIENT_NODE,
    /**
     * A node stroking a border around an area
     */
    BORDER_NODE,
    /**
     * A node drawing a `GdkTexture`
     */
    TEXTURE_NODE,
    /**
     * A node drawing an inset shadow
     */
    INSET_SHADOW_NODE,
    /**
     * A node drawing an outset shadow
     */
    OUTSET_SHADOW_NODE,
    /**
     * A node that renders its child after applying a matrix transform
     */
    TRANSFORM_NODE,
    /**
     * A node that changes the opacity of its child
     */
    OPACITY_NODE,
    /**
     * A node that applies a color matrix to every pixel
     */
    COLOR_MATRIX_NODE,
    /**
     * A node that repeats the child's contents
     */
    REPEAT_NODE,
    /**
     * A node that clips its child to a rectangular area
     */
    CLIP_NODE,
    /**
     * A node that clips its child to a rounded rectangle
     */
    ROUNDED_CLIP_NODE,
    /**
     * A node that draws a shadow below its child
     */
    SHADOW_NODE,
    /**
     * A node that blends two children together
     */
    BLEND_NODE,
    /**
     * A node that cross-fades between two children
     */
    CROSS_FADE_NODE,
    /**
     * A node containing a glyph string
     */
    TEXT_NODE,
    /**
     * A node that applies a blur
     */
    BLUR_NODE,
    /**
     * Debug information that does not affect the rendering
     */
    DEBUG_NODE,
    /**
     * A node that uses OpenGL fragment shaders to render
     */
    GL_SHADER_NODE,
}
/**
 * The filters used when scaling texture data.
 * 
 * The actual implementation of each filter is deferred to the
 * rendering pipeline.
 */
enum ScalingFilter {
    /**
     * linear interpolation filter
     */
    LINEAR,
    /**
     * nearest neighbor interpolation filter
     */
    NEAREST,
    /**
     * linear interpolation along each axis,
     *   plus mipmap generation, with linear interpolation along the mipmap
     *   levels
     */
    TRILINEAR,
}
/**
 * Errors that can happen during (de)serialization.
 */
enum SerializationError {
    /**
     * The format can not be identified
     */
    UNSUPPORTED_FORMAT,
    /**
     * The version of the data is not
     *   understood
     */
    UNSUPPORTED_VERSION,
    /**
     * The given data may not exist in
     *   a proper serialization
     */
    INVALID_DATA,
}
/**
 * The categories of matrices relevant for GSK and GTK.
 * 
 * Note that any category includes matrices of all later categories.
 * So if you want to for example check if a matrix is a 2D matrix,
 * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
 * 
 * Also keep in mind that rounding errors may cause matrices to not
 * conform to their categories. Otherwise, matrix operations done via
 * multiplication will not worsen categories. So for the matrix
 * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
 */
enum TransformCategory {
    /**
     * The category of the matrix has not been
     *   determined.
     */
    UNKNOWN,
    /**
     * Analyzing the matrix concluded that it does
     *   not fit in any other category.
     */
    ANY,
    /**
     * The matrix is a 3D matrix. This means that
     *   the w column (the last column) has the values (0, 0, 0, 1).
     */
    TODO_3D,
    /**
     * The matrix is a 2D matrix. This is equivalent
     *   to graphene_matrix_is_2d() returning %TRUE. In particular, this
     *   means that Cairo can deal with the matrix.
     */
    TODO_2D,
    /**
     * The matrix is a combination of 2D scale
     *   and 2D translation operations. In particular, this means that any
     *   rectangle can be transformed exactly using this matrix.
     */
    TODO_2D_AFFINE,
    /**
     * The matrix is a 2D translation.
     */
    TODO_2D_TRANSLATE,
    /**
     * The matrix is the identity matrix.
     */
    IDENTITY,
}
function serializationErrorQuark(): GLib.Quark
function transformParse(string: string): [ /* returnType */ boolean, /* outTransform */ Transform ]
function valueDupRenderNode(value: any): RenderNode | null
function valueGetRenderNode(value: any): RenderNode | null
function valueSetRenderNode(value: any, node: RenderNode): void
function valueTakeRenderNode(value: any, node?: RenderNode | null): void
/**
 * Type of callback that is called when an error occurs
 * during node deserialization.
 */
interface ParseErrorFunc {
    (start: ParseLocation, end: ParseLocation, error: GLib.Error): void
}
class BlendNode {
    /* Methods of Gsk-4.0.Gsk.BlendNode */
    /**
     * Retrieves the blend mode used by `node`.
     */
    getBlendMode(): BlendMode
    /**
     * Retrieves the bottom `GskRenderNode` child of the `node`.
     */
    getBottomChild(): RenderNode
    /**
     * Retrieves the top `GskRenderNode` child of the `node`.
     */
    getTopChild(): RenderNode
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bottom: RenderNode, top: RenderNode, blendMode: BlendMode): BlendNode
    constructor(bottom: RenderNode, top: RenderNode, blendMode: BlendMode)
    /* Static methods and pseudo-constructors */
    static new(bottom: RenderNode, top: RenderNode, blendMode: BlendMode): BlendNode
}
class BlurNode {
    /* Methods of Gsk-4.0.Gsk.BlurNode */
    /**
     * Retrieves the child `GskRenderNode` of the blur `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the blur radius of the `node`.
     */
    getRadius(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, radius: number): BlurNode
    constructor(child: RenderNode, radius: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, radius: number): BlurNode
}
class BorderNode {
    /* Methods of Gsk-4.0.Gsk.BorderNode */
    /**
     * Retrieves the colors of the border.
     */
    getColors(): Gdk.RGBA
    /**
     * Retrieves the outline of the border.
     */
    getOutline(): RoundedRect
    /**
     * Retrieves the stroke widths of the border.
     */
    getWidths(): number[]
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[]): BorderNode
    constructor(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[])
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[]): BorderNode
}
interface BroadwayRenderer_ConstructProps extends Renderer_ConstructProps {
}
class BroadwayRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    isRealized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     */
    realize(surface?: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     */
    render(root: RenderNode, region?: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     */
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BroadwayRenderer_ConstructProps)
    _init (config?: BroadwayRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BroadwayRenderer
    static $gtype: GObject.Type
}
class CairoNode {
    /* Methods of Gsk-4.0.Gsk.CairoNode */
    /**
     * Creates a Cairo context for drawing using the surface associated
     * to the render node.
     * 
     * If no surface exists yet, a surface will be created optimized for
     * rendering to `renderer`.
     */
    getDrawContext(): cairo.Context
    /**
     * Retrieves the Cairo surface used by the render node.
     */
    getSurface(): cairo.Surface
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect): CairoNode
    constructor(bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect): CairoNode
}
interface CairoRenderer_ConstructProps extends Renderer_ConstructProps {
}
class CairoRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    isRealized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     */
    realize(surface?: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     */
    render(root: RenderNode, region?: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     */
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CairoRenderer_ConstructProps)
    _init (config?: CairoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CairoRenderer
    static $gtype: GObject.Type
}
class ClipNode {
    /* Methods of Gsk-4.0.Gsk.ClipNode */
    /**
     * Gets the child node that is getting clipped by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the clip rectangle for `node`.
     */
    getClip(): Graphene.Rect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
    constructor(child: RenderNode, clip: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
}
class ColorMatrixNode {
    /* Methods of Gsk-4.0.Gsk.ColorMatrixNode */
    /**
     * Gets the child node that is getting its colors modified by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the color matrix used by the `node`.
     */
    getColorMatrix(): Graphene.Matrix
    /**
     * Retrieves the color offset used by the `node`.
     */
    getColorOffset(): Graphene.Vec4
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4): ColorMatrixNode
    constructor(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4): ColorMatrixNode
}
class ColorNode {
    /* Methods of Gsk-4.0.Gsk.ColorNode */
    /**
     * Retrieves the color of the given `node`.
     */
    getColor(): Gdk.RGBA
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
    constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
}
class ConicGradientNode {
    /* Methods of Gsk-4.0.Gsk.ConicGradientNode */
    /**
     * Retrieves the angle for the gradient in radians, normalized in [0, 2 * PI].
     * 
     * The angle is starting at the top and going clockwise, as expressed
     * in the css specification:
     * 
     *     angle = 90 - gsk_conic_gradient_node_get_rotation()
     */
    getAngle(): number
    /**
     * Retrieves the center pointer for the gradient.
     */
    getCenter(): Graphene.Point
    /**
     * Retrieves the color stops in the gradient.
     */
    getColorStops(): ColorStop[]
    /**
     * Retrieves the number of color stops in the gradient.
     */
    getNColorStops(): number
    /**
     * Retrieves the rotation for the gradient in degrees.
     */
    getRotation(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[]): ConicGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[]): ConicGradientNode
}
class ContainerNode {
    /* Methods of Gsk-4.0.Gsk.ContainerNode */
    /**
     * Gets one of the children of `container`.
     */
    getChild(idx: number): RenderNode
    /**
     * Retrieves the number of direct children of `node`.
     */
    getNChildren(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(children: RenderNode[]): ContainerNode
    constructor(children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(children: RenderNode[]): ContainerNode
}
class CrossFadeNode {
    /* Methods of Gsk-4.0.Gsk.CrossFadeNode */
    /**
     * Retrieves the child `GskRenderNode` at the end of the cross-fade.
     */
    getEndChild(): RenderNode
    /**
     * Retrieves the progress value of the cross fade.
     */
    getProgress(): number
    /**
     * Retrieves the child `GskRenderNode` at the beginning of the cross-fade.
     */
    getStartChild(): RenderNode
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
    constructor(start: RenderNode, end: RenderNode, progress: number)
    /* Static methods and pseudo-constructors */
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
}
class DebugNode {
    /* Methods of Gsk-4.0.Gsk.DebugNode */
    /**
     * Gets the child node that is getting drawn by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Gets the debug message that was set on this node
     */
    getMessage(): string
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, message: string): DebugNode
    constructor(child: RenderNode, message: string)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, message: string): DebugNode
}
interface GLRenderer_ConstructProps extends Renderer_ConstructProps {
}
class GLRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    isRealized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     */
    realize(surface?: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     */
    render(root: RenderNode, region?: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     */
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLRenderer_ConstructProps)
    _init (config?: GLRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLRenderer
    static $gtype: GObject.Type
}
interface GLShader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gsk-4.0.Gsk.GLShader */
    /**
     * Resource containing the source code for the shader.
     * 
     * If the shader source is not coming from a resource, this
     * will be %NULL.
     */
    resource?: string
    source?: any
}
class GLShader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.GLShader */
    /**
     * Tries to compile the `shader` for the given `renderer`.
     * 
     * If there is a problem, this function returns %FALSE and reports
     * an error. You should use this function before relying on the shader
     * for rendering and use a fallback with a simpler shader or without
     * shaders if it fails.
     * 
     * Note that this will modify the rendering state (for example
     * change the current GL context) and requires the renderer to be
     * set up. This means that the widget has to be realized. Commonly you
     * want to call this from the realize signal of a widget, or during
     * widget snapshot.
     */
    compile(renderer: Renderer): boolean
    /**
     * Looks for a uniform by the name `name,` and returns the index
     * of the uniform, or -1 if it was not found.
     */
    findUniformByName(name: string): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of bool type.
     */
    getArgBool(args: any, idx: number): boolean
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of float type.
     */
    getArgFloat(args: any, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of int type.
     */
    getArgInt(args: any, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of uint type.
     */
    getArgUint(args: any, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec2 type.
     */
    getArgVec2(args: any, idx: number, outValue: Graphene.Vec2): void
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec3 type.
     */
    getArgVec3(args: any, idx: number, outValue: Graphene.Vec3): void
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec4 type.
     */
    getArgVec4(args: any, idx: number, outValue: Graphene.Vec4): void
    /**
     * Get the size of the data block used to specify arguments for this shader.
     */
    getArgsSize(): number
    /**
     * Returns the number of textures that the shader requires.
     * 
     * This can be used to check that the a passed shader works
     * in your usecase. It is determined by looking at the highest
     * u_textureN value that the shader defines.
     */
    getNTextures(): number
    /**
     * Get the number of declared uniforms for this shader.
     */
    getNUniforms(): number
    /**
     * Gets the resource path for the GLSL sourcecode being used
     * to render this shader.
     */
    getResource(): string | null
    /**
     * Gets the GLSL sourcecode being used to render this shader.
     */
    getSource(): any
    /**
     * Get the name of the declared uniform for this shader at index `idx`.
     */
    getUniformName(idx: number): string
    /**
     * Get the offset into the data block where data for this uniforms is stored.
     */
    getUniformOffset(idx: number): number
    /**
     * Get the type of the declared uniform for this shader at index `idx`.
     */
    getUniformType(idx: number): GLUniformType
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(sourcecode: any): GLShader
    static newFromResource(resourcePath: string): GLShader
    static $gtype: GObject.Type
}
class GLShaderNode {
    /* Methods of Gsk-4.0.Gsk.GLShaderNode */
    /**
     * Gets args for the node.
     */
    getArgs(): any
    /**
     * Gets one of the children.
     */
    getChild(idx: number): RenderNode
    /**
     * Returns the number of children
     */
    getNChildren(): number
    /**
     * Gets shader code for the node.
     */
    getShader(): GLShader
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[]): GLShaderNode
    constructor(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[]): GLShaderNode
}
class InsetShadowNode {
    /* Methods of Gsk-4.0.Gsk.InsetShadowNode */
    /**
     * Retrieves the blur radius to apply to the shadow.
     */
    getBlurRadius(): number
    /**
     * Retrieves the color of the inset shadow.
     */
    getColor(): Gdk.RGBA
    /**
     * Retrieves the horizontal offset of the inset shadow.
     */
    getDx(): number
    /**
     * Retrieves the vertical offset of the inset shadow.
     */
    getDy(): number
    /**
     * Retrieves the outline rectangle of the inset shadow.
     */
    getOutline(): RoundedRect
    /**
     * Retrieves how much the shadow spreads inwards.
     */
    getSpread(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): InsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): InsetShadowNode
}
class LinearGradientNode {
    /* Methods of Gsk-4.0.Gsk.LinearGradientNode */
    /**
     * Retrieves the color stops in the gradient.
     */
    getColorStops(): ColorStop[]
    /**
     * Retrieves the final point of the linear gradient.
     */
    getEnd(): Graphene.Point
    /**
     * Retrieves the number of color stops in the gradient.
     */
    getNColorStops(): number
    /**
     * Retrieves the initial point of the linear gradient.
     */
    getStart(): Graphene.Point
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): LinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): LinearGradientNode
}
interface NglRenderer_ConstructProps extends Renderer_ConstructProps {
}
class NglRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    isRealized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     */
    realize(surface?: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     */
    render(root: RenderNode, region?: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     */
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NglRenderer_ConstructProps)
    _init (config?: NglRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NglRenderer
    static $gtype: GObject.Type
}
class OpacityNode {
    /* Methods of Gsk-4.0.Gsk.OpacityNode */
    /**
     * Gets the child node that is getting opacityed by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Gets the transparency factor for an opacity node.
     */
    getOpacity(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, opacity: number): OpacityNode
    constructor(child: RenderNode, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, opacity: number): OpacityNode
}
class OutsetShadowNode {
    /* Methods of Gsk-4.0.Gsk.OutsetShadowNode */
    /**
     * Retrieves the blur radius of the shadow.
     */
    getBlurRadius(): number
    /**
     * Retrieves the color of the outset shadow.
     */
    getColor(): Gdk.RGBA
    /**
     * Retrieves the horizontal offset of the outset shadow.
     */
    getDx(): number
    /**
     * Retrieves the vertical offset of the outset shadow.
     */
    getDy(): number
    /**
     * Retrieves the outline rectangle of the outset shadow.
     */
    getOutline(): RoundedRect
    /**
     * Retrieves how much the shadow spreads outwards.
     */
    getSpread(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): OutsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): OutsetShadowNode
}
class RadialGradientNode {
    /* Methods of Gsk-4.0.Gsk.RadialGradientNode */
    /**
     * Retrieves the center pointer for the gradient.
     */
    getCenter(): Graphene.Point
    /**
     * Retrieves the color stops in the gradient.
     */
    getColorStops(): ColorStop[]
    /**
     * Retrieves the end value for the gradient.
     */
    getEnd(): number
    /**
     * Retrieves the horizonal radius for the gradient.
     */
    getHradius(): number
    /**
     * Retrieves the number of color stops in the gradient.
     */
    getNColorStops(): number
    /**
     * Retrieves the start value for the gradient.
     */
    getStart(): number
    /**
     * Retrieves the vertical radius for the gradient.
     */
    getVradius(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RadialGradientNode
}
class RenderNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Loads data previously created via [method`Gsk`.RenderNode.serialize].
     * 
     * For a discussion of the supported format, see that function.
     */
    static deserialize(bytes: any): RenderNode | null
}
interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
class Renderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    isRealized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     */
    realize(surface?: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     */
    render(root: RenderNode, region?: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     */
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForSurface(surface: Gdk.Surface): Renderer
    static $gtype: GObject.Type
}
class RepeatNode {
    /* Methods of Gsk-4.0.Gsk.RepeatNode */
    /**
     * Retrieves the child of `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the bounding rectangle of the child of `node`.
     */
    getChildBounds(): Graphene.Rect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null): RepeatNode
    constructor(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null): RepeatNode
}
class RepeatingLinearGradientNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): RepeatingLinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): RepeatingLinearGradientNode
}
class RepeatingRadialGradientNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RepeatingRadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RepeatingRadialGradientNode
}
class RoundedClipNode {
    /* Methods of Gsk-4.0.Gsk.RoundedClipNode */
    /**
     * Gets the child node that is getting clipped by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the rounded rectangle used to clip the contents of the `node`.
     */
    getClip(): RoundedRect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
    constructor(child: RenderNode, clip: RoundedRect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
}
class ShadowNode {
    /* Methods of Gsk-4.0.Gsk.ShadowNode */
    /**
     * Retrieves the child `GskRenderNode` of the shadow `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the number of shadows in the `node`.
     */
    getNShadows(): number
    /**
     * Retrieves the shadow data at the given index `i`.
     */
    getShadow(i: number): Shadow
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
    constructor(child: RenderNode, shadows: Shadow[])
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
}
class TextNode {
    /* Methods of Gsk-4.0.Gsk.TextNode */
    /**
     * Retrieves the color used by the text `node`.
     */
    getColor(): Gdk.RGBA
    /**
     * Returns the font used by the text `node`.
     */
    getFont(): Pango.Font
    /**
     * Retrieves the glyph information in the `node`.
     */
    getGlyphs(): Pango.GlyphInfo[]
    /**
     * Retrieves the number of glyphs in the text node.
     */
    getNumGlyphs(): number
    /**
     * Retrieves the offset applied to the text.
     */
    getOffset(): Graphene.Point
    /**
     * Checks whether the text `node` has color glyphs.
     */
    hasColorGlyphs(): boolean
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
    constructor(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point)
    /* Static methods and pseudo-constructors */
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
}
class TextureNode {
    /* Methods of Gsk-4.0.Gsk.TextureNode */
    /**
     * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
     */
    getTexture(): Gdk.Texture
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
}
class TransformNode {
    /* Methods of Gsk-4.0.Gsk.TransformNode */
    /**
     * Gets the child node that is getting transformed by the given `node`.
     */
    getChild(): RenderNode
    /**
     * Retrieves the `GskTransform` used by the `node`.
     */
    getTransform(): Transform
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    getBounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    getNodeType(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): any
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     */
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, transform: Transform): TransformNode
    constructor(child: RenderNode, transform: Transform)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, transform: Transform): TransformNode
}
abstract class BroadwayRendererClass {
    static name: string
}
abstract class CairoRendererClass {
    static name: string
}
class ColorStop {
    /* Fields of Gsk-4.0.Gsk.ColorStop */
    /**
     * the offset of the color stop
     */
    readonly offset: number
    /**
     * the color at the given offset
     */
    readonly color: Gdk.RGBA
    static name: string
}
abstract class GLRendererClass {
    static name: string
}
abstract class GLShaderClass {
    /* Fields of Gsk-4.0.Gsk.GLShaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ParseLocation {
    /* Fields of Gsk-4.0.Gsk.ParseLocation */
    /**
     * the offset of the location in the parse buffer, as bytes
     */
    readonly bytes: number
    /**
     * the offset of the location in the parse buffer, as characters
     */
    readonly chars: number
    /**
     * the line of the location in the parse buffer
     */
    readonly lines: number
    /**
     * the position in the line, as bytes
     */
    readonly lineBytes: number
    /**
     * the position in the line, as characters
     */
    readonly lineChars: number
    static name: string
}
abstract class RendererClass {
    static name: string
}
class RoundedRect {
    /* Fields of Gsk-4.0.Gsk.RoundedRect */
    /**
     * the bounds of the rectangle
     */
    readonly bounds: Graphene.Rect
    /**
     * the size of the 4 rounded corners
     */
    readonly corner: Graphene.Size[]
    /* Methods of Gsk-4.0.Gsk.RoundedRect */
    /**
     * Checks if the given `point` is inside the rounded rectangle.
     */
    containsPoint(point: Graphene.Point): boolean
    /**
     * Checks if the given `rect` is contained inside the rounded rectangle.
     */
    containsRect(rect: Graphene.Rect): boolean
    /**
     * Initializes the given `GskRoundedRect` with the given values.
     * 
     * This function will implicitly normalize the `GskRoundedRect`
     * before returning.
     */
    init(bounds: Graphene.Rect, topLeft: Graphene.Size, topRight: Graphene.Size, bottomRight: Graphene.Size, bottomLeft: Graphene.Size): RoundedRect
    /**
     * Initializes `self` using the given `src` rectangle.
     * 
     * This function will not normalize the `GskRoundedRect`,
     * so make sure the source is normalized.
     */
    initCopy(src: RoundedRect): RoundedRect
    /**
     * Initializes `self` to the given `bounds` and sets the radius
     * of all four corners to `radius`.
     */
    initFromRect(bounds: Graphene.Rect, radius: number): RoundedRect
    /**
     * Checks if part of the given `rect` is contained inside the rounded rectangle.
     */
    intersectsRect(rect: Graphene.Rect): boolean
    /**
     * Checks if all corners of `self` are right angles and the
     * rectangle covers all of its bounds.
     * 
     * This information can be used to decide if [ctor`Gsk`.ClipNode.new]
     * or [ctor`Gsk`.RoundedClipNode.new] should be called.
     */
    isRectilinear(): boolean
    /**
     * Normalizes the passed rectangle.
     * 
     * This function will ensure that the bounds of the rectangle
     * are normalized and ensure that the corner values are positive
     * and the corners do not overlap.
     */
    normalize(): RoundedRect
    /**
     * Offsets the bound's origin by `dx` and `dy`.
     * 
     * The size and corners of the rectangle are unchanged.
     */
    offset(dx: number, dy: number): RoundedRect
    /**
     * Shrinks (or grows) the given rectangle by moving the 4 sides
     * according to the offsets given.
     * 
     * The corner radii will be changed in a way that tries to keep
     * the center of the corner circle intact. This emulates CSS behavior.
     * 
     * This function also works for growing rectangles if you pass
     * negative values for the `top,` `right,` `bottom` or `left`.
     */
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect
    static name: string
}
class ShaderArgsBuilder {
    /* Methods of Gsk-4.0.Gsk.ShaderArgsBuilder */
    /**
     * Increases the reference count of a `GskShaderArgsBuilder` by one.
     */
    ref(): ShaderArgsBuilder
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of bool type.
     */
    setBool(idx: number, value: boolean): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of float type.
     */
    setFloat(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of int type.
     */
    setInt(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of uint type.
     */
    setUint(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec2 type.
     */
    setVec2(idx: number, value: Graphene.Vec2): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec3 type.
     */
    setVec3(idx: number, value: Graphene.Vec3): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec4 type.
     */
    setVec4(idx: number, value: Graphene.Vec4): void
    /**
     * Creates a new `GBytes` args from the current state of the
     * given `builder`.
     * 
     * Any uniforms of the shader that have not been explicitly set on
     * the `builder` are zero-initialized.
     * 
     * The given `GskShaderArgsBuilder` is reset once this function returns;
     * you cannot call this function multiple times on the same `builder` instance.
     * 
     * This function is intended primarily for bindings. C code should use
     * [method`Gsk`.ShaderArgsBuilder.free_to_args].
     */
    toArgs(): any
    /**
     * Decreases the reference count of a `GskShaderArgBuilder` by one.
     * 
     * If the resulting reference count is zero, frees the builder.
     */
    unref(): void
    static name: string
    static new(shader: GLShader, initialValues?: any | null): ShaderArgsBuilder
    constructor(shader: GLShader, initialValues?: any | null)
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, initialValues?: any | null): ShaderArgsBuilder
}
class Shadow {
    /* Fields of Gsk-4.0.Gsk.Shadow */
    /**
     * the color of the shadow
     */
    readonly color: Gdk.RGBA
    /**
     * the horizontal offset of the shadow
     */
    readonly dx: number
    /**
     * the vertical offset of the shadow
     */
    readonly dy: number
    /**
     * the radius of the shadow
     */
    readonly radius: number
    static name: string
}
class Transform {
    /* Methods of Gsk-4.0.Gsk.Transform */
    /**
     * Checks two transforms for equality.
     */
    equal(second?: Transform | null): boolean
    /**
     * Returns the category this transform belongs to.
     */
    getCategory(): TransformCategory
    /**
     * Inverts the given transform.
     * 
     * If `self` is not invertible, %NULL is returned.
     * Note that inverting %NULL also returns %NULL, which is
     * the correct inverse of %NULL. If you need to differentiate
     * between those cases, you should check `self` is not %NULL
     * before calling this function.
     */
    invert(): Transform | null
    /**
     * Multiplies `next` with the given `matrix`.
     */
    matrix(matrix: Graphene.Matrix): Transform
    /**
     * Applies a perspective projection transform.
     * 
     * This transform scales points in X and Y based on their Z value,
     * scaling points with positive Z values away from the origin, and
     * those with negative Z values towards the origin. Points
     * on the z=0 plane are unchanged.
     */
    perspective(depth: number): Transform
    /**
     * Converts `self` into a human-readable string representation suitable
     * for printing.
     * 
     * The result of this function can later be parsed with
     * [func`Gsk`.Transform.parse].
     */
    print(string: GLib.String): void
    /**
     * Acquires a reference on the given `GskTransform`.
     */
    ref(): Transform | null
    /**
     * Rotates `next` `angle` degrees in 2D - or in 3D-speak, around the z axis.
     */
    rotate(angle: number): Transform | null
    /**
     * Rotates `next` `angle` degrees around `axis`.
     * 
     * For a rotation in 2D space, use [method`Gsk`.Transform.rotate]
     */
    rotate3d(angle: number, axis: Graphene.Vec3): Transform | null
    /**
     * Scales `next` in 2-dimensional space by the given factors.
     * 
     * Use [method`Gsk`.Transform.scale_3d] to scale in all 3 dimensions.
     */
    scale(factorX: number, factorY: number): Transform | null
    /**
     * Scales `next` by the given factors.
     */
    scale3d(factorX: number, factorY: number, factorZ: number): Transform | null
    /**
     * Applies a skew transform.
     */
    skew(skewX: number, skewY: number): Transform | null
    /**
     * Converts a `GskTransform` to a 2D transformation matrix.
     * 
     * `self` must be a 2D transformation. If you are not
     * sure, use gsk_transform_get_category() >=
     * %GSK_TRANSFORM_CATEGORY_2D to check.
     * 
     * The returned values have the following layout:
     * 
     * ```
     *   | xx yx |   |  a  b  0 |
     *   | xy yy | = |  c  d  0 |
     *   | dx dy |   | tx ty  1 |
     * ```
     * 
     * This function can be used to convert between a `GskTransform`
     * and a matrix type from other 2D drawing libraries, in particular
     * Cairo.
     */
    to2d(): [ /* outXx */ number, /* outYx */ number, /* outXy */ number, /* outYy */ number, /* outDx */ number, /* outDy */ number ]
    /**
     * Converts a `GskTransform` to 2D transformation factors.
     * 
     * To recreate an equivalent transform from the factors returned
     * by this function, use
     * 
     *     gsk_transform_skew (
     *         gsk_transform_scale (
     *             gsk_transform_rotate (
     *                 gsk_transform_translate (NULL, &GRAPHENE_POINT_T (dx, dy)),
     *                 angle),
     *             scale_x, scale_y),
     *         skew_x, skew_y)
     * 
     * `self` must be a 2D transformation. If you are not sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D
     * 
     * to check.
     */
    to2dComponents(): [ /* outSkewX */ number, /* outSkewY */ number, /* outScaleX */ number, /* outScaleY */ number, /* outAngle */ number, /* outDx */ number, /* outDy */ number ]
    /**
     * Converts a `GskTransform` to 2D affine transformation factors.
     * 
     * To recreate an equivalent transform from the factors returned
     * by this function, use
     * 
     *     gsk_transform_scale (gsk_transform_translate (NULL,
     *                                                   &GRAPHENE_POINT_T (dx, dy)),
     *                          sx, sy)
     * 
     * `self` must be a 2D affine transformation. If you are not
     * sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_AFFINE
     * 
     * to check.
     */
    toAffine(): [ /* outScaleX */ number, /* outScaleY */ number, /* outDx */ number, /* outDy */ number ]
    /**
     * Computes the actual value of `self` and stores it in `out_matrix`.
     * 
     * The previous value of `out_matrix` will be ignored.
     */
    toMatrix(): /* outMatrix */ Graphene.Matrix
    /**
     * Converts a matrix into a string that is suitable for printing.
     * 
     * The resulting string can be parsed with [func`Gsk`.Transform.parse].
     * 
     * This is a wrapper around [method`Gsk`.Transform.print].
     */
    toString(): string
    /**
     * Converts a `GskTransform` to a translation operation.
     * 
     * `self` must be a 2D transformation. If you are not
     * sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_TRANSLATE
     * 
     * to check.
     */
    toTranslate(): [ /* outDx */ number, /* outDy */ number ]
    /**
     * Applies all the operations from `other` to `next`.
     */
    transform(other?: Transform | null): Transform | null
    /**
     * Transforms a `graphene_rect_t` using the given transform `self`.
     * 
     * The result is the bounding box containing the coplanar quad.
     */
    transformBounds(rect: Graphene.Rect): /* outRect */ Graphene.Rect
    /**
     * Transforms a `graphene_point_t` using the given transform `self`.
     */
    transformPoint(point: Graphene.Point): /* outPoint */ Graphene.Point
    /**
     * Translates `next` in 2-dimensional space by `point`.
     */
    translate(point: Graphene.Point): Transform | null
    /**
     * Translates `next` by `point`.
     */
    translate3d(point: Graphene.Point3D): Transform | null
    /**
     * Releases a reference on the given `GskTransform`.
     * 
     * If the reference was the last, the resources associated to the `self` are
     * freed.
     */
    unref(): void
    static name: string
    static new(): Transform
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Transform
    /**
     * Parses the given `string` into a transform and puts it in
     * `out_transform`.
     * 
     * Strings printed via [method`Gsk`.Transform.to_string]
     * can be read in again successfully using this function.
     * 
     * If `string` does not describe a valid transform, %FALSE is
     * returned and %NULL is put in `out_transform`.
     */
    static parse(string: string): [ /* returnType */ boolean, /* outTransform */ Transform ]
}
}
export default Gsk;