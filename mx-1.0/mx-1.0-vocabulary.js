// The widget vocabulary of Mx-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Mx-1.0 — library 1.4.7 — dropped empty base(s): Atk.ImplementorIface — inlined base(s) their owner's vocabulary does not emit: Clutter.ChildMeta
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Mx',
    version: '1.0',
    libraryVersion: '1.4.7',
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: ['Clutter.ChildMeta'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Mx'],
    requiredVocabularies: ['@girs/clutter-1.0/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    ClutterChildMeta: ['actor', 'container'],
    MxAction: ['active', 'display-name', 'icon'],
    MxActorManager: ['stage', 'time-slice'],
    MxAdjustment: ['clamp-value', 'elastic', 'lower', 'page-increment', 'page-size', 'step-increment', 'upper', 'value'],
    MxApplication: ['application-name', 'flags'],
    MxBin: ['child', 'x-align', 'x-fill', 'y-align', 'y-fill'],
    MxBoxLayout: ['enable-animations', 'orientation', 'scroll-to-focused', 'spacing'],
    MxBoxLayoutChild: ['expand', 'x-align', 'x-fill', 'y-align', 'y-fill'],
    MxButton: ['action', 'icon-name', 'icon-position', 'icon-size', 'icon-visible', 'is-toggle', 'label', 'label-visible', 'toggled'],
    MxButtonGroup: ['active-button', 'allow-no-active'],
    MxComboBox: ['active-icon-name', 'active-text', 'index'],
    MxDeformBowTie: ['flip-back', 'period'],
    MxDeformPageTurn: ['angle', 'period', 'radius'],
    MxDeformTexture: ['back', 'front', 'tiles-x', 'tiles-y'],
    MxDeformWaves: ['amplitude', 'angle', 'period', 'radius'],
    MxEntry: ['hint-text', 'icon-highlight-suffix', 'password-char', 'primary-icon-tooltip-text', 'secondary-icon-tooltip-text', 'text'],
    MxExpander: ['expanded', 'label'],
    MxFadeEffect: ['border-bottom', 'border-left', 'border-right', 'border-top', 'bounds-height', 'bounds-width', 'bounds-x', 'bounds-y', 'color', 'freeze-update'],
    MxGrid: ['child-x-align', 'child-y-align', 'column-spacing', 'homogenous-columns', 'homogenous-rows', 'line-alignment', 'max-stride', 'orientation', 'row-spacing'],
    MxIcon: ['icon-name', 'icon-size'],
    MxIconTheme: ['theme-name'],
    MxImage: ['allow-upscale', 'image-rotation', 'load-async', 'scale-height-threshold', 'scale-mode', 'scale-width-threshold', 'transition-duration'],
    MxItemView: ['factory', 'item-type', 'model'],
    MxKineticScrollView: ['acceleration-factor', 'clamp-duration', 'clamp-mode', 'clamp-to-center', 'deceleration', 'mouse-button', 'overshoot', 'scroll-policy', 'use-captured'],
    MxLabel: ['fade-out', 'line-wrap', 'show-tooltip', 'text', 'use-markup', 'x-align', 'y-align'],
    MxListView: ['factory', 'item-type', 'model'],
    MxNotebook: ['current-page', 'enable-gestures'],
    MxOffscreen: ['accumulation-enabled', 'auto-update', 'child', 'pick-child', 'redirect-enabled'],
    MxPathBar: ['clear-on-change', 'editable'],
    MxProgressBar: ['progress'],
    MxScrollBar: ['adjustment', 'orientation'],
    MxScrollView: ['enable-gestures', 'enable-mouse-scrolling', 'scroll-policy'],
    MxScrollable: ['horizontal-adjustment', 'vertical-adjustment'],
    MxSettings: ['drag-threshold', 'font-name', 'icon-theme', 'long-press-timeout', 'small-screen'],
    MxSlider: ['buffer-value', 'value'],
    MxSpinner: ['animating'],
    MxStackChild: ['crop', 'fit', 'x-align', 'x-fill', 'y-align', 'y-fill'],
    MxStylable: ['style', 'style-class', 'style-pseudo-class'],
    MxTable: ['column-spacing', 'row-spacing'],
    MxTableChild: ['column', 'column-span', 'row', 'row-span', 'x-align', 'x-expand', 'x-fill', 'y-align', 'y-expand', 'y-fill'],
    MxTextureFrame: ['bottom', 'left', 'parent-texture', 'right', 'top'],
    MxToggle: ['active'],
    MxToolbar: ['has-close-button'],
    MxTooltip: ['text', 'tip-area'],
    MxViewport: ['sync-adjustments', 'x-origin', 'y-origin', 'z-origin'],
    MxWidget: ['disabled', 'menu', 'tooltip-delay', 'tooltip-text'],
    MxWindow: ['child', 'clutter-stage', 'fullscreen', 'has-toolbar', 'icon-cogl-texture', 'icon-name', 'small-screen', 'title', 'toolbar', 'window-rotation'],
};

export const OWN_SIGNALS = {
    MxAction: ['activate', 'activated'],
    MxActorManager: ['actor-added', 'actor-created', 'actor-finished', 'actor-removed', 'operation-cancelled', 'operation-completed', 'operation-failed'],
    MxAdjustment: ['changed', 'interpolation-completed'],
    MxApplication: ['actions-changed'],
    MxButton: ['clicked'],
    MxEntry: ['primary-icon-clicked', 'secondary-icon-clicked'],
    MxExpander: ['expand-complete'],
    MxImage: ['image-load-error', 'image-loaded'],
    MxMenu: ['action-activated'],
    MxScrollBar: ['scroll-start', 'scroll-stop'],
    MxSpinner: ['looped'],
    MxStylable: ['style-changed'],
    MxStyle: ['changed'],
    MxToolbar: ['close-button-clicked'],
    MxWidget: ['long-press'],
    MxWindow: ['destroy'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    MxAction: ['MxAction', 'GInitiallyUnowned', 'GObject', 'GAction'],
    MxActorManager: ['MxActorManager', 'GObject'],
    MxAdjustment: ['MxAdjustment', 'GObject'],
    MxApplication: ['MxApplication', 'GObject'],
    MxBoxLayout: ['MxBoxLayout', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxBoxLayoutChild: ['MxBoxLayoutChild', 'ClutterChildMeta', 'GObject'],
    MxButton: ['MxButton', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxButtonGroup: ['MxButtonGroup', 'GInitiallyUnowned', 'GObject'],
    MxClipboard: ['MxClipboard', 'GObject'],
    MxComboBox: ['MxComboBox', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxDeformBowTie: ['MxDeformBowTie', 'MxDeformTexture', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxDeformPageTurn: ['MxDeformPageTurn', 'MxDeformTexture', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxDeformWaves: ['MxDeformWaves', 'MxDeformTexture', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxDialog: ['MxDialog', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxEntry: ['MxEntry', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxExpander: ['MxExpander', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxFadeEffect: ['MxFadeEffect', 'ClutterOffscreenEffect', 'ClutterEffect', 'ClutterActorMeta', 'GInitiallyUnowned', 'GObject'],
    MxFocusManager: ['MxFocusManager', 'GObject'],
    MxFrame: ['MxFrame', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxGrid: ['MxGrid', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxIcon: ['MxIcon', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxIconTheme: ['MxIconTheme', 'GObject'],
    MxImage: ['MxImage', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxItemView: ['MxItemView', 'MxGrid', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxKineticScrollView: ['MxKineticScrollView', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxLabel: ['MxLabel', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxListView: ['MxListView', 'MxBoxLayout', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxMenu: ['MxMenu', 'MxFloatingWidget', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxNotebook: ['MxNotebook', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxOffscreen: ['MxOffscreen', 'ClutterTexture', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable'],
    MxPathBar: ['MxPathBar', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxProgressBar: ['MxProgressBar', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxScrollBar: ['MxScrollBar', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxScrollView: ['MxScrollView', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxSettings: ['MxSettings', 'GObject'],
    MxSlider: ['MxSlider', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxSpinner: ['MxSpinner', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxStack: ['MxStack', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxStackChild: ['MxStackChild', 'ClutterChildMeta', 'GObject'],
    MxStyle: ['MxStyle', 'GObject'],
    MxTable: ['MxTable', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxTableChild: ['MxTableChild', 'ClutterChildMeta', 'GObject'],
    MxTextureCache: ['MxTextureCache', 'GObject'],
    MxTextureFrame: ['MxTextureFrame', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MxToggle: ['MxToggle', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxToolbar: ['MxToolbar', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxStylable'],
    MxTooltip: ['MxTooltip', 'MxFloatingWidget', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxStylable'],
    MxViewport: ['MxViewport', 'MxBin', 'MxWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'MxFocusable', 'MxScrollable', 'MxStylable'],
    MxWindow: ['MxWindow', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    MxActorManagerError: ['container-destroyed', 'actor-destroyed', 'creation-failed', 'unknown-operation'],
    MxAlign: ['start', 'middle', 'end'],
    MxDragAxis: ['none', 'x', 'y'],
    MxFocusDirection: ['out', 'up', 'down', 'left', 'right', 'next', 'previous'],
    MxFocusHint: ['first', 'last', 'prior', 'from-above', 'from-below', 'from-left', 'from-right'],
    MxFontWeight: ['normal', 'bold', 'bolder', 'lighter'],
    MxImageScaleMode: ['none', 'fit', 'crop'],
    MxKineticScrollViewState: ['idle', 'panning', 'scrolling', 'clamping'],
    MxLongPressAction: ['query', 'action', 'cancel'],
    MxOrientation: ['horizontal', 'vertical'],
    MxPosition: ['top', 'right', 'bottom', 'left'],
    MxScrollPolicy: ['none', 'horizontal', 'vertical', 'both'],
    MxStyleError: ['invalid-file'],
    MxTooltipAnimation: ['bounce', 'fade'],
    MxWindowRotation: ['0', '90', '180', '270'],
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
    'MxActorManagerError.actor-destroyed': 1,
    'MxActorManagerError.container-destroyed': 0,
    'MxActorManagerError.creation-failed': 2,
    'MxActorManagerError.unknown-operation': 3,
    'MxAlign.end': 2,
    'MxAlign.middle': 1,
    'MxAlign.start': 0,
    'MxDragAxis.none': 0,
    'MxDragAxis.x': 1,
    'MxDragAxis.y': 2,
    'MxFocusDirection.down': 2,
    'MxFocusDirection.left': 3,
    'MxFocusDirection.next': 5,
    'MxFocusDirection.out': 0,
    'MxFocusDirection.previous': 6,
    'MxFocusDirection.right': 4,
    'MxFocusDirection.up': 1,
    'MxFocusHint.first': 0,
    'MxFocusHint.from-above': 3,
    'MxFocusHint.from-below': 4,
    'MxFocusHint.from-left': 5,
    'MxFocusHint.from-right': 6,
    'MxFocusHint.last': 1,
    'MxFocusHint.prior': 2,
    'MxFontWeight.bold': 1,
    'MxFontWeight.bolder': 2,
    'MxFontWeight.lighter': 3,
    'MxFontWeight.normal': 0,
    'MxImageScaleMode.crop': 2,
    'MxImageScaleMode.fit': 1,
    'MxImageScaleMode.none': 0,
    'MxKineticScrollViewState.clamping': 3,
    'MxKineticScrollViewState.idle': 0,
    'MxKineticScrollViewState.panning': 1,
    'MxKineticScrollViewState.scrolling': 2,
    'MxLongPressAction.action': 1,
    'MxLongPressAction.cancel': 2,
    'MxLongPressAction.query': 0,
    'MxOrientation.horizontal': 0,
    'MxOrientation.vertical': 1,
    'MxPosition.bottom': 2,
    'MxPosition.left': 3,
    'MxPosition.right': 1,
    'MxPosition.top': 0,
    'MxScrollPolicy.both': 3,
    'MxScrollPolicy.horizontal': 1,
    'MxScrollPolicy.none': 0,
    'MxScrollPolicy.vertical': 2,
    'MxStyleError.invalid-file': 0,
    'MxTooltipAnimation.bounce': 0,
    'MxTooltipAnimation.fade': 1,
    'MxWindowRotation.0': 0,
    'MxWindowRotation.180': 2,
    'MxWindowRotation.270': 3,
    'MxWindowRotation.90': 1,
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
    'MxApplicationFlags.keep-alive': 4,
    'MxApplicationFlags.single-instance': 1,
    'MxStyleChangedFlags.force': 1,
    'MxStyleChangedFlags.invalidate-cache': 2,
    'MxStyleChangedFlags.none': 0,
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
    'MxBin.x-align': 'MxAlign',
    'MxBin.y-align': 'MxAlign',
    'MxBoxLayout.orientation': 'MxOrientation',
    'MxBoxLayoutChild.x-align': 'MxAlign',
    'MxBoxLayoutChild.y-align': 'MxAlign',
    'MxButton.icon-position': 'MxPosition',
    'MxGrid.child-x-align': 'MxAlign',
    'MxGrid.child-y-align': 'MxAlign',
    'MxGrid.line-alignment': 'MxAlign',
    'MxGrid.orientation': 'MxOrientation',
    'MxImage.scale-mode': 'MxImageScaleMode',
    'MxKineticScrollView.scroll-policy': 'MxScrollPolicy',
    'MxLabel.x-align': 'MxAlign',
    'MxLabel.y-align': 'MxAlign',
    'MxScrollBar.orientation': 'MxOrientation',
    'MxScrollView.scroll-policy': 'MxScrollPolicy',
    'MxStackChild.x-align': 'MxAlign',
    'MxStackChild.y-align': 'MxAlign',
    'MxTableChild.x-align': 'MxAlign',
    'MxTableChild.y-align': 'MxAlign',
    'MxWindow.window-rotation': 'MxWindowRotation',
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
    'ClutterChildMeta.actor': 'ClutterActor',
    'ClutterChildMeta.container': 'ClutterContainer',
    'MxAction.active': 'gboolean',
    'MxAction.display-name': 'gchararray',
    'MxAction.icon': 'gchararray',
    'MxActorManager.stage': 'ClutterStage',
    'MxActorManager.time-slice': 'guint',
    'MxAdjustment.clamp-value': 'gboolean',
    'MxAdjustment.elastic': 'gboolean',
    'MxAdjustment.lower': 'gdouble',
    'MxAdjustment.page-increment': 'gdouble',
    'MxAdjustment.page-size': 'gdouble',
    'MxAdjustment.step-increment': 'gdouble',
    'MxAdjustment.upper': 'gdouble',
    'MxAdjustment.value': 'gdouble',
    'MxApplication.application-name': 'gchararray',
    'MxApplication.flags': 'guint',
    'MxBin.child': 'ClutterActor',
    'MxBin.x-align': 'MxAlign',
    'MxBin.x-fill': 'gboolean',
    'MxBin.y-align': 'MxAlign',
    'MxBin.y-fill': 'gboolean',
    'MxBoxLayout.enable-animations': 'gboolean',
    'MxBoxLayout.orientation': 'MxOrientation',
    'MxBoxLayout.scroll-to-focused': 'gboolean',
    'MxBoxLayout.spacing': 'guint',
    'MxBoxLayoutChild.expand': 'gboolean',
    'MxBoxLayoutChild.x-align': 'MxAlign',
    'MxBoxLayoutChild.x-fill': 'gboolean',
    'MxBoxLayoutChild.y-align': 'MxAlign',
    'MxBoxLayoutChild.y-fill': 'gboolean',
    'MxButton.action': 'MxAction',
    'MxButton.icon-name': 'gchararray',
    'MxButton.icon-position': 'MxPosition',
    'MxButton.icon-size': 'guint',
    'MxButton.icon-visible': 'gboolean',
    'MxButton.is-toggle': 'gboolean',
    'MxButton.label': 'gchararray',
    'MxButton.label-visible': 'gboolean',
    'MxButton.toggled': 'gboolean',
    'MxButtonGroup.active-button': 'MxButton',
    'MxButtonGroup.allow-no-active': 'gboolean',
    'MxComboBox.active-icon-name': 'gchararray',
    'MxComboBox.active-text': 'gchararray',
    'MxComboBox.index': 'gint',
    'MxDeformBowTie.flip-back': 'gboolean',
    'MxDeformBowTie.period': 'gdouble',
    'MxDeformPageTurn.angle': 'gdouble',
    'MxDeformPageTurn.period': 'gdouble',
    'MxDeformPageTurn.radius': 'gdouble',
    'MxDeformTexture.back': 'ClutterTexture',
    'MxDeformTexture.front': 'ClutterTexture',
    'MxDeformTexture.tiles-x': 'gint',
    'MxDeformTexture.tiles-y': 'gint',
    'MxDeformWaves.amplitude': 'gdouble',
    'MxDeformWaves.angle': 'gdouble',
    'MxDeformWaves.period': 'gdouble',
    'MxDeformWaves.radius': 'gdouble',
    'MxEntry.hint-text': 'gchararray',
    'MxEntry.icon-highlight-suffix': 'gchararray',
    'MxEntry.password-char': 'guint',
    'MxEntry.primary-icon-tooltip-text': 'gchararray',
    'MxEntry.secondary-icon-tooltip-text': 'gchararray',
    'MxEntry.text': 'gchararray',
    'MxExpander.expanded': 'gboolean',
    'MxExpander.label': 'gchararray',
    'MxFadeEffect.border-bottom': 'guint',
    'MxFadeEffect.border-left': 'guint',
    'MxFadeEffect.border-right': 'guint',
    'MxFadeEffect.border-top': 'guint',
    'MxFadeEffect.bounds-height': 'guint',
    'MxFadeEffect.bounds-width': 'guint',
    'MxFadeEffect.bounds-x': 'gint',
    'MxFadeEffect.bounds-y': 'gint',
    'MxFadeEffect.freeze-update': 'gboolean',
    'MxGrid.child-x-align': 'MxAlign',
    'MxGrid.child-y-align': 'MxAlign',
    'MxGrid.column-spacing': 'gfloat',
    'MxGrid.homogenous-columns': 'gboolean',
    'MxGrid.homogenous-rows': 'gboolean',
    'MxGrid.line-alignment': 'MxAlign',
    'MxGrid.max-stride': 'gint',
    'MxGrid.orientation': 'MxOrientation',
    'MxGrid.row-spacing': 'gfloat',
    'MxIcon.icon-name': 'gchararray',
    'MxIcon.icon-size': 'gint',
    'MxIconTheme.theme-name': 'gchararray',
    'MxImage.allow-upscale': 'gboolean',
    'MxImage.image-rotation': 'gfloat',
    'MxImage.load-async': 'gboolean',
    'MxImage.scale-height-threshold': 'guint',
    'MxImage.scale-mode': 'MxImageScaleMode',
    'MxImage.scale-width-threshold': 'guint',
    'MxImage.transition-duration': 'guint',
    'MxItemView.factory': 'GObject',
    'MxItemView.item-type': 'GType',
    'MxItemView.model': 'ClutterModel',
    'MxKineticScrollView.acceleration-factor': 'gdouble',
    'MxKineticScrollView.clamp-duration': 'guint',
    'MxKineticScrollView.clamp-mode': 'gulong',
    'MxKineticScrollView.clamp-to-center': 'gboolean',
    'MxKineticScrollView.deceleration': 'gdouble',
    'MxKineticScrollView.mouse-button': 'guint',
    'MxKineticScrollView.overshoot': 'gdouble',
    'MxKineticScrollView.scroll-policy': 'MxScrollPolicy',
    'MxKineticScrollView.use-captured': 'gboolean',
    'MxLabel.fade-out': 'gboolean',
    'MxLabel.line-wrap': 'gboolean',
    'MxLabel.show-tooltip': 'gboolean',
    'MxLabel.text': 'gchararray',
    'MxLabel.use-markup': 'gboolean',
    'MxLabel.x-align': 'MxAlign',
    'MxLabel.y-align': 'MxAlign',
    'MxListView.factory': 'GObject',
    'MxListView.item-type': 'GType',
    'MxListView.model': 'ClutterModel',
    'MxNotebook.current-page': 'ClutterActor',
    'MxNotebook.enable-gestures': 'gboolean',
    'MxOffscreen.accumulation-enabled': 'gboolean',
    'MxOffscreen.auto-update': 'gboolean',
    'MxOffscreen.child': 'ClutterActor',
    'MxOffscreen.pick-child': 'gboolean',
    'MxOffscreen.redirect-enabled': 'gboolean',
    'MxPathBar.clear-on-change': 'gboolean',
    'MxPathBar.editable': 'gboolean',
    'MxProgressBar.progress': 'gdouble',
    'MxScrollBar.adjustment': 'MxAdjustment',
    'MxScrollBar.orientation': 'MxOrientation',
    'MxScrollView.enable-gestures': 'gboolean',
    'MxScrollView.enable-mouse-scrolling': 'gboolean',
    'MxScrollView.scroll-policy': 'MxScrollPolicy',
    'MxScrollable.horizontal-adjustment': 'MxAdjustment',
    'MxScrollable.vertical-adjustment': 'MxAdjustment',
    'MxSettings.drag-threshold': 'guint',
    'MxSettings.font-name': 'gchararray',
    'MxSettings.icon-theme': 'gchararray',
    'MxSettings.long-press-timeout': 'guint',
    'MxSettings.small-screen': 'gboolean',
    'MxSlider.buffer-value': 'gdouble',
    'MxSlider.value': 'gdouble',
    'MxSpinner.animating': 'gboolean',
    'MxStackChild.crop': 'gboolean',
    'MxStackChild.fit': 'gboolean',
    'MxStackChild.x-align': 'MxAlign',
    'MxStackChild.x-fill': 'gboolean',
    'MxStackChild.y-align': 'MxAlign',
    'MxStackChild.y-fill': 'gboolean',
    'MxStylable.style': 'MxStyle',
    'MxStylable.style-class': 'gchararray',
    'MxStylable.style-pseudo-class': 'gchararray',
    'MxTable.column-spacing': 'gint',
    'MxTable.row-spacing': 'gint',
    'MxTableChild.column': 'gint',
    'MxTableChild.column-span': 'gint',
    'MxTableChild.row': 'gint',
    'MxTableChild.row-span': 'gint',
    'MxTableChild.x-align': 'MxAlign',
    'MxTableChild.x-expand': 'gboolean',
    'MxTableChild.x-fill': 'gboolean',
    'MxTableChild.y-align': 'MxAlign',
    'MxTableChild.y-expand': 'gboolean',
    'MxTableChild.y-fill': 'gboolean',
    'MxTextureFrame.bottom': 'gfloat',
    'MxTextureFrame.left': 'gfloat',
    'MxTextureFrame.parent-texture': 'ClutterTexture',
    'MxTextureFrame.right': 'gfloat',
    'MxTextureFrame.top': 'gfloat',
    'MxToggle.active': 'gboolean',
    'MxToolbar.has-close-button': 'gboolean',
    'MxTooltip.text': 'gchararray',
    'MxViewport.sync-adjustments': 'gboolean',
    'MxViewport.x-origin': 'gfloat',
    'MxViewport.y-origin': 'gfloat',
    'MxViewport.z-origin': 'gfloat',
    'MxWidget.disabled': 'gboolean',
    'MxWidget.menu': 'MxMenu',
    'MxWidget.tooltip-delay': 'gint',
    'MxWidget.tooltip-text': 'gchararray',
    'MxWindow.child': 'ClutterActor',
    'MxWindow.clutter-stage': 'ClutterStage',
    'MxWindow.fullscreen': 'gboolean',
    'MxWindow.has-toolbar': 'gboolean',
    'MxWindow.icon-cogl-texture': 'gchararray',
    'MxWindow.icon-name': 'gchararray',
    'MxWindow.small-screen': 'gboolean',
    'MxWindow.title': 'gchararray',
    'MxWindow.toolbar': 'MxToolbar',
    'MxWindow.window-rotation': 'MxWindowRotation',
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
    'ClutterChildMeta': '0.8',
    'ClutterChildMeta.actor': '0.8',
    'ClutterChildMeta.container': '0.8',
    'MxAction::activate': '1.4',
    'MxActorManager::actor-added': '1.2',
    'MxActorManager::actor-created': '1.2',
    'MxActorManager::actor-finished': '1.2',
    'MxActorManager::actor-removed': '1.2',
    'MxActorManager::operation-cancelled': '1.2',
    'MxActorManager::operation-completed': '1.2',
    'MxActorManager::operation-failed': '1.2',
    'MxImage::image-load-error': '1.2',
    'MxImage::image-loaded': '1.2',
    'MxLabel.line-wrap': '1.2',
    'MxLabel.show-tooltip': '1.4',
    'MxSpinner::looped': '1.2',
};
