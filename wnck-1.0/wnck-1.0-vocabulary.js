// The widget vocabulary of Wnck-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Wnck-1.0 — library 2.31.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Wnck.ActionMenu.window
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Wnck',
    version: '1.0',
    libraryVersion: '2.31.0',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Wnck.ActionMenu.window'],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    WnckActionMenu: ['window'],
};

export const OWN_SIGNALS = {
    WnckApplication: ['icon-changed', 'name-changed'],
    WnckClassGroup: ['icon-changed', 'name-changed'],
    WnckScreen: ['active-window-changed', 'active-workspace-changed', 'application-closed', 'application-opened', 'background-changed', 'class-group-closed', 'class-group-opened', 'showing-desktop-changed', 'viewports-changed', 'window-closed', 'window-manager-changed', 'window-opened', 'window-stacking-changed', 'workspace-created', 'workspace-destroyed'],
    WnckWindow: ['actions-changed', 'geometry-changed', 'icon-changed', 'name-changed', 'state-changed', 'workspace-changed'],
    WnckWorkspace: ['name-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    WnckActionMenu: ['WnckActionMenu', 'GtkMenu', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckApplication: ['WnckApplication'],
    WnckClassGroup: ['WnckClassGroup'],
    WnckPager: ['WnckPager', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckScreen: ['WnckScreen'],
    WnckSelector: ['WnckSelector', 'GtkMenuBar', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckTasklist: ['WnckTasklist', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckWindow: ['WnckWindow'],
    WnckWorkspace: ['WnckWorkspace'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    WnckClientType: ['application', 'pager'],
    WnckMotionDirection: ['up', 'down', 'left', 'right'],
    WnckPagerDisplayMode: ['name', 'content'],
    WnckPagerLayoutPolicy: ['automatic', 'width-for-height', 'height-for-width'],
    WnckTasklistGroupingType: ['never-group', 'auto-group', 'always-group'],
    WnckWindowGravity: ['current', 'northwest', 'north', 'northeast', 'west', 'center', 'east', 'southwest', 'south', 'southeast', 'static'],
    WnckWindowType: ['normal', 'desktop', 'dock', 'dialog', 'toolbar', 'menu', 'utility', 'splashscreen'],
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
    'WnckClientType.application': 1,
    'WnckClientType.pager': 2,
    'WnckMotionDirection.down': -2,
    'WnckMotionDirection.left': -3,
    'WnckMotionDirection.right': -4,
    'WnckMotionDirection.up': -1,
    'WnckPagerDisplayMode.content': 1,
    'WnckPagerDisplayMode.name': 0,
    'WnckPagerLayoutPolicy.automatic': 0,
    'WnckPagerLayoutPolicy.height-for-width': 2,
    'WnckPagerLayoutPolicy.width-for-height': 1,
    'WnckTasklistGroupingType.always-group': 2,
    'WnckTasklistGroupingType.auto-group': 1,
    'WnckTasklistGroupingType.never-group': 0,
    'WnckWindowGravity.center': 5,
    'WnckWindowGravity.current': 0,
    'WnckWindowGravity.east': 6,
    'WnckWindowGravity.north': 2,
    'WnckWindowGravity.northeast': 3,
    'WnckWindowGravity.northwest': 1,
    'WnckWindowGravity.south': 8,
    'WnckWindowGravity.southeast': 9,
    'WnckWindowGravity.southwest': 7,
    'WnckWindowGravity.static': 10,
    'WnckWindowGravity.west': 4,
    'WnckWindowType.desktop': 1,
    'WnckWindowType.dialog': 3,
    'WnckWindowType.dock': 2,
    'WnckWindowType.menu': 5,
    'WnckWindowType.normal': 0,
    'WnckWindowType.splashscreen': 7,
    'WnckWindowType.toolbar': 4,
    'WnckWindowType.utility': 6,
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
    'WnckWindowActions.above': 131072,
    'WnckWindowActions.below': 262144,
    'WnckWindowActions.change-workspace': 64,
    'WnckWindowActions.close': 128,
    'WnckWindowActions.fullscreen': 65536,
    'WnckWindowActions.maximize': 16384,
    'WnckWindowActions.maximize-horizontally': 16,
    'WnckWindowActions.maximize-vertically': 32,
    'WnckWindowActions.minimize': 4096,
    'WnckWindowActions.move': 1,
    'WnckWindowActions.resize': 2,
    'WnckWindowActions.shade': 4,
    'WnckWindowActions.stick': 8,
    'WnckWindowActions.unmaximize': 32768,
    'WnckWindowActions.unmaximize-horizontally': 256,
    'WnckWindowActions.unmaximize-vertically': 512,
    'WnckWindowActions.unminimize': 8192,
    'WnckWindowActions.unshade': 1024,
    'WnckWindowActions.unstick': 2048,
    'WnckWindowMoveResizeMask.height': 8,
    'WnckWindowMoveResizeMask.width': 4,
    'WnckWindowMoveResizeMask.x': 1,
    'WnckWindowMoveResizeMask.y': 2,
    'WnckWindowState.above': 2048,
    'WnckWindowState.below': 4096,
    'WnckWindowState.demands-attention': 512,
    'WnckWindowState.fullscreen': 256,
    'WnckWindowState.hidden': 128,
    'WnckWindowState.maximized-horizontally': 2,
    'WnckWindowState.maximized-vertically': 4,
    'WnckWindowState.minimized': 1,
    'WnckWindowState.shaded': 8,
    'WnckWindowState.skip-pager': 16,
    'WnckWindowState.skip-tasklist': 32,
    'WnckWindowState.sticky': 64,
    'WnckWindowState.urgent': 1024,
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
    'WnckScreen::class-group-closed': '2.20',
    'WnckScreen::class-group-opened': '2.20',
    'WnckScreen::showing-desktop-changed': '2.20',
    'WnckScreen::viewports-changed': '2.20',
    'WnckScreen::window-manager-changed': '2.20',
};
