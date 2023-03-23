
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * ClutterGdk-1.0
 */

import type Gdk from '@girs/node-gdk-3.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Clutter from '@girs/node-clutter-1.0';
import type Json from '@girs/node-json-1.0';
import type GL from '@girs/node-gl-1.0';
import type CoglPango from '@girs/node-coglpango-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Cogl from '@girs/node-cogl-1.0';
import type Atk from '@girs/node-atk-1.0';

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
function disableEventRetrieval(): void
/**
 * Retrieves the pointer to the default display.
 * @returns the default display
 */
function getDefaultDisplay(): Gdk.Display
/**
 * Gets the stage for a particular X window.
 * @param window a #GtkWindow
 * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
 */
function getStageFromWindow(window: Gdk.Window): Clutter.Stage
/**
 * Gets the stages GdkWindow.
 * @param stage a #ClutterStage
 * @returns A GdkWindow* for the stage window.
 */
function getStageWindow(stage: Clutter.Stage): Gdk.Window
/**
 * Retrieves the #GdkVisual used by Clutter.
 * 
 * This function should be used when embedding Clutter inside GDK-based
 * foreign toolkits, to ensure that the visual applied to the #GdkWindow
 * used to render the #ClutterStage is the correct one.
 * @returns a #GdkVisual instance
 */
function getVisual(): Gdk.Visual
/**
 * This function processes a single GDK event; it can be used to hook
 * into external event processing
 * @param event a #GdkEvent
 * @returns #GdkFilterReturn. %GDK_FILTER_REMOVE indicates that  Clutter has internally handled the event and the caller should do  no further processing. %GDK_FILTER_CONTINUE indicates that Clutter  is either not interested in the event, or has used the event to  update internal state without taking any exclusive action.  %GDK_FILTER_TRANSLATE will not occur.
 */
function handleEvent(event: Gdk.Event): Gdk.FilterReturn
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
function setDisplay(display: Gdk.Display): void
/**
 * Target the #ClutterStage to use an existing external #GdkWindow
 * @param stage a #ClutterStage
 * @param window an existing #GdkWindow
 * @returns %TRUE if foreign window is valid
 */
function setStageForeign(stage: Clutter.Stage, window: Gdk.Window): boolean
}

export default ClutterGdk;