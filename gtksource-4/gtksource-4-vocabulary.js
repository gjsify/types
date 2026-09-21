// The widget vocabulary of GtkSource-4 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-4 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkSource',
    version: '4',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['GtkSource'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary', '@girs/pango-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GtkSourceBuffer: ['highlight-matching-brackets', 'highlight-syntax', 'implicit-trailing-newline', 'language', 'max-undo-levels', 'style-scheme', 'undo-manager'],
    GtkSourceCompletion: ['accelerators', 'auto-complete-delay', 'proposal-page-size', 'provider-page-size', 'remember-info-visibility', 'select-on-show', 'show-headers', 'show-icons', 'view'],
    GtkSourceCompletionContext: ['activation', 'completion', 'iter'],
    GtkSourceCompletionItem: ['gicon', 'icon', 'icon-name', 'info', 'label', 'markup', 'text'],
    GtkSourceCompletionWords: ['activation', 'icon', 'interactive-delay', 'minimum-word-size', 'name', 'priority', 'proposals-batch-size', 'scan-batch-size'],
    GtkSourceFile: ['location'],
    GtkSourceFileLoader: ['buffer', 'file', 'input-stream', 'location'],
    GtkSourceFileSaver: ['buffer', 'compression-type', 'encoding', 'file', 'flags', 'location', 'newline-type'],
    GtkSourceGutter: ['view', 'window-type'],
    GtkSourceGutterRenderer: ['alignment-mode', 'background-rgba', 'background-set', 'size', 'visible', 'xalign', 'xpad', 'yalign', 'ypad'],
    GtkSourceGutterRendererPixbuf: ['gicon', 'icon-name', 'pixbuf'],
    GtkSourceGutterRendererText: ['markup', 'text'],
    GtkSourceLanguageManager: ['search-path'],
    GtkSourceMap: ['font-desc', 'view'],
    GtkSourceMark: ['category'],
    GtkSourceMarkAttributes: ['background', 'gicon', 'icon-name', 'pixbuf'],
    GtkSourcePrintCompositor: ['body-font-name', 'buffer', 'footer-font-name', 'header-font-name', 'highlight-syntax', 'line-numbers-font-name', 'print-footer', 'print-header', 'print-line-numbers', 'tab-width', 'wrap-mode'],
    GtkSourceRegion: ['buffer'],
    GtkSourceSearchContext: ['buffer', 'highlight', 'match-style', 'settings'],
    GtkSourceSearchSettings: ['at-word-boundaries', 'case-sensitive', 'regex-enabled', 'search-text', 'wrap-around'],
    GtkSourceSpaceDrawer: ['enable-matrix', 'matrix'],
    GtkSourceStyle: ['background', 'background-set', 'bold', 'bold-set', 'foreground', 'foreground-set', 'italic', 'italic-set', 'line-background', 'line-background-set', 'pango-underline', 'scale', 'scale-set', 'strikethrough', 'strikethrough-set', 'underline-color', 'underline-color-set', 'underline-set'],
    GtkSourceStyleScheme: ['id'],
    GtkSourceStyleSchemeChooser: ['style-scheme'],
    GtkSourceStyleSchemeManager: ['search-path'],
    GtkSourceTag: ['draw-spaces', 'draw-spaces-set'],
    GtkSourceView: ['auto-indent', 'background-pattern', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceBuffer: ['bracket-matched', 'highlight-updated', 'redo', 'source-mark-updated', 'undo'],
    GtkSourceCompletion: ['activate-proposal', 'hide', 'move-cursor', 'move-page', 'populate-context', 'show'],
    GtkSourceCompletionContext: ['cancelled'],
    GtkSourceCompletionProposal: ['changed'],
    GtkSourceGutterRenderer: ['activate', 'query-activatable', 'query-data', 'query-tooltip', 'queue-draw'],
    GtkSourceMarkAttributes: ['query-tooltip-markup', 'query-tooltip-text'],
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GtkSourceBuffer: ['GtkSourceBuffer', 'GtkTextBuffer', 'GObject'],
    GtkSourceCompletion: ['GtkSourceCompletion', 'GObject', 'GtkBuildable'],
    GtkSourceCompletionContext: ['GtkSourceCompletionContext', 'GInitiallyUnowned', 'GObject'],
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GtkSourceCompletionItem: ['GtkSourceCompletionItem', 'GObject', 'GtkSourceCompletionProposal'],
    GtkSourceCompletionWords: ['GtkSourceCompletionWords', 'GObject', 'GtkSourceCompletionProvider'],
    GtkSourceFile: ['GtkSourceFile', 'GObject'],
    GtkSourceFileLoader: ['GtkSourceFileLoader', 'GObject'],
    GtkSourceFileSaver: ['GtkSourceFileSaver', 'GObject'],
    GtkSourceGutter: ['GtkSourceGutter', 'GObject'],
    GtkSourceGutterRendererPixbuf: ['GtkSourceGutterRendererPixbuf', 'GtkSourceGutterRenderer', 'GInitiallyUnowned', 'GObject'],
    GtkSourceGutterRendererText: ['GtkSourceGutterRendererText', 'GtkSourceGutterRenderer', 'GInitiallyUnowned', 'GObject'],
    GtkSourceLanguage: ['GtkSourceLanguage', 'GObject'],
    GtkSourceLanguageManager: ['GtkSourceLanguageManager', 'GObject'],
    GtkSourceMap: ['GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    GtkSourceMark: ['GtkSourceMark', 'GtkTextMark', 'GObject'],
    GtkSourceMarkAttributes: ['GtkSourceMarkAttributes', 'GObject'],
    GtkSourcePrintCompositor: ['GtkSourcePrintCompositor', 'GObject'],
    GtkSourceRegion: ['GtkSourceRegion', 'GObject'],
    GtkSourceSearchContext: ['GtkSourceSearchContext', 'GObject'],
    GtkSourceSearchSettings: ['GtkSourceSearchSettings', 'GObject'],
    GtkSourceSpaceDrawer: ['GtkSourceSpaceDrawer', 'GObject'],
    GtkSourceStyle: ['GtkSourceStyle', 'GObject'],
    GtkSourceStyleScheme: ['GtkSourceStyleScheme', 'GObject'],
    GtkSourceStyleSchemeChooserButton: ['GtkSourceStyleSchemeChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeChooserWidget: ['GtkSourceStyleSchemeChooserWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeManager: ['GtkSourceStyleSchemeManager', 'GObject'],
    GtkSourceTag: ['GtkSourceTag', 'GtkTextTag', 'GObject'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkSourceBackgroundPatternType: ['none', 'grid'],
    GtkSourceBracketMatchType: ['none', 'out-of-range', 'not-found', 'found'],
    GtkSourceChangeCaseType: ['lower', 'upper', 'toggle', 'title'],
    GtkSourceCompressionType: ['none', 'gzip'],
    GtkSourceGutterRendererAlignmentMode: ['cell', 'first', 'last'],
    GtkSourceNewlineType: ['lf', 'cr', 'cr-lf'],
    GtkSourceSmartHomeEndType: ['disabled', 'before', 'after', 'always'],
    GtkSourceViewGutterPosition: ['lines', 'marks'],
    GtkTextWindowType: ['private', 'widget', 'text', 'left', 'right', 'top', 'bottom'],
    GtkWrapMode: ['none', 'char', 'word', 'word-char'],
    PangoUnderline: ['none', 'single', 'double', 'low', 'error', 'single-line', 'double-line', 'error-line'],
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
    'GtkSourceBackgroundPatternType.grid': 1,
    'GtkSourceBackgroundPatternType.none': 0,
    'GtkSourceBracketMatchType.found': 3,
    'GtkSourceBracketMatchType.none': 0,
    'GtkSourceBracketMatchType.not-found': 2,
    'GtkSourceBracketMatchType.out-of-range': 1,
    'GtkSourceChangeCaseType.lower': 0,
    'GtkSourceChangeCaseType.title': 3,
    'GtkSourceChangeCaseType.toggle': 2,
    'GtkSourceChangeCaseType.upper': 1,
    'GtkSourceCompressionType.gzip': 1,
    'GtkSourceCompressionType.none': 0,
    'GtkSourceGutterRendererAlignmentMode.cell': 0,
    'GtkSourceGutterRendererAlignmentMode.first': 1,
    'GtkSourceGutterRendererAlignmentMode.last': 2,
    'GtkSourceNewlineType.cr': 1,
    'GtkSourceNewlineType.cr-lf': 2,
    'GtkSourceNewlineType.lf': 0,
    'GtkSourceSmartHomeEndType.after': 2,
    'GtkSourceSmartHomeEndType.always': 3,
    'GtkSourceSmartHomeEndType.before': 1,
    'GtkSourceSmartHomeEndType.disabled': 0,
    'GtkSourceViewGutterPosition.lines': -30,
    'GtkSourceViewGutterPosition.marks': -20,
    'GtkTextWindowType.bottom': 6,
    'GtkTextWindowType.left': 3,
    'GtkTextWindowType.private': 0,
    'GtkTextWindowType.right': 4,
    'GtkTextWindowType.text': 2,
    'GtkTextWindowType.top': 5,
    'GtkTextWindowType.widget': 1,
    'GtkWrapMode.char': 1,
    'GtkWrapMode.none': 0,
    'GtkWrapMode.word': 2,
    'GtkWrapMode.word-char': 3,
    'PangoUnderline.double': 2,
    'PangoUnderline.double-line': 6,
    'PangoUnderline.error': 4,
    'PangoUnderline.error-line': 7,
    'PangoUnderline.low': 3,
    'PangoUnderline.none': 0,
    'PangoUnderline.single': 1,
    'PangoUnderline.single-line': 5,
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
    'GtkSourceCompletionActivation.interactive': 1,
    'GtkSourceCompletionActivation.none': 0,
    'GtkSourceCompletionActivation.user-requested': 2,
    'GtkSourceFileSaverFlags.create-backup': 4,
    'GtkSourceFileSaverFlags.ignore-invalid-chars': 1,
    'GtkSourceFileSaverFlags.ignore-modification-time': 2,
    'GtkSourceFileSaverFlags.none': 0,
    'GtkSourceGutterRendererState.cursor': 1,
    'GtkSourceGutterRendererState.normal': 0,
    'GtkSourceGutterRendererState.prelit': 2,
    'GtkSourceGutterRendererState.selected': 4,
    'GtkSourceSortFlags.case-sensitive': 1,
    'GtkSourceSortFlags.none': 0,
    'GtkSourceSortFlags.remove-duplicates': 4,
    'GtkSourceSortFlags.reverse-order': 2,
    'GtkSourceSpaceLocationFlags.all': 7,
    'GtkSourceSpaceLocationFlags.inside-text': 2,
    'GtkSourceSpaceLocationFlags.leading': 1,
    'GtkSourceSpaceLocationFlags.none': 0,
    'GtkSourceSpaceLocationFlags.trailing': 4,
    'GtkSourceSpaceTypeFlags.all': 15,
    'GtkSourceSpaceTypeFlags.nbsp': 8,
    'GtkSourceSpaceTypeFlags.newline': 4,
    'GtkSourceSpaceTypeFlags.none': 0,
    'GtkSourceSpaceTypeFlags.space': 1,
    'GtkSourceSpaceTypeFlags.tab': 2,
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
    'GtkSourceCompletionContext.activation': 'GtkSourceCompletionActivation',
    'GtkSourceCompletionWords.activation': 'GtkSourceCompletionActivation',
    'GtkSourceFileSaver.compression-type': 'GtkSourceCompressionType',
    'GtkSourceFileSaver.flags': 'GtkSourceFileSaverFlags',
    'GtkSourceFileSaver.newline-type': 'GtkSourceNewlineType',
    'GtkSourceGutter.window-type': 'GtkTextWindowType',
    'GtkSourceGutterRenderer.alignment-mode': 'GtkSourceGutterRendererAlignmentMode',
    'GtkSourcePrintCompositor.wrap-mode': 'GtkWrapMode',
    'GtkSourceStyle.pango-underline': 'PangoUnderline',
    'GtkSourceView.background-pattern': 'GtkSourceBackgroundPatternType',
    'GtkSourceView.smart-home-end': 'GtkSourceSmartHomeEndType',
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
    'GtkSourceBuffer.highlight-matching-brackets': 'gboolean',
    'GtkSourceBuffer.highlight-syntax': 'gboolean',
    'GtkSourceBuffer.implicit-trailing-newline': 'gboolean',
    'GtkSourceBuffer.language': 'GtkSourceLanguage',
    'GtkSourceBuffer.max-undo-levels': 'gint',
    'GtkSourceBuffer.style-scheme': 'GtkSourceStyleScheme',
    'GtkSourceBuffer.undo-manager': 'GtkSourceUndoManager',
    'GtkSourceCompletion.accelerators': 'guint',
    'GtkSourceCompletion.auto-complete-delay': 'guint',
    'GtkSourceCompletion.proposal-page-size': 'guint',
    'GtkSourceCompletion.provider-page-size': 'guint',
    'GtkSourceCompletion.remember-info-visibility': 'gboolean',
    'GtkSourceCompletion.select-on-show': 'gboolean',
    'GtkSourceCompletion.show-headers': 'gboolean',
    'GtkSourceCompletion.show-icons': 'gboolean',
    'GtkSourceCompletion.view': 'GtkSourceView',
    'GtkSourceCompletionContext.activation': 'GtkSourceCompletionActivation',
    'GtkSourceCompletionContext.completion': 'GtkSourceCompletion',
    'GtkSourceCompletionItem.gicon': 'GIcon',
    'GtkSourceCompletionItem.icon': 'GdkPixbuf',
    'GtkSourceCompletionItem.icon-name': 'gchararray',
    'GtkSourceCompletionItem.info': 'gchararray',
    'GtkSourceCompletionItem.label': 'gchararray',
    'GtkSourceCompletionItem.markup': 'gchararray',
    'GtkSourceCompletionItem.text': 'gchararray',
    'GtkSourceCompletionWords.activation': 'GtkSourceCompletionActivation',
    'GtkSourceCompletionWords.icon': 'GdkPixbuf',
    'GtkSourceCompletionWords.interactive-delay': 'gint',
    'GtkSourceCompletionWords.minimum-word-size': 'guint',
    'GtkSourceCompletionWords.name': 'gchararray',
    'GtkSourceCompletionWords.priority': 'gint',
    'GtkSourceCompletionWords.proposals-batch-size': 'guint',
    'GtkSourceCompletionWords.scan-batch-size': 'guint',
    'GtkSourceFile.location': 'GFile',
    'GtkSourceFileLoader.buffer': 'GtkSourceBuffer',
    'GtkSourceFileLoader.file': 'GtkSourceFile',
    'GtkSourceFileLoader.input-stream': 'GInputStream',
    'GtkSourceFileLoader.location': 'GFile',
    'GtkSourceFileSaver.buffer': 'GtkSourceBuffer',
    'GtkSourceFileSaver.compression-type': 'GtkSourceCompressionType',
    'GtkSourceFileSaver.file': 'GtkSourceFile',
    'GtkSourceFileSaver.flags': 'GtkSourceFileSaverFlags',
    'GtkSourceFileSaver.location': 'GFile',
    'GtkSourceFileSaver.newline-type': 'GtkSourceNewlineType',
    'GtkSourceGutter.view': 'GtkSourceView',
    'GtkSourceGutter.window-type': 'GtkTextWindowType',
    'GtkSourceGutterRenderer.alignment-mode': 'GtkSourceGutterRendererAlignmentMode',
    'GtkSourceGutterRenderer.background-set': 'gboolean',
    'GtkSourceGutterRenderer.size': 'gint',
    'GtkSourceGutterRenderer.visible': 'gboolean',
    'GtkSourceGutterRenderer.xalign': 'gfloat',
    'GtkSourceGutterRenderer.xpad': 'gint',
    'GtkSourceGutterRenderer.yalign': 'gfloat',
    'GtkSourceGutterRenderer.ypad': 'gint',
    'GtkSourceGutterRendererPixbuf.gicon': 'GIcon',
    'GtkSourceGutterRendererPixbuf.icon-name': 'gchararray',
    'GtkSourceGutterRendererPixbuf.pixbuf': 'GdkPixbuf',
    'GtkSourceGutterRendererText.markup': 'gchararray',
    'GtkSourceGutterRendererText.text': 'gchararray',
    'GtkSourceMap.view': 'GtkSourceView',
    'GtkSourceMark.category': 'gchararray',
    'GtkSourceMarkAttributes.gicon': 'GIcon',
    'GtkSourceMarkAttributes.icon-name': 'gchararray',
    'GtkSourceMarkAttributes.pixbuf': 'GdkPixbuf',
    'GtkSourcePrintCompositor.body-font-name': 'gchararray',
    'GtkSourcePrintCompositor.buffer': 'GtkSourceBuffer',
    'GtkSourcePrintCompositor.footer-font-name': 'gchararray',
    'GtkSourcePrintCompositor.header-font-name': 'gchararray',
    'GtkSourcePrintCompositor.highlight-syntax': 'gboolean',
    'GtkSourcePrintCompositor.line-numbers-font-name': 'gchararray',
    'GtkSourcePrintCompositor.print-footer': 'gboolean',
    'GtkSourcePrintCompositor.print-header': 'gboolean',
    'GtkSourcePrintCompositor.print-line-numbers': 'guint',
    'GtkSourcePrintCompositor.tab-width': 'guint',
    'GtkSourcePrintCompositor.wrap-mode': 'GtkWrapMode',
    'GtkSourceRegion.buffer': 'GtkTextBuffer',
    'GtkSourceSearchContext.buffer': 'GtkSourceBuffer',
    'GtkSourceSearchContext.highlight': 'gboolean',
    'GtkSourceSearchContext.match-style': 'GtkSourceStyle',
    'GtkSourceSearchContext.settings': 'GtkSourceSearchSettings',
    'GtkSourceSearchSettings.at-word-boundaries': 'gboolean',
    'GtkSourceSearchSettings.case-sensitive': 'gboolean',
    'GtkSourceSearchSettings.regex-enabled': 'gboolean',
    'GtkSourceSearchSettings.search-text': 'gchararray',
    'GtkSourceSearchSettings.wrap-around': 'gboolean',
    'GtkSourceSpaceDrawer.enable-matrix': 'gboolean',
    'GtkSourceStyle.background': 'gchararray',
    'GtkSourceStyle.background-set': 'gboolean',
    'GtkSourceStyle.bold': 'gboolean',
    'GtkSourceStyle.bold-set': 'gboolean',
    'GtkSourceStyle.foreground': 'gchararray',
    'GtkSourceStyle.foreground-set': 'gboolean',
    'GtkSourceStyle.italic': 'gboolean',
    'GtkSourceStyle.italic-set': 'gboolean',
    'GtkSourceStyle.line-background': 'gchararray',
    'GtkSourceStyle.line-background-set': 'gboolean',
    'GtkSourceStyle.pango-underline': 'PangoUnderline',
    'GtkSourceStyle.scale': 'gchararray',
    'GtkSourceStyle.scale-set': 'gboolean',
    'GtkSourceStyle.strikethrough': 'gboolean',
    'GtkSourceStyle.strikethrough-set': 'gboolean',
    'GtkSourceStyle.underline-color': 'gchararray',
    'GtkSourceStyle.underline-color-set': 'gboolean',
    'GtkSourceStyle.underline-set': 'gboolean',
    'GtkSourceStyleScheme.id': 'gchararray',
    'GtkSourceStyleSchemeChooser.style-scheme': 'GtkSourceStyleScheme',
    'GtkSourceTag.draw-spaces': 'gboolean',
    'GtkSourceTag.draw-spaces-set': 'gboolean',
    'GtkSourceView.auto-indent': 'gboolean',
    'GtkSourceView.background-pattern': 'GtkSourceBackgroundPatternType',
    'GtkSourceView.highlight-current-line': 'gboolean',
    'GtkSourceView.indent-on-tab': 'gboolean',
    'GtkSourceView.indent-width': 'gint',
    'GtkSourceView.insert-spaces-instead-of-tabs': 'gboolean',
    'GtkSourceView.right-margin-position': 'guint',
    'GtkSourceView.show-line-marks': 'gboolean',
    'GtkSourceView.show-line-numbers': 'gboolean',
    'GtkSourceView.show-right-margin': 'gboolean',
    'GtkSourceView.smart-backspace': 'gboolean',
    'GtkSourceView.smart-home-end': 'GtkSourceSmartHomeEndType',
    'GtkSourceView.tab-width': 'guint',
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

export const SLOT_CANDIDATES = {
    GtkSourceMap: {
        'view': 'set_view',
    },
};

export const SINCE = {
    'GtkSourceBuffer.implicit-trailing-newline': '3.14',
    'GtkSourceBuffer::bracket-matched': '2.12',
    'GtkSourceCompletionItem.gicon': '3.18',
    'GtkSourceCompletionItem.icon-name': '3.18',
    'GtkSourceCompletionWords.activation': '3.10',
    'GtkSourceFile.location': '3.14',
    'GtkSourceFileLoader.buffer': '3.14',
    'GtkSourceFileLoader.file': '3.14',
    'GtkSourceFileLoader.input-stream': '3.14',
    'GtkSourceFileLoader.location': '3.14',
    'GtkSourceFileSaver.buffer': '3.14',
    'GtkSourceFileSaver.compression-type': '3.14',
    'GtkSourceFileSaver.encoding': '3.14',
    'GtkSourceFileSaver.file': '3.14',
    'GtkSourceFileSaver.flags': '3.14',
    'GtkSourceFileSaver.location': '3.14',
    'GtkSourceFileSaver.newline-type': '3.14',
    'GtkSourcePrintCompositor.body-font-name': '2.2',
    'GtkSourcePrintCompositor.buffer': '2.2',
    'GtkSourcePrintCompositor.footer-font-name': '2.2',
    'GtkSourcePrintCompositor.header-font-name': '2.2',
    'GtkSourcePrintCompositor.highlight-syntax': '2.2',
    'GtkSourcePrintCompositor.line-numbers-font-name': '2.2',
    'GtkSourcePrintCompositor.print-footer': '2.2',
    'GtkSourcePrintCompositor.print-header': '2.2',
    'GtkSourcePrintCompositor.print-line-numbers': '2.2',
    'GtkSourcePrintCompositor.tab-width': '2.2',
    'GtkSourcePrintCompositor.wrap-mode': '2.2',
    'GtkSourceRegion.buffer': '3.22',
    'GtkSourceSearchContext.buffer': '3.10',
    'GtkSourceSearchContext.highlight': '3.10',
    'GtkSourceSearchContext.match-style': '3.16',
    'GtkSourceSearchContext.settings': '3.10',
    'GtkSourceSearchSettings.at-word-boundaries': '3.10',
    'GtkSourceSearchSettings.case-sensitive': '3.10',
    'GtkSourceSearchSettings.regex-enabled': '3.10',
    'GtkSourceSearchSettings.search-text': '3.10',
    'GtkSourceSearchSettings.wrap-around': '3.10',
    'GtkSourceSpaceDrawer.enable-matrix': '3.24',
    'GtkSourceSpaceDrawer.matrix': '3.24',
    'GtkSourceStyleSchemeChooser.style-scheme': '3.16',
    'GtkSourceTag.draw-spaces': '3.20',
    'GtkSourceTag.draw-spaces-set': '3.20',
    'GtkSourceView.background-pattern': '3.16',
    'GtkSourceView.smart-backspace': '3.18',
    'GtkSourceView.smart-home-end': '2.0',
    'GtkSourceView::change-case': '3.16',
    'GtkSourceView::change-number': '3.16',
    'GtkSourceView::join-lines': '3.16',
    'GtkSourceView::move-to-matching-bracket': '3.16',
    'GtkSourceView::move-words': '3.0',
    'GtkSourceView::smart-home-end': '3.0',
};
