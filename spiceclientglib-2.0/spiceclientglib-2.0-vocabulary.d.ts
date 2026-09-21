/**
 * The GIR-derived widget VOCABULARY for SpiceClientGLib-2.0.
 *
 * GENERATED — do not edit. Provenance: SpiceClientGLib-2.0 — prop(s) no TypeScript value satisfies: SpiceClientGLib.PlaybackChannel.volume SpiceClientGLib.RecordChannel.volume
 *
 * 17 instantiable GTypes (of which 0 concrete widgets), 17 declarations, 2 enum nick unions, 0 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type SpiceClientGLib from './spiceclientglib-2.0.js';
import type { GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
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

export type SpiceChannelEventNick = 'none' | 'opened' | 'switching' | 'closed' | 'error-connect' | 'error-tls' | 'error-link' | 'error-auth' | 'error-io';
export type SpiceSessionMigrationNick = 'none' | 'switching' | 'migrating' | 'connecting';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The #SpiceChannel struct is opaque and should not be accessed directly. */
export interface SpiceChannelProps extends GObjectProps {
    /** @default -1 */
    'channel-id'?: number;
    /** @default -1 */
    'channel-type'?: number;
    'spice-session'?: SpiceClientGLib.Session;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceChannelConstructOnly = GObjectConstructOnly | 'channel-id' | 'channel-type' | 'spice-session';

/** The #SpiceCursorChannel struct is opaque and should not be accessed directly. */
export interface SpiceCursorChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceCursorChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpiceDisplayChannel struct is opaque and should not be accessed directly. */
export interface SpiceDisplayChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceDisplayChannelConstructOnly = SpiceChannelConstructOnly;

export interface SpiceFileTransferTaskProps extends GObjectProps {
    cancellable?: Gio.Cancellable;
    channel?: SpiceClientGLib.MainChannel;
    file?: Gio.File;
    /** @default 0 */
    id?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceFileTransferTaskConstructOnly = GObjectConstructOnly | 'cancellable' | 'channel' | 'file' | 'id';

/** The #SpiceInputsChannel struct is opaque and should not be accessed directly. */
export interface SpiceInputsChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceInputsChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpiceMainChannel struct is opaque and should not be accessed directly. */
export interface SpiceMainChannelProps extends SpiceChannelProps {
    /**
     * @default 0
     * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older.
     */
    'color-depth'?: number;
    /** @default FALSE */
    'disable-animation'?: boolean;
    /**
     * Disable automatic horizontal display position alignment.
     * @since 0.13
     * @default FALSE
     */
    'disable-display-align'?: boolean;
    /** @default TRUE */
    'disable-display-position'?: boolean;
    /** @default FALSE */
    'disable-font-smooth'?: boolean;
    /** @default FALSE */
    'disable-wallpaper'?: boolean;
    /**
     * Maximum size of clipboard operations in bytes (default 100MB, -1 for unlimited size);
     * @since 0.22
     * @default 104857600
     */
    'max-clipboard'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceMainChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpicePlaybackChannel struct is opaque and should not be accessed directly. */
export interface SpicePlaybackChannelProps extends SpiceChannelProps {
    /** @default 200 */
    'min-latency'?: number;
    /** @default FALSE */
    mute?: boolean;
    /** @default 2 */
    nchannels?: number;
    volume?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpicePlaybackChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpicePortChannel struct is opaque and should not be accessed directly. */
export interface SpicePortChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpicePortChannelConstructOnly = SpiceChannelConstructOnly;

/** Opaque data structure. */
export interface SpiceQmpPortProps extends GObjectProps {
    channel?: SpiceClientGLib.PortChannel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceQmpPortConstructOnly = GObjectConstructOnly | 'channel';

/** The #SpiceRecordChannel struct is opaque and should not be accessed directly. */
export interface SpiceRecordChannelProps extends SpiceChannelProps {
    /** @default FALSE */
    mute?: boolean;
    /** @default 2 */
    nchannels?: number;
    volume?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceRecordChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpiceSession struct is opaque and should not be accessed directly. */
export interface SpiceSessionProps extends GObjectProps {
    /**
     * CA certificates in PEM format.
     * @since 0.15
     */
    ca?: Uint8Array[];
    /**
     * File holding the CA certificates for the host the client is connecting to
     * @default NULL
     */
    'ca-file'?: string;
    /**
     * Images cache size.
     * @since 0.9
     * @default 0
     */
    'cache-size'?: number;
    /** @default NULL */
    'cert-subject'?: string;
    /** @default NULL */
    ciphers?: string;
    /** @default FALSE */
    'client-sockets'?: boolean;
    /**
     * Display color depth to set on new display channels.
     * @since 0.7
     * @default 0
     * @deprecated since 0.37: Deprecated due lack of support in drivers, only Windows 7 and older.
     */
    'color-depth'?: number;
    /**
     * A string array of effects to disable.
     * @since 0.7
     */
    'disable-effects'?: string[];
    /**
     * If set to TRUE, the audio channels will be enabled for playback and recording.
     * @since 0.8
     * @default TRUE
     */
    'enable-audio'?: boolean;
    /**
     * If set to TRUE, the smartcard channel will be enabled and smartcard events will be forwarded to the guest
     * @since 0.7
     * @default FALSE
     */
    'enable-smartcard'?: boolean;
    /**
     * If set to TRUE, the usbredir channel will be enabled and USB devices can be redirected to the guest
     * @since 0.8
     * @default TRUE
     */
    'enable-usbredir'?: boolean;
    /**
     * Whether to enable gl-scanout (Unix only).
     * @since 0.36
     * @default TRUE
     */
    'gl-scanout'?: boolean;
    /**
     * Glz window size.
     * @since 0.9
     * @default 0
     */
    'glz-window-size'?: number;
    /**
     * URL of the SPICE host to connect to
     * @default localhost
     */
    host?: string;
    /** @default FALSE */
    'inhibit-keyboard-grab'?: boolean;
    /**
     * TLS password to use
     * @default NULL
     */
    password?: string;
    /**
     * Port to connect to for unencrypted sessions
     * @default NULL
     */
    port?: string;
    /**
     * Version of the SPICE protocol to use
     * @default 2
     */
    protocol?: number;
    /**
     * URI to the proxy server to use when doing network connection.
     * @since 0.17
     * @default NULL
     */
    proxy?: string;
    pubkey?: Uint8Array[];
    /**
     * Whether this connection is read-only mode.
     * @since 0.8
     * @default FALSE
     */
    'read-only'?: boolean;
    /**
     * A string array of channel types to be secured.
     * @since 0.20
     */
    'secure-channels'?: string[];
    /**
     * Whether to share the directory read-only.
     * @since 0.28
     * @default FALSE
     */
    'share-dir-ro'?: boolean;
    /**
     * Location of the shared directory
     * @since 0.24
     * @default NULL
     */
    'shared-dir'?: string;
    /**
     * This property is used when one wants to simulate a smartcard with no hardware smartcard reader.
     * @since 0.7
     */
    'smartcard-certificates'?: string[];
    /**
     * Path to the NSS certificate database containing the certificates to use to simulate a software smartcard
     * @since 0.7
     * @default NULL
     */
    'smartcard-db'?: string;
    /**
     * Port to connect to for TLS sessions
     * @default NULL
     */
    'tls-port'?: string;
    /**
     * Path of the Unix socket to connect to
     * @since 0.28
     * @default NULL
     */
    'unix-path'?: string;
    /**
     * URI of the SPICE host to connect to.
     * @default NULL
     */
    uri?: string;
    /**
     * Username to use
     * @default NULL
     */
    username?: string;
    /**
     * #SpiceSessionVerify bit field indicating which parts of the peer certificate should be checked
     * @default SPICE_SESSION_VERIFY_HOSTNAME
     */
    verify?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceSessionConstructOnly = GObjectConstructOnly;

/** The #SpiceSmartcardChannel struct is opaque and should not be accessed directly. */
export interface SpiceSmartcardChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceSmartcardChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpiceSmartcardManager struct is opaque and should not be accessed directly. */
export interface SpiceSmartcardManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceSmartcardManagerConstructOnly = GObjectConstructOnly;

/** The #SpiceURI struct is opaque and cannot be accessed directly. */
export interface SpiceURIProps extends GObjectProps {
    /** @default NULL */
    hostname?: string;
    /** @default NULL */
    password?: string;
    /** @default 0 */
    port?: number;
    /** @default NULL */
    scheme?: string;
    /** @default NULL */
    user?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceURIConstructOnly = GObjectConstructOnly;

/** The #SpiceUsbDeviceManager struct is opaque and should not be accessed directly. */
export interface SpiceUsbDeviceManagerProps extends GObjectProps, GInitableProps {
    /**
     * Set this to TRUE to automatically redirect newly plugged in device.
     * @default FALSE
     */
    'auto-connect'?: boolean;
    /**
     * Set a string specifying a filter to use to determine which USB devices to autoconnect when plugged in, a filter consists of one or more rules.
     * @default 0x03,-1,-1,-1,0|-1,-1,-1,-1,1
     */
    'auto-connect-filter'?: string;
    /**
     * Set a string specifying a filter selecting USB devices to automatically redirect after a Spice connection has been established.
     * @default NULL
     */
    'redirect-on-connect'?: string;
    /** #SpiceSession this #SpiceUsbDeviceManager is associated with */
    session?: SpiceClientGLib.Session;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceUsbDeviceManagerConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'session';

/** The #SpiceUsbredirChannel struct is opaque and should not be accessed directly. */
export interface SpiceUsbredirChannelProps extends SpiceChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceUsbredirChannelConstructOnly = SpiceChannelConstructOnly;

/** The #SpiceWebdavChannel struct is opaque and should not be accessed directly. */
export interface SpiceWebdavChannelProps extends SpicePortChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SpiceWebdavChannelConstructOnly = SpicePortChannelConstructOnly;

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
