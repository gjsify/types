/**
 * The GIR-derived widget VOCABULARY for Vte-0.0.
 *
 * GENERATED — do not edit. Provenance: Vte-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 1 concrete widgets, 1 declarations, 5 enum nick unions, 0 slot candidates.
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

import type Gdk from '@girs/gdk-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Pango from '@girs/pango-1.0';
import type Vte from './vte-0.0.js';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkObjectConstructOnly, GtkObjectProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-2.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type VteTerminalAntiAliasNick = 'use-default' | 'force-enable' | 'force-disable';
export type VteTerminalCursorBlinkModeNick = 'system' | 'on' | 'off';
export type VteTerminalCursorShapeNick = 'block' | 'ibeam' | 'underline';
export type VteTerminalEraseBindingNick = 'auto' | 'ascii-backspace' | 'ascii-delete' | 'delete-sequence' | 'tty';
export type VteTerminalWriteFlagsNick = 'default';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** All of these fields should be considered read-only and deprecated. */
export interface VteTerminalProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * Controls whether or not the terminal will attempt to draw bold text.
     * @since 0.20
     */
    'allow-bold'?: boolean;
    /**
     * Controls whether or not the terminal will beep when the child outputs the "bl" sequence.
     * @since 0.20
     */
    'audible-bell'?: boolean;
    /**
     * Sets a background image file for the widget.
     * @since 0.20
     */
    'background-image-file'?: string;
    /**
     * Sets a background image for the widget.
     * @since 0.20
     */
    'background-image-pixbuf'?: GdkPixbuf.Pixbuf;
    /**
     * Sets the opacity of the terminal background, were 0.0 means completely transparent and 1.0 means completely opaque.
     * @since 0.20
     */
    'background-opacity'?: number;
    /**
     * If a background image has been set using #VteTerminal:background-image-file: or #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:, and the saturation value is less than 1…
     * @since 0.20
     */
    'background-saturation'?: number;
    /**
     * If a background image has been set using #VteTerminal:background-image-file: or #VteTerminal:background-image-pixbuf:, or #VteTerminal:background-transparent:, and and the value set by VteTerminal:ba…
     * @since 0.20
     */
    'background-tint-color'?: Gdk.Color;
    /**
     * Sets whther the terminal uses the pixmap stored in the root window as the background, adjusted so that if there are no windows below your application, the widget will appear to be transparent.
     * @since 0.20
     */
    'background-transparent'?: boolean;
    /**
     * *Controls what string or control sequence the terminal sends to its child when the user presses the backspace key.
     * @since 0.20
     */
    'backspace-binding'?: VteTerminalEraseBindingNick | Vte.TerminalEraseBinding;
    /**
     * Sets whether or not the cursor will blink.
     * @since 0.20
     */
    'cursor-blink-mode'?: VteTerminalCursorBlinkModeNick | Vte.TerminalCursorBlinkMode;
    /**
     * Controls the shape of the cursor.
     * @since 0.20
     */
    'cursor-shape'?: VteTerminalCursorShapeNick | Vte.TerminalCursorShape;
    /**
     * Controls what string or control sequence the terminal sends to its child when the user presses the delete key.
     * @since 0.20
     */
    'delete-binding'?: VteTerminalEraseBindingNick | Vte.TerminalEraseBinding;
    /**
     * Sets what type of terminal the widget attempts to emulate by scanning for control sequences defined in the system's termcap file.
     * @since 0.20
     */
    emulation?: string;
    /**
     * Controls the encoding the terminal will expect data from the child to be encoded with.
     * @since 0.20
     */
    encoding?: string;
    /**
     * Specifies the font used for rendering all text displayed by the terminal, overriding any fonts set using gtk_widget_modify_font().
     * @since 0.20
     */
    'font-desc'?: Pango.FontDescription;
    /**
     * Controls the value of the terminal's mouse autohide setting.
     * @since 0.20
     */
    'pointer-autohide'?: boolean;
    /**
     * The file descriptor of the master end of the terminal's PTY.
     * @since 0.20
     */
    pty?: number;
    /**
     * The PTY object for the terminal.
     * @since 0.26
     */
    'pty-object'?: Vte.Pty;
    /**
     * Controls whether or not the terminal will scroll the background image (if one is set) when the text in the window must be scrolled.
     * @since 0.20
     */
    'scroll-background'?: boolean;
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of the viewable history when the user presses a key.
     * @since 0.20
     */
    'scroll-on-keystroke'?: boolean;
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of the viewable history when the new data is received from the child.
     * @since 0.20
     */
    'scroll-on-output'?: boolean;
    /**
     * The length of the scrollback buffer used by the terminal.
     * @since 0.20
     */
    'scrollback-lines'?: number;
    /**
     * Controls whether the terminal will present a visible bell to the user when the child outputs the "bl" sequence.
     * @since 0.20
     */
    'visible-bell'?: boolean;
    /**
     * When the user double-clicks to start selection, the terminal will extend the selection on word boundaries.
     * @since 0.20
     */
    'word-chars'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VteTerminalConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

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
    VteTerminal: {
        class: Vte.Terminal;
        props: VteTerminalProps;
        signals: Vte.Terminal.SignalSignatures;
        constructOnly: VteTerminalConstructOnly;
        slotCandidates: {};
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
