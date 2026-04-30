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

export namespace AyatanaIdo3 {
    /**
     * AyatanaIdo3-0.4
     */

    /**
     * @gir-type Enum
     */
    enum RangeStyle {
        DEFAULT,
        SMALL,
    }

    /**
     * @gir-type Enum
     */
    enum ScaleMenuItemStyle {
        NONE,
        IMAGE,
        LABEL,
    }

    /**
     * @gir-type Enum
     */
    enum TimelineDirection {
        FORWARD,
        BACKWARD,
    }

    /**
     * @gir-type Enum
     */
    enum TimelineProgressType {
        LINEAR,
        SINUSOIDAL,
        EXPONENTIAL,
        EASE_IN_EASE_OUT,
    }

    namespace CalendarMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuItem.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'day-selected': () => void;
            /**
             * @signal
             * @run-last
             */
            'day-selected-double-click': () => void;
            /**
             * @signal
             * @run-last
             */
            'month-changed': () => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::right-justified': (pspec: GObject.ParamSpec) => void;
            'notify::submenu': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.MenuItem.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CalendarMenuItem
        extends Gtk.MenuItem
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<CalendarMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalendarMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalendarMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CalendarMenuItem;

        static new_from_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): CalendarMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof CalendarMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalendarMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalendarMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalendarMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalendarMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalendarMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Remove all visual markers.
         */
        clear_marks(): void;
        /**
         * Returns the calendar associated with this menu item.
         * @returns The {@link Gtk.Calendar} used in this item.
         */
        get_calendar(): Gtk.Widget;
        /**
         * Gets the selected date.
         */
        get_date(): [number, number, number];
        /**
         * Get the display options for the calendar.
         * @returns the display options in use
         */
        get_display_options(): Gtk.CalendarDisplayOptions;
        /**
         * Places a visual marker on a particular day.
         * @param day the day number to unmark between 1 and 31.
         * @returns `TRUE`
         */
        mark_day(day: number): boolean;
        /**
         * Set the date shown on the calendar.
         * @param year the year to show (e.g. 2011).
         * @param month a month number (between 0 and 11).
         * @param day The day number (between 1 and 31).
         * @returns `TRUE`
         */
        set_date(year: number, month: number, day: number): boolean;
        /**
         * Set the display options for the calendar.
         * @param flags the display options to set
         */
        set_display_options(flags: Gtk.CalendarDisplayOptions): void;
        /**
         * Removes the visual marker from a particular day.
         * @param day the day number to unmark between 1 and 31.
         * @returns `TRUE`
         */
        unmark_day(day: number): boolean;
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         *
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         *
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
    }

    namespace EntryMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuItem.SignalSignatures {
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::right-justified': (pspec: GObject.ParamSpec) => void;
            'notify::submenu': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.MenuItem.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EntryMenuItem
        extends Gtk.MenuItem
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<EntryMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EntryMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EntryMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof EntryMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EntryMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EntryMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EntryMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Gtk.Entry} used in this menu item.
         * @returns The {@link Gtk.Entry} inside this menu item.
         */
        get_entry(): Gtk.Widget;
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         *
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         *
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
    }

    namespace Range {
        // Signal signatures
        interface SignalSignatures extends Gtk.Scale.SignalSignatures {
            'notify::digits': (pspec: GObject.ParamSpec) => void;
            'notify::draw-value': (pspec: GObject.ParamSpec) => void;
            'notify::has-origin': (pspec: GObject.ParamSpec) => void;
            'notify::value-pos': (pspec: GObject.ParamSpec) => void;
            'notify::adjustment': (pspec: GObject.ParamSpec) => void;
            'notify::fill-level': (pspec: GObject.ParamSpec) => void;
            'notify::inverted': (pspec: GObject.ParamSpec) => void;
            'notify::lower-stepper-sensitivity': (pspec: GObject.ParamSpec) => void;
            'notify::restrict-to-fill-level': (pspec: GObject.ParamSpec) => void;
            'notify::round-digits': (pspec: GObject.ParamSpec) => void;
            'notify::show-fill-level': (pspec: GObject.ParamSpec) => void;
            'notify::upper-stepper-sensitivity': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Scale.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Range extends Gtk.Scale implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Range>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Range.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Range.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](adj: GObject.Object, style: RangeStyle): Range;
        // Conflicted with Gtk.Scale.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Range.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Range.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Range.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Range.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Range.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Range.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ScaleMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuItem.SignalSignatures {
            /**
             * The ::primary-clicked signal is emitted when the pointer clicks the primary label.
             * @signal
             * @run-first
             */
            'primary-clicked': () => void;
            /**
             * The ::secondary-clicked signal is emitted when the pointer clicks the secondary label.
             * @signal
             * @run-first
             */
            'secondary-clicked': () => void;
            /**
             * The ::slider-grabbed signal is emitted when the pointer selects the slider.
             * @signal
             * @run-first
             */
            'slider-grabbed': () => void;
            /**
             * The ::slider-released signal is emitted when the pointer releases the slider.
             * @signal
             * @run-first
             */
            'slider-released': () => void;
            /**
             * Emitted whenever the value of the contained scale changes because
             * of user input.
             * @signal
             * @run-last
             */
            'value-changed': (arg0: number) => void;
            'notify::adjustment': (pspec: GObject.ParamSpec) => void;
            'notify::reverse-scroll-events': (pspec: GObject.ParamSpec) => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::right-justified': (pspec: GObject.ParamSpec) => void;
            'notify::submenu': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.MenuItem.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            adjustment: Gtk.Adjustment;
            reverse_scroll_events: boolean;
            reverseScrollEvents: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ScaleMenuItem
        extends Gtk.MenuItem
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<ScaleMenuItem>;

        // Properties

        get adjustment(): Gtk.Adjustment;
        set adjustment(val: Gtk.Adjustment);
        /**
         * @default true
         */
        get reverse_scroll_events(): boolean;
        set reverse_scroll_events(val: boolean);
        /**
         * @default true
         */
        get reverseScrollEvents(): boolean;
        set reverseScrollEvents(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScaleMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScaleMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string, size: RangeStyle, adjustment: Gtk.Adjustment): ScaleMenuItem;
        // Conflicted with Gtk.MenuItem.new

        static ['new'](...args: never[]): any;

        static new_from_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): ScaleMenuItem;

        static new_with_range(
            label: string,
            size: RangeStyle,
            value: number,
            min: number,
            max: number,
            step: number,
        ): ScaleMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof ScaleMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScaleMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScaleMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScaleMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScaleMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScaleMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Emits the "primary-clicked" signal.
         *
         * The default handler for this signal lowers the scale's
         * adjustment to its lower bound.
         * @virtual
         */
        vfunc_primary_clicked(): void;
        /**
         * Emits the "secondary-clicked" signal.
         *
         * The default handler for this signal raises the scale's
         * adjustment to its upper bound.
         * @virtual
         */
        vfunc_secondary_clicked(): void;

        // Methods

        /**
         * Retrieves a pointer to the image widget used in the primary slot.
         * Whether this is visible depends upon the return value from
         * `ido_scale_menu_item_get_style()`.
         * @returns A {@link Gtk.Widget} pointer for the primary image.
         */
        get_primary_image(): Gtk.Widget;
        /**
         * Retrieves a string of the text for the primary label widget.
         * Whether this is visible depends upon the return value from
         * `ido_scale_menu_item_get_style()`.
         * @returns The label text.
         */
        get_primary_label(): string;
        /**
         * Retrieves the scale widget.
         * @returns The {@link AyatanaIdo3.Range} in this item
         */
        get_scale(): Gtk.Widget;
        /**
         * Retrieves a pointer to the image widget used in the secondary slot.
         * Whether this is visible depends upon the return value from
         * `ido_scale_menu_item_get_style()`.
         * @returns A {@link Gtk.Widget} pointer for the secondary image.
         */
        get_secondary_image(): Gtk.Widget;
        /**
         * Retrieves a string of the text for the secondary label widget.
         * Whether this is visible depends upon the return value from
         * `ido_scale_menu_item_get_style()`.
         * @returns The label text.
         */
        get_secondary_label(): string;
        /**
         * Retrieves the type of widgets being used for the primary and
         * secondary widget slots.  This could be images, labels, or nothing.
         * @returns A {@link AyatanaIdo3.ScaleMenuItemStyle} enum describing the style.
         */
        get_style(): ScaleMenuItemStyle;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_style
        get_style(...args: never[]): any;
        /**
         * Emits the "primary-clicked" signal.
         *
         * The default handler for this signal lowers the scale's
         * adjustment to its lower bound.
         */
        primary_clicked(): void;
        /**
         * Emits the "secondary-clicked" signal.
         *
         * The default handler for this signal raises the scale's
         * adjustment to its upper bound.
         */
        secondary_clicked(): void;
        /**
         * Sets the text for the label widget in the primary slot.  This
         * widget will only be visibile if the return value of
         * `ido_scale_menu_item_get_style()` is set to {@link AyatanaIdo3.ScaleMenuItemStyle.LABEL}.
         * @param label The label text
         */
        set_primary_label(label: string): void;
        /**
         * Sets the text for the label widget in the secondary slot.  This
         * widget will only be visibile if the return value of
         * `ido_scale_menu_item_get_style()` is set to {@link AyatanaIdo3.ScaleMenuItemStyle.LABEL}.
         * @param label The label text
         */
        set_secondary_label(label: string): void;
        /**
         * Sets the type of widgets being used for the primary and
         * secondary widget slots.  This could be images, labels, or nothing.
         * @param style Set the style use for the primary and secondary widget slots.
         */
        set_style(style: ScaleMenuItemStyle): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.set_style
        set_style(...args: never[]): any;
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         *
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         *
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
    }

    namespace SwitchMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.CheckMenuItem.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::draw-as-radio': (pspec: GObject.ParamSpec) => void;
            'notify::inconsistent': (pspec: GObject.ParamSpec) => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::right-justified': (pspec: GObject.ParamSpec) => void;
            'notify::submenu': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.CheckMenuItem.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SwitchMenuItem
        extends Gtk.CheckMenuItem
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<SwitchMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwitchMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwitchMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SwitchMenuItem;

        static new_from_menu_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): SwitchMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof SwitchMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SwitchMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SwitchMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwitchMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Gtk.Container} to add additional widgets into.
         *
         * This function is dperecated.
         * @returns The {@link Gtk.Container} to add additional widgets into.
         */
        get_content_area(): Gtk.Container;
        /**
         * Set the icon of `item` to `icon`.
         * @param icon a {@link Gio.Icon}
         */
        set_icon(icon: Gio.Icon | null): void;
        /**
         * Set the label of `item` to `label`.
         * @param label a string to set as the label of `item`
         */
        set_label(label: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
    }

    namespace Timeline {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::paused signal is emitted when the timeline finishes.
             * @signal
             * @run-last
             */
            finished: () => void;
            /**
             * The ::frame signal is emitted when a frame should be drawn.
             * @signal
             * @run-last
             */
            frame: (arg0: number) => void;
            /**
             * The ::paused signal is emitted when the timeline pauses.
             * @signal
             * @run-last
             */
            paused: () => void;
            /**
             * The ::started signal is emitted when the timeline starts.
             * @signal
             * @run-last
             */
            started: () => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::fps': (pspec: GObject.ParamSpec) => void;
            'notify::loop': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            duration: number;
            fps: number;
            loop: boolean;
            screen: Gdk.Screen;
        }
    }

    /**
     * @gir-type Class
     */
    class Timeline extends GObject.Object {
        static $gtype: GObject.GType<Timeline>;

        // Properties

        /**
         * @default 0
         */
        get duration(): number;
        set duration(val: number);
        /**
         * @default 30
         */
        get fps(): number;
        set fps(val: number);
        /**
         * @default false
         */
        get loop(): boolean;
        set loop(val: boolean);
        get screen(): Gdk.Screen;
        set screen(val: Gdk.Screen);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Timeline.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Timeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](duration: number): Timeline;

        static new_for_screen(duration: number, screen: Gdk.Screen): Timeline;

        // Signals

        /** @signal */
        connect<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Timeline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Transform a linear progress position using the given transform.
         * @param linear_progress The progress from 0.0 (start) to 1.0 (end)
         * @param progress_type The progress transform to apply
         */
        static calculate_progress(linear_progress: number, progress_type: TimelineProgressType): number;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_finished(): void;
        /**
         * @param progress
         * @virtual
         */
        vfunc_frame(progress: number): void;
        /**
         * @virtual
         */
        vfunc_paused(): void;
        /**
         * @virtual
         */
        vfunc_started(): void;

        // Methods

        /**
         * Returns the direction of the timeline.
         * @returns direction
         */
        get_direction(): TimelineDirection;
        /**
         * Set the animation duration.
         * @returns Duration in milliseconds.
         */
        get_duration(): number;
        /**
         * Returns the number of frames per second.
         * @returns frames per second
         */
        get_fps(): number;
        /**
         * Returns whether the timeline loops to the
         * beginning when it has reached the end.
         * @returns `true` if the timeline loops
         */
        get_loop(): boolean;
        /**
         * Get the progress on the timeline.
         * @returns The progress from 0.0 (start) to 1.0 (end)
         */
        get_progress(): number;
        /**
         * Get the screen this timeline is running on.
         * @returns The {@link Gdk.Screen} this timeline is running on.
         */
        get_screen(): Gdk.Screen;
        /**
         * Returns whether the timeline is running or not.
         * @returns `true` if the timeline is running
         */
        is_running(): boolean;
        /**
         * Pauses the timeline.
         */
        pause(): void;
        /**
         * Rewinds the timeline.
         */
        rewind(): void;
        /**
         * Sets the direction of the timeline.
         * @param direction direction
         */
        set_direction(direction: TimelineDirection): void;
        /**
         * Set the animation duration.
         * @param duration Duration in milliseconds.
         */
        set_duration(duration: number): void;
        /**
         * Sets the number of frames per second that
         * the timeline will play.
         * @param fps frames per second
         */
        set_fps(fps: number): void;
        /**
         * Sets whether the timeline loops to the beginning
         * when it has reached the end.
         * @param loop `true` to make the timeline loop
         */
        set_loop(loop: boolean): void;
        /**
         * Set the progress on the timeline.
         * @param progress The progress from 0.0 (start) to 1.0 (end)
         */
        set_progress(progress: number): void;
        /**
         * Set the screen the timeline is running on.
         * @param screen A {@link Gdk.Screen} to use
         */
        set_screen(screen: Gdk.Screen): void;
        /**
         * Runs the timeline from the current frame.
         */
        start(): void;
    }

    /**
     * @gir-type Alias
     */
    type CalendarMenuItemClass = typeof CalendarMenuItem;
    /**
     * @gir-type Alias
     */
    type EntryMenuItemClass = typeof EntryMenuItem;
    /**
     * @gir-type Alias
     */
    type RangeClass = typeof Range;
    /**
     * @gir-type Alias
     */
    type ScaleMenuItemClass = typeof ScaleMenuItem;
    /**
     * @gir-type Alias
     */
    type SwitchMenuItemClass = typeof SwitchMenuItem;
    /**
     * @gir-type Alias
     */
    type TimelineClass = typeof Timeline;
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

export default AyatanaIdo3;

// END
