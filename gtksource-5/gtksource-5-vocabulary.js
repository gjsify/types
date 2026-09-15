// The widget vocabulary of GtkSource-5 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-5 — library 5.21.0 — dropped empty base(s): GObject.Object GObject.InitiallyUnowned Gio.ListModel
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkSource',
    version: '5',
    libraryVersion: '5.21.0',
    childHolders: 0,
    droppedBases: ['GObject.Object', 'GObject.InitiallyUnowned', 'Gio.ListModel'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    GtkSourceBuffer: ['highlight-matching-brackets', 'highlight-syntax', 'implicit-trailing-newline', 'language', 'style-scheme'],
    GtkSourceCompletion: ['page-size', 'remember-info-visibility', 'select-on-show', 'show-icons', 'view'],
    GtkSourceCompletionCell: ['column', 'markup', 'paintable', 'text', 'widget'],
    GtkSourceCompletionContext: ['completion'],
    GtkSourceCompletionSnippets: ['priority', 'title'],
    GtkSourceCompletionWords: ['minimum-word-size', 'priority', 'proposals-batch-size', 'scan-batch-size', 'title'],
    GtkSourceFile: ['location'],
    GtkSourceFileLoader: ['buffer', 'file', 'input-stream', 'location', 'max-size'],
    GtkSourceFileSaver: ['buffer', 'compression-type', 'encoding', 'file', 'flags', 'location', 'newline-type'],
    GtkSourceGutter: ['view', 'window-type'],
    GtkSourceGutterRenderer: ['alignment-mode', 'xalign', 'xpad', 'yalign', 'ypad'],
    GtkSourceGutterRendererPixbuf: ['gicon', 'icon-name', 'paintable', 'pixbuf'],
    GtkSourceGutterRendererText: ['markup', 'text'],
    GtkSourceHover: ['hover-delay'],
    GtkSourceLanguageManager: ['search-path'],
    GtkSourceMap: ['font-desc', 'view'],
    GtkSourceMark: ['category'],
    GtkSourceMarkAttributes: ['background', 'gicon', 'icon-name', 'pixbuf'],
    GtkSourcePrintCompositor: ['body-font-name', 'buffer', 'footer-font-name', 'header-font-name', 'highlight-syntax', 'line-numbers-font-name', 'print-footer', 'print-header', 'print-line-numbers', 'tab-width', 'wrap-mode'],
    GtkSourceRegion: ['buffer'],
    GtkSourceSearchContext: ['buffer', 'highlight', 'match-style', 'settings'],
    GtkSourceSearchSettings: ['at-word-boundaries', 'case-sensitive', 'regex-enabled', 'search-text', 'visible-only', 'wrap-around'],
    GtkSourceSnippet: ['description', 'language-id', 'name', 'trigger'],
    GtkSourceSnippetChunk: ['context', 'focus-position', 'spec', 'text', 'text-set', 'tooltip-text'],
    GtkSourceSnippetManager: ['search-path'],
    GtkSourceSpaceDrawer: ['enable-matrix', 'matrix'],
    GtkSourceStyle: ['background', 'background-set', 'bold', 'bold-set', 'foreground', 'foreground-set', 'italic', 'italic-set', 'line-background', 'line-background-set', 'pango-underline', 'scale', 'scale-set', 'strikethrough', 'strikethrough-set', 'underline-color', 'underline-color-set', 'underline-set', 'weight', 'weight-set'],
    GtkSourceStyleScheme: ['id'],
    GtkSourceStyleSchemeChooser: ['style-scheme'],
    GtkSourceStyleSchemeManager: ['search-path'],
    GtkSourceStyleSchemePreview: ['scheme', 'selected'],
    GtkSourceTag: ['draw-spaces', 'draw-spaces-set'],
    GtkSourceView: ['auto-indent', 'background-pattern', 'enable-snippets', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'indenter', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceAnnotationProvider: ['changed'],
    GtkSourceAnnotations: ['changed'],
    GtkSourceBuffer: ['bracket-matched', 'cursor-moved', 'highlight-updated', 'source-mark-updated'],
    GtkSourceCompletion: ['hide', 'provider-added', 'provider-removed', 'show'],
    GtkSourceCompletionContext: ['provider-model-changed'],
    GtkSourceGutterRenderer: ['activate', 'query-activatable', 'query-data'],
    GtkSourceMarkAttributes: ['query-tooltip-markup', 'query-tooltip-text'],
    GtkSourceSnippetContext: ['changed'],
    GtkSourceStyleSchemePreview: ['activate'],
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'push-snippet', 'show-completion', 'smart-home-end'],
    GtkSourceVimIMContext: ['edit', 'execute-command', 'format-text', 'write'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GtkSourceAnnotation: ['GtkSourceAnnotation'],
    GtkSourceAnnotationProvider: ['GtkSourceAnnotationProvider'],
    GtkSourceAnnotations: ['GtkSourceAnnotations'],
    GtkSourceBuffer: ['GtkSourceBuffer', 'GtkTextBuffer'],
    GtkSourceCompletion: ['GtkSourceCompletion'],
    GtkSourceCompletionCell: ['GtkSourceCompletionCell', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceCompletionContext: ['GtkSourceCompletionContext'],
    GtkSourceCompletionSnippets: ['GtkSourceCompletionSnippets', 'GtkSourceCompletionProvider'],
    GtkSourceCompletionWords: ['GtkSourceCompletionWords', 'GtkSourceCompletionProvider'],
    GtkSourceFile: ['GtkSourceFile'],
    GtkSourceFileLoader: ['GtkSourceFileLoader'],
    GtkSourceFileSaver: ['GtkSourceFileSaver'],
    GtkSourceGutter: ['GtkSourceGutter', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceGutterLines: ['GtkSourceGutterLines'],
    GtkSourceGutterRendererPixbuf: ['GtkSourceGutterRendererPixbuf', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceGutterRendererText: ['GtkSourceGutterRendererText', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceHover: ['GtkSourceHover'],
    GtkSourceHoverContext: ['GtkSourceHoverContext'],
    GtkSourceHoverDisplay: ['GtkSourceHoverDisplay', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceLanguage: ['GtkSourceLanguage'],
    GtkSourceLanguageManager: ['GtkSourceLanguageManager'],
    GtkSourceMap: ['GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    GtkSourceMark: ['GtkSourceMark', 'GtkTextMark'],
    GtkSourceMarkAttributes: ['GtkSourceMarkAttributes'],
    GtkSourcePrintCompositor: ['GtkSourcePrintCompositor'],
    GtkSourceRegion: ['GtkSourceRegion'],
    GtkSourceSearchContext: ['GtkSourceSearchContext'],
    GtkSourceSearchSettings: ['GtkSourceSearchSettings'],
    GtkSourceSnippet: ['GtkSourceSnippet'],
    GtkSourceSnippetChunk: ['GtkSourceSnippetChunk'],
    GtkSourceSnippetContext: ['GtkSourceSnippetContext'],
    GtkSourceSnippetManager: ['GtkSourceSnippetManager'],
    GtkSourceSpaceDrawer: ['GtkSourceSpaceDrawer'],
    GtkSourceStyle: ['GtkSourceStyle'],
    GtkSourceStyleScheme: ['GtkSourceStyleScheme'],
    GtkSourceStyleSchemeChooserButton: ['GtkSourceStyleSchemeChooserButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeChooserWidget: ['GtkSourceStyleSchemeChooserWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeManager: ['GtkSourceStyleSchemeManager'],
    GtkSourceStyleSchemePreview: ['GtkSourceStyleSchemePreview', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceTag: ['GtkSourceTag', 'GtkTextTag'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    GtkSourceVimIMContext: ['GtkSourceVimIMContext', 'GtkIMContext'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkSourceAnnotationStyle: ['none', 'warning', 'error', 'accent'],
    GtkSourceBackgroundPatternType: ['none', 'grid'],
    GtkSourceBracketMatchType: ['none', 'out-of-range', 'not-found', 'found'],
    GtkSourceChangeCaseType: ['lower', 'upper', 'toggle', 'title'],
    GtkSourceCompletionActivation: ['none', 'interactive', 'user-requested'],
    GtkSourceCompletionColumn: ['icon', 'before', 'typed-text', 'after', 'comment', 'details'],
    GtkSourceCompressionType: ['none', 'gzip'],
    GtkSourceGutterRendererAlignmentMode: ['cell', 'first', 'last'],
    GtkSourceNewlineType: ['lf', 'cr', 'cr-lf'],
    GtkSourceSmartHomeEndType: ['disabled', 'before', 'after', 'always'],
    GtkSourceViewGutterPosition: ['lines', 'marks'],
    PangoUnderline: ['none', 'single', 'double', 'low', 'error', 'single-line', 'double-line', 'error-line'],
    PangoWeight: ['thin', 'ultralight', 'light', 'semilight', 'book', 'normal', 'medium', 'semibold', 'bold', 'ultrabold', 'heavy', 'ultraheavy'],
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
    'GtkSourceAnnotationStyle.accent': 3,
    'GtkSourceAnnotationStyle.error': 2,
    'GtkSourceAnnotationStyle.none': 0,
    'GtkSourceAnnotationStyle.warning': 1,
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
    'GtkSourceCompletionActivation.interactive': 1,
    'GtkSourceCompletionActivation.none': 0,
    'GtkSourceCompletionActivation.user-requested': 2,
    'GtkSourceCompletionColumn.after': 3,
    'GtkSourceCompletionColumn.before': 1,
    'GtkSourceCompletionColumn.comment': 4,
    'GtkSourceCompletionColumn.details': 5,
    'GtkSourceCompletionColumn.icon': 0,
    'GtkSourceCompletionColumn.typed-text': 2,
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
    'PangoUnderline.double': 2,
    'PangoUnderline.double-line': 6,
    'PangoUnderline.error': 4,
    'PangoUnderline.error-line': 7,
    'PangoUnderline.low': 3,
    'PangoUnderline.none': 0,
    'PangoUnderline.single': 1,
    'PangoUnderline.single-line': 5,
    'PangoWeight.bold': 700,
    'PangoWeight.book': 380,
    'PangoWeight.heavy': 900,
    'PangoWeight.light': 300,
    'PangoWeight.medium': 500,
    'PangoWeight.normal': 400,
    'PangoWeight.semibold': 600,
    'PangoWeight.semilight': 350,
    'PangoWeight.thin': 100,
    'PangoWeight.ultrabold': 800,
    'PangoWeight.ultraheavy': 1000,
    'PangoWeight.ultralight': 200,
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
    'GtkSourceFileSaverFlags.create-backup': 4,
    'GtkSourceFileSaverFlags.ignore-invalid-chars': 1,
    'GtkSourceFileSaverFlags.ignore-modification-time': 2,
    'GtkSourceFileSaverFlags.none': 0,
    'GtkSourceSortFlags.case-sensitive': 1,
    'GtkSourceSortFlags.filename': 8,
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
    'GtkSourceCompletionCell.column': 'GtkSourceCompletionColumn',
    'GtkSourceFileSaver.compression-type': 'GtkSourceCompressionType',
    'GtkSourceFileSaver.flags': 'GtkSourceFileSaverFlags',
    'GtkSourceFileSaver.newline-type': 'GtkSourceNewlineType',
    'GtkSourceGutter.window-type': 'GtkTextWindowType',
    'GtkSourceGutterRenderer.alignment-mode': 'GtkSourceGutterRendererAlignmentMode',
    'GtkSourcePrintCompositor.wrap-mode': 'GtkWrapMode',
    'GtkSourceStyle.pango-underline': 'PangoUnderline',
    'GtkSourceStyle.weight': 'PangoWeight',
    'GtkSourceView.background-pattern': 'GtkSourceBackgroundPatternType',
    'GtkSourceView.smart-home-end': 'GtkSourceSmartHomeEndType',
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
    GtkSourceCompletionCell: {
        'widget': 'set_widget',
    },
    GtkSourceMap: {
        'view': 'set_view',
    },
};

export const SINCE = {
    'GtkSourceAnnotation': '5.18',
    'GtkSourceAnnotationProvider': '5.18',
    'GtkSourceAnnotationProvider::changed': '5.18',
    'GtkSourceAnnotations': '5.18',
    'GtkSourceCompletionContext::provider-model-changed': '5.6',
    'GtkSourceFileLoader.max-size': '5.22',
    'GtkSourceSearchSettings.visible-only': '5.12',
    'GtkSourceStyleSchemePreview': '5.4',
    'GtkSourceVimIMContext': '5.4',
    'GtkSourceVimIMContext::edit': '5.4',
    'GtkSourceVimIMContext::execute-command': '5.4',
    'GtkSourceVimIMContext::format-text': '5.4',
    'GtkSourceVimIMContext::write': '5.4',
};
