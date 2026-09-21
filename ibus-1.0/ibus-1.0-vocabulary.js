// The widget vocabulary of IBus-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: IBus-1.0 — library 1.5.35 — prop(s) no TypeScript value satisfies: IBus.EmojiData.annotations
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'IBus',
    version: '1.0',
    libraryVersion: '1.5.35',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['IBus.EmojiData.annotations'],
    unresolvedProps: [],
    identifierPrefixes: ['IBus'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    IBusBus: ['client-only', 'connect-async'],
    IBusComponent: ['author', 'command-line', 'description', 'homepage', 'license', 'name', 'textdomain', 'version'],
    IBusEmojiData: ['annotations', 'category', 'description', 'emoji'],
    IBusEngine: ['active-surrounding-text', 'engine-name', 'has-focus-id'],
    IBusEngineDesc: ['author', 'description', 'hotkeys', 'icon', 'icon-prop-key', 'language', 'layout', 'layout-option', 'layout-variant', 'license', 'longname', 'name', 'rank', 'setup', 'symbol', 'textdomain', 'version'],
    IBusExtensionEvent: ['is-enabled', 'is-extension', 'name', 'params'],
    IBusMessage: ['code', 'description', 'domain', 'progress', 'serial', 'timeout', 'title'],
    IBusProperty: ['icon', 'key', 'label', 'prop-type', 'sensitive', 'state', 'sub-props', 'symbol', 'tooltip', 'visible'],
    IBusService: ['connection', 'object-path'],
    IBusUnicodeBlock: ['end', 'name', 'start'],
    IBusUnicodeData: ['alias', 'block-name', 'code', 'name'],
    IBusXEvent: ['event-type', 'group', 'hardware-keycode', 'is-modifier', 'keyval', 'length', 'purpose', 'root', 'same-screen', 'send-event', 'serial', 'state', 'string', 'subwindow', 'time', 'window', 'x', 'x-root', 'y', 'y-root'],
};

export const OWN_SIGNALS = {
    IBusBus: ['connected', 'disconnected', 'global-engine-changed', 'global-shortcut-key-responded', 'name-owner-changed'],
    IBusConfig: ['value-changed'],
    IBusEngine: ['cancel-hand-writing', 'candidate-clicked', 'cursor-down', 'cursor-up', 'disable', 'enable', 'focus-in', 'focus-in-id', 'focus-out', 'focus-out-id', 'page-down', 'page-up', 'process-hand-writing-event', 'process-key-event', 'property-activate', 'property-hide', 'property-show', 'reset', 'set-capabilities', 'set-content-type', 'set-cursor-location', 'set-surrounding-text'],
    IBusFactory: ['create-engine'],
    IBusHotkeyProfile: ['trigger'],
    IBusInputContext: ['commit-text', 'cursor-down-lookup-table', 'cursor-up-lookup-table', 'delete-surrounding-text', 'disabled', 'enabled', 'forward-key-event', 'hide-auxiliary-text', 'hide-lookup-table', 'hide-preedit-text', 'page-down-lookup-table', 'page-up-lookup-table', 'register-properties', 'require-surrounding-text', 'show-auxiliary-text', 'show-lookup-table', 'show-preedit-text', 'update-auxiliary-text', 'update-lookup-table', 'update-preedit-text', 'update-preedit-text-with-mode', 'update-property'],
    IBusObject: ['destroy'],
    IBusPanelService: ['candidate-clicked-lookup-table', 'commit-text-received', 'cursor-down-lookup-table', 'cursor-up-lookup-table', 'destroy-context', 'focus-in', 'focus-out', 'hide-auxiliary-text', 'hide-language-bar', 'hide-lookup-table', 'hide-preedit-text', 'page-down-lookup-table', 'page-up-lookup-table', 'panel-extension-received', 'process-key-event', 'register-properties', 'reset', 'send-message-received', 'set-content-type', 'set-cursor-location', 'set-cursor-location-relative', 'show-auxiliary-text', 'show-language-bar', 'show-lookup-table', 'show-preedit-text', 'start-setup', 'state-changed', 'update-auxiliary-text', 'update-lookup-table', 'update-preedit-text', 'update-property'],
    IBusProxy: ['destroy'],
    IBusRegistry: ['changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    IBusAttrList: ['IBusAttrList', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusAttribute: ['IBusAttribute', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusBus: ['IBusBus', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusComponent: ['IBusComponent', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusConfig: ['IBusConfig', 'IBusProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable'],
    IBusConfigService: ['IBusConfigService', 'IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusEmojiData: ['IBusEmojiData', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusEngine: ['IBusEngine', 'IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusEngineDesc: ['IBusEngineDesc', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusEngineSimple: ['IBusEngineSimple', 'IBusEngine', 'IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusExtensionEvent: ['IBusExtensionEvent', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusFactory: ['IBusFactory', 'IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusHotkeyProfile: ['IBusHotkeyProfile', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusInputContext: ['IBusInputContext', 'IBusProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable'],
    IBusKeymap: ['IBusKeymap', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusLookupTable: ['IBusLookupTable', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusMessage: ['IBusMessage', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusObject: ['IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusObservedPath: ['IBusObservedPath', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusPanelService: ['IBusPanelService', 'IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusPropList: ['IBusPropList', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusProperty: ['IBusProperty', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusProxy: ['IBusProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable'],
    IBusRegistry: ['IBusRegistry', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusSerializable: ['IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusService: ['IBusService', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusText: ['IBusText', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusUnicodeBlock: ['IBusUnicodeBlock', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusUnicodeData: ['IBusUnicodeData', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
    IBusXEvent: ['IBusXEvent', 'IBusSerializable', 'IBusObject', 'GInitiallyUnowned', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    IBusAttrType: ['underline', 'foreground', 'background', 'hint'],
    IBusAttrUnderline: ['none', 'single', 'double', 'low', 'error'],
    IBusBusGlobalBindingType: ['any', 'ime-switcher', 'emoji-typing'],
    IBusBusRequestNameReply: ['primary-owner', 'in-queue', 'exists', 'already-owner'],
    IBusBusStartServiceByNameReply: ['success', 'already-running'],
    IBusEngineMsgCode: ['general', 'invalid-compose-sequence', 'update-compose-table'],
    IBusInputPurpose: ['free-form', 'alpha', 'digits', 'number', 'phone', 'url', 'email', 'name', 'password', 'pin', 'terminal', 'date', 'time', 'datetime'],
    IBusMessageDomain: ['none', 'engine', 'panel'],
    IBusOrientation: ['horizontal', 'vertical', 'system'],
    IBusPanelServiceMsgCode: ['general', 'loading-unicode'],
    IBusPreeditFocusMode: ['clear', 'commit'],
    IBusPreeditFormat: ['rgba', 'hint'],
    IBusPropState: ['unchecked', 'checked', 'inconsistent'],
    IBusPropType: ['normal', 'toggle', 'radio', 'menu', 'separator'],
    IBusXEventType: ['nothing', 'key-press', 'key-release', 'other', 'event-last'],
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
    'IBusAttrType.background': 3,
    'IBusAttrType.foreground': 2,
    'IBusAttrType.hint': 4,
    'IBusAttrType.underline': 1,
    'IBusAttrUnderline.double': 2,
    'IBusAttrUnderline.error': 4,
    'IBusAttrUnderline.low': 3,
    'IBusAttrUnderline.none': 0,
    'IBusAttrUnderline.single': 1,
    'IBusBusGlobalBindingType.any': 0,
    'IBusBusGlobalBindingType.emoji-typing': 2,
    'IBusBusGlobalBindingType.ime-switcher': 1,
    'IBusBusRequestNameReply.already-owner': 4,
    'IBusBusRequestNameReply.exists': 3,
    'IBusBusRequestNameReply.in-queue': 2,
    'IBusBusRequestNameReply.primary-owner': 1,
    'IBusBusStartServiceByNameReply.already-running': 2,
    'IBusBusStartServiceByNameReply.success': 1,
    'IBusEngineMsgCode.general': 0,
    'IBusEngineMsgCode.invalid-compose-sequence': 1,
    'IBusEngineMsgCode.update-compose-table': 2,
    'IBusInputPurpose.alpha': 1,
    'IBusInputPurpose.date': 11,
    'IBusInputPurpose.datetime': 13,
    'IBusInputPurpose.digits': 2,
    'IBusInputPurpose.email': 6,
    'IBusInputPurpose.free-form': 0,
    'IBusInputPurpose.name': 7,
    'IBusInputPurpose.number': 3,
    'IBusInputPurpose.password': 8,
    'IBusInputPurpose.phone': 4,
    'IBusInputPurpose.pin': 9,
    'IBusInputPurpose.terminal': 10,
    'IBusInputPurpose.time': 12,
    'IBusInputPurpose.url': 5,
    'IBusMessageDomain.engine': 1,
    'IBusMessageDomain.none': 0,
    'IBusMessageDomain.panel': 2,
    'IBusOrientation.horizontal': 0,
    'IBusOrientation.system': 2,
    'IBusOrientation.vertical': 1,
    'IBusPanelServiceMsgCode.general': 0,
    'IBusPanelServiceMsgCode.loading-unicode': 1,
    'IBusPreeditFocusMode.clear': 0,
    'IBusPreeditFocusMode.commit': 1,
    'IBusPreeditFormat.hint': 1,
    'IBusPreeditFormat.rgba': 0,
    'IBusPropState.checked': 1,
    'IBusPropState.inconsistent': 2,
    'IBusPropState.unchecked': 0,
    'IBusPropType.menu': 3,
    'IBusPropType.normal': 0,
    'IBusPropType.radio': 2,
    'IBusPropType.separator': 4,
    'IBusPropType.toggle': 1,
    'IBusXEventType.event-last': 3,
    'IBusXEventType.key-press': 0,
    'IBusXEventType.key-release': 1,
    'IBusXEventType.nothing': -1,
    'IBusXEventType.other': 2,
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
    'IBusAttrPreedit.default': 0,
    'IBusAttrPreedit.error-compose': 7,
    'IBusAttrPreedit.error-spelling': 6,
    'IBusAttrPreedit.none': 256,
    'IBusAttrPreedit.prediction': 3,
    'IBusAttrPreedit.prefix': 4,
    'IBusAttrPreedit.selection': 2,
    'IBusAttrPreedit.suffix': 5,
    'IBusAttrPreedit.whole': 1,
    'IBusBusNameFlag.allow-replacement': 1,
    'IBusBusNameFlag.do-not-queue': 4,
    'IBusBusNameFlag.replace-existing': 2,
    'IBusCapabilite.auxiliary-text': 2,
    'IBusCapabilite.focus': 8,
    'IBusCapabilite.lookup-table': 4,
    'IBusCapabilite.osk': 64,
    'IBusCapabilite.preedit-text': 1,
    'IBusCapabilite.property': 16,
    'IBusCapabilite.surrounding-text': 32,
    'IBusCapabilite.sync-process-key': 128,
    'IBusCapabilite.sync-process-key-v2': 128,
    'IBusInputHints.emoji': 512,
    'IBusInputHints.hidden-text': 4096,
    'IBusInputHints.inhibit-osk': 128,
    'IBusInputHints.latin': 8192,
    'IBusInputHints.lowercase': 8,
    'IBusInputHints.multiline': 16384,
    'IBusInputHints.no-emoji': 1024,
    'IBusInputHints.no-spellcheck': 2,
    'IBusInputHints.none': 0,
    'IBusInputHints.private': 2048,
    'IBusInputHints.spellcheck': 1,
    'IBusInputHints.uppercase-chars': 16,
    'IBusInputHints.uppercase-sentences': 64,
    'IBusInputHints.uppercase-words': 32,
    'IBusInputHints.vertical-writing': 256,
    'IBusInputHints.word-completion': 4,
    'IBusModifierType.button1-mask': 256,
    'IBusModifierType.button2-mask': 512,
    'IBusModifierType.button3-mask': 1024,
    'IBusModifierType.button4-mask': 2048,
    'IBusModifierType.button5-mask': 4096,
    'IBusModifierType.control-mask': 4,
    'IBusModifierType.forward-mask': 33554432,
    'IBusModifierType.handled-mask': 16777216,
    'IBusModifierType.hyper-mask': 134217728,
    'IBusModifierType.ignored-mask': 33554432,
    'IBusModifierType.lock-mask': 2,
    'IBusModifierType.meta-mask': 268435456,
    'IBusModifierType.mod1-mask': 8,
    'IBusModifierType.mod2-mask': 16,
    'IBusModifierType.mod3-mask': 32,
    'IBusModifierType.mod4-mask': 64,
    'IBusModifierType.mod5-mask': 128,
    'IBusModifierType.modifier-mask': 1593843711,
    'IBusModifierType.release-mask': 1073741824,
    'IBusModifierType.shift-mask': 1,
    'IBusModifierType.super-mask': 67108864,
    'IBusObjectFlags.destroyed': 2,
    'IBusObjectFlags.in-destruction': 1,
    'IBusObjectFlags.reserved-1': 4,
    'IBusObjectFlags.reserved-2': 8,
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
    'IBusProperty.prop-type': 'IBusPropType',
    'IBusProperty.state': 'IBusPropState',
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
    'IBusBus.client-only': 'gboolean',
    'IBusBus.connect-async': 'gboolean',
    'IBusComponent.author': 'gchararray',
    'IBusComponent.command-line': 'gchararray',
    'IBusComponent.description': 'gchararray',
    'IBusComponent.homepage': 'gchararray',
    'IBusComponent.license': 'gchararray',
    'IBusComponent.name': 'gchararray',
    'IBusComponent.textdomain': 'gchararray',
    'IBusComponent.version': 'gchararray',
    'IBusEmojiData.annotations': 'gpointer',
    'IBusEmojiData.category': 'gchararray',
    'IBusEmojiData.description': 'gchararray',
    'IBusEmojiData.emoji': 'gchararray',
    'IBusEngine.active-surrounding-text': 'gboolean',
    'IBusEngine.engine-name': 'gchararray',
    'IBusEngine.has-focus-id': 'gboolean',
    'IBusEngineDesc.author': 'gchararray',
    'IBusEngineDesc.description': 'gchararray',
    'IBusEngineDesc.hotkeys': 'gchararray',
    'IBusEngineDesc.icon': 'gchararray',
    'IBusEngineDesc.icon-prop-key': 'gchararray',
    'IBusEngineDesc.language': 'gchararray',
    'IBusEngineDesc.layout': 'gchararray',
    'IBusEngineDesc.layout-option': 'gchararray',
    'IBusEngineDesc.layout-variant': 'gchararray',
    'IBusEngineDesc.license': 'gchararray',
    'IBusEngineDesc.longname': 'gchararray',
    'IBusEngineDesc.name': 'gchararray',
    'IBusEngineDesc.rank': 'guint',
    'IBusEngineDesc.setup': 'gchararray',
    'IBusEngineDesc.symbol': 'gchararray',
    'IBusEngineDesc.textdomain': 'gchararray',
    'IBusEngineDesc.version': 'gchararray',
    'IBusExtensionEvent.is-enabled': 'gboolean',
    'IBusExtensionEvent.is-extension': 'gboolean',
    'IBusExtensionEvent.name': 'gchararray',
    'IBusExtensionEvent.params': 'gchararray',
    'IBusMessage.code': 'guchar',
    'IBusMessage.description': 'gchararray',
    'IBusMessage.domain': 'guchar',
    'IBusMessage.progress': 'gint',
    'IBusMessage.serial': 'guint',
    'IBusMessage.timeout': 'gint',
    'IBusMessage.title': 'gchararray',
    'IBusProperty.icon': 'gchararray',
    'IBusProperty.key': 'gchararray',
    'IBusProperty.label': 'IBusText',
    'IBusProperty.prop-type': 'IBusPropType',
    'IBusProperty.sensitive': 'gboolean',
    'IBusProperty.state': 'IBusPropState',
    'IBusProperty.sub-props': 'IBusPropList',
    'IBusProperty.symbol': 'IBusText',
    'IBusProperty.tooltip': 'IBusText',
    'IBusProperty.visible': 'gboolean',
    'IBusService.connection': 'GDBusConnection',
    'IBusService.object-path': 'gchararray',
    'IBusUnicodeBlock.end': 'guint',
    'IBusUnicodeBlock.name': 'gchararray',
    'IBusUnicodeBlock.start': 'guint',
    'IBusUnicodeData.alias': 'gchararray',
    'IBusUnicodeData.block-name': 'gchararray',
    'IBusUnicodeData.code': 'guint',
    'IBusUnicodeData.name': 'gchararray',
    'IBusXEvent.event-type': 'gint',
    'IBusXEvent.group': 'guint',
    'IBusXEvent.hardware-keycode': 'guint',
    'IBusXEvent.is-modifier': 'gboolean',
    'IBusXEvent.keyval': 'guint',
    'IBusXEvent.length': 'gint',
    'IBusXEvent.purpose': 'gchararray',
    'IBusXEvent.root': 'guint',
    'IBusXEvent.same-screen': 'gboolean',
    'IBusXEvent.send-event': 'gint',
    'IBusXEvent.serial': 'gulong',
    'IBusXEvent.state': 'guint',
    'IBusXEvent.string': 'gchararray',
    'IBusXEvent.subwindow': 'guint',
    'IBusXEvent.time': 'guint',
    'IBusXEvent.window': 'guint',
    'IBusXEvent.x': 'gint',
    'IBusXEvent.x-root': 'gint',
    'IBusXEvent.y': 'gint',
    'IBusXEvent.y-root': 'gint',
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
    'IBusMessage': '1.5.33',
    'IBusPanelService::send-message-received': '1.5.33',
};
