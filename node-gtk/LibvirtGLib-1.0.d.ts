/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGLib-1.0
 */

import type GLib from './GLib-2.0';
import type GObject from './GObject-2.0';

export namespace LibvirtGLib {

function errorNewLiteral(domain: GLib.Quark, code: number, message: string): GLib.Error
function eventRegister(): void
function init(argv?: string[] | null): /* argv */ string[] | null
function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
function setErrorLiteral(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void
}
export default LibvirtGLib;