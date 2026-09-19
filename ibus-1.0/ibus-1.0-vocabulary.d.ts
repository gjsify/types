/**
 * The GIR-derived widget VOCABULARY for IBus-1.0.
 *
 * GENERATED — do not edit. Provenance: IBus-1.0 — library 1.5.35 — prop(s) no TypeScript value satisfies: IBus.EmojiData.annotations
 *
 * 30 instantiable GTypes (of which 0 concrete widgets), 30 declarations, 15 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Gio from '@girs/gio-2.0';
import type IBus from './ibus-1.0.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GDBusInterfaceConstructOnly, GDBusInterfaceProps, GDBusProxyConstructOnly, GDBusProxyProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type IBusAttrTypeNick = 'underline' | 'foreground' | 'background' | 'hint';
export type IBusAttrUnderlineNick = 'none' | 'single' | 'double' | 'low' | 'error';
export type IBusBusGlobalBindingTypeNick = 'any' | 'ime-switcher' | 'emoji-typing';
export type IBusBusRequestNameReplyNick = 'primary-owner' | 'in-queue' | 'exists' | 'already-owner';
export type IBusBusStartServiceByNameReplyNick = 'success' | 'already-running';
export type IBusEngineMsgCodeNick = 'general' | 'invalid-compose-sequence' | 'update-compose-table';
export type IBusInputPurposeNick = 'free-form' | 'alpha' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'name' | 'password' | 'pin' | 'terminal' | 'date' | 'time' | 'datetime';
export type IBusMessageDomainNick = 'none' | 'engine' | 'panel';
export type IBusOrientationNick = 'horizontal' | 'vertical' | 'system';
export type IBusPanelServiceMsgCodeNick = 'general' | 'loading-unicode';
export type IBusPreeditFocusModeNick = 'clear' | 'commit';
export type IBusPreeditFormatNick = 'rgba' | 'hint';
export type IBusPropStateNick = 'unchecked' | 'checked' | 'inconsistent';
export type IBusPropTypeNick = 'normal' | 'toggle' | 'radio' | 'menu' | 'separator';
export type IBusXEventTypeNick = 'nothing' | 'key-press' | 'key-release' | 'other' | 'event-last';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Array of IBusAttribute. */
export interface IBusAttrListProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusAttrListConstructOnly = IBusSerializableConstructOnly;

/** An IBusAttribute represents an attribute that associate to IBusText. */
export interface IBusAttributeProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusAttributeConstructOnly = IBusSerializableConstructOnly;

/** An IBusBus connects with IBus daemon. */
export interface IBusBusProps extends IBusObjectProps {
    /**
     * Whether the #IBusBus object is for client use only.
     * @default FALSE
     */
    'client-only'?: boolean;
    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     * @default FALSE
     */
    'connect-async'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusBusConstructOnly = IBusObjectConstructOnly | 'client-only' | 'connect-async';

/** An IBusComponent is an executable program. */
export interface IBusComponentProps extends IBusSerializableProps {
    /**
     * The author of component
     * @default NULL
     */
    author?: string;
    /**
     * The exec path of component
     * @default NULL
     */
    'command-line'?: string;
    /**
     * The description of component
     * @default NULL
     */
    description?: string;
    /**
     * The homepage of component
     * @default NULL
     */
    homepage?: string;
    /**
     * The license of component
     * @default NULL
     */
    license?: string;
    /**
     * The name of component
     * @default NULL
     */
    name?: string;
    /**
     * The textdomain of component
     * @default NULL
     */
    textdomain?: string;
    /**
     * The version of component
     * @default NULL
     */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusComponentConstructOnly = IBusSerializableConstructOnly | 'author' | 'command-line' | 'description' | 'homepage' | 'license' | 'name' | 'textdomain' | 'version';

/** An IBusConfig provides engine configuration methods such as get and set the configure settings to configuration file. */
export interface IBusConfigProps extends IBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusConfigConstructOnly = IBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly;

/** An IBusConfigService is a base class for other configuration services such as GConf. */
export interface IBusConfigServiceProps extends IBusServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusConfigServiceConstructOnly = IBusServiceConstructOnly;

/** Emoji data likes emoji unicode, annotations, description, category. */
export interface IBusEmojiDataProps extends IBusSerializableProps {
    /** The emoji annotations */
    annotations?: never;
    /** The emoji category */
    category?: string;
    /** The emoji description */
    description?: string;
    /**
     * The emoji character
     * @default NULL
     */
    emoji?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusEmojiDataConstructOnly = IBusSerializableConstructOnly | 'category' | 'emoji';

/** An IBusEngine provides infrastructure for input method engine. */
export interface IBusEngineProps extends IBusServiceProps {
    /**
     * When this property is set to %TRUE, "RequireSurroundingText" D-Bus signal will be called by ibus-daemon on every focus-in/out event, with no need for the engine to call ibus_engine_get_surrounding_te…
     * @default FALSE
     */
    'active-surrounding-text'?: boolean;
    /**
     * Name of this IBusEngine.
     * @default noname
     */
    'engine-name'?: string;
    /**
     * Use #IBusEngine::focus_in_id()/focus_out_id() class method insteads of focus_in()/focus_out() class methods when this property is set to %TRUE.
     * @default FALSE
     */
    'has-focus-id'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusEngineConstructOnly = IBusServiceConstructOnly | 'active-surrounding-text' | 'engine-name' | 'has-focus-id';

/** An IBusEngineDesc stores description data of IBusEngine. */
export interface IBusEngineDescProps extends IBusSerializableProps {
    /** The author of engine description */
    author?: string;
    /** The description of engine description */
    description?: string;
    /** The hotkeys of engine description */
    hotkeys?: string;
    /**
     * The icon of engine description
     * @default ibus-engine
     */
    icon?: string;
    /** The key of IBusProperty to change panel icon dynamically. */
    'icon-prop-key'?: string;
    /** The language of engine description */
    language?: string;
    /**
     * The layout of engine description
     * @default us
     */
    layout?: string;
    /** The keyboard option of engine description */
    'layout-option'?: string;
    /** The keyboard variant of engine description */
    'layout-variant'?: string;
    /** The license of engine description */
    license?: string;
    /** The longname of engine description */
    longname?: string;
    /**
     * The name of engine description
     * @default NULL
     */
    name?: string;
    /**
     * The rank of engine description
     * @default 0
     */
    rank?: number;
    /** The exec lists of the engine setup command */
    setup?: string;
    /** The symbol chars of engine description instead of icon image */
    symbol?: string;
    /** The textdomain of engine description */
    textdomain?: string;
    /** The version number of engine description */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusEngineDescConstructOnly = IBusSerializableConstructOnly | 'author' | 'description' | 'hotkeys' | 'icon' | 'icon-prop-key' | 'language' | 'layout' | 'layout-option' | 'layout-variant' | 'license' | 'longname' | 'name' | 'rank' | 'setup' | 'symbol' | 'textdomain' | 'version';

/** An IBusEngineSimple provides table-based input method logic. */
export interface IBusEngineSimpleProps extends IBusEngineProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusEngineSimpleConstructOnly = IBusEngineConstructOnly;

/** IBusExtensionEvent properties. */
export interface IBusExtensionEventProps extends IBusSerializableProps {
    /**
     * %TRUE if the extension is enabled in the #IBusExtensionEvent.
     * @default FALSE
     */
    'is-enabled'?: boolean;
    /**
     * %TRUE if the #IBusExtensionEvent is called by an extension.
     * @default FALSE
     */
    'is-extension'?: boolean;
    /** Name of the extension in the #IBusExtensionEvent. */
    name?: string;
    /** Parameters to enable the extension in the #IBusExtensionEvent. */
    params?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusExtensionEventConstructOnly = IBusSerializableConstructOnly | 'is-enabled' | 'is-extension' | 'name' | 'params';

/** An IBusFactory is an #IBusService that creates input method engine (IME) instance. */
export interface IBusFactoryProps extends IBusServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusFactoryConstructOnly = IBusServiceConstructOnly;

/** An opaque data type representing an IBusHotkeyProfile. */
export interface IBusHotkeyProfileProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusHotkeyProfileConstructOnly = IBusSerializableConstructOnly;

/** An IBusInputContext is a proxy object of BusInputContext, which manages the context for input methods that supports text input in various natural languages. */
export interface IBusInputContextProps extends IBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusInputContextConstructOnly = IBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly;

/** An IBusKeymap defines the mapping between keyboard scancodes and keyboard symbols such as numbers, alphabets, and punctuation marks. */
export interface IBusKeymapProps extends IBusObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusKeymapConstructOnly = IBusObjectConstructOnly;

/** An IBusLookuptable stores the candidate words or phrases for users to choose from. */
export interface IBusLookupTableProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusLookupTableConstructOnly = IBusSerializableConstructOnly;

/** An IBusMessage stores the message type, description, timeout. */
export interface IBusMessageProps extends IBusSerializableProps {
    /**
     * The code of message
     * @default 0
     */
    code?: number;
    /** The description of message */
    description?: string;
    /**
     * The domain of message
     * @default 0
     */
    domain?: number;
    /**
     * The progress of message
     * @default -1
     */
    progress?: number;
    /**
     * The serial of message
     * @default 0
     */
    serial?: number;
    /**
     * The timeout of message
     * @default -1
     */
    timeout?: number;
    /**
     * The title of message
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusMessageConstructOnly = IBusSerializableConstructOnly | 'code' | 'description' | 'domain' | 'progress' | 'serial' | 'timeout' | 'title';

/** IBusObject is the base object for all objects in IBus. */
export interface IBusObjectProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusObjectConstructOnly = GInitiallyUnownedConstructOnly;

/** IBusObservedPath provides methods for file path manipulation, such as monitor modification, directory tree traversal. */
export interface IBusObservedPathProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusObservedPathConstructOnly = IBusSerializableConstructOnly;

/** An IBusPanelService is a base class for UI services. */
export interface IBusPanelServiceProps extends IBusServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusPanelServiceConstructOnly = IBusServiceConstructOnly;

/** See_also: #IBusProperty, #IBusEngine */
export interface IBusPropListProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusPropListConstructOnly = IBusSerializableConstructOnly;

/** An IBusProperty is an UI component like a button or a menu item which shows the status of corresponding input method engine property. */
export interface IBusPropertyProps extends IBusSerializableProps {
    icon?: string;
    key?: string;
    label?: IBus.Text;
    /** @default PROP_TYPE_NORMAL */
    'prop-type'?: IBusPropTypeNick | IBus.PropType;
    /** @default TRUE */
    sensitive?: boolean;
    /** @default PROP_STATE_UNCHECKED */
    state?: IBusPropStateNick | IBus.PropState;
    'sub-props'?: IBus.PropList;
    symbol?: IBus.Text;
    tooltip?: IBus.Text;
    /** @default TRUE */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusPropertyConstructOnly = IBusSerializableConstructOnly | 'key' | 'prop-type';

/** An IBusProxy is the base of all proxy objects, which communicate the corresponding #IBusServices on the other end of IBusConnection. */
export interface IBusProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly;

/** An #IBusRegistry loads IBus component files and generates the cache files. */
export interface IBusRegistryProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusRegistryConstructOnly = IBusSerializableConstructOnly;

/** An #IBusSerializable is an IBus object which can be serialized, that is, to be to and from a #GVariant. */
export interface IBusSerializableProps extends IBusObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusSerializableConstructOnly = IBusObjectConstructOnly;

/** An IBusService is a base class for services. */
export interface IBusServiceProps extends IBusObjectProps {
    /** The connection of service object. */
    connection?: Gio.DBusConnection;
    /**
     * The path of service object.
     * @default NULL
     */
    'object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusServiceConstructOnly = IBusObjectConstructOnly | 'object-path';

/** An IBusText is the main text object in IBus. */
export interface IBusTextProps extends IBusSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusTextConstructOnly = IBusSerializableConstructOnly;

export interface IBusUnicodeBlockProps extends IBusSerializableProps {
    /**
     * The Uniode end code point
     * @default 0
     */
    end?: number;
    /** The Uniode block name */
    name?: string;
    /**
     * The Uniode start code point
     * @default 0
     */
    start?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusUnicodeBlockConstructOnly = IBusSerializableConstructOnly | 'end' | 'start';

/** Unicode data likes code, name, alias, block-name. */
export interface IBusUnicodeDataProps extends IBusSerializableProps {
    /** The Uniode alias name */
    alias?: string;
    /** The Uniode block name */
    'block-name'?: string;
    /**
     * The Uniode code point
     * @default 0
     */
    code?: number;
    /** The Uniode name */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusUnicodeDataConstructOnly = IBusSerializableConstructOnly | 'code';

/** An IBusXEvent provides a wrapper of XEvent. */
export interface IBusXEventProps extends IBusSerializableProps {
    /**
     * IBusXEventType of this IBusXEvent.
     * @default -1
     */
    'event-type'?: number;
    /**
     * group of this IBusXEvent.
     * @default 0
     */
    group?: number;
    /**
     * hardware keycode of this IBusXEvent.
     * @default 0
     */
    'hardware-keycode'?: number;
    /**
     * is_modifier of this IBusXEvent.
     * @default FALSE
     */
    'is-modifier'?: boolean;
    /**
     * keyval of this IBusXEvent.
     * @default 0
     */
    keyval?: number;
    /**
     * keyval of this IBusXEvent.
     * @default 0
     */
    length?: number;
    /** purpose of this IBusXEvent. */
    purpose?: string;
    /**
     * root window of this IBusXEvent.
     * @default 0
     */
    root?: number;
    /**
     * same_screen of this IBusXEvent.
     * @default TRUE
     */
    'same-screen'?: boolean;
    /**
     * send_event of this IBusXEvent.
     * @default 0
     */
    'send-event'?: number;
    /**
     * serial of this IBusXEvent.
     * @default 0
     */
    serial?: bigint | number;
    /**
     * state of this IBusXEvent.
     * @default 0
     */
    state?: number;
    /** string of this IBusXEvent. */
    string?: string;
    /**
     * subwindow of this IBusXEvent.
     * @default 0
     */
    subwindow?: number;
    /**
     * time of this IBusXEvent.
     * @default 0
     */
    time?: number;
    /**
     * window of this IBusXEvent.
     * @default 0
     */
    window?: number;
    /**
     * x of this IBusXEvent.
     * @default 0
     */
    x?: number;
    /**
     * root-x of this IBusXEvent.
     * @default 0
     */
    'x-root'?: number;
    /**
     * x of this IBusXEvent.
     * @default 0
     */
    y?: number;
    /**
     * root-y of this IBusXEvent.
     * @default 0
     */
    'y-root'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IBusXEventConstructOnly = IBusSerializableConstructOnly | 'event-type' | 'group' | 'hardware-keycode' | 'is-modifier' | 'keyval' | 'length' | 'purpose' | 'root' | 'same-screen' | 'send-event' | 'serial' | 'state' | 'string' | 'subwindow' | 'time' | 'window' | 'x' | 'x-root' | 'y' | 'y-root';

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
