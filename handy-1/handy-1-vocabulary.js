// The widget vocabulary of Handy-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Handy-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Handy',
    version: '1',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    HdyActionRow: ['activatable-widget', 'icon-name', 'subtitle', 'subtitle-lines', 'title-lines', 'use-underline'],
    HdyAvatar: ['icon-name', 'loadable-icon', 'show-initials', 'size', 'text'],
    HdyCarousel: ['allow-long-swipes', 'allow-mouse-drag', 'allow-scroll-wheel', 'animation-duration', 'interactive', 'reveal-duration', 'spacing'],
    HdyCarouselIndicatorDots: ['carousel'],
    HdyCarouselIndicatorLines: ['carousel'],
    HdyClamp: ['maximum-size', 'tightening-threshold'],
    HdyComboRow: ['selected-index', 'use-subtitle'],
    HdyDeck: ['can-swipe-back', 'can-swipe-forward', 'hhomogeneous', 'interpolate-size', 'transition-duration', 'transition-type', 'vhomogeneous', 'visible-child', 'visible-child-name'],
    HdyExpanderRow: ['enable-expansion', 'expanded', 'icon-name', 'show-enable-switch', 'subtitle', 'use-underline'],
    HdyFlap: ['content', 'flap', 'flap-position', 'fold-duration', 'fold-policy', 'locked', 'modal', 'reveal-duration', 'reveal-flap', 'separator', 'swipe-to-close', 'swipe-to-open', 'transition-type'],
    HdyHeaderBar: ['centering-policy', 'custom-title', 'decoration-layout', 'decoration-layout-set', 'has-subtitle', 'interpolate-size', 'show-close-button', 'spacing', 'subtitle', 'title', 'transition-duration'],
    HdyHeaderGroup: ['decorate-all'],
    HdyKeypad: ['column-spacing', 'end-action', 'entry', 'letters-visible', 'row-spacing', 'start-action', 'symbols-visible'],
    HdyLeaflet: ['can-swipe-back', 'can-swipe-forward', 'child-transition-duration', 'hhomogeneous-folded', 'hhomogeneous-unfolded', 'interpolate-size', 'mode-transition-duration', 'transition-type', 'vhomogeneous-folded', 'vhomogeneous-unfolded', 'visible-child', 'visible-child-name'],
    HdyPreferencesGroup: ['description', 'title', 'use-markup'],
    HdyPreferencesPage: ['icon-name', 'title'],
    HdyPreferencesRow: ['title', 'use-underline'],
    HdyPreferencesWindow: ['can-swipe-back', 'search-enabled'],
    HdySearchBar: ['search-mode-enabled', 'show-close-button'],
    HdySqueezer: ['homogeneous', 'interpolate-size', 'transition-duration', 'transition-type', 'xalign', 'yalign'],
    HdyStatusPage: ['description', 'icon-name', 'title'],
    HdyStyleManager: ['color-scheme', 'display'],
    HdySwipeTracker: ['allow-long-swipes', 'allow-mouse-drag', 'enabled', 'reversed', 'swipeable'],
    HdyTabBar: ['autohide', 'end-action-widget', 'expand-tabs', 'extra-drag-dest-targets', 'inverted', 'start-action-widget', 'view'],
    HdyTabPage: ['child', 'icon', 'indicator-activatable', 'indicator-icon', 'loading', 'needs-attention', 'parent', 'title', 'tooltip'],
    HdyTabView: ['default-icon', 'menu-model', 'selected-page', 'shortcut-widget'],
    HdyTitleBar: ['selection-mode'],
    HdyValueObject: ['value'],
    HdyViewSwitcher: ['narrow-ellipsize', 'policy', 'stack'],
    HdyViewSwitcherBar: ['policy', 'reveal', 'stack'],
    HdyViewSwitcherTitle: ['policy', 'stack', 'subtitle', 'title', 'view-switcher-enabled'],
};

export const OWN_SIGNALS = {
    HdyActionRow: ['activated'],
    HdyCarousel: ['page-changed'],
    HdyHeaderGroup: ['update-decoration-layouts'],
    HdySwipeTracker: ['begin-swipe', 'end-swipe', 'update-swipe'],
    HdySwipeable: ['child-switched'],
    HdyTabBar: ['extra-drag-data-received'],
    HdyTabView: ['close-page', 'create-window', 'indicator-activated', 'page-attached', 'page-detached', 'page-reordered', 'setup-menu'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    HdyActionRow: ['HdyActionRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyApplicationWindow: ['HdyApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyAvatar: ['HdyAvatar', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    HdyCarousel: ['HdyCarousel', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyCarouselIndicatorDots: ['HdyCarouselIndicatorDots', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyCarouselIndicatorLines: ['HdyCarouselIndicatorLines', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyClamp: ['HdyClamp', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyComboRow: ['HdyComboRow', 'HdyActionRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyDeck: ['HdyDeck', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyEnumValueObject: ['HdyEnumValueObject'],
    HdyExpanderRow: ['HdyExpanderRow', 'HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyFlap: ['HdyFlap', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyHeaderBar: ['HdyHeaderBar', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyHeaderGroup: ['HdyHeaderGroup', 'GtkBuildable'],
    HdyHeaderGroupChild: ['HdyHeaderGroupChild'],
    HdyKeypad: ['HdyKeypad', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyLeaflet: ['HdyLeaflet', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'HdySwipeable'],
    HdyPreferencesGroup: ['HdyPreferencesGroup', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyPreferencesPage: ['HdyPreferencesPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyPreferencesRow: ['HdyPreferencesRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    HdyPreferencesWindow: ['HdyPreferencesWindow', 'HdyWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdySearchBar: ['HdySearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdySqueezer: ['HdySqueezer', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    HdyStatusPage: ['HdyStatusPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyStyleManager: ['HdyStyleManager'],
    HdySwipeGroup: ['HdySwipeGroup', 'GtkBuildable'],
    HdySwipeTracker: ['HdySwipeTracker', 'GtkOrientable'],
    HdyTabBar: ['HdyTabBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyTabPage: ['HdyTabPage'],
    HdyTabView: ['HdyTabView', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyTitleBar: ['HdyTitleBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyValueObject: ['HdyValueObject'],
    HdyViewSwitcher: ['HdyViewSwitcher', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyViewSwitcherBar: ['HdyViewSwitcherBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyViewSwitcherTitle: ['HdyViewSwitcherTitle', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyWindow: ['HdyWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    HdyWindowHandle: ['HdyWindowHandle', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    HdyCenteringPolicy: ['loose', 'strict'],
    HdyColorScheme: ['default', 'force-light', 'prefer-light', 'prefer-dark', 'force-dark'],
    HdyDeckTransitionType: ['over', 'under', 'slide'],
    HdyFlapFoldPolicy: ['never', 'always', 'auto'],
    HdyFlapTransitionType: ['over', 'under', 'slide'],
    HdyHeaderGroupChildType: ['header-bar', 'gtk-header-bar', 'header-group'],
    HdyLeafletTransitionType: ['over', 'under', 'slide'],
    HdyNavigationDirection: ['back', 'forward'],
    HdySqueezerTransitionType: ['none', 'crossfade'],
    HdyViewSwitcherPolicy: ['auto', 'narrow', 'wide'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
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
    'HdyCenteringPolicy.loose': 0,
    'HdyCenteringPolicy.strict': 1,
    'HdyColorScheme.default': 0,
    'HdyColorScheme.force-dark': 4,
    'HdyColorScheme.force-light': 1,
    'HdyColorScheme.prefer-dark': 3,
    'HdyColorScheme.prefer-light': 2,
    'HdyDeckTransitionType.over': 0,
    'HdyDeckTransitionType.slide': 2,
    'HdyDeckTransitionType.under': 1,
    'HdyFlapFoldPolicy.always': 1,
    'HdyFlapFoldPolicy.auto': 2,
    'HdyFlapFoldPolicy.never': 0,
    'HdyFlapTransitionType.over': 0,
    'HdyFlapTransitionType.slide': 2,
    'HdyFlapTransitionType.under': 1,
    'HdyHeaderGroupChildType.gtk-header-bar': 1,
    'HdyHeaderGroupChildType.header-bar': 0,
    'HdyHeaderGroupChildType.header-group': 2,
    'HdyLeafletTransitionType.over': 0,
    'HdyLeafletTransitionType.slide': 2,
    'HdyLeafletTransitionType.under': 1,
    'HdyNavigationDirection.back': 0,
    'HdyNavigationDirection.forward': 1,
    'HdySqueezerTransitionType.crossfade': 1,
    'HdySqueezerTransitionType.none': 0,
    'HdyViewSwitcherPolicy.auto': 0,
    'HdyViewSwitcherPolicy.narrow': 1,
    'HdyViewSwitcherPolicy.wide': 2,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
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
    'HdyDeck.transition-type': 'HdyDeckTransitionType',
    'HdyFlap.flap-position': 'GtkPackType',
    'HdyFlap.fold-policy': 'HdyFlapFoldPolicy',
    'HdyFlap.transition-type': 'HdyFlapTransitionType',
    'HdyHeaderBar.centering-policy': 'HdyCenteringPolicy',
    'HdyLeaflet.transition-type': 'HdyLeafletTransitionType',
    'HdySqueezer.transition-type': 'HdySqueezerTransitionType',
    'HdyStyleManager.color-scheme': 'HdyColorScheme',
    'HdyViewSwitcher.narrow-ellipsize': 'PangoEllipsizeMode',
    'HdyViewSwitcher.policy': 'HdyViewSwitcherPolicy',
    'HdyViewSwitcherBar.policy': 'HdyViewSwitcherPolicy',
    'HdyViewSwitcherTitle.policy': 'HdyViewSwitcherPolicy',
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
    HdyActionRow: {
        'activatable': 'set_activatable_widget',
        'prefix': 'add_prefix',
    },
    HdyCarouselIndicatorDots: {
        'carousel': 'set_carousel',
    },
    HdyCarouselIndicatorLines: {
        'carousel': 'set_carousel',
    },
    HdyDeck: {
        'visible-child': 'set_visible_child',
    },
    HdyExpanderRow: {
        'action': 'add_action',
        'prefix': 'add_prefix',
    },
    HdyFlap: {
        'content': 'set_content',
        'flap': 'set_flap',
        'separator': 'set_separator',
    },
    HdyHeaderBar: {
        'custom-title': 'set_custom_title',
        'end': 'pack_end',
        'start': 'pack_start',
    },
    HdyKeypad: {
        'end-action': 'set_end_action',
        'entry': 'set_entry',
        'start-action': 'set_start_action',
    },
    HdyLeaflet: {
        'visible-child': 'set_visible_child',
    },
    HdyTabBar: {
        'end-action': 'set_end_action_widget',
        'start-action': 'set_start_action_widget',
        'view': 'set_view',
    },
    HdyTabView: {
        'shortcut': 'set_shortcut_widget',
    },
    HdyViewSwitcher: {
        'stack': 'set_stack',
    },
    HdyViewSwitcherBar: {
        'stack': 'set_stack',
    },
    HdyViewSwitcherTitle: {
        'stack': 'set_stack',
    },
};

export const SINCE = {
    'HdyActionRow': '1.0',
    'HdyActionRow.activatable-widget': '1.0',
    'HdyActionRow.icon-name': '1.0',
    'HdyActionRow.subtitle': '1.0',
    'HdyActionRow.subtitle-lines': '1.2',
    'HdyActionRow.title-lines': '1.2',
    'HdyActionRow.use-underline': '1.0',
    'HdyActionRow::activated': '1.0',
    'HdyApplicationWindow': '1.0',
    'HdyAvatar': '1.0',
    'HdyAvatar.icon-name': '1.0',
    'HdyAvatar.loadable-icon': '1.2',
    'HdyAvatar.show-initials': '1.0',
    'HdyAvatar.size': '1.0',
    'HdyAvatar.text': '1.0',
    'HdyCarousel': '1.0',
    'HdyCarousel.allow-long-swipes': '1.2',
    'HdyCarousel.allow-mouse-drag': '1.0',
    'HdyCarousel.allow-scroll-wheel': '1.4',
    'HdyCarousel.animation-duration': '1.0',
    'HdyCarousel.interactive': '1.0',
    'HdyCarousel.reveal-duration': '1.0',
    'HdyCarousel.spacing': '1.0',
    'HdyCarousel::page-changed': '1.0',
    'HdyCarouselIndicatorDots': '1.0',
    'HdyCarouselIndicatorDots.carousel': '1.0',
    'HdyCarouselIndicatorLines': '1.0',
    'HdyCarouselIndicatorLines.carousel': '1.0',
    'HdyClamp': '1.0',
    'HdyClamp.maximum-size': '1.0',
    'HdyClamp.tightening-threshold': '1.0',
    'HdyComboRow': '1.0',
    'HdyComboRow.selected-index': '1.0',
    'HdyComboRow.use-subtitle': '1.0',
    'HdyDeck': '1.0',
    'HdyDeck.can-swipe-back': '1.0',
    'HdyDeck.can-swipe-forward': '1.0',
    'HdyDeck.hhomogeneous': '1.0',
    'HdyDeck.interpolate-size': '1.0',
    'HdyDeck.transition-duration': '1.0',
    'HdyDeck.transition-type': '1.0',
    'HdyDeck.vhomogeneous': '1.0',
    'HdyDeck.visible-child': '1.0',
    'HdyDeck.visible-child-name': '1.0',
    'HdyEnumValueObject': '1.0',
    'HdyExpanderRow': '1.0',
    'HdyExpanderRow.enable-expansion': '1.0',
    'HdyExpanderRow.expanded': '1.0',
    'HdyExpanderRow.icon-name': '1.0',
    'HdyExpanderRow.show-enable-switch': '1.0',
    'HdyExpanderRow.subtitle': '1.0',
    'HdyExpanderRow.use-underline': '1.0',
    'HdyFlap': '1.2',
    'HdyFlap.content': '1.2',
    'HdyFlap.flap': '1.2',
    'HdyFlap.flap-position': '1.2',
    'HdyFlap.fold-duration': '1.2',
    'HdyFlap.fold-policy': '1.2',
    'HdyFlap.locked': '1.2',
    'HdyFlap.modal': '1.2',
    'HdyFlap.reveal-duration': '1.2',
    'HdyFlap.reveal-flap': '1.2',
    'HdyFlap.separator': '1.2',
    'HdyFlap.swipe-to-close': '1.2',
    'HdyFlap.swipe-to-open': '1.2',
    'HdyFlap.transition-type': '1.2',
    'HdyHeaderBar': '1.0',
    'HdyHeaderBar.centering-policy': '1.0',
    'HdyHeaderBar.custom-title': '1.0',
    'HdyHeaderBar.decoration-layout': '1.0',
    'HdyHeaderBar.decoration-layout-set': '1.0',
    'HdyHeaderBar.has-subtitle': '1.0',
    'HdyHeaderBar.interpolate-size': '1.0',
    'HdyHeaderBar.show-close-button': '1.0',
    'HdyHeaderBar.spacing': '1.0',
    'HdyHeaderBar.subtitle': '1.0',
    'HdyHeaderBar.title': '1.0',
    'HdyHeaderBar.transition-duration': '1.0',
    'HdyHeaderGroup': '1.0',
    'HdyHeaderGroup.decorate-all': '1.0',
    'HdyHeaderGroup::update-decoration-layouts': '1.0',
    'HdyHeaderGroupChild': '1.0',
    'HdyKeypad': '1.0',
    'HdyKeypad.column-spacing': '1.0',
    'HdyKeypad.end-action': '1.0',
    'HdyKeypad.entry': '1.0',
    'HdyKeypad.letters-visible': '1.0',
    'HdyKeypad.row-spacing': '1.0',
    'HdyKeypad.start-action': '1.0',
    'HdyKeypad.symbols-visible': '1.0',
    'HdyLeaflet': '1.0',
    'HdyLeaflet.can-swipe-back': '1.0',
    'HdyLeaflet.can-swipe-forward': '1.0',
    'HdyLeaflet.child-transition-duration': '1.0',
    'HdyLeaflet.hhomogeneous-folded': '1.0',
    'HdyLeaflet.hhomogeneous-unfolded': '1.0',
    'HdyLeaflet.interpolate-size': '1.0',
    'HdyLeaflet.mode-transition-duration': '1.0',
    'HdyLeaflet.transition-type': '1.0',
    'HdyLeaflet.vhomogeneous-folded': '1.0',
    'HdyLeaflet.vhomogeneous-unfolded': '1.0',
    'HdyLeaflet.visible-child': '1.0',
    'HdyLeaflet.visible-child-name': '1.0',
    'HdyPreferencesGroup': '1.0',
    'HdyPreferencesGroup.description': '1.0',
    'HdyPreferencesGroup.title': '1.0',
    'HdyPreferencesGroup.use-markup': '1.4',
    'HdyPreferencesPage': '1.0',
    'HdyPreferencesPage.icon-name': '1.0',
    'HdyPreferencesPage.title': '1.0',
    'HdyPreferencesRow': '1.0',
    'HdyPreferencesRow.title': '1.0',
    'HdyPreferencesRow.use-underline': '1.0',
    'HdyPreferencesWindow': '1.0',
    'HdyPreferencesWindow.can-swipe-back': '1.0',
    'HdyPreferencesWindow.search-enabled': '1.0',
    'HdySearchBar': '1.0',
    'HdySearchBar.search-mode-enabled': '1.0',
    'HdySearchBar.show-close-button': '1.0',
    'HdySqueezer': '1.0',
    'HdySqueezer.homogeneous': '1.0',
    'HdySqueezer.interpolate-size': '1.0',
    'HdySqueezer.transition-duration': '1.0',
    'HdySqueezer.transition-type': '1.0',
    'HdySqueezer.xalign': '1.0',
    'HdySqueezer.yalign': '1.0',
    'HdyStatusPage': '1.2',
    'HdyStatusPage.description': '1.2',
    'HdyStatusPage.icon-name': '1.2',
    'HdyStatusPage.title': '1.2',
    'HdyStyleManager': '1.6',
    'HdyStyleManager.color-scheme': '1.6',
    'HdyStyleManager.display': '1.6',
    'HdySwipeGroup': '1.0',
    'HdySwipeTracker': '1.0',
    'HdySwipeTracker.allow-long-swipes': '1.2',
    'HdySwipeTracker.allow-mouse-drag': '1.0',
    'HdySwipeTracker.enabled': '1.0',
    'HdySwipeTracker.reversed': '1.0',
    'HdySwipeTracker.swipeable': '1.0',
    'HdySwipeTracker::begin-swipe': '1.0',
    'HdySwipeTracker::end-swipe': '1.0',
    'HdySwipeTracker::update-swipe': '1.0',
    'HdySwipeable': '1.0',
    'HdySwipeable::child-switched': '1.0',
    'HdyTabBar': '1.2',
    'HdyTabBar.autohide': '1.2',
    'HdyTabBar.end-action-widget': '1.2',
    'HdyTabBar.expand-tabs': '1.2',
    'HdyTabBar.extra-drag-dest-targets': '1.2',
    'HdyTabBar.inverted': '1.2',
    'HdyTabBar.start-action-widget': '1.2',
    'HdyTabBar.view': '1.2',
    'HdyTabBar::extra-drag-data-received': '1.2',
    'HdyTabPage': '1.2',
    'HdyTabPage.child': '1.2',
    'HdyTabPage.icon': '1.2',
    'HdyTabPage.indicator-activatable': '1.2',
    'HdyTabPage.indicator-icon': '1.2',
    'HdyTabPage.loading': '1.2',
    'HdyTabPage.needs-attention': '1.2',
    'HdyTabPage.parent': '1.2',
    'HdyTabPage.title': '1.2',
    'HdyTabPage.tooltip': '1.2',
    'HdyTabView': '1.2',
    'HdyTabView.default-icon': '1.2',
    'HdyTabView.menu-model': '1.2',
    'HdyTabView.selected-page': '1.2',
    'HdyTabView.shortcut-widget': '1.2',
    'HdyTabView::close-page': '1.2',
    'HdyTabView::create-window': '1.2',
    'HdyTabView::indicator-activated': '1.2',
    'HdyTabView::page-attached': '1.2',
    'HdyTabView::page-detached': '1.2',
    'HdyTabView::page-reordered': '1.2',
    'HdyTabView::setup-menu': '1.2',
    'HdyTitleBar': '1.0',
    'HdyTitleBar.selection-mode': '1.0',
    'HdyValueObject': '1.0',
    'HdyValueObject.value': '1.0',
    'HdyViewSwitcher': '1.0',
    'HdyViewSwitcher.narrow-ellipsize': '1.0',
    'HdyViewSwitcher.policy': '1.0',
    'HdyViewSwitcher.stack': '1.0',
    'HdyViewSwitcherBar': '1.0',
    'HdyViewSwitcherBar.policy': '1.0',
    'HdyViewSwitcherBar.reveal': '1.0',
    'HdyViewSwitcherBar.stack': '1.0',
    'HdyViewSwitcherTitle': '1.0',
    'HdyViewSwitcherTitle.policy': '1.0',
    'HdyViewSwitcherTitle.stack': '1.0',
    'HdyViewSwitcherTitle.subtitle': '1.0',
    'HdyViewSwitcherTitle.title': '1.0',
    'HdyViewSwitcherTitle.view-switcher-enabled': '1.0',
    'HdyWindow': '1.0',
    'HdyWindowHandle': '1.0',
};
