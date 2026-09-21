// The widget vocabulary of Poppler-0.18 as runtime data.
//
// GENERATED — do not edit. Provenance: Poppler-0.18 — library 26.8.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Poppler',
    version: '0.18',
    libraryVersion: '26.8.0',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Poppler'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    PopplerDocument: ['author', 'creation-date', 'creation-datetime', 'creator', 'keywords', 'mod-date', 'mod-datetime', 'producer', 'subject', 'title'],
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
    PopplerAnnot: ['PopplerAnnot', 'GObject'],
    PopplerAnnotCircle: ['PopplerAnnotCircle', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotFileAttachment: ['PopplerAnnotFileAttachment', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotFreeText: ['PopplerAnnotFreeText', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotInk: ['PopplerAnnotInk', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotLine: ['PopplerAnnotLine', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotMarkup: ['PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotMovie: ['PopplerAnnotMovie', 'PopplerAnnot', 'GObject'],
    PopplerAnnotScreen: ['PopplerAnnotScreen', 'PopplerAnnot', 'GObject'],
    PopplerAnnotSquare: ['PopplerAnnotSquare', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotStamp: ['PopplerAnnotStamp', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotText: ['PopplerAnnotText', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAnnotTextMarkup: ['PopplerAnnotTextMarkup', 'PopplerAnnotMarkup', 'PopplerAnnot', 'GObject'],
    PopplerAttachment: ['PopplerAttachment', 'GObject'],
    PopplerDocument: ['PopplerDocument', 'GObject'],
    PopplerFontInfo: ['PopplerFontInfo', 'GObject'],
    PopplerFormField: ['PopplerFormField', 'GObject'],
    PopplerLayer: ['PopplerLayer', 'GObject'],
    PopplerMedia: ['PopplerMedia', 'GObject'],
    PopplerMovie: ['PopplerMovie', 'GObject'],
    PopplerPSFile: ['PopplerPSFile', 'GObject'],
    PopplerPage: ['PopplerPage', 'GObject'],
    PopplerStructureElement: ['PopplerStructureElement', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PopplerActionLayerAction: ['on', 'off', 'toggle'],
    PopplerActionMovieOperation: ['play', 'pause', 'resume', 'stop'],
    PopplerActionType: ['unknown', 'none', 'goto-dest', 'goto-remote', 'launch', 'uri', 'named', 'movie', 'rendition', 'ocg-state', 'javascript', 'reset-form'],
    PopplerAdditionalActionType: ['field-modified', 'format-field', 'validate-field', 'calculate-field'],
    PopplerAnnotExternalDataType: ['3d', 'unknown'],
    PopplerAnnotFreeTextQuadding: ['left-justified', 'centered', 'right-justified'],
    PopplerAnnotMarkupReplyType: ['r', 'group'],
    PopplerAnnotStampIcon: ['unknown', 'approved', 'as-is', 'confidential', 'final', 'experimental', 'expired', 'not-approved', 'not-for-public-release', 'sold', 'departmental', 'for-comment', 'for-public-release', 'top-secret', 'none'],
    PopplerAnnotTextState: ['marked', 'unmarked', 'accepted', 'rejected', 'cancelled', 'completed', 'none', 'unknown'],
    PopplerAnnotType: ['unknown', 'text', 'link', 'free-text', 'line', 'square', 'circle', 'polygon', 'poly-line', 'highlight', 'underline', 'squiggly', 'strike-out', 'stamp', 'caret', 'ink', 'popup', 'file-attachment', 'sound', 'movie', 'widget', 'screen', 'printer-mark', 'trap-net', 'watermark', '3d'],
    PopplerBackend: ['unknown', 'splash', 'cairo'],
    PopplerCertificateStatus: ['trusted', 'untrusted-issuer', 'unknown-issuer', 'revoked', 'expired', 'generic-error', 'not-verified'],
    PopplerDestType: ['unknown', 'xyz', 'fit', 'fith', 'fitv', 'fitr', 'fitb', 'fitbh', 'fitbv', 'named'],
    PopplerFontType: ['unknown', 'type1', 'type1c', 'type1cot', 'type3', 'truetype', 'truetypeot', 'cid-type0', 'cid-type0c', 'cid-type0cot', 'cid-type2', 'cid-type2ot'],
    PopplerFormButtonType: ['push', 'check', 'radio'],
    PopplerFormChoiceType: ['combo', 'list'],
    PopplerFormFieldType: ['unknown', 'button', 'text', 'choice', 'signature'],
    PopplerFormTextType: ['normal', 'multiline', 'file-select'],
    PopplerMoviePlayMode: ['once', 'open', 'repeat', 'palindrome'],
    PopplerPDFConformance: ['unset', 'a', 'b', 'g', 'n', 'p', 'pg', 'u', 'none'],
    PopplerPDFPart: ['unset', '1', '2', '3', '4', '5', '6', '7', '8', 'none'],
    PopplerPDFSubtype: ['unset', 'pdf-a', 'pdf-e', 'pdf-ua', 'pdf-vt', 'pdf-x', 'none'],
    PopplerPageLayout: ['unset', 'single-page', 'one-column', 'two-column-left', 'two-column-right', 'two-page-left', 'two-page-right'],
    PopplerPageMode: ['unset', 'none', 'use-outlines', 'use-thumbs', 'full-screen', 'use-oc', 'use-attachments'],
    PopplerPageTransitionAlignment: ['horizontal', 'vertical'],
    PopplerPageTransitionDirection: ['inward', 'outward'],
    PopplerPageTransitionType: ['replace', 'split', 'blinds', 'box', 'wipe', 'dissolve', 'glitter', 'fly', 'push', 'cover', 'uncover', 'fade'],
    PopplerPrintDuplex: ['none', 'simplex', 'duplex-flip-short-edge', 'duplex-flip-long-edge'],
    PopplerPrintScaling: ['app-default', 'none'],
    PopplerSelectionStyle: ['glyph', 'word', 'line'],
    PopplerSignatureStatus: ['valid', 'invalid', 'digest-mismatch', 'decoding-error', 'generic-error', 'not-found', 'not-verified'],
    PopplerStretch: ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'],
    PopplerStructureBlockAlign: ['before', 'middle', 'after', 'justify'],
    PopplerStructureBorderStyle: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'inset', 'outset'],
    PopplerStructureElementKind: ['content', 'object-reference', 'document', 'part', 'article', 'section', 'div', 'span', 'quote', 'note', 'reference', 'bibentry', 'code', 'link', 'annot', 'blockquote', 'caption', 'nonstruct', 'toc', 'toc-item', 'index', 'private', 'paragraph', 'heading', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'list', 'list-item', 'list-label', 'list-body', 'table', 'table-row', 'table-heading', 'table-data', 'table-header', 'table-footer', 'table-body', 'ruby', 'ruby-base-text', 'ruby-annot-text', 'ruby-punctuation', 'warichu', 'warichu-text', 'warichu-punctuation', 'figure', 'formula', 'form'],
    PopplerStructureFormRole: ['undefined', 'radio-button', 'push-button', 'text-value', 'checkbox'],
    PopplerStructureFormState: ['on', 'off', 'neutral'],
    PopplerStructureGlyphOrientation: ['auto', '0', '90', '180', '270'],
    PopplerStructureInlineAlign: ['start', 'center', 'end'],
    PopplerStructureListNumbering: ['none', 'disc', 'circle', 'square', 'decimal', 'upper-roman', 'lower-roman', 'upper-alpha', 'lower-alpha'],
    PopplerStructurePlacement: ['block', 'inline', 'before', 'start', 'end'],
    PopplerStructureRubyAlign: ['start', 'center', 'end', 'justify', 'distribute'],
    PopplerStructureRubyPosition: ['before', 'after', 'warichu', 'inline'],
    PopplerStructureTableScope: ['row', 'column', 'both'],
    PopplerStructureTextAlign: ['start', 'center', 'end', 'justify'],
    PopplerStructureTextDecoration: ['none', 'underline', 'overline', 'linethrough'],
    PopplerStructureWritingMode: ['lr-tb', 'rl-tb', 'tb-rl'],
    PopplerStyle: ['normal', 'oblique', 'italic'],
    PopplerWeight: ['thin', 'ultralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'ultrabold', 'heavy'],
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
    'PopplerActionLayerAction.off': 1,
    'PopplerActionLayerAction.on': 0,
    'PopplerActionLayerAction.toggle': 2,
    'PopplerActionMovieOperation.pause': 1,
    'PopplerActionMovieOperation.play': 0,
    'PopplerActionMovieOperation.resume': 2,
    'PopplerActionMovieOperation.stop': 3,
    'PopplerActionType.goto-dest': 2,
    'PopplerActionType.goto-remote': 3,
    'PopplerActionType.javascript': 10,
    'PopplerActionType.launch': 4,
    'PopplerActionType.movie': 7,
    'PopplerActionType.named': 6,
    'PopplerActionType.none': 1,
    'PopplerActionType.ocg-state': 9,
    'PopplerActionType.rendition': 8,
    'PopplerActionType.reset-form': 11,
    'PopplerActionType.unknown': 0,
    'PopplerActionType.uri': 5,
    'PopplerAdditionalActionType.calculate-field': 3,
    'PopplerAdditionalActionType.field-modified': 0,
    'PopplerAdditionalActionType.format-field': 1,
    'PopplerAdditionalActionType.validate-field': 2,
    'PopplerAnnotExternalDataType.3d': 0,
    'PopplerAnnotExternalDataType.unknown': 1,
    'PopplerAnnotFreeTextQuadding.centered': 1,
    'PopplerAnnotFreeTextQuadding.left-justified': 0,
    'PopplerAnnotFreeTextQuadding.right-justified': 2,
    'PopplerAnnotMarkupReplyType.group': 1,
    'PopplerAnnotMarkupReplyType.r': 0,
    'PopplerAnnotStampIcon.approved': 1,
    'PopplerAnnotStampIcon.as-is': 2,
    'PopplerAnnotStampIcon.confidential': 3,
    'PopplerAnnotStampIcon.departmental': 10,
    'PopplerAnnotStampIcon.experimental': 5,
    'PopplerAnnotStampIcon.expired': 6,
    'PopplerAnnotStampIcon.final': 4,
    'PopplerAnnotStampIcon.for-comment': 11,
    'PopplerAnnotStampIcon.for-public-release': 12,
    'PopplerAnnotStampIcon.none': 14,
    'PopplerAnnotStampIcon.not-approved': 7,
    'PopplerAnnotStampIcon.not-for-public-release': 8,
    'PopplerAnnotStampIcon.sold': 9,
    'PopplerAnnotStampIcon.top-secret': 13,
    'PopplerAnnotStampIcon.unknown': 0,
    'PopplerAnnotTextState.accepted': 2,
    'PopplerAnnotTextState.cancelled': 4,
    'PopplerAnnotTextState.completed': 5,
    'PopplerAnnotTextState.marked': 0,
    'PopplerAnnotTextState.none': 6,
    'PopplerAnnotTextState.rejected': 3,
    'PopplerAnnotTextState.unknown': 7,
    'PopplerAnnotTextState.unmarked': 1,
    'PopplerAnnotType.3d': 25,
    'PopplerAnnotType.caret': 14,
    'PopplerAnnotType.circle': 6,
    'PopplerAnnotType.file-attachment': 17,
    'PopplerAnnotType.free-text': 3,
    'PopplerAnnotType.highlight': 9,
    'PopplerAnnotType.ink': 15,
    'PopplerAnnotType.line': 4,
    'PopplerAnnotType.link': 2,
    'PopplerAnnotType.movie': 19,
    'PopplerAnnotType.poly-line': 8,
    'PopplerAnnotType.polygon': 7,
    'PopplerAnnotType.popup': 16,
    'PopplerAnnotType.printer-mark': 22,
    'PopplerAnnotType.screen': 21,
    'PopplerAnnotType.sound': 18,
    'PopplerAnnotType.square': 5,
    'PopplerAnnotType.squiggly': 11,
    'PopplerAnnotType.stamp': 13,
    'PopplerAnnotType.strike-out': 12,
    'PopplerAnnotType.text': 1,
    'PopplerAnnotType.trap-net': 23,
    'PopplerAnnotType.underline': 10,
    'PopplerAnnotType.unknown': 0,
    'PopplerAnnotType.watermark': 24,
    'PopplerAnnotType.widget': 20,
    'PopplerBackend.cairo': 2,
    'PopplerBackend.splash': 1,
    'PopplerBackend.unknown': 0,
    'PopplerCertificateStatus.expired': 4,
    'PopplerCertificateStatus.generic-error': 5,
    'PopplerCertificateStatus.not-verified': 6,
    'PopplerCertificateStatus.revoked': 3,
    'PopplerCertificateStatus.trusted': 0,
    'PopplerCertificateStatus.unknown-issuer': 2,
    'PopplerCertificateStatus.untrusted-issuer': 1,
    'PopplerDestType.fit': 2,
    'PopplerDestType.fitb': 6,
    'PopplerDestType.fitbh': 7,
    'PopplerDestType.fitbv': 8,
    'PopplerDestType.fith': 3,
    'PopplerDestType.fitr': 5,
    'PopplerDestType.fitv': 4,
    'PopplerDestType.named': 9,
    'PopplerDestType.unknown': 0,
    'PopplerDestType.xyz': 1,
    'PopplerFontType.cid-type0': 7,
    'PopplerFontType.cid-type0c': 8,
    'PopplerFontType.cid-type0cot': 9,
    'PopplerFontType.cid-type2': 10,
    'PopplerFontType.cid-type2ot': 11,
    'PopplerFontType.truetype': 5,
    'PopplerFontType.truetypeot': 6,
    'PopplerFontType.type1': 1,
    'PopplerFontType.type1c': 2,
    'PopplerFontType.type1cot': 3,
    'PopplerFontType.type3': 4,
    'PopplerFontType.unknown': 0,
    'PopplerFormButtonType.check': 1,
    'PopplerFormButtonType.push': 0,
    'PopplerFormButtonType.radio': 2,
    'PopplerFormChoiceType.combo': 0,
    'PopplerFormChoiceType.list': 1,
    'PopplerFormFieldType.button': 1,
    'PopplerFormFieldType.choice': 3,
    'PopplerFormFieldType.signature': 4,
    'PopplerFormFieldType.text': 2,
    'PopplerFormFieldType.unknown': 0,
    'PopplerFormTextType.file-select': 2,
    'PopplerFormTextType.multiline': 1,
    'PopplerFormTextType.normal': 0,
    'PopplerMoviePlayMode.once': 0,
    'PopplerMoviePlayMode.open': 1,
    'PopplerMoviePlayMode.palindrome': 3,
    'PopplerMoviePlayMode.repeat': 2,
    'PopplerPDFConformance.a': 1,
    'PopplerPDFConformance.b': 2,
    'PopplerPDFConformance.g': 3,
    'PopplerPDFConformance.n': 4,
    'PopplerPDFConformance.none': 8,
    'PopplerPDFConformance.p': 5,
    'PopplerPDFConformance.pg': 6,
    'PopplerPDFConformance.u': 7,
    'PopplerPDFConformance.unset': 0,
    'PopplerPDFPart.1': 1,
    'PopplerPDFPart.2': 2,
    'PopplerPDFPart.3': 3,
    'PopplerPDFPart.4': 4,
    'PopplerPDFPart.5': 5,
    'PopplerPDFPart.6': 6,
    'PopplerPDFPart.7': 7,
    'PopplerPDFPart.8': 8,
    'PopplerPDFPart.none': 9,
    'PopplerPDFPart.unset': 0,
    'PopplerPDFSubtype.none': 6,
    'PopplerPDFSubtype.pdf-a': 1,
    'PopplerPDFSubtype.pdf-e': 2,
    'PopplerPDFSubtype.pdf-ua': 3,
    'PopplerPDFSubtype.pdf-vt': 4,
    'PopplerPDFSubtype.pdf-x': 5,
    'PopplerPDFSubtype.unset': 0,
    'PopplerPageLayout.one-column': 2,
    'PopplerPageLayout.single-page': 1,
    'PopplerPageLayout.two-column-left': 3,
    'PopplerPageLayout.two-column-right': 4,
    'PopplerPageLayout.two-page-left': 5,
    'PopplerPageLayout.two-page-right': 6,
    'PopplerPageLayout.unset': 0,
    'PopplerPageMode.full-screen': 4,
    'PopplerPageMode.none': 1,
    'PopplerPageMode.unset': 0,
    'PopplerPageMode.use-attachments': 6,
    'PopplerPageMode.use-oc': 5,
    'PopplerPageMode.use-outlines': 2,
    'PopplerPageMode.use-thumbs': 3,
    'PopplerPageTransitionAlignment.horizontal': 0,
    'PopplerPageTransitionAlignment.vertical': 1,
    'PopplerPageTransitionDirection.inward': 0,
    'PopplerPageTransitionDirection.outward': 1,
    'PopplerPageTransitionType.blinds': 2,
    'PopplerPageTransitionType.box': 3,
    'PopplerPageTransitionType.cover': 9,
    'PopplerPageTransitionType.dissolve': 5,
    'PopplerPageTransitionType.fade': 11,
    'PopplerPageTransitionType.fly': 7,
    'PopplerPageTransitionType.glitter': 6,
    'PopplerPageTransitionType.push': 8,
    'PopplerPageTransitionType.replace': 0,
    'PopplerPageTransitionType.split': 1,
    'PopplerPageTransitionType.uncover': 10,
    'PopplerPageTransitionType.wipe': 4,
    'PopplerPrintDuplex.duplex-flip-long-edge': 3,
    'PopplerPrintDuplex.duplex-flip-short-edge': 2,
    'PopplerPrintDuplex.none': 0,
    'PopplerPrintDuplex.simplex': 1,
    'PopplerPrintScaling.app-default': 0,
    'PopplerPrintScaling.none': 1,
    'PopplerSelectionStyle.glyph': 0,
    'PopplerSelectionStyle.line': 2,
    'PopplerSelectionStyle.word': 1,
    'PopplerSignatureStatus.decoding-error': 3,
    'PopplerSignatureStatus.digest-mismatch': 2,
    'PopplerSignatureStatus.generic-error': 4,
    'PopplerSignatureStatus.invalid': 1,
    'PopplerSignatureStatus.not-found': 5,
    'PopplerSignatureStatus.not-verified': 6,
    'PopplerSignatureStatus.valid': 0,
    'PopplerStretch.condensed': 2,
    'PopplerStretch.expanded': 6,
    'PopplerStretch.extra-condensed': 1,
    'PopplerStretch.extra-expanded': 7,
    'PopplerStretch.normal': 4,
    'PopplerStretch.semi-condensed': 3,
    'PopplerStretch.semi-expanded': 5,
    'PopplerStretch.ultra-condensed': 0,
    'PopplerStretch.ultra-expanded': 8,
    'PopplerStructureBlockAlign.after': 2,
    'PopplerStructureBlockAlign.before': 0,
    'PopplerStructureBlockAlign.justify': 3,
    'PopplerStructureBlockAlign.middle': 1,
    'PopplerStructureBorderStyle.dashed': 3,
    'PopplerStructureBorderStyle.dotted': 2,
    'PopplerStructureBorderStyle.double': 5,
    'PopplerStructureBorderStyle.groove': 6,
    'PopplerStructureBorderStyle.hidden': 1,
    'PopplerStructureBorderStyle.inset': 7,
    'PopplerStructureBorderStyle.none': 0,
    'PopplerStructureBorderStyle.outset': 8,
    'PopplerStructureBorderStyle.solid': 4,
    'PopplerStructureElementKind.annot': 14,
    'PopplerStructureElementKind.article': 4,
    'PopplerStructureElementKind.bibentry': 11,
    'PopplerStructureElementKind.blockquote': 15,
    'PopplerStructureElementKind.caption': 16,
    'PopplerStructureElementKind.code': 12,
    'PopplerStructureElementKind.content': 0,
    'PopplerStructureElementKind.div': 6,
    'PopplerStructureElementKind.document': 2,
    'PopplerStructureElementKind.figure': 48,
    'PopplerStructureElementKind.form': 50,
    'PopplerStructureElementKind.formula': 49,
    'PopplerStructureElementKind.heading': 23,
    'PopplerStructureElementKind.heading-1': 24,
    'PopplerStructureElementKind.heading-2': 25,
    'PopplerStructureElementKind.heading-3': 26,
    'PopplerStructureElementKind.heading-4': 27,
    'PopplerStructureElementKind.heading-5': 28,
    'PopplerStructureElementKind.heading-6': 29,
    'PopplerStructureElementKind.index': 20,
    'PopplerStructureElementKind.link': 13,
    'PopplerStructureElementKind.list': 30,
    'PopplerStructureElementKind.list-body': 33,
    'PopplerStructureElementKind.list-item': 31,
    'PopplerStructureElementKind.list-label': 32,
    'PopplerStructureElementKind.nonstruct': 17,
    'PopplerStructureElementKind.note': 9,
    'PopplerStructureElementKind.object-reference': 1,
    'PopplerStructureElementKind.paragraph': 22,
    'PopplerStructureElementKind.part': 3,
    'PopplerStructureElementKind.private': 21,
    'PopplerStructureElementKind.quote': 8,
    'PopplerStructureElementKind.reference': 10,
    'PopplerStructureElementKind.ruby': 41,
    'PopplerStructureElementKind.ruby-annot-text': 43,
    'PopplerStructureElementKind.ruby-base-text': 42,
    'PopplerStructureElementKind.ruby-punctuation': 44,
    'PopplerStructureElementKind.section': 5,
    'PopplerStructureElementKind.span': 7,
    'PopplerStructureElementKind.table': 34,
    'PopplerStructureElementKind.table-body': 40,
    'PopplerStructureElementKind.table-data': 37,
    'PopplerStructureElementKind.table-footer': 39,
    'PopplerStructureElementKind.table-header': 38,
    'PopplerStructureElementKind.table-heading': 36,
    'PopplerStructureElementKind.table-row': 35,
    'PopplerStructureElementKind.toc': 18,
    'PopplerStructureElementKind.toc-item': 19,
    'PopplerStructureElementKind.warichu': 45,
    'PopplerStructureElementKind.warichu-punctuation': 47,
    'PopplerStructureElementKind.warichu-text': 46,
    'PopplerStructureFormRole.checkbox': 4,
    'PopplerStructureFormRole.push-button': 2,
    'PopplerStructureFormRole.radio-button': 1,
    'PopplerStructureFormRole.text-value': 3,
    'PopplerStructureFormRole.undefined': 0,
    'PopplerStructureFormState.neutral': 2,
    'PopplerStructureFormState.off': 1,
    'PopplerStructureFormState.on': 0,
    'PopplerStructureGlyphOrientation.0': 0,
    'PopplerStructureGlyphOrientation.180': 2,
    'PopplerStructureGlyphOrientation.270': 3,
    'PopplerStructureGlyphOrientation.90': 1,
    'PopplerStructureGlyphOrientation.auto': 0,
    'PopplerStructureInlineAlign.center': 1,
    'PopplerStructureInlineAlign.end': 2,
    'PopplerStructureInlineAlign.start': 0,
    'PopplerStructureListNumbering.circle': 2,
    'PopplerStructureListNumbering.decimal': 4,
    'PopplerStructureListNumbering.disc': 1,
    'PopplerStructureListNumbering.lower-alpha': 8,
    'PopplerStructureListNumbering.lower-roman': 6,
    'PopplerStructureListNumbering.none': 0,
    'PopplerStructureListNumbering.square': 3,
    'PopplerStructureListNumbering.upper-alpha': 7,
    'PopplerStructureListNumbering.upper-roman': 5,
    'PopplerStructurePlacement.before': 2,
    'PopplerStructurePlacement.block': 0,
    'PopplerStructurePlacement.end': 4,
    'PopplerStructurePlacement.inline': 1,
    'PopplerStructurePlacement.start': 3,
    'PopplerStructureRubyAlign.center': 1,
    'PopplerStructureRubyAlign.distribute': 4,
    'PopplerStructureRubyAlign.end': 2,
    'PopplerStructureRubyAlign.justify': 3,
    'PopplerStructureRubyAlign.start': 0,
    'PopplerStructureRubyPosition.after': 1,
    'PopplerStructureRubyPosition.before': 0,
    'PopplerStructureRubyPosition.inline': 3,
    'PopplerStructureRubyPosition.warichu': 2,
    'PopplerStructureTableScope.both': 2,
    'PopplerStructureTableScope.column': 1,
    'PopplerStructureTableScope.row': 0,
    'PopplerStructureTextAlign.center': 1,
    'PopplerStructureTextAlign.end': 2,
    'PopplerStructureTextAlign.justify': 3,
    'PopplerStructureTextAlign.start': 0,
    'PopplerStructureTextDecoration.linethrough': 3,
    'PopplerStructureTextDecoration.none': 0,
    'PopplerStructureTextDecoration.overline': 2,
    'PopplerStructureTextDecoration.underline': 1,
    'PopplerStructureWritingMode.lr-tb': 0,
    'PopplerStructureWritingMode.rl-tb': 1,
    'PopplerStructureWritingMode.tb-rl': 2,
    'PopplerStyle.italic': 2,
    'PopplerStyle.normal': 0,
    'PopplerStyle.oblique': 1,
    'PopplerWeight.bold': 700,
    'PopplerWeight.heavy': 900,
    'PopplerWeight.light': 300,
    'PopplerWeight.medium': 500,
    'PopplerWeight.normal': 400,
    'PopplerWeight.semibold': 600,
    'PopplerWeight.thin': 100,
    'PopplerWeight.ultrabold': 800,
    'PopplerWeight.ultralight': 200,
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
    'PopplerAnnotFlag.hidden': 2,
    'PopplerAnnotFlag.invisible': 1,
    'PopplerAnnotFlag.locked': 128,
    'PopplerAnnotFlag.locked-contents': 512,
    'PopplerAnnotFlag.no-rotate': 16,
    'PopplerAnnotFlag.no-view': 32,
    'PopplerAnnotFlag.no-zoom': 8,
    'PopplerAnnotFlag.print': 4,
    'PopplerAnnotFlag.read-only': 64,
    'PopplerAnnotFlag.toggle-no-view': 256,
    'PopplerAnnotFlag.unknown': 0,
    'PopplerFindFlags.backwards': 2,
    'PopplerFindFlags.case-sensitive': 1,
    'PopplerFindFlags.default': 0,
    'PopplerFindFlags.ignore-diacritics': 8,
    'PopplerFindFlags.multiline': 16,
    'PopplerFindFlags.whole-words-only': 4,
    'PopplerPermissions.full': 255,
    'PopplerPermissions.ok-to-add-notes': 8,
    'PopplerPermissions.ok-to-assemble': 64,
    'PopplerPermissions.ok-to-copy': 4,
    'PopplerPermissions.ok-to-extract-contents': 32,
    'PopplerPermissions.ok-to-fill-form': 16,
    'PopplerPermissions.ok-to-modify': 2,
    'PopplerPermissions.ok-to-print': 1,
    'PopplerPermissions.ok-to-print-high-resolution': 128,
    'PopplerPrintFlags.all': 1,
    'PopplerPrintFlags.document': 0,
    'PopplerPrintFlags.markup-annots': 1,
    'PopplerPrintFlags.stamp-annots-only': 2,
    'PopplerRenderAnnotsFlags.3d': 16777216,
    'PopplerRenderAnnotsFlags.all': 67108863,
    'PopplerRenderAnnotsFlags.caret': 8192,
    'PopplerRenderAnnotsFlags.circle': 32,
    'PopplerRenderAnnotsFlags.fileattachment': 65536,
    'PopplerRenderAnnotsFlags.freetext': 4,
    'PopplerRenderAnnotsFlags.highlight': 256,
    'PopplerRenderAnnotsFlags.ink': 16384,
    'PopplerRenderAnnotsFlags.line': 8,
    'PopplerRenderAnnotsFlags.link': 2,
    'PopplerRenderAnnotsFlags.movie': 262144,
    'PopplerRenderAnnotsFlags.none': 0,
    'PopplerRenderAnnotsFlags.polygon': 64,
    'PopplerRenderAnnotsFlags.polyline': 128,
    'PopplerRenderAnnotsFlags.popup': 32768,
    'PopplerRenderAnnotsFlags.print-all': -32800771,
    'PopplerRenderAnnotsFlags.print-document': 524288,
    'PopplerRenderAnnotsFlags.print-markup': -32800771,
    'PopplerRenderAnnotsFlags.print-stamp': 528384,
    'PopplerRenderAnnotsFlags.printermark': 2097152,
    'PopplerRenderAnnotsFlags.richmedia': 33554432,
    'PopplerRenderAnnotsFlags.screen': 1048576,
    'PopplerRenderAnnotsFlags.sound': 131072,
    'PopplerRenderAnnotsFlags.square': 16,
    'PopplerRenderAnnotsFlags.squiggly': 1024,
    'PopplerRenderAnnotsFlags.stamp': 4096,
    'PopplerRenderAnnotsFlags.strikeout': 2048,
    'PopplerRenderAnnotsFlags.text': 1,
    'PopplerRenderAnnotsFlags.trapnet': 4194304,
    'PopplerRenderAnnotsFlags.underline': 512,
    'PopplerRenderAnnotsFlags.watermark': 8388608,
    'PopplerRenderAnnotsFlags.widget': 524288,
    'PopplerSignatureValidationFlags.use-aia-certificate-fetch': 4,
    'PopplerSignatureValidationFlags.validate-certificate': 1,
    'PopplerSignatureValidationFlags.without-ocsp-revocation-check': 2,
    'PopplerStructureGetTextFlags.none': 0,
    'PopplerStructureGetTextFlags.recursive': 1,
    'PopplerViewerPreferences.center-window': 16,
    'PopplerViewerPreferences.direction-rtl': 64,
    'PopplerViewerPreferences.display-doc-title': 32,
    'PopplerViewerPreferences.fit-window': 8,
    'PopplerViewerPreferences.hide-menubar': 2,
    'PopplerViewerPreferences.hide-toolbar': 1,
    'PopplerViewerPreferences.hide-windowui': 4,
    'PopplerViewerPreferences.unset': 0,
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
    'PopplerDocument.author': 'gchararray',
    'PopplerDocument.creation-date': 'gint',
    'PopplerDocument.creator': 'gchararray',
    'PopplerDocument.keywords': 'gchararray',
    'PopplerDocument.mod-date': 'gint',
    'PopplerDocument.producer': 'gchararray',
    'PopplerDocument.subject': 'gchararray',
    'PopplerDocument.title': 'gchararray',
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
    'PopplerAnnotInk': '25.06.0',
    'PopplerDocument.creation-datetime': '20.09.0',
    'PopplerDocument.mod-datetime': '20.09.0',
};
