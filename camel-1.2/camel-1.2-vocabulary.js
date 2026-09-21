// The widget vocabulary of Camel-1.2 as runtime data.
//
// GENERATED — do not edit. Provenance: Camel-1.2 — prop(s) no TypeScript value satisfies: Camel.MessageInfo.references
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Camel',
    version: '1.2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Camel.MessageInfo.references'],
    unresolvedProps: [],
    identifierPrefixes: ['Camel', 'camel'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    CamelCipherContext: ['session'],
    CamelDataCache: ['expire-enabled', 'path'],
    CamelFilterInputStream: ['filter'],
    CamelFilterOutputStream: ['filter'],
    CamelFolder: ['description', 'display-name', 'flags', 'full-name', 'mark-seen', 'mark-seen-timeout', 'parent-store'],
    CamelFolderSummary: ['folder'],
    CamelGpgContext: ['always-trust', 'locate-keys', 'prefer-inline'],
    CamelLocalSettings: ['filter-all', 'filter-junk', 'maildir-alt-flag-sep', 'path'],
    CamelMedium: ['content'],
    CamelMessageInfo: ['abort-notifications', 'cc', 'date-received', 'date-sent', 'dirty', 'flags', 'folder-flagged', 'from', 'headers', 'message-id', 'mlist', 'preview', 'references', 'size', 'subject', 'summary', 'to', 'uid', 'user-flags', 'user-headers', 'user-tags'],
    CamelMimePart: ['content-id', 'content-location', 'content-md5', 'description', 'disposition'],
    CamelOfflineFolder: ['offline-sync'],
    CamelOfflineSettings: ['limit-by-age', 'limit-unit', 'limit-value', 'stay-synchronized'],
    CamelSasl: ['authenticated', 'mechanism', 'service', 'service-name'],
    CamelService: ['display-name', 'password', 'provider', 'proxy-resolver', 'session', 'settings', 'uid', 'with-proxy-resolver'],
    CamelSession: ['junk-filter', 'network-monitor', 'online', 'user-cache-dir', 'user-data-dir'],
    CamelStoreSearch: ['store'],
    CamelStoreSettings: ['filter-inbox', 'store-changes-interval'],
    CamelStream: ['base-stream'],
    CamelVeeFolder: ['auto-update'],
};

export const OWN_SIGNALS = {
    CamelFolder: ['changed', 'deleted', 'renamed'],
    CamelFolderSummary: ['info-flags-changed'],
    CamelOperation: ['pop-message', 'progress', 'push-message', 'status'],
    CamelSession: ['job-finished', 'job-started', 'user-alert'],
    CamelStore: ['folder-created', 'folder-deleted', 'folder-info-stale', 'folder-opened', 'folder-renamed'],
    CamelVeeFolder: ['vee-setup-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    CamelAddress: ['CamelAddress', 'GObject'],
    CamelBlockFile: ['CamelBlockFile', 'GObject'],
    CamelCertDB: ['CamelCertDB', 'GObject'],
    CamelCipherContext: ['CamelCipherContext', 'GObject'],
    CamelDB: ['CamelDB', 'GObject'],
    CamelDataCache: ['CamelDataCache', 'GObject'],
    CamelDataWrapper: ['CamelDataWrapper', 'GObject'],
    CamelFilterDriver: ['CamelFilterDriver', 'GObject'],
    CamelFilterInputStream: ['CamelFilterInputStream', 'GFilterInputStream', 'GInputStream', 'GObject'],
    CamelFilterOutputStream: ['CamelFilterOutputStream', 'GFilterOutputStream', 'GOutputStream', 'GObject'],
    CamelFolderSummary: ['CamelFolderSummary', 'GObject'],
    CamelFolderThread: ['CamelFolderThread', 'GObject'],
    CamelGpgContext: ['CamelGpgContext', 'CamelCipherContext', 'GObject'],
    CamelHTMLParser: ['CamelHTMLParser', 'GObject'],
    CamelIndex: ['CamelIndex', 'GObject'],
    CamelIndexCursor: ['CamelIndexCursor', 'GObject'],
    CamelIndexName: ['CamelIndexName', 'GObject'],
    CamelInternetAddress: ['CamelInternetAddress', 'CamelAddress', 'GObject'],
    CamelKeyFile: ['CamelKeyFile', 'GObject'],
    CamelKeyTable: ['CamelKeyTable', 'GObject'],
    CamelLocalSettings: ['CamelLocalSettings', 'CamelStoreSettings', 'CamelSettings', 'GObject'],
    CamelMessageInfoBase: ['CamelMessageInfoBase', 'CamelMessageInfo', 'GObject'],
    CamelMimeFilterBasic: ['CamelMimeFilterBasic', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterBestenc: ['CamelMimeFilterBestenc', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterCRLF: ['CamelMimeFilterCRLF', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterCanon: ['CamelMimeFilterCanon', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterCharset: ['CamelMimeFilterCharset', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterEnriched: ['CamelMimeFilterEnriched', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterFrom: ['CamelMimeFilterFrom', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterGZip: ['CamelMimeFilterGZip', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterHTML: ['CamelMimeFilterHTML', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterIndex: ['CamelMimeFilterIndex', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterLinewrap: ['CamelMimeFilterLinewrap', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterPgp: ['CamelMimeFilterPgp', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterPreview: ['CamelMimeFilterPreview', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterProgress: ['CamelMimeFilterProgress', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterToHTML: ['CamelMimeFilterToHTML', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterWindows: ['CamelMimeFilterWindows', 'CamelMimeFilter', 'GObject'],
    CamelMimeFilterYenc: ['CamelMimeFilterYenc', 'CamelMimeFilter', 'GObject'],
    CamelMimeMessage: ['CamelMimeMessage', 'CamelMimePart', 'CamelMedium', 'CamelDataWrapper', 'GObject'],
    CamelMimeParser: ['CamelMimeParser', 'GObject'],
    CamelMimePart: ['CamelMimePart', 'CamelMedium', 'CamelDataWrapper', 'GObject'],
    CamelMultipart: ['CamelMultipart', 'CamelDataWrapper', 'GObject'],
    CamelMultipartEncrypted: ['CamelMultipartEncrypted', 'CamelMultipart', 'CamelDataWrapper', 'GObject'],
    CamelMultipartSigned: ['CamelMultipartSigned', 'CamelMultipart', 'CamelDataWrapper', 'GObject'],
    CamelNNTPAddress: ['CamelNNTPAddress', 'CamelAddress', 'GObject'],
    CamelNullOutputStream: ['CamelNullOutputStream', 'GOutputStream', 'GObject'],
    CamelOfflineFolder: ['CamelOfflineFolder', 'CamelFolder', 'GObject'],
    CamelOfflineSettings: ['CamelOfflineSettings', 'CamelStoreSettings', 'CamelSettings', 'GObject'],
    CamelOfflineStore: ['CamelOfflineStore', 'CamelStore', 'CamelService', 'GObject', 'GInitable'],
    CamelOperation: ['CamelOperation', 'GCancellable', 'GObject'],
    CamelPartitionTable: ['CamelPartitionTable', 'GObject'],
    CamelSExp: ['CamelSExp', 'GObject'],
    CamelSMIMEContext: ['CamelSMIMEContext', 'CamelCipherContext', 'GObject'],
    CamelSaslAnonymous: ['CamelSaslAnonymous', 'CamelSasl', 'GObject'],
    CamelSaslCramMd5: ['CamelSaslCramMd5', 'CamelSasl', 'GObject'],
    CamelSaslDigestMd5: ['CamelSaslDigestMd5', 'CamelSasl', 'GObject'],
    CamelSaslGssapi: ['CamelSaslGssapi', 'CamelSasl', 'GObject'],
    CamelSaslLogin: ['CamelSaslLogin', 'CamelSasl', 'GObject'],
    CamelSaslNTLM: ['CamelSaslNTLM', 'CamelSasl', 'GObject'],
    CamelSaslPOPB4SMTP: ['CamelSaslPOPB4SMTP', 'CamelSasl', 'GObject'],
    CamelSaslPlain: ['CamelSaslPlain', 'CamelSasl', 'GObject'],
    CamelSaslXOAuth2: ['CamelSaslXOAuth2', 'CamelSasl', 'GObject'],
    CamelSaslXOAuth2Google: ['CamelSaslXOAuth2Google', 'CamelSaslXOAuth2', 'CamelSasl', 'GObject'],
    CamelSaslXOAuth2Outlook: ['CamelSaslXOAuth2Outlook', 'CamelSaslXOAuth2', 'CamelSasl', 'GObject'],
    CamelSaslXOAuth2Yahoo: ['CamelSaslXOAuth2Yahoo', 'CamelSaslXOAuth2', 'CamelSasl', 'GObject'],
    CamelSession: ['CamelSession', 'GObject'],
    CamelSettings: ['CamelSettings', 'GObject'],
    CamelStoreDB: ['CamelStoreDB', 'CamelDB', 'GObject'],
    CamelStoreSearch: ['CamelStoreSearch', 'GObject'],
    CamelStoreSettings: ['CamelStoreSettings', 'CamelSettings', 'GObject'],
    CamelStoreSummary: ['CamelStoreSummary', 'GObject'],
    CamelStream: ['CamelStream', 'GObject', 'GSeekable'],
    CamelStreamBuffer: ['CamelStreamBuffer', 'CamelStream', 'GObject', 'GSeekable'],
    CamelStreamFilter: ['CamelStreamFilter', 'CamelStream', 'GObject', 'GSeekable'],
    CamelStreamFs: ['CamelStreamFs', 'CamelStream', 'GObject', 'GSeekable'],
    CamelStreamMem: ['CamelStreamMem', 'CamelStream', 'GObject', 'GSeekable'],
    CamelStreamNull: ['CamelStreamNull', 'CamelStream', 'GObject', 'GSeekable'],
    CamelStreamProcess: ['CamelStreamProcess', 'CamelStream', 'GObject', 'GSeekable'],
    CamelTextIndex: ['CamelTextIndex', 'CamelIndex', 'GObject'],
    CamelTextIndexCursor: ['CamelTextIndexCursor', 'CamelIndexCursor', 'GObject'],
    CamelTextIndexKeyCursor: ['CamelTextIndexKeyCursor', 'CamelIndexCursor', 'GObject'],
    CamelTextIndexName: ['CamelTextIndexName', 'CamelIndexName', 'GObject'],
    CamelVTrashFolder: ['CamelVTrashFolder', 'CamelVeeFolder', 'CamelFolder', 'GObject'],
    CamelVeeFolder: ['CamelVeeFolder', 'CamelFolder', 'GObject'],
    CamelVeeMessageInfo: ['CamelVeeMessageInfo', 'CamelMessageInfo', 'GObject'],
    CamelVeeStore: ['CamelVeeStore', 'CamelStore', 'CamelService', 'GObject', 'GInitable'],
    CamelVeeSummary: ['CamelVeeSummary', 'CamelFolderSummary', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    CamelAuthenticationResult: ['error', 'accepted', 'rejected'],
    CamelCompareType: ['insensitive', 'sensitive'],
    CamelFetchHeadersType: ['basic', 'basic-and-mailing-list', 'all'],
    CamelFetchType: ['old-messages', 'new-messages'],
    CamelGpgTrust: ['none', 'unknown', 'never', 'marginal', 'full', 'ultimate'],
    CamelJunkStatus: ['error', 'inconclusive', 'message-is-junk', 'message-is-not-junk'],
    CamelMatchThreadsKind: ['none', 'all', 'replies', 'replies-and-parents', 'single', 'not-all'],
    CamelMimeFilterBasicType: ['invalid', 'base64-enc', 'base64-dec', 'qp-enc', 'qp-dec', 'uu-enc', 'uu-dec'],
    CamelMimeFilterCRLFDirection: ['encode', 'decode'],
    CamelMimeFilterCRLFMode: ['dots', 'only'],
    CamelMimeFilterGZipMode: ['zip', 'unzip'],
    CamelMimeFilterYencDirection: ['encode', 'decode'],
    CamelNetworkSecurityMethod: ['none', 'ssl-on-alternate-port', 'starttls-on-standard-port'],
    CamelProviderConfType: ['end', 'section-start', 'section-end', 'checkbox', 'checkspin', 'entry', 'label', 'hidden', 'options', 'placeholder', 'advanced-section-start'],
    CamelProviderType: ['store', 'transport'],
    CamelSExpResultType: ['array-ptr', 'int', 'string', 'bool', 'time', 'undefined'],
    CamelSExpTermType: ['int', 'bool', 'string', 'time', 'func', 'ifunc', 'var'],
    CamelSaslAnonTraceType: ['email', 'opaque', 'empty'],
    CamelServiceConnectionStatus: ['disconnected', 'connecting', 'connected', 'disconnecting'],
    CamelSessionAlertType: ['info', 'warning', 'error'],
    CamelSortType: ['ascending', 'descending'],
    CamelStoreDBCountKind: ['total', 'unread', 'junk', 'deleted', 'not-junk-not-deleted', 'not-junk-not-deleted-unread', 'junk-not-deleted'],
    CamelThreeState: ['off', 'on', 'inconsistent'],
    CamelTimeUnit: ['days', 'weeks', 'months', 'years'],
    CamelTransferEncoding: ['encoding-default', 'encoding-7bit', 'encoding-8bit', 'encoding-base64', 'encoding-quotedprintable', 'encoding-binary', 'encoding-uuencode', 'num-encodings'],
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
    'CamelAuthenticationResult.accepted': 1,
    'CamelAuthenticationResult.error': 0,
    'CamelAuthenticationResult.rejected': 2,
    'CamelCompareType.insensitive': 0,
    'CamelCompareType.sensitive': 1,
    'CamelFetchHeadersType.all': 2,
    'CamelFetchHeadersType.basic': 0,
    'CamelFetchHeadersType.basic-and-mailing-list': 1,
    'CamelFetchType.new-messages': 1,
    'CamelFetchType.old-messages': 0,
    'CamelGpgTrust.full': 4,
    'CamelGpgTrust.marginal': 3,
    'CamelGpgTrust.never': 2,
    'CamelGpgTrust.none': 0,
    'CamelGpgTrust.ultimate': 5,
    'CamelGpgTrust.unknown': 1,
    'CamelJunkStatus.error': 0,
    'CamelJunkStatus.inconclusive': 1,
    'CamelJunkStatus.message-is-junk': 2,
    'CamelJunkStatus.message-is-not-junk': 3,
    'CamelMatchThreadsKind.all': 1,
    'CamelMatchThreadsKind.none': 0,
    'CamelMatchThreadsKind.not-all': 5,
    'CamelMatchThreadsKind.replies': 2,
    'CamelMatchThreadsKind.replies-and-parents': 3,
    'CamelMatchThreadsKind.single': 4,
    'CamelMimeFilterBasicType.base64-dec': 2,
    'CamelMimeFilterBasicType.base64-enc': 1,
    'CamelMimeFilterBasicType.invalid': 0,
    'CamelMimeFilterBasicType.qp-dec': 4,
    'CamelMimeFilterBasicType.qp-enc': 3,
    'CamelMimeFilterBasicType.uu-dec': 6,
    'CamelMimeFilterBasicType.uu-enc': 5,
    'CamelMimeFilterCRLFDirection.decode': 1,
    'CamelMimeFilterCRLFDirection.encode': 0,
    'CamelMimeFilterCRLFMode.dots': 0,
    'CamelMimeFilterCRLFMode.only': 1,
    'CamelMimeFilterGZipMode.unzip': 1,
    'CamelMimeFilterGZipMode.zip': 0,
    'CamelMimeFilterYencDirection.decode': 1,
    'CamelMimeFilterYencDirection.encode': 0,
    'CamelNetworkSecurityMethod.none': 0,
    'CamelNetworkSecurityMethod.ssl-on-alternate-port': 1,
    'CamelNetworkSecurityMethod.starttls-on-standard-port': 2,
    'CamelProviderConfType.advanced-section-start': 10,
    'CamelProviderConfType.checkbox': 3,
    'CamelProviderConfType.checkspin': 4,
    'CamelProviderConfType.end': 0,
    'CamelProviderConfType.entry': 5,
    'CamelProviderConfType.hidden': 7,
    'CamelProviderConfType.label': 6,
    'CamelProviderConfType.options': 8,
    'CamelProviderConfType.placeholder': 9,
    'CamelProviderConfType.section-end': 2,
    'CamelProviderConfType.section-start': 1,
    'CamelProviderType.store': 0,
    'CamelProviderType.transport': 1,
    'CamelSExpResultType.array-ptr': 0,
    'CamelSExpResultType.bool': 3,
    'CamelSExpResultType.int': 1,
    'CamelSExpResultType.string': 2,
    'CamelSExpResultType.time': 4,
    'CamelSExpResultType.undefined': 5,
    'CamelSExpTermType.bool': 1,
    'CamelSExpTermType.func': 4,
    'CamelSExpTermType.ifunc': 5,
    'CamelSExpTermType.int': 0,
    'CamelSExpTermType.string': 2,
    'CamelSExpTermType.time': 3,
    'CamelSExpTermType.var': 6,
    'CamelSaslAnonTraceType.email': 0,
    'CamelSaslAnonTraceType.empty': 2,
    'CamelSaslAnonTraceType.opaque': 1,
    'CamelServiceConnectionStatus.connected': 2,
    'CamelServiceConnectionStatus.connecting': 1,
    'CamelServiceConnectionStatus.disconnected': 0,
    'CamelServiceConnectionStatus.disconnecting': 3,
    'CamelSessionAlertType.error': 2,
    'CamelSessionAlertType.info': 0,
    'CamelSessionAlertType.warning': 1,
    'CamelSortType.ascending': 0,
    'CamelSortType.descending': 1,
    'CamelStoreDBCountKind.deleted': 4,
    'CamelStoreDBCountKind.junk': 3,
    'CamelStoreDBCountKind.junk-not-deleted': 7,
    'CamelStoreDBCountKind.not-junk-not-deleted': 5,
    'CamelStoreDBCountKind.not-junk-not-deleted-unread': 6,
    'CamelStoreDBCountKind.total': 1,
    'CamelStoreDBCountKind.unread': 2,
    'CamelThreeState.inconsistent': 2,
    'CamelThreeState.off': 0,
    'CamelThreeState.on': 1,
    'CamelTimeUnit.days': 1,
    'CamelTimeUnit.months': 3,
    'CamelTimeUnit.weeks': 2,
    'CamelTimeUnit.years': 4,
    'CamelTransferEncoding.encoding-7bit': 1,
    'CamelTransferEncoding.encoding-8bit': 2,
    'CamelTransferEncoding.encoding-base64': 3,
    'CamelTransferEncoding.encoding-binary': 5,
    'CamelTransferEncoding.encoding-default': 0,
    'CamelTransferEncoding.encoding-quotedprintable': 4,
    'CamelTransferEncoding.encoding-uuencode': 6,
    'CamelTransferEncoding.num-encodings': 7,
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
    'CamelDBSqlizeFlags.escape-only': 1,
    'CamelDBSqlizeFlags.full': 0,
    'CamelFolderFlags.filter-junk': 64,
    'CamelFolderFlags.filter-recent': 4,
    'CamelFolderFlags.has-been-deleted': 8,
    'CamelFolderFlags.has-summary-capability': 1,
    'CamelFolderFlags.is-junk': 32,
    'CamelFolderFlags.is-trash': 16,
    'CamelFolderInfoFlags.children': 4,
    'CamelFolderInfoFlags.flagged': 262144,
    'CamelFolderInfoFlags.flags-last': 16777216,
    'CamelFolderInfoFlags.nochildren': 8,
    'CamelFolderInfoFlags.noinferiors': 2,
    'CamelFolderInfoFlags.noselect': 1,
    'CamelFolderInfoFlags.readonly': 65536,
    'CamelFolderInfoFlags.shared-by-me': 512,
    'CamelFolderInfoFlags.shared-to-me': 256,
    'CamelFolderInfoFlags.subscribed': 16,
    'CamelFolderInfoFlags.system': 64,
    'CamelFolderInfoFlags.type-all': 10240,
    'CamelFolderInfoFlags.type-archive': 11264,
    'CamelFolderInfoFlags.type-contacts': 6144,
    'CamelFolderInfoFlags.type-drafts': 12288,
    'CamelFolderInfoFlags.type-events': 7168,
    'CamelFolderInfoFlags.type-inbox': 1024,
    'CamelFolderInfoFlags.type-junk': 4096,
    'CamelFolderInfoFlags.type-memos': 8192,
    'CamelFolderInfoFlags.type-normal': 0,
    'CamelFolderInfoFlags.type-outbox': 2048,
    'CamelFolderInfoFlags.type-sent': 5120,
    'CamelFolderInfoFlags.type-tasks': 9216,
    'CamelFolderInfoFlags.type-trash': 3072,
    'CamelFolderInfoFlags.virtual': 32,
    'CamelFolderInfoFlags.vtrash': 128,
    'CamelFolderInfoFlags.writeonly': 131072,
    'CamelFolderParamFlags.persistent': 256,
    'CamelFolderThreadFlags.none': 0,
    'CamelFolderThreadFlags.sort': 2,
    'CamelFolderThreadFlags.subject': 1,
    'CamelMessageFlags.answered': 1,
    'CamelMessageFlags.answered-all': 64,
    'CamelMessageFlags.attachments': 32,
    'CamelMessageFlags.deleted': 2,
    'CamelMessageFlags.draft': 4,
    'CamelMessageFlags.flagged': 8,
    'CamelMessageFlags.folder-flagged': 65536,
    'CamelMessageFlags.forwarded': 1024,
    'CamelMessageFlags.junk': 128,
    'CamelMessageFlags.junk-learn': 1073741824,
    'CamelMessageFlags.notjunk': 512,
    'CamelMessageFlags.secure': 256,
    'CamelMessageFlags.seen': 16,
    'CamelMessageFlags.user': 2147483648,
    'CamelMimeFilterCanonFlags.crlf': 1,
    'CamelMimeFilterCanonFlags.from': 2,
    'CamelMimeFilterCanonFlags.strip': 4,
    'CamelMimeFilterEnrichedFlags.is-richtext': 1,
    'CamelMimeFilterEnrichedFlags.none': 0,
    'CamelMimeFilterToHTMLFlags.cite': 128,
    'CamelMimeFilterToHTMLFlags.convert-addresses': 32,
    'CamelMimeFilterToHTMLFlags.convert-nl': 2,
    'CamelMimeFilterToHTMLFlags.convert-spaces': 4,
    'CamelMimeFilterToHTMLFlags.convert-urls': 8,
    'CamelMimeFilterToHTMLFlags.div': 2048,
    'CamelMimeFilterToHTMLFlags.escape-8bit': 64,
    'CamelMimeFilterToHTMLFlags.format-flowed': 512,
    'CamelMimeFilterToHTMLFlags.mark-citation': 16,
    'CamelMimeFilterToHTMLFlags.pre': 1,
    'CamelMimeFilterToHTMLFlags.preserve-8bit': 256,
    'CamelMimeFilterToHTMLFlags.preserve-tabs': 4096,
    'CamelMimeFilterToHTMLFlags.quote-citation': 1024,
    'CamelProviderFlags.allow-real-junk-folder': 512,
    'CamelProviderFlags.allow-real-trash-folder': 256,
    'CamelProviderFlags.disable-sent-folder': 128,
    'CamelProviderFlags.has-license': 64,
    'CamelProviderFlags.is-external': 4,
    'CamelProviderFlags.is-local': 2,
    'CamelProviderFlags.is-remote': 1,
    'CamelProviderFlags.is-source': 8,
    'CamelProviderFlags.is-storage': 16,
    'CamelProviderFlags.supports-batch-fetch': 2048,
    'CamelProviderFlags.supports-mobile-devices': 1024,
    'CamelProviderFlags.supports-purge-message-cache': 4096,
    'CamelProviderFlags.supports-ssl': 32,
    'CamelRecipientCertificateFlags.pgp': 2,
    'CamelRecipientCertificateFlags.smime': 1,
    'CamelStoreFlags.can-delete-folders-at-once': 128,
    'CamelStoreFlags.can-edit-folders': 32,
    'CamelStoreFlags.is-builtin': 512,
    'CamelStoreFlags.is-migrating': 8,
    'CamelStoreFlags.proxy': 4,
    'CamelStoreFlags.real-junk-folder': 16,
    'CamelStoreFlags.supports-initial-setup': 256,
    'CamelStoreFlags.use-cache-dir': 64,
    'CamelStoreFlags.use-temp-dir': 1024,
    'CamelStoreFlags.vjunk': 2,
    'CamelStoreFlags.vtrash': 1,
    'CamelStoreGetFolderFlags.body-index': 2,
    'CamelStoreGetFolderFlags.create': 1,
    'CamelStoreGetFolderFlags.none': 0,
    'CamelStoreGetFolderFlags.private': 4,
    'CamelStoreGetFolderInfoFlags.fast': 1,
    'CamelStoreGetFolderInfoFlags.no-virtual': 8,
    'CamelStoreGetFolderInfoFlags.recursive': 2,
    'CamelStoreGetFolderInfoFlags.refresh': 32,
    'CamelStoreGetFolderInfoFlags.subscribed': 4,
    'CamelStoreGetFolderInfoFlags.subscription-list': 16,
    'CamelStoreInfoFlags.children': 4,
    'CamelStoreInfoFlags.flagged': 262144,
    'CamelStoreInfoFlags.nochildren': 8,
    'CamelStoreInfoFlags.noinferiors': 2,
    'CamelStoreInfoFlags.noselect': 1,
    'CamelStoreInfoFlags.readonly': 65536,
    'CamelStoreInfoFlags.shared-by-me': 512,
    'CamelStoreInfoFlags.shared-to-me': 256,
    'CamelStoreInfoFlags.subscribed': 16,
    'CamelStoreInfoFlags.system': 64,
    'CamelStoreInfoFlags.type-all': 10240,
    'CamelStoreInfoFlags.type-archive': 11264,
    'CamelStoreInfoFlags.type-contacts': 6144,
    'CamelStoreInfoFlags.type-drafts': 12288,
    'CamelStoreInfoFlags.type-events': 7168,
    'CamelStoreInfoFlags.type-inbox': 1024,
    'CamelStoreInfoFlags.type-junk': 4096,
    'CamelStoreInfoFlags.type-memos': 8192,
    'CamelStoreInfoFlags.type-normal': 0,
    'CamelStoreInfoFlags.type-outbox': 2048,
    'CamelStoreInfoFlags.type-sent': 5120,
    'CamelStoreInfoFlags.type-tasks': 9216,
    'CamelStoreInfoFlags.type-trash': 3072,
    'CamelStoreInfoFlags.virtual': 32,
    'CamelStoreInfoFlags.vtrash': 128,
    'CamelStoreInfoFlags.writeonly': 131072,
    'CamelStorePermissionFlags.read': 1,
    'CamelStorePermissionFlags.write': 2,
    'CamelURLFlags.auth': 2,
    'CamelURLFlags.params': 1,
    'CamelVeeFolderOpFlags.none': 0,
    'CamelVeeFolderOpFlags.skip-emit': 2,
    'CamelVeeFolderOpFlags.skip-rebuild': 1,
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
    'CamelFolder.mark-seen': 'CamelThreeState',
    'CamelMessageInfo.flags': 'CamelMessageFlags',
    'CamelOfflineFolder.offline-sync': 'CamelThreeState',
    'CamelOfflineSettings.limit-unit': 'CamelTimeUnit',
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
    'CamelCipherContext.session': 'CamelSession',
    'CamelDataCache.expire-enabled': 'gboolean',
    'CamelDataCache.path': 'gchararray',
    'CamelFilterInputStream.filter': 'CamelMimeFilter',
    'CamelFilterOutputStream.filter': 'CamelMimeFilter',
    'CamelFolder.description': 'gchararray',
    'CamelFolder.display-name': 'gchararray',
    'CamelFolder.flags': 'guint',
    'CamelFolder.full-name': 'gchararray',
    'CamelFolder.mark-seen': 'CamelThreeState',
    'CamelFolder.mark-seen-timeout': 'gint',
    'CamelFolder.parent-store': 'CamelStore',
    'CamelFolderSummary.folder': 'CamelFolder',
    'CamelGpgContext.always-trust': 'gboolean',
    'CamelGpgContext.locate-keys': 'gboolean',
    'CamelGpgContext.prefer-inline': 'gboolean',
    'CamelLocalSettings.filter-all': 'gboolean',
    'CamelLocalSettings.filter-junk': 'gboolean',
    'CamelLocalSettings.maildir-alt-flag-sep': 'gboolean',
    'CamelLocalSettings.path': 'gchararray',
    'CamelMedium.content': 'CamelDataWrapper',
    'CamelMessageInfo.abort-notifications': 'gboolean',
    'CamelMessageInfo.cc': 'gchararray',
    'CamelMessageInfo.date-received': 'gint64',
    'CamelMessageInfo.date-sent': 'gint64',
    'CamelMessageInfo.dirty': 'gboolean',
    'CamelMessageInfo.flags': 'CamelMessageFlags',
    'CamelMessageInfo.folder-flagged': 'gboolean',
    'CamelMessageInfo.from': 'gchararray',
    'CamelMessageInfo.message-id': 'guint64',
    'CamelMessageInfo.mlist': 'gchararray',
    'CamelMessageInfo.preview': 'gchararray',
    'CamelMessageInfo.size': 'guint',
    'CamelMessageInfo.subject': 'gchararray',
    'CamelMessageInfo.summary': 'CamelFolderSummary',
    'CamelMessageInfo.to': 'gchararray',
    'CamelMessageInfo.uid': 'gchararray',
    'CamelMimePart.content-id': 'gchararray',
    'CamelMimePart.content-location': 'gchararray',
    'CamelMimePart.content-md5': 'gchararray',
    'CamelMimePart.description': 'gchararray',
    'CamelMimePart.disposition': 'gchararray',
    'CamelOfflineFolder.offline-sync': 'CamelThreeState',
    'CamelOfflineSettings.limit-by-age': 'gboolean',
    'CamelOfflineSettings.limit-unit': 'CamelTimeUnit',
    'CamelOfflineSettings.limit-value': 'gint',
    'CamelOfflineSettings.stay-synchronized': 'gboolean',
    'CamelSasl.authenticated': 'gboolean',
    'CamelSasl.mechanism': 'gchararray',
    'CamelSasl.service': 'CamelService',
    'CamelSasl.service-name': 'gchararray',
    'CamelService.display-name': 'gchararray',
    'CamelService.password': 'gchararray',
    'CamelService.proxy-resolver': 'GProxyResolver',
    'CamelService.session': 'CamelSession',
    'CamelService.settings': 'CamelSettings',
    'CamelService.uid': 'gchararray',
    'CamelService.with-proxy-resolver': 'gboolean',
    'CamelSession.junk-filter': 'CamelJunkFilter',
    'CamelSession.network-monitor': 'GNetworkMonitor',
    'CamelSession.online': 'gboolean',
    'CamelSession.user-cache-dir': 'gchararray',
    'CamelSession.user-data-dir': 'gchararray',
    'CamelStoreSearch.store': 'CamelStore',
    'CamelStoreSettings.filter-inbox': 'gboolean',
    'CamelStoreSettings.store-changes-interval': 'gint',
    'CamelStream.base-stream': 'GIOStream',
    'CamelVeeFolder.auto-update': 'gboolean',
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
    'CamelDB': '2.24',
    'CamelFolder.flags': '3.62',
    'CamelFolder.mark-seen': '3.32',
    'CamelFolder.mark-seen-timeout': '3.32',
    'CamelFolderSummary::info-flags-changed': '3.58',
    'CamelLocalSettings': '3.4',
    'CamelMessageInfo.abort-notifications': '3.24',
    'CamelMessageInfo.cc': '3.24',
    'CamelMessageInfo.date-received': '3.24',
    'CamelMessageInfo.date-sent': '3.24',
    'CamelMessageInfo.dirty': '3.24',
    'CamelMessageInfo.flags': '3.24',
    'CamelMessageInfo.folder-flagged': '3.24',
    'CamelMessageInfo.from': '3.24',
    'CamelMessageInfo.headers': '3.24',
    'CamelMessageInfo.message-id': '3.24',
    'CamelMessageInfo.mlist': '3.24',
    'CamelMessageInfo.preview': '3.42',
    'CamelMessageInfo.references': '3.24',
    'CamelMessageInfo.size': '3.24',
    'CamelMessageInfo.subject': '3.24',
    'CamelMessageInfo.summary': '3.24',
    'CamelMessageInfo.to': '3.24',
    'CamelMessageInfo.uid': '3.24',
    'CamelMessageInfo.user-flags': '3.24',
    'CamelMessageInfo.user-headers': '3.42',
    'CamelMessageInfo.user-tags': '3.24',
    'CamelMimeFilterProgress': '2.24',
    'CamelOfflineSettings': '3.2',
    'CamelSExp': '3.4',
    'CamelSettings': '3.2',
    'CamelStoreDB': '3.58',
    'CamelStoreSearch': '3.58',
    'CamelStoreSearch.store': '3.58',
    'CamelStoreSettings': '3.2',
};
