
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-1.0';

export namespace GtkClutter {

    /**
     * GtkClutter-1.0
     */


    /**
     * Error enumeration for {@link GtkClutter.Texture}
     * @gir-type Enum
     * @since 1.0
     */
    enum TextureError {
        /**
         * Invalid stock id
         */
        TEXTURE_ERROR_INVALID_STOCK_ID,
    }


    /**
     * This function should be called instead of `clutter_init()` and
     * `gtk_init()`.
     * @param argv pointer to the   arguments vector, or `null`
     * @returns {@link Clutter.InitError.SUCCESS} on success, a negative integer   on failure.
     */
    function init(argv: string[] | null): [Clutter.InitError, string[] | null];

    /**
     * This function should be called instead of `clutter_init()` and
     * `gtk_init_with_args()`.
     * @param argv a pointer to the array   of command line arguments, or `null`
     * @param parameter_string a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
     * @param entries a    `null`-terminated array of {@link GLib.OptionEntry}<!-- -->s describing the    options of your program
     * @param translation_domain a translation domain to use for    translating the <option>--help</option> output for the options    in `entries` with `gettext()`, or `null`
     * @returns {@link Clutter.InitError.SUCCESS} on success, a negative integer   on failure.
     */
    function init_with_args(argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[] | null, translation_domain: string | null): [Clutter.InitError, string[] | null];

    namespace Actor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            "notify::contents": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::allocation": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-x": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-y": (pspec: GObject.ParamSpec) => void;
            "notify::background-color": (pspec: GObject.ParamSpec) => void;
            "notify::background-color-set": (pspec: GObject.ParamSpec) => void;
            "notify::child-transform": (pspec: GObject.ParamSpec) => void;
            "notify::child-transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::clip": (pspec: GObject.ParamSpec) => void;
            "notify::clip-rect": (pspec: GObject.ParamSpec) => void;
            "notify::clip-to-allocation": (pspec: GObject.ParamSpec) => void;
            "notify::constraints": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::content-box": (pspec: GObject.ParamSpec) => void;
            "notify::content-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::content-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::depth": (pspec: GObject.ParamSpec) => void;
            "notify::effect": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-position-set": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-x": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-y": (pspec: GObject.ParamSpec) => void;
            "notify::has-clip": (pspec: GObject.ParamSpec) => void;
            "notify::has-pointer": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::magnification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::min-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::min-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::minification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::offscreen-redirect": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point-z": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::reactive": (pspec: GObject.ParamSpec) => void;
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::request-mode": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-zgravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::show-on-set-parent": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text-direction": (pspec: GObject.ParamSpec) => void;
            "notify::transform": (pspec: GObject.ParamSpec) => void;
            "notify::transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::x-align": (pspec: GObject.ParamSpec) => void;
            "notify::x-expand": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::y-align": (pspec: GObject.ParamSpec) => void;
            "notify::y-expand": (pspec: GObject.ParamSpec) => void;
            "notify::z-position": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Clutter.Actor.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Clutter.Animatable.ConstructorProps, Clutter.Container.ConstructorProps, Clutter.Scriptable.ConstructorProps {
            contents: Gtk.Widget;
        }
    }

    /**
     * A ClutterActor containing a {@link Gtk.Widget}.
     * @gir-type Class
     */
    class Actor extends Clutter.Actor implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
        static $gtype: GObject.GType<Actor>;

        // Properties
        /**
         * The {@link Gtk.Widget} to be embedded into the {@link GtkClutter.Actor}
         */
        get contents(): Gtk.Widget;
        set contents(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Actor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Actor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Actor;

        static new_with_contents(contents: Gtk.Widget): Actor;

        // Signals
        /** @signal */
        connect<K extends keyof Actor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Actor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Actor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Actor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the child of the {@link Gtk.Bin} used to hold the contents of `actor`.
         * 
         * This convenience function is the logical equivalent of:
         * 
         * 
         * ```
         * GtkWidget *bin;
         * 
         * bin = gtk_clutter_actor_get_widget (GTK_CLUTTER_ACTOR (actor));
         * return gtk_bin_get_child (GTK_BIN (bin));
         * ```
         * 
         * @returns a {@link Gtk.Widget}, or `null` if not content   has been set
         */
        get_contents(): Gtk.Widget;

        /**
         * Retrieves the {@link Gtk.Bin} used to hold the {@link GtkClutter.Actor.contents} widget
         * @returns a {@link Gtk.Bin}
         */
        get_widget(): Gtk.Widget;

        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         * 
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         * 
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @returns `true` if the value has been validated and can   be applied to the {@link Clutter.Animatable}, and `false` otherwise
         */
        animate_property(animation: Clutter.Animation, property_name: string, initial_value: GObject.Value | any, final_value: GObject.Value | any, progress: number, value: GObject.Value | any): boolean;

        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;

        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;

        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         * 
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         * 
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];

        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;

        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         * 
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         * 
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @virtual
         */
        vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: unknown, final_value: unknown, progress: number, value: unknown): boolean;

        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;

        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: unknown): void;

        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         * 
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         * 
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, GObject.Value | any];

        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: unknown): void;

        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         * 
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         */
        add_actor(actor: Clutter.Actor): void;

        /**
         * Gets a container specific property of a child of `container`, In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling `g_value_unset()`.
         * 
         * Note that `clutter_container_child_set_property()` is really intended for
         * language bindings, `clutter_container_child_set()` is much more convenient
         * for C programming.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;

        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;

        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         * 
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         * 
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        create_child_meta(actor: Clutter.Actor): void;

        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         * 
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         * 
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        destroy_child_meta(actor: Clutter.Actor): void;

        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or `null` if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;

        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         * 
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach(callback: Clutter.Callback): void;

        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         * 
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach_with_internals(callback: Clutter.Callback): void;

        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @returns the {@link Clutter.ChildMeta} for the `actor` child   of `container` or `null` if the specifiec actor does not exist or the   container is not configured to provide {@link Clutter.ChildMeta}<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

        /**
         * Retrieves all the children of `container`.
         * @returns a list   of {@link Clutter.Actor}<!-- -->s. Use `g_list_free()` on the returned   list when done.
         */
        get_children(): Clutter.Actor[];

        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         * 
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         */
        lower_child(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;

        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         * 
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         */
        raise_child(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;

        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         * 
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         */
        remove_actor(actor: Clutter.Actor): void;

        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        sort_depth_order(): void;

        /**
         * @param actor 
         * @virtual
         */
        vfunc_actor_added(actor: Clutter.Actor): void;

        /**
         * @param actor 
         * @virtual
         */
        vfunc_actor_removed(actor: Clutter.Actor): void;

        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         * 
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         * @virtual
         */
        vfunc_add(actor: Clutter.Actor): void;

        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         * @virtual
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;

        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         * 
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         * 
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;

        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         * 
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         * 
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;

        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         * 
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach(callback: Clutter.Callback): void;

        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         * 
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach_with_internals(callback: Clutter.Callback): void;

        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @virtual
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;

        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         * 
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         * @virtual
         */
        vfunc_lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;

        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         * 
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         * @virtual
         */
        vfunc_raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void;

        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         * 
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_remove(actor: Clutter.Actor): void;

        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         * @virtual
         */
        vfunc_sort_depth_order(): void;

        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;

        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns `true` if the node was successfully parsed, `false` otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;

        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;

        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         * 
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         */
        set_id(id_: string): void;

        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @virtual
         */
        vfunc_parse_custom_node(script: Clutter.Script, value: unknown, name: string, node: Json.Node): boolean;

        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         * @virtual
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: unknown): void;

        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         * 
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         * @virtual
         */
        vfunc_set_id(id_: string): void;
    }


    namespace Embed {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::use-layout-size": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            use_layout_size: boolean;
            useLayoutSize: boolean;
        }
    }

    /**
     * A {@link Gtk.Widget} containing the default Clutter stage.
     * 
     * The <structname>GtkClutterEmbed</structname> structure contains only
     * private data and should be accessed using the provided API.
     * @gir-type Class
     */
    class Embed extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Embed>;

        // Properties
        /**
         * Whether to use the reported size of the LayoutManager on the stage as the widget size.
         * See `gtk_clutter_embed_set_use_layout_size()` for details.
         * @since 1.4
         * @default false
         */
        get use_layout_size(): boolean;
        set use_layout_size(val: boolean);

        /**
         * Whether to use the reported size of the LayoutManager on the stage as the widget size.
         * See `gtk_clutter_embed_set_use_layout_size()` for details.
         * @since 1.4
         * @default false
         */
        get useLayoutSize(): boolean;
        set useLayoutSize(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Embed.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Embed.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Embed;

        // Signals
        /** @signal */
        connect<K extends keyof Embed.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Embed.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Embed.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Embed.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Embed.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Embed.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the {@link Clutter.Stage} from `embed`. The returned stage can be
         * used to add actors to the Clutter scene.
         * @returns the Clutter stage. You should never   destroy or unref the returned actor.
         */
        get_stage(): Clutter.Actor;

        /**
         * Retrieves whether the embedding uses the layout size, see
         * `gtk_clutter_embed_set_use_layout_size()` for details.
         * @returns `true` if reporting stage size as widget size, `false` otherwise.
         */
        get_use_layout_size(): boolean;

        /**
         * Changes the way `embed` requests size. If `use_layout_size` is
         * `true`, the `embed` widget will request the size that the
         * LayoutManager reports as the preferred size. This means that
         * a Gtk+ window will automatically get the natural and minimum
         * toplevel window sizes. This is useful when the contents of the
         * clutter stage is similar to a traditional UI.
         * 
         * If `use_layout_size` is `false` (which is the default) then `embed`
         * will not request any size and its up to the embedder to make sure
         * there is some size (by setting a custom size on the widget or a default
         * size on the toplevel. This makes more sense when using the `embed`
         * as a viewport into a potentially unlimited clutter space.
         * @param use_layout_size a boolean
         */
        set_use_layout_size(use_layout_size: boolean): void;
    }


    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends Clutter.Texture.SignalSignatures {
            "notify::disable-slicing": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::filter-quality": (pspec: GObject.ParamSpec) => void;
            "notify::keep-aspect-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::load-async": (pspec: GObject.ParamSpec) => void;
            "notify::load-data-async": (pspec: GObject.ParamSpec) => void;
            "notify::pick-with-alpha": (pspec: GObject.ParamSpec) => void;
            "notify::pixel-format": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-x": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-y": (pspec: GObject.ParamSpec) => void;
            "notify::sync-size": (pspec: GObject.ParamSpec) => void;
            "notify::tile-waste": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::allocation": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-x": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-y": (pspec: GObject.ParamSpec) => void;
            "notify::background-color": (pspec: GObject.ParamSpec) => void;
            "notify::background-color-set": (pspec: GObject.ParamSpec) => void;
            "notify::child-transform": (pspec: GObject.ParamSpec) => void;
            "notify::child-transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::clip": (pspec: GObject.ParamSpec) => void;
            "notify::clip-rect": (pspec: GObject.ParamSpec) => void;
            "notify::clip-to-allocation": (pspec: GObject.ParamSpec) => void;
            "notify::constraints": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::content-box": (pspec: GObject.ParamSpec) => void;
            "notify::content-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::content-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::depth": (pspec: GObject.ParamSpec) => void;
            "notify::effect": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-position-set": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-x": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-y": (pspec: GObject.ParamSpec) => void;
            "notify::has-clip": (pspec: GObject.ParamSpec) => void;
            "notify::has-pointer": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::magnification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::min-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::min-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::minification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::offscreen-redirect": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point-z": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::reactive": (pspec: GObject.ParamSpec) => void;
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::request-mode": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-zgravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::show-on-set-parent": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text-direction": (pspec: GObject.ParamSpec) => void;
            "notify::transform": (pspec: GObject.ParamSpec) => void;
            "notify::transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::x-align": (pspec: GObject.ParamSpec) => void;
            "notify::x-expand": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::y-align": (pspec: GObject.ParamSpec) => void;
            "notify::y-expand": (pspec: GObject.ParamSpec) => void;
            "notify::z-position": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Clutter.Texture.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Clutter.Animatable.ConstructorProps, Clutter.Container.ConstructorProps, Clutter.Scriptable.ConstructorProps {}
    }

    /**
     * The <structname>GtkClutterTexture</structname> structure contains
     * only private data and should be accessed using the provided API.
     * @gir-type Class
     * @since 1.0
     */
    class Texture extends Clutter.Texture implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
        static $gtype: GObject.GType<Texture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Texture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Texture;

        // Signals
        /** @signal */
        connect<K extends keyof Texture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Texture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Texture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Texture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        /**
         * Sets the contents of `texture` using the `icon_name` from the
         * current icon theme.
         * @param widget a {@link Gtk.Widget} or `null`
         * @param icon_name the name of the icon
         * @param icon_size the icon size or -1
         * @returns `true` on success, `false` on failure
         */
        set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean;

        /**
         * Sets the contents of `texture` with a copy of `pixbuf`.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf}
         * @returns `true` on success, `false` on failure.
         */
        set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;

        /**
         * Sets the contents of `texture` using the stock icon `stock_id`, as
         * rendered by `widget`.
         * @param widget a {@link Gtk.Widget}
         * @param stock_id the stock id of the icon
         * @param icon_size the size of the icon, or -1
         * @returns `true` on success, `false` on failure.
         */
        set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * A {@link Gtk.Window} containing a {@link Clutter.Stage}.
     * 
     * The <structname>GtkClutterWindow</structname> structure contains only
     * private data and it should be accessed using the provided API.
     * @gir-type Class
     */
    class Window extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Window>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Window;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the {@link Clutter.Stage} that this window is embedding
         * 
         * Use this function if you wish to add other actors to the {@link Clutter.Stage}.
         * @returns the window's {@link Clutter.Stage}
         */
        get_stage(): Clutter.Actor;
    }


    /**
     * @gir-type Alias
     */
    type ActorClass = typeof Actor;

    /**
     * @gir-type Struct
     */
    abstract class ActorPrivate {
        static $gtype: GObject.GType<ActorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EmbedClass = typeof Embed;

    /**
     * @gir-type Struct
     */
    abstract class EmbedPrivate {
        static $gtype: GObject.GType<EmbedPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TextureClass = typeof Texture;

    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Struct
     */
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
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

export default GtkClutter;

// END
