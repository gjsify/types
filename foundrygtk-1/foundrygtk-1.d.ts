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
import type Peas from '@girs/peas-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-5';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Foundry from '@girs/foundry-1';
import type Dex from '@girs/dex-1';

export namespace FoundryGtk {
    /**
     * FoundryGtk-1
     */

    function gtk_init(): void;
    /**
     * Calls `func` for every shortcut info. Accelerators come from
     * `shortcuts` by matching action and target.
     * @param shortcuts a {@link Gio.ListModel} of {@link Gtk.Shortcut}
     * @param func a callback for each shortcut info
     */
    function shortcut_info_foreach(shortcuts: Gio.ListModel, func: ShortcutInfoFunc): void;
    /**
     * @gir-type Callback
     */
    interface ShortcutInfoFunc {
        (info: ShortcutInfo): void;
    }
    namespace ChangesGutterRenderer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.GutterRenderer.SignalSignatures {
            'notify::show-overview': (pspec: GObject.ParamSpec) => void;
            'notify::alignment-mode': (pspec: GObject.ParamSpec) => void;
            'notify::lines': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GtkSource.GutterRenderer.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            show_overview: boolean;
            showOverview: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ChangesGutterRenderer
        extends GtkSource.GutterRenderer
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<ChangesGutterRenderer>;

        // Properties

        /**
         * @default false
         */
        get show_overview(): boolean;
        set show_overview(val: boolean);
        /**
         * @default false
         */
        get showOverview(): boolean;
        set showOverview(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChangesGutterRenderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ChangesGutterRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ChangesGutterRenderer;

        // Signals

        /** @signal */
        connect<K extends keyof ChangesGutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChangesGutterRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ChangesGutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChangesGutterRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ChangesGutterRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ChangesGutterRenderer.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_show_overview(): boolean;
        /**
         * @param show_overview
         */
        set_show_overview(show_overview: boolean): void;
    }

    namespace DiagnosticsGutterRenderer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.GutterRenderer.SignalSignatures {
            'notify::diagnostics': (pspec: GObject.ParamSpec) => void;
            'notify::alignment-mode': (pspec: GObject.ParamSpec) => void;
            'notify::lines': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GtkSource.GutterRenderer.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            diagnostics: Foundry.OnTypeDiagnostics;
        }
    }

    /**
     * @gir-type Class
     */
    class DiagnosticsGutterRenderer
        extends GtkSource.GutterRenderer
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<DiagnosticsGutterRenderer>;

        // Properties

        get diagnostics(): Foundry.OnTypeDiagnostics;
        set diagnostics(val: Foundry.OnTypeDiagnostics);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiagnosticsGutterRenderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiagnosticsGutterRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](diagnostics: Foundry.OnTypeDiagnostics): DiagnosticsGutterRenderer;

        // Signals

        /** @signal */
        connect<K extends keyof DiagnosticsGutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiagnosticsGutterRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiagnosticsGutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiagnosticsGutterRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiagnosticsGutterRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiagnosticsGutterRenderer.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_diagnostics(): Foundry.OnTypeDiagnostics | null;
        /**
         * @param diagnostics
         */
        set_diagnostics(diagnostics: Foundry.OnTypeDiagnostics): void;
    }

    namespace MarkupView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MarkupView extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<MarkupView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MarkupView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MarkupView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](markup: Foundry.Markup): MarkupView;

        // Signals

        /** @signal */
        connect<K extends keyof MarkupView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkupView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MarkupView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkupView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MarkupView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MarkupView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a {@link Foundry.Markup}
         */
        dup_markup(): Foundry.Markup;
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
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
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
    }

    namespace MenuManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The goal of {@link FoundryGtk.MenuManager} is to simplify the process of merging multiple
     * GtkBuilder .ui files containing menus into a single representation of the
     * application menus. Additionally, it provides the ability to "unmerge"
     * previously merged menus.
     *
     * This allows for an application to have plugins which seemlessly extends
     * the core application menus.
     *
     * Implementation notes:
     *
     * To make this work, we don't use the GMenu instances created by a GtkBuilder
     * instance. Instead, we create the menus ourself and recreate section and
     * submenu links. This allows the {@link FoundryGtk.MenuManager} to be in full control of
     * the generated menus.
     *
     * `foundry_menu_manager_get_menu_by_id()` will always return a {@link Gio.Menu}, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     * @gir-type Class
     */
    class MenuManager extends GObject.Object {
        static $gtype: GObject.GType<MenuManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MenuManager;

        // Signals

        /** @signal */
        connect<K extends keyof MenuManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): MenuManager;

        // Methods

        /**
         * @param filename
         */
        add_filename(filename: string): number;
        /**
         * @param resource
         * @returns the merge id
         */
        add_resource(resource: string): number;
        /**
         * Locates a menu item that matches `id` and sets the position within
         * the resulting {@link Gio.Menu} to `position`.
         *
         * If no match is found, `null` is returned.
         * @param id the identifier of the menu item
         * @returns a {@link Gio.Menu} if successful; otherwise   `null` and `position` is unset.
         */
        find_item_by_id(id: string): [Gio.Menu | null, number];
        /**
         * @param menu_id
         * @returns A {@link Gio.Menu}.
         */
        get_menu_by_id(menu_id: string): Gio.Menu;
        /**
         * Gets the known menu ids as a string array.
         */
        get_menu_ids(): string[];
        /**
         * Note that `menu_model` is not retained, a copy of it is made.
         * @param menu_id the identifier of the menu
         * @param menu_model the menu model to merge
         * @returns the merge-id which can be used with `foundry_menu_manager_remove()`
         */
        merge(menu_id: string, menu_model: Gio.MenuModel): number;
        /**
         * This removes items from menus that were added as part of a previous
         * menu merge. Use the value returned from `foundry_menu_manager_merge()` as
         * the `merge_id`.
         * @param merge_id A previously registered merge id
         */
        remove(merge_id: number): void;
        /**
         * Overwrites an attribute for a menu that was created by
         * {@link FoundryGtk.MenuManager}.
         *
         * This can be useful when you want to update an attribute such as
         * "accel" when an accelerator has changed due to user mappings.
         * @param menu the menu that was retreived with `foundry_menu_manager_get_menu_by_id()`
         * @param position the index of the item in the menu
         * @param attribute the attribute to change
         * @param value the new value for the attribute
         */
        set_attribute_string(menu: Gio.Menu, position: number, attribute: string, value: string): void;
    }

    namespace MenuProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.MenuModel.SignalSignatures {
            'notify::menu-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.MenuModel.ConstructorProps {
            menu_id: string;
            menuId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuProxy extends Gio.MenuModel {
        static $gtype: GObject.GType<MenuProxy>;

        // Properties

        /**
         * @default null
         */
        get menu_id(): string;
        set menu_id(val: string);
        /**
         * @default null
         */
        get menuId(): string;
        set menuId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](menu_id: string): MenuProxy;

        // Signals

        /** @signal */
        connect<K extends keyof MenuProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_menu_id(): string;
        /**
         * @param menu_id
         */
        set_menu_id(menu_id: string): void;
    }

    namespace ShortcutBundle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ShortcutBundle<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ShortcutBundle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShortcutBundle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShortcutBundle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ShortcutBundle;

        static new_for_user(file: Gio.File): ShortcutBundle;

        // Signals

        /** @signal */
        connect<K extends keyof ShortcutBundle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutBundle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ShortcutBundle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutBundle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ShortcutBundle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShortcutBundle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        error(): GLib.Error;
        /**
         * @param shortcut_id
         * @param accelerator
         */
        override(shortcut_id: string, accelerator: string): boolean;
        /**
         * @param id_to_trigger
         */
        override_triggers(id_to_trigger: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * @param file
         */
        parse(file: Gio.File): boolean;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }

    namespace ShortcutManager {
        // Signal signatures
        interface SignalSignatures extends Foundry.Service.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends
                Foundry.Service.ConstructorProps,
                Gio.ListModel.ConstructorProps,
                Json.Serializable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ShortcutManager<A extends GObject.Object = GObject.Object>
        extends Foundry.Service
        implements Gio.ListModel<A>, Json.Serializable
    {
        static $gtype: GObject.GType<ShortcutManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShortcutManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShortcutManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ShortcutManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ShortcutManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ShortcutManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShortcutManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param resource_path
         */
        static add_resources(resource_path: string): void;
        /**
         * Gets the shortcut manager for the contenxt
         * @param context a {@link Foundry.Context}
         */
        static from_context(context: Foundry.Context): ShortcutManager;
        static get_user_bundle(): ShortcutBundle;
        /**
         * @param resource_path
         */
        static remove_resources(resource_path: string): void;
        /**
         * Reset user modified shortcuts.
         */
        static reset_user(): void;

        // Methods

        get_observer(): ShortcutObserver;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }

    namespace ShortcutObserver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when an action is determined to have been changed
             * by the user or some other mechanism.
             * @signal
             * @detailed
             * @run-last
             */
            'accel-changed': (arg0: string, arg1: string | null) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            /**
             * This signal is emitted when an action is determined to have been changed
             * by the user or some other mechanism.
             * @signal
             * @detailed
             * @run-last
             */
            'accel-changed::model': (arg0: string, arg1: string | null) => void;
            [key: `accel-changed::${string}`]: (arg0: string, arg1: string | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            model: Gio.ListModel;
        }
    }

    /**
     * @gir-type Class
     */
    class ShortcutObserver extends GObject.Object {
        static $gtype: GObject.GType<ShortcutObserver>;

        // Properties

        /**
         * @construct-only
         */
        get model(): Gio.ListModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShortcutObserver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShortcutObserver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: Gio.ListModel): ShortcutObserver;

        // Signals

        /** @signal */
        connect<K extends keyof ShortcutObserver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutObserver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ShortcutObserver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShortcutObserver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ShortcutObserver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShortcutObserver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param action_name
         */
        lookup(action_name: string): string;
    }

    namespace SourceBuffer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::language-id': (pspec: GObject.ParamSpec) => void;
            'notify::override-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-matching-brackets': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::implicit-trailing-newline': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::style-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::can-redo': (pspec: GObject.ParamSpec) => void;
            'notify::can-undo': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::enable-undo': (pspec: GObject.ParamSpec) => void;
            'notify::has-selection': (pspec: GObject.ParamSpec) => void;
            'notify::tag-table': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps, Foundry.TextBuffer.ConstructorProps {
            context: Foundry.Context;
            language_id: string;
            languageId: string;
            override_syntax: string;
            overrideSyntax: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SourceBuffer extends GtkSource.Buffer implements Foundry.TextBuffer {
        static $gtype: GObject.GType<SourceBuffer>;

        // Properties

        /**
         * @construct-only
         */
        get context(): Foundry.Context;
        /**
         * @read-only
         * @default null
         */
        get language_id(): string;
        /**
         * @read-only
         * @default null
         */
        get languageId(): string;
        /**
         * The GtkSourceLanguage identifier of the syntax to use, ignoring any
         * guessed language.
         * @default null
         */
        get override_syntax(): string;
        set override_syntax(val: string);
        /**
         * The GtkSourceLanguage identifier of the syntax to use, ignoring any
         * guessed language.
         * @default null
         */
        get overrideSyntax(): string;
        set overrideSyntax(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Comments the specified text range using the appropriate comment syntax
         * for the current language.
         * @param begin start of the text range to comment
         * @param end end of the text range to comment
         */
        comment(begin: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * @returns a {@link Foundry.Context}
         */
        dup_context(): Foundry.Context;
        dup_override_spelling(): string;
        /**
         * Gets the syntax to be used, overriding any language guessing.
         *
         * `NULL` indicates to use the default guessed syntax.
         */
        dup_override_syntax(): string | null;
        get_enable_spellcheck(): boolean;
        /**
         * @param enable_spellcheck
         */
        set_enable_spellcheck(enable_spellcheck: boolean): void;
        /**
         * @param override_spelling
         */
        set_override_spelling(override_spelling: string): void;
        /**
         * @param override_syntax
         */
        set_override_syntax(override_syntax: string): void;
        /**
         * Removes comment markers from the specified text range.
         * @param begin start of the text range to uncomment
         * @param end end of the text range to uncomment
         */
        uncomment(begin: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Adds a new commit notify handler.
         *
         * If the implementation does not support this, zero is returned.
         * @param flags non-zero flags to dispatch
         * @param commit_notify
         * @returns a non-zero commit handler id if supported; otherwise zero.
         */
        add_commit_notify(flags: Foundry.TextBufferNotifyFlags, commit_notify: Foundry.TextBufferCommitNotify): number;
        /**
         * @param args
         */
        // Conflicted with Gtk.TextBuffer.add_commit_notify
        add_commit_notify(...args: never[]): any;
        /**
         * @param edit
         */
        apply_edit(edit: Foundry.TextEdit): boolean;
        /**
         * Gets the contents of the buffer as a {@link GLib.Bytes}.
         * @returns a {@link GLib.Bytes} or `null`
         */
        dup_contents(): GLib.Bytes | null;
        /**
         * Gets the GtkSourceView-style identifier for the language of the buffer
         * such as "c" or "js".
         */
        dup_language_id(): string | null;
        emit_changed(): void;
        /**
         * Gets the number of changes that have occurred to `buffer`.
         *
         * This is generally just a monotonic number.
         */
        get_change_count(): number;
        /**
         * @param iter
         * @param offset
         */
        get_iter_at_offset(iter: Foundry.TextIter, offset: bigint | number): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.TextBuffer.get_iter_at_offset
        get_iter_at_offset(...args: never[]): any;
        /**
         * @param iter
         */
        get_start_iter(iter: Foundry.TextIter): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.TextBuffer.get_start_iter
        get_start_iter(...args: never[]): any;
        /**
         * Remove a commit notify handler.
         * @param commit_notify_handler the previously registered non-zero commit handler
         */
        remove_commit_notify(commit_notify_handler: number): void;
        /**
         * Gets a {@link Dex.Future} that will resolve after short delay when changes
         * have completed.
         * @returns a {@link Dex.Future}
         */
        settle(): Dex.Future;
        /**
         * Adds a new commit notify handler.
         *
         * If the implementation does not support this, zero is returned.
         * @param flags non-zero flags to dispatch
         * @param commit_notify
         * @virtual
         */
        vfunc_add_commit_notify(
            flags: Foundry.TextBufferNotifyFlags,
            commit_notify: Foundry.TextBufferCommitNotify,
        ): number;
        /**
         * @param edit
         * @virtual
         */
        vfunc_apply_edit(edit: Foundry.TextEdit): boolean;
        /**
         * Gets the contents of the buffer as a {@link GLib.Bytes}.
         * @virtual
         */
        vfunc_dup_contents(): GLib.Bytes | null;
        /**
         * Gets the GtkSourceView-style identifier for the language of the buffer
         * such as "c" or "js".
         * @virtual
         */
        vfunc_dup_language_id(): string | null;
        /**
         * Gets the number of changes that have occurred to `buffer`.
         *
         * This is generally just a monotonic number.
         * @virtual
         */
        vfunc_get_change_count(): bigint | number;
        /**
         * @param iter
         * @virtual
         */
        vfunc_iter_init(iter: Foundry.TextIter): void;
        /**
         * Remove a commit notify handler.
         * @param commit_notify_handler the previously registered non-zero commit handler
         * @virtual
         */
        vfunc_remove_commit_notify(commit_notify_handler: number): void;
        /**
         * Gets a {@link Dex.Future} that will resolve after short delay when changes
         * have completed.
         * @virtual
         */
        vfunc_settle(): Dex.Future;
    }

    namespace SourceView {
        // Signal signatures
        interface SignalSignatures extends GtkSource.View.SignalSignatures {
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::enable-completion': (pspec: GObject.ParamSpec) => void;
            'notify::enable-vim': (pspec: GObject.ParamSpec) => void;
            'notify::font': (pspec: GObject.ParamSpec) => void;
            'notify::line-height': (pspec: GObject.ParamSpec) => void;
            'notify::show-diagnostics': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-changes': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-changes-overview': (pspec: GObject.ParamSpec) => void;
            'notify::vim-im-context': (pspec: GObject.ParamSpec) => void;
            'notify::annotations': (pspec: GObject.ParamSpec) => void;
            'notify::auto-indent': (pspec: GObject.ParamSpec) => void;
            'notify::background-pattern': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::enable-snippets': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-current-line': (pspec: GObject.ParamSpec) => void;
            'notify::indent-on-tab': (pspec: GObject.ParamSpec) => void;
            'notify::indent-width': (pspec: GObject.ParamSpec) => void;
            'notify::indenter': (pspec: GObject.ParamSpec) => void;
            'notify::insert-spaces-instead-of-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin-position': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-marks': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::show-right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::smart-backspace': (pspec: GObject.ParamSpec) => void;
            'notify::smart-home-end': (pspec: GObject.ParamSpec) => void;
            'notify::space-drawer': (pspec: GObject.ParamSpec) => void;
            'notify::tab-width': (pspec: GObject.ParamSpec) => void;
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::extra-menu': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GtkSource.View.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.AccessibleText.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            document: Foundry.TextDocument;
            enable_completion: boolean;
            enableCompletion: boolean;
            enable_vim: boolean;
            enableVim: boolean;
            font: Pango.FontDescription;
            line_height: number;
            lineHeight: number;
            show_diagnostics: boolean;
            showDiagnostics: boolean;
            show_line_changes: boolean;
            showLineChanges: boolean;
            show_line_changes_overview: boolean;
            showLineChangesOverview: boolean;
            vim_im_context: Gtk.IMContext | null;
            vimImContext: Gtk.IMContext | null;
        }
    }

    /**
     * @gir-type Class
     */
    class SourceView
        extends GtkSource.View
        implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable
    {
        static $gtype: GObject.GType<SourceView>;

        // Properties

        /**
         * @construct-only
         */
        get document(): Foundry.TextDocument;
        /**
         * @default true
         */
        get enable_completion(): boolean;
        set enable_completion(val: boolean);
        /**
         * @default true
         */
        get enableCompletion(): boolean;
        set enableCompletion(val: boolean);
        /**
         * @default false
         */
        get enable_vim(): boolean;
        set enable_vim(val: boolean);
        /**
         * @default false
         */
        get enableVim(): boolean;
        set enableVim(val: boolean);
        get font(): Pango.FontDescription;
        set font(val: Pango.FontDescription);
        /**
         * Specify a non-default line height for text within the editor.
         * Some applications use this for improved readability.
         * @default 1
         */
        get line_height(): number;
        set line_height(val: number);
        /**
         * Specify a non-default line height for text within the editor.
         * Some applications use this for improved readability.
         * @default 1
         */
        get lineHeight(): number;
        set lineHeight(val: number);
        /**
         * Shows the line changes on the left-hand side of the editor (when in LTR
         * direction) for each line in the editor. If the line is changed or added,
         * it will be drawn as a different color.
         * @default false
         */
        get show_diagnostics(): boolean;
        set show_diagnostics(val: boolean);
        /**
         * Shows the line changes on the left-hand side of the editor (when in LTR
         * direction) for each line in the editor. If the line is changed or added,
         * it will be drawn as a different color.
         * @default false
         */
        get showDiagnostics(): boolean;
        set showDiagnostics(val: boolean);
        /**
         * Shows the line changes on the left-hand side of the editor (when in LTR
         * direction) for each line in the editor. If the line is changed or added,
         * it will be drawn as a different color.
         * @default false
         */
        get show_line_changes(): boolean;
        set show_line_changes(val: boolean);
        /**
         * Shows the line changes on the left-hand side of the editor (when in LTR
         * direction) for each line in the editor. If the line is changed or added,
         * it will be drawn as a different color.
         * @default false
         */
        get showLineChanges(): boolean;
        set showLineChanges(val: boolean);
        /**
         * Shows the line changes on the right-hand side of the editor (when in LTR
         * direction) but as an overview of the entire document. This can give some
         * insight as to where in the document other changes are.
         * @default false
         */
        get show_line_changes_overview(): boolean;
        set show_line_changes_overview(val: boolean);
        /**
         * Shows the line changes on the right-hand side of the editor (when in LTR
         * direction) but as an overview of the entire document. This can give some
         * insight as to where in the document other changes are.
         * @default false
         */
        get showLineChangesOverview(): boolean;
        set showLineChangesOverview(val: boolean);
        /**
         * Gets the IM context used for vim emulation.
         * @read-only
         */
        get vim_im_context(): Gtk.IMContext | null;
        /**
         * Gets the IM context used for vim emulation.
         * @read-only
         */
        get vimImContext(): Gtk.IMContext | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](document: Foundry.TextDocument): SourceView;
        // Conflicted with GtkSource.View.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof SourceView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param menu
         */
        append_menu(menu: Gio.MenuModel): void;
        /**
         * @returns the {@link Foundry.Context} of the document
         */
        dup_context(): Foundry.Context | null;
        dup_document(): Foundry.TextDocument | null;
        dup_font(): Pango.FontDescription;
        get_enable_completion(): boolean;
        get_enable_vim(): boolean;
        get_line_height(): number;
        get_show_diagnostics(): boolean;
        get_show_line_changes(): boolean;
        get_show_line_changes_overview(): boolean;
        /**
         * This may return `null` when Vim emulation is not in use.
         */
        get_vim_im_context(): Gtk.IMContext | null;
        /**
         * @param line
         * @param line_column
         */
        get_visual_position(line: number, line_column: number): void;
        /**
         * @param line
         * @param line_column
         * @param range
         */
        get_visual_position_range(line: number, line_column: number, range: number): void;
        /**
         * The goal of this function is to be like `gtk_text_view_scroll_to_iter()` but
         * without any of the scrolling animation. We use it to move to a position
         * when animations would cause additional distractions.
         * @param iter
         * @param within_margin
         * @param use_align
         * @param xalign
         * @param yalign
         */
        jump_to_iter(
            iter: Gtk.TextIter,
            within_margin: number,
            use_align: boolean,
            xalign: number,
            yalign: number,
        ): void;
        /**
         * @param menu
         */
        remove_menu(menu: Gio.MenuModel): void;
        /**
         * Uses the active {@link Foundry.RenameProvider} to semantically rename the
         * word found at `iter` with `new_name`.
         * @param iter the location of the semantic word to rename
         * @param new_name the name for the replacement
         * @returns a {@link Dex.Future} that resolves to a   {@link Gio.ListModel} of {@link Foundry.TextEdit}.
         */
        rename(iter: Gtk.TextIter, new_name: string): Dex.Future;
        /**
         * @param enable_completion
         */
        set_enable_completion(enable_completion: boolean): void;
        /**
         * @param enable_vim
         */
        set_enable_vim(enable_vim: boolean): void;
        /**
         * @param font
         */
        set_font(font: Pango.FontDescription): void;
        /**
         * @param line_height
         */
        set_line_height(line_height: number): void;
        /**
         * @param show_diagnostics
         */
        set_show_diagnostics(show_diagnostics: boolean): void;
        /**
         * @param show_line_changes
         */
        set_show_line_changes(show_line_changes: boolean): void;
        /**
         * @param show_line_changes_overview
         */
        set_show_line_changes_overview(show_line_changes_overview: boolean): void;
    }

    namespace SourceViewAddin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::vie': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            vie: SourceView;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class SourceViewAddin extends GObject.Object {
        static $gtype: GObject.GType<SourceViewAddin>;

        // Properties

        /**
         * @read-only
         */
        get vie(): SourceView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceViewAddin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceViewAddin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SourceViewAddin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceViewAddin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceViewAddin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceViewAddin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceViewAddin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceViewAddin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets teh view for the addin.
         *
         * This will always be `null` before load has been called and after
         * unload has been called.
         */
        get_view(): SourceView | null;
    }

    namespace Terminal {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::palette': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.AccessibleText.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            palette: TerminalPalette | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Terminal
        extends Gtk.Widget
        implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable
    {
        static $gtype: GObject.GType<Terminal>;

        // Properties

        get palette(): TerminalPalette | null;
        set palette(val: TerminalPalette | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Terminal.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Terminal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Terminal;

        // Signals

        /** @signal */
        connect<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Terminal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Tries to locate a palette by name.
         * @param name the palette name
         */
        static find_palette_set(name: string): Dex.Future;
        /**
         * Lists available palettes known to Foundry.
         */
        static list_palette_sets(): Dex.Future;

        // Methods

        get_palette(): TerminalPalette | null;
        /**
         * @param palette
         */
        set_palette(palette: TerminalPalette): void;
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
         * Updates the position of the caret.
         *
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time the caret has moved, in order to notify assistive
         * technologies.
         */
        update_caret_position(): void;
        /**
         * Notifies assistive technologies of a change in contents.
         *
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time their contents change as the result of an operation,
         * like an insertion or a removal.
         *
         * Note: If the change is a deletion, this function must be called *before*
         * removing the contents, if it is an insertion, it must be called *after*
         * inserting the new contents.
         * @param change the type of change in the contents
         * @param start the starting offset of the change, in characters
         * @param end the end offset of the change, in characters
         */
        update_contents(change: Gtk.AccessibleTextContentChange, start: number, end: number): void;
        /**
         * Updates the boundary of the selection.
         *
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time the selection has moved, in order to notify assistive
         * technologies.
         */
        update_selection_bound(): void;
        /**
         * Retrieves the text attributes inside the accessible object.
         *
         * Each attribute is composed by:
         *
         * - a range
         * - a name
         * - a value
         *
         * It is left to the implementation to determine the serialization format
         * of the value to a string.
         *
         * GTK provides support for various text attribute names and values, but
         * implementations of this interface are free to add their own attributes.
         *
         * If this function returns true, `n_ranges` will be set to a value
         * greater than or equal to one, `ranges` will be set to a newly
         * allocated array of [struct#Gtk.AccessibleTextRange].
         * @param offset the offset, in characters
         * @virtual
         */
        vfunc_get_attributes(
            offset: number,
        ): [boolean, Gtk.AccessibleTextRange[] | null, string[] | null, string[] | null];
        /**
         * Retrieves the position of the caret inside the accessible object.
         * @virtual
         */
        vfunc_get_caret_position(): number;
        /**
         * Retrieve the current contents of the accessible object within
         * the given range.
         *
         * If `end` is `G_MAXUINT`, the end of the range is the full content
         * of the accessible object.
         * @param start the beginning of the range, in characters
         * @param end the end of the range, in characters
         * @virtual
         */
        vfunc_get_contents(start: number, end: number): GLib.Bytes | Uint8Array;
        /**
         * Retrieve the current contents of the accessible object starting
         * from the given offset, and using the given granularity.
         *
         * The `start` and `end` values contain the boundaries of the text.
         * @param offset the offset, in characters
         * @param granularity the granularity of the query
         * @virtual
         */
        vfunc_get_contents_at(
            offset: number,
            granularity: Gtk.AccessibleTextGranularity,
        ): [GLib.Bytes | Uint8Array, number, number];
        /**
         * Retrieves the default text attributes inside the accessible object.
         *
         * Each attribute is composed by:
         *
         * - a name
         * - a value
         *
         * It is left to the implementation to determine the serialization format
         * of the value to a string.
         *
         * GTK provides support for various text attribute names and values, but
         * implementations of this interface are free to add their own attributes.
         * @virtual
         */
        vfunc_get_default_attributes(): [string[] | null, string[] | null];
        /**
         * Obtains the extents of a range of text, in widget coordinates.
         * @param start the start offset, in characters
         * @param end the end offset, in characters, `extents` (out caller-allocates): return location for the extents
         * @param extents
         * @virtual
         */
        vfunc_get_extents(start: number, end: number, extents: Graphene.Rect): boolean;
        /**
         * Gets the text offset at a given point.
         * @param point a point in widget coordinates of `self`
         * @virtual
         */
        vfunc_get_offset(point: Graphene.Point): [boolean, number];
        /**
         * Retrieves the selection ranges in the accessible object.
         *
         * If this function returns true, `n_ranges` will be set to a value
         * greater than or equal to one, and `ranges` will be set to a newly
         * allocated array of [struct#Gtk.AccessibleTextRange].
         * @virtual
         */
        vfunc_get_selection(): [boolean, Gtk.AccessibleTextRange[] | null];
        /**
         * Sets the caret position.
         * @param offset the text offset in characters
         * @virtual
         */
        vfunc_set_caret_position(offset: number): boolean;
        /**
         * Sets the caret position.
         * @param i the selection to set
         * @param range the range to set the selection to
         * @virtual
         */
        vfunc_set_selection(i: number, range: Gtk.AccessibleTextRange): boolean;
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
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
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

    namespace TerminalPalette {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class TerminalPalette extends GObject.Object {
        static $gtype: GObject.GType<TerminalPalette>;

        // Properties

        /**
         * @read-only
         * @default null
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TerminalPalette.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TerminalPalette.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TerminalPalette;

        // Signals

        /** @signal */
        connect<K extends keyof TerminalPalette.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TerminalPalette.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TerminalPalette.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TerminalPalette.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TerminalPalette.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TerminalPalette.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_background(): Gdk.RGBA;
        /**
         * @param palette_length
         */
        get_colors(palette_length: number): Gdk.RGBA;
        get_cursor_background(): Gdk.RGBA;
        get_cursor_foreground(): Gdk.RGBA;
        get_foreground(): Gdk.RGBA;
    }

    namespace TerminalPaletteSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dark': (pspec: GObject.ParamSpec) => void;
            'notify::light': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dark: TerminalPalette;
            light: TerminalPalette;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class TerminalPaletteSet extends GObject.Object {
        static $gtype: GObject.GType<TerminalPaletteSet>;

        // Properties

        /**
         * @read-only
         */
        get dark(): TerminalPalette;
        /**
         * @read-only
         */
        get light(): TerminalPalette;
        /**
         * @read-only
         * @default null
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TerminalPaletteSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TerminalPaletteSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bytes: GLib.Bytes | Uint8Array): TerminalPaletteSet;

        // Signals

        /** @signal */
        connect<K extends keyof TerminalPaletteSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TerminalPaletteSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TerminalPaletteSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TerminalPaletteSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TerminalPaletteSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TerminalPaletteSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_dark(): TerminalPalette;
        dup_light(): TerminalPalette;
        dup_title(): string;
    }

    /**
     * @gir-type Alias
     */
    type ChangesGutterRendererClass = typeof ChangesGutterRenderer;
    /**
     * @gir-type Alias
     */
    type DiagnosticsGutterRendererClass = typeof DiagnosticsGutterRenderer;
    /**
     * @gir-type Alias
     */
    type MarkupViewClass = typeof MarkupView;
    /**
     * @gir-type Alias
     */
    type MenuManagerClass = typeof MenuManager;
    /**
     * @gir-type Alias
     */
    type MenuProxyClass = typeof MenuProxy;
    /**
     * @gir-type Alias
     */
    type ShortcutBundleClass = typeof ShortcutBundle;
    /**
     * @gir-type Struct
     */
    abstract class ShortcutInfo {
        static $gtype: GObject.GType<ShortcutInfo>;

        // Static methods

        /**
         * Calls `func` for every shortcut info. Accelerators come from
         * `shortcuts` by matching action and target.
         * @param shortcuts a {@link Gio.ListModel} of {@link Gtk.Shortcut}
         * @param func a callback for each shortcut info
         */
        static foreach(shortcuts: Gio.ListModel, func: ShortcutInfoFunc): void;

        // Methods

        get_accelerator(): string;
        get_action_name(): string;
        /**
         * @returns a {@link GLib.Variant} or `null`
         */
        get_action_target(): GLib.Variant | null;
        get_group(): string;
        get_icon_name(): string;
        get_id(): string;
        get_page(): string;
        get_subtitle(): string;
        get_title(): string;
    }

    /**
     * @gir-type Alias
     */
    type ShortcutManagerClass = typeof ShortcutManager;
    /**
     * @gir-type Alias
     */
    type ShortcutObserverClass = typeof ShortcutObserver;
    /**
     * @gir-type Alias
     */
    type ShortcutProviderInterface = typeof ShortcutProvider;
    /**
     * @gir-type Alias
     */
    type SourceBufferClass = typeof SourceBuffer;
    /**
     * @gir-type Alias
     */
    type SourceViewAddinClass = typeof SourceViewAddin;
    /**
     * @gir-type Alias
     */
    type SourceViewClass = typeof SourceView;
    /**
     * @gir-type Alias
     */
    type TerminalClass = typeof Terminal;
    /**
     * @gir-type Alias
     */
    type TerminalPaletteClass = typeof TerminalPalette;
    /**
     * @gir-type Alias
     */
    type TerminalPaletteSetClass = typeof TerminalPaletteSet;
    namespace ShortcutProvider {
        /**
         * Interface for implementing ShortcutProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets a {@link Gio.ListModel} of {@link Gtk.Shortcut}.
             *
             * This function should return a {@link Gio.ListModel} of {@link Gtk.Shortcut} that are updated
             * as necessary by the plugin. This list model is used to activate shortcuts
             * based on user input and allows more control by plugins over when and how
             * shortcuts may activate.
             * @virtual
             */
            vfunc_list_shortcuts(): Gio.ListModel;
        }

        // Constructor properties interface

        interface ConstructorProps extends Foundry.Contextual.ConstructorProps {}
    }

    export interface ShortcutProviderNamespace {
        $gtype: GObject.GType<ShortcutProvider>;
        prototype: ShortcutProvider;
    }
    /**
     * @gir-type Interface
     */
    interface ShortcutProvider extends Foundry.Contextual, ShortcutProvider.Interface {
        // Methods

        /**
         * Gets a {@link Gio.ListModel} of {@link Gtk.Shortcut}.
         *
         * This function should return a {@link Gio.ListModel} of {@link Gtk.Shortcut} that are updated
         * as necessary by the plugin. This list model is used to activate shortcuts
         * based on user input and allows more control by plugins over when and how
         * shortcuts may activate.
         * @returns A {@link Gio.ListModel} of {@link Gtk.Shortcut}
         */
        list_shortcuts(): Gio.ListModel;
    }

    export const ShortcutProvider: ShortcutProviderNamespace & {
        new (): ShortcutProvider; // This allows `obj instanceof ShortcutProvider`
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

export default FoundryGtk;

// END
