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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace CambalachePrivate {
    /**
     * CambalachePrivate-4.0
     */

    /**
     * Error codes in the `CMB_PRIVATE_SVG_ERROR` domain for errors
     * that happen during parsing or rendering of SVG.
     * @gir-type Enum
     * @since 4.22
     */
    enum SvgError {
        /**
         * An XML element is invalid
         *   (either because it is not part of SVG, or because it is
         *   in the wrong place, or because it not implemented in GTK)
         */
        INVALID_ELEMENT,
        /**
         * An XML attribute is invalid
         *   (either because it is not part of SVG, or because it is
         *   not implemented in GTK, or its value is problematic)
         */
        INVALID_ATTRIBUTE,
        /**
         * A required attribute is missing
         */
        MISSING_ATTRIBUTE,
        /**
         * A reference does not point to
         *   a suitable element
         */
        INVALID_REFERENCE,
        /**
         * An animation could not be updated
         */
        FAILED_UPDATE,
        /**
         * Rendering is not according to
         *   expecations
         */
        FAILED_RENDERING,
    }

    /**
     * @param object
     * @param property_name
     * @param value
     */
    function object_set_property_from_string(
        object: GObject.Object,
        property_name: string,
        value?: string | null,
    ): void;
    /**
     * @param widget
     * @param app_id
     */
    function widget_set_application_id(widget: Gtk.Widget, app_id: string): void;
    namespace Svg {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signals that an error occurred.
             *
             * Errors can occur both during parsing and during rendering.
             *
             * The expected error values are in the {@link Gtk.SvgError} enumeration,
             * context information about the location of parsing errors can
             * be obtained with the various `cmb_private_svg_error` functions.
             *
             * Parsing errors are never fatal, so the parsing will resume after
             * the error. Errors may however cause parts of the given data or
             * even all of it to not be parsed at all. So it is a useful idea
             * to check that the parsing succeeds by connecting to this signal.
             *
             * ::: note
             *     This signal is emitted in the middle of parsing or rendering,
             *     and if you handle it, you must be careful. Logging the errors
             *     you receive is fine, but modifying the widget hierarchy or
             *     changing the paintable state definitively isn't.
             *
             *     If in doubt, defer to an idle.
             * @signal
             * @since 4.22
             * @run-last
             */
            error: (arg0: GLib.Error) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
            'notify::resource': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::weight': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GObject.Object.ConstructorProps,
                Gdk.Paintable.ConstructorProps,
                Gtk.SymbolicPaintable.ConstructorProps {
            playing: boolean;
            resource: string;
            state: number;
            weight: number;
        }
    }

    /**
     * A paintable implementation that renders (a subset of) SVG,
     * with animations.
     *
     * {@link CambalachePrivate.Svg} objects are created by parsing a subset of SVG,
     * including SVG animations.
     *
     * The {@link CambalachePrivate.Svg} fills or strokes paths with symbolic or fixed
     * colors. It can have multiple states, and paths can be included
     * in a subset of the states. The special 'empty' state is always
     * available. States can have animation, and the transition between
     * different states can also be animated.
     *
     * To find out what states a {@link CambalachePrivate.Svg} has, use {@link Gtk.Svg.get_n_states}.
     * To set the current state, use {@link Gtk.Svg.set_state}.
     *
     * To play the animations in an SVG file, use
     * {@link Gtk.Svg.set_frame_clock} to connect the paintable to a frame clock,
     * and then use {@link Gtk.Svg.play} to start the animation.
     *
     *
     * ## Error handling
     *
     * Loading an SVG into {@link CambalachePrivate.Svg} will always produce a (possibly empty)
     * paintable. GTK will drop things that it can't handle and try to make
     * sense of the rest.
     *
     * To track errors during parsing or rednering, connect to the
     * `Gtk.Svg::error` signal.
     *
     * For parsing errors in the `CMB_PRIVATE_SVG_ERROR` domain, the functions
     * {@link Gtk.SvgError.get_start}, {@link Gtk.SvgError.get_end},
     * {@link Gtk.SvgError.get_element} and {@link Gtk.SvgError.get_attribute}
     * can be used to obtain information about where the error occurred.
     *
     *
     * ## The supported subset of SVG
     *
     * The paintable does not support text or images, only shapes and paths.
     *
     * In `<defs>`, only `<clipPath>`, `<mask>`, gradients and shapes are
     * supported, not `<filter>`, `<pattern>` or other things.
     *
     * Gradient templating is not implemented, and radial gradients with
     * `fx,fy != cx,cy` are not supported.
     *
     * The support for filters is limited to filter functions minus
     * `drop-shadow()` plus a custom `alpha-level()` function, which
     * implements one particular case of feComponentTransfer.
     *
     * The `transform-origin` and `transform-box` attributes are not supported.
     *
     * The support for the `mask` attribute is limited to just a url
     * referring to the `<mask>` element by ID.
     *
     * In animation elements, the parsing of `begin` and `end` attributes
     * is limited, and the `by`, `min` and `max` attributes are not supported.
     *
     * Lastly, there is no CSS support, and no interactivity.
     *
     *
     * ## SVG Extensions
     *
     * The paintable supports a number of [custom attributes](icon-format.html)
     * that offer a convenient way to define states, transitions and animations.
     * For example,
     *
     *     <circle cx='5' cy='5' r='5'
     *             gpa:states='0 1'
     *             gpa:animation-type='automatic'
     *             gpa:animation-direction='segment'
     *             gpa:animation-duration='600ms'/>
     *
     * defines the circle to be shown in states 0 and 1, and animates a segment
     * of the circle.
     *
     * <image src="svg-renderer1.svg">
     *
     * Note that the generated animations assume a `pathLengh` value of 1.
     * Setting `pathLength` in your SVG is therefore going to interfere with
     * generated animations.
     *
     * To connect general SVG animations to the states of the paintable,
     * use the custom `gpa:states(...)` condition in the `begin` and `end`
     * attributes of SVG animation elements. For example,
     *
     *     <animate href='path1'
     *              attributeName='fill'
     *              begin='gpa:states(0).begin'
     *              dur='300ms'
     *              fill='freeze'
     *              from='black'
     *              to='magenta'/>
     *
     * will make the fill color of path1 transition from black to
     * magenta when the renderer enters state 0.
     *
     * <image src="svg-renderer2.svg">
     *
     * The `gpa:states(...)` condition triggers for upcoming state changes
     * as well, to support fade-out transitions. For example,
     *
     *     <animate href='path1'
     *              attributeName='opacity'
     *              begin='gpa:states(0).end -300ms'
     *              dur='300ms'
     *              fill='freeze'
     *              from='1'
     *              to='0'/>
     *
     * will start a fade-out of path1 300ms before state 0 ends.
     *
     * In addition to `gpa:fill` and `gpa:stroke`, symbolic colors can
     * also be specified as a custom paint server reference, like this:
     * `url(gpa:#warning)`. This works in `fill` and `stroke` attributes,
     * but also when specifying colors in SVG animation attributes like
     * `to` or `values`.
     *
     * Note that the SVG syntax allows for a fallback RGB color to be
     * specified after the url, for compatibility with other SVG consumers:
     *
     *     fill='url(gpa:#warning) orange'
     *
     * In contrast to SVG 1.1 and 2.0, we allow the `transform` attribute
     * to be animated with `<animate>`.
     * @gir-type Class
     * @since 4.22
     */
    class Svg extends GObject.Object implements Gdk.Paintable, Gtk.SymbolicPaintable {
        static $gtype: GObject.GType<Svg>;

        // Properties

        /**
         * Whether the paintable is currently animating its content.
         *
         * To set this property, use the {@link Gtk.Svg.play} and
         * {@link Gtk.Svg.pause} functions.
         * @since 4.22
         */
        get playing(): boolean;
        set playing(val: boolean);
        /**
         * Construct-only property to create a paintable from
         * a resource in ui files.
         * @since 4.22
         * @construct-only
         */
        set resource(val: string);
        /**
         * The current state of the renderer.
         *
         * This can be a number between 0 and 63, or the special value
         * `(unsigned int) -1` to indicate the 'empty' state in which
         * nothing is drawn.
         * @since 4.22
         */
        get state(): number;
        set state(val: number);
        /**
         * If not set to -1, this value overrides the weight used
         * when rendering the paintable.
         * @since 4.22
         */
        get weight(): number;
        set weight(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Svg.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Svg.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Svg;

        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Svg;

        static new_from_resource(path: string): Svg;

        // Signals

        /** @signal */
        connect<K extends keyof Svg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Svg.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Svg.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Svg.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Svg.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Svg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns context information about what XML attribute
         * the parsing error occurred in.
         * @param error an error in the {@link Gtk.SvgError} domain
         */
        static error_get_attribute(error: GLib.Error): string | null;
        /**
         * Returns context information about what XML element
         * the parsing error occurred in.
         * @param error an error in the {@link Gtk.SvgError} domain
         */
        static error_get_element(error: GLib.Error): string | null;
        /**
         * Returns context information about the end position
         * in the document where the parsing error occurred.
         * @param error an error in the {@link Gtk.SvgError} domain
         */
        static error_get_end(error: GLib.Error): SvgLocation | null;
        /**
         * Returns context information about the start position
         * in the document where the parsing error occurred.
         * @param error an error in the {@link Gtk.SvgError} domain
         */
        static error_get_start(error: GLib.Error): SvgLocation | null;
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Gets the number of states defined in the SVG.
         *
         * Note that there is always an empty state, which does
         * not count towards this number. If this function returns
         * the value N, the meaningful states of the SVG are
         * 0, 1, ..., N - 1 and `CMB_PRIVATE_SVG_STATE_EMPTY`.
         * @returns the number of states
         */
        get_n_states(): number;
        /**
         * Gets the current state of the paintable.
         * @returns the state
         */
        get_state(): number;
        /**
         * Gets the value of the weight property.
         * @returns the weight
         */
        get_weight(): number;
        /**
         * Loads SVG content into an existing SVG paintable.
         *
         * To track errors while loading SVG content,
         * connect to the `Gtk.Svg::error` signal.
         *
         * This clears any previously loaded content.
         * @param bytes the data to load
         */
        load_from_bytes(bytes: GLib.Bytes | Uint8Array): void;
        /**
         * Stop any playing animations.
         *
         * Animations can be paused and started repeatedly.
         */
        pause(): void;
        /**
         * Start playing animations.
         *
         * Note that this is necessary for state changes as
         * well.
         */
        play(): void;
        /**
         * Serializes the content of the renderer as SVG.
         *
         * The SVG will be similar to the orignally loaded one,
         * but is not guaranteed to be 100% identical.
         *
         * This function serializes the DOM, i.e. the results
         * of parsing the SVG. It does not reflect the effect
         * of applying animations.
         * @returns the serialized contents
         */
        serialize(): GLib.Bytes;
        /**
         * Sets a frame clock.
         *
         * Without a frame clock, GTK has to rely
         * on simple timeouts to run animations.
         * @param clock the frame clock
         */
        set_frame_clock(clock: Gdk.FrameClock): void;
        /**
         * Sets the state of the paintable.
         *
         * Use {@link Gtk.Svg.get_n_states} to find out
         * what states `self` has.
         *
         * Note that {@link Gtk.Svg.play} must have been
         * called for the SVG paintable to react to state changes.
         * @param state the state to set, as a value between 0 and 63,   or `(unsigned int) -1`
         */
        set_state(state: number): void;
        /**
         * Sets the weight that is used when rendering.
         *
         * The default value of -1 means to use the font weight
         * from CSS.
         * @param weight the font weight, as a value between -1 and 1000
         */
        set_weight(weight: number): void;
        /**
         * Serializes the paintable, and saves the result to a file.
         * @param filename the file to save to
         * @returns true, unless an error occurred
         */
        write_to_file(filename: string): boolean;
        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         *
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         *
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         *
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Snapshots the paintable with the given colors.
         *
         * If less than 5 colors are provided, GTK will pad the array with default
         * colors.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @param colors a pointer to an array of colors
         */
        snapshot_symbolic(snapshot: Gdk.Snapshot, width: number, height: number, colors: Gdk.RGBA[]): void;
        /**
         * Snapshots the paintable with the given colors and weight.
         *
         * If less than 5 colors are provided, GTK will pad the array with default
         * colors.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @param colors a pointer to an array of colors
         * @param weight The font weight to use (from 1 to 1000, with default 400)
         */
        snapshot_with_weight(
            snapshot: Gdk.Snapshot,
            width: number,
            height: number,
            colors: Gdk.RGBA[],
            weight: number,
        ): void;
        /**
         * Snapshots the paintable with the given colors.
         *
         * If less than 5 colors are provided, GTK will pad the array with default
         * colors.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @param colors a pointer to an array of colors
         * @virtual
         */
        vfunc_snapshot_symbolic(snapshot: Gdk.Snapshot, width: number, height: number, colors: Gdk.RGBA[]): void;
        /**
         * Snapshots the paintable with the given colors and weight.
         *
         * If less than 5 colors are provided, GTK will pad the array with default
         * colors.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @param colors a pointer to an array of colors
         * @param weight The font weight to use (from 1 to 1000, with default 400)
         * @virtual
         */
        vfunc_snapshot_with_weight(
            snapshot: Gdk.Snapshot,
            width: number,
            height: number,
            colors: Gdk.RGBA[],
            weight: number,
        ): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    /**
     * @gir-type Alias
     */
    type SvgClass = typeof Svg;
    /**
     * Provides information about a location in an SVG document.
     *
     * The information should be considered approximate; it is
     * meant to provide feedback for errors in an editor.
     * @gir-type Struct
     * @since 4.22
     */
    class SvgLocation {
        static $gtype: GObject.GType<SvgLocation>;

        // Fields

        bytes: number;
        lines: number;
        line_chars: number;

        // Constructors

        constructor(
            properties?: Partial<{
                bytes: number;
                lines: number;
                line_chars: number;
            }>,
        );
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

export default CambalachePrivate;

// END
