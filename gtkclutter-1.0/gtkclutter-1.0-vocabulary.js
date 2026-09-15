// The widget vocabulary of GtkClutter-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkClutter-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Clutter.Animatable Clutter.Container Clutter.Scriptable — inlined base(s) their owner's vocabulary does not emit: Clutter.Actor Clutter.Texture
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkClutter',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Clutter.Animatable', 'Clutter.Container', 'Clutter.Scriptable'],
    inlinedBases: ['Clutter.Actor', 'Clutter.Texture'],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    ClutterActor: ['actions', 'anchor-gravity', 'anchor-x', 'anchor-y', 'background-color', 'child-transform', 'clip', 'clip-rect', 'clip-to-allocation', 'constraints', 'content', 'content-gravity', 'content-repeat', 'depth', 'effect', 'fixed-position-set', 'fixed-x', 'fixed-y', 'height', 'layout-manager', 'magnification-filter', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'min-height', 'min-height-set', 'min-width', 'min-width-set', 'minification-filter', 'name', 'natural-height', 'natural-height-set', 'natural-width', 'natural-width-set', 'offscreen-redirect', 'opacity', 'pivot-point', 'pivot-point-z', 'position', 'reactive', 'request-mode', 'rotation-angle-x', 'rotation-angle-y', 'rotation-angle-z', 'rotation-center-x', 'rotation-center-y', 'rotation-center-z', 'rotation-center-z-gravity', 'scale-center-x', 'scale-center-y', 'scale-gravity', 'scale-x', 'scale-y', 'scale-z', 'show-on-set-parent', 'size', 'text-direction', 'transform', 'translation-x', 'translation-y', 'translation-z', 'visible', 'width', 'x', 'x-align', 'x-expand', 'y', 'y-align', 'y-expand', 'z-position'],
    ClutterTexture: ['disable-slicing', 'filename', 'filter-quality', 'keep-aspect-ratio', 'load-async', 'load-data-async', 'pick-with-alpha', 'repeat-x', 'repeat-y', 'sync-size'],
    GtkClutterActor: ['contents'],
    GtkClutterEmbed: ['use-layout-size'],
};

export const OWN_SIGNALS = {
    ClutterActor: ['allocation-changed', 'button-press-event', 'button-release-event', 'captured-event', 'destroy', 'enter-event', 'event', 'hide', 'key-focus-in', 'key-focus-out', 'key-press-event', 'key-release-event', 'leave-event', 'motion-event', 'paint', 'parent-set', 'pick', 'queue-redraw', 'queue-relayout', 'realize', 'scroll-event', 'show', 'touch-event', 'transition-stopped', 'transitions-completed', 'unrealize'],
    ClutterTexture: ['load-finished', 'pixbuf-change', 'size-change'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GtkClutterActor: ['GtkClutterActor', 'ClutterActor'],
    GtkClutterEmbed: ['GtkClutterEmbed', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GtkClutterTexture: ['GtkClutterTexture', 'ClutterTexture', 'ClutterActor'],
    GtkClutterWindow: ['GtkClutterWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    ClutterActorAlign: ['fill', 'start', 'center', 'end'],
    ClutterContentGravity: ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right', 'resize-fill', 'resize-aspect'],
    ClutterGravity: ['none', 'north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west', 'center'],
    ClutterRequestMode: ['height-for-width', 'width-for-height', 'content-size'],
    ClutterScalingFilter: ['linear', 'nearest', 'trilinear'],
    ClutterTextDirection: ['default', 'ltr', 'rtl'],
    ClutterTextureQuality: ['low', 'medium', 'high'],
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
    'ClutterActorAlign.center': 2,
    'ClutterActorAlign.end': 3,
    'ClutterActorAlign.fill': 0,
    'ClutterActorAlign.start': 1,
    'ClutterContentGravity.bottom': 7,
    'ClutterContentGravity.bottom-left': 6,
    'ClutterContentGravity.bottom-right': 8,
    'ClutterContentGravity.center': 4,
    'ClutterContentGravity.left': 3,
    'ClutterContentGravity.resize-aspect': 10,
    'ClutterContentGravity.resize-fill': 9,
    'ClutterContentGravity.right': 5,
    'ClutterContentGravity.top': 1,
    'ClutterContentGravity.top-left': 0,
    'ClutterContentGravity.top-right': 2,
    'ClutterGravity.center': 9,
    'ClutterGravity.east': 3,
    'ClutterGravity.none': 0,
    'ClutterGravity.north': 1,
    'ClutterGravity.north-east': 2,
    'ClutterGravity.north-west': 8,
    'ClutterGravity.south': 5,
    'ClutterGravity.south-east': 4,
    'ClutterGravity.south-west': 6,
    'ClutterGravity.west': 7,
    'ClutterRequestMode.content-size': 2,
    'ClutterRequestMode.height-for-width': 0,
    'ClutterRequestMode.width-for-height': 1,
    'ClutterScalingFilter.linear': 0,
    'ClutterScalingFilter.nearest': 1,
    'ClutterScalingFilter.trilinear': 2,
    'ClutterTextDirection.default': 0,
    'ClutterTextDirection.ltr': 1,
    'ClutterTextDirection.rtl': 2,
    'ClutterTextureQuality.high': 2,
    'ClutterTextureQuality.low': 0,
    'ClutterTextureQuality.medium': 1,
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
    'ClutterContentRepeat.both': 3,
    'ClutterContentRepeat.none': 0,
    'ClutterContentRepeat.x-axis': 1,
    'ClutterContentRepeat.y-axis': 2,
    'ClutterOffscreenRedirect.always': 2,
    'ClutterOffscreenRedirect.automatic-for-opacity': 1,
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
    'ClutterActor.anchor-gravity': 'ClutterGravity',
    'ClutterActor.content-gravity': 'ClutterContentGravity',
    'ClutterActor.content-repeat': 'ClutterContentRepeat',
    'ClutterActor.magnification-filter': 'ClutterScalingFilter',
    'ClutterActor.minification-filter': 'ClutterScalingFilter',
    'ClutterActor.offscreen-redirect': 'ClutterOffscreenRedirect',
    'ClutterActor.request-mode': 'ClutterRequestMode',
    'ClutterActor.rotation-center-z-gravity': 'ClutterGravity',
    'ClutterActor.scale-gravity': 'ClutterGravity',
    'ClutterActor.text-direction': 'ClutterTextDirection',
    'ClutterActor.x-align': 'ClutterActorAlign',
    'ClutterActor.y-align': 'ClutterActorAlign',
    'ClutterTexture.filter-quality': 'ClutterTextureQuality',
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
    'ClutterActor.actions': '1.4',
    'ClutterActor.anchor-gravity': '1.0',
    'ClutterActor.anchor-x': '0.8',
    'ClutterActor.anchor-y': '0.8',
    'ClutterActor.background-color': '1.10',
    'ClutterActor.child-transform': '1.12',
    'ClutterActor.clip-rect': '1.12',
    'ClutterActor.clip-to-allocation': '1.0',
    'ClutterActor.constraints': '1.4',
    'ClutterActor.content': '1.10',
    'ClutterActor.content-gravity': '1.10',
    'ClutterActor.content-repeat': '1.12',
    'ClutterActor.depth': '0.6',
    'ClutterActor.effect': '1.4',
    'ClutterActor.fixed-position-set': '0.8',
    'ClutterActor.fixed-x': '0.8',
    'ClutterActor.fixed-y': '0.8',
    'ClutterActor.layout-manager': '1.10',
    'ClutterActor.margin-bottom': '1.10',
    'ClutterActor.margin-left': '1.10',
    'ClutterActor.margin-right': '1.10',
    'ClutterActor.margin-top': '1.10',
    'ClutterActor.min-height': '0.8',
    'ClutterActor.min-height-set': '0.8',
    'ClutterActor.min-width': '0.8',
    'ClutterActor.min-width-set': '0.8',
    'ClutterActor.name': '0.2',
    'ClutterActor.natural-height': '0.8',
    'ClutterActor.natural-height-set': '0.8',
    'ClutterActor.natural-width': '0.8',
    'ClutterActor.natural-width-set': '0.8',
    'ClutterActor.offscreen-redirect': '1.8',
    'ClutterActor.pivot-point': '1.12',
    'ClutterActor.pivot-point-z': '1.12',
    'ClutterActor.position': '1.12',
    'ClutterActor.reactive': '0.6',
    'ClutterActor.request-mode': '0.8',
    'ClutterActor.rotation-angle-x': '0.6',
    'ClutterActor.rotation-angle-y': '0.6',
    'ClutterActor.rotation-angle-z': '0.6',
    'ClutterActor.rotation-center-x': '0.6',
    'ClutterActor.rotation-center-y': '0.6',
    'ClutterActor.rotation-center-z': '0.6',
    'ClutterActor.rotation-center-z-gravity': '1.0',
    'ClutterActor.scale-center-x': '1.0',
    'ClutterActor.scale-center-y': '1.0',
    'ClutterActor.scale-gravity': '1.0',
    'ClutterActor.scale-x': '0.6',
    'ClutterActor.scale-y': '0.6',
    'ClutterActor.scale-z': '1.12',
    'ClutterActor.show-on-set-parent': '0.8',
    'ClutterActor.size': '1.12',
    'ClutterActor.text-direction': '1.0',
    'ClutterActor.transform': '1.12',
    'ClutterActor.translation-x': '1.12',
    'ClutterActor.translation-y': '1.12',
    'ClutterActor.translation-z': '1.12',
    'ClutterActor.x-align': '1.10',
    'ClutterActor.x-expand': '1.12',
    'ClutterActor.y-align': '1.10',
    'ClutterActor.y-expand': '1.12',
    'ClutterActor.z-position': '1.12',
    'ClutterActor::allocation-changed': '1.0',
    'ClutterActor::button-press-event': '0.6',
    'ClutterActor::button-release-event': '0.6',
    'ClutterActor::captured-event': '0.6',
    'ClutterActor::destroy': '0.2',
    'ClutterActor::enter-event': '0.6',
    'ClutterActor::event': '0.6',
    'ClutterActor::hide': '0.2',
    'ClutterActor::key-focus-in': '0.6',
    'ClutterActor::key-focus-out': '0.6',
    'ClutterActor::key-press-event': '0.6',
    'ClutterActor::key-release-event': '0.6',
    'ClutterActor::leave-event': '0.6',
    'ClutterActor::motion-event': '0.6',
    'ClutterActor::paint': '0.8',
    'ClutterActor::parent-set': '0.2',
    'ClutterActor::pick': '1.0',
    'ClutterActor::queue-redraw': '1.0',
    'ClutterActor::queue-relayout': '1.2',
    'ClutterActor::realize': '0.8',
    'ClutterActor::scroll-event': '0.6',
    'ClutterActor::show': '0.2',
    'ClutterActor::touch-event': '1.12',
    'ClutterActor::transition-stopped': '1.12',
    'ClutterActor::transitions-completed': '1.10',
    'ClutterActor::unrealize': '0.8',
    'ClutterTexture': '0.2',
    'ClutterTexture.load-async': '1.0',
    'ClutterTexture.load-data-async': '1.0',
    'ClutterTexture::load-finished': '1.0',
    'GtkClutterEmbed.use-layout-size': '1.4',
    'GtkClutterTexture': '1.0',
};
