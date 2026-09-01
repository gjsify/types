// The widget vocabulary of Eog-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Eog-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Eog',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    EogRemotePresenter: ['next-action', 'prev-action', 'thumbview'],
    EogScrollView: ['antialiasing-in', 'antialiasing-out', 'background-color', 'image', 'scrollwheel-zoom', 'transparency-color', 'transparency-style', 'use-background-color', 'zoom-mode', 'zoom-multiplier'],
    EogSidebar: ['current-page'],
    EogThumbNav: ['mode', 'show-buttons', 'thumbview'],
    EogWindow: ['gallery-position', 'gallery-resizable', 'startup-flags'],
};

export const OWN_SIGNALS = {
    EogScrollView: ['next-image', 'previous-image', 'rotation-changed', 'zoom-changed'],
    EogSidebar: ['page-added', 'page-removed'],
    EogWindow: ['prepared'],
};

export const DECLS = {
    EogDetailsDialog: ['EogDetailsDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EogFileChooser: ['EogFileChooser', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkFileChooser'],
    EogRemotePresenter: ['EogRemotePresenter', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EogScrollView: ['EogScrollView', 'GtkOverlay', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    EogSidebar: ['EogSidebar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EogStatusbar: ['EogStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EogThumbNav: ['EogThumbNav', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EogThumbView: ['EogThumbView', 'GtkIconView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellLayout', 'GtkOrientable', 'GtkScrollable'],
    EogWindow: ['EogWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EogImageMetadataStatus: ['not-read', 'not-available', 'ready'],
    EogImageStatus: ['unknown', 'loading', 'loaded', 'saving', 'failed'],
    EogJobPriority: ['priority-high', 'priority-medium', 'priority-low', 'n-priorities'],
    EogListStoreColumn: ['thumbnail', 'thumb-set', 'eog-image', 'eog-job', 'num-columns'],
    EogThumbNavMode: ['one-row', 'one-column', 'multiple-rows', 'multiple-columns'],
    EogThumbViewSelectionChange: ['current', 'left', 'right', 'first', 'last', 'random'],
    EogTransformType: ['none', 'rot-90', 'rot-180', 'rot-270', 'flip-horizontal', 'flip-vertical', 'transpose', 'transverse'],
    EogTransparencyStyle: ['background', 'checked', 'color'],
    EogUCType: ['string', 'filename', 'counter', 'comment', 'date', 'time', 'day', 'month', 'year', 'hour', 'minute', 'second', 'end'],
    EogWindowError: ['control-not-found', 'ui-not-found', 'no-persist-file-interface', 'io', 'trash-not-found', 'generic', 'unknown'],
    EogWindowGalleryPos: ['bottom', 'left', 'top', 'right'],
    EogWindowMode: ['unknown', 'normal', 'fullscreen', 'slideshow'],
    EogZoomMode: ['free', 'shrink-to-fit'],
};

export const SLOT_CANDIDATES = {
    EogScrollView: {
        'popup': 'set_popup',
    },
    EogSidebar: {
        'page': 'set_page',
    },
    EogThumbView: {
        'thumbnail-popup': 'set_thumbnail_popup',
    },
};

export const SINCE = {};
