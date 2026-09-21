// The widget vocabulary of NetworkManager-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: NetworkManager-1.0 — library 1.17.2
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'NetworkManager',
    version: '1.0',
    libraryVersion: '1.17.2',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['NM'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    NMConnection: ['path'],
    NMSetting: ['name'],
    NMSetting8021x: ['anonymous-identity', 'ca-path', 'identity', 'pac-file', 'password', 'password-flags', 'password-raw-flags', 'phase1-fast-provisioning', 'phase1-peaplabel', 'phase1-peapver', 'phase2-auth', 'phase2-autheap', 'phase2-ca-path', 'phase2-private-key-password', 'phase2-private-key-password-flags', 'phase2-subject-match', 'pin', 'pin-flags', 'private-key-password', 'private-key-password-flags', 'subject-match', 'system-ca-certs'],
    NMSettingAdsl: ['encapsulation', 'password', 'password-flags', 'protocol', 'username', 'vci', 'vpi'],
    NMSettingBluetooth: ['type'],
    NMSettingBond: ['interface-name'],
    NMSettingBridge: ['ageing-time', 'forward-delay', 'hello-time', 'interface-name', 'max-age', 'priority', 'stp'],
    NMSettingBridgePort: ['hairpin-mode', 'path-cost', 'priority'],
    NMSettingCdma: ['number', 'password', 'password-flags', 'username'],
    NMSettingConnection: ['autoconnect', 'gateway-ping-timeout', 'id', 'interface-name', 'master', 'read-only', 'slave-type', 'timestamp', 'type', 'uuid', 'zone'],
    NMSettingDcb: ['app-fcoe-flags', 'app-fcoe-mode', 'app-fcoe-priority', 'app-fip-flags', 'app-fip-priority', 'app-iscsi-flags', 'app-iscsi-priority', 'priority-flow-control-flags', 'priority-group-flags'],
    NMSettingGsm: ['allowed-bands', 'apn', 'home-only', 'network-id', 'network-type', 'number', 'password', 'password-flags', 'pin', 'pin-flags', 'username'],
    NMSettingIP4Config: ['dhcp-client-id', 'dhcp-hostname', 'dhcp-send-hostname', 'dhcp-timeout', 'ignore-auto-dns', 'ignore-auto-routes', 'may-fail', 'method', 'never-default', 'route-metric'],
    NMSettingIP6Config: ['dhcp-hostname', 'ignore-auto-dns', 'ignore-auto-routes', 'ip6-privacy', 'may-fail', 'method', 'never-default', 'route-metric'],
    NMSettingInfiniband: ['mtu', 'p-key', 'parent', 'transport-mode'],
    NMSettingOlpcMesh: ['channel'],
    NMSettingPPP: ['baud', 'crtscts', 'lcp-echo-failure', 'lcp-echo-interval', 'mppe-stateful', 'mru', 'mtu', 'no-vj-comp', 'noauth', 'nobsdcomp', 'nodeflate', 'refuse-chap', 'refuse-eap', 'refuse-mschap', 'refuse-mschapv2', 'refuse-pap', 'require-mppe', 'require-mppe-128'],
    NMSettingPPPOE: ['password', 'password-flags', 'service', 'username'],
    NMSettingSerial: ['baud', 'bits', 'parity', 'send-delay', 'stopbits'],
    NMSettingTeam: ['config', 'interface-name'],
    NMSettingTeamPort: ['config'],
    NMSettingVPN: ['persistent', 'service-type', 'user-name'],
    NMSettingVlan: ['flags', 'id', 'interface-name', 'parent'],
    NMSettingWimax: ['network-name'],
    NMSettingWired: ['auto-negotiate', 'duplex', 'mtu', 'port', 's390-nettype', 'speed'],
    NMSettingWireless: ['band', 'channel', 'hidden', 'mode', 'mtu', 'powersave', 'rate', 'security', 'tx-power'],
    NMSettingWirelessSecurity: ['auth-alg', 'key-mgmt', 'leap-password', 'leap-password-flags', 'leap-username', 'psk', 'psk-flags', 'wep-key-flags', 'wep-key-type', 'wep-key0', 'wep-key1', 'wep-key2', 'wep-key3', 'wep-tx-keyidx'],
};

export const OWN_SIGNALS = {
    NMConnection: ['changed', 'secrets-cleared', 'secrets-updated'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    NMConnection: ['NMConnection', 'GObject'],
    NMSetting8021x: ['NMSetting8021x', 'NMSetting', 'GObject'],
    NMSettingAdsl: ['NMSettingAdsl', 'NMSetting', 'GObject'],
    NMSettingBluetooth: ['NMSettingBluetooth', 'NMSetting', 'GObject'],
    NMSettingBond: ['NMSettingBond', 'NMSetting', 'GObject'],
    NMSettingBridge: ['NMSettingBridge', 'NMSetting', 'GObject'],
    NMSettingBridgePort: ['NMSettingBridgePort', 'NMSetting', 'GObject'],
    NMSettingCdma: ['NMSettingCdma', 'NMSetting', 'GObject'],
    NMSettingConnection: ['NMSettingConnection', 'NMSetting', 'GObject'],
    NMSettingDcb: ['NMSettingDcb', 'NMSetting', 'GObject'],
    NMSettingGeneric: ['NMSettingGeneric', 'NMSetting', 'GObject'],
    NMSettingGsm: ['NMSettingGsm', 'NMSetting', 'GObject'],
    NMSettingIP4Config: ['NMSettingIP4Config', 'NMSetting', 'GObject'],
    NMSettingIP6Config: ['NMSettingIP6Config', 'NMSetting', 'GObject'],
    NMSettingInfiniband: ['NMSettingInfiniband', 'NMSetting', 'GObject'],
    NMSettingOlpcMesh: ['NMSettingOlpcMesh', 'NMSetting', 'GObject'],
    NMSettingPPP: ['NMSettingPPP', 'NMSetting', 'GObject'],
    NMSettingPPPOE: ['NMSettingPPPOE', 'NMSetting', 'GObject'],
    NMSettingSerial: ['NMSettingSerial', 'NMSetting', 'GObject'],
    NMSettingTeam: ['NMSettingTeam', 'NMSetting', 'GObject'],
    NMSettingTeamPort: ['NMSettingTeamPort', 'NMSetting', 'GObject'],
    NMSettingVPN: ['NMSettingVPN', 'NMSetting', 'GObject'],
    NMSettingVlan: ['NMSettingVlan', 'NMSetting', 'GObject'],
    NMSettingWimax: ['NMSettingWimax', 'NMSetting', 'GObject'],
    NMSettingWired: ['NMSettingWired', 'NMSetting', 'GObject'],
    NMSettingWireless: ['NMSettingWireless', 'NMSetting', 'GObject'],
    NMSettingWirelessSecurity: ['NMSettingWirelessSecurity', 'NMSetting', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    NMSetting8021xCKFormat: ['unknown', 'x509', 'raw-key', 'pkcs12'],
    NMSetting8021xCKScheme: ['unknown', 'blob', 'path'],
    NMSettingCompareFlags: ['exact', 'fuzzy', 'ignore-id', 'ignore-secrets', 'ignore-agent-owned-secrets', 'ignore-not-saved-secrets', 'diff-result-with-default', 'diff-result-no-default'],
    NMSettingDcbFlags: ['none', 'enable', 'advertise', 'willing'],
    NMSettingDiffResult: ['unknown', 'in-a', 'in-b', 'in-a-default', 'in-b-default'],
    NMSettingGsmNetworkBand: ['unknown', 'any', 'egsm', 'dcs', 'pcs', 'g850', 'u2100', 'u1800', 'u17iv', 'u800', 'u850', 'u900', 'u17ix', 'u1900', 'u2600'],
    NMSettingGsmNetworkType: ['any', 'umts-hspa', 'gprs-edge', 'prefer-umts-hspa', 'prefer-gprs-edge', 'prefer-4g', '4g'],
    NMSettingHashFlags: ['all', 'no-secrets', 'only-secrets'],
    NMSettingIP6ConfigPrivacy: ['unknown', 'disabled', 'prefer-public-addr', 'prefer-temp-addr'],
    NMSettingSecretFlags: ['none', 'agent-owned', 'not-saved', 'not-required'],
    NMUtilsSecurityType: ['invalid', 'none', 'static-wep', 'leap', 'dynamic-wep', 'wpa-psk', 'wpa-enterprise', 'wpa2-psk', 'wpa2-enterprise'],
    NMVlanFlags: ['reorder-headers', 'gvrp', 'loose-binding', 'mvrp'],
    NMVlanPriorityMap: ['ingress-map', 'egress-map'],
    NMWepKeyType: ['unknown', 'key', 'passphrase', 'last'],
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
    'NMSetting8021xCKFormat.pkcs12': 3,
    'NMSetting8021xCKFormat.raw-key': 2,
    'NMSetting8021xCKFormat.unknown': 0,
    'NMSetting8021xCKFormat.x509': 1,
    'NMSetting8021xCKScheme.blob': 1,
    'NMSetting8021xCKScheme.path': 2,
    'NMSetting8021xCKScheme.unknown': 0,
    'NMSettingCompareFlags.diff-result-no-default': 64,
    'NMSettingCompareFlags.diff-result-with-default': 32,
    'NMSettingCompareFlags.exact': 0,
    'NMSettingCompareFlags.fuzzy': 1,
    'NMSettingCompareFlags.ignore-agent-owned-secrets': 8,
    'NMSettingCompareFlags.ignore-id': 2,
    'NMSettingCompareFlags.ignore-not-saved-secrets': 16,
    'NMSettingCompareFlags.ignore-secrets': 4,
    'NMSettingDcbFlags.advertise': 2,
    'NMSettingDcbFlags.enable': 1,
    'NMSettingDcbFlags.none': 0,
    'NMSettingDcbFlags.willing': 4,
    'NMSettingDiffResult.in-a': 1,
    'NMSettingDiffResult.in-a-default': 4,
    'NMSettingDiffResult.in-b': 2,
    'NMSettingDiffResult.in-b-default': 4,
    'NMSettingDiffResult.unknown': 0,
    'NMSettingGsmNetworkBand.any': 1,
    'NMSettingGsmNetworkBand.dcs': 4,
    'NMSettingGsmNetworkBand.egsm': 2,
    'NMSettingGsmNetworkBand.g850': 16,
    'NMSettingGsmNetworkBand.pcs': 8,
    'NMSettingGsmNetworkBand.u17iv': 128,
    'NMSettingGsmNetworkBand.u17ix': 2048,
    'NMSettingGsmNetworkBand.u1800': 64,
    'NMSettingGsmNetworkBand.u1900': 4096,
    'NMSettingGsmNetworkBand.u2100': 32,
    'NMSettingGsmNetworkBand.u2600': 8192,
    'NMSettingGsmNetworkBand.u800': 256,
    'NMSettingGsmNetworkBand.u850': 512,
    'NMSettingGsmNetworkBand.u900': 1024,
    'NMSettingGsmNetworkBand.unknown': 0,
    'NMSettingGsmNetworkType.4g': 5,
    'NMSettingGsmNetworkType.any': -1,
    'NMSettingGsmNetworkType.gprs-edge': 1,
    'NMSettingGsmNetworkType.prefer-4g': 4,
    'NMSettingGsmNetworkType.prefer-gprs-edge': 3,
    'NMSettingGsmNetworkType.prefer-umts-hspa': 2,
    'NMSettingGsmNetworkType.umts-hspa': 0,
    'NMSettingHashFlags.all': 0,
    'NMSettingHashFlags.no-secrets': 1,
    'NMSettingHashFlags.only-secrets': 2,
    'NMSettingIP6ConfigPrivacy.disabled': 0,
    'NMSettingIP6ConfigPrivacy.prefer-public-addr': 1,
    'NMSettingIP6ConfigPrivacy.prefer-temp-addr': 2,
    'NMSettingIP6ConfigPrivacy.unknown': -1,
    'NMSettingSecretFlags.agent-owned': 1,
    'NMSettingSecretFlags.none': 0,
    'NMSettingSecretFlags.not-required': 4,
    'NMSettingSecretFlags.not-saved': 2,
    'NMUtilsSecurityType.dynamic-wep': 4,
    'NMUtilsSecurityType.invalid': 0,
    'NMUtilsSecurityType.leap': 3,
    'NMUtilsSecurityType.none': 1,
    'NMUtilsSecurityType.static-wep': 2,
    'NMUtilsSecurityType.wpa-enterprise': 6,
    'NMUtilsSecurityType.wpa-psk': 5,
    'NMUtilsSecurityType.wpa2-enterprise': 8,
    'NMUtilsSecurityType.wpa2-psk': 7,
    'NMVlanFlags.gvrp': 2,
    'NMVlanFlags.loose-binding': 4,
    'NMVlanFlags.mvrp': 8,
    'NMVlanFlags.reorder-headers': 1,
    'NMVlanPriorityMap.egress-map': 1,
    'NMVlanPriorityMap.ingress-map': 0,
    'NMWepKeyType.key': 1,
    'NMWepKeyType.last': 2,
    'NMWepKeyType.passphrase': 2,
    'NMWepKeyType.unknown': 0,
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
export const FLAG_VALUES = {};

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
    'NMConnection.path': 'gchararray',
    'NMSetting.name': 'gchararray',
    'NMSetting8021x.anonymous-identity': 'gchararray',
    'NMSetting8021x.ca-path': 'gchararray',
    'NMSetting8021x.identity': 'gchararray',
    'NMSetting8021x.pac-file': 'gchararray',
    'NMSetting8021x.password': 'gchararray',
    'NMSetting8021x.password-flags': 'guint',
    'NMSetting8021x.password-raw-flags': 'guint',
    'NMSetting8021x.phase1-fast-provisioning': 'gchararray',
    'NMSetting8021x.phase1-peaplabel': 'gchararray',
    'NMSetting8021x.phase1-peapver': 'gchararray',
    'NMSetting8021x.phase2-auth': 'gchararray',
    'NMSetting8021x.phase2-autheap': 'gchararray',
    'NMSetting8021x.phase2-ca-path': 'gchararray',
    'NMSetting8021x.phase2-private-key-password': 'gchararray',
    'NMSetting8021x.phase2-private-key-password-flags': 'guint',
    'NMSetting8021x.phase2-subject-match': 'gchararray',
    'NMSetting8021x.pin': 'gchararray',
    'NMSetting8021x.pin-flags': 'guint',
    'NMSetting8021x.private-key-password': 'gchararray',
    'NMSetting8021x.private-key-password-flags': 'guint',
    'NMSetting8021x.subject-match': 'gchararray',
    'NMSetting8021x.system-ca-certs': 'gboolean',
    'NMSettingAdsl.encapsulation': 'gchararray',
    'NMSettingAdsl.password': 'gchararray',
    'NMSettingAdsl.password-flags': 'guint',
    'NMSettingAdsl.protocol': 'gchararray',
    'NMSettingAdsl.username': 'gchararray',
    'NMSettingAdsl.vci': 'guint',
    'NMSettingAdsl.vpi': 'guint',
    'NMSettingBluetooth.type': 'gchararray',
    'NMSettingBond.interface-name': 'gchararray',
    'NMSettingBridge.ageing-time': 'guint',
    'NMSettingBridge.forward-delay': 'guint',
    'NMSettingBridge.hello-time': 'guint',
    'NMSettingBridge.interface-name': 'gchararray',
    'NMSettingBridge.max-age': 'guint',
    'NMSettingBridge.priority': 'guint',
    'NMSettingBridge.stp': 'gboolean',
    'NMSettingBridgePort.hairpin-mode': 'gboolean',
    'NMSettingBridgePort.path-cost': 'guint',
    'NMSettingBridgePort.priority': 'guint',
    'NMSettingCdma.number': 'gchararray',
    'NMSettingCdma.password': 'gchararray',
    'NMSettingCdma.password-flags': 'guint',
    'NMSettingCdma.username': 'gchararray',
    'NMSettingConnection.autoconnect': 'gboolean',
    'NMSettingConnection.gateway-ping-timeout': 'guint',
    'NMSettingConnection.id': 'gchararray',
    'NMSettingConnection.interface-name': 'gchararray',
    'NMSettingConnection.master': 'gchararray',
    'NMSettingConnection.read-only': 'gboolean',
    'NMSettingConnection.slave-type': 'gchararray',
    'NMSettingConnection.timestamp': 'guint64',
    'NMSettingConnection.type': 'gchararray',
    'NMSettingConnection.uuid': 'gchararray',
    'NMSettingConnection.zone': 'gchararray',
    'NMSettingDcb.app-fcoe-flags': 'guint',
    'NMSettingDcb.app-fcoe-mode': 'gchararray',
    'NMSettingDcb.app-fcoe-priority': 'gint',
    'NMSettingDcb.app-fip-flags': 'guint',
    'NMSettingDcb.app-fip-priority': 'gint',
    'NMSettingDcb.app-iscsi-flags': 'guint',
    'NMSettingDcb.app-iscsi-priority': 'gint',
    'NMSettingDcb.priority-flow-control-flags': 'guint',
    'NMSettingDcb.priority-group-flags': 'guint',
    'NMSettingGsm.allowed-bands': 'guint',
    'NMSettingGsm.apn': 'gchararray',
    'NMSettingGsm.home-only': 'gboolean',
    'NMSettingGsm.network-id': 'gchararray',
    'NMSettingGsm.network-type': 'gint',
    'NMSettingGsm.number': 'gchararray',
    'NMSettingGsm.password': 'gchararray',
    'NMSettingGsm.password-flags': 'guint',
    'NMSettingGsm.pin': 'gchararray',
    'NMSettingGsm.pin-flags': 'guint',
    'NMSettingGsm.username': 'gchararray',
    'NMSettingIP4Config.dhcp-client-id': 'gchararray',
    'NMSettingIP4Config.dhcp-hostname': 'gchararray',
    'NMSettingIP4Config.dhcp-send-hostname': 'gboolean',
    'NMSettingIP4Config.dhcp-timeout': 'guint',
    'NMSettingIP4Config.ignore-auto-dns': 'gboolean',
    'NMSettingIP4Config.ignore-auto-routes': 'gboolean',
    'NMSettingIP4Config.may-fail': 'gboolean',
    'NMSettingIP4Config.method': 'gchararray',
    'NMSettingIP4Config.never-default': 'gboolean',
    'NMSettingIP4Config.route-metric': 'gint64',
    'NMSettingIP6Config.dhcp-hostname': 'gchararray',
    'NMSettingIP6Config.ignore-auto-dns': 'gboolean',
    'NMSettingIP6Config.ignore-auto-routes': 'gboolean',
    'NMSettingIP6Config.ip6-privacy': 'gint',
    'NMSettingIP6Config.may-fail': 'gboolean',
    'NMSettingIP6Config.method': 'gchararray',
    'NMSettingIP6Config.never-default': 'gboolean',
    'NMSettingIP6Config.route-metric': 'gint64',
    'NMSettingInfiniband.mtu': 'guint',
    'NMSettingInfiniband.p-key': 'gint',
    'NMSettingInfiniband.parent': 'gchararray',
    'NMSettingInfiniband.transport-mode': 'gchararray',
    'NMSettingOlpcMesh.channel': 'guint',
    'NMSettingPPP.baud': 'guint',
    'NMSettingPPP.crtscts': 'gboolean',
    'NMSettingPPP.lcp-echo-failure': 'guint',
    'NMSettingPPP.lcp-echo-interval': 'guint',
    'NMSettingPPP.mppe-stateful': 'gboolean',
    'NMSettingPPP.mru': 'guint',
    'NMSettingPPP.mtu': 'guint',
    'NMSettingPPP.no-vj-comp': 'gboolean',
    'NMSettingPPP.noauth': 'gboolean',
    'NMSettingPPP.nobsdcomp': 'gboolean',
    'NMSettingPPP.nodeflate': 'gboolean',
    'NMSettingPPP.refuse-chap': 'gboolean',
    'NMSettingPPP.refuse-eap': 'gboolean',
    'NMSettingPPP.refuse-mschap': 'gboolean',
    'NMSettingPPP.refuse-mschapv2': 'gboolean',
    'NMSettingPPP.refuse-pap': 'gboolean',
    'NMSettingPPP.require-mppe': 'gboolean',
    'NMSettingPPP.require-mppe-128': 'gboolean',
    'NMSettingPPPOE.password': 'gchararray',
    'NMSettingPPPOE.password-flags': 'guint',
    'NMSettingPPPOE.service': 'gchararray',
    'NMSettingPPPOE.username': 'gchararray',
    'NMSettingSerial.baud': 'guint',
    'NMSettingSerial.bits': 'guint',
    'NMSettingSerial.parity': 'gchar',
    'NMSettingSerial.send-delay': 'guint64',
    'NMSettingSerial.stopbits': 'guint',
    'NMSettingTeam.config': 'gchararray',
    'NMSettingTeam.interface-name': 'gchararray',
    'NMSettingTeamPort.config': 'gchararray',
    'NMSettingVPN.persistent': 'gboolean',
    'NMSettingVPN.service-type': 'gchararray',
    'NMSettingVPN.user-name': 'gchararray',
    'NMSettingVlan.flags': 'guint',
    'NMSettingVlan.id': 'guint',
    'NMSettingVlan.interface-name': 'gchararray',
    'NMSettingVlan.parent': 'gchararray',
    'NMSettingWimax.network-name': 'gchararray',
    'NMSettingWired.auto-negotiate': 'gboolean',
    'NMSettingWired.duplex': 'gchararray',
    'NMSettingWired.mtu': 'guint',
    'NMSettingWired.port': 'gchararray',
    'NMSettingWired.s390-nettype': 'gchararray',
    'NMSettingWired.speed': 'guint',
    'NMSettingWireless.band': 'gchararray',
    'NMSettingWireless.channel': 'guint',
    'NMSettingWireless.hidden': 'gboolean',
    'NMSettingWireless.mode': 'gchararray',
    'NMSettingWireless.mtu': 'guint',
    'NMSettingWireless.powersave': 'guint',
    'NMSettingWireless.rate': 'guint',
    'NMSettingWireless.security': 'gchararray',
    'NMSettingWireless.tx-power': 'guint',
    'NMSettingWirelessSecurity.auth-alg': 'gchararray',
    'NMSettingWirelessSecurity.key-mgmt': 'gchararray',
    'NMSettingWirelessSecurity.leap-password': 'gchararray',
    'NMSettingWirelessSecurity.leap-password-flags': 'guint',
    'NMSettingWirelessSecurity.leap-username': 'gchararray',
    'NMSettingWirelessSecurity.psk': 'gchararray',
    'NMSettingWirelessSecurity.psk-flags': 'guint',
    'NMSettingWirelessSecurity.wep-key-flags': 'guint',
    'NMSettingWirelessSecurity.wep-key-type': 'guint',
    'NMSettingWirelessSecurity.wep-key0': 'gchararray',
    'NMSettingWirelessSecurity.wep-key1': 'gchararray',
    'NMSettingWirelessSecurity.wep-key2': 'gchararray',
    'NMSettingWirelessSecurity.wep-key3': 'gchararray',
    'NMSettingWirelessSecurity.wep-tx-keyidx': 'guint',
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
    'NMConnection::changed': '0.9.10',
    'NMSettingBridge.ageing-time': '0.9.8',
    'NMSettingBridge.forward-delay': '0.9.8',
    'NMSettingBridge.hello-time': '0.9.8',
    'NMSettingBridge.interface-name': '0.9.8',
    'NMSettingBridge.max-age': '0.9.8',
    'NMSettingBridge.priority': '0.9.8',
    'NMSettingBridge.stp': '0.9.8',
    'NMSettingBridgePort.hairpin-mode': '0.9.8',
    'NMSettingBridgePort.path-cost': '0.9.8',
    'NMSettingBridgePort.priority': '0.9.8',
    'NMSettingConnection.gateway-ping-timeout': '0.9.10',
    'NMSettingConnection.interface-name': '0.9.10',
    'NMSettingDcb.app-fcoe-flags': '0.9.10',
    'NMSettingDcb.app-fcoe-mode': '0.9.10',
    'NMSettingDcb.app-fcoe-priority': '0.9.10',
    'NMSettingDcb.app-fip-flags': '0.9.10',
    'NMSettingDcb.app-fip-priority': '0.9.10',
    'NMSettingDcb.app-iscsi-flags': '0.9.10',
    'NMSettingDcb.app-iscsi-priority': '0.9.10',
    'NMSettingDcb.priority-flow-control-flags': '0.9.10',
    'NMSettingDcb.priority-group-flags': '0.9.10',
    'NMSettingIP4Config.route-metric': '1.0',
    'NMSettingIP6Config.dhcp-hostname': '0.9.8',
    'NMSettingIP6Config.route-metric': '1.0',
    'NMSettingWireless.powersave': '1.2',
};
