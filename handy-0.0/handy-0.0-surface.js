// The widget vocabulary of Handy-0.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Handy-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Handy-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    HdyActionRow: ['activatable-widget', 'icon-name', 'subtitle', 'title', 'use-underline'],
    HdyArrows: ['count', 'direction', 'duration'],
    HdyColumn: ['linear-growth-width', 'maximum-width'],
    HdyComboRow: ['selected-index', 'use-subtitle'],
    HdyDialer: ['column-spacing', 'number', 'relief', 'row-spacing', 'show-action-buttons'],
    HdyDialerButton: ['symbols'],
    HdyDialerCycleButton: ['cycle-timeout'],
    HdyExpanderRow: ['enable-expansion', 'expanded', 'show-enable-switch'],
    HdyHeaderBar: ['centering-policy', 'custom-title', 'decoration-layout', 'decoration-layout-set', 'has-subtitle', 'interpolate-size', 'show-close-button', 'spacing', 'subtitle', 'title', 'transition-duration'],
    HdyKeypad: ['entry', 'left-action', 'only-digits', 'right-action', 'show-symbols'],
    HdyLeaflet: ['can-swipe-back', 'can-swipe-forward', 'child-transition-duration', 'child-transition-type', 'hhomogeneous-folded', 'hhomogeneous-unfolded', 'interpolate-size', 'mode-transition-duration', 'mode-transition-type', 'transition-type', 'vhomogeneous-folded', 'vhomogeneous-unfolded', 'visible-child', 'visible-child-name'],
    HdyPaginator: ['allow-mouse-drag', 'animation-duration', 'center-content', 'indicator-spacing', 'indicator-style', 'interactive', 'spacing'],
    HdyPreferencesGroup: ['description', 'title'],
    HdyPreferencesPage: ['icon-name', 'title'],
    HdyPreferencesRow: ['title', 'use-underline'],
    HdySearchBar: ['search-mode-enabled', 'show-close-button'],
    HdySqueezer: ['homogeneous', 'interpolate-size', 'transition-duration', 'transition-type'],
    HdyTitleBar: ['selection-mode'],
    HdyViewSwitcher: ['icon-size', 'narrow-ellipsize', 'policy', 'stack'],
    HdyViewSwitcherBar: ['icon-size', 'policy', 'reveal', 'stack'],
};

export const OWN_SIGNALS = {
    HdyDialer: ['deleted', 'submitted', 'symbol-clicked'],
    HdyDialerCycleButton: ['cycle-end', 'cycle-start'],
    HdyPaginator: ['page-changed'],
};

export const DECLS = {
    HdyActionRow: ['HdyActionRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyArrows: ['HdyArrows', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    HdyColumn: ['HdyColumn', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyComboRow: ['HdyComboRow', 'HdyActionRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyDialer: ['HdyDialer', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyDialerButton: ['HdyDialerButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    HdyDialerCycleButton: ['HdyDialerCycleButton', 'HdyDialerButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    HdyDialog: ['HdyDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyExpanderRow: ['HdyExpanderRow', 'HdyActionRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyHeaderBar: ['HdyHeaderBar', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyKeypad: ['HdyKeypad', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyLeaflet: ['HdyLeaflet', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyPaginator: ['HdyPaginator', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyPreferencesGroup: ['HdyPreferencesGroup', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyPreferencesPage: ['HdyPreferencesPage', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyPreferencesRow: ['HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyPreferencesWindow: ['HdyPreferencesWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdySearchBar: ['HdySearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdySqueezer: ['HdySqueezer', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyTitleBar: ['HdyTitleBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyViewSwitcher: ['HdyViewSwitcher', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyViewSwitcherBar: ['HdyViewSwitcherBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    HdyArrowsDirection: ['up', 'down', 'left', 'right'],
    HdyCenteringPolicy: ['loose', 'strict'],
    HdyFold: ['unfolded', 'folded'],
    HdyLeafletChildTransitionType: ['none', 'crossfade', 'slide', 'over', 'under'],
    HdyLeafletModeTransitionType: ['none', 'slide'],
    HdyLeafletTransitionType: ['none', 'slide', 'over', 'under'],
    HdyPaginatorIndicatorStyle: ['none', 'dots', 'lines'],
    HdySqueezerTransitionType: ['none', 'crossfade'],
    HdyViewSwitcherPolicy: ['auto', 'narrow', 'wide'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

export const SLOT_CANDIDATES = {
    HdyActionRow: {
        'action': 'add_action',
        'activatable': 'set_activatable_widget',
        'prefix': 'add_prefix',
    },
    HdyHeaderBar: {
        'custom-title': 'set_custom_title',
        'end': 'pack_end',
        'start': 'pack_start',
    },
    HdyKeypad: {
        'entry': 'set_entry',
        'left-action': 'set_left_action',
        'right-action': 'set_right_action',
    },
    HdyLeaflet: {
        'visible-child': 'set_visible_child',
    },
    HdyViewSwitcher: {
        'stack': 'set_stack',
    },
    HdyViewSwitcherBar: {
        'stack': 'set_stack',
    },
};

export const SINCE = {
    'HdyActionRow.activatable-widget': '0.0.7',
    'HdyActionRow.icon-name': '0.0.6',
    'HdyActionRow.subtitle': '0.0.6',
    'HdyActionRow.title': '0.0.6',
    'HdyActionRow.use-underline': '0.0.6',
    'HdyComboRow.selected-index': '0.0.7',
    'HdyComboRow.use-subtitle': '0.0.10',
    'HdyHeaderBar.decoration-layout': '0.0.10',
    'HdyHeaderBar.decoration-layout-set': '0.0.10',
    'HdyHeaderBar.has-subtitle': '0.0.10',
    'HdyHeaderBar.show-close-button': '0.0.10',
    'HdyLeaflet.can-swipe-back': '0.0.12',
    'HdyLeaflet.can-swipe-forward': '0.0.12',
    'HdyLeaflet.transition-type': '0.0.12',
    'HdyPaginator.allow-mouse-drag': '0.0.12',
    'HdyPaginator.animation-duration': '0.0.11',
    'HdyPaginator.center-content': '0.0.11',
    'HdyPaginator.indicator-spacing': '0.0.11',
    'HdyPaginator.indicator-style': '0.0.11',
    'HdyPaginator.interactive': '0.0.11',
    'HdyPaginator.spacing': '0.0.11',
    'HdyPreferencesGroup.description': '0.0.10',
    'HdyPreferencesGroup.title': '0.0.10',
    'HdyPreferencesPage.icon-name': '0.0.10',
    'HdyPreferencesPage.title': '0.0.10',
    'HdyPreferencesRow.title': '0.0.10',
    'HdyPreferencesRow.use-underline': '0.0.10',
    'HdyViewSwitcher.icon-size': '0.0.10',
    'HdyViewSwitcher.narrow-ellipsize': '0.0.10',
    'HdyViewSwitcher.policy': '0.0.10',
    'HdyViewSwitcher.stack': '0.0.10',
    'HdyViewSwitcherBar.icon-size': '0.0.10',
    'HdyViewSwitcherBar.policy': '0.0.10',
    'HdyViewSwitcherBar.reveal': '0.0.10',
    'HdyViewSwitcherBar.stack': '0.0.10',
};
