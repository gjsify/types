// The widget vocabulary of Snapd-2 as runtime data.
//
// GENERATED — do not edit. Provenance: Snapd-2 — prop(s) no TypeScript value satisfies: Snapd.Change.tasks Snapd.Interface.plugs Snapd.Interface.slots Snapd.MarkdownNode.children Snapd.Plug.connections Snapd.Slot.connections Snapd.Snap.apps Snapd.Snap.categories Snapd.Snap.channels Snapd.Snap.links Snapd.Snap.media Snapd.Snap.prices Snapd.Snap.screenshots Snapd.SystemInformation.sandbox-features
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Snapd',
    version: '2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Snapd.Change.tasks', 'Snapd.Interface.plugs', 'Snapd.Interface.slots', 'Snapd.MarkdownNode.children', 'Snapd.Plug.connections', 'Snapd.Slot.connections', 'Snapd.Snap.apps', 'Snapd.Snap.categories', 'Snapd.Snap.channels', 'Snapd.Snap.links', 'Snapd.Snap.media', 'Snapd.Snap.prices', 'Snapd.Snap.screenshots', 'Snapd.SystemInformation.sandbox-features'],
    unresolvedProps: [],
    identifierPrefixes: ['Snapd'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    SnapdAlias: ['app-auto', 'app-manual', 'command', 'name', 'snap', 'status'],
    SnapdApp: ['active', 'aliases', 'common-id', 'daemon-type', 'desktop-file', 'enabled', 'name', 'snap'],
    SnapdAssertion: ['content'],
    SnapdAuthData: ['discharges', 'macaroon'],
    SnapdAutorefreshChangeData: ['refresh-forced', 'snap-names'],
    SnapdCategory: ['featured', 'name'],
    SnapdCategoryDetails: ['name'],
    SnapdChange: ['data', 'error', 'id', 'kind', 'ready', 'ready-time', 'spawn-time', 'status', 'summary', 'tasks'],
    SnapdChannel: ['confinement', 'epoch', 'name', 'released-at', 'revision', 'size', 'version'],
    SnapdConnection: ['gadget', 'interface', 'manual', 'name', 'plug', 'plug-attrs', 'slot', 'slot-attrs', 'snap'],
    SnapdIcon: ['data', 'mime-type'],
    SnapdInterface: ['doc-url', 'name', 'plugs', 'slots', 'summary'],
    SnapdLink: ['type', 'urls'],
    SnapdLog: ['message', 'pid', 'sid', 'timestamp'],
    SnapdMaintenance: ['kind', 'message'],
    SnapdMarkdownNode: ['children', 'node-type', 'text'],
    SnapdMedia: ['height', 'type', 'url', 'width'],
    SnapdNotice: ['expire-after', 'first-occurred', 'id', 'key', 'last-data', 'last-occurred', 'last-occurred-nanoseconds', 'last-repeated', 'notice-type', 'occurrences', 'repeat-after', 'user-id'],
    SnapdNoticesMonitor: ['client'],
    SnapdPlug: ['attributes', 'connections', 'interface', 'label', 'name', 'snap'],
    SnapdPlugRef: ['plug', 'snap'],
    SnapdPrice: ['amount', 'currency'],
    SnapdScreenshot: ['height', 'url', 'width'],
    SnapdSlot: ['attributes', 'connections', 'interface', 'label', 'name', 'snap'],
    SnapdSlotRef: ['slot', 'snap'],
    SnapdSnap: ['apps', 'base', 'broken', 'categories', 'channel', 'channels', 'common-ids', 'confinement', 'contact', 'description', 'developer', 'devmode', 'download-size', 'hold', 'icon', 'id', 'install-date', 'installed-size', 'jailmode', 'license', 'links', 'media', 'mounted-from', 'name', 'prices', 'private', 'proceed-time', 'publisher-display-name', 'publisher-id', 'publisher-username', 'publisher-validation', 'revision', 'screenshots', 'snap-type', 'status', 'store-url', 'summary', 'title', 'tracking-channel', 'tracks', 'trymode', 'version', 'website'],
    SnapdSystemInformation: ['architecture', 'binaries-directory', 'build-id', 'confinement', 'kernel-version', 'managed', 'mount-directory', 'on-classic', 'os-id', 'os-version', 'refresh-hold', 'refresh-last', 'refresh-next', 'refresh-schedule', 'refresh-timer', 'sandbox-features', 'series', 'store', 'version'],
    SnapdTask: ['data', 'id', 'kind', 'progress-done', 'progress-label', 'progress-total', 'ready', 'ready-time', 'spawn-time', 'status', 'summary'],
    SnapdTaskData: ['affected-snaps'],
    SnapdUserInformation: ['auth-data', 'email', 'id', 'ssh-keys', 'username'],
};

export const OWN_SIGNALS = {
    SnapdNoticesMonitor: ['error-event', 'notice-event'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    SnapdAlias: ['SnapdAlias', 'GObject'],
    SnapdApp: ['SnapdApp', 'GObject'],
    SnapdAssertion: ['SnapdAssertion', 'GObject'],
    SnapdAuthData: ['SnapdAuthData', 'GObject'],
    SnapdAutorefreshChangeData: ['SnapdAutorefreshChangeData', 'SnapdChangeData', 'GObject'],
    SnapdCategory: ['SnapdCategory', 'GObject'],
    SnapdCategoryDetails: ['SnapdCategoryDetails', 'GObject'],
    SnapdChange: ['SnapdChange', 'GObject'],
    SnapdChangeData: ['SnapdChangeData', 'GObject'],
    SnapdChannel: ['SnapdChannel', 'GObject'],
    SnapdClient: ['SnapdClient', 'GObject'],
    SnapdConnection: ['SnapdConnection', 'GObject'],
    SnapdIcon: ['SnapdIcon', 'GObject'],
    SnapdInterface: ['SnapdInterface', 'GObject'],
    SnapdLink: ['SnapdLink', 'GObject'],
    SnapdLog: ['SnapdLog', 'GObject'],
    SnapdMaintenance: ['SnapdMaintenance', 'GObject'],
    SnapdMarkdownNode: ['SnapdMarkdownNode', 'GObject'],
    SnapdMarkdownParser: ['SnapdMarkdownParser', 'GObject'],
    SnapdMedia: ['SnapdMedia', 'GObject'],
    SnapdNotice: ['SnapdNotice', 'GObject'],
    SnapdNoticesMonitor: ['SnapdNoticesMonitor', 'GObject'],
    SnapdPlug: ['SnapdPlug', 'GObject'],
    SnapdPlugRef: ['SnapdPlugRef', 'GObject'],
    SnapdPrice: ['SnapdPrice', 'GObject'],
    SnapdScreenshot: ['SnapdScreenshot', 'GObject'],
    SnapdSlot: ['SnapdSlot', 'GObject'],
    SnapdSlotRef: ['SnapdSlotRef', 'GObject'],
    SnapdSnap: ['SnapdSnap', 'GObject'],
    SnapdSystemInformation: ['SnapdSystemInformation', 'GObject'],
    SnapdTask: ['SnapdTask', 'GObject'],
    SnapdTaskData: ['SnapdTaskData', 'GObject'],
    SnapdUserInformation: ['SnapdUserInformation', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    SnapdAliasStatus: ['unknown', 'default', 'enabled', 'disabled', 'auto', 'manual'],
    SnapdChangeFilter: ['all', 'in-progress', 'ready'],
    SnapdConfinement: ['unknown', 'strict', 'devmode', 'classic'],
    SnapdDaemonType: ['none', 'unknown', 'simple', 'forking', 'oneshot', 'dbus', 'notify'],
    SnapdMaintenanceKind: ['unknown', 'daemon-restart', 'system-restart'],
    SnapdMarkdownNodeType: ['text', 'paragraph', 'unordered-list', 'list-item', 'code-block', 'code-span', 'emphasis', 'strong-emphasis', 'url'],
    SnapdNoticeType: ['unknown', 'change-update', 'refresh-inhibit', 'snap-run-inhibit'],
    SnapdPublisherValidation: ['unknown', 'unproven', 'verified', 'starred'],
    SnapdSnapStatus: ['unknown', 'available', 'priced', 'installed', 'active'],
    SnapdSnapType: ['unknown', 'app', 'kernel', 'gadget', 'os', 'core', 'base', 'snapd'],
    SnapdSystemConfinement: ['unknown', 'strict', 'partial'],
    SnapdThemeStatus: ['installed', 'available', 'unavailable'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'SnapdAliasStatus.auto': 4,
    'SnapdAliasStatus.default': 1,
    'SnapdAliasStatus.disabled': 3,
    'SnapdAliasStatus.enabled': 2,
    'SnapdAliasStatus.manual': 5,
    'SnapdAliasStatus.unknown': 0,
    'SnapdChangeFilter.all': 0,
    'SnapdChangeFilter.in-progress': 1,
    'SnapdChangeFilter.ready': 2,
    'SnapdConfinement.classic': 3,
    'SnapdConfinement.devmode': 2,
    'SnapdConfinement.strict': 1,
    'SnapdConfinement.unknown': 0,
    'SnapdDaemonType.dbus': 5,
    'SnapdDaemonType.forking': 3,
    'SnapdDaemonType.none': 0,
    'SnapdDaemonType.notify': 6,
    'SnapdDaemonType.oneshot': 4,
    'SnapdDaemonType.simple': 2,
    'SnapdDaemonType.unknown': 1,
    'SnapdMaintenanceKind.daemon-restart': 1,
    'SnapdMaintenanceKind.system-restart': 2,
    'SnapdMaintenanceKind.unknown': 0,
    'SnapdMarkdownNodeType.code-block': 4,
    'SnapdMarkdownNodeType.code-span': 5,
    'SnapdMarkdownNodeType.emphasis': 6,
    'SnapdMarkdownNodeType.list-item': 3,
    'SnapdMarkdownNodeType.paragraph': 1,
    'SnapdMarkdownNodeType.strong-emphasis': 7,
    'SnapdMarkdownNodeType.text': 0,
    'SnapdMarkdownNodeType.unordered-list': 2,
    'SnapdMarkdownNodeType.url': 8,
    'SnapdNoticeType.change-update': 1,
    'SnapdNoticeType.refresh-inhibit': 2,
    'SnapdNoticeType.snap-run-inhibit': 3,
    'SnapdNoticeType.unknown': 0,
    'SnapdPublisherValidation.starred': 3,
    'SnapdPublisherValidation.unknown': 0,
    'SnapdPublisherValidation.unproven': 1,
    'SnapdPublisherValidation.verified': 2,
    'SnapdSnapStatus.active': 4,
    'SnapdSnapStatus.available': 1,
    'SnapdSnapStatus.installed': 3,
    'SnapdSnapStatus.priced': 2,
    'SnapdSnapStatus.unknown': 0,
    'SnapdSnapType.app': 1,
    'SnapdSnapType.base': 6,
    'SnapdSnapType.core': 5,
    'SnapdSnapType.gadget': 3,
    'SnapdSnapType.kernel': 2,
    'SnapdSnapType.os': 4,
    'SnapdSnapType.snapd': 7,
    'SnapdSnapType.unknown': 0,
    'SnapdSystemConfinement.partial': 2,
    'SnapdSystemConfinement.strict': 1,
    'SnapdSystemConfinement.unknown': 0,
    'SnapdThemeStatus.available': 2,
    'SnapdThemeStatus.installed': 1,
    'SnapdThemeStatus.unavailable': 3,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'SnapdCreateUserFlags.known': 2,
    'SnapdCreateUserFlags.none': 0,
    'SnapdCreateUserFlags.sudo': 1,
    'SnapdFindFlags.match-common-id': 16,
    'SnapdFindFlags.match-name': 1,
    'SnapdFindFlags.none': 0,
    'SnapdFindFlags.scope-wide': 8,
    'SnapdFindFlags.select-private': 2,
    'SnapdFindFlags.select-refresh': 4,
    'SnapdGetAppsFlags.none': 0,
    'SnapdGetAppsFlags.select-services': 1,
    'SnapdGetConnectionsFlags.none': 0,
    'SnapdGetConnectionsFlags.select-all': 1,
    'SnapdGetInterfacesFlags.include-docs': 1,
    'SnapdGetInterfacesFlags.include-plugs': 2,
    'SnapdGetInterfacesFlags.include-slots': 4,
    'SnapdGetInterfacesFlags.none': 0,
    'SnapdGetInterfacesFlags.only-connected': 8,
    'SnapdGetSnapsFlags.include-inactive': 1,
    'SnapdGetSnapsFlags.none': 0,
    'SnapdGetSnapsFlags.refresh-inhibited': 2,
    'SnapdInstallFlags.classic': 1,
    'SnapdInstallFlags.dangerous': 2,
    'SnapdInstallFlags.devmode': 4,
    'SnapdInstallFlags.jailmode': 8,
    'SnapdInstallFlags.none': 0,
    'SnapdRemoveFlags.none': 0,
    'SnapdRemoveFlags.purge': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'SnapdAlias.status': 'SnapdAliasStatus',
    'SnapdChannel.confinement': 'SnapdConfinement',
    'SnapdMaintenance.kind': 'SnapdMaintenanceKind',
    'SnapdMarkdownNode.node-type': 'SnapdMarkdownNodeType',
    'SnapdSnap.confinement': 'SnapdConfinement',
    'SnapdSnap.publisher-validation': 'SnapdPublisherValidation',
    'SnapdSnap.snap-type': 'SnapdSnapType',
    'SnapdSnap.status': 'SnapdSnapStatus',
    'SnapdSystemInformation.confinement': 'SnapdSystemConfinement',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'SnapdAlias': '1.8',
    'SnapdApp': '1.0',
    'SnapdAssertion': '1.0',
    'SnapdAuthData': '1.0',
    'SnapdAutorefreshChangeData': '1.65',
    'SnapdAutorefreshChangeData.refresh-forced': '1.65',
    'SnapdAutorefreshChangeData.snap-names': '1.65',
    'SnapdCategory': '1.64',
    'SnapdCategoryDetails': '1.64',
    'SnapdChange': '1.5',
    'SnapdChangeData': '1.65',
    'SnapdChannel': '1.22',
    'SnapdClient': '1.0',
    'SnapdConnection': '1.0',
    'SnapdIcon': '1.0',
    'SnapdInterface': '1.48',
    'SnapdLink': '1.69',
    'SnapdLog': '1.64',
    'SnapdMaintenance': '1.45',
    'SnapdMarkdownNode': '1.48',
    'SnapdMarkdownParser': '1.48',
    'SnapdMedia': '1.45',
    'SnapdNotice': '1.65',
    'SnapdNoticesMonitor': '1.66',
    'SnapdPlug': '1.0',
    'SnapdPlugRef': '1.0',
    'SnapdPrice': '1.0',
    'SnapdScreenshot': '1.0',
    'SnapdSlot': '1.0',
    'SnapdSlotRef': '1.0',
    'SnapdSnap': '1.0',
    'SnapdSystemInformation': '1.0',
    'SnapdTask': '1.0',
    'SnapdTaskData': '1.66',
    'SnapdUserInformation': '1.3',
};
