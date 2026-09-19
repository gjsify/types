// The widget vocabulary of GdkX11-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GdkX11-3.0 — inlined base(s) their owner's vocabulary does not emit: Gdk.Cursor Gdk.Device Gdk.DeviceManager Gdk.GLContext Gdk.Window
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GdkX11',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: ['Gdk.Cursor', 'Gdk.Device', 'Gdk.DeviceManager', 'Gdk.GLContext', 'Gdk.Window'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gdk'],
    requiredVocabularies: ['@girs/gdk-3.0/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GdkCursor: ['cursor-type', 'display'],
    GdkDevice: ['device-manager', 'display', 'has-cursor', 'input-mode', 'input-source', 'name', 'num-touches', 'product-id', 'seat', 'type', 'vendor-id'],
    GdkDeviceManager: ['display'],
    GdkGLContext: ['display', 'shared-context', 'window'],
    GdkWindow: ['cursor'],
    GdkX11DeviceManagerXI2: ['major', 'minor', 'opcode'],
    GdkX11DeviceXI2: ['device-id'],
};

export const OWN_SIGNALS = {
    GdkDevice: ['changed', 'tool-changed'],
    GdkDeviceManager: ['device-added', 'device-changed', 'device-removed'],
    GdkWindow: ['create-surface', 'from-embedder', 'moved-to-rect', 'pick-embedded-child', 'to-embedder'],
    GdkX11Screen: ['window-manager-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GdkX11AppLaunchContext: ['GdkX11AppLaunchContext', 'GdkAppLaunchContext', 'GAppLaunchContext', 'GObject'],
    GdkX11Cursor: ['GdkX11Cursor', 'GdkCursor', 'GObject'],
    GdkX11DeviceCore: ['GdkX11DeviceCore', 'GdkDevice', 'GObject'],
    GdkX11DeviceManagerCore: ['GdkX11DeviceManagerCore', 'GdkDeviceManager', 'GObject'],
    GdkX11DeviceManagerXI2: ['GdkX11DeviceManagerXI2', 'GdkX11DeviceManagerCore', 'GdkDeviceManager', 'GObject'],
    GdkX11DeviceXI2: ['GdkX11DeviceXI2', 'GdkDevice', 'GObject'],
    GdkX11Display: ['GdkX11Display', 'GdkDisplay', 'GObject'],
    GdkX11DisplayManager: ['GdkX11DisplayManager', 'GdkDisplayManager', 'GObject'],
    GdkX11DragContext: ['GdkX11DragContext', 'GdkDragContext', 'GObject'],
    GdkX11GLContext: ['GdkX11GLContext', 'GdkGLContext', 'GObject'],
    GdkX11Keymap: ['GdkX11Keymap', 'GdkKeymap', 'GObject'],
    GdkX11Monitor: ['GdkX11Monitor', 'GdkMonitor', 'GObject'],
    GdkX11Screen: ['GdkX11Screen', 'GdkScreen', 'GObject'],
    GdkX11Visual: ['GdkX11Visual', 'GdkVisual', 'GObject'],
    GdkX11Window: ['GdkX11Window', 'GdkWindow', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdkCursorType: ['x-cursor', 'arrow', 'based-arrow-down', 'based-arrow-up', 'boat', 'bogosity', 'bottom-left-corner', 'bottom-right-corner', 'bottom-side', 'bottom-tee', 'box-spiral', 'center-ptr', 'circle', 'clock', 'coffee-mug', 'cross', 'cross-reverse', 'crosshair', 'diamond-cross', 'dot', 'dotbox', 'double-arrow', 'draft-large', 'draft-small', 'draped-box', 'exchange', 'fleur', 'gobbler', 'gumby', 'hand1', 'hand2', 'heart', 'icon', 'iron-cross', 'left-ptr', 'left-side', 'left-tee', 'leftbutton', 'll-angle', 'lr-angle', 'man', 'middlebutton', 'mouse', 'pencil', 'pirate', 'plus', 'question-arrow', 'right-ptr', 'right-side', 'right-tee', 'rightbutton', 'rtl-logo', 'sailboat', 'sb-down-arrow', 'sb-h-double-arrow', 'sb-left-arrow', 'sb-right-arrow', 'sb-up-arrow', 'sb-v-double-arrow', 'shuttle', 'sizing', 'spider', 'spraycan', 'star', 'target', 'tcross', 'top-left-arrow', 'top-left-corner', 'top-right-corner', 'top-side', 'top-tee', 'trek', 'ul-angle', 'umbrella', 'ur-angle', 'watch', 'xterm', 'last-cursor', 'blank-cursor', 'cursor-is-pixmap'],
    GdkDeviceType: ['master', 'slave', 'floating'],
    GdkInputMode: ['disabled', 'screen', 'window'],
    GdkInputSource: ['mouse', 'pen', 'eraser', 'cursor', 'keyboard', 'touchscreen', 'touchpad', 'trackpoint', 'tablet-pad'],
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
    'GdkCursorType.arrow': 2,
    'GdkCursorType.based-arrow-down': 4,
    'GdkCursorType.based-arrow-up': 6,
    'GdkCursorType.blank-cursor': -2,
    'GdkCursorType.boat': 8,
    'GdkCursorType.bogosity': 10,
    'GdkCursorType.bottom-left-corner': 12,
    'GdkCursorType.bottom-right-corner': 14,
    'GdkCursorType.bottom-side': 16,
    'GdkCursorType.bottom-tee': 18,
    'GdkCursorType.box-spiral': 20,
    'GdkCursorType.center-ptr': 22,
    'GdkCursorType.circle': 24,
    'GdkCursorType.clock': 26,
    'GdkCursorType.coffee-mug': 28,
    'GdkCursorType.cross': 30,
    'GdkCursorType.cross-reverse': 32,
    'GdkCursorType.crosshair': 34,
    'GdkCursorType.cursor-is-pixmap': -1,
    'GdkCursorType.diamond-cross': 36,
    'GdkCursorType.dot': 38,
    'GdkCursorType.dotbox': 40,
    'GdkCursorType.double-arrow': 42,
    'GdkCursorType.draft-large': 44,
    'GdkCursorType.draft-small': 46,
    'GdkCursorType.draped-box': 48,
    'GdkCursorType.exchange': 50,
    'GdkCursorType.fleur': 52,
    'GdkCursorType.gobbler': 54,
    'GdkCursorType.gumby': 56,
    'GdkCursorType.hand1': 58,
    'GdkCursorType.hand2': 60,
    'GdkCursorType.heart': 62,
    'GdkCursorType.icon': 64,
    'GdkCursorType.iron-cross': 66,
    'GdkCursorType.last-cursor': 153,
    'GdkCursorType.left-ptr': 68,
    'GdkCursorType.left-side': 70,
    'GdkCursorType.left-tee': 72,
    'GdkCursorType.leftbutton': 74,
    'GdkCursorType.ll-angle': 76,
    'GdkCursorType.lr-angle': 78,
    'GdkCursorType.man': 80,
    'GdkCursorType.middlebutton': 82,
    'GdkCursorType.mouse': 84,
    'GdkCursorType.pencil': 86,
    'GdkCursorType.pirate': 88,
    'GdkCursorType.plus': 90,
    'GdkCursorType.question-arrow': 92,
    'GdkCursorType.right-ptr': 94,
    'GdkCursorType.right-side': 96,
    'GdkCursorType.right-tee': 98,
    'GdkCursorType.rightbutton': 100,
    'GdkCursorType.rtl-logo': 102,
    'GdkCursorType.sailboat': 104,
    'GdkCursorType.sb-down-arrow': 106,
    'GdkCursorType.sb-h-double-arrow': 108,
    'GdkCursorType.sb-left-arrow': 110,
    'GdkCursorType.sb-right-arrow': 112,
    'GdkCursorType.sb-up-arrow': 114,
    'GdkCursorType.sb-v-double-arrow': 116,
    'GdkCursorType.shuttle': 118,
    'GdkCursorType.sizing': 120,
    'GdkCursorType.spider': 122,
    'GdkCursorType.spraycan': 124,
    'GdkCursorType.star': 126,
    'GdkCursorType.target': 128,
    'GdkCursorType.tcross': 130,
    'GdkCursorType.top-left-arrow': 132,
    'GdkCursorType.top-left-corner': 134,
    'GdkCursorType.top-right-corner': 136,
    'GdkCursorType.top-side': 138,
    'GdkCursorType.top-tee': 140,
    'GdkCursorType.trek': 142,
    'GdkCursorType.ul-angle': 144,
    'GdkCursorType.umbrella': 146,
    'GdkCursorType.ur-angle': 148,
    'GdkCursorType.watch': 150,
    'GdkCursorType.x-cursor': 0,
    'GdkCursorType.xterm': 152,
    'GdkDeviceType.floating': 2,
    'GdkDeviceType.master': 0,
    'GdkDeviceType.slave': 1,
    'GdkInputMode.disabled': 0,
    'GdkInputMode.screen': 1,
    'GdkInputMode.window': 2,
    'GdkInputSource.cursor': 3,
    'GdkInputSource.eraser': 2,
    'GdkInputSource.keyboard': 4,
    'GdkInputSource.mouse': 0,
    'GdkInputSource.pen': 1,
    'GdkInputSource.tablet-pad': 8,
    'GdkInputSource.touchpad': 6,
    'GdkInputSource.touchscreen': 5,
    'GdkInputSource.trackpoint': 7,
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
    'GdkCursor.cursor-type': 'GdkCursorType',
    'GdkDevice.input-mode': 'GdkInputMode',
    'GdkDevice.input-source': 'GdkInputSource',
    'GdkDevice.type': 'GdkDeviceType',
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
    'GdkDevice.device-manager': '3.0',
    'GdkDevice.display': '3.0',
    'GdkDevice.has-cursor': '3.0',
    'GdkDevice.input-source': '3.0',
    'GdkDevice.name': '3.0',
    'GdkDevice.num-touches': '3.20',
    'GdkDevice.product-id': '3.16',
    'GdkDevice.seat': '3.20',
    'GdkDevice.type': '3.0',
    'GdkDevice.vendor-id': '3.16',
    'GdkDevice::tool-changed': '3.22',
    'GdkGLContext.display': '3.16',
    'GdkGLContext.shared-context': '3.16',
    'GdkGLContext.window': '3.16',
    'GdkWindow.cursor': '2.18',
    'GdkWindow::create-surface': '3.0',
    'GdkWindow::from-embedder': '2.18',
    'GdkWindow::moved-to-rect': '3.22',
    'GdkWindow::pick-embedded-child': '2.18',
    'GdkWindow::to-embedder': '2.18',
};
