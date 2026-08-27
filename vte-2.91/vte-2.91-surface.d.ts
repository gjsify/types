/**
 * The GIR-derived widget VOCABULARY for Vte-2.91.
 *
 * GENERATED — do not edit. Provenance: Vte-2.91 — library 0.84.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 1 concrete widgets, 1 declarations, 10 enum nick unions, 2 slot candidates.
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
import type Gtk from '@girs/gtk-3.0';
import type Pango from '@girs/pango-1.0';
import type Vte from './vte-2.91.js';
import type cairo from '@girs/cairo-1.0';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type VteAlignNick = 'start' | 'center' | 'end';
export type VteCursorBlinkModeNick = 'system' | 'on' | 'off';
export type VteCursorShapeNick = 'block' | 'ibeam' | 'underline';
export type VteEraseBindingNick = 'auto' | 'ascii-backspace' | 'ascii-delete' | 'delete-sequence' | 'tty';
export type VteFormatNick = 'text' | 'html';
export type VteProgressHintNick = 'inactive' | 'active' | 'error' | 'indeterminate' | 'paused';
export type VtePropertyIdNick = 'current-directory-uri' | 'current-file-uri' | 'xterm-title' | 'container-name' | 'container-runtime' | 'container-uid' | 'shell-precmd' | 'shell-preexec' | 'shell-postexec' | 'progress-hint' | 'progress-value' | 'icon-color' | 'icon-image';
export type VtePropertyTypeNick = 'valueless' | 'bool' | 'int' | 'uint' | 'double' | 'rgb' | 'rgba' | 'string' | 'data' | 'uuid' | 'uri' | 'image';
export type VteTextBlinkModeNick = 'never' | 'focused' | 'unfocused' | 'always';
export type VteWriteFlagsNick = 'default';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface VteTerminalProps extends GtkWidgetProps, GtkBuildableProps, GtkScrollableProps {
    /** Controls whether or not the terminal will attempt to draw bold text, by using a bold font variant. */
    'allow-bold'?: boolean;
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     * @since 0.50
     */
    'allow-hyperlink'?: boolean;
    /** Controls whether or not the terminal will beep when the child outputs the "bl" sequence. */
    'audible-bell'?: boolean;
    /** Controls what string or control sequence the terminal sends to its child when the user presses the backspace key. */
    'backspace-binding'?: VteEraseBindingNick | Vte.EraseBinding;
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart of the first 8 palette colors, in addition to making them bold (legacy behavior) or if SGR 1 only enables bold and leaves the color…
     * @since 0.52
     */
    'bold-is-bright'?: boolean;
    /**
     * Scale factor for the cell height, to increase line spacing.
     * @since 0.52
     */
    'cell-height-scale'?: number;
    /**
     * Scale factor for the cell width, to increase letter spacing.
     * @since 0.52
     */
    'cell-width-scale'?: number;
    /** This setting controls whether ambiguous-width characters are narrow or wide. */
    'cjk-ambiguous-width'?: number;
    /**
     * The menu used for context menus.
     * @since 0.76
     */
    'context-menu'?: Gtk.Menu | null;
    /**
     * The menu model used for context menus.
     * @since 0.76
     */
    'context-menu-model'?: Gio.MenuModel | null;
    /** Sets whether or not the cursor will blink. */
    'cursor-blink-mode'?: VteCursorBlinkModeNick | Vte.CursorBlinkMode;
    /** Controls the shape of the cursor. */
    'cursor-shape'?: VteCursorShapeNick | Vte.CursorShape;
    /** Controls what string or control sequence the terminal sends to its child when the user presses the delete key. */
    'delete-binding'?: VteEraseBindingNick | Vte.EraseBinding;
    /**
     * Controls whether or not a11y is enabled for the widget.
     * @since 0.78
     */
    'enable-a11y'?: boolean;
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     * @since 0.58
     */
    'enable-bidi'?: boolean;
    'enable-fallback-scrolling'?: boolean;
    /**
     * Whether legacy OSC 777 sequences are translated to their corresponding termprops.
     * @since 0.78
     */
    'enable-legacy-osc777'?: boolean;
    /**
     * Controls whether or not the terminal will shape Arabic text.
     * @since 0.58
     */
    'enable-shaping'?: boolean;
    /**
     * Controls whether SIXEL image support is enabled.
     * @since 0.62
     */
    'enable-sixel'?: boolean;
    /** Controls the encoding the terminal will expect data from the child to be encoded with. */
    encoding?: string | null;
    /** Specifies the font used for rendering all text displayed by the terminal, overriding any fonts set using gtk_widget_modify_font(). */
    'font-desc'?: Pango.FontDescription;
    /**
     * The terminal's font options, or %NULL to use the default font options.
     * @since 0.74
     */
    'font-options'?: cairo.FontOptions | null;
    /** The terminal's font scale. */
    'font-scale'?: number;
    /** Controls whether the terminal allows user input. */
    'input-enabled'?: boolean;
    /** Controls the value of the terminal's mouse autohide setting. */
    'pointer-autohide'?: boolean;
    /** The PTY object for the terminal. */
    pty?: Vte.Pty | null;
    /** Controls whether or not the terminal will rewrap its contents, including the scrollback buffer, whenever the terminal's width changes. */
    'rewrap-on-resize'?: boolean;
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of the viewable history when the text is inserted (e.g.
     * @since 0.76
     */
    'scroll-on-insert'?: boolean;
    /** Controls whether or not the terminal will forcibly scroll to the bottom of the viewable history when the user presses a key. */
    'scroll-on-keystroke'?: boolean;
    /** Controls whether or not the terminal will forcibly scroll to the bottom of the viewable history when the new data is received from the child. */
    'scroll-on-output'?: boolean;
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines or pixels.
     * @since 0.66
     */
    'scroll-unit-is-pixels'?: boolean;
    /** The length of the scrollback buffer used by the terminal. */
    'scrollback-lines'?: number;
    /**
     * Controls whether or not the terminal will allow blinking text.
     * @since 0.52
     */
    'text-blink-mode'?: VteTextBlinkModeNick | Vte.TextBlinkMode;
    /**
     * The horizontal alignment of @terminal within its allocation.
     * @since 0.76
     */
    xalign?: VteAlignNick | Vte.Align;
    /**
     * The horizontal fillment of @terminal within its allocation.
     * @since 0.76
     */
    xfill?: boolean;
    /**
     * The vertical alignment of @terminal within its allocation
     * @since 0.76
     */
    yalign?: VteAlignNick | Vte.Align;
    /**
     * The vertical fillment of @terminal within its allocation.
     * @since 0.76
     */
    yfill?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type VteTerminalConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

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
        slotCandidates: {
        'context-menu': 'set_context_menu';
        'geometry-hints-for-window': 'set_geometry_hints_for_window';
        };
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
export type WidgetGType = keyof Widgets;

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
