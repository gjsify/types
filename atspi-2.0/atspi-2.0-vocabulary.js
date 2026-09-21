// The widget vocabulary of Atspi-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Atspi-2.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Atspi',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Atspi'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    AtspiDevice: ['app-id'],
};

export const OWN_SIGNALS = {
    AtspiAccessible: ['mode-changed', 'region-changed'],
    AtspiDevice: ['key-pressed', 'key-released', 'pointer-moved'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AtspiAccessible: ['AtspiAccessible', 'AtspiObject', 'GObject', 'AtspiAction', 'AtspiCollection', 'AtspiComponent', 'AtspiDocument', 'AtspiEditableText', 'AtspiHypertext', 'AtspiImage', 'AtspiSelection', 'AtspiTable', 'AtspiTableCell', 'AtspiText', 'AtspiValue'],
    AtspiApplication: ['AtspiApplication', 'GObject'],
    AtspiDevice: ['AtspiDevice', 'GObject'],
    AtspiDeviceA11yManager: ['AtspiDeviceA11yManager', 'AtspiDevice', 'GObject'],
    AtspiDeviceLegacy: ['AtspiDeviceLegacy', 'AtspiDevice', 'GObject'],
    AtspiDeviceListener: ['AtspiDeviceListener', 'GObject'],
    AtspiDeviceX11: ['AtspiDeviceX11', 'AtspiDevice', 'GObject'],
    AtspiEventListener: ['AtspiEventListener', 'GObject'],
    AtspiHyperlink: ['AtspiHyperlink', 'AtspiObject', 'GObject'],
    AtspiMatchRule: ['AtspiMatchRule', 'GObject'],
    AtspiObject: ['AtspiObject', 'GObject'],
    AtspiRelation: ['AtspiRelation', 'GObject'],
    AtspiStateSet: ['AtspiStateSet', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AtspiCollectionMatchType: ['invalid', 'all', 'any', 'none', 'empty', 'last-defined'],
    AtspiCollectionSortOrder: ['invalid', 'canonical', 'flow', 'tab', 'reverse-canonical', 'reverse-flow', 'reverse-tab', 'last-defined'],
    AtspiCollectionTreeTraversalType: ['restrict-children', 'restrict-sibling', 'inorder', 'last-defined'],
    AtspiComponentLayer: ['invalid', 'background', 'canvas', 'widget', 'mdi', 'popup', 'overlay', 'window', 'last-defined'],
    AtspiCoordType: ['screen', 'window', 'parent', 'last-defined'],
    AtspiEventType: ['key-pressed-event', 'key-released-event', 'button-pressed-event', 'button-released-event', 'event-last-defined'],
    AtspiKeyEventType: ['pressed', 'released', 'event-last-defined'],
    AtspiKeySynthType: ['press', 'release', 'pressrelease', 'sym', 'string', 'lockmodifiers', 'unlockmodifiers', 'synth-last-defined'],
    AtspiLive: ['none', 'polite', 'assertive'],
    AtspiLocaleType: ['messages', 'collate', 'ctype', 'monetary', 'numeric', 'time', 'last-defined'],
    AtspiModifierType: ['shift', 'shiftlock', 'control', 'alt', 'meta', 'meta2', 'meta3', 'super', 'numlock'],
    AtspiRelationType: ['null', 'label-for', 'labelled-by', 'controller-for', 'controlled-by', 'member-of', 'tooltip-for', 'node-child-of', 'node-parent-of', 'extended', 'flows-to', 'flows-from', 'subwindow-of', 'embeds', 'embedded-by', 'popup-for', 'parent-window-of', 'description-for', 'described-by', 'details', 'details-for', 'error-message', 'error-for', 'last-defined'],
    AtspiRole: ['invalid', 'accelerator-label', 'alert', 'animation', 'arrow', 'calendar', 'canvas', 'check-box', 'check-menu-item', 'color-chooser', 'column-header', 'combo-box', 'date-editor', 'desktop-icon', 'desktop-frame', 'dial', 'dialog', 'directory-pane', 'drawing-area', 'file-chooser', 'filler', 'focus-traversable', 'font-chooser', 'frame', 'glass-pane', 'html-container', 'icon', 'image', 'internal-frame', 'label', 'layered-pane', 'list', 'list-item', 'menu', 'menu-bar', 'menu-item', 'option-pane', 'page-tab', 'page-tab-list', 'panel', 'password-text', 'popup-menu', 'progress-bar', 'button', 'radio-button', 'radio-menu-item', 'root-pane', 'row-header', 'scroll-bar', 'scroll-pane', 'separator', 'slider', 'spin-button', 'split-pane', 'status-bar', 'table', 'table-cell', 'table-column-header', 'table-row-header', 'tearoff-menu-item', 'terminal', 'text', 'toggle-button', 'tool-bar', 'tool-tip', 'tree', 'tree-table', 'unknown', 'viewport', 'window', 'extended', 'header', 'footer', 'paragraph', 'ruler', 'application', 'autocomplete', 'editbar', 'embedded', 'entry', 'chart', 'caption', 'document-frame', 'heading', 'page', 'section', 'redundant-object', 'form', 'link', 'input-method-window', 'table-row', 'tree-item', 'document-spreadsheet', 'document-presentation', 'document-text', 'document-web', 'document-email', 'comment', 'list-box', 'grouping', 'image-map', 'notification', 'info-bar', 'level-bar', 'title-bar', 'block-quote', 'audio', 'video', 'definition', 'article', 'landmark', 'log', 'marquee', 'math', 'rating', 'timer', 'static', 'math-fraction', 'math-root', 'subscript', 'superscript', 'description-list', 'description-term', 'description-value', 'footnote', 'content-deletion', 'content-insertion', 'mark', 'suggestion', 'push-button-menu', 'switch', 'last-defined', 'push-button'],
    AtspiScrollType: ['top-left', 'bottom-right', 'top-edge', 'bottom-edge', 'left-edge', 'right-edge', 'anywhere', 'last-defined'],
    AtspiStateType: ['invalid', 'active', 'armed', 'busy', 'checked', 'collapsed', 'defunct', 'editable', 'enabled', 'expandable', 'expanded', 'focusable', 'focused', 'has-tooltip', 'horizontal', 'iconified', 'modal', 'multi-line', 'multiselectable', 'opaque', 'pressed', 'resizable', 'selectable', 'selected', 'sensitive', 'showing', 'single-line', 'stale', 'transient', 'vertical', 'visible', 'manages-descendants', 'indeterminate', 'required', 'truncated', 'animated', 'invalid-entry', 'supports-autocompletion', 'selectable-text', 'is-default', 'visited', 'checkable', 'has-popup', 'read-only', 'last-defined'],
    AtspiTextBoundaryType: ['char', 'word-start', 'word-end', 'sentence-start', 'sentence-end', 'line-start', 'line-end', 'last-defined'],
    AtspiTextClipType: ['none', 'min', 'max', 'both', 'last-defined'],
    AtspiTextGranularity: ['char', 'word', 'sentence', 'line', 'paragraph'],
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
    'AtspiCollectionMatchType.all': 1,
    'AtspiCollectionMatchType.any': 2,
    'AtspiCollectionMatchType.empty': 4,
    'AtspiCollectionMatchType.invalid': 0,
    'AtspiCollectionMatchType.last-defined': 5,
    'AtspiCollectionMatchType.none': 3,
    'AtspiCollectionSortOrder.canonical': 1,
    'AtspiCollectionSortOrder.flow': 2,
    'AtspiCollectionSortOrder.invalid': 0,
    'AtspiCollectionSortOrder.last-defined': 7,
    'AtspiCollectionSortOrder.reverse-canonical': 4,
    'AtspiCollectionSortOrder.reverse-flow': 5,
    'AtspiCollectionSortOrder.reverse-tab': 6,
    'AtspiCollectionSortOrder.tab': 3,
    'AtspiCollectionTreeTraversalType.inorder': 2,
    'AtspiCollectionTreeTraversalType.last-defined': 3,
    'AtspiCollectionTreeTraversalType.restrict-children': 0,
    'AtspiCollectionTreeTraversalType.restrict-sibling': 1,
    'AtspiComponentLayer.background': 1,
    'AtspiComponentLayer.canvas': 2,
    'AtspiComponentLayer.invalid': 0,
    'AtspiComponentLayer.last-defined': 8,
    'AtspiComponentLayer.mdi': 4,
    'AtspiComponentLayer.overlay': 6,
    'AtspiComponentLayer.popup': 5,
    'AtspiComponentLayer.widget': 3,
    'AtspiComponentLayer.window': 7,
    'AtspiCoordType.last-defined': 3,
    'AtspiCoordType.parent': 2,
    'AtspiCoordType.screen': 0,
    'AtspiCoordType.window': 1,
    'AtspiEventType.button-pressed-event': 2,
    'AtspiEventType.button-released-event': 3,
    'AtspiEventType.event-last-defined': 4,
    'AtspiEventType.key-pressed-event': 0,
    'AtspiEventType.key-released-event': 1,
    'AtspiKeyEventType.event-last-defined': 2,
    'AtspiKeyEventType.pressed': 0,
    'AtspiKeyEventType.released': 1,
    'AtspiKeySynthType.lockmodifiers': 5,
    'AtspiKeySynthType.press': 0,
    'AtspiKeySynthType.pressrelease': 2,
    'AtspiKeySynthType.release': 1,
    'AtspiKeySynthType.string': 4,
    'AtspiKeySynthType.sym': 3,
    'AtspiKeySynthType.synth-last-defined': 7,
    'AtspiKeySynthType.unlockmodifiers': 6,
    'AtspiLive.assertive': 2,
    'AtspiLive.none': 0,
    'AtspiLive.polite': 1,
    'AtspiLocaleType.collate': 1,
    'AtspiLocaleType.ctype': 2,
    'AtspiLocaleType.last-defined': 6,
    'AtspiLocaleType.messages': 0,
    'AtspiLocaleType.monetary': 3,
    'AtspiLocaleType.numeric': 4,
    'AtspiLocaleType.time': 5,
    'AtspiModifierType.alt': 3,
    'AtspiModifierType.control': 2,
    'AtspiModifierType.meta': 4,
    'AtspiModifierType.meta2': 5,
    'AtspiModifierType.meta3': 6,
    'AtspiModifierType.numlock': 14,
    'AtspiModifierType.shift': 0,
    'AtspiModifierType.shiftlock': 1,
    'AtspiModifierType.super': 6,
    'AtspiRelationType.controlled-by': 4,
    'AtspiRelationType.controller-for': 3,
    'AtspiRelationType.described-by': 18,
    'AtspiRelationType.description-for': 17,
    'AtspiRelationType.details': 19,
    'AtspiRelationType.details-for': 20,
    'AtspiRelationType.embedded-by': 14,
    'AtspiRelationType.embeds': 13,
    'AtspiRelationType.error-for': 22,
    'AtspiRelationType.error-message': 21,
    'AtspiRelationType.extended': 9,
    'AtspiRelationType.flows-from': 11,
    'AtspiRelationType.flows-to': 10,
    'AtspiRelationType.label-for': 1,
    'AtspiRelationType.labelled-by': 2,
    'AtspiRelationType.last-defined': 23,
    'AtspiRelationType.member-of': 5,
    'AtspiRelationType.node-child-of': 7,
    'AtspiRelationType.node-parent-of': 8,
    'AtspiRelationType.null': 0,
    'AtspiRelationType.parent-window-of': 16,
    'AtspiRelationType.popup-for': 15,
    'AtspiRelationType.subwindow-of': 12,
    'AtspiRelationType.tooltip-for': 6,
    'AtspiRole.accelerator-label': 1,
    'AtspiRole.alert': 2,
    'AtspiRole.animation': 3,
    'AtspiRole.application': 75,
    'AtspiRole.arrow': 4,
    'AtspiRole.article': 109,
    'AtspiRole.audio': 106,
    'AtspiRole.autocomplete': 76,
    'AtspiRole.block-quote': 105,
    'AtspiRole.button': 43,
    'AtspiRole.calendar': 5,
    'AtspiRole.canvas': 6,
    'AtspiRole.caption': 81,
    'AtspiRole.chart': 80,
    'AtspiRole.check-box': 7,
    'AtspiRole.check-menu-item': 8,
    'AtspiRole.color-chooser': 9,
    'AtspiRole.column-header': 10,
    'AtspiRole.combo-box': 11,
    'AtspiRole.comment': 97,
    'AtspiRole.content-deletion': 125,
    'AtspiRole.content-insertion': 126,
    'AtspiRole.date-editor': 12,
    'AtspiRole.definition': 108,
    'AtspiRole.description-list': 121,
    'AtspiRole.description-term': 122,
    'AtspiRole.description-value': 123,
    'AtspiRole.desktop-frame': 14,
    'AtspiRole.desktop-icon': 13,
    'AtspiRole.dial': 15,
    'AtspiRole.dialog': 16,
    'AtspiRole.directory-pane': 17,
    'AtspiRole.document-email': 96,
    'AtspiRole.document-frame': 82,
    'AtspiRole.document-presentation': 93,
    'AtspiRole.document-spreadsheet': 92,
    'AtspiRole.document-text': 94,
    'AtspiRole.document-web': 95,
    'AtspiRole.drawing-area': 18,
    'AtspiRole.editbar': 77,
    'AtspiRole.embedded': 78,
    'AtspiRole.entry': 79,
    'AtspiRole.extended': 70,
    'AtspiRole.file-chooser': 19,
    'AtspiRole.filler': 20,
    'AtspiRole.focus-traversable': 21,
    'AtspiRole.font-chooser': 22,
    'AtspiRole.footer': 72,
    'AtspiRole.footnote': 124,
    'AtspiRole.form': 87,
    'AtspiRole.frame': 23,
    'AtspiRole.glass-pane': 24,
    'AtspiRole.grouping': 99,
    'AtspiRole.header': 71,
    'AtspiRole.heading': 83,
    'AtspiRole.html-container': 25,
    'AtspiRole.icon': 26,
    'AtspiRole.image': 27,
    'AtspiRole.image-map': 100,
    'AtspiRole.info-bar': 102,
    'AtspiRole.input-method-window': 89,
    'AtspiRole.internal-frame': 28,
    'AtspiRole.invalid': 0,
    'AtspiRole.label': 29,
    'AtspiRole.landmark': 110,
    'AtspiRole.last-defined': 131,
    'AtspiRole.layered-pane': 30,
    'AtspiRole.level-bar': 103,
    'AtspiRole.link': 88,
    'AtspiRole.list': 31,
    'AtspiRole.list-box': 98,
    'AtspiRole.list-item': 32,
    'AtspiRole.log': 111,
    'AtspiRole.mark': 127,
    'AtspiRole.marquee': 112,
    'AtspiRole.math': 113,
    'AtspiRole.math-fraction': 117,
    'AtspiRole.math-root': 118,
    'AtspiRole.menu': 33,
    'AtspiRole.menu-bar': 34,
    'AtspiRole.menu-item': 35,
    'AtspiRole.notification': 101,
    'AtspiRole.option-pane': 36,
    'AtspiRole.page': 84,
    'AtspiRole.page-tab': 37,
    'AtspiRole.page-tab-list': 38,
    'AtspiRole.panel': 39,
    'AtspiRole.paragraph': 73,
    'AtspiRole.password-text': 40,
    'AtspiRole.popup-menu': 41,
    'AtspiRole.progress-bar': 42,
    'AtspiRole.push-button': 43,
    'AtspiRole.push-button-menu': 129,
    'AtspiRole.radio-button': 44,
    'AtspiRole.radio-menu-item': 45,
    'AtspiRole.rating': 114,
    'AtspiRole.redundant-object': 86,
    'AtspiRole.root-pane': 46,
    'AtspiRole.row-header': 47,
    'AtspiRole.ruler': 74,
    'AtspiRole.scroll-bar': 48,
    'AtspiRole.scroll-pane': 49,
    'AtspiRole.section': 85,
    'AtspiRole.separator': 50,
    'AtspiRole.slider': 51,
    'AtspiRole.spin-button': 52,
    'AtspiRole.split-pane': 53,
    'AtspiRole.static': 116,
    'AtspiRole.status-bar': 54,
    'AtspiRole.subscript': 119,
    'AtspiRole.suggestion': 128,
    'AtspiRole.superscript': 120,
    'AtspiRole.switch': 130,
    'AtspiRole.table': 55,
    'AtspiRole.table-cell': 56,
    'AtspiRole.table-column-header': 57,
    'AtspiRole.table-row': 90,
    'AtspiRole.table-row-header': 58,
    'AtspiRole.tearoff-menu-item': 59,
    'AtspiRole.terminal': 60,
    'AtspiRole.text': 61,
    'AtspiRole.timer': 115,
    'AtspiRole.title-bar': 104,
    'AtspiRole.toggle-button': 62,
    'AtspiRole.tool-bar': 63,
    'AtspiRole.tool-tip': 64,
    'AtspiRole.tree': 65,
    'AtspiRole.tree-item': 91,
    'AtspiRole.tree-table': 66,
    'AtspiRole.unknown': 67,
    'AtspiRole.video': 107,
    'AtspiRole.viewport': 68,
    'AtspiRole.window': 69,
    'AtspiScrollType.anywhere': 6,
    'AtspiScrollType.bottom-edge': 3,
    'AtspiScrollType.bottom-right': 1,
    'AtspiScrollType.last-defined': 7,
    'AtspiScrollType.left-edge': 4,
    'AtspiScrollType.right-edge': 5,
    'AtspiScrollType.top-edge': 2,
    'AtspiScrollType.top-left': 0,
    'AtspiStateType.active': 1,
    'AtspiStateType.animated': 35,
    'AtspiStateType.armed': 2,
    'AtspiStateType.busy': 3,
    'AtspiStateType.checkable': 41,
    'AtspiStateType.checked': 4,
    'AtspiStateType.collapsed': 5,
    'AtspiStateType.defunct': 6,
    'AtspiStateType.editable': 7,
    'AtspiStateType.enabled': 8,
    'AtspiStateType.expandable': 9,
    'AtspiStateType.expanded': 10,
    'AtspiStateType.focusable': 11,
    'AtspiStateType.focused': 12,
    'AtspiStateType.has-popup': 42,
    'AtspiStateType.has-tooltip': 13,
    'AtspiStateType.horizontal': 14,
    'AtspiStateType.iconified': 15,
    'AtspiStateType.indeterminate': 32,
    'AtspiStateType.invalid': 0,
    'AtspiStateType.invalid-entry': 36,
    'AtspiStateType.is-default': 39,
    'AtspiStateType.last-defined': 44,
    'AtspiStateType.manages-descendants': 31,
    'AtspiStateType.modal': 16,
    'AtspiStateType.multi-line': 17,
    'AtspiStateType.multiselectable': 18,
    'AtspiStateType.opaque': 19,
    'AtspiStateType.pressed': 20,
    'AtspiStateType.read-only': 43,
    'AtspiStateType.required': 33,
    'AtspiStateType.resizable': 21,
    'AtspiStateType.selectable': 22,
    'AtspiStateType.selectable-text': 38,
    'AtspiStateType.selected': 23,
    'AtspiStateType.sensitive': 24,
    'AtspiStateType.showing': 25,
    'AtspiStateType.single-line': 26,
    'AtspiStateType.stale': 27,
    'AtspiStateType.supports-autocompletion': 37,
    'AtspiStateType.transient': 28,
    'AtspiStateType.truncated': 34,
    'AtspiStateType.vertical': 29,
    'AtspiStateType.visible': 30,
    'AtspiStateType.visited': 40,
    'AtspiTextBoundaryType.char': 0,
    'AtspiTextBoundaryType.last-defined': 7,
    'AtspiTextBoundaryType.line-end': 6,
    'AtspiTextBoundaryType.line-start': 5,
    'AtspiTextBoundaryType.sentence-end': 4,
    'AtspiTextBoundaryType.sentence-start': 3,
    'AtspiTextBoundaryType.word-end': 2,
    'AtspiTextBoundaryType.word-start': 1,
    'AtspiTextClipType.both': 3,
    'AtspiTextClipType.last-defined': 4,
    'AtspiTextClipType.max': 2,
    'AtspiTextClipType.min': 1,
    'AtspiTextClipType.none': 0,
    'AtspiTextGranularity.char': 0,
    'AtspiTextGranularity.line': 3,
    'AtspiTextGranularity.paragraph': 4,
    'AtspiTextGranularity.sentence': 2,
    'AtspiTextGranularity.word': 1,
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
    'AtspiCache.all': 1073741823,
    'AtspiCache.attributes': 128,
    'AtspiCache.children': 2,
    'AtspiCache.default': 127,
    'AtspiCache.description': 8,
    'AtspiCache.interfaces': 64,
    'AtspiCache.name': 4,
    'AtspiCache.none': 0,
    'AtspiCache.parent': 1,
    'AtspiCache.role': 32,
    'AtspiCache.states': 16,
    'AtspiCache.undefined': 1073741824,
    'AtspiDeviceCapability.keyboard-grab': 4,
    'AtspiDeviceCapability.keyboard-monitor': 1,
    'AtspiDeviceCapability.keyboard-synth': 2,
    'AtspiDeviceCapability.pointer-monitor': 8,
    'AtspiDeviceCapability.pointer-synth': 16,
    'AtspiDeviceCapability.touch-monitor': 32,
    'AtspiDeviceCapability.touch-synth': 64,
    'AtspiKeyListenerSyncType.all-windows': 4,
    'AtspiKeyListenerSyncType.canconsume': 2,
    'AtspiKeyListenerSyncType.nosync': 0,
    'AtspiKeyListenerSyncType.synchronous': 1,
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
    'AtspiDevice.app-id': 'gchararray',
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
