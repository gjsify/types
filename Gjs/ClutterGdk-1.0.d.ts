// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGdk-1.0
 */

import type * as Gjs from './Gjs';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Clutter from './Clutter-1.0';
import type Json from './Json-1.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace ClutterGdk {

/**
 * Disable the event retrieval in Clutter.
 * 
 * Callers of this function have to set up an event filter using the
 * GDK API, and call clutter_gdk_handle_event().
 * 
 * This function should only be used when embedding Clutter into
 * a GDK based toolkit.
 */
function disable_event_retrieval(): void
/**
 * Retrieves the pointer to the default display.
 */
function get_default_display(): Gdk.Display
/**
 * Gets the stage for a particular X window.
 * @param window a #GtkWindow
 */
function get_stage_from_window(window: Gdk.Window): Clutter.Stage
/**
 * Gets the stages GdkWindow.
 * @param stage a #ClutterStage
 */
function get_stage_window(stage: Clutter.Stage): Gdk.Window
/**
 * Retrieves the #GdkVisual used by Clutter.
 * 
 * This function should be used when embedding Clutter inside GDK-based
 * foreign toolkits, to ensure that the visual applied to the #GdkWindow
 * used to render the #ClutterStage is the correct one.
 */
function get_visual(): Gdk.Visual
/**
 * This function processes a single GDK event; it can be used to hook
 * into external event processing
 * @param event a #GdkEvent
 */
function handle_event(event: Gdk.Event): Gdk.FilterReturn
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * 
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_gdk_set_display() before g_option_context_parse().
 * @param display pointer to a GDK display connection.
 */
function set_display(display: Gdk.Display): void
/**
 * Target the #ClutterStage to use an existing external #GdkWindow
 * @param stage a #ClutterStage
 * @param window an existing #GdkWindow
 */
function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean
}
export default ClutterGdk;