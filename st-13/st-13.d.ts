/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './st-13-ambient.d.ts';
import './st-13-import.d.ts';
/**
 * St-13
 */

import type Meta from '@girs/meta-13';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-13';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-13';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-13';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-13';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Cally from '@girs/cally-13';

export namespace St {
    enum BackgroundSize {
        AUTO,
        CONTAIN,
        COVER,
        FIXED,
    }
    enum ClipboardType {
        PRIMARY,
        CLIPBOARD,
    }
    /**
     * Used to target a particular corner of a #StThemeNode element.
     */
    enum Corner {
        /**
         * The top-right corner.
         */
        TOPLEFT,
        /**
         * The top-right corner.
         */
        TOPRIGHT,
        /**
         * The bottom-right corner.
         */
        BOTTOMRIGHT,
        /**
         * The bottom-left corner.
         */
        BOTTOMLEFT,
    }
    /**
     * Enumeration for focus direction.
     */
    enum DirectionType {
        /**
         * Move forward.
         */
        TAB_FORWARD,
        /**
         * Move backward.
         */
        TAB_BACKWARD,
        /**
         * Move up.
         */
        UP,
        /**
         * Move down.
         */
        DOWN,
        /**
         * Move left.
         */
        LEFT,
        /**
         * Move right.
         */
        RIGHT,
    }
    /**
     * Used to specify options when rendering gradients.
     */
    enum GradientType {
        /**
         * No gradient.
         */
        NONE,
        /**
         * A vertical gradient.
         */
        VERTICAL,
        /**
         * A horizontal gradient.
         */
        HORIZONTAL,
        /**
         * Lookup the style requested in the icon name.
         */
        RADIAL,
    }
    /**
     * Used to specify options when looking up icons.
     */
    enum IconStyle {
        /**
         * Lookup the style requested in the icon name.
         */
        REQUESTED,
        /**
         * Try to always load regular icons, even when symbolic
         *   icon names are given.
         */
        REGULAR,
        /**
         * Try to always load symbolic icons, even when regular
         *   icon names are given.
         */
        SYMBOLIC,
    }
    /**
     * Error codes for StIconTheme operations.
     */
    class IconThemeError extends GLib.Error {
        // Own fields of St-13.IconThemeError

        /**
         * The icon specified does not exist in the theme
         */
        NOT_FOUND: number;
        /**
         * An unspecified error occurred.
         */
        FAILED: number;

        // Constructors of St-13.IconThemeError

        constructor(options: { message: string; code: number });

        // Owm methods of St-13.IconThemeError

        static quark(): GLib.Quark;
    }

    enum PolicyType {
        ALWAYS,
        AUTOMATIC,
        NEVER,
        EXTERNAL,
    }
    /**
     * Used to target a particular side of a #StThemeNode element.
     */
    enum Side {
        /**
         * The top side.
         */
        TOP,
        /**
         * The right side.
         */
        RIGHT,
        /**
         * The bottom side.
         */
        BOTTOM,
        /**
         * The left side.
         */
        LEFT,
    }
    enum SystemColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }
    /**
     * Used to align text in a label.
     */
    enum TextAlign {
        /**
         * Text is aligned at the beginning of the label.
         */
        LEFT,
        /**
         * Text is aligned in the middle of the label.
         */
        CENTER,
        /**
         * Text is aligned at the end of the label.
         */
        RIGHT,
        JUSTIFY,
    }
    enum TextureCachePolicy {
        NONE,
        FOREVER,
    }
    /**
     * Creates a string describing `actor,` for use in debugging. This
     * includes the class name and actor name (if any), plus if `actor`
     * is an #StWidget, its style class and pseudo class names.
     * @param actor a #ClutterActor
     * @returns the debug name.
     */
    function describe_actor(actor: Clutter.Actor): string;
    function icon_theme_error_quark(): GLib.Quark;
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string): void;
    }
    interface ClipboardContentCallbackFunc {
        (clipboard: Clipboard, bytes: GLib.Bytes): void;
    }
    interface EntryCursorFunc {
        (entry: Entry, use_ibeam: boolean, data?: any | null): void;
    }
    /**
     * A mask representing which mouse buttons an #StButton responds to.
     */
    enum ButtonMask {
        /**
         * button 1 (left)
         */
        ONE,
        /**
         * button 2 (middle)
         */
        TWO,
        /**
         * button 3 (right)
         */
        THREE,
    }
    /**
     * Used to specify options for st_icon_theme_lookup_icon()
     */
    enum IconLookupFlags {
        /**
         * Never get SVG icons, even if gdk-pixbuf
         *   supports them. Cannot be used together with %ST_ICON_LOOKUP_FORCE_SVG.
         */
        NO_SVG,
        /**
         * Get SVG icons, even if gdk-pixbuf
         *   doesn’t support them.
         *   Cannot be used together with %ST_ICON_LOOKUP_NO_SVG.
         */
        FORCE_SVG,
        /**
         * Try to shorten icon name at '-'
         *   characters before looking at inherited themes. This flag is only
         *   supported in functions that take a single icon name. For more general
         *   fallback, see st_icon_theme_choose_icon().
         */
        GENERIC_FALLBACK,
        /**
         * Always get the icon scaled to the
         *   requested size.
         */
        FORCE_SIZE,
        /**
         * Try to always load regular icons, even
         *   when symbolic icon names are given.
         */
        FORCE_REGULAR,
        /**
         * Try to always load symbolic icons, even
         *   when regular icon names are given.
         */
        FORCE_SYMBOLIC,
        /**
         * Try to load a variant of the icon for left-to-right
         *   text direction.
         */
        DIR_LTR,
        /**
         * Try to load a variant of the icon for right-to-left
         *   text direction.
         */
        DIR_RTL,
    }
    /**
     * Flags used to determine the decoration of text.
     *
     * Not that neither %ST_TEXT_DECORATION_OVERLINE or %ST_TEXT_DECORATION_BLINK
     * are implemented, currently.
     */
    enum TextDecoration {
        UNDERLINE,
        /**
         * Text is overlined
         */
        OVERLINE,
        /**
         * Text is striked out
         */
        LINE_THROUGH,
        /**
         * Text blinks
         */
        BLINK,
    }
    module Adjustment {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class Adjustment extends GObject.Object {
        // Own properties of St-13.Adjustment

        /**
         * If the adjustment is used as #ClutterAnimatable for a
         * #ClutterPropertyTransition, this property is used to determine which
         * monitor should drive the animation.
         */
        actor: Clutter.Actor;
        /**
         * The minimum value of the adjustment.
         */
        lower: number;
        /**
         * The page increment of the adjustment.
         */
        page_increment: number;
        /**
         * The page increment of the adjustment.
         */
        pageIncrement: number;
        /**
         * The page size of the adjustment.
         *
         * Note that the page-size is irrelevant and should be set to zero if the
         * adjustment is used for a simple scalar value.
         */
        page_size: number;
        /**
         * The page size of the adjustment.
         *
         * Note that the page-size is irrelevant and should be set to zero if the
         * adjustment is used for a simple scalar value.
         */
        pageSize: number;
        /**
         * The step increment of the adjustment.
         */
        step_increment: number;
        /**
         * The step increment of the adjustment.
         */
        stepIncrement: number;
        /**
         * The maximum value of the adjustment.
         *
         * Note that values will be restricted by `upper - page-size` if
         * #StAdjustment:page-size is non-zero.
         */
        upper: number;
        /**
         * The value of the adjustment.
         */
        value: number;

        // Constructors of St-13.Adjustment

        static ['new'](
            actor: Clutter.Actor | null,
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): Adjustment;

        // Owm methods of St-13.Adjustment

        /**
         * Add a #ClutterTransition for the adjustment. If the transition stops, it will
         * be automatically removed if #ClutterTransition:remove-on-complete is %TRUE.
         * @param name a unique name for the transition
         * @param transition a #ClutterTransition
         */
        add_transition(name: string, transition: Clutter.Transition): void;
        /**
         * Adjusts the adjustment using delta values from a scroll event.
         * You should use this instead of using st_adjustment_set_value()
         * as this method will tweak the values directly using the same
         * math as GTK+, to ensure that scrolling is consistent across
         * the environment.
         * @param delta A delta, retrieved directly from clutter_event_get_scroll_delta()   or similar.
         */
        adjust_for_scroll_event(delta: number): void;
        /**
         * Set #StAdjustment:value to a value clamped between `lower` and `upper`. The
         * clamping described by st_adjustment_set_value() still applies.
         * @param lower the lower value
         * @param upper the upper value
         */
        clamp_page(lower: number, upper: number): void;
        /**
         * Get the #ClutterTransition for `name` previously added with
         * st_adjustment_add_transition() or %NULL if not found.
         * @param name a transition name
         * @returns a #ClutterTransition
         */
        get_transition(name: string): Clutter.Transition | null;
        /**
         * Gets the current value of the adjustment. See st_adjustment_set_value().
         * @returns The current value of the adjustment
         */
        get_value(): number;
        /**
         * Gets all of `adjustment'`s values at once.
         */
        get_values(): void;
        remove_transition(name: string): void;
        /**
         * Sets the #StAdjustment value. The value is clamped to lie between
         * #StAdjustment:lower and #StAdjustment:upper - #StAdjustment:page-size.
         * @param value the new value
         */
        set_value(value: number): void;
        /**
         * Sets all properties of the adjustment at once.
         *
         * Use this function to avoid multiple emissions of the #GObject::notify and
         * #StAdjustment::changed signals. See st_adjustment_set_lower() for an
         * alternative way of compressing multiple emissions of #GObject::notify and
         * #StAdjustmet::changed into one of each.
         * @param value the new value
         * @param lower the new minimum value
         * @param upper the new maximum value
         * @param step_increment the new step increment
         * @param page_increment the new page increment
         * @param page_size the new page size
         */
        set_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): void;
    }

    module Bin {
        // Constructor properties interface
    }

    class Bin extends Widget {
        // Own properties of St-13.Bin

        /**
         * The child #ClutterActor of the #StBin container.
         */
        child: Clutter.Actor;

        // Constructors of St-13.Bin

        static ['new'](): Bin;

        // Owm methods of St-13.Bin

        /**
         * Gets the #ClutterActor child for `bin`.
         * @returns a #ClutterActor, or %NULL
         */
        get_child(): Clutter.Actor | null;
        /**
         * Sets `child` as the child of `bin`.
         *
         * If `bin` already has a child, the previous child is removed.
         * @param child a #ClutterActor, or %NULL
         */
        set_child(child?: Clutter.Actor | null): void;
    }

    module BorderImage {
        // Constructor properties interface
    }

    class BorderImage extends GObject.Object {
        // Constructors of St-13.BorderImage

        static ['new'](
            file: Gio.File,
            border_top: number,
            border_right: number,
            border_bottom: number,
            border_left: number,
            scale_factor: number,
        ): BorderImage;

        // Owm methods of St-13.BorderImage

        /**
         * Check if two #StBorderImage objects are identical.
         * @param other a different #StBorderImage
         * @returns %TRUE if the two border image objects are identical
         */
        equal(other: BorderImage): boolean;
        get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
        /**
         * Get the #GFile for `image`.
         * @returns a #GFile
         */
        get_file(): Gio.File;
    }

    module BoxLayout {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class BoxLayout extends Viewport {
        // Own properties of St-13.BoxLayout

        /**
         * A convenience property for the #ClutterBoxLayout:pack-start property of the
         * internal layout for #StBoxLayout.
         */
        pack_start: boolean;
        /**
         * A convenience property for the #ClutterBoxLayout:pack-start property of the
         * internal layout for #StBoxLayout.
         */
        packStart: boolean;
        /**
         * A convenience property for the #ClutterBoxLayout:vertical property of the
         * internal layout for #StBoxLayout.
         */
        vertical: boolean;

        // Constructors of St-13.BoxLayout

        static ['new'](): BoxLayout;

        // Owm methods of St-13.BoxLayout

        get_pack_start(): boolean;
        /**
         * Get the value of the #StBoxLayout:vertical property.
         * @returns %TRUE if the layout is vertical
         */
        get_vertical(): boolean;
        set_pack_start(pack_start: boolean): void;
        /**
         * Set the value of the #StBoxLayout:vertical property
         * @param vertical %TRUE if the layout should be vertical
         */
        set_vertical(vertical: boolean): void;
    }

    module Button {
        // Signal callback interfaces

        interface Clicked {
            (clicked_button: number): void;
        }

        // Constructor properties interface
    }

    class Button extends Bin {
        // Own properties of St-13.Button

        /**
         * Which buttons will trigger the #StButton::clicked signal.
         */
        button_mask: ButtonMask;
        /**
         * Which buttons will trigger the #StButton::clicked signal.
         */
        buttonMask: ButtonMask;
        /**
         * If #StButton:toggle-mode is %TRUE, indicates if the #StButton is toggled
         * "on" or "off".
         *
         * When the value is %TRUE, the #StButton will have the `checked` CSS
         * pseudo-class set.
         */
        checked: boolean;
        /**
         * The icon name of the #StButton.
         */
        icon_name: string;
        /**
         * The icon name of the #StButton.
         */
        iconName: string;
        /**
         * The label of the #StButton.
         */
        label: string;
        /**
         * In contrast to #StButton:checked, this property indicates whether the
         * #StButton is being actively pressed, rather than just in the "on" state.
         */
        readonly pressed: boolean;
        /**
         * Whether the #StButton is operating in toggle mode (on/off).
         */
        toggle_mode: boolean;
        /**
         * Whether the #StButton is operating in toggle mode (on/off).
         */
        toggleMode: boolean;

        // Constructors of St-13.Button

        static ['new'](): Button;

        static new_with_label(text: string): Button;

        // Owm methods of St-13.Button

        /**
         * If this widget is holding a pointer grab, this function will
         * will ungrab it, and reset the #StButton:pressed state.  The effect is
         * similar to if the user had released the mouse button, but without
         * emitting the #StButton::clicked signal.
         *
         * This function is useful if for example you want to do something
         * after the user is holding the mouse button for a given period of
         * time, breaking the grab.
         */
        fake_release(): void;
        /**
         * Gets the mask of mouse buttons that `button` emits the
         * #StButton::clicked signal for.
         * @returns the mask of mouse buttons that @button emits the #StButton::clicked signal for.
         */
        get_button_mask(): ButtonMask;
        /**
         * Get the #StButton:checked property of a #StButton that is in toggle mode.
         * @returns %TRUE if the button is checked, or %FALSE if not
         */
        get_checked(): boolean;
        /**
         * Get the icon name of the button. If the button isn't showing an icon,
         * the return value will be %NULL.
         * @returns the icon name of the button
         */
        get_icon_name(): string | null;
        /**
         * Get the text displayed on the button. If the label is empty, an empty string
         * will be returned instead of %NULL.
         * @returns the text for the button
         */
        get_label(): string;
        /**
         * Get the toggle mode status of the button.
         * @returns %TRUE if toggle mode is set, otherwise %FALSE
         */
        get_toggle_mode(): boolean;
        /**
         * Sets which mouse buttons `button` emits #StButton::clicked for.
         * @param mask the mask of mouse buttons that @button responds to
         */
        set_button_mask(mask: ButtonMask): void;
        /**
         * Set the #StButton:checked property of the button. This is only really useful
         * if the button has #StButton:toggle-mode property set to %TRUE.
         * @param checked %TRUE or %FALSE
         */
        set_checked(checked: boolean): void;
        /**
         * Adds an `StIcon` with the given icon name as a child.
         *
         * If `button` already contains a child actor, that child will
         * be removed and replaced with the icon.
         * @param icon_name an icon name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets the text displayed on the button.
         * @param text text to set the label to
         */
        set_label(text?: string | null): void;
        /**
         * Enables or disables toggle mode for the button. In toggle mode, the active
         * state will be "toggled" when the user clicks the button.
         * @param toggle %TRUE or %FALSE
         */
        set_toggle_mode(toggle: boolean): void;
    }

    module Clipboard {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Clipboard extends GObject.Object {
        // Owm methods of St-13.Clipboard

        /**
         * Get the global #StClipboard object that represents the clipboard.
         */
        static get_default(): Clipboard;

        // Owm methods of St-13.Clipboard

        /**
         * Request the data from the clipboard in #GBytes form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param mimetype The mimetype to get content for
         * @param callback function to be called when the type is retrieved
         */
        get_content(type: ClipboardType, mimetype: string, callback: ClipboardContentCallbackFunc): void;
        /**
         * Gets a list of the mimetypes supported by the default #StClipboard.
         * @param type
         * @returns the supported mimetypes
         */
        get_mimetypes(type: ClipboardType): string[];
        /**
         * Request the data from the clipboard in text form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param callback function to be called when the text is retrieved
         */
        get_text(type: ClipboardType, callback: ClipboardCallbackFunc): void;
        /**
         * Sets the clipboard content to `bytes`.
         *
         * `mimetype` is a semi-colon separated list of mime-type strings.
         * @param type The type of clipboard that you want to set
         * @param mimetype content mimetype
         * @param bytes content data
         */
        set_content(type: ClipboardType, mimetype: string, bytes: GLib.Bytes): void;
        /**
         * Sets text as the current contents of the clipboard.
         * @param type The type of clipboard that you want to set
         * @param text text to copy to the clipboard
         */
        set_text(type: ClipboardType, text: string): void;
    }

    module DrawingArea {
        // Signal callback interfaces

        interface Repaint {
            (): void;
        }

        // Constructor properties interface
    }

    class DrawingArea extends Widget {
        // Owm methods of St-13.DrawingArea

        /**
         * Gets the Cairo context to paint to. This function must only be called
         * from a signal handler or virtual function for the #StDrawingArea::repaint
         * signal.
         *
         * JavaScript code must call the special dispose function before returning from
         * the signal handler or virtual function to avoid leaking memory:
         *
         *
         * ```&lt;!-- language="JavaScript" --&gt;
         * function onRepaint(area) {
         *     let cr = area.get_context();
         *
         *     // Draw to the context
         *
         *     cr.$dispose();
         * }
         *
         * let area = new St.DrawingArea();
         * area.connect('repaint', onRepaint);
         * ```
         *
         * @returns the Cairo context for the paint operation
         */
        get_context(): cairo.Context;
        /**
         * Gets the size of the cairo surface being painted to, which is equal
         * to the size of the content area of the widget. This function must
         * only be called from a signal handler for the #StDrawingArea::repaint signal.
         */
        get_surface_size(): void;
        /**
         * Will cause the actor to emit a #StDrawingArea::repaint signal before it is
         * next drawn to the scene. Useful if some parameters for the area being
         * drawn other than the size or style have changed. Note that
         * clutter_actor_queue_redraw() will simply result in the same
         * contents being drawn to the scene again.
         */
        queue_repaint(): void;
    }

    module Entry {
        // Signal callback interfaces

        interface PrimaryIconClicked {
            (): void;
        }

        interface SecondaryIconClicked {
            (): void;
        }

        // Constructor properties interface
    }

    class Entry extends Widget {
        // Own properties of St-13.Entry

        /**
         * The internal #ClutterText actor supporting the #StEntry.
         */
        readonly clutter_text: Clutter.Text;
        /**
         * The internal #ClutterText actor supporting the #StEntry.
         */
        readonly clutterText: Clutter.Text;
        /**
         * A #ClutterActor to display when the entry is empty and unfocused. Setting
         * this will replace the actor displaying #StEntry:hint-text.
         */
        hint_actor: Clutter.Actor;
        /**
         * A #ClutterActor to display when the entry is empty and unfocused. Setting
         * this will replace the actor displaying #StEntry:hint-text.
         */
        hintActor: Clutter.Actor;
        /**
         * The text to display when the entry is empty and unfocused. Setting this
         * will replace the actor of #StEntry::hint-actor.
         */
        hint_text: string;
        /**
         * The text to display when the entry is empty and unfocused. Setting this
         * will replace the actor of #StEntry::hint-actor.
         */
        hintText: string;
        /**
         * The #ClutterInputContentHintFlags providing additional hints (beyond
         * #StEntry:input-purpose) that allow input methods to fine-tune their
         * behaviour.
         */
        input_hints: Clutter.InputContentHintFlags;
        /**
         * The #ClutterInputContentHintFlags providing additional hints (beyond
         * #StEntry:input-purpose) that allow input methods to fine-tune their
         * behaviour.
         */
        inputHints: Clutter.InputContentHintFlags;
        /**
         * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
         * input methods to decide which keys should be presented to the user.
         */
        input_purpose: Clutter.InputContentPurpose;
        /**
         * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
         * input methods to decide which keys should be presented to the user.
         */
        inputPurpose: Clutter.InputContentPurpose;
        /**
         * The #ClutterActor acting as the primary icon at the start of the #StEntry.
         */
        primary_icon: Clutter.Actor;
        /**
         * The #ClutterActor acting as the primary icon at the start of the #StEntry.
         */
        primaryIcon: Clutter.Actor;
        /**
         * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
         */
        secondary_icon: Clutter.Actor;
        /**
         * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
         */
        secondaryIcon: Clutter.Actor;
        /**
         * The current text value of the #StEntry.
         */
        text: string;

        // Constructors of St-13.Entry

        static ['new'](text?: string | null): Entry;

        // Owm methods of St-13.Entry

        /**
         * Retrieve the internal #ClutterText so that extra parameters can be set.
         * @returns the #ClutterText used by @entry
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the value of the #StEntry:hint-actor property.
         * @returns a #ClutterActor
         */
        get_hint_actor(): Clutter.Actor | null;
        /**
         * Gets the text that is displayed when the entry is empty and unfocused or
         * %NULL if the #StEntry:hint-actor was set to an actor that is not a #StLabel.
         *
         * Unlike st_entry_get_text() this function may return %NULL if
         * #StEntry:hint-actor is not a #StLabel.
         * @returns the current value of the hint property
         */
        get_hint_text(): string | null;
        /**
         * Gets the value of the #StEntry:input-hints property.
         * @returns the input hints for the entry
         */
        get_input_hints(): Clutter.InputContentHintFlags;
        /**
         * Gets the value of the #StEntry:input-purpose property.
         * @returns the input purpose of the entry
         */
        get_input_purpose(): Clutter.InputContentPurpose;
        /**
         * Get the value of the #StEntry:primary-icon property.
         * @returns a #ClutterActor
         */
        get_primary_icon(): Clutter.Actor | null;
        /**
         * Get the value of the #StEntry:secondary-icon property.
         * @returns a #ClutterActor
         */
        get_secondary_icon(): Clutter.Actor | null;
        /**
         * Get the text displayed on the entry. If `entry` is empty, an empty string will
         * be returned instead of %NULL.
         * @returns the text for the entry
         */
        get_text(): string;
        /**
         * Set the hint actor of the entry to `hint_actor`.
         * @param hint_actor a #ClutterActor
         */
        set_hint_actor(hint_actor?: Clutter.Actor | null): void;
        /**
         * Sets the text to display when the entry is empty and unfocused. When the
         * entry is displaying the hint, it has a pseudo class of `indeterminate`.
         * A value of %NULL unsets the hint.
         * @param text text to set as the entry hint
         */
        set_hint_text(text?: string | null): void;
        /**
         * Sets the #StEntry:input-hints property, which
         * allows input methods to fine-tune their behaviour.
         * @param hints the hints
         */
        set_input_hints(hints: Clutter.InputContentHintFlags): void;
        /**
         * Sets the #StEntry:input-purpose property which
         * can be used by on-screen keyboards and other input
         * methods to adjust their behaviour.
         * @param purpose the purpose
         */
        set_input_purpose(purpose: Clutter.InputContentPurpose): void;
        /**
         * Set the primary icon of the entry to `icon`.
         * @param icon a #ClutterActor
         */
        set_primary_icon(icon?: Clutter.Actor | null): void;
        /**
         * Set the secondary icon of the entry to `icon`.
         * @param icon an #ClutterActor
         */
        set_secondary_icon(icon?: Clutter.Actor | null): void;
        /**
         * Sets the text displayed on the entry. If `text` is %NULL, the #ClutterText
         * will instead be set to an empty string.
         * @param text text to set the entry to
         */
        set_text(text?: string | null): void;
    }

    module FocusManager {
        // Constructor properties interface
    }

    /**
     * The #StFocusManager struct contains only private data
     */
    class FocusManager extends GObject.Object {
        // Owm methods of St-13.FocusManager

        /**
         * Gets the #StFocusManager for `stage,` creating it if necessary.
         * @param stage a #ClutterStage
         */
        static get_for_stage(stage: Clutter.Stage): FocusManager;

        // Owm methods of St-13.FocusManager

        /**
         * Adds a new focus group to `manager`. When the focus is in an actor
         * that is a descendant of `root,` `manager` will handle moving focus
         * from one actor to another within `root` based on keyboard events.
         * @param root the root container of the group
         */
        add_group(root: Widget): void;
        /**
         * Checks if `widget` is inside a focus group, and if so, returns
         * the root of that group.
         * @param widget an #StWidget
         * @returns the focus group root, or %NULL if @widget is not in a focus group
         */
        get_group(widget: Widget): Widget;
        /**
         * Try to navigate from `event` as if it bubbled all the way up to
         * the stage. This is useful in complex event handling situations
         * where you want key navigation, but a parent might be stopping
         * the key navigation event from bubbling all the way up to the stage.
         * @param event a #ClutterEvent
         * @returns Whether a new actor was navigated to
         */
        navigate_from_event(event: Clutter.Event): boolean;
        /**
         * Removes the group rooted at `root` from `manager`
         * @param root the root container of the group
         */
        remove_group(root: Widget): void;
    }

    module GenericAccessible {
        // Signal callback interfaces

        interface GetCurrentValue {
            (): number;
        }

        interface GetMaximumValue {
            (): number;
        }

        interface GetMinimumIncrement {
            (): number;
        }

        interface GetMinimumValue {
            (): number;
        }

        interface SetCurrentValue {
            (new_value: number): void;
        }

        // Constructor properties interface
    }

    class GenericAccessible extends WidgetAccessible {
        // Constructors of St-13.GenericAccessible

        static new_for_actor(actor: Clutter.Actor): GenericAccessible;
    }

    module Icon {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Icon extends Widget {
        // Own properties of St-13.Icon

        /**
         * The fallback #GIcon to display if #StIcon:gicon fails to load.
         */
        fallback_gicon: Gio.Icon;
        /**
         * The fallback #GIcon to display if #StIcon:gicon fails to load.
         */
        fallbackGicon: Gio.Icon;
        /**
         * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
         * for details.
         */
        fallback_icon_name: string;
        /**
         * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
         * for details.
         */
        fallbackIconName: string;
        /**
         * The #GIcon being displayed by this #StIcon.
         */
        gicon: Gio.Icon;
        /**
         * The name of the icon if the icon being displayed is a #GThemedIcon.
         */
        icon_name: string;
        /**
         * The name of the icon if the icon being displayed is a #GThemedIcon.
         */
        iconName: string;
        /**
         * The size of the icon, if greater than `0`. Otherwise the icon size is derived
         * from the current style.
         */
        icon_size: number;
        /**
         * The size of the icon, if greater than `0`. Otherwise the icon size is derived
         * from the current style.
         */
        iconSize: number;

        // Constructors of St-13.Icon

        static ['new'](): Icon;

        // Owm methods of St-13.Icon

        /**
         * Gets the currently set fallback #GIcon.
         * @returns The fallback #GIcon, if set, otherwise %NULL
         */
        get_fallback_gicon(): Gio.Icon;
        /**
         * This is a convenience method to get the icon name of the fallback
         * #GThemedIcon that is currently set.
         * @returns The name of the icon or %NULL if no icon is set
         */
        get_fallback_icon_name(): string;
        /**
         * Gets the current #GIcon in use.
         * @returns The current #GIcon, if set, otherwise %NULL
         */
        get_gicon(): Gio.Icon | null;
        /**
         * This is a convenience method to get the icon name of the current icon, if it
         * is currently a #GThemedIcon, or %NULL otherwise.
         * @returns The name of the icon or %NULL
         */
        get_icon_name(): string | null;
        /**
         * Gets the explicit size set using st_icon_set_icon_size() for the icon.
         * This is not necessarily the size that the icon will be displayed at.
         * @returns The explicitly set size, or -1 if no size has been set
         */
        get_icon_size(): number;
        /**
         * Sets a fallback #GIcon to show if the normal icon fails to load.
         * If `fallback_gicon` is %NULL or fails to load, the icon is unset and no
         * texture will be visible for the fallback icon.
         * @param fallback_gicon the fallback #GIcon
         */
        set_fallback_gicon(fallback_gicon?: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the fallback #GIcon to a #GThemedIcon
         * created using the given icon name. If `fallback_icon_name` is an empty
         * string, %NULL or fails to load, the icon is unset and no texture will
         * be visible for the fallback icon.
         * @param fallback_icon_name the name of the fallback icon
         */
        set_fallback_icon_name(fallback_icon_name?: string | null): void;
        /**
         * Sets a #GIcon to show for the icon. If `gicon` is %NULL or fails to load,
         * the fallback icon set using st_icon_set_fallback_icon() will be shown.
         * @param gicon a #GIcon
         */
        set_gicon(gicon?: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the #GIcon to a #GThemedIcon created
         * using the given icon name. If `icon_name` is an empty string, %NULL or
         * fails to load, the fallback icon will be shown.
         * @param icon_name the name of the icon
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets an explicit size for the icon. Setting `size` to -1 will use the size
         * defined by the current style or the default icon size.
         * @param size if positive, the new size, otherwise the size will be   derived from the current style
         */
        set_icon_size(size: number): void;
    }

    module IconInfo {
        // Constructor properties interface
    }

    class IconInfo extends GObject.Object {
        // Constructors of St-13.IconInfo

        static new_for_pixbuf(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf): IconInfo;

        // Owm methods of St-13.IconInfo

        /**
         * Gets the base scale for the icon. The base scale is a scale
         * for the icon that was specified by the icon theme creator.
         * For instance an icon drawn for a high-dpi screen with window
         * scale 2 for a base size of 32 will be 64 pixels tall and have
         * a base scale of 2.
         * @returns the base scale
         */
        get_base_scale(): number;
        /**
         * Gets the base size for the icon. The base size
         * is a size for the icon that was specified by
         * the icon theme creator. This may be different
         * than the actual size of image; an example of
         * this is small emblem icons that can be attached
         * to a larger icon. These icons will be given
         * the same base size as the larger icons to which
         * they are attached.
         *
         * Note that for scaled icons the base size does
         * not include the base scale.
         * @returns the base size, or 0, if no base     size is known for the icon.
         */
        get_base_size(): number;
        /**
         * Gets the filename for the icon.
         * @returns the filename for the icon, or %NULL.     The return value is owned by GTK+ and should not be modified     or freed.
         */
        get_filename(): string | null;
        /**
         * Checks if the icon is symbolic or not. This currently uses only
         * the file name and not the file contents for determining this.
         * This behaviour may change in the future.
         * @returns %TRUE if the icon is symbolic, %FALSE otherwise
         */
        is_symbolic(): boolean;
        /**
         * Renders an icon previously looked up in an icon theme using
         * st_icon_theme_lookup_icon(); the size will be based on the size
         * passed to st_icon_theme_lookup_icon(). Note that the resulting
         * pixbuf may not be exactly this size; an icon theme may have icons
         * that differ slightly from their nominal sizes, and in addition GTK+
         * will avoid scaling icons that it considers sufficiently close to the
         * requested size or for which the source image would have to be scaled
         * up too far. (This maintains sharpness.). This behaviour can be changed
         * by passing the %ST_ICON_LOOKUP_FORCE_SIZE flag when obtaining
         * the #StIconInfo. If this flag has been specified, the pixbuf
         * returned by this function will be scaled to the exact size.
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_icon(): GdkPixbuf.Pixbuf;
        /**
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_icon() which is the synchronous
         * version of this call.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the     request is satisfied
         */
        load_icon_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async icon load, see st_icon_info_load_icon_async().
         * @param res a #GAsyncResult
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Loads an icon, modifying it to match the system colours for the foreground,
         * success, warning and error colors provided. If the icon is not a symbolic
         * one, the function will return the result from st_icon_info_load_icon().
         *
         * This allows loading symbolic icons that will match the system theme.
         *
         * Unless you are implementing a widget, you will want to use
         * g_themed_icon_new_with_default_fallbacks() to load the icon.
         *
         * As implementation details, the icon loaded needs to be of SVG type,
         * contain the “symbolic” term as the last component of the icon name,
         * and use the “fg”, “success”, “warning” and “error” CSS styles in the
         * SVG file itself.
         *
         * See the [Symbolic Icons Specification](http://www.freedesktop.org/wiki/SymbolicIcons)
         * for more information about symbolic icons.
         * @param colors a #StIconColors representing the foreground, warning and error colors
         * @returns a #GdkPixbuf representing the loaded icon
         */
        load_symbolic(colors: IconColors): GdkPixbuf.Pixbuf;
        /**
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using st_icon_theme_lookup_icon().
         *
         * For more details, see st_icon_info_load_symbolic() which is the synchronous
         * version of this call.
         * @param colors an #StIconColors representing the foreground, error and     success colors of the icon
         * @param cancellable optional #GCancellable object,     %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the     request is satisfied
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async icon load, see st_icon_info_load_symbolic_async().
         * @param res a #GAsyncResult
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use g_object_unref() to release your reference     to the icon.
         */
        load_symbolic_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    }

    module IconTheme {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #StIconTheme provides a facility for looking up icons by name
     * and size. The main reason for using a name rather than simply
     * providing a filename is to allow different icons to be used
     * depending on what “icon theme” is selected
     * by the user. The operation of icon themes on Linux and Unix
     * follows the [Icon Theme Specification](http://www.freedesktop.org/Standards/icon-theme-spec)
     * There is a fallback icon theme, named `hicolor`, where applications
     * should install their icons, but additional icon themes can be installed
     * as operating system vendors and users choose.
     *
     * In many cases, named themes are used indirectly, via #StIcon,
     * rather than directly, but looking up icons directly is also simple.
     * The #StIconTheme object acts as a database of all the icons in the
     * current theme.
     */
    class IconTheme extends GObject.Object {
        // Constructors of St-13.IconTheme

        static ['new'](): IconTheme;

        // Owm methods of St-13.IconTheme

        /**
         * Adds a resource path that will be looked at when looking
         * for icons, similar to search paths.
         *
         * This function should be used to make application-specific icons
         * available as part of the icon theme.
         *
         * The resources are considered as part of the hicolor icon theme
         * and must be located in subdirectories that are defined in the
         * hicolor icon theme, such as ``path/`16x16/actions/run.png`.
         * Icons that are directly placed in the resource path instead
         * of a subdirectory are also considered as ultimate fallback.
         * @param path a resource path
         */
        add_resource_path(path: string): void;
        /**
         * Appends a directory to the search path.
         * See st_icon_theme_set_search_path().
         * @param path directory name to append to the icon path
         */
        append_search_path(path: string): void;
        /**
         * Looks up a named icon and returns a #StIconInfo containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names %NULL-terminated array of     icon names to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object containing information about the icon, or %NULL if the icon wasn’t found.
         */
        choose_icon(icon_names: string[], size: number, flags: IconLookupFlags): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns
         * a #StIconInfo containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names %NULL-terminated     array of icon names to lookup
         * @param size desired icon size
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        choose_icon_for_scale(
            icon_names: string[],
            size: number,
            scale: number,
            flags: IconLookupFlags,
        ): IconInfo | null;
        /**
         * Returns an array of integers describing the sizes at which
         * the icon is available without scaling. A size of -1 means
         * that the icon is available in a scalable format. The array
         * is zero-terminated.
         * @param icon_name the name of an icon
         * @returns An newly allocated array describing the sizes at which the icon is available. The array should be freed with g_free() when it is no longer needed.
         */
        get_icon_sizes(icon_name: string): number[];
        /**
         * Gets the current search path. See st_icon_theme_set_search_path().
         */
        get_search_path(): void;
        /**
         * Checks whether an icon theme includes an icon
         * for a particular name.
         * @param icon_name the name of an icon
         * @returns %TRUE if @icon_theme includes an  icon for @icon_name.
         */
        has_icon(icon_name: string): boolean;
        /**
         * Gets the list of contexts available within the current
         * hierarchy of icon themes.
         * See st_icon_theme_list_icons() for details about contexts.
         * @returns a #GList list     holding the names of all the contexts in the theme. You must first     free each element in the list with g_free(), then free the list     itself with g_list_free().
         */
        list_contexts(): string[];
        /**
         * Lists the icons in the current icon theme. Only a subset
         * of the icons can be listed by providing a context string.
         * The set of values for the context string is system dependent,
         * but will typically include such values as “Applications” and
         * “MimeTypes”. Contexts are explained in the
         * [Icon Theme Specification](http://www.freedesktop.org/wiki/Specifications/icon-theme-spec).
         * The standard contexts are listed in the
         * [Icon Naming Specification](http://www.freedesktop.org/wiki/Specifications/icon-naming-spec).
         * Also see st_icon_theme_list_contexts().
         * @param context a string identifying a particular type of           icon, or %NULL to list all icons.
         * @returns a #GList list     holding the names of all the icons in the theme. You must     first free each element in the list with g_free(), then     free the list itself with g_list_free().
         */
        list_icons(context?: string | null): string[];
        /**
         * Looks up an icon in an icon theme, scales it to the given size
         * and renders it into a pixbuf. This is a convenience function;
         * if more details about the icon are needed, use
         * st_icon_theme_lookup_icon() followed by st_icon_info_load_icon().
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using gdk_pixbuf_copy() to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size; see st_icon_info_load_icon().
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon. Use g_object_unref() to release     your reference to the icon. %NULL if the icon isn’t found.
         */
        load_icon(icon_name: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon in an icon theme for a particular window scale,
         * scales it to the given size and renders it into a pixbuf. This is a
         * convenience function; if more details about the icon are needed,
         * use st_icon_theme_lookup_icon() followed by
         * st_icon_info_load_icon().
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using gdk_pixbuf_copy() to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size; see st_icon_info_load_icon().
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon. Use g_object_unref() to release     your reference to the icon. %NULL if the icon isn’t found.
         */
        load_icon_for_scale(
            icon_name: string,
            size: number,
            scale: number,
            flags: IconLookupFlags,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon and returns a #StIconInfo containing information
         * such as the filename of the icon. The icon can then be rendered
         * into a pixbuf using st_icon_info_load_icon().
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like gdk_window_get_scale_factor(). Instead, you should use
         * st_icon_theme_lookup_by_gicon_for_scale(), as the assets loaded
         * for a given scaling factor may be different.
         * @param icon the #GIcon to look up
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo containing     information about the icon, or %NULL if the icon wasn’t     found. Unref with g_object_unref()
         */
        lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo | null;
        /**
         * Looks up an icon and returns a #StIconInfo containing information
         * such as the filename of the icon. The icon can then be rendered into
         * a pixbuf using st_icon_info_load_icon().
         * @param icon the #GIcon to look up
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo containing     information about the icon, or %NULL if the icon wasn’t     found. Unref with g_object_unref()
         */
        lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
        /**
         * Looks up a named icon and returns a #StIconInfo containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon()
         * combines these two steps if all you need is the pixbuf.)
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like gdk_window_get_scale_factor(). Instead, you should use
         * st_icon_theme_lookup_icon_for_scale(), as the assets loaded
         * for a given scaling factor may be different.
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        lookup_icon(icon_name: string, size: number, flags: IconLookupFlags): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns a
         * #StIconInfo containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * st_icon_info_load_icon(). (st_icon_theme_load_icon() combines
         * these two steps if all you need is the pixbuf.)
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a #StIconInfo object     containing information about the icon, or %NULL if the     icon wasn’t found.
         */
        lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
        /**
         * Prepends a directory to the search path.
         * See st_icon_theme_set_search_path().
         * @param path directory name to prepend to the icon path
         */
        prepend_search_path(path: string): void;
        /**
         * Checks to see if the icon theme has changed; if it has, any
         * currently cached information is discarded and will be reloaded
         * next time `icon_theme` is accessed.
         * @returns %TRUE if the icon theme has changed and needed     to be reloaded.
         */
        rescan_if_needed(): boolean;
        /**
         * Sets the search path for the icon theme object. When looking
         * for an icon theme, GTK+ will search for a subdirectory of
         * one or more of the directories in `path` with the same name
         * as the icon theme containing an index.theme file. (Themes from
         * multiple of the path elements are combined to allow themes to be
         * extended by adding icons in the user’s home directory.)
         *
         * In addition if an icon found isn’t found either in the current
         * icon theme or the default icon theme, and an image file with
         * the right name is found directly in one of the elements of
         * `path,` then that image will be used for the icon name.
         * (This is legacy feature, and new icons should be put
         * into the fallback icon theme, which is called hicolor,
         * rather than directly on the icon path.)
         * @param path array of     directories that are searched for icon themes
         */
        set_search_path(path: string[]): void;
    }

    module ImageContent {
        // Constructor properties interface
    }

    class ImageContent extends Clutter.Image {
        // Own properties of St-13.ImageContent

        preferred_height: number;
        preferredHeight: number;
        preferred_width: number;
        preferredWidth: number;

        // Owm methods of St-13.ImageContent

        /**
         * Creates a new #StImageContent, a simple content for sized images.
         *
         * See #ClutterImage for setting the actual image to display or #StIcon for
         * displaying icons.
         * @param width The preferred width to be used when drawing the content
         * @param height The preferred width to be used when drawing the content
         */
        static new_with_preferred_size(width: number, height: number): Clutter.Content;
    }

    module Label {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Label extends Widget {
        // Own properties of St-13.Label

        /**
         * The internal #ClutterText actor supporting the label
         */
        readonly clutter_text: Clutter.Text;
        /**
         * The internal #ClutterText actor supporting the label
         */
        readonly clutterText: Clutter.Text;
        /**
         * The current text being display in the #StLabel.
         */
        text: string;

        // Constructors of St-13.Label

        static ['new'](text?: string | null): Label;

        // Owm methods of St-13.Label

        /**
         * Retrieve the internal #ClutterText used by `label` so that extra parameters
         * can be set.
         * @returns the #ClutterText used by #StLabel. The actor is owned by the #StLabel and should not be destroyed by the application.
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the text displayed on the label.
         * @returns the text for the label. This must not be freed by the application
         */
        get_text(): string;
        /**
         * Sets the text displayed by the label.
         * @param text text to set the label to
         */
        set_text(text?: string | null): void;
    }

    module PasswordEntry {
        // Constructor properties interface
    }

    class PasswordEntry extends Entry {
        // Own properties of St-13.PasswordEntry

        /**
         * Whether the text in the entry is masked for privacy.
         */
        password_visible: boolean;
        /**
         * Whether the text in the entry is masked for privacy.
         */
        passwordVisible: boolean;
        /**
         * Whether to display an icon button to toggle the masking enabled by the
         * #StPasswordEntry:password-visible property.
         */
        show_peek_icon: boolean;
        /**
         * Whether to display an icon button to toggle the masking enabled by the
         * #StPasswordEntry:password-visible property.
         */
        showPeekIcon: boolean;

        // Constructors of St-13.PasswordEntry

        static ['new'](): PasswordEntry;

        // Owm methods of St-13.PasswordEntry

        /**
         * Gets whether the text is masked in the password entry.
         * @returns %TRUE if visible
         */
        get_password_visible(): boolean;
        /**
         * Gets whether peek-icon is shown or hidden in the password entry.
         * @returns %TRUE if visible
         */
        get_show_peek_icon(): boolean;
        /**
         * Sets whether to show or hide text in the password entry.
         * @param value %TRUE to show the password in the entry, #FALSE otherwise
         */
        set_password_visible(value: boolean): void;
        /**
         * Sets whether to show or hide the peek-icon in the password entry. If %TRUE,
         * a icon button for temporarily unmasking the password will be shown at the
         * end of the entry.
         * @param value %TRUE to show the peek-icon in the entry
         */
        set_show_peek_icon(value: boolean): void;
    }

    module ScrollBar {
        // Signal callback interfaces

        interface ScrollStart {
            (): void;
        }

        interface ScrollStop {
            (): void;
        }

        // Constructor properties interface
    }

    class ScrollBar extends Widget {
        // Own properties of St-13.ScrollBar

        /**
         * The #StAdjustment controlling the #StScrollBar.
         */
        adjustment: Adjustment;
        /**
         * Whether the #StScrollBar is vertical. If %FALSE it is horizontal.
         */
        vertical: boolean;

        // Constructors of St-13.ScrollBar

        static ['new'](adjustment: Adjustment): ScrollBar;

        // Owm methods of St-13.ScrollBar

        /**
         * Gets the #StAdjustment that controls the current position of `bar`.
         * @returns an #StAdjustment
         */
        get_adjustment(): Adjustment;
        set_adjustment(adjustment: Adjustment): void;
    }

    module ScrollView {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class ScrollView extends Bin {
        // Own properties of St-13.ScrollView

        /**
         * Whether to enable automatic mouse wheel scrolling.
         */
        enable_mouse_scrolling: boolean;
        /**
         * Whether to enable automatic mouse wheel scrolling.
         */
        enableMouseScrolling: boolean;
        /**
         * The horizontal #StScrollBar for the #StScrollView.
         */
        readonly hscroll: ScrollBar;
        /**
         * The #StPolicyType for when to show the horizontal #StScrollBar.
         */
        hscrollbar_policy: PolicyType;
        /**
         * The #StPolicyType for when to show the horizontal #StScrollBar.
         */
        hscrollbarPolicy: PolicyType;
        /**
         * Whether the horizontal #StScrollBar is visible.
         */
        readonly hscrollbar_visible: boolean;
        /**
         * Whether the horizontal #StScrollBar is visible.
         */
        readonly hscrollbarVisible: boolean;
        /**
         * Whether scrollbars are painted on top of the content.
         */
        overlay_scrollbars: boolean;
        /**
         * Whether scrollbars are painted on top of the content.
         */
        overlayScrollbars: boolean;
        /**
         * The vertical #StScrollBar for the #StScrollView.
         */
        readonly vscroll: ScrollBar;
        /**
         * The #StPolicyType for when to show the vertical #StScrollBar.
         */
        vscrollbar_policy: PolicyType;
        /**
         * The #StPolicyType for when to show the vertical #StScrollBar.
         */
        vscrollbarPolicy: PolicyType;
        /**
         * Whether the vertical #StScrollBar is visible.
         */
        readonly vscrollbar_visible: boolean;
        /**
         * Whether the vertical #StScrollBar is visible.
         */
        readonly vscrollbarVisible: boolean;

        // Constructors of St-13.ScrollView

        static ['new'](): ScrollView;

        // Owm methods of St-13.ScrollView

        /**
         * Get the step increment of the horizontal plane.
         * @returns the horizontal step increment
         */
        get_column_size(): number;
        /**
         * Gets the horizontal #StScrollBar of the #StScrollView.
         * @returns the horizontal scrollbar
         */
        get_hscroll_bar(): Clutter.Actor;
        /**
         * Get whether automatic mouse wheel scrolling is enabled or disabled.
         * @returns %TRUE if enabled, %FALSE otherwise
         */
        get_mouse_scrolling(): boolean;
        /**
         * Gets whether scrollbars are painted on top of the content.
         * @returns %TRUE if enabled, %FALSE otherwise
         */
        get_overlay_scrollbars(): boolean;
        /**
         * Get the step increment of the vertical plane.
         * @returns the vertical step increment
         */
        get_row_size(): number;
        /**
         * Gets the vertical scrollbar of the #StScrollView.
         * @returns the vertical #StScrollBar
         */
        get_vscroll_bar(): Clutter.Actor;
        /**
         * Set the step increment of the horizontal plane to `column_size`.
         * @param column_size horizontal step increment
         */
        set_column_size(column_size: number): void;
        /**
         * Sets automatic mouse wheel scrolling to enabled or disabled.
         * @param enabled %TRUE or %FALSE
         */
        set_mouse_scrolling(enabled: boolean): void;
        /**
         * Sets whether scrollbars are painted on top of the content.
         * @param enabled Whether to enable overlay scrollbars
         */
        set_overlay_scrollbars(enabled: boolean): void;
        /**
         * Set the scroll policy.
         * @param hscroll Whether to enable horizontal scrolling
         * @param vscroll Whether to enable vertical scrolling
         */
        set_policy(hscroll: PolicyType, vscroll: PolicyType): void;
        /**
         * Set the step increment of the vertical plane to `row_size`.
         * @param row_size vertical step increment
         */
        set_row_size(row_size: number): void;
        /**
         * Sets the fade effects in all four edges of the view. A value of 0
         * disables the effect.
         * @param fade_margins a #ClutterMargin defining the vertical fade effects, in pixels.
         */
        update_fade_effect(fade_margins: Clutter.Margin): void;
    }

    module ScrollViewFade {
        // Constructor properties interface
    }

    class ScrollViewFade extends Clutter.ShaderEffect {
        // Own properties of St-13.ScrollViewFade

        /**
         * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
         */
        extend_fade_area: boolean;
        /**
         * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
         */
        extendFadeArea: boolean;
        /**
         * Whether the faded area should extend to the edges of the #StScrollViewFade.
         */
        fade_edges: boolean;
        /**
         * Whether the faded area should extend to the edges of the #StScrollViewFade.
         */
        fadeEdges: boolean;
        /**
         * The margins widths that are faded.
         */
        fade_margins: Clutter.Margin;
        /**
         * The margins widths that are faded.
         */
        fadeMargins: Clutter.Margin;

        // Constructors of St-13.ScrollViewFade

        static ['new'](): ScrollViewFade;
    }

    module Settings {
        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of St-13.Settings

        /**
         * The preferred color-scheme
         */
        readonly color_scheme: SystemColorScheme;
        /**
         * The preferred color-scheme
         */
        readonly colorScheme: SystemColorScheme;
        /**
         * Whether password showing can be locked down
         */
        readonly disable_show_password: boolean;
        /**
         * Whether password showing can be locked down
         */
        readonly disableShowPassword: boolean;
        /**
         * The threshold before a drag operation begins.
         */
        readonly drag_threshold: number;
        /**
         * The threshold before a drag operation begins.
         */
        readonly dragThreshold: number;
        /**
         * Whether animations are enabled.
         */
        readonly enable_animations: boolean;
        /**
         * Whether animations are enabled.
         */
        readonly enableAnimations: boolean;
        /**
         * The current font name.
         */
        readonly font_name: string;
        /**
         * The current font name.
         */
        readonly fontName: string;
        /**
         * The current GTK icon theme
         */
        readonly gtk_icon_theme: string;
        /**
         * The current GTK icon theme
         */
        readonly gtkIconTheme: string;
        /**
         * Whether the accessibility high contrast mode is enabled.
         */
        readonly high_contrast: boolean;
        /**
         * Whether the accessibility high contrast mode is enabled.
         */
        readonly highContrast: boolean;
        /**
         * Whether the accessibility magnifier is active.
         */
        readonly magnifier_active: boolean;
        /**
         * Whether the accessibility magnifier is active.
         */
        readonly magnifierActive: boolean;
        /**
         * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
         * paste).
         */
        readonly primary_paste: boolean;
        /**
         * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
         * paste).
         */
        readonly primaryPaste: boolean;
        /**
         * The slow-down factor applied to all animation durations.
         */
        slow_down_factor: number;
        /**
         * The slow-down factor applied to all animation durations.
         */
        slowDownFactor: number;

        // Owm methods of St-13.Settings

        /**
         * Gets the global #StSettings object.
         */
        static get(): Settings;

        // Owm methods of St-13.Settings

        inhibit_animations(): void;
        uninhibit_animations(): void;
    }

    module TextureCache {
        // Signal callback interfaces

        interface IconThemeChanged {
            (): void;
        }

        interface TextureFileChanged {
            (file: Gio.File): void;
        }

        // Constructor properties interface
    }

    class TextureCache extends GObject.Object {
        // Owm methods of St-13.TextureCache

        static get_default(): TextureCache;

        // Owm methods of St-13.TextureCache

        /**
         * Create a #GIcon which tracks the #cairo_surface_t value of a GObject property
         * named by `property_name`.  Unlike other methods in StTextureCache, the underlying
         * #CoglTexture is not shared by default with other invocations to this method.
         *
         * If the source object is destroyed, the texture will continue to show the last
         * value of the property.
         * @param object A #GObject with a property @property_name of type #cairo_surface_t
         * @param property_name Name of a property
         * @returns A new #GIcon
         */
        bind_cairo_surface_property(object: GObject.Object, property_name: string): Gio.Icon;
        /**
         * Create a #GIcon from `surface`.
         * @param surface A #cairo_surface_t
         * @returns A new #GIcon
         */
        load_cairo_surface_to_gicon(surface: cairo.Surface): Gio.Icon;
        /**
         * Asynchronously load an image.   Initially, the returned texture will have a natural
         * size of zero.  At some later point, either the image will be loaded successfully
         * and at that point size will be negotiated, or upon an error, no image will be set.
         * @param file a #GFile of the image file from which to create a pixbuf
         * @param available_width available width for the image, can be -1 if not limited
         * @param available_height available height for the image, can be -1 if not limited
         * @param paint_scale scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns A new #ClutterActor with no image loaded initially.
         */
        load_file_async(
            file: Gio.File,
            available_width: number,
            available_height: number,
            paint_scale: number,
            resource_scale: number,
        ): Clutter.Actor;
        /**
         * This function synchronously loads the given file path
         * into a cairo surface.  On error, a warning is emitted
         * and %NULL is returned.
         * @param file A #GFile in supported image format
         * @param paint_scale Scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns a new #cairo_surface_t
         */
        load_file_to_cairo_surface(file: Gio.File, paint_scale: number, resource_scale: number): cairo.Surface;
        /**
         * This method returns a new #ClutterActor for a given #GIcon. If the
         * icon isn't loaded already, the texture will be filled
         * asynchronously.
         * @param theme_node The #StThemeNode to use for colors, or %NULL                            if the icon must not be recolored
         * @param icon the #GIcon to load
         * @param size Size of themed
         * @param paint_scale Scale factor of display
         * @param resource_scale Resource scale factor
         * @returns A new #ClutterActor for the icon, or %NULL if not found
         */
        load_gicon(
            theme_node: ThemeNode | null,
            icon: Gio.Icon,
            size: number,
            paint_scale: number,
            resource_scale: number,
        ): Clutter.Actor | null;
        /**
         * This function reads a single image file which contains multiple images internally.
         * The image file will be divided using `grid_width` and `grid_height;`
         * note that the dimensions of the image loaded from `path`
         * should be a multiple of the specified grid dimensions.
         * @param file A #GFile
         * @param grid_width Width in pixels
         * @param grid_height Height in pixels
         * @param paint_scale Scale factor of the display
         * @param resource_scale
         * @param load_callback Function called when the image is loaded, or %NULL
         * @returns A new #ClutterActor
         */
        load_sliced_image(
            file: Gio.File,
            grid_width: number,
            grid_height: number,
            paint_scale: number,
            resource_scale: number,
            load_callback?: GLib.Func | null,
        ): Clutter.Actor;
        /**
         * Rescan the current icon theme, if necessary.
         * @returns %TRUE if the icon theme has changed and needed to be reloaded.
         */
        rescan_icon_theme(): boolean;
    }

    module Theme {
        // Signal callback interfaces

        interface CustomStylesheetsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Theme extends GObject.Object {
        // Own properties of St-13.Theme

        /**
         * The highest priority stylesheet, representing application-specific
         * styling; this is associated with the CSS "author" stylesheet.
         */
        application_stylesheet: Gio.File;
        /**
         * The highest priority stylesheet, representing application-specific
         * styling; this is associated with the CSS "author" stylesheet.
         */
        applicationStylesheet: Gio.File;
        /**
         * The lowest priority stylesheet, representing global default
         * styling; this is associated with the CSS "user agent" stylesheet.
         */
        default_stylesheet: Gio.File;
        /**
         * The lowest priority stylesheet, representing global default
         * styling; this is associated with the CSS "user agent" stylesheet.
         */
        defaultStylesheet: Gio.File;
        /**
         * The second priority stylesheet, representing theme-specific styling;
         * this is associated with the CSS "user" stylesheet.
         */
        theme_stylesheet: Gio.File;
        /**
         * The second priority stylesheet, representing theme-specific styling;
         * this is associated with the CSS "user" stylesheet.
         */
        themeStylesheet: Gio.File;

        // Constructors of St-13.Theme

        static ['new'](
            application_stylesheet: Gio.File,
            theme_stylesheet: Gio.File,
            default_stylesheet: Gio.File,
        ): Theme;

        // Owm methods of St-13.Theme

        /**
         * Get a list of the stylesheet files loaded with st_theme_load_stylesheet().
         * @returns the list of stylesheet files          that were loaded with st_theme_load_stylesheet()
         */
        get_custom_stylesheets(): Gio.File[];
        /**
         * Load the stylesheet associated with `file`.
         * @param file a #GFile
         * @returns %TRUE if successful
         */
        load_stylesheet(file: Gio.File): boolean;
        /**
         * Unload the stylesheet associated with `file`. If `file` was not loaded this
         * function does nothing.
         * @param file a #GFile
         */
        unload_stylesheet(file: Gio.File): void;
    }

    module ThemeContext {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class ThemeContext extends GObject.Object {
        // Own properties of St-13.ThemeContext

        /**
         * The scaling factor used for HiDPI scaling.
         */
        scale_factor: number;
        /**
         * The scaling factor used for HiDPI scaling.
         */
        scaleFactor: number;

        // Constructors of St-13.ThemeContext

        static ['new'](): ThemeContext;

        // Owm methods of St-13.ThemeContext

        /**
         * Gets a singleton theme context associated with the stage.
         * @param stage a #ClutterStage
         */
        static get_for_stage(stage: Clutter.Stage): ThemeContext;

        // Owm methods of St-13.ThemeContext

        /**
         * Gets the default font for the theme context. See st_theme_context_set_font().
         * @returns the default font for the theme context.
         */
        get_font(): Pango.FontDescription;
        /**
         * Gets the root node of the tree of theme style nodes that associated with this
         * context. For the node tree associated with a stage, this node represents
         * styles applied to the stage itself.
         * @returns the root node of the context's style tree
         */
        get_root_node(): ThemeNode;
        /**
         * Return the current scale factor of `context`.
         * @returns an integer scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets the default theme for the context. See st_theme_context_set_theme()
         * @returns the default theme for the context
         */
        get_theme(): Theme;
        /**
         * Return an existing node matching `node,` or if that isn't possible,
         * `node` itself.
         * @param node a #StThemeNode
         * @returns a node with the same properties as @node
         */
        intern_node(node: ThemeNode): ThemeNode;
        /**
         * Sets the default font for the theme context. This is the font that
         * is inherited by the root node of the tree of theme nodes. If the
         * font is not overridden, then this font will be used. If the font is
         * partially modified (for example, with 'font-size: 110%'), then that
         * modification is based on this font.
         * @param font the default font for theme context
         */
        set_font(font: Pango.FontDescription): void;
        /**
         * Sets the default set of theme stylesheets for the context. This theme will
         * be used for the root node and for nodes descending from it, unless some other
         * style is explicitly specified.
         * @param theme a #StTheme
         */
        set_theme(theme: Theme): void;
    }

    module ThemeNode {
        // Constructor properties interface
    }

    class ThemeNode extends GObject.Object {
        // Constructors of St-13.ThemeNode

        static ['new'](
            context: ThemeContext,
            parent_node: ThemeNode | null,
            theme: Theme | null,
            element_type: GObject.GType,
            element_id: string | null,
            element_class: string | null,
            pseudo_class: string | null,
            inline_style: string,
        ): ThemeNode;

        // Owm methods of St-13.ThemeNode

        /**
         * Adjusts a "for height" passed to clutter_actor_get_preferred_width() to
         * account for borders and padding. This is a convenience function meant
         * to be called from a get_preferred_width() method of a #ClutterActor
         * subclass. The value after adjustment is the height available for the actor's
         * content.
         * @param for_height the "for height" to adjust
         */
        adjust_for_height(for_height: number): void;
        /**
         * Adjusts a "for width" passed to clutter_actor_get_preferred_height() to
         * account for borders and padding. This is a convenience function meant
         * to be called from a get_preferred_height() method of a #ClutterActor
         * subclass. The value after adjustment is the width available for the actor's
         * content.
         * @param for_width the "for width" to adjust
         */
        adjust_for_width(for_width: number): void;
        /**
         * Adjusts the minimum and natural height computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum height. This is a convenience
         * function meant to be called from the get_preferred_height() method
         * of a #ClutterActor subclass
         * @param min_height_p the minimum height to adjust
         * @param natural_height_p the natural height to adjust
         */
        adjust_preferred_height(min_height_p: number, natural_height_p: number): void;
        /**
         * Adjusts the minimum and natural width computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum width. This is a convenience
         * function meant to be called from the get_preferred_width() method
         * of a #ClutterActor subclass
         * @param min_width_p the minimum width to adjust
         * @param natural_width_p the natural width to adjust
         */
        adjust_preferred_width(min_width_p: number, natural_width_p: number): void;
        /**
         * Compare two #StThemeNodes. Two nodes which compare equal will match
         * the same CSS rules and have the same style properties. However, two
         * nodes that have ended up with identical style properties do not
         * necessarily compare equal.
         *
         * In detail, `node_a` and `node_b` are considered equal if and only if:
         *
         * - they share the same #StTheme and #StThemeContext
         * - they have the same parent
         * - they have the same element type
         * - their id, class, pseudo-class and inline-style match
         * @param node_b second #StThemeNode
         * @returns %TRUE if @node_a equals @node_b
         */
        equal(node_b: ThemeNode): boolean;
        /**
         * Tests if two theme nodes have the same borders and padding; this can be
         * used to optimize having to relayout when the style applied to a Clutter
         * actor changes colors without changing the geometry.
         * @param other a different #StThemeNode
         * @returns %TRUE if equal, %FALSE otherwise
         */
        geometry_equal(other: ThemeNode): boolean;
        /**
         * Gets `node'`s background color.
         */
        get_background_color(): void;
        /**
         * The `start` and `end` arguments will only be set if `type` is not #ST_GRADIENT_NONE.
         */
        get_background_gradient(): void;
        get_background_image(): Gio.File;
        /**
         * Gets the value for the -st-background-image-shadow style property
         * @returns the node's background image shadow, or   %NULL if node has no such shadow
         */
        get_background_image_shadow(): Shadow | null;
        /**
         * Gets the box used to paint the actor's background, including the area
         * occupied by properties which paint outside the actor's assigned allocation.
         * @param allocation the box allocated to a #ClutterActor
         */
        get_background_paint_box(allocation: Clutter.ActorBox): void;
        /**
         * Gets the color of `node'`s border on `side`
         * @param side a #StSide
         */
        get_border_color(side: Side): void;
        /**
         * Gets the value for the border-image style property
         * @returns the border image, or %NULL   if there is no border image.
         */
        get_border_image(): BorderImage;
        /**
         * Get the border radius for `node` at `corner,` in physical pixels.
         * @param corner a #StCorner
         * @returns the border radius in physical pixels
         */
        get_border_radius(corner: Corner): number;
        /**
         * Get the border width for `node` on `side,` in physical pixels.
         * @param side a #StCorner
         * @returns the border width in physical pixels
         */
        get_border_width(side: Side): number;
        /**
         * Gets the value for the box-shadow style property
         * @returns the node's shadow, or %NULL   if node has no shadow
         */
        get_box_shadow(): Shadow | null;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like st_theme_node_get_background_color()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * If `property_name` is not found, a warning will be logged and a
         * default color returned.
         *
         * See also st_theme_node_lookup_color(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated color.
         * @param property_name The name of the color property
         */
        get_color(property_name: string): void;
        /**
         * Gets the box within an actor's allocation that contents the content
         * of an actor (excluding borders and padding). This is a convenience function
         * meant to be used from the allocate() or paint() methods of a #ClutterActor
         * subclass.
         * @param allocation the box allocated to a #ClutterAlctor
         */
        get_content_box(allocation: Clutter.ActorBox): void;
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also st_theme_node_lookup_double(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the numeric property
         * @returns the value found. If @property_name is not  found, a warning will be logged and 0 will be returned.
         */
        get_double(property_name: string): number;
        /**
         * Get the list of element classes for `node`.
         * @returns the element's classes
         */
        get_element_classes(): string[];
        /**
         * Get the unique element ID for `node`.
         * @returns the element's ID
         */
        get_element_id(): string;
        /**
         * Get the element #GType for `node`.
         * @returns the element type
         */
        get_element_type(): GObject.GType;
        /**
         * Get the current font of `node` as a #PangoFontDescription
         * @returns the current font
         */
        get_font(): Pango.FontDescription;
        /**
         * Get the CSS font-features for `node`.
         * @returns font-features as a string
         */
        get_font_features(): string;
        /**
         * Gets `node'`s foreground color.
         */
        get_foreground_color(): void;
        /**
         * Get the height for `node,` in physical pixels.
         * @returns the height in physical pixels
         */
        get_height(): number;
        /**
         * Gets the total horizontal padding (left + right padding), in physical pixels.
         * @returns the total horizontal padding in physical pixels
         */
        get_horizontal_padding(): number;
        /**
         * Gets the colors that should be used for colorizing symbolic icons according
         * the style of this node.
         * @returns the icon colors to use for this theme node
         */
        get_icon_colors(): IconColors;
        /**
         * Get the icon style for `node` (eg. symbolic, regular). This corresponds to the
         * special `-st-icon-style` CSS property.
         * @returns the icon style for @node
         */
        get_icon_style(): IconStyle;
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like st_theme_node_get_border_width()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Unlike st_theme_node_get_color() and st_theme_node_get_double(),
         * this does not print a warning if the property is not found; it just
         * returns 0.
         *
         * See also st_theme_node_lookup_length(), which provides more options. The
         * returned value is in physical pixels, as opposed to logical pixels.
         * @param property_name The name of the length property
         * @returns the length, in pixels, or 0 if the property was not found.
         */
        get_length(property_name: string): number;
        /**
         * Gets the value for the letter-spacing style property, in physical pixels.
         * @returns the value of the letter-spacing property, if   found, or zero if such property has not been found.
         */
        get_letter_spacing(): number;
        /**
         * Get the margin for `node` on `side,` in physical pixels. This corresponds to
         * the CSS properties such as `margin-top`.
         * @param side a #StSide
         * @returns the margin size in physical pixels
         */
        get_margin(side: Side): number;
        /**
         * Get the maximum height for `node,` in physical pixels.
         * @returns the maximum height in physical pixels
         */
        get_max_height(): number;
        /**
         * Get the maximum width for `node,` in physical pixels.
         * @returns the maximum width in physical pixels
         */
        get_max_width(): number;
        /**
         * Get the minimum height for `node,` in physical pixels.
         * @returns the minimum height in physical pixels
         */
        get_min_height(): number;
        /**
         * Get the minimum width for `node,` in physical pixels.
         * @returns the minimum width in physical pixels
         */
        get_min_width(): number;
        /**
         * Gets the color of `node'`s outline.
         */
        get_outline_color(): void;
        /**
         * Get the width of the outline for `node,` in physical pixels.
         * @returns the width in physical pixels
         */
        get_outline_width(): number;
        /**
         * Get the padding for `node` on `side,` in physical pixels. This corresponds to
         * the CSS properties such as `padding-top`.
         * @param side a #StSide
         * @returns the padding size in physical pixels
         */
        get_padding(side: Side): number;
        /**
         * Gets the box used to paint the actor, including the area occupied
         * by properties which paint outside the actor's assigned allocation.
         * When painting `node` to an offscreen buffer, this function can be
         * used to determine the necessary size of the buffer.
         * @param allocation the box allocated to a #ClutterActor
         */
        get_paint_box(allocation: Clutter.ActorBox): void;
        /**
         * Gets the parent themed element node.
         * @returns the parent #StThemeNode, or %NULL if  this is the root node of the tree of theme elements.
         */
        get_parent(): ThemeNode | null;
        /**
         * Get the list of pseudo-classes for `node` (eg. `:focused`).
         * @returns the element's pseudo-classes
         */
        get_pseudo_classes(): string[];
        /**
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like st_theme_node_get_box_shadow()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Like st_theme_get_length(), this does not print a warning if the property is
         * not found; it just returns %NULL
         *
         * See also st_theme_node_lookup_shadow (), which provides more options.
         * @param property_name The name of the shadow property
         * @returns the shadow, or %NULL if the property was   not found.
         */
        get_shadow(property_name: string): Shadow | null;
        /**
         * Get the text alignment of `node`.
         * @returns the alignment of text for @node
         */
        get_text_align(): TextAlign;
        /**
         * Get the text decoration for `node` (eg. underline, line-through, etc).
         * @returns the text decoration for @node
         */
        get_text_decoration(): TextDecoration;
        /**
         * Gets the value for the text-shadow style property
         * @returns the node's text-shadow, or %NULL   if node has no text-shadow
         */
        get_text_shadow(): Shadow | null;
        /**
         * Gets the theme stylesheet set that styles this node
         * @returns the theme stylesheet set
         */
        get_theme(): Theme;
        /**
         * Get the value of the transition-duration property, which
         * specifies the transition time between the previous #StThemeNode
         * and `node`.
         * @returns the node's transition duration in milliseconds
         */
        get_transition_duration(): number;
        /**
         * Looks up a property containing a single URL value.
         *
         * See also st_theme_node_lookup_url(), which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the string property
         * @returns the newly allocated value if found.  If @property_name is not found, a warning will be logged and %NULL  will be returned.
         */
        get_url(property_name: string): Gio.File | null;
        /**
         * Gets the total vertical padding (top + bottom padding), in physical pixels.
         * @returns the total vertical padding in physical pixels
         */
        get_vertical_padding(): number;
        /**
         * Get the width for `node,` in physical pixels.
         * @returns the width in physical pixels
         */
        get_width(): number;
        /**
         * Converts `node` to a hash value.
         * @returns a hash value corresponding to @node
         */
        hash(): number;
        invalidate_background_image(): void;
        invalidate_border_image(): void;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like st_theme_node_get_background_color()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_color(), which provides a simpler API.
         * @param property_name The name of the color property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_color(property_name: string, inherit: boolean): boolean;
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also st_theme_node_get_double(), which provides a simpler API.
         * @param property_name The name of the numeric property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_double(property_name: string, inherit: boolean): boolean;
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like st_theme_node_get_border_width()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_length(), which provides a simpler API.
         * @param property_name The name of the length property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_length(property_name: string, inherit: boolean): boolean;
        /**
         * If the property is not found, the value in the shadow variable will not
         * be changed.
         *
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like st_theme_node_get_box_shadow ()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also st_theme_node_get_shadow(), which provides a simpler API.
         * @param property_name The name of the shadow property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this   theme node (or in the properties of parent nodes when inheriting.), %FALSE   if the property was not found, or was explicitly set to 'none'.
         */
        lookup_shadow(property_name: string, inherit: boolean): boolean;
        /**
         * Generically looks up a property containing a single time value,
         *  which is converted to milliseconds.
         * @param property_name The name of the time property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_time(property_name: string, inherit: boolean): boolean;
        /**
         * Looks up a property containing a single URL value.
         *
         * See also st_theme_node_get_url(), which provides a simpler API.
         * @param property_name The name of the string property
         * @param inherit if %TRUE, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if %FALSE is passed   in for @inherit; this only affects the default behavior for inheritance.
         * @returns %TRUE if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_url(property_name: string, inherit: boolean): boolean;
        /**
         * Check if st_theme_node_paint() will paint identically for `node` as it does
         * for `other`. Note that in some cases this function may return %TRUE even
         * if there is no visible difference in the painting.
         * @param other a different #StThemeNode
         * @returns %TRUE if the two theme nodes paint identically. %FALSE if the   two nodes potentially paint differently.
         */
        paint_equal(other?: ThemeNode | null): boolean;
        /**
         * Serialize `node` to a string of its #GType name, CSS ID, classes and
         * pseudo-classes.
         * @returns the serialized theme node
         */
        to_string(): string;
    }

    module Viewport {
        // Constructor properties interface
    }

    class Viewport extends Widget {
        // Own properties of St-13.Viewport

        clip_to_view: boolean;
        clipToView: boolean;
    }

    module Widget {
        // Signal callback interfaces

        interface PopupMenu {
            (): void;
        }

        interface StyleChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Widget extends Clutter.Actor {
        // Own properties of St-13.Widget

        /**
         * Object instance's name for assistive technology access.
         */
        accessible_name: string;
        /**
         * Object instance's name for assistive technology access.
         */
        accessibleName: string;
        /**
         * The accessible role of this object
         */
        accessible_role: Atk.Role;
        /**
         * The accessible role of this object
         */
        accessibleRole: Atk.Role;
        /**
         * Whether or not the widget can be focused via keyboard navigation.
         */
        can_focus: boolean;
        /**
         * Whether or not the widget can be focused via keyboard navigation.
         */
        canFocus: boolean;
        /**
         * Whether or not the pointer is currently hovering over the widget. This is
         * only tracked automatically if #StWidget:track-hover is %TRUE, but you can
         * adjust it manually in any case.
         */
        hover: boolean;
        /**
         * An actor that labels this widget.
         */
        label_actor: Clutter.Actor;
        /**
         * An actor that labels this widget.
         */
        labelActor: Clutter.Actor;
        /**
         * The pseudo-class of the actor. Typical values include "hover", "active",
         * "focus".
         */
        pseudo_class: string;
        /**
         * The pseudo-class of the actor. Typical values include "hover", "active",
         * "focus".
         */
        pseudoClass: string;
        /**
         * Inline style information for the actor as a ';'-separated list of
         * CSS properties.
         */
        style: string;
        /**
         * The style-class of the actor for use in styling.
         */
        style_class: string;
        /**
         * The style-class of the actor for use in styling.
         */
        styleClass: string;
        /**
         * Determines whether the widget tracks pointer hover state. If
         * %TRUE (and the widget is visible and reactive), the
         * #StWidget:hover property and "hover" style pseudo class will be
         * adjusted automatically as the pointer moves in and out of the
         * widget.
         */
        track_hover: boolean;
        /**
         * Determines whether the widget tracks pointer hover state. If
         * %TRUE (and the widget is visible and reactive), the
         * #StWidget:hover property and "hover" style pseudo class will be
         * adjusted automatically as the pointer moves in and out of the
         * widget.
         */
        trackHover: boolean;

        // Owm methods of St-13.Widget

        /**
         * This method adds `state` as one of the accessible states for
         * `widget`. The list of states of a widget describes the current state
         * of user interface element `widget` and is provided so that assistive
         * technologies know how to present `widget` to the user.
         *
         * Usually you will have no need to add accessible states for an
         * object, as the accessible object can extract most of the states
         * from the object itself (ie: a #StButton knows when it is pressed).
         * This method is only required when one cannot extract the
         * information automatically from the object itself (i.e.: a generic
         * container used as a toggle menu item will not automatically include
         * the toggled state).
         * @param state #AtkStateType state to add
         */
        add_accessible_state(state: Atk.StateType): void;
        /**
         * Adds `style_class` to `actor'`s style class name list, if it is not
         * already present.
         * @param style_class a style class name string
         */
        add_style_class_name(style_class: string): void;
        /**
         * Adds `pseudo_class` to `actor'`s pseudo class list, if it is not
         * already present.
         * @param pseudo_class a pseudo class string
         */
        add_style_pseudo_class(pseudo_class: string): void;
        /**
         * Ensures that `widget` has read its style information and propagated any
         * changes to its children.
         */
        ensure_style(): void;
        /**
         * Gets the accessible name for this widget. See
         * st_widget_set_accessible_name() for more information.
         * @returns a character string representing the accessible name of the widget.
         */
        get_accessible_name(): string;
        /**
         * Gets the #AtkRole for this widget. See
         * st_widget_set_accessible_role() for more information.
         * @returns accessible #AtkRole for this widget
         */
        get_accessible_role(): Atk.Role;
        /**
         * Returns the current value of the can-focus property. See
         * st_widget_set_can_focus() for more information.
         * @returns current value of can-focus on @widget
         */
        get_can_focus(): boolean;
        /**
         * Gets a list of the focusable children of `widget,` in "Tab"
         * order. By default, this returns all visible
         * (as in clutter_actor_is_visible()) children of `widget`.
         * @returns @widget's focusable children
         */
        get_focus_chain(): Clutter.Actor[];
        /**
         * If #StWidget:track-hover is set, this returns whether the pointer
         * is currently over the widget.
         * @returns current value of hover on @widget
         */
        get_hover(): boolean;
        /**
         * Gets the label that identifies `widget` if it is defined
         * @returns the label that identifies the widget
         */
        get_label_actor(): Clutter.Actor;
        /**
         * Get the current inline style string. See st_widget_set_style().
         * @returns The inline style string, or %NULL. The   string is owned by the #StWidget and should not be modified or freed.
         */
        get_style(): string | null;
        /**
         * Get the current style class name
         * @returns the class name string. The string is owned by the #StWidget and should not be modified or freed.
         */
        get_style_class_name(): string;
        /**
         * Get the current style pseudo class list.
         *
         * Note that an actor can have multiple pseudo classes; if you just
         * want to test for the presence of a specific pseudo class, use
         * st_widget_has_style_pseudo_class().
         * @returns the pseudo class list string. The string is owned by the #StWidget and should not be modified or freed.
         */
        get_style_pseudo_class(): string;
        /**
         * Gets the theme node holding style information for the widget.
         * The theme node is used to access standard and custom CSS
         * properties of the widget.
         *
         * Note: it is a fatal error to call this on a widget that is
         *  not been added to a stage.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        get_theme_node(): ThemeNode;
        /**
         * Returns the current value of the #StWidget:track-hover property. See
         * st_widget_set_track_hover() for more information.
         * @returns current value of track-hover on @widget
         */
        get_track_hover(): boolean;
        /**
         * Tests if `actor'`s style class list includes `style_class`.
         * @param style_class a style class string
         * @returns whether or not @actor's style class list includes @style_class.
         */
        has_style_class_name(style_class: string): boolean;
        /**
         * Tests if `actor'`s pseudo class list includes `pseudo_class`.
         * @param pseudo_class a pseudo class string
         * @returns whether or not @actor's pseudo class list includes @pseudo_class.
         */
        has_style_pseudo_class(pseudo_class: string): boolean;
        /**
         * Tries to update the keyboard focus within `widget` in response to a
         * keyboard event.
         *
         * If `from` is a descendant of `widget,` this attempts to move the
         * keyboard focus to the next descendant of `widget` (in the order
         * implied by `direction)` that has the #StWidget:can-focus property
         * set. If `from` is %NULL, this attempts to focus either `widget`
         * itself, or its first descendant in the order implied by
         * `direction`. If `from` is outside of `widget,` it behaves as if it was
         * a descendant if `direction` is one of the directional arrows and as
         * if it was %NULL otherwise.
         *
         * If a container type is marked #StWidget:can-focus, the expected
         * behavior is that it will only take up a single slot on the focus
         * chain as a whole, rather than allowing navigation between its child
         * actors (or having a distinction between itself being focused and
         * one of its children being focused).
         *
         * Some widget classes might have slightly different behavior from the
         * above, where that would make more sense.
         *
         * If `wrap_around` is %TRUE and `from` is a child of `widget,` but the
         * widget has no further children that can accept the focus in the
         * given direction, then st_widget_navigate_focus() will try a second
         * time, using a %NULL `from,` which should cause it to reset the focus
         * to the first available widget in the given direction.
         * @param from the actor that the focus is coming from
         * @param direction the direction focus is moving in
         * @param wrap_around whether focus should wrap around
         * @returns %TRUE if clutter_actor_grab_key_focus() has been called on an actor. %FALSE if not.
         */
        navigate_focus(from: Clutter.Actor | null, direction: DirectionType, wrap_around: boolean): boolean;
        /**
         * Paint the background of the widget. This is meant to be called by
         * subclasses of StWidget that need to paint the background without
         * painting children.
         * @param paint_context
         */
        paint_background(paint_context: Clutter.PaintContext): void;
        /**
         * Returns the theme node for the widget if it has already been
         * computed, %NULL if the widget hasn't been added to a  stage or the theme
         * node hasn't been computed. If %NULL is returned, then ::style-changed
         * will be reliably emitted before the widget is allocated or painted.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        peek_theme_node(): ThemeNode;
        /**
         * Asks the widget to pop-up a context menu by emitting #StWidget::popup-menu.
         */
        popup_menu(): void;
        /**
         * This method removes `state` as on of the accessible states for
         * `widget`. See st_widget_add_accessible_state() for more information.
         * @param state #AtkState state to remove
         */
        remove_accessible_state(state: Atk.StateType): void;
        /**
         * Removes `style_class` from `actor'`s style class name, if it is
         * present.
         * @param style_class a style class name string
         */
        remove_style_class_name(style_class: string): void;
        /**
         * Removes `pseudo_class` from `actor'`s pseudo class, if it is present.
         * @param pseudo_class a pseudo class string
         */
        remove_style_pseudo_class(pseudo_class: string): void;
        /**
         * This method allows to set a customly created accessible object to
         * this widget. For example if you define a new subclass of
         * #StWidgetAccessible at the javascript code.
         *
         * NULL is a valid value for `accessible`. That contemplates the
         * hypothetical case of not needing anymore a custom accessible object
         * for the widget. Next call of st_widget_get_accessible() would
         * create and return a default accessible.
         *
         * It assumes that the call to atk_object_initialize that bound the
         * gobject with the custom accessible object was already called, so
         * not a responsibility of this method.
         * @param accessible an accessible (#AtkObject)
         */
        set_accessible(accessible: Atk.Object): void;
        /**
         * This method sets `name` as the accessible name for `widget`.
         *
         * Usually you will have no need to set the accessible name for an
         * object, as usually there is a label for most of the interface
         * elements. So in general it is better to just use
         * `st_widget_set_label_actor`. This method is only required when you
         * need to set an accessible name and there is no available label
         * object.
         * @param name a character string to be set as the accessible name
         */
        set_accessible_name(name?: string | null): void;
        /**
         * This method sets `role` as the accessible role for `widget`. This
         * role describes what kind of user interface element `widget` is and
         * is provided so that assistive technologies know how to present
         * `widget` to the user.
         *
         * Usually you will have no need to set the accessible role for an
         * object, as this information is extracted from the context of the
         * object (ie: a #StButton has by default a push button role). This
         * method is only required when you need to redefine the role
         * currently associated with the widget, for instance if it is being
         * used in an unusual way (ie: a #StButton used as a togglebutton), or
         * if a generic object is used directly (ie: a container as a menu
         * item).
         *
         * If `role` is #ATK_ROLE_INVALID, the role will not be changed
         * and the accessible's default role will be used instead.
         * @param role The role to use
         */
        set_accessible_role(role: Atk.Role): void;
        /**
         * Marks `widget` as being able to receive keyboard focus via
         * keyboard navigation.
         * @param can_focus %TRUE if the widget can receive keyboard focus   via keyboard navigation
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets `widget'`s hover property and adds or removes "hover" from its
         * pseudo class accordingly.
         *
         * If you have set #StWidget:track-hover, you should not need to call
         * this directly. You can call st_widget_sync_hover() if the hover
         * state might be out of sync due to another actor's pointer grab.
         * @param hover whether the pointer is hovering over the widget
         */
        set_hover(hover: boolean): void;
        /**
         * Sets `label` as the #ClutterActor that identifies (labels)
         * `widget`. `label` can be %NULL to indicate that `widget` is not
         * labelled any more
         * @param label a #ClutterActor
         */
        set_label_actor(label: Clutter.Actor): void;
        /**
         * Set the inline style string for this widget. The inline style string is an
         * optional ';'-separated list of CSS properties that override the style as
         * determined from the stylesheets of the current theme.
         * @param style a inline style string, or %NULL
         */
        set_style(style?: string | null): void;
        /**
         * Set the style class name list. `style_class_list` can either be
         * %NULL, for no classes, or a space-separated list of style class
         * names. See also st_widget_add_style_class_name() and
         * st_widget_remove_style_class_name().
         * @param style_class_list a new style class list string
         */
        set_style_class_name(style_class_list?: string | null): void;
        /**
         * Set the style pseudo class list. `pseudo_class_list` can either be
         * %NULL, for no classes, or a space-separated list of pseudo class
         * names. See also st_widget_add_style_pseudo_class() and
         * st_widget_remove_style_pseudo_class().
         * @param pseudo_class_list a new pseudo class list string
         */
        set_style_pseudo_class(pseudo_class_list?: string | null): void;
        /**
         * Enables hover tracking on the #StWidget.
         *
         * If hover tracking is enabled, and the widget is visible and
         * reactive, then `widget'`s #StWidget:hover property will be updated
         * automatically to reflect whether the pointer is in `widget` (or one
         * of its children), and `widget'`s #StWidget:pseudo-class will have
         * the "hover" class added and removed from it accordingly.
         *
         * Note that currently it is not possible to correctly track the hover
         * state when another actor has a pointer grab. You can use
         * st_widget_sync_hover() to update the property manually in this
         * case.
         * @param track_hover %TRUE if the widget should track the pointer hover state
         */
        set_track_hover(track_hover: boolean): void;
        style_changed(): void;
        /**
         * Sets `widget'`s hover state according to the current pointer
         * position. This can be used to ensure that it is correct after
         * (or during) a pointer grab.
         */
        sync_hover(): void;
    }

    module WidgetAccessible {
        // Constructor properties interface
    }

    class WidgetAccessible extends Cally.Actor {}

    /**
     * Base class for #StAdjustment.
     */
    class AdjustmentClass {}

    /**
     * The #StBinClass struct contains only private data
     */
    class BinClass {}

    class BorderImageClass {}

    class BoxLayoutClass {}

    class BoxLayoutPrivate {}

    class ButtonClass {}

    class ClipboardClass {}

    class DrawingAreaClass {}

    class EntryClass {}

    class FocusManagerClass {}

    class FocusManagerPrivate {}

    class GenericAccessibleClass {}

    class GenericAccessiblePrivate {}

    class IconClass {}

    /**
     * The #StIconColors structure encapsulates colors for colorizing a symbolic
     * icon.
     */
    class IconColors {
        // Own fields of St-13.IconColors

        foreground: Clutter.Color;
        warning: Clutter.Color;
        error: Clutter.Color;
        success: Clutter.Color;

        // Constructors of St-13.IconColors

        constructor(
            properties?: Partial<{
                foreground: Clutter.Color;
                warning: Clutter.Color;
                error: Clutter.Color;
                success: Clutter.Color;
            }>,
        );

        static ['new'](): IconColors;

        // Owm methods of St-13.IconColors

        /**
         * Creates a new StIconColors structure that is a copy of the passed
         * in `colors`. You would use this function instead of st_icon_colors_ref()
         * if you were planning to change colors in the result.
         * @returns a newly created #StIconColors.
         */
        copy(): IconColors;
        /**
         * Check if two #StIconColors objects are identical.
         * @param other another #StIconColors
         * @returns %TRUE if the #StIconColors are equal
         */
        equal(other: IconColors): boolean;
        /**
         * Atomically increments the reference count of `colors` by one.
         * @returns the passed in #StIconColors.
         */
        ref(): IconColors;
        /**
         * Atomically decrements the reference count of `colors` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StIconColors is released.
         */
        unref(): void;
    }

    class IconInfoClass {}

    class IconPrivate {}

    class IconThemeClass {}

    class ImageContentClass {}

    class LabelClass {}

    class LabelPrivate {}

    class PasswordEntryClass {}

    class ScrollBarClass {}

    class ScrollViewClass {}

    class ScrollViewFadeClass {}

    class ScrollViewPrivate {}

    class ScrollableInterface {}

    class SettingsClass {}

    /**
     * Attributes of the -st-shadow property.
     */
    class Shadow {
        // Own fields of St-13.Shadow

        color: Clutter.Color;
        xoffset: number;
        yoffset: number;
        blur: number;
        spread: number;
        inset: boolean;

        // Constructors of St-13.Shadow

        constructor(
            properties?: Partial<{
                color: Clutter.Color;
                xoffset: number;
                yoffset: number;
                blur: number;
                spread: number;
                inset: boolean;
            }>,
        );

        static ['new'](
            color: Clutter.Color,
            xoffset: number,
            yoffset: number,
            blur: number,
            spread: number,
            inset: boolean,
        ): Shadow;

        // Owm methods of St-13.Shadow

        /**
         * Check if two shadow objects are identical. Note that two shadows may
         * compare non-identically if they differ only by floating point rounding
         * errors.
         * @param other a different #StShadow
         * @returns %TRUE if the two shadows are identical
         */
        equal(other: Shadow): boolean;
        /**
         * Gets the box used to paint `shadow,` which will be partly
         * outside of `actor_box`
         * @param actor_box the box allocated to a #ClutterAlctor
         * @param shadow_box computed box occupied by @shadow
         */
        get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
        /**
         * Atomically increments the reference count of `shadow` by one.
         * @returns the passed in #StShadow.
         */
        ref(): Shadow;
        /**
         * Atomically decrements the reference count of `shadow` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StShadow is released.
         */
        unref(): void;
    }

    class ShadowHelper {
        // Constructors of St-13.ShadowHelper

        constructor(shadow: Shadow);

        static ['new'](shadow: Shadow): ShadowHelper;

        // Owm methods of St-13.ShadowHelper

        copy(): ShadowHelper;
        /**
         * Free resources associated with `helper`.
         */
        free(): void;
        /**
         * Paints the shadow associated with `helper` This must only
         * be called from the implementation of ClutterActor::paint().
         * @param framebuffer a #CoglFramebuffer
         * @param actor_box the bounding box of the shadow
         * @param paint_opacity the opacity at which the shadow is painted
         */
        paint(framebuffer: Cogl.Framebuffer, actor_box: Clutter.ActorBox, paint_opacity: number): void;
        /**
         * Update `helper` from `source`.
         * @param source a #ClutterActor
         */
        update(source: Clutter.Actor): void;
    }

    class TextureCacheClass {}

    class TextureCachePrivate {}

    class ThemeClass {}

    class ThemeContextClass {}

    class ThemeNodeClass {}

    class ThemeNodePaintState {
        // Own fields of St-13.ThemeNodePaintState

        node: ThemeNode;
        alloc_width: number;
        alloc_height: number;
        box_shadow_width: number;
        box_shadow_height: number;
        resource_scale: number;
        box_shadow_pipeline: Cogl.Pipeline;
        prerendered_texture: Cogl.Pipeline;
        prerendered_pipeline: Cogl.Pipeline;
        corner_material: Cogl.Pipeline[];

        // Owm methods of St-13.ThemeNodePaintState

        copy(other: ThemeNodePaintState): void;
        free(): void;
        init(): void;
        invalidate(): void;
        invalidate_for_file(file: Gio.File): boolean;
        set_node(node: ThemeNode): void;
    }

    class ViewportClass {}

    class WidgetAccessibleClass {}

    class WidgetAccessiblePrivate {}

    /**
     * Base class for stylable actors.
     */
    class WidgetClass {}

    interface Scrollable {
        // Own properties of St-13.Scrollable

        /**
         * The horizontal #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * JavaScript code may override this as demonstrated below:
         *
         *
         * ```&lt;!-- language="JavaScript" --&gt;
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get hadjustment() {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         *
         */
        hadjustment: Adjustment;
        /**
         * The vertical #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * See #StScrollable:hadjustment for an example of how to override this
         * property in JavaScript code.
         */
        vadjustment: Adjustment;

        // Owm methods of St-13.Scrollable

        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the #StScrollable
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal #StAdjustment
         * @param vadjustment the vertical #StAdjustment
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;

        // Own virtual methods of St-13.Scrollable

        vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the #StScrollable
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal #StAdjustment
         * @param vadjustment the vertical #StAdjustment
         */
        vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    }

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

export default St;
// END
