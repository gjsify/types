// The widget vocabulary of St-51 as runtime data.
//
// GENERATED — do not edit. Provenance: St-51 — dropped empty base(s): Atk.ImplementorIface — inlined base(s) their owner's vocabulary does not emit: Meta.Cursor Clutter.Cursor
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'St',
    version: '51',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: ['Meta.Cursor', 'Clutter.Cursor'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['St'],
    requiredVocabularies: ['@girs/atk-1.0/vocabulary', '@girs/clutter-51/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    ClutterCursor: ['color-state', 'cursor-type'],
    MetaCursor: ['backend', 'size', 'theme-name'],
    StAdjustment: ['actor', 'lower', 'page-increment', 'page-size', 'step-increment', 'upper', 'value'],
    StBin: ['child'],
    StBoxLayout: ['orientation', 'vertical'],
    StButton: ['button-mask', 'checked', 'icon-name', 'label', 'toggle-mode'],
    StDndStartGesture: ['manual-mode', 'timeout-threshold'],
    StEntry: ['hint-actor', 'hint-text', 'input-hints', 'input-purpose', 'primary-icon', 'secondary-icon', 'text'],
    StIcon: ['fallback-gicon', 'fallback-icon-name', 'gicon', 'icon-name', 'icon-size'],
    StImageContent: ['preferred-height', 'preferred-width'],
    StLabel: ['text'],
    StPasswordEntry: ['password-visible', 'show-peek-icon'],
    StScrollBar: ['adjustment', 'orientation'],
    StScrollView: ['child', 'enable-mouse-scrolling', 'enable-touch-scrolling', 'hscrollbar-policy', 'overlay-scrollbars', 'vscrollbar-policy'],
    StScrollViewFade: ['extend-fade-area', 'fade-edges', 'fade-margins'],
    StScrollable: ['hadjustment', 'vadjustment'],
    StSettings: ['slow-down-factor'],
    StTheme: ['application-stylesheet', 'default-stylesheet', 'theme-stylesheet'],
    StThemeContext: ['scale-factor'],
    StViewport: ['clip-to-view'],
    StWidget: ['can-focus', 'hover', 'label-actor', 'pseudo-class', 'style', 'style-class', 'track-hover'],
};

export const OWN_SIGNALS = {
    ClutterCursor: ['texture-changed'],
    StAdjustment: ['changed'],
    StButton: ['clicked'],
    StDrawingArea: ['repaint'],
    StEntry: ['primary-icon-clicked', 'secondary-icon-clicked'],
    StGenericAccessible: ['get-current-value', 'get-maximum-value', 'get-minimum-increment', 'get-minimum-value', 'set-current-value'],
    StIconTheme: ['changed'],
    StScrollBar: ['scroll-start', 'scroll-stop'],
    StTextureCache: ['icon-theme-changed', 'texture-file-changed'],
    StTheme: ['custom-stylesheets-changed'],
    StThemeContext: ['changed'],
    StWidget: ['popup-menu', 'style-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    StAdjustment: ['StAdjustment', 'GObject', 'ClutterAnimatable'],
    StBin: ['StBin', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StBorderImage: ['StBorderImage', 'GObject'],
    StBoxLayout: ['StBoxLayout', 'StViewport', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'StScrollable'],
    StButton: ['StButton', 'StBin', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StClipboard: ['StClipboard', 'GObject'],
    StCursor: ['StCursor', 'MetaCursor', 'ClutterCursor', 'GObject'],
    StDndStartGesture: ['StDndStartGesture', 'ClutterGesture', 'ClutterAction', 'ClutterActorMeta', 'GInitiallyUnowned', 'GObject'],
    StDrawingArea: ['StDrawingArea', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StEntry: ['StEntry', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StFocusManager: ['StFocusManager', 'GObject'],
    StGenericAccessible: ['StGenericAccessible', 'StWidgetAccessible', 'ClutterActorAccessible', 'AtkGObjectAccessible', 'AtkObject', 'GObject', 'AtkComponent', 'AtkValue'],
    StIcon: ['StIcon', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StIconInfo: ['StIconInfo', 'GObject'],
    StIconTheme: ['StIconTheme', 'GObject'],
    StImageContent: ['StImageContent', 'GObject', 'ClutterContent', 'GIcon', 'GLoadableIcon'],
    StLabel: ['StLabel', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StPasswordEntry: ['StPasswordEntry', 'StEntry', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StScrollBar: ['StScrollBar', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StScrollView: ['StScrollView', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StScrollViewFade: ['StScrollViewFade', 'ClutterShaderEffect', 'ClutterOffscreenEffect', 'ClutterEffect', 'ClutterActorMeta', 'GInitiallyUnowned', 'GObject'],
    StSettings: ['StSettings', 'GObject'],
    StSpinnerContent: ['StSpinnerContent', 'GObject', 'ClutterContent'],
    StTextureCache: ['StTextureCache', 'GObject'],
    StTheme: ['StTheme', 'GObject'],
    StThemeContext: ['StThemeContext', 'GObject'],
    StThemeNode: ['StThemeNode', 'GObject'],
    StViewport: ['StViewport', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'StScrollable'],
    StWidget: ['StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable'],
    StWidgetAccessible: ['StWidgetAccessible', 'ClutterActorAccessible', 'AtkGObjectAccessible', 'AtkObject', 'GObject', 'AtkComponent'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    ClutterCursorType: ['inherit', 'none', 'default', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'grab', 'grabbing', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'dnd-ask', 'all-resize'],
    ClutterInputContentPurpose: ['normal', 'alpha', 'digits', 'number', 'phone', 'url', 'email', 'name', 'password', 'date', 'time', 'datetime', 'terminal'],
    ClutterOrientation: ['horizontal', 'vertical'],
    StBackgroundSize: ['auto', 'contain', 'cover', 'fixed'],
    StClipboardType: ['primary', 'clipboard'],
    StCorner: ['topleft', 'topright', 'bottomright', 'bottomleft'],
    StDirectionType: ['tab-forward', 'tab-backward', 'up', 'down', 'left', 'right'],
    StGradientType: ['none', 'vertical', 'horizontal', 'radial'],
    StIconStyle: ['requested', 'regular', 'symbolic'],
    StPolicyType: ['always', 'automatic', 'never', 'external'],
    StReducedMotion: ['no-preference', 'reduce'],
    StSide: ['top', 'right', 'bottom', 'left'],
    StSystemAccentColor: ['blue', 'teal', 'green', 'yellow', 'orange', 'red', 'pink', 'purple', 'slate'],
    StSystemColorScheme: ['default', 'prefer-dark', 'prefer-light'],
    StTextAlign: ['left', 'center', 'right', 'start', 'end', 'justify'],
    StTextureCachePolicy: ['none', 'forever'],
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
    'ClutterCursorType.alias': 12,
    'ClutterCursorType.all-resize': 37,
    'ClutterCursorType.all-scroll': 33,
    'ClutterCursorType.cell': 8,
    'ClutterCursorType.col-resize': 31,
    'ClutterCursorType.context-menu': 3,
    'ClutterCursorType.copy': 13,
    'ClutterCursorType.crosshair': 9,
    'ClutterCursorType.default': 2,
    'ClutterCursorType.dnd-ask': 36,
    'ClutterCursorType.e-resize': 19,
    'ClutterCursorType.ew-resize': 27,
    'ClutterCursorType.grab': 17,
    'ClutterCursorType.grabbing': 18,
    'ClutterCursorType.help': 4,
    'ClutterCursorType.inherit': 0,
    'ClutterCursorType.move': 14,
    'ClutterCursorType.n-resize': 20,
    'ClutterCursorType.ne-resize': 21,
    'ClutterCursorType.nesw-resize': 29,
    'ClutterCursorType.no-drop': 15,
    'ClutterCursorType.none': 1,
    'ClutterCursorType.not-allowed': 16,
    'ClutterCursorType.ns-resize': 28,
    'ClutterCursorType.nw-resize': 22,
    'ClutterCursorType.nwse-resize': 30,
    'ClutterCursorType.pointer': 5,
    'ClutterCursorType.progress': 6,
    'ClutterCursorType.row-resize': 32,
    'ClutterCursorType.s-resize': 23,
    'ClutterCursorType.se-resize': 24,
    'ClutterCursorType.sw-resize': 25,
    'ClutterCursorType.text': 10,
    'ClutterCursorType.vertical-text': 11,
    'ClutterCursorType.w-resize': 26,
    'ClutterCursorType.wait': 7,
    'ClutterCursorType.zoom-in': 34,
    'ClutterCursorType.zoom-out': 35,
    'ClutterInputContentPurpose.alpha': 1,
    'ClutterInputContentPurpose.date': 9,
    'ClutterInputContentPurpose.datetime': 11,
    'ClutterInputContentPurpose.digits': 2,
    'ClutterInputContentPurpose.email': 6,
    'ClutterInputContentPurpose.name': 7,
    'ClutterInputContentPurpose.normal': 0,
    'ClutterInputContentPurpose.number': 3,
    'ClutterInputContentPurpose.password': 8,
    'ClutterInputContentPurpose.phone': 4,
    'ClutterInputContentPurpose.terminal': 12,
    'ClutterInputContentPurpose.time': 10,
    'ClutterInputContentPurpose.url': 5,
    'ClutterOrientation.horizontal': 0,
    'ClutterOrientation.vertical': 1,
    'StBackgroundSize.auto': 0,
    'StBackgroundSize.contain': 1,
    'StBackgroundSize.cover': 2,
    'StBackgroundSize.fixed': 3,
    'StClipboardType.clipboard': 1,
    'StClipboardType.primary': 0,
    'StCorner.bottomleft': 3,
    'StCorner.bottomright': 2,
    'StCorner.topleft': 0,
    'StCorner.topright': 1,
    'StDirectionType.down': 3,
    'StDirectionType.left': 4,
    'StDirectionType.right': 5,
    'StDirectionType.tab-backward': 1,
    'StDirectionType.tab-forward': 0,
    'StDirectionType.up': 2,
    'StGradientType.horizontal': 2,
    'StGradientType.none': 0,
    'StGradientType.radial': 3,
    'StGradientType.vertical': 1,
    'StIconStyle.regular': 1,
    'StIconStyle.requested': 0,
    'StIconStyle.symbolic': 2,
    'StPolicyType.always': 0,
    'StPolicyType.automatic': 1,
    'StPolicyType.external': 3,
    'StPolicyType.never': 2,
    'StReducedMotion.no-preference': 0,
    'StReducedMotion.reduce': 1,
    'StSide.bottom': 2,
    'StSide.left': 3,
    'StSide.right': 1,
    'StSide.top': 0,
    'StSystemAccentColor.blue': 0,
    'StSystemAccentColor.green': 2,
    'StSystemAccentColor.orange': 4,
    'StSystemAccentColor.pink': 6,
    'StSystemAccentColor.purple': 7,
    'StSystemAccentColor.red': 5,
    'StSystemAccentColor.slate': 8,
    'StSystemAccentColor.teal': 1,
    'StSystemAccentColor.yellow': 3,
    'StSystemColorScheme.default': 0,
    'StSystemColorScheme.prefer-dark': 1,
    'StSystemColorScheme.prefer-light': 2,
    'StTextAlign.center': 1,
    'StTextAlign.end': 4,
    'StTextAlign.justify': 5,
    'StTextAlign.left': 0,
    'StTextAlign.right': 2,
    'StTextAlign.start': 3,
    'StTextureCachePolicy.forever': 1,
    'StTextureCachePolicy.none': 0,
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
    'ClutterInputContentHintFlags.auto-capitalization': 4,
    'ClutterInputContentHintFlags.completion': 1,
    'ClutterInputContentHintFlags.hidden-text': 64,
    'ClutterInputContentHintFlags.inhibit-osk': 1024,
    'ClutterInputContentHintFlags.latin': 256,
    'ClutterInputContentHintFlags.lowercase': 8,
    'ClutterInputContentHintFlags.multiline': 512,
    'ClutterInputContentHintFlags.no-emoji': 2048,
    'ClutterInputContentHintFlags.sensitive-data': 128,
    'ClutterInputContentHintFlags.spellcheck': 2,
    'ClutterInputContentHintFlags.titlecase': 32,
    'ClutterInputContentHintFlags.uppercase': 16,
    'StButtonMask.middle': 2,
    'StButtonMask.primary': 1,
    'StButtonMask.secondary': 4,
    'StIconLookupFlags.dir-ltr': 64,
    'StIconLookupFlags.dir-rtl': 128,
    'StIconLookupFlags.force-regular': 16,
    'StIconLookupFlags.force-size': 8,
    'StIconLookupFlags.force-svg': 2,
    'StIconLookupFlags.force-symbolic': 32,
    'StIconLookupFlags.generic-fallback': 4,
    'StIconLookupFlags.no-svg': 1,
    'StTextDecoration.blink': 8,
    'StTextDecoration.line-through': 4,
    'StTextDecoration.overline': 2,
    'StTextDecoration.underline': 1,
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
    'ClutterCursor.cursor-type': 'ClutterCursorType',
    'StBoxLayout.orientation': 'ClutterOrientation',
    'StButton.button-mask': 'StButtonMask',
    'StEntry.input-hints': 'ClutterInputContentHintFlags',
    'StEntry.input-purpose': 'ClutterInputContentPurpose',
    'StScrollBar.orientation': 'ClutterOrientation',
    'StScrollView.hscrollbar-policy': 'StPolicyType',
    'StScrollView.vscrollbar-policy': 'StPolicyType',
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
    'ClutterCursor.color-state': 'ClutterColorState',
    'ClutterCursor.cursor-type': 'ClutterCursorType',
    'MetaCursor.backend': 'MetaBackend',
    'MetaCursor.size': 'guint',
    'MetaCursor.theme-name': 'gchararray',
    'StAdjustment.actor': 'ClutterActor',
    'StAdjustment.lower': 'gdouble',
    'StAdjustment.page-increment': 'gdouble',
    'StAdjustment.page-size': 'gdouble',
    'StAdjustment.step-increment': 'gdouble',
    'StAdjustment.upper': 'gdouble',
    'StAdjustment.value': 'gdouble',
    'StBin.child': 'ClutterActor',
    'StBoxLayout.orientation': 'ClutterOrientation',
    'StBoxLayout.vertical': 'gboolean',
    'StButton.button-mask': 'StButtonMask',
    'StButton.checked': 'gboolean',
    'StButton.icon-name': 'gchararray',
    'StButton.label': 'gchararray',
    'StButton.toggle-mode': 'gboolean',
    'StDndStartGesture.manual-mode': 'gboolean',
    'StDndStartGesture.timeout-threshold': 'guint',
    'StEntry.hint-actor': 'ClutterActor',
    'StEntry.hint-text': 'gchararray',
    'StEntry.input-hints': 'ClutterInputContentHintFlags',
    'StEntry.input-purpose': 'ClutterInputContentPurpose',
    'StEntry.primary-icon': 'ClutterActor',
    'StEntry.secondary-icon': 'ClutterActor',
    'StEntry.text': 'gchararray',
    'StIcon.fallback-gicon': 'GIcon',
    'StIcon.fallback-icon-name': 'gchararray',
    'StIcon.gicon': 'GIcon',
    'StIcon.icon-name': 'gchararray',
    'StIcon.icon-size': 'gint',
    'StImageContent.preferred-height': 'gint',
    'StImageContent.preferred-width': 'gint',
    'StLabel.text': 'gchararray',
    'StPasswordEntry.password-visible': 'gboolean',
    'StPasswordEntry.show-peek-icon': 'gboolean',
    'StScrollBar.adjustment': 'StAdjustment',
    'StScrollBar.orientation': 'ClutterOrientation',
    'StScrollView.child': 'StScrollable',
    'StScrollView.enable-mouse-scrolling': 'gboolean',
    'StScrollView.enable-touch-scrolling': 'gboolean',
    'StScrollView.hscrollbar-policy': 'StPolicyType',
    'StScrollView.overlay-scrollbars': 'gboolean',
    'StScrollView.vscrollbar-policy': 'StPolicyType',
    'StScrollViewFade.extend-fade-area': 'gboolean',
    'StScrollViewFade.fade-edges': 'gboolean',
    'StScrollable.hadjustment': 'StAdjustment',
    'StScrollable.vadjustment': 'StAdjustment',
    'StSettings.slow-down-factor': 'gdouble',
    'StTheme.application-stylesheet': 'GFile',
    'StTheme.default-stylesheet': 'GFile',
    'StTheme.theme-stylesheet': 'GFile',
    'StThemeContext.scale-factor': 'gint',
    'StViewport.clip-to-view': 'gboolean',
    'StWidget.can-focus': 'gboolean',
    'StWidget.hover': 'gboolean',
    'StWidget.label-actor': 'ClutterActor',
    'StWidget.pseudo-class': 'gchararray',
    'StWidget.style': 'gchararray',
    'StWidget.style-class': 'gchararray',
    'StWidget.track-hover': 'gboolean',
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

export const SINCE = {};
