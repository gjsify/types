
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
            "notify::documentation": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::intent": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](documentation: Foundry.Documentation): DocumentationNavigator;

        // Signals
        /** @signal */
        connect<K extends keyof DocumentationNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentationNavigator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DocumentationNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentationNavigator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DocumentationNavigator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocumentationNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::intent": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](file: Gio.File): FileNavigator;

        // Signals
        /** @signal */
        connect<K extends keyof FileNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileNavigator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileNavigator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileNavigator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::file-type": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::show-apply-button": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::title-selectable": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
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
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-undo": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.EntryRow.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Editable.ConstructorProps {
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
    class FileRow extends Adw.EntryRow implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Editable {
        static $gtype: GObject.GType<FileRow>;

        // Properties
        get file(): Gio.File;
        set file(val: Gio.File);

        /**
         * @default Gio.FileType.DIRECTORY
         */
        get file_type(): Gio.FileType;
        set file_type(val: Gio.FileType);

        /**
         * @default Gio.FileType.DIRECTORY
         */
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

        static ["new"](): FileRow;

        // Signals
        /** @signal */
        connect<K extends keyof FileRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        dup_file(): (Gio.File | null);

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
        set_file_type(file_type: Gio.FileType): void;

        /**
         * The current position of the insertion cursor in chars.
         * @read-only
         * @default 0
          * @category Inherited from Gtk.Editable
         */
        get cursor_position(): number;

        /**
         * The current position of the insertion cursor in chars.
         * @read-only
         * @default 0
          * @category Inherited from Gtk.Editable
         */
        get cursorPosition(): number;

        /**
         * Whether the entry contents can be edited.
         * @default true
          * @category Inherited from Gtk.Editable
         */
        get editable(): boolean;
        set editable(val: boolean);

        /**
         * If undo/redo should be enabled for the editable.
         * @default true
          * @category Inherited from Gtk.Editable
         */
        get enable_undo(): boolean;
        set enable_undo(val: boolean);

        /**
         * If undo/redo should be enabled for the editable.
         * @default true
          * @category Inherited from Gtk.Editable
         */
        get enableUndo(): boolean;
        set enableUndo(val: boolean);

        /**
         * The desired maximum width of the entry, in characters.
         * @default -1
          * @category Inherited from Gtk.Editable
         */
        get max_width_chars(): number;
        set max_width_chars(val: number);

        /**
         * The desired maximum width of the entry, in characters.
         * @default -1
          * @category Inherited from Gtk.Editable
         */
        get maxWidthChars(): number;
        set maxWidthChars(val: number);

        /**
         * The position of the opposite end of the selection from the cursor in chars.
         * @read-only
         * @default 0
          * @category Inherited from Gtk.Editable
         */
        get selection_bound(): number;

        /**
         * The position of the opposite end of the selection from the cursor in chars.
         * @read-only
         * @default 0
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
         * @default -1
          * @category Inherited from Gtk.Editable
         */
        get width_chars(): number;
        set width_chars(val: number);

        /**
         * Number of characters to leave space for in the entry.
         * @default -1
          * @category Inherited from Gtk.Editable
         */
        get widthChars(): number;
        set widthChars(val: number);

        /**
         * The horizontal alignment, from 0 (left) to 1 (right).
         * 
         * Reversed for RTL layouts.
         * @default 0
          * @category Inherited from Gtk.Editable
         */
        get xalign(): number;
        set xalign(val: number);

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
        delegate_get_accessible_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Deletes the currently selected text of the editable.
         * 
         * This call doesn&#x2019;t do anything if there is no selected text.
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
        get_delegate(): (Gtk.Editable | null);

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
        vfunc_get_delegate(): (Gtk.Editable | null);

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
            "notify::auxiliary": (pspec: GObject.ParamSpec) => void;
            "notify::can-save": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::needs-attention": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            auxiliary: (Gtk.Widget | null);
            can_save: boolean;
            canSave: boolean;
            content: (Gtk.Widget | null);
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
        get auxiliary(): (Gtk.Widget | null);
        set auxiliary(val: (Gtk.Widget | null));

        /**
         * @read-only
         * @default false
         */
        get can_save(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canSave(): boolean;

        get content(): (Gtk.Widget | null);
        set content(val: (Gtk.Widget | null));

        /**
         * @read-only
         */
        get icon(): Gio.Icon;

        /**
         * @default false
         */
        get needs_attention(): boolean;
        set needs_attention(val: boolean);

        /**
         * @default false
         */
        get needsAttention(): boolean;
        set needsAttention(val: boolean);

        /**
         * @read-only
         * @default null
         */
        get subtitle(): string;

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
        $signals: Page.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Page.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Page.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param action_name 
         * @param parameter_type 
         * @param activate 
         */
        static install_action(action_name: string, parameter_type: string, activate: Gtk.WidgetActionActivateFunc): void;

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
        vfunc_dup_icon(): (Gio.Icon | null);

        /**
         * @virtual
         */
        vfunc_dup_menu(): (Gio.MenuModel | null);

        /**
         * @virtual
         */
        vfunc_dup_subtitle(): (string | null);

        /**
         * @virtual
         */
        vfunc_dup_title(): (string | null);

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

        dup_icon(): (Gio.Icon | null);

        dup_menu(): (Gio.MenuModel | null);

        dup_subtitle(): (string | null);

        dup_title(): (string | null);

        /**
         * Gets the auxiliary widget for the page, if any.
         */
        get_auxiliary(): (Gtk.Widget | null);

        /**
         * @returns the content widget
         */
        get_content(): (Gtk.Widget | null);

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::needs-attention": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            child: (Gtk.Widget | null);
            icon: (Gio.Icon | null);
            icon_name: string;
            iconName: string;
            id: string;
            needs_attention: boolean;
            needsAttention: boolean;
            title: (string | null);
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Panel extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Panel>;

        // Properties
        get child(): (Gtk.Widget | null);
        set child(val: (Gtk.Widget | null));

        get icon(): (Gio.Icon | null);
        set icon(val: (Gio.Icon | null));

        /**
         * @write-only
         * @default null
         */
        set icon_name(val: string);

        /**
         * @write-only
         * @default null
         */
        set iconName(val: string);

        /**
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * @default false
         */
        get needs_attention(): boolean;
        set needs_attention(val: boolean);

        /**
         * @default false
         */
        get needsAttention(): boolean;
        set needsAttention(val: boolean);

        /**
         * @default null
         */
        get title(): (string | null);
        set title(val: (string | null));

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

        static ["new"](id: string): Panel;

        // Signals
        /** @signal */
        connect<K extends keyof Panel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Panel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Panel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Panel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_presented(): void;

        // Methods
        get_child(): (Gtk.Widget | null);

        get_icon(): (Gio.Icon | null);

        get_id(): string;

        /**
         * Gets whether the panel needs attention from the user.
         * @returns `true` if the panel needs attention, `false` otherwise
         */
        get_needs_attention(): boolean;

        get_title(): (string | null);

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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


    namespace PanelBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::show-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::show-start": (pspec: GObject.ParamSpec) => void;
            "notify::workspace": (pspec: GObject.ParamSpec) => void;
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
            show_bottom: boolean;
            showBottom: boolean;
            show_start: boolean;
            showStart: boolean;
            workspace: (Workspace | null);
        }
    }

    /**
     * @gir-type Class
     */
    class PanelBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PanelBar>;

        // Properties
        /**
         * @default false
         */
        get show_bottom(): boolean;
        set show_bottom(val: boolean);

        /**
         * @default false
         */
        get showBottom(): boolean;
        set showBottom(val: boolean);

        /**
         * @default false
         */
        get show_start(): boolean;
        set show_start(val: boolean);

        /**
         * @default false
         */
        get showStart(): boolean;
        set showStart(val: boolean);

        get workspace(): (Workspace | null);
        set workspace(val: (Workspace | null));

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

        static ["new"](): PanelBar;

        // Signals
        /** @signal */
        connect<K extends keyof PanelBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PanelBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PanelBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PanelBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_show_bottom(): boolean;

        get_show_start(): boolean;

        get_workspace(): (Workspace | null);

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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


    namespace PathBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::selected-item": (pspec: GObject.ParamSpec) => void;
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
            root: (PathNavigator | any);
            selected_item: (PathNavigator | null);
            selectedItem: (PathNavigator | null);
        }
    }

    /**
     * @gir-type Class
     */
    class PathBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PathBar>;

        // Properties
    // This accessor conflicts with another accessor's type in a parent class or interface.
        get root(): (PathNavigator | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set root(val: (PathNavigator | any));

        get selected_item(): (PathNavigator | null);
        set selected_item(val: (PathNavigator | null));

        get selectedItem(): (PathNavigator | null);
        set selectedItem(val: (PathNavigator | null));

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

        static ["new"](): PathBar;

        // Signals
        /** @signal */
        connect<K extends keyof PathBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PathBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PathBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PathBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        dup_root(): (PathNavigator | null);

        get_selected_item(): (PathNavigator | null);

        /**
         * Set a root navigator that will always be shown regardless of the
         * selected-item in the pathbar. This is useful for synthesized roots
         * that you always want to show.
         * @param root a root navigator
         */
        set_root(root: (PathNavigator | null)): void;

        /**
         * @param selected_item 
         */
        set_selected_item(selected_item: PathNavigator): void;

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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


    namespace PathNavigator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::intent": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        $signals: PathNavigator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PathNavigator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PathNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathNavigator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PathNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathNavigator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PathNavigator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PathNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_dup_icon(): (Gio.Icon | null);

        /**
         * Gets an intent that can be used to navigate to this path navigator.
         * @virtual
         */
        vfunc_dup_intent(): (Foundry.Intent | null);

        /**
         * @virtual
         */
        vfunc_dup_title(): (string | null);

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
        dup_icon(): (Gio.Icon | null);

        /**
         * Gets an intent that can be used to navigate to this path navigator.
         * @returns a {@link Foundry.Intent} or `null`
         */
        dup_intent(): (Foundry.Intent | null);

        dup_title(): (string | null);

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
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::search-text": (pspec: GObject.ParamSpec) => void;
            "notify::can-close": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::content-height": (pspec: GObject.ParamSpec) => void;
            "notify::content-width": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::follows-content-size": (pspec: GObject.ParamSpec) => void;
            "notify::presentation-mode": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.Dialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            context: Foundry.Context;
            search_text: string;
            searchText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchDialog extends Adw.Dialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager {
        static $gtype: GObject.GType<SearchDialog>;

        // Properties
        get context(): Foundry.Context;
        set context(val: Foundry.Context);

        /**
         * @default null
         */
        get search_text(): string;
        set search_text(val: string);

        /**
         * @default null
         */
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

        static ["new"](): SearchDialog;

        // Signals
        /** @signal */
        connect<K extends keyof SearchDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        dup_context(): (Foundry.Context | null);

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
    }


    namespace SymbolNavigator {
        // Signal signatures
        interface SignalSignatures extends PathNavigator.SignalSignatures {
            "notify::symbol": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::intent": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](symbol: Foundry.Symbol): SymbolNavigator;

        // Signals
        /** @signal */
        connect<K extends keyof SymbolNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SymbolNavigator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SymbolNavigator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SymbolNavigator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SymbolNavigator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SymbolNavigator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
            "context-menu": (arg0: Gtk.Popover) => void;
            "notify::activate-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::expanded": (pspec: GObject.ParamSpec) => void;
            "notify::expanded-icon": (pspec: GObject.ParamSpec) => void;
            "notify::expanded-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::expanded-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::ignored": (pspec: GObject.ParamSpec) => void;
            "notify::item": (pspec: GObject.ParamSpec) => void;
            "notify::list-row": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::paintable": (pspec: GObject.ParamSpec) => void;
            "notify::suffix": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
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
            activate_on_click: boolean;
            activateOnClick: boolean;
            expanded: boolean;
            expanded_icon: (Gio.Icon | null);
            expandedIcon: (Gio.Icon | null);
            expanded_icon_name: string;
            expandedIconName: string;
            expanded_paintable: (Gdk.Paintable | null);
            expandedPaintable: (Gdk.Paintable | null);
            icon: (Gio.Icon | null);
            icon_name: string;
            iconName: string;
            ignored: boolean;
            item: (GObject.Object | null);
            list_row: (Gtk.TreeListRow | null);
            listRow: (Gtk.TreeListRow | null);
            menu_model: (Gio.MenuModel | null);
            menuModel: (Gio.MenuModel | null);
            paintable: (Gdk.Paintable | null);
            suffix: (Gtk.Widget | null);
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
         * @default false
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
         * @default false
         */
        get activateOnClick(): boolean;
        set activateOnClick(val: boolean);

        /**
         * @read-only
         * @default false
         */
        get expanded(): boolean;

        get expanded_icon(): (Gio.Icon | null);
        set expanded_icon(val: (Gio.Icon | null));

        get expandedIcon(): (Gio.Icon | null);
        set expandedIcon(val: (Gio.Icon | null));

        /**
         * @write-only
         * @default null
         */
        set expanded_icon_name(val: string);

        /**
         * @write-only
         * @default null
         */
        set expandedIconName(val: string);

        get expanded_paintable(): (Gdk.Paintable | null);
        set expanded_paintable(val: (Gdk.Paintable | null));

        get expandedPaintable(): (Gdk.Paintable | null);
        set expandedPaintable(val: (Gdk.Paintable | null));

        get icon(): (Gio.Icon | null);
        set icon(val: (Gio.Icon | null));

        /**
         * @write-only
         * @default null
         */
        set icon_name(val: string);

        /**
         * @write-only
         * @default null
         */
        set iconName(val: string);

        /**
         * @default false
         */
        get ignored(): boolean;
        set ignored(val: boolean);

        /**
         * @read-only
         */
        get item(): (GObject.Object | null);

        get list_row(): (Gtk.TreeListRow | null);
        set list_row(val: (Gtk.TreeListRow | null));

        get listRow(): (Gtk.TreeListRow | null);
        set listRow(val: (Gtk.TreeListRow | null));

        get menu_model(): (Gio.MenuModel | null);
        set menu_model(val: (Gio.MenuModel | null));

        get menuModel(): (Gio.MenuModel | null);
        set menuModel(val: (Gio.MenuModel | null));

        /**
         * The paintable to display for the row.
         * 
         * If set, this paintable will be preferred over the icon/icon-name
         * properties.
         * @since 1.1
         */
        get paintable(): (Gdk.Paintable | null);
        set paintable(val: (Gdk.Paintable | null));

        get suffix(): (Gtk.Widget | null);
        set suffix(val: (Gtk.Widget | null));

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * @default false
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * @default false
         */
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

        static ["new"](): TreeExpander;

        // Signals
        /** @signal */
        connect<K extends keyof TreeExpander.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeExpander.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TreeExpander.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeExpander.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TreeExpander.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeExpander.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_expanded_icon(): (Gio.Icon | null);

        /**
         * Gets the paintable for the row when expanded.
         * @returns a {@link Gdk.Paintable} or `null`
         */
        get_expanded_paintable(): (Gdk.Paintable | null);

        /**
         * Gets the icon for the row.
         * @returns a {@link Gio.Icon} or `null`
         */
        get_icon(): (Gio.Icon | null);

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
        get_list_row(): (Gtk.TreeListRow | null);

        /**
         * Sets the menu model to use for context menus.
         * @returns a {@link Gio.MenuModel} or `null`
         */
        get_menu_model(): (Gio.MenuModel | null);

        /**
         * Gets the paintable for the row.
         * @returns a {@link Gdk.Paintable} or `null`
         */
        get_paintable(): (Gdk.Paintable | null);

        /**
         * Get the suffix widget, if any.
         * @returns a {@link Gtk.Widget}
         */
        get_suffix(): (Gtk.Widget | null);

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
        set_expanded_paintable(expanded_paintable: (Gdk.Paintable | null)): void;

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
        set_paintable(paintable: (Gdk.Paintable | null)): void;

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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


    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::active-page": (pspec: GObject.ParamSpec) => void;
            "notify::auxiliary-placeholder": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed-titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::has-auxiliary": (pspec: GObject.ParamSpec) => void;
            "notify::primary-menu": (pspec: GObject.ParamSpec) => void;
            "notify::show-auxiliary": (pspec: GObject.ParamSpec) => void;
            "notify::show-sidebar": (pspec: GObject.ParamSpec) => void;
            "notify::show-utilities": (pspec: GObject.ParamSpec) => void;
            "notify::sidebar-titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::status-widget": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
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
            active_page: (Page | null);
            activePage: (Page | null);
            auxiliary_placeholder: (Gtk.Widget | null);
            auxiliaryPlaceholder: (Gtk.Widget | null);
            collapsed: boolean;
            collapsed_titlebar: (Gtk.Widget | null);
            collapsedTitlebar: (Gtk.Widget | null);
            context: (Foundry.Context | null);
            has_auxiliary: boolean;
            hasAuxiliary: boolean;
            primary_menu: (Gio.MenuModel | null);
            primaryMenu: (Gio.MenuModel | null);
            show_auxiliary: boolean;
            showAuxiliary: boolean;
            show_sidebar: boolean;
            showSidebar: boolean;
            show_utilities: boolean;
            showUtilities: boolean;
            sidebar_titlebar: (Gtk.Widget | null);
            sidebarTitlebar: (Gtk.Widget | null);
            status_widget: (Gtk.Widget | null);
            statusWidget: (Gtk.Widget | null);
            titlebar: (Gtk.Widget | null);
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
        get active_page(): (Page | null);

        /**
         * @read-only
         */
        get activePage(): (Page | null);

        get auxiliary_placeholder(): (Gtk.Widget | null);
        set auxiliary_placeholder(val: (Gtk.Widget | null));

        get auxiliaryPlaceholder(): (Gtk.Widget | null);
        set auxiliaryPlaceholder(val: (Gtk.Widget | null));

        /**
         * @read-only
         * @default false
         */
        get collapsed(): boolean;

        get collapsed_titlebar(): (Gtk.Widget | null);
        set collapsed_titlebar(val: (Gtk.Widget | null));

        get collapsedTitlebar(): (Gtk.Widget | null);
        set collapsedTitlebar(val: (Gtk.Widget | null));

        get context(): (Foundry.Context | null);
        set context(val: (Foundry.Context | null));

        /**
         * @read-only
         * @default false
         */
        get has_auxiliary(): boolean;

        /**
         * @read-only
         * @default false
         */
        get hasAuxiliary(): boolean;

        get primary_menu(): (Gio.MenuModel | null);
        set primary_menu(val: (Gio.MenuModel | null));

        get primaryMenu(): (Gio.MenuModel | null);
        set primaryMenu(val: (Gio.MenuModel | null));

        /**
         * @default false
         */
        get show_auxiliary(): boolean;
        set show_auxiliary(val: boolean);

        /**
         * @default false
         */
        get showAuxiliary(): boolean;
        set showAuxiliary(val: boolean);

        /**
         * @default false
         */
        get show_sidebar(): boolean;
        set show_sidebar(val: boolean);

        /**
         * @default false
         */
        get showSidebar(): boolean;
        set showSidebar(val: boolean);

        /**
         * @default false
         */
        get show_utilities(): boolean;
        set show_utilities(val: boolean);

        /**
         * @default false
         */
        get showUtilities(): boolean;
        set showUtilities(val: boolean);

        get sidebar_titlebar(): (Gtk.Widget | null);
        set sidebar_titlebar(val: (Gtk.Widget | null));

        get sidebarTitlebar(): (Gtk.Widget | null);
        set sidebarTitlebar(val: (Gtk.Widget | null));

        get status_widget(): (Gtk.Widget | null);
        set status_widget(val: (Gtk.Widget | null));

        get statusWidget(): (Gtk.Widget | null);
        set statusWidget(val: (Gtk.Widget | null));

        get titlebar(): (Gtk.Widget | null);
        set titlebar(val: (Gtk.Widget | null));

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

        static ["new"](): Workspace;

        // Signals
        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        find_page_typed(page_type: GObject.GType): (Page | null);

        /**
         * Find the first panel matching `id`.
         * @param id the panel ID to search for
         * @returns the first panel that matches, or `null`
         */
        find_panel_by_id(id: string): (Panel | null);

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

        get_active_page(): (Page | null);

        /**
         * Gets the auxiliary placeholder widget.
         * @returns the auxiliary placeholder widget
         */
        get_auxiliary_placeholder(): (Gtk.Widget | null);

        /**
         * Gets if the workspace is in collapsed form, meaning a narrow
         * representation of the window. In collapsed form, the sidebar
         * and main contents are not visible but instead a condensed form
         * of the content with access to panels is shown.
         */
        get_collapsed(): boolean;

        get_collapsed_titlebar(): (Gtk.Widget | null);

        get_context(): (Foundry.Context | null);

        /**
         * Gets if the active page has an auxiliary widget.
         * @returns `true` if there is an auxiliary page to display.
         */
        get_has_auxiliary(): boolean;

        get_primary_menu(): (Gio.MenuModel | null);

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

        get_sidebar_titlebar(): (Gtk.Widget | null);

        get_status_widget(): (Gtk.Widget | null);

        get_titlebar(): (Gtk.Widget | null);

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
        set_auxiliary_placeholder(placeholder: (Gtk.Widget | null)): void;

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
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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


    namespace WorkspaceAddin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::workspace": (pspec: GObject.ParamSpec) => void;
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
        connect<K extends keyof WorkspaceAddin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkspaceAddin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WorkspaceAddin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkspaceAddin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WorkspaceAddin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WorkspaceAddin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        interface ConstructorProps extends Page.ConstructorProps {

        }
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
