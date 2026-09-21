// The widget vocabulary of EDataServer-1.2 as runtime data.
//
// GENERATED — do not edit. Provenance: EDataServer-1.2 — dropped empty base(s): GObject.TypeModule GObject.TypePlugin Gio.NetworkMonitor
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'EDataServer',
    version: '1.2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.TypeModule', 'GObject.TypePlugin', 'Gio.NetworkMonitor'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['E'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/soup-3.0/vocabulary'],
};

export const OWN_PROPS = {
    EExtension: ['extensible'],
    EModule: ['filename'],
    ENetworkMonitor: ['gio-name'],
    ESoupSession: ['credentials', 'force-http1', 'handle-backoff-responses', 'source'],
    ESource: ['display-name', 'enabled', 'main-context', 'parent', 'uid'],
    ESourceAddressBook: ['order'],
    ESourceAlarms: ['for-every-event', 'include-me', 'last-notified'],
    ESourceAuthentication: ['credential-name', 'host', 'is-external', 'method', 'port', 'proxy-uid', 'remember-password', 'user'],
    ESourceAutocomplete: ['include-me'],
    ESourceAutoconfig: ['revision'],
    ESourceBackend: ['backend-name'],
    ESourceCollection: ['allow-sources-rename', 'calendar-enabled', 'calendar-url', 'contacts-enabled', 'contacts-url', 'identity', 'mail-enabled'],
    ESourceConflictSearch: ['include-me'],
    ESourceContacts: ['include-me'],
    ESourceCredentialsProvider: ['registry'],
    ESourceExtension: ['source'],
    ESourceGoa: ['account-id', 'address', 'calendar-url', 'contacts-url', 'name'],
    ESourceLDAP: ['authentication', 'can-browse', 'filter', 'limit', 'root-dn', 'scope', 'security'],
    ESourceLocal: ['custom-file', 'email-address', 'writable'],
    ESourceMDN: ['response-policy'],
    ESourceMailAccount: ['archive-folder', 'builtin', 'identity-uid', 'mark-seen', 'mark-seen-timeout', 'needs-initial-setup'],
    ESourceMailComposition: ['bcc', 'cc', 'composer-mode', 'drafts-folder', 'language', 'reply-style', 'sign-imip', 'start-bottom', 'templates-folder', 'top-signature'],
    ESourceMailIdentity: ['address', 'aliases', 'name', 'organization', 'reply-to', 'signature-uid'],
    ESourceMailSignature: ['mime-type'],
    ESourceMailSubmission: ['replies-to-origin-folder', 'sent-folder', 'transport-uid', 'use-sent-folder'],
    ESourceOffline: ['stay-synchronized'],
    ESourceOpenPGP: ['always-trust', 'ask-send-public-key', 'encrypt-by-default', 'encrypt-to-self', 'key-id', 'locate-keys', 'prefer-inline', 'send-prefer-encrypt', 'send-public-key', 'sign-by-default', 'signing-algorithm'],
    ESourceProxy: ['autoconfig-url', 'ftp-host', 'ftp-port', 'http-auth-password', 'http-auth-user', 'http-host', 'http-port', 'http-use-auth', 'https-host', 'https-port', 'ignore-hosts', 'method', 'socks-host', 'socks-port'],
    ESourceRefresh: ['enabled', 'enabled-on-metered-network', 'interval-minutes'],
    ESourceRegistry: ['default-address-book', 'default-calendar', 'default-mail-account', 'default-mail-identity', 'default-memo-list', 'default-task-list'],
    ESourceRegistryWatcher: ['extension-name', 'registry'],
    ESourceResource: ['identity'],
    ESourceRevisionGuards: ['enabled'],
    ESourceSMIME: ['encrypt-by-default', 'encrypt-to-self', 'encryption-certificate', 'sign-by-default', 'signing-algorithm', 'signing-certificate'],
    ESourceSecurity: ['method', 'secure'],
    ESourceSelectable: ['color', 'groups', 'order', 'selected'],
    ESourceUoa: ['account-id'],
    ESourceWeather: ['location', 'units'],
    ESourceWebDAVNotes: ['default-ext'],
    ESourceWebdav: ['avoid-ifmatch', 'calendar-auto-schedule', 'color', 'display-name', 'email-address', 'limit-download-days', 'order', 'resource-path', 'resource-query', 'ssl-trust', 'timeout', 'uri'],
};

export const OWN_SIGNALS = {
    ESource: ['authenticate', 'changed', 'credentials-required'],
    ESourceRegistry: ['credentials-required', 'source-added', 'source-changed', 'source-disabled', 'source-enabled', 'source-removed'],
    ESourceRegistryWatcher: ['appeared', 'disappeared', 'filter'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    EGDataSession: ['EGDataSession', 'ESoupSession', 'SoupSession', 'GObject'],
    EModule: ['EModule', 'GObject'],
    EMsOapxbc: ['EMsOapxbc', 'GObject'],
    ENetworkMonitor: ['ENetworkMonitor', 'GObject', 'GInitable'],
    EOAuth2ServiceGoogle: ['EOAuth2ServiceGoogle', 'EOAuth2ServiceBase', 'EExtension', 'GObject', 'EOAuth2Service'],
    EOAuth2ServiceOutlook: ['EOAuth2ServiceOutlook', 'EOAuth2ServiceBase', 'EExtension', 'GObject', 'EOAuth2Service'],
    EOAuth2ServiceYahoo: ['EOAuth2ServiceYahoo', 'EOAuth2ServiceBase', 'EExtension', 'GObject', 'EOAuth2Service'],
    EOAuth2Services: ['EOAuth2Services', 'GObject', 'EExtensible'],
    ESoupAuthBearer: ['ESoupAuthBearer', 'SoupAuth', 'GObject'],
    ESoupSession: ['ESoupSession', 'SoupSession', 'GObject'],
    ESource: ['ESource', 'GObject', 'GInitable', 'GProxyResolver'],
    ESourceAddressBook: ['ESourceAddressBook', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceAlarms: ['ESourceAlarms', 'ESourceExtension', 'GObject'],
    ESourceAuthentication: ['ESourceAuthentication', 'ESourceExtension', 'GObject'],
    ESourceAutocomplete: ['ESourceAutocomplete', 'ESourceExtension', 'GObject'],
    ESourceAutoconfig: ['ESourceAutoconfig', 'ESourceExtension', 'GObject'],
    ESourceCalendar: ['ESourceCalendar', 'ESourceSelectable', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceCollection: ['ESourceCollection', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceConflictSearch: ['ESourceConflictSearch', 'ESourceExtension', 'GObject'],
    ESourceContacts: ['ESourceContacts', 'ESourceExtension', 'GObject'],
    ESourceCredentialsProvider: ['ESourceCredentialsProvider', 'GObject', 'EExtensible'],
    ESourceCredentialsProviderImplOAuth2: ['ESourceCredentialsProviderImplOAuth2', 'ESourceCredentialsProviderImpl', 'EExtension', 'GObject'],
    ESourceCredentialsProviderImplPassword: ['ESourceCredentialsProviderImplPassword', 'ESourceCredentialsProviderImpl', 'EExtension', 'GObject'],
    ESourceGoa: ['ESourceGoa', 'ESourceExtension', 'GObject'],
    ESourceLDAP: ['ESourceLDAP', 'ESourceExtension', 'GObject'],
    ESourceLocal: ['ESourceLocal', 'ESourceExtension', 'GObject'],
    ESourceMDN: ['ESourceMDN', 'ESourceExtension', 'GObject'],
    ESourceMailAccount: ['ESourceMailAccount', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceMailComposition: ['ESourceMailComposition', 'ESourceExtension', 'GObject'],
    ESourceMailIdentity: ['ESourceMailIdentity', 'ESourceExtension', 'GObject'],
    ESourceMailSignature: ['ESourceMailSignature', 'ESourceExtension', 'GObject'],
    ESourceMailSubmission: ['ESourceMailSubmission', 'ESourceExtension', 'GObject'],
    ESourceMailTransport: ['ESourceMailTransport', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceMemoList: ['ESourceMemoList', 'ESourceSelectable', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceOffline: ['ESourceOffline', 'ESourceExtension', 'GObject'],
    ESourceOpenPGP: ['ESourceOpenPGP', 'ESourceExtension', 'GObject'],
    ESourceProxy: ['ESourceProxy', 'ESourceExtension', 'GObject'],
    ESourceRefresh: ['ESourceRefresh', 'ESourceExtension', 'GObject'],
    ESourceRegistry: ['ESourceRegistry', 'GObject', 'GAsyncInitable', 'GInitable'],
    ESourceRegistryWatcher: ['ESourceRegistryWatcher', 'GObject'],
    ESourceResource: ['ESourceResource', 'ESourceExtension', 'GObject'],
    ESourceRevisionGuards: ['ESourceRevisionGuards', 'ESourceExtension', 'GObject'],
    ESourceSMIME: ['ESourceSMIME', 'ESourceExtension', 'GObject'],
    ESourceSecurity: ['ESourceSecurity', 'ESourceExtension', 'GObject'],
    ESourceTaskList: ['ESourceTaskList', 'ESourceSelectable', 'ESourceBackend', 'ESourceExtension', 'GObject'],
    ESourceUoa: ['ESourceUoa', 'ESourceExtension', 'GObject'],
    ESourceWeather: ['ESourceWeather', 'ESourceExtension', 'GObject'],
    ESourceWebDAVNotes: ['ESourceWebDAVNotes', 'ESourceExtension', 'GObject'],
    ESourceWebdav: ['ESourceWebdav', 'ESourceExtension', 'GObject'],
    EWebDAVSession: ['EWebDAVSession', 'ESoupSession', 'SoupSession', 'GObject'],
    EXmlDocument: ['EXmlDocument', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EConflictResolution: ['fail', 'use-newer', 'keep-server', 'keep-local', 'write-copy'],
    EMdnResponsePolicy: ['never', 'always', 'ask'],
    EProxyMethod: ['default', 'manual', 'auto', 'none'],
    ESourceAuthenticationResult: ['unknown', 'error', 'error-ssl-failed', 'accepted', 'rejected', 'required'],
    ESourceConnectionStatus: ['disconnected', 'awaiting-credentials', 'ssl-failed', 'connecting', 'connected'],
    ESourceCredentialsReason: ['unknown', 'required', 'rejected', 'ssl-failed', 'error'],
    ESourceLDAPAuthentication: ['none', 'email', 'binddn'],
    ESourceLDAPScope: ['onelevel', 'subtree'],
    ESourceLDAPSecurity: ['none', 'ldaps', 'starttls'],
    ESourceMailCompositionReplyStyle: ['default', 'quoted', 'do-not-quote', 'attach', 'outlook'],
    ESourceWeatherUnits: ['fahrenheit', 'centigrade', 'kelvin'],
    EThreeState: ['off', 'on', 'inconsistent'],
    ETrustPromptResponse: ['unknown', 'reject', 'accept', 'accept-temporarily', 'reject-temporarily'],
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
    'EConflictResolution.fail': 0,
    'EConflictResolution.keep-local': 3,
    'EConflictResolution.keep-server': 2,
    'EConflictResolution.use-newer': 1,
    'EConflictResolution.write-copy': 4,
    'EMdnResponsePolicy.always': 1,
    'EMdnResponsePolicy.ask': 2,
    'EMdnResponsePolicy.never': 0,
    'EProxyMethod.auto': 2,
    'EProxyMethod.default': 0,
    'EProxyMethod.manual': 1,
    'EProxyMethod.none': 3,
    'ESourceAuthenticationResult.accepted': 2,
    'ESourceAuthenticationResult.error': 0,
    'ESourceAuthenticationResult.error-ssl-failed': 1,
    'ESourceAuthenticationResult.rejected': 3,
    'ESourceAuthenticationResult.required': 4,
    'ESourceAuthenticationResult.unknown': -1,
    'ESourceConnectionStatus.awaiting-credentials': 1,
    'ESourceConnectionStatus.connected': 4,
    'ESourceConnectionStatus.connecting': 3,
    'ESourceConnectionStatus.disconnected': 0,
    'ESourceConnectionStatus.ssl-failed': 2,
    'ESourceCredentialsReason.error': 4,
    'ESourceCredentialsReason.rejected': 2,
    'ESourceCredentialsReason.required': 1,
    'ESourceCredentialsReason.ssl-failed': 3,
    'ESourceCredentialsReason.unknown': 0,
    'ESourceLDAPAuthentication.binddn': 2,
    'ESourceLDAPAuthentication.email': 1,
    'ESourceLDAPAuthentication.none': 0,
    'ESourceLDAPScope.onelevel': 0,
    'ESourceLDAPScope.subtree': 1,
    'ESourceLDAPSecurity.ldaps': 1,
    'ESourceLDAPSecurity.none': 0,
    'ESourceLDAPSecurity.starttls': 2,
    'ESourceMailCompositionReplyStyle.attach': 3,
    'ESourceMailCompositionReplyStyle.default': 0,
    'ESourceMailCompositionReplyStyle.do-not-quote': 2,
    'ESourceMailCompositionReplyStyle.outlook': 4,
    'ESourceMailCompositionReplyStyle.quoted': 1,
    'ESourceWeatherUnits.centigrade': 1,
    'ESourceWeatherUnits.fahrenheit': 0,
    'ESourceWeatherUnits.kelvin': 2,
    'EThreeState.inconsistent': 2,
    'EThreeState.off': 0,
    'EThreeState.on': 1,
    'ETrustPromptResponse.accept': 1,
    'ETrustPromptResponse.accept-temporarily': 2,
    'ETrustPromptResponse.reject': 0,
    'ETrustPromptResponse.reject-temporarily': 3,
    'ETrustPromptResponse.unknown': -1,
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
export const PROP_ENUMS = {
    'ESourceLDAP.authentication': 'ESourceLDAPAuthentication',
    'ESourceLDAP.scope': 'ESourceLDAPScope',
    'ESourceLDAP.security': 'ESourceLDAPSecurity',
    'ESourceMDN.response-policy': 'EMdnResponsePolicy',
    'ESourceMailAccount.mark-seen': 'EThreeState',
    'ESourceMailComposition.reply-style': 'ESourceMailCompositionReplyStyle',
    'ESourceMailComposition.start-bottom': 'EThreeState',
    'ESourceMailComposition.top-signature': 'EThreeState',
    'ESourceProxy.method': 'EProxyMethod',
    'ESourceWeather.units': 'ESourceWeatherUnits',
};

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
    'EExtension.extensible': 'EExtensible',
    'EModule.filename': 'gchararray',
    'ENetworkMonitor.gio-name': 'gchararray',
    'ESoupSession.force-http1': 'gboolean',
    'ESoupSession.handle-backoff-responses': 'gboolean',
    'ESoupSession.source': 'ESource',
    'ESource.display-name': 'gchararray',
    'ESource.enabled': 'gboolean',
    'ESource.parent': 'gchararray',
    'ESource.uid': 'gchararray',
    'ESourceAddressBook.order': 'guint',
    'ESourceAlarms.for-every-event': 'gboolean',
    'ESourceAlarms.include-me': 'gboolean',
    'ESourceAlarms.last-notified': 'gchararray',
    'ESourceAuthentication.credential-name': 'gchararray',
    'ESourceAuthentication.host': 'gchararray',
    'ESourceAuthentication.is-external': 'gboolean',
    'ESourceAuthentication.method': 'gchararray',
    'ESourceAuthentication.port': 'guint',
    'ESourceAuthentication.proxy-uid': 'gchararray',
    'ESourceAuthentication.remember-password': 'gboolean',
    'ESourceAuthentication.user': 'gchararray',
    'ESourceAutocomplete.include-me': 'gboolean',
    'ESourceAutoconfig.revision': 'gchararray',
    'ESourceBackend.backend-name': 'gchararray',
    'ESourceCollection.allow-sources-rename': 'gboolean',
    'ESourceCollection.calendar-enabled': 'gboolean',
    'ESourceCollection.calendar-url': 'gchararray',
    'ESourceCollection.contacts-enabled': 'gboolean',
    'ESourceCollection.contacts-url': 'gchararray',
    'ESourceCollection.identity': 'gchararray',
    'ESourceCollection.mail-enabled': 'gboolean',
    'ESourceConflictSearch.include-me': 'gboolean',
    'ESourceContacts.include-me': 'gboolean',
    'ESourceCredentialsProvider.registry': 'GObject',
    'ESourceExtension.source': 'ESource',
    'ESourceGoa.account-id': 'gchararray',
    'ESourceGoa.address': 'gchararray',
    'ESourceGoa.calendar-url': 'gchararray',
    'ESourceGoa.contacts-url': 'gchararray',
    'ESourceGoa.name': 'gchararray',
    'ESourceLDAP.authentication': 'ESourceLDAPAuthentication',
    'ESourceLDAP.can-browse': 'gboolean',
    'ESourceLDAP.filter': 'gchararray',
    'ESourceLDAP.limit': 'guint',
    'ESourceLDAP.root-dn': 'gchararray',
    'ESourceLDAP.scope': 'ESourceLDAPScope',
    'ESourceLDAP.security': 'ESourceLDAPSecurity',
    'ESourceLocal.custom-file': 'GFile',
    'ESourceLocal.email-address': 'gchararray',
    'ESourceLocal.writable': 'gboolean',
    'ESourceMDN.response-policy': 'EMdnResponsePolicy',
    'ESourceMailAccount.archive-folder': 'gchararray',
    'ESourceMailAccount.builtin': 'gboolean',
    'ESourceMailAccount.identity-uid': 'gchararray',
    'ESourceMailAccount.mark-seen': 'EThreeState',
    'ESourceMailAccount.mark-seen-timeout': 'gint',
    'ESourceMailAccount.needs-initial-setup': 'gboolean',
    'ESourceMailComposition.composer-mode': 'gchararray',
    'ESourceMailComposition.drafts-folder': 'gchararray',
    'ESourceMailComposition.language': 'gchararray',
    'ESourceMailComposition.reply-style': 'ESourceMailCompositionReplyStyle',
    'ESourceMailComposition.sign-imip': 'gboolean',
    'ESourceMailComposition.start-bottom': 'EThreeState',
    'ESourceMailComposition.templates-folder': 'gchararray',
    'ESourceMailComposition.top-signature': 'EThreeState',
    'ESourceMailIdentity.address': 'gchararray',
    'ESourceMailIdentity.aliases': 'gchararray',
    'ESourceMailIdentity.name': 'gchararray',
    'ESourceMailIdentity.organization': 'gchararray',
    'ESourceMailIdentity.reply-to': 'gchararray',
    'ESourceMailIdentity.signature-uid': 'gchararray',
    'ESourceMailSignature.mime-type': 'gchararray',
    'ESourceMailSubmission.replies-to-origin-folder': 'gboolean',
    'ESourceMailSubmission.sent-folder': 'gchararray',
    'ESourceMailSubmission.transport-uid': 'gchararray',
    'ESourceMailSubmission.use-sent-folder': 'gboolean',
    'ESourceOffline.stay-synchronized': 'gboolean',
    'ESourceOpenPGP.always-trust': 'gboolean',
    'ESourceOpenPGP.ask-send-public-key': 'gboolean',
    'ESourceOpenPGP.encrypt-by-default': 'gboolean',
    'ESourceOpenPGP.encrypt-to-self': 'gboolean',
    'ESourceOpenPGP.key-id': 'gchararray',
    'ESourceOpenPGP.locate-keys': 'gboolean',
    'ESourceOpenPGP.prefer-inline': 'gboolean',
    'ESourceOpenPGP.send-prefer-encrypt': 'gboolean',
    'ESourceOpenPGP.send-public-key': 'gboolean',
    'ESourceOpenPGP.sign-by-default': 'gboolean',
    'ESourceOpenPGP.signing-algorithm': 'gchararray',
    'ESourceProxy.autoconfig-url': 'gchararray',
    'ESourceProxy.ftp-host': 'gchararray',
    'ESourceProxy.ftp-port': 'guint',
    'ESourceProxy.http-auth-password': 'gchararray',
    'ESourceProxy.http-auth-user': 'gchararray',
    'ESourceProxy.http-host': 'gchararray',
    'ESourceProxy.http-port': 'guint',
    'ESourceProxy.http-use-auth': 'gboolean',
    'ESourceProxy.https-host': 'gchararray',
    'ESourceProxy.https-port': 'guint',
    'ESourceProxy.method': 'EProxyMethod',
    'ESourceProxy.socks-host': 'gchararray',
    'ESourceProxy.socks-port': 'guint',
    'ESourceRefresh.enabled': 'gboolean',
    'ESourceRefresh.enabled-on-metered-network': 'gboolean',
    'ESourceRefresh.interval-minutes': 'guint',
    'ESourceRegistry.default-address-book': 'ESource',
    'ESourceRegistry.default-calendar': 'ESource',
    'ESourceRegistry.default-mail-account': 'ESource',
    'ESourceRegistry.default-mail-identity': 'ESource',
    'ESourceRegistry.default-memo-list': 'ESource',
    'ESourceRegistry.default-task-list': 'ESource',
    'ESourceRegistryWatcher.extension-name': 'gchararray',
    'ESourceRegistryWatcher.registry': 'ESourceRegistry',
    'ESourceResource.identity': 'gchararray',
    'ESourceRevisionGuards.enabled': 'gboolean',
    'ESourceSMIME.encrypt-by-default': 'gboolean',
    'ESourceSMIME.encrypt-to-self': 'gboolean',
    'ESourceSMIME.encryption-certificate': 'gchararray',
    'ESourceSMIME.sign-by-default': 'gboolean',
    'ESourceSMIME.signing-algorithm': 'gchararray',
    'ESourceSMIME.signing-certificate': 'gchararray',
    'ESourceSecurity.method': 'gchararray',
    'ESourceSecurity.secure': 'gboolean',
    'ESourceSelectable.color': 'gchararray',
    'ESourceSelectable.groups': 'gchararray',
    'ESourceSelectable.order': 'guint',
    'ESourceSelectable.selected': 'gboolean',
    'ESourceUoa.account-id': 'guint',
    'ESourceWeather.location': 'gchararray',
    'ESourceWeather.units': 'ESourceWeatherUnits',
    'ESourceWebDAVNotes.default-ext': 'gchararray',
    'ESourceWebdav.avoid-ifmatch': 'gboolean',
    'ESourceWebdav.calendar-auto-schedule': 'gboolean',
    'ESourceWebdav.color': 'gchararray',
    'ESourceWebdav.display-name': 'gchararray',
    'ESourceWebdav.email-address': 'gchararray',
    'ESourceWebdav.limit-download-days': 'guint',
    'ESourceWebdav.order': 'guint',
    'ESourceWebdav.resource-path': 'gchararray',
    'ESourceWebdav.resource-query': 'gchararray',
    'ESourceWebdav.ssl-trust': 'gchararray',
    'ESourceWebdav.timeout': 'guint',
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
    'EExtension': '3.4',
    'EGDataSession': '3.46',
    'EModule': '3.4',
    'ENetworkMonitor': '3.22',
    'EOAuth2Service': '3.28',
    'EOAuth2Services': '3.28',
    'ESoupAuthBearer': '3.10',
    'ESoupSession': '3.26',
    'ESoupSession.credentials': '3.26',
    'ESoupSession.force-http1': '3.48',
    'ESoupSession.handle-backoff-responses': '3.54',
    'ESoupSession.source': '3.26',
    'ESource': '3.6',
    'ESourceAddressBook': '3.6',
    'ESourceAlarms': '3.6',
    'ESourceAuthentication': '3.6',
    'ESourceAutocomplete': '3.6',
    'ESourceAutoconfig': '3.24',
    'ESourceBackend': '3.6',
    'ESourceCalendar': '3.6',
    'ESourceCollection': '3.6',
    'ESourceConflictSearch': '3.60',
    'ESourceCredentialsProvider': '3.16',
    'ESourceCredentialsProviderImpl': '3.16',
    'ESourceCredentialsProviderImplOAuth2': '3.28',
    'ESourceCredentialsProviderImplPassword': '3.16',
    'ESourceExtension': '3.6',
    'ESourceGoa': '3.6',
    'ESourceMDN': '3.6',
    'ESourceMailAccount': '3.6',
    'ESourceMailComposition': '3.6',
    'ESourceMailComposition.composer-mode': '3.62',
    'ESourceMailIdentity': '3.6',
    'ESourceMailSignature': '3.6',
    'ESourceMailSubmission': '3.6',
    'ESourceMailTransport': '3.6',
    'ESourceMemoList': '3.6',
    'ESourceOffline': '3.6',
    'ESourceOpenPGP': '3.6',
    'ESourceProxy': '3.12',
    'ESourceRefresh': '3.6',
    'ESourceRegistry': '3.6',
    'ESourceRegistryWatcher.extension-name': '3.26',
    'ESourceRegistryWatcher.registry': '3.26',
    'ESourceRegistryWatcher::appeared': '3.26',
    'ESourceRegistryWatcher::disappeared': '3.26',
    'ESourceRegistryWatcher::filter': '3.26',
    'ESourceResource': '3.6',
    'ESourceRevisionGuards': '3.8',
    'ESourceSMIME': '3.6',
    'ESourceSecurity': '3.6',
    'ESourceSelectable': '3.6',
    'ESourceSelectable.groups': '3.62',
    'ESourceTaskList': '3.6',
    'ESourceUoa': '3.8',
    'ESourceWebDAVNotes': '3.44',
    'ESourceWebdav': '3.6',
    'ESourceWebdav.limit-download-days': '3.60',
    'EWebDAVSession': '3.26',
    'EXmlDocument': '3.26',
};
