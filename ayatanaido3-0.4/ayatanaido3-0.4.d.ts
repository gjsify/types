/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './ayatanaido3-0.4-ambient.d.ts';
import './ayatanaido3-0.4-import.d.ts';
/**
 * AyatanaIdo3-0.4
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
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
    enum RangeStyle {
        DEFAULT,
        SMALL,
    }
    enum ScaleMenuItemStyle {
        NONE,
        IMAGE,
        LABEL,
    }
    enum TimelineDirection {
        FORWARD,
        BACKWARD,
    }
    enum TimelineProgressType {
        LINEAR,
        SINUSOIDAL,
        EXPONENTIAL,
        EASE_IN_EASE_OUT,
    }
    module CalendarMenuItem {
        // Signal callback interfaces

        interface DaySelected {
            (): void;
        }

        interface DaySelectedDoubleClick {
            (): void;
        }

        interface MonthChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class CalendarMenuItem extends Gtk.MenuItem {
        // Constructors of AyatanaIdo3-0.4.CalendarMenuItem

        static ['new'](): CalendarMenuItem;

        static new_from_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): CalendarMenuItem;

        // Owm methods of AyatanaIdo3-0.4.CalendarMenuItem

        /**
         * Remove all visual markers.
         */
        clear_marks(): void;
        /**
         * Returns the calendar associated with this menu item.
         * @returns The #GtkCalendar used in this item.
         */
        get_calendar(): Gtk.Widget;
        /**
         * Gets the selected date.
         */
        get_date(): void;
        /**
         * Get the display options for the calendar.
         * @returns the display options in use
         */
        get_display_options(): Gtk.CalendarDisplayOptions;
        /**
         * Places a visual marker on a particular day.
         * @param day the day number to unmark between 1 and 31.
         * @returns #TRUE
         */
        mark_day(day: number): boolean;
        /**
         * Set the date shown on the calendar.
         * @param year the year to show (e.g. 2011).
         * @param month a month number (between 0 and 11).
         * @param day The day number (between 1 and 31).
         * @returns #TRUE
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
         * @returns #TRUE
         */
        unmark_day(day: number): boolean;
    }

    module EntryMenuItem {
        // Constructor properties interface
    }

    class EntryMenuItem extends Gtk.MenuItem {
        // Constructors of AyatanaIdo3-0.4.EntryMenuItem

        static ['new'](): EntryMenuItem;

        // Owm methods of AyatanaIdo3-0.4.EntryMenuItem

        /**
         * Get the #GtkEntry used in this menu item.
         * @returns The #GtkEntry inside this menu item.
         */
        get_entry(): Gtk.Widget;
    }

    module Range {
        // Constructor properties interface
    }

    class Range extends Gtk.Scale {
        // Constructors of AyatanaIdo3-0.4.Range

        static ['new'](adj: GObject.Object, style: RangeStyle): Range;
    }

    module ScaleMenuItem {
        // Signal callback interfaces

        interface PrimaryClicked {
            (): void;
        }

        interface SecondaryClicked {
            (): void;
        }

        interface SliderGrabbed {
            (): void;
        }

        interface SliderReleased {
            (): void;
        }

        interface ValueChanged {
            (value: number): void;
        }

        // Constructor properties interface
    }

    class ScaleMenuItem extends Gtk.MenuItem {
        // Own properties of AyatanaIdo3-0.4.ScaleMenuItem

        adjustment: Gtk.Adjustment;
        reverse_scroll_events: boolean;
        reverseScrollEvents: boolean;

        // Constructors of AyatanaIdo3-0.4.ScaleMenuItem

        static ['new'](label: string, size: RangeStyle, adjustment: Gtk.Adjustment): ScaleMenuItem;

        static new_from_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): ScaleMenuItem;

        static new_with_range(
            label: string,
            size: RangeStyle,
            value: number,
            min: number,
            max: number,
            step: number,
        ): ScaleMenuItem;

        // Owm methods of AyatanaIdo3-0.4.ScaleMenuItem

        /**
         * Retrieves a pointer to the image widget used in the primary slot.
         * Whether this is visible depends upon the return value from
         * ido_scale_menu_item_get_style().
         * @returns A #GtkWidget pointer for the primary image.
         */
        get_primary_image(): Gtk.Widget;
        /**
         * Retrieves a string of the text for the primary label widget.
         * Whether this is visible depends upon the return value from
         * ido_scale_menu_item_get_style().
         * @returns The label text.
         */
        get_primary_label(): string;
        /**
         * Retrieves the scale widget.
         * @returns The #IdoRange in this item
         */
        get_scale(): Gtk.Widget;
        /**
         * Retrieves a pointer to the image widget used in the secondary slot.
         * Whether this is visible depends upon the return value from
         * ido_scale_menu_item_get_style().
         * @returns A #GtkWidget pointer for the secondary image.
         */
        get_secondary_image(): Gtk.Widget;
        /**
         * Retrieves a string of the text for the secondary label widget.
         * Whether this is visible depends upon the return value from
         * ido_scale_menu_item_get_style().
         * @returns The label text.
         */
        get_secondary_label(): string;
        /**
         * Retrieves the type of widgets being used for the primary and
         * secondary widget slots.  This could be images, labels, or nothing.
         * @returns A #IdoScaleMenuItemStyle enum describing the style.
         */
        get_style(): ScaleMenuItemStyle;
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
         * ido_scale_menu_item_get_style() is set to %IDO_SCALE_MENU_ITEM_STYLE_LABEL.
         * @param label The label text
         */
        set_primary_label(label: string): void;
        /**
         * Sets the text for the label widget in the secondary slot.  This
         * widget will only be visibile if the return value of
         * ido_scale_menu_item_get_style() is set to %IDO_SCALE_MENU_ITEM_STYLE_LABEL.
         * @param label The label text
         */
        set_secondary_label(label: string): void;
        /**
         * Sets the type of widgets being used for the primary and
         * secondary widget slots.  This could be images, labels, or nothing.
         * @param style Set the style use for the primary and secondary widget slots.
         */
        set_style(style: ScaleMenuItemStyle): void;
    }

    module SwitchMenuItem {
        // Constructor properties interface
    }

    class SwitchMenuItem extends Gtk.CheckMenuItem {
        // Constructors of AyatanaIdo3-0.4.SwitchMenuItem

        static ['new'](): SwitchMenuItem;

        static new_from_menu_model(menuitem: Gio.MenuItem, actions: Gio.ActionGroup): SwitchMenuItem;

        // Owm methods of AyatanaIdo3-0.4.SwitchMenuItem

        /**
         * Get the #GtkContainer to add additional widgets into.
         *
         * This function is dperecated.
         * @returns The #GtkContainer to add additional widgets into.
         */
        get_content_area(): Gtk.Container;
        /**
         * Set the icon of `item` to `icon`.
         * @param icon a #GIcon
         */
        set_icon(icon?: Gio.Icon | null): void;
        /**
         * Set the label of `item` to `label`.
         * @param label a string to set as the label of @item
         */
        set_label(label: string): void;
    }

    module Timeline {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        interface Frame {
            (progress: number): void;
        }

        interface Paused {
            (): void;
        }

        interface Started {
            (): void;
        }

        // Constructor properties interface
    }

    class Timeline extends GObject.Object {
        // Own properties of AyatanaIdo3-0.4.Timeline

        duration: number;
        fps: number;
        loop: boolean;
        screen: Gdk.Screen;

        // Constructors of AyatanaIdo3-0.4.Timeline

        static ['new'](duration: number): Timeline;

        static new_for_screen(duration: number, screen: Gdk.Screen): Timeline;

        // Owm methods of AyatanaIdo3-0.4.Timeline

        /**
         * Transform a linear progress position using the given transform.
         * @param linear_progress The progress from 0.0 (start) to 1.0 (end)
         * @param progress_type The progress transform to apply
         */
        static calculate_progress(linear_progress: number, progress_type: TimelineProgressType): number;

        // Owm methods of AyatanaIdo3-0.4.Timeline

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
         * @returns %TRUE if the timeline loops
         */
        get_loop(): boolean;
        /**
         * Get the progress on the timeline.
         * @returns The progress from 0.0 (start) to 1.0 (end)
         */
        get_progress(): number;
        /**
         * Get the screen this timeline is running on.
         * @returns The #GdkScreen this timeline is running on.
         */
        get_screen(): Gdk.Screen;
        /**
         * Returns whether the timeline is running or not.
         * @returns %TRUE if the timeline is running
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
         * @param loop %TRUE to make the timeline loop
         */
        set_loop(loop: boolean): void;
        /**
         * Set the progress on the timeline.
         * @param progress The progress from 0.0 (start) to 1.0 (end)
         */
        set_progress(progress: number): void;
        /**
         * Set the screen the timeline is running on.
         * @param screen A #GdkScreen to use
         */
        set_screen(screen: Gdk.Screen): void;
        /**
         * Runs the timeline from the current frame.
         */
        start(): void;
    }

    class CalendarMenuItemClass {}

    class EntryMenuItemClass {}

    class RangeClass {}

    class ScaleMenuItemClass {}

    class SwitchMenuItemClass {}

    class TimelineClass {}

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
