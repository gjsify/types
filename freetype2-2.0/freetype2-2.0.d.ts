
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './freetype2-2.0-ambient.d.ts';
import './freetype2-2.0-import.d.ts';
/**
 * freetype2-2.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace freetype2 {

class Bitmap {

    // Constructors of freetype2.Bitmap

_init(...args: any[]): void;

}

class Face {

    // Constructors of freetype2.Face

_init(...args: any[]): void;

}

class Library {

    // Constructors of freetype2.Library

_init(...args: any[]): void;

}

type Int32 = number
/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default freetype2;
// END