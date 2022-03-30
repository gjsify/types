/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EpcUi-1.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Epc from './Epc-1.0';

export namespace EpcUi {

interface PasswordDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
    /* Constructor properties of EpcUi-1.0.EpcUi.PasswordDialog */
    anonymous?: boolean
    anonymous_allowed?: boolean
    password?: string
    realm?: string
    username?: string
}
class PasswordDialog {
    /* Properties of EpcUi-1.0.EpcUi.PasswordDialog */
    anonymous: boolean
    anonymous_allowed: boolean
    password: string
    realm: string
    username: string
    /* Properties of Gtk-3.0.Gtk.Dialog */
    /**
     * %TRUE if the dialog uses a #GtkHeaderBar for action buttons
     * instead of the action-area.
     * 
     * For technical reasons, this property is declared as an integer
     * property, but you should only set it to %TRUE or %FALSE.
     */
    readonly use_header_bar: number
    /* Properties of Gtk-3.0.Gtk.Window */
    /**
     * Whether the window should receive the input focus.
     */
    accept_focus: boolean
    /**
     * The #GtkApplication associated with the window.
     * 
     * The application will be kept alive for at least as long as it
     * has any windows associated with it (see g_application_hold()
     * for a way to keep it alive without windows).
     * 
     * Normally, the connection between the application and the window
     * will remain until the window is destroyed, but you can explicitly
     * remove it by setting the :application property to %NULL.
     */
    application: Gtk.Application
    /**
     * The widget to which this window is attached.
     * See gtk_window_set_attached_to().
     * 
     * Examples of places where specifying this relation is useful are
     * for instance a #GtkMenu created by a #GtkComboBox, a completion
     * popup window created by #GtkEntry or a typeahead search entry
     * created by #GtkTreeView.
     */
    attached_to: Gtk.Widget
    /**
     * Whether the window should be decorated by the window manager.
     */
    decorated: boolean
    default_height: number
    default_width: number
    /**
     * Whether the window frame should have a close button.
     */
    deletable: boolean
    destroy_with_parent: boolean
    /**
     * Whether the window should receive the input focus when mapped.
     */
    focus_on_map: boolean
    /**
     * Whether 'focus rectangles' are currently visible in this window.
     * 
     * This property is maintained by GTK+ based on user input
     * and should not be set by applications.
     */
    focus_visible: boolean
    /**
     * The window gravity of the window. See gtk_window_move() and #GdkGravity for
     * more details about window gravity.
     */
    gravity: Gdk.Gravity
    /**
     * Whether the window has a corner resize grip.
     * 
     * Note that the resize grip is only shown if the window is
     * actually resizable and not maximized. Use
     * #GtkWindow:resize-grip-visible to find out if the resize
     * grip is currently shown.
     */
    has_resize_grip: boolean
    readonly has_toplevel_focus: boolean
    /**
     * Whether the titlebar should be hidden during maximization.
     */
    hide_titlebar_when_maximized: boolean
    icon: GdkPixbuf.Pixbuf
    /**
     * The :icon-name property specifies the name of the themed icon to
     * use as the window icon. See #GtkIconTheme for more details.
     */
    icon_name: string
    readonly is_active: boolean
    readonly is_maximized: boolean
    /**
     * Whether mnemonics are currently visible in this window.
     * 
     * This property is maintained by GTK+ based on user input,
     * and should not be set by applications.
     */
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    /**
     * Whether a corner resize grip is currently shown.
     */
    readonly resize_grip_visible: boolean
    role: string
    screen: Gdk.Screen
    skip_pager_hint: boolean
    skip_taskbar_hint: boolean
    /**
     * The :startup-id is a write-only property for setting window's
     * startup notification identifier. See gtk_window_set_startup_id()
     * for more details.
     */
    startup_id: string
    title: string
    /**
     * The transient parent of the window. See gtk_window_set_transient_for() for
     * more details about transient windows.
     */
    transient_for: Gtk.Window
    readonly type: Gtk.WindowType
    type_hint: Gdk.WindowTypeHint
    urgency_hint: boolean
    window_position: Gtk.WindowPosition
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    /**
     * Whether the widget is double buffered.
     */
    double_buffered: boolean
    events: Gdk.EventMask
    /**
     * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
     */
    expand: boolean
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * 
     * This property is only relevant for widgets that can take focus.
     * 
     * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
     * GtkComboBox) implemented this property individually.
     */
    focus_on_click: boolean
    /**
     * How to distribute horizontal space if widget gets extra space, see #GtkAlign
     */
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    has_tooltip: boolean
    height_request: number
    /**
     * Whether to expand horizontally. See gtk_widget_set_hexpand().
     */
    hexpand: boolean
    /**
     * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
     */
    hexpand_set: boolean
    is_focus: boolean
    /**
     * Sets all four sides' margin at once. If read, returns max
     * margin on any side.
     */
    margin: number
    /**
     * Margin on bottom side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_bottom: number
    /**
     * Margin on end of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_end: number
    /**
     * Margin on left side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_left: number
    /**
     * Margin on right side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_right: number
    /**
     * Margin on start of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_start: number
    /**
     * Margin on top side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_top: number
    name: string
    no_show_all: boolean
    /**
     * The requested opacity of the widget. See gtk_widget_set_opacity() for
     * more details about window opacity.
     * 
     * Before 3.8 this was only available in GtkWindow
     */
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    /**
     * The scale factor of the widget. See gtk_widget_get_scale_factor() for
     * more details about widget scaling.
     */
    readonly scale_factor: number
    sensitive: boolean
    /**
     * The style of the widget, which contains information about how it will look (colors, etc).
     */
    style: Gtk.Style
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the [Pango text markup language][PangoMarkupFormat].
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_text: string
    /**
     * How to distribute vertical space if widget gets extra space, see #GtkAlign
     */
    valign: Gtk.Align
    /**
     * Whether to expand vertically. See gtk_widget_set_vexpand().
     */
    vexpand: boolean
    /**
     * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
     */
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-3.0.Gtk.Dialog */
    window: Gtk.Window
    /* Fields of Gtk-3.0.Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk-3.0.Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EpcUi-1.0.EpcUi.PasswordDialog */
    attach(consumer: Epc.Consumer): void
    get_anonymous_allowed(): boolean
    get_password(): string
    get_realm(): string
    get_username(): string
    is_anonymous(): boolean
    set_anonymous(anonymous: boolean): void
    set_anonymous_allowed(allowed: boolean): void
    set_password(password: string): void
    set_realm(realm: string): void
    set_username(username: string): void
    /* Methods of Gtk-3.0.Gtk.Dialog */
    /**
     * Adds an activatable widget to the action area of a #GtkDialog,
     * connecting a signal handler that will emit the #GtkDialog::response
     * signal on the dialog when the widget is activated. The widget is
     * appended to the end of the dialog’s action area. If you want to add a
     * non-activatable widget, simply pack it into the `action_area` field
     * of the #GtkDialog struct.
     * @param child an activatable widget
     * @param response_id response ID for `child`
     */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    /**
     * Adds a button with the given text and sets things up so that
     * clicking the button will emit the #GtkDialog::response signal with
     * the given `response_id`. The button is appended to the end of the
     * dialog’s action area. The button widget is returned, but usually
     * you don’t need it.
     * @param button_text text of button
     * @param response_id response ID for the button
     */
    add_button(button_text: string, response_id: number): Gtk.Widget
    /**
     * Returns the action area of `dialog`.
     */
    get_action_area(): Gtk.Box
    /**
     * Returns the content area of `dialog`.
     */
    get_content_area(): Gtk.Box
    /**
     * Returns the header bar of `dialog`. Note that the
     * headerbar is only used by the dialog if the
     * #GtkDialog:use-header-bar property is %TRUE.
     */
    get_header_bar(): Gtk.HeaderBar
    /**
     * Gets the response id of a widget in the action area
     * of a dialog.
     * @param widget a widget in the action area of `dialog`
     */
    get_response_for_widget(widget: Gtk.Widget): number
    /**
     * Gets the widget button that uses the given response ID in the action area
     * of a dialog.
     * @param response_id the response ID used by the `dialog` widget
     */
    get_widget_for_response(response_id: number): Gtk.Widget | null
    /**
     * Emits the #GtkDialog::response signal with the given response ID.
     * Used to indicate that the user has responded to the dialog in some way;
     * typically either you or gtk_dialog_run() will be monitoring the
     * ::response signal and take appropriate action.
     * @param response_id response ID
     */
    response(response_id: number): void
    /**
     * Blocks in a recursive main loop until the `dialog` either emits the
     * #GtkDialog::response signal, or is destroyed. If the dialog is
     * destroyed during the call to gtk_dialog_run(), gtk_dialog_run() returns
     * #GTK_RESPONSE_NONE. Otherwise, it returns the response ID from the
     * ::response signal emission.
     * 
     * Before entering the recursive main loop, gtk_dialog_run() calls
     * gtk_widget_show() on the dialog for you. Note that you still
     * need to show any children of the dialog yourself.
     * 
     * During gtk_dialog_run(), the default behavior of #GtkWidget::delete-event
     * is disabled; if the dialog receives ::delete_event, it will not be
     * destroyed as windows usually are, and gtk_dialog_run() will return
     * #GTK_RESPONSE_DELETE_EVENT. Also, during gtk_dialog_run() the dialog
     * will be modal. You can force gtk_dialog_run() to return at any time by
     * calling gtk_dialog_response() to emit the ::response signal. Destroying
     * the dialog during gtk_dialog_run() is a very bad idea, because your
     * post-run code won’t know whether the dialog was destroyed or not.
     * 
     * After gtk_dialog_run() returns, you are responsible for hiding or
     * destroying the dialog if you wish to do so.
     * 
     * Typical usage of this function might be:
     * 
     * ```c
     *   GtkWidget *dialog = gtk_dialog_new ();
     *   // Set up dialog...
     * 
     *   int result = gtk_dialog_run (GTK_DIALOG (dialog));
     *   switch (result)
     *     {
     *       case GTK_RESPONSE_ACCEPT:
     *          // do_application_specific_something ();
     *          break;
     *       default:
     *          // do_nothing_since_dialog_was_cancelled ();
     *          break;
     *     }
     *   gtk_widget_destroy (dialog);
     * ```
     * 
     * 
     * Note that even though the recursive main loop gives the effect of a
     * modal dialog (it prevents the user from interacting with other
     * windows in the same window group while the dialog is run), callbacks
     * such as timeouts, IO channel watches, DND drops, etc, will
     * be triggered during a gtk_dialog_run() call.
     */
    run(): number
    /**
     * Sets an alternative button order. If the
     * #GtkSettings:gtk-alternative-button-order setting is set to %TRUE,
     * the dialog buttons are reordered according to the order of the
     * response ids in `new_order`.
     * 
     * See gtk_dialog_set_alternative_button_order() for more information.
     * 
     * This function is for use by language bindings.
     * @param new_order an array of response ids of     `dialog’`s buttons
     */
    set_alternative_button_order_from_array(new_order: number[]): void
    /**
     * Sets the last widget in the dialog’s action area with the given `response_id`
     * as the default widget for the dialog. Pressing “Enter” normally activates
     * the default widget.
     * @param response_id a response ID
     */
    set_default_response(response_id: number): void
    /**
     * Calls `gtk_widget_set_sensitive (widget, `setting)``
     * for each widget in the dialog’s action area with the given `response_id`.
     * A convenient way to sensitize/desensitize dialog buttons.
     * @param response_id a response ID
     * @param setting %TRUE for sensitive
     */
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk-3.0.Gtk.Window */
    /**
     * Activates the default widget for the window, unless the current
     * focused widget has been configured to receive the default action
     * (see gtk_widget_set_receives_default()), in which case the
     * focused widget is activated.
     */
    activate_default(): boolean
    /**
     * Activates the current focused widget within the window.
     */
    activate_focus(): boolean
    /**
     * Activates mnemonics and accelerators for this #GtkWindow. This is normally
     * called by the default ::key_press_event handler for toplevel windows,
     * however in some cases it may be useful to call this directly when
     * overriding the standard key handling for a toplevel window.
     * @param event a #GdkEventKey
     */
    activate_key(event: Gdk.EventKey): boolean
    /**
     * Associate `accel_group` with `window,` such that calling
     * gtk_accel_groups_activate() on `window` will activate accelerators
     * in `accel_group`.
     * @param accel_group a #GtkAccelGroup
     */
    add_accel_group(accel_group: Gtk.AccelGroup): void
    /**
     * Adds a mnemonic to this window.
     * @param keyval the mnemonic
     * @param target the widget that gets activated by the mnemonic
     */
    add_mnemonic(keyval: number, target: Gtk.Widget): void
    /**
     * Starts moving a window. This function is used if an application has
     * window movement grips. When GDK can support it, the window movement
     * will be done using the standard mechanism for the
     * [window manager][gtk-X11-arch] or windowing
     * system. Otherwise, GDK will try to emulate window movement,
     * potentially not all that well, depending on the windowing system.
     * @param button mouse button that initiated the drag
     * @param root_x X position where the user clicked to initiate the drag, in root window coordinates
     * @param root_y Y position where the user clicked to initiate the drag
     * @param timestamp timestamp from the click event that initiated the drag
     */
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Starts resizing a window. This function is used if an application
     * has window resizing controls. When GDK can support it, the resize
     * will be done using the standard mechanism for the
     * [window manager][gtk-X11-arch] or windowing
     * system. Otherwise, GDK will try to emulate window resizing,
     * potentially not all that well, depending on the windowing system.
     * @param edge position of the resize control
     * @param button mouse button that initiated the drag
     * @param root_x X position where the user clicked to initiate the drag, in root window coordinates
     * @param root_y Y position where the user clicked to initiate the drag
     * @param timestamp timestamp from the click event that initiated the drag
     */
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Asks to deiconify (i.e. unminimize) the specified `window`. Note
     * that you shouldn’t assume the window is definitely deiconified
     * afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch])) could iconify it
     * again before your code which assumes deiconification gets to run.
     * 
     * You can track iconification via the “window-state-event” signal
     * on #GtkWidget.
     */
    deiconify(): void
    /**
     * Asks to place `window` in the fullscreen state. Note that you
     * shouldn’t assume the window is definitely full screen afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could unfullscreen it
     * again, and not all window managers honor requests to fullscreen
     * windows. But normally the window will end up fullscreen. Just
     * don’t write code that crashes if not.
     * 
     * You can track the fullscreen state via the “window-state-event” signal
     * on #GtkWidget.
     */
    fullscreen(): void
    /**
     * Asks to place `window` in the fullscreen state. Note that you shouldn't assume
     * the window is definitely full screen afterward.
     * 
     * You can track the fullscreen state via the "window-state-event" signal
     * on #GtkWidget.
     * @param screen a #GdkScreen to draw to
     * @param monitor which monitor to go fullscreen on
     */
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void
    /**
     * Gets the value set by gtk_window_set_accept_focus().
     */
    get_accept_focus(): boolean
    /**
     * Gets the #GtkApplication associated with the window (if any).
     */
    get_application(): Gtk.Application | null
    /**
     * Fetches the attach widget for this window. See
     * gtk_window_set_attached_to().
     */
    get_attached_to(): Gtk.Widget | null
    /**
     * Returns whether the window has been set to have decorations
     * such as a title bar via gtk_window_set_decorated().
     */
    get_decorated(): boolean
    /**
     * Gets the default size of the window. A value of -1 for the width or
     * height indicates that a default size has not been explicitly set
     * for that dimension, so the “natural” size of the window will be
     * used.
     */
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the default widget for `window`. See
     * gtk_window_set_default() for more details.
     */
    get_default_widget(): Gtk.Widget | null
    /**
     * Returns whether the window has been set to have a close button
     * via gtk_window_set_deletable().
     */
    get_deletable(): boolean
    /**
     * Returns whether the window will be destroyed with its transient parent. See
     * gtk_window_set_destroy_with_parent ().
     */
    get_destroy_with_parent(): boolean
    /**
     * Retrieves the current focused widget within the window.
     * Note that this is the widget that would have the focus
     * if the toplevel window focused; if the toplevel window
     * is not focused then  `gtk_widget_has_focus (widget)` will
     * not be %TRUE for the widget.
     */
    get_focus(): Gtk.Widget | null
    /**
     * Gets the value set by gtk_window_set_focus_on_map().
     */
    get_focus_on_map(): boolean
    /**
     * Gets the value of the #GtkWindow:focus-visible property.
     */
    get_focus_visible(): boolean
    /**
     * Gets the value set by gtk_window_set_gravity().
     */
    get_gravity(): Gdk.Gravity
    /**
     * Returns the group for `window` or the default group, if
     * `window` is %NULL or if `window` does not have an explicit
     * window group.
     */
    get_group(): Gtk.WindowGroup
    /**
     * Determines whether the window may have a resize grip.
     */
    get_has_resize_grip(): boolean
    /**
     * Returns whether the window has requested to have its titlebar hidden
     * when maximized. See gtk_window_set_hide_titlebar_when_maximized ().
     */
    get_hide_titlebar_when_maximized(): boolean
    /**
     * Gets the value set by gtk_window_set_icon() (or if you've
     * called gtk_window_set_icon_list(), gets the first icon in
     * the icon list).
     */
    get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Retrieves the list of icons set by gtk_window_set_icon_list().
     * The list is copied, but the reference count on each
     * member won’t be incremented.
     */
    get_icon_list(): GdkPixbuf.Pixbuf[]
    /**
     * Returns the name of the themed icon for the window,
     * see gtk_window_set_icon_name().
     */
    get_icon_name(): string | null
    /**
     * Returns the mnemonic modifier for this window. See
     * gtk_window_set_mnemonic_modifier().
     */
    get_mnemonic_modifier(): Gdk.ModifierType
    /**
     * Gets the value of the #GtkWindow:mnemonics-visible property.
     */
    get_mnemonics_visible(): boolean
    /**
     * Returns whether the window is modal. See gtk_window_set_modal().
     */
    get_modal(): boolean
    /**
     * Fetches the requested opacity for this window. See
     * gtk_window_set_opacity().
     */
    get_opacity(): number
    /**
     * This function returns the position you need to pass to
     * gtk_window_move() to keep `window` in its current position.
     * This means that the meaning of the returned value varies with
     * window gravity. See gtk_window_move() for more details.
     * 
     * The reliability of this function depends on the windowing system
     * currently in use. Some windowing systems, such as Wayland, do not
     * support a global coordinate system, and thus the position of the
     * window will always be (0, 0). Others, like X11, do not have a reliable
     * way to obtain the geometry of the decorations of a window if they are
     * provided by the window manager. Additionally, on X11, window manager
     * have been known to mismanage window gravity, which result in windows
     * moving even if you use the coordinates of the current position as
     * returned by this function.
     * 
     * If you haven’t changed the window gravity, its gravity will be
     * #GDK_GRAVITY_NORTH_WEST. This means that gtk_window_get_position()
     * gets the position of the top-left corner of the window manager
     * frame for the window. gtk_window_move() sets the position of this
     * same top-left corner.
     * 
     * If a window has gravity #GDK_GRAVITY_STATIC the window manager
     * frame is not relevant, and thus gtk_window_get_position() will
     * always produce accurate results. However you can’t use static
     * gravity to do things like place a window in a corner of the screen,
     * because static gravity ignores the window manager decorations.
     * 
     * Ideally, this function should return appropriate values if the
     * window has client side decorations, assuming that the windowing
     * system supports global coordinates.
     * 
     * In practice, saving the window position should not be left to
     * applications, as they lack enough knowledge of the windowing
     * system and the window manager state to effectively do so. The
     * appropriate way to implement saving the window position is to
     * use a platform-specific protocol, wherever that is available.
     */
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    /**
     * Gets the value set by gtk_window_set_resizable().
     */
    get_resizable(): boolean
    /**
     * If a window has a resize grip, this will retrieve the grip
     * position, width and height into the specified #GdkRectangle.
     */
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    /**
     * Returns the role of the window. See gtk_window_set_role() for
     * further explanation.
     */
    get_role(): string | null
    /**
     * Returns the #GdkScreen associated with `window`.
     */
    get_screen(): Gdk.Screen
    /**
     * Obtains the current size of `window`.
     * 
     * If `window` is not visible on screen, this function return the size GTK+
     * will suggest to the [window manager][gtk-X11-arch] for the initial window
     * size (but this is not reliably the same as the size the window manager
     * will actually select). See: gtk_window_set_default_size().
     * 
     * Depending on the windowing system and the window manager constraints,
     * the size returned by this function may not match the size set using
     * gtk_window_resize(); additionally, since gtk_window_resize() may be
     * implemented as an asynchronous operation, GTK+ cannot guarantee in any
     * way that this code:
     * 
     * 
     * ```c
     *   // width and height are set elsewhere
     *   gtk_window_resize (window, width, height);
     * 
     *   int new_width, new_height;
     *   gtk_window_get_size (window, &new_width, &new_height);
     * ```
     * 
     * 
     * will result in `new_width` and `new_height` matching `width` and
     * `height`, respectively.
     * 
     * This function will return the logical size of the #GtkWindow,
     * excluding the widgets used in client side decorations; there is,
     * however, no guarantee that the result will be completely accurate
     * because client side decoration may include widgets that depend on
     * the user preferences and that may not be visibile at the time you
     * call this function.
     * 
     * The dimensions returned by this function are suitable for being
     * stored across sessions; use gtk_window_set_default_size() to
     * restore them when before showing the window.
     * 
     * To avoid potential race conditions, you should only call this
     * function in response to a size change notification, for instance
     * inside a handler for the #GtkWidget::size-allocate signal, or
     * inside a handler for the #GtkWidget::configure-event signal:
     * 
     * 
     * ```c
     * static void
     * on_size_allocate (GtkWidget *widget, GtkAllocation *allocation)
     * {
     *   int new_width, new_height;
     * 
     *   gtk_window_get_size (GTK_WINDOW (widget), &new_width, &new_height);
     * 
     *   ...
     * }
     * ```
     * 
     * 
     * Note that, if you connect to the #GtkWidget::size-allocate signal,
     * you should not use the dimensions of the #GtkAllocation passed to
     * the signal handler, as the allocation may contain client side
     * decorations added by GTK+, depending on the windowing system in
     * use.
     * 
     * If you are getting a window size in order to position the window
     * on the screen, you should, instead, simply set the window’s semantic
     * type with gtk_window_set_type_hint(), which allows the window manager
     * to e.g. center dialogs. Also, if you set the transient parent of
     * dialogs with gtk_window_set_transient_for() window managers will
     * often center the dialog over its parent window. It's much preferred
     * to let the window manager handle these cases rather than doing it
     * yourself, because all apps will behave consistently and according to
     * user or system preferences, if the window manager handles it. Also,
     * the window manager can take into account the size of the window
     * decorations and border that it may add, and of which GTK+ has no
     * knowledge. Additionally, positioning windows in global screen coordinates
     * may not be allowed by the windowing system. For more information,
     * see: gtk_window_set_position().
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the value set by gtk_window_set_skip_pager_hint().
     */
    get_skip_pager_hint(): boolean
    /**
     * Gets the value set by gtk_window_set_skip_taskbar_hint()
     */
    get_skip_taskbar_hint(): boolean
    /**
     * Retrieves the title of the window. See gtk_window_set_title().
     */
    get_title(): string | null
    /**
     * Returns the custom titlebar that has been set with
     * gtk_window_set_titlebar().
     */
    get_titlebar(): Gtk.Widget | null
    /**
     * Fetches the transient parent for this window. See
     * gtk_window_set_transient_for().
     */
    get_transient_for(): Gtk.Window | null
    /**
     * Gets the type hint for this window. See gtk_window_set_type_hint().
     */
    get_type_hint(): Gdk.WindowTypeHint
    /**
     * Gets the value set by gtk_window_set_urgency_hint()
     */
    get_urgency_hint(): boolean
    /**
     * Gets the type of the window. See #GtkWindowType.
     */
    get_window_type(): Gtk.WindowType
    /**
     * Returns whether `window` has an explicit window group.
     */
    has_group(): boolean
    /**
     * Asks to iconify (i.e. minimize) the specified `window`. Note that
     * you shouldn’t assume the window is definitely iconified afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could deiconify it
     * again, or there may not be a window manager in which case
     * iconification isn’t possible, etc. But normally the window will end
     * up iconified. Just don’t write code that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be iconified before it ever appears
     * onscreen.
     * 
     * You can track iconification via the “window-state-event” signal
     * on #GtkWidget.
     */
    iconify(): void
    /**
     * Asks to maximize `window,` so that it becomes full-screen. Note that
     * you shouldn’t assume the window is definitely maximized afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could unmaximize it
     * again, and not all window managers support maximization. But
     * normally the window will end up maximized. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be maximized when it appears onscreen
     * initially.
     * 
     * You can track maximization via the “window-state-event” signal
     * on #GtkWidget, or by listening to notifications on the
     * #GtkWindow:is-maximized property.
     */
    maximize(): void
    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean
    /**
     * Asks the [window manager][gtk-X11-arch] to move
     * `window` to the given position.  Window managers are free to ignore
     * this; most window managers ignore requests for initial window
     * positions (instead using a user-defined placement algorithm) and
     * honor requests after the window has already been shown.
     * 
     * Note: the position is the position of the gravity-determined
     * reference point for the window. The gravity determines two things:
     * first, the location of the reference point in root window
     * coordinates; and second, which point on the window is positioned at
     * the reference point.
     * 
     * By default the gravity is #GDK_GRAVITY_NORTH_WEST, so the reference
     * point is simply the `x,` `y` supplied to gtk_window_move(). The
     * top-left corner of the window decorations (aka window frame or
     * border) will be placed at `x,` `y`.  Therefore, to position a window
     * at the top left of the screen, you want to use the default gravity
     * (which is #GDK_GRAVITY_NORTH_WEST) and move the window to 0,0.
     * 
     * To position a window at the bottom right corner of the screen, you
     * would set #GDK_GRAVITY_SOUTH_EAST, which means that the reference
     * point is at `x` + the window width and `y` + the window height, and
     * the bottom-right corner of the window border will be placed at that
     * reference point. So, to place a window in the bottom right corner
     * you would first set gravity to south east, then write:
     * `gtk_window_move (window, gdk_screen_width () - window_width,
     * gdk_screen_height () - window_height)` (note that this
     * example does not take multi-head scenarios into account).
     * 
     * The [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec)
     * has a nice table of gravities in the “implementation notes” section.
     * 
     * The gtk_window_get_position() documentation may also be relevant.
     * @param x X coordinate to move window to
     * @param y Y coordinate to move window to
     */
    move(x: number, y: number): void
    /**
     * Parses a standard X Window System geometry string - see the
     * manual page for X (type “man X”) for details on this.
     * gtk_window_parse_geometry() does work on all GTK+ ports
     * including Win32 but is primarily intended for an X environment.
     * 
     * If either a size or a position can be extracted from the
     * geometry string, gtk_window_parse_geometry() returns %TRUE
     * and calls gtk_window_set_default_size() and/or gtk_window_move()
     * to resize/move the window.
     * 
     * If gtk_window_parse_geometry() returns %TRUE, it will also
     * set the #GDK_HINT_USER_POS and/or #GDK_HINT_USER_SIZE hints
     * indicating to the window manager that the size/position of
     * the window was user-specified. This causes most window
     * managers to honor the geometry.
     * 
     * Note that for gtk_window_parse_geometry() to work as expected, it has
     * to be called when the window has its “final” size, i.e. after calling
     * gtk_widget_show_all() on the contents and gtk_window_set_geometry_hints()
     * on the window.
     * 
     * ```c
     * #include <gtk/gtk.h>
     * 
     * static void
     * fill_with_content (GtkWidget *vbox)
     * {
     *   // fill with content...
     * }
     * 
     * int
     * main (int argc, char *argv[])
     * {
     *   GtkWidget *window, *vbox;
     *   GdkGeometry size_hints = {
     *     100, 50, 0, 0, 100, 50, 10,
     *     10, 0.0, 0.0, GDK_GRAVITY_NORTH_WEST
     *   };
     * 
     *   gtk_init (&argc, &argv);
     * 
     *   window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
     *   vbox = gtk_box_new (GTK_ORIENTATION_VERTICAL, 0);
     * 
     *   gtk_container_add (GTK_CONTAINER (window), vbox);
     *   fill_with_content (vbox);
     *   gtk_widget_show_all (vbox);
     * 
     *   gtk_window_set_geometry_hints (GTK_WINDOW (window),
     * 	  			    NULL,
     * 				    &size_hints,
     * 				    GDK_HINT_MIN_SIZE |
     * 				    GDK_HINT_BASE_SIZE |
     * 				    GDK_HINT_RESIZE_INC);
     * 
     *   if (argc > 1)
     *     {
     *       gboolean res;
     *       res = gtk_window_parse_geometry (GTK_WINDOW (window),
     *                                        argv[1]);
     *       if (! res)
     *         fprintf (stderr,
     *                  "Failed to parse “%s”\n",
     *                  argv[1]);
     *     }
     * 
     *   gtk_widget_show_all (window);
     *   gtk_main ();
     * 
     *   return 0;
     * }
     * ```
     * 
     * @param geometry geometry string
     */
    parse_geometry(geometry: string): boolean
    /**
     * Presents a window to the user. This function should not be used
     * as when it is called, it is too late to gather a valid timestamp
     * to allow focus stealing prevention to work correctly.
     */
    present(): void
    /**
     * Presents a window to the user. This may mean raising the window
     * in the stacking order, deiconifying it, moving it to the current
     * desktop, and/or giving it the keyboard focus, possibly dependent
     * on the user’s platform, window manager, and preferences.
     * 
     * If `window` is hidden, this function calls gtk_widget_show()
     * as well.
     * 
     * This function should be used when the user tries to open a window
     * that’s already open. Say for example the preferences dialog is
     * currently open, and the user chooses Preferences from the menu
     * a second time; use gtk_window_present() to move the already-open dialog
     * where the user can see it.
     * 
     * Presents a window to the user in response to a user interaction. The
     * timestamp should be gathered when the window was requested to be shown
     * (when clicking a link for example), rather than once the window is
     * ready to be shown.
     * @param timestamp the timestamp of the user interaction (typically a   button or key press event) which triggered this call
     */
    present_with_time(timestamp: number): void
    /**
     * Propagate a key press or release event to the focus widget and
     * up the focus container chain until a widget handles `event`.
     * This is normally called by the default ::key_press_event and
     * ::key_release_event handlers for toplevel windows,
     * however in some cases it may be useful to call this directly when
     * overriding the standard key handling for a toplevel window.
     * @param event a #GdkEventKey
     */
    propagate_key_event(event: Gdk.EventKey): boolean
    /**
     * Reverses the effects of gtk_window_add_accel_group().
     * @param accel_group a #GtkAccelGroup
     */
    remove_accel_group(accel_group: Gtk.AccelGroup): void
    /**
     * Removes a mnemonic from this window.
     * @param keyval the mnemonic
     * @param target the widget that gets activated by the mnemonic
     */
    remove_mnemonic(keyval: number, target: Gtk.Widget): void
    /**
     * Hides `window,` then reshows it, resetting the
     * default size and position of the window. Used
     * by GUI builders only.
     */
    reshow_with_initial_size(): void
    /**
     * Resizes the window as if the user had done so, obeying geometry
     * constraints. The default geometry constraint is that windows may
     * not be smaller than their size request; to override this
     * constraint, call gtk_widget_set_size_request() to set the window's
     * request to a smaller value.
     * 
     * If gtk_window_resize() is called before showing a window for the
     * first time, it overrides any default size set with
     * gtk_window_set_default_size().
     * 
     * Windows may not be resized smaller than 1 by 1 pixels.
     * 
     * When using client side decorations, GTK+ will do its best to adjust
     * the given size so that the resulting window size matches the
     * requested size without the title bar, borders and shadows added for
     * the client side decorations, but there is no guarantee that the
     * result will be totally accurate because these widgets added for
     * client side decorations depend on the theme and may not be realized
     * or visible at the time gtk_window_resize() is issued.
     * 
     * If the GtkWindow has a titlebar widget (see gtk_window_set_titlebar()), then
     * typically, gtk_window_resize() will compensate for the height of the titlebar
     * widget only if the height is known when the resulting GtkWindow configuration
     * is issued.
     * For example, if new widgets are added after the GtkWindow configuration
     * and cause the titlebar widget to grow in height, this will result in a
     * window content smaller that specified by gtk_window_resize() and not
     * a larger window.
     * @param width width in pixels to resize the window to
     * @param height height in pixels to resize the window to
     */
    resize(width: number, height: number): void
    /**
     * Determines whether a resize grip is visible for the specified window.
     */
    resize_grip_is_visible(): boolean
    /**
     * Like gtk_window_resize(), but `width` and `height` are interpreted
     * in terms of the base size and increment set with
     * gtk_window_set_geometry_hints.
     * @param width width in resize increments to resize the window to
     * @param height height in resize increments to resize the window to
     */
    resize_to_geometry(width: number, height: number): void
    /**
     * Windows may set a hint asking the desktop environment not to receive
     * the input focus. This function sets this hint.
     * @param setting %TRUE to let this window receive input focus
     */
    set_accept_focus(setting: boolean): void
    /**
     * Sets or unsets the #GtkApplication associated with the window.
     * 
     * The application will be kept alive for at least as long as it has any windows
     * associated with it (see g_application_hold() for a way to keep it alive
     * without windows).
     * 
     * Normally, the connection between the application and the window will remain
     * until the window is destroyed, but you can explicitly remove it by setting
     * the `application` to %NULL.
     * 
     * This is equivalent to calling gtk_application_remove_window() and/or
     * gtk_application_add_window() on the old/new applications as relevant.
     * @param application a #GtkApplication, or %NULL to unset
     */
    set_application(application?: Gtk.Application | null): void
    /**
     * Marks `window` as attached to `attach_widget`. This creates a logical binding
     * between the window and the widget it belongs to, which is used by GTK+ to
     * propagate information such as styling or accessibility to `window` as if it
     * was a children of `attach_widget`.
     * 
     * Examples of places where specifying this relation is useful are for instance
     * a #GtkMenu created by a #GtkComboBox, a completion popup window
     * created by #GtkEntry or a typeahead search entry created by #GtkTreeView.
     * 
     * Note that this function should not be confused with
     * gtk_window_set_transient_for(), which specifies a window manager relation
     * between two toplevels instead.
     * 
     * Passing %NULL for `attach_widget` detaches the window.
     * @param attach_widget a #GtkWidget, or %NULL
     */
    set_attached_to(attach_widget?: Gtk.Widget | null): void
    /**
     * By default, windows are decorated with a title bar, resize
     * controls, etc.  Some [window managers][gtk-X11-arch]
     * allow GTK+ to disable these decorations, creating a
     * borderless window. If you set the decorated property to %FALSE
     * using this function, GTK+ will do its best to convince the window
     * manager not to decorate the window. Depending on the system, this
     * function may not have any effect when called on a window that is
     * already visible, so you should call it before calling gtk_widget_show().
     * 
     * On Windows, this function always works, since there’s no window manager
     * policy involved.
     * @param setting %TRUE to decorate the window
     */
    set_decorated(setting: boolean): void
    /**
     * The default widget is the widget that’s activated when the user
     * presses Enter in a dialog (for example). This function sets or
     * unsets the default widget for a #GtkWindow. When setting (rather
     * than unsetting) the default widget it’s generally easier to call
     * gtk_widget_grab_default() on the widget. Before making a widget
     * the default widget, you must call gtk_widget_set_can_default() on
     * the widget you’d like to make the default.
     * @param default_widget widget to be the default, or %NULL     to unset the default widget for the toplevel
     */
    set_default(default_widget?: Gtk.Widget | null): void
    /**
     * Like gtk_window_set_default_size(), but `width` and `height` are interpreted
     * in terms of the base size and increment set with
     * gtk_window_set_geometry_hints.
     * @param width width in resize increments, or -1 to unset the default width
     * @param height height in resize increments, or -1 to unset the default height
     */
    set_default_geometry(width: number, height: number): void
    /**
     * Sets the default size of a window. If the window’s “natural” size
     * (its size request) is larger than the default, the default will be
     * ignored. More generally, if the default size does not obey the
     * geometry hints for the window (gtk_window_set_geometry_hints() can
     * be used to set these explicitly), the default size will be clamped
     * to the nearest permitted size.
     * 
     * Unlike gtk_widget_set_size_request(), which sets a size request for
     * a widget and thus would keep users from shrinking the window, this
     * function only sets the initial size, just as if the user had
     * resized the window themselves. Users can still shrink the window
     * again as they normally would. Setting a default size of -1 means to
     * use the “natural” default size (the size request of the window).
     * 
     * For more control over a window’s initial size and how resizing works,
     * investigate gtk_window_set_geometry_hints().
     * 
     * For some uses, gtk_window_resize() is a more appropriate function.
     * gtk_window_resize() changes the current size of the window, rather
     * than the size to be used on initial display. gtk_window_resize() always
     * affects the window itself, not the geometry widget.
     * 
     * The default size of a window only affects the first time a window is
     * shown; if a window is hidden and re-shown, it will remember the size
     * it had prior to hiding, rather than using the default size.
     * 
     * Windows can’t actually be 0x0 in size, they must be at least 1x1, but
     * passing 0 for `width` and `height` is OK, resulting in a 1x1 default size.
     * 
     * If you use this function to reestablish a previously saved window size,
     * note that the appropriate size to save is the one returned by
     * gtk_window_get_size(). Using the window allocation directly will not
     * work in all circumstances and can lead to growing or shrinking windows.
     * @param width width in pixels, or -1 to unset the default width
     * @param height height in pixels, or -1 to unset the default height
     */
    set_default_size(width: number, height: number): void
    /**
     * By default, windows have a close button in the window frame. Some
     * [window managers][gtk-X11-arch] allow GTK+ to
     * disable this button. If you set the deletable property to %FALSE
     * using this function, GTK+ will do its best to convince the window
     * manager not to show a close button. Depending on the system, this
     * function may not have any effect when called on a window that is
     * already visible, so you should call it before calling gtk_widget_show().
     * 
     * On Windows, this function always works, since there’s no window manager
     * policy involved.
     * @param setting %TRUE to decorate the window as deletable
     */
    set_deletable(setting: boolean): void
    /**
     * If `setting` is %TRUE, then destroying the transient parent of `window`
     * will also destroy `window` itself. This is useful for dialogs that
     * shouldn’t persist beyond the lifetime of the main window they're
     * associated with, for example.
     * @param setting whether to destroy `window` with its transient parent
     */
    set_destroy_with_parent(setting: boolean): void
    /**
     * If `focus` is not the current focus widget, and is focusable, sets
     * it as the focus widget for the window. If `focus` is %NULL, unsets
     * the focus widget for this window. To set the focus to a particular
     * widget in the toplevel, it is usually more convenient to use
     * gtk_widget_grab_focus() instead of this function.
     * @param focus widget to be the new focus widget, or %NULL to unset   any focus widget for the toplevel window.
     */
    set_focus(focus?: Gtk.Widget | null): void
    /**
     * Windows may set a hint asking the desktop environment not to receive
     * the input focus when the window is mapped.  This function sets this
     * hint.
     * @param setting %TRUE to let this window receive input focus on map
     */
    set_focus_on_map(setting: boolean): void
    /**
     * Sets the #GtkWindow:focus-visible property.
     * @param setting the new value
     */
    set_focus_visible(setting: boolean): void
    /**
     * This function sets up hints about how a window can be resized by
     * the user.  You can set a minimum and maximum size; allowed resize
     * increments (e.g. for xterm, you can only resize by the size of a
     * character); aspect ratios; and more. See the #GdkGeometry struct.
     * @param geometry_widget widget the geometry hints used to be applied to   or %NULL. Since 3.20 this argument is ignored and GTK behaves as if %NULL was   set.
     * @param geometry struct containing geometry information or %NULL
     * @param geom_mask mask indicating which struct fields should be paid attention to
     */
    set_geometry_hints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    /**
     * Window gravity defines the meaning of coordinates passed to
     * gtk_window_move(). See gtk_window_move() and #GdkGravity for
     * more details.
     * 
     * The default window gravity is #GDK_GRAVITY_NORTH_WEST which will
     * typically “do what you mean.”
     * @param gravity window gravity
     */
    set_gravity(gravity: Gdk.Gravity): void
    /**
     * Sets whether `window` has a corner resize grip.
     * 
     * Note that the resize grip is only shown if the window
     * is actually resizable and not maximized. Use
     * gtk_window_resize_grip_is_visible() to find out if the
     * resize grip is currently shown.
     * @param value %TRUE to allow a resize grip
     */
    set_has_resize_grip(value: boolean): void
    /**
     * Tells GTK+ whether to drop its extra reference to the window
     * when gtk_widget_destroy() is called.
     * 
     * This function is only exported for the benefit of language
     * bindings which may need to keep the window alive until their
     * wrapper object is garbage collected. There is no justification
     * for ever calling this function in an application.
     * @param setting the new value
     */
    set_has_user_ref_count(setting: boolean): void
    /**
     * If `setting` is %TRUE, then `window` will request that it’s titlebar
     * should be hidden when maximized.
     * This is useful for windows that don’t convey any information other
     * than the application name in the titlebar, to put the available
     * screen space to better use. If the underlying window system does not
     * support the request, the setting will not have any effect.
     * 
     * Note that custom titlebars set with gtk_window_set_titlebar() are
     * not affected by this. The application is in full control of their
     * content and visibility anyway.
     * @param setting whether to hide the titlebar when `window` is maximized
     */
    set_hide_titlebar_when_maximized(setting: boolean): void
    /**
     * Sets up the icon representing a #GtkWindow. This icon is used when
     * the window is minimized (also known as iconified).  Some window
     * managers or desktop environments may also place it in the window
     * frame, or display it in other contexts. On others, the icon is not
     * used at all, so your mileage may vary.
     * 
     * The icon should be provided in whatever size it was naturally
     * drawn; that is, don’t scale the image before passing it to
     * GTK+. Scaling is postponed until the last minute, when the desired
     * final size is known, to allow best quality.
     * 
     * If you have your icon hand-drawn in multiple sizes, use
     * gtk_window_set_icon_list(). Then the best size will be used.
     * 
     * This function is equivalent to calling gtk_window_set_icon_list()
     * with a 1-element list.
     * 
     * See also gtk_window_set_default_icon_list() to set the icon
     * for all windows in your application in one go.
     * @param icon icon image, or %NULL
     */
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void
    /**
     * Sets the icon for `window`.
     * Warns on failure if `err` is %NULL.
     * 
     * This function is equivalent to calling gtk_window_set_icon()
     * with a pixbuf created by loading the image from `filename`.
     * @param filename location of icon file
     */
    set_icon_from_file(filename: string): boolean
    /**
     * Sets up the icon representing a #GtkWindow. The icon is used when
     * the window is minimized (also known as iconified).  Some window
     * managers or desktop environments may also place it in the window
     * frame, or display it in other contexts. On others, the icon is not
     * used at all, so your mileage may vary.
     * 
     * gtk_window_set_icon_list() allows you to pass in the same icon in
     * several hand-drawn sizes. The list should contain the natural sizes
     * your icon is available in; that is, don’t scale the image before
     * passing it to GTK+. Scaling is postponed until the last minute,
     * when the desired final size is known, to allow best quality.
     * 
     * By passing several sizes, you may improve the final image quality
     * of the icon, by reducing or eliminating automatic image scaling.
     * 
     * Recommended sizes to provide: 16x16, 32x32, 48x48 at minimum, and
     * larger images (64x64, 128x128) if you have them.
     * 
     * See also gtk_window_set_default_icon_list() to set the icon
     * for all windows in your application in one go.
     * 
     * Note that transient windows (those who have been set transient for another
     * window using gtk_window_set_transient_for()) will inherit their
     * icon from their transient parent. So there’s no need to explicitly
     * set the icon on transient windows.
     * @param list list of #GdkPixbuf
     */
    set_icon_list(list: GdkPixbuf.Pixbuf[]): void
    /**
     * Sets the icon for the window from a named themed icon.
     * See the docs for #GtkIconTheme for more details.
     * On some platforms, the window icon is not used at all.
     * 
     * Note that this has nothing to do with the WM_ICON_NAME
     * property which is mentioned in the ICCCM.
     * @param name the name of the themed icon
     */
    set_icon_name(name?: string | null): void
    /**
     * Asks to keep `window` above, so that it stays on top. Note that
     * you shouldn’t assume the window is definitely above afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could not keep it above,
     * and not all window managers support keeping windows above. But
     * normally the window will end kept above. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be kept above when it appears onscreen
     * initially.
     * 
     * You can track the above state via the “window-state-event” signal
     * on #GtkWidget.
     * 
     * Note that, according to the
     * [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec),
     * the above state is mainly meant for user preferences and should not
     * be used by applications e.g. for drawing attention to their
     * dialogs.
     * @param setting whether to keep `window` above other windows
     */
    set_keep_above(setting: boolean): void
    /**
     * Asks to keep `window` below, so that it stays in bottom. Note that
     * you shouldn’t assume the window is definitely below afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could not keep it below,
     * and not all window managers support putting windows below. But
     * normally the window will be kept below. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be kept below when it appears onscreen
     * initially.
     * 
     * You can track the below state via the “window-state-event” signal
     * on #GtkWidget.
     * 
     * Note that, according to the
     * [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec),
     * the above state is mainly meant for user preferences and should not
     * be used by applications e.g. for drawing attention to their
     * dialogs.
     * @param setting whether to keep `window` below other windows
     */
    set_keep_below(setting: boolean): void
    /**
     * Sets the mnemonic modifier for this window.
     * @param modifier the modifier mask used to activate               mnemonics on this window.
     */
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void
    /**
     * Sets the #GtkWindow:mnemonics-visible property.
     * @param setting the new value
     */
    set_mnemonics_visible(setting: boolean): void
    /**
     * Sets a window modal or non-modal. Modal windows prevent interaction
     * with other windows in the same application. To keep modal dialogs
     * on top of main application windows, use
     * gtk_window_set_transient_for() to make the dialog transient for the
     * parent; most [window managers][gtk-X11-arch]
     * will then disallow lowering the dialog below the parent.
     * @param modal whether the window is modal
     */
    set_modal(modal: boolean): void
    /**
     * Request the windowing system to make `window` partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.) On X11
     * this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always.
     * 
     * Note that setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * Sets a position constraint for this window. If the old or new
     * constraint is %GTK_WIN_POS_CENTER_ALWAYS, this will also cause
     * the window to be repositioned to satisfy the new constraint.
     * @param position a position constraint.
     */
    set_position(position: Gtk.WindowPosition): void
    /**
     * Sets whether the user can resize a window. Windows are user resizable
     * by default.
     * @param resizable %TRUE if the user can resize this window
     */
    set_resizable(resizable: boolean): void
    /**
     * This function is only useful on X11, not with other GTK+ targets.
     * 
     * In combination with the window title, the window role allows a
     * [window manager][gtk-X11-arch] to identify "the
     * same" window when an application is restarted. So for example you
     * might set the “toolbox” role on your app’s toolbox window, so that
     * when the user restarts their session, the window manager can put
     * the toolbox back in the same place.
     * 
     * If a window already has a unique title, you don’t need to set the
     * role, since the WM can use the title to identify the window when
     * restoring the session.
     * @param role unique identifier for the window to be used when restoring a session
     */
    set_role(role: string): void
    /**
     * Sets the #GdkScreen where the `window` is displayed; if
     * the window is already mapped, it will be unmapped, and
     * then remapped on the new screen.
     * @param screen a #GdkScreen.
     */
    set_screen(screen: Gdk.Screen): void
    /**
     * Windows may set a hint asking the desktop environment not to display
     * the window in the pager. This function sets this hint.
     * (A "pager" is any desktop navigation tool such as a workspace
     * switcher that displays a thumbnail representation of the windows
     * on the screen.)
     * @param setting %TRUE to keep this window from appearing in the pager
     */
    set_skip_pager_hint(setting: boolean): void
    /**
     * Windows may set a hint asking the desktop environment not to display
     * the window in the task bar. This function sets this hint.
     * @param setting %TRUE to keep this window from appearing in the task bar
     */
    set_skip_taskbar_hint(setting: boolean): void
    /**
     * Startup notification identifiers are used by desktop environment to
     * track application startup, to provide user feedback and other
     * features. This function changes the corresponding property on the
     * underlying GdkWindow. Normally, startup identifier is managed
     * automatically and you should only use this function in special cases
     * like transferring focus from other processes. You should use this
     * function before calling gtk_window_present() or any equivalent
     * function generating a window map event.
     * 
     * This function is only useful on X11, not with other GTK+ targets.
     * @param startup_id a string with startup-notification identifier
     */
    set_startup_id(startup_id: string): void
    /**
     * Sets the title of the #GtkWindow. The title of a window will be
     * displayed in its title bar; on the X Window System, the title bar
     * is rendered by the [window manager][gtk-X11-arch],
     * so exactly how the title appears to users may vary
     * according to a user’s exact configuration. The title should help a
     * user distinguish this window from other windows they may have
     * open. A good title might include the application name and current
     * document filename, for example.
     * @param title title of the window
     */
    set_title(title: string): void
    /**
     * Sets a custom titlebar for `window`.
     * 
     * A typical widget used here is #GtkHeaderBar, as it provides various features
     * expected of a titlebar while allowing the addition of child widgets to it.
     * 
     * If you set a custom titlebar, GTK+ will do its best to convince
     * the window manager not to put its own titlebar on the window.
     * Depending on the system, this function may not work for a window
     * that is already visible, so you set the titlebar before calling
     * gtk_widget_show().
     * @param titlebar the widget to use as titlebar
     */
    set_titlebar(titlebar?: Gtk.Widget | null): void
    /**
     * Dialog windows should be set transient for the main application
     * window they were spawned from. This allows
     * [window managers][gtk-X11-arch] to e.g. keep the
     * dialog on top of the main window, or center the dialog over the
     * main window. gtk_dialog_new_with_buttons() and other convenience
     * functions in GTK+ will sometimes call
     * gtk_window_set_transient_for() on your behalf.
     * 
     * Passing %NULL for `parent` unsets the current transient window.
     * 
     * On Wayland, this function can also be used to attach a new
     * #GTK_WINDOW_POPUP to a #GTK_WINDOW_TOPLEVEL parent already mapped
     * on screen so that the #GTK_WINDOW_POPUP will be created as a
     * subsurface-based window #GDK_WINDOW_SUBSURFACE which can be
     * positioned at will relatively to the #GTK_WINDOW_TOPLEVEL surface.
     * 
     * On Windows, this function puts the child window on top of the parent,
     * much as the window manager would have done on X.
     * @param parent parent window, or %NULL
     */
    set_transient_for(parent?: Gtk.Window | null): void
    /**
     * By setting the type hint for the window, you allow the window
     * manager to decorate and handle the window in a way which is
     * suitable to the function of the window in your application.
     * 
     * This function should be called before the window becomes visible.
     * 
     * gtk_dialog_new_with_buttons() and other convenience functions in GTK+
     * will sometimes call gtk_window_set_type_hint() on your behalf.
     * @param hint the window type
     */
    set_type_hint(hint: Gdk.WindowTypeHint): void
    /**
     * Windows may set a hint asking the desktop environment to draw
     * the users attention to the window. This function sets this hint.
     * @param setting %TRUE to mark this window as urgent
     */
    set_urgency_hint(setting: boolean): void
    /**
     * Don’t use this function. It sets the X Window System “class” and
     * “name” hints for a window.  According to the ICCCM, you should
     * always set these to the same value for all windows in an
     * application, and GTK+ sets them to that value by default, so calling
     * this function is sort of pointless. However, you may want to call
     * gtk_window_set_role() on each window in your application, for the
     * benefit of the session manager. Setting the role allows the window
     * manager to restore window positions when loading a saved session.
     * @param wmclass_name window name hint
     * @param wmclass_class window class hint
     */
    set_wmclass(wmclass_name: string, wmclass_class: string): void
    /**
     * Asks to stick `window,` which means that it will appear on all user
     * desktops. Note that you shouldn’t assume the window is definitely
     * stuck afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch] could unstick it
     * again, and some window managers do not support sticking
     * windows. But normally the window will end up stuck. Just don't
     * write code that crashes if not.
     * 
     * It’s permitted to call this function before showing a window.
     * 
     * You can track stickiness via the “window-state-event” signal
     * on #GtkWidget.
     */
    stick(): void
    /**
     * Asks to toggle off the fullscreen state for `window`. Note that you
     * shouldn’t assume the window is definitely not full screen
     * afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could fullscreen it
     * again, and not all window managers honor requests to unfullscreen
     * windows. But normally the window will end up restored to its normal
     * state. Just don’t write code that crashes if not.
     * 
     * You can track the fullscreen state via the “window-state-event” signal
     * on #GtkWidget.
     */
    unfullscreen(): void
    /**
     * Asks to unmaximize `window`. Note that you shouldn’t assume the
     * window is definitely unmaximized afterward, because other entities
     * (e.g. the user or [window manager][gtk-X11-arch])
     * could maximize it again, and not all window
     * managers honor requests to unmaximize. But normally the window will
     * end up unmaximized. Just don’t write code that crashes if not.
     * 
     * You can track maximization via the “window-state-event” signal
     * on #GtkWidget.
     */
    unmaximize(): void
    /**
     * Asks to unstick `window,` which means that it will appear on only
     * one of the user’s desktops. Note that you shouldn’t assume the
     * window is definitely unstuck afterward, because other entities
     * (e.g. the user or [window manager][gtk-X11-arch]) could
     * stick it again. But normally the window will
     * end up unstuck. Just don’t write code that crashes if not.
     * 
     * You can track stickiness via the “window-state-event” signal
     * on #GtkWidget.
     */
    unstick(): void
    /* Methods of Gtk-3.0.Gtk.Bin */
    /**
     * Gets the child of the #GtkBin, or %NULL if the bin contains
     * no child widget. The returned widget does not have a reference
     * added, so you do not need to unref it.
     */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    check_resize(): void
    /**
     * Gets the value of a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to get
     * @param value a location to return the value
     */
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] specified by
     * `pspec` on the child.
     * 
     * This is an analogue of g_object_notify_by_pspec() for child properties.
     * @param child the child widget
     * @param pspec the #GParamSpec of a child property instealled on     the class of `container`
     */
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    /**
     * Sets a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to set
     * @param value the value to set the property to
     */
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    child_type(): GObject.Type
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param callback a callback
     */
    forall(callback: Gtk.Callback): void
    /**
     * Invokes `callback` on each non-internal child of `container`.
     * See gtk_container_forall() for details on what constitutes
     * an “internal” child. For all practical purposes, this function
     * should iterate over precisely those child widgets that were
     * added to the container by the application with explicit add()
     * calls.
     * 
     * It is permissible to remove the child from the `callback` handler.
     * 
     * Most applications should use gtk_container_foreach(),
     * rather than gtk_container_forall().
     * @param callback a callback
     */
    foreach(callback: Gtk.Callback): void
    /**
     * Retrieves the border width of the container. See
     * gtk_container_set_border_width().
     */
    get_border_width(): number
    /**
     * Returns the container’s non-internal children. See
     * gtk_container_forall() for details on what constitutes an "internal" child.
     */
    get_children(): Gtk.Widget[]
    /**
     * Retrieves the focus chain of the container, if one has been
     * set explicitly. If no focus chain has been explicitly
     * set, GTK+ computes the focus chain based on the positions
     * of the children. In that case, GTK+ stores %NULL in
     * `focusable_widgets` and returns %FALSE.
     */
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    /**
     * Returns the current focus child widget inside `container`. This is not the
     * currently focused widget. That can be obtained by calling
     * gtk_window_get_focus().
     */
    get_focus_child(): Gtk.Widget | null
    /**
     * Retrieves the horizontal focus adjustment for the container. See
     * gtk_container_set_focus_hadjustment ().
     */
    get_focus_hadjustment(): Gtk.Adjustment | null
    /**
     * Retrieves the vertical focus adjustment for the container. See
     * gtk_container_set_focus_vadjustment().
     */
    get_focus_vadjustment(): Gtk.Adjustment | null
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Returns the resize mode for the container. See
     * gtk_container_set_resize_mode ().
     */
    get_resize_mode(): Gtk.ResizeMode
    /**
     * When a container receives a call to the draw function, it must send
     * synthetic #GtkWidget::draw calls to all children that don’t have their
     * own #GdkWindows. This function provides a convenient way of doing this.
     * A container, when it receives a call to its #GtkWidget::draw function,
     * calls gtk_container_propagate_draw() once for each child, passing in
     * the `cr` the container received.
     * 
     * gtk_container_propagate_draw() takes care of translating the origin of `cr,`
     * and deciding whether the draw needs to be sent to the child. It is a
     * convenient and optimized way of getting the same effect as calling
     * gtk_widget_draw() on the child directly.
     * 
     * In most cases, a container can simply either inherit the
     * #GtkWidget::draw implementation from #GtkContainer, or do some drawing
     * and then chain to the ::draw implementation from #GtkContainer.
     * @param child a child of `container`
     * @param cr Cairo context as passed to the container. If you want to use `cr`   in container’s draw function, consider using cairo_save() and   cairo_restore() before calling this function.
     */
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    resize_children(): void
    /**
     * Sets the border width of the container.
     * 
     * The border width of a container is the amount of space to leave
     * around the outside of the container. The only exception to this is
     * #GtkWindow; because toplevel windows can’t leave space outside,
     * they leave the space inside. The border is added on all sides of
     * the container. To add space to only one side, use a specific
     * #GtkWidget:margin property on the child widget, for example
     * #GtkWidget:margin-top.
     * @param border_width amount of blank space to leave outside   the container. Valid values are in the range 0-65535 pixels.
     */
    set_border_width(border_width: number): void
    /**
     * Sets a focus chain, overriding the one computed automatically by GTK+.
     * 
     * In principle each widget in the chain should be a descendant of the
     * container, but this is not enforced by this method, since it’s allowed
     * to set the focus chain before you pack the widgets, or have a widget
     * in the chain that isn’t always packed. The necessary checks are done
     * when the focus chain is actually traversed.
     * @param focusable_widgets      the new focus chain
     */
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a child
     * of the container is focused, the adjustment is scrolled to show that
     * widget. This function sets the horizontal alignment.
     * See gtk_scrolled_window_get_hadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_vadjustment() for setting
     * the vertical adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus is   moved among the descendents of `container`
     */
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a
     * child of the container is focused, the adjustment is scrolled to
     * show that widget. This function sets the vertical alignment. See
     * gtk_scrolled_window_get_vadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_hadjustment() for setting
     * the horizontal adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus   is moved among the descendents of `container`
     */
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Sets the `reallocate_redraws` flag of the container to the given value.
     * 
     * Containers requesting reallocation redraws get automatically
     * redrawn if any of their children changed allocation.
     * @param needs_redraws the new value for the container’s `reallocate_redraws` flag
     */
    set_reallocate_redraws(needs_redraws: boolean): void
    /**
     * Sets the resize mode for the container.
     * 
     * The resize mode of a container determines whether a resize request
     * will be passed to the container’s parent, queued for later execution
     * or executed immediately.
     * @param resize_mode the new resize mode
     */
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    /**
     * Removes a focus chain explicitly set with gtk_container_set_focus_chain().
     */
    unset_focus_chain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget’s toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accel_signal widget signal to emit on accelerator activation
     * @param accel_group accel group for this widget, added to its toplevel
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    /**
     * Adds the device events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_device_events() for details.
     * @param device a #GdkDevice
     * @param events an event mask, see #GdkEventMask
     */
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() and the
     * [input handling overview][event-masks] for details.
     * @param events an event mask, see #GdkEventMask
     */
    add_events(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Queues an animation frame update and adds a callback to be called
     * before each frame. Until the tick callback is removed, it will be
     * called frequently (usually at the frame rate of the output device
     * or as quickly as the application can be repainted, whichever is
     * slower). For this reason, is most suitable for handling graphics
     * that change every frame or every few frames. The tick callback does
     * not automatically imply a relayout or repaint. If you want a
     * repaint or relayout, and aren’t changing widget properties that
     * would trigger that (for example, changing the text of a #GtkLabel),
     * then you will have to call gtk_widget_queue_resize() or
     * gtk_widget_queue_draw_area() yourself.
     * 
     * gdk_frame_clock_get_frame_time() should generally be used for timing
     * continuous animations and
     * gdk_frame_timings_get_predicted_presentation_time() if you are
     * trying to display isolated frames at particular times.
     * 
     * This is a more convenient alternative to connecting directly to the
     * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
     * have to worry about when a #GdkFrameClock is assigned to a widget.
     * @param callback function to call for updating animations
     */
    add_tick_callback(callback: Gtk.TickCallback): number
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    can_activate_accel(signal_id: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you’d use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don’t modify the current focus location.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget’s type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * Computes whether a container should give this widget extra space
     * when possible. Containers should check this, rather than
     * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
     * 
     * This function already checks whether the widget is visible, so
     * visibility does not need to be checked separately. Non-visible
     * widgets are not expanded.
     * 
     * The computed expand value uses either the expand setting explicitly
     * set on the widget itself, or, if none has been explicitly set,
     * the widget may expand if some of its children do.
     * @param orientation expand direction
     */
    compute_expand(orientation: Gtk.Orientation): boolean
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font options, font description, and base direction for drawing
     * text for this widget. See also gtk_widget_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, you need
     * to re-create it when the widget #PangoContext is replaced.
     * This can be tracked by using the #GtkWidget::screen-changed signal
     * on the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    create_pango_layout(text?: string | null): Pango.Layout
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It’s intended to be used as a callback connected to the
     * “destroy” signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widget_pointer address of a variable that contains `widget`
     */
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    /**
     * Returns %TRUE if `device` has been shadowed by a GTK+
     * device grab on another widget, so it would stop sending
     * events to `widget`. This may be used in the
     * #GtkWidget::grab-notify signal to check for specific
     * devices. See gtk_device_grab_add().
     * @param device a #GdkDevice
     */
    device_is_shadowed(device: Gdk.Device): boolean
    /**
     * This function is equivalent to gtk_drag_begin_with_coordinates(),
     * passing -1, -1 as coordinates.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     */
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    /**
     * Initiates a drag on the source side. The function only needs to be used
     * when the application is starting drags itself, and is not needed when
     * gtk_drag_source_set() is used.
     * 
     * The `event` is used to retrieve the timestamp that will be used internally to
     * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
     * However, you should try to pass a real event in all cases, since that can be
     * used to get information about the drag.
     * 
     * Generally there are three cases when you want to start a drag by hand by
     * calling this function:
     * 
     * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
     * immediately when the user presses the mouse button.  Pass the `event`
     * that you have in your #GtkWidget::button-press-event handler.
     * 
     * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
     * when the mouse moves past a certain threshold distance after a button-press.
     * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
     * 
     * 3. During a timeout handler, if you want to start a drag after the mouse
     * button is held down for some time.  Try to save the last event that you got
     * from the mouse, using gdk_event_copy(), and pass it to this function
     * (remember to free the event with gdk_event_free() when you are done).
     * If you really cannot pass a real event, pass %NULL instead.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     * @param x The initial x coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     * @param y The initial y coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     */
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    /**
     * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
     * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
     * should trigger the beginning of a drag-and-drop operation.
     * @param start_x X coordinate of start of drag
     * @param start_y Y coordinate of start of drag
     * @param current_x current X coordinate
     * @param current_y current Y coordinate
     */
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    /**
     * Add the image targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_uri_targets(): void
    /**
     * Looks for a match between the supported targets of `context` and the
     * `dest_target_list,` returning the first matching target, otherwise
     * returning %GDK_NONE. `dest_target_list` should usually be the return
     * value from gtk_drag_dest_get_target_list(), but some widgets may
     * have different valid targets for different parts of the widget; in
     * that case, they will have to implement a drag_motion handler that
     * passes the correct target list to this function.
     * @param context drag context
     * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (`widget)`.
     */
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    /**
     * Returns the list of targets this widget can accept from
     * drag-and-drop.
     */
    drag_dest_get_target_list(): Gtk.TargetList | null
    /**
     * Returns whether the widget has been configured to always
     * emit #GtkWidget::drag-motion signals.
     */
    drag_dest_get_track_motion(): boolean
    /**
     * Sets a widget as a potential drop destination, and adds default behaviors.
     * 
     * The default behaviors listed in `flags` have an effect similar
     * to installing default handlers for the widget’s drag-and-drop signals
     * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
     * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
     * sufficient to connect to the widget’s #GtkWidget::drag-data-received
     * signal to get primitive, but consistent drag-and-drop support.
     * 
     * Things become more complicated when you try to preview the dragged data,
     * as described in the documentation for #GtkWidget::drag-motion. The default
     * behaviors described by `flags` make some assumptions, that can conflict
     * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
     * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
     * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
     * Especially the later is dramatic, when your own #GtkWidget::drag-motion
     * handler calls gtk_drag_get_data() to inspect the dragged data.
     * 
     * There’s no way to set a default action here, you can use the
     * #GtkWidget::drag-motion callback for that. Here’s an example which selects
     * the action to use depending on whether the control key is pressed or not:
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkModifierType mask;
     * 
     *   gdk_window_get_pointer (gtk_widget_get_window (widget),
     *                           NULL, NULL, &mask);
     *   if (mask & GDK_CONTROL_MASK)
     *     gdk_drag_status (context, GDK_ACTION_COPY, time);
     *   else
     *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
     * }
     * ```
     * 
     * @param flags which types of default drag behavior to use
     * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this `widget` will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
     * @param actions a bitmask of possible actions for a drop onto this `widget`.
     */
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets this widget as a proxy for drops to another window.
     * @param proxy_window the window to which to forward drag events
     * @param protocol the drag protocol which the `proxy_window` accepts   (You can use gdk_drag_get_protocol() to determine this)
     * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
     */
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    /**
     * Sets the target types that this widget can accept from drag-and-drop.
     * The widget must first be made into a drag destination with
     * gtk_drag_dest_set().
     * @param target_list list of droppable targets, or %NULL for none
     */
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Tells the widget to emit #GtkWidget::drag-motion and
     * #GtkWidget::drag-leave events regardless of the targets and the
     * %GTK_DEST_DEFAULT_MOTION flag.
     * 
     * This may be used when a widget wants to do generic
     * actions regardless of the targets that the source offers.
     * @param track_motion whether to accept all targets
     */
    drag_dest_set_track_motion(track_motion: boolean): void
    /**
     * Clears information about a drop destination set with
     * gtk_drag_dest_set(). The widget will no longer receive
     * notification of drags.
     */
    drag_dest_unset(): void
    /**
     * Gets the data associated with a drag. When the data
     * is received or the retrieval fails, GTK+ will emit a
     * #GtkWidget::drag-data-received signal. Failure of the retrieval
     * is indicated by the length field of the `selection_data`
     * signal parameter being negative. However, when gtk_drag_get_data()
     * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
     * then the widget will not receive notification of failed
     * drops.
     * @param context the drag context
     * @param target the target (form of the data) to retrieve
     * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
     */
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    /**
     * Highlights a widget as a currently hovered drop target.
     * To end the highlight, call gtk_drag_unhighlight().
     * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
     */
    drag_highlight(): void
    /**
     * Add the writable image targets supported by #GtkSelectionData to
     * the target list of the drag source. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_uri_targets(): void
    /**
     * Gets the list of targets this widget can provide for
     * drag-and-drop.
     */
    drag_source_get_target_list(): Gtk.TargetList | null
    /**
     * Sets up a widget so that GTK+ will start a drag operation when the user
     * clicks and drags on the widget. The widget must have a window.
     * @param start_button_mask the bitmask of buttons that can start the drag
     * @param targets the table of targets     that the drag will support, may be %NULL
     * @param actions the bitmask of possible actions for a drag from this widget
     */
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to `icon`. See the docs for #GtkIconTheme for more details.
     * @param icon A #GIcon
     */
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a themed icon. See the docs for #GtkIconTheme for more details.
     * @param icon_name name of icon to use
     */
    drag_source_set_icon_name(icon_name: string): void
    /**
     * Sets the icon that will be used for drags from a particular widget
     * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
     * release it when it is no longer needed.
     * @param pixbuf the #GdkPixbuf for the drag icon
     */
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a stock icon.
     * @param stock_id the ID of the stock icon to use
     */
    drag_source_set_icon_stock(stock_id: string): void
    /**
     * Changes the target types that this widget offers for drag-and-drop.
     * The widget must first be made into a drag source with
     * gtk_drag_source_set().
     * @param target_list list of draggable targets, or %NULL for none
     */
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Undoes the effects of gtk_drag_source_set().
     */
    drag_source_unset(): void
    /**
     * Removes a highlight set by gtk_drag_highlight() from
     * a widget.
     */
    drag_unhighlight(): void
    /**
     * Draws `widget` to `cr`. The top left corner of the widget will be
     * drawn to the currently set origin point of `cr`.
     * 
     * You should pass a cairo context as `cr` argument that is in an
     * original state. Otherwise the resulting drawing is undefined. For
     * example changing the operator using cairo_set_operator() or the
     * line width using cairo_set_line_width() might have unwanted side
     * effects.
     * You may however change the context’s transform matrix - like with
     * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
     * region with cairo_clip() prior to calling this function. Also, it
     * is fine to modify the context with cairo_save() and
     * cairo_push_group() prior to calling this function.
     * 
     * Note that special-purpose widgets may contain special code for
     * rendering to the screen and might appear differently on screen
     * and when rendered using gtk_widget_draw().
     * @param cr a cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Ensures that `widget` has a style (`widget->`style).
     * 
     * Not a very useful function; most of the time, if you
     * want the style, the widget is realized, and realized
     * widgets are guaranteed to have a style already.
     */
    ensure_style(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    error_bell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freeze_child_notify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
     * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
     * ancestry.
     * 
     * If no action group was found matching `prefix,` then %NULL is returned.
     * @param prefix The “prefix” of the action group.
     */
    get_action_group(prefix: string): Gio.ActionGroup | null
    /**
     * Returns the baseline that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function, and when allocating child
     * widgets in #GtkWidget::size_allocate.
     */
    get_allocated_baseline(): number
    /**
     * Returns the height that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_height(): number
    /**
     * Retrieves the widget’s allocated size.
     * 
     * This function returns the last values passed to
     * gtk_widget_size_allocate_with_baseline(). The value differs from
     * the size returned in gtk_widget_get_allocation() in that functions
     * like gtk_widget_set_halign() can adjust the allocation, but not
     * the value returned by this function.
     * 
     * If a widget is not visible, its allocated size is 0.
     */
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    /**
     * Returns the width that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_width(): number
    /**
     * Retrieves the widget’s allocation.
     * 
     * Note, when implementing a #GtkContainer: a widget’s allocation will
     * be its “adjusted” allocation, that is, the widget’s parent
     * container typically calls gtk_widget_size_allocate() with an
     * allocation, and that allocation is then adjusted (to handle margin
     * and alignment for example) before assignment to the widget.
     * gtk_widget_get_allocation() returns the adjusted allocation that
     * was actually assigned to the widget. The adjusted allocation is
     * guaranteed to be completely contained within the
     * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
     * is guaranteed that its children stay inside the assigned bounds,
     * but not that they have exactly the bounds the container assigned.
     * There is no way to get the original allocation assigned by
     * gtk_widget_size_allocate(), since it isn’t stored; if a container
     * implementation needs that information it will have to track it itself.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
     * the first #GtkBox that’s an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    get_app_paintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    get_can_default(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    get_can_focus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the “size_request” method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     */
    get_child_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Retrieves the widget’s clip area.
     * 
     * The clip area is the area in which all of `widget'`s drawing will
     * happen. Other toolkits call it the bounding box.
     * 
     * Historically, in GTK+ the clip area has been equal to the allocation
     * retrieved via gtk_widget_get_allocation().
     */
    get_clip(): /* clip */ Gtk.Allocation
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Obtains the composite name of a widget.
     */
    get_composite_name(): string
    /**
     * Returns whether `device` can interact with `widget` and its
     * children. See gtk_widget_set_device_enabled().
     * @param device a #GdkDevice
     */
    get_device_enabled(device: Gdk.Device): boolean
    /**
     * Returns the events mask for the widget corresponding to an specific device. These
     * are the events that the widget will receive when `device` operates on it.
     * @param device a #GdkDevice
     */
    get_device_events(device: Gdk.Device): Gdk.EventMask
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    get_double_buffered(): boolean
    /**
     * Returns the event mask (see #GdkEventMask) for the widget. These are the
     * events that the widget will receive.
     * 
     * Note: Internally, the widget event mask will be the logical OR of the event
     * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
     * event mask necessary to cater for every #GtkEventController created for the
     * widget.
     */
    get_events(): number
    /**
     * Returns whether the widget should grab focus when it is clicked with the mouse.
     * See gtk_widget_set_focus_on_click().
     */
    get_focus_on_click(): boolean
    /**
     * Gets the font map that has been set with gtk_widget_set_font_map().
     */
    get_font_map(): Pango.FontMap | null
    /**
     * Returns the #cairo_font_options_t used for Pango rendering. When not set,
     * the defaults font options for the #GdkScreen will be used.
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Obtains the frame clock for a widget. The frame clock is a global
     * “ticker” that can be used to drive animations and repaints.  The
     * most common reason to get the frame clock is to call
     * gdk_frame_clock_get_frame_time(), in order to get a time to use for
     * animating. For example you might record the start of the animation
     * with an initial value from gdk_frame_clock_get_frame_time(), and
     * then update the animation by calling
     * gdk_frame_clock_get_frame_time() again during each repaint.
     * 
     * gdk_frame_clock_request_phase() will result in a new frame on the
     * clock, but won’t necessarily repaint any widgets. To repaint a
     * widget, you have to use gtk_widget_queue_draw() which invalidates
     * the widget (thus scheduling it to receive a draw on the next
     * frame). gtk_widget_queue_draw() will also end up requesting a frame
     * on the appropriate frame clock.
     * 
     * A widget’s frame clock will not change while the widget is
     * mapped. Reparenting a widget (which implies a temporary unmap) can
     * change the widget’s frame clock.
     * 
     * Unrealized widgets do not have a frame clock.
     */
    get_frame_clock(): Gdk.FrameClock | null
    /**
     * Gets the value of the #GtkWidget:halign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
     * alignment.
     */
    get_halign(): Gtk.Align
    /**
     * Returns the current value of the has-tooltip property.  See
     * #GtkWidget:has-tooltip for more information.
     */
    get_has_tooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    get_has_window(): boolean
    /**
     * Gets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Containers should use gtk_widget_compute_expand() rather than
     * this function, to see whether a widget, or any of its children,
     * has the expand flag set. If any child of a widget wants to
     * expand, the parent may ask to expand also.
     * 
     * This function only looks at the widget’s own hexpand flag, rather
     * than computing whether the entire widget tree rooted at this widget
     * wants to expand.
     */
    get_hexpand(): boolean
    /**
     * Gets whether gtk_widget_set_hexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     */
    get_hexpand_set(): boolean
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Gets the value of the #GtkWidget:margin-bottom property.
     */
    get_margin_bottom(): number
    /**
     * Gets the value of the #GtkWidget:margin-end property.
     */
    get_margin_end(): number
    /**
     * Gets the value of the #GtkWidget:margin-left property.
     */
    get_margin_left(): number
    /**
     * Gets the value of the #GtkWidget:margin-right property.
     */
    get_margin_right(): number
    /**
     * Gets the value of the #GtkWidget:margin-start property.
     */
    get_margin_start(): number
    /**
     * Gets the value of the #GtkWidget:margin-top property.
     */
    get_margin_top(): number
    /**
     * Returns the modifier mask the `widget’`s windowing system backend
     * uses for a particular purpose.
     * 
     * See gdk_keymap_get_modifier_mask().
     * @param intent the use case for the modifier mask
     */
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    get_modifier_style(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    get_name(): string
    /**
     * Returns the current value of the #GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all()
     * will affect this widget.
     */
    get_no_show_all(): boolean
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget’s attributes. This can be tracked
     * by using the #GtkWidget::screen-changed signal on the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    get_parent(): Gtk.Widget | null
    /**
     * Gets `widget’`s parent window, or %NULL if it does not have one.
     */
    get_parent_window(): Gdk.Window | null
    /**
     * Returns the #GtkWidgetPath representing `widget,` if the widget
     * is not connected to a toplevel widget, a partial path will be
     * created.
     */
    get_path(): Gtk.WidgetPath
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     */
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves the minimum and natural size of a widget, taking
     * into account the widget’s preference for height-for-width management.
     * 
     * This is used to retrieve a suitable size by container widgets which do
     * not impose any restrictions on the child placement. It can be used
     * to deduce toplevel window and menu sizes as well as child widgets in
     * free-form containers such as GtkLayout.
     * 
     * Handle with care. Note that the natural height of a height-for-width
     * widget will generally be a smaller size than the minimum height, since the required
     * height for the natural width is generally smaller than the required height for
     * the minimum width.
     * 
     * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
     * baseline alignment.
     */
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is always treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    get_receives_default(): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    get_request_mode(): Gtk.SizeRequestMode
    /**
     * Retrieves the widget’s requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget’s requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    get_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    get_root_window(): Gdk.Window
    /**
     * Retrieves the internal scale factor that maps from window coordinates
     * to the actual device pixels. On traditional systems this is 1, on
     * high density outputs, it can be a higher value (typically 2).
     * 
     * See gdk_window_get_scale_factor().
     */
    get_scale_factor(): number
    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used instead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually request, call gtk_widget_get_preferred_size() instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    /**
     * Returns the widget state as a flag set. It is worth mentioning
     * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
     * returned, that is, also based on parent insensitivity, even if
     * `widget` itself is sensitive.
     * 
     * Also note that if you are looking for a way to obtain the
     * #GtkStateFlags to pass to a #GtkStyleContext method, you
     * should look at gtk_style_context_get_state().
     */
    get_state_flags(): Gtk.StateFlags
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    /**
     * Returns the style context associated to `widget`. The returned object is
     * guaranteed to be the same for the lifetime of `widget`.
     */
    get_style_context(): Gtk.StyleContext
    /**
     * Returns %TRUE if `widget` is multiple pointer aware. See
     * gtk_widget_set_support_multidevice() for more information.
     */
    get_support_multidevice(): boolean
    /**
     * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
     * 
     * This will only report children which were previously declared with
     * gtk_widget_class_bind_template_child_full() or one of its
     * variants.
     * 
     * This function is only meant to be called for code which is private to the `widget_type` which
     * declared the child and is meant for language bindings which cannot easily make use
     * of the GObject structure offsets.
     * @param widget_type The #GType to get a template child for
     * @param name The “id” of the child defined in the template XML
     */
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_markup(): string | null
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_text(): string | null
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    get_tooltip_window(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    /**
     * Gets the value of the #GtkWidget:valign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
     * children it must use gtk_widget_get_valign_with_baseline(), or
     * `g_object_get (widget, "valign", &value, NULL)`, which will
     * also report the true value.
     */
    get_valign(): Gtk.Align
    /**
     * Gets the value of the #GtkWidget:valign property, including
     * %GTK_ALIGN_BASELINE.
     */
    get_valign_with_baseline(): Gtk.Align
    /**
     * Gets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_get_hexpand() for more detail.
     */
    get_vexpand(): boolean
    /**
     * Gets whether gtk_widget_set_vexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * See gtk_widget_get_hexpand_set() for more detail.
     */
    get_vexpand_set(): boolean
    /**
     * Determines whether the widget is visible. If you want to
     * take into account whether the widget’s parent is also marked as
     * visible, use gtk_widget_is_visible() instead.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    get_visible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    get_window(): Gdk.Window | null
    /**
     * Makes `widget` the current grabbed widget.
     * 
     * This means that interaction with other widgets in the same
     * application is blocked and mouse as well as keyboard events
     * are delivered to this widget.
     * 
     * If `widget` is not sensitive, it is not set as the current
     * grabbed widget and this function does nothing.
     */
    grab_add(): void
    /**
     * Causes `widget` to become the default widget. `widget` must be able to be
     * a default widget; typically you would ensure this yourself
     * by calling gtk_widget_set_can_default() with a %TRUE value.
     * The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them. Note
     * that #GtkEntry widgets require the “activates-default” property
     * set to %TRUE before they activate the default widget when Enter
     * is pressed and the #GtkEntry is focused.
     */
    grab_default(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    grab_focus(): void
    /**
     * Removes the grab from the given widget.
     * 
     * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
     * 
     * If `widget` does not have the grab, this function does nothing.
     */
    grab_remove(): void
    /**
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    has_grab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    has_rc_style(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    has_screen(): boolean
    /**
     * Determines if the widget should show a visible indication that
     * it has the global input focus. This is a convenience function for
     * use in ::draw handlers that takes into account whether focus
     * indication should currently be shown in the toplevel window of
     * `widget`. See gtk_window_get_focus_visible() for more information
     * about focus indication.
     * 
     * To find out if the widget has the global input focus, use
     * gtk_widget_has_focus().
     */
    has_visible_focus(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hide_on_delete(): boolean
    /**
     * Returns whether the widget is currently being destroyed.
     * This information can sometimes be used to avoid doing
     * unnecessary work.
     */
    in_destruction(): boolean
    /**
     * Creates and initializes child widgets defined in templates. This
     * function must be called in the instance initializer for any
     * class which assigned itself a template using gtk_widget_class_set_template()
     * 
     * It is important to call this function in the instance initializer
     * of a #GtkWidget subclass and not in #GObject.constructed() or
     * #GObject.constructor() for two reasons.
     * 
     * One reason is that generally derived widgets will assume that parent
     * class composite widgets have been created in their instance
     * initializers.
     * 
     * Another reason is that when calling g_object_new() on a widget with
     * composite templates, it’s important to build the composite widgets
     * before the construct properties are set. Properties passed to g_object_new()
     * should take precedence over properties set in the private template XML.
     */
    init_template(): void
    /**
     * Sets an input shape for this widget’s GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_region() for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    input_shape_combine_region(region?: cairo.Region | null): void
    /**
     * Inserts `group` into `widget`. Children of `widget` that implement
     * #GtkActionable can then be associated with actions in `group` by
     * setting their “action-name” to
     * `prefix`.`action-name`.
     * 
     * If `group` is %NULL, a previously inserted group for `name` is removed
     * from `widget`.
     * @param name the prefix for actions in `group`
     * @param group a #GActionGroup, or %NULL
     */
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    /**
     * Computes the intersection of a `widget’`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you’re only
     * interested in whether there was an intersection.
     * @param area a rectangle
     */
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget’`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    is_composited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Returns the widget’s effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensitive
     */
    is_sensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget.
     * 
     * Currently only #GtkWindow and #GtkInvisible (and out-of-process
     * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
     * widget.
     */
    is_toplevel(): boolean
    /**
     * Determines whether the widget and all its parents are marked as
     * visible.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See also gtk_widget_get_visible() and gtk_widget_set_visible()
     */
    is_visible(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    list_accel_closures(): Function[]
    /**
     * Retrieves a %NULL-terminated array of strings containing the prefixes of
     * #GActionGroup's available to `widget`.
     */
    list_action_prefixes(): string[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * must call `g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)` first, and then unref all the
     * widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > base color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
     */
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > background color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
     */
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the #GtkWidget
     * cursor-color and secondary-cursor-color
     * style properties.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
     */
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
     */
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
     */
    modify_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget.
     * 
     * Modifications made using this technique take precedence over
     * style values set via an RC file, however, they will be overridden
     * if a style is explicitly set on the widget using gtk_widget_set_style().
     * The #GtkRcStyle-struct is designed so each field can either be
     * set or unset, so it is possible, using this function, to modify some
     * style values and leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle-struct holding the style modifications
     */
    modify_style(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * The text color is the foreground color used along with the
     * base color (see gtk_widget_modify_base()) for widgets such
     * as #GtkEntry and #GtkTextView.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
     */
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color to use for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color().
     * @param state the state for which to set the background color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
     */
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the color to use for a widget.
     * 
     * All other style values are left untouched.
     * 
     * This function does not act recursively. Setting the color of a
     * container does not affect its children. Note that some widgets that
     * you may not think of as containers, for instance #GtkButtons,
     * are actually containers.
     * 
     * This API is mostly meant as a quick way for applications to
     * change a widget appearance. If you are developing a widgets
     * library and intend this change to be themeable, it is better
     * done by setting meaningful CSS classes in your
     * widget/container implementation through gtk_style_context_add_class().
     * 
     * This way, your widget library can install a #GtkCssProvider
     * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
     * to provide a default styling for those widgets that need so, and
     * this theming may fully overridden by the user’s theme.
     * 
     * Note that for complex widgets this may bring in undesired
     * results (such as uniform background color everywhere), in
     * these cases it is better to fully style such widgets through a
     * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
     * priority.
     * @param state the state for which to set the color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
     */
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * cursor-color and secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * Note that the underlying properties have the #GdkColor type,
     * so the alpha value in `primary` and `secondary` will be ignored.
     * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
     * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
     */
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    /**
     * Sets the font to use for a widget. All other style values are
     * left untouched. See gtk_widget_override_color().
     * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
     */
    override_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Sets a symbolic color for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color() for overriding the foreground
     * or background color.
     * @param name the name of the symbolic color to modify
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
     */
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. “GtkButton”) or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget’`s name instead of starting with the name
     * of `widget’`s outermost ancestor.
     */
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * This function is only for use in widget implementations.
     * 
     * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
     * function. Use this function instead of gtk_widget_queue_resize()
     * when the `widget'`s size request didn't change but it wants to
     * reposition its contents.
     * 
     * An example user of this function is gtk_widget_set_halign().
     */
    queue_allocate(): void
    /**
     * Mark `widget` as needing to recompute its expand flags. Call
     * this function when setting legacy expand child properties
     * on the child of a container.
     * 
     * See gtk_widget_compute_expand().
     */
    queue_compute_expand(): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queue_draw(): void
    /**
     * Convenience function that calls gtk_widget_queue_draw_region() on
     * the region created from the given coordinates.
     * 
     * The region here is specified in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     * 
     * `width` or `height` may be 0, in this case this function does
     * nothing. Negative values for `width` and `height` are not allowed.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_draw_area(x: number, y: number, width: number, height: number): void
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    queue_draw_region(region: cairo.Region): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there’s enough space for the new text.
     * 
     * Note that you cannot call gtk_widget_queue_resize() on a widget
     * from inside its implementation of the GtkWidgetClass::size_allocate
     * virtual method. Calls to gtk_widget_queue_resize() from inside
     * GtkWidgetClass::size_allocate will be silently ignored.
     */
    queue_resize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queue_resize_no_redraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Computes the intersection of a `widget’`s area and `region,` returning
     * the intersection. The result may be empty, use cairo_region_is_empty() to
     * check.
     * @param region a #cairo_region_t, in the same coordinate system as          `widget->`allocation. That is, relative to `widget->`window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of `widget->`window otherwise.
     */
    region_intersect(region: cairo.Region): cairo.Region
    /**
     * Registers a #GdkWindow with the widget and sets it up so that
     * the widget receives events for it. Call gtk_widget_unregister_window()
     * when destroying the window.
     * 
     * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
     * this up. This is now deprecated and you should use gtk_widget_register_window()
     * instead. Old code will keep working as is, although some new features like
     * transparency might not work perfectly.
     * @param window a #GdkWindow
     */
    register_window(window: Gdk.Window): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accel_group accel group for this widget
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     */
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemonic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * Removes a tick callback previously registered with
     * gtk_widget_add_tick_callback().
     * @param id an id returned by gtk_widget_add_tick_callback()
     */
    remove_tick_callback(id: number): void
    /**
     * A convenience function that uses the theme settings for `widget`
     * to look up `stock_id` and render it to a pixbuf. `stock_id` should
     * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
     * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
     * string that identifies the widget or code doing the rendering, so
     * that theme engines can special-case rendering for that widget or
     * code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be
     * freed after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    /**
     * A convenience function that uses the theme engine and style
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     */
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param new_parent a #GtkContainer to move the widget into
     */
    reparent(new_parent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    reset_rc_styles(): void
    /**
     * Updates the style context of `widget` and all descendants
     * by updating its widget path. #GtkContainers may want
     * to use this on a child when reordering it in a way that a different
     * style might apply to it. See also gtk_container_get_path_for_child().
     */
    reset_style(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event on a widget. This function is not normally used
     * directly. The only time it is used is when propagating an expose
     * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
     * and that is normally done using gtk_container_propagate_draw().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    send_expose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it’s not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * 
     * ```c
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = _gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    send_focus_change(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path path used to look up the accelerator
     * @param accel_group a #GtkAccelGroup.
     */
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget’s allocation.  This should not be used
     * directly, but from within a widget’s size_allocate method.
     * 
     * The allocation set should be the “adjusted” or actual
     * allocation. If you’re implementing a #GtkContainer, you want to use
     * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
     * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
     * allocation inside gtk_widget_size_allocate() to create an adjusted
     * allocation.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    set_allocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * @param app_paintable %TRUE if the application will paint on the widget
     */
    set_app_paintable(app_paintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param can_default whether or not `widget` can be a default widget.
     */
    set_can_default(can_default: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param can_focus whether or not `widget` can own the input focus.
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param is_visible if %TRUE, `widget` should be mapped along with its parent.
     */
    set_child_visible(is_visible: boolean): void
    /**
     * Sets the widget’s clip.  This must not be used directly,
     * but from within a widget’s size_allocate method.
     * It must be called after gtk_widget_set_allocation() (or after chaining up
     * to the parent class), because that function resets the clip.
     * 
     * The clip set should be the area that `widget` draws on. If `widget` is a
     * #GtkContainer, the area must contain all children's clips.
     * 
     * If this function is not called by `widget` during a ::size-allocate handler,
     * the clip will be set to `widget'`s allocation.
     * @param clip a pointer to a #GtkAllocation to copy from
     */
    set_clip(clip: Gtk.Allocation): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    set_composite_name(name: string): void
    /**
     * Enables or disables a #GdkDevice to interact with `widget`
     * and all its children.
     * 
     * It does so by descending through the #GdkWindow hierarchy
     * and enabling the same mask that is has for core events
     * (i.e. the one that gdk_window_get_events() returns).
     * @param device a #GdkDevice
     * @param enabled whether to enable the device
     */
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    /**
     * Sets the device event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive from `device`. Keep
     * in mind that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_device_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with windowless widgets (which return
     * %FALSE from gtk_widget_get_has_window());
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param device a #GdkDevice
     * @param events event mask
     */
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. “Double buffered” simply means that
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don’t see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don’t flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_draw_frame()).
     * 
     * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
     * then expose events for double-buffered widgets are culled into a single
     * event to the toplevel GDK window. If you now unset double buffering, you
     * will cause a separate rendering pass for every widget. This will likely
     * cause rendering problems - in particular related to stacking - and usually
     * increases rendering times significantly.
     * @param double_buffered %TRUE to double-buffer a widget
     */
    set_double_buffered(double_buffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with widgets that have no window.
     * (See gtk_widget_get_has_window()).  To get events on those widgets,
     * place them inside a #GtkEventBox and receive events on the event
     * box.
     * @param events event mask
     */
    set_events(events: number): void
    /**
     * Sets whether the widget should grab focus when it is clicked with the mouse.
     * Making mouse clicks not grab focus is useful in places like toolbars where
     * you don’t want the keyboard focus removed from the main area of the
     * application.
     * @param focus_on_click whether the widget should grab focus when clicked with the mouse
     */
    set_focus_on_click(focus_on_click: boolean): void
    /**
     * Sets the font map to use for Pango rendering. When not set, the widget
     * will inherit the font map from its parent.
     * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
     */
    set_font_map(font_map?: Pango.FontMap | null): void
    /**
     * Sets the #cairo_font_options_t used for Pango rendering in this widget.
     * When not set, the default font options for the #GdkScreen will be used.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the horizontal alignment of `widget`.
     * See the #GtkWidget:halign property.
     * @param align the horizontal alignment
     */
    set_halign(align: Gtk.Align): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * #GtkWidget:has-tooltip for more information.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL “window” pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it’s actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in #GtkWidget::realize must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param has_window whether or not `widget` has a window.
     */
    set_has_window(has_window: boolean): void
    /**
     * Sets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Call this function to set the expand flag if you would like your
     * widget to become larger horizontally when the window has extra
     * room.
     * 
     * By default, widgets automatically expand if any of their children
     * want to expand. (To see if a widget will automatically expand given
     * its current children and state, call gtk_widget_compute_expand(). A
     * container can decide how the expandability of children affects the
     * expansion of the container by overriding the compute_expand virtual
     * method on #GtkWidget.).
     * 
     * Setting hexpand explicitly with this function will override the
     * automatic expand behavior.
     * 
     * This function forces the widget to expand or not to expand,
     * regardless of children.  The override occurs because
     * gtk_widget_set_hexpand() sets the hexpand-set property (see
     * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
     * value to be used, rather than looking at children and widget state.
     * @param expand whether to expand
     */
    set_hexpand(expand: boolean): void
    /**
     * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
     * be used.
     * 
     * The hexpand-set property will be set automatically when you call
     * gtk_widget_set_hexpand() to set hexpand, so the most likely
     * reason to use this function would be to unset an explicit expand
     * flag.
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
    set_hexpand_set(set: boolean): void
    /**
     * Marks the widget as being mapped.
     * 
     * This function should only ever be called in a derived widget's
     * “map” or “unmap” implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    set_mapped(mapped: boolean): void
    /**
     * Sets the bottom margin of `widget`.
     * See the #GtkWidget:margin-bottom property.
     * @param margin the bottom margin
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the end margin of `widget`.
     * See the #GtkWidget:margin-end property.
     * @param margin the end margin
     */
    set_margin_end(margin: number): void
    /**
     * Sets the left margin of `widget`.
     * See the #GtkWidget:margin-left property.
     * @param margin the left margin
     */
    set_margin_left(margin: number): void
    /**
     * Sets the right margin of `widget`.
     * See the #GtkWidget:margin-right property.
     * @param margin the right margin
     */
    set_margin_right(margin: number): void
    /**
     * Sets the start margin of `widget`.
     * See the #GtkWidget:margin-start property.
     * @param margin the start margin
     */
    set_margin_start(margin: number): void
    /**
     * Sets the top margin of `widget`.
     * See the #GtkWidget:margin-top property.
     * @param margin the top margin
     */
    set_margin_top(margin: number): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() will affect this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param no_show_all the new value for the “no-show-all” property
     */
    set_no_show_all(no_show_all: boolean): void
    /**
     * Request the `widget` to be rendered partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
     * are clamped to the [0,1] range.).
     * This works on both toplevel widget, and child widgets, although there
     * are some limitations:
     * 
     * For toplevel widgets this depends on the capabilities of the windowing
     * system. On X11 this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always, although setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * 
     * For child widgets it doesn’t work if any affected widget has a native window, or
     * disables double buffering.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * 
     * For #GtkWindow classes, setting a `parent_window` effects whether
     * the window is a toplevel window or can be embedded into other
     * widgets.
     * 
     * For #GtkWindow classes, this needs to be called before the
     * window is realized.
     * @param parent_window the new parent window.
     */
    set_parent_window(parent_window: Gdk.Window): void
    /**
     * Marks the widget as being realized. This function must only be
     * called after all #GdkWindows for the `widget` have been created
     * and registered.
     * 
     * This function should only ever be called in a derived widget's
     * “realize” or “unrealize” implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    set_realized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for widgets where gtk_widget_get_has_window() is %FALSE
     * setting this flag to %FALSE turns off all allocation on resizing:
     * the widget will not even redraw if its position changes; this is to
     * allow containers that don’t draw anything to avoid excess
     * invalidations. If you set this flag on a widget with no window that
     * does draw on `widget->`window, you are
     * responsible for invalidating both the old and new allocation of the
     * widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget’s size
     * request will be at least `width` by `height`. You can use this
     * function to force a widget to be larger than it normally would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
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
     * #GtkWidget properties margin-left, margin-right, margin-top, and
     * margin-bottom, but it does include pretty much all other padding
     * or border properties set by any subclass of #GtkWidget.
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    set_state(state: Gtk.StateType): void
    /**
     * This function is for use in widget implementations. Turns on flag
     * values in the current widget state (insensitive, prelighted, etc.).
     * 
     * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
     * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
     * direction, use gtk_widget_set_direction().
     * 
     * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
     * will be propagated down to all non-internal children if `widget` is a
     * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
     * down to all #GtkContainer children by different means than turning on the
     * state flag down the hierarchy, both gtk_widget_get_state_flags() and
     * gtk_widget_is_sensitive() will make use of these.
     * @param flags State flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style?: Gtk.Style | null): void
    /**
     * Enables or disables multiple pointer awareness. If this setting is %TRUE,
     * `widget` will start receiving multiple, per device enter/leave events. Note
     * that if custom #GdkWindows are created in #GtkWidget::realize,
     * gdk_window_set_support_multidevice() will have to be called manually on them.
     * @param support_multidevice %TRUE to support input from multiple devices.
     */
    set_support_multidevice(support_multidevice: boolean): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the [Pango text markup language][PangoMarkupFormat].
     * 
     * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text?: string | null): void
    /**
     * Replaces the default window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * @param custom_window a #GtkWindow, or %NULL
     */
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    /**
     * Sets the vertical alignment of `widget`.
     * See the #GtkWidget:valign property.
     * @param align the vertical alignment
     */
    set_valign(align: Gtk.Align): void
    /**
     * Sets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_set_hexpand() for more detail.
     * @param expand whether to expand
     */
    set_vexpand(expand: boolean): void
    /**
     * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
     * be used.
     * 
     * See gtk_widget_set_hexpand_set() for more detail.
     * @param set value for vexpand-set property
     */
    set_vexpand_set(set: boolean): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn’t mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Sets the visual that should be used for by widget and its children for
     * creating #GdkWindows. The visual must be on the same #GdkScreen as
     * returned by gtk_widget_get_screen(), so handling the
     * #GtkWidget::screen-changed signal is necessary.
     * 
     * Setting a new `visual` will not cause `widget` to recreate its windows,
     * so you should call this function before `widget` is realized.
     * @param visual visual to be used or %NULL to unset a previous one
     */
    set_visual(visual?: Gdk.Visual | null): void
    /**
     * Sets a widget’s window. This function should only be used in a
     * widget’s #GtkWidget::realize implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget’s init() function.
     * 
     * Note that this function does not add any reference to `window`.
     * @param window a #GdkWindow
     */
    set_window(window: Gdk.Window): void
    /**
     * Sets a shape for this widget’s GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_region()
     * for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    shape_combine_region(region?: cairo.Region | null): void
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    show_all(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    show_now(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size,
     * position and (optionally) baseline to their child widgets.
     * 
     * In this function, the allocation and baseline may be adjusted. It
     * will be forced to a 1x1 minimum size, and the
     * adjust_size_allocation virtual and adjust_baseline_allocation
     * methods on the child will be used to adjust the allocation and
     * baseline. Standard adjustments include removing the widget's
     * margins, and applying the widget’s #GtkWidget:halign and
     * #GtkWidget:valign properties.
     * 
     * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
     * baseline argument is ignored and -1 is used instead.
     * @param allocation position and size to be allocated to `widget`
     * @param baseline The baseline of the child, or -1
     */
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     */
    size_request(): /* requisition */ Gtk.Requisition
    /**
     * This function attaches the widget’s #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * |[
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * ```
     * 
     * 
     * and should only ever be called in a derived widget’s “realize”
     * implementation which does not chain up to its parent class'
     * “realize” implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    style_attach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param property_name the name of a style property
     * @param value location to return the property value
     */
    style_get_property(property_name: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thaw_child_notify(): void
    /**
     * Translate coordinates relative to `src_widget’`s allocation to coordinates
     * relative to `dest_widget’`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param dest_widget a #GtkWidget
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    trigger_tooltip_query(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Unregisters a #GdkWindow from the widget that was previously set up with
     * gtk_widget_register_window(). You need to call this when the window is
     * no longer used by the widget, such as when you destroy it.
     * @param window a #GdkWindow
     */
    unregister_window(window: Gdk.Window): void
    /**
     * This function is for use in widget implementations. Turns off flag
     * values for the current widget state (insensitive, prelighted, etc.).
     * See gtk_widget_set_state_flags().
     * @param flags State flags to turn off
     */
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
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
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    set_name(name: string): void
    /* Virtual methods of EpcUi-1.0.EpcUi.PasswordDialog */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Dialog */
    vfunc_close(): void
    /**
     * Emits the #GtkDialog::response signal with the given response ID.
     * Used to indicate that the user has responded to the dialog in some way;
     * typically either you or gtk_dialog_run() will be monitoring the
     * ::response signal and take appropriate action.
     * @param response_id response ID
     */
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk-3.0.Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    /**
     * If `focus` is not the current focus widget, and is focusable, sets
     * it as the focus widget for the window. If `focus` is %NULL, unsets
     * the focus widget for this window. To set the focus to a particular
     * widget in the toplevel, it is usually more convenient to use
     * gtk_widget_grab_focus() instead of this function.
     * @param focus widget to be the new focus widget, or %NULL to unset   any focus widget for the toplevel window.
     */
    vfunc_set_focus(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param include_internals 
     * @param callback a callback
     */
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    vfunc_can_activate_accel(signal_id: number): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    vfunc_get_accessible(): Atk.Object
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    vfunc_queue_draw_region(region: cairo.Region): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.Dialog */
    /**
     * The ::close signal is a
     * [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user uses a keybinding to close
     * the dialog.
     * 
     * The default binding for this signal is the Escape key.
     */
    connect(sigName: "close", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "close"): void
    /**
     * Emitted when an action widget is clicked, the dialog receives a
     * delete event, or the application programmer calls gtk_dialog_response().
     * On a delete event, the response ID is #GTK_RESPONSE_DELETE_EVENT.
     * Otherwise, it depends on which action widget was clicked.
     * @param response_id the response ID
     */
    connect(sigName: "response", callback: (($obj: PasswordDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: PasswordDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk-3.0.Gtk.Window */
    /**
     * The ::activate-default signal is a
     * [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user activates the default widget
     * of `window`.
     */
    connect(sigName: "activate-default", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "activate-default"): void
    /**
     * The ::activate-focus signal is a
     * [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user activates the currently
     * focused widget of `window`.
     */
    connect(sigName: "activate-focus", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "activate-focus"): void
    /**
     * The ::enable-debugging signal is a [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user enables or disables interactive
     * debugging. When `toggle` is %TRUE, interactive debugging is toggled
     * on or off, when it is %FALSE, the debugger will be pointed at the
     * widget under the pointer.
     * 
     * The default bindings for this signal are Ctrl-Shift-I
     * and Ctrl-Shift-D.
     * @param toggle toggle the debugger
     */
    connect(sigName: "enable-debugging", callback: (($obj: PasswordDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: PasswordDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    /**
     * The ::keys-changed signal gets emitted when the set of accelerators
     * or mnemonics that are associated with `window` changes.
     */
    connect(sigName: "keys-changed", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "keys-changed"): void
    /**
     * This signal is emitted whenever the currently focused widget in
     * this window changes.
     * @param widget the newly focused widget (or %NULL for no focus)
     */
    connect(sigName: "set-focus", callback: (($obj: PasswordDialog, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: PasswordDialog, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: PasswordDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: (($obj: PasswordDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: PasswordDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: (($obj: PasswordDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: PasswordDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signal_id the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: (($obj: PasswordDialog, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: PasswordDialog, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    /**
     * The ::child-notify signal is emitted for each
     * [child property][child-properties]  that has
     * changed on an object. The signal's detail holds the property name.
     * @param child_property the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: (($obj: PasswordDialog, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: PasswordDialog, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widgets` screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: (($obj: PasswordDialog, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: PasswordDialog, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: (($obj: PasswordDialog, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: PasswordDialog, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * Signals that all holders of a reference to the widget should release
     * the reference that they hold. May result in finalization of the widget
     * if all references are released.
     * 
     * This signal is not suitable for saving widget state.
     */
    connect(sigName: "destroy", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "destroy"): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: PasswordDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PasswordDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with e.g. gtk_drag_source_set_icon_pixbuf().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param context the drag context
     */
    connect(sigName: "drag-begin", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param context the drag context
     */
    connect(sigName: "drag-data-delete", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: (($obj: PasswordDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: PasswordDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and not finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on
     * whether the data was processed successfully.
     * 
     * Applications must create some means to determine why the signal was emitted
     * and therefore whether to call gdk_drag_status() or gtk_drag_finish().
     * 
     * The handler may inspect the selected action with
     * gdk_drag_context_get_selected_action() before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as
     * shown in the following example:
     * 
     * ```c
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       GdkDragAction action;
     * 
     *       // handle data here
     * 
     *       action = gdk_drag_context_get_selected_action (context);
     *       if (action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     * 
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     * 
     *           if (response == GTK_RESPONSE_YES)
     *             action = GDK_ACTION_MOVE;
     *           else
     *             action = GDK_ACTION_COPY;
     *          }
     * 
     *       gtk_drag_finish (context, TRUE, action == GDK_ACTION_MOVE, time);
     *     }
     *   else
     *     gtk_drag_finish (context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param context the drag context
     */
    connect(sigName: "drag-end", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: PasswordDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DnD
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: (($obj: PasswordDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: PasswordDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight().
     * 
     * 
     * Likewise, the #GtkWidget::drag-leave signal is also emitted before the
     * ::drag-drop signal, for instance to allow cleaning up of a preview item
     * created in the #GtkWidget::drag-motion signal handler.
     * @param context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: (($obj: PasswordDialog, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: PasswordDialog, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    /**
     * The ::drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you must pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget      *widget,
     *              GdkDragContext *context,
     *              gint            x,
     *              gint            y,
     *              guint           time)
     * {
     *   GdkAtom target;
     * 
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     * 
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status
     *         = gdk_drag_context_get_suggested_action (context);
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     * 
     *   return TRUE;
     * }
     * 
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     * 
     *      // We are getting this data due to a request in drag_motion,
     *      // rather than due to a request in drag_drop, so we are just
     *      // supposed to call gdk_drag_status(), not actually paste in
     *      // the data.
     * 
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context,
     *                         private_data->suggested_action,
     *                         time);
     *    }
     *   else
     *    {
     *      // accept the drop
     *    }
     * }
     * ```
     * 
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: PasswordDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * This signal is emitted when a widget is supposed to render itself.
     * The `widget'`s top left corner must be painted at the origin of
     * the passed in context and be sized to the values returned by
     * gtk_widget_get_allocated_width() and
     * gtk_widget_get_allocated_height().
     * 
     * Signal handlers connected to this signal can modify the cairo
     * context passed as `cr` in any way they like and don't need to
     * restore it. The signal emission takes care of calling cairo_save()
     * before and cairo_restore() after invoking the handler.
     * 
     * The signal handler will get a `cr` with a clip region already set to the
     * widget's dirty region, i.e. to the area that needs repainting.  Complicated
     * widgets that want to avoid redrawing themselves completely can get the full
     * extents of the clip region with gdk_cairo_get_clip_rectangle(), or they can
     * get a finer-grained representation of the dirty region with
     * cairo_copy_clip_rectangle_list().
     * @param cr the cairo context to draw to
     */
    connect(sigName: "draw", callback: (($obj: PasswordDialog, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: PasswordDialog, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: PasswordDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: (($obj: PasswordDialog, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: PasswordDialog, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: (($obj: PasswordDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: PasswordDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: (($obj: PasswordDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: PasswordDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: (($obj: PasswordDialog, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: PasswordDialog, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param was_grabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: (($obj: PasswordDialog, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: PasswordDialog, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    /**
     * The ::hide signal is emitted when `widget` is hidden, for example with
     * gtk_widget_hide().
     */
    connect(sigName: "hide", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * “anchored” when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previous_toplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: (($obj: PasswordDialog, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: PasswordDialog, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed. The signal
     * emission will reoccur at the key-repeat rate when the key is kept pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: (($obj: PasswordDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: PasswordDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is released.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: (($obj: PasswordDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: PasswordDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    /**
     * The ::map signal is emitted when `widget` is going to be mapped, that is
     * when the widget is visible (which is controlled with
     * gtk_widget_set_visible()) and all its parents up to the toplevel widget
     * are also visible. Once the map has occurred, #GtkWidget::map-event will
     * be emitted.
     * 
     * The ::map signal can be used to determine whether a widget will be drawn,
     * for instance it can resume an animation that was stopped during the
     * emission of #GtkWidget::unmap.
     */
    connect(sigName: "map", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: (($obj: PasswordDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: PasswordDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    /**
     * The default handler for this signal activates `widget` if `group_cycling`
     * is %FALSE, or just makes `widget` grab focus if `group_cycling` is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    connect(sigName: "mnemonic-activate", callback: (($obj: PasswordDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PasswordDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PasswordDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param old_parent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: (($obj: PasswordDialog, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PasswordDialog, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See the
     * [Popup Menu Migration Checklist][checklist-popup-menu]
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (($obj: PasswordDialog) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: PasswordDialog) => boolean)): number
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: (($obj: PasswordDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: PasswordDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: (($obj: PasswordDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: PasswordDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the hover timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget'`s left side
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget'`s top
     * @param keyboard_mode %TRUE if the tooltip was triggered using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: (($obj: PasswordDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PasswordDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    /**
     * The ::realize signal is emitted when `widget` is associated with a
     * #GdkWindow, which means that gtk_widget_realize() has been called or the
     * widget has been mapped (that is, it is going to be drawn).
     */
    connect(sigName: "realize", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previous_screen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: (($obj: PasswordDialog, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: PasswordDialog, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_SCROLL_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: (($obj: PasswordDialog, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: PasswordDialog, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: PasswordDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: PasswordDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: PasswordDialog, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: PasswordDialog, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: PasswordDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    /**
     * The ::show signal is emitted when `widget` is shown, for example with
     * gtk_widget_show().
     */
    connect(sigName: "show", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: PasswordDialog, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: PasswordDialog, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: PasswordDialog, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: PasswordDialog, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: (($obj: PasswordDialog, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: PasswordDialog, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::state-flags-changed signal is emitted when the widget state
     * changes, see gtk_widget_get_state_flags().
     * @param flags The previous state flags.
     */
    connect(sigName: "state-flags-changed", callback: (($obj: PasswordDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PasswordDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * 
     * Note that this signal is emitted for changes to the deprecated
     * #GtkStyle. To track changes to the #GtkStyleContext associated
     * with a widget, use the #GtkWidget::style-updated signal.
     * @param previous_style the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: (($obj: PasswordDialog, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: PasswordDialog, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    /**
     * The ::style-updated signal is a convenience signal that is emitted when the
     * #GtkStyleContext::changed signal is emitted on the `widget'`s associated
     * #GtkStyleContext as returned by gtk_widget_get_style_context().
     * 
     * Note that style-modifying functions like gtk_widget_override_color() also
     * cause this signal to be emitted.
     */
    connect(sigName: "style-updated", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: PasswordDialog, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: PasswordDialog, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    /**
     * The ::unmap signal is emitted when `widget` is going to be unmapped, which
     * means that either it or any of its parents up to the toplevel widget have
     * been set as hidden.
     * 
     * As ::unmap indicates that a widget will not be shown any longer, it can be
     * used to, for example, stop an animation on the widget.
     */
    connect(sigName: "unmap", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: (($obj: PasswordDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: PasswordDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    /**
     * The ::unrealize signal is emitted when the #GdkWindow associated with
     * `widget` is destroyed, which means that gtk_widget_unrealize() has been
     * called or the widget has been unmapped (that is, it is going to be
     * hidden).
     */
    connect(sigName: "unrealize", callback: (($obj: PasswordDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PasswordDialog) => void)): number
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s
     * window is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: PasswordDialog, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: (($obj: PasswordDialog, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: PasswordDialog, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anonymous-allowed", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-allowed", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-header-bar", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attached-to", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-map", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgency-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-position", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PasswordDialog_ConstructProps)
    _init (config?: PasswordDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PasswordDialog
    /* Function overloads */
    static new(type: Gtk.WindowType): PasswordDialog
    static $gtype: GObject.Type
}
interface ProgressWindow_ConstructProps extends Gtk.Window_ConstructProps {
    /* Constructor properties of EpcUi-1.0.EpcUi.ProgressWindow */
    message?: string
    progress?: number
    title?: string
}
class ProgressWindow {
    /* Properties of EpcUi-1.0.EpcUi.ProgressWindow */
    message: string
    progress: number
    title: string
    /* Properties of Gtk-3.0.Gtk.Window */
    /**
     * Whether the window should receive the input focus.
     */
    accept_focus: boolean
    /**
     * The #GtkApplication associated with the window.
     * 
     * The application will be kept alive for at least as long as it
     * has any windows associated with it (see g_application_hold()
     * for a way to keep it alive without windows).
     * 
     * Normally, the connection between the application and the window
     * will remain until the window is destroyed, but you can explicitly
     * remove it by setting the :application property to %NULL.
     */
    application: Gtk.Application
    /**
     * The widget to which this window is attached.
     * See gtk_window_set_attached_to().
     * 
     * Examples of places where specifying this relation is useful are
     * for instance a #GtkMenu created by a #GtkComboBox, a completion
     * popup window created by #GtkEntry or a typeahead search entry
     * created by #GtkTreeView.
     */
    attached_to: Gtk.Widget
    /**
     * Whether the window should be decorated by the window manager.
     */
    decorated: boolean
    default_height: number
    default_width: number
    /**
     * Whether the window frame should have a close button.
     */
    deletable: boolean
    destroy_with_parent: boolean
    /**
     * Whether the window should receive the input focus when mapped.
     */
    focus_on_map: boolean
    /**
     * Whether 'focus rectangles' are currently visible in this window.
     * 
     * This property is maintained by GTK+ based on user input
     * and should not be set by applications.
     */
    focus_visible: boolean
    /**
     * The window gravity of the window. See gtk_window_move() and #GdkGravity for
     * more details about window gravity.
     */
    gravity: Gdk.Gravity
    /**
     * Whether the window has a corner resize grip.
     * 
     * Note that the resize grip is only shown if the window is
     * actually resizable and not maximized. Use
     * #GtkWindow:resize-grip-visible to find out if the resize
     * grip is currently shown.
     */
    has_resize_grip: boolean
    readonly has_toplevel_focus: boolean
    /**
     * Whether the titlebar should be hidden during maximization.
     */
    hide_titlebar_when_maximized: boolean
    icon: GdkPixbuf.Pixbuf
    /**
     * The :icon-name property specifies the name of the themed icon to
     * use as the window icon. See #GtkIconTheme for more details.
     */
    icon_name: string
    readonly is_active: boolean
    readonly is_maximized: boolean
    /**
     * Whether mnemonics are currently visible in this window.
     * 
     * This property is maintained by GTK+ based on user input,
     * and should not be set by applications.
     */
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    /**
     * Whether a corner resize grip is currently shown.
     */
    readonly resize_grip_visible: boolean
    role: string
    screen: Gdk.Screen
    skip_pager_hint: boolean
    skip_taskbar_hint: boolean
    /**
     * The :startup-id is a write-only property for setting window's
     * startup notification identifier. See gtk_window_set_startup_id()
     * for more details.
     */
    startup_id: string
    /**
     * The transient parent of the window. See gtk_window_set_transient_for() for
     * more details about transient windows.
     */
    transient_for: Gtk.Window
    readonly type: Gtk.WindowType
    type_hint: Gdk.WindowTypeHint
    urgency_hint: boolean
    window_position: Gtk.WindowPosition
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    /**
     * Whether the widget is double buffered.
     */
    double_buffered: boolean
    events: Gdk.EventMask
    /**
     * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
     */
    expand: boolean
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * 
     * This property is only relevant for widgets that can take focus.
     * 
     * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
     * GtkComboBox) implemented this property individually.
     */
    focus_on_click: boolean
    /**
     * How to distribute horizontal space if widget gets extra space, see #GtkAlign
     */
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    has_tooltip: boolean
    height_request: number
    /**
     * Whether to expand horizontally. See gtk_widget_set_hexpand().
     */
    hexpand: boolean
    /**
     * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
     */
    hexpand_set: boolean
    is_focus: boolean
    /**
     * Sets all four sides' margin at once. If read, returns max
     * margin on any side.
     */
    margin: number
    /**
     * Margin on bottom side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_bottom: number
    /**
     * Margin on end of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_end: number
    /**
     * Margin on left side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_left: number
    /**
     * Margin on right side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_right: number
    /**
     * Margin on start of widget, horizontally. This property supports
     * left-to-right and right-to-left text directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_start: number
    /**
     * Margin on top side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * gtk_widget_set_size_request() for example.
     */
    margin_top: number
    name: string
    no_show_all: boolean
    /**
     * The requested opacity of the widget. See gtk_widget_set_opacity() for
     * more details about window opacity.
     * 
     * Before 3.8 this was only available in GtkWindow
     */
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    /**
     * The scale factor of the widget. See gtk_widget_get_scale_factor() for
     * more details about widget scaling.
     */
    readonly scale_factor: number
    sensitive: boolean
    /**
     * The style of the widget, which contains information about how it will look (colors, etc).
     */
    style: Gtk.Style
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the [Pango text markup language][PangoMarkupFormat].
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     * 
     * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
     * are set, the last one wins.
     */
    tooltip_text: string
    /**
     * How to distribute vertical space if widget gets extra space, see #GtkAlign
     */
    valign: Gtk.Align
    /**
     * Whether to expand vertically. See gtk_widget_set_vexpand().
     */
    vexpand: boolean
    /**
     * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
     */
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /**
     * The widget's window if it is realized, %NULL otherwise.
     */
    readonly window: Gdk.Window
    /* Fields of Gtk-3.0.Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk-3.0.Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EpcUi-1.0.EpcUi.ProgressWindow */
    update(progress: number, message: string): void
    /* Methods of Gtk-3.0.Gtk.Window */
    /**
     * Activates the default widget for the window, unless the current
     * focused widget has been configured to receive the default action
     * (see gtk_widget_set_receives_default()), in which case the
     * focused widget is activated.
     */
    activate_default(): boolean
    /**
     * Activates the current focused widget within the window.
     */
    activate_focus(): boolean
    /**
     * Activates mnemonics and accelerators for this #GtkWindow. This is normally
     * called by the default ::key_press_event handler for toplevel windows,
     * however in some cases it may be useful to call this directly when
     * overriding the standard key handling for a toplevel window.
     * @param event a #GdkEventKey
     */
    activate_key(event: Gdk.EventKey): boolean
    /**
     * Associate `accel_group` with `window,` such that calling
     * gtk_accel_groups_activate() on `window` will activate accelerators
     * in `accel_group`.
     * @param accel_group a #GtkAccelGroup
     */
    add_accel_group(accel_group: Gtk.AccelGroup): void
    /**
     * Adds a mnemonic to this window.
     * @param keyval the mnemonic
     * @param target the widget that gets activated by the mnemonic
     */
    add_mnemonic(keyval: number, target: Gtk.Widget): void
    /**
     * Starts moving a window. This function is used if an application has
     * window movement grips. When GDK can support it, the window movement
     * will be done using the standard mechanism for the
     * [window manager][gtk-X11-arch] or windowing
     * system. Otherwise, GDK will try to emulate window movement,
     * potentially not all that well, depending on the windowing system.
     * @param button mouse button that initiated the drag
     * @param root_x X position where the user clicked to initiate the drag, in root window coordinates
     * @param root_y Y position where the user clicked to initiate the drag
     * @param timestamp timestamp from the click event that initiated the drag
     */
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Starts resizing a window. This function is used if an application
     * has window resizing controls. When GDK can support it, the resize
     * will be done using the standard mechanism for the
     * [window manager][gtk-X11-arch] or windowing
     * system. Otherwise, GDK will try to emulate window resizing,
     * potentially not all that well, depending on the windowing system.
     * @param edge position of the resize control
     * @param button mouse button that initiated the drag
     * @param root_x X position where the user clicked to initiate the drag, in root window coordinates
     * @param root_y Y position where the user clicked to initiate the drag
     * @param timestamp timestamp from the click event that initiated the drag
     */
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Asks to deiconify (i.e. unminimize) the specified `window`. Note
     * that you shouldn’t assume the window is definitely deiconified
     * afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch])) could iconify it
     * again before your code which assumes deiconification gets to run.
     * 
     * You can track iconification via the “window-state-event” signal
     * on #GtkWidget.
     */
    deiconify(): void
    /**
     * Asks to place `window` in the fullscreen state. Note that you
     * shouldn’t assume the window is definitely full screen afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could unfullscreen it
     * again, and not all window managers honor requests to fullscreen
     * windows. But normally the window will end up fullscreen. Just
     * don’t write code that crashes if not.
     * 
     * You can track the fullscreen state via the “window-state-event” signal
     * on #GtkWidget.
     */
    fullscreen(): void
    /**
     * Asks to place `window` in the fullscreen state. Note that you shouldn't assume
     * the window is definitely full screen afterward.
     * 
     * You can track the fullscreen state via the "window-state-event" signal
     * on #GtkWidget.
     * @param screen a #GdkScreen to draw to
     * @param monitor which monitor to go fullscreen on
     */
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void
    /**
     * Gets the value set by gtk_window_set_accept_focus().
     */
    get_accept_focus(): boolean
    /**
     * Gets the #GtkApplication associated with the window (if any).
     */
    get_application(): Gtk.Application | null
    /**
     * Fetches the attach widget for this window. See
     * gtk_window_set_attached_to().
     */
    get_attached_to(): Gtk.Widget | null
    /**
     * Returns whether the window has been set to have decorations
     * such as a title bar via gtk_window_set_decorated().
     */
    get_decorated(): boolean
    /**
     * Gets the default size of the window. A value of -1 for the width or
     * height indicates that a default size has not been explicitly set
     * for that dimension, so the “natural” size of the window will be
     * used.
     */
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the default widget for `window`. See
     * gtk_window_set_default() for more details.
     */
    get_default_widget(): Gtk.Widget | null
    /**
     * Returns whether the window has been set to have a close button
     * via gtk_window_set_deletable().
     */
    get_deletable(): boolean
    /**
     * Returns whether the window will be destroyed with its transient parent. See
     * gtk_window_set_destroy_with_parent ().
     */
    get_destroy_with_parent(): boolean
    /**
     * Retrieves the current focused widget within the window.
     * Note that this is the widget that would have the focus
     * if the toplevel window focused; if the toplevel window
     * is not focused then  `gtk_widget_has_focus (widget)` will
     * not be %TRUE for the widget.
     */
    get_focus(): Gtk.Widget | null
    /**
     * Gets the value set by gtk_window_set_focus_on_map().
     */
    get_focus_on_map(): boolean
    /**
     * Gets the value of the #GtkWindow:focus-visible property.
     */
    get_focus_visible(): boolean
    /**
     * Gets the value set by gtk_window_set_gravity().
     */
    get_gravity(): Gdk.Gravity
    /**
     * Returns the group for `window` or the default group, if
     * `window` is %NULL or if `window` does not have an explicit
     * window group.
     */
    get_group(): Gtk.WindowGroup
    /**
     * Determines whether the window may have a resize grip.
     */
    get_has_resize_grip(): boolean
    /**
     * Returns whether the window has requested to have its titlebar hidden
     * when maximized. See gtk_window_set_hide_titlebar_when_maximized ().
     */
    get_hide_titlebar_when_maximized(): boolean
    /**
     * Gets the value set by gtk_window_set_icon() (or if you've
     * called gtk_window_set_icon_list(), gets the first icon in
     * the icon list).
     */
    get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Retrieves the list of icons set by gtk_window_set_icon_list().
     * The list is copied, but the reference count on each
     * member won’t be incremented.
     */
    get_icon_list(): GdkPixbuf.Pixbuf[]
    /**
     * Returns the name of the themed icon for the window,
     * see gtk_window_set_icon_name().
     */
    get_icon_name(): string | null
    /**
     * Returns the mnemonic modifier for this window. See
     * gtk_window_set_mnemonic_modifier().
     */
    get_mnemonic_modifier(): Gdk.ModifierType
    /**
     * Gets the value of the #GtkWindow:mnemonics-visible property.
     */
    get_mnemonics_visible(): boolean
    /**
     * Returns whether the window is modal. See gtk_window_set_modal().
     */
    get_modal(): boolean
    /**
     * Fetches the requested opacity for this window. See
     * gtk_window_set_opacity().
     */
    get_opacity(): number
    /**
     * This function returns the position you need to pass to
     * gtk_window_move() to keep `window` in its current position.
     * This means that the meaning of the returned value varies with
     * window gravity. See gtk_window_move() for more details.
     * 
     * The reliability of this function depends on the windowing system
     * currently in use. Some windowing systems, such as Wayland, do not
     * support a global coordinate system, and thus the position of the
     * window will always be (0, 0). Others, like X11, do not have a reliable
     * way to obtain the geometry of the decorations of a window if they are
     * provided by the window manager. Additionally, on X11, window manager
     * have been known to mismanage window gravity, which result in windows
     * moving even if you use the coordinates of the current position as
     * returned by this function.
     * 
     * If you haven’t changed the window gravity, its gravity will be
     * #GDK_GRAVITY_NORTH_WEST. This means that gtk_window_get_position()
     * gets the position of the top-left corner of the window manager
     * frame for the window. gtk_window_move() sets the position of this
     * same top-left corner.
     * 
     * If a window has gravity #GDK_GRAVITY_STATIC the window manager
     * frame is not relevant, and thus gtk_window_get_position() will
     * always produce accurate results. However you can’t use static
     * gravity to do things like place a window in a corner of the screen,
     * because static gravity ignores the window manager decorations.
     * 
     * Ideally, this function should return appropriate values if the
     * window has client side decorations, assuming that the windowing
     * system supports global coordinates.
     * 
     * In practice, saving the window position should not be left to
     * applications, as they lack enough knowledge of the windowing
     * system and the window manager state to effectively do so. The
     * appropriate way to implement saving the window position is to
     * use a platform-specific protocol, wherever that is available.
     */
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    /**
     * Gets the value set by gtk_window_set_resizable().
     */
    get_resizable(): boolean
    /**
     * If a window has a resize grip, this will retrieve the grip
     * position, width and height into the specified #GdkRectangle.
     */
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    /**
     * Returns the role of the window. See gtk_window_set_role() for
     * further explanation.
     */
    get_role(): string | null
    /**
     * Returns the #GdkScreen associated with `window`.
     */
    get_screen(): Gdk.Screen
    /**
     * Obtains the current size of `window`.
     * 
     * If `window` is not visible on screen, this function return the size GTK+
     * will suggest to the [window manager][gtk-X11-arch] for the initial window
     * size (but this is not reliably the same as the size the window manager
     * will actually select). See: gtk_window_set_default_size().
     * 
     * Depending on the windowing system and the window manager constraints,
     * the size returned by this function may not match the size set using
     * gtk_window_resize(); additionally, since gtk_window_resize() may be
     * implemented as an asynchronous operation, GTK+ cannot guarantee in any
     * way that this code:
     * 
     * 
     * ```c
     *   // width and height are set elsewhere
     *   gtk_window_resize (window, width, height);
     * 
     *   int new_width, new_height;
     *   gtk_window_get_size (window, &new_width, &new_height);
     * ```
     * 
     * 
     * will result in `new_width` and `new_height` matching `width` and
     * `height`, respectively.
     * 
     * This function will return the logical size of the #GtkWindow,
     * excluding the widgets used in client side decorations; there is,
     * however, no guarantee that the result will be completely accurate
     * because client side decoration may include widgets that depend on
     * the user preferences and that may not be visibile at the time you
     * call this function.
     * 
     * The dimensions returned by this function are suitable for being
     * stored across sessions; use gtk_window_set_default_size() to
     * restore them when before showing the window.
     * 
     * To avoid potential race conditions, you should only call this
     * function in response to a size change notification, for instance
     * inside a handler for the #GtkWidget::size-allocate signal, or
     * inside a handler for the #GtkWidget::configure-event signal:
     * 
     * 
     * ```c
     * static void
     * on_size_allocate (GtkWidget *widget, GtkAllocation *allocation)
     * {
     *   int new_width, new_height;
     * 
     *   gtk_window_get_size (GTK_WINDOW (widget), &new_width, &new_height);
     * 
     *   ...
     * }
     * ```
     * 
     * 
     * Note that, if you connect to the #GtkWidget::size-allocate signal,
     * you should not use the dimensions of the #GtkAllocation passed to
     * the signal handler, as the allocation may contain client side
     * decorations added by GTK+, depending on the windowing system in
     * use.
     * 
     * If you are getting a window size in order to position the window
     * on the screen, you should, instead, simply set the window’s semantic
     * type with gtk_window_set_type_hint(), which allows the window manager
     * to e.g. center dialogs. Also, if you set the transient parent of
     * dialogs with gtk_window_set_transient_for() window managers will
     * often center the dialog over its parent window. It's much preferred
     * to let the window manager handle these cases rather than doing it
     * yourself, because all apps will behave consistently and according to
     * user or system preferences, if the window manager handles it. Also,
     * the window manager can take into account the size of the window
     * decorations and border that it may add, and of which GTK+ has no
     * knowledge. Additionally, positioning windows in global screen coordinates
     * may not be allowed by the windowing system. For more information,
     * see: gtk_window_set_position().
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the value set by gtk_window_set_skip_pager_hint().
     */
    get_skip_pager_hint(): boolean
    /**
     * Gets the value set by gtk_window_set_skip_taskbar_hint()
     */
    get_skip_taskbar_hint(): boolean
    /**
     * Retrieves the title of the window. See gtk_window_set_title().
     */
    get_title(): string | null
    /**
     * Returns the custom titlebar that has been set with
     * gtk_window_set_titlebar().
     */
    get_titlebar(): Gtk.Widget | null
    /**
     * Fetches the transient parent for this window. See
     * gtk_window_set_transient_for().
     */
    get_transient_for(): Gtk.Window | null
    /**
     * Gets the type hint for this window. See gtk_window_set_type_hint().
     */
    get_type_hint(): Gdk.WindowTypeHint
    /**
     * Gets the value set by gtk_window_set_urgency_hint()
     */
    get_urgency_hint(): boolean
    /**
     * Gets the type of the window. See #GtkWindowType.
     */
    get_window_type(): Gtk.WindowType
    /**
     * Returns whether `window` has an explicit window group.
     */
    has_group(): boolean
    /**
     * Asks to iconify (i.e. minimize) the specified `window`. Note that
     * you shouldn’t assume the window is definitely iconified afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could deiconify it
     * again, or there may not be a window manager in which case
     * iconification isn’t possible, etc. But normally the window will end
     * up iconified. Just don’t write code that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be iconified before it ever appears
     * onscreen.
     * 
     * You can track iconification via the “window-state-event” signal
     * on #GtkWidget.
     */
    iconify(): void
    /**
     * Asks to maximize `window,` so that it becomes full-screen. Note that
     * you shouldn’t assume the window is definitely maximized afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could unmaximize it
     * again, and not all window managers support maximization. But
     * normally the window will end up maximized. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be maximized when it appears onscreen
     * initially.
     * 
     * You can track maximization via the “window-state-event” signal
     * on #GtkWidget, or by listening to notifications on the
     * #GtkWindow:is-maximized property.
     */
    maximize(): void
    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean
    /**
     * Asks the [window manager][gtk-X11-arch] to move
     * `window` to the given position.  Window managers are free to ignore
     * this; most window managers ignore requests for initial window
     * positions (instead using a user-defined placement algorithm) and
     * honor requests after the window has already been shown.
     * 
     * Note: the position is the position of the gravity-determined
     * reference point for the window. The gravity determines two things:
     * first, the location of the reference point in root window
     * coordinates; and second, which point on the window is positioned at
     * the reference point.
     * 
     * By default the gravity is #GDK_GRAVITY_NORTH_WEST, so the reference
     * point is simply the `x,` `y` supplied to gtk_window_move(). The
     * top-left corner of the window decorations (aka window frame or
     * border) will be placed at `x,` `y`.  Therefore, to position a window
     * at the top left of the screen, you want to use the default gravity
     * (which is #GDK_GRAVITY_NORTH_WEST) and move the window to 0,0.
     * 
     * To position a window at the bottom right corner of the screen, you
     * would set #GDK_GRAVITY_SOUTH_EAST, which means that the reference
     * point is at `x` + the window width and `y` + the window height, and
     * the bottom-right corner of the window border will be placed at that
     * reference point. So, to place a window in the bottom right corner
     * you would first set gravity to south east, then write:
     * `gtk_window_move (window, gdk_screen_width () - window_width,
     * gdk_screen_height () - window_height)` (note that this
     * example does not take multi-head scenarios into account).
     * 
     * The [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec)
     * has a nice table of gravities in the “implementation notes” section.
     * 
     * The gtk_window_get_position() documentation may also be relevant.
     * @param x X coordinate to move window to
     * @param y Y coordinate to move window to
     */
    move(x: number, y: number): void
    /**
     * Parses a standard X Window System geometry string - see the
     * manual page for X (type “man X”) for details on this.
     * gtk_window_parse_geometry() does work on all GTK+ ports
     * including Win32 but is primarily intended for an X environment.
     * 
     * If either a size or a position can be extracted from the
     * geometry string, gtk_window_parse_geometry() returns %TRUE
     * and calls gtk_window_set_default_size() and/or gtk_window_move()
     * to resize/move the window.
     * 
     * If gtk_window_parse_geometry() returns %TRUE, it will also
     * set the #GDK_HINT_USER_POS and/or #GDK_HINT_USER_SIZE hints
     * indicating to the window manager that the size/position of
     * the window was user-specified. This causes most window
     * managers to honor the geometry.
     * 
     * Note that for gtk_window_parse_geometry() to work as expected, it has
     * to be called when the window has its “final” size, i.e. after calling
     * gtk_widget_show_all() on the contents and gtk_window_set_geometry_hints()
     * on the window.
     * 
     * ```c
     * #include <gtk/gtk.h>
     * 
     * static void
     * fill_with_content (GtkWidget *vbox)
     * {
     *   // fill with content...
     * }
     * 
     * int
     * main (int argc, char *argv[])
     * {
     *   GtkWidget *window, *vbox;
     *   GdkGeometry size_hints = {
     *     100, 50, 0, 0, 100, 50, 10,
     *     10, 0.0, 0.0, GDK_GRAVITY_NORTH_WEST
     *   };
     * 
     *   gtk_init (&argc, &argv);
     * 
     *   window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
     *   vbox = gtk_box_new (GTK_ORIENTATION_VERTICAL, 0);
     * 
     *   gtk_container_add (GTK_CONTAINER (window), vbox);
     *   fill_with_content (vbox);
     *   gtk_widget_show_all (vbox);
     * 
     *   gtk_window_set_geometry_hints (GTK_WINDOW (window),
     * 	  			    NULL,
     * 				    &size_hints,
     * 				    GDK_HINT_MIN_SIZE |
     * 				    GDK_HINT_BASE_SIZE |
     * 				    GDK_HINT_RESIZE_INC);
     * 
     *   if (argc > 1)
     *     {
     *       gboolean res;
     *       res = gtk_window_parse_geometry (GTK_WINDOW (window),
     *                                        argv[1]);
     *       if (! res)
     *         fprintf (stderr,
     *                  "Failed to parse “%s”\n",
     *                  argv[1]);
     *     }
     * 
     *   gtk_widget_show_all (window);
     *   gtk_main ();
     * 
     *   return 0;
     * }
     * ```
     * 
     * @param geometry geometry string
     */
    parse_geometry(geometry: string): boolean
    /**
     * Presents a window to the user. This function should not be used
     * as when it is called, it is too late to gather a valid timestamp
     * to allow focus stealing prevention to work correctly.
     */
    present(): void
    /**
     * Presents a window to the user. This may mean raising the window
     * in the stacking order, deiconifying it, moving it to the current
     * desktop, and/or giving it the keyboard focus, possibly dependent
     * on the user’s platform, window manager, and preferences.
     * 
     * If `window` is hidden, this function calls gtk_widget_show()
     * as well.
     * 
     * This function should be used when the user tries to open a window
     * that’s already open. Say for example the preferences dialog is
     * currently open, and the user chooses Preferences from the menu
     * a second time; use gtk_window_present() to move the already-open dialog
     * where the user can see it.
     * 
     * Presents a window to the user in response to a user interaction. The
     * timestamp should be gathered when the window was requested to be shown
     * (when clicking a link for example), rather than once the window is
     * ready to be shown.
     * @param timestamp the timestamp of the user interaction (typically a   button or key press event) which triggered this call
     */
    present_with_time(timestamp: number): void
    /**
     * Propagate a key press or release event to the focus widget and
     * up the focus container chain until a widget handles `event`.
     * This is normally called by the default ::key_press_event and
     * ::key_release_event handlers for toplevel windows,
     * however in some cases it may be useful to call this directly when
     * overriding the standard key handling for a toplevel window.
     * @param event a #GdkEventKey
     */
    propagate_key_event(event: Gdk.EventKey): boolean
    /**
     * Reverses the effects of gtk_window_add_accel_group().
     * @param accel_group a #GtkAccelGroup
     */
    remove_accel_group(accel_group: Gtk.AccelGroup): void
    /**
     * Removes a mnemonic from this window.
     * @param keyval the mnemonic
     * @param target the widget that gets activated by the mnemonic
     */
    remove_mnemonic(keyval: number, target: Gtk.Widget): void
    /**
     * Hides `window,` then reshows it, resetting the
     * default size and position of the window. Used
     * by GUI builders only.
     */
    reshow_with_initial_size(): void
    /**
     * Resizes the window as if the user had done so, obeying geometry
     * constraints. The default geometry constraint is that windows may
     * not be smaller than their size request; to override this
     * constraint, call gtk_widget_set_size_request() to set the window's
     * request to a smaller value.
     * 
     * If gtk_window_resize() is called before showing a window for the
     * first time, it overrides any default size set with
     * gtk_window_set_default_size().
     * 
     * Windows may not be resized smaller than 1 by 1 pixels.
     * 
     * When using client side decorations, GTK+ will do its best to adjust
     * the given size so that the resulting window size matches the
     * requested size without the title bar, borders and shadows added for
     * the client side decorations, but there is no guarantee that the
     * result will be totally accurate because these widgets added for
     * client side decorations depend on the theme and may not be realized
     * or visible at the time gtk_window_resize() is issued.
     * 
     * If the GtkWindow has a titlebar widget (see gtk_window_set_titlebar()), then
     * typically, gtk_window_resize() will compensate for the height of the titlebar
     * widget only if the height is known when the resulting GtkWindow configuration
     * is issued.
     * For example, if new widgets are added after the GtkWindow configuration
     * and cause the titlebar widget to grow in height, this will result in a
     * window content smaller that specified by gtk_window_resize() and not
     * a larger window.
     * @param width width in pixels to resize the window to
     * @param height height in pixels to resize the window to
     */
    resize(width: number, height: number): void
    /**
     * Determines whether a resize grip is visible for the specified window.
     */
    resize_grip_is_visible(): boolean
    /**
     * Like gtk_window_resize(), but `width` and `height` are interpreted
     * in terms of the base size and increment set with
     * gtk_window_set_geometry_hints.
     * @param width width in resize increments to resize the window to
     * @param height height in resize increments to resize the window to
     */
    resize_to_geometry(width: number, height: number): void
    /**
     * Windows may set a hint asking the desktop environment not to receive
     * the input focus. This function sets this hint.
     * @param setting %TRUE to let this window receive input focus
     */
    set_accept_focus(setting: boolean): void
    /**
     * Sets or unsets the #GtkApplication associated with the window.
     * 
     * The application will be kept alive for at least as long as it has any windows
     * associated with it (see g_application_hold() for a way to keep it alive
     * without windows).
     * 
     * Normally, the connection between the application and the window will remain
     * until the window is destroyed, but you can explicitly remove it by setting
     * the `application` to %NULL.
     * 
     * This is equivalent to calling gtk_application_remove_window() and/or
     * gtk_application_add_window() on the old/new applications as relevant.
     * @param application a #GtkApplication, or %NULL to unset
     */
    set_application(application?: Gtk.Application | null): void
    /**
     * Marks `window` as attached to `attach_widget`. This creates a logical binding
     * between the window and the widget it belongs to, which is used by GTK+ to
     * propagate information such as styling or accessibility to `window` as if it
     * was a children of `attach_widget`.
     * 
     * Examples of places where specifying this relation is useful are for instance
     * a #GtkMenu created by a #GtkComboBox, a completion popup window
     * created by #GtkEntry or a typeahead search entry created by #GtkTreeView.
     * 
     * Note that this function should not be confused with
     * gtk_window_set_transient_for(), which specifies a window manager relation
     * between two toplevels instead.
     * 
     * Passing %NULL for `attach_widget` detaches the window.
     * @param attach_widget a #GtkWidget, or %NULL
     */
    set_attached_to(attach_widget?: Gtk.Widget | null): void
    /**
     * By default, windows are decorated with a title bar, resize
     * controls, etc.  Some [window managers][gtk-X11-arch]
     * allow GTK+ to disable these decorations, creating a
     * borderless window. If you set the decorated property to %FALSE
     * using this function, GTK+ will do its best to convince the window
     * manager not to decorate the window. Depending on the system, this
     * function may not have any effect when called on a window that is
     * already visible, so you should call it before calling gtk_widget_show().
     * 
     * On Windows, this function always works, since there’s no window manager
     * policy involved.
     * @param setting %TRUE to decorate the window
     */
    set_decorated(setting: boolean): void
    /**
     * The default widget is the widget that’s activated when the user
     * presses Enter in a dialog (for example). This function sets or
     * unsets the default widget for a #GtkWindow. When setting (rather
     * than unsetting) the default widget it’s generally easier to call
     * gtk_widget_grab_default() on the widget. Before making a widget
     * the default widget, you must call gtk_widget_set_can_default() on
     * the widget you’d like to make the default.
     * @param default_widget widget to be the default, or %NULL     to unset the default widget for the toplevel
     */
    set_default(default_widget?: Gtk.Widget | null): void
    /**
     * Like gtk_window_set_default_size(), but `width` and `height` are interpreted
     * in terms of the base size and increment set with
     * gtk_window_set_geometry_hints.
     * @param width width in resize increments, or -1 to unset the default width
     * @param height height in resize increments, or -1 to unset the default height
     */
    set_default_geometry(width: number, height: number): void
    /**
     * Sets the default size of a window. If the window’s “natural” size
     * (its size request) is larger than the default, the default will be
     * ignored. More generally, if the default size does not obey the
     * geometry hints for the window (gtk_window_set_geometry_hints() can
     * be used to set these explicitly), the default size will be clamped
     * to the nearest permitted size.
     * 
     * Unlike gtk_widget_set_size_request(), which sets a size request for
     * a widget and thus would keep users from shrinking the window, this
     * function only sets the initial size, just as if the user had
     * resized the window themselves. Users can still shrink the window
     * again as they normally would. Setting a default size of -1 means to
     * use the “natural” default size (the size request of the window).
     * 
     * For more control over a window’s initial size and how resizing works,
     * investigate gtk_window_set_geometry_hints().
     * 
     * For some uses, gtk_window_resize() is a more appropriate function.
     * gtk_window_resize() changes the current size of the window, rather
     * than the size to be used on initial display. gtk_window_resize() always
     * affects the window itself, not the geometry widget.
     * 
     * The default size of a window only affects the first time a window is
     * shown; if a window is hidden and re-shown, it will remember the size
     * it had prior to hiding, rather than using the default size.
     * 
     * Windows can’t actually be 0x0 in size, they must be at least 1x1, but
     * passing 0 for `width` and `height` is OK, resulting in a 1x1 default size.
     * 
     * If you use this function to reestablish a previously saved window size,
     * note that the appropriate size to save is the one returned by
     * gtk_window_get_size(). Using the window allocation directly will not
     * work in all circumstances and can lead to growing or shrinking windows.
     * @param width width in pixels, or -1 to unset the default width
     * @param height height in pixels, or -1 to unset the default height
     */
    set_default_size(width: number, height: number): void
    /**
     * By default, windows have a close button in the window frame. Some
     * [window managers][gtk-X11-arch] allow GTK+ to
     * disable this button. If you set the deletable property to %FALSE
     * using this function, GTK+ will do its best to convince the window
     * manager not to show a close button. Depending on the system, this
     * function may not have any effect when called on a window that is
     * already visible, so you should call it before calling gtk_widget_show().
     * 
     * On Windows, this function always works, since there’s no window manager
     * policy involved.
     * @param setting %TRUE to decorate the window as deletable
     */
    set_deletable(setting: boolean): void
    /**
     * If `setting` is %TRUE, then destroying the transient parent of `window`
     * will also destroy `window` itself. This is useful for dialogs that
     * shouldn’t persist beyond the lifetime of the main window they're
     * associated with, for example.
     * @param setting whether to destroy `window` with its transient parent
     */
    set_destroy_with_parent(setting: boolean): void
    /**
     * If `focus` is not the current focus widget, and is focusable, sets
     * it as the focus widget for the window. If `focus` is %NULL, unsets
     * the focus widget for this window. To set the focus to a particular
     * widget in the toplevel, it is usually more convenient to use
     * gtk_widget_grab_focus() instead of this function.
     * @param focus widget to be the new focus widget, or %NULL to unset   any focus widget for the toplevel window.
     */
    set_focus(focus?: Gtk.Widget | null): void
    /**
     * Windows may set a hint asking the desktop environment not to receive
     * the input focus when the window is mapped.  This function sets this
     * hint.
     * @param setting %TRUE to let this window receive input focus on map
     */
    set_focus_on_map(setting: boolean): void
    /**
     * Sets the #GtkWindow:focus-visible property.
     * @param setting the new value
     */
    set_focus_visible(setting: boolean): void
    /**
     * This function sets up hints about how a window can be resized by
     * the user.  You can set a minimum and maximum size; allowed resize
     * increments (e.g. for xterm, you can only resize by the size of a
     * character); aspect ratios; and more. See the #GdkGeometry struct.
     * @param geometry_widget widget the geometry hints used to be applied to   or %NULL. Since 3.20 this argument is ignored and GTK behaves as if %NULL was   set.
     * @param geometry struct containing geometry information or %NULL
     * @param geom_mask mask indicating which struct fields should be paid attention to
     */
    set_geometry_hints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    /**
     * Window gravity defines the meaning of coordinates passed to
     * gtk_window_move(). See gtk_window_move() and #GdkGravity for
     * more details.
     * 
     * The default window gravity is #GDK_GRAVITY_NORTH_WEST which will
     * typically “do what you mean.”
     * @param gravity window gravity
     */
    set_gravity(gravity: Gdk.Gravity): void
    /**
     * Sets whether `window` has a corner resize grip.
     * 
     * Note that the resize grip is only shown if the window
     * is actually resizable and not maximized. Use
     * gtk_window_resize_grip_is_visible() to find out if the
     * resize grip is currently shown.
     * @param value %TRUE to allow a resize grip
     */
    set_has_resize_grip(value: boolean): void
    /**
     * Tells GTK+ whether to drop its extra reference to the window
     * when gtk_widget_destroy() is called.
     * 
     * This function is only exported for the benefit of language
     * bindings which may need to keep the window alive until their
     * wrapper object is garbage collected. There is no justification
     * for ever calling this function in an application.
     * @param setting the new value
     */
    set_has_user_ref_count(setting: boolean): void
    /**
     * If `setting` is %TRUE, then `window` will request that it’s titlebar
     * should be hidden when maximized.
     * This is useful for windows that don’t convey any information other
     * than the application name in the titlebar, to put the available
     * screen space to better use. If the underlying window system does not
     * support the request, the setting will not have any effect.
     * 
     * Note that custom titlebars set with gtk_window_set_titlebar() are
     * not affected by this. The application is in full control of their
     * content and visibility anyway.
     * @param setting whether to hide the titlebar when `window` is maximized
     */
    set_hide_titlebar_when_maximized(setting: boolean): void
    /**
     * Sets up the icon representing a #GtkWindow. This icon is used when
     * the window is minimized (also known as iconified).  Some window
     * managers or desktop environments may also place it in the window
     * frame, or display it in other contexts. On others, the icon is not
     * used at all, so your mileage may vary.
     * 
     * The icon should be provided in whatever size it was naturally
     * drawn; that is, don’t scale the image before passing it to
     * GTK+. Scaling is postponed until the last minute, when the desired
     * final size is known, to allow best quality.
     * 
     * If you have your icon hand-drawn in multiple sizes, use
     * gtk_window_set_icon_list(). Then the best size will be used.
     * 
     * This function is equivalent to calling gtk_window_set_icon_list()
     * with a 1-element list.
     * 
     * See also gtk_window_set_default_icon_list() to set the icon
     * for all windows in your application in one go.
     * @param icon icon image, or %NULL
     */
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void
    /**
     * Sets the icon for `window`.
     * Warns on failure if `err` is %NULL.
     * 
     * This function is equivalent to calling gtk_window_set_icon()
     * with a pixbuf created by loading the image from `filename`.
     * @param filename location of icon file
     */
    set_icon_from_file(filename: string): boolean
    /**
     * Sets up the icon representing a #GtkWindow. The icon is used when
     * the window is minimized (also known as iconified).  Some window
     * managers or desktop environments may also place it in the window
     * frame, or display it in other contexts. On others, the icon is not
     * used at all, so your mileage may vary.
     * 
     * gtk_window_set_icon_list() allows you to pass in the same icon in
     * several hand-drawn sizes. The list should contain the natural sizes
     * your icon is available in; that is, don’t scale the image before
     * passing it to GTK+. Scaling is postponed until the last minute,
     * when the desired final size is known, to allow best quality.
     * 
     * By passing several sizes, you may improve the final image quality
     * of the icon, by reducing or eliminating automatic image scaling.
     * 
     * Recommended sizes to provide: 16x16, 32x32, 48x48 at minimum, and
     * larger images (64x64, 128x128) if you have them.
     * 
     * See also gtk_window_set_default_icon_list() to set the icon
     * for all windows in your application in one go.
     * 
     * Note that transient windows (those who have been set transient for another
     * window using gtk_window_set_transient_for()) will inherit their
     * icon from their transient parent. So there’s no need to explicitly
     * set the icon on transient windows.
     * @param list list of #GdkPixbuf
     */
    set_icon_list(list: GdkPixbuf.Pixbuf[]): void
    /**
     * Sets the icon for the window from a named themed icon.
     * See the docs for #GtkIconTheme for more details.
     * On some platforms, the window icon is not used at all.
     * 
     * Note that this has nothing to do with the WM_ICON_NAME
     * property which is mentioned in the ICCCM.
     * @param name the name of the themed icon
     */
    set_icon_name(name?: string | null): void
    /**
     * Asks to keep `window` above, so that it stays on top. Note that
     * you shouldn’t assume the window is definitely above afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could not keep it above,
     * and not all window managers support keeping windows above. But
     * normally the window will end kept above. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be kept above when it appears onscreen
     * initially.
     * 
     * You can track the above state via the “window-state-event” signal
     * on #GtkWidget.
     * 
     * Note that, according to the
     * [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec),
     * the above state is mainly meant for user preferences and should not
     * be used by applications e.g. for drawing attention to their
     * dialogs.
     * @param setting whether to keep `window` above other windows
     */
    set_keep_above(setting: boolean): void
    /**
     * Asks to keep `window` below, so that it stays in bottom. Note that
     * you shouldn’t assume the window is definitely below afterward,
     * because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could not keep it below,
     * and not all window managers support putting windows below. But
     * normally the window will be kept below. Just don’t write code
     * that crashes if not.
     * 
     * It’s permitted to call this function before showing a window,
     * in which case the window will be kept below when it appears onscreen
     * initially.
     * 
     * You can track the below state via the “window-state-event” signal
     * on #GtkWidget.
     * 
     * Note that, according to the
     * [Extended Window Manager Hints Specification](http://www.freedesktop.org/Standards/wm-spec),
     * the above state is mainly meant for user preferences and should not
     * be used by applications e.g. for drawing attention to their
     * dialogs.
     * @param setting whether to keep `window` below other windows
     */
    set_keep_below(setting: boolean): void
    /**
     * Sets the mnemonic modifier for this window.
     * @param modifier the modifier mask used to activate               mnemonics on this window.
     */
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void
    /**
     * Sets the #GtkWindow:mnemonics-visible property.
     * @param setting the new value
     */
    set_mnemonics_visible(setting: boolean): void
    /**
     * Sets a window modal or non-modal. Modal windows prevent interaction
     * with other windows in the same application. To keep modal dialogs
     * on top of main application windows, use
     * gtk_window_set_transient_for() to make the dialog transient for the
     * parent; most [window managers][gtk-X11-arch]
     * will then disallow lowering the dialog below the parent.
     * @param modal whether the window is modal
     */
    set_modal(modal: boolean): void
    /**
     * Request the windowing system to make `window` partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.) On X11
     * this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always.
     * 
     * Note that setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * Sets a position constraint for this window. If the old or new
     * constraint is %GTK_WIN_POS_CENTER_ALWAYS, this will also cause
     * the window to be repositioned to satisfy the new constraint.
     * @param position a position constraint.
     */
    set_position(position: Gtk.WindowPosition): void
    /**
     * Sets whether the user can resize a window. Windows are user resizable
     * by default.
     * @param resizable %TRUE if the user can resize this window
     */
    set_resizable(resizable: boolean): void
    /**
     * This function is only useful on X11, not with other GTK+ targets.
     * 
     * In combination with the window title, the window role allows a
     * [window manager][gtk-X11-arch] to identify "the
     * same" window when an application is restarted. So for example you
     * might set the “toolbox” role on your app’s toolbox window, so that
     * when the user restarts their session, the window manager can put
     * the toolbox back in the same place.
     * 
     * If a window already has a unique title, you don’t need to set the
     * role, since the WM can use the title to identify the window when
     * restoring the session.
     * @param role unique identifier for the window to be used when restoring a session
     */
    set_role(role: string): void
    /**
     * Sets the #GdkScreen where the `window` is displayed; if
     * the window is already mapped, it will be unmapped, and
     * then remapped on the new screen.
     * @param screen a #GdkScreen.
     */
    set_screen(screen: Gdk.Screen): void
    /**
     * Windows may set a hint asking the desktop environment not to display
     * the window in the pager. This function sets this hint.
     * (A "pager" is any desktop navigation tool such as a workspace
     * switcher that displays a thumbnail representation of the windows
     * on the screen.)
     * @param setting %TRUE to keep this window from appearing in the pager
     */
    set_skip_pager_hint(setting: boolean): void
    /**
     * Windows may set a hint asking the desktop environment not to display
     * the window in the task bar. This function sets this hint.
     * @param setting %TRUE to keep this window from appearing in the task bar
     */
    set_skip_taskbar_hint(setting: boolean): void
    /**
     * Startup notification identifiers are used by desktop environment to
     * track application startup, to provide user feedback and other
     * features. This function changes the corresponding property on the
     * underlying GdkWindow. Normally, startup identifier is managed
     * automatically and you should only use this function in special cases
     * like transferring focus from other processes. You should use this
     * function before calling gtk_window_present() or any equivalent
     * function generating a window map event.
     * 
     * This function is only useful on X11, not with other GTK+ targets.
     * @param startup_id a string with startup-notification identifier
     */
    set_startup_id(startup_id: string): void
    /**
     * Sets the title of the #GtkWindow. The title of a window will be
     * displayed in its title bar; on the X Window System, the title bar
     * is rendered by the [window manager][gtk-X11-arch],
     * so exactly how the title appears to users may vary
     * according to a user’s exact configuration. The title should help a
     * user distinguish this window from other windows they may have
     * open. A good title might include the application name and current
     * document filename, for example.
     * @param title title of the window
     */
    set_title(title: string): void
    /**
     * Sets a custom titlebar for `window`.
     * 
     * A typical widget used here is #GtkHeaderBar, as it provides various features
     * expected of a titlebar while allowing the addition of child widgets to it.
     * 
     * If you set a custom titlebar, GTK+ will do its best to convince
     * the window manager not to put its own titlebar on the window.
     * Depending on the system, this function may not work for a window
     * that is already visible, so you set the titlebar before calling
     * gtk_widget_show().
     * @param titlebar the widget to use as titlebar
     */
    set_titlebar(titlebar?: Gtk.Widget | null): void
    /**
     * Dialog windows should be set transient for the main application
     * window they were spawned from. This allows
     * [window managers][gtk-X11-arch] to e.g. keep the
     * dialog on top of the main window, or center the dialog over the
     * main window. gtk_dialog_new_with_buttons() and other convenience
     * functions in GTK+ will sometimes call
     * gtk_window_set_transient_for() on your behalf.
     * 
     * Passing %NULL for `parent` unsets the current transient window.
     * 
     * On Wayland, this function can also be used to attach a new
     * #GTK_WINDOW_POPUP to a #GTK_WINDOW_TOPLEVEL parent already mapped
     * on screen so that the #GTK_WINDOW_POPUP will be created as a
     * subsurface-based window #GDK_WINDOW_SUBSURFACE which can be
     * positioned at will relatively to the #GTK_WINDOW_TOPLEVEL surface.
     * 
     * On Windows, this function puts the child window on top of the parent,
     * much as the window manager would have done on X.
     * @param parent parent window, or %NULL
     */
    set_transient_for(parent?: Gtk.Window | null): void
    /**
     * By setting the type hint for the window, you allow the window
     * manager to decorate and handle the window in a way which is
     * suitable to the function of the window in your application.
     * 
     * This function should be called before the window becomes visible.
     * 
     * gtk_dialog_new_with_buttons() and other convenience functions in GTK+
     * will sometimes call gtk_window_set_type_hint() on your behalf.
     * @param hint the window type
     */
    set_type_hint(hint: Gdk.WindowTypeHint): void
    /**
     * Windows may set a hint asking the desktop environment to draw
     * the users attention to the window. This function sets this hint.
     * @param setting %TRUE to mark this window as urgent
     */
    set_urgency_hint(setting: boolean): void
    /**
     * Don’t use this function. It sets the X Window System “class” and
     * “name” hints for a window.  According to the ICCCM, you should
     * always set these to the same value for all windows in an
     * application, and GTK+ sets them to that value by default, so calling
     * this function is sort of pointless. However, you may want to call
     * gtk_window_set_role() on each window in your application, for the
     * benefit of the session manager. Setting the role allows the window
     * manager to restore window positions when loading a saved session.
     * @param wmclass_name window name hint
     * @param wmclass_class window class hint
     */
    set_wmclass(wmclass_name: string, wmclass_class: string): void
    /**
     * Asks to stick `window,` which means that it will appear on all user
     * desktops. Note that you shouldn’t assume the window is definitely
     * stuck afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch] could unstick it
     * again, and some window managers do not support sticking
     * windows. But normally the window will end up stuck. Just don't
     * write code that crashes if not.
     * 
     * It’s permitted to call this function before showing a window.
     * 
     * You can track stickiness via the “window-state-event” signal
     * on #GtkWidget.
     */
    stick(): void
    /**
     * Asks to toggle off the fullscreen state for `window`. Note that you
     * shouldn’t assume the window is definitely not full screen
     * afterward, because other entities (e.g. the user or
     * [window manager][gtk-X11-arch]) could fullscreen it
     * again, and not all window managers honor requests to unfullscreen
     * windows. But normally the window will end up restored to its normal
     * state. Just don’t write code that crashes if not.
     * 
     * You can track the fullscreen state via the “window-state-event” signal
     * on #GtkWidget.
     */
    unfullscreen(): void
    /**
     * Asks to unmaximize `window`. Note that you shouldn’t assume the
     * window is definitely unmaximized afterward, because other entities
     * (e.g. the user or [window manager][gtk-X11-arch])
     * could maximize it again, and not all window
     * managers honor requests to unmaximize. But normally the window will
     * end up unmaximized. Just don’t write code that crashes if not.
     * 
     * You can track maximization via the “window-state-event” signal
     * on #GtkWidget.
     */
    unmaximize(): void
    /**
     * Asks to unstick `window,` which means that it will appear on only
     * one of the user’s desktops. Note that you shouldn’t assume the
     * window is definitely unstuck afterward, because other entities
     * (e.g. the user or [window manager][gtk-X11-arch]) could
     * stick it again. But normally the window will
     * end up unstuck. Just don’t write code that crashes if not.
     * 
     * You can track stickiness via the “window-state-event” signal
     * on #GtkWidget.
     */
    unstick(): void
    /* Methods of Gtk-3.0.Gtk.Bin */
    /**
     * Gets the child of the #GtkBin, or %NULL if the bin contains
     * no child widget. The returned widget does not have a reference
     * added, so you do not need to unref it.
     */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    check_resize(): void
    /**
     * Gets the value of a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to get
     * @param value a location to return the value
     */
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] specified by
     * `pspec` on the child.
     * 
     * This is an analogue of g_object_notify_by_pspec() for child properties.
     * @param child the child widget
     * @param pspec the #GParamSpec of a child property instealled on     the class of `container`
     */
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    /**
     * Sets a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to set
     * @param value the value to set the property to
     */
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    child_type(): GObject.Type
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param callback a callback
     */
    forall(callback: Gtk.Callback): void
    /**
     * Invokes `callback` on each non-internal child of `container`.
     * See gtk_container_forall() for details on what constitutes
     * an “internal” child. For all practical purposes, this function
     * should iterate over precisely those child widgets that were
     * added to the container by the application with explicit add()
     * calls.
     * 
     * It is permissible to remove the child from the `callback` handler.
     * 
     * Most applications should use gtk_container_foreach(),
     * rather than gtk_container_forall().
     * @param callback a callback
     */
    foreach(callback: Gtk.Callback): void
    /**
     * Retrieves the border width of the container. See
     * gtk_container_set_border_width().
     */
    get_border_width(): number
    /**
     * Returns the container’s non-internal children. See
     * gtk_container_forall() for details on what constitutes an "internal" child.
     */
    get_children(): Gtk.Widget[]
    /**
     * Retrieves the focus chain of the container, if one has been
     * set explicitly. If no focus chain has been explicitly
     * set, GTK+ computes the focus chain based on the positions
     * of the children. In that case, GTK+ stores %NULL in
     * `focusable_widgets` and returns %FALSE.
     */
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    /**
     * Returns the current focus child widget inside `container`. This is not the
     * currently focused widget. That can be obtained by calling
     * gtk_window_get_focus().
     */
    get_focus_child(): Gtk.Widget | null
    /**
     * Retrieves the horizontal focus adjustment for the container. See
     * gtk_container_set_focus_hadjustment ().
     */
    get_focus_hadjustment(): Gtk.Adjustment | null
    /**
     * Retrieves the vertical focus adjustment for the container. See
     * gtk_container_set_focus_vadjustment().
     */
    get_focus_vadjustment(): Gtk.Adjustment | null
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Returns the resize mode for the container. See
     * gtk_container_set_resize_mode ().
     */
    get_resize_mode(): Gtk.ResizeMode
    /**
     * When a container receives a call to the draw function, it must send
     * synthetic #GtkWidget::draw calls to all children that don’t have their
     * own #GdkWindows. This function provides a convenient way of doing this.
     * A container, when it receives a call to its #GtkWidget::draw function,
     * calls gtk_container_propagate_draw() once for each child, passing in
     * the `cr` the container received.
     * 
     * gtk_container_propagate_draw() takes care of translating the origin of `cr,`
     * and deciding whether the draw needs to be sent to the child. It is a
     * convenient and optimized way of getting the same effect as calling
     * gtk_widget_draw() on the child directly.
     * 
     * In most cases, a container can simply either inherit the
     * #GtkWidget::draw implementation from #GtkContainer, or do some drawing
     * and then chain to the ::draw implementation from #GtkContainer.
     * @param child a child of `container`
     * @param cr Cairo context as passed to the container. If you want to use `cr`   in container’s draw function, consider using cairo_save() and   cairo_restore() before calling this function.
     */
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    resize_children(): void
    /**
     * Sets the border width of the container.
     * 
     * The border width of a container is the amount of space to leave
     * around the outside of the container. The only exception to this is
     * #GtkWindow; because toplevel windows can’t leave space outside,
     * they leave the space inside. The border is added on all sides of
     * the container. To add space to only one side, use a specific
     * #GtkWidget:margin property on the child widget, for example
     * #GtkWidget:margin-top.
     * @param border_width amount of blank space to leave outside   the container. Valid values are in the range 0-65535 pixels.
     */
    set_border_width(border_width: number): void
    /**
     * Sets a focus chain, overriding the one computed automatically by GTK+.
     * 
     * In principle each widget in the chain should be a descendant of the
     * container, but this is not enforced by this method, since it’s allowed
     * to set the focus chain before you pack the widgets, or have a widget
     * in the chain that isn’t always packed. The necessary checks are done
     * when the focus chain is actually traversed.
     * @param focusable_widgets      the new focus chain
     */
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a child
     * of the container is focused, the adjustment is scrolled to show that
     * widget. This function sets the horizontal alignment.
     * See gtk_scrolled_window_get_hadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_vadjustment() for setting
     * the vertical adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus is   moved among the descendents of `container`
     */
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a
     * child of the container is focused, the adjustment is scrolled to
     * show that widget. This function sets the vertical alignment. See
     * gtk_scrolled_window_get_vadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_hadjustment() for setting
     * the horizontal adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus   is moved among the descendents of `container`
     */
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Sets the `reallocate_redraws` flag of the container to the given value.
     * 
     * Containers requesting reallocation redraws get automatically
     * redrawn if any of their children changed allocation.
     * @param needs_redraws the new value for the container’s `reallocate_redraws` flag
     */
    set_reallocate_redraws(needs_redraws: boolean): void
    /**
     * Sets the resize mode for the container.
     * 
     * The resize mode of a container determines whether a resize request
     * will be passed to the container’s parent, queued for later execution
     * or executed immediately.
     * @param resize_mode the new resize mode
     */
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    /**
     * Removes a focus chain explicitly set with gtk_container_set_focus_chain().
     */
    unset_focus_chain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget’s toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accel_signal widget signal to emit on accelerator activation
     * @param accel_group accel group for this widget, added to its toplevel
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    /**
     * Adds the device events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_device_events() for details.
     * @param device a #GdkDevice
     * @param events an event mask, see #GdkEventMask
     */
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() and the
     * [input handling overview][event-masks] for details.
     * @param events an event mask, see #GdkEventMask
     */
    add_events(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Queues an animation frame update and adds a callback to be called
     * before each frame. Until the tick callback is removed, it will be
     * called frequently (usually at the frame rate of the output device
     * or as quickly as the application can be repainted, whichever is
     * slower). For this reason, is most suitable for handling graphics
     * that change every frame or every few frames. The tick callback does
     * not automatically imply a relayout or repaint. If you want a
     * repaint or relayout, and aren’t changing widget properties that
     * would trigger that (for example, changing the text of a #GtkLabel),
     * then you will have to call gtk_widget_queue_resize() or
     * gtk_widget_queue_draw_area() yourself.
     * 
     * gdk_frame_clock_get_frame_time() should generally be used for timing
     * continuous animations and
     * gdk_frame_timings_get_predicted_presentation_time() if you are
     * trying to display isolated frames at particular times.
     * 
     * This is a more convenient alternative to connecting directly to the
     * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
     * have to worry about when a #GdkFrameClock is assigned to a widget.
     * @param callback function to call for updating animations
     */
    add_tick_callback(callback: Gtk.TickCallback): number
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    can_activate_accel(signal_id: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you’d use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don’t modify the current focus location.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget’s type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * Computes whether a container should give this widget extra space
     * when possible. Containers should check this, rather than
     * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
     * 
     * This function already checks whether the widget is visible, so
     * visibility does not need to be checked separately. Non-visible
     * widgets are not expanded.
     * 
     * The computed expand value uses either the expand setting explicitly
     * set on the widget itself, or, if none has been explicitly set,
     * the widget may expand if some of its children do.
     * @param orientation expand direction
     */
    compute_expand(orientation: Gtk.Orientation): boolean
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font options, font description, and base direction for drawing
     * text for this widget. See also gtk_widget_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, you need
     * to re-create it when the widget #PangoContext is replaced.
     * This can be tracked by using the #GtkWidget::screen-changed signal
     * on the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    create_pango_layout(text?: string | null): Pango.Layout
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It’s intended to be used as a callback connected to the
     * “destroy” signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widget_pointer address of a variable that contains `widget`
     */
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    /**
     * Returns %TRUE if `device` has been shadowed by a GTK+
     * device grab on another widget, so it would stop sending
     * events to `widget`. This may be used in the
     * #GtkWidget::grab-notify signal to check for specific
     * devices. See gtk_device_grab_add().
     * @param device a #GdkDevice
     */
    device_is_shadowed(device: Gdk.Device): boolean
    /**
     * This function is equivalent to gtk_drag_begin_with_coordinates(),
     * passing -1, -1 as coordinates.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     */
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    /**
     * Initiates a drag on the source side. The function only needs to be used
     * when the application is starting drags itself, and is not needed when
     * gtk_drag_source_set() is used.
     * 
     * The `event` is used to retrieve the timestamp that will be used internally to
     * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
     * However, you should try to pass a real event in all cases, since that can be
     * used to get information about the drag.
     * 
     * Generally there are three cases when you want to start a drag by hand by
     * calling this function:
     * 
     * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
     * immediately when the user presses the mouse button.  Pass the `event`
     * that you have in your #GtkWidget::button-press-event handler.
     * 
     * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
     * when the mouse moves past a certain threshold distance after a button-press.
     * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
     * 
     * 3. During a timeout handler, if you want to start a drag after the mouse
     * button is held down for some time.  Try to save the last event that you got
     * from the mouse, using gdk_event_copy(), and pass it to this function
     * (remember to free the event with gdk_event_free() when you are done).
     * If you really cannot pass a real event, pass %NULL instead.
     * @param targets The targets (data formats) in which the    source can provide the data
     * @param actions A bitmask of the allowed drag actions for this drag
     * @param button The button the user clicked to start the drag
     * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
     * @param x The initial x coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     * @param y The initial y coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
     */
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    /**
     * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
     * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
     * should trigger the beginning of a drag-and-drop operation.
     * @param start_x X coordinate of start of drag
     * @param start_y Y coordinate of start of drag
     * @param current_x current X coordinate
     * @param current_y current Y coordinate
     */
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    /**
     * Add the image targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag destination. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_dest_set_target_list().
     */
    drag_dest_add_uri_targets(): void
    /**
     * Looks for a match between the supported targets of `context` and the
     * `dest_target_list,` returning the first matching target, otherwise
     * returning %GDK_NONE. `dest_target_list` should usually be the return
     * value from gtk_drag_dest_get_target_list(), but some widgets may
     * have different valid targets for different parts of the widget; in
     * that case, they will have to implement a drag_motion handler that
     * passes the correct target list to this function.
     * @param context drag context
     * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (`widget)`.
     */
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    /**
     * Returns the list of targets this widget can accept from
     * drag-and-drop.
     */
    drag_dest_get_target_list(): Gtk.TargetList | null
    /**
     * Returns whether the widget has been configured to always
     * emit #GtkWidget::drag-motion signals.
     */
    drag_dest_get_track_motion(): boolean
    /**
     * Sets a widget as a potential drop destination, and adds default behaviors.
     * 
     * The default behaviors listed in `flags` have an effect similar
     * to installing default handlers for the widget’s drag-and-drop signals
     * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
     * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
     * sufficient to connect to the widget’s #GtkWidget::drag-data-received
     * signal to get primitive, but consistent drag-and-drop support.
     * 
     * Things become more complicated when you try to preview the dragged data,
     * as described in the documentation for #GtkWidget::drag-motion. The default
     * behaviors described by `flags` make some assumptions, that can conflict
     * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
     * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
     * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
     * Especially the later is dramatic, when your own #GtkWidget::drag-motion
     * handler calls gtk_drag_get_data() to inspect the dragged data.
     * 
     * There’s no way to set a default action here, you can use the
     * #GtkWidget::drag-motion callback for that. Here’s an example which selects
     * the action to use depending on whether the control key is pressed or not:
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkModifierType mask;
     * 
     *   gdk_window_get_pointer (gtk_widget_get_window (widget),
     *                           NULL, NULL, &mask);
     *   if (mask & GDK_CONTROL_MASK)
     *     gdk_drag_status (context, GDK_ACTION_COPY, time);
     *   else
     *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
     * }
     * ```
     * 
     * @param flags which types of default drag behavior to use
     * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this `widget` will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
     * @param actions a bitmask of possible actions for a drop onto this `widget`.
     */
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets this widget as a proxy for drops to another window.
     * @param proxy_window the window to which to forward drag events
     * @param protocol the drag protocol which the `proxy_window` accepts   (You can use gdk_drag_get_protocol() to determine this)
     * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
     */
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    /**
     * Sets the target types that this widget can accept from drag-and-drop.
     * The widget must first be made into a drag destination with
     * gtk_drag_dest_set().
     * @param target_list list of droppable targets, or %NULL for none
     */
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Tells the widget to emit #GtkWidget::drag-motion and
     * #GtkWidget::drag-leave events regardless of the targets and the
     * %GTK_DEST_DEFAULT_MOTION flag.
     * 
     * This may be used when a widget wants to do generic
     * actions regardless of the targets that the source offers.
     * @param track_motion whether to accept all targets
     */
    drag_dest_set_track_motion(track_motion: boolean): void
    /**
     * Clears information about a drop destination set with
     * gtk_drag_dest_set(). The widget will no longer receive
     * notification of drags.
     */
    drag_dest_unset(): void
    /**
     * Gets the data associated with a drag. When the data
     * is received or the retrieval fails, GTK+ will emit a
     * #GtkWidget::drag-data-received signal. Failure of the retrieval
     * is indicated by the length field of the `selection_data`
     * signal parameter being negative. However, when gtk_drag_get_data()
     * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
     * then the widget will not receive notification of failed
     * drops.
     * @param context the drag context
     * @param target the target (form of the data) to retrieve
     * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
     */
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    /**
     * Highlights a widget as a currently hovered drop target.
     * To end the highlight, call gtk_drag_unhighlight().
     * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
     */
    drag_highlight(): void
    /**
     * Add the writable image targets supported by #GtkSelectionData to
     * the target list of the drag source. The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_image_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_image_targets(): void
    /**
     * Add the text targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_text_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_text_targets(): void
    /**
     * Add the URI targets supported by #GtkSelectionData to
     * the target list of the drag source.  The targets
     * are added with `info` = 0. If you need another value,
     * use gtk_target_list_add_uri_targets() and
     * gtk_drag_source_set_target_list().
     */
    drag_source_add_uri_targets(): void
    /**
     * Gets the list of targets this widget can provide for
     * drag-and-drop.
     */
    drag_source_get_target_list(): Gtk.TargetList | null
    /**
     * Sets up a widget so that GTK+ will start a drag operation when the user
     * clicks and drags on the widget. The widget must have a window.
     * @param start_button_mask the bitmask of buttons that can start the drag
     * @param targets the table of targets     that the drag will support, may be %NULL
     * @param actions the bitmask of possible actions for a drag from this widget
     */
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to `icon`. See the docs for #GtkIconTheme for more details.
     * @param icon A #GIcon
     */
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a themed icon. See the docs for #GtkIconTheme for more details.
     * @param icon_name name of icon to use
     */
    drag_source_set_icon_name(icon_name: string): void
    /**
     * Sets the icon that will be used for drags from a particular widget
     * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
     * release it when it is no longer needed.
     * @param pixbuf the #GdkPixbuf for the drag icon
     */
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the icon that will be used for drags from a particular source
     * to a stock icon.
     * @param stock_id the ID of the stock icon to use
     */
    drag_source_set_icon_stock(stock_id: string): void
    /**
     * Changes the target types that this widget offers for drag-and-drop.
     * The widget must first be made into a drag source with
     * gtk_drag_source_set().
     * @param target_list list of draggable targets, or %NULL for none
     */
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    /**
     * Undoes the effects of gtk_drag_source_set().
     */
    drag_source_unset(): void
    /**
     * Removes a highlight set by gtk_drag_highlight() from
     * a widget.
     */
    drag_unhighlight(): void
    /**
     * Draws `widget` to `cr`. The top left corner of the widget will be
     * drawn to the currently set origin point of `cr`.
     * 
     * You should pass a cairo context as `cr` argument that is in an
     * original state. Otherwise the resulting drawing is undefined. For
     * example changing the operator using cairo_set_operator() or the
     * line width using cairo_set_line_width() might have unwanted side
     * effects.
     * You may however change the context’s transform matrix - like with
     * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
     * region with cairo_clip() prior to calling this function. Also, it
     * is fine to modify the context with cairo_save() and
     * cairo_push_group() prior to calling this function.
     * 
     * Note that special-purpose widgets may contain special code for
     * rendering to the screen and might appear differently on screen
     * and when rendered using gtk_widget_draw().
     * @param cr a cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Ensures that `widget` has a style (`widget->`style).
     * 
     * Not a very useful function; most of the time, if you
     * want the style, the widget is realized, and realized
     * widgets are guaranteed to have a style already.
     */
    ensure_style(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    error_bell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freeze_child_notify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
     * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
     * ancestry.
     * 
     * If no action group was found matching `prefix,` then %NULL is returned.
     * @param prefix The “prefix” of the action group.
     */
    get_action_group(prefix: string): Gio.ActionGroup | null
    /**
     * Returns the baseline that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function, and when allocating child
     * widgets in #GtkWidget::size_allocate.
     */
    get_allocated_baseline(): number
    /**
     * Returns the height that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_height(): number
    /**
     * Retrieves the widget’s allocated size.
     * 
     * This function returns the last values passed to
     * gtk_widget_size_allocate_with_baseline(). The value differs from
     * the size returned in gtk_widget_get_allocation() in that functions
     * like gtk_widget_set_halign() can adjust the allocation, but not
     * the value returned by this function.
     * 
     * If a widget is not visible, its allocated size is 0.
     */
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    /**
     * Returns the width that has currently been allocated to `widget`.
     * This function is intended to be used when implementing handlers
     * for the #GtkWidget::draw function.
     */
    get_allocated_width(): number
    /**
     * Retrieves the widget’s allocation.
     * 
     * Note, when implementing a #GtkContainer: a widget’s allocation will
     * be its “adjusted” allocation, that is, the widget’s parent
     * container typically calls gtk_widget_size_allocate() with an
     * allocation, and that allocation is then adjusted (to handle margin
     * and alignment for example) before assignment to the widget.
     * gtk_widget_get_allocation() returns the adjusted allocation that
     * was actually assigned to the widget. The adjusted allocation is
     * guaranteed to be completely contained within the
     * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
     * is guaranteed that its children stay inside the assigned bounds,
     * but not that they have exactly the bounds the container assigned.
     * There is no way to get the original allocation assigned by
     * gtk_widget_size_allocate(), since it isn’t stored; if a container
     * implementation needs that information it will have to track it itself.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
     * the first #GtkBox that’s an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    get_app_paintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    get_can_default(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    get_can_focus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the “size_request” method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     */
    get_child_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Retrieves the widget’s clip area.
     * 
     * The clip area is the area in which all of `widget'`s drawing will
     * happen. Other toolkits call it the bounding box.
     * 
     * Historically, in GTK+ the clip area has been equal to the allocation
     * retrieved via gtk_widget_get_allocation().
     */
    get_clip(): /* clip */ Gtk.Allocation
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Obtains the composite name of a widget.
     */
    get_composite_name(): string
    /**
     * Returns whether `device` can interact with `widget` and its
     * children. See gtk_widget_set_device_enabled().
     * @param device a #GdkDevice
     */
    get_device_enabled(device: Gdk.Device): boolean
    /**
     * Returns the events mask for the widget corresponding to an specific device. These
     * are the events that the widget will receive when `device` operates on it.
     * @param device a #GdkDevice
     */
    get_device_events(device: Gdk.Device): Gdk.EventMask
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    get_double_buffered(): boolean
    /**
     * Returns the event mask (see #GdkEventMask) for the widget. These are the
     * events that the widget will receive.
     * 
     * Note: Internally, the widget event mask will be the logical OR of the event
     * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
     * event mask necessary to cater for every #GtkEventController created for the
     * widget.
     */
    get_events(): number
    /**
     * Returns whether the widget should grab focus when it is clicked with the mouse.
     * See gtk_widget_set_focus_on_click().
     */
    get_focus_on_click(): boolean
    /**
     * Gets the font map that has been set with gtk_widget_set_font_map().
     */
    get_font_map(): Pango.FontMap | null
    /**
     * Returns the #cairo_font_options_t used for Pango rendering. When not set,
     * the defaults font options for the #GdkScreen will be used.
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Obtains the frame clock for a widget. The frame clock is a global
     * “ticker” that can be used to drive animations and repaints.  The
     * most common reason to get the frame clock is to call
     * gdk_frame_clock_get_frame_time(), in order to get a time to use for
     * animating. For example you might record the start of the animation
     * with an initial value from gdk_frame_clock_get_frame_time(), and
     * then update the animation by calling
     * gdk_frame_clock_get_frame_time() again during each repaint.
     * 
     * gdk_frame_clock_request_phase() will result in a new frame on the
     * clock, but won’t necessarily repaint any widgets. To repaint a
     * widget, you have to use gtk_widget_queue_draw() which invalidates
     * the widget (thus scheduling it to receive a draw on the next
     * frame). gtk_widget_queue_draw() will also end up requesting a frame
     * on the appropriate frame clock.
     * 
     * A widget’s frame clock will not change while the widget is
     * mapped. Reparenting a widget (which implies a temporary unmap) can
     * change the widget’s frame clock.
     * 
     * Unrealized widgets do not have a frame clock.
     */
    get_frame_clock(): Gdk.FrameClock | null
    /**
     * Gets the value of the #GtkWidget:halign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
     * alignment.
     */
    get_halign(): Gtk.Align
    /**
     * Returns the current value of the has-tooltip property.  See
     * #GtkWidget:has-tooltip for more information.
     */
    get_has_tooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    get_has_window(): boolean
    /**
     * Gets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Containers should use gtk_widget_compute_expand() rather than
     * this function, to see whether a widget, or any of its children,
     * has the expand flag set. If any child of a widget wants to
     * expand, the parent may ask to expand also.
     * 
     * This function only looks at the widget’s own hexpand flag, rather
     * than computing whether the entire widget tree rooted at this widget
     * wants to expand.
     */
    get_hexpand(): boolean
    /**
     * Gets whether gtk_widget_set_hexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     */
    get_hexpand_set(): boolean
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Gets the value of the #GtkWidget:margin-bottom property.
     */
    get_margin_bottom(): number
    /**
     * Gets the value of the #GtkWidget:margin-end property.
     */
    get_margin_end(): number
    /**
     * Gets the value of the #GtkWidget:margin-left property.
     */
    get_margin_left(): number
    /**
     * Gets the value of the #GtkWidget:margin-right property.
     */
    get_margin_right(): number
    /**
     * Gets the value of the #GtkWidget:margin-start property.
     */
    get_margin_start(): number
    /**
     * Gets the value of the #GtkWidget:margin-top property.
     */
    get_margin_top(): number
    /**
     * Returns the modifier mask the `widget’`s windowing system backend
     * uses for a particular purpose.
     * 
     * See gdk_keymap_get_modifier_mask().
     * @param intent the use case for the modifier mask
     */
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    get_modifier_style(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    get_name(): string
    /**
     * Returns the current value of the #GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all()
     * will affect this widget.
     */
    get_no_show_all(): boolean
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget’s attributes. This can be tracked
     * by using the #GtkWidget::screen-changed signal on the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    get_parent(): Gtk.Widget | null
    /**
     * Gets `widget’`s parent window, or %NULL if it does not have one.
     */
    get_parent_window(): Gdk.Window | null
    /**
     * Returns the #GtkWidgetPath representing `widget,` if the widget
     * is not connected to a toplevel widget, a partial path will be
     * created.
     */
    get_path(): Gtk.WidgetPath
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     */
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves the minimum and natural size of a widget, taking
     * into account the widget’s preference for height-for-width management.
     * 
     * This is used to retrieve a suitable size by container widgets which do
     * not impose any restrictions on the child placement. It can be used
     * to deduce toplevel window and menu sizes as well as child widgets in
     * free-form containers such as GtkLayout.
     * 
     * Handle with care. Note that the natural height of a height-for-width
     * widget will generally be a smaller size than the minimum height, since the required
     * height for the natural width is generally smaller than the required height for
     * the minimum width.
     * 
     * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
     * baseline alignment.
     */
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is always treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    get_receives_default(): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    get_request_mode(): Gtk.SizeRequestMode
    /**
     * Retrieves the widget’s requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget’s requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    get_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    get_root_window(): Gdk.Window
    /**
     * Retrieves the internal scale factor that maps from window coordinates
     * to the actual device pixels. On traditional systems this is 1, on
     * high density outputs, it can be a higher value (typically 2).
     * 
     * See gdk_window_get_scale_factor().
     */
    get_scale_factor(): number
    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used instead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually request, call gtk_widget_get_preferred_size() instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    /**
     * Returns the widget state as a flag set. It is worth mentioning
     * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
     * returned, that is, also based on parent insensitivity, even if
     * `widget` itself is sensitive.
     * 
     * Also note that if you are looking for a way to obtain the
     * #GtkStateFlags to pass to a #GtkStyleContext method, you
     * should look at gtk_style_context_get_state().
     */
    get_state_flags(): Gtk.StateFlags
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    /**
     * Returns the style context associated to `widget`. The returned object is
     * guaranteed to be the same for the lifetime of `widget`.
     */
    get_style_context(): Gtk.StyleContext
    /**
     * Returns %TRUE if `widget` is multiple pointer aware. See
     * gtk_widget_set_support_multidevice() for more information.
     */
    get_support_multidevice(): boolean
    /**
     * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
     * 
     * This will only report children which were previously declared with
     * gtk_widget_class_bind_template_child_full() or one of its
     * variants.
     * 
     * This function is only meant to be called for code which is private to the `widget_type` which
     * declared the child and is meant for language bindings which cannot easily make use
     * of the GObject structure offsets.
     * @param widget_type The #GType to get a template child for
     * @param name The “id” of the child defined in the template XML
     */
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_markup(): string | null
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_text(): string | null
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    get_tooltip_window(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    /**
     * Gets the value of the #GtkWidget:valign property.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
     * children it must use gtk_widget_get_valign_with_baseline(), or
     * `g_object_get (widget, "valign", &value, NULL)`, which will
     * also report the true value.
     */
    get_valign(): Gtk.Align
    /**
     * Gets the value of the #GtkWidget:valign property, including
     * %GTK_ALIGN_BASELINE.
     */
    get_valign_with_baseline(): Gtk.Align
    /**
     * Gets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_get_hexpand() for more detail.
     */
    get_vexpand(): boolean
    /**
     * Gets whether gtk_widget_set_vexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * See gtk_widget_get_hexpand_set() for more detail.
     */
    get_vexpand_set(): boolean
    /**
     * Determines whether the widget is visible. If you want to
     * take into account whether the widget’s parent is also marked as
     * visible, use gtk_widget_is_visible() instead.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    get_visible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    get_window(): Gdk.Window | null
    /**
     * Makes `widget` the current grabbed widget.
     * 
     * This means that interaction with other widgets in the same
     * application is blocked and mouse as well as keyboard events
     * are delivered to this widget.
     * 
     * If `widget` is not sensitive, it is not set as the current
     * grabbed widget and this function does nothing.
     */
    grab_add(): void
    /**
     * Causes `widget` to become the default widget. `widget` must be able to be
     * a default widget; typically you would ensure this yourself
     * by calling gtk_widget_set_can_default() with a %TRUE value.
     * The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them. Note
     * that #GtkEntry widgets require the “activates-default” property
     * set to %TRUE before they activate the default widget when Enter
     * is pressed and the #GtkEntry is focused.
     */
    grab_default(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    grab_focus(): void
    /**
     * Removes the grab from the given widget.
     * 
     * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
     * 
     * If `widget` does not have the grab, this function does nothing.
     */
    grab_remove(): void
    /**
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    has_grab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    has_rc_style(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    has_screen(): boolean
    /**
     * Determines if the widget should show a visible indication that
     * it has the global input focus. This is a convenience function for
     * use in ::draw handlers that takes into account whether focus
     * indication should currently be shown in the toplevel window of
     * `widget`. See gtk_window_get_focus_visible() for more information
     * about focus indication.
     * 
     * To find out if the widget has the global input focus, use
     * gtk_widget_has_focus().
     */
    has_visible_focus(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hide_on_delete(): boolean
    /**
     * Returns whether the widget is currently being destroyed.
     * This information can sometimes be used to avoid doing
     * unnecessary work.
     */
    in_destruction(): boolean
    /**
     * Creates and initializes child widgets defined in templates. This
     * function must be called in the instance initializer for any
     * class which assigned itself a template using gtk_widget_class_set_template()
     * 
     * It is important to call this function in the instance initializer
     * of a #GtkWidget subclass and not in #GObject.constructed() or
     * #GObject.constructor() for two reasons.
     * 
     * One reason is that generally derived widgets will assume that parent
     * class composite widgets have been created in their instance
     * initializers.
     * 
     * Another reason is that when calling g_object_new() on a widget with
     * composite templates, it’s important to build the composite widgets
     * before the construct properties are set. Properties passed to g_object_new()
     * should take precedence over properties set in the private template XML.
     */
    init_template(): void
    /**
     * Sets an input shape for this widget’s GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_region() for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    input_shape_combine_region(region?: cairo.Region | null): void
    /**
     * Inserts `group` into `widget`. Children of `widget` that implement
     * #GtkActionable can then be associated with actions in `group` by
     * setting their “action-name” to
     * `prefix`.`action-name`.
     * 
     * If `group` is %NULL, a previously inserted group for `name` is removed
     * from `widget`.
     * @param name the prefix for actions in `group`
     * @param group a #GActionGroup, or %NULL
     */
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    /**
     * Computes the intersection of a `widget’`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you’re only
     * interested in whether there was an intersection.
     * @param area a rectangle
     */
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget’`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    is_composited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Returns the widget’s effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensitive
     */
    is_sensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget.
     * 
     * Currently only #GtkWindow and #GtkInvisible (and out-of-process
     * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
     * widget.
     */
    is_toplevel(): boolean
    /**
     * Determines whether the widget and all its parents are marked as
     * visible.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See also gtk_widget_get_visible() and gtk_widget_set_visible()
     */
    is_visible(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    list_accel_closures(): Function[]
    /**
     * Retrieves a %NULL-terminated array of strings containing the prefixes of
     * #GActionGroup's available to `widget`.
     */
    list_action_prefixes(): string[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * must call `g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)` first, and then unref all the
     * widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > base color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
     */
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
     * > flag set) draw on their parent container’s window and thus may
     * > not draw any background themselves. This is the case for e.g.
     * > #GtkLabel.
     * >
     * > To modify the background of such widgets, you have to set the
     * > background color on their parent; if you want to set the background
     * > of a rectangular area around a label, try placing the label in
     * > a #GtkEventBox widget and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
     */
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the #GtkWidget
     * cursor-color and secondary-cursor-color
     * style properties.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
     */
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
     */
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.
     * 
     * All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
     */
    modify_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget.
     * 
     * Modifications made using this technique take precedence over
     * style values set via an RC file, however, they will be overridden
     * if a style is explicitly set on the widget using gtk_widget_set_style().
     * The #GtkRcStyle-struct is designed so each field can either be
     * set or unset, so it is possible, using this function, to modify some
     * style values and leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle-struct holding the style modifications
     */
    modify_style(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.
     * 
     * All other style values are left untouched.
     * The text color is the foreground color used along with the
     * base color (see gtk_widget_modify_base()) for widgets such
     * as #GtkEntry and #GtkTextView.
     * See also gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
     */
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color to use for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color().
     * @param state the state for which to set the background color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
     */
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the color to use for a widget.
     * 
     * All other style values are left untouched.
     * 
     * This function does not act recursively. Setting the color of a
     * container does not affect its children. Note that some widgets that
     * you may not think of as containers, for instance #GtkButtons,
     * are actually containers.
     * 
     * This API is mostly meant as a quick way for applications to
     * change a widget appearance. If you are developing a widgets
     * library and intend this change to be themeable, it is better
     * done by setting meaningful CSS classes in your
     * widget/container implementation through gtk_style_context_add_class().
     * 
     * This way, your widget library can install a #GtkCssProvider
     * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
     * to provide a default styling for those widgets that need so, and
     * this theming may fully overridden by the user’s theme.
     * 
     * Note that for complex widgets this may bring in undesired
     * results (such as uniform background color everywhere), in
     * these cases it is better to fully style such widgets through a
     * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
     * priority.
     * @param state the state for which to set the color
     * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
     */
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * cursor-color and secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * 
     * Note that the underlying properties have the #GdkColor type,
     * so the alpha value in `primary` and `secondary` will be ignored.
     * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
     * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
     */
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    /**
     * Sets the font to use for a widget. All other style values are
     * left untouched. See gtk_widget_override_color().
     * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
     */
    override_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Sets a symbolic color for a widget.
     * 
     * All other style values are left untouched.
     * See gtk_widget_override_color() for overriding the foreground
     * or background color.
     * @param name the name of the symbolic color to modify
     * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
     */
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. “GtkButton”) or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget’`s name instead of starting with the name
     * of `widget’`s outermost ancestor.
     */
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * This function is only for use in widget implementations.
     * 
     * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
     * function. Use this function instead of gtk_widget_queue_resize()
     * when the `widget'`s size request didn't change but it wants to
     * reposition its contents.
     * 
     * An example user of this function is gtk_widget_set_halign().
     */
    queue_allocate(): void
    /**
     * Mark `widget` as needing to recompute its expand flags. Call
     * this function when setting legacy expand child properties
     * on the child of a container.
     * 
     * See gtk_widget_compute_expand().
     */
    queue_compute_expand(): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queue_draw(): void
    /**
     * Convenience function that calls gtk_widget_queue_draw_region() on
     * the region created from the given coordinates.
     * 
     * The region here is specified in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that return %TRUE for
     * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
     * `widget->`allocation.y otherwise.
     * 
     * `width` or `height` may be 0, in this case this function does
     * nothing. Negative values for `width` and `height` are not allowed.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_draw_area(x: number, y: number, width: number, height: number): void
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    queue_draw_region(region: cairo.Region): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there’s enough space for the new text.
     * 
     * Note that you cannot call gtk_widget_queue_resize() on a widget
     * from inside its implementation of the GtkWidgetClass::size_allocate
     * virtual method. Calls to gtk_widget_queue_resize() from inside
     * GtkWidgetClass::size_allocate will be silently ignored.
     */
    queue_resize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queue_resize_no_redraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Computes the intersection of a `widget’`s area and `region,` returning
     * the intersection. The result may be empty, use cairo_region_is_empty() to
     * check.
     * @param region a #cairo_region_t, in the same coordinate system as          `widget->`allocation. That is, relative to `widget->`window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of `widget->`window otherwise.
     */
    region_intersect(region: cairo.Region): cairo.Region
    /**
     * Registers a #GdkWindow with the widget and sets it up so that
     * the widget receives events for it. Call gtk_widget_unregister_window()
     * when destroying the window.
     * 
     * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
     * this up. This is now deprecated and you should use gtk_widget_register_window()
     * instead. Old code will keep working as is, although some new features like
     * transparency might not work perfectly.
     * @param window a #GdkWindow
     */
    register_window(window: Gdk.Window): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accel_group accel group for this widget
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     */
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemonic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * Removes a tick callback previously registered with
     * gtk_widget_add_tick_callback().
     * @param id an id returned by gtk_widget_add_tick_callback()
     */
    remove_tick_callback(id: number): void
    /**
     * A convenience function that uses the theme settings for `widget`
     * to look up `stock_id` and render it to a pixbuf. `stock_id` should
     * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
     * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
     * string that identifies the widget or code doing the rendering, so
     * that theme engines can special-case rendering for that widget or
     * code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be
     * freed after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    /**
     * A convenience function that uses the theme engine and style
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     */
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param new_parent a #GtkContainer to move the widget into
     */
    reparent(new_parent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    reset_rc_styles(): void
    /**
     * Updates the style context of `widget` and all descendants
     * by updating its widget path. #GtkContainers may want
     * to use this on a child when reordering it in a way that a different
     * style might apply to it. See also gtk_container_get_path_for_child().
     */
    reset_style(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event on a widget. This function is not normally used
     * directly. The only time it is used is when propagating an expose
     * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
     * and that is normally done using gtk_container_propagate_draw().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    send_expose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it’s not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * 
     * ```c
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = _gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    send_focus_change(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path path used to look up the accelerator
     * @param accel_group a #GtkAccelGroup.
     */
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget’s allocation.  This should not be used
     * directly, but from within a widget’s size_allocate method.
     * 
     * The allocation set should be the “adjusted” or actual
     * allocation. If you’re implementing a #GtkContainer, you want to use
     * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
     * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
     * allocation inside gtk_widget_size_allocate() to create an adjusted
     * allocation.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    set_allocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::draw handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * @param app_paintable %TRUE if the application will paint on the widget
     */
    set_app_paintable(app_paintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param can_default whether or not `widget` can be a default widget.
     */
    set_can_default(can_default: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param can_focus whether or not `widget` can own the input focus.
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param is_visible if %TRUE, `widget` should be mapped along with its parent.
     */
    set_child_visible(is_visible: boolean): void
    /**
     * Sets the widget’s clip.  This must not be used directly,
     * but from within a widget’s size_allocate method.
     * It must be called after gtk_widget_set_allocation() (or after chaining up
     * to the parent class), because that function resets the clip.
     * 
     * The clip set should be the area that `widget` draws on. If `widget` is a
     * #GtkContainer, the area must contain all children's clips.
     * 
     * If this function is not called by `widget` during a ::size-allocate handler,
     * the clip will be set to `widget'`s allocation.
     * @param clip a pointer to a #GtkAllocation to copy from
     */
    set_clip(clip: Gtk.Allocation): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    set_composite_name(name: string): void
    /**
     * Enables or disables a #GdkDevice to interact with `widget`
     * and all its children.
     * 
     * It does so by descending through the #GdkWindow hierarchy
     * and enabling the same mask that is has for core events
     * (i.e. the one that gdk_window_get_events() returns).
     * @param device a #GdkDevice
     * @param enabled whether to enable the device
     */
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    /**
     * Sets the device event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive from `device`. Keep
     * in mind that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_device_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with windowless widgets (which return
     * %FALSE from gtk_widget_get_has_window());
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param device a #GdkDevice
     * @param events event mask
     */
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. “Double buffered” simply means that
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don’t see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don’t flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_draw_frame()).
     * 
     * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
     * then expose events for double-buffered widgets are culled into a single
     * event to the toplevel GDK window. If you now unset double buffering, you
     * will cause a separate rendering pass for every widget. This will likely
     * cause rendering problems - in particular related to stacking - and usually
     * increases rendering times significantly.
     * @param double_buffered %TRUE to double-buffer a widget
     */
    set_double_buffered(double_buffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget’s functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can’t be used with widgets that have no window.
     * (See gtk_widget_get_has_window()).  To get events on those widgets,
     * place them inside a #GtkEventBox and receive events on the event
     * box.
     * @param events event mask
     */
    set_events(events: number): void
    /**
     * Sets whether the widget should grab focus when it is clicked with the mouse.
     * Making mouse clicks not grab focus is useful in places like toolbars where
     * you don’t want the keyboard focus removed from the main area of the
     * application.
     * @param focus_on_click whether the widget should grab focus when clicked with the mouse
     */
    set_focus_on_click(focus_on_click: boolean): void
    /**
     * Sets the font map to use for Pango rendering. When not set, the widget
     * will inherit the font map from its parent.
     * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
     */
    set_font_map(font_map?: Pango.FontMap | null): void
    /**
     * Sets the #cairo_font_options_t used for Pango rendering in this widget.
     * When not set, the default font options for the #GdkScreen will be used.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the horizontal alignment of `widget`.
     * See the #GtkWidget:halign property.
     * @param align the horizontal alignment
     */
    set_halign(align: Gtk.Align): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * #GtkWidget:has-tooltip for more information.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL “window” pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it’s actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in #GtkWidget::realize must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param has_window whether or not `widget` has a window.
     */
    set_has_window(has_window: boolean): void
    /**
     * Sets whether the widget would like any available extra horizontal
     * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Call this function to set the expand flag if you would like your
     * widget to become larger horizontally when the window has extra
     * room.
     * 
     * By default, widgets automatically expand if any of their children
     * want to expand. (To see if a widget will automatically expand given
     * its current children and state, call gtk_widget_compute_expand(). A
     * container can decide how the expandability of children affects the
     * expansion of the container by overriding the compute_expand virtual
     * method on #GtkWidget.).
     * 
     * Setting hexpand explicitly with this function will override the
     * automatic expand behavior.
     * 
     * This function forces the widget to expand or not to expand,
     * regardless of children.  The override occurs because
     * gtk_widget_set_hexpand() sets the hexpand-set property (see
     * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
     * value to be used, rather than looking at children and widget state.
     * @param expand whether to expand
     */
    set_hexpand(expand: boolean): void
    /**
     * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
     * be used.
     * 
     * The hexpand-set property will be set automatically when you call
     * gtk_widget_set_hexpand() to set hexpand, so the most likely
     * reason to use this function would be to unset an explicit expand
     * flag.
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
    set_hexpand_set(set: boolean): void
    /**
     * Marks the widget as being mapped.
     * 
     * This function should only ever be called in a derived widget's
     * “map” or “unmap” implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    set_mapped(mapped: boolean): void
    /**
     * Sets the bottom margin of `widget`.
     * See the #GtkWidget:margin-bottom property.
     * @param margin the bottom margin
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the end margin of `widget`.
     * See the #GtkWidget:margin-end property.
     * @param margin the end margin
     */
    set_margin_end(margin: number): void
    /**
     * Sets the left margin of `widget`.
     * See the #GtkWidget:margin-left property.
     * @param margin the left margin
     */
    set_margin_left(margin: number): void
    /**
     * Sets the right margin of `widget`.
     * See the #GtkWidget:margin-right property.
     * @param margin the right margin
     */
    set_margin_right(margin: number): void
    /**
     * Sets the start margin of `widget`.
     * See the #GtkWidget:margin-start property.
     * @param margin the start margin
     */
    set_margin_start(margin: number): void
    /**
     * Sets the top margin of `widget`.
     * See the #GtkWidget:margin-top property.
     * @param margin the top margin
     */
    set_margin_top(margin: number): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() will affect this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param no_show_all the new value for the “no-show-all” property
     */
    set_no_show_all(no_show_all: boolean): void
    /**
     * Request the `widget` to be rendered partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
     * are clamped to the [0,1] range.).
     * This works on both toplevel widget, and child widgets, although there
     * are some limitations:
     * 
     * For toplevel widgets this depends on the capabilities of the windowing
     * system. On X11 this has any effect only on X screens with a compositing manager
     * running. See gtk_widget_is_composited(). On Windows it should work
     * always, although setting a window’s opacity after the window has been
     * shown causes it to flicker once on Windows.
     * 
     * For child widgets it doesn’t work if any affected widget has a native window, or
     * disables double buffering.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * 
     * For #GtkWindow classes, setting a `parent_window` effects whether
     * the window is a toplevel window or can be embedded into other
     * widgets.
     * 
     * For #GtkWindow classes, this needs to be called before the
     * window is realized.
     * @param parent_window the new parent window.
     */
    set_parent_window(parent_window: Gdk.Window): void
    /**
     * Marks the widget as being realized. This function must only be
     * called after all #GdkWindows for the `widget` have been created
     * and registered.
     * 
     * This function should only ever be called in a derived widget's
     * “realize” or “unrealize” implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    set_realized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * “default”.
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for widgets where gtk_widget_get_has_window() is %FALSE
     * setting this flag to %FALSE turns off all allocation on resizing:
     * the widget will not even redraw if its position changes; this is to
     * allow containers that don’t draw anything to avoid excess
     * invalidations. If you set this flag on a widget with no window that
     * does draw on `widget->`window, you are
     * responsible for invalidating both the old and new allocation of the
     * widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget’s size
     * request will be at least `width` by `height`. You can use this
     * function to force a widget to be larger than it normally would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
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
     * #GtkWidget properties margin-left, margin-right, margin-top, and
     * margin-bottom, but it does include pretty much all other padding
     * or border properties set by any subclass of #GtkWidget.
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    set_state(state: Gtk.StateType): void
    /**
     * This function is for use in widget implementations. Turns on flag
     * values in the current widget state (insensitive, prelighted, etc.).
     * 
     * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
     * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
     * direction, use gtk_widget_set_direction().
     * 
     * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
     * will be propagated down to all non-internal children if `widget` is a
     * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
     * down to all #GtkContainer children by different means than turning on the
     * state flag down the hierarchy, both gtk_widget_get_state_flags() and
     * gtk_widget_is_sensitive() will make use of these.
     * @param flags State flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style?: Gtk.Style | null): void
    /**
     * Enables or disables multiple pointer awareness. If this setting is %TRUE,
     * `widget` will start receiving multiple, per device enter/leave events. Note
     * that if custom #GdkWindows are created in #GtkWidget::realize,
     * gdk_window_set_support_multidevice() will have to be called manually on them.
     * @param support_multidevice %TRUE to support input from multiple devices.
     */
    set_support_multidevice(support_multidevice: boolean): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the [Pango text markup language][PangoMarkupFormat].
     * 
     * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the #GtkWidget::query-tooltip signal.
     * 
     * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text?: string | null): void
    /**
     * Replaces the default window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * @param custom_window a #GtkWindow, or %NULL
     */
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    /**
     * Sets the vertical alignment of `widget`.
     * See the #GtkWidget:valign property.
     * @param align the vertical alignment
     */
    set_valign(align: Gtk.Align): void
    /**
     * Sets whether the widget would like any available extra vertical
     * space.
     * 
     * See gtk_widget_set_hexpand() for more detail.
     * @param expand whether to expand
     */
    set_vexpand(expand: boolean): void
    /**
     * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
     * be used.
     * 
     * See gtk_widget_set_hexpand_set() for more detail.
     * @param set value for vexpand-set property
     */
    set_vexpand_set(set: boolean): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn’t mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Sets the visual that should be used for by widget and its children for
     * creating #GdkWindows. The visual must be on the same #GdkScreen as
     * returned by gtk_widget_get_screen(), so handling the
     * #GtkWidget::screen-changed signal is necessary.
     * 
     * Setting a new `visual` will not cause `widget` to recreate its windows,
     * so you should call this function before `widget` is realized.
     * @param visual visual to be used or %NULL to unset a previous one
     */
    set_visual(visual?: Gdk.Visual | null): void
    /**
     * Sets a widget’s window. This function should only be used in a
     * widget’s #GtkWidget::realize implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget’s init() function.
     * 
     * Note that this function does not add any reference to `window`.
     * @param window a #GdkWindow
     */
    set_window(window: Gdk.Window): void
    /**
     * Sets a shape for this widget’s GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_region()
     * for more information.
     * @param region shape to be added, or %NULL to remove an existing shape
     */
    shape_combine_region(region?: cairo.Region | null): void
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    show_all(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    show_now(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size,
     * position and (optionally) baseline to their child widgets.
     * 
     * In this function, the allocation and baseline may be adjusted. It
     * will be forced to a 1x1 minimum size, and the
     * adjust_size_allocation virtual and adjust_baseline_allocation
     * methods on the child will be used to adjust the allocation and
     * baseline. Standard adjustments include removing the widget's
     * margins, and applying the widget’s #GtkWidget:halign and
     * #GtkWidget:valign properties.
     * 
     * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
     * baseline argument is ignored and -1 is used instead.
     * @param allocation position and size to be allocated to `widget`
     * @param baseline The baseline of the child, or -1
     */
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     */
    size_request(): /* requisition */ Gtk.Requisition
    /**
     * This function attaches the widget’s #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * |[
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * ```
     * 
     * 
     * and should only ever be called in a derived widget’s “realize”
     * implementation which does not chain up to its parent class'
     * “realize” implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    style_attach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param property_name the name of a style property
     * @param value location to return the property value
     */
    style_get_property(property_name: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thaw_child_notify(): void
    /**
     * Translate coordinates relative to `src_widget’`s allocation to coordinates
     * relative to `dest_widget’`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param dest_widget a #GtkWidget
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    trigger_tooltip_query(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Unregisters a #GdkWindow from the widget that was previously set up with
     * gtk_widget_register_window(). You need to call this when the window is
     * no longer used by the widget, such as when you destroy it.
     * @param window a #GdkWindow
     */
    unregister_window(window: Gdk.Window): void
    /**
     * This function is for use in widget implementations. Turns off flag
     * values for the current widget state (insensitive, prelighted, etc.).
     * See gtk_widget_set_state_flags().
     * @param flags State flags to turn off
     */
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
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
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    set_name(name: string): void
    /* Virtual methods of EpcUi-1.0.EpcUi.ProgressWindow */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a “constructor” has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under `<child>`.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * [GtkBuilder UI definition][BUILDER-UI].
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    /**
     * If `focus` is not the current focus widget, and is focusable, sets
     * it as the focus widget for the window. If `focus` is %NULL, unsets
     * the focus widget for this window. To set the focus to a particular
     * widget in the toplevel, it is usually more convenient to use
     * gtk_widget_grab_focus() instead of this function.
     * @param focus widget to be the new focus widget, or %NULL to unset   any focus widget for the toplevel window.
     */
    vfunc_set_focus(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    /**
     * Invokes `callback` on each direct child of `container,` including
     * children that are considered “internal” (implementation details
     * of the container). “Internal” children generally weren’t added
     * by the user of the container, but were added by the container
     * implementation itself.
     * 
     * Most applications should use gtk_container_foreach(), rather
     * than gtk_container_forall().
     * @param include_internals 
     * @param callback a callback
     */
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Returns a newly created widget path representing all the widget hierarchy
     * from the toplevel down to and including `child`.
     * @param child a child of `container`
     */
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manually set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn’t overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    vfunc_can_activate_accel(signal_id: number): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     */
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don’t use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don’t synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If accessibility support is not available, this #AtkObject
     * instance may be a no-op. Likewise, if no class-specific #AtkObject
     * implementation is available for the widget instance in question,
     * it will inherit an #AtkObject implementation from the first ancestor
     * class for which such an implementation is defined.
     * 
     * The documentation of the
     * [ATK](http://developer.gnome.org/atk/stable/)
     * library contains more information about accessible objects and their uses.
     */
    vfunc_get_accessible(): Atk.Object
    /**
     * Retrieves a widget’s initial minimum and natural height.
     * 
     * This call is specific to width-for-height requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
     * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
     * that no baseline is requested for this widget.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
     * and by any #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation, or -1 if none
     */
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural height if it would be given
     * the specified `width`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param width the width which is available for allocation
     */
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    /**
     * Retrieves a widget’s initial minimum and natural width.
     * 
     * This call is specific to height-for-width requests.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     */
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Retrieves a widget’s minimum and natural width if it would be given
     * the specified `height`.
     * 
     * The returned request will be modified by the
     * GtkWidgetClass::adjust_size_request virtual method and by any
     * #GtkSizeGroups that have been applied. That is, the returned request
     * is the one that should be used for layout, not necessarily the one
     * returned by the widget itself.
     * @param height the height which is available for allocation
     */
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * #GtkBin widgets generally propagate the preference of
     * their child, container widgets need to request something either in
     * context of their children or in context of their allocation
     * capabilities.
     */
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is OK and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget’s toplevel.
     * 
     * The default ::keynav-failed handler returns %FALSE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn’t already.
     */
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Invalidates the area of `widget` defined by `region` by calling
     * gdk_window_invalidate_region() on the widget’s window and all its
     * child windows. Once the main loop becomes idle (after the current
     * batch of events has been processed, roughly), the window will
     * receive expose events for the union of all regions that have been
     * invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * @param region region to draw
     */
    vfunc_queue_draw_region(region: cairo.Region): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget’s parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget’s parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * #GtkWidget::draw. Or simply g_signal_connect () to the
     * #GtkWidget::realize signal.
     */
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    /**
     * Flags a widget to be displayed. Any widget that isn’t shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it’s easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * 
     * In this function, the allocation may be adjusted. It will be forced
     * to a 1x1 minimum size, and the adjust_size_allocation virtual
     * method on the child will be used to adjust the allocation. Standard
     * adjustments include removing the widget’s margins, and applying the
     * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
     * 
     * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
     * instead.
     * @param allocation position and size to be allocated to `widget`
     */
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it’s currently mapped.
     */
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.Window */
    /**
     * The ::activate-default signal is a
     * [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user activates the default widget
     * of `window`.
     */
    connect(sigName: "activate-default", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "activate-default"): void
    /**
     * The ::activate-focus signal is a
     * [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user activates the currently
     * focused widget of `window`.
     */
    connect(sigName: "activate-focus", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "activate-focus"): void
    /**
     * The ::enable-debugging signal is a [keybinding signal][GtkBindingSignal]
     * which gets emitted when the user enables or disables interactive
     * debugging. When `toggle` is %TRUE, interactive debugging is toggled
     * on or off, when it is %FALSE, the debugger will be pointed at the
     * widget under the pointer.
     * 
     * The default bindings for this signal are Ctrl-Shift-I
     * and Ctrl-Shift-D.
     * @param toggle toggle the debugger
     */
    connect(sigName: "enable-debugging", callback: (($obj: ProgressWindow, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: ProgressWindow, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    /**
     * The ::keys-changed signal gets emitted when the set of accelerators
     * or mnemonics that are associated with `window` changes.
     */
    connect(sigName: "keys-changed", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "keys-changed"): void
    /**
     * This signal is emitted whenever the currently focused widget in
     * this window changes.
     * @param widget the newly focused widget (or %NULL for no focus)
     */
    connect(sigName: "set-focus", callback: (($obj: ProgressWindow, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: ProgressWindow, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: ProgressWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: (($obj: ProgressWindow, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: ProgressWindow, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: (($obj: ProgressWindow, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: ProgressWindow, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signal_id the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: (($obj: ProgressWindow, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: ProgressWindow, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    /**
     * The ::child-notify signal is emitted for each
     * [child property][child-properties]  that has
     * changed on an object. The signal's detail holds the property name.
     * @param child_property the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: (($obj: ProgressWindow, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: ProgressWindow, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widgets` screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: (($obj: ProgressWindow, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: ProgressWindow, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: (($obj: ProgressWindow, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: ProgressWindow, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * Signals that all holders of a reference to the widget should release
     * the reference that they hold. May result in finalization of the widget
     * if all references are released.
     * 
     * This signal is not suitable for saving widget state.
     */
    connect(sigName: "destroy", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "destroy"): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: ProgressWindow, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ProgressWindow, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with e.g. gtk_drag_source_set_icon_pixbuf().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param context the drag context
     */
    connect(sigName: "drag-begin", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param context the drag context
     */
    connect(sigName: "drag-data-delete", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: (($obj: ProgressWindow, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: ProgressWindow, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and not finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on
     * whether the data was processed successfully.
     * 
     * Applications must create some means to determine why the signal was emitted
     * and therefore whether to call gdk_drag_status() or gtk_drag_finish().
     * 
     * The handler may inspect the selected action with
     * gdk_drag_context_get_selected_action() before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as
     * shown in the following example:
     * 
     * ```c
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       GdkDragAction action;
     * 
     *       // handle data here
     * 
     *       action = gdk_drag_context_get_selected_action (context);
     *       if (action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     * 
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     * 
     *           if (response == GTK_RESPONSE_YES)
     *             action = GDK_ACTION_MOVE;
     *           else
     *             action = GDK_ACTION_COPY;
     *          }
     * 
     *       gtk_drag_finish (context, TRUE, action == GDK_ACTION_MOVE, time);
     *     }
     *   else
     *     gtk_drag_finish (context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param context the drag context
     */
    connect(sigName: "drag-end", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: ProgressWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DnD
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: (($obj: ProgressWindow, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: ProgressWindow, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight().
     * 
     * 
     * Likewise, the #GtkWidget::drag-leave signal is also emitted before the
     * ::drag-drop signal, for instance to allow cleaning up of a preview item
     * created in the #GtkWidget::drag-motion signal handler.
     * @param context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: (($obj: ProgressWindow, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: ProgressWindow, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    /**
     * The ::drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you must pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * 
     * ```c
     * static void
     * drag_motion (GtkWidget      *widget,
     *              GdkDragContext *context,
     *              gint            x,
     *              gint            y,
     *              guint           time)
     * {
     *   GdkAtom target;
     * 
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     * 
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status
     *         = gdk_drag_context_get_suggested_action (context);
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     * 
     *   return TRUE;
     * }
     * 
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     * 
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     * 
     *      // We are getting this data due to a request in drag_motion,
     *      // rather than due to a request in drag_drop, so we are just
     *      // supposed to call gdk_drag_status(), not actually paste in
     *      // the data.
     * 
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context,
     *                         private_data->suggested_action,
     *                         time);
     *    }
     *   else
     *    {
     *      // accept the drop
     *    }
     * }
     * ```
     * 
     * @param context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: ProgressWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * This signal is emitted when a widget is supposed to render itself.
     * The `widget'`s top left corner must be painted at the origin of
     * the passed in context and be sized to the values returned by
     * gtk_widget_get_allocated_width() and
     * gtk_widget_get_allocated_height().
     * 
     * Signal handlers connected to this signal can modify the cairo
     * context passed as `cr` in any way they like and don't need to
     * restore it. The signal emission takes care of calling cairo_save()
     * before and cairo_restore() after invoking the handler.
     * 
     * The signal handler will get a `cr` with a clip region already set to the
     * widget's dirty region, i.e. to the area that needs repainting.  Complicated
     * widgets that want to avoid redrawing themselves completely can get the full
     * extents of the clip region with gdk_cairo_get_clip_rectangle(), or they can
     * get a finer-grained representation of the dirty region with
     * cairo_copy_clip_rectangle_list().
     * @param cr the cairo context to draw to
     */
    connect(sigName: "draw", callback: (($obj: ProgressWindow, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: ProgressWindow, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: ProgressWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: (($obj: ProgressWindow, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: ProgressWindow, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: (($obj: ProgressWindow, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: ProgressWindow, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: (($obj: ProgressWindow, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: ProgressWindow, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: (($obj: ProgressWindow, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: ProgressWindow, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param was_grabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: (($obj: ProgressWindow, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: ProgressWindow, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    /**
     * The ::hide signal is emitted when `widget` is hidden, for example with
     * gtk_widget_hide().
     */
    connect(sigName: "hide", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * “anchored” when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previous_toplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: (($obj: ProgressWindow, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: ProgressWindow, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed. The signal
     * emission will reoccur at the key-repeat rate when the key is kept pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: (($obj: ProgressWindow, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: ProgressWindow, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is released.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: (($obj: ProgressWindow, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: ProgressWindow, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    /**
     * The ::map signal is emitted when `widget` is going to be mapped, that is
     * when the widget is visible (which is controlled with
     * gtk_widget_set_visible()) and all its parents up to the toplevel widget
     * are also visible. Once the map has occurred, #GtkWidget::map-event will
     * be emitted.
     * 
     * The ::map signal can be used to determine whether a widget will be drawn,
     * for instance it can resume an animation that was stopped during the
     * emission of #GtkWidget::unmap.
     */
    connect(sigName: "map", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "map", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: (($obj: ProgressWindow, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: ProgressWindow, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    /**
     * The default handler for this signal activates `widget` if `group_cycling`
     * is %FALSE, or just makes `widget` grab focus if `group_cycling` is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    connect(sigName: "mnemonic-activate", callback: (($obj: ProgressWindow, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ProgressWindow, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ProgressWindow, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param old_parent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: (($obj: ProgressWindow, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ProgressWindow, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See the
     * [Popup Menu Migration Checklist][checklist-popup-menu]
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (($obj: ProgressWindow) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: ProgressWindow) => boolean)): number
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: (($obj: ProgressWindow, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: ProgressWindow, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: (($obj: ProgressWindow, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: ProgressWindow, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the hover timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget'`s left side
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget'`s top
     * @param keyboard_mode %TRUE if the tooltip was triggered using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: (($obj: ProgressWindow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ProgressWindow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    /**
     * The ::realize signal is emitted when `widget` is associated with a
     * #GdkWindow, which means that gtk_widget_realize() has been called or the
     * widget has been mapped (that is, it is going to be drawn).
     */
    connect(sigName: "realize", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previous_screen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: (($obj: ProgressWindow, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: ProgressWindow, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_SCROLL_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: (($obj: ProgressWindow, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: ProgressWindow, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: ProgressWindow, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: ProgressWindow, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: ProgressWindow, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: ProgressWindow, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: ProgressWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    /**
     * The ::show signal is emitted when `widget` is shown, for example with
     * gtk_widget_show().
     */
    connect(sigName: "show", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "show", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: ProgressWindow, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: ProgressWindow, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: ProgressWindow, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: ProgressWindow, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: (($obj: ProgressWindow, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: ProgressWindow, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::state-flags-changed signal is emitted when the widget state
     * changes, see gtk_widget_get_state_flags().
     * @param flags The previous state flags.
     */
    connect(sigName: "state-flags-changed", callback: (($obj: ProgressWindow, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ProgressWindow, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * 
     * Note that this signal is emitted for changes to the deprecated
     * #GtkStyle. To track changes to the #GtkStyleContext associated
     * with a widget, use the #GtkWidget::style-updated signal.
     * @param previous_style the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: (($obj: ProgressWindow, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: ProgressWindow, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    /**
     * The ::style-updated signal is a convenience signal that is emitted when the
     * #GtkStyleContext::changed signal is emitted on the `widget'`s associated
     * #GtkStyleContext as returned by gtk_widget_get_style_context().
     * 
     * Note that style-modifying functions like gtk_widget_override_color() also
     * cause this signal to be emitted.
     */
    connect(sigName: "style-updated", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: ProgressWindow, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: ProgressWindow, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    /**
     * The ::unmap signal is emitted when `widget` is going to be unmapped, which
     * means that either it or any of its parents up to the toplevel widget have
     * been set as hidden.
     * 
     * As ::unmap indicates that a widget will not be shown any longer, it can be
     * used to, for example, stop an animation on the widget.
     */
    connect(sigName: "unmap", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: (($obj: ProgressWindow, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: ProgressWindow, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    /**
     * The ::unrealize signal is emitted when the #GdkWindow associated with
     * `widget` is destroyed, which means that gtk_widget_unrealize() has been
     * called or the widget has been unmapped (that is, it is going to be
     * hidden).
     */
    connect(sigName: "unrealize", callback: (($obj: ProgressWindow) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ProgressWindow) => void)): number
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s
     * window is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: ProgressWindow, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: (($obj: ProgressWindow, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: ProgressWindow, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::message", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attached-to", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-map", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-resize-grip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgency-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-position", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ProgressWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProgressWindow_ConstructProps)
    _init (config?: ProgressWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, parent: Gtk.Window, message: string): ProgressWindow
    /* Function overloads */
    static new(type: Gtk.WindowType): ProgressWindow
    static install(parent: Gtk.Window): void
    static $gtype: GObject.Type
}
abstract class PasswordDialogClass {
    static name: string
}
class PasswordDialogPrivate {
    static name: string
}
abstract class ProgressWindowClass {
    static name: string
}
class ProgressWindowPrivate {
    static name: string
}
}
export default EpcUi;