// The widget vocabulary of PapersDocument-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: PapersDocument-4.0 — library 51.0.0 — prop(s) no TypeScript value satisfies: PapersDocument.Attachment.data PapersDocument.LinkAction.hide-list PapersDocument.LinkAction.reset-fields PapersDocument.LinkAction.show-list PapersDocument.LinkAction.toggle-list
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'PapersDocument',
    version: '4.0',
    libraryVersion: '51.0.0',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['PapersDocument.Attachment.data', 'PapersDocument.LinkAction.hide-list', 'PapersDocument.LinkAction.reset-fields', 'PapersDocument.LinkAction.show-list', 'PapersDocument.LinkAction.toggle-list'],
    unresolvedProps: [],
    identifierPrefixes: ['Pps'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    PpsAnnotation: ['area', 'border-width', 'contents', 'hidden', 'modified', 'name', 'page', 'rgba'],
    PpsAnnotationAttachment: ['attachment'],
    PpsAnnotationFreeText: ['font-desc', 'font-rgba'],
    PpsAnnotationInk: ['highlight', 'ink-list'],
    PpsAnnotationMarkup: ['has-popup', 'label', 'opacity', 'popup-is-open', 'rectangle'],
    PpsAnnotationText: ['icon', 'is-open'],
    PpsAnnotationTextMarkup: ['type'],
    PpsAttachment: ['cdatetime', 'data', 'description', 'mdatetime', 'name', 'size'],
    PpsCertificateInfo: ['expiration-time', 'id', 'issuance-time', 'issuer-common-name', 'issuer-email', 'issuer-organization', 'status', 'subject-common-name', 'subject-email', 'subject-organization'],
    PpsFontDescription: ['details', 'name'],
    PpsLayer: ['children', 'enabled', 'title', 'title-only'],
    PpsLink: ['action', 'title'],
    PpsLinkAction: ['dest', 'exclude-reset-fields', 'filename', 'hide-list', 'name', 'params', 'reset-fields', 'show-list', 'toggle-list', 'type', 'uri'],
    PpsLinkDest: ['bottom', 'change', 'left', 'named', 'page', 'page-label', 'right', 'top', 'type', 'zoom'],
    PpsOutlines: ['children', 'expand', 'label', 'link', 'markup'],
    PpsSignature: ['certificate-info', 'signature-time', 'status'],
    PpsTransitionEffect: ['alignment', 'angle', 'direction', 'duration', 'duration-real', 'rectangular', 'scale', 'type'],
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
    PpsAnnotationAttachment: ['PpsAnnotationAttachment', 'PpsAnnotationMarkup', 'PpsAnnotation', 'GObject'],
    PpsAnnotationFreeText: ['PpsAnnotationFreeText', 'PpsAnnotation', 'GObject'],
    PpsAnnotationInk: ['PpsAnnotationInk', 'PpsAnnotation', 'GObject'],
    PpsAnnotationStamp: ['PpsAnnotationStamp', 'PpsAnnotationMarkup', 'PpsAnnotation', 'GObject'],
    PpsAnnotationText: ['PpsAnnotationText', 'PpsAnnotationMarkup', 'PpsAnnotation', 'GObject'],
    PpsAnnotationTextMarkup: ['PpsAnnotationTextMarkup', 'PpsAnnotationMarkup', 'PpsAnnotation', 'GObject'],
    PpsAttachment: ['PpsAttachment', 'GObject'],
    PpsCertificateInfo: ['PpsCertificateInfo', 'GObject'],
    PpsFontDescription: ['PpsFontDescription', 'GObject'],
    PpsFormFieldButton: ['PpsFormFieldButton', 'PpsFormField', 'GObject'],
    PpsFormFieldChoice: ['PpsFormFieldChoice', 'PpsFormField', 'GObject'],
    PpsFormFieldSignature: ['PpsFormFieldSignature', 'PpsFormField', 'GObject'],
    PpsFormFieldText: ['PpsFormFieldText', 'PpsFormField', 'GObject'],
    PpsImage: ['PpsImage', 'GObject'],
    PpsLayer: ['PpsLayer', 'GObject'],
    PpsLink: ['PpsLink', 'GObject'],
    PpsLinkAction: ['PpsLinkAction', 'GObject'],
    PpsLinkDest: ['PpsLinkDest', 'GObject'],
    PpsMedia: ['PpsMedia', 'GObject'],
    PpsOutlines: ['PpsOutlines', 'GObject'],
    PpsPage: ['PpsPage', 'GObject'],
    PpsRenderContext: ['PpsRenderContext', 'GObject'],
    PpsSignature: ['PpsSignature', 'GObject'],
    PpsTransitionEffect: ['PpsTransitionEffect', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PpsAnnotationTextIcon: ['note', 'comment', 'key', 'help', 'new-paragraph', 'paragraph', 'insert', 'cross', 'circle', 'unknown'],
    PpsAnnotationTextMarkupType: ['highlight', 'strike-out', 'underline', 'squiggly'],
    PpsAnnotationType: ['unknown', 'text', 'free-text', 'attachment', 'text-markup', 'stamp', 'ink'],
    PpsAnnotationsOverMarkup: ['not-implemented', 'unknown', 'yes', 'not'],
    PpsCertificateStatus: ['trusted', 'untrusted-issuer', 'unknown-issuer', 'revoked', 'expired', 'generic-error', 'not-verified'],
    PpsCompressionType: ['none', 'bzip2', 'gzip', 'lzma'],
    PpsDocumentContainsJS: ['unknown', 'no', 'yes'],
    PpsDocumentLayout: ['single-page', 'one-column', 'two-column-left', 'two-column-right', 'two-page-left', 'two-page-right'],
    PpsDocumentMode: ['none', 'use-oc', 'use-thumbs', 'full-screen', 'use-attachments', 'presentation'],
    PpsFileExporterFormat: ['unknown', 'ps', 'pdf'],
    PpsFormFieldButtonType: ['push', 'check', 'radio'],
    PpsFormFieldChoiceType: ['combo', 'list'],
    PpsFormFieldTextType: ['normal', 'multiline', 'file-select'],
    PpsLinkActionType: ['goto-dest', 'goto-remote', 'external-uri', 'launch', 'named', 'layers-state', 'reset-form'],
    PpsLinkDestType: ['page', 'xyz', 'fit', 'fith', 'fitv', 'fitr', 'named', 'page-label', 'unknown'],
    PpsSelectionStyle: ['glyph', 'word', 'line'],
    PpsSignatureStatus: ['valid', 'invalid', 'digest-mismatch', 'decoding-error', 'generic-error'],
    PpsTransitionEffectAlignment: ['horizontal', 'vertical'],
    PpsTransitionEffectDirection: ['inward', 'outward'],
    PpsTransitionEffectType: ['replace', 'split', 'blinds', 'box', 'wipe', 'dissolve', 'glitter', 'fly', 'push', 'cover', 'uncover', 'fade'],
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
    'PpsAnnotationTextIcon.circle': 8,
    'PpsAnnotationTextIcon.comment': 1,
    'PpsAnnotationTextIcon.cross': 7,
    'PpsAnnotationTextIcon.help': 3,
    'PpsAnnotationTextIcon.insert': 6,
    'PpsAnnotationTextIcon.key': 2,
    'PpsAnnotationTextIcon.new-paragraph': 4,
    'PpsAnnotationTextIcon.note': 0,
    'PpsAnnotationTextIcon.paragraph': 5,
    'PpsAnnotationTextIcon.unknown': 9,
    'PpsAnnotationTextMarkupType.highlight': 0,
    'PpsAnnotationTextMarkupType.squiggly': 3,
    'PpsAnnotationTextMarkupType.strike-out': 1,
    'PpsAnnotationTextMarkupType.underline': 2,
    'PpsAnnotationType.attachment': 3,
    'PpsAnnotationType.free-text': 2,
    'PpsAnnotationType.ink': 6,
    'PpsAnnotationType.stamp': 5,
    'PpsAnnotationType.text': 1,
    'PpsAnnotationType.text-markup': 4,
    'PpsAnnotationType.unknown': 0,
    'PpsAnnotationsOverMarkup.not': 3,
    'PpsAnnotationsOverMarkup.not-implemented': 0,
    'PpsAnnotationsOverMarkup.unknown': 1,
    'PpsAnnotationsOverMarkup.yes': 2,
    'PpsCertificateStatus.expired': 4,
    'PpsCertificateStatus.generic-error': 5,
    'PpsCertificateStatus.not-verified': 6,
    'PpsCertificateStatus.revoked': 3,
    'PpsCertificateStatus.trusted': 0,
    'PpsCertificateStatus.unknown-issuer': 2,
    'PpsCertificateStatus.untrusted-issuer': 1,
    'PpsCompressionType.bzip2': 1,
    'PpsCompressionType.gzip': 2,
    'PpsCompressionType.lzma': 3,
    'PpsCompressionType.none': 0,
    'PpsDocumentContainsJS.no': 1,
    'PpsDocumentContainsJS.unknown': 0,
    'PpsDocumentContainsJS.yes': 2,
    'PpsDocumentLayout.one-column': 1,
    'PpsDocumentLayout.single-page': 0,
    'PpsDocumentLayout.two-column-left': 2,
    'PpsDocumentLayout.two-column-right': 3,
    'PpsDocumentLayout.two-page-left': 4,
    'PpsDocumentLayout.two-page-right': 5,
    'PpsDocumentMode.full-screen': 3,
    'PpsDocumentMode.none': 0,
    'PpsDocumentMode.presentation': 3,
    'PpsDocumentMode.use-attachments': 4,
    'PpsDocumentMode.use-oc': 1,
    'PpsDocumentMode.use-thumbs': 2,
    'PpsFileExporterFormat.pdf': 2,
    'PpsFileExporterFormat.ps': 1,
    'PpsFileExporterFormat.unknown': 0,
    'PpsFormFieldButtonType.check': 1,
    'PpsFormFieldButtonType.push': 0,
    'PpsFormFieldButtonType.radio': 2,
    'PpsFormFieldChoiceType.combo': 0,
    'PpsFormFieldChoiceType.list': 1,
    'PpsFormFieldTextType.file-select': 2,
    'PpsFormFieldTextType.multiline': 1,
    'PpsFormFieldTextType.normal': 0,
    'PpsLinkActionType.external-uri': 2,
    'PpsLinkActionType.goto-dest': 0,
    'PpsLinkActionType.goto-remote': 1,
    'PpsLinkActionType.launch': 3,
    'PpsLinkActionType.layers-state': 5,
    'PpsLinkActionType.named': 4,
    'PpsLinkActionType.reset-form': 6,
    'PpsLinkDestType.fit': 2,
    'PpsLinkDestType.fith': 3,
    'PpsLinkDestType.fitr': 5,
    'PpsLinkDestType.fitv': 4,
    'PpsLinkDestType.named': 6,
    'PpsLinkDestType.page': 0,
    'PpsLinkDestType.page-label': 7,
    'PpsLinkDestType.unknown': 8,
    'PpsLinkDestType.xyz': 1,
    'PpsSelectionStyle.glyph': 0,
    'PpsSelectionStyle.line': 2,
    'PpsSelectionStyle.word': 1,
    'PpsSignatureStatus.decoding-error': 3,
    'PpsSignatureStatus.digest-mismatch': 2,
    'PpsSignatureStatus.generic-error': 4,
    'PpsSignatureStatus.invalid': 1,
    'PpsSignatureStatus.valid': 0,
    'PpsTransitionEffectAlignment.horizontal': 0,
    'PpsTransitionEffectAlignment.vertical': 1,
    'PpsTransitionEffectDirection.inward': 0,
    'PpsTransitionEffectDirection.outward': 1,
    'PpsTransitionEffectType.blinds': 2,
    'PpsTransitionEffectType.box': 3,
    'PpsTransitionEffectType.cover': 9,
    'PpsTransitionEffectType.dissolve': 5,
    'PpsTransitionEffectType.fade': 11,
    'PpsTransitionEffectType.fly': 7,
    'PpsTransitionEffectType.glitter': 6,
    'PpsTransitionEffectType.push': 8,
    'PpsTransitionEffectType.replace': 0,
    'PpsTransitionEffectType.split': 1,
    'PpsTransitionEffectType.uncover': 10,
    'PpsTransitionEffectType.wipe': 4,
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
    'PpsDocumentInfoFields.author': 4,
    'PpsDocumentInfoFields.contains-js': 262144,
    'PpsDocumentInfoFields.creation-datetime': 256,
    'PpsDocumentInfoFields.creator': 64,
    'PpsDocumentInfoFields.format': 2,
    'PpsDocumentInfoFields.keywords': 16,
    'PpsDocumentInfoFields.layout': 32,
    'PpsDocumentInfoFields.license': 131072,
    'PpsDocumentInfoFields.linearized': 1024,
    'PpsDocumentInfoFields.mod-datetime': 512,
    'PpsDocumentInfoFields.n-pages': 16384,
    'PpsDocumentInfoFields.paper-size': 65536,
    'PpsDocumentInfoFields.permissions': 8192,
    'PpsDocumentInfoFields.producer': 128,
    'PpsDocumentInfoFields.security': 32768,
    'PpsDocumentInfoFields.start-mode': 2048,
    'PpsDocumentInfoFields.subject': 8,
    'PpsDocumentInfoFields.title': 1,
    'PpsDocumentInfoFields.ui-hints': 4096,
    'PpsDocumentLoadFlags.no-cache': 1,
    'PpsDocumentLoadFlags.none': 0,
    'PpsDocumentPermissions.full': 15,
    'PpsDocumentPermissions.ok-to-add-notes': 8,
    'PpsDocumentPermissions.ok-to-copy': 4,
    'PpsDocumentPermissions.ok-to-modify': 2,
    'PpsDocumentPermissions.ok-to-print': 1,
    'PpsDocumentUIHints.center-window': 16,
    'PpsDocumentUIHints.direction-rtl': 64,
    'PpsDocumentUIHints.display-doc-title': 32,
    'PpsDocumentUIHints.fit-window': 8,
    'PpsDocumentUIHints.hide-menubar': 2,
    'PpsDocumentUIHints.hide-toolbar': 1,
    'PpsDocumentUIHints.hide-windowui': 4,
    'PpsFileExporterCapabilities.collate': 4,
    'PpsFileExporterCapabilities.copies': 2,
    'PpsFileExporterCapabilities.generate-pdf': 32,
    'PpsFileExporterCapabilities.generate-ps': 64,
    'PpsFileExporterCapabilities.number-up': 256,
    'PpsFileExporterCapabilities.page-set': 1,
    'PpsFileExporterCapabilities.preview': 128,
    'PpsFileExporterCapabilities.reverse': 8,
    'PpsFileExporterCapabilities.scale': 16,
    'PpsFindOptions.case-sensitive': 1,
    'PpsFindOptions.default': 0,
    'PpsFindOptions.whole-words-only': 2,
    'PpsRenderAnnotsFlags.3d': 16777216,
    'PpsRenderAnnotsFlags.all': 67108863,
    'PpsRenderAnnotsFlags.caret': 8192,
    'PpsRenderAnnotsFlags.circle': 32,
    'PpsRenderAnnotsFlags.fileattachment': 65536,
    'PpsRenderAnnotsFlags.freetext': 4,
    'PpsRenderAnnotsFlags.highlight': 256,
    'PpsRenderAnnotsFlags.ink': 16384,
    'PpsRenderAnnotsFlags.line': 8,
    'PpsRenderAnnotsFlags.link': 2,
    'PpsRenderAnnotsFlags.movie': 262144,
    'PpsRenderAnnotsFlags.none': 0,
    'PpsRenderAnnotsFlags.polygon': 64,
    'PpsRenderAnnotsFlags.polyline': 128,
    'PpsRenderAnnotsFlags.popup': 32768,
    'PpsRenderAnnotsFlags.print-all': -32800771,
    'PpsRenderAnnotsFlags.print-document': 524288,
    'PpsRenderAnnotsFlags.print-markup': -32800771,
    'PpsRenderAnnotsFlags.print-stamp': 528384,
    'PpsRenderAnnotsFlags.printermark': 2097152,
    'PpsRenderAnnotsFlags.richmedia': 33554432,
    'PpsRenderAnnotsFlags.screen': 1048576,
    'PpsRenderAnnotsFlags.sound': 131072,
    'PpsRenderAnnotsFlags.square': 16,
    'PpsRenderAnnotsFlags.squiggly': 1024,
    'PpsRenderAnnotsFlags.stamp': 4096,
    'PpsRenderAnnotsFlags.strikeout': 2048,
    'PpsRenderAnnotsFlags.text': 1,
    'PpsRenderAnnotsFlags.trapnet': 4194304,
    'PpsRenderAnnotsFlags.underline': 512,
    'PpsRenderAnnotsFlags.watermark': 8388608,
    'PpsRenderAnnotsFlags.widget': 524288,
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
    'PpsAnnotationText.icon': 'PpsAnnotationTextIcon',
    'PpsAnnotationTextMarkup.type': 'PpsAnnotationTextMarkupType',
    'PpsCertificateInfo.status': 'PpsCertificateStatus',
    'PpsLinkAction.type': 'PpsLinkActionType',
    'PpsLinkDest.type': 'PpsLinkDestType',
    'PpsSignature.status': 'PpsSignatureStatus',
    'PpsTransitionEffect.alignment': 'PpsTransitionEffectAlignment',
    'PpsTransitionEffect.direction': 'PpsTransitionEffectDirection',
    'PpsTransitionEffect.type': 'PpsTransitionEffectType',
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
    'PpsAnnotation.border-width': 'gdouble',
    'PpsAnnotation.contents': 'gchararray',
    'PpsAnnotation.hidden': 'gboolean',
    'PpsAnnotation.modified': 'gchararray',
    'PpsAnnotation.name': 'gchararray',
    'PpsAnnotation.page': 'PpsPage',
    'PpsAnnotationAttachment.attachment': 'PpsAttachment',
    'PpsAnnotationInk.highlight': 'gboolean',
    'PpsAnnotationMarkup.has-popup': 'gboolean',
    'PpsAnnotationMarkup.label': 'gchararray',
    'PpsAnnotationMarkup.opacity': 'gdouble',
    'PpsAnnotationMarkup.popup-is-open': 'gboolean',
    'PpsAnnotationText.icon': 'PpsAnnotationTextIcon',
    'PpsAnnotationText.is-open': 'gboolean',
    'PpsAnnotationTextMarkup.type': 'PpsAnnotationTextMarkupType',
    'PpsAttachment.data': 'gpointer',
    'PpsAttachment.description': 'gchararray',
    'PpsAttachment.name': 'gchararray',
    'PpsAttachment.size': 'guint',
    'PpsCertificateInfo.id': 'gchararray',
    'PpsCertificateInfo.issuer-common-name': 'gchararray',
    'PpsCertificateInfo.issuer-email': 'gchararray',
    'PpsCertificateInfo.issuer-organization': 'gchararray',
    'PpsCertificateInfo.status': 'PpsCertificateStatus',
    'PpsCertificateInfo.subject-common-name': 'gchararray',
    'PpsCertificateInfo.subject-email': 'gchararray',
    'PpsCertificateInfo.subject-organization': 'gchararray',
    'PpsFontDescription.details': 'gchararray',
    'PpsFontDescription.name': 'gchararray',
    'PpsLayer.children': 'GListModel',
    'PpsLayer.enabled': 'gboolean',
    'PpsLayer.title': 'gchararray',
    'PpsLayer.title-only': 'gboolean',
    'PpsLink.action': 'PpsLinkAction',
    'PpsLink.title': 'gchararray',
    'PpsLinkAction.dest': 'PpsLinkDest',
    'PpsLinkAction.exclude-reset-fields': 'gboolean',
    'PpsLinkAction.filename': 'gchararray',
    'PpsLinkAction.hide-list': 'gpointer',
    'PpsLinkAction.name': 'gchararray',
    'PpsLinkAction.params': 'gchararray',
    'PpsLinkAction.reset-fields': 'gpointer',
    'PpsLinkAction.show-list': 'gpointer',
    'PpsLinkAction.toggle-list': 'gpointer',
    'PpsLinkAction.type': 'PpsLinkActionType',
    'PpsLinkAction.uri': 'gchararray',
    'PpsLinkDest.bottom': 'gdouble',
    'PpsLinkDest.change': 'guint',
    'PpsLinkDest.left': 'gdouble',
    'PpsLinkDest.named': 'gchararray',
    'PpsLinkDest.page': 'gint',
    'PpsLinkDest.page-label': 'gchararray',
    'PpsLinkDest.right': 'gdouble',
    'PpsLinkDest.top': 'gdouble',
    'PpsLinkDest.type': 'PpsLinkDestType',
    'PpsLinkDest.zoom': 'gdouble',
    'PpsOutlines.children': 'GListModel',
    'PpsOutlines.expand': 'gboolean',
    'PpsOutlines.label': 'gchararray',
    'PpsOutlines.link': 'PpsLink',
    'PpsOutlines.markup': 'gchararray',
    'PpsSignature.certificate-info': 'PpsCertificateInfo',
    'PpsSignature.status': 'PpsSignatureStatus',
    'PpsTransitionEffect.alignment': 'PpsTransitionEffectAlignment',
    'PpsTransitionEffect.angle': 'gint',
    'PpsTransitionEffect.direction': 'PpsTransitionEffectDirection',
    'PpsTransitionEffect.duration': 'gint',
    'PpsTransitionEffect.duration-real': 'gdouble',
    'PpsTransitionEffect.rectangular': 'gboolean',
    'PpsTransitionEffect.scale': 'gdouble',
    'PpsTransitionEffect.type': 'PpsTransitionEffectType',
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
    'PpsAnnotation.border-width': '48.0',
    'PpsAnnotation.hidden': '48.0',
};
