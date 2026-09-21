/**
 * The GIR-derived widget VOCABULARY for Gst-1.0.
 *
 * GENERATED — do not edit. Provenance: Gst-1.0 — library 1.28.6
 *
 * 36 instantiable GTypes (of which 0 concrete widgets), 41 declarations, 40 enum nick unions, 0 slot candidates.
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

import type GObject from '@girs/gobject-2.0';
import type Gst from './gst-1.0.js';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps, GParamConstructOnly, GParamProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GstBufferingModeNick = 'stream' | 'download' | 'timeshift' | 'live';
export type GstBusSyncReplyNick = 'drop' | 'pass' | 'async';
export type GstCapsIntersectModeNick = 'zig-zag' | 'first';
export type GstClockEntryTypeNick = 'single' | 'periodic';
export type GstClockReturnNick = 'ok' | 'early' | 'unscheduled' | 'busy' | 'badtime' | 'error' | 'unsupported' | 'done';
export type GstClockTypeNick = 'realtime' | 'monotonic' | 'other' | 'tai';
export type GstDebugColorModeNick = 'off' | 'on' | 'unix';
export type GstDebugLevelNick = 'none' | 'error' | 'warning' | 'fixme' | 'info' | 'debug' | 'log' | 'trace' | 'memdump' | 'count';
export type GstEventTypeNick = 'unknown' | 'flush-start' | 'flush-stop' | 'stream-start' | 'caps' | 'segment' | 'stream-collection' | 'tag' | 'buffersize' | 'sink-message' | 'stream-group-done' | 'eos' | 'toc' | 'protection' | 'segment-done' | 'gap' | 'instant-rate-change' | 'qos' | 'seek' | 'navigation' | 'latency' | 'step' | 'reconfigure' | 'toc-select' | 'select-streams' | 'instant-rate-sync-time' | 'custom-upstream' | 'custom-downstream' | 'custom-downstream-oob' | 'custom-downstream-sticky' | 'custom-both' | 'custom-both-oob';
export type GstFlowReturnNick = 'custom-success-2' | 'custom-success-1' | 'custom-success' | 'ok' | 'not-linked' | 'flushing' | 'eos' | 'not-negotiated' | 'error' | 'not-supported' | 'custom-error' | 'custom-error-1' | 'custom-error-2';
export type GstFormatNick = 'undefined' | 'default' | 'bytes' | 'time' | 'buffers' | 'percent';
export type GstIteratorItemNick = 'skip' | 'pass' | 'end';
export type GstIteratorResultNick = 'done' | 'ok' | 'resync' | 'error';
export type GstPadDirectionNick = 'unknown' | 'src' | 'sink';
export type GstPadLinkReturnNick = 'ok' | 'wrong-hierarchy' | 'was-linked' | 'wrong-direction' | 'noformat' | 'nosched' | 'refused';
export type GstPadModeNick = 'none' | 'push' | 'pull';
export type GstPadPresenceNick = 'always' | 'sometimes' | 'request';
export type GstPadProbeReturnNick = 'drop' | 'ok' | 'remove' | 'pass' | 'handled';
export type GstProgressTypeNick = 'start' | 'continue' | 'complete' | 'canceled' | 'error';
export type GstPromiseResultNick = 'pending' | 'interrupted' | 'replied' | 'expired';
export type GstQOSTypeNick = 'overflow' | 'underflow' | 'throttle';
export type GstQueryTypeNick = 'unknown' | 'position' | 'duration' | 'latency' | 'jitter' | 'rate' | 'seeking' | 'segment' | 'convert' | 'formats' | 'buffering' | 'custom' | 'uri' | 'allocation' | 'scheduling' | 'accept-caps' | 'caps' | 'drain' | 'context' | 'bitrate' | 'selectable';
export type GstRankNick = 'none' | 'marginal' | 'secondary' | 'primary';
export type GstSearchModeNick = 'exact' | 'before' | 'after';
export type GstSeekTypeNick = 'none' | 'set' | 'end';
export type GstStateNick = 'void-pending' | 'null' | 'ready' | 'paused' | 'playing';
export type GstStateChangeNick = 'null-to-ready' | 'ready-to-paused' | 'paused-to-playing' | 'playing-to-paused' | 'paused-to-ready' | 'ready-to-null' | 'null-to-null' | 'ready-to-ready' | 'paused-to-paused' | 'playing-to-playing';
export type GstStateChangeReturnNick = 'failure' | 'success' | 'async' | 'no-preroll';
export type GstStreamStatusTypeNick = 'create' | 'enter' | 'leave' | 'destroy' | 'start' | 'pause' | 'stop';
export type GstStructureChangeTypeNick = 'link' | 'unlink';
export type GstTagFlagNick = 'undefined' | 'meta' | 'encoded' | 'decoded' | 'count';
export type GstTagMergeModeNick = 'undefined' | 'replace-all' | 'replace' | 'append' | 'prepend' | 'keep' | 'keep-all' | 'count';
export type GstTagScopeNick = 'stream' | 'global';
export type GstTaskStateNick = 'started' | 'stopped' | 'paused';
export type GstTocEntryTypeNick = 'angle' | 'version' | 'edition' | 'invalid' | 'title' | 'track' | 'chapter';
export type GstTocLoopTypeNick = 'none' | 'forward' | 'reverse' | 'ping-pong';
export type GstTocScopeNick = 'global' | 'current';
export type GstTracerValueScopeNick = 'process' | 'thread' | 'element' | 'pad';
export type GstTypeFindProbabilityNick = 'none' | 'minimum' | 'possible' | 'likely' | 'nearly-certain' | 'maximum';
export type GstURITypeNick = 'unknown' | 'sink' | 'src';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** #GstBin is an element that can contain other #GstElement, allowing them to be managed as a group. */
export interface GstBinProps extends GstElementProps, GstChildProxyProps {
    /**
     * If set to %TRUE, the bin will handle asynchronous state changes.
     * @default FALSE
     */
    'async-handling'?: boolean;
    /**
     * Forward all children messages, even those that would normally be filtered by the bin.
     * @default FALSE
     */
    'message-forward'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstBinConstructOnly = GstElementConstructOnly | GstChildProxyConstructOnly;

/** A fundamental type that describes a 64-bit bitmask */
export interface GstBitmaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstBitmaskConstructOnly = never;

/** A #GstBufferPool is an object that can be used to pre-allocate and recycle buffers of the same size and with the same properties. */
export interface GstBufferPoolProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstBufferPoolConstructOnly = GstObjectConstructOnly;

/** The #GstBus is an object responsible for delivering #GstMessage packets in a first-in first-out way from the streaming threads (see #GstTask) to the application. */
export interface GstBusProps extends GstObjectProps {
    /**
     * Enables async message delivery support for bus watches, gst_bus_pop() and similar API.
     * @default TRUE
     */
    'enable-async'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstBusConstructOnly = GstObjectConstructOnly | 'enable-async';

/** This interface abstracts handling of property sets for elements with children. */
export interface GstChildProxyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstChildProxyConstructOnly = GObjectConstructOnly;

/** GStreamer uses a global clock to synchronize the plugins in a pipeline. */
export interface GstClockProps extends GstObjectProps {
    /** @default 100000000 */
    timeout?: bigint | number;
    /** @default 32 */
    'window-size'?: number;
    /** @default 4 */
    'window-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstClockConstructOnly = GstObjectConstructOnly;

/** Applications should create a #GstDeviceMonitor when they want to probe, list and monitor devices of a specific type. */
export interface GstDeviceMonitorProps extends GstObjectProps {
    /** @default FALSE */
    'show-all'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstDeviceMonitorConstructOnly = GstObjectConstructOnly;

/** #GstDeviceProviderFactory is used to create instances of device providers. */
export interface GstDeviceProviderFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstDeviceProviderFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** A fundamental type that describes a #gdouble range */
export interface GstDoubleRangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstDoubleRangeConstructOnly = never;

/** #GstDynamicTypeFactory is used to represent a type that can be automatically loaded the first time it is used. */
export interface GstDynamicTypeFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstDynamicTypeFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** GstElement is the abstract base class needed to construct an element that can be used in a GStreamer pipeline. */
export interface GstElementProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstElementConstructOnly = GstObjectConstructOnly;

/** #GstElementFactory is used to create instances of elements. */
export interface GstElementFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstElementFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** A fundamental type that describes a 32-bit flag bitfield, with 32-bit mask indicating which of the bits in the field are explicitly set. */
export interface GstFlagSetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstFlagSetConstructOnly = never;

/** A fundamental type that describes a fraction of an integer numerator over an integer denominator */
export interface GstFractionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstFractionConstructOnly = never;

/** A fundamental type that describes a #GstFractionRange range */
export interface GstFractionRangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstFractionRangeConstructOnly = never;

/** GhostPads are useful when organizing pipelines with #GstBin like elements. */
export interface GstGhostPadProps extends GstProxyPadProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstGhostPadConstructOnly = GstProxyPadConstructOnly;

/** A fundamental type that describes a #gint64 range */
export interface GstInt64RangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstInt64RangeConstructOnly = never;

/** A fundamental type that describes a #gint range */
export interface GstIntRangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstIntRangeConstructOnly = never;

/** Register a #GstMetaInfo that can be automatically loaded the first time it is used. */
export interface GstMetaFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstMetaFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** #GstObject provides a root for the object hierarchy tree filed in by the GStreamer library. */
export interface GstObjectProps extends GInitiallyUnownedProps {
    /** @default NULL */
    name?: string | null;
    /** The parent of the object. */
    parent?: Gst.Object | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstObjectConstructOnly = GInitiallyUnownedConstructOnly;

/** A #GstElement is linked to other elements via "pads", which are extremely light-weight generic link points. */
export interface GstPadProps extends GstObjectProps {
    /** @default GST_PAD_UNKNOWN */
    direction?: GstPadDirectionNick | Gst.PadDirection;
    /**
     * The offset that will be applied to the running time of the pad.
     * @since 1.6
     * @default 0
     */
    offset?: bigint | number;
    template?: Gst.PadTemplate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstPadConstructOnly = GstObjectConstructOnly | 'direction';

/** Padtemplates describe the possible media types a pad or an elementfactory can handle. */
export interface GstPadTemplateProps extends GstObjectProps {
    /** The capabilities of the pad described by the pad template. */
    caps?: Gst.Caps;
    /**
     * The direction of the pad described by the pad template.
     * @default GST_PAD_UNKNOWN
     */
    direction?: GstPadDirectionNick | Gst.PadDirection;
    /**
     * The type of the pad described by the pad template.
     * @since 1.14
     */
    gtype?: GObject.GType;
    /**
     * The name template of the pad template.
     * @default NULL
     */
    'name-template'?: string;
    /**
     * When the pad described by the pad template will become available.
     * @default GST_PAD_ALWAYS
     */
    presence?: GstPadPresenceNick | Gst.PadPresence;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstPadTemplateConstructOnly = GstObjectConstructOnly | 'caps' | 'direction' | 'gtype' | 'name-template' | 'presence';

/** A fundamental type that describes a #GParamSpec for arrays of values */
export interface GstParamArrayProps extends GParamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstParamArrayConstructOnly = GParamConstructOnly;

/** A fundamental type that describes a #GParamSpec for fractional properties */
export interface GstParamFractionProps extends GParamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstParamFractionConstructOnly = GParamConstructOnly;

/** A #GstPipeline is a special #GstBin used as the toplevel container for the filter graph. */
export interface GstPipelineProps extends GstBinProps, GstChildProxyProps {
    /**
     * Whether or not to automatically flush all messages on the pipeline's bus when going from READY to NULL state.
     * @default TRUE
     */
    'auto-flush-bus'?: boolean;
    /**
     * The expected delay needed for elements to spin up to the PLAYING state expressed in nanoseconds.
     * @default 0
     */
    delay?: bigint | number;
    /**
     * Latency to configure on the pipeline.
     * @since 1.6
     * @default 18446744073709551615
     */
    latency?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstPipelineConstructOnly = GstBinConstructOnly | GstChildProxyConstructOnly;

/** GStreamer is extensible, so #GstElement instances can be loaded at runtime. */
export interface GstPluginProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstPluginConstructOnly = GstObjectConstructOnly;

/** This is a base class for anything that can be added to a #GstPlugin. */
export interface GstPluginFeatureProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstPluginFeatureConstructOnly = GstObjectConstructOnly;

export interface GstProxyPadProps extends GstPadProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstProxyPadConstructOnly = GstPadConstructOnly;

/** One registry holds the metadata of a set of plugins. */
export interface GstRegistryProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstRegistryConstructOnly = GstObjectConstructOnly;

/** The #GstSharedTaskPool object. */
export interface GstSharedTaskPoolProps extends GstTaskPoolProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstSharedTaskPoolConstructOnly = GstTaskPoolConstructOnly;

/** A high-level object representing a single stream. */
export interface GstStreamProps extends GstObjectProps {
    /** The #GstCaps of the #GstStream. */
    caps?: Gst.Caps | null;
    /** @default GST_STREAM_FLAG_NONE */
    'stream-flags'?: number;
    /**
     * The unique identifier of the #GstStream.
     * @default NULL
     */
    'stream-id'?: string | null;
    /**
     * The #GstStreamType of the #GstStream.
     * @default GST_STREAM_TYPE_UNKNOWN
     */
    'stream-type'?: number;
    /** The #GstTagList of the #GstStream. */
    tags?: Gst.TagList | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstStreamConstructOnly = GstObjectConstructOnly | 'stream-id';

/** A collection of #GstStream that are available. */
export interface GstStreamCollectionProps extends GstObjectProps {
    /**
     * stream-id
     * @default NULL
     */
    'upstream-id'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstStreamCollectionConstructOnly = GstObjectConstructOnly;

/** The GStreamer core provides a GstSystemClock based on the system time. */
export interface GstSystemClockProps extends GstClockProps {
    /** @default GST_CLOCK_TYPE_MONOTONIC */
    'clock-type'?: GstClockTypeNick | Gst.ClockType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstSystemClockConstructOnly = GstClockConstructOnly;

/** #GstTask is used by #GstElement and #GstPad to provide the data passing threads in a #GstPipeline. */
export interface GstTaskProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstTaskConstructOnly = GstObjectConstructOnly;

/** This object provides an abstraction for creating threads. */
export interface GstTaskPoolProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstTaskPoolConstructOnly = GstObjectConstructOnly;

/** Use gst_tracer_factory_get_list() to get a list of tracer factories known to GStreamer. */
export interface GstTracerFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstTracerFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** Tracing modules will create instances of this class to announce the data they will log and create a log formatter. */
export interface GstTracerRecordProps extends GstObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstTracerRecordConstructOnly = GstObjectConstructOnly;

/** These functions allow querying information about registered typefind functions. */
export interface GstTypeFindFactoryProps extends GstPluginFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstTypeFindFactoryConstructOnly = GstPluginFeatureConstructOnly;

/** A fundamental type that describes an ordered list of #GValue */
export interface GstValueArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstValueArrayConstructOnly = never;

/** A fundamental type that describes an unordered list of #GValue */
export interface GstValueListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstValueListConstructOnly = never;

/** A fundamental type that describes a set of #GValue */
export interface GstValueUniqueListProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GstValueUniqueListConstructOnly = never;

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
