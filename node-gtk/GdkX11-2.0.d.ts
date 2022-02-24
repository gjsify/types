/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-2.0
 */

import type xlib from './xlib-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gdk from './Gdk-2.0';

export namespace GdkX11 {

function netWmSupports(property: Gdk.Atom): boolean
function x11AtomToXatom(atom: Gdk.Atom): xlib.Atom
function x11AtomToXatomForDisplay(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom
function x11ColormapGetXcolormap(colormap: Gdk.Colormap): xlib.Colormap
function x11CursorGetXcursor(cursor: Gdk.Cursor): xlib.Cursor
function x11DisplayGetStartupNotificationId(display: Gdk.Display): string
function x11DisplayGetUserTime(display: Gdk.Display): number
function x11DisplayGrab(display: Gdk.Display): void
function x11DisplaySetCursorTheme(display: Gdk.Display, theme: string, size: number): void
function x11DisplayStringToCompoundText(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): number
function x11DisplayTextPropertyToTextList(display: Gdk.Display, encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
function x11DisplayUngrab(display: Gdk.Display): void
function x11DisplayUtf8ToCompoundText(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): boolean
function x11DrawableGetXid(drawable: Gdk.Drawable): xlib.XID
function x11FontGetName(font: Gdk.Font): string
function x11FontGetXfont(font: Gdk.Font): object | null
function x11FreeCompoundText(ctext: number): void
function x11FreeTextList(list: string): void
function x11GetDefaultRootXwindow(): xlib.Window
function x11GetDefaultScreen(): number
function x11GetServerTime(window: Gdk.Window): number
function x11GetXatomByName(atomName: string): xlib.Atom
function x11GetXatomByNameForDisplay(display: Gdk.Display, atomName: string): xlib.Atom
function x11GetXatomName(xatom: xlib.Atom): string
function x11GetXatomNameForDisplay(display: Gdk.Display, xatom: xlib.Atom): string
function x11GrabServer(): void
function x11RegisterStandardEventType(display: Gdk.Display, eventBase: number, nEvents: number): void
function x11ScreenGetMonitorOutput(screen: Gdk.Screen, monitorNum: number): xlib.XID
function x11ScreenGetScreenNumber(screen: Gdk.Screen): number
function x11ScreenGetWindowManagerName(screen: Gdk.Screen): string
function x11ScreenGetXscreen(screen: Gdk.Screen): xlib.Screen
function x11ScreenLookupVisual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual
function x11ScreenSupportsNetWmHint(screen: Gdk.Screen, property: Gdk.Atom): boolean
function x11SetSmClientId(smClientId: string): void
function x11UngrabServer(): void
function x11WindowMoveToCurrentDesktop(window: Gdk.Window): void
function x11WindowSetUserTime(window: Gdk.Window, timestamp: number): void
function xidTableLookup(xid: xlib.XID): object | null
function xidTableLookupForDisplay(display: Gdk.Display, xid: xlib.XID): object | null
}
export default GdkX11;