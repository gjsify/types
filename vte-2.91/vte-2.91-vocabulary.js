// The widget vocabulary of Vte-2.91 as runtime data.
//
// GENERATED — do not edit. Provenance: Vte-2.91 — library 0.84.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Vte',
    version: '2.91',
    libraryVersion: '0.84.1',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    VteTerminal: ['allow-bold', 'allow-hyperlink', 'audible-bell', 'backspace-binding', 'bold-is-bright', 'cell-height-scale', 'cell-width-scale', 'cjk-ambiguous-width', 'context-menu', 'context-menu-model', 'cursor-blink-mode', 'cursor-shape', 'delete-binding', 'enable-a11y', 'enable-bidi', 'enable-fallback-scrolling', 'enable-legacy-osc777', 'enable-shaping', 'enable-sixel', 'encoding', 'font-desc', 'font-options', 'font-scale', 'input-enabled', 'pointer-autohide', 'pty', 'rewrap-on-resize', 'scroll-on-insert', 'scroll-on-keystroke', 'scroll-on-output', 'scroll-unit-is-pixels', 'scrollback-lines', 'text-blink-mode', 'xalign', 'xfill', 'yalign', 'yfill'],
};

export const OWN_SIGNALS = {
    VteTerminal: ['bell', 'char-size-changed', 'child-exited', 'commit', 'contents-changed', 'copy-clipboard', 'current-directory-uri-changed', 'current-file-uri-changed', 'cursor-moved', 'decrease-font-size', 'deiconify-window', 'encoding-changed', 'eof', 'hyperlink-hover-uri-changed', 'icon-title-changed', 'iconify-window', 'increase-font-size', 'lower-window', 'maximize-window', 'move-window', 'paste-clipboard', 'raise-window', 'refresh-window', 'resize-window', 'restore-window', 'selection-changed', 'setup-context-menu', 'termprop-changed', 'termprops-changed', 'text-deleted', 'text-inserted', 'text-modified', 'text-scrolled', 'window-title-changed'],
};

export const DECLS = {
    VteTerminal: ['VteTerminal', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VteAlign: ['start', 'center', 'end'],
    VteCursorBlinkMode: ['system', 'on', 'off'],
    VteCursorShape: ['block', 'ibeam', 'underline'],
    VteEraseBinding: ['auto', 'ascii-backspace', 'ascii-delete', 'delete-sequence', 'tty'],
    VteFormat: ['text', 'html'],
    VteProgressHint: ['inactive', 'active', 'error', 'indeterminate', 'paused'],
    VtePropertyId: ['current-directory-uri', 'current-file-uri', 'xterm-title', 'container-name', 'container-runtime', 'container-uid', 'shell-precmd', 'shell-preexec', 'shell-postexec', 'progress-hint', 'progress-value', 'icon-color', 'icon-image'],
    VtePropertyType: ['valueless', 'bool', 'int', 'uint', 'double', 'rgb', 'rgba', 'string', 'data', 'uuid', 'uri', 'image'],
    VteTextBlinkMode: ['never', 'focused', 'unfocused', 'always'],
    VteWriteFlags: ['default'],
};

export const SLOT_CANDIDATES = {
    VteTerminal: {
        'context-menu': 'set_context_menu',
        'geometry-hints-for-window': 'set_geometry_hints_for_window',
    },
};

export const SINCE = {
    'VteTerminal.allow-hyperlink': '0.50',
    'VteTerminal.bold-is-bright': '0.52',
    'VteTerminal.cell-height-scale': '0.52',
    'VteTerminal.cell-width-scale': '0.52',
    'VteTerminal.context-menu': '0.76',
    'VteTerminal.context-menu-model': '0.76',
    'VteTerminal.enable-a11y': '0.78',
    'VteTerminal.enable-bidi': '0.58',
    'VteTerminal.enable-legacy-osc777': '0.78',
    'VteTerminal.enable-shaping': '0.58',
    'VteTerminal.enable-sixel': '0.62',
    'VteTerminal.font-options': '0.74',
    'VteTerminal.scroll-on-insert': '0.76',
    'VteTerminal.scroll-unit-is-pixels': '0.66',
    'VteTerminal.text-blink-mode': '0.52',
    'VteTerminal.xalign': '0.76',
    'VteTerminal.xfill': '0.76',
    'VteTerminal.yalign': '0.76',
    'VteTerminal.yfill': '0.76',
    'VteTerminal::hyperlink-hover-uri-changed': '0.50',
    'VteTerminal::termprop-changed': '0.78',
    'VteTerminal::termprops-changed': '0.78',
};
