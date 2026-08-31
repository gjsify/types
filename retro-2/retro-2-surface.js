// The widget vocabulary of Retro-2 as runtime data.
//
// GENERATED — do not edit. Provenance: Retro-2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Retro-2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    RetroCoreView: ['can-grab-pointer', 'snap-pointer-to-borders'],
};

export const OWN_SIGNALS = {
    RetroCoreView: ['controller-state-changed'],
};

export const DECLS = {
    RetroCoreView: ['RetroCoreView', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    RetroAnalogId: ['x', 'y'],
    RetroAnalogIndex: ['left', 'right'],
    RetroControllerType: ['none', 'joypad', 'mouse', 'keyboard', 'lightgun', 'analog', 'pointer', 'type-mask'],
    RetroJoypadId: ['b', 'y', 'select', 'start', 'up', 'down', 'left', 'right', 'a', 'x', 'l', 'r', 'l2', 'r2', 'l3', 'r3'],
    RetroLightgunId: ['x', 'y', 'trigger', 'cursor', 'turbo', 'pause', 'start'],
    RetroMouseId: ['x', 'y', 'left', 'right', 'wheelup', 'wheeldown', 'middle', 'horiz-wheelup', 'horiz-wheeldown', 'button-4', 'button-5'],
    RetroPointerId: ['x', 'y', 'pressed'],
    RetroRumbleEffect: ['strong', 'weak'],
    RetroVideoFilter: ['smooth', 'sharp', 'crt'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
