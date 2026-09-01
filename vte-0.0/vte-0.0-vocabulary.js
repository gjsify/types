// The widget vocabulary of Vte-0.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Vte-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Vte',
    version: '0.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    VteTerminal: ['allow-bold', 'audible-bell', 'background-image-file', 'background-image-pixbuf', 'background-opacity', 'background-saturation', 'background-tint-color', 'background-transparent', 'backspace-binding', 'cursor-blink-mode', 'cursor-shape', 'delete-binding', 'emulation', 'encoding', 'font-desc', 'pointer-autohide', 'pty', 'pty-object', 'scroll-background', 'scroll-on-keystroke', 'scroll-on-output', 'scrollback-lines', 'visible-bell', 'word-chars'],
};

export const OWN_SIGNALS = {
    VteTerminal: ['beep', 'char-size-changed', 'child-exited', 'commit', 'contents-changed', 'copy-clipboard', 'cursor-moved', 'decrease-font-size', 'deiconify-window', 'emulation-changed', 'encoding-changed', 'eof', 'icon-title-changed', 'iconify-window', 'increase-font-size', 'lower-window', 'maximize-window', 'move-window', 'paste-clipboard', 'raise-window', 'refresh-window', 'resize-window', 'restore-window', 'selection-changed', 'set-scroll-adjustments', 'status-line-changed', 'text-deleted', 'text-inserted', 'text-modified', 'text-scrolled', 'window-title-changed'],
};

export const DECLS = {
    VteTerminal: ['VteTerminal', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VteTerminalAntiAlias: ['use-default', 'force-enable', 'force-disable'],
    VteTerminalCursorBlinkMode: ['system', 'on', 'off'],
    VteTerminalCursorShape: ['block', 'ibeam', 'underline'],
    VteTerminalEraseBinding: ['auto', 'ascii-backspace', 'ascii-delete', 'delete-sequence', 'tty'],
    VteTerminalWriteFlags: ['default'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'VteTerminal.allow-bold': '0.20',
    'VteTerminal.audible-bell': '0.20',
    'VteTerminal.background-image-file': '0.20',
    'VteTerminal.background-image-pixbuf': '0.20',
    'VteTerminal.background-opacity': '0.20',
    'VteTerminal.background-saturation': '0.20',
    'VteTerminal.background-tint-color': '0.20',
    'VteTerminal.background-transparent': '0.20',
    'VteTerminal.backspace-binding': '0.20',
    'VteTerminal.cursor-blink-mode': '0.20',
    'VteTerminal.cursor-shape': '0.20',
    'VteTerminal.delete-binding': '0.20',
    'VteTerminal.emulation': '0.20',
    'VteTerminal.encoding': '0.20',
    'VteTerminal.font-desc': '0.20',
    'VteTerminal.pointer-autohide': '0.20',
    'VteTerminal.pty': '0.20',
    'VteTerminal.pty-object': '0.26',
    'VteTerminal.scroll-background': '0.20',
    'VteTerminal.scroll-on-keystroke': '0.20',
    'VteTerminal.scroll-on-output': '0.20',
    'VteTerminal.scrollback-lines': '0.20',
    'VteTerminal.visible-bell': '0.20',
    'VteTerminal.word-chars': '0.20',
    'VteTerminal::set-scroll-adjustments': '0.17.1',
};
