// The widget vocabulary of GData-0.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GData-0.0 — library 0.19.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GData',
    version: '0.0',
    libraryVersion: '0.19.0',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['GData'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GDataAccessRule: ['role', 'scope-type', 'scope-value'],
    GDataAuthor: ['email-address', 'name', 'uri'],
    GDataAuthorizationDomain: ['scope', 'service-name'],
    GDataBatchOperation: ['authorization-domain', 'feed-uri', 'service'],
    GDataCalendarCalendar: ['color', 'is-hidden', 'is-selected', 'timezone'],
    GDataCalendarEvent: ['anyone-can-add-self', 'guests-can-invite-others', 'guests-can-modify', 'guests-can-see-guests', 'recurrence', 'sequence', 'status', 'transparency', 'uid', 'visibility'],
    GDataCalendarQuery: ['future-events', 'max-attendees', 'order-by', 'show-deleted', 'single-events', 'start-max', 'start-min', 'timezone'],
    GDataCategory: ['label', 'scheme', 'term'],
    GDataDocumentsEntry: ['is-deleted', 'writers-can-invite'],
    GDataDocumentsProperty: ['etag', 'key', 'value', 'visibility'],
    GDataDocumentsQuery: ['exact-title', 'folder-id', 'show-deleted', 'show-folders', 'title'],
    GDataDocumentsUploadQuery: ['convert', 'folder'],
    GDataDownloadStream: ['authorization-domain', 'cancellable', 'download-uri', 'service'],
    GDataEntry: ['content', 'content-uri', 'etag', 'id', 'rights', 'summary', 'title'],
    GDataGContactCalendar: ['is-primary', 'label', 'relation-type', 'uri'],
    GDataGContactEvent: ['date', 'label', 'relation-type'],
    GDataGContactExternalID: ['label', 'relation-type', 'value'],
    GDataGContactJot: ['content', 'relation-type'],
    GDataGContactLanguage: ['code', 'label'],
    GDataGContactRelation: ['label', 'name', 'relation-type'],
    GDataGContactWebsite: ['is-primary', 'label', 'relation-type', 'uri'],
    GDataGDEmailAddress: ['address', 'display-name', 'is-primary', 'label', 'relation-type'],
    GDataGDIMAddress: ['address', 'is-primary', 'label', 'protocol', 'relation-type'],
    GDataGDName: ['additional-name', 'family-name', 'full-name', 'given-name', 'prefix', 'suffix'],
    GDataGDOrganization: ['department', 'is-primary', 'job-description', 'label', 'location', 'name', 'relation-type', 'symbol', 'title'],
    GDataGDPhoneNumber: ['is-primary', 'label', 'number', 'relation-type', 'uri'],
    GDataGDPostalAddress: ['address', 'agent', 'city', 'house-name', 'is-primary', 'label', 'mail-class', 'neighborhood', 'po-box', 'postcode', 'region', 'relation-type', 'street', 'subregion', 'usage'],
    GDataGDReminder: ['absolute-time', 'method', 'relative-time'],
    GDataGDWhen: ['end-time', 'is-date', 'start-time', 'value-string'],
    GDataGDWhere: ['label', 'relation-type', 'value-string'],
    GDataGDWho: ['email-address', 'relation-type', 'value-string'],
    GDataGoaAuthorizer: ['goa-object'],
    GDataLink: ['content-type', 'language', 'length', 'relation-type', 'title', 'uri'],
    GDataMediaCategory: ['category', 'label', 'scheme'],
    GDataOAuth2Authorizer: ['client-id', 'client-secret', 'locale', 'proxy-resolver', 'redirect-uri', 'refresh-token', 'timeout'],
    GDataParsable: ['constructed-from-xml'],
    GDataPicasaWebAlbum: ['album-id', 'is-commenting-enabled', 'latitude', 'location', 'longitude', 'tags', 'timestamp', 'visibility'],
    GDataPicasaWebFile: ['album-id', 'caption', 'checksum', 'file-id', 'is-commenting-enabled', 'latitude', 'longitude', 'rotation', 'tags', 'timestamp', 'version'],
    GDataPicasaWebQuery: ['image-size', 'location', 'tag', 'thumbnail-size', 'visibility'],
    GDataQuery: ['author', 'categories', 'etag', 'is-strict', 'max-results', 'published-max', 'published-min', 'q', 'start-index', 'updated-max', 'updated-min'],
    GDataService: ['authorizer', 'locale', 'proxy-resolver', 'timeout'],
    GDataTasksQuery: ['completed-max', 'completed-min', 'due-max', 'due-min', 'show-completed', 'show-deleted', 'show-hidden'],
    GDataTasksTask: ['completed', 'due', 'is-deleted', 'notes', 'parent', 'position', 'status'],
    GDataUploadStream: ['authorization-domain', 'cancellable', 'content-length', 'content-type', 'entry', 'method', 'service', 'slug', 'upload-uri'],
    GDataYouTubeComment: ['parent-comment-uri'],
    GDataYouTubeQuery: ['age', 'latitude', 'license', 'location-radius', 'longitude', 'order-by', 'restriction', 'safe-search'],
    GDataYouTubeService: ['developer-key'],
    GDataYouTubeState: ['help-uri', 'message', 'name', 'reason-code'],
    GDataYouTubeVideo: ['aspect-ratio', 'category', 'description', 'is-private', 'keywords', 'latitude', 'location', 'longitude', 'recorded'],
};

export const OWN_SIGNALS = {};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GDataAPPCategories: ['GDataAPPCategories', 'GDataParsable', 'GObject'],
    GDataAccessRule: ['GDataAccessRule', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataAuthor: ['GDataAuthor', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataAuthorizationDomain: ['GDataAuthorizationDomain', 'GObject'],
    GDataBatchOperation: ['GDataBatchOperation', 'GObject'],
    GDataCalendarAccessRule: ['GDataCalendarAccessRule', 'GDataAccessRule', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataCalendarCalendar: ['GDataCalendarCalendar', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataCalendarEvent: ['GDataCalendarEvent', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataCalendarFeed: ['GDataCalendarFeed', 'GDataFeed', 'GDataParsable', 'GObject'],
    GDataCalendarQuery: ['GDataCalendarQuery', 'GDataQuery', 'GObject'],
    GDataCalendarService: ['GDataCalendarService', 'GDataService', 'GObject', 'GDataBatchable'],
    GDataCategory: ['GDataCategory', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataDocumentsAccessRule: ['GDataDocumentsAccessRule', 'GDataAccessRule', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataDocumentsDocument: ['GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsDrawing: ['GDataDocumentsDrawing', 'GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsDrive: ['GDataDocumentsDrive', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataDocumentsDriveQuery: ['GDataDocumentsDriveQuery', 'GDataQuery', 'GObject'],
    GDataDocumentsFeed: ['GDataDocumentsFeed', 'GDataFeed', 'GDataParsable', 'GObject'],
    GDataDocumentsFolder: ['GDataDocumentsFolder', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsMetadata: ['GDataDocumentsMetadata', 'GDataParsable', 'GObject'],
    GDataDocumentsPdf: ['GDataDocumentsPdf', 'GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsPresentation: ['GDataDocumentsPresentation', 'GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsProperty: ['GDataDocumentsProperty', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataDocumentsQuery: ['GDataDocumentsQuery', 'GDataQuery', 'GObject'],
    GDataDocumentsService: ['GDataDocumentsService', 'GDataService', 'GObject', 'GDataBatchable'],
    GDataDocumentsSpreadsheet: ['GDataDocumentsSpreadsheet', 'GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsText: ['GDataDocumentsText', 'GDataDocumentsDocument', 'GDataDocumentsEntry', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataAccessHandler'],
    GDataDocumentsUploadQuery: ['GDataDocumentsUploadQuery', 'GObject'],
    GDataDownloadStream: ['GDataDownloadStream', 'GInputStream', 'GObject', 'GSeekable'],
    GDataEntry: ['GDataEntry', 'GDataParsable', 'GObject'],
    GDataFeed: ['GDataFeed', 'GDataParsable', 'GObject'],
    GDataGContactCalendar: ['GDataGContactCalendar', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGContactEvent: ['GDataGContactEvent', 'GDataParsable', 'GObject'],
    GDataGContactExternalID: ['GDataGContactExternalID', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGContactJot: ['GDataGContactJot', 'GDataParsable', 'GObject'],
    GDataGContactLanguage: ['GDataGContactLanguage', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGContactRelation: ['GDataGContactRelation', 'GDataParsable', 'GObject'],
    GDataGContactWebsite: ['GDataGContactWebsite', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDEmailAddress: ['GDataGDEmailAddress', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDIMAddress: ['GDataGDIMAddress', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDName: ['GDataGDName', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDOrganization: ['GDataGDOrganization', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDPhoneNumber: ['GDataGDPhoneNumber', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDPostalAddress: ['GDataGDPostalAddress', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDReminder: ['GDataGDReminder', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDWhen: ['GDataGDWhen', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDWhere: ['GDataGDWhere', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGDWho: ['GDataGDWho', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGenerator: ['GDataGenerator', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataGoaAuthorizer: ['GDataGoaAuthorizer', 'GObject', 'GDataAuthorizer'],
    GDataLink: ['GDataLink', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataMediaCategory: ['GDataMediaCategory', 'GDataParsable', 'GObject'],
    GDataMediaContent: ['GDataMediaContent', 'GDataParsable', 'GObject'],
    GDataMediaCredit: ['GDataMediaCredit', 'GDataParsable', 'GObject'],
    GDataMediaThumbnail: ['GDataMediaThumbnail', 'GDataParsable', 'GObject'],
    GDataOAuth2Authorizer: ['GDataOAuth2Authorizer', 'GObject', 'GDataAuthorizer'],
    GDataPicasaWebAlbum: ['GDataPicasaWebAlbum', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataPicasaWebComment: ['GDataPicasaWebComment', 'GDataComment', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataPicasaWebFeed: ['GDataPicasaWebFeed', 'GDataFeed', 'GDataParsable', 'GObject'],
    GDataPicasaWebFile: ['GDataPicasaWebFile', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataCommentable'],
    GDataPicasaWebQuery: ['GDataPicasaWebQuery', 'GDataQuery', 'GObject'],
    GDataPicasaWebService: ['GDataPicasaWebService', 'GDataService', 'GObject'],
    GDataPicasaWebUser: ['GDataPicasaWebUser', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataQuery: ['GDataQuery', 'GObject'],
    GDataService: ['GDataService', 'GObject'],
    GDataTasksQuery: ['GDataTasksQuery', 'GDataQuery', 'GObject'],
    GDataTasksService: ['GDataTasksService', 'GDataService', 'GObject'],
    GDataTasksTask: ['GDataTasksTask', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataTasksTasklist: ['GDataTasksTasklist', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataUploadStream: ['GDataUploadStream', 'GOutputStream', 'GObject'],
    GDataYouTubeCategory: ['GDataYouTubeCategory', 'GDataCategory', 'GDataParsable', 'GObject', 'GDataComparable'],
    GDataYouTubeComment: ['GDataYouTubeComment', 'GDataComment', 'GDataEntry', 'GDataParsable', 'GObject'],
    GDataYouTubeFeed: ['GDataYouTubeFeed', 'GDataFeed', 'GDataParsable', 'GObject'],
    GDataYouTubeQuery: ['GDataYouTubeQuery', 'GDataQuery', 'GObject'],
    GDataYouTubeService: ['GDataYouTubeService', 'GDataService', 'GObject', 'GDataBatchable'],
    GDataYouTubeState: ['GDataYouTubeState', 'GDataParsable', 'GObject'],
    GDataYouTubeVideo: ['GDataYouTubeVideo', 'GDataEntry', 'GDataParsable', 'GObject', 'GDataCommentable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GDataBatchOperationType: ['query', 'insertion', 'update', 'deletion'],
    GDataMediaExpression: ['sample', 'full', 'nonstop'],
    GDataMediaMedium: ['unknown', 'image', 'audio', 'video', 'document', 'executable'],
    GDataOperationType: ['query', 'insertion', 'update', 'deletion', 'download', 'upload', 'authentication', 'batch'],
    GDataPicasaWebVisibility: ['public', 'private'],
    GDataYouTubeAge: ['all-time', 'today', 'this-week', 'this-month'],
    GDataYouTubePermission: ['allowed', 'denied', 'moderated'],
    GDataYouTubeSafeSearch: ['none', 'moderate', 'strict'],
    GDataYouTubeStandardFeedType: ['feed'],
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
    'GDataBatchOperationType.deletion': 3,
    'GDataBatchOperationType.insertion': 1,
    'GDataBatchOperationType.query': 0,
    'GDataBatchOperationType.update': 2,
    'GDataMediaExpression.full': 1,
    'GDataMediaExpression.nonstop': 2,
    'GDataMediaExpression.sample': 0,
    'GDataMediaMedium.audio': 2,
    'GDataMediaMedium.document': 4,
    'GDataMediaMedium.executable': 5,
    'GDataMediaMedium.image': 1,
    'GDataMediaMedium.unknown': 0,
    'GDataMediaMedium.video': 3,
    'GDataOperationType.authentication': 7,
    'GDataOperationType.batch': 8,
    'GDataOperationType.deletion': 4,
    'GDataOperationType.download': 5,
    'GDataOperationType.insertion': 2,
    'GDataOperationType.query': 1,
    'GDataOperationType.update': 3,
    'GDataOperationType.upload': 6,
    'GDataPicasaWebVisibility.private': 2,
    'GDataPicasaWebVisibility.public': 1,
    'GDataYouTubeAge.all-time': 0,
    'GDataYouTubeAge.this-month': 3,
    'GDataYouTubeAge.this-week': 2,
    'GDataYouTubeAge.today': 1,
    'GDataYouTubePermission.allowed': 0,
    'GDataYouTubePermission.denied': 1,
    'GDataYouTubePermission.moderated': 2,
    'GDataYouTubeSafeSearch.moderate': 1,
    'GDataYouTubeSafeSearch.none': 0,
    'GDataYouTubeSafeSearch.strict': 2,
    'GDataYouTubeStandardFeedType.feed': 0,
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
    'GDataPicasaWebAlbum.visibility': 'GDataPicasaWebVisibility',
    'GDataYouTubeQuery.age': 'GDataYouTubeAge',
    'GDataYouTubeQuery.safe-search': 'GDataYouTubeSafeSearch',
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
    'GDataAPPCategories': '0.7.0',
    'GDataAccessHandler': '0.3.0',
    'GDataAccessRule': '0.3.0',
    'GDataAccessRule.role': '0.3.0',
    'GDataAccessRule.scope-type': '0.3.0',
    'GDataAccessRule.scope-value': '0.3.0',
    'GDataAuthor.email-address': '0.4.0',
    'GDataAuthor.name': '0.4.0',
    'GDataAuthor.uri': '0.4.0',
    'GDataAuthorizationDomain': '0.9.0',
    'GDataAuthorizationDomain.scope': '0.9.0',
    'GDataAuthorizationDomain.service-name': '0.9.0',
    'GDataAuthorizer': '0.9.0',
    'GDataBatchOperation': '0.7.0',
    'GDataBatchOperation.authorization-domain': '0.9.0',
    'GDataBatchOperation.feed-uri': '0.7.0',
    'GDataBatchOperation.service': '0.7.0',
    'GDataBatchable': '0.7.0',
    'GDataCalendarAccessRule': '0.17.2',
    'GDataCalendarCalendar.is-hidden': '0.2.0',
    'GDataCalendarCalendar.is-selected': '0.2.0',
    'GDataCalendarEvent.recurrence': '0.3.0',
    'GDataCalendarEvent.status': '0.2.0',
    'GDataCalendarFeed': '0.3.0',
    'GDataCalendarQuery.max-attendees': '0.9.1',
    'GDataCalendarQuery.show-deleted': '0.9.1',
    'GDataCalendarQuery.timezone': '0.2.0',
    'GDataCategory.label': '0.4.0',
    'GDataCategory.scheme': '0.4.0',
    'GDataCategory.term': '0.4.0',
    'GDataComment': '0.10.0',
    'GDataCommentable': '0.10.0',
    'GDataComparable': '0.7.0',
    'GDataDocumentsAccessRule': '0.17.2',
    'GDataDocumentsDocument': '0.7.0',
    'GDataDocumentsDrawing': '0.13.1',
    'GDataDocumentsEntry': '0.4.0',
    'GDataDocumentsEntry.is-deleted': '0.5.0',
    'GDataDocumentsEntry.writers-can-invite': '0.4.0',
    'GDataDocumentsFeed': '0.4.0',
    'GDataDocumentsFolder': '0.4.0',
    'GDataDocumentsMetadata': '0.17.9',
    'GDataDocumentsPdf': '0.13.3',
    'GDataDocumentsPresentation': '0.4.0',
    'GDataDocumentsProperty': '0.17.11',
    'GDataDocumentsProperty.etag': '0.17.11',
    'GDataDocumentsProperty.key': '0.17.11',
    'GDataDocumentsProperty.value': '0.17.11',
    'GDataDocumentsProperty.visibility': '0.17.11',
    'GDataDocumentsQuery': '0.4.0',
    'GDataDocumentsQuery.exact-title': '0.4.0',
    'GDataDocumentsQuery.folder-id': '0.4.0',
    'GDataDocumentsQuery.show-deleted': '0.4.0',
    'GDataDocumentsQuery.show-folders': '0.4.0',
    'GDataDocumentsQuery.title': '0.4.0',
    'GDataDocumentsService': '0.4.0',
    'GDataDocumentsSpreadsheet': '0.4.0',
    'GDataDocumentsText': '0.4.0',
    'GDataDocumentsUploadQuery': '0.13.0',
    'GDataDocumentsUploadQuery.convert': '0.13.0',
    'GDataDocumentsUploadQuery.folder': '0.13.0',
    'GDataDownloadStream': '0.5.0',
    'GDataDownloadStream.authorization-domain': '0.9.0',
    'GDataDownloadStream.cancellable': '0.8.0',
    'GDataDownloadStream.download-uri': '0.5.0',
    'GDataDownloadStream.service': '0.5.0',
    'GDataEntry.content-uri': '0.7.0',
    'GDataEntry.etag': '0.2.0',
    'GDataEntry.rights': '0.5.0',
    'GDataEntry.summary': '0.4.0',
    'GDataGContactCalendar': '0.7.0',
    'GDataGContactCalendar.is-primary': '0.7.0',
    'GDataGContactCalendar.label': '0.7.0',
    'GDataGContactCalendar.relation-type': '0.7.0',
    'GDataGContactCalendar.uri': '0.7.0',
    'GDataGContactEvent': '0.7.0',
    'GDataGContactEvent.date': '0.7.0',
    'GDataGContactEvent.label': '0.7.0',
    'GDataGContactEvent.relation-type': '0.7.0',
    'GDataGContactExternalID': '0.7.0',
    'GDataGContactExternalID.label': '0.7.0',
    'GDataGContactExternalID.relation-type': '0.7.0',
    'GDataGContactExternalID.value': '0.7.0',
    'GDataGContactJot': '0.7.0',
    'GDataGContactJot.content': '0.7.0',
    'GDataGContactJot.relation-type': '0.7.0',
    'GDataGContactLanguage': '0.7.0',
    'GDataGContactLanguage.code': '0.7.0',
    'GDataGContactLanguage.label': '0.7.0',
    'GDataGContactRelation': '0.7.0',
    'GDataGContactRelation.label': '0.7.0',
    'GDataGContactRelation.name': '0.7.0',
    'GDataGContactRelation.relation-type': '0.7.0',
    'GDataGContactWebsite': '0.7.0',
    'GDataGContactWebsite.is-primary': '0.7.0',
    'GDataGContactWebsite.label': '0.7.0',
    'GDataGContactWebsite.relation-type': '0.7.0',
    'GDataGContactWebsite.uri': '0.7.0',
    'GDataGDEmailAddress': '0.2.0',
    'GDataGDEmailAddress.address': '0.4.0',
    'GDataGDEmailAddress.display-name': '0.6.0',
    'GDataGDEmailAddress.is-primary': '0.4.0',
    'GDataGDEmailAddress.label': '0.4.0',
    'GDataGDEmailAddress.relation-type': '0.4.0',
    'GDataGDIMAddress': '0.2.0',
    'GDataGDIMAddress.address': '0.4.0',
    'GDataGDIMAddress.is-primary': '0.4.0',
    'GDataGDIMAddress.label': '0.4.0',
    'GDataGDIMAddress.protocol': '0.4.0',
    'GDataGDIMAddress.relation-type': '0.4.0',
    'GDataGDName': '0.5.0',
    'GDataGDName.additional-name': '0.5.0',
    'GDataGDName.family-name': '0.5.0',
    'GDataGDName.full-name': '0.5.0',
    'GDataGDName.given-name': '0.5.0',
    'GDataGDName.prefix': '0.5.0',
    'GDataGDName.suffix': '0.5.0',
    'GDataGDOrganization': '0.2.0',
    'GDataGDOrganization.department': '0.5.0',
    'GDataGDOrganization.is-primary': '0.4.0',
    'GDataGDOrganization.job-description': '0.5.0',
    'GDataGDOrganization.label': '0.4.0',
    'GDataGDOrganization.location': '0.6.0',
    'GDataGDOrganization.name': '0.4.0',
    'GDataGDOrganization.relation-type': '0.4.0',
    'GDataGDOrganization.symbol': '0.5.0',
    'GDataGDOrganization.title': '0.4.0',
    'GDataGDPhoneNumber': '0.2.0',
    'GDataGDPhoneNumber.is-primary': '0.4.0',
    'GDataGDPhoneNumber.label': '0.4.0',
    'GDataGDPhoneNumber.number': '0.4.0',
    'GDataGDPhoneNumber.relation-type': '0.4.0',
    'GDataGDPhoneNumber.uri': '0.4.0',
    'GDataGDPostalAddress': '0.2.0',
    'GDataGDPostalAddress.address': '0.4.0',
    'GDataGDPostalAddress.agent': '0.5.0',
    'GDataGDPostalAddress.city': '0.5.0',
    'GDataGDPostalAddress.house-name': '0.5.0',
    'GDataGDPostalAddress.is-primary': '0.4.0',
    'GDataGDPostalAddress.label': '0.4.0',
    'GDataGDPostalAddress.mail-class': '0.5.0',
    'GDataGDPostalAddress.neighborhood': '0.5.0',
    'GDataGDPostalAddress.po-box': '0.5.0',
    'GDataGDPostalAddress.postcode': '0.5.0',
    'GDataGDPostalAddress.region': '0.5.0',
    'GDataGDPostalAddress.relation-type': '0.4.0',
    'GDataGDPostalAddress.street': '0.5.0',
    'GDataGDPostalAddress.subregion': '0.5.0',
    'GDataGDPostalAddress.usage': '0.5.0',
    'GDataGDReminder': '0.2.0',
    'GDataGDReminder.absolute-time': '0.4.0',
    'GDataGDReminder.method': '0.4.0',
    'GDataGDReminder.relative-time': '0.4.0',
    'GDataGDWhen': '0.2.0',
    'GDataGDWhen.end-time': '0.4.0',
    'GDataGDWhen.is-date': '0.4.0',
    'GDataGDWhen.start-time': '0.4.0',
    'GDataGDWhen.value-string': '0.4.0',
    'GDataGDWhere': '0.2.0',
    'GDataGDWhere.label': '0.4.0',
    'GDataGDWhere.relation-type': '0.4.0',
    'GDataGDWhere.value-string': '0.4.0',
    'GDataGDWho': '0.2.0',
    'GDataGDWho.email-address': '0.4.0',
    'GDataGDWho.relation-type': '0.4.0',
    'GDataGDWho.value-string': '0.4.0',
    'GDataGoaAuthorizer': '0.13.1',
    'GDataGoaAuthorizer.goa-object': '0.13.1',
    'GDataLink.content-type': '0.4.0',
    'GDataLink.language': '0.4.0',
    'GDataLink.length': '0.4.0',
    'GDataLink.relation-type': '0.4.0',
    'GDataLink.title': '0.4.0',
    'GDataLink.uri': '0.4.0',
    'GDataMediaCategory.category': '0.4.0',
    'GDataMediaCategory.label': '0.4.0',
    'GDataMediaCategory.scheme': '0.4.0',
    'GDataOAuth2Authorizer': '0.17.0',
    'GDataOAuth2Authorizer.client-id': '0.17.0',
    'GDataOAuth2Authorizer.client-secret': '0.17.0',
    'GDataOAuth2Authorizer.locale': '0.17.0',
    'GDataOAuth2Authorizer.proxy-resolver': '0.17.0',
    'GDataOAuth2Authorizer.redirect-uri': '0.17.0',
    'GDataOAuth2Authorizer.refresh-token': '0.17.2',
    'GDataOAuth2Authorizer.timeout': '0.17.0',
    'GDataParsable': '0.3.0',
    'GDataParsable.constructed-from-xml': '0.7.0',
    'GDataPicasaWebAlbum': '0.4.0',
    'GDataPicasaWebAlbum.album-id': '0.7.0',
    'GDataPicasaWebAlbum.latitude': '0.5.0',
    'GDataPicasaWebAlbum.location': '0.4.0',
    'GDataPicasaWebAlbum.longitude': '0.5.0',
    'GDataPicasaWebAlbum.tags': '0.4.0',
    'GDataPicasaWebAlbum.timestamp': '0.4.0',
    'GDataPicasaWebAlbum.visibility': '0.4.0',
    'GDataPicasaWebComment': '0.10.0',
    'GDataPicasaWebFeed': '0.6.0',
    'GDataPicasaWebFile': '0.4.0',
    'GDataPicasaWebFile.album-id': '0.4.0',
    'GDataPicasaWebFile.caption': '0.4.0',
    'GDataPicasaWebFile.checksum': '0.4.0',
    'GDataPicasaWebFile.file-id': '0.7.0',
    'GDataPicasaWebFile.is-commenting-enabled': '0.4.0',
    'GDataPicasaWebFile.latitude': '0.5.0',
    'GDataPicasaWebFile.longitude': '0.5.0',
    'GDataPicasaWebFile.rotation': '0.4.0',
    'GDataPicasaWebFile.tags': '0.4.0',
    'GDataPicasaWebFile.timestamp': '0.4.0',
    'GDataPicasaWebFile.version': '0.4.0',
    'GDataPicasaWebQuery': '0.4.0',
    'GDataPicasaWebQuery.image-size': '0.4.0',
    'GDataPicasaWebQuery.location': '0.4.0',
    'GDataPicasaWebQuery.tag': '0.4.0',
    'GDataPicasaWebQuery.thumbnail-size': '0.4.0',
    'GDataPicasaWebQuery.visibility': '0.4.0',
    'GDataPicasaWebService': '0.4.0',
    'GDataPicasaWebUser': '0.6.0',
    'GDataQuery.etag': '0.2.0',
    'GDataQuery.is-strict': '0.2.0',
    'GDataService.authorizer': '0.9.0',
    'GDataService.locale': '0.7.0',
    'GDataService.proxy-resolver': '0.15.0',
    'GDataService.timeout': '0.7.0',
    'GDataTasksQuery': '0.15.0',
    'GDataTasksQuery.completed-max': '0.15.0',
    'GDataTasksQuery.completed-min': '0.15.0',
    'GDataTasksQuery.due-max': '0.15.0',
    'GDataTasksQuery.due-min': '0.15.0',
    'GDataTasksQuery.show-completed': '0.15.0',
    'GDataTasksQuery.show-deleted': '0.15.0',
    'GDataTasksQuery.show-hidden': '0.15.0',
    'GDataTasksService': '0.15.0',
    'GDataTasksTask': '0.15.0',
    'GDataTasksTask.completed': '0.15.0',
    'GDataTasksTask.due': '0.15.0',
    'GDataTasksTask.is-deleted': '0.15.0',
    'GDataTasksTask.notes': '0.15.0',
    'GDataTasksTask.parent': '0.15.0',
    'GDataTasksTask.position': '0.15.0',
    'GDataTasksTask.status': '0.15.0',
    'GDataTasksTasklist': '0.15.0',
    'GDataUploadStream': '0.5.0',
    'GDataUploadStream.authorization-domain': '0.9.0',
    'GDataUploadStream.cancellable': '0.8.0',
    'GDataUploadStream.content-length': '0.13.0',
    'GDataUploadStream.content-type': '0.5.0',
    'GDataUploadStream.entry': '0.5.0',
    'GDataUploadStream.method': '0.7.0',
    'GDataUploadStream.service': '0.5.0',
    'GDataUploadStream.slug': '0.5.0',
    'GDataUploadStream.upload-uri': '0.5.0',
    'GDataYouTubeCategory': '0.7.0',
    'GDataYouTubeComment': '0.10.0',
    'GDataYouTubeComment.parent-comment-uri': '0.10.0',
    'GDataYouTubeFeed': '0.17.0',
    'GDataYouTubeQuery': '0.3.0',
    'GDataYouTubeQuery.age': '0.3.0',
    'GDataYouTubeQuery.latitude': '0.3.0',
    'GDataYouTubeQuery.license': '0.11.0',
    'GDataYouTubeQuery.location-radius': '0.3.0',
    'GDataYouTubeQuery.longitude': '0.3.0',
    'GDataYouTubeQuery.order-by': '0.3.0',
    'GDataYouTubeQuery.restriction': '0.3.0',
    'GDataYouTubeQuery.safe-search': '0.3.0',
    'GDataYouTubeState.help-uri': '0.4.0',
    'GDataYouTubeState.message': '0.4.0',
    'GDataYouTubeState.name': '0.4.0',
    'GDataYouTubeState.reason-code': '0.4.0',
    'GDataYouTubeVideo.aspect-ratio': '0.4.0',
    'GDataYouTubeVideo.latitude': '0.8.0',
    'GDataYouTubeVideo.longitude': '0.8.0',
    'GDataYouTubeVideo.recorded': '0.3.0',
};
