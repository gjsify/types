/**
 * The GIR-derived widget VOCABULARY for UDisks-2.0.
 *
 * GENERATED — do not edit. Provenance: UDisks-2.0 — library 2.11.2 — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
 *
 * 61 instantiable GTypes (of which 0 concrete widgets), 91 declarations (1 inlined from a namespace whose vocabulary does not emit them), 0 enum nick unions, 0 slot candidates.
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
import type UDisks from './udisks-2.0.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GDBusInterfaceConstructOnly, GDBusInterfaceProps, GDBusObjectConstructOnly, GDBusObjectManagerClientConstructOnly, GDBusObjectManagerClientProps, GDBusObjectManagerConstructOnly, GDBusObjectManagerProps, GDBusObjectProps, GDBusObjectProxyConstructOnly, GDBusObjectProxyProps, GDBusObjectSkeletonConstructOnly, GDBusObjectSkeletonProps, GDBusProxyConstructOnly, GDBusProxyProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
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
export interface GDBusInterfaceSkeletonProps extends GObjectProps, GDBusInterfaceProps {
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     * @since 2.30
     * @default G_DBUS_INTERFACE_SKELETON_FLAGS_NONE
     */
    'g-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceSkeletonConstructOnly = GObjectConstructOnly | GDBusInterfaceConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>. */
export interface UDisksBlockProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Configuration">"Configuration"</link>. */
    configuration?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice">"CryptoBackingDevice"</link>.
     * @default NULL
     */
    'crypto-backing-device'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Device">"Device"</link>.
     * @default NULL
     */
    device?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber">"DeviceNumber"</link>.
     * @default 0
     */
    'device-number'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Drive">"Drive"</link>.
     * @default NULL
     */
    drive?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto">"HintAuto"</link>.
     * @default FALSE
     */
    'hint-auto'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
     * @default NULL
     */
    'hint-icon-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
     * @default FALSE
     */
    'hint-ignore'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
     * @default NULL
     */
    'hint-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
     * @default FALSE
     */
    'hint-partitionable'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
     * @default NULL
     */
    'hint-symbolic-icon-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
     * @default FALSE
     */
    'hint-system'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Id">"Id"</link>.
     * @default NULL
     */
    id?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel">"IdLabel"</link>.
     * @default NULL
     */
    'id-label'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
     * @default NULL
     */
    'id-type'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
     * @default NULL
     */
    'id-usage'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
     * @default NULL
     */
    'id-uuid'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
     * @default NULL
     */
    'id-version'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaid">"MDRaid"</link>.
     * @default NULL
     */
    mdraid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember">"MDRaidMember"</link>.
     * @default NULL
     */
    'mdraid-member'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
     * @default NULL
     */
    'preferred-device'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
     * @default FALSE
     */
    'read-only'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Size">"Size"</link>.
     * @default 0
     */
    size?: bigint | number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Symlinks">"Symlinks"</link>. */
    symlinks?: string[] | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.UserspaceMountOptions">"UserspaceMountOptions"</link>. */
    'userspace-mount-options'?: string[] | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page">org.freedesktop.UDisks2.Block.LVM2</link>. */
export interface UDisksBlockLVM2Props extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block-LVM2.LogicalVolume">"LogicalVolume"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'logical-volume'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockLVM2ConstructOnly = GObjectConstructOnly;

/** The #UDisksBlockLVM2Proxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksBlockLVM2ProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksBlockLVM2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockLVM2ProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksBlockLVM2ConstructOnly;

/** The #UDisksBlockLVM2Skeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksBlockLVM2SkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksBlockLVM2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockLVM2SkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksBlockLVM2ConstructOnly;

/** The #UDisksBlockProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksBlockProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksBlockProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksBlockConstructOnly;

/** The #UDisksBlockSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksBlockSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksBlockProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksBlockSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksBlockConstructOnly;

/** #UDisksClient is used for accessing the UDisks service from a client program. */
export interface UDisksClientProps extends GObjectProps, GAsyncInitableProps, GInitableProps {
    /**
     * The #GDBusConnection used to create the #UDisksClient:object-manager, or %NULL if one wasn't specified during construction of the #UDisksClient (in which case a system bus connection is used).
     * @since 2.9.0
     */
    'bus-connection'?: Gio.DBusConnection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksClientConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly | 'bus-connection';

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>. */
export interface UDisksDriveProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
     * @default FALSE
     */
    'can-power-off'?: boolean;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Configuration">"Configuration"</link>. */
    configuration?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus">"ConnectionBus"</link>.
     * @default NULL
     */
    'connection-bus'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Ejectable">"Ejectable"</link>.
     * @default FALSE
     */
    ejectable?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Id">"Id"</link>.
     * @default NULL
     */
    id?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Media">"Media"</link>.
     * @default NULL
     */
    media?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable">"MediaAvailable"</link>.
     * @default FALSE
     */
    'media-available'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
     * @default FALSE
     */
    'media-change-detected'?: boolean;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>. */
    'media-compatibility'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
     * @default FALSE
     */
    'media-removable'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Model">"Model"</link>.
     * @default NULL
     */
    model?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Optical">"Optical"</link>.
     * @default FALSE
     */
    optical?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank">"OpticalBlank"</link>.
     * @default FALSE
     */
    'optical-blank'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
     * @default 0
     */
    'optical-num-audio-tracks'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
     * @default 0
     */
    'optical-num-data-tracks'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
     * @default 0
     */
    'optical-num-sessions'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
     * @default 0
     */
    'optical-num-tracks'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Removable">"Removable"</link>.
     * @default FALSE
     */
    removable?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Revision">"Revision"</link>.
     * @default NULL
     */
    revision?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate">"RotationRate"</link>.
     * @default 0
     */
    'rotation-rate'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Seat">"Seat"</link>.
     * @default NULL
     */
    seat?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Serial">"Serial"</link>.
     * @default NULL
     */
    serial?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId">"SiblingId"</link>.
     * @default NULL
     */
    'sibling-id'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Size">"Size"</link>.
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey">"SortKey"</link>.
     * @default NULL
     */
    'sort-key'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
     * @default 0
     */
    'time-detected'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
     * @default 0
     */
    'time-media-detected'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Vendor">"Vendor"</link>.
     * @default NULL
     */
    vendor?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.WWN">"WWN"</link>.
     * @default NULL
     */
    wwn?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>. */
export interface UDisksDriveAtaProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
     * @default FALSE
     */
    'aam-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
     * @default FALSE
     */
    'aam-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
     * @default 0
     */
    'aam-vendor-recommended-value'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
     * @default FALSE
     */
    'apm-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
     * @default FALSE
     */
    'apm-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
     * @default FALSE
     */
    'pm-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
     * @default FALSE
     */
    'pm-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
     * @default FALSE
     */
    'read-lookahead-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
     * @default FALSE
     */
    'read-lookahead-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
     * @default 0
     */
    'security-enhanced-erase-unit-minutes'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
     * @default 0
     */
    'security-erase-unit-minutes'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
     * @default FALSE
     */
    'security-frozen'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
     * @default FALSE
     */
    'smart-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
     * @default FALSE
     */
    'smart-failing'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
     * @default 0
     */
    'smart-num-attributes-failed-in-the-past'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
     * @default 0
     */
    'smart-num-attributes-failing'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
     * @default 0
     */
    'smart-num-bad-sectors'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
     * @default 0
     */
    'smart-power-on-seconds'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * @default 0
     */
    'smart-selftest-percent-remaining'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * @default NULL
     */
    'smart-selftest-status'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
     * @default FALSE
     */
    'smart-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
     * @default 0.000000
     */
    'smart-temperature'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
     * @default 0
     */
    'smart-updated'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
     * @default FALSE
     */
    'write-cache-enabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
     * @default FALSE
     */
    'write-cache-supported'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveAtaConstructOnly = GObjectConstructOnly;

/** The #UDisksDriveAtaProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveAtaProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksDriveAtaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveAtaProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksDriveAtaConstructOnly;

/** The #UDisksDriveAtaSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveAtaSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksDriveAtaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveAtaSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksDriveAtaConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-LSM.top_of_page">org.freedesktop.UDisks2.Drive.LSM</link>. */
export interface UDisksDriveLSMProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.IsOK">"IsOK"</link>.
     * @since 2.3.0
     * @default FALSE
     */
    'is-ok'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.IsRaidDegraded">"IsRaidDegraded"</link>.
     * @since 2.3.0
     * @default FALSE
     */
    'is-raid-degraded'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.IsRaidError">"IsRaidError"</link>.
     * @since 2.3.0
     * @default FALSE
     */
    'is-raid-error'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.IsRaidReconstructing">"IsRaidReconstructing"</link>.
     * @since 2.3.0
     * @default FALSE
     */
    'is-raid-reconstructing'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.IsRaidVerifying">"IsRaidVerifying"</link>.
     * @since 2.3.0
     * @default FALSE
     */
    'is-raid-verifying'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.MinIoSize">"MinIoSize"</link>.
     * @since 2.3.0
     * @default 0
     */
    'min-io-size'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.OptIoSize">"OptIoSize"</link>.
     * @since 2.3.0
     * @default 0
     */
    'opt-io-size'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.RaidDiskCount">"RaidDiskCount"</link>.
     * @since 2.3.0
     * @default 0
     */
    'raid-disk-count'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.RaidType">"RaidType"</link>.
     * @since 2.3.0
     * @default NULL
     */
    'raid-type'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-LSM.StatusInfo">"StatusInfo"</link>.
     * @since 2.3.0
     * @default NULL
     */
    'status-info'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLSMConstructOnly = GObjectConstructOnly;

/** The #UDisksDriveLSMProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveLSMProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksDriveLSMProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLSMProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksDriveLSMConstructOnly;

/** The #UDisksDriveLSMSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveLSMSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksDriveLSMProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLSMSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksDriveLSMConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-LsmLocal.top_of_page">org.freedesktop.UDisks2.Drive.LsmLocal</link>. */
export interface UDisksDriveLsmLocalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLsmLocalConstructOnly = GObjectConstructOnly;

/** The #UDisksDriveLsmLocalProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveLsmLocalProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksDriveLsmLocalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLsmLocalProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksDriveLsmLocalConstructOnly;

/** The #UDisksDriveLsmLocalSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveLsmLocalSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksDriveLsmLocalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveLsmLocalSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksDriveLsmLocalConstructOnly;

/** The #UDisksDriveProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksDriveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksDriveConstructOnly;

/** The #UDisksDriveSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksDriveSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksDriveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksDriveSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksDriveConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>. */
export interface UDisksEncryptedProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>. */
    'child-configuration'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.CleartextDevice">"CleartextDevice"</link>.
     * @default NULL
     */
    'cleartext-device'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.HintEncryptionType">"HintEncryptionType"</link>.
     * @default NULL
     */
    'hint-encryption-type'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.MetadataSize">"MetadataSize"</link>.
     * @default 0
     */
    'metadata-size'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksEncryptedConstructOnly = GObjectConstructOnly;

/** The #UDisksEncryptedProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksEncryptedProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksEncryptedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksEncryptedProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksEncryptedConstructOnly;

/** The #UDisksEncryptedSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksEncryptedSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksEncryptedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksEncryptedSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksEncryptedConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>. */
export interface UDisksFilesystemProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>. */
    'mount-points'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.Size">"Size"</link>.
     * @default 0
     */
    size?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page">org.freedesktop.UDisks2.Filesystem.BTRFS</link>. */
export interface UDisksFilesystemBTRFSProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.label">"label"</link>.
     * @since 2.1.3
     * @default NULL
     */
    label?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.num_devices">"num_devices"</link>.
     * @since 2.1.3
     * @default 0
     */
    'num-devices'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.used">"used"</link>.
     * @since 2.1.3
     * @default 0
     */
    used?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.uuid">"uuid"</link>.
     * @since 2.1.3
     * @default NULL
     */
    uuid?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemBTRFSConstructOnly = GObjectConstructOnly;

/** The #UDisksFilesystemBTRFSProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksFilesystemBTRFSProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksFilesystemBTRFSProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemBTRFSProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksFilesystemBTRFSConstructOnly;

/** The #UDisksFilesystemBTRFSSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksFilesystemBTRFSSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksFilesystemBTRFSProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemBTRFSSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksFilesystemBTRFSConstructOnly;

/** The #UDisksFilesystemProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksFilesystemProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksFilesystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksFilesystemConstructOnly;

/** The #UDisksFilesystemSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksFilesystemSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksFilesystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksFilesystemSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksFilesystemConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-ISCSI-Session.top_of_page">org.freedesktop.UDisks2.ISCSI.Session</link>. */
export interface UDisksISCSISessionProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.abort_timeout">"abort_timeout"</link>.
     * @default 0
     */
    'abort-timeout'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.address">"address"</link>.
     * @default NULL
     */
    address?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.lu_reset_timeout">"lu_reset_timeout"</link>.
     * @default 0
     */
    'lu-reset-timeout'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.persistent_address">"persistent_address"</link>.
     * @default NULL
     */
    'persistent-address'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.persistent_port">"persistent_port"</link>.
     * @default 0
     */
    'persistent-port'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.port">"port"</link>.
     * @default 0
     */
    port?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.recovery_timeout">"recovery_timeout"</link>.
     * @default 0
     */
    'recovery-timeout'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.target_name">"target_name"</link>.
     * @default NULL
     */
    'target-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.tgt_reset_timeout">"tgt_reset_timeout"</link>.
     * @default 0
     */
    'tgt-reset-timeout'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-ISCSI-Session.tpgt">"tpgt"</link>.
     * @default 0
     */
    tpgt?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksISCSISessionConstructOnly = GObjectConstructOnly;

/** The #UDisksISCSISessionProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksISCSISessionProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksISCSISessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksISCSISessionProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksISCSISessionConstructOnly;

/** The #UDisksISCSISessionSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksISCSISessionSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksISCSISessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksISCSISessionSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksISCSISessionConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>. */
export interface UDisksJobProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Bytes">"Bytes"</link>.
     * @default 0
     */
    bytes?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Cancelable">"Cancelable"</link>.
     * @default FALSE
     */
    cancelable?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime">"ExpectedEndTime"</link>.
     * @default 0
     */
    'expected-end-time'?: bigint | number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Objects">"Objects"</link>. */
    objects?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">"Operation"</link>.
     * @default NULL
     */
    operation?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Progress">"Progress"</link>.
     * @default 0.000000
     */
    progress?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid">"ProgressValid"</link>.
     * @default FALSE
     */
    'progress-valid'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Rate">"Rate"</link>.
     * @default 0
     */
    rate?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime">"StartTime"</link>.
     * @default 0
     */
    'start-time'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
     * @default 0
     */
    'started-by-uid'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksJobConstructOnly = GObjectConstructOnly;

/** The #UDisksJobProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksJobProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksJobProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksJobProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksJobConstructOnly;

/** The #UDisksJobSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksJobSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksJobProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksJobSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksJobConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page">org.freedesktop.UDisks2.LogicalVolume</link>. */
export interface UDisksLogicalVolumeProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Active">"Active"</link>.
     * @since 2.0.0
     * @default FALSE
     */
    active?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.BlockDevice">"BlockDevice"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'block-device'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ChildConfiguration">"ChildConfiguration"</link>.
     * @since 2.0.0
     */
    'child-configuration'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.DataAllocatedRatio">"DataAllocatedRatio"</link>.
     * @since 2.0.0
     * @default 0.000000
     */
    'data-allocated-ratio'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Layout">"Layout"</link>.
     * @since 2.0.0
     * @default NULL
     */
    layout?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.MetadataAllocatedRatio">"MetadataAllocatedRatio"</link>.
     * @since 2.0.0
     * @default 0.000000
     */
    'metadata-allocated-ratio'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Name">"Name"</link>.
     * @since 2.0.0
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Origin">"Origin"</link>.
     * @since 2.0.0
     * @default NULL
     */
    origin?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Size">"Size"</link>.
     * @since 2.0.0
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Structure">"Structure"</link>.
     * @since 2.0.0
     */
    structure?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.SyncRatio">"SyncRatio"</link>.
     * @since 2.0.0
     * @default 0.000000
     */
    'sync-ratio'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ThinPool">"ThinPool"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'thin-pool'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Type">"Type"</link>.
     * @since 2.0.0
     * @default NULL
     */
    type?: string;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.UUID">"UUID"</link>.
     * @since 2.0.0
     * @default NULL
     */
    uuid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.VolumeGroup">"VolumeGroup"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'volume-group'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLogicalVolumeConstructOnly = GObjectConstructOnly;

/** The #UDisksLogicalVolumeProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksLogicalVolumeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksLogicalVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLogicalVolumeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksLogicalVolumeConstructOnly;

/** The #UDisksLogicalVolumeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksLogicalVolumeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksLogicalVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLogicalVolumeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksLogicalVolumeConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>. */
export interface UDisksLoopProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.Autoclear">"Autoclear"</link>.
     * @default FALSE
     */
    autoclear?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile">"BackingFile"</link>.
     * @default NULL
     */
    'backing-file'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
     * @default 0
     */
    'setup-by-uid'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLoopConstructOnly = GObjectConstructOnly;

/** The #UDisksLoopProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksLoopProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksLoopProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLoopProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksLoopConstructOnly;

/** The #UDisksLoopSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksLoopSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksLoopProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksLoopSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksLoopConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>. */
export interface UDisksMDRaidProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
     * @since 2.0.0
     */
    'active-devices'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'bitmap-location'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
     * @since 2.0.0
     */
    'child-configuration'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
     * @since 2.0.0
     * @default 0
     */
    'chunk-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ConsistencyPolicy">"ConsistencyPolicy"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'consistency-policy'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Degraded">"Degraded"</link>.
     * @since 2.0.0
     * @default 0
     */
    degraded?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Level">"Level"</link>.
     * @since 2.0.0
     * @default NULL
     */
    level?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Name">"Name"</link>.
     * @since 2.0.0
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices">"NumDevices"</link>.
     * @since 2.0.0
     * @default 0
     */
    'num-devices'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Running">"Running"</link>.
     * @since 2.0.0
     * @default FALSE
     */
    running?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Size">"Size"</link>.
     * @since 2.0.0
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction">"SyncAction"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'sync-action'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
     * @since 2.0.0
     * @default 0.000000
     */
    'sync-completed'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
     * @since 2.0.0
     * @default 0
     */
    'sync-rate'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
     * @since 2.0.0
     * @default 0
     */
    'sync-remaining-time'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.UUID">"UUID"</link>.
     * @since 2.0.0
     * @default NULL
     */
    uuid?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksMDRaidConstructOnly = GObjectConstructOnly;

/** The #UDisksMDRaidProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksMDRaidProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksMDRaidProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksMDRaidProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksMDRaidConstructOnly;

/** The #UDisksMDRaidSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksMDRaidSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksMDRaidProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksMDRaidSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksMDRaidConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>. */
export interface UDisksManagerProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.DefaultEncryptionType">"DefaultEncryptionType"</link>.
     * @since 2.8.3
     * @default NULL
     */
    'default-encryption-type'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedEncryptionTypes">"SupportedEncryptionTypes"</link>.
     * @since 2.8.3
     */
    'supported-encryption-types'?: string[] | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>. */
    'supported-filesystems'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.Version">"Version"</link>.
     * @default NULL
     */
    version?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page">org.freedesktop.UDisks2.Manager.BTRFS</link>. */
export interface UDisksManagerBTRFSProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerBTRFSConstructOnly = GObjectConstructOnly;

/** The #UDisksManagerBTRFSProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerBTRFSProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksManagerBTRFSProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerBTRFSProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksManagerBTRFSConstructOnly;

/** The #UDisksManagerBTRFSSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerBTRFSSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksManagerBTRFSProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerBTRFSSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksManagerBTRFSConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-ISCSI-Initiator.top_of_page">org.freedesktop.UDisks2.Manager.ISCSI.Initiator</link>. */
export interface UDisksManagerISCSIInitiatorProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-ISCSI-Initiator.SessionsSupported">"SessionsSupported"</link>.
     * @since 2.0.1
     * @default FALSE
     */
    'sessions-supported'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerISCSIInitiatorConstructOnly = GObjectConstructOnly;

/** The #UDisksManagerISCSIInitiatorProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerISCSIInitiatorProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksManagerISCSIInitiatorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerISCSIInitiatorProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksManagerISCSIInitiatorConstructOnly;

/** The #UDisksManagerISCSIInitiatorSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerISCSIInitiatorSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksManagerISCSIInitiatorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerISCSIInitiatorSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksManagerISCSIInitiatorConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page">org.freedesktop.UDisks2.Manager.LVM2</link>. */
export interface UDisksManagerLVM2Props extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerLVM2ConstructOnly = GObjectConstructOnly;

/** The #UDisksManagerLVM2Proxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerLVM2ProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksManagerLVM2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerLVM2ProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksManagerLVM2ConstructOnly;

/** The #UDisksManagerLVM2Skeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerLVM2SkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksManagerLVM2Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerLVM2SkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksManagerLVM2ConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page">org.freedesktop.UDisks2.Manager.NVMe</link>. */
export interface UDisksManagerNVMeProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostID">"HostID"</link>.
     * @default NULL
     */
    'host-id'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostNQN">"HostNQN"</link>.
     * @default NULL
     */
    'host-nqn'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerNVMeConstructOnly = GObjectConstructOnly;

/** The #UDisksManagerNVMeProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerNVMeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksManagerNVMeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerNVMeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksManagerNVMeConstructOnly;

/** The #UDisksManagerNVMeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerNVMeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksManagerNVMeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerNVMeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksManagerNVMeConstructOnly;

/** The #UDisksManagerProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksManagerConstructOnly;

/** The #UDisksManagerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksManagerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksManagerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksManagerConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page">org.freedesktop.UDisks2.NVMe.Controller</link>. */
export interface UDisksNVMeControllerProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.ControllerID">"ControllerID"</link>.
     * @default 0
     */
    'controller-id'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.FGUID">"FGUID"</link>.
     * @default NULL
     */
    fguid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.NVMeRevision">"NVMeRevision"</link>.
     * @default NULL
     */
    'nvme-revision'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizePercentRemaining">"SanitizePercentRemaining"</link>.
     * @since 2.10.0
     * @default 0
     */
    'sanitize-percent-remaining'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStatus">"SanitizeStatus"</link>.
     * @default NULL
     */
    'sanitize-status'?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartCriticalWarning">"SmartCriticalWarning"</link>. */
    'smart-critical-warning'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartPowerOnHours">"SmartPowerOnHours"</link>.
     * @default 0
     */
    'smart-power-on-hours'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * @since 2.10.0
     * @default 0
     */
    'smart-selftest-percent-remaining'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * @default NULL
     */
    'smart-selftest-status'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartTemperature">"SmartTemperature"</link>.
     * @default 0
     */
    'smart-temperature'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdated">"SmartUpdated"</link>.
     * @default 0
     */
    'smart-updated'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.State">"State"</link>.
     * @default NULL
     */
    state?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SubsystemNQN">"SubsystemNQN"</link>.
     * @default NULL
     */
    'subsystem-nqn'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.UnallocatedCapacity">"UnallocatedCapacity"</link>.
     * @default 0
     */
    'unallocated-capacity'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeControllerConstructOnly = GObjectConstructOnly;

/** The #UDisksNVMeControllerProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeControllerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksNVMeControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeControllerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksNVMeControllerConstructOnly;

/** The #UDisksNVMeControllerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeControllerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksNVMeControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeControllerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksNVMeControllerConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page">org.freedesktop.UDisks2.NVMe.Fabrics</link>. */
export interface UDisksNVMeFabricsProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostID">"HostID"</link>.
     * @default NULL
     */
    'host-id'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostNQN">"HostNQN"</link>.
     * @default NULL
     */
    'host-nqn'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.Transport">"Transport"</link>.
     * @default NULL
     */
    transport?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.TransportAddress">"TransportAddress"</link>.
     * @default NULL
     */
    'transport-address'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeFabricsConstructOnly = GObjectConstructOnly;

/** The #UDisksNVMeFabricsProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeFabricsProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksNVMeFabricsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeFabricsProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksNVMeFabricsConstructOnly;

/** The #UDisksNVMeFabricsSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeFabricsSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksNVMeFabricsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeFabricsSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksNVMeFabricsConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page">org.freedesktop.UDisks2.NVMe.Namespace</link>. */
export interface UDisksNVMeNamespaceProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.EUI64">"EUI64"</link>.
     * @default NULL
     */
    eui64?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormatPercentRemaining">"FormatPercentRemaining"</link>.
     * @since 2.10.0
     * @default 0
     */
    'format-percent-remaining'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormattedLBASize">"FormattedLBASize"</link>. */
    'formatted-lbasize'?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.LBAFormats">"LBAFormats"</link>. */
    lbaformats?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceCapacity">"NamespaceCapacity"</link>.
     * @default 0
     */
    'namespace-capacity'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceSize">"NamespaceSize"</link>.
     * @default 0
     */
    'namespace-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceUtilization">"NamespaceUtilization"</link>.
     * @default 0
     */
    'namespace-utilization'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NGUID">"NGUID"</link>.
     * @default NULL
     */
    nguid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NSID">"NSID"</link>.
     * @default 0
     */
    nsid?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.UUID">"UUID"</link>.
     * @default NULL
     */
    uuid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.WWN">"WWN"</link>.
     * @default NULL
     */
    wwn?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeNamespaceConstructOnly = GObjectConstructOnly;

/** The #UDisksNVMeNamespaceProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeNamespaceProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksNVMeNamespaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeNamespaceProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksNVMeNamespaceConstructOnly;

/** The #UDisksNVMeNamespaceSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksNVMeNamespaceSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksNVMeNamespaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksNVMeNamespaceSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksNVMeNamespaceConstructOnly;

/** The #UDisksObject type is a specialized container of interfaces. */
export interface UDisksObjectProps extends GDBusObjectProps {
    /** The #UDisksBlock instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>, if any. */
    block?: UDisks.Block | null;
    /**
     * The #UDisksBlockLVM2 instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page">org.freedesktop.UDisks2.Block.LVM2</link>, if any.
     * @since 2.0.0
     */
    'block-lvm2'?: UDisks.BlockLVM2 | null;
    /** The #UDisksDrive instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>, if any. */
    drive?: UDisks.Drive | null;
    /** The #UDisksDriveAta instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>, if any. */
    'drive-ata'?: UDisks.DriveAta | null;
    /**
     * The #UDisksDriveLSM instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-LSM.top_of_page">org.freedesktop.UDisks2.Drive.LSM</link>, if any.
     * @since 2.3.0
     */
    'drive-lsm'?: UDisks.DriveLSM | null;
    /** The #UDisksDriveLsmLocal instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-LsmLocal.top_of_page">org.freedesktop.UDisks2.Drive.LsmLocal</link>… */
    'drive-lsm-local'?: UDisks.DriveLsmLocal | null;
    /** The #UDisksEncrypted instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>, if any. */
    encrypted?: UDisks.Encrypted | null;
    /** The #UDisksFilesystem instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>, if any. */
    filesystem?: UDisks.Filesystem | null;
    /**
     * The #UDisksFilesystemBTRFS instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page">org.freedesktop.UDisks2.Filesystem.BTRFS<…
     * @since 2.1.3
     */
    'filesystem-btrfs'?: UDisks.FilesystemBTRFS | null;
    /** The #UDisksISCSISession instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-ISCSI-Session.top_of_page">org.freedesktop.UDisks2.ISCSI.Session</link>, i… */
    'iscsi-session'?: UDisks.ISCSISession | null;
    /** The #UDisksJob instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>, if any. */
    job?: UDisks.Job | null;
    /**
     * The #UDisksLogicalVolume instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page">org.freedesktop.UDisks2.LogicalVolume</link>, …
     * @since 2.0.0
     */
    'logical-volume'?: UDisks.LogicalVolume | null;
    /** The #UDisksLoop instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>, if any. */
    loop?: UDisks.Loop | null;
    /** The #UDisksManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>, if any. */
    manager?: UDisks.Manager | null;
    /**
     * The #UDisksManagerBTRFS instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page">org.freedesktop.UDisks2.Manager.BTRFS</link>, i…
     * @since 2.1.3
     */
    'manager-btrfs'?: UDisks.ManagerBTRFS | null;
    /**
     * The #UDisksManagerISCSIInitiator instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-ISCSI-Initiator.top_of_page">org.freedesktop.UDisks2.Mana…
     * @since 2.0.1
     */
    'manager-iscsi-initiator'?: UDisks.ManagerISCSIInitiator | null;
    /**
     * The #UDisksManagerLVM2 instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page">org.freedesktop.UDisks2.Manager.LVM2</link>, if a…
     * @since 2.0.0
     */
    'manager-lvm2'?: UDisks.ManagerLVM2 | null;
    /** The #UDisksManagerNVMe instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page">org.freedesktop.UDisks2.Manager.NVMe</link>, if a… */
    'manager-nvme'?: UDisks.ManagerNVMe | null;
    /**
     * The #UDisksMDRaid instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>, if any.
     * @since 2.0.0
     */
    mdraid?: UDisks.MDRaid | null;
    /** The #UDisksNVMeController instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page">org.freedesktop.UDisks2.NVMe.Controller</li… */
    'nvme-controller'?: UDisks.NVMeController | null;
    /** The #UDisksNVMeFabrics instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page">org.freedesktop.UDisks2.NVMe.Fabrics</link>, if a… */
    'nvme-fabrics'?: UDisks.NVMeFabrics | null;
    /** The #UDisksNVMeNamespace instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page">org.freedesktop.UDisks2.NVMe.Namespace</link>… */
    'nvme-namespace'?: UDisks.NVMeNamespace | null;
    /** The #UDisksPartition instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>, if any. */
    partition?: UDisks.Partition | null;
    /** The #UDisksPartitionTable instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link… */
    'partition-table'?: UDisks.PartitionTable | null;
    /**
     * The #UDisksPhysicalVolume instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page">org.freedesktop.UDisks2.PhysicalVolume</link…
     * @since 2.0.0
     */
    'physical-volume'?: UDisks.PhysicalVolume | null;
    /** The #UDisksSwapspace instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>, if any. */
    swapspace?: UDisks.Swapspace | null;
    /**
     * The #UDisksVDOVolume instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page">org.freedesktop.UDisks2.VDOVolume</link>, if any.
     * @since 2.9.0
     */
    'vdo-volume'?: UDisks.VDOVolume | null;
    /**
     * The #UDisksVolumeGroup instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page">org.freedesktop.UDisks2.VolumeGroup</link>, if any.
     * @since 2.0.0
     */
    'volume-group'?: UDisks.VolumeGroup | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksObjectConstructOnly = GDBusObjectConstructOnly;

/** Detailed information about the D-Bus interfaces (such as #UDisksBlock and #UDisksDrive) on a #UDisksObject that is suitable to display in an user interface. */
export interface UDisksObjectInfoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksObjectInfoConstructOnly = GObjectConstructOnly;

/** The #UDisksObjectManagerClient structure contains only private data and should only be accessed using the provided API. */
export interface UDisksObjectManagerClientProps extends GDBusObjectManagerClientProps, GAsyncInitableProps, GDBusObjectManagerProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksObjectManagerClientConstructOnly = GDBusObjectManagerClientConstructOnly | GAsyncInitableConstructOnly | GDBusObjectManagerConstructOnly | GInitableConstructOnly;

/** The #UDisksObjectProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksObjectProxyProps extends GDBusObjectProxyProps, GDBusObjectProps, UDisksObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksObjectProxyConstructOnly = GDBusObjectProxyConstructOnly | GDBusObjectConstructOnly | UDisksObjectConstructOnly;

/** The #UDisksObjectSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksObjectSkeletonProps extends GDBusObjectSkeletonProps, GDBusObjectProps, UDisksObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksObjectSkeletonConstructOnly = GDBusObjectSkeletonConstructOnly | GDBusObjectConstructOnly | UDisksObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>. */
export interface UDisksPartitionProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Flags">"Flags"</link>.
     * @default 0
     */
    flags?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained">"IsContained"</link>.
     * @default FALSE
     */
    'is-contained'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
     * @default FALSE
     */
    'is-container'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Name">"Name"</link>.
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Number">"Number"</link>.
     * @default 0
     */
    number?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Offset">"Offset"</link>.
     * @default 0
     */
    offset?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Size">"Size"</link>.
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Table">"Table"</link>.
     * @default NULL
     */
    table?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Type">"Type"</link>.
     * @default NULL
     */
    type?: string;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.UUID">"UUID"</link>.
     * @default NULL
     */
    uuid?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionConstructOnly = GObjectConstructOnly;

/** The #UDisksPartitionProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPartitionProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksPartitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksPartitionConstructOnly;

/** The #UDisksPartitionSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPartitionSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksPartitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksPartitionConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>. */
export interface UDisksPartitionTableProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Partitions">"Partitions"</link>. */
    partitions?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Type">"Type"</link>.
     * @default NULL
     */
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionTableConstructOnly = GObjectConstructOnly;

/** The #UDisksPartitionTableProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPartitionTableProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksPartitionTableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionTableProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksPartitionTableConstructOnly;

/** The #UDisksPartitionTableSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPartitionTableSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksPartitionTableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPartitionTableSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksPartitionTableConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page">org.freedesktop.UDisks2.PhysicalVolume</link>. */
export interface UDisksPhysicalVolumeProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.FreeSize">"FreeSize"</link>.
     * @since 2.0.0
     * @default 0
     */
    'free-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.Size">"Size"</link>.
     * @since 2.0.0
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.VolumeGroup">"VolumeGroup"</link>.
     * @since 2.0.0
     * @default NULL
     */
    'volume-group'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPhysicalVolumeConstructOnly = GObjectConstructOnly;

/** The #UDisksPhysicalVolumeProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPhysicalVolumeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksPhysicalVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPhysicalVolumeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksPhysicalVolumeConstructOnly;

/** The #UDisksPhysicalVolumeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksPhysicalVolumeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksPhysicalVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksPhysicalVolumeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksPhysicalVolumeConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>. */
export interface UDisksSwapspaceProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Swapspace.Active">"Active"</link>.
     * @default FALSE
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksSwapspaceConstructOnly = GObjectConstructOnly;

/** The #UDisksSwapspaceProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksSwapspaceProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksSwapspaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksSwapspaceProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksSwapspaceConstructOnly;

/** The #UDisksSwapspaceSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksSwapspaceSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksSwapspaceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksSwapspaceSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksSwapspaceConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page">org.freedesktop.UDisks2.VDOVolume</link>. */
export interface UDisksVDOVolumeProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.Compression">"Compression"</link>.
     * @since 2.9.0
     * @default FALSE
     */
    compression?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.CompressionState">"CompressionState"</link>.
     * @since 2.9.0
     * @default NULL
     */
    'compression-state'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.Deduplication">"Deduplication"</link>.
     * @since 2.9.0
     * @default FALSE
     */
    deduplication?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.IndexState">"IndexState"</link>.
     * @since 2.9.0
     * @default NULL
     */
    'index-state'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.OperatingMode">"OperatingMode"</link>.
     * @since 2.9.0
     * @default NULL
     */
    'operating-mode'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.UsedSize">"UsedSize"</link>.
     * @since 2.9.0
     * @default 0
     */
    'used-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.VDOPool">"VDOPool"</link>.
     * @since 2.9.0
     * @default NULL
     */
    'vdo-pool'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVDOVolumeConstructOnly = GObjectConstructOnly;

/** The #UDisksVDOVolumeProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksVDOVolumeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksVDOVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVDOVolumeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksVDOVolumeConstructOnly;

/** The #UDisksVDOVolumeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksVDOVolumeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksVDOVolumeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVDOVolumeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksVDOVolumeConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page">org.freedesktop.UDisks2.VolumeGroup</link>. */
export interface UDisksVolumeGroupProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.ExtentSize">"ExtentSize"</link>.
     * @since 2.0.0
     * @default 0
     */
    'extent-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.FreeSize">"FreeSize"</link>.
     * @since 2.0.0
     * @default 0
     */
    'free-size'?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.MissingPhysicalVolumes">"MissingPhysicalVolumes"</link>.
     * @since 2.0.0
     */
    'missing-physical-volumes'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.Name">"Name"</link>.
     * @since 2.0.0
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.NeedsPolling">"NeedsPolling"</link>.
     * @since 2.0.0
     * @default FALSE
     */
    'needs-polling'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.Size">"Size"</link>.
     * @since 2.0.0
     * @default 0
     */
    size?: bigint | number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.UUID">"UUID"</link>.
     * @since 2.0.0
     * @default NULL
     */
    uuid?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVolumeGroupConstructOnly = GObjectConstructOnly;

/** The #UDisksVolumeGroupProxy structure contains only private data and should only be accessed using the provided API. */
export interface UDisksVolumeGroupProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, UDisksVolumeGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVolumeGroupProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | UDisksVolumeGroupConstructOnly;

/** The #UDisksVolumeGroupSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface UDisksVolumeGroupSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, UDisksVolumeGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type UDisksVolumeGroupSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | UDisksVolumeGroupConstructOnly;

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
