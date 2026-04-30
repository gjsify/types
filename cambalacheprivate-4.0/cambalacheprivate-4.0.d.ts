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
    function object_set_property_from_string(object: GObject.Object, property_name: string, value: string | null): void;
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
         * @default false
         */
        get playing(): boolean;
        set playing(val: boolean);
        /**
         * Construct-only property to create a paintable from
         * a resource in ui files.
         * @since 4.22
         * @construct-only
         * @default null
         */
        set resource(val: string);
        /**
         * The current state of the renderer.
         *
         * This can be a number between 0 and 63, or the special value
         * `(unsigned int) -1` to indicate the 'empty' state in which
         * nothing is drawn.
         * @since 4.22
         * @default 4294967295
         */
        get state(): number;
        set state(val: number);
        /**
         * If not set to -1, this value overrides the weight used
         * when rendering the paintable.
         * @since 4.22
         * @default -1
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
