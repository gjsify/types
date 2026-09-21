/**
 * The GIR-derived widget VOCABULARY for GXml-0.20.
 *
 * GENERATED — do not edit. Provenance: GXml-0.20 — dropped empty base(s): Gee.MapIterator Gee.Iterator Gee.BidirIterator Gee.ListIterator Gee.BidirListIterator — inlined base(s) their owner's vocabulary does not emit: Gee.MapEntry — prop(s) no TypeScript value satisfies: Gee.MapEntry.value
 *
 * 108 instantiable GTypes (of which 0 concrete widgets), 149 declarations (1 inlined from a namespace whose vocabulary does not emit them), 8 enum nick unions, 0 slot candidates.
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
import type GObject from '@girs/gobject-2.0';
import type GXml from './gxml-0.20.js';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type { GeeAbstractBidirListConstructOnly, GeeAbstractBidirListProps, GeeAbstractCollectionConstructOnly, GeeAbstractCollectionProps, GeeAbstractListConstructOnly, GeeAbstractListProps, GeeAbstractMapConstructOnly, GeeAbstractMapProps, GeeArrayListConstructOnly, GeeArrayListProps, GeeBidirListConstructOnly, GeeBidirListProps, GeeCollectionConstructOnly, GeeCollectionProps, GeeHashMapConstructOnly, GeeHashMapProps, GeeIterableConstructOnly, GeeIterableProps, GeeListConstructOnly, GeeListProps, GeeMapConstructOnly, GeeMapProps, GeeTraversableConstructOnly, GeeTraversableProps } from '@girs/gee-0.8/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GXmlCssCombinerNick = 'null' | 'none' | 'inside' | 'and' | 'parent' | 'after' | 'preceded';
export type GXmlCssSelectorTypeNick = 'class' | 'id' | 'all' | 'element' | 'attribute' | 'attribute-equal' | 'attribute-contains' | 'attribute-substring' | 'attribute-starts-with' | 'attribute-starts-with-word' | 'attribute-ends-with' | 'pseudo-class';
export type GXmlDomEventPhaseNick = 'none' | 'capturing-phase' | 'at-target' | 'bubbling-phase';
export type GXmlDomNodeFilterFilterNick = 'accept' | 'reject' | 'skip';
export type GXmlDomNodeNodeTypeNick = 'invalid' | 'element-node' | 'attribute-node' | 'text-node' | 'cdata-section-node' | 'entity-reference-node' | 'entity-node' | 'processing-instruction-node' | 'comment-node' | 'document-node' | 'document-type-node' | 'document-fragment-node' | 'notation-node';
export type GXmlDomRangeBoundaryPointsNick = 'start-to-start' | 'start-to-end' | 'end-to-end' | 'end-to-start';
export type GXmlNodeTypeNick = 'invalid' | 'element' | 'attribute' | 'text' | 'cdata-section' | 'entity-reference' | 'entity' | 'processing-instruction' | 'comment' | 'document' | 'document-type' | 'document-fragment' | 'notation';
export type GXmlXPathObjectTypeNick = 'undefined' | 'nodeset' | 'boolean' | 'number' | 'string' | 'point' | 'range' | 'locationset' | 'users' | 'xslt-tree';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GXmlArrayListProps extends GXmlBaseCollectionProps, GXmlListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlArrayListConstructOnly = GXmlBaseCollectionConstructOnly | GXmlListConstructOnly;

export interface GXmlArrayStringProps extends GXmlBasePropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlArrayStringConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlAttrProps extends GXmlNodeProps, GXmlDomAttrProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlAttrConstructOnly = GXmlNodeConstructOnly | GXmlDomAttrConstructOnly;

export interface GXmlBaseCollectionProps extends GObjectProps, GeeTraversableProps, GeeIterableProps, GXmlCollectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlBaseCollectionConstructOnly = GObjectConstructOnly | GeeTraversableConstructOnly | GeeIterableConstructOnly | GXmlCollectionConstructOnly;

export interface GXmlBasePropertyProps extends GObjectProps, GXmlPropertyProps {
    value?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlBasePropertyConstructOnly = GObjectConstructOnly | GXmlPropertyConstructOnly;

export interface GXmlBooleanProps extends GXmlBasePropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlBooleanConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlCharacterDataProps extends GXmlNodeProps, GXmlDomNonDocumentTypeChildNodeProps, GXmlDomChildNodeProps, GXmlDomCharacterDataProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCharacterDataConstructOnly = GXmlNodeConstructOnly | GXmlDomNonDocumentTypeChildNodeConstructOnly | GXmlDomChildNodeConstructOnly | GXmlDomCharacterDataConstructOnly;

export interface GXmlCollectionProps extends GObjectProps {
    element?: GXml.DomElement;
    'items-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCollectionConstructOnly = GObjectConstructOnly;

export interface GXmlCommentProps extends GXmlCharacterDataProps, GXmlDomCommentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCommentConstructOnly = GXmlCharacterDataConstructOnly | GXmlDomCommentConstructOnly;

export interface GXmlCssAttributeSelectorProps extends GXmlCssSelectorProps {
    'local-name'?: string;
    prefix?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCssAttributeSelectorConstructOnly = GXmlCssSelectorConstructOnly;

export interface GXmlCssElementSelectorProps extends GXmlCssSelectorProps {
    'local-name'?: string;
    prefix?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCssElementSelectorConstructOnly = GXmlCssSelectorConstructOnly;

export interface GXmlCssNotSelectorProps extends GXmlCssSelectorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCssNotSelectorConstructOnly = GXmlCssSelectorConstructOnly;

export interface GXmlCssSelectorProps extends GObjectProps {
    combiner?: GXmlCssCombinerNick | GXml.CssCombiner;
    name?: string;
    'selector-type'?: GXmlCssSelectorTypeNick | GXml.CssSelectorType;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCssSelectorConstructOnly = GObjectConstructOnly;

export interface GXmlCssSelectorParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCssSelectorParserConstructOnly = GObjectConstructOnly;

export interface GXmlCustomEventProps extends GXmlEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlCustomEventConstructOnly = GXmlEventConstructOnly;

export interface GXmlDateProps extends GXmlBasePropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDateConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlDateTimeProps extends GXmlBasePropertyProps {
    format?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDateTimeConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlDocumentProps extends GXmlNodeProps, GXmlDomParentNodeProps, GXmlDomNonElementParentNodeProps, GXmlDomDocumentProps, GXmlDomXMLDocumentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDocumentConstructOnly = GXmlNodeConstructOnly | GXmlDomParentNodeConstructOnly | GXmlDomNonElementParentNodeConstructOnly | GXmlDomDocumentConstructOnly | GXmlDomXMLDocumentConstructOnly;

export interface GXmlDocumentFragmentProps extends GXmlNodeProps, GXmlDomParentNodeProps, GXmlDomNonElementParentNodeProps, GXmlDomDocumentFragmentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDocumentFragmentConstructOnly = GXmlNodeConstructOnly | GXmlDomParentNodeConstructOnly | GXmlDomNonElementParentNodeConstructOnly | GXmlDomDocumentFragmentConstructOnly;

export interface GXmlDocumentTypeProps extends GXmlNodeProps, GXmlDomChildNodeProps, GXmlDomDocumentTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDocumentTypeConstructOnly = GXmlNodeConstructOnly | GXmlDomChildNodeConstructOnly | GXmlDomDocumentTypeConstructOnly;

export interface GXmlDomAttrProps extends GObjectProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomAttrConstructOnly = GObjectConstructOnly;

export interface GXmlDomCharacterDataProps extends GObjectProps {
    data?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomCharacterDataConstructOnly = GObjectConstructOnly;

export interface GXmlDomChildNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomChildNodeConstructOnly = GObjectConstructOnly;

export interface GXmlDomCommentProps extends GXmlDomCharacterDataProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomCommentConstructOnly = GXmlDomCharacterDataConstructOnly;

export interface GXmlDomCustomEventInitProps extends GXmlDomEventInitProps {
    detail?: GObject.Value;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomCustomEventInitConstructOnly = GXmlDomEventInitConstructOnly;

export interface GXmlDomDocumentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomDocumentConstructOnly = GObjectConstructOnly;

export interface GXmlDomDocumentFragmentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomDocumentFragmentConstructOnly = GObjectConstructOnly;

export interface GXmlDomDocumentTypeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomDocumentTypeConstructOnly = GObjectConstructOnly;

export interface GXmlDomElementProps extends GObjectProps {
    'class-name'?: string | null;
    id?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomElementConstructOnly = GObjectConstructOnly;

export interface GXmlDomElementListProps extends GeeArrayListProps, GXmlDomHTMLCollectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomElementListConstructOnly = GeeArrayListConstructOnly | GXmlDomHTMLCollectionConstructOnly;

export interface GXmlDomErrorNameProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomErrorNameConstructOnly = GObjectConstructOnly;

export interface GXmlDomEventProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomEventConstructOnly = GObjectConstructOnly;

export interface GXmlDomEventInitProps extends GObjectProps {
    bubbles?: boolean;
    cancelable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomEventInitConstructOnly = GObjectConstructOnly;

export interface GXmlDomEventTargetProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomEventTargetConstructOnly = GObjectConstructOnly;

export interface GXmlDomHTMLCollectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomHTMLCollectionConstructOnly = GObjectConstructOnly;

export interface GXmlDomHtmlDocumentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomHtmlDocumentConstructOnly = GObjectConstructOnly;

export interface GXmlDomImplementationProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomImplementationConstructOnly = GObjectConstructOnly;

export interface GXmlDomMutationObserverInitProps extends GObjectProps {
    'attribute-filter'?: Gee.List;
    'attribute-old-value'?: boolean;
    attributes?: boolean;
    'character-data'?: boolean;
    'character-data-old-value'?: boolean;
    'child-list'?: boolean;
    subtree?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomMutationObserverInitConstructOnly = GObjectConstructOnly;

export interface GXmlDomNamedNodeMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNamedNodeMapConstructOnly = GObjectConstructOnly;

export interface GXmlDomNodeProps extends GObjectProps {
    'node-value'?: string | null;
    'owner-document'?: GXml.DomDocument | null;
    'text-content'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNodeConstructOnly = GObjectConstructOnly;

export interface GXmlDomNodeFilterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNodeFilterConstructOnly = GObjectConstructOnly;

export interface GXmlDomNodeIteratorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNodeIteratorConstructOnly = GObjectConstructOnly;

export interface GXmlDomNodeListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNodeListConstructOnly = GObjectConstructOnly;

export interface GXmlDomNonDocumentTypeChildNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNonDocumentTypeChildNodeConstructOnly = GObjectConstructOnly;

export interface GXmlDomNonElementParentNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomNonElementParentNodeConstructOnly = GObjectConstructOnly;

export interface GXmlDomParentNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomParentNodeConstructOnly = GObjectConstructOnly;

export interface GXmlDomProcessingInstructionProps extends GXmlDomCharacterDataProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomProcessingInstructionConstructOnly = GXmlDomCharacterDataConstructOnly;

export interface GXmlDomRangeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomRangeConstructOnly = GObjectConstructOnly;

export interface GXmlDomSettableTokenListProps extends GObjectProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomSettableTokenListConstructOnly = GObjectConstructOnly;

export interface GXmlDomTextProps extends GXmlDomCharacterDataProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomTextConstructOnly = GXmlDomCharacterDataConstructOnly;

export interface GXmlDomTimeStampProps extends GObjectProps {
    time?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomTimeStampConstructOnly = GObjectConstructOnly;

export interface GXmlDomTokenListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomTokenListConstructOnly = GObjectConstructOnly;

export interface GXmlDomTreeWalkerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomTreeWalkerConstructOnly = GObjectConstructOnly;

export interface GXmlDomXMLDocumentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDomXMLDocumentConstructOnly = GObjectConstructOnly;

export interface GXmlDoubleProps extends GXmlBasePropertyProps {
    decimals?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlDoubleConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlElementProps extends GXmlNodeProps, GXmlDomChildNodeProps, GXmlDomNonDocumentTypeChildNodeProps, GXmlDomParentNodeProps, GXmlDomElementProps, GXmlObjectProps {
    'parse-children'?: boolean;
    'read-buffer'?: Gio.MemoryOutputStream;
    unparsed?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlElementConstructOnly = GXmlNodeConstructOnly | GXmlDomChildNodeConstructOnly | GXmlDomNonDocumentTypeChildNodeConstructOnly | GXmlDomParentNodeConstructOnly | GXmlDomElementConstructOnly | GXmlObjectConstructOnly;

export interface GXmlElementAttributesProps extends GeeHashMapProps, GXmlDomNamedNodeMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlElementAttributesConstructOnly = GeeHashMapConstructOnly | GXmlDomNamedNodeMapConstructOnly;

export interface GXmlEnumProps extends GXmlBasePropertyProps {
    'camel-case'?: boolean;
    'enum-type'?: GObject.GType;
    'upper-case'?: boolean;
    'use-nick'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlEnumConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlEnumerationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlEnumerationConstructOnly = never;

export interface GXmlEventProps extends GObjectProps, GXmlDomEventProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlEventConstructOnly = GObjectConstructOnly | GXmlDomEventConstructOnly;

export interface GXmlFloatProps extends GXmlDoubleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlFloatConstructOnly = GXmlDoubleConstructOnly;

export interface GXmlHTMLCollectionProps extends GeeArrayListProps, GXmlDomHTMLCollectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHTMLCollectionConstructOnly = GeeArrayListConstructOnly | GXmlDomHTMLCollectionConstructOnly;

export interface GXmlHashMapProps extends GXmlBaseCollectionProps, GXmlMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHashMapConstructOnly = GXmlBaseCollectionConstructOnly | GXmlMapConstructOnly;

export interface GXmlHashPairedMapProps extends GXmlBaseCollectionProps, GXmlPairedMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHashPairedMapConstructOnly = GXmlBaseCollectionConstructOnly | GXmlPairedMapConstructOnly;

export interface GXmlHashThreeMapProps extends GXmlBaseCollectionProps, GXmlThreeMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHashThreeMapConstructOnly = GXmlBaseCollectionConstructOnly | GXmlThreeMapConstructOnly;

export interface GXmlHtmlDocumentProps extends GXmlDocumentProps {
    html?: GXml.DomElement;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHtmlDocumentConstructOnly = GXmlDocumentConstructOnly;

export interface GXmlHtmlElementProps extends GXmlElementProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlHtmlElementConstructOnly = GXmlElementConstructOnly;

export interface GXmlImplementationProps extends GObjectProps, GXmlDomImplementationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlImplementationConstructOnly = GObjectConstructOnly | GXmlDomImplementationConstructOnly;

export interface GXmlIntProps extends GXmlBasePropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlIntConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlLXPathObjectProps extends GObjectProps, GXmlXPathObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlLXPathObjectConstructOnly = GObjectConstructOnly | GXmlXPathObjectConstructOnly;

export interface GXmlListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlListConstructOnly = GObjectConstructOnly;

export interface GXmlMapProps extends GObjectProps {
    'attribute-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlMapConstructOnly = GObjectConstructOnly;

export interface GXmlNodeProps extends GObjectProps, GXmlDomEventTargetProps, GXmlDomNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlNodeConstructOnly = GObjectConstructOnly | GXmlDomEventTargetConstructOnly | GXmlDomNodeConstructOnly;

export interface GXmlNodeIteratorProps extends GObjectProps, GXmlDomNodeIteratorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlNodeIteratorConstructOnly = GObjectConstructOnly | GXmlDomNodeIteratorConstructOnly;

export interface GXmlNodeListProps extends GeeArrayListProps, GXmlDomNodeListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlNodeListConstructOnly = GeeArrayListConstructOnly | GXmlDomNodeListConstructOnly;

export interface GXmlObjectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlObjectConstructOnly = GObjectConstructOnly;

export interface GXmlPairedMapProps extends GObjectProps {
    'attribute-primary-key'?: string;
    'attribute-secondary-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlPairedMapConstructOnly = GObjectConstructOnly;

export interface GXmlParserProps extends GObjectProps {
    backup?: boolean;
    cancellable?: Gio.Cancellable | null;
    indent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlParserConstructOnly = GObjectConstructOnly;

export interface GXmlProcessingInstructionProps extends GXmlCharacterDataProps, GXmlDomProcessingInstructionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlProcessingInstructionConstructOnly = GXmlCharacterDataConstructOnly | GXmlDomProcessingInstructionConstructOnly;

export interface GXmlPropertyProps extends GObjectProps {
    value?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlPropertyConstructOnly = GObjectConstructOnly;

export interface GXmlRangeProps extends GObjectProps, GXmlDomRangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlRangeConstructOnly = GObjectConstructOnly | GXmlDomRangeConstructOnly;

export interface GXmlSettableTokenListProps extends GXmlTokenListProps, GXmlDomSettableTokenListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlSettableTokenListConstructOnly = GXmlTokenListConstructOnly | GXmlDomSettableTokenListConstructOnly;

export interface GXmlStringProps extends GXmlBasePropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlStringConstructOnly = GXmlBasePropertyConstructOnly;

export interface GXmlStringRefProps extends GObjectProps, GXmlPropertyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlStringRefConstructOnly = GObjectConstructOnly | GXmlPropertyConstructOnly;

export interface GXmlTextProps extends GXmlCharacterDataProps, GXmlDomTextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlTextConstructOnly = GXmlCharacterDataConstructOnly | GXmlDomTextConstructOnly;

export interface GXmlThreeMapProps extends GObjectProps {
    'attribute-primary-key'?: string;
    'attribute-secondary-key'?: string;
    'attribute-third-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlThreeMapConstructOnly = GObjectConstructOnly;

export interface GXmlTokenListProps extends GeeArrayListProps, GXmlDomTokenListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlTokenListConstructOnly = GeeArrayListConstructOnly | GXmlDomTokenListConstructOnly;

export interface GXmlTreeWalkerProps extends GObjectProps, GXmlDomTreeWalkerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlTreeWalkerConstructOnly = GObjectConstructOnly | GXmlDomTreeWalkerConstructOnly;

export interface GXmlXAttributeProps extends GXmlXNodeProps, GXmlDomAttrProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXAttributeConstructOnly = GXmlXNodeConstructOnly | GXmlDomAttrConstructOnly;

export interface GXmlXCharacterDataProps extends GXmlXNonDocumentChildNodeProps, GXmlDomCharacterDataProps {
    str?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXCharacterDataConstructOnly = GXmlXNonDocumentChildNodeConstructOnly | GXmlDomCharacterDataConstructOnly;

export interface GXmlXChildNodeProps extends GXmlXNodeProps, GXmlDomChildNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXChildNodeConstructOnly = GXmlXNodeConstructOnly | GXmlDomChildNodeConstructOnly;

export interface GXmlXCommentProps extends GXmlXCharacterDataProps, GXmlDomCommentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXCommentConstructOnly = GXmlXCharacterDataConstructOnly | GXmlDomCommentConstructOnly;

export interface GXmlXDocumentProps extends GXmlXNodeProps, GXmlDomParentNodeProps, GXmlDomNonElementParentNodeProps, GXmlDomDocumentProps, GXmlDomXMLDocumentProps, GXmlXPathContextProps {
    backup?: boolean;
    file?: Gio.File;
    indent?: boolean;
    'ns-top'?: boolean;
    'prefix-default-ns'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXDocumentConstructOnly = GXmlXNodeConstructOnly | GXmlDomParentNodeConstructOnly | GXmlDomNonElementParentNodeConstructOnly | GXmlDomDocumentConstructOnly | GXmlDomXMLDocumentConstructOnly | GXmlXPathContextConstructOnly;

export interface GXmlXElementProps extends GXmlXNonDocumentChildNodeProps, GXmlDomParentNodeProps, GXmlDomElementProps, GXmlXPathContextProps {
    content?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXElementConstructOnly = GXmlXNonDocumentChildNodeConstructOnly | GXmlDomParentNodeConstructOnly | GXmlDomElementConstructOnly | GXmlXPathContextConstructOnly;

export interface GXmlXHashMapAttrProps extends GeeAbstractMapProps, GXmlDomNamedNodeMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXHashMapAttrConstructOnly = GeeAbstractMapConstructOnly | GXmlDomNamedNodeMapConstructOnly;

export interface GXmlXHashMapAttrEntryProps extends GeeMapEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXHashMapAttrEntryConstructOnly = GeeMapEntryConstructOnly;

export interface GXmlXHashMapAttrIteratorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXHashMapAttrIteratorConstructOnly = GObjectConstructOnly;

export interface GXmlXHtmlDocumentProps extends GXmlXDocumentProps, GXmlDomHtmlDocumentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXHtmlDocumentConstructOnly = GXmlXDocumentConstructOnly | GXmlDomHtmlDocumentConstructOnly;

export interface GXmlXListChildrenProps extends GeeAbstractBidirListProps, GXmlDomNodeListProps, GXmlDomHTMLCollectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXListChildrenConstructOnly = GeeAbstractBidirListConstructOnly | GXmlDomNodeListConstructOnly | GXmlDomHTMLCollectionConstructOnly;

export interface GXmlXListChildrenIteratorProps extends GObjectProps, GeeTraversableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXListChildrenIteratorConstructOnly = GObjectConstructOnly | GeeTraversableConstructOnly;

export interface GXmlXNodeProps extends GObjectProps, GXmlDomEventTargetProps, GXmlDomNodeProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXNodeConstructOnly = GObjectConstructOnly | GXmlDomEventTargetConstructOnly | GXmlDomNodeConstructOnly;

export interface GXmlXNonDocumentChildNodeProps extends GXmlXChildNodeProps, GXmlDomNonDocumentTypeChildNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXNonDocumentChildNodeConstructOnly = GXmlXChildNodeConstructOnly | GXmlDomNonDocumentTypeChildNodeConstructOnly;

export interface GXmlXParserProps extends GObjectProps, GXmlParserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXParserConstructOnly = GObjectConstructOnly | GXmlParserConstructOnly;

export interface GXmlXPathContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXPathContextConstructOnly = GObjectConstructOnly;

export interface GXmlXPathObjectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXPathObjectConstructOnly = GObjectConstructOnly;

export interface GXmlXProcessingInstructionProps extends GXmlXCharacterDataProps, GXmlDomProcessingInstructionProps {
    data?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXProcessingInstructionConstructOnly = GXmlXCharacterDataConstructOnly | GXmlDomProcessingInstructionConstructOnly;

export interface GXmlXTextProps extends GXmlXCharacterDataProps, GXmlDomTextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXTextConstructOnly = GXmlXCharacterDataConstructOnly | GXmlDomTextConstructOnly;

export interface GXmlXsdAnnotationProps extends GXmlElementProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdAnnotationConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdArrayStringProps extends GXmlArrayStringProps {
    'simple-type'?: string;
    source?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdArrayStringConstructOnly = GXmlArrayStringConstructOnly;

export interface GXmlXsdAttributeProps extends GXmlXsdBaseAttributeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdAttributeConstructOnly = GXmlXsdBaseAttributeConstructOnly;

export interface GXmlXsdAttributeGroupProps extends GXmlXsdBaseAttributeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdAttributeGroupConstructOnly = GXmlXsdBaseAttributeConstructOnly;

export interface GXmlXsdBaseAttributeProps extends GXmlElementProps {
    anotation?: GXml.XsdAnnotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdBaseAttributeConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdBaseContentProps extends GXmlElementProps {
    anotation?: GXml.XsdAnnotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdBaseContentConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdBaseTypeProps extends GXmlElementProps {
    anotation?: GXml.XsdAnnotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdBaseTypeConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdComplexContentProps extends GXmlXsdBaseContentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdComplexContentConstructOnly = GXmlXsdBaseContentConstructOnly;

export interface GXmlXsdComplexTypeProps extends GXmlXsdBaseTypeProps {
    abstract?: boolean;
    block?: string;
    'content-type'?: GXml.XsdBaseContent;
    'default-attributes-apply'?: boolean;
    final?: string;
    mixed?: boolean;
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdComplexTypeConstructOnly = GXmlXsdBaseTypeConstructOnly;

export interface GXmlXsdElementProps extends GXmlElementProps {
    abstract?: boolean;
    anotation?: GXml.XsdAnnotation;
    block?: string;
    'complex-type'?: GXml.XsdComplexType;
    default?: string;
    final?: string;
    fixed?: string;
    form?: string;
    'max-occurs'?: string;
    'min-occurs'?: string;
    name?: string;
    nillable?: boolean;
    'object-type'?: string;
    ref?: string;
    'simple-type'?: GXml.XsdSimpleType;
    'substitution-group'?: GXml.DomTokenList;
    'target-namespace'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdElementConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdExtensionProps extends GXmlElementProps {
    base?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdExtensionConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdListProps extends GXmlArrayListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListConstructOnly = GXmlArrayListConstructOnly;

export interface GXmlXsdListComplexTypesProps extends GXmlXsdListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListComplexTypesConstructOnly = GXmlXsdListConstructOnly;

export interface GXmlXsdListElementsProps extends GXmlXsdListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListElementsConstructOnly = GXmlXsdListConstructOnly;

export interface GXmlXsdListSimpleTypesProps extends GXmlXsdListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListSimpleTypesConstructOnly = GXmlXsdListConstructOnly;

export interface GXmlXsdListTypeRestrictionEnumerationsProps extends GXmlXsdListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListTypeRestrictionEnumerationsConstructOnly = GXmlXsdListConstructOnly;

export interface GXmlXsdListTypeRestrictionWhiteSpacesProps extends GXmlXsdListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdListTypeRestrictionWhiteSpacesConstructOnly = GXmlXsdListConstructOnly;

export interface GXmlXsdOpenContentProps extends GXmlXsdBaseContentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdOpenContentConstructOnly = GXmlXsdBaseContentConstructOnly;

export interface GXmlXsdSchemaProps extends GXmlElementProps {
    'complex-type-definitions'?: GXml.XsdListComplexTypes;
    'element-definitions'?: GXml.XsdListElements;
    'simple-type-definitions'?: GXml.XsdListSimpleTypes;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdSchemaConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdSimpleContentProps extends GXmlXsdBaseContentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdSimpleContentConstructOnly = GXmlXsdBaseContentConstructOnly;

export interface GXmlXsdSimpleTypeProps extends GXmlElementProps {
    annotation?: GXml.XsdAnnotation;
    final?: string;
    list?: GXml.XsdTypeList;
    name?: string;
    restriction?: GXml.XsdTypeRestriction;
    union?: GXml.XsdTypeUnion;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdSimpleTypeConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdTypeDefinitionProps extends GXmlElementProps {
    annotation?: GXml.XsdAnnotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeDefinitionConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdTypeListProps extends GXmlXsdTypeDefinitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeListConstructOnly = GXmlXsdTypeDefinitionConstructOnly;

export interface GXmlXsdTypeRestrictionProps extends GXmlXsdTypeDefinitionProps {
    base?: string;
    enumerations?: GXml.XsdListTypeRestrictionEnumerations;
    'simple-type'?: GXml.XsdSimpleType;
    'white-spaces'?: GXml.XsdListTypeRestrictionWhiteSpaces;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionConstructOnly = GXmlXsdTypeDefinitionConstructOnly;

export interface GXmlXsdTypeRestrictionAssertionProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionAssertionConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionDefProps extends GXmlElementProps {
    annotation?: GXml.XsdAnnotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionDefConstructOnly = GXmlElementConstructOnly;

export interface GXmlXsdTypeRestrictionEnumerationProps extends GXmlXsdTypeRestrictionDefProps {
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionEnumerationConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionExplicitTimezoneProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionExplicitTimezoneConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionFractionDigitsProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionFractionDigitsConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionLengthProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionLengthConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMaxExclusiveProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMaxExclusiveConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMaxInclusiveProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMaxInclusiveConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMaxLengthProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMaxLengthConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMinExclusiveProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMinExclusiveConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMinInclusiveProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMinInclusiveConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionMinLengthProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionMinLengthConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionPatternProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionPatternConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionTotalDigitsProps extends GXmlXsdTypeRestrictionDefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionTotalDigitsConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionWhiteSpaceProps extends GXmlXsdTypeRestrictionDefProps {
    fixed?: GXml.XsdTypeRestrictionWhiteSpaceFixed;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionWhiteSpaceConstructOnly = GXmlXsdTypeRestrictionDefConstructOnly;

export interface GXmlXsdTypeRestrictionWhiteSpaceFixedProps extends GXmlBooleanProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeRestrictionWhiteSpaceFixedConstructOnly = GXmlBooleanConstructOnly;

export interface GXmlXsdTypeUnionProps extends GXmlXsdTypeDefinitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GXmlXsdTypeUnionConstructOnly = GXmlXsdTypeDefinitionConstructOnly;

export interface GeeMapEntryProps extends GObjectProps {
    'k-destroy-func'?: GLib.DestroyNotify;
    'k-dup-func'?: GObject.BoxedCopyFunc;
    'k-type'?: GObject.GType;
    'v-destroy-func'?: GLib.DestroyNotify;
    'v-dup-func'?: GObject.BoxedCopyFunc;
    'v-type'?: GObject.GType;
    value?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GeeMapEntryConstructOnly = GObjectConstructOnly | 'k-destroy-func' | 'k-dup-func' | 'k-type' | 'v-destroy-func' | 'v-dup-func' | 'v-type';

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
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

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
