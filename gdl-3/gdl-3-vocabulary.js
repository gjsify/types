// The widget vocabulary of Gdl-3 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdl-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdl.DockObject.pixbuf-icon
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdl',
    version: '3',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Gdl.DockObject.pixbuf-icon'],
};

export const OWN_PROPS = {
    GdlDock: ['default-title', 'floating', 'floatx', 'floaty', 'height', 'skip-taskbar', 'width'],
    GdlDockBar: ['dockbar-style', 'master'],
    GdlDockItem: ['behavior', 'closed', 'iconified', 'locked', 'orientation', 'preferred-height', 'preferred-width', 'resize'],
    GdlDockItemGrip: ['item'],
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
    GdlDockObject: ['detach', 'dock'],
    GdlDockTablabel: ['button-pressed-handle'],
};

export const DECLS = {
    GdlDock: ['GdlDock', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockBar: ['GdlDockBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdlDockItem: ['GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockItemButtonImage: ['GdlDockItemButtonImage', 'GtkWidget', 'GtkBuildable'],
    GdlDockItemGrip: ['GdlDockItemGrip', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockNotebook: ['GdlDockNotebook', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockObject: ['GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockPaned: ['GdlDockPaned', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockPlaceholder: ['GdlDockPlaceholder', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockTablabel: ['GdlDockTablabel', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlPreviewWindow: ['GdlPreviewWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlSwitcher: ['GdlSwitcher', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdlDockBarStyle: ['icons', 'text', 'both', 'auto'],
    GdlDockPlacement: ['none', 'top', 'bottom', 'right', 'left', 'center', 'floating'],
    GdlSwitcherStyle: ['text', 'icon', 'both', 'toolbar', 'tabs', 'none'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GdlDockBar.dockbar-style': 'GdlDockBarStyle',
    'GdlDockItem.behavior': 'GdlDockItemBehavior',
    'GdlDockItem.orientation': 'GtkOrientation',
    'GdlDockPlaceholder.next-placement': 'GdlDockPlacement',
    'GdlSwitcher.switcher-style': 'GdlSwitcherStyle',
    'GdlSwitcher.tab-pos': 'GtkPositionType',
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
