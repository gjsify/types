
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtksource-3.0-ambient.d.ts';
import './gtksource-3.0-import.d.ts';
/**
 * GtkSource-3.0
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

export enum BackgroundPatternType {
    /**
     * no pattern
     */
    NONE,
    /**
     * grid pattern
     */
    GRID,
}
export enum BracketMatchType {
    /**
     * there is no bracket to match.
     */
    NONE,
    /**
     * matching a bracket
     *  failed because the maximum range was reached.
     */
    OUT_OF_RANGE,
    /**
     * a matching bracket was not found.
     */
    NOT_FOUND,
    /**
     * a matching bracket was found.
     */
    FOUND,
}
export enum ChangeCaseType {
    /**
     * change case to lowercase.
     */
    LOWER,
    /**
     * change case to uppercase.
     */
    UPPER,
    /**
     * toggle case of each character.
     */
    TOGGLE,
    /**
     * capitalize each word.
     */
    TITLE,
}
/**
 * An error code used with %GTK_SOURCE_COMPLETION_ERROR in a #GError returned
 * from a completion-related function.
 */
export enum CompletionError {
    /**
     * The #GtkSourceCompletionProvider
     * is already bound to the #GtkSourceCompletion object.
     */
    ALREADY_BOUND,
    /**
     * The #GtkSourceCompletionProvider is
     * not bound to the #GtkSourceCompletion object.
     */
    NOT_BOUND,
}
export enum CompressionType {
    /**
     * plain text.
     */
    NONE,
    /**
     * gzip compression.
     */
    GZIP,
}
/**
 * An error code used with the %GTK_SOURCE_FILE_LOADER_ERROR domain.
 */
export enum FileLoaderError {
    /**
     * The file is too big.
     */
    TOO_BIG,
    /**
     * It is not
     * possible to detect the encoding automatically.
     */
    ENCODING_AUTO_DETECTION_FAILED,
    /**
     * There was an encoding
     * conversion error and it was needed to use a fallback character.
     */
    CONVERSION_FALLBACK,
}
/**
 * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
 */
export enum FileSaverError {
    /**
     * The buffer contains invalid
     *   characters.
     */
    INVALID_CHARS,
    /**
     * The file is externally
     *   modified.
     */
    EXTERNALLY_MODIFIED,
}
/**
 * The alignment mode of the renderer, when a cell spans multiple lines (due to
 * text wrapping).
 */
export enum GutterRendererAlignmentMode {
    /**
     * The full cell.
     */
    CELL,
    /**
     * The first line.
     */
    FIRST,
    /**
     * The last line.
     */
    LAST,
}
export enum NewlineType {
    /**
     * line feed, used on UNIX.
     */
    LF,
    /**
     * carriage return, used on Mac.
     */
    CR,
    /**
     * carriage return followed by a line feed, used
     *   on Windows.
     */
    CR_LF,
}
export enum SmartHomeEndType {
    /**
     * smart-home-end disabled.
     */
    DISABLED,
    /**
     * move to the first/last
     * non-whitespace character on the first press of the HOME/END keys and
     * to the beginning/end of the line on the second press.
     */
    BEFORE,
    /**
     * move to the beginning/end of the
     * line on the first press of the HOME/END keys and to the first/last
     * non-whitespace character on the second press.
     */
    AFTER,
    /**
     * always move to the first/last
     * non-whitespace character when the HOME/END keys are pressed.
     */
    ALWAYS,
}
export enum ViewGutterPosition {
    /**
     * the gutter position of the lines
     * renderer
     */
    LINES,
    /**
     * the gutter position of the marks
     * renderer
     */
    MARKS,
}
export enum CompletionActivation {
    /**
     * None.
     */
    NONE,
    /**
     * Interactive activation. By
     * default, it occurs on each insertion in the #GtkTextBuffer. This can be
     * blocked temporarily with gtk_source_completion_block_interactive().
     */
    INTERACTIVE,
    /**
     * User requested activation.
     * By default, it occurs when the user presses
     * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
     */
    USER_REQUESTED,
}
/**
 * GtkSourceDrawSpacesFlags determine what kind of spaces whould be drawn. If none
 * of GTK_SOURCE_DRAW_SPACES_LEADING, GTK_SOURCE_DRAW_SPACES_TEXT or
 * GTK_SOURCE_DRAW_SPACES_TRAILING is specified, whitespaces at any position in
 * the line will be drawn (i.e. it has the same effect as specifying all of them).
 * @bitfield 
 */
export enum DrawSpacesFlags {
    /**
     * whether the space character should be drawn.
     */
    SPACE,
    /**
     * whether the tab character should be drawn.
     */
    TAB,
    /**
     * whether the line breaks should be drawn. If
     *   the #GtkSourceBuffer:implicit-trailing-newline property is %TRUE, a line
     *   break is also drawn at the end of the buffer.
     */
    NEWLINE,
    /**
     * whether the non-breaking whitespaces should be drawn.
     */
    NBSP,
    /**
     * whether leading whitespaces should be drawn.
     */
    LEADING,
    /**
     * whether whitespaces inside text should be drawn.
     */
    TEXT,
    /**
     * whether trailing whitespaces should be drawn.
     */
    TRAILING,
    /**
     * wheter all kind of spaces should be drawn.
     */
    ALL,
}
/**
 * Flags to define the behavior of a #GtkSourceFileSaver.
 * @bitfield 
 */
export enum FileSaverFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Ignore invalid characters.
     */
    IGNORE_INVALID_CHARS,
    /**
     * Save file despite external modifications.
     */
    IGNORE_MODIFICATION_TIME,
    /**
     * Create a backup before saving the file.
     */
    CREATE_BACKUP,
}
export enum GutterRendererState {
    /**
     * normal state
     */
    NORMAL,
    /**
     * area in the renderer represents the
     * line on which the insert cursor is currently positioned
     */
    CURSOR,
    /**
     * the mouse pointer is currently
     * over the activatable area of the renderer
     */
    PRELIT,
    /**
     * area in the renderer represents
     * a line in the buffer which contains part of the selection
     */
    SELECTED,
}
export enum SortFlags {
    /**
     * no flags specified
     */
    NONE,
    /**
     * case sensitive sort
     */
    CASE_SENSITIVE,
    /**
     * sort in reverse order
     */
    REVERSE_ORDER,
    /**
     * remove duplicates
     */
    REMOVE_DUPLICATES,
}
/**
 * #GtkSourceSpaceLocationFlags contains flags for white space locations.
 * 
 * If a line contains only white spaces (no text), the white spaces match both
 * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
 * @bitfield 
 */
export enum SpaceLocationFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Leading white spaces on a line, i.e. the
     *   indentation.
     */
    LEADING,
    /**
     * White spaces inside a line of text.
     */
    INSIDE_TEXT,
    /**
     * Trailing white spaces on a line.
     */
    TRAILING,
    /**
     * White spaces anywhere.
     */
    ALL,
}
/**
 * #GtkSourceSpaceTypeFlags contains flags for white space types.
 * @bitfield 
 */
export enum SpaceTypeFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Space character.
     */
    SPACE,
    /**
     * Tab character.
     */
    TAB,
    /**
     * Line break character. If the
     *   #GtkSourceBuffer:implicit-trailing-newline property is %TRUE,
     *   #GtkSourceSpaceDrawer also draws a line break at the end of the buffer.
     */
    NEWLINE,
    /**
     * Non-breaking space character.
     */
    NBSP,
    /**
     * All white spaces.
     */
    ALL,
}
export function completion_error_quark(): GLib.Quark
/**
 * Gets all encodings.
 * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
 */
export function encoding_get_all(): Encoding[]
/**
 * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
 * @returns the current locale encoding.
 */
export function encoding_get_current(): Encoding
/**
 * Gets the list of default candidate encodings to try when loading a file. See
 * gtk_source_file_loader_set_candidate_encodings().
 * 
 * This function returns a different list depending on the current locale (i.e.
 * language, country and default encoding). The UTF-8 encoding and the current
 * locale encoding are guaranteed to be present in the returned list.
 * @returns the list of default candidate encodings. Free with g_slist_free().
 */
export function encoding_get_default_candidates(): Encoding[]
/**
 * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
 * "ISO-8859-1".
 * @param charset a character set.
 * @returns the corresponding #GtkSourceEncoding, or %NULL if not found.
 */
export function encoding_get_from_charset(charset: string): Encoding | null
export function encoding_get_utf8(): Encoding
export function file_loader_error_quark(): GLib.Quark
export function file_saver_error_quark(): GLib.Quark
/**
 * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
 * 
 * For a regular expression search, use g_regex_escape_string() instead.
 * 
 * One possible use case is to take the #GtkTextBuffer's selection and put it in a
 * search entry. The selection can contain tabulations, newlines, etc. So it's
 * better to escape those special characters to better fit in the search entry.
 * 
 * See also: gtk_source_utils_unescape_search_text().
 * 
 * <warning>
 * Warning: the escape and unescape functions are not reciprocal! For example,
 * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
 * -> search settings -> escape -> search entry. The original search entry text
 * may be modified.
 * </warning>
 * @param text the text to escape.
 * @returns the escaped @text.
 */
export function utils_escape_search_text(text: string): string | null
/**
 * Use this function before gtk_source_search_settings_set_search_text(), to
 * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
 * The purpose is to easily write those characters in a search entry.
 * 
 * Note that unescaping the search text is not needed for regular expression
 * searches.
 * 
 * See also: gtk_source_utils_escape_search_text().
 * @param text the text to unescape.
 * @returns the unescaped @text.
 */
export function utils_unescape_search_text(text: string): string | null
export module CompletionProposal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: CompletionProposal): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CompletionProposal {

    // Owm methods of GtkSource-3.0.GtkSource.CompletionProposal

    /**
     * Emits the "changed" signal on `proposal`. This should be called by
     * implementations whenever the name, icon or info of the proposal has
     * changed.
     */
    changed(): void
    /**
     * Get whether two proposal objects are the same.  This is used to (together
     * with gtk_source_completion_proposal_hash()) to match proposals in the
     * completion model. By default, it uses direct equality (g_direct_equal()).
     * @param other a #GtkSourceCompletionProposal.
     * @returns %TRUE if @proposal and @object are the same proposal
     */
    equal(other: CompletionProposal): boolean
    /**
     * Gets the #GIcon for the icon of `proposal`.
     * @returns A #GIcon with the icon of @proposal.
     */
    get_gicon(): Gio.Icon | null
    /**
     * Gets the #GdkPixbuf for the icon of `proposal`.
     * @returns A #GdkPixbuf with the icon of @proposal.
     */
    get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `proposal`.
     * @returns The icon name of @proposal.
     */
    get_icon_name(): string | null
    /**
     * Gets extra information associated to the proposal. This information will be
     * used to present the user with extra, detailed information about the
     * selected proposal. The returned string must be freed with g_free().
     * @returns a newly-allocated string containing extra information of @proposal or %NULL if no extra information is associated to @proposal.
     */
    get_info(): string | null
    /**
     * Gets the label of `proposal`. The label is shown in the list of proposals as
     * plain text. If you need any markup (such as bold or italic text), you have
     * to implement gtk_source_completion_proposal_get_markup(). The returned string
     * must be freed with g_free().
     * @returns a new string containing the label of @proposal.
     */
    get_label(): string | null
    /**
     * Gets the label of `proposal` with markup. The label is shown in the list of
     * proposals and may contain markup. This will be used instead of
     * gtk_source_completion_proposal_get_label() if implemented. The returned string
     * must be freed with g_free().
     * @returns a new string containing the label of @proposal with markup.
     */
    get_markup(): string | null
    /**
     * Gets the text of `proposal`. The text that is inserted into
     * the text buffer when the proposal is activated by the default activation.
     * You are free to implement a custom activation handler in the provider and
     * not implement this function. For more information, see
     * gtk_source_completion_provider_activate_proposal(). The returned string must
     * be freed with g_free().
     * @returns a new string containing the text of @proposal.
     */
    get_text(): string | null
    /**
     * Get the hash value of `proposal`. This is used to (together with
     * gtk_source_completion_proposal_equal()) to match proposals in the completion
     * model. By default, it uses a direct hash (g_direct_hash()).
     * @returns The hash value of @proposal.
     */
    hash(): number

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionProposal

    /**
     * Emits the "changed" signal on `proposal`. This should be called by
     * implementations whenever the name, icon or info of the proposal has
     * changed.
     * @virtual 
     */
    vfunc_changed(): void
    /**
     * Get whether two proposal objects are the same.  This is used to (together
     * with gtk_source_completion_proposal_hash()) to match proposals in the
     * completion model. By default, it uses direct equality (g_direct_equal()).
     * @virtual 
     * @param other a #GtkSourceCompletionProposal.
     * @returns %TRUE if @proposal and @object are the same proposal
     */
    vfunc_equal(other: CompletionProposal): boolean
    /**
     * Gets the #GIcon for the icon of `proposal`.
     * @virtual 
     * @returns A #GIcon with the icon of @proposal.
     */
    vfunc_get_gicon(): Gio.Icon | null
    /**
     * Gets the #GdkPixbuf for the icon of `proposal`.
     * @virtual 
     * @returns A #GdkPixbuf with the icon of @proposal.
     */
    vfunc_get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `proposal`.
     * @virtual 
     * @returns The icon name of @proposal.
     */
    vfunc_get_icon_name(): string | null
    /**
     * Gets extra information associated to the proposal. This information will be
     * used to present the user with extra, detailed information about the
     * selected proposal. The returned string must be freed with g_free().
     * @virtual 
     * @returns a newly-allocated string containing extra information of @proposal or %NULL if no extra information is associated to @proposal.
     */
    vfunc_get_info(): string | null
    /**
     * Gets the label of `proposal`. The label is shown in the list of proposals as
     * plain text. If you need any markup (such as bold or italic text), you have
     * to implement gtk_source_completion_proposal_get_markup(). The returned string
     * must be freed with g_free().
     * @virtual 
     * @returns a new string containing the label of @proposal.
     */
    vfunc_get_label(): string | null
    /**
     * Gets the label of `proposal` with markup. The label is shown in the list of
     * proposals and may contain markup. This will be used instead of
     * gtk_source_completion_proposal_get_label() if implemented. The returned string
     * must be freed with g_free().
     * @virtual 
     * @returns a new string containing the label of @proposal with markup.
     */
    vfunc_get_markup(): string | null
    /**
     * Gets the text of `proposal`. The text that is inserted into
     * the text buffer when the proposal is activated by the default activation.
     * You are free to implement a custom activation handler in the provider and
     * not implement this function. For more information, see
     * gtk_source_completion_provider_activate_proposal(). The returned string must
     * be freed with g_free().
     * @virtual 
     * @returns a new string containing the text of @proposal.
     */
    vfunc_get_text(): string | null
    /**
     * Get the hash value of `proposal`. This is used to (together with
     * gtk_source_completion_proposal_equal()) to match proposals in the completion
     * model. By default, it uses a direct hash (g_direct_hash()).
     * @virtual 
     * @returns The hash value of @proposal.
     */
    vfunc_hash(): number

    // Own signals of GtkSource-3.0.GtkSource.CompletionProposal

    connect(sigName: "changed", callback: CompletionProposal.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: CompletionProposal.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionProposal

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionProposal extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProposal

    static name: string
    static $gtype: GObject.GType<CompletionProposal>

    // Constructors of GtkSource-3.0.GtkSource.CompletionProposal

    constructor(config?: CompletionProposal.ConstructorProperties) 
    _init(config?: CompletionProposal.ConstructorProperties): void
}

export module CompletionProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CompletionProvider {

    // Owm methods of GtkSource-3.0.GtkSource.CompletionProvider

    /**
     * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
     * activation of `proposal` will take place which replaces the word at `iter`
     * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
     * 
     * Here is how the default activation selects the boundaries of the word to
     * replace. The end of the word is `iter`. For the start of the word, it depends
     * on whether a start iter is defined for `proposal` (see
     * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
     * the start of the word is the start iter. Else, the word (as long as possible)
     * will contain only alphanumerical and the "_" characters.
     * @param proposal a #GtkSourceCompletionProposal.
     * @param iter a #GtkTextIter.
     * @returns %TRUE to indicate that the proposal activation has been handled,          %FALSE otherwise.
     */
    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    /**
     * Get with what kind of activation the provider should be activated.
     * @returns a combination of #GtkSourceCompletionActivation.
     */
    get_activation(): CompletionActivation
    /**
     * Gets the #GIcon for the icon of `provider`.
     * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    get_gicon(): Gio.Icon | null
    /**
     * Get the #GdkPixbuf for the icon of the `provider`.
     * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `provider`.
     * @returns The icon name to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    get_icon_name(): string | null
    /**
     * Get a customized info widget to show extra information of a proposal.
     * This allows for customized widgets on a proposal basis, although in general
     * providers will have the same custom widget for all their proposals and
     * `proposal` can be ignored. The implementation of this function is optional.
     * 
     * If this function is not implemented, the default widget is a #GtkLabel. The
     * return value of gtk_source_completion_proposal_get_info() is used as the
     * content of the #GtkLabel.
     * 
     * <note>
     *   <para>
     *     If implemented, gtk_source_completion_provider_update_info()
     *     <emphasis>must</emphasis> also be implemented.
     *   </para>
     * </note>
     * @param proposal a currently selected #GtkSourceCompletionProposal.
     * @returns a custom #GtkWidget to show extra information about @proposal, or %NULL if the provider does not have a special info widget.
     */
    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null
    /**
     * Get the delay in milliseconds before starting interactive completion for
     * this provider. A value of -1 indicates to use the default value as set
     * by the #GtkSourceCompletion:auto-complete-delay property.
     * @returns the interactive delay in milliseconds.
     */
    get_interactive_delay(): number
    /**
     * Get the name of the provider. This should be a translatable name for
     * display to the user. For example: _("Document word completion provider"). The
     * returned string must be freed with g_free().
     * @returns a new string containing the name of the provider.
     */
    get_name(): string | null
    /**
     * Get the provider priority. The priority determines the order in which
     * proposals appear in the completion popup. Higher priorities are sorted
     * before lower priorities. The default priority is 0.
     * @returns the provider priority.
     */
    get_priority(): number
    /**
     * Get the #GtkTextIter at which the completion for `proposal` starts. When
     * implemented, this information is used to position the completion window
     * accordingly when a proposal is selected in the completion window. The
     * `proposal` text inside the completion window is aligned on `iter`.
     * 
     * If this function is not implemented, the word boundary is taken to position
     * the completion window. See gtk_source_completion_provider_activate_proposal()
     * for an explanation on the word boundaries.
     * 
     * When the `proposal` is activated, the default handler uses `iter` as the start
     * of the word to replace. See
     * gtk_source_completion_provider_activate_proposal() for more information.
     * @param context a #GtkSourceCompletionContext.
     * @param proposal a #GtkSourceCompletionProposal.
     * @returns %TRUE if @iter was set for @proposal, %FALSE otherwise.
     */
    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Get whether the provider match the context of completion detailed in
     * `context`.
     * @param context a #GtkSourceCompletionContext.
     * @returns %TRUE if @provider matches the completion context, %FALSE otherwise.
     */
    match(context: CompletionContext): boolean
    /**
     * Populate `context` with proposals from `provider` added with the
     * gtk_source_completion_context_add_proposals() function.
     * @param context a #GtkSourceCompletionContext.
     */
    populate(context: CompletionContext): void
    /**
     * Update extra information shown in `info` for `proposal`.
     * 
     * <note>
     *   <para>
     *     This function <emphasis>must</emphasis> be implemented when
     *     gtk_source_completion_provider_get_info_widget() is implemented.
     *   </para>
     * </note>
     * @param proposal a #GtkSourceCompletionProposal.
     * @param info a #GtkSourceCompletionInfo.
     */
    update_info(proposal: CompletionProposal, info: CompletionInfo): void

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionProvider

    /**
     * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
     * activation of `proposal` will take place which replaces the word at `iter`
     * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
     * 
     * Here is how the default activation selects the boundaries of the word to
     * replace. The end of the word is `iter`. For the start of the word, it depends
     * on whether a start iter is defined for `proposal` (see
     * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
     * the start of the word is the start iter. Else, the word (as long as possible)
     * will contain only alphanumerical and the "_" characters.
     * @virtual 
     * @param proposal a #GtkSourceCompletionProposal.
     * @param iter a #GtkTextIter.
     * @returns %TRUE to indicate that the proposal activation has been handled,          %FALSE otherwise.
     */
    vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    /**
     * Get with what kind of activation the provider should be activated.
     * @virtual 
     * @returns a combination of #GtkSourceCompletionActivation.
     */
    vfunc_get_activation(): CompletionActivation
    /**
     * Gets the #GIcon for the icon of `provider`.
     * @virtual 
     * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    vfunc_get_gicon(): Gio.Icon | null
    /**
     * Get the #GdkPixbuf for the icon of the `provider`.
     * @virtual 
     * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    vfunc_get_icon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `provider`.
     * @virtual 
     * @returns The icon name to be used for the provider,          or %NULL if the provider does not have a special icon.
     */
    vfunc_get_icon_name(): string | null
    /**
     * Get a customized info widget to show extra information of a proposal.
     * This allows for customized widgets on a proposal basis, although in general
     * providers will have the same custom widget for all their proposals and
     * `proposal` can be ignored. The implementation of this function is optional.
     * 
     * If this function is not implemented, the default widget is a #GtkLabel. The
     * return value of gtk_source_completion_proposal_get_info() is used as the
     * content of the #GtkLabel.
     * 
     * <note>
     *   <para>
     *     If implemented, gtk_source_completion_provider_update_info()
     *     <emphasis>must</emphasis> also be implemented.
     *   </para>
     * </note>
     * @virtual 
     * @param proposal a currently selected #GtkSourceCompletionProposal.
     * @returns a custom #GtkWidget to show extra information about @proposal, or %NULL if the provider does not have a special info widget.
     */
    vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null
    /**
     * Get the delay in milliseconds before starting interactive completion for
     * this provider. A value of -1 indicates to use the default value as set
     * by the #GtkSourceCompletion:auto-complete-delay property.
     * @virtual 
     * @returns the interactive delay in milliseconds.
     */
    vfunc_get_interactive_delay(): number
    /**
     * Get the name of the provider. This should be a translatable name for
     * display to the user. For example: _("Document word completion provider"). The
     * returned string must be freed with g_free().
     * @virtual 
     * @returns a new string containing the name of the provider.
     */
    vfunc_get_name(): string | null
    /**
     * Get the provider priority. The priority determines the order in which
     * proposals appear in the completion popup. Higher priorities are sorted
     * before lower priorities. The default priority is 0.
     * @virtual 
     * @returns the provider priority.
     */
    vfunc_get_priority(): number
    /**
     * Get the #GtkTextIter at which the completion for `proposal` starts. When
     * implemented, this information is used to position the completion window
     * accordingly when a proposal is selected in the completion window. The
     * `proposal` text inside the completion window is aligned on `iter`.
     * 
     * If this function is not implemented, the word boundary is taken to position
     * the completion window. See gtk_source_completion_provider_activate_proposal()
     * for an explanation on the word boundaries.
     * 
     * When the `proposal` is activated, the default handler uses `iter` as the start
     * of the word to replace. See
     * gtk_source_completion_provider_activate_proposal() for more information.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     * @param proposal a #GtkSourceCompletionProposal.
     * @returns %TRUE if @iter was set for @proposal, %FALSE otherwise.
     */
    vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Get whether the provider match the context of completion detailed in
     * `context`.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     * @returns %TRUE if @provider matches the completion context, %FALSE otherwise.
     */
    vfunc_match(context: CompletionContext): boolean
    /**
     * Populate `context` with proposals from `provider` added with the
     * gtk_source_completion_context_add_proposals() function.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     */
    vfunc_populate(context: CompletionContext): void
    /**
     * Update extra information shown in `info` for `proposal`.
     * 
     * <note>
     *   <para>
     *     This function <emphasis>must</emphasis> be implemented when
     *     gtk_source_completion_provider_get_info_widget() is implemented.
     *   </para>
     * </note>
     * @virtual 
     * @param proposal a #GtkSourceCompletionProposal.
     * @param info a #GtkSourceCompletionInfo.
     */
    vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionProvider extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProvider

    static name: string
    static $gtype: GObject.GType<CompletionProvider>

    // Constructors of GtkSource-3.0.GtkSource.CompletionProvider

    constructor(config?: CompletionProvider.ConstructorProperties) 
    _init(config?: CompletionProvider.ConstructorProperties): void
}

export module StyleSchemeChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        style_scheme?: StyleScheme | null
        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        styleScheme?: StyleScheme | null
    }

}

export interface StyleSchemeChooser {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

    /**
     * The :style-scheme property contains the currently selected style
     * scheme. The property can be set to change
     * the current selection programmatically.
     */
    style_scheme: StyleScheme
    /**
     * The :style-scheme property contains the currently selected style
     * scheme. The property can be set to change
     * the current selection programmatically.
     */
    styleScheme: StyleScheme

    // Owm methods of GtkSource-3.0.GtkSource.StyleSchemeChooser

    /**
     * Gets the currently-selected scheme.
     * @returns the currently-selected scheme.
     */
    get_style_scheme(): StyleScheme
    /**
     * Sets the scheme.
     * @param scheme a #GtkSourceStyleScheme
     */
    set_style_scheme(scheme: StyleScheme): void

    // Own virtual methods of GtkSource-3.0.GtkSource.StyleSchemeChooser

    /**
     * Gets the currently-selected scheme.
     * @virtual 
     * @returns the currently-selected scheme.
     */
    vfunc_get_style_scheme(): StyleScheme
    /**
     * Sets the scheme.
     * @virtual 
     * @param scheme a #GtkSourceStyleScheme
     */
    vfunc_set_style_scheme(scheme: StyleScheme): void

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooser

    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyleSchemeChooser extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

    static name: string
    static $gtype: GObject.GType<StyleSchemeChooser>

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooser

    constructor(config?: StyleSchemeChooser.ConstructorProperties) 
    _init(config?: StyleSchemeChooser.ConstructorProperties): void
}

export module UndoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `can-redo-changed`
     */
    export interface CanRedoChangedSignalCallback {
        ($obj: UndoManager): void
    }

    /**
     * Signal callback interface for `can-undo-changed`
     */
    export interface CanUndoChangedSignalCallback {
        ($obj: UndoManager): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UndoManager {

    // Owm methods of GtkSource-3.0.GtkSource.UndoManager

    /**
     * Begin a not undoable action on the buffer. All changes between this call
     * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
     * be undone. This function should be re-entrant.
     */
    begin_not_undoable_action(): void
    /**
     * Get whether there are redo operations available.
     * @returns %TRUE if there are redo operations available, %FALSE otherwise
     */
    can_redo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-redo-changed signal.
     */
    can_redo_changed(): void
    /**
     * Get whether there are undo operations available.
     * @returns %TRUE if there are undo operations available, %FALSE otherwise
     */
    can_undo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-undo-changed signal.
     */
    can_undo_changed(): void
    /**
     * Ends a not undoable action on the buffer.
     */
    end_not_undoable_action(): void
    /**
     * Perform a single redo. Calling this function when there are no redo operations
     * available is an error. Use gtk_source_undo_manager_can_redo() to find out
     * if there are redo operations available.
     */
    redo(): void
    /**
     * Perform a single undo. Calling this function when there are no undo operations
     * available is an error. Use gtk_source_undo_manager_can_undo() to find out
     * if there are undo operations available.
     */
    undo(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.UndoManager

    /**
     * Begin a not undoable action on the buffer. All changes between this call
     * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
     * be undone. This function should be re-entrant.
     * @virtual 
     */
    vfunc_begin_not_undoable_action(): void
    /**
     * Get whether there are redo operations available.
     * @virtual 
     * @returns %TRUE if there are redo operations available, %FALSE otherwise
     */
    vfunc_can_redo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-redo-changed signal.
     * @virtual 
     */
    vfunc_can_redo_changed(): void
    /**
     * Get whether there are undo operations available.
     * @virtual 
     * @returns %TRUE if there are undo operations available, %FALSE otherwise
     */
    vfunc_can_undo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-undo-changed signal.
     * @virtual 
     */
    vfunc_can_undo_changed(): void
    /**
     * Ends a not undoable action on the buffer.
     * @virtual 
     */
    vfunc_end_not_undoable_action(): void
    /**
     * Perform a single redo. Calling this function when there are no redo operations
     * available is an error. Use gtk_source_undo_manager_can_redo() to find out
     * if there are redo operations available.
     * @virtual 
     */
    vfunc_redo(): void
    /**
     * Perform a single undo. Calling this function when there are no undo operations
     * available is an error. Use gtk_source_undo_manager_can_undo() to find out
     * if there are undo operations available.
     * @virtual 
     */
    vfunc_undo(): void

    // Own signals of GtkSource-3.0.GtkSource.UndoManager

    connect(sigName: "can-redo-changed", callback: UndoManager.CanRedoChangedSignalCallback): number
    connect_after(sigName: "can-redo-changed", callback: UndoManager.CanRedoChangedSignalCallback): number
    emit(sigName: "can-redo-changed", ...args: any[]): void
    connect(sigName: "can-undo-changed", callback: UndoManager.CanUndoChangedSignalCallback): number
    connect_after(sigName: "can-undo-changed", callback: UndoManager.CanUndoChangedSignalCallback): number
    emit(sigName: "can-undo-changed", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.UndoManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UndoManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.UndoManager

    static name: string
    static $gtype: GObject.GType<UndoManager>

    // Constructors of GtkSource-3.0.GtkSource.UndoManager

    constructor(config?: UndoManager.ConstructorProperties) 
    _init(config?: UndoManager.ConstructorProperties): void
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `bracket-matched`
     */
    export interface BracketMatchedSignalCallback {
        ($obj: Buffer, iter: Gtk.TextIter | null, state: BracketMatchType): void
    }

    /**
     * Signal callback interface for `highlight-updated`
     */
    export interface HighlightUpdatedSignalCallback {
        ($obj: Buffer, start: Gtk.TextIter, end: Gtk.TextIter): void
    }

    /**
     * Signal callback interface for `redo`
     */
    export interface RedoSignalCallback {
        ($obj: Buffer): void
    }

    /**
     * Signal callback interface for `source-mark-updated`
     */
    export interface SourceMarkUpdatedSignalCallback {
        ($obj: Buffer, mark: Gtk.TextMark): void
    }

    /**
     * Signal callback interface for `undo`
     */
    export interface UndoSignalCallback {
        ($obj: Buffer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextBuffer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Buffer

        /**
         * Whether to highlight matching brackets in the buffer.
         */
        highlight_matching_brackets?: boolean | null
        /**
         * Whether to highlight syntax in the buffer.
         */
        highlight_syntax?: boolean | null
        /**
         * Whether the buffer has an implicit trailing newline. See
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        implicit_trailing_newline?: boolean | null
        language?: Language | null
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        max_undo_levels?: number | null
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        style_scheme?: StyleScheme | null
        undo_manager?: UndoManager | null
        /**
         * Whether to highlight matching brackets in the buffer.
         */
        highlightMatchingBrackets?: boolean | null
        /**
         * Whether to highlight syntax in the buffer.
         */
        highlightSyntax?: boolean | null
        /**
         * Whether the buffer has an implicit trailing newline. See
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        implicitTrailingNewline?: boolean | null
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        maxUndoLevels?: number | null
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        styleScheme?: StyleScheme | null
        undoManager?: UndoManager | null
    }

}

export interface Buffer {

    // Own properties of GtkSource-3.0.GtkSource.Buffer

    readonly can_redo: boolean
    readonly canRedo: boolean
    readonly can_undo: boolean
    readonly canUndo: boolean
    /**
     * Whether to highlight matching brackets in the buffer.
     */
    highlight_matching_brackets: boolean
    /**
     * Whether to highlight matching brackets in the buffer.
     */
    highlightMatchingBrackets: boolean
    /**
     * Whether to highlight syntax in the buffer.
     */
    highlight_syntax: boolean
    /**
     * Whether to highlight syntax in the buffer.
     */
    highlightSyntax: boolean
    /**
     * Whether the buffer has an implicit trailing newline. See
     * gtk_source_buffer_set_implicit_trailing_newline().
     */
    implicit_trailing_newline: boolean
    /**
     * Whether the buffer has an implicit trailing newline. See
     * gtk_source_buffer_set_implicit_trailing_newline().
     */
    implicitTrailingNewline: boolean
    language: Language
    /**
     * Number of undo levels for the buffer. -1 means no limit. This property
     * will only affect the default undo manager.
     */
    max_undo_levels: number
    /**
     * Number of undo levels for the buffer. -1 means no limit. This property
     * will only affect the default undo manager.
     */
    maxUndoLevels: number
    /**
     * Style scheme. It contains styles for syntax highlighting, optionally
     * foreground, background, cursor color, current line color, and matching
     * brackets style.
     */
    style_scheme: StyleScheme
    /**
     * Style scheme. It contains styles for syntax highlighting, optionally
     * foreground, background, cursor color, current line color, and matching
     * brackets style.
     */
    styleScheme: StyleScheme
    undo_manager: UndoManager
    undoManager: UndoManager

    // Own fields of GtkSource-3.0.GtkSource.Buffer

    parent_instance: Gtk.TextBuffer & GObject.Object
    priv: any

    // Owm methods of GtkSource-3.0.GtkSource.Buffer

    /**
     * Moves `iter` to the position of the previous #GtkSourceMark of the given
     * category. Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * previous source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     * @returns whether @iter was moved.
     */
    backward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean
    /**
     * Marks the beginning of a not undoable action on the buffer,
     * disabling the undo manager.  Typically you would call this function
     * before initially setting the contents of the buffer (e.g. when
     * loading a file in a text editor).
     * 
     * You may nest gtk_source_buffer_begin_not_undoable_action() /
     * gtk_source_buffer_end_not_undoable_action() blocks.
     */
    begin_not_undoable_action(): void
    /**
     * Changes the case of the text between the specified iterators.
     * @param case_type how to change the case.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Creates a source mark in the `buffer` of category `category`.  A source mark is
     * a #GtkTextMark but organised into categories. Depending on the category
     * a pixbuf can be specified that will be displayed along the line of the mark.
     * 
     * Like a #GtkTextMark, a #GtkSourceMark can be anonymous if the
     * passed `name` is %NULL.  Also, the buffer owns the marks so you
     * shouldn't unreference it.
     * 
     * Marks always have left gravity and are moved to the beginning of
     * the line when the user deletes the line they were in.
     * 
     * Typical uses for a source mark are bookmarks, breakpoints, current
     * executing instruction indication in a source file, etc..
     * @param name the name of the mark, or %NULL.
     * @param category a string defining the mark category.
     * @param where location to place the mark.
     * @returns a new #GtkSourceMark, owned by the buffer.
     */
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark
    /**
     * Marks the end of a not undoable action on the buffer.  When the
     * last not undoable block is closed through the call to this
     * function, the list of undo actions is cleared and the undo manager
     * is re-enabled.
     */
    end_not_undoable_action(): void
    /**
     * Forces buffer to analyze and highlight the given area synchronously.
     * 
     * <note>
     *   <para>
     *     This is a potentially slow operation and should be used only
     *     when you need to make sure that some text not currently
     *     visible is highlighted, for instance before printing.
     *   </para>
     * </note>
     * @param start start of the area to highlight.
     * @param end end of the area to highlight.
     */
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Moves `iter` to the position of the next #GtkSourceMark of the given
     * `category`. Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * next source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     * @returns whether @iter was moved.
     */
    forward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean
    /**
     * Get all defined context classes at `iter`.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @returns a new %NULL terminated array of context class names. Use g_strfreev() to free the array if it is no longer needed.
     */
    get_context_classes_at_iter(iter: Gtk.TextIter): string[]
    /**
     * Determines whether bracket match highlighting is activated for the
     * source buffer.
     * @returns %TRUE if the source buffer will highlight matching brackets.
     */
    get_highlight_matching_brackets(): boolean
    /**
     * Determines whether syntax highlighting is activated in the source
     * buffer.
     * @returns %TRUE if syntax highlighting is enabled, %FALSE otherwise.
     */
    get_highlight_syntax(): boolean
    get_implicit_trailing_newline(): boolean
    /**
     * Returns the #GtkSourceLanguage associated with the buffer,
     * see gtk_source_buffer_set_language().  The returned object should not be
     * unreferenced by the user.
     * @returns the #GtkSourceLanguage associated with the buffer, or %NULL.
     */
    get_language(): Language | null
    /**
     * Determines the number of undo levels the buffer will track for buffer edits.
     * @returns the maximum number of possible undo levels or -1 if no limit is set.
     */
    get_max_undo_levels(): number
    /**
     * Returns the list of marks of the given category at `iter`. If `category`
     * is %NULL it returns all marks at `iter`.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     * @returns  a newly allocated #GSList.
     */
    get_source_marks_at_iter(iter: Gtk.TextIter, category: string | null): Mark[]
    /**
     * Returns the list of marks of the given category at `line`.
     * If `category` is %NULL, all marks at `line` are returned.
     * @param line a line number.
     * @param category category to search for, or %NULL
     * @returns  a newly allocated #GSList.
     */
    get_source_marks_at_line(line: number, category: string | null): Mark[]
    /**
     * Returns the #GtkSourceStyleScheme associated with the buffer,
     * see gtk_source_buffer_set_style_scheme().
     * The returned object should not be unreferenced by the user.
     * @returns the #GtkSourceStyleScheme associated with the buffer, or %NULL.
     */
    get_style_scheme(): StyleScheme | null
    /**
     * Returns the #GtkSourceUndoManager associated with the buffer,
     * see gtk_source_buffer_set_undo_manager().  The returned object should not be
     * unreferenced by the user.
     * @returns the #GtkSourceUndoManager associated with the buffer, or %NULL.
     */
    get_undo_manager(): UndoManager | null
    /**
     * Moves backward to the next toggle (on or off) of the context class. If no
     * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param context_class the context class.
     * @returns whether we found a context class toggle before @iter
     */
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    /**
     * Moves forward to the next toggle (on or off) of the context class. If no
     * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param context_class the context class.
     * @returns whether we found a context class toggle after @iter
     */
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean
    /**
     * Check if the class `context_class` is set on `iter`.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param context_class class to search for.
     * @returns whether @iter has the context class.
     */
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean
    /**
     * Joins the lines of text between the specified iterators.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
     * to check whether a call to this function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::redo signal.
     */
    redo(): void
    /**
     * Remove all marks of `category` between `start` and `end` from the buffer.
     * If `category` is NULL, all marks in the range will be removed.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param category category to search for, or %NULL.
     */
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void
    /**
     * Controls the bracket match highlighting function in the buffer.  If
     * activated, when you position your cursor over a bracket character
     * (a parenthesis, a square bracket, etc.) the matching opening or
     * closing bracket character will be highlighted.
     * @param highlight %TRUE if you want matching brackets highlighted.
     */
    set_highlight_matching_brackets(highlight: boolean): void
    /**
     * Controls whether syntax is highlighted in the buffer.
     * 
     * If `highlight` is %TRUE, the text will be highlighted according to the syntax
     * patterns specified in the #GtkSourceLanguage set with
     * gtk_source_buffer_set_language().
     * 
     * If `highlight` is %FALSE, syntax highlighting is disabled and all the
     * #GtkTextTag objects that have been added by the syntax highlighting engine
     * are removed from the buffer.
     * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
     */
    set_highlight_syntax(highlight: boolean): void
    /**
     * Sets whether the `buffer` has an implicit trailing newline.
     * 
     * If an explicit trailing newline is present in a #GtkTextBuffer, #GtkTextView
     * shows it as an empty line. This is generally not what the user expects.
     * 
     * If `implicit_trailing_newline` is %TRUE (the default value):
     *  - when a #GtkSourceFileLoader loads the content of a file into the `buffer,`
     *    the trailing newline (if present in the file) is not inserted into the
     *    `buffer`.
     *  - when a #GtkSourceFileSaver saves the content of the `buffer` into a file, a
     *    trailing newline is added to the file.
     * 
     * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
     * content is not modified when loaded into the `buffer,` and the `buffer'`s
     * content is not modified when saved into a file.
     * @param implicit_trailing_newline the new value.
     */
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void
    /**
     * Associates a #GtkSourceLanguage with the buffer.
     * 
     * Note that a #GtkSourceLanguage affects not only the syntax highlighting, but
     * also the [context classes][context-classes]. If you want to disable just the
     * syntax highlighting, see gtk_source_buffer_set_highlight_syntax().
     * 
     * The buffer holds a reference to `language`.
     * @param language a #GtkSourceLanguage to set, or %NULL.
     */
    set_language(language: Language | null): void
    /**
     * Sets the number of undo levels for user actions the buffer will
     * track.  If the number of user actions exceeds the limit set by this
     * function, older actions will be discarded.
     * 
     * If `max_undo_levels` is -1, the undo/redo is unlimited.
     * 
     * If `max_undo_levels` is 0, the undo/redo is disabled.
     * @param max_undo_levels the desired maximum number of undo levels.
     */
    set_max_undo_levels(max_undo_levels: number): void
    /**
     * Sets a #GtkSourceStyleScheme to be used by the buffer and the view.
     * 
     * Note that a #GtkSourceStyleScheme affects not only the syntax highlighting,
     * but also other #GtkSourceView features such as highlighting the current line,
     * matching brackets, the line numbers, etc.
     * 
     * Instead of setting a %NULL `scheme,` it is better to disable syntax
     * highlighting with gtk_source_buffer_set_highlight_syntax(), and setting the
     * #GtkSourceStyleScheme with the "classic" or "tango" ID, because those two
     * style schemes follow more closely the GTK+ theme (for example for the
     * background color).
     * 
     * The buffer holds a reference to `scheme`.
     * @param scheme a #GtkSourceStyleScheme or %NULL.
     */
    set_style_scheme(scheme: StyleScheme | null): void
    /**
     * Set the buffer undo manager. If `manager` is %NULL the default undo manager
     * will be set.
     * @param manager A #GtkSourceUndoManager or %NULL.
     */
    set_undo_manager(manager: UndoManager | null): void
    /**
     * Sort the lines of text between the specified iterators.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param flags #GtkSourceSortFlags specifying how the sort should behave
     * @param column sort considering the text starting at the given column
     */
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    /**
     * Undoes the last user action which modified the buffer.  Use
     * gtk_source_buffer_can_undo() to check whether a call to this
     * function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::undo signal.
     */
    undo(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.Buffer

    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void
    /**
     * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
     * to check whether a call to this function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::redo signal.
     * @virtual 
     */
    vfunc_redo(): void
    /**
     * Undoes the last user action which modified the buffer.  Use
     * gtk_source_buffer_can_undo() to check whether a call to this
     * function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::undo signal.
     * @virtual 
     */
    vfunc_undo(): void

    // Own signals of GtkSource-3.0.GtkSource.Buffer

    connect(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    connect_after(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType, ...args: any[]): void
    connect(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    connect_after(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter, ...args: any[]): void
    connect(sigName: "redo", callback: Buffer.RedoSignalCallback): number
    connect_after(sigName: "redo", callback: Buffer.RedoSignalCallback): number
    emit(sigName: "redo", ...args: any[]): void
    connect(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    connect_after(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark, ...args: any[]): void
    connect(sigName: "undo", callback: Buffer.UndoSignalCallback): number
    connect_after(sigName: "undo", callback: Buffer.UndoSignalCallback): number
    emit(sigName: "undo", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.Buffer

    connect(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-redo", ...args: any[]): void
    connect(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-undo", ...args: any[]): void
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-matching-brackets", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implicit-trailing-newline", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-undo-levels", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::undo-manager", ...args: any[]): void
    connect(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copy-target-list", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paste-target-list", ...args: any[]): void
    connect(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-table", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Buffer extends Gtk.TextBuffer {

    // Own properties of GtkSource-3.0.GtkSource.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of GtkSource-3.0.GtkSource.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     * @returns a new source buffer.
     */
    constructor(table: Gtk.TextTagTable | null) 
    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     * @returns a new source buffer.
     */
    static new(table: Gtk.TextTagTable | null): Buffer

    // Overloads of new

    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     * @returns a new text buffer
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    /**
     * Creates a new source buffer using the highlighting patterns in
     * `language`.  This is equivalent to creating a new source buffer with
     * a new tag table and then calling gtk_source_buffer_set_language().
     * @constructor 
     * @param language a #GtkSourceLanguage.
     * @returns a new source buffer which will highlight text according to the highlighting patterns in @language.
     */
    static new_with_language(language: Language): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module Completion {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-proposal`
     */
    export interface ActivateProposalSignalCallback {
        ($obj: Completion): void
    }

    /**
     * Signal callback interface for `hide`
     */
    export interface HideSignalCallback {
        ($obj: Completion): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    export interface MoveCursorSignalCallback {
        ($obj: Completion, step: Gtk.ScrollStep, num: number): void
    }

    /**
     * Signal callback interface for `move-page`
     */
    export interface MovePageSignalCallback {
        ($obj: Completion, step: Gtk.ScrollStep, num: number): void
    }

    /**
     * Signal callback interface for `populate-context`
     */
    export interface PopulateContextSignalCallback {
        ($obj: Completion, context: CompletionContext): void
    }

    /**
     * Signal callback interface for `show`
     */
    export interface ShowSignalCallback {
        ($obj: Completion): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Completion

        /**
         * Number of keyboard accelerators to show for the first proposals. For
         * example, to activate the first proposal, the user can press
         * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
         */
        accelerators?: number | null
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        auto_complete_delay?: number | null
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         * 
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        proposal_page_size?: number | null
        /**
         * The scroll page size of the provider pages in the completion window.
         * 
         * See the #GtkSourceCompletion::move-page signal.
         */
        provider_page_size?: number | null
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        remember_info_visibility?: boolean | null
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        select_on_show?: boolean | null
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        show_headers?: boolean | null
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        show_icons?: boolean | null
        /**
         * The #GtkSourceView bound to the completion object.
         */
        view?: View | null
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        autoCompleteDelay?: number | null
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         * 
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        proposalPageSize?: number | null
        /**
         * The scroll page size of the provider pages in the completion window.
         * 
         * See the #GtkSourceCompletion::move-page signal.
         */
        providerPageSize?: number | null
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        rememberInfoVisibility?: boolean | null
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        selectOnShow?: boolean | null
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        showHeaders?: boolean | null
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        showIcons?: boolean | null
    }

}

export interface Completion extends Gtk.Buildable {

    // Own properties of GtkSource-3.0.GtkSource.Completion

    /**
     * Number of keyboard accelerators to show for the first proposals. For
     * example, to activate the first proposal, the user can press
     * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
     */
    accelerators: number
    /**
     * Determines the popup delay (in milliseconds) at which the completion
     * will be shown for interactive completion.
     */
    auto_complete_delay: number
    /**
     * Determines the popup delay (in milliseconds) at which the completion
     * will be shown for interactive completion.
     */
    autoCompleteDelay: number
    /**
     * The scroll page size of the proposals in the completion window. In
     * other words, when <keycap>PageDown</keycap> or
     * <keycap>PageUp</keycap> is pressed, the selected
     * proposal becomes the one which is located one page size backward or
     * forward.
     * 
     * See also the #GtkSourceCompletion::move-cursor signal.
     */
    proposal_page_size: number
    /**
     * The scroll page size of the proposals in the completion window. In
     * other words, when <keycap>PageDown</keycap> or
     * <keycap>PageUp</keycap> is pressed, the selected
     * proposal becomes the one which is located one page size backward or
     * forward.
     * 
     * See also the #GtkSourceCompletion::move-cursor signal.
     */
    proposalPageSize: number
    /**
     * The scroll page size of the provider pages in the completion window.
     * 
     * See the #GtkSourceCompletion::move-page signal.
     */
    provider_page_size: number
    /**
     * The scroll page size of the provider pages in the completion window.
     * 
     * See the #GtkSourceCompletion::move-page signal.
     */
    providerPageSize: number
    /**
     * Determines whether the visibility of the info window should be
     * saved when the completion is hidden, and restored when the completion
     * is shown again.
     */
    remember_info_visibility: boolean
    /**
     * Determines whether the visibility of the info window should be
     * saved when the completion is hidden, and restored when the completion
     * is shown again.
     */
    rememberInfoVisibility: boolean
    /**
     * Determines whether the first proposal should be selected when the
     * completion is first shown.
     */
    select_on_show: boolean
    /**
     * Determines whether the first proposal should be selected when the
     * completion is first shown.
     */
    selectOnShow: boolean
    /**
     * Determines whether provider headers should be shown in the proposal
     * list. It can be useful to disable when there is only one provider.
     */
    show_headers: boolean
    /**
     * Determines whether provider headers should be shown in the proposal
     * list. It can be useful to disable when there is only one provider.
     */
    showHeaders: boolean
    /**
     * Determines whether provider and proposal icons should be shown in
     * the completion popup.
     */
    show_icons: boolean
    /**
     * Determines whether provider and proposal icons should be shown in
     * the completion popup.
     */
    showIcons: boolean
    /**
     * The #GtkSourceView bound to the completion object.
     */
    readonly view: View

    // Own fields of GtkSource-3.0.GtkSource.Completion

    parent_instance: GObject.Object
    priv: CompletionPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Completion

    /**
     * Add a new #GtkSourceCompletionProvider to the completion object. This will
     * add a reference `provider,` so make sure to unref your own copy when you
     * no longer need it.
     * @param provider a #GtkSourceCompletionProvider.
     * @returns %TRUE if @provider was successfully added, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
     */
    add_provider(provider: CompletionProvider): boolean
    /**
     * Block interactive completion. This can be used to disable interactive
     * completion when inserting or deleting text from the buffer associated with
     * the completion. Use gtk_source_completion_unblock_interactive() to enable
     * interactive completion again.
     * 
     * This function may be called multiple times. It will continue to block
     * interactive completion until gtk_source_completion_unblock_interactive()
     * has been called the same number of times.
     */
    block_interactive(): void
    /**
     * Create a new #GtkSourceCompletionContext for `completion`. The position where
     * the completion occurs can be specified by `position`. If `position` is %NULL,
     * the current cursor position will be used.
     * @param position a #GtkTextIter, or %NULL.
     * @returns a new #GtkSourceCompletionContext. The reference being returned is a 'floating' reference, so if you invoke gtk_source_completion_show() with this context you don't need to unref it.
     */
    create_context(position: Gtk.TextIter | null): CompletionContext
    /**
     * The info widget is the window where the completion displays optional extra
     * information of the proposal.
     * @returns The #GtkSourceCompletionInfo window                           associated with @completion.
     */
    get_info_window(): CompletionInfo
    /**
     * Get list of providers registered on `completion`. The returned list is owned
     * by the completion and should not be freed.
     * @returns  list of #GtkSourceCompletionProvider.
     */
    get_providers(): CompletionProvider[]
    /**
     * The #GtkSourceView associated with `completion,` or %NULL if the view has been
     * destroyed.
     * @returns The #GtkSourceView associated with @completion, or %NULL.
     */
    get_view(): View | null
    /**
     * Hides the completion if it is active (visible).
     */
    hide(): void
    /**
     * Move the completion window to a specific iter.
     * @param iter a #GtkTextIter.
     */
    move_window(iter: Gtk.TextIter): void
    /**
     * Remove `provider` from the completion.
     * @param provider a #GtkSourceCompletionProvider.
     * @returns %TRUE if @provider was successfully removed, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
     */
    remove_provider(provider: CompletionProvider): boolean
    /**
     * Starts a new completion with the specified #GtkSourceCompletionContext and
     * a list of potential candidate providers for completion.
     * 
     * It can be convenient for showing a completion on-the-fly, without the need to
     * add or remove providers to the #GtkSourceCompletion.
     * 
     * Another solution is to add providers with
     * gtk_source_completion_add_provider(), and implement
     * gtk_source_completion_provider_match() for each provider.
     * @param providers  a list of #GtkSourceCompletionProvider, or %NULL.
     * @param context The #GtkSourceCompletionContext with which to start the completion.
     * @returns %TRUE if it was possible to the show completion window.
     */
    show(providers: CompletionProvider[] | null, context: CompletionContext): boolean
    /**
     * Unblock interactive completion. This can be used after using
     * gtk_source_completion_block_interactive() to enable interactive completion
     * again.
     */
    unblock_interactive(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.Completion

    vfunc_activate_proposal(): void
    /**
     * Hides the completion if it is active (visible).
     * @virtual 
     */
    vfunc_hide(): void
    vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void
    vfunc_move_page(step: Gtk.ScrollStep, num: number): void
    vfunc_populate_context(context: CompletionContext): void
    vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean
    vfunc_show(): void

    // Own signals of GtkSource-3.0.GtkSource.Completion

    connect(sigName: "activate-proposal", callback: Completion.ActivateProposalSignalCallback): number
    connect_after(sigName: "activate-proposal", callback: Completion.ActivateProposalSignalCallback): number
    emit(sigName: "activate-proposal", ...args: any[]): void
    connect(sigName: "hide", callback: Completion.HideSignalCallback): number
    connect_after(sigName: "hide", callback: Completion.HideSignalCallback): number
    emit(sigName: "hide", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Completion.MoveCursorSignalCallback): number
    connect_after(sigName: "move-cursor", callback: Completion.MoveCursorSignalCallback): number
    emit(sigName: "move-cursor", step: Gtk.ScrollStep, num: number, ...args: any[]): void
    connect(sigName: "move-page", callback: Completion.MovePageSignalCallback): number
    connect_after(sigName: "move-page", callback: Completion.MovePageSignalCallback): number
    emit(sigName: "move-page", step: Gtk.ScrollStep, num: number, ...args: any[]): void
    connect(sigName: "populate-context", callback: Completion.PopulateContextSignalCallback): number
    connect_after(sigName: "populate-context", callback: Completion.PopulateContextSignalCallback): number
    emit(sigName: "populate-context", context: CompletionContext, ...args: any[]): void
    connect(sigName: "show", callback: Completion.ShowSignalCallback): number
    connect_after(sigName: "show", callback: Completion.ShowSignalCallback): number
    emit(sigName: "show", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.Completion

    connect(sigName: "notify::accelerators", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accelerators", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accelerators", ...args: any[]): void
    connect(sigName: "notify::auto-complete-delay", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-complete-delay", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-complete-delay", ...args: any[]): void
    connect(sigName: "notify::proposal-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposal-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proposal-page-size", ...args: any[]): void
    connect(sigName: "notify::provider-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-page-size", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-page-size", ...args: any[]): void
    connect(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-info-visibility", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remember-info-visibility", ...args: any[]): void
    connect(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-on-show", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::select-on-show", ...args: any[]): void
    connect(sigName: "notify::show-headers", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-headers", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-headers", ...args: any[]): void
    connect(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-icons", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-icons", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Completion extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Completion

    static name: string
    static $gtype: GObject.GType<Completion>

    // Constructors of GtkSource-3.0.GtkSource.Completion

    constructor(config?: Completion.ConstructorProperties) 
    _init(config?: Completion.ConstructorProperties): void
}

export module CompletionContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        ($obj: CompletionContext): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionContext

        /**
         * The completion activation
         */
        activation?: CompletionActivation | null
        /**
         * The #GtkSourceCompletion associated with the context.
         */
        completion?: Completion | null
        /**
         * The #GtkTextIter at which the completion is invoked.
         */
        iter?: Gtk.TextIter | null
    }

}

export interface CompletionContext {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContext

    /**
     * The completion activation
     */
    activation: CompletionActivation
    /**
     * The #GtkSourceCompletion associated with the context.
     */
    readonly completion: Completion
    /**
     * The #GtkTextIter at which the completion is invoked.
     */
    iter: Gtk.TextIter

    // Own fields of GtkSource-3.0.GtkSource.CompletionContext

    parent: GObject.InitiallyUnowned
    priv: CompletionContextPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionContext

    /**
     * Providers can use this function to add proposals to the completion. They
     * can do so asynchronously by means of the `finished` argument. Providers must
     * ensure that they always call this function with `finished` set to %TRUE
     * once each population (even if no proposals need to be added).
     * Population occurs when the gtk_source_completion_provider_populate()
     * function is called.
     * @param provider a #GtkSourceCompletionProvider.
     * @param proposals The list of proposals to add.
     * @param finished Whether the provider is finished adding proposals.
     */
    add_proposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    /**
     * Get the context activation.
     * @returns The context activation.
     */
    get_activation(): CompletionActivation
    /**
     * Get the iter at which the completion was invoked. Providers can use this
     * to determine how and if to match proposals.
     * @returns %TRUE if @iter is correctly set, %FALSE otherwise.
     */
    get_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionContext

    vfunc_cancelled(): void

    // Own signals of GtkSource-3.0.GtkSource.CompletionContext

    connect(sigName: "cancelled", callback: CompletionContext.CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: CompletionContext.CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionContext

    connect(sigName: "notify::activation", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activation", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::iter", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iter", callback: (($obj: CompletionContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionContext extends GObject.InitiallyUnowned {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContext

    static name: string
    static $gtype: GObject.GType<CompletionContext>

    // Constructors of GtkSource-3.0.GtkSource.CompletionContext

    constructor(config?: CompletionContext.ConstructorProperties) 
    _init(config?: CompletionContext.ConstructorProperties): void
}

export module CompletionInfo {

    // Signal callback interfaces

    /**
     * Signal callback interface for `before-show`
     */
    export interface BeforeShowSignalCallback {
        ($obj: CompletionInfo): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface CompletionInfo extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of GtkSource-3.0.GtkSource.CompletionInfo

    parent: Gtk.Window & Gtk.Container
    priv: any

    // Owm methods of GtkSource-3.0.GtkSource.CompletionInfo

    /**
     * Get the current content widget.
     * @returns The current content widget.
     */
    get_widget(): Gtk.Widget
    /**
     * Moves the #GtkSourceCompletionInfo to `iter`. If `iter` is %NULL `info` is
     * moved to the cursor position. Moving will respect the #GdkGravity setting
     * of the info window and will ensure the line at `iter` is not occluded by
     * the window.
     * @param view a #GtkTextView on which the info window should be positioned.
     * @param iter a #GtkTextIter.
     */
    move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void
    /**
     * Sets the content widget of the info window. See that the previous widget will
     * lose a reference and it can be destroyed, so if you do not want this to
     * happen you must use g_object_ref() before calling this method.
     * @param widget a #GtkWidget.
     */
    set_widget(widget: Gtk.Widget | null): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionInfo

    vfunc_before_show(): void

    // Own signals of GtkSource-3.0.GtkSource.CompletionInfo

    connect(sigName: "before-show", callback: CompletionInfo.BeforeShowSignalCallback): number
    connect_after(sigName: "before-show", callback: CompletionInfo.BeforeShowSignalCallback): number
    emit(sigName: "before-show", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionInfo

    connect(sigName: "notify::accept-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CompletionInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionInfo extends Gtk.Window {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfo

    static name: string
    static $gtype: GObject.GType<CompletionInfo>

    // Constructors of GtkSource-3.0.GtkSource.CompletionInfo

    constructor(config?: CompletionInfo.ConstructorProperties) 
    constructor() 
    static new(): CompletionInfo

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: CompletionInfo.ConstructorProperties): void
}

export module CompletionItem {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProposal.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionItem

        /**
         * The #GIcon for the icon to be shown for this proposal.
         */
        gicon?: Gio.Icon | null
        /**
         * The #GdkPixbuf for the icon to be shown for this proposal.
         */
        icon?: GdkPixbuf.Pixbuf | null
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        icon_name?: string | null
        /**
         * Optional extra information to be shown for this proposal.
         */
        info?: string | null
        /**
         * Label to be shown for this proposal.
         */
        label?: string | null
        /**
         * Label with markup to be shown for this proposal.
         */
        markup?: string | null
        /**
         * Proposal text.
         */
        text?: string | null
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        iconName?: string | null
    }

}

export interface CompletionItem extends CompletionProposal {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItem

    /**
     * The #GIcon for the icon to be shown for this proposal.
     */
    gicon: Gio.Icon
    /**
     * The #GdkPixbuf for the icon to be shown for this proposal.
     */
    icon: GdkPixbuf.Pixbuf
    /**
     * The icon name for the icon to be shown for this proposal.
     */
    icon_name: string | null
    /**
     * The icon name for the icon to be shown for this proposal.
     */
    iconName: string | null
    /**
     * Optional extra information to be shown for this proposal.
     */
    info: string | null
    /**
     * Label to be shown for this proposal.
     */
    label: string | null
    /**
     * Label with markup to be shown for this proposal.
     */
    markup: string | null
    /**
     * Proposal text.
     */
    text: string | null

    // Own fields of GtkSource-3.0.GtkSource.CompletionItem

    parent: GObject.Object
    priv: CompletionItemPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionItem

    set_gicon(gicon: Gio.Icon | null): void
    set_icon(icon: GdkPixbuf.Pixbuf | null): void
    set_icon_name(icon_name: string | null): void
    set_info(info: string | null): void
    set_label(label: string | null): void
    set_markup(markup: string | null): void
    set_text(text: string | null): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionItem

    connect(sigName: "notify::gicon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::info", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CompletionItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionItem extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItem

    static name: string
    static $gtype: GObject.GType<CompletionItem>

    // Constructors of GtkSource-3.0.GtkSource.CompletionItem

    constructor(config?: CompletionItem.ConstructorProperties) 
    /**
     * Create a new #GtkSourceCompletionItem with label `label,` icon `icon` and
     * extra information `info`. Both `icon` and `info` can be %NULL in which case
     * there will be no icon shown and no extra information available.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     * @returns a new #GtkSourceCompletionItem.
     */
    constructor(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null) 
    /**
     * Create a new #GtkSourceCompletionItem with label `label,` icon `icon` and
     * extra information `info`. Both `icon` and `info` can be %NULL in which case
     * there will be no icon shown and no extra information available.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     * @returns a new #GtkSourceCompletionItem.
     */
    static new(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    /**
     * Creates a new #GtkSourceCompletionItem from a stock item. If `label` is %NULL,
     * the stock label will be used.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param stock The stock icon.
     * @param info The item extra information.
     * @returns a new #GtkSourceCompletionItem.
     */
    static new_from_stock(label: string | null, text: string, stock: string, info: string | null): CompletionItem
    /**
     * Create a new #GtkSourceCompletionItem with markup label `markup,` icon
     * `icon` and extra information `info`. Both `icon` and `info` can be %NULL in
     * which case there will be no icon shown and no extra information available.
     * @constructor 
     * @param markup The item markup label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     * @returns a new #GtkSourceCompletionItem.
     */
    static new_with_markup(markup: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    _init(config?: CompletionItem.ConstructorProperties): void
    /**
     * Creates a new #GtkSourceCompletionItem. The desired properties need to be set
     * afterwards.
     * @returns a new #GtkSourceCompletionItem.
     */
    static new2(): CompletionItem
}

export module CompletionWords {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProvider.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionWords

        /**
         * The type of activation.
         */
        activation?: CompletionActivation | null
        icon?: GdkPixbuf.Pixbuf | null
        interactive_delay?: number | null
        minimum_word_size?: number | null
        name?: string | null
        priority?: number | null
        proposals_batch_size?: number | null
        scan_batch_size?: number | null
        interactiveDelay?: number | null
        minimumWordSize?: number | null
        proposalsBatchSize?: number | null
        scanBatchSize?: number | null
    }

}

export interface CompletionWords extends CompletionProvider {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWords

    /**
     * The type of activation.
     */
    activation: CompletionActivation
    icon: GdkPixbuf.Pixbuf
    interactive_delay: number
    interactiveDelay: number
    minimum_word_size: number
    minimumWordSize: number
    name: string | null
    priority: number
    proposals_batch_size: number
    proposalsBatchSize: number
    scan_batch_size: number
    scanBatchSize: number

    // Own fields of GtkSource-3.0.GtkSource.CompletionWords

    parent: GObject.Object
    priv: CompletionWordsPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionWords

    /**
     * Registers `buffer` in the `words` provider.
     * @param buffer a #GtkTextBuffer
     */
    register(buffer: Gtk.TextBuffer): void
    /**
     * Unregisters `buffer` from the `words` provider.
     * @param buffer a #GtkTextBuffer
     */
    unregister(buffer: Gtk.TextBuffer): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionWords

    connect(sigName: "notify::activation", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activation", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::interactive-delay", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive-delay", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interactive-delay", ...args: any[]): void
    connect(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-word-size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposals-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proposals-batch-size", ...args: any[]): void
    connect(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-batch-size", callback: (($obj: CompletionWords, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scan-batch-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CompletionWords extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWords

    static name: string
    static $gtype: GObject.GType<CompletionWords>

    // Constructors of GtkSource-3.0.GtkSource.CompletionWords

    constructor(config?: CompletionWords.ConstructorProperties) 
    constructor(name: string | null, icon: GdkPixbuf.Pixbuf | null) 
    static new(name: string | null, icon: GdkPixbuf.Pixbuf | null): CompletionWords
    _init(config?: CompletionWords.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of GtkSource-3.0.GtkSource.File

    /**
     * The compression type.
     */
    readonly compression_type: CompressionType
    /**
     * The compression type.
     */
    readonly compressionType: CompressionType
    /**
     * The character encoding, initially %NULL. After a successful file
     * loading or saving operation, the encoding is non-%NULL.
     */
    readonly encoding: Encoding
    /**
     * The location.
     */
    location: Gio.File
    /**
     * The line ending type.
     */
    readonly newline_type: NewlineType
    /**
     * The line ending type.
     */
    readonly newlineType: NewlineType
    /**
     * Whether the file is read-only or not. The value of this property is
     * not updated automatically (there is no file monitors).
     */
    readonly read_only: boolean
    /**
     * Whether the file is read-only or not. The value of this property is
     * not updated automatically (there is no file monitors).
     */
    readonly readOnly: boolean

    // Own fields of GtkSource-3.0.GtkSource.File

    parent: GObject.Object
    priv: FilePrivate

    // Owm methods of GtkSource-3.0.GtkSource.File

    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #GtkSourceFile doesn't create a #GFileMonitor to track those properties, so
     * this function needs to be called instead. Creating lots of #GFileMonitor's
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See gtk_source_file_is_local().
     */
    check_file_on_disk(): void
    get_compression_type(): CompressionType
    /**
     * The encoding is initially %NULL. After a successful file loading or saving
     * operation, the encoding is non-%NULL.
     * @returns the character encoding.
     */
    get_encoding(): Encoding
    get_location(): Gio.File
    get_newline_type(): NewlineType
    /**
     * Returns whether the file has been deleted. If the
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     * @returns whether the file has been deleted.
     */
    is_deleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     * @returns whether the file is externally modified.
     */
    is_externally_modified(): boolean
    /**
     * Returns whether the file is local. If the #GtkSourceFile:location is %NULL,
     * returns %FALSE.
     * @returns whether the file is local.
     */
    is_local(): boolean
    /**
     * Returns whether the file is read-only. If the
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     * @returns whether the file is read-only.
     */
    is_readonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    set_location(location: Gio.File | null): void

    // Class property signals of GtkSource-3.0.GtkSource.File

    connect(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class File extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of GtkSource-3.0.GtkSource.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.FileLoader

        /**
         * The #GtkSourceBuffer to load the contents into. The
         * #GtkSourceFileLoader object has a weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        input_stream?: Gio.InputStream | null
        /**
         * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
         * %NULL, by default the location is taken from the #GtkSourceFile at
         * construction time.
         */
        location?: Gio.File | null
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        inputStream?: Gio.InputStream | null
    }

}

export interface FileLoader {

    // Own properties of GtkSource-3.0.GtkSource.FileLoader

    /**
     * The #GtkSourceBuffer to load the contents into. The
     * #GtkSourceFileLoader object has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GInputStream to load. Useful for reading stdin. If this property
     * is set, the #GtkSourceFileLoader:location property is ignored.
     */
    readonly input_stream: Gio.InputStream
    /**
     * The #GInputStream to load. Useful for reading stdin. If this property
     * is set, the #GtkSourceFileLoader:location property is ignored.
     */
    readonly inputStream: Gio.InputStream
    /**
     * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
     * %NULL, by default the location is taken from the #GtkSourceFile at
     * construction time.
     */
    readonly location: Gio.File

    // Own fields of GtkSource-3.0.GtkSource.FileLoader

    parent: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of GtkSource-3.0.GtkSource.FileLoader

    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_input_stream(): Gio.InputStream | null
    get_location(): Gio.File | null
    get_newline_type(): NewlineType
    /**
     * Loads asynchronously the file or input stream contents into the
     * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
     * function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * Loads asynchronously the file or input stream contents into the
     * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
     * function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @returns A Promise of: whether the contents has been loaded successfully.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes a file loading started with gtk_source_file_loader_load_async().
     * 
     * If the contents has been loaded, the following #GtkSourceFile properties will
     * be updated: the location, the encoding, the newline type and the compression
     * type.
     * @param result a #GAsyncResult.
     * @returns whether the contents has been loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the candidate encodings for the file loading. The encodings are tried in
     * the same order as the list.
     * 
     * For convenience, `candidate_encodings` can contain duplicates. Only the first
     * occurrence of a duplicated encoding is kept in the list.
     * 
     * By default the candidate encodings are (in that order in the list):
     * 1. If set, the #GtkSourceFile's encoding as returned by
     * gtk_source_file_get_encoding().
     * 2. The default candidates as returned by
     * gtk_source_encoding_get_default_candidates().
     * @param candidate_encodings a list of   #GtkSourceEncoding<!-- -->s.
     */
    set_candidate_encodings(candidate_encodings: Encoding[]): void

    // Class property signals of GtkSource-3.0.GtkSource.FileLoader

    connect(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FileLoader extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of GtkSource-3.0.GtkSource.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from the
     * #GtkSourceFile's location. If not already done, call
     * gtk_source_file_set_location() before calling this constructor. The previous
     * location is anyway not needed, because as soon as the file loading begins,
     * the `buffer` is emptied.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     * @returns a new #GtkSourceFileLoader object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from the
     * #GtkSourceFile's location. If not already done, call
     * gtk_source_file_set_location() before calling this constructor. The previous
     * location is anyway not needed, because as soon as the file loading begins,
     * the `buffer` is emptied.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     * @returns a new #GtkSourceFileLoader object.
     */
    static new(buffer: Buffer, file: File): FileLoader
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from `stream`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     * @param stream the #GInputStream to load, e.g. stdin.
     * @returns a new #GtkSourceFileLoader object.
     */
    static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FileSaver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.FileSaver

        /**
         * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
         * weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The compression type.
         */
        compression_type?: CompressionType | null
        /**
         * The file's encoding.
         */
        encoding?: Encoding | null
        /**
         * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtkSourceFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newline_type?: NewlineType | null
        /**
         * The compression type.
         */
        compressionType?: CompressionType | null
        /**
         * The newline type.
         */
        newlineType?: NewlineType | null
    }

}

export interface FileSaver {

    // Own properties of GtkSource-3.0.GtkSource.FileSaver

    /**
     * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
     * weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The compression type.
     */
    compression_type: CompressionType
    /**
     * The compression type.
     */
    compressionType: CompressionType
    /**
     * The file's encoding.
     */
    encoding: Encoding
    /**
     * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #GtkSourceFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newline_type: NewlineType
    /**
     * The newline type.
     */
    newlineType: NewlineType

    // Own fields of GtkSource-3.0.GtkSource.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of GtkSource-3.0.GtkSource.FileSaver

    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    /**
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_async

    /**
     * Promisified version of {@link save_async}
     * 
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @returns A Promise of: whether the file was saved successfully.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes a file saving started with gtk_source_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #GtkSourceFile
     * properties will be updated: the location, the encoding, the newline type and
     * the compression type.
     * 
     * Since the 3.20 version, gtk_text_buffer_set_modified() is called with %FALSE
     * if the file has been saved successfully.
     * @param result a #GAsyncResult.
     * @returns whether the file was saved successfully.
     */
    save_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the compression type. By default the compression type is taken from the
     * #GtkSourceFile.
     * @param compression_type the new compression type.
     */
    set_compression_type(compression_type: CompressionType): void
    /**
     * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
     * By default the encoding is taken from the #GtkSourceFile.
     * @param encoding the new encoding, or %NULL for UTF-8.
     */
    set_encoding(encoding: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #GtkSourceFile.
     * @param newline_type the new newline type.
     */
    set_newline_type(newline_type: NewlineType): void

    // Class property signals of GtkSource-3.0.GtkSource.FileSaver

    connect(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FileSaver extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.FileSaver

    static name: string
    static $gtype: GObject.GType<FileSaver>

    // Constructors of GtkSource-3.0.GtkSource.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * #GtkSourceFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtkSourceFile:location.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     * @returns a new #GtkSourceFileSaver object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * #GtkSourceFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtkSourceFile:location.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     * @returns a new #GtkSourceFileSaver object.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #GtkSourceFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #GtkSourceFile:location property. If an error occurs, the previous valid
     * location is still available in #GtkSourceFile.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     * @param target_location the #GFile where to save the buffer to.
     * @returns a new #GtkSourceFileSaver object.
     */
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

export module Gutter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Gutter

        /**
         * The #GtkSourceView of the gutter.
         */
        view?: View | null
        /**
         * The text window type on which the window is placed.
         */
        window_type?: Gtk.TextWindowType | null
        /**
         * The x-padding.
         */
        xpad?: number | null
        /**
         * The y-padding.
         */
        ypad?: number | null
        /**
         * The text window type on which the window is placed.
         */
        windowType?: Gtk.TextWindowType | null
    }

}

export interface Gutter {

    // Own properties of GtkSource-3.0.GtkSource.Gutter

    /**
     * The #GtkSourceView of the gutter.
     */
    readonly view: View
    /**
     * The text window type on which the window is placed.
     */
    readonly window_type: Gtk.TextWindowType
    /**
     * The text window type on which the window is placed.
     */
    readonly windowType: Gtk.TextWindowType
    /**
     * The x-padding.
     */
    xpad: number
    /**
     * The y-padding.
     */
    ypad: number

    // Own fields of GtkSource-3.0.GtkSource.Gutter

    parent: GObject.Object
    priv: GutterPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Gutter

    get_padding(xpad: number, ypad: number): void
    /**
     * Finds the #GtkSourceGutterRenderer at (x, y).
     * @param x The x position to get identified.
     * @param y The y position to get identified.
     * @returns the renderer at (x, y) or %NULL.
     */
    get_renderer_at_pos(x: number, y: number): GutterRenderer | null
    get_view(): View
    /**
     * Get the #GdkWindow of the gutter. The window will only be available when the
     * gutter has at least one, non-zero width, cell renderer packed.
     * @returns the #GdkWindow of the gutter, or %NULL if the gutter has no window.
     */
    get_window(): Gdk.Window
    get_window_type(): Gtk.TextWindowType
    /**
     * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
     * claims its ownership. Otherwise just increases renderer's reference count.
     * `renderer` cannot be already inserted to another gutter.
     * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
     * @param position the renderer position.
     * @returns %TRUE if operation succeeded. Otherwise %FALSE.
     */
    insert(renderer: GutterRenderer, position: number): boolean
    /**
     * Invalidates the drawable area of the gutter. You can use this to force a
     * redraw of the gutter if something has changed and needs to be redrawn.
     */
    queue_draw(): void
    /**
     * Removes `renderer` from `gutter`.
     * @param renderer a #GtkSourceGutterRenderer.
     */
    remove(renderer: GutterRenderer): void
    /**
     * Reorders `renderer` in `gutter` to new `position`.
     * @param renderer a #GtkCellRenderer.
     * @param position the new renderer position.
     */
    reorder(renderer: GutterRenderer, position: number): void
    set_padding(xpad: number, ypad: number): void

    // Class property signals of GtkSource-3.0.GtkSource.Gutter

    connect(sigName: "notify::view", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: Gutter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Gutter extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Gutter

    static name: string
    static $gtype: GObject.GType<Gutter>

    // Constructors of GtkSource-3.0.GtkSource.Gutter

    constructor(config?: Gutter.ConstructorProperties) 
    _init(config?: Gutter.ConstructorProperties): void
}

export module GutterRenderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        ($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    }

    /**
     * Signal callback interface for `query-activatable`
     */
    export interface QueryActivatableSignalCallback {
        ($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `query-data`
     */
    export interface QueryDataSignalCallback {
        ($obj: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    }

    /**
     * Signal callback interface for `query-tooltip`
     */
    export interface QueryTooltipSignalCallback {
        ($obj: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    }

    /**
     * Signal callback interface for `queue-draw`
     */
    export interface QueueDrawSignalCallback {
        ($obj: GutterRenderer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRenderer

        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        alignment_mode?: GutterRendererAlignmentMode | null
        background_rgba?: Gdk.RGBA | null
        background_set?: boolean | null
        size?: number | null
        /**
         * The visibility of the renderer.
         */
        visible?: boolean | null
        /**
         * The horizontal alignment of the renderer. Set to 0 for a left
         * alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        xalign?: number | null
        /**
         * The left and right padding of the renderer.
         */
        xpad?: number | null
        /**
         * The vertical alignment of the renderer. Set to 0 for a top
         * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        yalign?: number | null
        /**
         * The top and bottom padding of the renderer.
         */
        ypad?: number | null
        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        alignmentMode?: GutterRendererAlignmentMode | null
        backgroundRgba?: Gdk.RGBA | null
        backgroundSet?: boolean | null
    }

}

export interface GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRenderer

    /**
     * The alignment mode of the renderer. This can be used to indicate
     * that in the case a cell spans multiple lines (due to text wrapping)
     * the alignment should work on either the full cell, the first line
     * or the last line.
     */
    alignment_mode: GutterRendererAlignmentMode
    /**
     * The alignment mode of the renderer. This can be used to indicate
     * that in the case a cell spans multiple lines (due to text wrapping)
     * the alignment should work on either the full cell, the first line
     * or the last line.
     */
    alignmentMode: GutterRendererAlignmentMode
    background_rgba: Gdk.RGBA
    backgroundRgba: Gdk.RGBA
    background_set: boolean
    backgroundSet: boolean
    size: number
    /**
     * The view on which the renderer is placed.
     */
    readonly view: Gtk.TextView
    /**
     * The visibility of the renderer.
     */
    visible: boolean
    /**
     * The window type of the view on which the renderer is placed (left,
     * or right).
     */
    readonly window_type: Gtk.TextWindowType
    /**
     * The window type of the view on which the renderer is placed (left,
     * or right).
     */
    readonly windowType: Gtk.TextWindowType
    /**
     * The horizontal alignment of the renderer. Set to 0 for a left
     * alignment. 1 for a right alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    xalign: number
    /**
     * The left and right padding of the renderer.
     */
    xpad: number
    /**
     * The vertical alignment of the renderer. Set to 0 for a top
     * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    yalign: number
    /**
     * The top and bottom padding of the renderer.
     */
    ypad: number

    // Own fields of GtkSource-3.0.GtkSource.GutterRenderer

    parent: GObject.InitiallyUnowned

    // Owm methods of GtkSource-3.0.GtkSource.GutterRenderer

    /**
     * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
     * called from #GtkSourceGutter and should never have to be called manually.
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param event the event that triggered the activation
     */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    /**
     * Called when drawing a region begins. The region to be drawn is indicated
     * by `start` and `end`. The purpose is to allow the implementation to precompute
     * some state before the draw method is called for each cell.
     * @param cr a #cairo_t
     * @param background_area a #GdkRectangle
     * @param cell_area a #GdkRectangle
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     */
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Main renderering method. Implementations should implement this method to draw
     * onto the cairo context. The `background_area` indicates the total area of the
     * cell to be drawn. The `cell_area` indicates the area where content can be
     * drawn (text, images, etc).
     * 
     * The `background_area` is the `cell_area` plus the padding on each side (two
     * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
     * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
     * inside `background_area)`.
     * 
     * The `state` argument indicates the current state of the renderer and should
     * be taken into account to properly draw the different possible states
     * (cursor, prelit, selected) if appropriate.
     * @param cr the cairo render context
     * @param background_area a #GdkRectangle indicating the total area to be drawn
     * @param cell_area a #GdkRectangle indicating the area to draw content
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     * @param state a #GtkSourceGutterRendererState
     */
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Called when drawing a region of lines has ended.
     */
    end(): void
    /**
     * Get the x-alignment and y-alignment of the gutter renderer.
     */
    get_alignment(): [ /* xalign */ number, /* yalign */ number ]
    /**
     * Get the alignment mode. The alignment mode describes the manner in which the
     * renderer is aligned (see :xalign and :yalign).
     * @returns a #GtkSourceGutterRendererAlignmentMode
     */
    get_alignment_mode(): GutterRendererAlignmentMode
    /**
     * Get the background color of the renderer.
     * @returns %TRUE if the background color is set, %FALSE otherwise
     */
    get_background(): [ /* returnType */ boolean, /* color */ Gdk.RGBA ]
    /**
     * Get the x-padding and y-padding of the gutter renderer.
     */
    get_padding(): [ /* xpad */ number, /* ypad */ number ]
    /**
     * Get the size of the renderer.
     * @returns the size of the renderer.
     */
    get_size(): number
    /**
     * Get the view associated to the gutter renderer
     * @returns a #GtkTextView
     */
    get_view(): Gtk.TextView
    /**
     * Get whether the gutter renderer is visible.
     * @returns %TRUE if the renderer is visible, %FALSE otherwise
     */
    get_visible(): boolean
    /**
     * Get the #GtkTextWindowType associated with the gutter renderer.
     * @returns a #GtkTextWindowType
     */
    get_window_type(): Gtk.TextWindowType
    /**
     * Get whether the renderer is activatable at the location in `event`. This is
     * called from #GtkSourceGutter to determine whether a renderer is activatable
     * using the mouse pointer.
     * @param iter a #GtkTextIter at the start of the line to be activated
     * @param area a #GdkRectangle of the cell area to be activated
     * @param event the event that triggered the query
     * @returns %TRUE if the renderer can be activated, %FALSE otherwise
     */
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    /**
     * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
     * to query for data just before rendering a cell. This is called from the
     * #GtkSourceGutter.  Implementations can override the default signal handler or
     * can connect a signal handler externally to the
     * #GtkSourceGutterRenderer::query-data signal.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param state a #GtkSourceGutterRendererState.
     */
    query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
     * called from #GtkSourceGutter. Implementations can override the default signal
     * handler or can connect to the signal externally.
     * @param iter a #GtkTextIter.
     * @param area a #GdkRectangle.
     * @param x The x position of the tooltip.
     * @param y The y position of the tooltip.
     * @param tooltip a #GtkTooltip.
     * @returns %TRUE if the tooltip has been set, %FALSE otherwise
     */
    query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    /**
     * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
     * this from an implementation to inform that the renderer has changed such that
     * it needs to redraw.
     */
    queue_draw(): void
    /**
     * Set the alignment of the gutter renderer. Both `xalign` and `yalign` can be
     * -1, which means the values will not be changed (this allows changing only
     * one of the values).
     * 
     * `xalign` is the horizontal alignment. Set to 0 for a left alignment. 1 for a
     * right alignment. And 0.5 for centering the cells. `yalign` is the vertical
     * alignment. Set to 0 for a top alignment. 1 for a bottom alignment.
     * @param xalign the x-alignment
     * @param yalign the y-alignment
     */
    set_alignment(xalign: number, yalign: number): void
    /**
     * Set the alignment mode. The alignment mode describes the manner in which the
     * renderer is aligned (see :xalign and :yalign).
     * @param mode a #GtkSourceGutterRendererAlignmentMode
     */
    set_alignment_mode(mode: GutterRendererAlignmentMode): void
    /**
     * Set the background color of the renderer. If `color` is set to %NULL, the
     * renderer will not have a background color.
     * @param color a #GdkRGBA or %NULL
     */
    set_background(color: Gdk.RGBA | null): void
    /**
     * Set the padding of the gutter renderer. Both `xpad` and `ypad` can be
     * -1, which means the values will not be changed (this allows changing only
     * one of the values).
     * 
     * `xpad` is the left and right padding. `ypad` is the top and bottom padding.
     * @param xpad the x-padding
     * @param ypad the y-padding
     */
    set_padding(xpad: number, ypad: number): void
    /**
     * Sets the size of the renderer. A value of -1 specifies that the size
     * is to be determined dynamically.
     * @param size the size
     */
    set_size(size: number): void
    /**
     * Set whether the gutter renderer is visible.
     * @param visible the visibility
     */
    set_visible(visible: boolean): void

    // Own virtual methods of GtkSource-3.0.GtkSource.GutterRenderer

    /**
     * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
     * called from #GtkSourceGutter and should never have to be called manually.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param event the event that triggered the activation
     */
    vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    /**
     * Called when drawing a region begins. The region to be drawn is indicated
     * by `start` and `end`. The purpose is to allow the implementation to precompute
     * some state before the draw method is called for each cell.
     * @virtual 
     * @param cr a #cairo_t
     * @param background_area a #GdkRectangle
     * @param cell_area a #GdkRectangle
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     */
    vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * This is called when the text buffer changes for `renderer`.
     * @virtual 
     * @param old_buffer the old #GtkTextBuffer.
     */
    vfunc_change_buffer(old_buffer: Gtk.TextBuffer | null): void
    /**
     * This is called when the text view changes for `renderer`.
     * @virtual 
     * @param old_view the old #GtkTextView.
     */
    vfunc_change_view(old_view: Gtk.TextView | null): void
    /**
     * Main renderering method. Implementations should implement this method to draw
     * onto the cairo context. The `background_area` indicates the total area of the
     * cell to be drawn. The `cell_area` indicates the area where content can be
     * drawn (text, images, etc).
     * 
     * The `background_area` is the `cell_area` plus the padding on each side (two
     * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
     * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
     * inside `background_area)`.
     * 
     * The `state` argument indicates the current state of the renderer and should
     * be taken into account to properly draw the different possible states
     * (cursor, prelit, selected) if appropriate.
     * @virtual 
     * @param cr the cairo render context
     * @param background_area a #GdkRectangle indicating the total area to be drawn
     * @param cell_area a #GdkRectangle indicating the area to draw content
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     * @param state a #GtkSourceGutterRendererState
     */
    vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Called when drawing a region of lines has ended.
     * @virtual 
     */
    vfunc_end(): void
    /**
     * Get whether the renderer is activatable at the location in `event`. This is
     * called from #GtkSourceGutter to determine whether a renderer is activatable
     * using the mouse pointer.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line to be activated
     * @param area a #GdkRectangle of the cell area to be activated
     * @param event the event that triggered the query
     * @returns %TRUE if the renderer can be activated, %FALSE otherwise
     */
    vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    /**
     * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
     * to query for data just before rendering a cell. This is called from the
     * #GtkSourceGutter.  Implementations can override the default signal handler or
     * can connect a signal handler externally to the
     * #GtkSourceGutterRenderer::query-data signal.
     * @virtual 
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param state a #GtkSourceGutterRendererState.
     */
    vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
     * called from #GtkSourceGutter. Implementations can override the default signal
     * handler or can connect to the signal externally.
     * @virtual 
     * @param iter a #GtkTextIter.
     * @param area a #GdkRectangle.
     * @param x The x position of the tooltip.
     * @param y The y position of the tooltip.
     * @param tooltip a #GtkTooltip.
     * @returns %TRUE if the tooltip has been set, %FALSE otherwise
     */
    vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    /**
     * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
     * this from an implementation to inform that the renderer has changed such that
     * it needs to redraw.
     * @virtual 
     */
    vfunc_queue_draw(): void

    // Own signals of GtkSource-3.0.GtkSource.GutterRenderer

    connect(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event, ...args: any[]): void
    connect(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    connect_after(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event, ...args: any[]): void
    connect(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    connect_after(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState, ...args: any[]): void
    connect(sigName: "query-tooltip", callback: GutterRenderer.QueryTooltipSignalCallback): number
    connect_after(sigName: "query-tooltip", callback: GutterRenderer.QueryTooltipSignalCallback): number
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip, ...args: any[]): void
    connect(sigName: "queue-draw", callback: GutterRenderer.QueueDrawSignalCallback): number
    connect_after(sigName: "queue-draw", callback: GutterRenderer.QueueDrawSignalCallback): number
    emit(sigName: "queue-draw", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRenderer

    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GutterRenderer extends GObject.InitiallyUnowned {

    // Own properties of GtkSource-3.0.GtkSource.GutterRenderer

    static name: string
    static $gtype: GObject.GType<GutterRenderer>

    // Constructors of GtkSource-3.0.GtkSource.GutterRenderer

    constructor(config?: GutterRenderer.ConstructorProperties) 
    _init(config?: GutterRenderer.ConstructorProperties): void
}

export module GutterRendererPixbuf {

    // Constructor properties interface

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

        gicon?: Gio.Icon | null
        icon_name?: string | null
        pixbuf?: GdkPixbuf.Pixbuf | null
        /**
         * The stock id.
         */
        stock_id?: string | null
        iconName?: string | null
        /**
         * The stock id.
         */
        stockId?: string | null
    }

}

export interface GutterRendererPixbuf {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    gicon: Gio.Icon
    icon_name: string | null
    iconName: string | null
    pixbuf: GdkPixbuf.Pixbuf
    /**
     * The stock id.
     */
    stock_id: string | null
    /**
     * The stock id.
     */
    stockId: string | null

    // Owm methods of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    /**
     * Get the gicon of the renderer
     * @returns a #GIcon
     */
    get_gicon(): Gio.Icon
    get_icon_name(): string
    /**
     * Get the pixbuf of the renderer.
     * @returns a #GdkPixbuf
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_stock_id(): string
    set_gicon(icon: Gio.Icon | null): void
    set_icon_name(icon_name: string | null): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void
    set_stock_id(stock_id: string | null): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    connect(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererPixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GutterRendererPixbuf extends GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    static name: string
    static $gtype: GObject.GType<GutterRendererPixbuf>

    // Constructors of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    constructor(config?: GutterRendererPixbuf.ConstructorProperties) 
    /**
     * Create a new #GtkSourceGutterRendererPixbuf.
     * @constructor 
     * @returns A #GtkSourceGutterRenderer
     */
    constructor() 
    /**
     * Create a new #GtkSourceGutterRendererPixbuf.
     * @constructor 
     * @returns A #GtkSourceGutterRenderer
     */
    static new(): GutterRendererPixbuf
    _init(config?: GutterRendererPixbuf.ConstructorProperties): void
}

export module GutterRendererText {

    // Constructor properties interface

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRendererText

        markup?: string | null
        text?: string | null
    }

}

export interface GutterRendererText {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererText

    markup: string | null
    text: string | null

    // Owm methods of GtkSource-3.0.GtkSource.GutterRendererText

    /**
     * Measures the text provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param text the text to measure.
     */
    measure(text: string): [ /* width */ number, /* height */ number ]
    /**
     * Measures the pango markup provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param markup the pango markup to measure.
     */
    measure_markup(markup: string): [ /* width */ number, /* height */ number ]
    set_markup(markup: string, length: number): void
    set_text(text: string, length: number): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRendererText

    connect(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GutterRendererText extends GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererText

    static name: string
    static $gtype: GObject.GType<GutterRendererText>

    // Constructors of GtkSource-3.0.GtkSource.GutterRendererText

    constructor(config?: GutterRendererText.ConstructorProperties) 
    /**
     * Create a new #GtkSourceGutterRendererText.
     * @constructor 
     * @returns A #GtkSourceGutterRenderer
     */
    constructor() 
    /**
     * Create a new #GtkSourceGutterRendererText.
     * @constructor 
     * @returns A #GtkSourceGutterRenderer
     */
    static new(): GutterRendererText
    _init(config?: GutterRendererText.ConstructorProperties): void
}

export module Language {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Language {

    // Own properties of GtkSource-3.0.GtkSource.Language

    readonly hidden: boolean
    readonly id: string | null
    readonly name: string | null
    readonly section: string | null

    // Own fields of GtkSource-3.0.GtkSource.Language

    parent_instance: GObject.Object
    priv: LanguagePrivate

    // Owm methods of GtkSource-3.0.GtkSource.Language

    /**
     * Returns the globs associated to this language. This is just
     * an utility wrapper around gtk_source_language_get_metadata() to
     * retrieve the "globs" metadata property and split it into an array.
     * @returns  a newly-allocated %NULL terminated array containing the globs or %NULL if no globs are found. The returned array must be freed with g_strfreev().
     */
    get_globs(): string[] | null
    /**
     * Returns whether the language should be hidden from the user.
     * @returns %TRUE if the language should be hidden, %FALSE otherwise.
     */
    get_hidden(): boolean
    /**
     * Returns the ID of the language. The ID is not locale-dependent.
     * The returned string is owned by `language` and should not be freed
     * or modified.
     * @returns the ID of @language.
     */
    get_id(): string
    get_metadata(name: string): string | null
    /**
     * Returns the mime types associated to this language. This is just
     * an utility wrapper around gtk_source_language_get_metadata() to
     * retrieve the "mimetypes" metadata property and split it into an
     * array.
     * @returns  a newly-allocated %NULL terminated array containing the mime types or %NULL if no mime types are found. The returned array must be freed with g_strfreev().
     */
    get_mime_types(): string[] | null
    /**
     * Returns the localized name of the language.
     * The returned string is owned by `language` and should not be freed
     * or modified.
     * @returns the name of @language.
     */
    get_name(): string
    /**
     * Returns the localized section of the language.
     * Each language belong to a section (ex. HTML belogs to the
     * Markup section).
     * The returned string is owned by `language` and should not be freed
     * or modified.
     * @returns the section of @language.
     */
    get_section(): string
    /**
     * Returns the ID of the style to use if the specified `style_id`
     * is not present in the current style scheme.
     * @param style_id a style ID.
     * @returns the ID of the style to use if the specified @style_id is not present in the current style scheme or %NULL if the style has no fallback defined. The returned string is owned by the @language and must not be modified.
     */
    get_style_fallback(style_id: string): string | null
    /**
     * Returns the ids of the styles defined by this `language`.
     * @returns  a newly-allocated %NULL terminated array containing ids of the styles defined by this @language or %NULL if no style is defined. The returned array must be freed with g_strfreev().
     */
    get_style_ids(): string[] | null
    /**
     * Returns the name of the style with ID `style_id` defined by this `language`.
     * @param style_id a style ID.
     * @returns the name of the style with ID @style_id defined by this @language or %NULL if the style has no name or there is no style with ID @style_id defined by this @language. The returned string is owned by the @language and must not be modified.
     */
    get_style_name(style_id: string): string | null

    // Class property signals of GtkSource-3.0.GtkSource.Language

    connect(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hidden", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::section", callback: (($obj: Language, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::section", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Language extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Language

    static name: string
    static $gtype: GObject.GType<Language>

    // Constructors of GtkSource-3.0.GtkSource.Language

    constructor(config?: Language.ConstructorProperties) 
    _init(config?: Language.ConstructorProperties): void
}

export module LanguageManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.LanguageManager

        search_path?: string[] | null
        searchPath?: string[] | null
    }

}

export interface LanguageManager {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManager

    readonly language_ids: string[]
    readonly languageIds: string[]
    search_path: string[]
    searchPath: string[]

    // Own fields of GtkSource-3.0.GtkSource.LanguageManager

    parent_instance: GObject.Object
    priv: LanguageManagerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.LanguageManager

    /**
     * Gets the #GtkSourceLanguage identified by the given `id` in the language
     * manager.
     * @param id a language id.
     * @returns a #GtkSourceLanguage, or %NULL if there is no language identified by the given @id. Return value is owned by @lm and should not be freed.
     */
    get_language(id: string): Language | null
    /**
     * Returns the ids of the available languages.
     * @returns  a %NULL-terminated array of strings containing the ids of the available languages or %NULL if no language is available. The array is sorted alphabetically according to the language name. The array is owned by @lm and must not be modified.
     */
    get_language_ids(): string[] | null
    /**
     * Gets the list directories where `lm` looks for language files.
     * @returns %NULL-terminated array containg a list of language files directories. The array is owned by @lm and must not be modified.
     */
    get_search_path(): string[]
    /**
     * Picks a #GtkSourceLanguage for given file name and content type,
     * according to the information in lang files. Either `filename` or
     * `content_type` may be %NULL. This function can be used as follows:
     * 
     * <informalexample><programlisting>
     *   GtkSourceLanguage *lang;
     *   lang = gtk_source_language_manager_guess_language (filename, NULL);
     *   gtk_source_buffer_set_language (buffer, lang);
     * </programlisting></informalexample>
     * 
     * or
     * 
     * <informalexample><programlisting>
     *   GtkSourceLanguage *lang = NULL;
     *   gboolean result_uncertain;
     *   gchar *content_type;
     * 
     *   content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
     *   if (result_uncertain)
     *     {
     *       g_free (content_type);
     *       content_type = NULL;
     *     }
     * 
     *   lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
     *   gtk_source_buffer_set_language (buffer, lang);
     * 
     *   g_free (content_type);
     * </programlisting></informalexample>
     * 
     * etc. Use gtk_source_language_get_mime_types() and gtk_source_language_get_globs()
     * if you need full control over file -> language mapping.
     * @param filename a filename in Glib filename encoding, or %NULL.
     * @param content_type a content type (as in GIO API), or %NULL.
     * @returns a #GtkSourceLanguage, or %NULL if there is no suitable language for given @filename and/or @content_type. Return value is owned by @lm and should not be freed.
     */
    guess_language(filename: string | null, content_type: string | null): Language | null
    /**
     * Sets the list of directories where the `lm` looks for
     * language files.
     * If `dirs` is %NULL, the search path is reset to default.
     * 
     * <note>
     *   <para>
     *     At the moment this function can be called only before the
     *     language files are loaded for the first time. In practice
     *     to set a custom search path for a #GtkSourceLanguageManager,
     *     you have to call this function right after creating it.
     *   </para>
     * </note>
     * @param dirs  a %NULL-terminated array of strings or %NULL.
     */
    set_search_path(dirs: string[] | null): void

    // Class property signals of GtkSource-3.0.GtkSource.LanguageManager

    connect(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-ids", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-ids", ...args: any[]): void
    connect(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: LanguageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LanguageManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManager

    static name: string
    static $gtype: GObject.GType<LanguageManager>

    // Constructors of GtkSource-3.0.GtkSource.LanguageManager

    constructor(config?: LanguageManager.ConstructorProperties) 
    /**
     * Creates a new language manager. If you do not need more than one language
     * manager or a private language manager instance then use
     * gtk_source_language_manager_get_default() instead.
     * @constructor 
     * @returns a new #GtkSourceLanguageManager.
     */
    constructor() 
    /**
     * Creates a new language manager. If you do not need more than one language
     * manager or a private language manager instance then use
     * gtk_source_language_manager_get_default() instead.
     * @constructor 
     * @returns a new #GtkSourceLanguageManager.
     */
    static new(): LanguageManager
    _init(config?: LanguageManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceLanguageManager instance.
     * @returns a #GtkSourceLanguageManager. Return value is owned by GtkSourceView library and must not be unref'ed.
     */
    static get_default(): LanguageManager
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, View.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Map

        font_desc?: Pango.FontDescription | null
        view?: View | null
        fontDesc?: Pango.FontDescription | null
    }

}

export interface Map extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GtkSource-3.0.GtkSource.Map

    font_desc: Pango.FontDescription
    fontDesc: Pango.FontDescription
    view: View

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of GtkSource-3.0.GtkSource.Map

    parent_instance: View & Gtk.Container & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of GtkSource-3.0.GtkSource.Map

    /**
     * Gets the #GtkSourceMap:view property, which is the view this widget is mapping.
     * @returns a #GtkSourceView or %NULL.
     */
    get_view(): View | null
    /**
     * Sets the view that `map` will be doing the mapping to.
     * @param view a #GtkSourceView
     */
    set_view(view: View): void

    // Conflicting methods

    /**
     * Retrieves the #GdkWindow corresponding to an area of the text view;
     * possible windows include the overall widget window, child windows
     * on the left, right, top, bottom, and the window that displays the
     * text buffer. Windows are %NULL and nonexistent if their width or
     * height is 0, and are nonexistent before the widget has been
     * realized.
     * @param win window to get
     * @returns a #GdkWindow, or %NULL
     */
    get_window(win: Gtk.TextWindowType): Gdk.Window | null

    // Overloads of get_window

    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of GtkSource-3.0.GtkSource.Map

    connect(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::draw-spaces", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Map extends View {

    // Own properties of GtkSource-3.0.GtkSource.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of GtkSource-3.0.GtkSource.Map

    constructor(config?: Map.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceMap.
     * @constructor 
     * @returns a new #GtkSourceMap.
     */
    constructor() 
    /**
     * Creates a new #GtkSourceMap.
     * @constructor 
     * @returns a new #GtkSourceMap.
     */
    static new(): Map
    _init(config?: Map.ConstructorProperties): void

    // Conflicting static methods

    static new_with_buffer(...args: any[]): any
}

export module Mark {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextMark.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Mark

        /**
         * The category of the #GtkSourceMark, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        category?: string | null
    }

}

export interface Mark {

    // Own properties of GtkSource-3.0.GtkSource.Mark

    /**
     * The category of the #GtkSourceMark, classifies the mark and controls
     * which pixbuf is used and with which priority it is drawn.
     */
    readonly category: string | null

    // Own fields of GtkSource-3.0.GtkSource.Mark

    parent_instance: Gtk.TextMark & GObject.Object
    priv: MarkPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Mark

    /**
     * Returns the mark category.
     * @returns the category of the #GtkSourceMark.
     */
    get_category(): string
    /**
     * Returns the next #GtkSourceMark in the buffer or %NULL if the mark
     * was not added to a buffer. If there is no next mark, %NULL will be returned.
     * 
     * If `category` is %NULL, looks for marks of any category.
     * @param category a string specifying the mark category, or %NULL.
     * @returns the next #GtkSourceMark, or %NULL.
     */
    next(category: string | null): Mark | null
    /**
     * Returns the previous #GtkSourceMark in the buffer or %NULL if the mark
     * was not added to a buffer. If there is no previous mark, %NULL is returned.
     * 
     * If `category` is %NULL, looks for marks of any category
     * @param category a string specifying the mark category, or %NULL.
     * @returns the previous #GtkSourceMark, or %NULL.
     */
    prev(category: string): Mark | null

    // Class property signals of GtkSource-3.0.GtkSource.Mark

    connect(sigName: "notify::category", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::left-gravity", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-gravity", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-gravity", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Mark, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Mark extends Gtk.TextMark {

    // Own properties of GtkSource-3.0.GtkSource.Mark

    static name: string
    static $gtype: GObject.GType<Mark>

    // Constructors of GtkSource-3.0.GtkSource.Mark

    constructor(config?: Mark.ConstructorProperties) 
    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using gtk_text_buffer_get_mark().
     * Normally marks are created using the utility function
     * gtk_source_buffer_create_source_mark().
     * @constructor 
     * @param name Name of the #GtkSourceMark, can be NULL when not using a name
     * @param category is used to classify marks according to common characteristics (e.g. all the marks representing a bookmark could belong to the "bookmark" category, or all the marks representing a compilation error could belong to "error" category).
     * @returns a new #GtkSourceMark that can be added using gtk_text_buffer_add_mark().
     */
    constructor(name: string, category: string) 
    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using gtk_text_buffer_get_mark().
     * Normally marks are created using the utility function
     * gtk_source_buffer_create_source_mark().
     * @constructor 
     * @param name Name of the #GtkSourceMark, can be NULL when not using a name
     * @param category is used to classify marks according to common characteristics (e.g. all the marks representing a bookmark could belong to the "bookmark" category, or all the marks representing a compilation error could belong to "error" category).
     * @returns a new #GtkSourceMark that can be added using gtk_text_buffer_add_mark().
     */
    static new(name: string, category: string): Mark

    // Overloads of new

    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If `name` is %NULL, the mark is anonymous; otherwise, the mark can be
     * retrieved by name using gtk_text_buffer_get_mark(). If a mark has left
     * gravity, and text is inserted at the mark’s current location, the mark
     * will be moved to the left of the newly-inserted text. If the mark has
     * right gravity (`left_gravity` = %FALSE), the mark will end up on the
     * right of newly-inserted text. The standard left-to-right cursor is a
     * mark with right gravity (when you type, the cursor stays on the right
     * side of the text you’re typing).
     * @constructor 
     * @param name mark name or %NULL
     * @param left_gravity whether the mark should have left gravity
     * @returns new #GtkTextMark
     */
    static new(name: string | null, left_gravity: boolean): Gtk.TextMark
    _init(config?: Mark.ConstructorProperties): void
}

export module MarkAttributes {

    // Signal callback interfaces

    /**
     * Signal callback interface for `query-tooltip-markup`
     */
    export interface QueryTooltipMarkupSignalCallback {
        ($obj: MarkAttributes, mark: Mark): string | null
    }

    /**
     * Signal callback interface for `query-tooltip-text`
     */
    export interface QueryTooltipTextSignalCallback {
        ($obj: MarkAttributes, mark: Mark): string | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.MarkAttributes

        /**
         * A color used for background of a line.
         */
        background?: Gdk.RGBA | null
        /**
         * A #GIcon that may be a base of a rendered icon.
         */
        gicon?: Gio.Icon | null
        /**
         * An icon name that may be a base of a rendered icon.
         */
        icon_name?: string | null
        /**
         * A #GdkPixbuf that may be a base of a rendered icon.
         */
        pixbuf?: GdkPixbuf.Pixbuf | null
        /**
         * A stock id that may be a base of a rendered icon.
         */
        stock_id?: string | null
        /**
         * An icon name that may be a base of a rendered icon.
         */
        iconName?: string | null
        /**
         * A stock id that may be a base of a rendered icon.
         */
        stockId?: string | null
    }

}

export interface MarkAttributes {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributes

    /**
     * A color used for background of a line.
     */
    background: Gdk.RGBA
    /**
     * A #GIcon that may be a base of a rendered icon.
     */
    gicon: Gio.Icon
    /**
     * An icon name that may be a base of a rendered icon.
     */
    icon_name: string | null
    /**
     * An icon name that may be a base of a rendered icon.
     */
    iconName: string | null
    /**
     * A #GdkPixbuf that may be a base of a rendered icon.
     */
    pixbuf: GdkPixbuf.Pixbuf
    /**
     * A stock id that may be a base of a rendered icon.
     */
    stock_id: string | null
    /**
     * A stock id that may be a base of a rendered icon.
     */
    stockId: string | null

    // Owm methods of GtkSource-3.0.GtkSource.MarkAttributes

    /**
     * Stores background color in `background`.
     * @returns whether background color for @attributes was set.
     */
    get_background(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    /**
     * Gets a #GIcon to be used as a base for rendered icon. Note that the icon can
     * be %NULL if it wasn't set earlier.
     * @returns An icon. The icon belongs to @attributes and should not be unreffed.
     */
    get_gicon(): Gio.Icon
    /**
     * Gets a name of an icon to be used as a base for rendered icon. Note that the
     * icon name can be %NULL if it wasn't set earlier.
     * @returns An icon name. The string belongs to @attributes and should not be freed.
     */
    get_icon_name(): string
    /**
     * Gets a #GdkPixbuf to be used as a base for rendered icon. Note that the
     * pixbuf can be %NULL if it wasn't set earlier.
     * @returns A pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets a stock id of an icon used by this attributes. Note that the stock id can
     * be %NULL if it wasn't set earlier.
     * @returns Stock id. Returned string is owned by @attributes and shouldn't be freed.
     */
    get_stock_id(): string
    /**
     * Queries for a tooltip by emitting
     * a #GtkSourceMarkAttributes::query-tooltip-markup signal. The tooltip may contain
     * a markup.
     * @param mark a #GtkSourceMark.
     * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
     */
    get_tooltip_markup(mark: Mark): string | null
    /**
     * Queries for a tooltip by emitting
     * a #GtkSourceMarkAttributes::query-tooltip-text signal. The tooltip is a plain
     * text.
     * @param mark a #GtkSourceMark.
     * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
     */
    get_tooltip_text(mark: Mark): string | null
    /**
     * Renders an icon of given size. The base of the icon is set by the last call
     * to one of: gtk_source_mark_attributes_set_pixbuf(),
     * gtk_source_mark_attributes_set_gicon(),
     * gtk_source_mark_attributes_set_icon_name() or
     * gtk_source_mark_attributes_set_stock_id(). `size` cannot be lower than 1.
     * @param widget widget of which style settings may be used.
     * @param size size of the rendered icon.
     * @returns A rendered pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
     */
    render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf
    /**
     * Sets background color to the one given in `background`.
     * @param background a #GdkRGBA.
     */
    set_background(background: Gdk.RGBA): void
    /**
     * Sets an icon to be used as a base for rendered icon.
     * @param gicon a #GIcon to be used.
     */
    set_gicon(gicon: Gio.Icon): void
    /**
     * Sets a name of an icon to be used as a base for rendered icon.
     * @param icon_name name of an icon to be used.
     */
    set_icon_name(icon_name: string): void
    /**
     * Sets a pixbuf to be used as a base for rendered icon.
     * @param pixbuf a #GdkPixbuf to be used.
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets stock id to be used as a base for rendered icon.
     * @param stock_id a stock id.
     */
    set_stock_id(stock_id: string): void

    // Own signals of GtkSource-3.0.GtkSource.MarkAttributes

    connect(sigName: "query-tooltip-markup", callback: MarkAttributes.QueryTooltipMarkupSignalCallback): number
    connect_after(sigName: "query-tooltip-markup", callback: MarkAttributes.QueryTooltipMarkupSignalCallback): number
    emit(sigName: "query-tooltip-markup", mark: Mark, ...args: any[]): void
    connect(sigName: "query-tooltip-text", callback: MarkAttributes.QueryTooltipTextSignalCallback): number
    connect_after(sigName: "query-tooltip-text", callback: MarkAttributes.QueryTooltipTextSignalCallback): number
    emit(sigName: "query-tooltip-text", mark: Mark, ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.MarkAttributes

    connect(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: MarkAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MarkAttributes extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributes

    static name: string
    static $gtype: GObject.GType<MarkAttributes>

    // Constructors of GtkSource-3.0.GtkSource.MarkAttributes

    constructor(config?: MarkAttributes.ConstructorProperties) 
    /**
     * Creates a new source mark attributes.
     * @constructor 
     * @returns a new source mark attributes.
     */
    constructor() 
    /**
     * Creates a new source mark attributes.
     * @constructor 
     * @returns a new source mark attributes.
     */
    static new(): MarkAttributes
    _init(config?: MarkAttributes.ConstructorProperties): void
}

export module PrintCompositor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.PrintCompositor

        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        body_font_name?: string | null
        /**
         * The GtkSourceBuffer object to print.
         */
        buffer?: Buffer | null
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        footer_font_name?: string | null
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        header_font_name?: string | null
        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        highlight_syntax?: boolean | null
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        line_numbers_font_name?: string | null
        /**
         * Whether to print a footer in each page.
         * 
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        print_footer?: boolean | null
        /**
         * Whether to print a header in each page.
         * 
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        print_header?: boolean | null
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        print_line_numbers?: number | null
        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        tab_width?: number | null
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        wrap_mode?: Gtk.WrapMode | null
        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        bodyFontName?: string | null
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        footerFontName?: string | null
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        headerFontName?: string | null
        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        highlightSyntax?: boolean | null
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        lineNumbersFontName?: string | null
        /**
         * Whether to print a footer in each page.
         * 
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printFooter?: boolean | null
        /**
         * Whether to print a header in each page.
         * 
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printHeader?: boolean | null
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printLineNumbers?: number | null
        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        tabWidth?: number | null
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        wrapMode?: Gtk.WrapMode | null
    }

}

export interface PrintCompositor {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositor

    /**
     * Name of the font used for the text body.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    body_font_name: string | null
    /**
     * Name of the font used for the text body.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    bodyFontName: string | null
    /**
     * The GtkSourceBuffer object to print.
     */
    readonly buffer: Buffer
    /**
     * Name of the font used to print page footer.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    footer_font_name: string | null
    /**
     * Name of the font used to print page footer.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    footerFontName: string | null
    /**
     * Name of the font used to print page header.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    header_font_name: string | null
    /**
     * Name of the font used to print page header.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    headerFontName: string | null
    /**
     * Whether to print the document with highlighted syntax.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    highlight_syntax: boolean
    /**
     * Whether to print the document with highlighted syntax.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    highlightSyntax: boolean
    /**
     * Name of the font used to print line numbers on the left margin.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    line_numbers_font_name: string | null
    /**
     * Name of the font used to print line numbers on the left margin.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    lineNumbersFontName: string | null
    /**
     * The number of pages in the document or <code>-1</code> if the
     * document has not been completely paginated.
     */
    readonly n_pages: number
    /**
     * The number of pages in the document or <code>-1</code> if the
     * document has not been completely paginated.
     */
    readonly nPages: number
    /**
     * Whether to print a footer in each page.
     * 
     * Note that by default the footer format is unspecified, and if it is
     * unspecified the footer will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    print_footer: boolean
    /**
     * Whether to print a footer in each page.
     * 
     * Note that by default the footer format is unspecified, and if it is
     * unspecified the footer will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    printFooter: boolean
    /**
     * Whether to print a header in each page.
     * 
     * Note that by default the header format is unspecified, and if it is
     * unspecified the header will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    print_header: boolean
    /**
     * Whether to print a header in each page.
     * 
     * Note that by default the header format is unspecified, and if it is
     * unspecified the header will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    printHeader: boolean
    /**
     * Interval of printed line numbers. If this property is set to 0 no
     * numbers will be printed.  If greater than 0, a number will be
     * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    print_line_numbers: number
    /**
     * Interval of printed line numbers. If this property is set to 0 no
     * numbers will be printed.  If greater than 0, a number will be
     * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    printLineNumbers: number
    /**
     * Width of a tab character expressed in spaces.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    tab_width: number
    /**
     * Width of a tab character expressed in spaces.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    tabWidth: number
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    wrap_mode: Gtk.WrapMode
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    wrapMode: Gtk.WrapMode

    // Own fields of GtkSource-3.0.GtkSource.PrintCompositor

    parent_instance: GObject.Object
    priv: PrintCompositorPrivate

    // Owm methods of GtkSource-3.0.GtkSource.PrintCompositor

    /**
     * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
     * 
     * This method has been designed to be called in the handler of the #GtkPrintOperation::draw_page signal
     * as shown in the following example:
     * 
     * <informalexample><programlisting>
     * // Signal handler for the GtkPrintOperation::draw_page signal
     * 
     * static void
     * draw_page (GtkPrintOperation *operation,
     *            GtkPrintContext   *context,
     *            gint               page_nr,
     *            gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     gtk_source_print_compositor_draw_page (compositor,
     *                                            context,
     *                                            page_nr);
     * }
     * </programlisting></informalexample>
     * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
     * @param page_nr the number of the page to print.
     */
    draw_page(context: Gtk.PrintContext, page_nr: number): void
    /**
     * Returns the name of the font used to print the text body. The returned string
     * must be freed with g_free().
     * @returns a new string containing the name of the font used to print the text body.
     */
    get_body_font_name(): string | null
    /**
     * Gets the bottom margin in units of `unit`.
     * @param unit the unit for the return value.
     * @returns the bottom margin.
     */
    get_bottom_margin(unit: Gtk.Unit): number
    /**
     * Gets the #GtkSourceBuffer associated with the compositor. The returned
     * object reference is owned by the compositor object and
     * should not be unreferenced.
     * @returns the #GtkSourceBuffer associated with the compositor.
     */
    get_buffer(): Buffer
    /**
     * Returns the name of the font used to print the page footer.
     * The returned string must be freed with g_free().
     * @returns a new string containing the name of the font used to print the page footer.
     */
    get_footer_font_name(): string | null
    /**
     * Returns the name of the font used to print the page header.
     * The returned string must be freed with g_free().
     * @returns a new string containing the name of the font used to print the page header.
     */
    get_header_font_name(): string | null
    /**
     * Determines whether the printed text will be highlighted according to the
     * buffer rules.  Note that highlighting will happen
     * only if the buffer to print has highlighting activated.
     * @returns %TRUE if the printed output will be highlighted.
     */
    get_highlight_syntax(): boolean
    /**
     * Gets the left margin in units of `unit`.
     * @param unit the unit for the return value.
     * @returns the left margin
     */
    get_left_margin(unit: Gtk.Unit): number
    /**
     * Returns the name of the font used to print line numbers on the left margin.
     * The returned string must be freed with g_free().
     * @returns a new string containing the name of the font used to print line numbers on the left margin.
     */
    get_line_numbers_font_name(): string | null
    /**
     * Returns the number of pages in the document or <code>-1</code> if the
     * document has not been completely paginated.
     * @returns the number of pages in the document or <code>-1</code> if the document has not been completely paginated.
     */
    get_n_pages(): number
    /**
     * Returns the current fraction of the document pagination that has been completed.
     * @returns a fraction from 0.0 to 1.0 inclusive.
     */
    get_pagination_progress(): number
    /**
     * Determines if a footer is set to be printed for each page.  A
     * footer will be printed if this function returns %TRUE
     * <emphasis>and</emphasis> some format strings have been specified
     * with gtk_source_print_compositor_set_footer_format().
     * @returns %TRUE if the footer is set to be printed.
     */
    get_print_footer(): boolean
    /**
     * Determines if a header is set to be printed for each page.  A
     * header will be printed if this function returns %TRUE
     * <emphasis>and</emphasis> some format strings have been specified
     * with gtk_source_print_compositor_set_header_format().
     * @returns %TRUE if the header is set to be printed.
     */
    get_print_header(): boolean
    /**
     * Returns the interval used for line number printing.  If the
     * value is 0, no line numbers will be printed.  The default value is
     * 1 (i.e. numbers printed in all lines).
     * @returns the interval of printed line numbers.
     */
    get_print_line_numbers(): number
    /**
     * Gets the right margin in units of `unit`.
     * @param unit the unit for the return value.
     * @returns the right margin.
     */
    get_right_margin(unit: Gtk.Unit): number
    /**
     * Returns the width of tabulation in characters for printed text.
     * @returns width of tab.
     */
    get_tab_width(): number
    /**
     * Gets the top margin in units of `unit`.
     * @param unit the unit for the return value.
     * @returns the top margin.
     */
    get_top_margin(unit: Gtk.Unit): number
    /**
     * Gets the line wrapping mode for the printed text.
     * @returns the line wrap mode.
     */
    get_wrap_mode(): Gtk.WrapMode
    /**
     * Paginate the document associated with the `compositor`.
     * 
     * In order to support non-blocking pagination, document is paginated in small chunks.
     * Each time gtk_source_print_compositor_paginate() is invoked, a chunk of the document
     * is paginated. To paginate the entire document, gtk_source_print_compositor_paginate()
     * must be invoked multiple times.
     * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
     * 
     * This method has been designed to be invoked in the handler of the #GtkPrintOperation::paginate signal,
     * as shown in the following example:
     * 
     * <informalexample><programlisting>
     * // Signal handler for the GtkPrintOperation::paginate signal
     * 
     * static gboolean
     * paginate (GtkPrintOperation *operation,
     *           GtkPrintContext   *context,
     *           gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     if (gtk_source_print_compositor_paginate (compositor, context))
     *     {
     *         gint n_pages;
     * 
     *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
     *         gtk_print_operation_set_n_pages (operation, n_pages);
     * 
     *         return TRUE;
     *     }
     * 
     *     return FALSE;
     * }
     * </programlisting></informalexample>
     * 
     * If you don't need to do pagination in chunks, you can simply do it all in the
     * #GtkPrintOperation::begin-print handler, and set the number of pages from there, like
     * in the following example:
     * 
     * <informalexample><programlisting>
     * // Signal handler for the GtkPrintOperation::begin-print signal
     * 
     * static void
     * begin_print (GtkPrintOperation *operation,
     *              GtkPrintContext   *context,
     *              gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     *     gint n_pages;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     while (!gtk_source_print_compositor_paginate (compositor, context));
     * 
     *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
     *     gtk_print_operation_set_n_pages (operation, n_pages);
     * }
     * </programlisting></informalexample>
     * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the `compositor` to paginate the document.
     * @returns %TRUE if the document has been completely paginated, %FALSE otherwise.
     */
    paginate(context: Gtk.PrintContext): boolean
    /**
     * Sets the default font for the printed text.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param font_name the name of the default font for the body text.
     */
    set_body_font_name(font_name: string): void
    /**
     * Sets the bottom margin used by `compositor`.
     * @param margin the new bottom margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    set_bottom_margin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the font for printing the page footer. If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param font_name the name of the font for the footer text, or %NULL.
     */
    set_footer_font_name(font_name: string | null): void
    /**
     * See gtk_source_print_compositor_set_header_format() for more information
     * about the parameters.
     * @param separator %TRUE if you want a separator line to be printed.
     * @param left a format string to print on the left of the footer.
     * @param center a format string to print on the center of the footer.
     * @param right a format string to print on the right of the footer.
     */
    set_footer_format(separator: boolean, left: string | null, center: string | null, right: string | null): void
    /**
     * Sets the font for printing the page header. If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param font_name the name of the font for header text, or %NULL.
     */
    set_header_font_name(font_name: string | null): void
    /**
     * Sets strftime like header format strings, to be printed on the
     * left, center and right of the top of each page.  The strings may
     * include strftime(3) codes which will be expanded at print time.
     * A subset of strftime() codes are accepted, see g_date_time_format()
     * for more details on the accepted format specifiers.
     * Additionally the following format specifiers are accepted:
     * - #N: the page number
     * - #Q: the page count.
     * 
     * `separator` specifies if a solid line should be drawn to separate
     * the header from the document text.
     * 
     * If %NULL is given for any of the three arguments, that particular
     * string will not be printed.
     * 
     * For the header to be printed, in
     * addition to specifying format strings, you need to enable header
     * printing with gtk_source_print_compositor_set_print_header().
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param separator %TRUE if you want a separator line to be printed.
     * @param left a format string to print on the left of the header.
     * @param center a format string to print on the center of the header.
     * @param right a format string to print on the right of the header.
     */
    set_header_format(separator: boolean, left: string | null, center: string | null, right: string | null): void
    /**
     * Sets whether the printed text will be highlighted according to the
     * buffer rules.  Both color and font style are applied.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param highlight whether syntax should be highlighted.
     */
    set_highlight_syntax(highlight: boolean): void
    /**
     * Sets the left margin used by `compositor`.
     * @param margin the new left margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    set_left_margin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the font for printing line numbers on the left margin.  If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param font_name the name of the font for line numbers, or %NULL.
     */
    set_line_numbers_font_name(font_name: string | null): void
    /**
     * Sets whether you want to print a footer in each page.  The
     * footer consists of three pieces of text and an optional line
     * separator, configurable with
     * gtk_source_print_compositor_set_footer_format().
     * 
     * Note that by default the footer format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param print %TRUE if you want the footer to be printed.
     */
    set_print_footer(print: boolean): void
    /**
     * Sets whether you want to print a header in each page.  The
     * header consists of three pieces of text and an optional line
     * separator, configurable with
     * gtk_source_print_compositor_set_header_format().
     * 
     * Note that by default the header format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param print %TRUE if you want the header to be printed.
     */
    set_print_header(print: boolean): void
    /**
     * Sets the interval for printed line numbers.  If `interval` is 0 no
     * numbers will be printed.  If greater than 0, a number will be
     * printed every `interval` lines (i.e. 1 will print all line numbers).
     * 
     * Maximum accepted value for `interval` is 100.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param interval interval for printed line numbers.
     */
    set_print_line_numbers(interval: number): void
    /**
     * Sets the right margin used by `compositor`.
     * @param margin the new right margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    set_right_margin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the width of tabulation in characters for printed text.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param width width of tab in characters.
     */
    set_tab_width(width: number): void
    /**
     * Sets the top margin used by `compositor`.
     * @param margin the new top margin in units of `unit`
     * @param unit the units for `margin`
     */
    set_top_margin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the line wrapping mode for the printed text.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param wrap_mode a #GtkWrapMode.
     */
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void

    // Class property signals of GtkSource-3.0.GtkSource.PrintCompositor

    connect(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::body-font-name", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::footer-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::footer-font-name", ...args: any[]): void
    connect(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header-font-name", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-numbers-font-name", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-numbers-font-name", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-footer", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-footer", ...args: any[]): void
    connect(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-header", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-header", ...args: any[]): void
    connect(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-line-numbers", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-line-numbers", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: PrintCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PrintCompositor extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositor

    static name: string
    static $gtype: GObject.GType<PrintCompositor>

    // Constructors of GtkSource-3.0.GtkSource.PrintCompositor

    constructor(config?: PrintCompositor.ConstructorProperties) 
    /**
     * Creates a new print compositor that can be used to print `buffer`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to print.
     * @returns a new print compositor object.
     */
    constructor(buffer: Buffer) 
    /**
     * Creates a new print compositor that can be used to print `buffer`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to print.
     * @returns a new print compositor object.
     */
    static new(buffer: Buffer): PrintCompositor
    /**
     * Creates a new print compositor that can be used to print the buffer
     * associated with `view`.
     * This constructor sets some configuration properties to make the
     * printed output match `view` as much as possible.  The properties set are
     * #GtkSourcePrintCompositor:tab-width, #GtkSourcePrintCompositor:highlight-syntax,
     * #GtkSourcePrintCompositor:wrap-mode, #GtkSourcePrintCompositor:body-font-name and
     * #GtkSourcePrintCompositor:print-line-numbers.
     * @constructor 
     * @param view a #GtkSourceView to get configuration from.
     * @returns a new print compositor object.
     */
    static new_from_view(view: View): PrintCompositor
    _init(config?: PrintCompositor.ConstructorProperties): void
}

export module Region {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Region

        /**
         * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        buffer?: Gtk.TextBuffer | null
    }

}

export interface Region {

    // Own properties of GtkSource-3.0.GtkSource.Region

    /**
     * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
     * buffer.
     */
    readonly buffer: Gtk.TextBuffer

    // Own fields of GtkSource-3.0.GtkSource.Region

    parent_instance: GObject.Object

    // Owm methods of GtkSource-3.0.GtkSource.Region

    /**
     * Adds `region_to_add` to `region`. `region_to_add` is not modified.
     * @param region_to_add the #GtkSourceRegion to add to `region,` or %NULL.
     */
    add_region(region_to_add: Region | null): void
    /**
     * Adds the subregion delimited by `_start` and `_end` to `region`.
     * @param _start the start of the subregion.
     * @param _end the end of the subregion.
     */
    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    /**
     * Gets the `start` and `end` bounds of the `region`.
     * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if the @region is empty.
     */
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_buffer(): Gtk.TextBuffer | null
    /**
     * Initializes a #GtkSourceRegionIter to the first subregion of `region`. If
     * `region` is empty, `iter` will be initialized to the end iterator.
     */
    get_start_region_iter(): /* iter */ RegionIter
    /**
     * Returns the intersection between `region1` and `region2`. `region1` and
     * `region2` are not modified.
     * @param region2 a #GtkSourceRegion, or %NULL.
     * @returns the intersection as a #GtkSourceRegion   object.
     */
    intersect_region(region2: Region | null): Region | null
    /**
     * Returns the intersection between `region` and the subregion delimited by
     * `_start` and `_end`. `region` is not modified.
     * @param _start the start of the subregion.
     * @param _end the end of the subregion.
     * @returns the intersection as a new   #GtkSourceRegion.
     */
    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null
    /**
     * Returns whether the `region` is empty. A %NULL `region` is considered empty.
     * @returns whether the @region is empty.
     */
    is_empty(): boolean
    /**
     * Subtracts `region_to_subtract` from `region`. `region_to_subtract` is not
     * modified.
     * @param region_to_subtract the #GtkSourceRegion to subtract from   `region,` or %NULL.
     */
    subtract_region(region_to_subtract: Region | null): void
    /**
     * Subtracts the subregion delimited by `_start` and `_end` from `region`.
     * @param _start the start of the subregion.
     * @param _end the end of the subregion.
     */
    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void
    /**
     * Gets a string represention of `region,` for debugging purposes.
     * 
     * The returned string contains the character offsets of the subregions. It
     * doesn't include a newline character at the end of the string.
     * @returns a string represention of @region. Free   with g_free() when no longer needed.
     */
    to_string(): string | null

    // Class property signals of GtkSource-3.0.GtkSource.Region

    connect(sigName: "notify::buffer", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Region extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Region

    static name: string
    static $gtype: GObject.GType<Region>

    // Constructors of GtkSource-3.0.GtkSource.Region

    constructor(config?: Region.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer) 
    static new(buffer: Gtk.TextBuffer): Region
    _init(config?: Region.ConstructorProperties): void
}

export module SearchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.SearchContext

        /**
         * The #GtkSourceBuffer associated to the search context.
         */
        buffer?: Buffer | null
        /**
         * Highlight the search occurrences.
         */
        highlight?: boolean | null
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        match_style?: Style | null
        /**
         * The #GtkSourceSearchSettings associated to the search context.
         */
        settings?: SearchSettings | null
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        matchStyle?: Style | null
    }

}

export interface SearchContext {

    // Own properties of GtkSource-3.0.GtkSource.SearchContext

    /**
     * The #GtkSourceBuffer associated to the search context.
     */
    readonly buffer: Buffer
    /**
     * Highlight the search occurrences.
     */
    highlight: boolean
    /**
     * A #GtkSourceStyle, or %NULL for theme's scheme default style.
     */
    match_style: Style
    /**
     * A #GtkSourceStyle, or %NULL for theme's scheme default style.
     */
    matchStyle: Style
    /**
     * The total number of search occurrences. If the search is disabled,
     * the value is 0. If the buffer is not already fully scanned, the value
     * is -1.
     */
    readonly occurrences_count: number
    /**
     * The total number of search occurrences. If the search is disabled,
     * the value is 0. If the buffer is not already fully scanned, the value
     * is -1.
     */
    readonly occurrencesCount: number
    /**
     * If the regex search pattern doesn't follow all the rules, this
     * property will be set. If the pattern is valid, the value is %NULL.
     * 
     * Free with g_error_free().
     */
    readonly regex_error: any
    /**
     * If the regex search pattern doesn't follow all the rules, this
     * property will be set. If the pattern is valid, the value is %NULL.
     * 
     * Free with g_error_free().
     */
    readonly regexError: any
    /**
     * The #GtkSourceSearchSettings associated to the search context.
     */
    settings: SearchSettings

    // Own fields of GtkSource-3.0.GtkSource.SearchContext

    parent: GObject.Object
    priv: SearchContextPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SearchContext

    /**
     * Synchronous backward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * @param iter start of search.
     * @returns whether a match was found.
     */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]
    /**
     * Synchronous backward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * 
     * The difference with gtk_source_search_context_backward() is that the
     * `has_wrapped_around` out parameter has been added for convenience.
     * 
     * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the #GtkSourceSearchSettings:wrap-around property.
     * @param iter start of search.
     * @returns whether a match was found.
     */
    backward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter, /* has_wrapped_around */ boolean ]
    /**
     * The asynchronous version of gtk_source_search_context_backward2().
     * 
     * See the documentation of gtk_source_search_context_backward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of backward_async

    /**
     * Promisified version of {@link backward_async}
     * 
     * The asynchronous version of gtk_source_search_context_backward2().
     * 
     * See the documentation of gtk_source_search_context_backward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @returns A Promise of: whether a match was found.
     */
    backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]>
    /**
     * Finishes a backward search started with
     * gtk_source_search_context_backward_async().
     * @param result a #GAsyncResult.
     * @returns whether a match was found.
     */
    backward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]
    /**
     * Finishes a backward search started with
     * gtk_source_search_context_backward_async().
     * 
     * See the documentation of gtk_source_search_context_backward2() for more
     * details.
     * @param result a #GAsyncResult.
     * @returns whether a match was found.
     */
    backward_finish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter, /* has_wrapped_around */ boolean ]
    /**
     * Synchronous forward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * @param iter start of search.
     * @returns whether a match was found.
     */
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]
    /**
     * Synchronous forward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * 
     * The difference with gtk_source_search_context_forward() is that the
     * `has_wrapped_around` out parameter has been added for convenience.
     * 
     * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the #GtkSourceSearchSettings:wrap-around property.
     * @param iter start of search.
     * @returns whether a match was found.
     */
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter, /* has_wrapped_around */ boolean ]
    /**
     * The asynchronous version of gtk_source_search_context_forward2().
     * 
     * See the documentation of gtk_source_search_context_forward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of forward_async

    /**
     * Promisified version of {@link forward_async}
     * 
     * The asynchronous version of gtk_source_search_context_forward2().
     * 
     * See the documentation of gtk_source_search_context_forward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @returns A Promise of: whether a match was found.
     */
    forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]>
    /**
     * Finishes a forward search started with
     * gtk_source_search_context_forward_async().
     * @param result a #GAsyncResult.
     * @returns whether a match was found.
     */
    forward_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter ]
    /**
     * Finishes a forward search started with
     * gtk_source_search_context_forward_async().
     * 
     * See the documentation of gtk_source_search_context_forward2() for more
     * details.
     * @param result a #GAsyncResult.
     * @returns whether a match was found.
     */
    forward_finish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* match_start */ Gtk.TextIter, /* match_end */ Gtk.TextIter, /* has_wrapped_around */ boolean ]
    get_buffer(): Buffer
    get_highlight(): boolean
    get_match_style(): Style
    /**
     * Gets the position of a search occurrence. If the buffer is not already fully
     * scanned, the position may be unknown, and -1 is returned. If 0 is returned,
     * it means that this part of the buffer has already been scanned, and that
     * `match_start` and `match_end` don't delimit an occurrence.
     * @param match_start the start of the occurrence.
     * @param match_end the end of the occurrence.
     * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if @match_start and @match_end don't delimit an occurrence. Returns -1 if the position is not yet known.
     */
    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number
    /**
     * Gets the total number of search occurrences. If the buffer is not already
     * fully scanned, the total number of occurrences is unknown, and -1 is
     * returned.
     * @returns the total number of search occurrences, or -1 if unknown.
     */
    get_occurrences_count(): number
    /**
     * Regular expression patterns must follow certain rules. If
     * #GtkSourceSearchSettings:search-text breaks a rule, the error can be retrieved
     * with this function. The error domain is #G_REGEX_ERROR.
     * 
     * Free the return value with g_error_free().
     * @returns the #GError, or %NULL if the pattern is valid.
     */
    get_regex_error(): GLib.Error | null
    get_settings(): SearchSettings
    /**
     * Replaces a search match by another text. If `match_start` and `match_end`
     * doesn't correspond to a search match, %FALSE is returned.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
     * @param match_start the start of the match to replace.
     * @param match_end the end of the match to replace.
     * @param replace the replacement text.
     * @param replace_length the length of `replace` in bytes, or -1.
     * @returns whether the match has been replaced.
     */
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    /**
     * Replaces a search match by another text. If `match_start` and `match_end`
     * doesn't correspond to a search match, %FALSE is returned.
     * 
     * Unlike with gtk_source_search_context_replace(), the `match_start` and
     * `match_end` iters are revalidated to point to the replacement text boundaries.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
     * @param match_start the start of the match to replace.
     * @param match_end the end of the match to replace.
     * @param replace the replacement text.
     * @param replace_length the length of `replace` in bytes, or -1.
     * @returns whether the match has been replaced.
     */
    replace2(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean
    /**
     * Replaces all search matches by another text. It is a synchronous function, so
     * it can block the user interface.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
     * @param replace the replacement text.
     * @param replace_length the length of `replace` in bytes, or -1.
     * @returns the number of replaced matches.
     */
    replace_all(replace: string, replace_length: number): number
    /**
     * Enables or disables the search occurrences highlighting.
     * @param highlight the setting.
     */
    set_highlight(highlight: boolean): void
    /**
     * Set the style to apply on search matches. If `match_style` is %NULL, default
     * theme's scheme 'match-style' will be used.
     * To enable or disable the search highlighting, use
     * gtk_source_search_context_set_highlight().
     * @param match_style a #GtkSourceStyle, or %NULL.
     */
    set_match_style(match_style: Style | null): void
    /**
     * Associate a #GtkSourceSearchSettings with the search context. If `settings` is
     * %NULL, a new one will be created.
     * 
     * The search context holds a reference to `settings`.
     * @param settings the new #GtkSourceSearchSettings, or %NULL.
     */
    set_settings(settings: SearchSettings | null): void

    // Class property signals of GtkSource-3.0.GtkSource.SearchContext

    connect(sigName: "notify::buffer", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight", ...args: any[]): void
    connect(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-style", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::match-style", ...args: any[]): void
    connect(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occurrences-count", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::occurrences-count", ...args: any[]): void
    connect(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-error", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::regex-error", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: SearchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SearchContext extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SearchContext

    static name: string
    static $gtype: GObject.GType<SearchContext>

    // Constructors of GtkSource-3.0.GtkSource.SearchContext

    constructor(config?: SearchContext.ConstructorProperties) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`. If `settings` is %NULL, a new #GtkSourceSearchSettings object will
     * be created, that you can retrieve with
     * gtk_source_search_context_get_settings().
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @param settings a #GtkSourceSearchSettings, or %NULL.
     * @returns a new search context.
     */
    constructor(buffer: Buffer, settings: SearchSettings | null) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`. If `settings` is %NULL, a new #GtkSourceSearchSettings object will
     * be created, that you can retrieve with
     * gtk_source_search_context_get_settings().
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @param settings a #GtkSourceSearchSettings, or %NULL.
     * @returns a new search context.
     */
    static new(buffer: Buffer, settings: SearchSettings | null): SearchContext
    _init(config?: SearchContext.ConstructorProperties): void
}

export module SearchSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.SearchSettings

        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        at_word_boundaries?: boolean | null
        /**
         * Whether the search is case sensitive.
         */
        case_sensitive?: boolean | null
        /**
         * Search by regular expressions with
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        regex_enabled?: boolean | null
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
         * the pattern.
         */
        search_text?: string | null
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        wrap_around?: boolean | null
        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        atWordBoundaries?: boolean | null
        /**
         * Whether the search is case sensitive.
         */
        caseSensitive?: boolean | null
        /**
         * Search by regular expressions with
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        regexEnabled?: boolean | null
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
         * the pattern.
         */
        searchText?: string | null
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        wrapAround?: boolean | null
    }

}

export interface SearchSettings {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettings

    /**
     * If %TRUE, a search match must start and end a word. The match can
     * span multiple words.
     */
    at_word_boundaries: boolean
    /**
     * If %TRUE, a search match must start and end a word. The match can
     * span multiple words.
     */
    atWordBoundaries: boolean
    /**
     * Whether the search is case sensitive.
     */
    case_sensitive: boolean
    /**
     * Whether the search is case sensitive.
     */
    caseSensitive: boolean
    /**
     * Search by regular expressions with
     * #GtkSourceSearchSettings:search-text as the pattern.
     */
    regex_enabled: boolean
    /**
     * Search by regular expressions with
     * #GtkSourceSearchSettings:search-text as the pattern.
     */
    regexEnabled: boolean
    /**
     * A search string, or %NULL if the search is disabled. If the regular
     * expression search is enabled, #GtkSourceSearchSettings:search-text is
     * the pattern.
     */
    search_text: string | null
    /**
     * A search string, or %NULL if the search is disabled. If the regular
     * expression search is enabled, #GtkSourceSearchSettings:search-text is
     * the pattern.
     */
    searchText: string | null
    /**
     * For a forward search, continue at the beginning of the buffer if no
     * search occurrence is found. For a backward search, continue at the
     * end of the buffer.
     */
    wrap_around: boolean
    /**
     * For a forward search, continue at the beginning of the buffer if no
     * search occurrence is found. For a backward search, continue at the
     * end of the buffer.
     */
    wrapAround: boolean

    // Own fields of GtkSource-3.0.GtkSource.SearchSettings

    parent: GObject.Object
    priv: SearchSettingsPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SearchSettings

    get_at_word_boundaries(): boolean
    get_case_sensitive(): boolean
    get_regex_enabled(): boolean
    /**
     * Gets the text to search. The return value must not be freed.
     * 
     * You may be interested to call gtk_source_utils_escape_search_text() after
     * this function.
     * @returns the text to search, or %NULL if the search is disabled.
     */
    get_search_text(): string | null
    get_wrap_around(): boolean
    /**
     * Change whether the search is done at word boundaries. If `at_word_boundaries`
     * is %TRUE, a search match must start and end a word. The match can span
     * multiple words. See also gtk_text_iter_starts_word() and
     * gtk_text_iter_ends_word().
     * @param at_word_boundaries the setting.
     */
    set_at_word_boundaries(at_word_boundaries: boolean): void
    /**
     * Enables or disables the case sensitivity for the search.
     * @param case_sensitive the setting.
     */
    set_case_sensitive(case_sensitive: boolean): void
    /**
     * Enables or disables whether to search by regular expressions.
     * If enabled, the #GtkSourceSearchSettings:search-text property contains the
     * pattern of the regular expression.
     * 
     * #GtkSourceSearchContext uses #GRegex when regex search is enabled. See the
     * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
     * page in the GLib reference manual.
     * @param regex_enabled the setting.
     */
    set_regex_enabled(regex_enabled: boolean): void
    /**
     * Sets the text to search. If `search_text` is %NULL or is empty, the search
     * will be disabled. A copy of `search_text` will be made, so you can safely free
     * `search_text` after a call to this function.
     * 
     * You may be interested to call gtk_source_utils_unescape_search_text() before
     * this function.
     * @param search_text the nul-terminated text to search, or %NULL to disable the search.
     */
    set_search_text(search_text: string | null): void
    /**
     * Enables or disables the wrap around search. If `wrap_around` is %TRUE, the
     * forward search continues at the beginning of the buffer if no search
     * occurrences are found. Similarly, the backward search continues to search at
     * the end of the buffer.
     * @param wrap_around the setting.
     */
    set_wrap_around(wrap_around: boolean): void

    // Class property signals of GtkSource-3.0.GtkSource.SearchSettings

    connect(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::at-word-boundaries", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::at-word-boundaries", ...args: any[]): void
    connect(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::case-sensitive", ...args: any[]): void
    connect(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-enabled", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::regex-enabled", ...args: any[]): void
    connect(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-text", ...args: any[]): void
    connect(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-around", callback: (($obj: SearchSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-around", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SearchSettings extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettings

    static name: string
    static $gtype: GObject.GType<SearchSettings>

    // Constructors of GtkSource-3.0.GtkSource.SearchSettings

    constructor(config?: SearchSettings.ConstructorProperties) 
    /**
     * Creates a new search settings object.
     * @constructor 
     * @returns a new search settings object.
     */
    constructor() 
    /**
     * Creates a new search settings object.
     * @constructor 
     * @returns a new search settings object.
     */
    static new(): SearchSettings
    _init(config?: SearchSettings.ConstructorProperties): void
}

export module SpaceDrawer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.SpaceDrawer

        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        enable_matrix?: boolean | null
        /**
         * The :matrix property is a #GVariant property to specify where and
         * what kind of white spaces to draw.
         * 
         * The #GVariant is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
         * integer for each #GtkSourceSpaceLocationFlags, in the same order as
         * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
         * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
         * 
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
         * 
         * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
         */
        matrix?: GLib.Variant | null
        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        enableMatrix?: boolean | null
    }

}

export interface SpaceDrawer {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawer

    /**
     * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     */
    enable_matrix: boolean
    /**
     * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     */
    enableMatrix: boolean
    /**
     * The :matrix property is a #GVariant property to specify where and
     * what kind of white spaces to draw.
     * 
     * The #GVariant is of type `"au"`, an array of unsigned integers. Each
     * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
     * integer for each #GtkSourceSpaceLocationFlags, in the same order as
     * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
     * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
     * 
     * If the array is shorter than the number of locations, then the value
     * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
     * 
     * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
     */
    matrix: GLib.Variant

    // Own fields of GtkSource-3.0.GtkSource.SpaceDrawer

    parent: GObject.Object
    priv: SpaceDrawerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SpaceDrawer

    /**
     * Binds the #GtkSourceSpaceDrawer:matrix property to a #GSettings key.
     * 
     * The #GSettings key must be of the same type as the
     * #GtkSourceSpaceDrawer:matrix property, that is, `"au"`.
     * 
     * The g_settings_bind() function cannot be used, because the default GIO
     * mapping functions don't support #GVariant properties (maybe it will be
     * supported by a future GIO version, in which case this function can be
     * deprecated).
     * @param settings a #GSettings object.
     * @param key the `settings` key to bind.
     * @param flags flags for the binding.
     */
    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    get_enable_matrix(): boolean
    /**
     * Gets the value of the #GtkSourceSpaceDrawer:matrix property, as a #GVariant.
     * An empty array can be returned in case the matrix is a zero matrix.
     * 
     * The gtk_source_space_drawer_get_types_for_locations() function may be more
     * convenient to use.
     * @returns the #GtkSourceSpaceDrawer:matrix value as a new floating #GVariant   instance.
     */
    get_matrix(): GLib.Variant
    /**
     * If only one location is specified, this function returns what kind of
     * white spaces are drawn at that location. The value is retrieved from the
     * #GtkSourceSpaceDrawer:matrix property.
     * 
     * If several locations are specified, this function returns the logical AND for
     * those locations. Which means that if a certain kind of white space is present
     * in the return value, then that kind of white space is drawn at all the
     * specified `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     * @returns a combination of #GtkSourceSpaceTypeFlags.
     */
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags
    /**
     * Sets whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     * @param enable_matrix the new value.
     */
    set_enable_matrix(enable_matrix: boolean): void
    /**
     * Sets a new value to the #GtkSourceSpaceDrawer:matrix property, as a
     * #GVariant. If `matrix` is %NULL, then an empty array is set.
     * 
     * If `matrix` is floating, it is consumed.
     * 
     * The gtk_source_space_drawer_set_types_for_locations() function may be more
     * convenient to use.
     * @param matrix the new matrix value, or %NULL.
     */
    set_matrix(matrix: GLib.Variant | null): void
    /**
     * Modifies the #GtkSourceSpaceDrawer:matrix property at the specified
     * `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     * @param types a combination of #GtkSourceSpaceTypeFlags.
     */
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void

    // Class property signals of GtkSource-3.0.GtkSource.SpaceDrawer

    connect(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-matrix", ...args: any[]): void
    connect(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::matrix", callback: (($obj: SpaceDrawer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::matrix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SpaceDrawer extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawer

    static name: string
    static $gtype: GObject.GType<SpaceDrawer>

    // Constructors of GtkSource-3.0.GtkSource.SpaceDrawer

    constructor(config?: SpaceDrawer.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceSpaceDrawer object. Useful for storing space drawing
     * settings independently of a #GtkSourceView.
     * @constructor 
     * @returns a new #GtkSourceSpaceDrawer.
     */
    constructor() 
    /**
     * Creates a new #GtkSourceSpaceDrawer object. Useful for storing space drawing
     * settings independently of a #GtkSourceView.
     * @constructor 
     * @returns a new #GtkSourceSpaceDrawer.
     */
    static new(): SpaceDrawer
    _init(config?: SpaceDrawer.ConstructorProperties): void
}

export module Style {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Style

        background?: string | null
        background_set?: boolean | null
        bold?: boolean | null
        bold_set?: boolean | null
        foreground?: string | null
        foreground_set?: boolean | null
        italic?: boolean | null
        italic_set?: boolean | null
        line_background?: string | null
        line_background_set?: boolean | null
        pango_underline?: Pango.Underline | null
        scale?: string | null
        scale_set?: boolean | null
        strikethrough?: boolean | null
        strikethrough_set?: boolean | null
        underline?: boolean | null
        underline_color?: string | null
        underline_color_set?: boolean | null
        underline_set?: boolean | null
        backgroundSet?: boolean | null
        boldSet?: boolean | null
        foregroundSet?: boolean | null
        italicSet?: boolean | null
        lineBackground?: string | null
        lineBackgroundSet?: boolean | null
        pangoUnderline?: Pango.Underline | null
        scaleSet?: boolean | null
        strikethroughSet?: boolean | null
        underlineColor?: string | null
        underlineColorSet?: boolean | null
        underlineSet?: boolean | null
    }

}

export interface Style {

    // Own properties of GtkSource-3.0.GtkSource.Style

    readonly background: string | null
    readonly background_set: boolean
    readonly backgroundSet: boolean
    readonly bold: boolean
    readonly bold_set: boolean
    readonly boldSet: boolean
    readonly foreground: string | null
    readonly foreground_set: boolean
    readonly foregroundSet: boolean
    readonly italic: boolean
    readonly italic_set: boolean
    readonly italicSet: boolean
    readonly line_background: string | null
    readonly lineBackground: string | null
    readonly line_background_set: boolean
    readonly lineBackgroundSet: boolean
    readonly pango_underline: Pango.Underline
    readonly pangoUnderline: Pango.Underline
    readonly scale: string | null
    readonly scale_set: boolean
    readonly scaleSet: boolean
    readonly strikethrough: boolean
    readonly strikethrough_set: boolean
    readonly strikethroughSet: boolean
    readonly underline: boolean
    readonly underline_color: string | null
    readonly underlineColor: string | null
    readonly underline_color_set: boolean
    readonly underlineColorSet: boolean
    readonly underline_set: boolean
    readonly underlineSet: boolean

    // Owm methods of GtkSource-3.0.GtkSource.Style

    /**
     * This function modifies the #GtkTextTag properties that are related to the
     * #GtkSourceStyle properties. Other #GtkTextTag properties are left untouched.
     * 
     * If `style` is non-%NULL, applies `style` to `tag`.
     * 
     * If `style` is %NULL, the related *-set properties of #GtkTextTag are set to
     * %FALSE.
     * @param tag a #GtkTextTag to apply styles to.
     */
    apply(tag: Gtk.TextTag): void
    /**
     * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
     * has the same attributes set.
     * @returns copy of @style, call g_object_unref() when you are done with it.
     */
    copy(): Style

    // Class property signals of GtkSource-3.0.GtkSource.Style

    connect(sigName: "notify::background", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::bold", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bold", ...args: any[]): void
    connect(sigName: "notify::bold-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bold-set", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::italic", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::italic", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::italic", ...args: any[]): void
    connect(sigName: "notify::italic-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::italic-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::italic-set", ...args: any[]): void
    connect(sigName: "notify::line-background", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-background", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-background", ...args: any[]): void
    connect(sigName: "notify::line-background-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-background-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-background-set", ...args: any[]): void
    connect(sigName: "notify::pango-underline", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pango-underline", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pango-underline", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-color", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-color", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-color", ...args: any[]): void
    connect(sigName: "notify::underline-color-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-color-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-color-set", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: Style, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Style extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Style

    static name: string
    static $gtype: GObject.GType<Style>

    // Constructors of GtkSource-3.0.GtkSource.Style

    constructor(config?: Style.ConstructorProperties) 
    _init(config?: Style.ConstructorProperties): void
}

export module StyleScheme {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleScheme

        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in #GtkSourceStyleSchemeManager.
         */
        id?: string | null
    }

}

export interface StyleScheme {

    // Own properties of GtkSource-3.0.GtkSource.StyleScheme

    /**
     * Style scheme description, a translatable string to present to the user.
     */
    readonly description: string | null
    /**
     * Style scheme filename or %NULL.
     */
    readonly filename: string | null
    /**
     * Style scheme id, a unique string used to identify the style scheme
     * in #GtkSourceStyleSchemeManager.
     */
    readonly id: string | null
    /**
     * Style scheme name, a translatable string to present to the user.
     */
    readonly name: string | null

    // Own fields of GtkSource-3.0.GtkSource.StyleScheme

    base: GObject.Object
    priv: StyleSchemePrivate

    // Owm methods of GtkSource-3.0.GtkSource.StyleScheme

    get_authors(): string[] | null
    get_description(): string | null
    get_filename(): string | null
    get_id(): string
    get_name(): string
    get_style(style_id: string): Style | null

    // Class property signals of GtkSource-3.0.GtkSource.StyleScheme

    connect(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleScheme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyleScheme extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleScheme

    static name: string
    static $gtype: GObject.GType<StyleScheme>

    // Constructors of GtkSource-3.0.GtkSource.StyleScheme

    constructor(config?: StyleScheme.ConstructorProperties) 
    _init(config?: StyleScheme.ConstructorProperties): void
}

export module StyleSchemeChooserButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface StyleSchemeChooserButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, StyleSchemeChooser {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    parent: Gtk.Button & Gtk.Container

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    connect(sigName: "notify::always-show-image", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyleSchemeChooserButton extends Gtk.Button {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    static name: string
    static $gtype: GObject.GType<StyleSchemeChooserButton>

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    constructor(config?: StyleSchemeChooserButton.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserButton.
     * @constructor 
     * @returns a new #GtkSourceStyleSchemeChooserButton.
     */
    constructor() 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserButton.
     * @constructor 
     * @returns a new #GtkSourceStyleSchemeChooserButton.
     */
    static new(): StyleSchemeChooserButton
    _init(config?: StyleSchemeChooserButton.ConstructorProperties): void
}

export module StyleSchemeChooserWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Bin.ConstructorProperties {
    }

}

export interface StyleSchemeChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, StyleSchemeChooser {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    parent: Gtk.Bin & Gtk.Container

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    connect(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyleSchemeChooserWidget extends Gtk.Bin {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    static name: string
    static $gtype: GObject.GType<StyleSchemeChooserWidget>

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    constructor(config?: StyleSchemeChooserWidget.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserWidget.
     * @constructor 
     * @returns a new  #GtkSourceStyleSchemeChooserWidget.
     */
    constructor() 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserWidget.
     * @constructor 
     * @returns a new  #GtkSourceStyleSchemeChooserWidget.
     */
    static new(): StyleSchemeChooserWidget
    _init(config?: StyleSchemeChooserWidget.ConstructorProperties): void
}

export module StyleSchemeManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleSchemeManager

        search_path?: string[] | null
        searchPath?: string[] | null
    }

}

export interface StyleSchemeManager {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManager

    readonly scheme_ids: string[]
    readonly schemeIds: string[]
    search_path: string[]
    searchPath: string[]

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeManager

    parent: GObject.Object
    priv: StyleSchemeManagerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.StyleSchemeManager

    /**
     * Appends `path` to the list of directories where the `manager` looks for
     * style scheme files.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     * @param path a directory or a filename.
     */
    append_search_path(path: string): void
    /**
     * Mark any currently cached information about the available style scehems
     * as invalid. All the available style schemes will be reloaded next time
     * the `manager` is accessed.
     */
    force_rescan(): void
    /**
     * Looks up style scheme by id.
     * @param scheme_id style scheme id to find.
     * @returns a #GtkSourceStyleScheme object. Returned value is owned by @manager and must not be unref'ed.
     */
    get_scheme(scheme_id: string): StyleScheme
    /**
     * Returns the ids of the available style schemes.
     * @returns  a %NULL-terminated array of strings containing the ids of the available style schemes or %NULL if no style scheme is available. The array is sorted alphabetically according to the scheme name. The array is owned by the @manager and must not be modified.
     */
    get_scheme_ids(): string[] | null
    /**
     * Returns the current search path for the `manager`.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     * @returns a %NULL-terminated array of string containing the search path. The array is owned by the @manager and must not be modified.
     */
    get_search_path(): string[]
    /**
     * Prepends `path` to the list of directories where the `manager` looks
     * for style scheme files.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     * @param path a directory or a filename.
     */
    prepend_search_path(path: string): void
    /**
     * Sets the list of directories where the `manager` looks for
     * style scheme files.
     * If `path` is %NULL, the search path is reset to default.
     * @param path  a %NULL-terminated array of strings or %NULL.
     */
    set_search_path(path: string[] | null): void

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeManager

    connect(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-ids", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scheme-ids", ...args: any[]): void
    connect(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: (($obj: StyleSchemeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyleSchemeManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManager

    static name: string
    static $gtype: GObject.GType<StyleSchemeManager>

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeManager

    constructor(config?: StyleSchemeManager.ConstructorProperties) 
    /**
     * Creates a new style manager. If you do not need more than one style
     * manager then use gtk_source_style_scheme_manager_get_default() instead.
     * @constructor 
     * @returns a new #GtkSourceStyleSchemeManager.
     */
    constructor() 
    /**
     * Creates a new style manager. If you do not need more than one style
     * manager then use gtk_source_style_scheme_manager_get_default() instead.
     * @constructor 
     * @returns a new #GtkSourceStyleSchemeManager.
     */
    static new(): StyleSchemeManager
    _init(config?: StyleSchemeManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceStyleSchemeManager instance.
     * @returns a #GtkSourceStyleSchemeManager. Return value is owned by GtkSourceView library and must not be unref'ed.
     */
    static get_default(): StyleSchemeManager
}

export module Tag {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextTag.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Tag

        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         * 
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        draw_spaces?: boolean | null
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        draw_spaces_set?: boolean | null
        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         * 
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        drawSpaces?: boolean | null
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        drawSpacesSet?: boolean | null
    }

}

export interface Tag {

    // Own properties of GtkSource-3.0.GtkSource.Tag

    /**
     * Whether to draw white spaces. This property takes precedence over the value
     * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
     * (only where the tag is applied).
     * 
     * Setting this property also changes #GtkSourceTag:draw-spaces-set to
     * %TRUE.
     */
    draw_spaces: boolean
    /**
     * Whether to draw white spaces. This property takes precedence over the value
     * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
     * (only where the tag is applied).
     * 
     * Setting this property also changes #GtkSourceTag:draw-spaces-set to
     * %TRUE.
     */
    drawSpaces: boolean
    /**
     * Whether the #GtkSourceTag:draw-spaces property is set and must be
     * taken into account.
     */
    draw_spaces_set: boolean
    /**
     * Whether the #GtkSourceTag:draw-spaces property is set and must be
     * taken into account.
     */
    drawSpacesSet: boolean

    // Own fields of GtkSource-3.0.GtkSource.Tag

    parent_instance: Gtk.TextTag & GObject.Object

    // Class property signals of GtkSource-3.0.GtkSource.Tag

    connect(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
    connect(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-spaces-set", ...args: any[]): void
    connect(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accumulative-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accumulative-margin", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-full-height", ...args: any[]): void
    connect(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-full-height-set", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fallback", ...args: any[]): void
    connect(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fallback-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-features", ...args: any[]): void
    connect(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-features-set", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-set", ...args: any[]): void
    connect(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible", ...args: any[]): void
    connect(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-set", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin-set", ...args: any[]): void
    connect(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::letter-spacing", ...args: any[]): void
    connect(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::letter-spacing-set", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paragraph-background", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-gdk", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paragraph-background-gdk", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paragraph-background-rgba", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paragraph-background-set", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines-set", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines-set", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap-set", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin-set", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-rgba", ...args: any[]): void
    connect(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-rgba-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs-set", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-rgba", ...args: any[]): void
    connect(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-rgba-set", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode-set", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode-set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tag extends Gtk.TextTag {

    // Own properties of GtkSource-3.0.GtkSource.Tag

    static name: string
    static $gtype: GObject.GType<Tag>

    // Constructors of GtkSource-3.0.GtkSource.Tag

    constructor(config?: Tag.ConstructorProperties) 
    /**
     * Creates a #GtkSourceTag. Configure the tag using object arguments,
     * i.e. using g_object_set().
     * 
     * For usual cases, gtk_source_buffer_create_source_tag() is more convenient to
     * use.
     * @constructor 
     * @param name tag name, or %NULL.
     * @returns a new #GtkSourceTag.
     */
    constructor(name: string | null) 
    /**
     * Creates a #GtkSourceTag. Configure the tag using object arguments,
     * i.e. using g_object_set().
     * 
     * For usual cases, gtk_source_buffer_create_source_tag() is more convenient to
     * use.
     * @constructor 
     * @param name tag name, or %NULL.
     * @returns a new #GtkSourceTag.
     */
    static new(name: string | null): Tag
    _init(config?: Tag.ConstructorProperties): void
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `change-case`
     */
    export interface ChangeCaseSignalCallback {
        ($obj: View, case_type: ChangeCaseType): void
    }

    /**
     * Signal callback interface for `change-number`
     */
    export interface ChangeNumberSignalCallback {
        ($obj: View, count: number): void
    }

    /**
     * Signal callback interface for `join-lines`
     */
    export interface JoinLinesSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `line-mark-activated`
     */
    export interface LineMarkActivatedSignalCallback {
        ($obj: View, iter: Gtk.TextIter, event: Gdk.Event): void
    }

    /**
     * Signal callback interface for `move-lines`
     */
    export interface MoveLinesSignalCallback {
        ($obj: View, copy: boolean, count: number): void
    }

    /**
     * Signal callback interface for `move-to-matching-bracket`
     */
    export interface MoveToMatchingBracketSignalCallback {
        ($obj: View, extend_selection: boolean): void
    }

    /**
     * Signal callback interface for `move-words`
     */
    export interface MoveWordsSignalCallback {
        ($obj: View, count: number): void
    }

    /**
     * Signal callback interface for `redo`
     */
    export interface RedoSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `show-completion`
     */
    export interface ShowCompletionSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `smart-home-end`
     */
    export interface SmartHomeEndSignalCallback {
        ($obj: View, iter: Gtk.TextIter, count: number): void
    }

    /**
     * Signal callback interface for `undo`
     */
    export interface UndoSignalCallback {
        ($obj: View): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TextView.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.View

        auto_indent?: boolean | null
        /**
         * Draw a specific background pattern on the view.
         */
        background_pattern?: BackgroundPatternType | null
        /**
         * Set if and how the spaces should be visualized.
         * 
         * For a finer-grained method, there is also the GtkSourceTag's
         * #GtkSourceTag:draw-spaces property.
         */
        draw_spaces?: DrawSpacesFlags | null
        highlight_current_line?: boolean | null
        indent_on_tab?: boolean | null
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indent_width?: number | null
        insert_spaces_instead_of_tabs?: boolean | null
        /**
         * Position of the right margin.
         */
        right_margin_position?: number | null
        /**
         * Whether to display line mark pixbufs
         */
        show_line_marks?: boolean | null
        /**
         * Whether to display line numbers
         */
        show_line_numbers?: boolean | null
        /**
         * Whether to display the right margin.
         */
        show_right_margin?: boolean | null
        /**
         * Whether smart Backspace should be used.
         */
        smart_backspace?: boolean | null
        /**
         * Set the behavior of the HOME and END keys.
         */
        smart_home_end?: SmartHomeEndType | null
        /**
         * Width of a tab character expressed in number of spaces.
         */
        tab_width?: number | null
        autoIndent?: boolean | null
        /**
         * Draw a specific background pattern on the view.
         */
        backgroundPattern?: BackgroundPatternType | null
        /**
         * Set if and how the spaces should be visualized.
         * 
         * For a finer-grained method, there is also the GtkSourceTag's
         * #GtkSourceTag:draw-spaces property.
         */
        drawSpaces?: DrawSpacesFlags | null
        highlightCurrentLine?: boolean | null
        indentOnTab?: boolean | null
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indentWidth?: number | null
        insertSpacesInsteadOfTabs?: boolean | null
        /**
         * Position of the right margin.
         */
        rightMarginPosition?: number | null
        /**
         * Whether to display line mark pixbufs
         */
        showLineMarks?: boolean | null
        /**
         * Whether to display line numbers
         */
        showLineNumbers?: boolean | null
        /**
         * Whether to display the right margin.
         */
        showRightMargin?: boolean | null
        /**
         * Whether smart Backspace should be used.
         */
        smartBackspace?: boolean | null
        /**
         * Set the behavior of the HOME and END keys.
         */
        smartHomeEnd?: SmartHomeEndType | null
        /**
         * Width of a tab character expressed in number of spaces.
         */
        tabWidth?: number | null
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GtkSource-3.0.GtkSource.View

    auto_indent: boolean
    autoIndent: boolean
    /**
     * Draw a specific background pattern on the view.
     */
    background_pattern: BackgroundPatternType
    /**
     * Draw a specific background pattern on the view.
     */
    backgroundPattern: BackgroundPatternType
    /**
     * The completion object associated with the view
     */
    readonly completion: Completion
    /**
     * Set if and how the spaces should be visualized.
     * 
     * For a finer-grained method, there is also the GtkSourceTag's
     * #GtkSourceTag:draw-spaces property.
     */
    draw_spaces: DrawSpacesFlags
    /**
     * Set if and how the spaces should be visualized.
     * 
     * For a finer-grained method, there is also the GtkSourceTag's
     * #GtkSourceTag:draw-spaces property.
     */
    drawSpaces: DrawSpacesFlags
    highlight_current_line: boolean
    highlightCurrentLine: boolean
    indent_on_tab: boolean
    indentOnTab: boolean
    /**
     * Width of an indentation step expressed in number of spaces.
     */
    indent_width: number
    /**
     * Width of an indentation step expressed in number of spaces.
     */
    indentWidth: number
    insert_spaces_instead_of_tabs: boolean
    insertSpacesInsteadOfTabs: boolean
    /**
     * Position of the right margin.
     */
    right_margin_position: number
    /**
     * Position of the right margin.
     */
    rightMarginPosition: number
    /**
     * Whether to display line mark pixbufs
     */
    show_line_marks: boolean
    /**
     * Whether to display line mark pixbufs
     */
    showLineMarks: boolean
    /**
     * Whether to display line numbers
     */
    show_line_numbers: boolean
    /**
     * Whether to display line numbers
     */
    showLineNumbers: boolean
    /**
     * Whether to display the right margin.
     */
    show_right_margin: boolean
    /**
     * Whether to display the right margin.
     */
    showRightMargin: boolean
    /**
     * Whether smart Backspace should be used.
     */
    smart_backspace: boolean
    /**
     * Whether smart Backspace should be used.
     */
    smartBackspace: boolean
    /**
     * Set the behavior of the HOME and END keys.
     */
    smart_home_end: SmartHomeEndType
    /**
     * Set the behavior of the HOME and END keys.
     */
    smartHomeEnd: SmartHomeEndType
    /**
     * The #GtkSourceSpaceDrawer object associated with the view.
     */
    readonly space_drawer: SpaceDrawer
    /**
     * The #GtkSourceSpaceDrawer object associated with the view.
     */
    readonly spaceDrawer: SpaceDrawer
    /**
     * Width of a tab character expressed in number of spaces.
     */
    tab_width: number
    /**
     * Width of a tab character expressed in number of spaces.
     */
    tabWidth: number

    // Conflicting properties

    parent_instance: Gtk.Container & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of GtkSource-3.0.GtkSource.View

    parent: Gtk.TextView & Gtk.Container
    priv: ViewPrivate

    // Owm methods of GtkSource-3.0.GtkSource.View

    /**
     * Returns whether auto-indentation of text is enabled.
     * @returns %TRUE if auto indentation is enabled.
     */
    get_auto_indent(): boolean
    /**
     * Returns the #GtkSourceBackgroundPatternType specifying if and how
     * the background pattern should be displayed for this `view`.
     * @returns the #GtkSourceBackgroundPatternType.
     */
    get_background_pattern(): BackgroundPatternType
    /**
     * Gets the #GtkSourceCompletion associated with `view`. The returned object is
     * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
     * object has a different #GtkSourceCompletion.
     * @returns the #GtkSourceCompletion associated with @view.
     */
    get_completion(): Completion
    /**
     * Returns the #GtkSourceDrawSpacesFlags specifying if and how spaces
     * should be displayed for this `view`.
     * @returns the #GtkSourceDrawSpacesFlags, 0 if no spaces should be drawn.
     */
    get_draw_spaces(): DrawSpacesFlags
    /**
     * Returns the #GtkSourceGutter object associated with `window_type` for `view`.
     * Only GTK_TEXT_WINDOW_LEFT and GTK_TEXT_WINDOW_RIGHT are supported,
     * respectively corresponding to the left and right gutter. The line numbers
     * and mark category icons are rendered in the left gutter.
     * @param window_type the gutter window type.
     * @returns the #GtkSourceGutter.
     */
    get_gutter(window_type: Gtk.TextWindowType): Gutter
    /**
     * Returns whether the current line is highlighted.
     * @returns %TRUE if the current line is highlighted.
     */
    get_highlight_current_line(): boolean
    /**
     * Returns whether when the tab key is pressed the current selection
     * should get indented instead of replaced with the \t character.
     * @returns %TRUE if the selection is indented when tab is pressed.
     */
    get_indent_on_tab(): boolean
    /**
     * Returns the number of spaces to use for each step of indent.
     * See gtk_source_view_set_indent_width() for details.
     * @returns indent width.
     */
    get_indent_width(): number
    /**
     * Returns whether when inserting a tabulator character it should
     * be replaced by a group of space characters.
     * @returns %TRUE if spaces are inserted instead of tabs.
     */
    get_insert_spaces_instead_of_tabs(): boolean
    /**
     * Gets attributes and priority for the `category`.
     * @param category the category.
     * @param priority place where priority of the category will be stored.
     * @returns #GtkSourceMarkAttributes for the @category. The object belongs to @view, so it must not be unreffed.
     */
    get_mark_attributes(category: string, priority: number): MarkAttributes
    /**
     * Gets the position of the right margin in the given `view`.
     * @returns the position of the right margin.
     */
    get_right_margin_position(): number
    /**
     * Returns whether line marks are displayed beside the text.
     * @returns %TRUE if the line marks are displayed.
     */
    get_show_line_marks(): boolean
    /**
     * Returns whether line numbers are displayed beside the text.
     * @returns %TRUE if the line numbers are displayed.
     */
    get_show_line_numbers(): boolean
    /**
     * Returns whether a right margin is displayed.
     * @returns %TRUE if the right margin is shown.
     */
    get_show_right_margin(): boolean
    /**
     * Returns %TRUE if pressing the Backspace key will try to delete spaces
     * up to the previous tab stop.
     * @returns %TRUE if smart Backspace handling is enabled.
     */
    get_smart_backspace(): boolean
    /**
     * Returns a #GtkSourceSmartHomeEndType end value specifying
     * how the cursor will move when HOME and END keys are pressed.
     * @returns a #GtkSourceSmartHomeEndType value.
     */
    get_smart_home_end(): SmartHomeEndType
    /**
     * Gets the #GtkSourceSpaceDrawer associated with `view`. The returned object is
     * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
     * object has a different #GtkSourceSpaceDrawer.
     * @returns the #GtkSourceSpaceDrawer associated with @view.
     */
    get_space_drawer(): SpaceDrawer
    /**
     * Returns the width of tabulation in characters.
     * @returns width of tab.
     */
    get_tab_width(): number
    /**
     * Determines the visual column at `iter` taking into consideration the
     * #GtkSourceView:tab-width of `view`.
     * @param iter a position in `view`.
     * @returns the visual column at @iter.
     */
    get_visual_column(iter: Gtk.TextIter): number
    /**
     * Inserts one indentation level at the beginning of the specified lines. The
     * empty lines are not indented.
     * @param start #GtkTextIter of the first line to indent
     * @param end #GtkTextIter of the last line to indent
     */
    indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * If %TRUE auto-indentation of text is enabled.
     * 
     * When Enter is pressed to create a new line, the auto-indentation inserts the
     * same indentation as the previous line. This is <emphasis>not</emphasis> a
     * "smart indentation" where an indentation level is added or removed depending
     * on the context.
     * @param enable whether to enable auto indentation.
     */
    set_auto_indent(enable: boolean): void
    /**
     * Set if and how the background pattern should be displayed.
     * @param background_pattern the #GtkSourceBackgroundPatternType.
     */
    set_background_pattern(background_pattern: BackgroundPatternType): void
    /**
     * Set if and how the spaces should be visualized. Specifying `flags` as 0 will
     * disable display of spaces.
     * 
     * For a finer-grained method, there is also the GtkSourceTag's
     * #GtkSourceTag:draw-spaces property.
     * @param flags #GtkSourceDrawSpacesFlags specifing how white spaces should be displayed
     */
    set_draw_spaces(flags: DrawSpacesFlags): void
    /**
     * If `highlight` is %TRUE the current line will be highlighted.
     * @param highlight whether to highlight the current line.
     */
    set_highlight_current_line(highlight: boolean): void
    /**
     * If %TRUE, when the tab key is pressed when several lines are selected, the
     * selected lines are indented of one level instead of being replaced with a \t
     * character. Shift+Tab unindents the selection.
     * 
     * If the first or last line is not selected completely, it is also indented or
     * unindented.
     * 
     * When the selection doesn't span several lines, the tab key always replaces
     * the selection with a normal \t character.
     * @param enable whether to indent a block when tab is pressed.
     */
    set_indent_on_tab(enable: boolean): void
    /**
     * Sets the number of spaces to use for each step of indent when the tab key is
     * pressed. If `width` is -1, the value of the #GtkSourceView:tab-width property
     * will be used.
     * 
     * The #GtkSourceView:indent-width interacts with the
     * #GtkSourceView:insert-spaces-instead-of-tabs property and
     * #GtkSourceView:tab-width. An example will be clearer: if the
     * #GtkSourceView:indent-width is 4 and
     * #GtkSourceView:tab-width is 8 and
     * #GtkSourceView:insert-spaces-instead-of-tabs is %FALSE, then pressing the tab
     * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
     * the tab key a second time will remove the 4 spaces and insert a \t character
     * instead (since #GtkSourceView:tab-width is 8). On the other hand, if
     * #GtkSourceView:insert-spaces-instead-of-tabs is %TRUE, the second tab key
     * pressed will insert 4 more spaces for a total of 8 spaces in the
     * #GtkTextBuffer.
     * 
     * The test-widget program (available in the GtkSourceView repository) may be
     * useful to better understand the indentation settings (enable the space
     * drawing!).
     * @param width indent width in characters.
     */
    set_indent_width(width: number): void
    /**
     * If %TRUE a tab key pressed is replaced by a group of space characters. Of
     * course it is still possible to insert a real \t programmatically with the
     * #GtkTextBuffer API.
     * @param enable whether to insert spaces instead of tabs.
     */
    set_insert_spaces_instead_of_tabs(enable: boolean): void
    /**
     * Sets attributes and priority for the `category`.
     * @param category the category.
     * @param attributes mark attributes.
     * @param priority priority of the category.
     */
    set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void
    /**
     * Sets the position of the right margin in the given `view`.
     * @param pos the width in characters where to position the right margin.
     */
    set_right_margin_position(pos: number): void
    /**
     * If %TRUE line marks will be displayed beside the text.
     * @param show whether line marks should be displayed.
     */
    set_show_line_marks(show: boolean): void
    /**
     * If %TRUE line numbers will be displayed beside the text.
     * @param show whether line numbers should be displayed.
     */
    set_show_line_numbers(show: boolean): void
    /**
     * If %TRUE a right margin is displayed.
     * @param show whether to show a right margin.
     */
    set_show_right_margin(show: boolean): void
    /**
     * When set to %TRUE, pressing the Backspace key will try to delete spaces
     * up to the previous tab stop.
     * @param smart_backspace whether to enable smart Backspace handling.
     */
    set_smart_backspace(smart_backspace: boolean): void
    /**
     * Set the desired movement of the cursor when HOME and END keys
     * are pressed.
     * @param smart_home_end the desired behavior among #GtkSourceSmartHomeEndType.
     */
    set_smart_home_end(smart_home_end: SmartHomeEndType): void
    /**
     * Sets the width of tabulation in characters. The #GtkTextBuffer still contains
     * \t characters, but they can take a different visual width in a #GtkSourceView
     * widget.
     * @param width width of tab in characters.
     */
    set_tab_width(width: number): void
    /**
     * Removes one indentation level at the beginning of the
     * specified lines.
     * @param start #GtkTextIter of the first line to indent
     * @param end #GtkTextIter of the last line to indent
     */
    unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void

    // Conflicting methods

    /**
     * Retrieves the #GdkWindow corresponding to an area of the text view;
     * possible windows include the overall widget window, child windows
     * on the left, right, top, bottom, and the window that displays the
     * text buffer. Windows are %NULL and nonexistent if their width or
     * height is 0, and are nonexistent before the widget has been
     * realized.
     * @param win window to get
     * @returns a #GdkWindow, or %NULL
     */
    get_window(win: Gtk.TextWindowType): Gdk.Window | null

    // Overloads of get_window

    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of GtkSource-3.0.GtkSource.View

    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void
    vfunc_move_lines(copy: boolean, step: number): void
    vfunc_move_words(step: number): void
    vfunc_redo(): void
    vfunc_show_completion(): void
    vfunc_undo(): void

    // Own signals of GtkSource-3.0.GtkSource.View

    connect(sigName: "change-case", callback: View.ChangeCaseSignalCallback): number
    connect_after(sigName: "change-case", callback: View.ChangeCaseSignalCallback): number
    emit(sigName: "change-case", case_type: ChangeCaseType, ...args: any[]): void
    connect(sigName: "change-number", callback: View.ChangeNumberSignalCallback): number
    connect_after(sigName: "change-number", callback: View.ChangeNumberSignalCallback): number
    emit(sigName: "change-number", count: number, ...args: any[]): void
    connect(sigName: "join-lines", callback: View.JoinLinesSignalCallback): number
    connect_after(sigName: "join-lines", callback: View.JoinLinesSignalCallback): number
    emit(sigName: "join-lines", ...args: any[]): void
    connect(sigName: "line-mark-activated", callback: View.LineMarkActivatedSignalCallback): number
    connect_after(sigName: "line-mark-activated", callback: View.LineMarkActivatedSignalCallback): number
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event, ...args: any[]): void
    connect(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    connect_after(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    emit(sigName: "move-lines", copy: boolean, count: number, ...args: any[]): void
    connect(sigName: "move-to-matching-bracket", callback: View.MoveToMatchingBracketSignalCallback): number
    connect_after(sigName: "move-to-matching-bracket", callback: View.MoveToMatchingBracketSignalCallback): number
    emit(sigName: "move-to-matching-bracket", extend_selection: boolean, ...args: any[]): void
    connect(sigName: "move-words", callback: View.MoveWordsSignalCallback): number
    connect_after(sigName: "move-words", callback: View.MoveWordsSignalCallback): number
    emit(sigName: "move-words", count: number, ...args: any[]): void
    connect(sigName: "redo", callback: View.RedoSignalCallback): number
    connect_after(sigName: "redo", callback: View.RedoSignalCallback): number
    emit(sigName: "redo", ...args: any[]): void
    connect(sigName: "show-completion", callback: View.ShowCompletionSignalCallback): number
    connect_after(sigName: "show-completion", callback: View.ShowCompletionSignalCallback): number
    emit(sigName: "show-completion", ...args: any[]): void
    connect(sigName: "smart-home-end", callback: View.SmartHomeEndSignalCallback): number
    connect_after(sigName: "smart-home-end", callback: View.SmartHomeEndSignalCallback): number
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number, ...args: any[]): void
    connect(sigName: "undo", callback: View.UndoSignalCallback): number
    connect_after(sigName: "undo", callback: View.UndoSignalCallback): number
    emit(sigName: "undo", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.View

    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class View extends Gtk.TextView {

    // Own properties of GtkSource-3.0.GtkSource.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of GtkSource-3.0.GtkSource.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceView.
     * 
     * By default, an empty #GtkSourceBuffer will be lazily created and can be
     * retrieved with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * gtk_source_view_new_with_buffer().
     * @constructor 
     * @returns a new #GtkSourceView.
     */
    constructor() 
    /**
     * Creates a new #GtkSourceView.
     * 
     * By default, an empty #GtkSourceBuffer will be lazily created and can be
     * retrieved with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * gtk_source_view_new_with_buffer().
     * @constructor 
     * @returns a new #GtkSourceView.
     */
    static new(): View
    /**
     * Creates a new #GtkSourceView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @returns a new #GtkSourceView.
     */
    static new_with_buffer(buffer: Buffer): View

    // Overloads of new_with_buffer

    /**
     * Creates a new #GtkTextView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * `buffer` may be %NULL to create a default buffer, in which case
     * this function is equivalent to gtk_text_view_new(). The
     * text view adds its own reference count to the buffer; it does not
     * take over an existing reference.
     * @constructor 
     * @param buffer a #GtkTextBuffer
     * @returns a new #GtkTextView.
     */
    static new_with_buffer(buffer: Gtk.TextBuffer): Gtk.TextView
    _init(config?: View.ConstructorProperties): void
}

export interface BufferClass {

    // Own fields of GtkSource-3.0.GtkSource.BufferClass

    parent_class: Gtk.TextBufferClass
    undo: (buffer: Buffer) => void
    redo: (buffer: Buffer) => void
    bracket_matched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
}

export abstract class BufferClass {

    // Own properties of GtkSource-3.0.GtkSource.BufferClass

    static name: string
}

export interface BufferPrivate {
}

export class BufferPrivate {

    // Own properties of GtkSource-3.0.GtkSource.BufferPrivate

    static name: string
}

export interface CompletionClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionClass

    parent_class: GObject.ObjectClass
    proposal_activated: (completion: Completion, provider: CompletionProvider, proposal: CompletionProposal) => boolean
    show: (completion: Completion) => void
    hide: (completion: Completion) => void
    populate_context: (completion: Completion, context: CompletionContext) => void
    move_cursor: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    move_page: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    activate_proposal: (completion: Completion) => void
}

export abstract class CompletionClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionClass

    static name: string
}

export interface CompletionContextClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionContextClass

    parent_class: GObject.InitiallyUnownedClass
    cancelled: (context: CompletionContext) => void
}

export abstract class CompletionContextClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContextClass

    static name: string
}

export interface CompletionContextPrivate {
}

export class CompletionContextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContextPrivate

    static name: string
}

export interface CompletionInfoClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionInfoClass

    parent_class: Gtk.WindowClass
    before_show: (info: CompletionInfo) => void
}

export abstract class CompletionInfoClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfoClass

    static name: string
}

export interface CompletionInfoPrivate {
}

export class CompletionInfoPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfoPrivate

    static name: string
}

export interface CompletionItemClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionItemClass

    parent_class: GObject.ObjectClass
}

export abstract class CompletionItemClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItemClass

    static name: string
}

export interface CompletionItemPrivate {
}

export class CompletionItemPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItemPrivate

    static name: string
}

export interface CompletionPrivate {
}

export class CompletionPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionPrivate

    static name: string
}

export interface CompletionProposalIface {

    // Own fields of GtkSource-3.0.GtkSource.CompletionProposalIface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    get_label: (proposal: CompletionProposal) => string | null
    get_markup: (proposal: CompletionProposal) => string | null
    get_text: (proposal: CompletionProposal) => string | null
    get_icon: (proposal: CompletionProposal) => GdkPixbuf.Pixbuf | null
    get_icon_name: (proposal: CompletionProposal) => string | null
    get_gicon: (proposal: CompletionProposal) => Gio.Icon | null
    get_info: (proposal: CompletionProposal) => string | null
    hash: (proposal: CompletionProposal) => number
    equal: (proposal: CompletionProposal, other: CompletionProposal) => boolean
    changed: (proposal: CompletionProposal) => void
}

/**
 * The virtual function table for #GtkSourceCompletionProposal.
 * @record 
 */
export abstract class CompletionProposalIface {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProposalIface

    static name: string
}

export interface CompletionProviderIface {

    // Own fields of GtkSource-3.0.GtkSource.CompletionProviderIface

    /**
     * The parent interface.
     * @field 
     */
    g_iface: GObject.TypeInterface
    get_name: (provider: CompletionProvider) => string | null
    get_icon: (provider: CompletionProvider) => GdkPixbuf.Pixbuf | null
    get_icon_name: (provider: CompletionProvider) => string | null
    get_gicon: (provider: CompletionProvider) => Gio.Icon | null
    populate: (provider: CompletionProvider, context: CompletionContext) => void
    match: (provider: CompletionProvider, context: CompletionContext) => boolean
    get_activation: (provider: CompletionProvider) => CompletionActivation
    get_info_widget: (provider: CompletionProvider, proposal: CompletionProposal) => Gtk.Widget | null
    update_info: (provider: CompletionProvider, proposal: CompletionProposal, info: CompletionInfo) => void
    get_start_iter: (provider: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    activate_proposal: (provider: CompletionProvider, proposal: CompletionProposal, iter: Gtk.TextIter) => boolean
    get_interactive_delay: (provider: CompletionProvider) => number
    get_priority: (provider: CompletionProvider) => number
}

/**
 * The virtual function table for #GtkSourceCompletionProvider.
 * @record 
 */
export abstract class CompletionProviderIface {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProviderIface

    static name: string
}

export interface CompletionWordsClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionWordsClass

    parent_class: GObject.ObjectClass
}

export abstract class CompletionWordsClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWordsClass

    static name: string
}

export interface CompletionWordsPrivate {
}

export class CompletionWordsPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWordsPrivate

    static name: string
}

export interface Encoding {

    // Owm methods of GtkSource-3.0.GtkSource.Encoding

    /**
     * Used by language bindings.
     * @returns a copy of @enc.
     */
    copy(): Encoding
    /**
     * Used by language bindings.
     */
    free(): void
    /**
     * Gets the character set of the #GtkSourceEncoding, such as "UTF-8" or
     * "ISO-8859-1".
     * @returns the character set of the #GtkSourceEncoding.
     */
    get_charset(): string
    /**
     * Gets the name of the #GtkSourceEncoding such as "Unicode" or "Western".
     * @returns the name of the #GtkSourceEncoding.
     */
    get_name(): string
    to_string(): string | null
}

export class Encoding {

    // Own properties of GtkSource-3.0.GtkSource.Encoding

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Encoding

    /**
     * Gets all encodings.
     * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
     */
    static get_all(): Encoding[]
    /**
     * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
     * @returns the current locale encoding.
     */
    static get_current(): Encoding
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings. Free with g_slist_free().
     */
    static get_default_candidates(): Encoding[]
    /**
     * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @param charset a character set.
     * @returns the corresponding #GtkSourceEncoding, or %NULL if not found.
     */
    static get_from_charset(charset: string): Encoding | null
    static get_utf8(): Encoding
}

export interface FileClass {

    // Own fields of GtkSource-3.0.GtkSource.FileClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileClass {

    // Own properties of GtkSource-3.0.GtkSource.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of GtkSource-3.0.GtkSource.FileLoaderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileLoaderClass {

    // Own properties of GtkSource-3.0.GtkSource.FileLoaderClass

    static name: string
}

export interface FileLoaderPrivate {
}

export class FileLoaderPrivate {

    // Own properties of GtkSource-3.0.GtkSource.FileLoaderPrivate

    static name: string
}

export interface FilePrivate {
}

export class FilePrivate {

    // Own properties of GtkSource-3.0.GtkSource.FilePrivate

    static name: string
}

export interface FileSaverClass {

    // Own fields of GtkSource-3.0.GtkSource.FileSaverClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileSaverClass {

    // Own properties of GtkSource-3.0.GtkSource.FileSaverClass

    static name: string
}

export interface FileSaverPrivate {
}

export class FileSaverPrivate {

    // Own properties of GtkSource-3.0.GtkSource.FileSaverPrivate

    static name: string
}

export interface GutterClass {

    // Own fields of GtkSource-3.0.GtkSource.GutterClass

    parent_class: GObject.ObjectClass
}

export abstract class GutterClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterClass

    static name: string
}

export interface GutterPrivate {
}

export class GutterPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterPrivate

    static name: string
}

export interface GutterRendererClass {

    // Own fields of GtkSource-3.0.GtkSource.GutterRendererClass

    parent_class: GObject.InitiallyUnownedClass
    begin: (renderer: GutterRenderer, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter) => void
    draw: (renderer: GutterRenderer, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    end: (renderer: GutterRenderer) => void
    change_view: (renderer: GutterRenderer, old_view: Gtk.TextView | null) => void
    change_buffer: (renderer: GutterRenderer, old_buffer: Gtk.TextBuffer | null) => void
    query_activatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean
    activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void
    queue_draw: (renderer: GutterRenderer) => void
    query_tooltip: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean
    query_data: (renderer: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
}

export abstract class GutterRendererClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererClass

    static name: string
}

export interface GutterRendererPixbufClass {
}

export abstract class GutterRendererPixbufClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbufClass

    static name: string
}

export interface GutterRendererPixbufPrivate {
}

export class GutterRendererPixbufPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbufPrivate

    static name: string
}

export interface GutterRendererPrivate {
}

export class GutterRendererPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPrivate

    static name: string
}

export interface GutterRendererTextClass {
}

export abstract class GutterRendererTextClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererTextClass

    static name: string
}

export interface GutterRendererTextPrivate {
}

export class GutterRendererTextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererTextPrivate

    static name: string
}

export interface LanguageClass {

    // Own fields of GtkSource-3.0.GtkSource.LanguageClass

    parent_class: GObject.ObjectClass
}

export abstract class LanguageClass {

    // Own properties of GtkSource-3.0.GtkSource.LanguageClass

    static name: string
}

export interface LanguageManagerClass {

    // Own fields of GtkSource-3.0.GtkSource.LanguageManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class LanguageManagerClass {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManagerClass

    static name: string
}

export interface LanguageManagerPrivate {
}

export class LanguageManagerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManagerPrivate

    static name: string
}

export interface LanguagePrivate {
}

export class LanguagePrivate {

    // Own properties of GtkSource-3.0.GtkSource.LanguagePrivate

    static name: string
}

export interface MapClass {

    // Own fields of GtkSource-3.0.GtkSource.MapClass

    parent_class: ViewClass
    padding: any[]
}

export abstract class MapClass {

    // Own properties of GtkSource-3.0.GtkSource.MapClass

    static name: string
}

export interface MarkAttributesClass {
}

export abstract class MarkAttributesClass {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributesClass

    static name: string
}

export interface MarkAttributesPrivate {
}

export class MarkAttributesPrivate {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributesPrivate

    static name: string
}

export interface MarkClass {

    // Own fields of GtkSource-3.0.GtkSource.MarkClass

    parent_class: Gtk.TextMarkClass
}

export abstract class MarkClass {

    // Own properties of GtkSource-3.0.GtkSource.MarkClass

    static name: string
}

export interface MarkPrivate {
}

export class MarkPrivate {

    // Own properties of GtkSource-3.0.GtkSource.MarkPrivate

    static name: string
}

export interface PrintCompositorClass {

    // Own fields of GtkSource-3.0.GtkSource.PrintCompositorClass

    parent_class: GObject.ObjectClass
}

export abstract class PrintCompositorClass {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositorClass

    static name: string
}

export interface PrintCompositorPrivate {
}

export class PrintCompositorPrivate {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositorPrivate

    static name: string
}

export interface RegionClass {

    // Own fields of GtkSource-3.0.GtkSource.RegionClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class RegionClass {

    // Own properties of GtkSource-3.0.GtkSource.RegionClass

    static name: string
}

export interface RegionIter {

    // Owm methods of GtkSource-3.0.GtkSource.RegionIter

    /**
     * Gets the subregion at this iterator.
     * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if @iter is the end iterator or if the region is empty.
     */
    get_subregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    is_end(): boolean
    /**
     * Moves `iter` to the next subregion.
     * @returns %TRUE if @iter moved and is dereferenceable, or %FALSE if @iter has   been set to the end iterator.
     */
    next(): boolean
}

/**
 * #GtkSourceRegionIter is an opaque datatype; ignore all its fields.
 * Initialize the iter with gtk_source_region_get_start_region_iter().
 * @record 
 */
export class RegionIter {

    // Own properties of GtkSource-3.0.GtkSource.RegionIter

    static name: string
}

export interface SearchContextClass {

    // Own fields of GtkSource-3.0.GtkSource.SearchContextClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class SearchContextClass {

    // Own properties of GtkSource-3.0.GtkSource.SearchContextClass

    static name: string
}

export interface SearchContextPrivate {
}

export class SearchContextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SearchContextPrivate

    static name: string
}

export interface SearchSettingsClass {

    // Own fields of GtkSource-3.0.GtkSource.SearchSettingsClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class SearchSettingsClass {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettingsClass

    static name: string
}

export interface SearchSettingsPrivate {
}

export class SearchSettingsPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettingsPrivate

    static name: string
}

export interface SpaceDrawerClass {

    // Own fields of GtkSource-3.0.GtkSource.SpaceDrawerClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class SpaceDrawerClass {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawerClass

    static name: string
}

export interface SpaceDrawerPrivate {
}

export class SpaceDrawerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawerPrivate

    static name: string
}

export interface StyleClass {
}

export abstract class StyleClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleClass

    static name: string
}

export interface StyleSchemeChooserButtonClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserButtonClass

    parent: Gtk.ButtonClass
}

export abstract class StyleSchemeChooserButtonClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserButtonClass

    static name: string
}

export interface StyleSchemeChooserInterface {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserInterface

    base_interface: GObject.TypeInterface
    get_style_scheme: (chooser: StyleSchemeChooser) => StyleScheme
    set_style_scheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    padding: any[]
}

export abstract class StyleSchemeChooserInterface {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserInterface

    static name: string
}

export interface StyleSchemeChooserWidgetClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserWidgetClass

    parent: Gtk.BinClass
}

export abstract class StyleSchemeChooserWidgetClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserWidgetClass

    static name: string
}

export interface StyleSchemeClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeClass

    base_class: GObject.ObjectClass
}

export abstract class StyleSchemeClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeClass

    static name: string
}

export interface StyleSchemeManagerClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class StyleSchemeManagerClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManagerClass

    static name: string
}

export interface StyleSchemeManagerPrivate {
}

export class StyleSchemeManagerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManagerPrivate

    static name: string
}

export interface StyleSchemePrivate {
}

export class StyleSchemePrivate {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemePrivate

    static name: string
}

export interface TagClass {

    // Own fields of GtkSource-3.0.GtkSource.TagClass

    parent_class: Gtk.TextTagClass
    padding: any[]
}

export abstract class TagClass {

    // Own properties of GtkSource-3.0.GtkSource.TagClass

    static name: string
}

export interface UndoManagerIface {

    // Own fields of GtkSource-3.0.GtkSource.UndoManagerIface

    parent: GObject.TypeInterface
    can_undo: (manager: UndoManager) => boolean
    can_redo: (manager: UndoManager) => boolean
    undo: (manager: UndoManager) => void
    redo: (manager: UndoManager) => void
    begin_not_undoable_action: (manager: UndoManager) => void
    end_not_undoable_action: (manager: UndoManager) => void
    can_undo_changed: (manager: UndoManager) => void
    can_redo_changed: (manager: UndoManager) => void
}

export abstract class UndoManagerIface {

    // Own properties of GtkSource-3.0.GtkSource.UndoManagerIface

    static name: string
}

export interface ViewClass {

    // Own fields of GtkSource-3.0.GtkSource.ViewClass

    parent_class: Gtk.TextViewClass
    undo: (view: View) => void
    redo: (view: View) => void
    line_mark_activated: (view: View, iter: Gtk.TextIter, event: Gdk.Event) => void
    show_completion: (view: View) => void
    move_lines: (view: View, copy: boolean, step: number) => void
    move_words: (view: View, step: number) => void
}

export abstract class ViewClass {

    // Own properties of GtkSource-3.0.GtkSource.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of GtkSource-3.0.GtkSource.ViewPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END