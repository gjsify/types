// The widget vocabulary of Gdl-3 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdl-3 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdl.DockObject.pixbuf-icon
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdl',
    version: '3',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Gdl.DockObject.pixbuf-icon'],
    unresolvedProps: [],
    identifierPrefixes: ['Gdl'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary'],
};

export const OWN_PROPS = {
    GdlDock: ['default-title', 'floating', 'floatx', 'floaty', 'height', 'skip-taskbar', 'width'],
    GdlDockBar: ['dockbar-style', 'master'],
    GdlDockItem: ['behavior', 'closed', 'iconified', 'locked', 'orientation', 'preferred-height', 'preferred-width', 'resize'],
    GdlDockItemGrip: ['item'],
    GdlDockLayout: ['master'],
    GdlDockMaster: ['default-title', 'locked', 'switcher-style', 'tab-pos', 'tab-reorderable'],
    GdlDockNotebook: ['page'],
    GdlDockObject: ['long-name', 'master', 'name', 'pixbuf-icon', 'stock-id'],
    GdlDockPaned: ['position'],
    GdlDockPlaceholder: ['floating', 'floatx', 'floaty', 'height', 'host', 'next-placement', 'sticky', 'width'],
    GdlDockTablabel: ['item'],
    GdlSwitcher: ['switcher-style', 'tab-pos', 'tab-reorderable'],
};

export const OWN_SIGNALS = {
    GdlDock: ['layout-changed'],
    GdlDockItem: ['deselected', 'dock-drag-begin', 'dock-drag-end', 'dock-drag-motion', 'move-focus-child', 'selected'],
    GdlDockMaster: ['layout-changed'],
    GdlDockObject: ['detach', 'dock'],
    GdlDockTablabel: ['button-pressed-handle'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GdlDock: ['GdlDock', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockBar: ['GdlDockBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GdlDockItem: ['GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockItemButtonImage: ['GdlDockItemButtonImage', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockItemGrip: ['GdlDockItemGrip', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockLayout: ['GdlDockLayout', 'GObject'],
    GdlDockMaster: ['GdlDockMaster', 'GObject'],
    GdlDockNotebook: ['GdlDockNotebook', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockObject: ['GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockPaned: ['GdlDockPaned', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockParam: ['GdlDockParam'],
    GdlDockPlaceholder: ['GdlDockPlaceholder', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlDockTablabel: ['GdlDockTablabel', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlPreviewWindow: ['GdlPreviewWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GdlSwitcher: ['GdlSwitcher', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdlDockBarStyle: ['icons', 'text', 'both', 'auto'],
    GdlDockPlacement: ['none', 'top', 'bottom', 'right', 'left', 'center', 'floating'],
    GdlSwitcherStyle: ['text', 'icon', 'both', 'toolbar', 'tabs', 'none'],
    GtkOrientation: ['horizontal', 'vertical'],
    GtkPositionType: ['left', 'right', 'top', 'bottom'],
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
    'GdlDockBarStyle.auto': 3,
    'GdlDockBarStyle.both': 2,
    'GdlDockBarStyle.icons': 0,
    'GdlDockBarStyle.text': 1,
    'GdlDockPlacement.bottom': 2,
    'GdlDockPlacement.center': 5,
    'GdlDockPlacement.floating': 6,
    'GdlDockPlacement.left': 4,
    'GdlDockPlacement.none': 0,
    'GdlDockPlacement.right': 3,
    'GdlDockPlacement.top': 1,
    'GdlSwitcherStyle.both': 2,
    'GdlSwitcherStyle.icon': 1,
    'GdlSwitcherStyle.none': 5,
    'GdlSwitcherStyle.tabs': 4,
    'GdlSwitcherStyle.text': 0,
    'GdlSwitcherStyle.toolbar': 3,
    'GtkOrientation.horizontal': 0,
    'GtkOrientation.vertical': 1,
    'GtkPositionType.bottom': 3,
    'GtkPositionType.left': 0,
    'GtkPositionType.right': 1,
    'GtkPositionType.top': 2,
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
    'GdlDockItemBehavior.cant-close': 512,
    'GdlDockItemBehavior.cant-dock-bottom': 32,
    'GdlDockItemBehavior.cant-dock-center': 256,
    'GdlDockItemBehavior.cant-dock-left': 64,
    'GdlDockItemBehavior.cant-dock-right': 128,
    'GdlDockItemBehavior.cant-dock-top': 16,
    'GdlDockItemBehavior.cant-iconify': 1024,
    'GdlDockItemBehavior.locked': 8,
    'GdlDockItemBehavior.never-floating': 1,
    'GdlDockItemBehavior.never-horizontal': 4,
    'GdlDockItemBehavior.never-vertical': 2,
    'GdlDockItemBehavior.no-grip': 2048,
    'GdlDockItemBehavior.normal': 0,
    'GdlDockItemFlags.iconified': 1024,
    'GdlDockItemFlags.in-drag': 256,
    'GdlDockItemFlags.in-predrag': 512,
    'GdlDockItemFlags.user-action': 2048,
    'GdlDockObjectFlags.attached': 2,
    'GdlDockObjectFlags.automatic': 1,
    'GdlDockObjectFlags.in-detach': 8,
    'GdlDockObjectFlags.in-reflow': 4,
    'GdlDockParamFlags.after': 512,
    'GdlDockParamFlags.export': 256,
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
    'GdlDockBar.dockbar-style': 'GdlDockBarStyle',
    'GdlDockItem.behavior': 'GdlDockItemBehavior',
    'GdlDockItem.orientation': 'GtkOrientation',
    'GdlDockMaster.switcher-style': 'GdlSwitcherStyle',
    'GdlDockMaster.tab-pos': 'GtkPositionType',
    'GdlDockPlaceholder.next-placement': 'GdlDockPlacement',
    'GdlSwitcher.switcher-style': 'GdlSwitcherStyle',
    'GdlSwitcher.tab-pos': 'GtkPositionType',
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
    'GdlDock.default-title': 'gchararray',
    'GdlDock.floating': 'gboolean',
    'GdlDock.floatx': 'gint',
    'GdlDock.floaty': 'gint',
    'GdlDock.height': 'gint',
    'GdlDock.skip-taskbar': 'gboolean',
    'GdlDock.width': 'gint',
    'GdlDockBar.dockbar-style': 'GdlDockBarStyle',
    'GdlDockBar.master': 'GObject',
    'GdlDockItem.behavior': 'GdlDockItemBehavior',
    'GdlDockItem.closed': 'gboolean',
    'GdlDockItem.iconified': 'gboolean',
    'GdlDockItem.locked': 'gboolean',
    'GdlDockItem.orientation': 'GtkOrientation',
    'GdlDockItem.preferred-height': 'gint',
    'GdlDockItem.preferred-width': 'gint',
    'GdlDockItem.resize': 'gboolean',
    'GdlDockItemGrip.item': 'GdlDockItem',
    'GdlDockLayout.master': 'GObject',
    'GdlDockMaster.default-title': 'gchararray',
    'GdlDockMaster.locked': 'gint',
    'GdlDockMaster.switcher-style': 'GdlSwitcherStyle',
    'GdlDockMaster.tab-pos': 'GtkPositionType',
    'GdlDockMaster.tab-reorderable': 'gboolean',
    'GdlDockNotebook.page': 'gint',
    'GdlDockObject.long-name': 'gchararray',
    'GdlDockObject.master': 'GdlDockMaster',
    'GdlDockObject.name': 'gchararray',
    'GdlDockObject.pixbuf-icon': 'gpointer',
    'GdlDockObject.stock-id': 'gchararray',
    'GdlDockPaned.position': 'guint',
    'GdlDockPlaceholder.floating': 'gboolean',
    'GdlDockPlaceholder.floatx': 'gint',
    'GdlDockPlaceholder.floaty': 'gint',
    'GdlDockPlaceholder.height': 'gint',
    'GdlDockPlaceholder.host': 'GdlDockObject',
    'GdlDockPlaceholder.next-placement': 'GdlDockPlacement',
    'GdlDockPlaceholder.sticky': 'gboolean',
    'GdlDockPlaceholder.width': 'gint',
    'GdlDockTablabel.item': 'GdlDockItem',
    'GdlSwitcher.switcher-style': 'GdlSwitcherStyle',
    'GdlSwitcher.tab-pos': 'GtkPositionType',
    'GdlSwitcher.tab-reorderable': 'gboolean',
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
    GdlDockItem: {
        'child': 'set_child',
        'default-position': 'set_default_position',
        'tablabel': 'set_tablabel',
    },
    GdlDockItemGrip: {
        'label': 'set_label',
    },
};

export const SINCE = {
    'GdlDock.skip-taskbar': '3.6',
    'GdlDockItem.closed': '3.6',
    'GdlDockItem.iconified': '3.6',
    'GdlDockItem::move-focus-child': '3.3.2',
    'GdlDockObject.pixbuf-icon': '3.3.2',
};
