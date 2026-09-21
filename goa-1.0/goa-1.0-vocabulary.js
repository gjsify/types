// The widget vocabulary of Goa-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Goa-1.0 — library 3.58.1 — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Goa',
    version: '1.0',
    libraryVersion: '3.58.1',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: ['Gio.DBusInterfaceSkeleton'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Goa'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GDBusInterfaceSkeleton: ['g-flags'],
    GoaAccount: ['attention-needed', 'calendar-disabled', 'chat-disabled', 'contacts-disabled', 'documents-disabled', 'files-disabled', 'id', 'identity', 'is-locked', 'is-temporary', 'mail-disabled', 'maps-disabled', 'music-disabled', 'photos-disabled', 'presentation-identity', 'printers-disabled', 'provider-icon', 'provider-name', 'provider-type', 'read-later-disabled', 'ticketing-disabled', 'todo-disabled'],
    GoaCalendar: ['accept-ssl-errors', 'uri'],
    GoaContacts: ['accept-ssl-errors', 'uri'],
    GoaExchange: ['accept-ssl-errors', 'host'],
    GoaFiles: ['accept-ssl-errors', 'uri'],
    GoaMail: ['email-address', 'imap-accept-ssl-errors', 'imap-host', 'imap-supported', 'imap-use-ssl', 'imap-use-tls', 'imap-user-name', 'name', 'smtp-accept-ssl-errors', 'smtp-auth-login', 'smtp-auth-plain', 'smtp-auth-xoauth2', 'smtp-host', 'smtp-supported', 'smtp-use-auth', 'smtp-use-ssl', 'smtp-use-tls', 'smtp-user-name'],
    GoaMediaServer: ['dlna-supported', 'udn'],
    GoaOAuth2Based: ['client-id', 'client-secret'],
    GoaOAuthBased: ['consumer-key', 'consumer-secret'],
    GoaObject: ['account', 'calendar', 'chat', 'contacts', 'documents', 'exchange', 'files', 'mail', 'manager', 'maps', 'media-server', 'music', 'oauth-based', 'oauth2-based', 'password-based', 'photos', 'printers', 'read-later', 'ticketing', 'todo'],
    GoaTicketing: ['details'],
};

export const OWN_SIGNALS = {
    GDBusInterfaceSkeleton: ['g-authorize-method'],
    GoaAccount: ['handle-ensure-credentials', 'handle-remove'],
    GoaClient: ['account-added', 'account-changed', 'account-removed'],
    GoaManager: ['handle-add-account', 'handle-is-supported-provider'],
    GoaOAuth2Based: ['handle-get-access-token'],
    GoaOAuthBased: ['handle-get-access-token'],
    GoaPasswordBased: ['handle-get-password'],
    GoaTicketing: ['handle-get-ticket'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GoaAccountProxy: ['GoaAccountProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaAccount'],
    GoaAccountSkeleton: ['GoaAccountSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaAccount'],
    GoaCalendarProxy: ['GoaCalendarProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaCalendar'],
    GoaCalendarSkeleton: ['GoaCalendarSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaCalendar'],
    GoaChatProxy: ['GoaChatProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaChat'],
    GoaChatSkeleton: ['GoaChatSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaChat'],
    GoaClient: ['GoaClient', 'GObject', 'GAsyncInitable', 'GInitable'],
    GoaContactsProxy: ['GoaContactsProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaContacts'],
    GoaContactsSkeleton: ['GoaContactsSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaContacts'],
    GoaDocumentsProxy: ['GoaDocumentsProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaDocuments'],
    GoaDocumentsSkeleton: ['GoaDocumentsSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaDocuments'],
    GoaExchangeProxy: ['GoaExchangeProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaExchange'],
    GoaExchangeSkeleton: ['GoaExchangeSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaExchange'],
    GoaFilesProxy: ['GoaFilesProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaFiles'],
    GoaFilesSkeleton: ['GoaFilesSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaFiles'],
    GoaMailProxy: ['GoaMailProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaMail'],
    GoaMailSkeleton: ['GoaMailSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaMail'],
    GoaManagerProxy: ['GoaManagerProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaManager'],
    GoaManagerSkeleton: ['GoaManagerSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaManager'],
    GoaMapsProxy: ['GoaMapsProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaMaps'],
    GoaMapsSkeleton: ['GoaMapsSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaMaps'],
    GoaMediaServerProxy: ['GoaMediaServerProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaMediaServer'],
    GoaMediaServerSkeleton: ['GoaMediaServerSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaMediaServer'],
    GoaMusicProxy: ['GoaMusicProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaMusic'],
    GoaMusicSkeleton: ['GoaMusicSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaMusic'],
    GoaOAuth2BasedProxy: ['GoaOAuth2BasedProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaOAuth2Based'],
    GoaOAuth2BasedSkeleton: ['GoaOAuth2BasedSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaOAuth2Based'],
    GoaOAuthBasedProxy: ['GoaOAuthBasedProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaOAuthBased'],
    GoaOAuthBasedSkeleton: ['GoaOAuthBasedSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaOAuthBased'],
    GoaObjectManagerClient: ['GoaObjectManagerClient', 'GDBusObjectManagerClient', 'GObject', 'GAsyncInitable', 'GDBusObjectManager', 'GInitable'],
    GoaObjectProxy: ['GoaObjectProxy', 'GDBusObjectProxy', 'GObject', 'GDBusObject', 'GoaObject'],
    GoaObjectSkeleton: ['GoaObjectSkeleton', 'GDBusObjectSkeleton', 'GObject', 'GDBusObject', 'GoaObject'],
    GoaPasswordBasedProxy: ['GoaPasswordBasedProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaPasswordBased'],
    GoaPasswordBasedSkeleton: ['GoaPasswordBasedSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaPasswordBased'],
    GoaPhotosProxy: ['GoaPhotosProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaPhotos'],
    GoaPhotosSkeleton: ['GoaPhotosSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaPhotos'],
    GoaPrintersProxy: ['GoaPrintersProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaPrinters'],
    GoaPrintersSkeleton: ['GoaPrintersSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaPrinters'],
    GoaReadLaterProxy: ['GoaReadLaterProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaReadLater'],
    GoaReadLaterSkeleton: ['GoaReadLaterSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaReadLater'],
    GoaTicketingProxy: ['GoaTicketingProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaTicketing'],
    GoaTicketingSkeleton: ['GoaTicketingSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaTicketing'],
    GoaTodoProxy: ['GoaTodoProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'GoaTodo'],
    GoaTodoSkeleton: ['GoaTodoSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'GoaTodo'],
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
export const FLAG_VALUES = {
    'GDBusInterfaceSkeletonFlags.handle-method-invocations-in-thread': 1,
    'GDBusInterfaceSkeletonFlags.none': 0,
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
    'GDBusInterfaceSkeleton.g-flags': 'GDBusInterfaceSkeletonFlags',
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
    'GDBusInterfaceSkeleton.g-flags': 'GDBusInterfaceSkeletonFlags',
    'GoaAccount.attention-needed': 'gboolean',
    'GoaAccount.calendar-disabled': 'gboolean',
    'GoaAccount.chat-disabled': 'gboolean',
    'GoaAccount.contacts-disabled': 'gboolean',
    'GoaAccount.documents-disabled': 'gboolean',
    'GoaAccount.files-disabled': 'gboolean',
    'GoaAccount.id': 'gchararray',
    'GoaAccount.identity': 'gchararray',
    'GoaAccount.is-locked': 'gboolean',
    'GoaAccount.is-temporary': 'gboolean',
    'GoaAccount.mail-disabled': 'gboolean',
    'GoaAccount.maps-disabled': 'gboolean',
    'GoaAccount.music-disabled': 'gboolean',
    'GoaAccount.photos-disabled': 'gboolean',
    'GoaAccount.presentation-identity': 'gchararray',
    'GoaAccount.printers-disabled': 'gboolean',
    'GoaAccount.provider-icon': 'gchararray',
    'GoaAccount.provider-name': 'gchararray',
    'GoaAccount.provider-type': 'gchararray',
    'GoaAccount.read-later-disabled': 'gboolean',
    'GoaAccount.ticketing-disabled': 'gboolean',
    'GoaAccount.todo-disabled': 'gboolean',
    'GoaCalendar.accept-ssl-errors': 'gboolean',
    'GoaCalendar.uri': 'gchararray',
    'GoaContacts.accept-ssl-errors': 'gboolean',
    'GoaContacts.uri': 'gchararray',
    'GoaExchange.accept-ssl-errors': 'gboolean',
    'GoaExchange.host': 'gchararray',
    'GoaFiles.accept-ssl-errors': 'gboolean',
    'GoaFiles.uri': 'gchararray',
    'GoaMail.email-address': 'gchararray',
    'GoaMail.imap-accept-ssl-errors': 'gboolean',
    'GoaMail.imap-host': 'gchararray',
    'GoaMail.imap-supported': 'gboolean',
    'GoaMail.imap-use-ssl': 'gboolean',
    'GoaMail.imap-use-tls': 'gboolean',
    'GoaMail.imap-user-name': 'gchararray',
    'GoaMail.name': 'gchararray',
    'GoaMail.smtp-accept-ssl-errors': 'gboolean',
    'GoaMail.smtp-auth-login': 'gboolean',
    'GoaMail.smtp-auth-plain': 'gboolean',
    'GoaMail.smtp-auth-xoauth2': 'gboolean',
    'GoaMail.smtp-host': 'gchararray',
    'GoaMail.smtp-supported': 'gboolean',
    'GoaMail.smtp-use-auth': 'gboolean',
    'GoaMail.smtp-use-ssl': 'gboolean',
    'GoaMail.smtp-use-tls': 'gboolean',
    'GoaMail.smtp-user-name': 'gchararray',
    'GoaMediaServer.dlna-supported': 'gboolean',
    'GoaMediaServer.udn': 'gchararray',
    'GoaOAuth2Based.client-id': 'gchararray',
    'GoaOAuth2Based.client-secret': 'gchararray',
    'GoaOAuthBased.consumer-key': 'gchararray',
    'GoaOAuthBased.consumer-secret': 'gchararray',
    'GoaObject.account': 'GoaAccount',
    'GoaObject.calendar': 'GoaCalendar',
    'GoaObject.chat': 'GoaChat',
    'GoaObject.contacts': 'GoaContacts',
    'GoaObject.documents': 'GoaDocuments',
    'GoaObject.exchange': 'GoaExchange',
    'GoaObject.files': 'GoaFiles',
    'GoaObject.mail': 'GoaMail',
    'GoaObject.manager': 'GoaManager',
    'GoaObject.maps': 'GoaMaps',
    'GoaObject.media-server': 'GoaMediaServer',
    'GoaObject.music': 'GoaMusic',
    'GoaObject.oauth-based': 'GoaOAuthBased',
    'GoaObject.oauth2-based': 'GoaOAuth2Based',
    'GoaObject.password-based': 'GoaPasswordBased',
    'GoaObject.photos': 'GoaPhotos',
    'GoaObject.printers': 'GoaPrinters',
    'GoaObject.read-later': 'GoaReadLater',
    'GoaObject.ticketing': 'GoaTicketing',
    'GoaObject.todo': 'GoaTodo',
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
    'GDBusInterfaceSkeleton': '2.30',
    'GDBusInterfaceSkeleton.g-flags': '2.30',
    'GDBusInterfaceSkeleton::g-authorize-method': '2.30',
    'GoaExchange': '3.6.0',
    'GoaExchange.accept-ssl-errors': '3.6.0',
    'GoaExchange.host': '3.6.0',
    'GoaExchangeProxy': '3.6.0',
    'GoaExchangeSkeleton': '3.6.0',
    'GoaFiles': '3.8.0',
    'GoaFiles.accept-ssl-errors': '3.8.0',
    'GoaFiles.uri': '3.8.0',
    'GoaFilesProxy': '3.8.0',
    'GoaFilesSkeleton': '3.8.0',
    'GoaMaps': '3.14.0',
    'GoaMapsProxy': '3.14.0',
    'GoaMapsSkeleton': '3.14.0',
    'GoaMediaServer': '3.14',
    'GoaMediaServer.dlna-supported': '3.14',
    'GoaMediaServer.udn': '3.14',
    'GoaMediaServerProxy': '3.14',
    'GoaMediaServerSkeleton': '3.14',
    'GoaMusic': '3.18.0',
    'GoaMusicProxy': '3.18.0',
    'GoaMusicSkeleton': '3.18.0',
    'GoaObject.exchange': '3.6.0',
    'GoaObject.files': '3.8.0',
    'GoaObject.maps': '3.14.0',
    'GoaObject.media-server': '3.14',
    'GoaObject.music': '3.18.0',
    'GoaObject.password-based': '3.6.0',
    'GoaObject.photos': '3.8.0',
    'GoaObject.printers': '3.12.0',
    'GoaObject.read-later': '3.12.0',
    'GoaObject.ticketing': '3.6.0',
    'GoaObject.todo': '3.26.0',
    'GoaPasswordBased': '3.6.0',
    'GoaPasswordBased::handle-get-password': '3.6.0',
    'GoaPasswordBasedProxy': '3.6.0',
    'GoaPasswordBasedSkeleton': '3.6.0',
    'GoaPhotos': '3.8.0',
    'GoaPhotosProxy': '3.8.0',
    'GoaPhotosSkeleton': '3.8.0',
    'GoaPrinters': '3.12.0',
    'GoaPrintersProxy': '3.12.0',
    'GoaPrintersSkeleton': '3.12.0',
    'GoaReadLater': '3.12.0',
    'GoaReadLaterProxy': '3.12.0',
    'GoaReadLaterSkeleton': '3.12.0',
    'GoaTicketing': '3.6.0',
    'GoaTicketing.details': '3.18',
    'GoaTicketing::handle-get-ticket': '3.6.0',
    'GoaTicketingProxy': '3.6.0',
    'GoaTicketingSkeleton': '3.6.0',
    'GoaTodo': '3.26.0',
    'GoaTodoProxy': '3.26.0',
    'GoaTodoSkeleton': '3.26.0',
};
