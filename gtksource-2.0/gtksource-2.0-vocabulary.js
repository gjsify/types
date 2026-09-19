// The widget vocabulary of GtkSource-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-2.0 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkSource',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['GtkSource'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gtk-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GtkSourceBuffer: ['highlight-matching-brackets', 'highlight-syntax', 'language', 'max-undo-levels', 'style-scheme', 'undo-manager'],
    GtkSourceCompletion: ['accelerators', 'auto-complete-delay', 'proposal-page-size', 'provider-page-size', 'remember-info-visibility', 'select-on-show', 'show-headers', 'show-icons', 'view'],
    GtkSourceCompletionContext: ['completion', 'iter'],
    GtkSourceCompletionInfo: ['max-height', 'max-width', 'shrink-height', 'shrink-width'],
    GtkSourceCompletionItem: ['icon', 'info', 'label', 'markup', 'text'],
    GtkSourceGutter: ['view', 'window-type'],
    GtkSourceLanguageManager: ['search-path'],
    GtkSourceMark: ['category'],
    GtkSourcePrintCompositor: ['body-font-name', 'buffer', 'footer-font-name', 'header-font-name', 'highlight-syntax', 'line-numbers-font-name', 'print-footer', 'print-header', 'print-line-numbers', 'tab-width', 'wrap-mode'],
    GtkSourceStyle: ['background', 'background-set', 'bold', 'bold-set', 'foreground', 'foreground-set', 'italic', 'italic-set', 'line-background', 'line-background-set', 'strikethrough', 'strikethrough-set', 'underline', 'underline-set'],
    GtkSourceStyleScheme: ['id'],
    GtkSourceStyleSchemeManager: ['search-path'],
    GtkSourceView: ['auto-indent', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceBuffer: ['bracket-matched', 'highlight-updated', 'redo', 'source-mark-updated', 'undo'],
    GtkSourceCompletion: ['activate-proposal', 'hide', 'move-cursor', 'move-page', 'populate-context', 'show'],
    GtkSourceCompletionContext: ['cancelled'],
    GtkSourceCompletionInfo: ['before-show'],
    GtkSourceCompletionProposal: ['changed'],
    GtkSourceGutter: ['cell-activated', 'query-tooltip'],
    GtkSourceView: ['line-mark-activated', 'move-lines', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
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
    GtkSourceCompletion: ['GtkSourceCompletion', 'GtkObject', 'GInitiallyUnowned', 'GObject'],
    GtkSourceCompletionContext: ['GtkSourceCompletionContext', 'GInitiallyUnowned', 'GObject'],
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GtkSourceCompletionItem: ['GtkSourceCompletionItem', 'GObject', 'GtkSourceCompletionProposal'],
    GtkSourceGutter: ['GtkSourceGutter', 'GObject'],
    GtkSourceLanguage: ['GtkSourceLanguage', 'GObject'],
    GtkSourceLanguageManager: ['GtkSourceLanguageManager', 'GObject'],
    GtkSourceMark: ['GtkSourceMark', 'GtkTextMark', 'GObject'],
    GtkSourcePrintCompositor: ['GtkSourcePrintCompositor', 'GObject'],
    GtkSourceStyle: ['GtkSourceStyle', 'GObject'],
    GtkSourceStyleScheme: ['GtkSourceStyleScheme', 'GObject'],
    GtkSourceStyleSchemeManager: ['GtkSourceStyleSchemeManager', 'GObject'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkTextWindowType: ['private', 'widget', 'text', 'left', 'right', 'top', 'bottom'],
    GtkWrapMode: ['none', 'char', 'word', 'word-char'],
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
    'GtkSourceGutter.window-type': 'GtkTextWindowType',
    'GtkSourcePrintCompositor.wrap-mode': 'GtkWrapMode',
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
    GtkSourceCompletionInfo: {
        'widget': 'set_widget',
    },
};

export const SINCE = {
    'GtkSourceBuffer::bracket-matched': '2.12',
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
    'GtkSourceView::move-lines': '2.10',
    'GtkSourceView::move-words': '3.0',
    'GtkSourceView::smart-home-end': '3.0',
};
