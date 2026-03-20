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
import type FoundryGtk from '@girs/foundrygtk-1';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-5';
import type Foundry from '@girs/foundry-1';
import type Dex from '@girs/dex-1';
import type Adw from '@girs/adw-1';

export namespace FoundryAdw {
    /**
     * FoundryAdw-1
     */

    function adw_init(): void;
    namespace DocumentationNavigator {
        // Signal signatures
        interface SignalSignatures extends PathNavigator.SignalSignatures {
            'notify::documentation': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::intent': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PathNavigator.ConstructorProps {
            documentation: Foundry.Documentation;
        }
    }

    /**
     * @gir-type Class
     */
    class DocumentationNavigator extends PathNavigator {
        static $gtype: GObject.GType<DocumentationNavigator>;

        // Properties

        /**
         * @construct-only
         */
        get documentation(): Foundry.Documentation;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocumentationNavigator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DocumentationNavigator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](documentation: Foundry.Documentation): DocumentationNavigator;

        // Signals

        /** @signal */
        connect<K extends keyof DocumentationNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocumentationNavigator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DocumentationNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DocumentationNavigator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DocumentationNavigator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DocumentationNavigator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the documentation for this navigator.
         * @returns a {@link Foundry.Documentation}
         */
        dup_documentation(): Foundry.Documentation;
    }

    namespace FileNavigator {
        // Signal signatures
        interface SignalSignatures extends PathNavigator.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::intent': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PathNavigator.ConstructorProps {
            file: Gio.File;
        }
    }

    /**
     * @gir-type Class
     */
    class FileNavigator extends PathNavigator {
        static $gtype: GObject.GType<FileNavigator>;

        // Properties

        /**
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileNavigator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileNavigator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): FileNavigator;

        // Signals

        /** @signal */
        connect<K extends keyof FileNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileNavigator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileNavigator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileNavigator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the file for this navigator.
         * @returns a {@link Gio.File}
         */
        dup_file(): Gio.File;
    }

    namespace FileRow {
        // Signal signatures
        interface SignalSignatures extends Adw.EntryRow.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::file-type': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::show-apply-button': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::title-selectable': (pspec: GObject.ParamSpec) => void;
            'notify::use-markup': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
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
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-undo': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Adw.EntryRow.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Editable.ConstructorProps {
            file: Gio.File;
            file_type: Gio.FileType;
            fileType: Gio.FileType;
        }
    }

    /**
     * An {@link Adw.PreferencesRow} that allows typing or navigating to a
     * file or directory path. It is capable of expanding relative
     * paths from the user's home directory.
     * @gir-type Class
     * @since 1.1
     */
    class FileRow
        extends Adw.EntryRow
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Editable
    {
        static $gtype: GObject.GType<FileRow>;

        // Properties

        get file(): Gio.File;
        set file(val: Gio.File);
        get file_type(): Gio.FileType;
        set file_type(val: Gio.FileType);
        get fileType(): Gio.FileType;
        set fileType(val: Gio.FileType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileRow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileRow;

        // Signals

        /** @signal */
        connect<K extends keyof FileRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileRow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileRow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileRow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_file(): Gio.File | null;
        /**
         * @returns the type of file that should be selected
         */
        get_file_type(): Gio.FileType;
        /**
         * @param file
         */
        set_file(file: Gio.File): void;
        /**
         * `file_type` must be either `G_FILE_TYPE_REGULAR` or
         * `G_FILE_TYPE_DIRECTORY`.
         *
         * Changing this property while the user is selecting a file is
         * undefined behavior.
         * @param file_type the type of file to select
         */
        set_file_type(file_type: Gio.FileType | null): void;
        /**
         * The current position of the insertion cursor in chars.
         * @read-only
         * @category Inherited from Gtk.Editable
         */
        get cursor_position(): number;
        /**
         * The current position of the insertion cursor in chars.
         * @read-only
         * @category Inherited from Gtk.Editable
         */
        get cursorPosition(): number;
        /**
         * Whether the entry contents can be edited.
         * @category Inherited from Gtk.Editable
         */
        get editable(): boolean;
        set editable(val: boolean);
        /**
         * If undo/redo should be enabled for the editable.
         * @category Inherited from Gtk.Editable
         */
        get enable_undo(): boolean;
        set enable_undo(val: boolean);
        /**
         * If undo/redo should be enabled for the editable.
         * @category Inherited from Gtk.Editable
         */
        get enableUndo(): boolean;
        set enableUndo(val: boolean);
        /**
         * The desired maximum width of the entry, in characters.
         * @category Inherited from Gtk.Editable
         */
        get max_width_chars(): number;
        set max_width_chars(val: number);
        /**
         * The desired maximum width of the entry, in characters.
         * @category Inherited from Gtk.Editable
         */
        get maxWidthChars(): number;
        set maxWidthChars(val: number);
        /**
         * The position of the opposite end of the selection from the cursor in chars.
         * @read-only
         * @category Inherited from Gtk.Editable
         */
        get selection_bound(): number;
        /**
         * The position of the opposite end of the selection from the cursor in chars.
         * @read-only
         * @category Inherited from Gtk.Editable
         */
        get selectionBound(): number;
        /**
         * The contents of the entry.
         * @category Inherited from Gtk.Editable
         */
        get text(): string;
        set text(val: string);
        /**
         * Number of characters to leave space for in the entry.
         * @category Inherited from Gtk.Editable
         */
        get width_chars(): number;
        set width_chars(val: number);
        /**
         * Number of characters to leave space for in the entry.
         * @category Inherited from Gtk.Editable
         */
        get widthChars(): number;
        set widthChars(val: number);
        /**
         * The horizontal alignment, from 0 (left) to 1 (right).
         *
         * Reversed for RTL layouts.
         * @category Inherited from Gtk.Editable
         */
        get xalign(): number;
        set xalign(val: number);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @construct-only
         * @category Inherited from Gtk.Widget
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @construct-only
         * @category Inherited from Gtk.Widget
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         * @category Inherited from Gtk.Widget
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         * @category Inherited from Gtk.Widget
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         * @category Inherited from Gtk.Widget
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         * @category Inherited from Gtk.Widget
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         * @category Inherited from Gtk.Widget
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The {@link Gtk.Root} widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         * @category Inherited from Gtk.Widget
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         * @category Inherited from Gtk.Widget
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         * @category Inherited from Gtk.Widget
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * Retrieves the accessible platform state from the editable delegate.
         *
         * This is an helper function to retrieve the accessible state for
         * {@link Gtk.Editable} interface implementations using a delegate pattern.
         *
         * You should call this function in your editable widget implementation
         * of the {@link Gtk.Accessible.get_platform_state} virtual function, for
         * instance:
         *
         * ```c
         * static void
         * accessible_interface_init (GtkAccessibleInterface *iface)
         * {
         *   iface->get_platform_state = your_editable_get_accessible_platform_state;
         * }
         *
         * static gboolean
         * your_editable_get_accessible_platform_state (GtkAccessible *accessible,
         *                                              GtkAccessiblePlatformState state)
         * {
         *   return gtk_editable_delegate_get_accessible_platform_state (GTK_EDITABLE (accessible), state);
         * }
         * ```
         *
         * Note that the widget which is the delegate *must* be a direct child of
         * this widget, otherwise your implementation of {@link Gtk.Accessible.get_platform_state}
         * might not even be called, as the platform change will originate from
         * the parent of the delegate, and, as a result, will not work properly.
         *
         * So, if you can't ensure the direct child condition, you should give the
         * delegate the {@link Gtk.AccessibleRole.TEXT_BOX} role, or you can
         * change your tree to allow this function to work.
         * @param state what kind of accessible state to retrieve
         * @returns the accessible platform state of the delegate
         */
        delegate_get_accessible_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Deletes the currently selected text of the editable.
         *
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;
        /**
         * Deletes a sequence of characters.
         *
         * The characters that are deleted are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is
         * negative, then the characters deleted are those from `start_pos` to
         * the end of the text.
         *
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Undoes the setup done by {@link Gtk.Editable.init_delegate}.
         *
         * This is a helper function that should be called from dispose,
         * before removing the delegate object.
         */
        finish_delegate(): void;
        /**
         * Gets the alignment of the editable.
         * @returns the alignment
         */
        get_alignment(): number;
        /**
         * Retrieves a sequence of characters.
         *
         * The characters that are retrieved are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is negative,
         * then the characters retrieved are those characters from `start_pos` to
         * the end of the text.
         *
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a   string. This string is allocated by the {@link Gtk.Editable} implementation   and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;
        /**
         * Gets the {@link Gtk.Editable} that `editable` is delegating its
         * implementation to.
         *
         * Typically, the delegate is a {@link Gtk.Text} widget.
         * @returns the delegate {@link Gtk.Editable}
         */
        get_delegate(): Gtk.Editable | null;
        /**
         * Retrieves whether `editable` is editable.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;
        /**
         * Gets if undo/redo actions are enabled for `editable`
         * @returns `true` if undo is enabled
         */
        get_enable_undo(): boolean;
        /**
         * Retrieves the desired maximum width of `editable`, in characters.
         * @returns the maximum width of the entry, in characters
         */
        get_max_width_chars(): number;
        /**
         * Retrieves the current position of the cursor relative
         * to the start of the content of the editable.
         *
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;
        /**
         * Retrieves the selection bound of the editable.
         *
         * `start_pos` will be filled with the start of the selection and
         * `end_pos` with end. If no text was selected both will be identical
         * and `false` will be returned.
         *
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if there is a non-empty selection, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];
        /**
         * Retrieves the contents of `editable`.
         *
         * The returned string is owned by GTK and must not be modified or freed.
         * @returns a pointer to the contents of the editable
         */
        get_text(): string;
        /**
         * Gets the number of characters of space reserved
         * for the contents of the editable.
         * @returns number of chars to request space for, or negative if unset
         */
        get_width_chars(): number;
        /**
         * Sets up a delegate for {@link Gtk.Editable}.
         *
         * This is assuming that the get_delegate vfunc in the {@link Gtk.Editable}
         * interface has been set up for the `editable`'s type.
         *
         * This is a helper function that should be called in instance init,
         * after creating the delegate object.
         */
        init_delegate(): void;
        /**
         * Inserts `length` bytes of `text` into the contents of the
         * widget, at position `position`.
         *
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly
         * inserted text.
         * @param text the text to insert
         * @param length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(text: string, length: number, position: number): number;
        /**
         * Selects a region of text.
         *
         * The characters that are selected are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is
         * negative, then the characters selected are those characters from
         * `start_pos` to  the end of the text.
         *
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;
        /**
         * Sets the alignment for the contents of the editable.
         *
         * This controls the horizontal positioning of the contents when
         * the displayed text is shorter than the width of the editable.
         * @param xalign The horizontal alignment, from 0 (left) to 1 (right).   Reversed for RTL layouts
         */
        set_alignment(xalign: number): void;
        /**
         * Determines if the user can edit the text in the editable widget.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;
        /**
         * If enabled, changes to `editable` will be saved for undo/redo
         * actions.
         *
         * This results in an additional copy of text changes and are not
         * stored in secure memory. As such, undo is forcefully disabled
         * when {@link Gtk.Text.visibility} is set to `false`.
         * @param enable_undo if undo/redo should be enabled
         */
        set_enable_undo(enable_undo: boolean): void;
        /**
         * Sets the desired maximum width in characters of `editable`.
         * @param n_chars the new desired maximum width, in characters
         */
        set_max_width_chars(n_chars: number): void;
        /**
         * Sets the cursor position in the editable to the given value.
         *
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than
         * or equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;
        /**
         * Sets the text in the editable to the given value.
         *
         * This is replacing the current contents.
         * @param text the text to set
         */
        set_text(text: string): void;
        /**
         * Changes the size request of the editable to be about the
         * right size for `n_chars` characters.
         *
         * Note that it changes the size request, the size can still
         * be affected by how you pack the widget into containers.
         * If `n_chars` is -1, the size reverts to the default size.
         * @param n_chars width in chars
         */
        set_width_chars(n_chars: number): void;
        /**
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * Deletes a sequence of characters.
         *
         * The characters that are deleted are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is
         * negative, then the characters deleted are those from `start_pos` to
         * the end of the text.
         *
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        /**
         * Deletes a sequence of characters.
         *
         * The characters that are deleted are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is
         * negative, then the characters deleted are those from `start_pos` to
         * the end of the text.
         *
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;
        /**
         * Inserts `length` bytes of `text` into the contents of the
         * widget, at position `position`.
         *
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly
         * inserted text.
         * @param text the text to insert
         * @param length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(text: string, length: number, position: number): number;
        /**
         * Gets the {@link Gtk.Editable} that `editable` is delegating its
         * implementation to.
         *
         * Typically, the delegate is a {@link Gtk.Text} widget.
         * @virtual
         */
        vfunc_get_delegate(): Gtk.Editable | null;
        /**
         * Retrieves the selection bound of the editable.
         *
         * `start_pos` will be filled with the start of the selection and
         * `end_pos` with end. If no text was selected both will be identical
         * and `false` will be returned.
         *
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];
        /**
         * Retrieves the contents of `editable`.
         *
         * The returned string is owned by GTK and must not be modified or freed.
         * @virtual
         */
        vfunc_get_text(): string;
        /**
         * Inserts `length` bytes of `text` into the contents of the
         * widget, at position `position`.
         *
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly
         * inserted text.
         * @param text the text to insert
         * @param length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(text: string, length: number, position: number): number;
        /**
         * Selects a region of text.
         *
         * The characters that are selected are those characters at positions
         * from `start_pos` up to, but not including `end_pos`. If `end_pos` is
         * negative, then the characters selected are those characters from
         * `start_pos` to  the end of the text.
         *
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
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
        /**
         * Enables or disables an action installed with
         * {@link Gtk.WidgetClass.install_action}.
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * {@link Gtk.WidgetClass.set_activate_signal}
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use {@link Gtk.WidgetClass.add_shortcut}
         * with an action created with {@link Gtk.SignalAction.new}.
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * {@link Gtk.Widget.insert_action_group}, the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by {@link Gio.Action.get_parameter_type}.
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * {@link Gtk.Widget.activate_action}.
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of {@link Gtk.EventController}.
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class`, according to CSS matching rules.
         *
         * Use {@link Gtk.Widget.remove_css_class} to remove the
         * style again.
         * @param css_class style class to add to `widget`, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for `widget`
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call {@link Gtk.Widget.queue_resize} or
         * {@link Gtk.Widget.queue_draw} yourself.
         *
         * {@link Gdk.FrameClock.get_frame_time} should generally be used
         * for timing continuous animations and
         * {@link Gdk.FrameTimings.get_predicted_presentation_time} should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * `Gdk.FrameClock::update` signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to {@link Gtk.Widget.remove_tick_callback}.
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * {@link Gtk.Widget.size_allocate}.
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the {@link Gtk.Widget.focus} virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * {@link Gtk.Widget.grab_focus} to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use {@link Gtk.Widget.grab_focus} to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside `widget`
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target`'s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * {@link Gtk.Widget.get_hexpand} or {@link Gtk.Widget.get_vexpand}.
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget`'s coordinates to coordinates
         * in `target`’s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in `widget`'s coordinate system
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget`'s coordinate system into `target`'s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @returns true if `widget` contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also {@link Gtk.Widget.get_pango_context}.
         * @returns the new {@link Pango.Context}
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new {@link Pango.Layout} that is configured for the widget.
         *
         * The {@link Pango.Layout} will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a {@link Pango.Layout} created in this way around,
         * you need to re-create it when the widgets {@link Pango.Context}
         * is replaced. This can be tracked by listening to changes
         * of the {@link Gtk.Widget.root} property on the widget.
         * @param text text to set on the layout
         * @returns the new {@link Pango.Layout}
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of {@link Gtk.Widget.init_template},
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the {@link GObject.Object.dispose}
         * implementation of any widget that called {@link Gtk.Widget.init_template}.
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the {@link Gtk.Settings.gtk_error_bell} setting is true,
         * it calls {@link Gdk.Surface.beep}, otherwise it does nothing.
         *
         * Note that the effect of {@link Gdk.Surface.beep} can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the `widget`
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the `widget`
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls {@link Gtk.Widget.size_allocate} with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * {@link Gtk.Widget.get_allocation} returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * {@link Gtk.Widget.size_allocate} allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first {@link Gtk.Box} that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike {@link Gtk.Widget.is_ancestor}, this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See {@link Gtk.Widget.set_can_focus}.
         * @returns true if the input focus can enter `widget`
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if `widget` can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with {@link Gtk.Widget.set_child_visible}.
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to `widget`
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See {@link Gtk.Widget.set_cursor} for details.
         * @returns the cursor   that is set on `widget`
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See {@link Gtk.Widget.set_direction}.
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a {@link Gtk.Root} at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of `widget`
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See {@link Gtk.Widget.set_focus_on_click}.
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See {@link Gtk.Widget.set_focusable}.
         * @returns true if `widget` can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See {@link Gtk.Widget.set_font_map}.
         * @returns the font map of `widget`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee {@link Gtk.Widget.set_font_options}.
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call {@link Gdk.FrameClock.get_frame_time}, in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * {@link Gdk.FrameClock.get_frame_time}, and then update the animation
         * by calling {@link Gdk.FrameClock.get_frame_time} again during each repaint.
         *
         * {@link Gdk.FrameClock.request_phase} will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use {@link Gtk.Widget.queue_draw} which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * {@link Gtk.Widget.queue_draw} will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * {@link Gtk.Align.FILL} or {@link Gtk.Align.CENTER}.
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of `widget`
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on `widget`
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of `widget`
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use {@link Gtk.Widget.compute_expand}
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If {@link Gtk.Widget.hexpand} property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See {@link Gtk.Widget.set_layout_manager}.
         * @returns the layout manager of `widget`
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the {@link Gtk.Widget.limit_events} property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of `widget`
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of `widget`
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of `widget`
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of `widget`
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See {@link Gtk.Widget.set_name} for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest {@link Gtk.Native} ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * {@link Gtk.Native} widgets will return themselves here.
         * @returns the {@link Gtk.Native} ancestor of `widget`
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See {@link Gtk.Widget.set_opacity}.
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by {@link Gtk.Widget.create_pango_context},
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * {@link Gtk.Widget.root} property on the widget.
         * @returns the {@link Pango.Context} for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of `widget`
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as {@link Gtk.Fixed}.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use {@link Gtk.Widget.measure} if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if `widget` is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See {@link Gtk.Widget.set_receives_default}.
         * @returns true if `widget` acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The {@link Gtk.SizeRequestMode} preferred by `widget`.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the {@link Gtk.Root} widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * {@link Gtk.Root} widgets will return themselves here.
         * @returns the root widget of `widget`
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See {@link Gdk.Surface.get_scale_factor}.
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use {@link Gdk.Surface.get_scale}
         * to get the fractional scale value.
         * @returns the scale factor for `widget`
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * {@link Gtk.Widget.set_sensitive}).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See {@link Gtk.Widget.is_sensitive}.
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the {@link Gtk.Widget}
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling {@link Gtk.Widget.get_width}
         * for {@link Gtk.Orientation.HORIZONTAL} or {@link Gtk.Widget.get_height}
         * for {@link Gtk.Orientation.VERTICAL}, but can be used when
         * writing orientation-independent code, such as when
         * implementing {@link Gtk.Orientable} widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of `widget` in `orientation`
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See {@link Gtk.Widget.set_size_request}.
         *
         * To get the size a widget will actually request, call
         * {@link Gtk.Widget.measure} instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective {@link Gtk.StateFlags.INSENSITIVE}
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * {@link Gtk.StateFlags} to pass to a {@link Gtk.StyleContext}
         * method, you should look at {@link Gtk.StyleContext.get_state}.
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with {@link Gtk.WidgetClass.bind_template_child_full} or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The type of the widget class that defines the child in the template
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id `name`
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * {@link Gtk.Widget.set_tooltip_markup}, this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget`'s tooltip was set using
         * {@link Gtk.Widget.set_tooltip_markup},
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of `widget`
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.get_hexpand} for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See {@link Gtk.Widget.get_hexpand_set} for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * {@link Gtk.Widget.is_visible} instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See {@link Gtk.Widget.set_visible}.
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of `widget`
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside `widget`
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if `css_class` is currently applied to `widget`
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See {@link Gtk.Window.get_focus_visible} for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * {@link Gtk.Widget.has_focus}.
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if `widget` is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * {@link Gtk.WidgetClass.set_template}.
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement {@link Gtk.Actionable} can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix`, actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in `group`
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling`, or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param previous_sibling the new previous sibling of `widget`
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling`, or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param next_sibling the new next sibling of `widget`
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another {@link Gtk.Widget}
         * @returns true if `ancestor` contains `widget` as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if `widget` is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the {@link Gtk.Widget.has_focus}
         * property is necessarily set; {@link Gtk.Widget.has_focus}
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also {@link Gtk.Widget.get_visible} and
         * {@link Gtk.Widget.set_visible}.
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * {@link Gtk.Label.set_mnemonic_widget}.
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget`'s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via {@link Gtk.Widget.contains}.
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to `widget`'s origin
         * @param y y coordinate to test, relative to `widget`'s origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the {@link Gtk.Widget.size_allocate}
         * function.
         *
         * Use this function instead of {@link Gtk.Widget.queue_resize}
         * when the `widget`'s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is {@link Gtk.Widget.set_halign}.
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget`'s {@link Gtk.Widget.snapshot}
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * {@link Gtk.Label}, the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call `gtk_widget_queue_resize()` on a widget
         * from inside its implementation of the {@link Gtk.Widget.size_allocate}
         * virtual method. Calls to `gtk_widget_queue_resize()` from inside
         * {@link Gtk.Widget.size_allocate} will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * `Gtk.Widget::realize`.
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from `widget`, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * The widget must have previously been added to the list with
         * {@link Gtk.Widget.add_mnemonic_label}.
         * @param label a widget that is a mnemonic label for `widget`
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * {@link Gtk.Widget.add_tick_callback}.
         * @param id an ID returned by {@link Gtk.Widget.add_tick_callback}
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with {@link Gtk.Widget.set_parent}, to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether `widget` should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * {@link Gdk.Cursor.new_from_name} and then sets it on `widget`
         * with {@link Gtk.Widget.set_cursor}. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling {@link Gtk.Widget.set_cursor}
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to {@link Gtk.TextDirection.NONE}, then
         * the value set by {@link Gtk.Widget.set_default_direction} will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their `init()` function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param focusable whether or not `widget` can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a {@link Pango.FontMap}
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the {@link Gdk.Display}
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not `widget` has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call {@link Gtk.Widget.compute_expand}.
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * {@link Gtk.Widget}.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * {@link Gtk.Widget.set_hexpand} sets the hexpand-set property (see
         * {@link Gtk.Widget.set_hexpand_set}) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The {@link Gtk.Widget.hexpand_set} property will be set
         * automatically when you call {@link Gtk.Widget.set_hexpand}
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for {@link Gtk.StyleContext}.
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * {@link Gdk.Display.is_composited}. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, {@link Gtk.Popover}
         * instances and other {@link Gtk.Native} widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of {@link Gtk.Overflow} for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is {@link Gtk.Overflow.VISIBLE}.
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is {@link Gtk.Widget.unparent}.
         *
         * This function is useful only when implementing subclasses of
         * {@link Gtk.Widget}.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not `widget` can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, {@link Gtk.Window.set_default_size} is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * {@link Gtk.Widget.margin_start},
         * {@link Gtk.Widget.margin_end},
         * {@link Gtk.Widget.margin_top}, and
         * {@link Gtk.Widget.margin_bottom}, but it does include pretty
         * much all other padding or border properties set by any subclass
         * of {@link Gtk.Widget}.
         * @param width width `widget` should request, or -1 to unset
         * @param height height `widget` should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values {@link Gtk.StateFlags.DIR-LTR} and
         * {@link Gtk.StateFlags.DIR-RTL} but ignores them. If you want to set
         * the widget's direction, use {@link Gtk.Widget.set_direction}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on `flags`
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * {@link Gtk.Widget.has_tooltip} as a side effect, and of the
         * default handler for the `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_markup}.
         * @param markup the contents of the tooltip for `widget`
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * {@link Gtk.Widget.has_tooltip} as a side effect,
         * and of the default handler for the
         * `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_text}.
         * @param text the contents of the tooltip for `widget`
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.set_hexpand} for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See {@link Gtk.Widget.set_hexpand_set} for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see {@link Gtk.Widget.get_visible}.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as {@link Gtk.Popover} instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of {@link Gtk.Widget.allocate}.
         * @param allocation position and size to be allocated to `widget`
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic {@link Gtk.Widget.snapshot} calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * {@link Gtk.Widget.snapshot} function, calls
         * `gtk_widget_snapshot_child()` once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot`,
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement {@link Gtk.Native}.
         * @param child a child of `widget`
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to {@link Gtk.Snapshot.translate} or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget`’s allocation
         * to coordinates relative to `dest_widget`’s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of `src_widget`
         * @param src_y Y position in widget coordinates of `src_widget`
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See {@link Gtk.Widget.set_state_flags}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         * @virtual
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @virtual
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         * @virtual
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         * @virtual
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for `gtk_widget_child_focus()`
         * @param direction
         * @virtual
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @virtual
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         * @virtual
         */
        vfunc_hide(): void;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @virtual
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         * @virtual
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @virtual
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         * @virtual
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is `true` and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         * @virtual
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * `Gtk.Widget::realize`.
         * @virtual
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a {@link Gtk.Root} widget. Must
         *   chain up
         * @virtual
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         * @virtual
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         * @virtual
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         * @virtual
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         * @virtual
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see `gtk_widget_get_state_flags()`.
         * @param previous_state_flags
         * @virtual
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         * @virtual
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         * @virtual
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   {@link Gtk.Root} widget. Must chain up
         * @virtual
         */
        vfunc_unroot(): void;
    }

    namespace Page {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            presented: () => void;
            /**
             * @signal
             * @run-last
             */
            raise: () => void;
            'notify::auxiliary': (pspec: GObject.ParamSpec) => void;
            'notify::can-save': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::needs-attention': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            auxiliary: Gtk.Widget;
            can_save: boolean;
            canSave: boolean;
            content: Gtk.Widget;
            icon: Gio.Icon;
            needs_attention: boolean;
            needsAttention: boolean;
            subtitle: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Page extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Page>;

        // Properties

        get auxiliary(): Gtk.Widget;
        set auxiliary(val: Gtk.Widget);
        /**
         * @read-only
         */
        get can_save(): boolean;
        /**
         * @read-only
         */
        get canSave(): boolean;
        get content(): Gtk.Widget;
        set content(val: Gtk.Widget);
        /**
         * @read-only
         */
        get icon(): Gio.Icon;
        get needs_attention(): boolean;
        set needs_attention(val: boolean);
        get needsAttention(): boolean;
        set needsAttention(val: boolean);
        /**
         * @read-only
         */
        get subtitle(): string;
        /**
         * @read-only
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Page.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Page.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Page.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Page.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param action_name
         * @param parameter_type
         * @param activate
         */
        static install_action(
            action_name: string,
            parameter_type: string,
            activate: Gtk.WidgetActionActivateFunc,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.install_action
        static install_action(...args: never[]): any;
        /**
         * @param action_name name of the action
         * @param property_name name of the property in instances of `page_class`   or any parent class.
         */
        static install_property_action(action_name: string, property_name: string): void;

        // Virtual methods

        /**
         * Checks if the page can be saved.
         *
         * Implementations of {@link FoundryAdw.Page} should notify the `can-save`
         * property when the value of this function changes.
         * @virtual
         */
        vfunc_can_save(): boolean;
        /**
         * @virtual
         */
        vfunc_dup_icon(): Gio.Icon | null;
        /**
         * @virtual
         */
        vfunc_dup_menu(): Gio.MenuModel | null;
        /**
         * @virtual
         */
        vfunc_dup_subtitle(): string | null;
        /**
         * @virtual
         */
        vfunc_dup_title(): string | null;
        /**
         * @virtual
         */
        vfunc_presented(): void;
        /**
         * Requests that the page saves.
         * @virtual
         */
        vfunc_save(): Dex.Future;
        /**
         * Requests that the page saves to a new file after querying the user
         * for the necessary new file.
         * @virtual
         */
        vfunc_save_as(): Dex.Future;

        // Methods

        /**
         * @param action_name
         * @param enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        dup_icon(): Gio.Icon | null;
        dup_menu(): Gio.MenuModel | null;
        dup_subtitle(): string | null;
        dup_title(): string | null;
        /**
         * Gets the auxiliary widget for the page, if any.
         */
        get_auxiliary(): Gtk.Widget | null;
        /**
         * @returns the content widget
         */
        get_content(): Gtk.Widget | null;
        /**
         * Gets whether the page needs attention from the user.
         * @returns `true` if the page needs attention, `false` otherwise
         */
        get_needs_attention(): boolean;
        raise(): void;
        /**
         * Requests that the page be closed as if the user clicked the close button
         * on an AdwTabBar. This will trigger the close-page signal handler which
         * performs the actual cleanup.
         */
        request_close(): void;
        /**
         * Requests that the page saves.
         * @returns a {@link Dex.Future} that resolves to any   value when the operation has completed or rejects with error.
         */
        save(): Dex.Future;
        /**
         * Requests that the page saves to a new file after querying the user
         * for the necessary new file.
         * @returns a {@link Dex.Future} that resolves to any   value when the operation has completed or rejects with error.
         */
        save_as(): Dex.Future;
        /**
         * @param auxiliary
         */
        set_auxiliary(auxiliary: Gtk.Widget): void;
        /**
         * @param content
         */
        set_content(content: Gtk.Widget): void;
        /**
         * Sets whether the page needs attention from the user.
         *
         * When set to `true`, this property indicates that the page has
         * something that requires user attention. The property is automatically
         * cleared when focus enters the page.
         * @param needs_attention whether the page needs attention
         */
        set_needs_attention(needs_attention: boolean): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace Panel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            presented: () => void;
            /**
             * @signal
             * @run-last
             */
            raise: () => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::needs-attention': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            child: Gtk.Widget;
            icon: Gio.Icon;
            icon_name: string;
            iconName: string;
            id: string;
            needs_attention: boolean;
            needsAttention: boolean;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Panel extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Panel>;

        // Properties

        get child(): Gtk.Widget;
        set child(val: Gtk.Widget);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        /**
         * @write-only
         */
        set icon_name(val: string);
        /**
         * @write-only
         */
        set iconName(val: string);
        /**
         * @construct-only
         */
        get id(): string;
        get needs_attention(): boolean;
        set needs_attention(val: boolean);
        get needsAttention(): boolean;
        set needsAttention(val: boolean);
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Panel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Panel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string): Panel;

        // Signals

        /** @signal */
        connect<K extends keyof Panel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Panel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Panel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Panel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_presented(): void;

        // Methods

        get_child(): Gtk.Widget | null;
        get_icon(): Gio.Icon | null;
        get_id(): string;
        /**
         * Gets whether the panel needs attention from the user.
         * @returns `true` if the panel needs attention, `false` otherwise
         */
        get_needs_attention(): boolean;
        get_title(): string | null;
        /**
         * Emits the "raise" signal on the panel.
         *
         * This signal can be used to request that the panel be raised to the front
         * or made visible in its container.
         */
        raise(): void;
        /**
         * @param child
         */
        set_child(child: Gtk.Widget): void;
        /**
         * @param icon
         */
        set_icon(icon: Gio.Icon): void;
        /**
         * @param icon_name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets whether the panel needs attention from the user.
         *
         * When set to `true`, this property indicates that the panel has
         * something that requires user attention. The property is automatically
         * cleared when focus enters the panel.
         * @param needs_attention whether the panel needs attention
         */
        set_needs_attention(needs_attention: boolean): void;
        /**
         * @param title
         */
        set_title(title: string): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace PanelBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::show-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::show-start': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            show_bottom: boolean;
            showBottom: boolean;
            show_start: boolean;
            showStart: boolean;
            workspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    class PanelBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PanelBar>;

        // Properties

        get show_bottom(): boolean;
        set show_bottom(val: boolean);
        get showBottom(): boolean;
        set showBottom(val: boolean);
        get show_start(): boolean;
        set show_start(val: boolean);
        get showStart(): boolean;
        set showStart(val: boolean);
        get workspace(): Workspace;
        set workspace(val: Workspace);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PanelBar;

        // Signals

        /** @signal */
        connect<K extends keyof PanelBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_show_bottom(): boolean;
        get_show_start(): boolean;
        get_workspace(): Workspace | null;
        /**
         * @param bottom
         */
        set_show_bottom(bottom: boolean): void;
        /**
         * @param start
         */
        set_show_start(start: boolean): void;
        /**
         * @param workspace
         */
        set_workspace(workspace: Workspace): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace PathBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::selected-item': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            root: PathNavigator | any;
            selected_item: PathNavigator;
            selectedItem: PathNavigator;
        }
    }

    /**
     * @gir-type Class
     */
    class PathBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PathBar>;

        // Properties

        // This accessor conflicts with another accessor's type in a parent class or interface.
        get root(): PathNavigator | any;
        // This accessor conflicts with another accessor's type in a parent class or interface.
        set root(val: PathNavigator | any);
        get selected_item(): PathNavigator;
        set selected_item(val: PathNavigator);
        get selectedItem(): PathNavigator;
        set selectedItem(val: PathNavigator);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PathBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PathBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PathBar;

        // Signals

        /** @signal */
        connect<K extends keyof PathBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PathBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PathBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PathBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_root(): PathNavigator | null;
        get_selected_item(): PathNavigator | null;
        /**
         * Set a root navigator that will always be shown regardless of the
         * selected-item in the pathbar. This is useful for synthesized roots
         * that you always want to show.
         * @param root a root navigator
         */
        set_root(root?: PathNavigator | null): void;
        /**
         * @param selected_item
         */
        set_selected_item(selected_item: PathNavigator): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace PathNavigator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::intent': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: Gio.Icon;
            intent: Foundry.Intent;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class PathNavigator extends GObject.Object {
        static $gtype: GObject.GType<PathNavigator>;

        // Properties

        /**
         * @read-only
         */
        get icon(): Gio.Icon;
        /**
         * @read-only
         */
        get intent(): Foundry.Intent;
        /**
         * @read-only
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PathNavigator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PathNavigator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PathNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathNavigator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PathNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathNavigator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PathNavigator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PathNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_dup_icon(): Gio.Icon | null;
        /**
         * Gets an intent that can be used to navigate to this path navigator.
         * @virtual
         */
        vfunc_dup_intent(): Foundry.Intent | null;
        /**
         * @virtual
         */
        vfunc_dup_title(): string | null;
        /**
         * @virtual
         */
        vfunc_find_parent(): Dex.Future;
        /**
         * @virtual
         */
        vfunc_list_children(): Dex.Future;
        /**
         * @virtual
         */
        vfunc_list_siblings(): Dex.Future;

        // Methods

        dup_icon(): Gio.Icon | null;
        /**
         * Gets an intent that can be used to navigate to this path navigator.
         * @returns a {@link Foundry.Intent} or `null`
         */
        dup_intent(): Foundry.Intent | null;
        dup_title(): string | null;
        /**
         * @returns a {@link Dex.Future} that resolves   to a {@link FoundryAdw.PathNavigator} or rejects with error.
         */
        find_parent(): Dex.Future;
        /**
         * @returns a {@link Dex.Future} that resolves   to a {@link FoundryAdw.PathNavigator} or rejects with error.
         */
        list_children(): Dex.Future;
        /**
         * @returns a {@link Dex.Future} that resolves   to a {@link FoundryAdw.PathNavigator} or rejects with error.
         */
        list_siblings(): Dex.Future;
        /**
         * Asynchronously populates a {@link Gio.ListModel} of {@link FoundryAdw.PathNavigator}
         * starting from this navigator to the root navigator by following
         * {@link FoundryAdw.PathNavigator.find_parent} until there are no more parents.
         *
         * The root navigator is placed at position 0 and `self` is placed in the last
         * position.
         * @returns a {@link Dex.Future} that resolves to a   {@link Gio.ListModel} of {@link FoundryAdw.PathNavigator}.
         */
        list_to_root(): Dex.Future;
    }

    namespace SearchDialog {
        // Signal signatures
        interface SignalSignatures extends Adw.Dialog.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::search-text': (pspec: GObject.ParamSpec) => void;
            'notify::can-close': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::content-height': (pspec: GObject.ParamSpec) => void;
            'notify::content-width': (pspec: GObject.ParamSpec) => void;
            'notify::current-breakpoint': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::focus-widget': (pspec: GObject.ParamSpec) => void;
            'notify::follows-content-size': (pspec: GObject.ParamSpec) => void;
            'notify::presentation-mode': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
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
                Adw.Dialog.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {
            context: Foundry.Context;
            search_text: string;
            searchText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchDialog
        extends Adw.Dialog
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<SearchDialog>;

        // Properties

        get context(): Foundry.Context;
        set context(val: Foundry.Context);
        get search_text(): string;
        set search_text(val: string);
        get searchText(): string;
        set searchText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SearchDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SearchDialog;

        // Signals

        /** @signal */
        connect<K extends keyof SearchDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SearchDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SearchDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_context(): Foundry.Context | null;
        /**
         * @param context
         */
        set_context(context: Foundry.Context): void;
        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;
        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
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

    namespace SymbolNavigator {
        // Signal signatures
        interface SignalSignatures extends PathNavigator.SignalSignatures {
            'notify::symbol': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::intent': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PathNavigator.ConstructorProps {
            symbol: Foundry.Symbol;
        }
    }

    /**
     * @gir-type Class
     */
    class SymbolNavigator extends PathNavigator {
        static $gtype: GObject.GType<SymbolNavigator>;

        // Properties

        /**
         * @construct-only
         */
        get symbol(): Foundry.Symbol;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SymbolNavigator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SymbolNavigator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](symbol: Foundry.Symbol): SymbolNavigator;

        // Signals

        /** @signal */
        connect<K extends keyof SymbolNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SymbolNavigator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SymbolNavigator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SymbolNavigator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SymbolNavigator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SymbolNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the symbol for this navigator.
         * @returns a {@link Foundry.Symbol}
         */
        dup_symbol(): Foundry.Symbol;
    }

    namespace TreeExpander {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * Emitted before popover is shown.
             * @signal
             * @run-last
             */
            'context-menu': (arg0: Gtk.Popover) => void;
            'notify::activate-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::expanded': (pspec: GObject.ParamSpec) => void;
            'notify::expanded-icon': (pspec: GObject.ParamSpec) => void;
            'notify::expanded-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::expanded-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::ignored': (pspec: GObject.ParamSpec) => void;
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::list-row': (pspec: GObject.ParamSpec) => void;
            'notify::menu-model': (pspec: GObject.ParamSpec) => void;
            'notify::paintable': (pspec: GObject.ParamSpec) => void;
            'notify::suffix': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::use-markup': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            activate_on_click: boolean;
            activateOnClick: boolean;
            expanded: boolean;
            expanded_icon: Gio.Icon;
            expandedIcon: Gio.Icon;
            expanded_icon_name: string;
            expandedIconName: string;
            expanded_paintable: Gdk.Paintable;
            expandedPaintable: Gdk.Paintable;
            icon: Gio.Icon;
            icon_name: string;
            iconName: string;
            ignored: boolean;
            item: GObject.Object;
            list_row: Gtk.TreeListRow;
            listRow: Gtk.TreeListRow;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            paintable: Gdk.Paintable;
            suffix: Gtk.Widget;
            title: string;
            use_markup: boolean;
            useMarkup: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeExpander extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<TreeExpander>;

        // Properties

        /**
         * Whether clicking on the expander should activate the row instead of
         * expanding or collapsing it.
         *
         * This property is primarily useful when using autoexpand on
         * {@link Gtk.TreeListModel}, where rows are automatically expanded and collapsed
         * as needed, and clicks should instead activate the row.
         * @since 1.1
         */
        get activate_on_click(): boolean;
        set activate_on_click(val: boolean);
        /**
         * Whether clicking on the expander should activate the row instead of
         * expanding or collapsing it.
         *
         * This property is primarily useful when using autoexpand on
         * {@link Gtk.TreeListModel}, where rows are automatically expanded and collapsed
         * as needed, and clicks should instead activate the row.
         * @since 1.1
         */
        get activateOnClick(): boolean;
        set activateOnClick(val: boolean);
        /**
         * @read-only
         */
        get expanded(): boolean;
        get expanded_icon(): Gio.Icon;
        set expanded_icon(val: Gio.Icon);
        get expandedIcon(): Gio.Icon;
        set expandedIcon(val: Gio.Icon);
        /**
         * @write-only
         */
        set expanded_icon_name(val: string);
        /**
         * @write-only
         */
        set expandedIconName(val: string);
        get expanded_paintable(): Gdk.Paintable;
        set expanded_paintable(val: Gdk.Paintable);
        get expandedPaintable(): Gdk.Paintable;
        set expandedPaintable(val: Gdk.Paintable);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        /**
         * @write-only
         */
        set icon_name(val: string);
        /**
         * @write-only
         */
        set iconName(val: string);
        get ignored(): boolean;
        set ignored(val: boolean);
        /**
         * @read-only
         */
        get item(): GObject.Object;
        get list_row(): Gtk.TreeListRow;
        set list_row(val: Gtk.TreeListRow);
        get listRow(): Gtk.TreeListRow;
        set listRow(val: Gtk.TreeListRow);
        get menu_model(): Gio.MenuModel;
        set menu_model(val: Gio.MenuModel);
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);
        /**
         * The paintable to display for the row.
         *
         * If set, this paintable will be preferred over the icon/icon-name
         * properties.
         * @since 1.1
         */
        get paintable(): Gdk.Paintable;
        set paintable(val: Gdk.Paintable);
        get suffix(): Gtk.Widget;
        set suffix(val: Gtk.Widget);
        get title(): string;
        set title(val: string);
        get use_markup(): boolean;
        set use_markup(val: boolean);
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeExpander.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeExpander.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TreeExpander;

        // Signals

        /** @signal */
        connect<K extends keyof TreeExpander.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeExpander.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeExpander.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeExpander.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeExpander.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeExpander.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether clicking on the expander activates the row instead of
         * expanding or collapsing it.
         * @returns `true` if clicks activate the row, `false` otherwise
         */
        get_activate_on_click(): boolean;
        /**
         * Gets the icon for the row when expanded.
         * @returns a {@link Gio.Icon} or `null`
         */
        get_expanded_icon(): Gio.Icon | null;
        /**
         * Gets the paintable for the row when expanded.
         * @returns a {@link Gdk.Paintable} or `null`
         */
        get_expanded_paintable(): Gdk.Paintable | null;
        /**
         * Gets the icon for the row.
         * @returns a {@link Gio.Icon} or `null`
         */
        get_icon(): Gio.Icon | null;
        get_ignored(): boolean;
        /**
         * Gets the item instance from the model.
         * @returns a {@link GObject.Object} or `null`
         */
        get_item<T = GObject.Object>(): T;
        /**
         * Gets the list row for the expander.
         * @returns a {@link Gtk.TreeListRow} or `null`
         */
        get_list_row(): Gtk.TreeListRow | null;
        /**
         * Sets the menu model to use for context menus.
         * @returns a {@link Gio.MenuModel} or `null`
         */
        get_menu_model(): Gio.MenuModel | null;
        /**
         * Gets the paintable for the row.
         * @returns a {@link Gdk.Paintable} or `null`
         */
        get_paintable(): Gdk.Paintable | null;
        /**
         * Get the suffix widget, if any.
         * @returns a {@link Gtk.Widget}
         */
        get_suffix(): Gtk.Widget | null;
        get_title(): string;
        get_use_markup(): boolean;
        /**
         * Sets whether clicking on the expander should activate the row instead
         * of expanding or collapsing it.
         *
         * This is primarily useful when using autoexpand on {@link Gtk.TreeListModel},
         * where rows are automatically expanded and collapsed as needed, and
         * clicks should instead activate the row.
         * @param activate_on_click whether clicks should activate the row
         */
        set_activate_on_click(activate_on_click: boolean): void;
        /**
         * @param icon
         */
        set_expanded_icon(icon: Gio.Icon): void;
        /**
         * @param expanded_icon_name
         */
        set_expanded_icon_name(expanded_icon_name: string): void;
        /**
         * Sets the paintable for the row when expanded.
         *
         * If set, this paintable will be preferred over the expanded-icon/expanded-icon-name
         * properties.
         * @param expanded_paintable a {@link Gdk.Paintable} or `null`
         */
        set_expanded_paintable(expanded_paintable?: Gdk.Paintable | null): void;
        /**
         * @param icon
         */
        set_icon(icon: Gio.Icon): void;
        /**
         * @param icon_name
         */
        set_icon_name(icon_name: string): void;
        /**
         * @param ignored
         */
        set_ignored(ignored: boolean): void;
        /**
         * @param list_row
         */
        set_list_row(list_row: Gtk.TreeListRow): void;
        /**
         * @param menu_model
         */
        set_menu_model(menu_model: Gio.MenuModel): void;
        /**
         * Sets the paintable for the row.
         *
         * If set, this paintable will be preferred over the icon/icon-name
         * properties.
         * @param paintable a {@link Gdk.Paintable} or `null`
         */
        set_paintable(paintable?: Gdk.Paintable | null): void;
        /**
         * @param suffix
         */
        set_suffix(suffix: Gtk.Widget): void;
        /**
         * @param title
         */
        set_title(title: string): void;
        /**
         * @param use_markup
         */
        set_use_markup(use_markup: boolean): void;
        /**
         * @param popover
         */
        show_popover(popover: Gtk.Popover): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::active-page': (pspec: GObject.ParamSpec) => void;
            'notify::auxiliary-placeholder': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed-titlebar': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::has-auxiliary': (pspec: GObject.ParamSpec) => void;
            'notify::primary-menu': (pspec: GObject.ParamSpec) => void;
            'notify::show-auxiliary': (pspec: GObject.ParamSpec) => void;
            'notify::show-sidebar': (pspec: GObject.ParamSpec) => void;
            'notify::show-utilities': (pspec: GObject.ParamSpec) => void;
            'notify::sidebar-titlebar': (pspec: GObject.ParamSpec) => void;
            'notify::status-widget': (pspec: GObject.ParamSpec) => void;
            'notify::titlebar': (pspec: GObject.ParamSpec) => void;
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
                Gtk.ConstraintTarget.ConstructorProps {
            active_page: Page;
            activePage: Page;
            auxiliary_placeholder: Gtk.Widget;
            auxiliaryPlaceholder: Gtk.Widget;
            collapsed: boolean;
            collapsed_titlebar: Gtk.Widget;
            collapsedTitlebar: Gtk.Widget;
            context: Foundry.Context;
            has_auxiliary: boolean;
            hasAuxiliary: boolean;
            primary_menu: Gio.MenuModel;
            primaryMenu: Gio.MenuModel;
            show_auxiliary: boolean;
            showAuxiliary: boolean;
            show_sidebar: boolean;
            showSidebar: boolean;
            show_utilities: boolean;
            showUtilities: boolean;
            sidebar_titlebar: Gtk.Widget;
            sidebarTitlebar: Gtk.Widget;
            status_widget: Gtk.Widget;
            statusWidget: Gtk.Widget;
            titlebar: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class Workspace extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Workspace>;

        // Properties

        /**
         * @read-only
         */
        get active_page(): Page;
        /**
         * @read-only
         */
        get activePage(): Page;
        get auxiliary_placeholder(): Gtk.Widget;
        set auxiliary_placeholder(val: Gtk.Widget);
        get auxiliaryPlaceholder(): Gtk.Widget;
        set auxiliaryPlaceholder(val: Gtk.Widget);
        /**
         * @read-only
         */
        get collapsed(): boolean;
        get collapsed_titlebar(): Gtk.Widget;
        set collapsed_titlebar(val: Gtk.Widget);
        get collapsedTitlebar(): Gtk.Widget;
        set collapsedTitlebar(val: Gtk.Widget);
        get context(): Foundry.Context;
        set context(val: Foundry.Context);
        /**
         * @read-only
         */
        get has_auxiliary(): boolean;
        /**
         * @read-only
         */
        get hasAuxiliary(): boolean;
        get primary_menu(): Gio.MenuModel;
        set primary_menu(val: Gio.MenuModel);
        get primaryMenu(): Gio.MenuModel;
        set primaryMenu(val: Gio.MenuModel);
        get show_auxiliary(): boolean;
        set show_auxiliary(val: boolean);
        get showAuxiliary(): boolean;
        set showAuxiliary(val: boolean);
        get show_sidebar(): boolean;
        set show_sidebar(val: boolean);
        get showSidebar(): boolean;
        set showSidebar(val: boolean);
        get show_utilities(): boolean;
        set show_utilities(val: boolean);
        get showUtilities(): boolean;
        set showUtilities(val: boolean);
        get sidebar_titlebar(): Gtk.Widget;
        set sidebar_titlebar(val: Gtk.Widget);
        get sidebarTitlebar(): Gtk.Widget;
        set sidebarTitlebar(val: Gtk.Widget);
        get status_widget(): Gtk.Widget;
        set status_widget(val: Gtk.Widget);
        get statusWidget(): Gtk.Widget;
        set statusWidget(val: Gtk.Widget);
        get titlebar(): Gtk.Widget;
        set titlebar(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workspace.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Workspace;

        // Signals

        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param panel
         */
        add_bottom_panel(panel: Panel): void;
        /**
         * @param page
         */
        add_page(page: Page): void;
        /**
         * @param panel
         */
        add_sidebar_panel(panel: Panel): void;
        /**
         * Find the first page matching `page_type`.
         * @param page_type
         * @returns the first page that matches, or `null`
         */
        find_page_typed(page_type: GObject.GType): Page | null;
        /**
         * Find the first panel matching `id`.
         * @param id the panel ID to search for
         * @returns the first panel that matches, or `null`
         */
        find_panel_by_id(id: string): Panel | null;
        /**
         * Calls `callback` for every {@link FoundryAdw.Page} in the workspace.
         * @param callback
         */
        foreach_page(callback: GLib.Func): void;
        /**
         * Calls `callback` for every {@link FoundryAdw.Panel} in the workspace.
         * @param callback
         */
        foreach_panel(callback: GLib.Func): void;
        get_active_page(): Page | null;
        /**
         * Gets the auxiliary placeholder widget.
         * @returns the auxiliary placeholder widget
         */
        get_auxiliary_placeholder(): Gtk.Widget | null;
        /**
         * Gets if the workspace is in collapsed form, meaning a narrow
         * representation of the window. In collapsed form, the sidebar
         * and main contents are not visible but instead a condensed form
         * of the content with access to panels is shown.
         */
        get_collapsed(): boolean;
        get_collapsed_titlebar(): Gtk.Widget | null;
        get_context(): Foundry.Context | null;
        /**
         * Gets if the active page has an auxiliary widget.
         * @returns `true` if there is an auxiliary page to display.
         */
        get_has_auxiliary(): boolean;
        get_primary_menu(): Gio.MenuModel | null;
        /**
         * Gets if the auxiliary should be shown when the workspace is not collapsed.
         */
        get_show_auxiliary(): boolean;
        /**
         * Gets if the sidebar should be shown when the workspace is not collapsed.
         */
        get_show_sidebar(): boolean;
        /**
         * Gets if the utilities should be shown when the workspace is not collapsed.
         */
        get_show_utilities(): boolean;
        get_sidebar_titlebar(): Gtk.Widget | null;
        get_status_widget(): Gtk.Widget | null;
        get_titlebar(): Gtk.Widget | null;
        /**
         * @param page
         */
        remove_page(page: Page): void;
        /**
         * @param panel
         */
        remove_panel(panel: Panel): void;
        /**
         * Sets the auxiliary placeholder widget.
         * @param placeholder the auxiliary placeholder widget
         */
        set_auxiliary_placeholder(placeholder?: Gtk.Widget | null): void;
        /**
         * @param collapsed_titlebar
         */
        set_collapsed_titlebar(collapsed_titlebar: Gtk.Widget): void;
        /**
         * @param context
         */
        set_context(context: Foundry.Context): void;
        /**
         * @param menu
         */
        set_primary_menu(menu: Gio.MenuModel): void;
        /**
         * Sets if the auxiliary should be shown when the workspace is not collapsed.
         * @param show_auxiliary
         */
        set_show_auxiliary(show_auxiliary: boolean): void;
        /**
         * Sets if the sidebar should be shown when the workspace is not collapsed.
         * @param show_sidebar
         */
        set_show_sidebar(show_sidebar: boolean): void;
        /**
         * Sets if the utilities should be shown when the workspace is not collapsed.
         * @param show_utilities
         */
        set_show_utilities(show_utilities: boolean): void;
        /**
         * @param sidebar_titlebar
         */
        set_sidebar_titlebar(sidebar_titlebar: Gtk.Widget): void;
        /**
         * @param status_widget
         */
        set_status_widget(status_widget: Gtk.Widget): void;
        /**
         * @param titlebar
         */
        set_titlebar(titlebar: Gtk.Widget): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
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
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
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
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
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
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
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
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
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
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
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
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
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
            data?: any | null,
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
            data?: any | null,
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
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace WorkspaceAddin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            workspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class WorkspaceAddin extends GObject.Object {
        static $gtype: GObject.GType<WorkspaceAddin>;

        // Properties

        /**
         * @read-only
         */
        get workspace(): Workspace;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceAddin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceAddin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceAddin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceAddin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceAddin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceAddin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceAddin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceAddin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup_workspace(): Workspace;
    }

    /**
     * @gir-type Alias
     */
    type DocumentationNavigatorClass = typeof DocumentationNavigator;
    /**
     * @gir-type Alias
     */
    type FileNavigatorClass = typeof FileNavigator;
    /**
     * @gir-type Alias
     */
    type FileRowClass = typeof FileRow;
    /**
     * @gir-type Alias
     */
    type PageClass = typeof Page;
    /**
     * @gir-type Alias
     */
    type PanelBarClass = typeof PanelBar;
    /**
     * @gir-type Alias
     */
    type PanelClass = typeof Panel;
    /**
     * @gir-type Alias
     */
    type PathBarClass = typeof PathBar;
    /**
     * @gir-type Alias
     */
    type PathNavigatorClass = typeof PathNavigator;
    /**
     * @gir-type Alias
     */
    type SearchDialogClass = typeof SearchDialog;
    /**
     * @gir-type Alias
     */
    type SplitablePageInterface = typeof SplitablePage;
    /**
     * @gir-type Alias
     */
    type SymbolNavigatorClass = typeof SymbolNavigator;
    /**
     * @gir-type Alias
     */
    type TreeExpanderClass = typeof TreeExpander;
    /**
     * @gir-type Alias
     */
    type WorkspaceAddinClass = typeof WorkspaceAddin;
    /**
     * @gir-type Alias
     */
    type WorkspaceClass = typeof Workspace;
    namespace SplitablePage {
        /**
         * Interface for implementing SplitablePage.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_split(): Page;
        }

        // Constructor properties interface

        interface ConstructorProps extends Page.ConstructorProps {}
    }

    export interface SplitablePageNamespace {
        $gtype: GObject.GType<SplitablePage>;
        prototype: SplitablePage;
    }
    /**
     * @gir-type Interface
     */
    interface SplitablePage extends Page, SplitablePage.Interface {
        // Methods

        /**
         * @returns the new split page
         */
        split(): Page;
    }

    export const SplitablePage: SplitablePageNamespace & {
        new (): SplitablePage; // This allows `obj instanceof SplitablePage`
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

export default FoundryAdw;

// END
