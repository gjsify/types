// @ts-nocheck

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

/**
 * Browse into a playlist. The playlist entries are
 * returned via the `callback` function as GrlMedia objects.
 * This function imitates the API and way of working of
 * #grl_source_browse.
 * 
 * The `playlist` provided could be of any GrlMedia class,
 * as long as its URI points to a valid playlist file.
 * 
 * This function is asynchronous.
 * 
 * See #grl_source_browse() function for additional information
 * and sample code.
 * @param source a source
 * @param playlist a playlist
 * @param keys the #GList of #GrlKeyID<!-- -->s to request
 * @param options options wanted for that operation
 * @param filter_func A filter function, or %NULL
 * @param callback the user defined callback
 */
function browse(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func: FilterFunc | null, callback: Grl.SourceResultCb): number
/**
 * Browse into a playlist. The playlist entries are
 * returned via the bs->callback function as GrlMedia objects.
 * This function is more suitable to be called from plugins, which by
 * design get the GrlSourceBrowseSpec already filled in.
 * 
 * The bs->playlist provided could be of any GrlMedia class,
 * as long as its URI points to a valid playlist file.
 * 
 * This function is asynchronous.
 * 
 * See #grl_pls_browse() and #grl_source_browse() function for additional
 * information and sample code.
 * @param source a source
 * @param filter_func A filter function, or %NULL
 * @param bs a GrlSourceBrowseSpec structure with details of the browsing operation
 */
function browse_by_spec(source: Grl.Source, filter_func: FilterFunc | null, bs: Grl.SourceBrowseSpec): void
/**
 * Browse into a playlist. The playlist entries are
 * returned via the `callback` function as GrlMedia objects.
 * This function imitates the API and way of working of
 * #grl_source_browse_sync.
 * 
 * The filter function `filter_func` will be used for plugins
 * or applications to be able to refuse particular entries from
 * being listed.
 * 
 * If a %NULL filter function is passed, the media will be added
 * with only the metadata coming from the playlist included.
 * 
 * This function is synchronous.
 * 
 * See #grl_source_browse_sync() function for additional information
 * and sample code.
 * @param source a source
 * @param playlist a playlist
 * @param keys the #GList of #GrlKeyID<!-- -->s to request
 * @param options options wanted for that operation
 * @param filter_func A filter function, or %NULL
 */
function browse_sync(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func: FilterFunc | null): Grl.Media[]
/**
 * This function will update (if `content` is non-%NULL) or create a
 * GrlMedia and populate it with information from `info`.
 * 
 * If `info` is %NULL, a call to g_file_query_info() will be made.
 * 
 * This function is useful for plugins that browse the local filesystem
 * and want to easily create GrlMedia from filesystem information.
 * @param content an existing #GrlMedia for the file, or %NULL
 * @param file a #GFile pointing to the file or directory in question
 * @param info an existing #GFileInfo, or %NULL
 * @param handle_pls Whether playlists should be handled as containers
 * @param options a #GrlOperationOptions representing the options to apply   to this operation.
 */
function file_to_media(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handle_pls: boolean, options: Grl.OperationOptions): Grl.Media
/**
 * Returns the list of attributes to pass to
 * g_file_query_info() to make it possible to
 * populate a GrlMedia using grl_pls_file_to_media().
 * 
 * Do not free the result of this function.
 */
function get_file_attributes(): string
/**
 * Check if a file identified by GrlMedia object is a playlist or not.
 * This function does blocking I/O.
 * @param media GrlMedia
 */
function media_is_playlist(media: Grl.Media): boolean
/**
 * Callback type to filter, or modify #GrlMedia created
 * when parsing a playlist using one of grl_pls_browse(),
 * grl_pls_browse_sync() or grl_pls_browse_by_spec().
 * 
 * The callback is responsible for unreffing `media` when returning %NULL or
 * another #GrlMedia.
 * @callback 
 * @param source the #GrlSource the browse call came from
 * @param media a #GrlMedia to operate on
 */
interface FilterFunc {
    (source: Grl.Source, media: Grl.Media): Grl.Media
}
}
export default GrlPls;