// The widget vocabulary of Vte-2.91 as runtime data.
//
// GENERATED — do not edit. Provenance: Vte-2.91 — library 0.84.1 — dropped empty base(s): GObject.Object Gio.Initable GObject.InitiallyUnowned Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Vte',
    version: '2.91',
    libraryVersion: '0.84.1',
    childHolders: 0,
    droppedBases: ['GObject.Object', 'Gio.Initable', 'GObject.InitiallyUnowned', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    VtePty: ['fd', 'flags'],
    VteTerminal: ['allow-bold', 'allow-hyperlink', 'audible-bell', 'backspace-binding', 'bold-is-bright', 'cell-height-scale', 'cell-width-scale', 'cjk-ambiguous-width', 'context-menu', 'context-menu-model', 'cursor-blink-mode', 'cursor-shape', 'delete-binding', 'enable-a11y', 'enable-bidi', 'enable-fallback-scrolling', 'enable-legacy-osc777', 'enable-shaping', 'enable-sixel', 'encoding', 'font-desc', 'font-options', 'font-scale', 'input-enabled', 'pointer-autohide', 'pty', 'rewrap-on-resize', 'scroll-on-insert', 'scroll-on-keystroke', 'scroll-on-output', 'scroll-unit-is-pixels', 'scrollback-lines', 'text-blink-mode', 'xalign', 'xfill', 'yalign', 'yfill'],
};

export const OWN_SIGNALS = {
    VteTerminal: ['bell', 'char-size-changed', 'child-exited', 'commit', 'contents-changed', 'copy-clipboard', 'current-directory-uri-changed', 'current-file-uri-changed', 'cursor-moved', 'decrease-font-size', 'deiconify-window', 'encoding-changed', 'eof', 'hyperlink-hover-uri-changed', 'icon-title-changed', 'iconify-window', 'increase-font-size', 'lower-window', 'maximize-window', 'move-window', 'paste-clipboard', 'raise-window', 'refresh-window', 'resize-window', 'restore-window', 'selection-changed', 'setup-context-menu', 'termprop-changed', 'termprops-changed', 'text-deleted', 'text-inserted', 'text-modified', 'text-scrolled', 'window-title-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    VtePty: ['VtePty'],
    VteTerminal: ['VteTerminal', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VteAlign: ['start', 'center', 'end'],
    VteCursorBlinkMode: ['system', 'on', 'off'],
    VteCursorShape: ['block', 'ibeam', 'underline'],
    VteEraseBinding: ['auto', 'ascii-backspace', 'ascii-delete', 'delete-sequence', 'tty'],
    VteFormat: ['text', 'html'],
    VteProgressHint: ['inactive', 'active', 'error', 'indeterminate', 'paused'],
    VtePropertyId: ['current-directory-uri', 'current-file-uri', 'xterm-title', 'container-name', 'container-runtime', 'container-uid', 'shell-precmd', 'shell-preexec', 'shell-postexec', 'progress-hint', 'progress-value', 'icon-color', 'icon-image'],
    VtePropertyType: ['valueless', 'bool', 'int', 'uint', 'double', 'rgb', 'rgba', 'string', 'data', 'uuid', 'uri', 'image'],
    VteTextBlinkMode: ['never', 'focused', 'unfocused', 'always'],
    VteWriteFlags: ['default'],
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
    'VteAlign.center': 1,
    'VteAlign.end': 2,
    'VteAlign.start': 0,
    'VteCursorBlinkMode.off': 2,
    'VteCursorBlinkMode.on': 1,
    'VteCursorBlinkMode.system': 0,
    'VteCursorShape.block': 0,
    'VteCursorShape.ibeam': 1,
    'VteCursorShape.underline': 2,
    'VteEraseBinding.ascii-backspace': 1,
    'VteEraseBinding.ascii-delete': 2,
    'VteEraseBinding.auto': 0,
    'VteEraseBinding.delete-sequence': 3,
    'VteEraseBinding.tty': 4,
    'VteFormat.html': 2,
    'VteFormat.text': 1,
    'VteProgressHint.active': 1,
    'VteProgressHint.error': 2,
    'VteProgressHint.inactive': 0,
    'VteProgressHint.indeterminate': 3,
    'VteProgressHint.paused': 4,
    'VtePropertyId.container-name': 3,
    'VtePropertyId.container-runtime': 4,
    'VtePropertyId.container-uid': 5,
    'VtePropertyId.current-directory-uri': 0,
    'VtePropertyId.current-file-uri': 1,
    'VtePropertyId.icon-color': 11,
    'VtePropertyId.icon-image': 12,
    'VtePropertyId.progress-hint': 9,
    'VtePropertyId.progress-value': 10,
    'VtePropertyId.shell-postexec': 8,
    'VtePropertyId.shell-precmd': 6,
    'VtePropertyId.shell-preexec': 7,
    'VtePropertyId.xterm-title': 2,
    'VtePropertyType.bool': 1,
    'VtePropertyType.data': 8,
    'VtePropertyType.double': 4,
    'VtePropertyType.image': 11,
    'VtePropertyType.int': 2,
    'VtePropertyType.rgb': 5,
    'VtePropertyType.rgba': 6,
    'VtePropertyType.string': 7,
    'VtePropertyType.uint': 3,
    'VtePropertyType.uri': 10,
    'VtePropertyType.uuid': 9,
    'VtePropertyType.valueless': 0,
    'VteTextBlinkMode.always': 3,
    'VteTextBlinkMode.focused': 1,
    'VteTextBlinkMode.never': 0,
    'VteTextBlinkMode.unfocused': 2,
    'VteWriteFlags.default': 0,
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
    'VtePropertyFlags.ephemeral': 1,
    'VtePropertyFlags.none': 0,
    'VtePtyFlags.default': 0,
    'VtePtyFlags.no-ctty': 64,
    'VtePtyFlags.no-fallback': 16,
    'VtePtyFlags.no-helper': 8,
    'VtePtyFlags.no-lastlog': 1,
    'VtePtyFlags.no-session': 32,
    'VtePtyFlags.no-utmp': 2,
    'VtePtyFlags.no-wtmp': 4,
    'VteUuidFormat.any': 7,
    'VteUuidFormat.braced': 2,
    'VteUuidFormat.simple': 1,
    'VteUuidFormat.urn': 4,
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
    'VtePty.flags': 'VtePtyFlags',
    'VteTerminal.backspace-binding': 'VteEraseBinding',
    'VteTerminal.cursor-blink-mode': 'VteCursorBlinkMode',
    'VteTerminal.cursor-shape': 'VteCursorShape',
    'VteTerminal.delete-binding': 'VteEraseBinding',
    'VteTerminal.text-blink-mode': 'VteTextBlinkMode',
    'VteTerminal.xalign': 'VteAlign',
    'VteTerminal.yalign': 'VteAlign',
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
    VteTerminal: {
        'context-menu': 'set_context_menu',
        'geometry-hints-for-window': 'set_geometry_hints_for_window',
    },
};

export const SINCE = {
    'VteTerminal.allow-hyperlink': '0.50',
    'VteTerminal.bold-is-bright': '0.52',
    'VteTerminal.cell-height-scale': '0.52',
    'VteTerminal.cell-width-scale': '0.52',
    'VteTerminal.context-menu': '0.76',
    'VteTerminal.context-menu-model': '0.76',
    'VteTerminal.enable-a11y': '0.78',
    'VteTerminal.enable-bidi': '0.58',
    'VteTerminal.enable-legacy-osc777': '0.78',
    'VteTerminal.enable-shaping': '0.58',
    'VteTerminal.enable-sixel': '0.62',
    'VteTerminal.font-options': '0.74',
    'VteTerminal.scroll-on-insert': '0.76',
    'VteTerminal.scroll-unit-is-pixels': '0.66',
    'VteTerminal.text-blink-mode': '0.52',
    'VteTerminal.xalign': '0.76',
    'VteTerminal.xfill': '0.76',
    'VteTerminal.yalign': '0.76',
    'VteTerminal.yfill': '0.76',
    'VteTerminal::hyperlink-hover-uri-changed': '0.50',
    'VteTerminal::termprop-changed': '0.78',
    'VteTerminal::termprops-changed': '0.78',
};
