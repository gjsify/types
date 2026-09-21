/**
 * The GIR-derived widget VOCABULARY for Snapd-2.
 *
 * GENERATED — do not edit. Provenance: Snapd-2 — prop(s) no TypeScript value satisfies: Snapd.Change.tasks Snapd.Interface.plugs Snapd.Interface.slots Snapd.MarkdownNode.children Snapd.Plug.connections Snapd.Slot.connections Snapd.Snap.apps Snapd.Snap.categories Snapd.Snap.channels Snapd.Snap.links Snapd.Snap.media Snapd.Snap.prices Snapd.Snap.screenshots Snapd.SystemInformation.sandbox-features
 *
 * 33 instantiable GTypes (of which 0 concrete widgets), 33 declarations, 12 enum nick unions, 0 slot candidates.
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
import type Snapd from './snapd-2.js';
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

export type SnapdAliasStatusNick = 'unknown' | 'default' | 'enabled' | 'disabled' | 'auto' | 'manual';
export type SnapdChangeFilterNick = 'all' | 'in-progress' | 'ready';
export type SnapdConfinementNick = 'unknown' | 'strict' | 'devmode' | 'classic';
export type SnapdDaemonTypeNick = 'none' | 'unknown' | 'simple' | 'forking' | 'oneshot' | 'dbus' | 'notify';
export type SnapdMaintenanceKindNick = 'unknown' | 'daemon-restart' | 'system-restart';
export type SnapdMarkdownNodeTypeNick = 'text' | 'paragraph' | 'unordered-list' | 'list-item' | 'code-block' | 'code-span' | 'emphasis' | 'strong-emphasis' | 'url';
export type SnapdNoticeTypeNick = 'unknown' | 'change-update' | 'refresh-inhibit' | 'snap-run-inhibit';
export type SnapdPublisherValidationNick = 'unknown' | 'unproven' | 'verified' | 'starred';
export type SnapdSnapStatusNick = 'unknown' | 'available' | 'priced' | 'installed' | 'active';
export type SnapdSnapTypeNick = 'unknown' | 'app' | 'kernel' | 'gadget' | 'os' | 'core' | 'base' | 'snapd';
export type SnapdSystemConfinementNick = 'unknown' | 'strict' | 'partial';
export type SnapdThemeStatusNick = 'installed' | 'available' | 'unavailable';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** #SnapdAlias contains alias information for a Snap. */
export interface SnapdAliasProps extends GObjectProps {
    /** @default NULL */
    'app-auto'?: string | null;
    /** @default NULL */
    'app-manual'?: string | null;
    /** @default NULL */
    command?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    snap?: string;
    /** @default SNAPD_ALIAS_STATUS_UNKNOWN */
    status?: SnapdAliasStatusNick | Snapd.AliasStatus;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdAliasConstructOnly = GObjectConstructOnly | 'app-auto' | 'app-manual' | 'command' | 'name' | 'snap' | 'status';

/** #SnapdApp contains information about an app in a Snap. */
export interface SnapdAppProps extends GObjectProps {
    /** @default FALSE */
    active?: boolean;
    aliases?: string[];
    /** @default NULL */
    'common-id'?: string | null;
    /** @default SNAPD_DAEMON_TYPE_UNKNOWN */
    'daemon-type'?: SnapdDaemonTypeNick | Snapd.DaemonType | null;
    /** @default NULL */
    'desktop-file'?: string | null;
    /** @default FALSE */
    enabled?: boolean;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdAppConstructOnly = GObjectConstructOnly | 'active' | 'aliases' | 'common-id' | 'daemon-type' | 'desktop-file' | 'enabled' | 'name' | 'snap';

/** #SnapdAssertion contains information about a Snap assertion. */
export interface SnapdAssertionProps extends GObjectProps {
    /** @default NULL */
    content?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdAssertionConstructOnly = GObjectConstructOnly | 'content';

/** #SnapdAuthData contains authorization data used to communicate with snapd. */
export interface SnapdAuthDataProps extends GObjectProps {
    discharges?: string[];
    /** @default NULL */
    macaroon?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdAuthDataConstructOnly = GObjectConstructOnly;

/** #SnapdAutoRefreshChangeData contains the data from the 'data' field of a #SnapdChange of kind 'auto-refresh'. */
export interface SnapdAutorefreshChangeDataProps extends SnapdChangeDataProps {
    /**
     * Contains the list of snaps that were inhibited for too long, and now are having a forced refresh.
     * @since 1.65
     */
    'refresh-forced'?: string[];
    /**
     * Contains the list of snaps that have a pending update but are inhibited because they have a running program.
     * @since 1.65
     */
    'snap-names'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdAutorefreshChangeDataConstructOnly = SnapdChangeDataConstructOnly | 'refresh-forced' | 'snap-names';

/** #SnapdCategory is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdCategoryProps extends GObjectProps {
    /** @default FALSE */
    featured?: boolean;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdCategoryConstructOnly = GObjectConstructOnly | 'featured' | 'name';

/** #SnapdCategoryDetails is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdCategoryDetailsProps extends GObjectProps {
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdCategoryDetailsConstructOnly = GObjectConstructOnly | 'name';

/** #SnapdChange contains information on a current Snap transaction. */
export interface SnapdChangeProps extends GObjectProps {
    data?: Snapd.ChangeData;
    /** @default NULL */
    error?: string | null;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    kind?: string;
    /** @default FALSE */
    ready?: boolean;
    'ready-time'?: GLib.DateTime | null;
    'spawn-time'?: GLib.DateTime;
    /** @default NULL */
    status?: string;
    /** @default NULL */
    summary?: string;
    tasks?: never[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdChangeConstructOnly = GObjectConstructOnly | 'data' | 'error' | 'id' | 'kind' | 'ready' | 'ready-time' | 'spawn-time' | 'status' | 'summary' | 'tasks';

/** A #SnapdChangeData is the base class for the `data` field from a #SnapdChange. */
export interface SnapdChangeDataProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdChangeDataConstructOnly = GObjectConstructOnly;

/** #SnapdChannel is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdChannelProps extends GObjectProps {
    /** @default SNAPD_CONFINEMENT_UNKNOWN */
    confinement?: SnapdConfinementNick | Snapd.Confinement;
    /** @default NULL */
    epoch?: string;
    /** @default NULL */
    name?: string;
    'released-at'?: GLib.DateTime | null;
    /** @default NULL */
    revision?: string;
    /** @default 0 */
    size?: bigint | number;
    /** @default NULL */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdChannelConstructOnly = GObjectConstructOnly | 'confinement' | 'epoch' | 'name' | 'released-at' | 'revision' | 'size' | 'version';

/** #SnapdClient contains connection state with snapd. */
export interface SnapdClientProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdClientConstructOnly = GObjectConstructOnly;

/** #SnapdConnection contains the state of Snap a interface connection. */
export interface SnapdConnectionProps extends GObjectProps {
    /** @default FALSE */
    gadget?: boolean;
    /** @default NULL */
    interface?: string;
    /** @default FALSE */
    manual?: boolean;
    /** @default NULL */
    name?: string;
    plug?: Snapd.PlugRef;
    'plug-attrs'?: GLib.HashTable;
    slot?: Snapd.SlotRef;
    'slot-attrs'?: GLib.HashTable;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdConnectionConstructOnly = GObjectConstructOnly | 'gadget' | 'interface' | 'manual' | 'name' | 'plug' | 'plug-attrs' | 'slot' | 'slot-attrs' | 'snap';

/** #SnapdIcon contains icon data. */
export interface SnapdIconProps extends GObjectProps {
    data?: GLib.Bytes;
    /** @default NULL */
    'mime-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdIconConstructOnly = GObjectConstructOnly | 'data' | 'mime-type';

/** #SnapdInterface contains information about a Snap interface. */
export interface SnapdInterfaceProps extends GObjectProps {
    /** @default NULL */
    'doc-url'?: string;
    /** @default NULL */
    name?: string;
    plugs?: never[];
    slots?: never[];
    /** @default NULL */
    summary?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdInterfaceConstructOnly = GObjectConstructOnly | 'doc-url' | 'name' | 'plugs' | 'slots' | 'summary';

/** #SnapdLink contains link information. */
export interface SnapdLinkProps extends GObjectProps {
    /** @default NULL */
    type?: string;
    urls?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdLinkConstructOnly = GObjectConstructOnly | 'type' | 'urls';

/** #SnapdLog is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdLogProps extends GObjectProps {
    /** @default NULL */
    message?: string;
    /** @default NULL */
    pid?: string;
    /** @default NULL */
    sid?: string;
    timestamp?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdLogConstructOnly = GObjectConstructOnly | 'message' | 'pid' | 'sid' | 'timestamp';

/** #SnapdMaintenance contains maintenance information. */
export interface SnapdMaintenanceProps extends GObjectProps {
    /** @default SNAPD_MAINTENANCE_KIND_UNKNOWN */
    kind?: SnapdMaintenanceKindNick | Snapd.MaintenanceKind;
    /** @default NULL */
    message?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdMaintenanceConstructOnly = GObjectConstructOnly | 'kind' | 'message';

/** #SnapdMarkdownNode is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdMarkdownNodeProps extends GObjectProps {
    children?: never[];
    /** @default SNAPD_MARKDOWN_NODE_TYPE_TEXT */
    'node-type'?: SnapdMarkdownNodeTypeNick | Snapd.MarkdownNodeType;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdMarkdownNodeConstructOnly = GObjectConstructOnly | 'children' | 'node-type' | 'text';

/** #SnapdMarkdownParser is an opaque data structure and can only be accessed using the provided functions. */
export interface SnapdMarkdownParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdMarkdownParserConstructOnly = GObjectConstructOnly;

/** #SnapdMedia contains media information. */
export interface SnapdMediaProps extends GObjectProps {
    /** @default 0 */
    height?: number;
    /** @default NULL */
    type?: string;
    /** @default NULL */
    url?: string;
    /** @default 0 */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdMediaConstructOnly = GObjectConstructOnly | 'height' | 'type' | 'url' | 'width';

/** #SnapdNotice contains information on a notification element. */
export interface SnapdNoticeProps extends GObjectProps {
    /** @default 0 */
    'expire-after'?: bigint | number;
    'first-occurred'?: GLib.DateTime;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    key?: string;
    'last-data'?: GLib.HashTable;
    'last-occurred'?: GLib.DateTime;
    /** @default -1 */
    'last-occurred-nanoseconds'?: number;
    'last-repeated'?: GLib.DateTime;
    /** @default 0 */
    'notice-type'?: number;
    /** @default -1 */
    occurrences?: bigint | number;
    /** @default 0 */
    'repeat-after'?: bigint | number;
    /** @default NULL */
    'user-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdNoticeConstructOnly = GObjectConstructOnly | 'expire-after' | 'first-occurred' | 'id' | 'key' | 'last-data' | 'last-occurred' | 'last-occurred-nanoseconds' | 'last-repeated' | 'notice-type' | 'occurrences' | 'repeat-after' | 'user-id';

/** #SnapdNoticesMonitor allows to receive in real time events from snapd, like status changes in an ongoing refresh, inhibited refreshes due to the snap being active, or inhibited launches due to an ong… */
export interface SnapdNoticesMonitorProps extends GObjectProps {
    client?: Snapd.Client;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdNoticesMonitorConstructOnly = GObjectConstructOnly | 'client';

/** #SnapdPlug contains information about a Snap plug. */
export interface SnapdPlugProps extends GObjectProps {
    attributes?: GLib.HashTable;
    connections?: never[];
    /** @default NULL */
    interface?: string;
    /** @default NULL */
    label?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdPlugConstructOnly = GObjectConstructOnly | 'attributes' | 'connections' | 'interface' | 'label' | 'name' | 'snap';

/** #SnapdPlugRef contains the state of Snap a interface plug_ref. */
export interface SnapdPlugRefProps extends GObjectProps {
    /** @default NULL */
    plug?: string;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdPlugRefConstructOnly = GObjectConstructOnly | 'plug' | 'snap';

/** #SnapdPrice contains pricing information. */
export interface SnapdPriceProps extends GObjectProps {
    /** @default 0.000000 */
    amount?: number;
    /** @default NULL */
    currency?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdPriceConstructOnly = GObjectConstructOnly | 'amount' | 'currency';

/** #SnapdScreenshot contains screenshot information. */
export interface SnapdScreenshotProps extends GObjectProps {
    /** @default 0 */
    height?: number;
    /** @default NULL */
    url?: string;
    /** @default 0 */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdScreenshotConstructOnly = GObjectConstructOnly | 'height' | 'url' | 'width';

/** #SnapdSlot contains information about a Snap slot. */
export interface SnapdSlotProps extends GObjectProps {
    attributes?: GLib.HashTable;
    connections?: never[];
    /** @default NULL */
    interface?: string;
    /** @default NULL */
    label?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdSlotConstructOnly = GObjectConstructOnly | 'attributes' | 'connections' | 'interface' | 'label' | 'name' | 'snap';

/** #SnapdSlotRef contains the state of Snap a interface slot_ref. */
export interface SnapdSlotRefProps extends GObjectProps {
    /** @default NULL */
    slot?: string;
    /** @default NULL */
    snap?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdSlotRefConstructOnly = GObjectConstructOnly | 'slot' | 'snap';

/** #SnapdSnap contains Snap metadata. */
export interface SnapdSnapProps extends GObjectProps {
    apps?: never[];
    /** @default NULL */
    base?: string | null;
    /** @default NULL */
    broken?: string | null;
    categories?: never[];
    /** @default NULL */
    channel?: string;
    channels?: never[];
    'common-ids'?: string[];
    /** @default SNAPD_CONFINEMENT_UNKNOWN */
    confinement?: SnapdConfinementNick | Snapd.Confinement;
    /** @default NULL */
    contact?: string;
    /** @default NULL */
    description?: string;
    /** @default NULL */
    developer?: string;
    /** @default FALSE */
    devmode?: boolean;
    /** @default 0 */
    'download-size'?: bigint | number;
    hold?: GLib.DateTime | null;
    /** @default NULL */
    icon?: string;
    /** @default NULL */
    id?: string;
    'install-date'?: GLib.DateTime | null;
    /** @default 0 */
    'installed-size'?: bigint | number;
    /** @default FALSE */
    jailmode?: boolean;
    /** @default NULL */
    license?: string | null;
    links?: never[];
    media?: never[];
    /** @default NULL */
    'mounted-from'?: string | null;
    /** @default NULL */
    name?: string;
    prices?: never[];
    /** @default FALSE */
    private?: boolean;
    'proceed-time'?: GLib.DateTime | null;
    /** @default NULL */
    'publisher-display-name'?: string;
    /** @default NULL */
    'publisher-id'?: string;
    /** @default NULL */
    'publisher-username'?: string;
    /** @default SNAPD_PUBLISHER_VALIDATION_UNKNOWN */
    'publisher-validation'?: SnapdPublisherValidationNick | Snapd.PublisherValidation;
    /** @default NULL */
    revision?: string;
    screenshots?: never[];
    /** @default SNAPD_SNAP_TYPE_UNKNOWN */
    'snap-type'?: SnapdSnapTypeNick | Snapd.SnapType;
    /** @default SNAPD_SNAP_STATUS_UNKNOWN */
    status?: SnapdSnapStatusNick | Snapd.SnapStatus;
    /** @default NULL */
    'store-url'?: string | null;
    /** @default NULL */
    summary?: string;
    /** @default NULL */
    title?: string | null;
    /** @default NULL */
    'tracking-channel'?: string;
    tracks?: string[];
    /** @default FALSE */
    trymode?: boolean;
    /** @default NULL */
    version?: string;
    /** @default NULL */
    website?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdSnapConstructOnly = GObjectConstructOnly | 'apps' | 'base' | 'broken' | 'categories' | 'channel' | 'channels' | 'common-ids' | 'confinement' | 'contact' | 'description' | 'developer' | 'devmode' | 'download-size' | 'hold' | 'icon' | 'id' | 'install-date' | 'installed-size' | 'jailmode' | 'license' | 'links' | 'media' | 'mounted-from' | 'name' | 'prices' | 'private' | 'proceed-time' | 'publisher-display-name' | 'publisher-id' | 'publisher-username' | 'publisher-validation' | 'revision' | 'screenshots' | 'snap-type' | 'status' | 'store-url' | 'summary' | 'title' | 'tracking-channel' | 'tracks' | 'trymode' | 'version' | 'website';

/** #SnapdSystemInformation contains information about the system snapd is running on. */
export interface SnapdSystemInformationProps extends GObjectProps {
    /** @default NULL */
    architecture?: string;
    /** @default NULL */
    'binaries-directory'?: string;
    /** @default NULL */
    'build-id'?: string;
    /** @default SNAPD_SYSTEM_CONFINEMENT_UNKNOWN */
    confinement?: SnapdSystemConfinementNick | Snapd.SystemConfinement;
    /** @default NULL */
    'kernel-version'?: string;
    /** @default FALSE */
    managed?: boolean;
    /** @default NULL */
    'mount-directory'?: string;
    /** @default FALSE */
    'on-classic'?: boolean;
    /** @default NULL */
    'os-id'?: string;
    /** @default NULL */
    'os-version'?: string;
    'refresh-hold'?: GLib.DateTime | null;
    'refresh-last'?: GLib.DateTime | null;
    'refresh-next'?: GLib.DateTime | null;
    /** @default NULL */
    'refresh-schedule'?: string | null;
    /** @default NULL */
    'refresh-timer'?: string | null;
    'sandbox-features'?: never;
    /** @default NULL */
    series?: string;
    /** @default NULL */
    store?: string | null;
    /** @default NULL */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdSystemInformationConstructOnly = GObjectConstructOnly | 'architecture' | 'binaries-directory' | 'build-id' | 'confinement' | 'kernel-version' | 'managed' | 'mount-directory' | 'on-classic' | 'os-id' | 'os-version' | 'refresh-hold' | 'refresh-last' | 'refresh-next' | 'refresh-schedule' | 'refresh-timer' | 'sandbox-features' | 'series' | 'store' | 'version';

/** #SnapdTask contains progress information for a task in a Snap transaction. */
export interface SnapdTaskProps extends GObjectProps {
    data?: Snapd.TaskData | null;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    kind?: string;
    /** @default 0 */
    'progress-done'?: bigint | number;
    /** @default NULL */
    'progress-label'?: string;
    /** @default 0 */
    'progress-total'?: bigint | number;
    /** @default FALSE */
    ready?: boolean;
    'ready-time'?: GLib.DateTime | null;
    'spawn-time'?: GLib.DateTime;
    /** @default NULL */
    status?: string;
    /** @default NULL */
    summary?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdTaskConstructOnly = GObjectConstructOnly | 'data' | 'id' | 'kind' | 'progress-done' | 'progress-label' | 'progress-total' | 'ready' | 'ready-time' | 'spawn-time' | 'status' | 'summary';

/** #SnapdTaskData contains extra information for a task in a Snap transaction. */
export interface SnapdTaskDataProps extends GObjectProps {
    'affected-snaps'?: string[] | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdTaskDataConstructOnly = GObjectConstructOnly | 'affected-snaps';

/** #SnapdUserInformation contains information about a user account on the system snapd is running on. */
export interface SnapdUserInformationProps extends GObjectProps {
    'auth-data'?: Snapd.AuthData | null;
    /** @default NULL */
    email?: string;
    /** @default -1 */
    id?: bigint | number;
    'ssh-keys'?: string[];
    /** @default NULL */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SnapdUserInformationConstructOnly = GObjectConstructOnly | 'auth-data' | 'email' | 'id' | 'ssh-keys' | 'username';

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
