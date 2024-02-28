/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './pnl-1.0-ambient.d.ts';
import './pnl-1.0-import.d.ts';
/**
 * Pnl-1.0
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Pnl {
    enum AnimationMode {
        LINEAR,
        EASE_IN_QUAD,
        EASE_IN_OUT_QUAD,
        EASE_OUT_QUAD,
        EASE_IN_CUBIC,
        EASE_OUT_CUBIC,
        EASE_IN_OUT_CUBIC,
    }
    enum DockRevealerTransitionType {
        NONE,
        SLIDE_RIGHT,
        SLIDE_LEFT,
        SLIDE_UP,
        SLIDE_DOWN,
    }
    /**
     * pnl major version component (e.g. 1 if %PNL_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * pnl micro version component (e.g. 3 if %PNL_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * pnl minor version component (e.g. 2 if %PNL_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * pnl version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * Creates a new frame source that will execute when the timeout interval
     * for the source has elapsed. The timing will try to synchronize based
     * on the end time of the animation.
     * @param frames_per_sec Target frames per second.
     * @param callback A #GSourceFunc to execute.
     * @returns A source id that can be removed with g_source_remove().
     */
    function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;
    function gtk_bin_draw(widget: Gtk.Widget, cr: cairo.Context): boolean;
    function gtk_bin_size_allocate(widget: Gtk.Widget, allocation: Gtk.Allocation): void;
    function overlay_add_child(self: DockOverlay, child: Gtk.Widget, type: string): void;
    module Animation {
        // Signal callback interfaces

        interface Tick {
            (): void;
        }

        // Constructor properties interface
    }

    class Animation extends GObject.InitiallyUnowned {
        // Own properties of Pnl-1.0.Animation

        /**
         * The "duration" property is the total number of milliseconds that the
         * animation should run before being completed.
         */
        duration: number;
        frame_clock: Gdk.FrameClock;
        frameClock: Gdk.FrameClock;
        /**
         * The "mode" property is the Alpha function that should be used to
         * determine the offset within the animation based on the current
         * offset in the animations duration.
         */
        mode: AnimationMode;
        /**
         * The "target" property is the #GObject that should have its properties
         * animated.
         */
        target: GObject.Object;

        // Owm methods of Pnl-1.0.Animation

        static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;

        // Owm methods of Pnl-1.0.Animation

        /**
         * Adds a new property to the set of properties to be animated during the
         * lifetime of the animation.
         *
         * Side effects: None.
         * @param pspec A #ParamSpec of @target or a #GtkWidget<!-- -->'s parent.
         * @param value The new value for the property at the end of the animation.
         */
        add_property(pspec: GObject.ParamSpec, value: GObject.Value): void;
        /**
         * Start the animation. When the animation stops, the internal reference will
         * be dropped and the animation may be finalized.
         *
         * Side effects: None.
         */
        start(): void;
        /**
         * Stops a running animation. The internal reference to the animation is
         * dropped and therefore may cause the object to finalize.
         *
         * Side effects: None.
         */
        stop(): void;
    }

    module DockBin {
        // Constructor properties interface
    }

    class DockBin extends Gtk.Container {
        // Constructors of Pnl-1.0.DockBin

        static ['new'](): DockBin;

        // Owm methods of Pnl-1.0.DockBin

        get_bottom_edge(): Gtk.Widget;
        /**
         * Gets the center widget for the dock.
         * @returns A #GtkWidget or %NULL.
         */
        get_center_widget(): Gtk.Widget | null;
        get_left_edge(): Gtk.Widget;
        get_right_edge(): Gtk.Widget;
        get_top_edge(): Gtk.Widget;
    }

    module DockBinEdge {
        // Signal callback interfaces

        interface MoveToBinChild {
            (): void;
        }

        // Constructor properties interface
    }

    class DockBinEdge extends DockRevealer {
        // Own properties of Pnl-1.0.DockBinEdge

        edge: Gtk.PositionType;

        // Owm methods of Pnl-1.0.DockBinEdge

        get_edge(): Gtk.PositionType;
        set_edge(bin_edge: Gtk.PositionType): void;
    }

    module DockManager {
        // Signal callback interfaces

        interface RegisterDock {
            (object: Dock): void;
        }

        interface UnregisterDock {
            (object: Dock): void;
        }

        // Constructor properties interface
    }

    class DockManager extends GObject.Object {
        // Constructors of Pnl-1.0.DockManager

        static ['new'](): DockManager;

        // Owm methods of Pnl-1.0.DockManager

        register_dock(dock: Dock): void;
        unregister_dock(dock: Dock): void;
    }

    module DockOverlay {
        // Signal callback interfaces

        interface HideEdges {
            (): void;
        }

        // Constructor properties interface
    }

    class DockOverlay extends Gtk.EventBox {
        // Constructors of Pnl-1.0.DockOverlay

        static ['new'](): DockOverlay;

        // Owm methods of Pnl-1.0.DockOverlay

        get_edge(position: Gtk.PositionType): DockOverlayEdge;
        get_edge_adjustment(position: Gtk.PositionType): Gtk.Adjustment;
    }

    module DockOverlayEdge {
        // Constructor properties interface
    }

    class DockOverlayEdge extends Gtk.Bin {
        // Own properties of Pnl-1.0.DockOverlayEdge

        edge: Gtk.PositionType;
        position: number;

        // Owm methods of Pnl-1.0.DockOverlayEdge

        get_edge(): Gtk.PositionType;
        get_position(): number;
        set_edge(edge: Gtk.PositionType): void;
        set_position(position: number): void;
    }

    module DockPaned {
        // Constructor properties interface
    }

    class DockPaned extends MultiPaned {
        // Constructors of Pnl-1.0.DockPaned

        static ['new'](): DockPaned;

        // Owm methods of Pnl-1.0.DockPaned

        set_child_edge(child_edge: Gtk.PositionType): void;
    }

    module DockRevealer {
        // Constructor properties interface
    }

    /**
     * This widget is a bit like #GtkRevealer with a couple of important
     * differences. First, it only supports a couple transition types
     * (the direction to slide reveal). Additionally, the size of the
     * child allocation will not change during the animation. This is not
     * as generally useful as an upstream GTK+ widget, but is extremely
     * important for the panel case to avoid things looking strange while
     * animating into and out of view.
     */
    class DockRevealer extends Gtk.Bin {
        // Own properties of Pnl-1.0.DockRevealer

        readonly child_revealed: boolean;
        readonly childRevealed: boolean;
        position: number;
        position_set: boolean;
        positionSet: boolean;
        reveal_child: boolean;
        revealChild: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_type: DockRevealerTransitionType;
        transitionType: DockRevealerTransitionType;

        // Constructors of Pnl-1.0.DockRevealer

        static ['new'](): DockRevealer;

        // Owm methods of Pnl-1.0.DockRevealer

        animate_to_position(position: number, transition_duration: number): void;
        get_child_revealed(): boolean;
        get_position(): number;
        get_position_set(): boolean;
        get_reveal_child(): boolean;
        get_transition_duration(): number;
        get_transition_type(): DockRevealerTransitionType;
        set_position(position: number): void;
        set_position_set(position_set: boolean): void;
        set_reveal_child(reveal_child: boolean): void;
        set_transition_duration(transition_duration: number): void;
        set_transition_type(transition_type: DockRevealerTransitionType): void;
    }

    module DockStack {
        // Constructor properties interface
    }

    class DockStack extends Gtk.Box {
        // Own properties of Pnl-1.0.DockStack

        edge: Gtk.PositionType;

        // Constructors of Pnl-1.0.DockStack

        static ['new'](): DockStack;

        // Owm methods of Pnl-1.0.DockStack

        get_edge(): Gtk.PositionType;
        set_edge(edge: Gtk.PositionType): void;
    }

    module DockTabStrip {
        // Constructor properties interface
    }

    class DockTabStrip extends TabStrip {
        // Constructors of Pnl-1.0.DockTabStrip

        static ['new'](): DockTabStrip;
    }

    module DockTransientGrab {
        // Constructor properties interface
    }

    class DockTransientGrab extends GObject.Object {
        // Own properties of Pnl-1.0.DockTransientGrab

        timeout: number;

        // Constructors of Pnl-1.0.DockTransientGrab

        static ['new'](): DockTransientGrab;

        // Owm methods of Pnl-1.0.DockTransientGrab

        acquire(): void;
        add_item(item: DockItem): void;
        contains(item: DockItem): boolean;
        get_timeout(): number;
        is_descendant(widget: Gtk.Widget): boolean;
        release(): void;
        remove_item(item: DockItem): void;
        set_timeout(timeout: number): void;
        steal_common_ancestors(other: DockTransientGrab): void;
    }

    module DockWidget {
        // Constructor properties interface
    }

    class DockWidget extends Gtk.Bin {
        // Own properties of Pnl-1.0.DockWidget

        manager: DockManager;
        title: string;

        // Constructors of Pnl-1.0.DockWidget

        static ['new'](): DockWidget;

        // Owm methods of Pnl-1.0.DockWidget

        get_title(): string;
        set_title(title: string): void;
    }

    module DockWindow {
        // Constructor properties interface
    }

    class DockWindow extends Gtk.Window {
        // Constructors of Pnl-1.0.DockWindow

        static ['new'](): DockWindow;
    }

    module MultiPaned {
        // Signal callback interfaces

        interface ResizeDragBegin {
            (object: Gtk.Widget): void;
        }

        interface ResizeDragEnd {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    /**
     * This widget is similar to #GtkPaned except that it allows adding more than
     * two children to the widget. For each additional child added to the
     * #PnlMultiPaned, an additional resize grip is added.
     */
    class MultiPaned extends Gtk.Container {
        // Own properties of Pnl-1.0.MultiPaned

        orientation: Gtk.Orientation;

        // Constructors of Pnl-1.0.MultiPaned

        static ['new'](): MultiPaned;

        // Owm methods of Pnl-1.0.MultiPaned

        get_n_children(): number;
    }

    module Tab {
        // Constructor properties interface
    }

    class Tab extends Gtk.ToggleButton {
        // Own properties of Pnl-1.0.Tab

        edge: Gtk.PositionType;
        title: string;
        widget: Gtk.Widget;

        // Owm methods of Pnl-1.0.Tab

        get_edge(): Gtk.PositionType;
        get_title(): string;
        get_widget(): Gtk.Widget | null;
        set_edge(edge: Gtk.PositionType): void;
        set_title(title: string): void;
        set_widget(widget: Gtk.Widget): void;
    }

    module TabStrip {
        // Constructor properties interface
    }

    class TabStrip extends Gtk.Box {
        // Own properties of Pnl-1.0.TabStrip

        edge: Gtk.PositionType;
        stack: Gtk.Stack;

        // Constructors of Pnl-1.0.TabStrip

        static ['new'](): TabStrip;

        // Owm methods of Pnl-1.0.TabStrip

        get_edge(): Gtk.PositionType;
        get_show_labels(): boolean;
        get_stack(): Gtk.Stack | null;
        set_edge(edge: Gtk.PositionType): void;
        set_show_labels(show_labels: boolean): void;
        set_stack(stack: Gtk.Stack): void;
    }

    class AnimationClass {}

    class DockBinClass {}

    class DockBinEdgeClass {}

    class DockInterface {}

    class DockItemInterface {}

    class DockManagerClass {}

    class DockOverlayClass {}

    class DockOverlayEdgeClass {}

    class DockPanedClass {}

    class DockRevealerClass {}

    class DockStackClass {}

    class DockTabStripClass {}

    class DockTransientGrabClass {}

    class DockWidgetClass {}

    class DockWindowClass {}

    class MultiPanedClass {}

    class TabClass {}

    class TabStripClass {}

    interface Dock {
        // Own properties of Pnl-1.0.Dock

        manager: DockManager;
    }

    interface DockItem {
        // Owm methods of Pnl-1.0.DockItem

        adopt(child: DockItem): boolean;
        get_child_visible(child: DockItem): boolean;
        /**
         * Gets the dock manager for this dock item.
         * @returns A #PnlDockmanager.
         */
        get_manager(): DockManager | null;
        /**
         * Gets the parent #PnlDockItem, or %NULL.
         * @returns A #PnlDockItem or %NULL.
         */
        get_parent(): DockItem | null;
        has_widgets(): boolean;
        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;
        present_child(child: DockItem): void;
        set_child_visible(child: DockItem, child_visible: boolean): void;
        /**
         * Sets the dock manager for this #PnlDockItem.
         * @param manager A #PnlDockManager
         */
        set_manager(manager?: DockManager | null): void;
        update_visibility(): void;

        // Own virtual methods of Pnl-1.0.DockItem

        vfunc_get_child_visible(child: DockItem): boolean;
        /**
         * Gets the dock manager for this dock item.
         */
        vfunc_get_manager(): DockManager | null;
        vfunc_manager_set(old_manager: DockManager): void;
        vfunc_present_child(child: DockItem): void;
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;
        /**
         * Sets the dock manager for this #PnlDockItem.
         * @param manager A #PnlDockManager
         */
        vfunc_set_manager(manager?: DockManager | null): void;
        vfunc_update_visibility(): void;
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

export default Pnl;
// END
