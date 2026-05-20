
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

export namespace BraseroMedia {

    /**
     * BraseroMedia-3.1
     */


    /**
     * Error codes returned by libbrasero-media
     * @gir-type Enum
     */
    enum MediaError {
        NONE,
        GENERAL,
        IMAGE_INVALID,
    }


    const MEDIUM_BDRE: number;

    const MEDIUM_BDR_RANDOM: number;

    const MEDIUM_BDR_SRM: number;

    const MEDIUM_BDR_SRM_POW: number;

    const MEDIUM_BD_ROM: number;

    const MEDIUM_CDR: number;

    const MEDIUM_CDROM: number;

    const MEDIUM_CDRW: number;

    const MEDIUM_DVDR: number;

    const MEDIUM_DVDRW: number;

    const MEDIUM_DVDRW_PLUS: number;

    const MEDIUM_DVDRW_PLUS_DL: number;

    const MEDIUM_DVDRW_RESTRICTED: number;

    const MEDIUM_DVDR_DL: number;

    const MEDIUM_DVDR_JUMP_DL: number;

    const MEDIUM_DVDR_PLUS: number;

    const MEDIUM_DVDR_PLUS_DL: number;

    const MEDIUM_DVD_RAM: number;

    const MEDIUM_DVD_ROM: number;

    /**
     * Returns a GOptionGroup for the commandline arguments recognized by libbrasero-media.
     * You should add this to your GOptionContext if your are using g_option_context_parse ()
     * to parse your commandline arguments.
     * @returns a {@link GLib.OptionGroup} *
     */
    function media_get_option_group(): GLib.OptionGroup;

    /**
     * Initialize the library.
     * 
     * You should call this function before using any other from the library.
     */
    function media_library_start(): void;

    /**
     * De-initialize the library once you do not need the library anymore.
     */
    function media_library_stop(): void;

    function media_quark(): GLib.Quark;

    /**
     * @param time 
     * @param with_unit 
     * @param round 
     */
    function units_get_time_string(time: bigint | number, with_unit: boolean, round: boolean): string;

    /**
     * @param size 
     * @param with_unit 
     * @param round 
     */
    function units_get_time_string_from_size(size: bigint | number, with_unit: boolean, round: boolean): string;

    /**
     * @gir-type Flags
     */
    enum DriveCaps {
        NONE,
        CDR,
        CDRW,
        DVDR,
        DVDRW,
        DVDR_PLUS,
        DVDRW_PLUS,
        DVDR_PLUS_DL,
        DVDRW_PLUS_DL,
        DVDRAM,
        BDR,
        BDRW,
    }


    /**
     * @gir-type Flags
     */
    enum DriveType {
        NONE,
        FILE,
        WRITER,
        READER,
        ALL_BUT_FILE,
        ALL,
    }


    /**
     * This enum allows to define all characteristics for a media (closed, writable, ...)
     * and identify all types of optical media.
     * @gir-type Flags
     */
    enum Media {
        UNSUPPORTED,
        BUSY,
        NONE,
        FILE,
        CD,
        DVD,
        BD,
        DUAL_L,
        RAM,
        PLUS,
        SEQUENTIAL,
        RESTRICTED,
        JUMP,
        RANDOM,
        SRM,
        POW,
        REWRITABLE,
        WRITABLE,
        ROM,
        BLANK,
        CLOSED,
        APPENDABLE,
        UNFORMATTED,
        PROTECTED,
        HAS_DATA,
        HAS_AUDIO,
    }


    /**
     * @gir-type Flags
     */
    enum MediaType {
        NONE,
        FILE,
        DATA,
        AUDIO,
        WRITABLE,
        REWRITABLE,
        ANY_IN_BURNER,
        CD,
        ALL_BUT_FILE,
        ALL,
    }


    namespace Drive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal gets emitted when a new medium was detected
             * @signal
             * @run-last
             */
            "medium-added": (arg0: Medium) => void;
            /**
             * This signal gets emitted when a medium is not longer available
             * @signal
             * @run-last
             */
            "medium-removed": (arg0: Medium) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::gdrive": (pspec: GObject.ParamSpec) => void;
            "notify::udi": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device: string;
            gdrive: Gio.Drive;
            udi: string;
        }
    }

    /**
     * Represents a physical drive currently connected.
     * @gir-type Class
     */
    class Drive extends GObject.Object {
        static $gtype: GObject.GType<Drive>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get device(): string;

        get gdrive(): Gio.Drive;
        set gdrive(val: Gio.Drive);

        /**
         * @construct-only
         * @default null
         */
        get udi(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Drive.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Drive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Drive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Drive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Drive.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Drive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param medium 
         * @virtual
         */
        vfunc_medium_added(medium: Medium): void;

        /**
         * @param medium 
         * @virtual
         */
        vfunc_medium_removed(medium: Medium): void;

        // Methods
        /**
         * Returns whether the drive can eject media.
         * @returns a `gboolean`. TRUE if the media can be ejected, FALSE otherwise.
         */
        can_eject(): boolean;

        /**
         * Returns whether or not the drive can be used exclusively, that is whether or
         * not it is currently used by another application.
         * @returns `true` or `false`.
         */
        can_use_exclusively(): boolean;

        /**
         * Returns whether the disc can burn any disc at all.
         * @returns a `gboolean`. TRUE if the drive can write a disc and FALSE otherwise
         */
        can_write(): boolean;

        /**
         * Returns whether the disc can burn a specific media type.
         * 
         * Since 2.29.0
         * @param media a {@link BraseroMedia.Media}
         * @returns a `gboolean`. TRUE if the drive can write this type of media and FALSE otherwise
         */
        can_write_media(media: Media): boolean;

        /**
         * Cancels all operations currently running for `drive`
         */
        cancel_current_operation(): void;

        /**
         * Open the drive tray or ejects the media if there is any inside.
         * @param wait `gboolean` whether to wait for the completion of the operation (with a GMainLoop)
         * @returns a `gboolean`. TRUE on success, FALSE otherwise.
         */
        eject(wait: boolean): boolean;

        /**
         * Gets a string holding the block device path for the drive. This can be used on
         * some other OSes, like Solaris, for GIO operations instead of the device
         * path.
         * 
         * Solaris uses block device for GIO operations and
         * uses raw device for system calls and backends
         * like cdrtool.
         * 
         * If such a path is not available, it returns the device path.
         * @returns a string holding the block device path
         */
        get_block_device(): string;

        /**
         * Returns the bus, target, lun ("{bus},{target},{lun}") as a string which is
         * sometimes needed by some backends like cdrecord.
         * 
         * NOTE: that function returns either bus/target/lun or the device path
         * according to OSes. Basically it returns bus/target/lun only for FreeBSD
         * which is the only OS in need for that. For all others it returns the device
         * path.
         * @returns a string or NULL. The string must be freed when not needed
         */
        get_bus_target_lun_string(): string;

        /**
         * Returns what type(s) of disc the drive can write to.
         * @returns a {@link BraseroMedia.DriveCaps}.
         */
        get_caps(): DriveCaps;

        /**
         * Gets a string holding the device path for the drive.
         * @returns a string holding the device path. On Solaris returns raw device.
         */
        get_device(): string;

        /**
         * Gets a string holding the name for the drive. That string can be then
         * displayed in a user interface.
         * @returns a string holding the name
         */
        get_display_name(): string;

        /**
         * Gets the medium currently inserted in the drive. If there is no medium or if
         * the medium is not probed yet then it returns NULL.
         * @returns a {@link BraseroMedia.Medium} object or NULL. No need to unref after use.
         */
        get_medium(): Medium;

        /**
         * Gets a string holding the HAL udi corresponding to this device. It can be used
         * to uniquely identify the drive.
         * @returns a string holding the HAL udi or NULL. Not to be freed
         */
        get_udi(): string;

        /**
         * Returns whether or not the drive door is open.
         * @returns `true` or `false`.
         */
        is_door_open(): boolean;

        /**
         * Returns whether or not the drive is a fake one. There is only one and
         * corresponds to a file which is used when the user wants to burn to a file.
         * @returns `true` or `false`.
         */
        is_fake(): boolean;

        /**
         * Checks whether a {@link BraseroMedia.Drive} is currently locked. Manual ejection shouldn't be possible any more.
         * 
         * Since 2.29.0
         * @param reason a `gchar` or NULL. A string to indicate what the drive was locked for if return value is `true`
         * @returns `true` if the drive is locked or `false`.
         */
        is_locked(reason: string): boolean;

        /**
         * Locks a {@link BraseroMedia.Drive}. Manual ejection shouldn't be possible any more.
         * @param reason a string to indicate what the drive was locked for
         * @param reason_for_failure a string (or NULL) to hold the reason why the locking failed
         * @returns `true` if the drive was successfully locked or `false`.
         */
        lock(reason: string, reason_for_failure: string): boolean;

        /**
         * Reprobes the drive contents. Useful when an operation has just been performed
         * (blanking, burning, ...) and medium status should be updated.
         * 
         * NOTE: This operation does not block.
         */
        reprobe(): void;

        /**
         * Unlocks a {@link BraseroMedia.Drive}.
         * @returns `true` if the drive was successfully unlocked or `false`.
         */
        unlock(): boolean;
    }


    namespace DriveSelection {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            /**
             * This signal gets emitted when the selected medium has changed
             * @signal
             * @action
             * @run-first
             */
            "drive-changed": (arg0: Drive) => void;
            "notify::drive": (pspec: GObject.ParamSpec) => void;
            "notify::drive-type": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            Drive: Drive;
            drive_type: number;
            driveType: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DriveSelection extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<DriveSelection>;

        // Properties
        get Drive(): Drive;
        set Drive(val: Drive);

        /**
         * @default 254
         */
        get drive_type(): number;
        set drive_type(val: number);

        /**
         * @default 254
         */
        get driveType(): number;
        set driveType(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DriveSelection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DriveSelection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DriveSelection;

        // Signals
        /** @signal */
        connect<K extends keyof DriveSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DriveSelection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DriveSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DriveSelection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DriveSelection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DriveSelection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param drive 
         * @virtual
         */
        vfunc_drive_changed(drive: Drive): void;

        // Methods
        /**
         * Sets the active drive. Emits the ::drive-changed signal.
         * @param drive a {@link BraseroMedia.Drive} to set as the active one in the selector
         * @returns a `gboolean`. TRUE if it succeeded, FALSE otherwise.
         */
        set_active(drive: Drive): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.set_active
        set_active(...args: never[]): any;

        /**
         * Filters and displays drive corresponding to `type`.
         * @param type a {@link BraseroMedia.DriveType}
         */
        show_type(type: DriveType): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: Gdk.Event | null): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: Gdk.Event | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

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


    namespace Medium {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal gets emitted when the medium inside the drive has been
             * fully probed. This is mostly for internal use.
             * @signal
             * @run-last
             */
            probed: () => void;
            "notify::drive": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            drive: Drive;
        }
    }

    /**
     * Represents a physical medium currently inserted in a {@link BraseroMedia.Drive}.
     * @gir-type Class
     */
    class Medium extends GObject.Object {
        static $gtype: GObject.GType<Medium>;

        // Properties
        /**
         * @construct-only
         */
        get drive(): Drive;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Medium.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Medium.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Medium.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Medium.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Medium.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Medium.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Medium.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Medium.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether the medium can be rewritten. Note: it also checks that the drive
         * can rewrite the medium type.
         * @returns a `gboolean`. TRUE if the medium can be rewritten, FALSE otherwise.
         */
        can_be_rewritten(): boolean;

        /**
         * Gets whether the medium can be written. It also checks that the medium can
         * write the medium.
         * @returns a `gboolean`. TRUE if the medium can be rewritten, FALSE otherwise.
         */
        can_be_written(): boolean;

        /**
         * Gets whether the medium supports any burnfree technology.
         * @returns a `gboolean`. TRUE if the medium can use any burnfree technology, FALSE otherwise.
         */
        can_use_burnfree(): boolean;

        /**
         * Gets whether the medium supports doing a test write with SAO on.
         * @returns a `gboolean`. TRUE if the medium can use SAO write mode during a test write, FALSE otherwise.
         */
        can_use_dummy_for_sao(): boolean;

        /**
         * Gets whether the medium supports doing a test write with TAO on.
         * @returns a `gboolean`. TRUE if the medium can use TAO write mode during a test write, FALSE otherwise.
         */
        can_use_dummy_for_tao(): boolean;

        /**
         * Gets whether the medium supports SAO.
         * 
         * Since 2.29
         * @returns a `gboolean`. TRUE if the medium can use SAO write mode , FALSE otherwise.
         */
        can_use_sao(): boolean;

        /**
         * Gets whether the medium supports TAO.
         * 
         * Since 2.29
         * @returns a `gboolean`. TRUE if the medium can use TAO write mode, FALSE otherwise.
         */
        can_use_tao(): boolean;

        /**
         * Gets the CD-TEXT title for `Medium`.
         * @returns a `gchar` *.
         */
        get_CD_TEXT_title(): string;

        /**
         * Stores in either `size` (in bytes) or `blocks` (the number of blocks) the total
         * disc space.
         * Note that when the disc is closed this space is the one occupied by data.
         * Otherwise it is the sum of free and used space.
         * @param bytes a `gint64` * or NULL
         * @param blocks a `gint64` * or NULL
         */
        get_capacity(bytes: bigint | number, blocks: bigint | number): void;

        /**
         * Stores in either `size` (in bytes) or `blocks` (the number of blocks) the size
         * used to store data (including audio on CDs) on the disc.
         * @param bytes a `gint64` * or NULL
         * @param blocks a `gint64` * or NULL
         */
        get_data_size(bytes: bigint | number, blocks: bigint | number): void;

        /**
         * Gets the {@link BraseroMedia.Drive} in which the medium is inserted.
         * @returns a {@link BraseroMedia.Drive}. No need to unref after use.
         */
        get_drive(): Drive;

        /**
         * Stores in either `size` (in bytes) or `blocks` (the number of blocks) the space
         * on the disc that can be used for writing.
         * @param bytes a `gint64` * or NULL
         * @param blocks a `gint64` * or NULL
         */
        get_free_space(bytes: bigint | number, blocks: bigint | number): void;

        /**
         * Stores in either `bytes` (in bytes) or in `sectors` (in blocks) the address where
         * the last session starts. This is useful when creating a multisession image or
         * when reading the contents of this last track.
         * @param bytes a `goffset` * or NULL
         * @param sectors a `goffset` * or NULL
         * @returns a `gboolean`. Returns TRUE if information could be retrieved.
         */
        get_last_data_track_address(bytes: bigint | number, sectors: bigint | number): boolean;

        /**
         * Stores in either `bytes` (in bytes) or in `sectors` (in blocks) the space used by
         * the last track on the medium.
         * @param bytes a `goffset` * or NULL
         * @param sectors a `goffset` * or NULL
         * @returns a `gboolean`. Returns TRUE if information could be retrieved.
         */
        get_last_data_track_space(bytes: bigint | number, sectors: bigint | number): boolean;

        /**
         * Gets the maximum speed that can be used to write to `medium`.
         * Note: the speed are in B/sec.
         * @returns a `guint64`.
         */
        get_max_write_speed(): number;

        /**
         * Gets the address (block number) that can be used to write a new session on `medium`
         * @returns a `gint64`.
         */
        get_next_writable_address(): number;

        /**
         * Gets the medium type and state.
         * @returns a {@link BraseroMedia.Media}.
         */
        get_status(): Media;

        /**
         * Returns a tooltip to be displayed in the UI.
         * It is of the form {content type} {disc type} in {drive name}.
         * @returns a `gchar` *.
         */
        get_tooltip(): string;

        /**
         * Stores in either `bytes` (in bytes) or in `sectors` (in blocks) the address at
         * which the session identified by `num` starts.
         * @param num a `guint`
         * @param bytes a `goffset` * or NULL
         * @param sectors a `goffset` * or NULL
         * @returns a `gboolean`. Returns TRUE if information could be retrieved; FALSE otherwise (usually when track `num` doesn't exist).
         */
        get_track_address(num: number, bytes: bigint | number, sectors: bigint | number): boolean;

        /**
         * Gets the number of tracks on the medium.
         * @returns a `guint`.
         */
        get_track_num(): number;

        /**
         * Stores in either `bytes` (in bytes) or in `sectors` (in blocks) the space used
         * by session `num` on the disc.
         * @param num a `guint`
         * @param bytes a `goffset` * or NULL
         * @param sectors a `goffset` * or NULL
         * @returns a `gboolean`. Returns TRUE if information could be retrieved; FALSE otherwise (usually when track `num` doesn't exist).
         */
        get_track_space(num: number, bytes: bigint | number, sectors: bigint | number): boolean;

        /**
         * Returns the medium type as a string to be displayed in a UI.
         * @returns a `gchar` *.
         */
        get_type_string(): string;

        /**
         * Gets an array holding all possible speeds to write to `medium`.
         * Note: the speed are in B/sec.
         * @returns a `guint64` *.
         */
        get_write_speeds(): number;
    }


    namespace MediumMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal gets emitted when a new drive was detected
             * @signal
             * @run-last
             */
            "drive-added": (arg0: Drive) => void;
            /**
             * This signal gets emitted when a drive is not longer available
             * @signal
             * @run-last
             */
            "drive-removed": (arg0: Drive) => void;
            /**
             * This signal gets emitted when a new medium was detected
             * @signal
             * @run-last
             */
            "medium-added": (arg0: Medium) => void;
            /**
             * This signal gets emitted when a medium is not longer available
             * @signal
             * @run-last
             */
            "medium-removed": (arg0: Medium) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MediumMonitor extends GObject.Object {
        static $gtype: GObject.GType<MediumMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediumMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediumMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MediumMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediumMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediumMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediumMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediumMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediumMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param drive 
         * @virtual
         */
        vfunc_drive_added(drive: Drive): void;

        /**
         * @param drive 
         * @virtual
         */
        vfunc_drive_removed(drive: Drive): void;

        /**
         * @param medium 
         * @virtual
         */
        vfunc_medium_added(medium: Medium): void;

        /**
         * @param medium 
         * @virtual
         */
        vfunc_medium_removed(medium: Medium): void;

        // Methods
        /**
         * Gets the list of available drives that are of the given type.
         * @param type a {@link BraseroMedia.DriveType} to tell what type of drives to include in the list
         * @returns a {@link GLib.SList} of  {@link BraseroMedia.Drive} or NULL. The list must be freed and the element unreffed when finished.
         */
        get_drives(type: DriveType): Drive[];

        /**
         * Obtains the list of available media that are of the given type.
         * @param type the type of {@link BraseroMedia.Medium} that should be in the list
         * @returns a {@link GLib.SList} of  {@link BraseroMedia.Medium} or NULL. The list must be freed and the element unreffed when finished.
         */
        get_media(type: MediaType): Medium[];

        /**
         * Returns if the library is still probing some other media.
         * @returns `true` if it is still probing some media
         */
        is_probing(): boolean;
    }


    namespace MediumSelection {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            /**
             * This signal gets emitted when the selected medium has changed.
             * @signal
             * @action
             * @run-first
             */
            "medium-changed": (arg0: Medium) => void;
            "notify::media-type": (pspec: GObject.ParamSpec) => void;
            "notify::medium": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            media_type: number;
            mediaType: number;
            medium: Medium;
        }
    }

    /**
     * @gir-type Class
     */
    class MediumSelection extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<MediumSelection>;

        // Properties
        /**
         * @default 0
         */
        get media_type(): number;
        set media_type(val: number);

        /**
         * @default 0
         */
        get mediaType(): number;
        set mediaType(val: number);

        get medium(): Medium;
        set medium(val: Medium);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediumSelection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediumSelection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MediumSelection;

        // Signals
        /** @signal */
        connect<K extends keyof MediumSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediumSelection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediumSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediumSelection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediumSelection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediumSelection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param medium 
         * @virtual
         */
        vfunc_format_medium_string(medium: Medium): string;

        /**
         * @param medium 
         * @virtual
         */
        vfunc_medium_changed(medium: Medium): void;

        // Methods
        /**
         * Sets the active medium. Emits the ::medium-changed signal.
         * @param medium a {@link BraseroMedia.Medium} to set as the active one in the selector
         * @returns a `gboolean`. TRUE if it succeeded, FALSE otherwise.
         */
        set_active(medium: Medium): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.set_active
        set_active(...args: never[]): any;

        /**
         * Filters and displays media corresponding to `type`.
         * @param type a {@link BraseroMedia.MediaType}
         */
        show_media_type(type: MediaType): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: Gdk.Event | null): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: Gdk.Event | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

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


    namespace Volume {
        // Signal signatures
        interface SignalSignatures extends Medium.SignalSignatures {
            "notify::drive": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Medium.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Volume extends Medium {
        static $gtype: GObject.GType<Volume>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Volume.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Volume.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Volume.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Volume.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Volume.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Volume.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Volume.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Volume.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Cancels all operations currently running for `volume`
         */
        cancel_current_operation(): void;

        /**
         * Returns the path for mount point for `volume`.
         * @returns a `gchar` *
         */
        get_mount_point(): string;

        /**
         * Returns a string that can be displayed to represent the volume²
         * @returns a `gchar` *. Free when not needed anymore.
         */
        get_name(): string;

        /**
         * Returns whether the volume is currently mounted.
         * @returns a `gboolean`. TRUE if it is mounted.
         */
        is_mounted(): boolean;

        /**
         * Mount `volume`. If wait is set to TRUE, then block (in a GMainLoop) until
         * the operation finishes.
         * `parent_window` is used if an authentification is needed. Then the authentification
         * dialog will be set modal.
         * @param parent_window {@link Gtk.Window} *
         * @param wait `gboolean`
         * @returns a `gboolean`. TRUE if the operation succeeded.
         */
        mount(parent_window: Gtk.Window, wait: boolean): boolean;

        /**
         * Unmount `volume`. If wait is set to TRUE, then block (in a GMainLoop) until
         * the operation finishes.
         * @param wait `gboolean`
         * @returns a `gboolean`. TRUE if the operation succeeded.
         */
        umount(wait: boolean): boolean;
    }


    /**
     * @gir-type Alias
     */
    type DriveClass = typeof Drive;

    /**
     * @gir-type Alias
     */
    type DriveSelectionClass = typeof DriveSelection;

    /**
     * @gir-type Alias
     */
    type MediumClass = typeof Medium;

    /**
     * @gir-type Alias
     */
    type MediumMonitorClass = typeof MediumMonitor;

    /**
     * @gir-type Alias
     */
    type MediumSelectionClass = typeof MediumSelection;

    /**
     * @gir-type Alias
     */
    type VolumeClass = typeof Volume;

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

export default BraseroMedia;

// END
