// The widget vocabulary of Vte-4-2.91 as runtime data.
//
// GENERATED — do not edit. Provenance: Vte-4-2.91 — library 0.69.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Vte-4-2.91 — library 0.69.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    VteTerminal: ['allow-bold', 'allow-hyperlink', 'audible-bell', 'backspace-binding', 'bold-is-bright', 'cell-height-scale', 'cell-width-scale', 'cjk-ambiguous-width', 'cursor-blink-mode', 'cursor-shape', 'delete-binding', 'enable-bidi', 'enable-fallback-scrolling', 'enable-shaping', 'enable-sixel', 'encoding', 'font-desc', 'font-scale', 'input-enabled', 'pointer-autohide', 'pty', 'rewrap-on-resize', 'scroll-on-keystroke', 'scroll-on-output', 'scroll-unit-is-pixels', 'scrollback-lines', 'text-blink-mode', 'xalign', 'xfill', 'yalign', 'yfill'],
};

export const OWN_SIGNALS = {
    VteTerminal: ['bell', 'char-size-changed', 'child-exited', 'commit', 'contents-changed', 'copy-clipboard', 'current-directory-uri-changed', 'current-file-uri-changed', 'cursor-moved', 'decrease-font-size', 'deiconify-window', 'encoding-changed', 'eof', 'hyperlink-hover-uri-changed', 'icon-title-changed', 'iconify-window', 'increase-font-size', 'lower-window', 'maximize-window', 'move-window', 'paste-clipboard', 'raise-window', 'refresh-window', 'resize-window', 'restore-window', 'selection-changed', 'window-title-changed'],
};

export const DECLS = {
    VteTerminal: ['VteTerminal', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
};

export const ENUM_NICKS = {
    VteAlign: ['start', 'center', 'end'],
    VteCursorBlinkMode: ['system', 'on', 'off'],
    VteCursorShape: ['block', 'ibeam', 'underline'],
    VteEraseBinding: ['auto', 'ascii-backspace', 'ascii-delete', 'delete-sequence', 'tty'],
    VteFormat: ['text', 'html'],
    VteTextBlinkMode: ['never', 'focused', 'unfocused', 'always'],
    VteWriteFlags: ['default'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'VteTerminal.allow-hyperlink': '0.50',
    'VteTerminal.bold-is-bright': '0.52',
    'VteTerminal.cell-height-scale': '0.52',
    'VteTerminal.cell-width-scale': '0.52',
    'VteTerminal.enable-bidi': '0.58',
    'VteTerminal.enable-shaping': '0.58',
    'VteTerminal.enable-sixel': '0.62',
    'VteTerminal.scroll-unit-is-pixels': '0.66',
    'VteTerminal.text-blink-mode': '0.52',
    'VteTerminal.xalign': '0.70',
    'VteTerminal.xfill': '0.70',
    'VteTerminal.yalign': '0.70',
    'VteTerminal.yfill': '0.70',
};
