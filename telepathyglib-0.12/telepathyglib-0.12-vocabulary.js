// The widget vocabulary of TelepathyGLib-0.12 as runtime data.
//
// GENERATED — do not edit. Provenance: TelepathyGLib-0.12 — prop(s) no TypeScript value satisfies: TelepathyGLib.AddDispatchOperationContext.channels TelepathyGLib.ChannelDispatchOperation.channels TelepathyGLib.HandleChannelsContext.channels TelepathyGLib.HandleChannelsContext.requests-satisfied TelepathyGLib.ObserveChannelsContext.channels TelepathyGLib.ObserveChannelsContext.requests TelepathyGLib.SimpleApprover.callback TelepathyGLib.SimpleApprover.destroy TelepathyGLib.SimpleApprover.user-data TelepathyGLib.SimpleHandler.callback TelepathyGLib.SimpleHandler.destroy TelepathyGLib.SimpleHandler.user-data TelepathyGLib.SimpleObserver.callback TelepathyGLib.SimpleObserver.destroy TelepathyGLib.SimpleObserver.user-data
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'TelepathyGLib',
    version: '0.12',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['TelepathyGLib.AddDispatchOperationContext.channels', 'TelepathyGLib.ChannelDispatchOperation.channels', 'TelepathyGLib.HandleChannelsContext.channels', 'TelepathyGLib.HandleChannelsContext.requests-satisfied', 'TelepathyGLib.ObserveChannelsContext.channels', 'TelepathyGLib.ObserveChannelsContext.requests', 'TelepathyGLib.SimpleApprover.callback', 'TelepathyGLib.SimpleApprover.destroy', 'TelepathyGLib.SimpleApprover.user-data', 'TelepathyGLib.SimpleHandler.callback', 'TelepathyGLib.SimpleHandler.destroy', 'TelepathyGLib.SimpleHandler.user-data', 'TelepathyGLib.SimpleObserver.callback', 'TelepathyGLib.SimpleObserver.destroy', 'TelepathyGLib.SimpleObserver.user-data'],
    unresolvedProps: [],
    identifierPrefixes: ['Tp'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    TpAccountChannelRequest: ['account', 'request-vardict', 'user-action-time'],
    TpAccountRequest: ['account-manager', 'connection-manager', 'display-name', 'protocol'],
    TpAddDispatchOperationContext: ['account', 'channels', 'connection', 'dispatch-operation'],
    TpBaseClient: ['account-manager', 'channel-factory', 'dbus-daemon', 'factory', 'name', 'uniquify-name'],
    TpCallContent: ['channel', 'connection'],
    TpCallStream: ['connection', 'content'],
    TpCapabilities: ['contact-specific'],
    TpChannel: ['connection'],
    TpChannelDispatchOperation: ['account', 'channels', 'connection'],
    TpChannelRequest: ['channel-factory'],
    TpConnectionManager: ['always-introspect', 'manager-file'],
    TpContactSearch: ['account', 'limit', 'server'],
    TpContactSearchResult: ['identifier'],
    TpHandleChannelsContext: ['account', 'channels', 'connection', 'requests-satisfied', 'user-action-time'],
    TpObserveChannelsContext: ['account', 'channels', 'connection', 'dispatch-operation', 'requests'],
    TpProtocol: ['cm-name', 'protocol-name'],
    TpProxy: ['bus-name', 'dbus-daemon', 'factory', 'object-path'],
    TpRoomList: ['account', 'server'],
    TpSignalledMessage: ['sender'],
    TpSimpleApprover: ['callback', 'destroy', 'user-data'],
    TpSimpleClientFactory: ['dbus-daemon'],
    TpSimpleHandler: ['bypass-approval', 'callback', 'destroy', 'requests', 'user-data'],
    TpSimpleObserver: ['callback', 'destroy', 'recover', 'user-data'],
    TpStreamTubeConnection: ['channel', 'contact', 'socket-connection'],
    TpTLSCertificate: ['parent'],
    TpTLSCertificateRejection: ['dbus-error', 'details', 'error', 'reason'],
};

export const OWN_SIGNALS = {
    TpAccount: ['avatar-changed', 'presence-changed', 'status-changed'],
    TpAccountChannelRequest: ['re-handled'],
    TpAccountManager: ['account-disabled', 'account-enabled', 'account-removed', 'account-validity-changed', 'most-available-presence-changed'],
    TpBaseClient: ['request-added', 'request-removed'],
    TpCallChannel: ['content-added', 'content-removed', 'members-changed', 'state-changed'],
    TpCallContent: ['removed', 'streams-added', 'streams-removed'],
    TpCallStream: ['local-sending-state-changed', 'remote-members-changed'],
    TpChannel: ['chat-state-changed', 'group-contacts-changed', 'group-flags-changed', 'group-members-changed', 'group-members-changed-detailed'],
    TpChannelDispatchOperation: ['channel-lost'],
    TpChannelRequest: ['succeeded', 'succeeded-with-channel'],
    TpConnection: ['balance-changed', 'blocked-contacts-changed', 'contact-list-changed', 'group-renamed', 'groups-created', 'groups-removed'],
    TpConnectionManager: ['activated', 'exited', 'got-info'],
    TpContact: ['contact-groups-changed', 'presence-changed', 'subscription-states-changed'],
    TpContactSearch: ['search-results-received'],
    TpDebugClient: ['new-debug-message'],
    TpHandleChannelsContext: ['done'],
    TpProxy: ['interface-added', 'invalidated'],
    TpRoomList: ['failed', 'got-room'],
    TpStreamTubeChannel: ['incoming'],
    TpStreamTubeConnection: ['closed'],
    TpTextChannel: ['contact-chat-state-changed', 'message-received', 'message-sent', 'pending-message-removed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    TpAccount: ['TpAccount', 'TpProxy', 'GObject'],
    TpAccountChannelRequest: ['TpAccountChannelRequest', 'GObject'],
    TpAccountManager: ['TpAccountManager', 'TpProxy', 'GObject'],
    TpAccountRequest: ['TpAccountRequest', 'GObject'],
    TpAddDispatchOperationContext: ['TpAddDispatchOperationContext', 'GObject'],
    TpAutomaticClientFactory: ['TpAutomaticClientFactory', 'TpSimpleClientFactory', 'GObject'],
    TpAutomaticProxyFactory: ['TpAutomaticProxyFactory', 'GObject', 'TpClientChannelFactory'],
    TpBasicProxyFactory: ['TpBasicProxyFactory', 'GObject', 'TpClientChannelFactory'],
    TpCallChannel: ['TpCallChannel', 'TpChannel', 'TpProxy', 'GObject'],
    TpCallContent: ['TpCallContent', 'TpProxy', 'GObject'],
    TpCallStream: ['TpCallStream', 'TpProxy', 'GObject'],
    TpCapabilities: ['TpCapabilities', 'GObject'],
    TpChannel: ['TpChannel', 'TpProxy', 'GObject'],
    TpChannelDispatchOperation: ['TpChannelDispatchOperation', 'TpProxy', 'GObject'],
    TpChannelDispatcher: ['TpChannelDispatcher', 'TpProxy', 'GObject'],
    TpChannelRequest: ['TpChannelRequest', 'TpProxy', 'GObject'],
    TpClientMessage: ['TpClientMessage', 'TpMessage', 'GObject'],
    TpConnection: ['TpConnection', 'TpProxy', 'GObject'],
    TpConnectionManager: ['TpConnectionManager', 'TpProxy', 'GObject'],
    TpContact: ['TpContact', 'GObject'],
    TpContactSearch: ['TpContactSearch', 'GObject', 'GAsyncInitable'],
    TpContactSearchResult: ['TpContactSearchResult', 'GObject'],
    TpDBusDaemon: ['TpDBusDaemon', 'TpProxy', 'GObject'],
    TpDBusTubeChannel: ['TpDBusTubeChannel', 'TpChannel', 'TpProxy', 'GObject'],
    TpDebugClient: ['TpDebugClient', 'TpProxy', 'GObject'],
    TpDebugMessage: ['TpDebugMessage', 'GObject'],
    TpFileTransferChannel: ['TpFileTransferChannel', 'TpChannel', 'TpProxy', 'GObject'],
    TpHandleChannelsContext: ['TpHandleChannelsContext', 'GObject'],
    TpMessage: ['TpMessage', 'GObject'],
    TpObserveChannelsContext: ['TpObserveChannelsContext', 'GObject'],
    TpProtocol: ['TpProtocol', 'TpProxy', 'GObject'],
    TpProxy: ['TpProxy', 'GObject'],
    TpRoomInfo: ['TpRoomInfo', 'GObject'],
    TpRoomList: ['TpRoomList', 'GObject', 'GAsyncInitable'],
    TpSignalledMessage: ['TpSignalledMessage', 'TpMessage', 'GObject'],
    TpSimpleApprover: ['TpSimpleApprover', 'TpBaseClient', 'GObject'],
    TpSimpleClientFactory: ['TpSimpleClientFactory', 'GObject'],
    TpSimpleHandler: ['TpSimpleHandler', 'TpBaseClient', 'GObject'],
    TpSimpleObserver: ['TpSimpleObserver', 'TpBaseClient', 'GObject'],
    TpStreamTubeChannel: ['TpStreamTubeChannel', 'TpChannel', 'TpProxy', 'GObject'],
    TpStreamTubeConnection: ['TpStreamTubeConnection', 'GObject'],
    TpTLSCertificate: ['TpTLSCertificate', 'TpProxy', 'GObject'],
    TpTLSCertificateRejection: ['TpTLSCertificateRejection', 'GObject'],
    TpTextChannel: ['TpTextChannel', 'TpChannel', 'TpProxy', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

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
export const ENUM_VALUES = {};

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
    'TpAccount': '0.7.32',
    'TpAccount::avatar-changed': '0.23.0',
    'TpAccount::presence-changed': '0.9.0',
    'TpAccount::status-changed': '0.9.0',
    'TpAccountChannelRequest': '0.11.12',
    'TpAccountChannelRequest.account': '0.11.12',
    'TpAccountChannelRequest.request-vardict': '0.19.10',
    'TpAccountChannelRequest.user-action-time': '0.11.12',
    'TpAccountChannelRequest::re-handled': '0.11.12',
    'TpAccountManager': '0.7.32',
    'TpAccountManager::account-disabled': '0.9.0',
    'TpAccountManager::account-enabled': '0.9.0',
    'TpAccountManager::account-removed': '0.9.0',
    'TpAccountManager::account-validity-changed': '0.9.0',
    'TpAccountManager::most-available-presence-changed': '0.9.0',
    'TpAccountRequest': '0.19.1',
    'TpAccountRequest.account-manager': '0.19.1',
    'TpAccountRequest.connection-manager': '0.19.1',
    'TpAccountRequest.display-name': '0.19.1',
    'TpAccountRequest.protocol': '0.19.1',
    'TpAddDispatchOperationContext': '0.11.5',
    'TpAddDispatchOperationContext.account': '0.11.5',
    'TpAddDispatchOperationContext.channels': '0.11.5',
    'TpAddDispatchOperationContext.connection': '0.11.5',
    'TpAddDispatchOperationContext.dispatch-operation': '0.11.5',
    'TpAutomaticClientFactory': '0.15.5',
    'TpAutomaticProxyFactory': '0.13.2',
    'TpBaseClient': '0.11.5',
    'TpBaseClient.account-manager': '0.11.14',
    'TpBaseClient.channel-factory': '0.13.2',
    'TpBaseClient.dbus-daemon': '0.11.5',
    'TpBaseClient.factory': '0.15.5',
    'TpBaseClient.name': '0.11.5',
    'TpBaseClient.uniquify-name': '0.11.5',
    'TpBaseClient::request-added': '0.11.6',
    'TpBaseClient::request-removed': '0.11.6',
    'TpBasicProxyFactory': '0.13.2',
    'TpCallChannel': '0.17.5',
    'TpCallChannel::content-added': '0.17.5',
    'TpCallChannel::content-removed': '0.17.5',
    'TpCallChannel::members-changed': '0.17.5',
    'TpCallChannel::state-changed': '0.17.5',
    'TpCallContent': '0.17.5',
    'TpCallContent.channel': '0.17.6',
    'TpCallContent.connection': '0.17.5',
    'TpCallContent::removed': '0.17.5',
    'TpCallContent::streams-added': '0.17.5',
    'TpCallContent::streams-removed': '0.17.5',
    'TpCallStream': '0.17.5',
    'TpCallStream.connection': '0.17.5',
    'TpCallStream.content': '0.17.6',
    'TpCallStream::local-sending-state-changed': '0.17.5',
    'TpCallStream::remote-members-changed': '0.17.5',
    'TpCapabilities': '0.11.3',
    'TpChannel': '0.7.1',
    'TpChannel::chat-state-changed': '0.11.3',
    'TpChannel::group-contacts-changed': '0.15.6',
    'TpChannel::group-flags-changed': '0.7.12',
    'TpChannel::group-members-changed': '0.7.12',
    'TpChannel::group-members-changed-detailed': '0.7.21',
    'TpChannelDispatchOperation': '0.7.32',
    'TpChannelDispatchOperation.account': '0.11.5',
    'TpChannelDispatchOperation.channels': '0.11.5',
    'TpChannelDispatchOperation.connection': '0.11.5',
    'TpChannelDispatchOperation::channel-lost': '0.11.5',
    'TpChannelDispatcher': '0.7.32',
    'TpChannelRequest': '0.7.32',
    'TpChannelRequest.channel-factory': '0.13.14',
    'TpChannelRequest::succeeded-with-channel': '0.13.14',
    'TpClientChannelFactory': '0.13.6',
    'TpClientMessage': '0.13.9',
    'TpConnection': '0.7.1',
    'TpConnection::balance-changed': '0.15.1',
    'TpConnection::blocked-contacts-changed': '0.17.0',
    'TpConnection::contact-list-changed': '0.15.5',
    'TpConnection::group-renamed': '0.15.5',
    'TpConnection::groups-created': '0.15.5',
    'TpConnection::groups-removed': '0.15.5',
    'TpConnectionManager': '0.7.1',
    'TpContact': '0.7.18',
    'TpContact::contact-groups-changed': '0.13.14',
    'TpContact::presence-changed': '0.11.7',
    'TpContact::subscription-states-changed': '0.13.12',
    'TpContactSearch': '0.13.11',
    'TpContactSearch.account': '0.13.11',
    'TpContactSearch.limit': '0.13.11',
    'TpContactSearch.server': '0.13.11',
    'TpContactSearch::search-results-received': '0.13.11',
    'TpContactSearchResult': '0.13.11',
    'TpDBusDaemon': '0.7.1',
    'TpDBusTubeChannel': '0.18.0',
    'TpDebugClient': '0.19.0',
    'TpDebugClient::new-debug-message': '0.19.0',
    'TpDebugMessage': '0.19.0',
    'TpFileTransferChannel': '0.15.5',
    'TpHandleChannelsContext': '0.11.6',
    'TpHandleChannelsContext.account': '0.11.6',
    'TpHandleChannelsContext.channels': '0.11.6',
    'TpHandleChannelsContext.connection': '0.11.6',
    'TpHandleChannelsContext.requests-satisfied': '0.11.6',
    'TpHandleChannelsContext.user-action-time': '0.11.6',
    'TpHandleChannelsContext::done': '0.11.6',
    'TpObserveChannelsContext': '0.11.5',
    'TpObserveChannelsContext.account': '0.11.5',
    'TpObserveChannelsContext.channels': '0.11.5',
    'TpObserveChannelsContext.connection': '0.11.5',
    'TpObserveChannelsContext.dispatch-operation': '0.11.5',
    'TpObserveChannelsContext.requests': '0.11.5',
    'TpProtocol': '0.11.11',
    'TpProtocol.cm-name': '0.19.1',
    'TpProtocol.protocol-name': '0.11.11',
    'TpProxy': '0.7.1',
    'TpRoomInfo': '0.19.0',
    'TpRoomList': '0.19.0',
    'TpRoomList.account': '0.19.0',
    'TpRoomList.server': '0.19.0',
    'TpRoomList::failed': '0.19.0',
    'TpRoomList::got-room': '0.19.0',
    'TpSignalledMessage': '0.13.9',
    'TpSignalledMessage.sender': '0.13.9',
    'TpSimpleApprover': '0.11.5',
    'TpSimpleApprover.callback': '0.11.5',
    'TpSimpleApprover.destroy': '0.11.5',
    'TpSimpleApprover.user-data': '0.11.5',
    'TpSimpleClientFactory': '0.15.5',
    'TpSimpleHandler': '0.11.6',
    'TpSimpleHandler.bypass-approval': '0.11.6',
    'TpSimpleHandler.callback': '0.11.6',
    'TpSimpleHandler.destroy': '0.11.6',
    'TpSimpleHandler.requests': '0.11.6',
    'TpSimpleHandler.user-data': '0.11.6',
    'TpSimpleObserver': '0.11.5',
    'TpSimpleObserver.callback': '0.11.5',
    'TpSimpleObserver.destroy': '0.11.5',
    'TpSimpleObserver.recover': '0.11.5',
    'TpSimpleObserver.user-data': '0.11.5',
    'TpStreamTubeChannel': '0.13.2',
    'TpStreamTubeConnection': '0.13.2',
    'TpStreamTubeConnection.channel': '0.13.2',
    'TpStreamTubeConnection.contact': '0.13.2',
    'TpStreamTubeConnection.socket-connection': '0.13.2',
    'TpStreamTubeConnection::closed': '0.13.2',
    'TpTLSCertificate': '0.19.0',
    'TpTLSCertificate.parent': '0.19.0',
    'TpTLSCertificateRejection': '0.19.0',
    'TpTLSCertificateRejection.dbus-error': '0.19.0',
    'TpTLSCertificateRejection.details': '0.19.0',
    'TpTLSCertificateRejection.error': '0.19.0',
    'TpTLSCertificateRejection.reason': '0.19.0',
    'TpTextChannel': '0.13.10',
    'TpTextChannel::contact-chat-state-changed': '0.19.0',
    'TpTextChannel::message-received': '0.13.10',
    'TpTextChannel::message-sent': '0.13.10',
    'TpTextChannel::pending-message-removed': '0.13.10',
};
