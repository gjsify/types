// The widget vocabulary of St-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: St-1.0 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'St',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['St'],
    requiredVocabularies: ['@girs/atk-1.0/vocabulary', '@girs/cally-11/vocabulary', '@girs/clutter-11/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    StAdjustment: ['actor', 'lower', 'page-increment', 'page-size', 'step-increment', 'upper', 'value'],
    StBin: ['child'],
    StBoxLayout: ['pack-start', 'vertical'],
    StButton: ['button-mask', 'checked', 'icon-name', 'label', 'toggle-mode'],
    StEntry: ['hint-actor', 'hint-text', 'input-hints', 'input-purpose', 'primary-icon', 'secondary-icon', 'text'],
    StIcon: ['fallback-gicon', 'fallback-icon-name', 'gicon', 'icon-name', 'icon-size'],
    StImageContent: ['preferred-height', 'preferred-width'],
    StLabel: ['text'],
    StPasswordEntry: ['password-visible', 'show-peek-icon'],
    StScrollBar: ['adjustment', 'vertical'],
    StScrollView: ['enable-mouse-scrolling', 'hscrollbar-policy', 'overlay-scrollbars', 'vscrollbar-policy'],
    StScrollViewFade: ['extend-fade-area', 'fade-edges', 'fade-margins'],
    StScrollable: ['hadjustment', 'vadjustment'],
    StSettings: ['slow-down-factor'],
    StTheme: ['application-stylesheet', 'default-stylesheet', 'theme-stylesheet'],
    StThemeContext: ['scale-factor'],
    StViewport: ['clip-to-view'],
    StWidget: ['accessible-name', 'accessible-role', 'can-focus', 'hover', 'label-actor', 'pseudo-class', 'style', 'style-class', 'track-hover'],
};

export const OWN_SIGNALS = {
    StAdjustment: ['changed'],
    StButton: ['clicked'],
    StDrawingArea: ['repaint'],
    StEntry: ['primary-icon-clicked', 'secondary-icon-clicked'],
    StGenericAccessible: ['get-current-value', 'get-maximum-value', 'get-minimum-increment', 'get-minimum-value', 'set-current-value'],
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
    StBin: ['StBin', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StBorderImage: ['StBorderImage', 'GObject'],
    StBoxLayout: ['StBoxLayout', 'StViewport', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'StScrollable'],
    StButton: ['StButton', 'StBin', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StClipboard: ['StClipboard', 'GObject'],
    StDrawingArea: ['StDrawingArea', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StEntry: ['StEntry', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StFocusManager: ['StFocusManager', 'GObject'],
    StGenericAccessible: ['StGenericAccessible', 'StWidgetAccessible', 'CallyActor', 'AtkGObjectAccessible', 'AtkObject', 'GObject', 'AtkAction', 'AtkComponent', 'AtkValue'],
    StIcon: ['StIcon', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StImageContent: ['StImageContent', 'ClutterImage', 'GObject', 'ClutterContent', 'GIcon', 'GLoadableIcon'],
    StLabel: ['StLabel', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StPasswordEntry: ['StPasswordEntry', 'StEntry', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StScrollBar: ['StScrollBar', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StScrollView: ['StScrollView', 'StBin', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StScrollViewFade: ['StScrollViewFade', 'ClutterShaderEffect', 'ClutterOffscreenEffect', 'ClutterEffect', 'ClutterActorMeta', 'GInitiallyUnowned', 'GObject'],
    StSettings: ['StSettings', 'GObject'],
    StTextureCache: ['StTextureCache', 'GObject'],
    StTheme: ['StTheme', 'GObject'],
    StThemeContext: ['StThemeContext', 'GObject'],
    StThemeNode: ['StThemeNode', 'GObject'],
    StViewport: ['StViewport', 'StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable', 'StScrollable'],
    StWidget: ['StWidget', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    StWidgetAccessible: ['StWidgetAccessible', 'CallyActor', 'AtkGObjectAccessible', 'AtkObject', 'GObject', 'AtkAction', 'AtkComponent'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AtkRole: ['invalid', 'accelerator-label', 'alert', 'animation', 'arrow', 'calendar', 'canvas', 'check-box', 'check-menu-item', 'color-chooser', 'column-header', 'combo-box', 'date-editor', 'desktop-icon', 'desktop-frame', 'dial', 'dialog', 'directory-pane', 'drawing-area', 'file-chooser', 'filler', 'font-chooser', 'frame', 'glass-pane', 'html-container', 'icon', 'image', 'internal-frame', 'label', 'layered-pane', 'list', 'list-item', 'menu', 'menu-bar', 'menu-item', 'option-pane', 'page-tab', 'page-tab-list', 'panel', 'password-text', 'popup-menu', 'progress-bar', 'button', 'radio-button', 'radio-menu-item', 'root-pane', 'row-header', 'scroll-bar', 'scroll-pane', 'separator', 'slider', 'split-pane', 'spin-button', 'statusbar', 'table', 'table-cell', 'table-column-header', 'table-row-header', 'tear-off-menu-item', 'terminal', 'text', 'toggle-button', 'tool-bar', 'tool-tip', 'tree', 'tree-table', 'unknown', 'viewport', 'window', 'header', 'footer', 'paragraph', 'ruler', 'application', 'autocomplete', 'edit-bar', 'embedded', 'entry', 'chart', 'caption', 'document-frame', 'heading', 'page', 'section', 'redundant-object', 'form', 'link', 'input-method-window', 'table-row', 'tree-item', 'document-spreadsheet', 'document-presentation', 'document-text', 'document-web', 'document-email', 'comment', 'list-box', 'grouping', 'image-map', 'notification', 'info-bar', 'level-bar', 'title-bar', 'block-quote', 'audio', 'video', 'definition', 'article', 'landmark', 'log', 'marquee', 'math', 'rating', 'timer', 'description-list', 'description-term', 'description-value', 'static', 'math-fraction', 'math-root', 'subscript', 'superscript', 'footnote', 'content-deletion', 'content-insertion', 'mark', 'suggestion', 'push-button-menu', 'switch', 'last-defined', 'push-button'],
    ClutterInputContentPurpose: ['normal', 'alpha', 'digits', 'number', 'phone', 'url', 'email', 'name', 'password', 'date', 'time', 'datetime', 'terminal'],
    StAlign: ['start', 'middle', 'end'],
    StBackgroundSize: ['auto', 'contain', 'cover', 'fixed'],
    StClipboardType: ['primary', 'clipboard'],
    StCorner: ['topleft', 'topright', 'bottomright', 'bottomleft'],
    StDirectionType: ['tab-forward', 'tab-backward', 'up', 'down', 'left', 'right'],
    StGradientType: ['none', 'vertical', 'horizontal', 'radial'],
    StIconStyle: ['requested', 'regular', 'symbolic'],
    StPolicyType: ['always', 'automatic', 'never', 'external'],
    StSide: ['top', 'right', 'bottom', 'left'],
    StTextAlign: ['left', 'center', 'right', 'justify'],
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
    'AtkRole.accelerator-label': 1,
    'AtkRole.alert': 2,
    'AtkRole.animation': 3,
    'AtkRole.application': 73,
    'AtkRole.arrow': 4,
    'AtkRole.article': 107,
    'AtkRole.audio': 104,
    'AtkRole.autocomplete': 74,
    'AtkRole.block-quote': 103,
    'AtkRole.button': 42,
    'AtkRole.calendar': 5,
    'AtkRole.canvas': 6,
    'AtkRole.caption': 79,
    'AtkRole.chart': 78,
    'AtkRole.check-box': 7,
    'AtkRole.check-menu-item': 8,
    'AtkRole.color-chooser': 9,
    'AtkRole.column-header': 10,
    'AtkRole.combo-box': 11,
    'AtkRole.comment': 95,
    'AtkRole.content-deletion': 123,
    'AtkRole.content-insertion': 124,
    'AtkRole.date-editor': 12,
    'AtkRole.definition': 106,
    'AtkRole.description-list': 114,
    'AtkRole.description-term': 115,
    'AtkRole.description-value': 116,
    'AtkRole.desktop-frame': 14,
    'AtkRole.desktop-icon': 13,
    'AtkRole.dial': 15,
    'AtkRole.dialog': 16,
    'AtkRole.directory-pane': 17,
    'AtkRole.document-email': 94,
    'AtkRole.document-frame': 80,
    'AtkRole.document-presentation': 91,
    'AtkRole.document-spreadsheet': 90,
    'AtkRole.document-text': 92,
    'AtkRole.document-web': 93,
    'AtkRole.drawing-area': 18,
    'AtkRole.edit-bar': 75,
    'AtkRole.embedded': 76,
    'AtkRole.entry': 77,
    'AtkRole.file-chooser': 19,
    'AtkRole.filler': 20,
    'AtkRole.font-chooser': 21,
    'AtkRole.footer': 70,
    'AtkRole.footnote': 122,
    'AtkRole.form': 85,
    'AtkRole.frame': 22,
    'AtkRole.glass-pane': 23,
    'AtkRole.grouping': 97,
    'AtkRole.header': 69,
    'AtkRole.heading': 81,
    'AtkRole.html-container': 24,
    'AtkRole.icon': 25,
    'AtkRole.image': 26,
    'AtkRole.image-map': 98,
    'AtkRole.info-bar': 100,
    'AtkRole.input-method-window': 87,
    'AtkRole.internal-frame': 27,
    'AtkRole.invalid': 0,
    'AtkRole.label': 28,
    'AtkRole.landmark': 108,
    'AtkRole.last-defined': 129,
    'AtkRole.layered-pane': 29,
    'AtkRole.level-bar': 101,
    'AtkRole.link': 86,
    'AtkRole.list': 30,
    'AtkRole.list-box': 96,
    'AtkRole.list-item': 31,
    'AtkRole.log': 109,
    'AtkRole.mark': 125,
    'AtkRole.marquee': 110,
    'AtkRole.math': 111,
    'AtkRole.math-fraction': 118,
    'AtkRole.math-root': 119,
    'AtkRole.menu': 32,
    'AtkRole.menu-bar': 33,
    'AtkRole.menu-item': 34,
    'AtkRole.notification': 99,
    'AtkRole.option-pane': 35,
    'AtkRole.page': 82,
    'AtkRole.page-tab': 36,
    'AtkRole.page-tab-list': 37,
    'AtkRole.panel': 38,
    'AtkRole.paragraph': 71,
    'AtkRole.password-text': 39,
    'AtkRole.popup-menu': 40,
    'AtkRole.progress-bar': 41,
    'AtkRole.push-button': 42,
    'AtkRole.push-button-menu': 127,
    'AtkRole.radio-button': 43,
    'AtkRole.radio-menu-item': 44,
    'AtkRole.rating': 112,
    'AtkRole.redundant-object': 84,
    'AtkRole.root-pane': 45,
    'AtkRole.row-header': 46,
    'AtkRole.ruler': 72,
    'AtkRole.scroll-bar': 47,
    'AtkRole.scroll-pane': 48,
    'AtkRole.section': 83,
    'AtkRole.separator': 49,
    'AtkRole.slider': 50,
    'AtkRole.spin-button': 52,
    'AtkRole.split-pane': 51,
    'AtkRole.static': 117,
    'AtkRole.statusbar': 53,
    'AtkRole.subscript': 120,
    'AtkRole.suggestion': 126,
    'AtkRole.superscript': 121,
    'AtkRole.switch': 128,
    'AtkRole.table': 54,
    'AtkRole.table-cell': 55,
    'AtkRole.table-column-header': 56,
    'AtkRole.table-row': 88,
    'AtkRole.table-row-header': 57,
    'AtkRole.tear-off-menu-item': 58,
    'AtkRole.terminal': 59,
    'AtkRole.text': 60,
    'AtkRole.timer': 113,
    'AtkRole.title-bar': 102,
    'AtkRole.toggle-button': 61,
    'AtkRole.tool-bar': 62,
    'AtkRole.tool-tip': 63,
    'AtkRole.tree': 64,
    'AtkRole.tree-item': 89,
    'AtkRole.tree-table': 65,
    'AtkRole.unknown': 66,
    'AtkRole.video': 105,
    'AtkRole.viewport': 67,
    'AtkRole.window': 68,
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
    'StAlign.end': 2,
    'StAlign.middle': 1,
    'StAlign.start': 0,
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
    'StSide.bottom': 2,
    'StSide.left': 3,
    'StSide.right': 1,
    'StSide.top': 0,
    'StTextAlign.center': 1,
    'StTextAlign.justify': 3,
    'StTextAlign.left': 0,
    'StTextAlign.right': 2,
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
    'ClutterInputContentHintFlags.latin': 256,
    'ClutterInputContentHintFlags.lowercase': 8,
    'ClutterInputContentHintFlags.multiline': 512,
    'ClutterInputContentHintFlags.sensitive-data': 128,
    'ClutterInputContentHintFlags.spellcheck': 2,
    'ClutterInputContentHintFlags.titlecase': 32,
    'ClutterInputContentHintFlags.uppercase': 16,
    'StButtonMask.one': 1,
    'StButtonMask.three': 4,
    'StButtonMask.two': 2,
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
    'StButton.button-mask': 'StButtonMask',
    'StEntry.input-hints': 'ClutterInputContentHintFlags',
    'StEntry.input-purpose': 'ClutterInputContentPurpose',
    'StScrollView.hscrollbar-policy': 'StPolicyType',
    'StScrollView.vscrollbar-policy': 'StPolicyType',
    'StWidget.accessible-role': 'AtkRole',
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
