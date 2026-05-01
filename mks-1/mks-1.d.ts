
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

export namespace Mks {

    /**
     * Mks-1
     */


    /**
     * @gir-type Enum
     */
    export namespace MouseButton {
        export const $gtype: GObject.GType<MouseButton>;
    }

    /**
     * A mouse button.
     * @gir-type Enum
     */
    enum MouseButton {
        /**
         * Left button.
         */
        LEFT,
        /**
         * Middle button.
         */
        MIDDLE,
        /**
         * Right button.
         */
        RIGHT,
        /**
         * Wheel-up button.
         */
        WHEEL_UP,
        /**
         * Wheel-down button.
         */
        WHEEL_DOWN,
        /**
         * Side button.
         */
        SIDE,
        /**
         * Extra button.
         */
        EXTRA,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScreenKind {
        export const $gtype: GObject.GType<ScreenKind>;
    }

    /**
     * A screen kind.
     * @gir-type Enum
     */
    enum ScreenKind {
        /**
         * A text only screen.
         */
        TEXT,
        /**
         * A graphical screen.
         */
        GRAPHIC,
    }


    /**
     * @gir-type Enum
     */
    export namespace TouchEventKind {
        export const $gtype: GObject.GType<TouchEventKind>;
    }

    /**
     * The type of a touch event.
     * @gir-type Enum
     */
    enum TouchEventKind {
        /**
         * The touch event has just started.
         */
        BEGIN,
        /**
         * The touch event has been updated.
         */
        UPDATE,
        /**
         * The touch event has finished.
         */
        END,
        /**
         * The touch event has been canceled.
         */
        CANCEL,
    }


    /**
     * mks major version component (e.g. 1 if `MKS_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;

    /**
     * mks micro version component (e.g. 3 if `MKS_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;

    /**
     * mks minor version component (e.g. 2 if `MKS_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;

    /**
     * mks version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;

    /**
     * The major version the library.
     */
    function get_major_version(): number;

    /**
     * The micro version the library.
     */
    function get_micro_version(): number;

    /**
     * The minor version the library.
     */
    function get_minor_version(): number;

    /**
     * Initializes the library.
     * 
     * The function must be called before using any of the library functions.
     */
    function init(): void;

    /**
     * @gir-type Flags
     */
    export namespace KeyboardModifier {
        export const $gtype: GObject.GType<KeyboardModifier>;
    }

    /**
     * The active keyboard modifiers.
     * @gir-type Flags
     */
    enum KeyboardModifier {
        /**
         * No modifier.
         */
        NONE,
        /**
         * Scroll lock.
         */
        SCROLL_LOCK,
        /**
         * Numeric lock.
         */
        NUM_LOCK,
        /**
         * Caps lock.
         */
        CAPS_LOCK,
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * An abstraction of a virtualized QEMU device.
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * The device name.
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the device name.
         */
        get_name(): string;
    }


    namespace Display {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::auto-resize": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::ungrab-trigger": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            auto_resize: boolean;
            autoResize: boolean;
            screen: Screen;
            ungrab_trigger: Gtk.ShortcutTrigger;
            ungrabTrigger: Gtk.ShortcutTrigger;
        }
    }

    /**
     * @gir-type Class
     */
    class Display extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Display>;

        // Properties
        /**
         * @default true
         */
        get auto_resize(): boolean;
        set auto_resize(val: boolean);

        /**
         * @default true
         */
        get autoResize(): boolean;
        set autoResize(val: boolean);

        get screen(): Screen;
        set screen(val: Screen);

        get ungrab_trigger(): Gtk.ShortcutTrigger;
        set ungrab_trigger(val: Gtk.ShortcutTrigger);

        get ungrabTrigger(): Gtk.ShortcutTrigger;
        set ungrabTrigger(val: Gtk.ShortcutTrigger);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Display;

        // Signals
        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get whether the widget will reconfigure the VM whenever
         * it gets a new size allocation.
         */
        get_auto_resize(): boolean;

        /**
         * Retrieve the (`guest_x`, `guest_y`) position
         * where the `event` happened.
         * 
         * Could be useful for implementing touch support emulation.
         * @param event A {@link Gdk.Event}
         * @returns Whether the event has an associated position
         */
        get_event_position_in_guest(event: Gdk.Event): [boolean, number, number];

        /**
         * Gets the screen connected to the display.
         * @returns a {@link Mks.Screen}
         */
        get_screen(): Screen;

        /**
         * Gets the {@link Gtk.ShortcutTrigger} that will ungrab the display.
         * @returns a {@link Gtk.ShortcutTrigger}
         */
        get_ungrab_trigger(): Gtk.ShortcutTrigger;

        /**
         * Sets whether the widget should reconfigure the VM
         * with the allocated size of the widget.
         * @param auto_resize Whether to auto resize or not
         */
        set_auto_resize(auto_resize: boolean): void;

        /**
         * @param screen 
         */
        set_screen(screen: Screen): void;

        /**
         * @param trigger 
         */
        set_ungrab_trigger(trigger: Gtk.ShortcutTrigger): void;

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, any];

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


    namespace Keyboard {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::modifiers": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            modifiers: KeyboardModifier;
        }
    }

    /**
     * A virtualized QEMU keyboard.
     * @gir-type Class
     */
    class Keyboard extends Device {
        static $gtype: GObject.GType<Keyboard>;

        // Properties
        /**
         * Active keyboard modifiers.
         * @read-only
         * @default Mks.KeyboardModifier.NONE
         */
        get modifiers(): KeyboardModifier;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Keyboard.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Keyboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Keyboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keyboard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Keyboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keyboard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Keyboard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Keyboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Translate a keycode to a QEMU compatible one.
         * @param keyval the keyval
         * @param keycode the hardware keycode
         */
        static translate(keyval: number, keycode: number): number;

        // Methods
        /**
         * Get the active keyboard modifiers.
         */
        get_modifiers(): KeyboardModifier;

        /**
         * Presses `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         */
        press(keycode: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Presses `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        press(keycode: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Presses `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        press(keycode: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Keyboard.press}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        press_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously press the `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        press_sync(keycode: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Releases `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         */
        release(keycode: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Releases `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        release(keycode: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Releases `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        release(keycode: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Keyboard.release}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        release_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously release the `keycode`.
         * @param keycode the hardware keycode
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        release_sync(keycode: number, cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Mouse {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::is-absolute": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            is_absolute: boolean;
            isAbsolute: boolean;
        }
    }

    /**
     * A virtualized QEMU mouse.
     * @gir-type Class
     */
    class Mouse extends Device {
        static $gtype: GObject.GType<Mouse>;

        // Properties
        /**
         * Whether the mouse is using absolute movements.
         * @read-only
         * @default false
         */
        get is_absolute(): boolean;

        /**
         * Whether the mouse is using absolute movements.
         * @read-only
         * @default false
         */
        get isAbsolute(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mouse.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Mouse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Mouse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mouse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Mouse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mouse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Mouse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mouse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Whether the mouse is using absolute movements.
         */
        get_is_absolute(): boolean;

        /**
         * Moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a {@link Gio.Cancellable}
         */
        move_by(delta_x: number, delta_y: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        move_by(delta_x: number, delta_y: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        move_by(delta_x: number, delta_y: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Mouse.move_by}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        move_by_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously moves the mouse by delta_x and delta_y.
         * @param delta_x the x coordinate delta
         * @param delta_y the y coordinate delta
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        move_by_sync(delta_x: number, delta_y: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a {@link Gio.Cancellable}
         */
        move_to(x: number, y: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        move_to(x: number, y: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        move_to(x: number, y: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Mouse.move_to}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        move_to_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously moves to the absolute position at coordinates (x,y).
         * @param x the x coordinate
         * @param y the y coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        move_to_sync(x: number, y: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Presses a mouse button.
         * @param button the {@link Mks.MouseButton} that was pressed
         * @param cancellable a {@link Gio.Cancellable}
         */
        press(button: MouseButton, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Presses a mouse button.
         * @param button the {@link Mks.MouseButton} that was pressed
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        press(button: MouseButton, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Presses a mouse button.
         * @param button the {@link Mks.MouseButton} that was pressed
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        press(button: MouseButton, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Mouse.press}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        press_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously press a mouse button.
         * @param button the {@link Mks.MouseButton} that was released
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        press_sync(button: MouseButton, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Releases a mouse button.
         * @param button the {@link Mks.MouseButton} that was released
         * @param cancellable a {@link Gio.Cancellable}
         */
        release(button: MouseButton, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Releases a mouse button.
         * @param button the {@link Mks.MouseButton} that was released
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        release(button: MouseButton, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Releases a mouse button.
         * @param button the {@link Mks.MouseButton} that was released
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        release(button: MouseButton, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Mouse.release}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        release_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously releases a mouse button.
         * @param button the {@link Mks.MouseButton} that was released
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        release_sync(button: MouseButton, cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::device-address": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::keyboard": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::mouse": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            device_address: string;
            deviceAddress: string;
            height: number;
            keyboard: Keyboard;
            kind: ScreenKind;
            mouse: Mouse;
            number: number;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Screen extends Device {
        static $gtype: GObject.GType<Screen>;

        // Properties
        /**
         * @read-only
         * @default null
         */
        get device_address(): string;

        /**
         * @read-only
         * @default null
         */
        get deviceAddress(): string;

        /**
         * @read-only
         * @default 0
         */
        get height(): number;

        /**
         * @read-only
         */
        get keyboard(): Keyboard;

        /**
         * @read-only
         * @default Mks.ScreenKind.TEXT
         */
        get kind(): ScreenKind;

        /**
         * @read-only
         */
        get mouse(): Mouse;

        /**
         * @read-only
         * @default 0
         */
        get number(): number;

        /**
         * @read-only
         * @default 0
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Asynchronously creates a {@link Gdk.Paintable} that is updated with the
         * contents of the screen.
         * 
         * This function registers a new `socketpair()` which is shared with
         * the QEMU instance to receive rendering updates. Those updates are
         * propagated to the resulting `GdkPainable` which can be retrieved
         * using `mks_screen_attach_finish()` from `callback`.
         * @param cancellable a {@link Gio.Cancellable}
         */
        attach(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gdk.Paintable>;

        /**
         * Asynchronously creates a {@link Gdk.Paintable} that is updated with the
         * contents of the screen.
         * 
         * This function registers a new `socketpair()` which is shared with
         * the QEMU instance to receive rendering updates. Those updates are
         * propagated to the resulting `GdkPainable` which can be retrieved
         * using `mks_screen_attach_finish()` from `callback`.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        attach(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously creates a {@link Gdk.Paintable} that is updated with the
         * contents of the screen.
         * 
         * This function registers a new `socketpair()` which is shared with
         * the QEMU instance to receive rendering updates. Those updates are
         * propagated to the resulting `GdkPainable` which can be retrieved
         * using `mks_screen_attach_finish()` from `callback`.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        attach(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gdk.Paintable> | void);

        /**
         * Completes an asynchronous request to create a {@link Gdk.Paintable} containing
         * the contents of {@link Mks.Screen} in the QEMU instance.
         * 
         * The resulting {@link Gdk.Paintable} will be updated as changes are delivered
         * from QEMU over a private `socketpair()`. In the typical case, those
         * changes are propagated using a DMA-BUF and damage notifications.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a `GdkPainable` if successful; otherwise `null`   and `error` is set.
         */
        attach_finish(result: Gio.AsyncResult): Gdk.Paintable;

        /**
         * Synchronous request to attach to screen, creating a paintable that can
         * be used to update display as the QEMU instance updates.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns a {@link Gdk.Paintable} if successful; otherwise `null`   and `error` is set.
         */
        attach_sync(cancellable: (Gio.Cancellable | null)): Gdk.Paintable;

        /**
         * @param attributes 
         * @param cancellable 
         */
        configure(attributes: ScreenAttributes, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param attributes 
         * @param cancellable 
         * @param callback 
         */
        configure(attributes: ScreenAttributes, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param attributes 
         * @param cancellable 
         * @param callback 
         */
        configure(attributes: ScreenAttributes, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to `mks_screen_configure()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        configure_finish(result: Gio.AsyncResult): boolean;

        /**
         * Requests the QEMU instance reconfigure the screen using `attributes`.
         * 
         * This function takes ownership of `attributes`.
         * @param attributes a {@link Mks.ScreenAttributes}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        configure_sync(attributes: ScreenAttributes, cancellable: (Gio.Cancellable | null)): boolean;

        get_device_address(): string;

        /**
         * Gets the "height" property.
         * @returns The height of the screen in pixels.
         */
        get_height(): number;

        /**
         * Gets the {@link Mks.Screen.keyboard} property.
         * @returns a {@link Mks.Keyboard}
         */
        get_keyboard(): Keyboard;

        /**
         * Gets the "kind" property.
         * @returns a {@link Mks.ScreenKind}
         */
        get_kind(): ScreenKind;

        /**
         * Gets the {@link Mks.Screen.mouse} property.
         * @returns a {@link Mks.Mouse}
         */
        get_mouse(): Mouse;

        /**
         * Gets the "number" property.
         * @returns the screen number
         */
        get_number(): number;

        /**
         * Gets the {@link Mks.Screen.touchable} property.
         * @returns a {@link Mks.Touchable}
         */
        get_touchable(): Touchable;

        /**
         * Gets the "width" property.
         * @returns The width of the screen in pixels.
         */
        get_width(): number;
    }


    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::devices": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::uuid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            connection: (Gio.DBusConnection | null);
            devices: Gio.ListModel;
            name: string;
            uuid: string;
        }
    }

    /**
     * Session connected to a QEMU VM
     * 
     * The {@link Mks.Session} represents a connection to a QEMU VM instance. It contains
     * devices such as the mouse, keyboard, and screen which can be used with GTK.
     * 
     * You may monitor {@link Mks.Session.devices} using `Gio.ListModel::items-changed` to be
     * notified of changes to available devices in the session.
     * 
     * # Connecting To QEMU
     * 
     * To use {@link Mks.Session}, you should create your QEMU instance using `dbus` for
     * the various devices that support it. You'll need to provide your P2P D-Bus
     * address when connecting to QEMU.
     * 
     * Using the same {@link Gio.DBusConnection}, create a {@link Mks.Session} with
     * {@link Mks.Session.new_for_connection}. The {@link Mks.Session} instance will negotiate
     * with the peer to determine what devices are available and expose them
     * via the {@link Mks.Session.devices} {@link Gio.ListModel}.
     * 
     * # Creating Widgets
     * 
     * You can create a new widget to embed in your application by calling
     * {@link Mks.Session.ref_screen} and set the screen for the {@link Mks.Display}
     * with {@link Mks.Display.set_screen}.
     * @gir-type Class
     */
    class Session extends GObject.Object implements Gio.AsyncInitable<Session>, Gio.Initable {
        static $gtype: GObject.GType<Session>;

        // Properties
        /**
         * The {@link Gio.DBusConnection} that is used to communicate with QEMU.
         * @construct-only
         */
        get connection(): (Gio.DBusConnection | null);

        /**
         * A {@link Gio.ListModel} of devices that have been
         * discovered on the {@link Gio.DBusConnection} to QEMU.
         * @read-only
         */
        get devices(): Gio.ListModel;

        /**
         * The VM name as specified by the QEMU instance.
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * The VM unique identifier specified by the QEMU instance.
         * @read-only
         * @default null
         */
        get uuid(): string;

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

        static new_for_connection_finish(result: Gio.AsyncResult): Session;

        static new_for_connection_sync(connection: Gio.DBusConnection, cancellable: (Gio.Cancellable | null)): Session;

        // Signals
        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a {@link Mks.Session} which communicates using `connection`.
         * 
         * The {@link Gio.DBusConnection} should be a private D-Bus connection to a QEMU
         * instance which has devices created using the "dbus" backend.
         * 
         * `callback` will be executed when the session has been created or
         * failed to create.
         * 
         * This function will not block the calling thread.
         * 
         * use {@link Mks.Session.new_for_connection_finish} to get the result of
         * this operation.
         * @param connection a {@link Gio.DBusConnection}
         * @param io_priority priority for IO operations
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion of the operation
         */
        static new_for_connection(connection: Gio.DBusConnection, io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<Session> | null)): void;

        // Methods
        /**
         * Gets the DBus connection used for this session.
         * @returns a {@link Gio.DBusConnection} or `null` if   the connection has not been set, or was disposed.
         */
        get_connection(): (Gio.DBusConnection | null);

        /**
         * Gets a {@link Gio.ListModel} of devices connected to the session.
         * @returns a {@link Gio.ListModel} of {@link Mks.Device}
         */
        get_devices(): Gio.ListModel;

        /**
         * Gets the name of the VM.
         */
        get_name(): string;

        /**
         * Gets the unique identifier of the VM.
         */
        get_uuid(): string;

        /**
         * Gets the main screen for the session.
         * @returns a {@link Mks.Screen} or `null`
         */
        ref_screen(): (Screen | null);

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Session;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Touchable {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::max-slots": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            max_slots: number;
            maxSlots: number;
        }
    }

    /**
     * A virtualized QEMU touch device.
     * @gir-type Class
     */
    class Touchable extends Device {
        static $gtype: GObject.GType<Touchable>;

        // Properties
        /**
         * The maximum number of slots.
         * @read-only
         * @default 0
         */
        get max_slots(): number;

        /**
         * The maximum number of slots.
         * @read-only
         * @default 0
         */
        get maxSlots(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Touchable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Touchable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Touchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Touchable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Touchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Touchable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Touchable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Touchable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the maximum number of slots.
         */
        get_max_slots(): number;

        /**
         * Send a touch event.
         * @param kind 
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a {@link Gio.Cancellable}
         */
        send_event(kind: TouchEventKind, num_slot: (bigint | number), x: number, y: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Send a touch event.
         * @param kind 
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        send_event(kind: TouchEventKind, num_slot: (bigint | number), x: number, y: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Send a touch event.
         * @param kind 
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion
         */
        send_event(kind: TouchEventKind, num_slot: (bigint | number), x: number, y: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Completes a call to {@link Mks.Touchable.send_event}.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if the operation completed successfully; otherwise `false`   and `error` is set.
         */
        send_event_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously send a touch event.
         * @param kind the event kind
         * @param num_slot the slot number
         * @param x the x absolute coordinate
         * @param y the y absolute coordinate
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the operation was acknowledged by the QEMU instance;   otherwise `false` and `error` is set.
         */
        send_event_sync(kind: TouchEventKind, num_slot: (bigint | number), x: number, y: number, cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;

    /**
     * @gir-type Alias
     */
    type KeyboardClass = typeof Keyboard;

    /**
     * @gir-type Alias
     */
    type MouseClass = typeof Mouse;

    /**
     * Screen attributes.
     * 
     * The attributes are used to reconfigure the QEMU instance with
     * {@link Mks.Screen.configure} or {@link Mks.Screen.configure_sync}.
     * @gir-type Struct
     */
    class ScreenAttributes {
        static $gtype: GObject.GType<ScreenAttributes>;

        // Constructors

        constructor(properties?: Partial<{

        }>);

        static ["new"](): ScreenAttributes;

        // Methods
        /**
         * Makes a deep copy of a {@link Mks.ScreenAttributes}.
         * @returns A newly created {@link Mks.ScreenAttributes} with the same   contents as `self`. If `self` is `null`, `null` is returned.
         */
        copy(): ScreenAttributes;

        /**
         * Returns `true` if the two attributes are equal, `false` otherwise.
         * @param other a {@link Mks.ScreenAttributes}
         */
        equal(other: ScreenAttributes): boolean;

        /**
         * Frees a {@link Mks.ScreenAttributes}.
         * 
         * Allocated using {@link Mks.ScreenAttributes.new}
         * or {@link Mks.ScreenAttributes.copy}.
         */
        free(): void;

        /**
         * Set the screen height in pixels.
         * @param height The screen height.
         */
        set_height(height: number): void;

        /**
         * Set the screen height in millimeters.
         * @param height_mm The screen height.
         */
        set_height_mm(height_mm: number): void;

        /**
         * Set the screen width in pixels.
         * @param width The screen width.
         */
        set_width(width: number): void;

        /**
         * Set the screen width in millimeters.
         * @param width_mm The screen width.
         */
        set_width_mm(width_mm: number): void;

        /**
         * Set the screen's horizontal offset in pixels.
         * @param x_offset The screen's horizontal offset.
         */
        set_x_offset(x_offset: number): void;

        /**
         * Set the screen's vertical offset in pixels.
         * @param y_offset The screen's vertical offset.
         */
        set_y_offset(y_offset: number): void;
    }


    /**
     * @gir-type Alias
     */
    type ScreenClass = typeof Screen;

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;

    /**
     * @gir-type Alias
     */
    type TouchableClass = typeof Touchable;

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

export default Mks;

// END
