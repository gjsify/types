/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGdk-1.0
 */

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

function disableEventRetrieval(): void
function getDefaultDisplay(): Gdk.Display
function getStageFromWindow(window: Gdk.Window): Clutter.Stage
function getStageWindow(stage: Clutter.Stage): Gdk.Window
function getVisual(): Gdk.Visual
function handleEvent(event: Gdk.Event): Gdk.FilterReturn
function setDisplay(display: Gdk.Display): void
function setStageForeign(stage: Clutter.Stage, window: Gdk.Window): boolean
}
export default ClutterGdk;