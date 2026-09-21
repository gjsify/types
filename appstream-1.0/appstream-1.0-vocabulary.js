// The widget vocabulary of AppStream-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: AppStream-1.0 — library 1.1.3
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'AppStream',
    version: '1.0',
    libraryVersion: '1.1.3',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['As'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    AsCategory: ['icon', 'id', 'name'],
    AsComponent: ['description', 'id', 'keywords', 'kind', 'name', 'pkgnames', 'project-group', 'project-license', 'summary'],
    AsComponentBox: ['flags'],
    AsReview: ['date', 'description', 'flags', 'id', 'locale', 'priority', 'rating', 'reviewer-id', 'reviewer-name', 'summary', 'version'],
};

export const OWN_SIGNALS = {
    AsPool: ['changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AsAgreement: ['AsAgreement', 'GObject'],
    AsAgreementSection: ['AsAgreementSection', 'GObject'],
    AsArtifact: ['AsArtifact', 'GObject'],
    AsBranding: ['AsBranding', 'GObject'],
    AsBundle: ['AsBundle', 'GObject'],
    AsCategory: ['AsCategory', 'GObject'],
    AsChecksum: ['AsChecksum', 'GObject'],
    AsComponent: ['AsComponent', 'GObject'],
    AsComponentBox: ['AsComponentBox', 'GObject'],
    AsContentRating: ['AsContentRating', 'GObject'],
    AsContext: ['AsContext', 'GObject'],
    AsDeveloper: ['AsDeveloper', 'GObject'],
    AsIcon: ['AsIcon', 'GObject'],
    AsImage: ['AsImage', 'GObject'],
    AsIssue: ['AsIssue', 'GObject'],
    AsLaunchable: ['AsLaunchable', 'GObject'],
    AsMetadata: ['AsMetadata', 'GObject'],
    AsPool: ['AsPool', 'GObject'],
    AsProvided: ['AsProvided', 'GObject'],
    AsReference: ['AsReference', 'GObject'],
    AsRelation: ['AsRelation', 'GObject'],
    AsRelationCheckResult: ['AsRelationCheckResult', 'GObject'],
    AsRelease: ['AsRelease', 'GObject'],
    AsReleaseList: ['AsReleaseList', 'GObject'],
    AsReview: ['AsReview', 'GObject'],
    AsScreenshot: ['AsScreenshot', 'GObject'],
    AsSuggested: ['AsSuggested', 'GObject'],
    AsSystemInfo: ['AsSystemInfo', 'GObject'],
    AsTranslation: ['AsTranslation', 'GObject'],
    AsValidator: ['AsValidator', 'GObject'],
    AsValidatorIssue: ['AsValidatorIssue', 'GObject'],
    AsVideo: ['AsVideo', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AsAgreementKind: ['unknown', 'generic', 'eula', 'privacy'],
    AsArtifactKind: ['unknown', 'source', 'binary'],
    AsBundleKind: ['unknown', 'package', 'limba', 'flatpak', 'appimage', 'snap', 'tarball', 'cabinet', 'linglong', 'sysupdate'],
    AsChassisKind: ['unknown', 'desktop', 'laptop', 'server', 'tablet', 'handset'],
    AsCheckResult: ['error', 'unknown', 'false', 'true'],
    AsChecksumKind: ['none', 'sha1', 'sha256', 'sha512', 'blake2b', 'blake3'],
    AsColorKind: ['unknown', 'primary'],
    AsColorSchemeKind: ['unknown', 'light', 'dark'],
    AsComponentKind: ['unknown', 'generic', 'desktop-app', 'console-app', 'web-app', 'service', 'addon', 'runtime', 'font', 'codec', 'input-method', 'operating-system', 'firmware', 'driver', 'localization', 'repository', 'icon-theme'],
    AsComponentScope: ['unknown', 'system', 'user'],
    AsContentRatingSystem: ['unknown', 'incaa', 'acb', 'djctq', 'gsrr', 'pegi', 'kavi', 'usk', 'esra', 'cero', 'oflcnz', 'russia', 'mda', 'grac', 'esrb', 'iarc'],
    AsContentRatingValue: ['unknown', 'none', 'mild', 'moderate', 'intense'],
    AsControlKind: ['unknown', 'pointing', 'keyboard', 'console', 'touch', 'gamepad', 'voice', 'vision', 'tv-remote', 'tablet'],
    AsDisplaySideKind: ['unknown', 'shortest', 'longest'],
    AsFormatKind: ['unknown', 'xml', 'yaml', 'desktop-entry'],
    AsFormatStyle: ['unknown', 'metainfo', 'catalog'],
    AsFormatVersion: ['unknown', 'v1-0'],
    AsIconKind: ['unknown', 'stock', 'cached', 'local', 'remote'],
    AsImageKind: ['unknown', 'source', 'thumbnail'],
    AsInternetKind: ['unknown', 'always', 'offline-only', 'first-run'],
    AsIssueKind: ['unknown', 'generic', 'cve'],
    AsIssueSeverity: ['unknown', 'pedantic', 'info', 'warning', 'error'],
    AsLaunchableKind: ['unknown', 'desktop-id', 'service', 'cockpit-manifest', 'url'],
    AsMarkupKind: ['unknown', 'xml', 'text', 'markdown'],
    AsMergeKind: ['none', 'replace', 'append', 'remove-component'],
    AsMetadataLocation: ['unknown', 'shared', 'state', 'cache', 'user'],
    AsProvidedKind: ['unknown', 'library', 'binary', 'mediatype', 'font', 'modalias', 'python', 'dbus-system', 'dbus-user', 'firmware-runtime', 'firmware-flashed', 'id'],
    AsReferenceKind: ['unknown', 'doi', 'citation-cff', 'registry'],
    AsRelationCompare: ['unknown', 'eq', 'ne', 'lt', 'gt', 'le', 'ge'],
    AsRelationItemKind: ['unknown', 'id', 'modalias', 'kernel', 'memory', 'firmware', 'control', 'display-length', 'hardware', 'internet'],
    AsRelationKind: ['unknown', 'requires', 'recommends', 'supports'],
    AsRelationStatus: ['unknown', 'error', 'not-satisfied', 'satisfied'],
    AsReleaseKind: ['unknown', 'stable', 'development', 'snapshot'],
    AsReleaseListKind: ['unknown', 'embedded', 'external'],
    AsReleaseUrlKind: ['unknown', 'details'],
    AsScreenshotKind: ['unknown', 'default', 'extra'],
    AsScreenshotMediaKind: ['unknown', 'image', 'video'],
    AsSizeKind: ['unknown', 'download', 'installed'],
    AsSuggestedKind: ['unknown', 'upstream', 'heuristic'],
    AsTranslationKind: ['unknown', 'gettext', 'qt'],
    AsUrgencyKind: ['unknown', 'low', 'medium', 'high', 'critical'],
    AsUrlKind: ['unknown', 'homepage', 'bugtracker', 'faq', 'help', 'donation', 'translate', 'contact', 'vcs-browser', 'contribute'],
    AsVideoCodecKind: ['unknown', 'vp9', 'av1'],
    AsVideoContainerKind: ['unknown', 'mkv', 'webm'],
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
    'AsAgreementKind.eula': 2,
    'AsAgreementKind.generic': 1,
    'AsAgreementKind.privacy': 3,
    'AsAgreementKind.unknown': 0,
    'AsArtifactKind.binary': 2,
    'AsArtifactKind.source': 1,
    'AsArtifactKind.unknown': 0,
    'AsBundleKind.appimage': 4,
    'AsBundleKind.cabinet': 7,
    'AsBundleKind.flatpak': 3,
    'AsBundleKind.limba': 2,
    'AsBundleKind.linglong': 8,
    'AsBundleKind.package': 1,
    'AsBundleKind.snap': 5,
    'AsBundleKind.sysupdate': 9,
    'AsBundleKind.tarball': 6,
    'AsBundleKind.unknown': 0,
    'AsChassisKind.desktop': 1,
    'AsChassisKind.handset': 5,
    'AsChassisKind.laptop': 2,
    'AsChassisKind.server': 3,
    'AsChassisKind.tablet': 4,
    'AsChassisKind.unknown': 0,
    'AsCheckResult.error': 0,
    'AsCheckResult.false': 2,
    'AsCheckResult.true': 3,
    'AsCheckResult.unknown': 1,
    'AsChecksumKind.blake2b': 4,
    'AsChecksumKind.blake3': 5,
    'AsChecksumKind.none': 0,
    'AsChecksumKind.sha1': 1,
    'AsChecksumKind.sha256': 2,
    'AsChecksumKind.sha512': 3,
    'AsColorKind.primary': 1,
    'AsColorKind.unknown': 0,
    'AsColorSchemeKind.dark': 2,
    'AsColorSchemeKind.light': 1,
    'AsColorSchemeKind.unknown': 0,
    'AsComponentKind.addon': 6,
    'AsComponentKind.codec': 9,
    'AsComponentKind.console-app': 3,
    'AsComponentKind.desktop-app': 2,
    'AsComponentKind.driver': 13,
    'AsComponentKind.firmware': 12,
    'AsComponentKind.font': 8,
    'AsComponentKind.generic': 1,
    'AsComponentKind.icon-theme': 16,
    'AsComponentKind.input-method': 10,
    'AsComponentKind.localization': 14,
    'AsComponentKind.operating-system': 11,
    'AsComponentKind.repository': 15,
    'AsComponentKind.runtime': 7,
    'AsComponentKind.service': 5,
    'AsComponentKind.unknown': 0,
    'AsComponentKind.web-app': 4,
    'AsComponentScope.system': 1,
    'AsComponentScope.unknown': 0,
    'AsComponentScope.user': 2,
    'AsContentRatingSystem.acb': 2,
    'AsContentRatingSystem.cero': 9,
    'AsContentRatingSystem.djctq': 3,
    'AsContentRatingSystem.esra': 8,
    'AsContentRatingSystem.esrb': 14,
    'AsContentRatingSystem.grac': 13,
    'AsContentRatingSystem.gsrr': 4,
    'AsContentRatingSystem.iarc': 15,
    'AsContentRatingSystem.incaa': 1,
    'AsContentRatingSystem.kavi': 6,
    'AsContentRatingSystem.mda': 12,
    'AsContentRatingSystem.oflcnz': 10,
    'AsContentRatingSystem.pegi': 5,
    'AsContentRatingSystem.russia': 11,
    'AsContentRatingSystem.unknown': 0,
    'AsContentRatingSystem.usk': 7,
    'AsContentRatingValue.intense': 4,
    'AsContentRatingValue.mild': 2,
    'AsContentRatingValue.moderate': 3,
    'AsContentRatingValue.none': 1,
    'AsContentRatingValue.unknown': 0,
    'AsControlKind.console': 3,
    'AsControlKind.gamepad': 5,
    'AsControlKind.keyboard': 2,
    'AsControlKind.pointing': 1,
    'AsControlKind.tablet': 9,
    'AsControlKind.touch': 4,
    'AsControlKind.tv-remote': 8,
    'AsControlKind.unknown': 0,
    'AsControlKind.vision': 7,
    'AsControlKind.voice': 6,
    'AsDisplaySideKind.longest': 2,
    'AsDisplaySideKind.shortest': 1,
    'AsDisplaySideKind.unknown': 0,
    'AsFormatKind.desktop-entry': 3,
    'AsFormatKind.unknown': 0,
    'AsFormatKind.xml': 1,
    'AsFormatKind.yaml': 2,
    'AsFormatStyle.catalog': 2,
    'AsFormatStyle.metainfo': 1,
    'AsFormatStyle.unknown': 0,
    'AsFormatVersion.unknown': 0,
    'AsFormatVersion.v1-0': 1,
    'AsIconKind.cached': 2,
    'AsIconKind.local': 3,
    'AsIconKind.remote': 4,
    'AsIconKind.stock': 1,
    'AsIconKind.unknown': 0,
    'AsImageKind.source': 1,
    'AsImageKind.thumbnail': 2,
    'AsImageKind.unknown': 0,
    'AsInternetKind.always': 1,
    'AsInternetKind.first-run': 3,
    'AsInternetKind.offline-only': 2,
    'AsInternetKind.unknown': 0,
    'AsIssueKind.cve': 2,
    'AsIssueKind.generic': 1,
    'AsIssueKind.unknown': 0,
    'AsIssueSeverity.error': 4,
    'AsIssueSeverity.info': 2,
    'AsIssueSeverity.pedantic': 1,
    'AsIssueSeverity.unknown': 0,
    'AsIssueSeverity.warning': 3,
    'AsLaunchableKind.cockpit-manifest': 3,
    'AsLaunchableKind.desktop-id': 1,
    'AsLaunchableKind.service': 2,
    'AsLaunchableKind.unknown': 0,
    'AsLaunchableKind.url': 4,
    'AsMarkupKind.markdown': 3,
    'AsMarkupKind.text': 2,
    'AsMarkupKind.unknown': 0,
    'AsMarkupKind.xml': 1,
    'AsMergeKind.append': 2,
    'AsMergeKind.none': 0,
    'AsMergeKind.remove-component': 3,
    'AsMergeKind.replace': 1,
    'AsMetadataLocation.cache': 3,
    'AsMetadataLocation.shared': 1,
    'AsMetadataLocation.state': 2,
    'AsMetadataLocation.unknown': 0,
    'AsMetadataLocation.user': 4,
    'AsProvidedKind.binary': 2,
    'AsProvidedKind.dbus-system': 7,
    'AsProvidedKind.dbus-user': 8,
    'AsProvidedKind.firmware-flashed': 10,
    'AsProvidedKind.firmware-runtime': 9,
    'AsProvidedKind.font': 4,
    'AsProvidedKind.id': 11,
    'AsProvidedKind.library': 1,
    'AsProvidedKind.mediatype': 3,
    'AsProvidedKind.modalias': 5,
    'AsProvidedKind.python': 6,
    'AsProvidedKind.unknown': 0,
    'AsReferenceKind.citation-cff': 2,
    'AsReferenceKind.doi': 1,
    'AsReferenceKind.registry': 3,
    'AsReferenceKind.unknown': 0,
    'AsRelationCompare.eq': 1,
    'AsRelationCompare.ge': 6,
    'AsRelationCompare.gt': 4,
    'AsRelationCompare.le': 5,
    'AsRelationCompare.lt': 3,
    'AsRelationCompare.ne': 2,
    'AsRelationCompare.unknown': 0,
    'AsRelationItemKind.control': 6,
    'AsRelationItemKind.display-length': 7,
    'AsRelationItemKind.firmware': 5,
    'AsRelationItemKind.hardware': 8,
    'AsRelationItemKind.id': 1,
    'AsRelationItemKind.internet': 9,
    'AsRelationItemKind.kernel': 3,
    'AsRelationItemKind.memory': 4,
    'AsRelationItemKind.modalias': 2,
    'AsRelationItemKind.unknown': 0,
    'AsRelationKind.recommends': 2,
    'AsRelationKind.requires': 1,
    'AsRelationKind.supports': 3,
    'AsRelationKind.unknown': 0,
    'AsRelationStatus.error': 1,
    'AsRelationStatus.not-satisfied': 2,
    'AsRelationStatus.satisfied': 3,
    'AsRelationStatus.unknown': 0,
    'AsReleaseKind.development': 2,
    'AsReleaseKind.snapshot': 3,
    'AsReleaseKind.stable': 1,
    'AsReleaseKind.unknown': 0,
    'AsReleaseListKind.embedded': 1,
    'AsReleaseListKind.external': 2,
    'AsReleaseListKind.unknown': 0,
    'AsReleaseUrlKind.details': 1,
    'AsReleaseUrlKind.unknown': 0,
    'AsScreenshotKind.default': 1,
    'AsScreenshotKind.extra': 2,
    'AsScreenshotKind.unknown': 0,
    'AsScreenshotMediaKind.image': 1,
    'AsScreenshotMediaKind.unknown': 0,
    'AsScreenshotMediaKind.video': 2,
    'AsSizeKind.download': 1,
    'AsSizeKind.installed': 2,
    'AsSizeKind.unknown': 0,
    'AsSuggestedKind.heuristic': 2,
    'AsSuggestedKind.unknown': 0,
    'AsSuggestedKind.upstream': 1,
    'AsTranslationKind.gettext': 1,
    'AsTranslationKind.qt': 2,
    'AsTranslationKind.unknown': 0,
    'AsUrgencyKind.critical': 4,
    'AsUrgencyKind.high': 3,
    'AsUrgencyKind.low': 1,
    'AsUrgencyKind.medium': 2,
    'AsUrgencyKind.unknown': 0,
    'AsUrlKind.bugtracker': 2,
    'AsUrlKind.contact': 7,
    'AsUrlKind.contribute': 9,
    'AsUrlKind.donation': 5,
    'AsUrlKind.faq': 3,
    'AsUrlKind.help': 4,
    'AsUrlKind.homepage': 1,
    'AsUrlKind.translate': 6,
    'AsUrlKind.unknown': 0,
    'AsUrlKind.vcs-browser': 8,
    'AsVideoCodecKind.av1': 2,
    'AsVideoCodecKind.unknown': 0,
    'AsVideoCodecKind.vp9': 1,
    'AsVideoContainerKind.mkv': 1,
    'AsVideoContainerKind.unknown': 0,
    'AsVideoContainerKind.webm': 2,
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
    'AsCacheFlags.no-clear': 4,
    'AsCacheFlags.none': 0,
    'AsCacheFlags.refresh-system': 8,
    'AsCacheFlags.use-system': 2,
    'AsCacheFlags.use-user': 1,
    'AsComponentBoxFlags.no-checks': 1,
    'AsComponentBoxFlags.none': 0,
    'AsDataIdMatchFlags.branch': 16,
    'AsDataIdMatchFlags.bundle-kind': 2,
    'AsDataIdMatchFlags.id': 8,
    'AsDataIdMatchFlags.none': 0,
    'AsDataIdMatchFlags.origin': 4,
    'AsDataIdMatchFlags.scope': 1,
    'AsParseFlags.ignore-mediabaseurl': 1,
    'AsParseFlags.none': 0,
    'AsPoolFlags.ignore-cache-age': 16,
    'AsPoolFlags.load-flatpak': 8,
    'AsPoolFlags.load-os-catalog': 1,
    'AsPoolFlags.load-os-desktop-files': 4,
    'AsPoolFlags.load-os-metainfo': 2,
    'AsPoolFlags.monitor': 128,
    'AsPoolFlags.none': 0,
    'AsPoolFlags.prefer-os-metainfo': 64,
    'AsPoolFlags.resolve-addons': 32,
    'AsReviewFlags.none': 0,
    'AsReviewFlags.self': 1,
    'AsReviewFlags.voted': 2,
    'AsValueFlags.duplicate-check': 1,
    'AsValueFlags.no-translation-fallback': 2,
    'AsValueFlags.none': 0,
    'AsVercmpFlags.ignore-epoch': 1,
    'AsVercmpFlags.none': 0,
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
    'AsComponent.kind': 'AsComponentKind',
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
    'AsCategory.icon': 'gchararray',
    'AsCategory.id': 'gchararray',
    'AsCategory.name': 'gchararray',
    'AsComponent.description': 'gchararray',
    'AsComponent.id': 'gchararray',
    'AsComponent.kind': 'AsComponentKind',
    'AsComponent.name': 'gchararray',
    'AsComponent.project-group': 'gchararray',
    'AsComponent.project-license': 'gchararray',
    'AsComponent.summary': 'gchararray',
    'AsComponentBox.flags': 'guint',
    'AsReview.date': 'AsReview',
    'AsReview.description': 'gchararray',
    'AsReview.flags': 'guint64',
    'AsReview.id': 'gchararray',
    'AsReview.locale': 'gchararray',
    'AsReview.priority': 'gint',
    'AsReview.rating': 'gint',
    'AsReview.reviewer-id': 'gchararray',
    'AsReview.reviewer-name': 'gchararray',
    'AsReview.summary': 'gchararray',
    'AsReview.version': 'gchararray',
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
    'AsPool::changed': '0.15.0',
    'AsReview.date': '0.14.0',
    'AsReview.description': '0.14.0',
    'AsReview.flags': '0.14.0',
    'AsReview.id': '0.14.0',
    'AsReview.locale': '0.14.0',
    'AsReview.priority': '0.15.6',
    'AsReview.rating': '0.14.0',
    'AsReview.reviewer-id': '0.14.0',
    'AsReview.reviewer-name': '0.14.0',
    'AsReview.summary': '0.14.0',
    'AsReview.version': '0.14.0',
};
