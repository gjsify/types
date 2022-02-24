/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGLib-1.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type GObject from './GObject-2.0';

export namespace LibvirtGLib {

function error_new_literal(domain: GLib.Quark, code: number, message: string): GLib.Error
function event_register(): void
function init(argv?: string[] | null): /* argv */ string[] | null
function init_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
function set_error_literal(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void
}
export default LibvirtGLib;