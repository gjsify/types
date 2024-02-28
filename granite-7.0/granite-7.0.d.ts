/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './granite-7.0-ambient.d.ts';
import './granite-7.0-import.d.ts';
/**
 * Granite-7.0
 */

import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gee from '@girs/gee-0.8';

export namespace Granite {
    class ServicesContractorError extends GLib.Error {
        // Own fields of Granite-7.0.ServicesContractorError

        SERVICE_NOT_AVAILABLE: number;

        // Constructors of Granite-7.0.ServicesContractorError

        constructor(options: { message: string; code: number });
    }

    enum SettingsPageStatusType {
        ERROR,
        OFFLINE,
        SUCCESS,
        WARNING,
        NONE,
    }
    enum SettingsColorScheme {
        NO_PREFERENCE,
        DARK,
        LIGHT,
    }
    const SettingsUriLOCATION: string;
    const SettingsUriONLINE_ACCOUNTS: string;
    const SettingsUriNETWORK: string;
    const SettingsUriPERMISSIONS: string;
    const SettingsUriNOTIFICATIONS: string;
    const SettingsUriSOUND_INPUT: string;
    const SettingsUriSHORTCUTS: string;
    const STYLE_CLASS_ACCENT: string;
    const STYLE_CLASS_BACK_BUTTON: string;
    const STYLE_CLASS_BACKGROUND: string;
    const STYLE_CLASS_BADGE: string;
    const STYLE_CLASS_CARD: string;
    const STYLE_CLASS_CHECKERBOARD: string;
    const STYLE_CLASS_CIRCULAR: string;
    const STYLE_CLASS_COLOR_BUTTON: string;
    const STYLE_CLASS_DEFAULT_DECORATION: string;
    const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
    const STYLE_CLASS_DIALOG_CONTENT_AREA: string;
    const STYLE_CLASS_FRAME: string;
    const STYLE_CLASS_H1_LABEL: string;
    const STYLE_CLASS_H2_LABEL: string;
    const STYLE_CLASS_H3_LABEL: string;
    const STYLE_CLASS_H4_LABEL: string;
    const STYLE_CLASS_KEYCAP: string;
    const STYLE_CLASS_LARGE_ICONS: string;
    const STYLE_CLASS_MODE_SWITCH: string;
    const STYLE_CLASS_OSD: string;
    const STYLE_CLASS_ROUNDED: string;
    const STYLE_CLASS_SIDEBAR: string;
    const STYLE_CLASS_SMALL_LABEL: string;
    const STYLE_CLASS_TERMINAL: string;
    const STYLE_CLASS_TITLE_LABEL: string;
    const STYLE_CLASS_WARMTH: string;
    const STYLE_CLASS_TEMPERATURE: string;
    const STYLE_CLASS_LINKED: string;
    const STYLE_CLASS_MENU: string;
    const STYLE_CLASS_MENUITEM: string;
    const STYLE_CLASS_DIM_LABEL: string;
    const STYLE_CLASS_ERROR: string;
    const STYLE_CLASS_FLAT: string;
    const STYLE_CLASS_MESSAGE_DIALOG: string;
    const STYLE_CLASS_RICH_LIST: string;
    const STYLE_CLASS_SUGGESTED_ACTION: string;
    const STYLE_CLASS_VIEW: string;
    const STYLE_CLASS_WARNING: string;
    const TRANSITION_DURATION_CLOSE: number;
    const TRANSITION_DURATION_IN_PLACE: number;
    const TRANSITION_DURATION_OPEN: number;
    const TOOLTIP_SECONDARY_TEXT_MARKUP: string;
    function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;
    function date_time_get_relative_datetime(date_time: GLib.DateTime): string;
    function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;
    function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;
    function date_time_seconds_to_time(seconds: number): string;
    function services_application_set_badge(count: number, _callback_?: Gio.AsyncReadyCallback<number> | null): void;
    function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress(
        progress: number,
        _callback_?: Gio.AsyncReadyCallback<number> | null,
    ): void;
    function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;
    function widgets_utils_set_color_primary(
        window: Gtk.Widget,
        color: Gdk.RGBA,
        priority: number,
    ): Gtk.CssProvider | null;
    function init(): void;
    function accel_to_string(accel?: string | null): string;
    function markup_accel_tooltip(accels?: string[] | null, description?: string | null): string;
    function contrasting_foreground_color(bg_color: Gdk.RGBA): void;
    module ServicesContractorProxy {
        // Signal callback interfaces

        interface ContractsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class ServicesContractorProxy extends GObject.Object {
        // Owm methods of Granite-7.0.ServicesContractorProxy

        static get_instance(): GraniteServicesContractorProxy;
        static get_all_contracts(): Gee.List;
        static get_contracts_by_mime(mime_type: string): Gee.List;
        static get_contracts_by_mimelist(mime_types: string[]): Gee.List;
        static get_contracts_for_file(file: Gio.File): Gee.List;
        static get_contracts_for_files(files: Gio.File[]): Gee.List;
    }

    module ServicesSystem {
        // Constructor properties interface
    }

    class ServicesSystem extends GObject.Object {
        // Constructors of Granite-7.0.ServicesSystem

        static ['new'](): ServicesSystem;

        // Owm methods of Granite-7.0.ServicesSystem

        static history_is_enabled(): boolean;
    }

    module SettingsPage {
        // Constructor properties interface
    }

    abstract class SettingsPage extends Gtk.Box {
        // Own properties of Granite-7.0.SettingsPage

        status_type: SettingsPageStatusType;
        statusType: SettingsPageStatusType;
        display_widget: Gtk.Widget;
        displayWidget: Gtk.Widget;
        header: string;
        status: string;
        icon_name: string;
        iconName: string;
        title: string;
        child: Gtk.Widget;

        // Owm methods of Granite-7.0.SettingsPage

        get_status_type(): SettingsPageStatusType;
        set_status_type(value: SettingsPageStatusType): void;
        get_display_widget(): Gtk.Widget | null;
        get_header(): string | null;
        get_status(): string;
        set_status(value: string): void;
        get_icon_name(): string | null;
        set_icon_name(value?: string | null): void;
        get_title(): string;
        set_title(value: string): void;
        get_child(): Gtk.Widget;
        set_child(value: Gtk.Widget): void;
    }

    module SimpleSettingsPage {
        // Constructor properties interface
    }

    abstract class SimpleSettingsPage extends SettingsPage {
        // Own properties of Granite-7.0.SimpleSettingsPage

        action_area: Gtk.Box;
        actionArea: Gtk.Box;
        content_area: Gtk.Grid;
        contentArea: Gtk.Grid;
        status_switch: Gtk.Switch;
        statusSwitch: Gtk.Switch;
        activatable: boolean;
        description: string;

        // Owm methods of Granite-7.0.SimpleSettingsPage

        get_action_area(): Gtk.Box;
        get_content_area(): Gtk.Grid;
        get_status_switch(): Gtk.Switch | null;
        get_activatable(): boolean;
        get_description(): string;
        set_description(value: string): void;
    }

    module AccelLabel {
        // Constructor properties interface
    }

    class AccelLabel extends Gtk.Box {
        // Own properties of Granite-7.0.AccelLabel

        action_name: string;
        actionName: string;
        accel_string: string;
        accelString: string;
        label: string;

        // Constructors of Granite-7.0.AccelLabel

        static ['new'](label: string, accel_string?: string | null): AccelLabel;

        static from_action_name(label: string, action_name: string): AccelLabel;

        // Owm methods of Granite-7.0.AccelLabel

        get_action_name(): string;
        set_action_name(value: string): void;
        get_accel_string(): string | null;
        set_accel_string(value?: string | null): void;
        get_label(): string;
        set_label(value: string): void;
    }

    module DatePicker {
        // Constructor properties interface
    }

    class DatePicker extends Gtk.Entry {
        // Own properties of Granite-7.0.DatePicker

        format: string;
        date: GLib.DateTime;

        // Constructors of Granite-7.0.DatePicker

        static with_format(format: string): DatePicker;

        static ['new'](): DatePicker;

        // Owm methods of Granite-7.0.DatePicker

        get_format(): string;
        get_date(): GLib.DateTime;
        set_date(value: GLib.DateTime): void;
    }

    module Dialog {
        // Constructor properties interface
    }

    class Dialog extends Gtk.Dialog {
        // Constructors of Granite-7.0.Dialog

        static ['new'](): Dialog;
    }

    module HeaderLabel {
        // Constructor properties interface
    }

    class HeaderLabel extends Gtk.Widget {
        // Own properties of Granite-7.0.HeaderLabel

        label: string;
        secondary_text: string;
        secondaryText: string;

        // Constructors of Granite-7.0.HeaderLabel

        static ['new'](label: string): HeaderLabel;

        // Owm methods of Granite-7.0.HeaderLabel

        get_label(): string;
        set_label(value: string): void;
        get_secondary_text(): string | null;
        set_secondary_text(value?: string | null): void;
    }

    module HyperTextView {
        // Constructor properties interface
    }

    class HyperTextView extends Gtk.TextView {
        // Constructors of Granite-7.0.HyperTextView

        static ['new'](): HyperTextView;
    }

    module MessageDialog {
        // Constructor properties interface
    }

    class MessageDialog extends Dialog {
        // Own properties of Granite-7.0.MessageDialog

        primary_text: string;
        primaryText: string;
        secondary_text: string;
        secondaryText: string;
        image_icon: Gio.Icon;
        imageIcon: Gio.Icon;
        badge_icon: Gio.Icon;
        badgeIcon: Gio.Icon;
        primary_label: Gtk.Label;
        primaryLabel: Gtk.Label;
        secondary_label: Gtk.Label;
        secondaryLabel: Gtk.Label;
        buttons: Gtk.ButtonsType;
        custom_bin: Gtk.Box;
        customBin: Gtk.Box;

        // Constructors of Granite-7.0.MessageDialog

        static ['new'](
            primary_text: string,
            secondary_text: string,
            image_icon: Gio.Icon,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        static with_image_from_icon_name(
            primary_text: string,
            secondary_text: string,
            image_icon_name: string,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        // Owm methods of Granite-7.0.MessageDialog

        get_primary_text(): string;
        set_primary_text(value: string): void;
        get_secondary_text(): string;
        set_secondary_text(value: string): void;
        get_image_icon(): Gio.Icon;
        set_image_icon(value: Gio.Icon): void;
        get_badge_icon(): Gio.Icon;
        set_badge_icon(value: Gio.Icon): void;
        get_primary_label(): Gtk.Label;
        get_secondary_label(): Gtk.Label;
        get_custom_bin(): Gtk.Box;
        show_error_details(error_message: string): void;
    }

    module ModeSwitch {
        // Constructor properties interface
    }

    class ModeSwitch extends Gtk.Box {
        // Own properties of Granite-7.0.ModeSwitch

        active: boolean;
        primary_icon_gicon: Gio.Icon;
        primaryIconGicon: Gio.Icon;
        primary_icon_name: string;
        primaryIconName: string;
        primary_icon_tooltip_text: string;
        primaryIconTooltipText: string;
        secondary_icon_gicon: Gio.Icon;
        secondaryIconGicon: Gio.Icon;
        secondary_icon_name: string;
        secondaryIconName: string;
        secondary_icon_tooltip_text: string;
        secondaryIconTooltipText: string;

        // Constructors of Granite-7.0.ModeSwitch

        static ['new'](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;

        static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;

        // Owm methods of Granite-7.0.ModeSwitch

        get_active(): boolean;
        set_active(value: boolean): void;
        get_primary_icon_gicon(): Gio.Icon;
        set_primary_icon_gicon(value: Gio.Icon): void;
        get_primary_icon_name(): string;
        set_primary_icon_name(value: string): void;
        get_primary_icon_tooltip_text(): string;
        set_primary_icon_tooltip_text(value: string): void;
        get_secondary_icon_gicon(): Gio.Icon;
        set_secondary_icon_gicon(value: Gio.Icon): void;
        get_secondary_icon_name(): string;
        set_secondary_icon_name(value: string): void;
        get_secondary_icon_tooltip_text(): string;
        set_secondary_icon_tooltip_text(value: string): void;
    }

    module OverlayBar {
        // Constructor properties interface
    }

    class OverlayBar extends Gtk.Widget {
        // Own properties of Granite-7.0.OverlayBar

        overlay: Gtk.Overlay;
        label: string;
        active: boolean;

        // Constructors of Granite-7.0.OverlayBar

        static ['new'](overlay?: Gtk.Overlay | null): OverlayBar;

        // Owm methods of Granite-7.0.OverlayBar

        get_overlay(): Gtk.Overlay | null;
        get_label(): string;
        set_label(value: string): void;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    module Placeholder {
        // Constructor properties interface
    }

    class Placeholder extends Gtk.Widget {
        // Own properties of Granite-7.0.Placeholder

        title: string;
        description: string;
        icon: Gio.Icon;

        // Constructors of Granite-7.0.Placeholder

        static ['new'](title: string): Placeholder;

        // Owm methods of Granite-7.0.Placeholder

        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        append_button(icon: Gio.Icon, label: string, description: string): Gtk.Button;
    }

    module SettingsSidebar {
        // Constructor properties interface
    }

    class SettingsSidebar extends Gtk.Widget {
        // Own properties of Granite-7.0.SettingsSidebar

        stack: Gtk.Stack;
        visible_child_name: string;
        visibleChildName: string;

        // Constructors of Granite-7.0.SettingsSidebar

        static ['new'](stack: Gtk.Stack): SettingsSidebar;

        // Owm methods of Granite-7.0.SettingsSidebar

        get_stack(): Gtk.Stack;
        get_visible_child_name(): string | null;
        set_visible_child_name(value?: string | null): void;
    }

    module Settings {
        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of Granite-7.0.Settings

        prefers_color_scheme: SettingsColorScheme;
        prefersColorScheme: SettingsColorScheme;

        // Owm methods of Granite-7.0.Settings

        static get_default(): Settings;

        // Owm methods of Granite-7.0.Settings

        get_prefers_color_scheme(): SettingsColorScheme;
    }

    module SwitchModelButton {
        // Constructor properties interface
    }

    class SwitchModelButton extends Gtk.ToggleButton {
        // Own properties of Granite-7.0.SwitchModelButton

        text: string;
        description: string;

        // Constructors of Granite-7.0.SwitchModelButton

        static ['new'](text: string): SwitchModelButton;

        // Owm methods of Granite-7.0.SwitchModelButton

        get_text(): string;
        set_text(value: string): void;
        get_description(): string | null;
        set_description(value?: string | null): void;
    }

    module TimePicker {
        // Signal callback interfaces

        interface TimeChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class TimePicker extends Gtk.Entry {
        // Own properties of Granite-7.0.TimePicker

        format_12: string;
        format12: string;
        format_24: string;
        format24: string;
        time: GLib.DateTime;

        // Constructors of Granite-7.0.TimePicker

        static with_format(format_12: string, format_24: string): TimePicker;

        static ['new'](): TimePicker;

        // Owm methods of Granite-7.0.TimePicker

        get_format_12(): string;
        get_format_24(): string;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
    }

    module Toast {
        // Signal callback interfaces

        interface Closed {
            (): void;
        }

        interface DefaultAction {
            (): void;
        }

        // Constructor properties interface
    }

    class Toast extends Gtk.Widget {
        // Own properties of Granite-7.0.Toast

        title: string;

        // Constructors of Granite-7.0.Toast

        static ['new'](title: string): Toast;

        // Owm methods of Granite-7.0.Toast

        get_title(): string;
        set_title(value: string): void;
        set_default_action(label?: string | null): void;
        send_notification(): void;
    }

    module ValidatedEntry {
        // Constructor properties interface
    }

    class ValidatedEntry extends Gtk.Entry {
        // Own properties of Granite-7.0.ValidatedEntry

        is_valid: boolean;
        isValid: boolean;
        min_length: number;
        minLength: number;
        regex: GLib.Regex;

        // Constructors of Granite-7.0.ValidatedEntry

        static from_regex(regex_arg: GLib.Regex): ValidatedEntry;

        static ['new'](): ValidatedEntry;

        // Owm methods of Granite-7.0.ValidatedEntry

        get_is_valid(): boolean;
        set_is_valid(value: boolean): void;
        get_min_length(): number;
        set_min_length(value: number): void;
        get_regex(): GLib.Regex;
        set_regex(value: GLib.Regex): void;
    }

    class ServicesContractorProxyClass {}

    class ServicesContractorProxyPrivate {}

    class ServicesSystemClass {}

    class ServicesSystemPrivate {}

    class ServicesContractIface {}

    class ServicesSettingsSerializableIface {}

    class SettingsPageClass {}

    class SettingsPagePrivate {}

    class SimpleSettingsPageClass {}

    class SimpleSettingsPagePrivate {}

    class AccelLabelClass {}

    class AccelLabelPrivate {}

    class DatePickerClass {}

    class DatePickerPrivate {}

    class DialogClass {}

    class DialogPrivate {}

    class HeaderLabelClass {}

    class HeaderLabelPrivate {}

    class HyperTextViewClass {}

    class HyperTextViewPrivate {}

    class MessageDialogClass {}

    class MessageDialogPrivate {}

    class ModeSwitchClass {}

    class ModeSwitchPrivate {}

    class OverlayBarClass {}

    class OverlayBarPrivate {}

    class PlaceholderClass {}

    class PlaceholderPrivate {}

    class SettingsSidebarClass {}

    class SettingsSidebarPrivate {}

    class SettingsClass {}

    class SettingsPrivate {}

    class SwitchModelButtonClass {}

    class SwitchModelButtonPrivate {}

    class TimePickerClass {}

    class TimePickerPrivate {}

    class ToastClass {}

    class ToastPrivate {}

    class ValidatedEntryClass {}

    class ValidatedEntryPrivate {}

    interface ServicesContract {
        // Owm methods of Granite-7.0.ServicesContract

        get_display_name(): string;
        get_description(): string;
        get_icon(): Gio.Icon;
        execute_with_file(file: Gio.File): void;
        execute_with_files(files: Gio.File[]): void;

        // Own virtual methods of Granite-7.0.ServicesContract

        vfunc_get_display_name(): string;
        vfunc_get_description(): string;
        vfunc_get_icon(): Gio.Icon;
        vfunc_execute_with_file(file: Gio.File): void;
        vfunc_execute_with_files(files: Gio.File[]): void;
    }

    interface ServicesSettingsSerializable {
        // Owm methods of Granite-7.0.ServicesSettingsSerializable

        settings_serialize(): string;
        settings_deserialize(s: string): void;

        // Own virtual methods of Granite-7.0.ServicesSettingsSerializable

        vfunc_settings_serialize(): string;
        vfunc_settings_deserialize(s: string): void;
    }

    // Workaround
    /** @ignore */
    export module GraniteServicesSettingsSerializable {
        export interface ConstructorProperties extends ServicesSettingsSerializable.ConstructorProperties {}
    }
    /** @ignore */
    export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
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

export default Granite;
// END
