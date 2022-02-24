/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GrlPls-0.2
 */

import type * as Gjs from './Gjs';
import type Grl from './Grl-0.2';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GrlPls {

function browse(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func: FilterFunc | null, callback: Grl.SourceResultCb): number
function browse_by_spec(source: Grl.Source, filter_func: FilterFunc | null, bs: Grl.SourceBrowseSpec): void
function browse_sync(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func?: FilterFunc | null): Grl.Media[]
function file_to_media(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handle_pls: boolean, options: Grl.OperationOptions): Grl.Media
function get_file_attributes(): string
function media_is_playlist(media: Grl.Media): boolean
/**
 * Callback type to filter, or modify #GrlMedia created
 * when parsing a playlist using one of grl_pls_browse(),
 * grl_pls_browse_sync() or grl_pls_browse_by_spec().
 * 
 * The callback is responsible for unreffing `media` when returning %NULL or
 * another #GrlMedia.
 */
interface FilterFunc {
    (source: Grl.Source, media: Grl.Media): Grl.Media
}
}
export default GrlPls;