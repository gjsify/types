/**
 * The GIR-derived widget VOCABULARY for GUPnPAV-1.0.
 *
 * GENERATED — do not edit. Provenance: GUPnPAV-1.0 — prop(s) no TypeScript value satisfies: GUPnPAV.DIDLLiteContributor.xml-node GUPnPAV.DIDLLiteCreateClass.xml-node GUPnPAV.DIDLLiteDescriptor.xml-node GUPnPAV.DIDLLiteObject.dc-namespace GUPnPAV.DIDLLiteObject.dlna-namespace GUPnPAV.DIDLLiteObject.pv-namespace GUPnPAV.DIDLLiteObject.upnp-namespace GUPnPAV.DIDLLiteObject.xml-node GUPnPAV.DIDLLiteResource.dlna-namespace GUPnPAV.DIDLLiteResource.pv-namespace GUPnPAV.DIDLLiteResource.xml-node
 *
 * 15 instantiable GTypes (of which 0 concrete widgets), 16 declarations, 1 enum nick unions, 0 slot candidates.
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

import type GUPnPAV from './gupnpav-1.0.js';
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

export type GUPnPSearchCriteriaOpNick = 'EQ' | 'NEQ' | 'LESS' | 'LEQ' | 'GREATER' | 'GEQ' | 'CONTAINS' | 'DOES_NOT_CONTAIN' | 'DERIVED_FROM' | 'EXISTS';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** LastChange parser for the format used in ContentDirectory:3 [class@GUPnPAV.CDSLastChangeParser] parses XML strings from ContentDirectory's LastChange state variable. */
export interface GUPnPCDSLastChangeParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPCDSLastChangeParserConstructOnly = GObjectConstructOnly;

/** Representation of a DIDL-Lite container element. */
export interface GUPnPDIDLLiteContainerProps extends GUPnPDIDLLiteObjectProps {
    /**
     * The child count of this container.
     * @default 0
     */
    'child-count'?: number;
    /**
     * Update ID of this container.
     * @default 0
     */
    'container-update-id'?: number;
    /**
     * Whether this container is searchable.
     * @default FALSE
     */
    searchable?: boolean;
    /**
     * The number of bytes used by all child items of this container.
     * @default -1
     */
    'storage-used'?: bigint | number;
    /**
     * Total deleted child count of this container.
     * @default 0
     */
    'total-deleted-child-count'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteContainerConstructOnly = GUPnPDIDLLiteObjectConstructOnly;

/** Contributor attached to a DIDL-Lite object This represents a contributor (artist, author, actor, producer, director, producer and contributor) property in a DIDL-Lite object. */
export interface GUPnPDIDLLiteContributorProps extends GObjectProps {
    /**
     * The name of this contributor.
     * @default NULL
     */
    name?: string;
    /**
     * The role of this contributor.
     * @default NULL
     */
    role?: string;
    /** The pointer to object node in XML document. */
    'xml-node'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteContributorConstructOnly = GObjectConstructOnly | 'xml-node';

/** DIDL-Lite CreateClass [class@GUPnPAV.DIDLLiteCreateClass] respresents a DIDL-Lite create class element. */
export interface GUPnPDIDLLiteCreateClassProps extends GObjectProps {
    /**
     * The content of this create Class.
     * @default NULL
     */
    content?: string;
    /**
     * The friendly name of this create Class.
     * @default NULL
     */
    'friendly-name'?: string;
    /**
     * Whether this create Class can be derived.
     * @default FALSE
     */
    'include-derived'?: boolean;
    /** The pointer to desc node in XML document. */
    'xml-node'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteCreateClassConstructOnly = GObjectConstructOnly | 'xml-node';

/** DIDL-Lite Descriptor #GUPnPDIDLLiteDescriptor respresents a DIDL-Lite descriptor (desc) element. */
export interface GUPnPDIDLLiteDescriptorProps extends GObjectProps {
    /**
     * The content of this descriptor.
     * @default NULL
     */
    content?: string;
    /**
     * The ID of this descriptor.
     * @default NULL
     */
    id?: string;
    /**
     * The type of this descriptor.
     * @default NULL
     */
    'metadata-type'?: string;
    /**
     * The name space associated with this descriptor.
     * @default NULL
     */
    'name-space'?: string;
    /** The pointer to desc node in XML document. */
    'xml-node'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteDescriptorConstructOnly = GObjectConstructOnly | 'xml-node';

/** DIDL-Lite Item #GUPnPDIDLLiteItem respresents a DIDL-Lite item element. */
export interface GUPnPDIDLLiteItemProps extends GUPnPDIDLLiteObjectProps {
    /**
     * The lifetime in seconds of this DIDLLite item in a media collection.
     * @default -1
     */
    lifetime?: bigint | number;
    /**
     * The ref ID of this item.
     * @default NULL
     */
    'ref-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteItemConstructOnly = GUPnPDIDLLiteObjectConstructOnly;

/** DIDL-Lite Object #GUPnPDIDLLiteObject respresent a DIDL-Lite object element. */
export interface GUPnPDIDLLiteObjectProps extends GObjectProps {
    /**
     * The album of this object.
     * @default NULL
     */
    album?: string;
    /**
     * The URI to album art of this object.
     * @default NULL
     */
    'album-art'?: string;
    /**
     * The artist of this object.
     * @default NULL
     * @deprecated since 0.5.3: Use #gupnp_didl_lite_object_get_artists and #gupnp_didl_lite_object_add_artist instead since unlike this property, they are capable of dealing with multiple artist nodes.
     */
    artist?: string;
    /**
     * The author of this object.
     * @default NULL
     * @deprecated since 0.5.3: Use #gupnp_didl_lite_object_get_authors and #gupnp_didl_lite_object_add_author instead since unlike this property, they are capable of dealing with multiple author nodes.
     */
    author?: string;
    /**
     * The creator of this object.
     * @default NULL
     */
    creator?: string;
    /**
     * The date of this object.
     * @default NULL
     */
    date?: string;
    /** Pointer to the DublinCore namespace registered with the XML document containing this object. */
    'dc-namespace'?: never;
    /**
     * The description of this object.
     * @default NULL
     */
    description?: string;
    /**
     * The 'dlna:dlnaManaged' attribute.
     * @default GUPNP_OCM_FLAGS_NONE
     */
    'dlna-managed'?: number;
    /** Pointer to the DLNA metadata namespace registered with the XML document containing this object. */
    'dlna-namespace'?: never;
    /**
     * The genre of this object.
     * @default NULL
     */
    genre?: string;
    /**
     * The ID of this object.
     * @default NULL
     */
    id?: string;
    /**
     * The ID of the parent container of this object.
     * @default NULL
     */
    'parent-id'?: string;
    /** Pointer to the PV metadata namespace registered with the XML document containing this object. */
    'pv-namespace'?: never;
    /**
     * Whether this object is restricted.
     * @default FALSE
     */
    restricted?: boolean;
    /**
     * The title of this object.
     * @default NULL
     */
    title?: string;
    /**
     * The original track number of this object.
     * @default -1
     */
    'track-number'?: number;
    /**
     * Update ID of this object.
     * @default 0
     */
    'update-id'?: number;
    /**
     * The UPnP class of this object.
     * @default NULL
     */
    'upnp-class'?: string;
    /** Pointer to the UPnP namespace registered with the XML document containing this object. */
    'upnp-namespace'?: never;
    /**
     * The write status of this object.
     * @default NULL
     */
    'write-status'?: string;
    /** The pointer to object node in XML document. */
    'xml-node'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteObjectConstructOnly = GObjectConstructOnly | 'dc-namespace' | 'dlna-namespace' | 'pv-namespace' | 'upnp-namespace' | 'xml-node';

/** A/V DIDL-Lite XML parser #GUPnPDIDLLiteParser parses DIDL-Lite XML strings. */
export interface GUPnPDIDLLiteParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteParserConstructOnly = GObjectConstructOnly;

/** DIDL-Lite Resource #GUPnPDIDLLiteResource respresent a DIDL-Lite resource (res) element. */
export interface GUPnPDIDLLiteResourceProps extends GObjectProps {
    /**
     * The number of audio channels in this resource.
     * @default -1
     */
    'audio-channels'?: number;
    /**
     * The bitrate of this resource.
     * @default -1
     */
    bitrate?: number;
    /**
     * The sample size of this resource.
     * @default -1
     */
    'bits-per-sample'?: number;
    /** @default -1 */
    'cleartext-size'?: bigint | number;
    /**
     * The color-depth of this image/video resource.
     * @default -1
     */
    'color-depth'?: number;
    /** Pointer to the DLNA metadata namespace registered with the resource object. */
    'dlna-namespace'?: never;
    /**
     * The duration (in seconds) of this resource.
     * @default -1
     */
    duration?: bigint | number;
    /**
     * The height of this image/video resource.
     * @default -1
     */
    height?: number;
    /**
     * The Import URI associated with this resource.
     * @default NULL
     */
    'import-uri'?: string;
    /**
     * The protection system used for this resource.
     * @default NULL
     */
    protection?: string;
    /** The protocol info associated with this resource. */
    'protocol-info'?: GUPnPAV.ProtocolInfo | null;
    /** Pointer to the PV metadata namespace registered with the resource object. */
    'pv-namespace'?: never;
    /**
     * The sample frequency of this resource.
     * @default -1
     */
    'sample-freq'?: number;
    /**
     * The size (in bytes) of this resource.
     * @default -1
     */
    size?: bigint | number;
    /**
     * The size (in bytes) of this resource.
     * @default -1
     */
    size64?: bigint | number;
    /**
     * Type of external subtitle file.
     * @default NULL
     */
    'subtitle-file-type'?: string;
    /**
     * Uri to external subtitle file.
     * @default NULL
     */
    'subtitle-file-uri'?: string;
    /**
     * Number of tracks in a DIDL_S or DIDL_V resource.
     * @default 0
     */
    'track-total'?: number;
    /** @default 0 */
    'update-count'?: number;
    /**
     * The URI associated with this resource.
     * @default NULL
     */
    uri?: string | null;
    /**
     * The width of this image/video resource.
     * @default -1
     */
    width?: number;
    /** The pointer to res node in XML document. */
    'xml-node'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteResourceConstructOnly = GObjectConstructOnly | 'dlna-namespace' | 'pv-namespace' | 'xml-node';

/** DIDL-Lite fragment writer #GUPnPDIDLLiteWriter is a helper class for writing DIDL-Lite fragments. */
export interface GUPnPDIDLLiteWriterProps extends GObjectProps {
    /**
     * The language the DIDL-Lite fragment is in.
     * @default NULL
     */
    language?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPDIDLLiteWriterConstructOnly = GObjectConstructOnly | 'language';

/** ContentDirectory feature #GUPnPFeature respresent a Feature element. */
export interface GUPnPFeatureProps extends GObjectProps {
    /**
     * The name of this feature.
     * @default NULL
     */
    name?: string;
    /**
     * The object IDs related to this feature.
     * @default NULL
     */
    'object-ids'?: string;
    /**
     * The version of this feature.
     * @default NULL
     */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPFeatureConstructOnly = GObjectConstructOnly | 'name' | 'object-ids' | 'version';

/** FeatureList state variable XML parser #GUPnPFeatureListParser parses XML strings from ContentDirectory FeatureList state variable. */
export interface GUPnPFeatureListParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPFeatureListParserConstructOnly = GObjectConstructOnly;

/** A/V LastChange event XML parser #GUPnPLastChangeParser parses XML strings from LastChange events that are generated by AVTransport and RenderingControl services. */
export interface GUPnPLastChangeParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPLastChangeParserConstructOnly = GObjectConstructOnly;

/** Media collection writer #GUPnPMediaCollection is a helper class for writing media collection files. */
export interface GUPnPMediaCollectionProps extends GObjectProps {
    /**
     * The author of this media collection.
     * @default NULL
     */
    author?: string;
    /**
     * Block of data to parse a collection from.
     * @default NULL
     */
    data?: string;
    /**
     * The title of this media collection.
     * @default NULL
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPMediaCollectionConstructOnly = GObjectConstructOnly | 'data';

/** UPnP AV ProtocolInfo #GUPnPProtocolInfo provides a convenient API to deal with ProtocolInfo strings used in UPnP AV specifications. */
export interface GUPnPProtocolInfoProps extends GObjectProps {
    /**
     * The DLNA conversion flags.
     * @default GUPNP_DLNA_CONVERSION_NONE
     */
    'dlna-conversion'?: number;
    /**
     * Various generic DLNA flags.
     * @default GUPNP_DLNA_FLAGS_NONE
     */
    'dlna-flags'?: number;
    /**
     * The DLNA operation flags.
     * @default GUPNP_DLNA_OPERATION_NONE
     */
    'dlna-operation'?: number;
    /**
     * The DLNA profile of this info.
     * @default NULL
     */
    'dlna-profile'?: string | null;
    /**
     * The MIME-type of this info.
     * @default NULL
     */
    'mime-type'?: string | null;
    /**
     * The network this info is associated with.
     * @default NULL
     */
    network?: string | null;
    /** The allowed play speeds on this info in the form of array of strings. */
    'play-speeds'?: string[] | null;
    /**
     * The protocol of this info.
     * @default NULL
     */
    protocol?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPProtocolInfoConstructOnly = GObjectConstructOnly;

/** A/V search criteria parser #GUPnPSearchCriteriaParser parses ContentDirectory search criteria strings. */
export interface GUPnPSearchCriteriaParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUPnPSearchCriteriaParserConstructOnly = GObjectConstructOnly;

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
