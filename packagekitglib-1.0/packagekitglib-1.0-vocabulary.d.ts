/**
 * The GIR-derived widget VOCABULARY for PackageKitGlib-1.0.
 *
 * GENERATED — do not edit. Provenance: PackageKitGlib-1.0 — library 1.3.6
 *
 * 24 instantiable GTypes (of which 0 concrete widgets), 24 declarations, 19 enum nick unions, 0 slot candidates.
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

import type PackageKitGlib from './packagekitglib-1.0.js';
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

export type PkAuthorizeEnumNick = 'unknown' | 'yes' | 'no' | 'interactive' | 'last';
export type PkDistroUpgradeEnumNick = 'unknown' | 'stable' | 'unstable' | 'last';
export type PkErrorEnumNick = 'unknown' | 'oom' | 'no-network' | 'not-supported' | 'internal-error' | 'gpg-failure' | 'package-id-invalid' | 'package-not-installed' | 'package-not-found' | 'package-already-installed' | 'package-download-failed' | 'group-not-found' | 'group-list-invalid' | 'dep-resolution-failed' | 'filter-invalid' | 'create-thread-failed' | 'transaction-error' | 'transaction-cancelled' | 'no-cache' | 'repo-not-found' | 'cannot-remove-system-package' | 'process-kill' | 'failed-initialization' | 'failed-finalise' | 'failed-config-parsing' | 'cannot-cancel' | 'cannot-get-lock' | 'no-packages-to-update' | 'cannot-write-repo-config' | 'local-install-failed' | 'bad-gpg-signature' | 'missing-gpg-signature' | 'cannot-install-source-package' | 'repo-configuration-error' | 'no-license-agreement' | 'file-conflicts' | 'package-conflicts' | 'repo-not-available' | 'invalid-package-file' | 'package-install-blocked' | 'package-corrupt' | 'all-packages-already-installed' | 'file-not-found' | 'no-more-mirrors-to-try' | 'no-distro-upgrade-data' | 'incompatible-architecture' | 'no-space-on-device' | 'media-change-required' | 'not-authorized' | 'update-not-found' | 'cannot-install-repo-unsigned' | 'cannot-update-repo-unsigned' | 'cannot-get-filelist' | 'cannot-get-requires' | 'cannot-disable-repository' | 'restricted-download' | 'package-failed-to-configure' | 'package-failed-to-build' | 'package-failed-to-install' | 'package-failed-to-remove' | 'update-failed-due-to-running-process' | 'package-database-changed' | 'provide-type-not-supported' | 'install-root-invalid' | 'cannot-fetch-sources' | 'cancelled-priority' | 'unfinished-transaction' | 'lock-required' | 'repo-already-set' | 'last';
export type PkExitEnumNick = 'unknown' | 'success' | 'failed' | 'cancelled' | 'key-required' | 'eula-required' | 'killed' | 'media-change-required' | 'need-untrusted' | 'cancelled-priority' | 'skip-transaction' | 'repair-required' | 'last';
export type PkFilterEnumNick = 'unknown' | 'none' | 'installed' | 'not-installed' | 'development' | 'not-development' | 'gui' | 'not-gui' | 'free' | 'not-free' | 'visible' | 'not-visible' | 'supported' | 'not-supported' | 'basename' | 'not-basename' | 'newest' | 'not-newest' | 'arch' | 'not-arch' | 'source' | 'not-source' | 'collections' | 'not-collections' | 'application' | 'not-application' | 'downloaded' | 'not-downloaded' | 'last';
export type PkGroupEnumNick = 'unknown' | 'accessibility' | 'accessories' | 'admin-tools' | 'communication' | 'desktop-gnome' | 'desktop-kde' | 'desktop-other' | 'desktop-xfce' | 'education' | 'fonts' | 'games' | 'graphics' | 'internet' | 'legacy' | 'localization' | 'maps' | 'multimedia' | 'network' | 'office' | 'other' | 'power-management' | 'programming' | 'publishing' | 'repos' | 'security' | 'servers' | 'system' | 'virtualization' | 'science' | 'documentation' | 'electronics' | 'collections' | 'vendor' | 'newest' | 'desktop-dde' | 'last';
export type PkInfoEnumNick = 'unknown' | 'installed' | 'available' | 'low' | 'enhancement' | 'normal' | 'bugfix' | 'important' | 'security' | 'blocked' | 'downloading' | 'updating' | 'installing' | 'removing' | 'cleanup' | 'obsoleting' | 'collection-installed' | 'collection-available' | 'finished' | 'reinstalling' | 'downgrading' | 'preparing' | 'decompressing' | 'untrusted' | 'trusted' | 'unavailable' | 'critical' | 'install' | 'remove' | 'obsolete' | 'downgrade' | 'last';
export type PkMediaTypeEnumNick = 'unknown' | 'cd' | 'dvd' | 'disc' | 'last';
export type PkNetworkEnumNick = 'unknown' | 'offline' | 'online' | 'wired' | 'wifi' | 'mobile' | 'last';
export type PkOfflineActionNick = 'unknown' | 'reboot' | 'power-off' | 'unset';
export type PkPackageSackSortTypeNick = 'name' | 'info' | 'package-id' | 'summary' | 'last';
export type PkProgressTypeNick = 'package-id' | 'transaction-id' | 'percentage' | 'allow-cancel' | 'status' | 'role' | 'caller-active' | 'elapsed-time' | 'remaining-time' | 'speed' | 'download-size-remaining' | 'uid' | 'package' | 'item-progress' | 'transaction-flags' | 'invalid' | 'sender';
export type PkRestartEnumNick = 'unknown' | 'none' | 'application' | 'session' | 'system' | 'security-session' | 'security-system' | 'last';
export type PkRoleEnumNick = 'unknown' | 'cancel' | 'depends-on' | 'get-details' | 'get-files' | 'get-packages' | 'get-repo-list' | 'required-by' | 'get-update-detail' | 'get-updates' | 'install-files' | 'install-packages' | 'install-signature' | 'refresh-cache' | 'remove-packages' | 'repo-enable' | 'repo-set-data' | 'resolve' | 'search-details' | 'search-file' | 'search-group' | 'search-name' | 'update-packages' | 'what-provides' | 'accept-eula' | 'download-packages' | 'get-distro-upgrades' | 'get-categories' | 'get-old-transactions' | 'repair-system' | 'get-details-local' | 'get-files-local' | 'repo-remove' | 'upgrade-system' | 'last';
export type PkSigTypeEnumNick = 'unknown' | 'gpg' | 'last';
export type PkStatusEnumNick = 'unknown' | 'wait' | 'setup' | 'running' | 'query' | 'info' | 'remove' | 'refresh-cache' | 'download' | 'install' | 'update' | 'cleanup' | 'obsolete' | 'dep-resolve' | 'sig-check' | 'test-commit' | 'commit' | 'request' | 'finished' | 'cancel' | 'download-repository' | 'download-packagelist' | 'download-filelist' | 'download-changelog' | 'download-group' | 'download-updateinfo' | 'repackaging' | 'loading-cache' | 'scan-applications' | 'generate-package-list' | 'waiting-for-lock' | 'waiting-for-auth' | 'scan-process-list' | 'check-executable-files' | 'check-libraries' | 'copy-files' | 'run-hook' | 'last';
export type PkTransactionFlagEnumNick = 'none' | 'only-trusted' | 'simulate' | 'only-download' | 'allow-reinstall' | 'just-reinstall' | 'allow-downgrade' | 'last';
export type PkUpdateStateEnumNick = 'unknown' | 'stable' | 'unstable' | 'testing' | 'last';
export type PkUpgradeKindEnumNick = 'unknown' | 'minimal' | 'default' | 'complete' | 'last';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface PkCategoryProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    'cat-id'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    icon?: string | null;
    /**
     * @since 0.5.4
     * @default NULL
     */
    name?: string | null;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'parent-id'?: string | null;
    /**
     * @since 0.5.4
     * @default NULL
     */
    summary?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkCategoryConstructOnly = PkSourceConstructOnly;

export interface PkClientProps extends GObjectProps {
    /**
     * @since 0.5.3
     * @default FALSE
     */
    background?: boolean;
    /**
     * The cache age in seconds, where %G_MAXUINT means cache "never expires"
     * @since 0.6.10
     * @default 4294967295
     */
    'cache-age'?: number;
    /**
     * @since 1.2.7
     * @default FALSE
     */
    'details-with-deps-size'?: boolean;
    /**
     * @since 0.5.4
     * @default TRUE
     */
    interactive?: boolean;
    /**
     * @since 0.5.3
     * @default NULL
     */
    locale?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkClientConstructOnly = GObjectConstructOnly;

export interface PkClientHelperProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkClientHelperConstructOnly = GObjectConstructOnly;

export interface PkControlProps extends GObjectProps {
    /**
     * @since 0.5.2
     * @default NULL
     */
    'backend-author'?: string;
    /**
     * @since 0.5.2
     * @default NULL
     */
    'backend-description'?: string;
    /**
     * @since 0.5.2
     * @default NULL
     */
    'backend-name'?: string;
    /**
     * @since 0.5.3
     * @default FALSE
     */
    connected?: boolean;
    /**
     * @since 0.5.5
     * @default NULL
     */
    'distro-id'?: string;
    /**
     * @since 0.5.2
     * @default 0
     */
    filters?: bigint | number;
    /**
     * @since 0.5.2
     * @default 0
     */
    groups?: bigint | number;
    /**
     * @since 0.5.3
     * @default FALSE
     */
    locked?: boolean;
    /** @since 0.8.1 */
    'mime-types'?: string[];
    /**
     * @since 0.5.3
     * @default PK_NETWORK_ENUM_LAST
     */
    'network-state'?: PkNetworkEnumNick | PackageKitGlib.NetworkEnum;
    /**
     * @since 0.8.8
     * @default 0
     */
    provides?: bigint | number;
    /**
     * @since 0.5.2
     * @default 0
     */
    roles?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkControlConstructOnly = GObjectConstructOnly;

export interface PkDesktopProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkDesktopConstructOnly = GObjectConstructOnly;

export interface PkDetailsProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    description?: string;
    /**
     * @since 1.2.4
     * @default 18446744073709551615
     */
    'download-size'?: bigint | number;
    /**
     * @since 0.5.4
     * @default PK_GROUP_ENUM_UNKNOWN
     */
    group?: PkGroupEnumNick | PackageKitGlib.GroupEnum;
    /**
     * @since 0.5.4
     * @default NULL
     */
    license?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
    /**
     * @since 0.5.4
     * @default 0
     */
    size?: bigint | number;
    /**
     * @since 0.9.1
     * @default NULL
     */
    summary?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkDetailsConstructOnly = PkSourceConstructOnly;

export interface PkDistroUpgradeProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    name?: string;
    /**
     * @since 0.5.4
     * @default PK_DISTRO_UPGRADE_ENUM_UNKNOWN
     */
    state?: PkDistroUpgradeEnumNick | PackageKitGlib.DistroUpgradeEnum;
    /**
     * @since 0.5.4
     * @default NULL
     */
    summary?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkDistroUpgradeConstructOnly = PkSourceConstructOnly;

export interface PkErrorProps extends PkSourceProps {
    /**
     * @since 0.5.5
     * @default PK_ERROR_ENUM_UNKNOWN
     */
    code?: PkErrorEnumNick | PackageKitGlib.ErrorEnum;
    /**
     * @since 0.5.5
     * @default NULL
     */
    details?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkErrorConstructOnly = PkSourceConstructOnly;

export interface PkEulaRequiredProps extends PkSourceProps {
    /**
     * ID for this EULA.
     * @since 0.5.4
     * @default NULL
     */
    'eula-id'?: string;
    /**
     * The text of the license agreement.
     * @since 0.5.4
     * @default NULL
     */
    'license-agreement'?: string;
    /**
     * PackageID this EULA is for.
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
    /**
     * Vendor this EULA is from.
     * @since 0.5.4
     * @default NULL
     */
    'vendor-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkEulaRequiredConstructOnly = PkSourceConstructOnly;

export interface PkFilesProps extends PkSourceProps {
    /** @since 0.5.4 */
    files?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkFilesConstructOnly = PkSourceConstructOnly;

export interface PkItemProgressProps extends PkSourceProps {
    /**
     * @since 0.8.1
     * @default NULL
     */
    'package-id'?: string;
    /**
     * @since 0.8.1
     * @default 0
     */
    percentage?: number;
    /**
     * @since 0.8.2
     * @default 0
     */
    status?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkItemProgressConstructOnly = PkSourceConstructOnly;

export interface PkMediaChangeRequiredProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    'media-id'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'media-text'?: string;
    /**
     * @since 0.5.4
     * @default PK_MEDIA_TYPE_ENUM_UNKNOWN
     */
    'media-type'?: PkMediaTypeEnumNick | PackageKitGlib.MediaTypeEnum;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkMediaChangeRequiredConstructOnly = PkSourceConstructOnly;

export interface PkPackageProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    description?: string;
    /**
     * @since 0.5.4
     * @default PK_GROUP_ENUM_UNKNOWN
     */
    group?: PkGroupEnumNick | PackageKitGlib.GroupEnum;
    /**
     * @since 0.5.4
     * @default PK_INFO_ENUM_UNKNOWN
     */
    info?: PkInfoEnumNick | PackageKitGlib.InfoEnum;
    /**
     * @since 0.5.4
     * @default NULL
     */
    license?: string;
    /**
     * @since 0.5.4
     * @default 0
     */
    size?: bigint | number;
    /**
     * @since 0.5.4
     * @default NULL
     */
    summary?: string | null;
    /** @since 0.8.1 */
    'update-bugzilla-urls'?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-changelog'?: string;
    /** @since 0.8.1 */
    'update-cve-urls'?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-issued'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-obsoletes'?: string;
    /**
     * @since 0.5.4
     * @default PK_RESTART_ENUM_UNKNOWN
     */
    'update-restart'?: PkRestartEnumNick | PackageKitGlib.RestartEnum;
    /**
     * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_ENHANCEMENT, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_BUGFIX, %PK_INFO_ENUM_IMPORTANT, %PK_INFO_ENUM_SECURITY or %PK_INFO_ENUM_CRITICA…
     * @since 1.2.4
     * @default PK_INFO_ENUM_UNKNOWN
     */
    'update-severity'?: PkInfoEnumNick | PackageKitGlib.InfoEnum;
    /**
     * @since 0.5.4
     * @default PK_UPDATE_STATE_ENUM_UNKNOWN
     */
    'update-state'?: PkUpdateStateEnumNick | PackageKitGlib.UpdateStateEnum;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-text'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-updated'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-updates'?: string;
    /** @since 0.8.1 */
    'update-vendor-urls'?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkPackageConstructOnly = PkSourceConstructOnly;

export interface PkPackageSackProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkPackageSackConstructOnly = GObjectConstructOnly;

export interface PkProgressProps extends GObjectProps {
    /**
     * %TRUE if this transaction can be cancelled.
     * @since 0.5.2
     * @default FALSE
     */
    'allow-cancel'?: boolean;
    /**
     * %TRUE if the transaction caller is still connected.
     * @since 0.5.2
     * @default FALSE
     */
    'caller-active'?: boolean;
    /**
     * Number of bytes remaining to download.
     * @since 0.8.0
     * @default 0
     */
    'download-size-remaining'?: bigint | number;
    /**
     * Amount of time the transaction has taken in seconds.
     * @since 0.5.2
     * @default 0
     */
    'elapsed-time'?: number;
    /**
     * Item progress associated with this transaction.
     * @since 0.8.1
     */
    'item-progress'?: PackageKitGlib.ItemProgress;
    /**
     * The package this transaction is acting on.
     * @since 0.5.3
     */
    package?: PackageKitGlib.Package;
    /**
     * Full package ID this transaction is acting on.
     * @since 0.5.2
     * @default NULL
     */
    'package-id'?: string;
    /**
     * Percentage complete of this transaction.
     * @since 0.5.2
     * @default -1
     */
    percentage?: number;
    /**
     * Amount of time the transaction will take to complete in seconds or 0 if unknown.
     * @since 0.5.2
     * @default 0
     */
    'remaining-time'?: number;
    /**
     * Role of this transaction.
     * @since 0.5.2
     * @default 0
     */
    role?: number;
    /**
     * The D-Bus name of the client that started this transaction.
     * @since 1.2.6
     * @default NULL
     */
    sender?: string;
    /**
     * Transaction speed in bits per second or 0 if unknown.
     * @since 0.5.2
     * @default 0
     */
    speed?: number;
    /**
     * Status of this transaction.
     * @since 0.5.2
     * @default 0
     */
    status?: number;
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
     * @since 0.8.8
     * @default 0
     */
    'transaction-flags'?: bigint | number;
    /**
     * ID used by this transaction.
     * @since 0.5.2
     * @default NULL
     */
    'transaction-id'?: string;
    /**
     * The UID that started this transaction.
     * @since 0.5.2
     * @default 0
     */
    uid?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkProgressConstructOnly = GObjectConstructOnly;

export interface PkRepoDetailProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    description?: string;
    /**
     * @since 0.5.4
     * @default FALSE
     */
    enabled?: boolean;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'repo-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkRepoDetailConstructOnly = PkSourceConstructOnly;

export interface PkRepoSignatureRequiredProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    'key-fingerprint'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'key-id'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'key-timestamp'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'key-url'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'key-userid'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'repository-name'?: string;
    /**
     * @since 0.5.4
     * @default PK_SIGTYPE_ENUM_UNKNOWN
     */
    type?: PkSigTypeEnumNick | PackageKitGlib.SigTypeEnum;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkRepoSignatureRequiredConstructOnly = PkSourceConstructOnly;

export interface PkRequireRestartProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
    /**
     * @since 0.5.4
     * @default PK_RESTART_ENUM_UNKNOWN
     */
    restart?: PkRestartEnumNick | PackageKitGlib.RestartEnum;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkRequireRestartConstructOnly = PkSourceConstructOnly;

export interface PkResultsProps extends GObjectProps {
    /**
     * @since 0.5.3
     * @default 0
     */
    inputs?: number;
    /** @since 0.5.3 */
    progress?: PackageKitGlib.Progress;
    /**
     * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
     * @since 0.5.2
     * @default PK_ROLE_ENUM_UNKNOWN
     */
    role?: PkRoleEnumNick | PackageKitGlib.RoleEnum;
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum for this result.
     * @since 0.8.1
     * @default 0
     */
    'transaction-flags'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkResultsConstructOnly = GObjectConstructOnly;

export interface PkSourceProps extends GObjectProps {
    /**
     * @since 0.6.0
     * @default PK_ROLE_ENUM_UNKNOWN
     */
    role?: PkRoleEnumNick | PackageKitGlib.RoleEnum;
    /**
     * @since 0.6.0
     * @default NULL
     */
    'transaction-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkSourceConstructOnly = GObjectConstructOnly;

export interface PkTaskProps extends PkClientProps {
    /**
     * %TRUE if package downgrades are allowed.
     * @since 1.0.2
     * @default FALSE
     */
    'allow-downgrade'?: boolean;
    /**
     * %TRUE if package reinstallation shall be allowed during transaction.
     * @since 1.0.2
     * @default FALSE
     */
    'allow-reinstall'?: boolean;
    /**
     * %TRUE if we are just preparing the transaction for later.
     * @since 0.8.1
     * @default FALSE
     */
    'only-download'?: boolean;
    /**
     * %TRUE if only authenticated packages should be allowed in the transaction.
     * @since 0.9.5
     * @default TRUE
     */
    'only-trusted'?: boolean;
    /**
     * %TRUE if we are simulating.
     * @since 0.5.2
     * @default TRUE
     */
    simulate?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkTaskConstructOnly = PkClientConstructOnly;

export interface PkTransactionListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkTransactionListConstructOnly = GObjectConstructOnly;

export interface PkTransactionPastProps extends PkSourceProps {
    /**
     * @since 0.5.4
     * @default NULL
     */
    cmdline?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    data?: string;
    /**
     * @since 0.5.4
     * @default 0
     */
    duration?: number;
    /**
     * @since 0.5.4
     * @default PK_ROLE_ENUM_UNKNOWN
     */
    role?: PkRoleEnumNick | PackageKitGlib.RoleEnum;
    /**
     * @since 0.5.4
     * @default FALSE
     */
    succeeded?: boolean;
    /**
     * @since 0.5.4
     * @default NULL
     */
    tid?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    timespec?: string;
    /**
     * @since 0.5.4
     * @default 4294967295
     */
    uid?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkTransactionPastConstructOnly = PkSourceConstructOnly;

export interface PkUpdateDetailProps extends PkSourceProps {
    /** @since 0.8.1 */
    'bugzilla-urls'?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    changelog?: string;
    /** @since 0.8.1 */
    'cve-urls'?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    issued?: string;
    /** @since 0.8.1 */
    obsoletes?: string[];
    /**
     * @since 0.5.4
     * @default NULL
     */
    'package-id'?: string;
    /**
     * @since 0.5.4
     * @default PK_RESTART_ENUM_UNKNOWN
     */
    restart?: PkRestartEnumNick | PackageKitGlib.RestartEnum;
    /**
     * @since 0.5.4
     * @default PK_UPDATE_STATE_ENUM_UNKNOWN
     */
    state?: PkUpdateStateEnumNick | PackageKitGlib.UpdateStateEnum;
    /**
     * @since 0.5.4
     * @default NULL
     */
    'update-text'?: string;
    /**
     * @since 0.5.4
     * @default NULL
     */
    updated?: string;
    /** @since 0.8.1 */
    updates?: string[];
    /** @since 0.8.1 */
    'vendor-urls'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PkUpdateDetailConstructOnly = PkSourceConstructOnly;

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
