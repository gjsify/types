/**
 * The GIR-derived widget VOCABULARY for XApp-1.0.
 *
 * GENERATED — do not edit. Provenance: XApp-1.0 — dropped empty base(s): GObject.Object GObject.InitiallyUnowned Atk.ImplementorIface Gio.AsyncInitable Gio.DBusObjectManager Gio.Initable Gio.DBusObject Gio.DBusInterface — inlined base(s) their owner's vocabulary does not emit: Gio.DBusObjectManagerClient Gio.DBusObjectProxy Gio.DBusObjectSkeleton Gio.DBusProxy Gio.DBusInterfaceSkeleton — prop(s) no TypeScript value satisfies: Gio.DBusObjectManagerClient.get-proxy-type-destroy-notify Gio.DBusObjectManagerClient.get-proxy-type-func Gio.DBusObjectManagerClient.get-proxy-type-user-data
 *
 * 20 instantiable GTypes (of which 5 concrete widgets), 28 declarations (5 inlined from a namespace whose vocabulary does not emit them), 4 enum nick unions, 1 slot candidates.
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
import type Gtk from '@girs/gtk-3.0';
import type XApp from './xapp-1.0.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkIconSizeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GBusTypeNick = 'starter' | 'none' | 'system' | 'session';
export type XAppIconSizeNick = '16' | '22' | '24' | '32' | '48' | '96';
export type XAppScrollDirectionNick = 'up' | 'down' | 'left' | 'right';
export type XAppStatusIconStateNick = 'native' | 'fallback' | 'no-support';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Abstract base class for D-Bus interfaces on the service side. */
export interface GDBusInterfaceSkeletonProps {
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     * @since 2.30
     * @default G_DBUS_INTERFACE_SKELETON_FLAGS_NONE
     */
    'g-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceSkeletonConstructOnly = never;

/** `GDBusObjectManagerClient` is used to create, monitor and delete object proxies for remote objects exported by a [class@Gio.DBusObjectManagerServer] (or any code implementing the [org.freedesktop.DBu… */
export interface GDBusObjectManagerClientProps {
    /**
     * If this property is not %G_BUS_TYPE_NONE, then #GDBusObjectManagerClient:connection must be %NULL and will be set to the #GDBusConnection obtained by calling g_bus_get() with the value of this proper…
     * @since 2.30
     * @default G_BUS_TYPE_NONE
     */
    'bus-type'?: GBusTypeNick | Gio.BusType;
    /**
     * The #GDBusConnection to use.
     * @since 2.30
     */
    connection?: Gio.DBusConnection;
    /**
     * Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @since 2.30
     * @default G_DBUS_OBJECT_MANAGER_CLIENT_FLAGS_NONE
     */
    flags?: number;
    /**
     * A #GDestroyNotify for the #gpointer user_data in #GDBusObjectManagerClient:get-proxy-type-user-data.
     * @since 2.30
     */
    'get-proxy-type-destroy-notify'?: never;
    /**
     * The #GDBusProxyTypeFunc to use when determining what #GType to use for interface proxies or %NULL.
     * @since 2.30
     */
    'get-proxy-type-func'?: never;
    /**
     * The #gpointer user_data to pass to #GDBusObjectManagerClient:get-proxy-type-func.
     * @since 2.30
     */
    'get-proxy-type-user-data'?: never;
    /**
     * The well-known name or unique name that the manager is for.
     * @since 2.30
     * @default NULL
     */
    name?: string;
    /**
     * The object path the manager is for.
     * @since 2.30
     * @default NULL
     */
    'object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectManagerClientConstructOnly = 'bus-type' | 'connection' | 'flags' | 'get-proxy-type-destroy-notify' | 'get-proxy-type-func' | 'get-proxy-type-user-data' | 'name' | 'object-path';

/** A `GDBusObjectProxy` is an object used to represent a remote object with one or more D-Bus interfaces. */
export interface GDBusObjectProxyProps {
    /**
     * The connection of the proxy.
     * @since 2.30
     */
    'g-connection'?: Gio.DBusConnection;
    /**
     * The object path of the proxy.
     * @since 2.30
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectProxyConstructOnly = 'g-connection' | 'g-object-path';

/** A `GDBusObjectSkeleton` instance is essentially a group of D-Bus interfaces. */
export interface GDBusObjectSkeletonProps {
    /**
     * The object path where the object is exported.
     * @since 2.30
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectSkeletonConstructOnly = never;

/** `GDBusProxy` is a base class used for proxies to access a D-Bus interface on a remote object. */
export interface GDBusProxyProps {
    /**
     * If this property is not %G_BUS_TYPE_NONE, then #GDBusProxy:g-connection must be %NULL and will be set to the #GDBusConnection obtained by calling g_bus_get() with the value of this property.
     * @since 2.26
     * @default G_BUS_TYPE_NONE
     */
    'g-bus-type'?: GBusTypeNick | Gio.BusType;
    /**
     * The #GDBusConnection the proxy is for.
     * @since 2.26
     */
    'g-connection'?: Gio.DBusConnection;
    /**
     * The timeout to use if -1 (specifying default timeout) is passed as @timeout_msec in the g_dbus_proxy_call() and g_dbus_proxy_call_sync() functions.
     * @since 2.26
     * @default -1
     */
    'g-default-timeout'?: number;
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     * @since 2.26
     * @default G_DBUS_PROXY_FLAGS_NONE
     */
    'g-flags'?: number;
    /**
     * Ensure that interactions with this proxy conform to the given interface.
     * @since 2.26
     */
    'g-interface-info'?: Gio.DBusInterfaceInfo | null;
    /**
     * The D-Bus interface name the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-interface-name'?: string;
    /**
     * The well-known or unique name that the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-name'?: string | null;
    /**
     * The object path the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusProxyConstructOnly = 'g-bus-type' | 'g-connection' | 'g-flags' | 'g-interface-name' | 'g-name' | 'g-object-path';

export interface XAppDarkModeManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppDarkModeManagerConstructOnly = never;

export interface XAppFavoritesProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppFavoritesConstructOnly = never;

export interface XAppGpuOffloadHelperProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppGpuOffloadHelperConstructOnly = never;

export interface XAppGtkWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppGtkWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface XAppIconChooserButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** The category selected by default. */
    category?: string;
    /** The preferred size to use when looking up icons. */
    icon?: string;
    /**
     * The size to use when displaying the icon.
     * @default GTK_ICON_SIZE_DND
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppIconChooserButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface XAppIconChooserDialogProps extends GtkDialogProps, GtkBuildableProps {
    /**
     * Whether to allow paths to be searched and selected or only icon names.
     * @default TRUE
     */
    'allow-paths'?: boolean;
    /**
     * The icon to use by default.
     * @default NULL
     */
    'default-icon'?: string;
    /**
     * The preferred size to use when looking up icons.
     * @default XAPP_ICON_SIZE_32
     */
    'icon-size'?: XAppIconSizeNick | XApp.IconSize;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppIconChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface XAppKbdLayoutControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppKbdLayoutControllerConstructOnly = never;

export interface XAppMonitorBlankerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppMonitorBlankerConstructOnly = never;

/** The #XAppObject type is a specialized container of interfaces. */
export interface XAppObjectProps {
    /** The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any. */
    'status-icon-interface'?: XApp.StatusIconInterface | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppObjectConstructOnly = never;

/** The #XAppObjectManagerClient structure contains only private data and should only be accessed using the provided API. */
export interface XAppObjectManagerClientProps extends GDBusObjectManagerClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppObjectManagerClientConstructOnly = GDBusObjectManagerClientConstructOnly;

/** The #XAppObjectProxy structure contains only private data and should only be accessed using the provided API. */
export interface XAppObjectProxyProps extends GDBusObjectProxyProps, XAppObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppObjectProxyConstructOnly = GDBusObjectProxyConstructOnly | XAppObjectConstructOnly;

/** The #XAppObjectSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface XAppObjectSkeletonProps extends GDBusObjectSkeletonProps, XAppObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppObjectSkeletonConstructOnly = GDBusObjectSkeletonConstructOnly | XAppObjectConstructOnly;

export interface XAppPreferencesWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppPreferencesWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface XAppStackSidebarProps extends GtkBinProps, GtkBuildableProps {
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStackSidebarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface XAppStatusIconProps {
    /**
     * The icon size that is preferred by icon monitor/host - this is usually a product of some calculation based on the panel size.
     * @default 0
     */
    'icon-size'?: number;
    /**
     * The name of the icon for sorting purposes.
     * @default NULL
     */
    name?: string;
    /** A #GtkMenu to use when requested by the remote monitor via a left (or primary) click. */
    'primary-menu'?: Gtk.Widget;
    /** A #GtkMenu to use when requested by the remote monitor via a right (or secondary) click. */
    'secondary-menu'?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStatusIconConstructOnly = never;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>. */
export interface XAppStatusIconInterfaceProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
     * @default 0
     */
    'icon-size'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
     * @default NULL
     */
    label?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
     * @default NULL
     */
    metadata?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
     * @default FALSE
     */
    'primary-menu-is-open'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
     * @default FALSE
     */
    'secondary-menu-is-open'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
     * @default NULL
     */
    'tooltip-text'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
     * @default FALSE
     */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStatusIconInterfaceConstructOnly = never;

/** The #XAppStatusIconInterfaceProxy structure contains only private data and should only be accessed using the provided API. */
export interface XAppStatusIconInterfaceProxyProps extends GDBusProxyProps, XAppStatusIconInterfaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStatusIconInterfaceProxyConstructOnly = GDBusProxyConstructOnly | XAppStatusIconInterfaceConstructOnly;

/** The #XAppStatusIconInterfaceSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface XAppStatusIconInterfaceSkeletonProps extends GDBusInterfaceSkeletonProps, XAppStatusIconInterfaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStatusIconInterfaceSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | XAppStatusIconInterfaceConstructOnly;

export interface XAppStatusIconMonitorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStatusIconMonitorConstructOnly = never;

export interface XAppStyleManagerProps {
    /** The widget to be styled. */
    widget?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppStyleManagerConstructOnly = never;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link>. */
export interface XAppSwitcherooControlProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>. */
    gpus?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
     * @default FALSE
     */
    'has-dual-gpu'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
     * @default 0
     */
    'num-gpus'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppSwitcherooControlConstructOnly = never;

/** The #XAppSwitcherooControlProxy structure contains only private data and should only be accessed using the provided API. */
export interface XAppSwitcherooControlProxyProps extends GDBusProxyProps, XAppSwitcherooControlProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppSwitcherooControlProxyConstructOnly = GDBusProxyConstructOnly | XAppSwitcherooControlConstructOnly;

/** The #XAppSwitcherooControlSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface XAppSwitcherooControlSkeletonProps extends GDBusInterfaceSkeletonProps, XAppSwitcherooControlProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XAppSwitcherooControlSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | XAppSwitcherooControlConstructOnly;

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
    XAppGtkWindow: {
        class: XApp.GtkWindow;
        props: XAppGtkWindowProps;
        signals: XApp.GtkWindow.SignalSignatures;
        constructOnly: XAppGtkWindowConstructOnly;
        slotCandidates: {};
    };
    XAppIconChooserButton: {
        class: XApp.IconChooserButton;
        props: XAppIconChooserButtonProps;
        signals: XApp.IconChooserButton.SignalSignatures;
        constructOnly: XAppIconChooserButtonConstructOnly;
        slotCandidates: {};
    };
    XAppIconChooserDialog: {
        class: XApp.IconChooserDialog;
        props: XAppIconChooserDialogProps;
        signals: XApp.IconChooserDialog.SignalSignatures;
        constructOnly: XAppIconChooserDialogConstructOnly;
        slotCandidates: {};
    };
    XAppPreferencesWindow: {
        class: XApp.PreferencesWindow;
        props: XAppPreferencesWindowProps;
        signals: XApp.PreferencesWindow.SignalSignatures;
        constructOnly: XAppPreferencesWindowConstructOnly;
        slotCandidates: {};
    };
    XAppStackSidebar: {
        class: XApp.StackSidebar;
        props: XAppStackSidebarProps;
        signals: XApp.StackSidebar.SignalSignatures;
        constructOnly: XAppStackSidebarConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
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
