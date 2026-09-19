// The widget vocabulary of EvinceDocument-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: EvinceDocument-3.0 — library 48.1.0 — prop(s) no TypeScript value satisfies: EvinceDocument.Annotation.color EvinceDocument.Attachment.data EvinceDocument.LinkAction.hide-list EvinceDocument.LinkAction.reset-fields EvinceDocument.LinkAction.show-list EvinceDocument.LinkAction.toggle-list
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'EvinceDocument',
    version: '3.0',
    libraryVersion: '48.1.0',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['EvinceDocument.Annotation.color', 'EvinceDocument.Attachment.data', 'EvinceDocument.LinkAction.hide-list', 'EvinceDocument.LinkAction.reset-fields', 'EvinceDocument.LinkAction.show-list', 'EvinceDocument.LinkAction.toggle-list'],
    unresolvedProps: [],
    identifierPrefixes: ['Ev'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    EvAnnotation: ['area', 'color', 'contents', 'modified', 'name', 'page', 'rgba'],
    EvAnnotationAttachment: ['attachment'],
    EvAnnotationMarkup: ['can-have-popup', 'has-popup', 'label', 'opacity', 'popup-is-open', 'rectangle'],
    EvAnnotationText: ['icon', 'is-open'],
    EvAnnotationTextMarkup: ['type'],
    EvAttachment: ['ctime', 'data', 'description', 'mtime', 'name', 'size'],
    EvLink: ['action', 'title'],
    EvLinkAction: ['dest', 'exclude-reset-fields', 'filename', 'hide-list', 'name', 'params', 'reset-fields', 'show-list', 'toggle-list', 'type', 'uri'],
    EvLinkDest: ['bottom', 'change', 'left', 'named', 'page', 'page-label', 'right', 'top', 'type', 'zoom'],
    EvTransitionEffect: ['alignment', 'angle', 'direction', 'duration', 'duration-real', 'rectangular', 'scale', 'type'],
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
    EvAnnotationAttachment: ['EvAnnotationAttachment', 'EvAnnotation', 'GObject', 'EvAnnotationMarkup'],
    EvAnnotationText: ['EvAnnotationText', 'EvAnnotation', 'GObject', 'EvAnnotationMarkup'],
    EvAnnotationTextMarkup: ['EvAnnotationTextMarkup', 'EvAnnotation', 'GObject', 'EvAnnotationMarkup'],
    EvAttachment: ['EvAttachment', 'GObject'],
    EvFormFieldButton: ['EvFormFieldButton', 'EvFormField', 'GObject'],
    EvFormFieldChoice: ['EvFormFieldChoice', 'EvFormField', 'GObject'],
    EvFormFieldSignature: ['EvFormFieldSignature', 'EvFormField', 'GObject'],
    EvFormFieldText: ['EvFormFieldText', 'EvFormField', 'GObject'],
    EvImage: ['EvImage', 'GObject'],
    EvLayer: ['EvLayer', 'GObject'],
    EvLink: ['EvLink', 'GObject'],
    EvLinkAction: ['EvLinkAction', 'GObject'],
    EvLinkDest: ['EvLinkDest', 'GObject'],
    EvMedia: ['EvMedia', 'GObject'],
    EvPage: ['EvPage', 'GObject'],
    EvRenderContext: ['EvRenderContext', 'GObject'],
    EvTransitionEffect: ['EvTransitionEffect', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EvAnnotationTextIcon: ['note', 'comment', 'key', 'help', 'new-paragraph', 'paragraph', 'insert', 'cross', 'circle', 'unknown'],
    EvAnnotationTextMarkupType: ['highlight', 'strike-out', 'underline', 'squiggly'],
    EvAnnotationType: ['unknown', 'text', 'attachment', 'text-markup'],
    EvAnnotationsOverMarkup: ['not-implemented', 'unknown', 'yes', 'not'],
    EvCompressionType: ['none', 'bzip2', 'gzip', 'lzma'],
    EvDocumentContainsJS: ['unknown', 'no', 'yes'],
    EvDocumentLayout: ['single-page', 'one-column', 'two-column-left', 'two-column-right', 'two-page-left', 'two-page-right'],
    EvDocumentMode: ['none', 'use-oc', 'use-thumbs', 'full-screen', 'use-attachments', 'presentation'],
    EvFileExporterFormat: ['unknown', 'ps', 'pdf'],
    EvFormFieldButtonType: ['push', 'check', 'radio'],
    EvFormFieldChoiceType: ['combo', 'list'],
    EvFormFieldTextType: ['normal', 'multiline', 'file-select'],
    EvLinkActionType: ['goto-dest', 'goto-remote', 'external-uri', 'launch', 'named', 'layers-state', 'reset-form'],
    EvLinkDestType: ['page', 'xyz', 'fit', 'fith', 'fitv', 'fitr', 'named', 'page-label', 'unknown'],
    EvSelectionStyle: ['glyph', 'word', 'line'],
    EvTransitionEffectAlignment: ['horizontal', 'vertical'],
    EvTransitionEffectDirection: ['inward', 'outward'],
    EvTransitionEffectType: ['replace', 'split', 'blinds', 'box', 'wipe', 'dissolve', 'glitter', 'fly', 'push', 'cover', 'uncover', 'fade'],
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
    'EvAnnotationTextIcon.circle': 8,
    'EvAnnotationTextIcon.comment': 1,
    'EvAnnotationTextIcon.cross': 7,
    'EvAnnotationTextIcon.help': 3,
    'EvAnnotationTextIcon.insert': 6,
    'EvAnnotationTextIcon.key': 2,
    'EvAnnotationTextIcon.new-paragraph': 4,
    'EvAnnotationTextIcon.note': 0,
    'EvAnnotationTextIcon.paragraph': 5,
    'EvAnnotationTextIcon.unknown': 9,
    'EvAnnotationTextMarkupType.highlight': 0,
    'EvAnnotationTextMarkupType.squiggly': 3,
    'EvAnnotationTextMarkupType.strike-out': 1,
    'EvAnnotationTextMarkupType.underline': 2,
    'EvAnnotationType.attachment': 2,
    'EvAnnotationType.text': 1,
    'EvAnnotationType.text-markup': 3,
    'EvAnnotationType.unknown': 0,
    'EvAnnotationsOverMarkup.not': 3,
    'EvAnnotationsOverMarkup.not-implemented': 0,
    'EvAnnotationsOverMarkup.unknown': 1,
    'EvAnnotationsOverMarkup.yes': 2,
    'EvCompressionType.bzip2': 1,
    'EvCompressionType.gzip': 2,
    'EvCompressionType.lzma': 3,
    'EvCompressionType.none': 0,
    'EvDocumentContainsJS.no': 1,
    'EvDocumentContainsJS.unknown': 0,
    'EvDocumentContainsJS.yes': 2,
    'EvDocumentLayout.one-column': 1,
    'EvDocumentLayout.single-page': 0,
    'EvDocumentLayout.two-column-left': 2,
    'EvDocumentLayout.two-column-right': 3,
    'EvDocumentLayout.two-page-left': 4,
    'EvDocumentLayout.two-page-right': 5,
    'EvDocumentMode.full-screen': 3,
    'EvDocumentMode.none': 0,
    'EvDocumentMode.presentation': 3,
    'EvDocumentMode.use-attachments': 4,
    'EvDocumentMode.use-oc': 1,
    'EvDocumentMode.use-thumbs': 2,
    'EvFileExporterFormat.pdf': 2,
    'EvFileExporterFormat.ps': 1,
    'EvFileExporterFormat.unknown': 0,
    'EvFormFieldButtonType.check': 1,
    'EvFormFieldButtonType.push': 0,
    'EvFormFieldButtonType.radio': 2,
    'EvFormFieldChoiceType.combo': 0,
    'EvFormFieldChoiceType.list': 1,
    'EvFormFieldTextType.file-select': 2,
    'EvFormFieldTextType.multiline': 1,
    'EvFormFieldTextType.normal': 0,
    'EvLinkActionType.external-uri': 2,
    'EvLinkActionType.goto-dest': 0,
    'EvLinkActionType.goto-remote': 1,
    'EvLinkActionType.launch': 3,
    'EvLinkActionType.layers-state': 5,
    'EvLinkActionType.named': 4,
    'EvLinkActionType.reset-form': 6,
    'EvLinkDestType.fit': 2,
    'EvLinkDestType.fith': 3,
    'EvLinkDestType.fitr': 5,
    'EvLinkDestType.fitv': 4,
    'EvLinkDestType.named': 6,
    'EvLinkDestType.page': 0,
    'EvLinkDestType.page-label': 7,
    'EvLinkDestType.unknown': 8,
    'EvLinkDestType.xyz': 1,
    'EvSelectionStyle.glyph': 0,
    'EvSelectionStyle.line': 2,
    'EvSelectionStyle.word': 1,
    'EvTransitionEffectAlignment.horizontal': 0,
    'EvTransitionEffectAlignment.vertical': 1,
    'EvTransitionEffectDirection.inward': 0,
    'EvTransitionEffectDirection.outward': 1,
    'EvTransitionEffectType.blinds': 2,
    'EvTransitionEffectType.box': 3,
    'EvTransitionEffectType.cover': 9,
    'EvTransitionEffectType.dissolve': 5,
    'EvTransitionEffectType.fade': 11,
    'EvTransitionEffectType.fly': 7,
    'EvTransitionEffectType.glitter': 6,
    'EvTransitionEffectType.push': 8,
    'EvTransitionEffectType.replace': 0,
    'EvTransitionEffectType.split': 1,
    'EvTransitionEffectType.uncover': 10,
    'EvTransitionEffectType.wipe': 4,
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
    'EvAnnotationsSaveMask.all': 2047,
    'EvAnnotationsSaveMask.area': 4,
    'EvAnnotationsSaveMask.attachment': 512,
    'EvAnnotationsSaveMask.color': 2,
    'EvAnnotationsSaveMask.contents': 1,
    'EvAnnotationsSaveMask.label': 8,
    'EvAnnotationsSaveMask.none': 0,
    'EvAnnotationsSaveMask.opacity': 16,
    'EvAnnotationsSaveMask.popup-is-open': 64,
    'EvAnnotationsSaveMask.popup-rect': 32,
    'EvAnnotationsSaveMask.text-icon': 256,
    'EvAnnotationsSaveMask.text-is-open': 128,
    'EvAnnotationsSaveMask.text-markup-type': 1024,
    'EvDocumentInfoFields.author': 4,
    'EvDocumentInfoFields.contains-js': 262144,
    'EvDocumentInfoFields.creation-date': 256,
    'EvDocumentInfoFields.creator': 64,
    'EvDocumentInfoFields.format': 2,
    'EvDocumentInfoFields.keywords': 16,
    'EvDocumentInfoFields.layout': 32,
    'EvDocumentInfoFields.license': 131072,
    'EvDocumentInfoFields.linearized': 1024,
    'EvDocumentInfoFields.mod-date': 512,
    'EvDocumentInfoFields.n-pages': 16384,
    'EvDocumentInfoFields.paper-size': 65536,
    'EvDocumentInfoFields.permissions': 8192,
    'EvDocumentInfoFields.producer': 128,
    'EvDocumentInfoFields.security': 32768,
    'EvDocumentInfoFields.start-mode': 2048,
    'EvDocumentInfoFields.subject': 8,
    'EvDocumentInfoFields.title': 1,
    'EvDocumentInfoFields.ui-hints': 4096,
    'EvDocumentLoadFlags.no-cache': 1,
    'EvDocumentLoadFlags.none': 0,
    'EvDocumentPermissions.full': 15,
    'EvDocumentPermissions.ok-to-add-notes': 8,
    'EvDocumentPermissions.ok-to-copy': 4,
    'EvDocumentPermissions.ok-to-modify': 2,
    'EvDocumentPermissions.ok-to-print': 1,
    'EvDocumentUIHints.center-window': 16,
    'EvDocumentUIHints.direction-rtl': 64,
    'EvDocumentUIHints.display-doc-title': 32,
    'EvDocumentUIHints.fit-window': 8,
    'EvDocumentUIHints.hide-menubar': 2,
    'EvDocumentUIHints.hide-toolbar': 1,
    'EvDocumentUIHints.hide-windowui': 4,
    'EvFileExporterCapabilities.collate': 4,
    'EvFileExporterCapabilities.copies': 2,
    'EvFileExporterCapabilities.generate-pdf': 32,
    'EvFileExporterCapabilities.generate-ps': 64,
    'EvFileExporterCapabilities.number-up': 256,
    'EvFileExporterCapabilities.page-set': 1,
    'EvFileExporterCapabilities.preview': 128,
    'EvFileExporterCapabilities.reverse': 8,
    'EvFileExporterCapabilities.scale': 16,
    'EvFindOptions.case-sensitive': 1,
    'EvFindOptions.default': 0,
    'EvFindOptions.whole-words-only': 2,
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
    'EvAnnotationText.icon': 'EvAnnotationTextIcon',
    'EvAnnotationTextMarkup.type': 'EvAnnotationTextMarkupType',
    'EvLinkAction.type': 'EvLinkActionType',
    'EvLinkDest.type': 'EvLinkDestType',
    'EvTransitionEffect.alignment': 'EvTransitionEffectAlignment',
    'EvTransitionEffect.direction': 'EvTransitionEffectDirection',
    'EvTransitionEffect.type': 'EvTransitionEffectType',
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
    'EvAnnotation.rgba': '3.6',
};
