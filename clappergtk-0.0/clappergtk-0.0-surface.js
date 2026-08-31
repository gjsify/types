// The widget vocabulary of ClapperGtk-0.0 as runtime data.
//
// GENERATED — do not edit. Provenance: ClapperGtk-0.0 — library 0.10.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'ClapperGtk-0.0 — library 0.10.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    ClapperGtkAudio: ['child'],
    ClapperGtkAv: ['auto-inhibit'],
    ClapperGtkContainer: ['adaptive-height', 'adaptive-width', 'height-target', 'width-target'],
    ClapperGtkExtraMenuButton: ['can-open-subtitles', 'speed-visible', 'volume-visible'],
    ClapperGtkLeadContainer: ['blocked-actions', 'leading'],
    ClapperGtkSeekBar: ['reveal-labels', 'seek-method'],
    ClapperGtkSimpleControls: ['fullscreenable', 'seek-method'],
    ClapperGtkTitleHeader: ['fallback-to-uri'],
    ClapperGtkTitleLabel: ['fallback-to-uri', 'media-item'],
    ClapperGtkVideo: ['fade-delay', 'touch-fade-delay'],
};

export const OWN_SIGNALS = {
    ClapperGtkContainer: ['adapt'],
    ClapperGtkExtraMenuButton: ['open-subtitles'],
    ClapperGtkVideo: ['seek-request', 'toggle-fullscreen'],
};

export const DECLS = {
    ClapperGtkAudio: ['ClapperGtkAudio', 'ClapperGtkAv', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkAv: ['ClapperGtkAv', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkBillboard: ['ClapperGtkBillboard', 'ClapperGtkContainer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkContainer: ['ClapperGtkContainer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkExtraMenuButton: ['ClapperGtkExtraMenuButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkLeadContainer: ['ClapperGtkLeadContainer', 'ClapperGtkContainer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkNextItemButton: ['ClapperGtkNextItemButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkPreviousItemButton: ['ClapperGtkPreviousItemButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkSeekBar: ['ClapperGtkSeekBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkSimpleControls: ['ClapperGtkSimpleControls', 'ClapperGtkContainer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkTitleHeader: ['ClapperGtkTitleHeader', 'ClapperGtkLeadContainer', 'ClapperGtkContainer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkTitleLabel: ['ClapperGtkTitleLabel', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkToggleFullscreenButton: ['ClapperGtkToggleFullscreenButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkTogglePlayButton: ['ClapperGtkTogglePlayButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    ClapperGtkVideo: ['ClapperGtkVideo', 'ClapperGtkAv', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    ClapperPlayerSeekMethod: ['accurate', 'normal', 'fast'],
};

export const SLOT_CANDIDATES = {
    ClapperGtkAudio: {
        'child': 'set_child',
    },
    ClapperGtkContainer: {
        'child': 'set_child',
    },
    ClapperGtkVideo: {
        'fading-overlay': 'add_fading_overlay',
        'overlay': 'add_overlay',
    },
};

export const SINCE = {};
