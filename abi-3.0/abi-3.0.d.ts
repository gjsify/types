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
import type Gsf from '@girs/gsf-1';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Abi {
    /**
     * Abi-3.0
     */

    /**
     * Initializes libabiword
     * @param argv Commandline arguments
     */
    function init(argv: string[]): void;
    /**
     * Initializes libabiword
     */
    function init_noargs(): void;
    function shutdown(): void;
    /**
     * @gir-type Callback
     */
    interface Abi_CharPtr__Bool_EditMethod {
        (arg0: Widget, arg1: string): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface Abi_EditMethod {
        (arg0: Widget, arg1: string, arg2: number, arg3: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface Abi_Int_Int__Bool_EditMethod {
        (arg0: Widget, arg1: number, arg2: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface Abi_Void__Bool_EditMethod {
        (arg0: Widget): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface Signal {
        (arg0: Widget, closure: any | null): boolean;
    }
    namespace Table {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            selected: (arg0: number, arg1: number) => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
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
                Gtk.Button.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Table extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<Table>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Table.SignalSignatures;

        // Fields

        button: Gtk.Button;

        // Constructors

        constructor(properties?: Partial<Table.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Table;

        // Signals

        /** @signal */
        connect<K extends keyof Table.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Table.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Table.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Table.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Table.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Table.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param rows
         * @param cols
         * @virtual
         */
        vfunc_selected(rows: number, cols: number): void;

        // Methods

        /**
         * @returns the label widget.
         */
        get_label(): Gtk.Widget;
        /**
         * @param args
         */
        // Conflicted with Gtk.Button.get_label
        get_label(...args: never[]): any;
        /**
         * @param rows
         * @param cols
         */
        get_max_size(rows: number, cols: number): void;
        /**
         * @param rows
         * @param cols
         */
        get_selected(rows: number, cols: number): void;
        /**
         * @param icon
         */
        set_icon(icon: Gtk.Widget): void;
        /**
         * @param szTable
         * @param szCancel
         */
        set_labels(szTable: string, szCancel: string): void;
        /**
         * @param rows
         * @param cols
         */
        set_max_size(rows: number, cols: number): void;
        /**
         * @param rows
         * @param cols
         */
        set_selected(rows: number, cols: number): void;
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
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }

    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            bold: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            bottomline: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'can-redo': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'can-undo': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'center-align': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * @signal
             * @run-last
             */
            color: (arg0: number, arg1: number, arg2: number) => void;
            /**
             * @signal
             * @run-last
             */
            'current-page': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'enter-selection': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'font-family': (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            'font-size': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'image-selected': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'is-dirty': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            italic: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'justify-align': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'leave-selection': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'left-align': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'line-through': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            overline: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'page-count': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'right-align': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'selection-cleared': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'style-name': (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            subscript: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            superscript: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'table-state': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'text-selected': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            topline: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            underline: (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            zoom: (arg0: number) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-length': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-on': (pspec: GObject.ParamSpec) => void;
            'notify::selection': (pspec: GObject.ParamSpec) => void;
            'notify::selection-length': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::unlink-after-load': (pspec: GObject.ParamSpec) => void;
            'notify::view-normal-layout': (pspec: GObject.ParamSpec) => void;
            'notify::view-para': (pspec: GObject.ParamSpec) => void;
            'notify::view-print-layout': (pspec: GObject.ParamSpec) => void;
            'notify::view-web-layout': (pspec: GObject.ParamSpec) => void;
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
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            content: string;
            content_length: number;
            contentLength: number;
            cursor_on: boolean;
            cursorOn: boolean;
            selection: string;
            selection_length: number;
            selectionLength: number;
            shadow_type: number;
            shadowType: number;
            unlink_after_load: boolean;
            unlinkAfterLoad: boolean;
            view_normal_layout: boolean;
            viewNormalLayout: boolean;
            view_para: boolean;
            viewPara: boolean;
            view_print_layout: boolean;
            viewPrintLayout: boolean;
            view_web_layout: boolean;
            viewWebLayout: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Widget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Widget>;

        // Properties

        /**
         * @read-only
         * @default null
         */
        get content(): string;
        /**
         * @read-only
         * @default 0
         */
        get content_length(): number;
        /**
         * @read-only
         * @default 0
         */
        get contentLength(): number;
        /**
         * @default false
         */
        get cursor_on(): boolean;
        set cursor_on(val: boolean);
        /**
         * @default false
         */
        get cursorOn(): boolean;
        set cursorOn(val: boolean);
        /**
         * @read-only
         * @default null
         */
        get selection(): string;
        /**
         * @read-only
         * @default 0
         */
        get selection_length(): number;
        /**
         * @read-only
         * @default 0
         */
        get selectionLength(): number;
        /**
         * @default 1
         */
        get shadow_type(): number;
        set shadow_type(val: number);
        /**
         * @default 1
         */
        get shadowType(): number;
        set shadowType(val: number);
        /**
         * @default false
         */
        get unlink_after_load(): boolean;
        set unlink_after_load(val: boolean);
        /**
         * @default false
         */
        get unlinkAfterLoad(): boolean;
        set unlinkAfterLoad(val: boolean);
        /**
         * @default false
         */
        get view_normal_layout(): boolean;
        set view_normal_layout(val: boolean);
        /**
         * @default false
         */
        get viewNormalLayout(): boolean;
        set viewNormalLayout(val: boolean);
        /**
         * @default false
         */
        get view_para(): boolean;
        set view_para(val: boolean);
        /**
         * @default false
         */
        get viewPara(): boolean;
        set viewPara(val: boolean);
        /**
         * @default false
         */
        get view_print_layout(): boolean;
        set view_print_layout(val: boolean);
        /**
         * @default false
         */
        get viewPrintLayout(): boolean;
        set viewPrintLayout(val: boolean);
        /**
         * @default false
         */
        get view_web_layout(): boolean;
        set view_web_layout(val: boolean);
        /**
         * @default false
         */
        get viewWebLayout(): boolean;
        set viewWebLayout(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Fields

        bin: Gtk.Bin;

        // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
        child: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Widget;

        static new_with_file(file: string): Widget;

        // Signals

        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param object
         * @param arg_id
         * @param arg
         * @param pspec
         */
        static get_property(
            object: GObject.Object,
            arg_id: number,
            arg: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * @param object
         * @param arg_id
         * @param arg
         * @param pspec
         */
        static set_property(
            object: GObject.Object,
            arg_id: number,
            arg: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_align_center(): boolean;
        /**
         * @virtual
         */
        vfunc_align_justify(): boolean;
        /**
         * @virtual
         */
        vfunc_align_left(): boolean;
        /**
         * @virtual
         */
        vfunc_align_right(): boolean;
        /**
         * @virtual
         */
        vfunc_copy(): boolean;
        /**
         * @virtual
         */
        vfunc_cut(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_bob(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_bod(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_bol(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_bow(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_eob(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_eod(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_eol(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_eow(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_left(): boolean;
        /**
         * @virtual
         */
        vfunc_delete_right(): boolean;
        /**
         * @virtual
         */
        vfunc_edit_footer(): boolean;
        /**
         * @virtual
         */
        vfunc_edit_header(): boolean;
        /**
         * @virtual
         */
        vfunc_file_open(): boolean;
        /**
         * @virtual
         */
        vfunc_file_save(): boolean;
        /**
         * @param arg1
         * @virtual
         */
        vfunc_insert_data(arg1: string): boolean;
        /**
         * @virtual
         */
        vfunc_insert_space(): boolean;
        /**
         * Invoke any of abiword's edit methods by name
         *
         * \param w - An AbiWord widget
         * \param mthdName - A null-terminated string representing the method's name
         *
         * \return FALSE if any preconditions fail
         * \return TRUE|FALSE depending on the result of the EditMethod's completion
         *
         * example usage:
         *
         * gboolean b = FALSE;
         * GtkWidget * w = abi_widget_new ();
         *
         * b = abi_widget_invoke (ABI_WIDGET(w), "alignCenter");
         * @param mthdName
         * @virtual
         */
        vfunc_invoke(mthdName: string): boolean;
        /**
         * Invoke any of abiword's edit methods by name
         *
         * \param w - An AbiWord widget
         * \param mthdName - A null-terminated string representing the method's name
         * \param data - an optional null-terminated string data to pass to the method
         * \param x - an optional x-coordinate to pass to the method (usually 0)
         * \param y - an optional y-coordinate to pass to the method (usuall 0)
         *
         * \return FALSE if any preconditions fail
         * \return TRUE|FALSE depending on the result of the EditMethod's completion
         *
         * example usage:
         *
         * gboolean b = FALSE;
         * GtkWidget * w = abi_widget_new ();
         *
         * b = abi_widget_invoke_ex (ABI_WIDGET(w), "insertData", "Hello World!", 0, 0);
         * b = abi_widget_invoke_ex (ABI_WIDGET(w), "alignCenter", 0, 0, 0);
         * @param mthdName
         * @param data
         * @param x
         * @param y
         * @virtual
         */
        vfunc_invoke_ex(mthdName: string, data: string, x: number, y: number): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_bob(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_bod(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_bol(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_bop(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_bow(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_eob(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_eod(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_eol(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_eop(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_eow(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_left(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_next_line(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_next_page(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_next_screen(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_prev_line(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_prev_page(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_prev_screen(): boolean;
        /**
         * @virtual
         */
        vfunc_moveto_right(): boolean;
        /**
         * @param arg1
         * @param arg2
         * @virtual
         */
        vfunc_moveto_to_xy(arg1: number, arg2: number): boolean;
        /**
         * @virtual
         */
        vfunc_paste(): boolean;
        /**
         * @virtual
         */
        vfunc_paste_special(): boolean;
        /**
         * @virtual
         */
        vfunc_redo(): boolean;
        /**
         * @virtual
         */
        vfunc_remove_footer(): boolean;
        /**
         * @virtual
         */
        vfunc_remove_header(): boolean;
        /**
         * @virtual
         */
        vfunc_save_immediate(): boolean;
        /**
         * @virtual
         */
        vfunc_select_all(): boolean;
        /**
         * @virtual
         */
        vfunc_select_block(): boolean;
        /**
         * @virtual
         */
        vfunc_select_bob(): boolean;
        /**
         * @virtual
         */
        vfunc_select_bod(): boolean;
        /**
         * @virtual
         */
        vfunc_select_bol(): boolean;
        /**
         * @virtual
         */
        vfunc_select_bow(): boolean;
        /**
         * @virtual
         */
        vfunc_select_eob(): boolean;
        /**
         * @virtual
         */
        vfunc_select_eod(): boolean;
        /**
         * @virtual
         */
        vfunc_select_eol(): boolean;
        /**
         * @virtual
         */
        vfunc_select_eow(): boolean;
        /**
         * @virtual
         */
        vfunc_select_left(): boolean;
        /**
         * @virtual
         */
        vfunc_select_line(): boolean;
        /**
         * @virtual
         */
        vfunc_select_next_line(): boolean;
        /**
         * @virtual
         */
        vfunc_select_page_down(): boolean;
        /**
         * @virtual
         */
        vfunc_select_page_up(): boolean;
        /**
         * @virtual
         */
        vfunc_select_prev_line(): boolean;
        /**
         * @virtual
         */
        vfunc_select_right(): boolean;
        /**
         * @virtual
         */
        vfunc_select_screen_down(): boolean;
        /**
         * @virtual
         */
        vfunc_select_screen_up(): boolean;
        /**
         * @param arg1
         * @param arg2
         * @virtual
         */
        vfunc_select_to_xy(arg1: number, arg2: number): boolean;
        /**
         * @virtual
         */
        vfunc_select_word(): boolean;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_bold(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_bottomline(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_can_redo(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_can_undo(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_center_align(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_changed(value: boolean): void;
        /**
         * @param r
         * @param g
         * @param b
         * @virtual
         */
        vfunc_signal_color(r: number, g: number, b: number): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_current_page(value: number): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_enter_selection(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_font_family(value: string): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_font_size(value: number): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_image_selected(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_is_dirty(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_italic(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_justify_align(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_leave_selection(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_left_align(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_line_through(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_overline(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_page_count(value: number): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_right_align(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_selection_cleared(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_style_name(value: string): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_subscript(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_superscript(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_table_state(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_text_selected(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_topline(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_underline(value: boolean): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_signal_zoom_percentage(value: number): void;
        /**
         * @virtual
         */
        vfunc_toggle_bold(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_bottomline(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_bullets(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_insert_mode(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_italic(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_numbering(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_overline(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_plain(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_strike(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_sub(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_super(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_topline(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_underline(): boolean;
        /**
         * @virtual
         */
        vfunc_toggle_unindent(): boolean;
        /**
         * @virtual
         */
        vfunc_undo(): boolean;
        /**
         * @virtual
         */
        vfunc_view_formatting_marks(): boolean;
        /**
         * @virtual
         */
        vfunc_view_normal_layout(): boolean;
        /**
         * @virtual
         */
        vfunc_view_online_layout(): boolean;
        /**
         * @virtual
         */
        vfunc_view_print_layout(): boolean;
        /**
         * @virtual
         */
        vfunc_zoom_whole(): boolean;
        /**
         * @virtual
         */
        vfunc_zoom_width(): boolean;

        // Methods

        align_center(): boolean;
        align_justify(): boolean;
        align_left(): boolean;
        align_right(): boolean;
        copy(): boolean;
        cut(): boolean;
        delete_bob(): boolean;
        delete_bod(): boolean;
        delete_bol(): boolean;
        delete_bow(): boolean;
        delete_eob(): boolean;
        delete_eod(): boolean;
        delete_eol(): boolean;
        delete_eow(): boolean;
        delete_left(): boolean;
        delete_right(): boolean;
        draw(): void;
        edit_footer(): boolean;
        edit_header(): boolean;
        file_open(): boolean;
        file_save(): boolean;
        /**
         * @param sel_start
         */
        find_next(sel_start: boolean): boolean;
        find_prev(): boolean;
        /**
         * Gets all document contents
         * @param extension_or_mimetype content type for the returned selection
         * @param exp_props export properties
         * @returns the selection, the caller must free the memory          through `g_free()`
         */
        get_content(extension_or_mimetype: string, exp_props: string | null): [string, number];
        get_current_page_num(): number;
        /**
         * @returns the font names.
         */
        get_font_names(): string[];
        /**
         * Returns the mouse position relative to `w`
         * @returns `TRUE` if the mouse position could be retrieved
         */
        get_mouse_pos(): [boolean, number, number];
        get_page_count(): number;
        /**
         * Gets the current selection
         * @param extension_or_mimetype content type for the returned selection
         * @returns the selection,          the caller must free the memory through `g_free()`
         */
        get_selection(extension_or_mimetype: string): string[];
        get_show_authors(): boolean;
        get_show_margin(): boolean;
        get_word_selections(): boolean;
        get_zoom_percentage(): number;
        /**
         * @param str
         */
        insert_data(str: string): boolean;
        /**
         * @param szFile
         * @param positioned
         */
        insert_image(szFile: string, positioned: boolean): boolean;
        insert_space(): boolean;
        /**
         * @param rows
         * @param cols
         */
        insert_table(rows: number, cols: number): boolean;
        /**
         * Invoke any of abiword's edit methods by name
         *
         * \param w - An AbiWord widget
         * \param mthdName - A null-terminated string representing the method's name
         *
         * \return FALSE if any preconditions fail
         * \return TRUE|FALSE depending on the result of the EditMethod's completion
         *
         * example usage:
         *
         * gboolean b = FALSE;
         * GtkWidget * w = abi_widget_new ();
         *
         * b = abi_widget_invoke (ABI_WIDGET(w), "alignCenter");
         * @param mthdName
         */
        invoke(mthdName: string): boolean;
        /**
         * Invoke any of abiword's edit methods by name
         *
         * \param w - An AbiWord widget
         * \param mthdName - A null-terminated string representing the method's name
         * \param data - an optional null-terminated string data to pass to the method
         * \param x - an optional x-coordinate to pass to the method (usually 0)
         * \param y - an optional y-coordinate to pass to the method (usuall 0)
         *
         * \return FALSE if any preconditions fail
         * \return TRUE|FALSE depending on the result of the EditMethod's completion
         *
         * example usage:
         *
         * gboolean b = FALSE;
         * GtkWidget * w = abi_widget_new ();
         *
         * b = abi_widget_invoke_ex (ABI_WIDGET(w), "insertData", "Hello World!", 0, 0);
         * b = abi_widget_invoke_ex (ABI_WIDGET(w), "alignCenter", 0, 0, 0);
         * @param mthdName
         * @param data
         * @param x
         * @param y
         */
        invoke_ex(mthdName: string, data: string, x: number, y: number): boolean;
        /**
         * @param pszFile
         * @param mimetype
         */
        load_file(pszFile: string, mimetype: string): boolean;
        /**
         * @param input
         */
        load_file_from_gsf(input: Gsf.Input): boolean;
        /**
         * @param extension_or_mimetype
         * @param buf
         * @param length
         */
        load_file_from_memory(extension_or_mimetype: string, buf: string, length: number): boolean;
        moveto_bob(): boolean;
        moveto_bod(): boolean;
        moveto_bol(): boolean;
        moveto_bop(): boolean;
        moveto_bow(): boolean;
        moveto_eob(): boolean;
        moveto_eod(): boolean;
        moveto_eol(): boolean;
        moveto_eop(): boolean;
        moveto_eow(): boolean;
        moveto_left(): boolean;
        moveto_next_line(): boolean;
        moveto_next_page(): boolean;
        moveto_next_screen(): boolean;
        moveto_prev_line(): boolean;
        moveto_prev_page(): boolean;
        moveto_prev_screen(): boolean;
        moveto_right(): boolean;
        /**
         * @param x
         * @param y
         */
        moveto_to_xy(x: number, y: number): boolean;
        paste(): boolean;
        paste_special(): boolean;
        redo(): boolean;
        remove_footer(): boolean;
        remove_header(): boolean;
        /**
         * Caller owns the returned GdkPixmap and must free it after use.
         * The first page is "1"
         * @param page_number
         * @returns the pixbuf.
         */
        render_page_to_image(page_number: number): GdkPixbuf.Pixbuf;
        /**
         * @param fname
         * @param extension_or_mimetype
         * @param exp_props
         */
        save(fname: string, extension_or_mimetype: string, exp_props: string): boolean;
        save_immediate(): boolean;
        /**
         * @param output
         * @param extension_or_mimetype
         * @param exp_props
         */
        save_to_gsf(output: Gsf.Output, extension_or_mimetype: string, exp_props: string): boolean;
        select_all(): boolean;
        select_block(): boolean;
        select_bob(): boolean;
        select_bod(): boolean;
        select_bol(): boolean;
        select_bow(): boolean;
        select_eob(): boolean;
        select_eod(): boolean;
        select_eol(): boolean;
        select_eow(): boolean;
        select_left(): boolean;
        select_line(): boolean;
        select_next_line(): boolean;
        select_page_down(): boolean;
        select_page_up(): boolean;
        select_prev_line(): boolean;
        select_right(): boolean;
        select_screen_down(): boolean;
        select_screen_up(): boolean;
        /**
         * @param x
         * @param y
         */
        select_to_xy(x: number, y: number): boolean;
        select_word(): boolean;
        /**
         * @param curpage
         */
        set_current_page(curpage: number): void;
        /**
         * @param search_str
         */
        set_find_string(search_str: string): void;
        /**
         * @param szFontName
         */
        set_font_name(szFontName: string): boolean;
        /**
         * @param szFontsize
         */
        set_font_size(szFontsize: string): boolean;
        /**
         * @param bShowAuthors
         */
        set_show_authors(bShowAuthors: boolean): boolean;
        /**
         * @param bShowMargin
         */
        set_show_margin(bShowMargin: boolean): boolean;
        /**
         * @param szName
         */
        set_style(szName: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.set_style
        set_style(...args: never[]): any;
        /**
         * @param red
         * @param green
         * @param blue
         */
        set_text_color(red: number, green: number, blue: number): boolean;
        /**
         * @param b
         */
        set_word_selections(b: boolean): boolean;
        /**
         * @param zoom
         */
        set_zoom_percentage(zoom: number): boolean;
        toggle_bold(): boolean;
        toggle_bottomline(): boolean;
        toggle_bullets(): boolean;
        toggle_insert_mode(): boolean;
        toggle_italic(): boolean;
        toggle_numbering(): boolean;
        toggle_overline(): boolean;
        toggle_plain(): boolean;
        /**
         * @param visible
         */
        toggle_rulers(visible: boolean): void;
        toggle_strike(): boolean;
        toggle_sub(): boolean;
        toggle_super(): boolean;
        toggle_topline(): boolean;
        toggle_underline(): boolean;
        toggle_unindent(): boolean;
        turn_on_cursor(): void;
        undo(): boolean;
        view_formatting_marks(): boolean;
        view_online_layout(): boolean;
        zoom_whole(): boolean;
        zoom_width(): boolean;
    }

    /**
     * @gir-type Struct
     */
    abstract class PrivData {
        static $gtype: GObject.GType<PrivData>;
    }

    /**
     * @gir-type Alias
     */
    type TableClass = typeof Table;
    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;
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

export default Abi;

// END
