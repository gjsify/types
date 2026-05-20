
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

export namespace Casilda {

    /**
     * Casilda-1.0
     */


    /**
     * casilda major version component (e.g. 1 if `CASILDA_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;

    /**
     * casilda micro version component (e.g. 3 if `CASILDA_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;

    /**
     * casilda minor version component (e.g. 2 if `CASILDA_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;

    /**
     * casilda version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;

    namespace Compositor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            socket: string;
        }
    }

    /**
     * A simple Wayland compositor widget for Gtk 4.
     * 
     * It was originally created for Cambalache's workspace using (wlroots)[https://gitlab.freedesktop.org/wlroots/wlroots],
     * a modular library to create Wayland compositors.
     * 
     * Following Wayland tradition, this library is named after my hometown in Santa Fe, Argentina.
     * 
     * To embed another process window in your Gtk 4 application all you have to do is create a CasildaCompositor widget
     * and add it in the hierarchy just like any other widget.
     * 
     * You can specify which UNIX socket the compositor will listen for clients connections or use
     * {@link Casilda.Compositor.get_client_socket_fd} to get a already connected socket to the compositor.
     * 
     * ```c
     * compositor = casilda_compositor_new ("/tmp/casilda-example.sock");
     * gtk_window_set_child (GTK_WINDOW (window), GTK_WIDGET (compositor));
     * ```
     * 
     * Once the compositor is running you can connect to it by specifying the socket in WAYLAND_DISPLAY environment variable.
     * 
     * ```bash
     * export GDK_BACKEND=wayland
     * export WAYLAND_DISPLAY=/tmp/casilda-example.sock
     * gtk4-demo
     * ```
     * 
     * If you do not want any client being able to connect to the compositor you can pass NULL as socket and spawn the client
     * with {@link Casilda.Compositor.spawn_async} or get an already connected socket with
     * {@link Casilda.Compositor.get_client_socket_fd} and pass it to the client on WAYLAND_SOCKET env variable.
     * 
     * ```c
     * compositor = casilda_compositor_new (NULL);
     * gtk_window_set_child (GTK_WINDOW (window), GTK_WIDGET (compositor));
     * gtk_window_present (GTK_WINDOW (window));
     * 
     * gchar *argv[] = { "/usr/bin/gtk4-demo", NULL };
     * casilda_compositor_spawn_async (compositor, NULL, argv, NULL, G_SPAWN_DEFAULT, NULL, NULL, NULL, NULL);
     * ```
     * @gir-type Class
     */
    class Compositor extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
        static $gtype: GObject.GType<Compositor>;

        // Properties
        /**
         * Wayland socket the compositor will listen on.
         * 
         * If NULL you can still use WAYLAND_SOCKET with an fd returned by
         * `casilda_compositor_get_client_socket_fd()` instead of setting up WAYLAND_DISPLAY.
         * @construct-only
         * @default null
         */
        get socket(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Compositor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Compositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](socket: string): Compositor;

        // Signals
        /** @signal */
        connect<K extends keyof Compositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Compositor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Compositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Compositor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Compositor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Compositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Create a client socket file descriptor connected to this compositor ready to use by passing it to a client with
         * WAYLAND_SOCKET environment variable.
         * Once the returned FD is passed to the client it must be closed on the parent otherwise the client windows
         * wont get destroyed if the client looses the connection to the server.
         * @returns a socket FD connected to the compositor
         */
        get_client_socket_fd(): number;

        /**
         * @param scrollable 
         */
        set_scrollable(scrollable: boolean): void;

        /**
         * Executes a child program asynchronously with the right environment to automatically connect to this compositor.
         * 
         * See {@link GLib.spawn_async_with_pipes_and_fds} for a full description; this function simply calls
         * {@link GLib.spawn_async_with_pipes_and_fds} without any pipes and with WAYLAND_DISPLAY set to `Casilda.Compositor::socket` or
         * a fd already connected to the compositor and set to WAYLAND_SOCKET if its NULL.
         * 
         * Please note GDK_BACKEND, WAYLAND_DISPLAY and WAYLAND_SOCKET are set by this function they are ignored from %envp and
         * DISPLAY is removed to avoid clients try to connect using X11
         * @param working_directory child's current working directory, or `null` to inherit parent's
         * @param argv child's argument vector
         * @param envp child's environment, or `null` to inherit parent's
         * @param flags flags from {@link GLib.SpawnFlags}
         * @param child_setup function to run in the child just before `exec()`
         * @returns TRUE on success, FALSE if error is set.
         */
        spawn_async(working_directory: string | null, argv: string[], envp: string[] | null, flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null): [boolean, GLib.Pid | null];

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget.
         * 
         * This adjustment is shared between the scrollable widget and its parent.
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment | null;
        set hadjustment(val: Gtk.Adjustment | null);

        /**
         * Determines when horizontal scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines when horizontal scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Vertical {@link Gtk.Adjustment} of the scrollable widget.
         * 
         * This adjustment is shared between the scrollable widget and its parent.
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment | null;
        set vadjustment(val: Gtk.Adjustment | null);

        /**
         * Determines when vertical scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines when vertical scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         * 
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment | null;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment | null;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy}.
         * 
         * The policy determines whether horizontal scrolling should start
         * below the minimum width or below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy}.
         * 
         * The policy determines whether vertical scrolling should start
         * below the minimum height or below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         * 
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    /**
     * @gir-type Alias
     */
    type CompositorClass = typeof Compositor;

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

export default Casilda;

// END
