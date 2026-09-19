/**
 * The GIR-derived widget VOCABULARY for WebKit2WebExtension-4.0.
 *
 * GENERATED — do not edit. Provenance: WebKit2WebExtension-4.0 — prop(s) no TypeScript value satisfies: WebKit2WebExtension.DOMObject.core-object
 *
 * 113 instantiable GTypes (of which 0 concrete widgets), 114 declarations, 3 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type WebKit2WebExtension from './webkit2webextension-4.0.js';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type WebKitConsoleMessageLevelNick = 'info' | 'log' | 'warning' | 'error' | 'debug';
export type WebKitConsoleMessageSourceNick = 'javascript' | 'network' | 'console-api' | 'security' | 'other';
export type WebKitFormSubmissionStepNick = 'send-dom-event' | 'complete';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Represents the context menu in a #WebKitWebView. */
export interface WebKitContextMenuProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitContextMenuConstructOnly = GObjectConstructOnly;

/** One item of a #WebKitContextMenu. */
export interface WebKitContextMenuItemProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitContextMenuItemConstructOnly = GInitiallyUnownedConstructOnly;

export interface WebKitDOMAttrProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMAttrConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMBlobProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMBlobConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCDATASectionProps extends WebKitDOMTextProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCDATASectionConstructOnly = WebKitDOMTextConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMCSSRuleProps extends WebKitDOMObjectProps {
    'css-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCSSRuleConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCSSRuleListProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCSSRuleListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCSSStyleDeclarationProps extends WebKitDOMObjectProps {
    'css-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCSSStyleDeclarationConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCSSStyleSheetProps extends WebKitDOMStyleSheetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCSSStyleSheetConstructOnly = WebKitDOMStyleSheetConstructOnly;

export interface WebKitDOMCSSValueProps extends WebKitDOMObjectProps {
    'css-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCSSValueConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCharacterDataProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
    data?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCharacterDataConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMClientRectProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMClientRectConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMClientRectListProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMClientRectListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMCommentProps extends WebKitDOMCharacterDataProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMCommentConstructOnly = WebKitDOMCharacterDataConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMDOMImplementationProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDOMImplementationConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMDOMSelectionProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDOMSelectionConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMDOMTokenListProps extends WebKitDOMObjectProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDOMTokenListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMDOMWindowProps extends WebKitDOMObjectProps, WebKitDOMEventTargetProps {
    'default-status'?: string;
    name?: string;
    status?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDOMWindowConstructOnly = WebKitDOMObjectConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMDocumentProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
    charset?: string;
    cookie?: string;
    'design-mode'?: string;
    dir?: string;
    'document-uri'?: string;
    'selected-stylesheet-set'?: string;
    title?: string;
    /** @default FALSE */
    'xml-standalone'?: boolean;
    'xml-version'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDocumentConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMDocumentFragmentProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDocumentFragmentConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMDocumentTypeProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMDocumentTypeConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMElementProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
    'class-name'?: string;
    id?: string;
    'inner-html'?: string;
    'outer-html'?: string;
    /** @default 0 */
    'scroll-left'?: bigint | number;
    /** @default 0 */
    'scroll-top'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMElementConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMEntityReferenceProps extends WebKitDOMNodeProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMEntityReferenceConstructOnly = WebKitDOMNodeConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMEventProps extends WebKitDOMObjectProps {
    /** @default FALSE */
    'cancel-bubble'?: boolean;
    /** @default FALSE */
    'return-value'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMEventConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMEventTargetProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMEventTargetConstructOnly = GObjectConstructOnly;

export interface WebKitDOMFileProps extends WebKitDOMBlobProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMFileConstructOnly = WebKitDOMBlobConstructOnly;

export interface WebKitDOMFileListProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMFileListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMHTMLAnchorElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    charset?: string;
    coords?: string;
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    hreflang?: string;
    name?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
    rel?: string;
    rev?: string;
    search?: string;
    shape?: string;
    target?: string;
    text?: string;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLAnchorElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLAppletElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    alt?: string;
    archive?: string;
    code?: string;
    'code-base'?: string;
    height?: string;
    /** @default 0 */
    hspace?: bigint | number;
    name?: string;
    object?: string;
    /** @default 0 */
    vspace?: bigint | number;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLAppletElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLAreaElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    alt?: string;
    coords?: string;
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    /** @default FALSE */
    'no-href'?: boolean;
    pathname?: string;
    port?: string;
    protocol?: string;
    search?: string;
    shape?: string;
    target?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLAreaElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLBRElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    clear?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLBRElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLBaseElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    href?: string;
    target?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLBaseElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLBaseFontElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLBaseFontElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLBodyElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    'a-link'?: string;
    background?: string;
    'bg-color'?: string;
    link?: string;
    text?: string;
    'v-link'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLBodyElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLButtonElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    autofocus?: boolean;
    /** @default FALSE */
    disabled?: boolean;
    name?: string;
    type?: string;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLButtonElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLCanvasElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default 0 */
    height?: bigint | number;
    /** @default 0 */
    width?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLCanvasElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLCollectionProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLCollectionConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMHTMLDListElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    compact?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLDListElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLDirectoryElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    compact?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLDirectoryElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLDivElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLDivElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLDocumentProps extends WebKitDOMDocumentProps, WebKitDOMEventTargetProps {
    'alink-color'?: string;
    'bg-color'?: string;
    dir?: string;
    'fg-color'?: string;
    'link-color'?: string;
    'vlink-color'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLDocumentConstructOnly = WebKitDOMDocumentConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLElementProps extends WebKitDOMElementProps, WebKitDOMEventTargetProps {
    'access-key'?: string;
    'content-editable'?: string;
    dir?: string;
    /** @default FALSE */
    draggable?: boolean;
    /** @default FALSE */
    hidden?: boolean;
    'inner-text'?: string;
    lang?: string;
    'outer-text'?: string;
    /** @default FALSE */
    spellcheck?: boolean;
    /** @default 0 */
    'tab-index'?: bigint | number;
    title?: string;
    /** @default FALSE */
    translate?: boolean;
    webkitdropzone?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLElementConstructOnly = WebKitDOMElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLEmbedElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    /** @default 0 */
    height?: bigint | number;
    name?: string;
    src?: string;
    type?: string;
    /** @default 0 */
    width?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLEmbedElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLFieldSetElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLFieldSetElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLFontElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    color?: string;
    face?: string;
    size?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLFontElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLFormElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    'accept-charset'?: string;
    action?: string;
    encoding?: string;
    enctype?: string;
    method?: string;
    name?: string;
    target?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLFormElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLFrameElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    'frame-border'?: string;
    'long-desc'?: string;
    'margin-height'?: string;
    'margin-width'?: string;
    name?: string;
    /** @default FALSE */
    'no-resize'?: boolean;
    scrolling?: string;
    src?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLFrameElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLFrameSetElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    cols?: string;
    rows?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLFrameSetElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLHRElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    /** @default FALSE */
    'no-shade'?: boolean;
    size?: string;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLHRElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLHeadElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    profile?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLHeadElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLHeadingElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLHeadingElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLHtmlElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLHtmlElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLIFrameElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    'frame-border'?: string;
    height?: string;
    'long-desc'?: string;
    'margin-height'?: string;
    'margin-width'?: string;
    name?: string;
    scrolling?: string;
    src?: string;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLIFrameElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLImageElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    alt?: string;
    border?: string;
    /** @default 0 */
    height?: bigint | number;
    /** @default 0 */
    hspace?: bigint | number;
    /** @default FALSE */
    'is-map'?: boolean;
    'long-desc'?: string;
    lowsrc?: string;
    name?: string;
    src?: string;
    'use-map'?: string;
    /** @default 0 */
    vspace?: bigint | number;
    /** @default 0 */
    width?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLImageElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLInputElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    accept?: string;
    align?: string;
    alt?: string;
    /** @default FALSE */
    autofocus?: boolean;
    capture?: string;
    /** @default FALSE */
    checked?: boolean;
    /** @default FALSE */
    'default-checked'?: boolean;
    'default-value'?: string;
    /** @default FALSE */
    disabled?: boolean;
    /** @default 0 */
    height?: bigint | number;
    /** @default FALSE */
    indeterminate?: boolean;
    /** @default 0 */
    'max-length'?: bigint | number;
    /** @default FALSE */
    multiple?: boolean;
    name?: string;
    /** @default FALSE */
    'read-only'?: boolean;
    /** @default 0 */
    size?: bigint | number;
    src?: string;
    type?: string;
    'use-map'?: string;
    value?: string;
    /** @default 0 */
    width?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLInputElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLLIElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    type?: string;
    /** @default 0 */
    value?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLLIElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLLabelElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    'html-for'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLLabelElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLLegendElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLLegendElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLLinkElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    charset?: string;
    /** @default FALSE */
    disabled?: boolean;
    href?: string;
    hreflang?: string;
    media?: string;
    rel?: string;
    rev?: string;
    target?: string;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLLinkElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLMapElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLMapElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLMarqueeElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLMarqueeElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLMenuElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    compact?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLMenuElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLMetaElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    content?: string;
    'http-equiv'?: string;
    name?: string;
    scheme?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLMetaElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLModElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    cite?: string;
    'date-time'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLModElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLOListElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    compact?: boolean;
    /** @default 0 */
    start?: bigint | number;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLOListElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLObjectElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    archive?: string;
    border?: string;
    code?: string;
    'code-base'?: string;
    'code-type'?: string;
    data?: string;
    /** @default FALSE */
    declare?: boolean;
    height?: string;
    /** @default 0 */
    hspace?: bigint | number;
    name?: string;
    standby?: string;
    type?: string;
    'use-map'?: string;
    /** @default 0 */
    vspace?: bigint | number;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLObjectElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLOptGroupElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    disabled?: boolean;
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLOptGroupElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLOptionElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    'default-selected'?: boolean;
    /** @default FALSE */
    disabled?: boolean;
    label?: string;
    /** @default FALSE */
    selected?: boolean;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLOptionElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLOptionsCollectionProps extends WebKitDOMHTMLCollectionProps {
    /** @default 0 */
    'selected-index'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLOptionsCollectionConstructOnly = WebKitDOMHTMLCollectionConstructOnly;

export interface WebKitDOMHTMLParagraphElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLParagraphElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLParamElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    name?: string;
    type?: string;
    value?: string;
    'value-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLParamElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLPreElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default 0 */
    width?: bigint | number;
    /** @default FALSE */
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLPreElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLQuoteElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    cite?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLQuoteElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLScriptElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    charset?: string;
    /** @default FALSE */
    defer?: boolean;
    event?: string;
    'html-for'?: string;
    src?: string;
    text?: string;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLScriptElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLSelectElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    autofocus?: boolean;
    /** @default FALSE */
    disabled?: boolean;
    /** @default 0 */
    length?: bigint | number;
    /** @default FALSE */
    multiple?: boolean;
    name?: string;
    /** @default 0 */
    'selected-index'?: bigint | number;
    /** @default 0 */
    size?: bigint | number;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLSelectElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLStyleElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    disabled?: boolean;
    media?: string;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLStyleElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableCaptionElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableCaptionElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableCellElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    abbr?: string;
    align?: string;
    axis?: string;
    'bg-color'?: string;
    ch?: string;
    'ch-off'?: string;
    /** @default 0 */
    'col-span'?: bigint | number;
    headers?: string;
    height?: string;
    /** @default FALSE */
    'no-wrap'?: boolean;
    /** @default 0 */
    'row-span'?: bigint | number;
    scope?: string;
    'v-align'?: string;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableCellElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableColElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    ch?: string;
    'ch-off'?: string;
    /** @default 0 */
    span?: bigint | number;
    'v-align'?: string;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableColElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    'bg-color'?: string;
    border?: string;
    'cell-padding'?: string;
    'cell-spacing'?: string;
    rules?: string;
    summary?: string;
    width?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableRowElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    'bg-color'?: string;
    ch?: string;
    'ch-off'?: string;
    'v-align'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableRowElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTableSectionElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    align?: string;
    ch?: string;
    'ch-off'?: string;
    'v-align'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTableSectionElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTextAreaElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    autofocus?: boolean;
    /** @default 0 */
    cols?: bigint | number;
    'default-value'?: string;
    /** @default FALSE */
    disabled?: boolean;
    name?: string;
    /** @default FALSE */
    'read-only'?: boolean;
    /** @default 0 */
    rows?: bigint | number;
    /** @default 0 */
    'selection-end'?: bigint | number;
    /** @default 0 */
    'selection-start'?: bigint | number;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTextAreaElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLTitleElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLTitleElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMHTMLUListElementProps extends WebKitDOMHTMLElementProps, WebKitDOMEventTargetProps {
    /** @default FALSE */
    compact?: boolean;
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMHTMLUListElementConstructOnly = WebKitDOMHTMLElementConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMKeyboardEventProps extends WebKitDOMUIEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMKeyboardEventConstructOnly = WebKitDOMUIEventConstructOnly;

export interface WebKitDOMMediaListProps extends WebKitDOMObjectProps {
    'media-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMMediaListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMMouseEventProps extends WebKitDOMUIEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMMouseEventConstructOnly = WebKitDOMUIEventConstructOnly;

export interface WebKitDOMNamedNodeMapProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMNamedNodeMapConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMNodeProps extends WebKitDOMObjectProps, WebKitDOMEventTargetProps {
    'node-value'?: string;
    'text-content'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMNodeConstructOnly = WebKitDOMObjectConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMNodeIteratorProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMNodeIteratorConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMNodeListProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMNodeListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMObjectProps extends GObjectProps {
    'core-object'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMObjectConstructOnly = GObjectConstructOnly | 'core-object';

export interface WebKitDOMProcessingInstructionProps extends WebKitDOMCharacterDataProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMProcessingInstructionConstructOnly = WebKitDOMCharacterDataConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMRangeProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMRangeConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMStyleSheetProps extends WebKitDOMObjectProps {
    /** @default FALSE */
    disabled?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMStyleSheetConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMStyleSheetListProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMStyleSheetListConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMTextProps extends WebKitDOMCharacterDataProps, WebKitDOMEventTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMTextConstructOnly = WebKitDOMCharacterDataConstructOnly | WebKitDOMEventTargetConstructOnly;

export interface WebKitDOMTreeWalkerProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMTreeWalkerConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMUIEventProps extends WebKitDOMEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMUIEventConstructOnly = WebKitDOMEventConstructOnly;

export interface WebKitDOMWheelEventProps extends WebKitDOMMouseEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMWheelEventConstructOnly = WebKitDOMMouseEventConstructOnly;

export interface WebKitDOMXPathExpressionProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMXPathExpressionConstructOnly = WebKitDOMObjectConstructOnly;

export interface WebKitDOMXPathResultProps extends WebKitDOMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDOMXPathResultConstructOnly = WebKitDOMObjectConstructOnly;

/** A web page frame. */
export interface WebKitFrameProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitFrameConstructOnly = GObjectConstructOnly;

/** Result of a Hit Test. */
export interface WebKitHitTestResultProps extends GObjectProps {
    /**
     * Bitmask of #WebKitHitTestResultContext flags representing the context of the #WebKitHitTestResult.
     * @default 0
     */
    context?: number;
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'image-uri'?: string;
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-label'?: string;
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-title'?: string;
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-uri'?: string;
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'media-uri'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitHitTestResultConstructOnly = GObjectConstructOnly | 'context' | 'image-uri' | 'link-label' | 'link-title' | 'link-uri' | 'media-uri';

export interface WebKitScriptWorldProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitScriptWorldConstructOnly = GObjectConstructOnly;

/** Represents a URI request. */
export interface WebKitURIRequestProps extends GObjectProps {
    /**
     * The URI to which the request will be made.
     * @default about:blank
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURIRequestConstructOnly = GObjectConstructOnly;

/** Represents an URI response. */
export interface WebKitURIResponseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURIResponseConstructOnly = GObjectConstructOnly;

/** Message that can be sent between the UI process and web process extensions. */
export interface WebKitUserMessageProps extends GInitiallyUnownedProps {
    /**
     * The UNIX file descriptors of the user message.
     * @since 2.28
     */
    'fd-list'?: Gio.UnixFDList | null;
    /**
     * The name of the user message.
     * @since 2.28
     * @default NULL
     */
    name?: string;
    /**
     * The parameters of the user message as a #GVariant, or %NULL if the message doesn't include parameters.
     * @since 2.28
     */
    parameters?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitUserMessageConstructOnly = GInitiallyUnownedConstructOnly | 'fd-list' | 'name' | 'parameters';

/** Access to editing capabilities of a #WebKitWebPage. */
export interface WebKitWebEditorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebEditorConstructOnly = GObjectConstructOnly;

/** Represents an extension of the WebProcess. */
export interface WebKitWebExtensionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebExtensionConstructOnly = GObjectConstructOnly;

/** Form manager of a #WebKitWebPage in a #WebKitScriptWorld */
export interface WebKitWebFormManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebFormManagerConstructOnly = GObjectConstructOnly;

/** Result of a Hit Test (Web Process Extensions). */
export interface WebKitWebHitTestResultProps extends WebKitHitTestResultProps {
    /**
     * The #WebKitDOMNode
     * @deprecated since 2.40
     */
    node?: WebKit2WebExtension.DOMNode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebHitTestResultConstructOnly = WebKitHitTestResultConstructOnly | 'node';

/** A loaded web page. */
export interface WebKitWebPageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebPageConstructOnly = GObjectConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
