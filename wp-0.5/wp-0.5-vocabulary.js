// The widget vocabulary of Wp-0.5 as runtime data.
//
// GENERATED — do not edit. Provenance: Wp-0.5 — prop(s) no TypeScript value satisfies: Wp.Core.pw-context Wp.ImplModule.core Wp.ImplNode.pw-impl-node Wp.SpaDevice.spa-device-handle
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Wp',
    version: '0.5',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Wp.Core.pw-context', 'Wp.ImplModule.core', 'Wp.ImplNode.pw-impl-node', 'Wp.SpaDevice.spa-device-handle'],
    unresolvedProps: [],
    identifierPrefixes: ['Wp'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    WpAsyncEventHook: ['execute-step', 'get-next-step'],
    WpConf: ['name', 'properties'],
    WpCore: ['conf', 'g-main-context', 'properties', 'pw-context'],
    WpEventHook: ['name', 'runs-after-hooks', 'runs-before-hooks'],
    WpGlobalProxy: ['factory-name', 'global-properties'],
    WpImplMetadata: ['name', 'properties'],
    WpImplModule: ['arguments', 'core', 'name', 'properties'],
    WpImplNode: ['pw-impl-node'],
    WpObject: ['core'],
    WpSettings: ['metadata-name'],
    WpSimpleEventHook: ['closure'],
    WpSpaDevice: ['properties', 'spa-device-handle'],
    WpState: ['name', 'timeout'],
};

export const OWN_SIGNALS = {
    WpCore: ['connected', 'disconnected'],
    WpLink: ['state-changed'],
    WpMetadata: ['changed'],
    WpNode: ['ports-changed', 'state-changed'],
    WpObjectManager: ['installed', 'object-added', 'object-removed', 'objects-changed'],
    WpPipewireObject: ['params-changed'],
    WpProxy: ['bound', 'error', 'pw-proxy-created', 'pw-proxy-destroyed'],
    WpSpaDevice: ['create-object', 'object-removed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    WpAsyncEventHook: ['WpAsyncEventHook', 'WpInterestEventHook', 'WpEventHook', 'GObject'],
    WpClient: ['WpClient', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpConf: ['WpConf', 'GObject'],
    WpCore: ['WpCore', 'WpObject', 'GObject'],
    WpDevice: ['WpDevice', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpEventDispatcher: ['WpEventDispatcher', 'GObject'],
    WpFactory: ['WpFactory', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpFeatureActivationTransition: ['WpFeatureActivationTransition', 'WpTransition', 'GObject', 'GAsyncResult'],
    WpGlobalProxy: ['WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject'],
    WpImplMetadata: ['WpImplMetadata', 'WpMetadata', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject'],
    WpImplModule: ['WpImplModule', 'GObject'],
    WpImplNode: ['WpImplNode', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpLink: ['WpLink', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpMetadata: ['WpMetadata', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject'],
    WpNode: ['WpNode', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpObjectManager: ['WpObjectManager', 'GObject'],
    WpPort: ['WpPort', 'WpGlobalProxy', 'WpProxy', 'WpObject', 'GObject', 'WpPipewireObject'],
    WpSettings: ['WpSettings', 'WpObject', 'GObject'],
    WpSimpleEventHook: ['WpSimpleEventHook', 'WpInterestEventHook', 'WpEventHook', 'GObject'],
    WpSpaDevice: ['WpSpaDevice', 'WpProxy', 'WpObject', 'GObject'],
    WpSpaType: ['WpSpaType'],
    WpState: ['WpState', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    WpConstraintType: ['none', 'pw-global-property', 'pw-property', 'g-property'],
    WpConstraintVerb: ['equals', 'not-equals', 'in-list', 'in-range', 'matches', 'is-present', 'is-absent'],
    WpDirection: ['input', 'output'],
    WpLibraryErrorEnum: ['invariant', 'invalid-argument', 'operation-failed', 'service-unavailable'],
    WpLinkState: ['error', 'unlinked', 'init', 'negotiating', 'allocating', 'paused', 'active'],
    WpNodeState: ['error', 'creating', 'suspended', 'idle', 'running'],
    WpSettingsSpecType: ['unknown', 'bool', 'int', 'float', 'string', 'array', 'object'],
    WpSiAdapterPortsState: ['none', 'configuring', 'configured'],
    WpTransitionStep: ['none', 'error', 'custom-start'],
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
    'WpConstraintType.g-property': 3,
    'WpConstraintType.none': 0,
    'WpConstraintType.pw-global-property': 1,
    'WpConstraintType.pw-property': 2,
    'WpConstraintVerb.equals': 61,
    'WpConstraintVerb.in-list': 99,
    'WpConstraintVerb.in-range': 126,
    'WpConstraintVerb.is-absent': 45,
    'WpConstraintVerb.is-present': 43,
    'WpConstraintVerb.matches': 35,
    'WpConstraintVerb.not-equals': 33,
    'WpDirection.input': 0,
    'WpDirection.output': 1,
    'WpLibraryErrorEnum.invalid-argument': 1,
    'WpLibraryErrorEnum.invariant': 0,
    'WpLibraryErrorEnum.operation-failed': 2,
    'WpLibraryErrorEnum.service-unavailable': 3,
    'WpLinkState.active': 4,
    'WpLinkState.allocating': 2,
    'WpLinkState.error': -2,
    'WpLinkState.init': 0,
    'WpLinkState.negotiating': 1,
    'WpLinkState.paused': 3,
    'WpLinkState.unlinked': -1,
    'WpNodeState.creating': 0,
    'WpNodeState.error': -1,
    'WpNodeState.idle': 2,
    'WpNodeState.running': 3,
    'WpNodeState.suspended': 1,
    'WpSettingsSpecType.array': 5,
    'WpSettingsSpecType.bool': 1,
    'WpSettingsSpecType.float': 3,
    'WpSettingsSpecType.int': 2,
    'WpSettingsSpecType.object': 6,
    'WpSettingsSpecType.string': 4,
    'WpSettingsSpecType.unknown': 0,
    'WpSiAdapterPortsState.configured': 2,
    'WpSiAdapterPortsState.configuring': 1,
    'WpSiAdapterPortsState.none': 0,
    'WpTransitionStep.custom-start': 16,
    'WpTransitionStep.error': 1,
    'WpTransitionStep.none': 0,
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
    'WpBaseDirsFlags.build-datadir': 8192,
    'WpBaseDirsFlags.build-libdir': 16384,
    'WpBaseDirsFlags.build-sysconfdir': 2048,
    'WpBaseDirsFlags.configuration': 33570049,
    'WpBaseDirsFlags.data': 33567234,
    'WpBaseDirsFlags.env-config': 1,
    'WpBaseDirsFlags.env-data': 2,
    'WpBaseDirsFlags.env-module': 4,
    'WpBaseDirsFlags.flag-module': 16777216,
    'WpBaseDirsFlags.flag-subdir-wireplumber': 33554432,
    'WpBaseDirsFlags.module': 50348036,
    'WpBaseDirsFlags.xdg-config-dirs': 1024,
    'WpBaseDirsFlags.xdg-config-home': 256,
    'WpBaseDirsFlags.xdg-data-dirs': 4096,
    'WpBaseDirsFlags.xdg-data-home': 512,
    'WpCoreFeatures.components': 2,
    'WpCoreFeatures.connected': 1,
    'WpInitFlags.all': 15,
    'WpInitFlags.pipewire': 1,
    'WpInitFlags.set-glib-log': 8,
    'WpInitFlags.set-pw-log': 4,
    'WpInitFlags.spa-types': 2,
    'WpInterestMatch.all': 15,
    'WpInterestMatch.g-properties': 8,
    'WpInterestMatch.gtype': 1,
    'WpInterestMatch.none': 0,
    'WpInterestMatch.pw-global-properties': 2,
    'WpInterestMatch.pw-properties': 4,
    'WpInterestMatchFlags.check-all': 1,
    'WpInterestMatchFlags.none': 0,
    'WpLogTopicFlags.flag-initialized': 2147483648,
    'WpLogTopicFlags.flag-static': 1073741824,
    'WpLogTopicFlags.level-mask': 65535,
    'WpMetadataFeatures.data': 65536,
    'WpNodeFeatures.ports': 65536,
    'WpPluginFeatures.enabled': 1,
    'WpProxyFeatures.pipewire-object-feature-info': 16,
    'WpProxyFeatures.pipewire-object-feature-param-format': 64,
    'WpProxyFeatures.pipewire-object-feature-param-port-config': 256,
    'WpProxyFeatures.pipewire-object-feature-param-profile': 128,
    'WpProxyFeatures.pipewire-object-feature-param-props': 32,
    'WpProxyFeatures.pipewire-object-feature-param-route': 512,
    'WpProxyFeatures.pipewire-object-features-all': 1009,
    'WpProxyFeatures.pipewire-object-features-minimal': 17,
    'WpProxyFeatures.proxy-feature-bound': 1,
    'WpSessionItemFeatures.active': 1,
    'WpSessionItemFeatures.exported': 2,
    'WpSettingsFeatures.loaded': 1,
    'WpSpaDeviceFeatures.enabled': 65536,
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
export const PROP_ENUMS = {};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'WpConf.name': 'gchararray',
    'WpCore.conf': 'WpConf',
    'WpCore.pw-context': 'gpointer',
    'WpEventHook.name': 'gchararray',
    'WpGlobalProxy.factory-name': 'gchararray',
    'WpImplMetadata.name': 'gchararray',
    'WpImplModule.arguments': 'gchararray',
    'WpImplModule.core': 'gpointer',
    'WpImplModule.name': 'gchararray',
    'WpImplNode.pw-impl-node': 'gpointer',
    'WpObject.core': 'WpCore',
    'WpSettings.metadata-name': 'gchararray',
    'WpSpaDevice.spa-device-handle': 'gpointer',
    'WpState.name': 'gchararray',
    'WpState.timeout': 'guint',
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
    'WpFactory': '0.4.5',
    'WpImplModule': '0.4.2',
};
