// The widget vocabulary of Atk-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Atk-1.0 — library 2.61.1
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Atk',
    version: '1.0',
    libraryVersion: '2.61.1',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Atk'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    AtkObject: ['accessible-description', 'accessible-help-text', 'accessible-id', 'accessible-name', 'accessible-parent', 'accessible-role', 'accessible-table-caption', 'accessible-table-caption-object', 'accessible-table-column-description', 'accessible-table-column-header', 'accessible-table-row-description', 'accessible-table-row-header', 'accessible-table-summary', 'accessible-value'],
    AtkRelation: ['relation-type', 'target'],
};

export const OWN_SIGNALS = {
    AtkComponent: ['bounds-changed'],
    AtkDocument: ['document-attribute-changed', 'load-complete', 'load-stopped', 'page-changed', 'reload'],
    AtkHyperlink: ['link-activated'],
    AtkHypertext: ['link-selected'],
    AtkObject: ['active-descendant-changed', 'announcement', 'attribute-changed', 'children-changed', 'focus-event', 'notification', 'property-change', 'state-change', 'visible-data-changed'],
    AtkSelection: ['selection-changed'],
    AtkTable: ['column-deleted', 'column-inserted', 'column-reordered', 'model-changed', 'row-deleted', 'row-inserted', 'row-reordered'],
    AtkText: ['text-attributes-changed', 'text-caret-moved', 'text-changed', 'text-insert', 'text-remove', 'text-selection-changed'],
    AtkValue: ['value-changed'],
    AtkWindow: ['activate', 'create', 'deactivate', 'destroy', 'maximize', 'minimize', 'move', 'resize', 'restore'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AtkGObjectAccessible: ['AtkGObjectAccessible', 'AtkObject', 'GObject'],
    AtkHyperlink: ['AtkHyperlink', 'GObject', 'AtkAction'],
    AtkMisc: ['AtkMisc', 'GObject'],
    AtkNoOpObject: ['AtkNoOpObject', 'AtkObject', 'GObject', 'AtkAction', 'AtkComponent', 'AtkDocument', 'AtkEditableText', 'AtkHypertext', 'AtkImage', 'AtkSelection', 'AtkTable', 'AtkTableCell', 'AtkText', 'AtkValue', 'AtkWindow'],
    AtkNoOpObjectFactory: ['AtkNoOpObjectFactory', 'AtkObjectFactory', 'GObject'],
    AtkObject: ['AtkObject', 'GObject'],
    AtkObjectFactory: ['AtkObjectFactory', 'GObject'],
    AtkPlug: ['AtkPlug', 'AtkObject', 'GObject', 'AtkComponent'],
    AtkRegistry: ['AtkRegistry', 'GObject'],
    AtkRelation: ['AtkRelation', 'GObject'],
    AtkRelationSet: ['AtkRelationSet', 'GObject'],
    AtkSocket: ['AtkSocket', 'AtkObject', 'GObject', 'AtkComponent'],
    AtkStateSet: ['AtkStateSet', 'GObject'],
    AtkUtil: ['AtkUtil', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AtkCoordType: ['screen', 'window', 'parent'],
    AtkKeyEventType: ['press', 'release', 'last-defined'],
    AtkLayer: ['invalid', 'background', 'canvas', 'widget', 'mdi', 'popup', 'overlay', 'window'],
    AtkLive: ['none', 'polite', 'assertive'],
    AtkRelationType: ['null', 'controlled-by', 'controller-for', 'label-for', 'labelled-by', 'member-of', 'node-child-of', 'flows-to', 'flows-from', 'subwindow-of', 'embeds', 'embedded-by', 'popup-for', 'parent-window-of', 'described-by', 'description-for', 'node-parent-of', 'details', 'details-for', 'error-message', 'error-for', 'last-defined'],
    AtkRole: ['invalid', 'accelerator-label', 'alert', 'animation', 'arrow', 'calendar', 'canvas', 'check-box', 'check-menu-item', 'color-chooser', 'column-header', 'combo-box', 'date-editor', 'desktop-icon', 'desktop-frame', 'dial', 'dialog', 'directory-pane', 'drawing-area', 'file-chooser', 'filler', 'font-chooser', 'frame', 'glass-pane', 'html-container', 'icon', 'image', 'internal-frame', 'label', 'layered-pane', 'list', 'list-item', 'menu', 'menu-bar', 'menu-item', 'option-pane', 'page-tab', 'page-tab-list', 'panel', 'password-text', 'popup-menu', 'progress-bar', 'button', 'radio-button', 'radio-menu-item', 'root-pane', 'row-header', 'scroll-bar', 'scroll-pane', 'separator', 'slider', 'split-pane', 'spin-button', 'statusbar', 'table', 'table-cell', 'table-column-header', 'table-row-header', 'tear-off-menu-item', 'terminal', 'text', 'toggle-button', 'tool-bar', 'tool-tip', 'tree', 'tree-table', 'unknown', 'viewport', 'window', 'header', 'footer', 'paragraph', 'ruler', 'application', 'autocomplete', 'edit-bar', 'embedded', 'entry', 'chart', 'caption', 'document-frame', 'heading', 'page', 'section', 'redundant-object', 'form', 'link', 'input-method-window', 'table-row', 'tree-item', 'document-spreadsheet', 'document-presentation', 'document-text', 'document-web', 'document-email', 'comment', 'list-box', 'grouping', 'image-map', 'notification', 'info-bar', 'level-bar', 'title-bar', 'block-quote', 'audio', 'video', 'definition', 'article', 'landmark', 'log', 'marquee', 'math', 'rating', 'timer', 'description-list', 'description-term', 'description-value', 'static', 'math-fraction', 'math-root', 'subscript', 'superscript', 'footnote', 'content-deletion', 'content-insertion', 'mark', 'suggestion', 'push-button-menu', 'switch', 'last-defined', 'push-button'],
    AtkScrollType: ['top-left', 'bottom-right', 'top-edge', 'bottom-edge', 'left-edge', 'right-edge', 'anywhere'],
    AtkStateType: ['invalid', 'active', 'armed', 'busy', 'checked', 'defunct', 'editable', 'enabled', 'expandable', 'expanded', 'focusable', 'focused', 'horizontal', 'iconified', 'modal', 'multi-line', 'multiselectable', 'opaque', 'pressed', 'resizable', 'selectable', 'selected', 'sensitive', 'showing', 'single-line', 'stale', 'transient', 'vertical', 'visible', 'manages-descendants', 'indeterminate', 'truncated', 'required', 'invalid-entry', 'supports-autocompletion', 'selectable-text', 'default', 'animated', 'visited', 'checkable', 'has-popup', 'has-tooltip', 'read-only', 'collapsed', 'last-defined'],
    AtkTextAttribute: ['invalid', 'left-margin', 'right-margin', 'indent', 'invisible', 'editable', 'pixels-above-lines', 'pixels-below-lines', 'pixels-inside-wrap', 'bg-full-height', 'rise', 'underline', 'strikethrough', 'size', 'scale', 'weight', 'language', 'family-name', 'bg-color', 'fg-color', 'bg-stipple', 'fg-stipple', 'wrap-mode', 'direction', 'justification', 'stretch', 'variant', 'style', 'text-position', 'mark', 'last-defined'],
    AtkTextBoundary: ['char', 'word-start', 'word-end', 'sentence-start', 'sentence-end', 'line-start', 'line-end'],
    AtkTextClipType: ['none', 'min', 'max', 'both'],
    AtkTextGranularity: ['char', 'word', 'sentence', 'line', 'paragraph'],
    AtkValueType: ['very-weak', 'weak', 'acceptable', 'strong', 'very-strong', 'very-low', 'low', 'medium', 'high', 'very-high', 'very-bad', 'bad', 'good', 'very-good', 'best', 'last-defined'],
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
    'AtkCoordType.parent': 2,
    'AtkCoordType.screen': 0,
    'AtkCoordType.window': 1,
    'AtkKeyEventType.last-defined': 2,
    'AtkKeyEventType.press': 0,
    'AtkKeyEventType.release': 1,
    'AtkLayer.background': 1,
    'AtkLayer.canvas': 2,
    'AtkLayer.invalid': 0,
    'AtkLayer.mdi': 4,
    'AtkLayer.overlay': 6,
    'AtkLayer.popup': 5,
    'AtkLayer.widget': 3,
    'AtkLayer.window': 7,
    'AtkLive.assertive': 2,
    'AtkLive.none': 0,
    'AtkLive.polite': 1,
    'AtkRelationType.controlled-by': 1,
    'AtkRelationType.controller-for': 2,
    'AtkRelationType.described-by': 14,
    'AtkRelationType.description-for': 15,
    'AtkRelationType.details': 17,
    'AtkRelationType.details-for': 18,
    'AtkRelationType.embedded-by': 11,
    'AtkRelationType.embeds': 10,
    'AtkRelationType.error-for': 20,
    'AtkRelationType.error-message': 19,
    'AtkRelationType.flows-from': 8,
    'AtkRelationType.flows-to': 7,
    'AtkRelationType.label-for': 3,
    'AtkRelationType.labelled-by': 4,
    'AtkRelationType.last-defined': 21,
    'AtkRelationType.member-of': 5,
    'AtkRelationType.node-child-of': 6,
    'AtkRelationType.node-parent-of': 16,
    'AtkRelationType.null': 0,
    'AtkRelationType.parent-window-of': 13,
    'AtkRelationType.popup-for': 12,
    'AtkRelationType.subwindow-of': 9,
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
    'AtkScrollType.anywhere': 6,
    'AtkScrollType.bottom-edge': 3,
    'AtkScrollType.bottom-right': 1,
    'AtkScrollType.left-edge': 4,
    'AtkScrollType.right-edge': 5,
    'AtkScrollType.top-edge': 2,
    'AtkScrollType.top-left': 0,
    'AtkStateType.active': 1,
    'AtkStateType.animated': 37,
    'AtkStateType.armed': 2,
    'AtkStateType.busy': 3,
    'AtkStateType.checkable': 39,
    'AtkStateType.checked': 4,
    'AtkStateType.collapsed': 43,
    'AtkStateType.default': 36,
    'AtkStateType.defunct': 5,
    'AtkStateType.editable': 6,
    'AtkStateType.enabled': 7,
    'AtkStateType.expandable': 8,
    'AtkStateType.expanded': 9,
    'AtkStateType.focusable': 10,
    'AtkStateType.focused': 11,
    'AtkStateType.has-popup': 40,
    'AtkStateType.has-tooltip': 41,
    'AtkStateType.horizontal': 12,
    'AtkStateType.iconified': 13,
    'AtkStateType.indeterminate': 30,
    'AtkStateType.invalid': 0,
    'AtkStateType.invalid-entry': 33,
    'AtkStateType.last-defined': 44,
    'AtkStateType.manages-descendants': 29,
    'AtkStateType.modal': 14,
    'AtkStateType.multi-line': 15,
    'AtkStateType.multiselectable': 16,
    'AtkStateType.opaque': 17,
    'AtkStateType.pressed': 18,
    'AtkStateType.read-only': 42,
    'AtkStateType.required': 32,
    'AtkStateType.resizable': 19,
    'AtkStateType.selectable': 20,
    'AtkStateType.selectable-text': 35,
    'AtkStateType.selected': 21,
    'AtkStateType.sensitive': 22,
    'AtkStateType.showing': 23,
    'AtkStateType.single-line': 24,
    'AtkStateType.stale': 25,
    'AtkStateType.supports-autocompletion': 34,
    'AtkStateType.transient': 26,
    'AtkStateType.truncated': 31,
    'AtkStateType.vertical': 27,
    'AtkStateType.visible': 28,
    'AtkStateType.visited': 38,
    'AtkTextAttribute.bg-color': 18,
    'AtkTextAttribute.bg-full-height': 9,
    'AtkTextAttribute.bg-stipple': 20,
    'AtkTextAttribute.direction': 23,
    'AtkTextAttribute.editable': 5,
    'AtkTextAttribute.family-name': 17,
    'AtkTextAttribute.fg-color': 19,
    'AtkTextAttribute.fg-stipple': 21,
    'AtkTextAttribute.indent': 3,
    'AtkTextAttribute.invalid': 0,
    'AtkTextAttribute.invisible': 4,
    'AtkTextAttribute.justification': 24,
    'AtkTextAttribute.language': 16,
    'AtkTextAttribute.last-defined': 30,
    'AtkTextAttribute.left-margin': 1,
    'AtkTextAttribute.mark': 29,
    'AtkTextAttribute.pixels-above-lines': 6,
    'AtkTextAttribute.pixels-below-lines': 7,
    'AtkTextAttribute.pixels-inside-wrap': 8,
    'AtkTextAttribute.right-margin': 2,
    'AtkTextAttribute.rise': 10,
    'AtkTextAttribute.scale': 14,
    'AtkTextAttribute.size': 13,
    'AtkTextAttribute.stretch': 25,
    'AtkTextAttribute.strikethrough': 12,
    'AtkTextAttribute.style': 27,
    'AtkTextAttribute.text-position': 28,
    'AtkTextAttribute.underline': 11,
    'AtkTextAttribute.variant': 26,
    'AtkTextAttribute.weight': 15,
    'AtkTextAttribute.wrap-mode': 22,
    'AtkTextBoundary.char': 0,
    'AtkTextBoundary.line-end': 6,
    'AtkTextBoundary.line-start': 5,
    'AtkTextBoundary.sentence-end': 4,
    'AtkTextBoundary.sentence-start': 3,
    'AtkTextBoundary.word-end': 2,
    'AtkTextBoundary.word-start': 1,
    'AtkTextClipType.both': 3,
    'AtkTextClipType.max': 2,
    'AtkTextClipType.min': 1,
    'AtkTextClipType.none': 0,
    'AtkTextGranularity.char': 0,
    'AtkTextGranularity.line': 3,
    'AtkTextGranularity.paragraph': 4,
    'AtkTextGranularity.sentence': 2,
    'AtkTextGranularity.word': 1,
    'AtkValueType.acceptable': 2,
    'AtkValueType.bad': 11,
    'AtkValueType.best': 14,
    'AtkValueType.good': 12,
    'AtkValueType.high': 8,
    'AtkValueType.last-defined': 15,
    'AtkValueType.low': 6,
    'AtkValueType.medium': 7,
    'AtkValueType.strong': 3,
    'AtkValueType.very-bad': 10,
    'AtkValueType.very-good': 13,
    'AtkValueType.very-high': 9,
    'AtkValueType.very-low': 5,
    'AtkValueType.very-strong': 4,
    'AtkValueType.very-weak': 0,
    'AtkValueType.weak': 1,
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
    'AtkHyperlinkStateFlags.inline': 1,
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
    'AtkObject.accessible-role': 'AtkRole',
    'AtkRelation.relation-type': 'AtkRelationType',
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
    'AtkDocument::document-attribute-changed': '2.52',
    'AtkDocument::page-changed': '2.12',
    'AtkObject::announcement': '2.46',
    'AtkObject::attribute-changed': '2.52',
    'AtkObject::notification': '2.50',
    'AtkValue::value-changed': '2.12',
    'AtkWindow::activate': '2.2',
    'AtkWindow::create': '2.2',
    'AtkWindow::deactivate': '2.2',
    'AtkWindow::destroy': '2.2',
    'AtkWindow::maximize': '2.2',
    'AtkWindow::minimize': '2.2',
    'AtkWindow::move': '2.2',
    'AtkWindow::resize': '2.2',
    'AtkWindow::restore': '2.2',
};
