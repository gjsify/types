// The widget vocabulary of Eom-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Eom-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Eom-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    EomPropertiesDialog: ['netbook-mode', 'thumbview'],
    EomScrollView: ['antialiasing-in', 'antialiasing-out', 'background-color', 'image', 'scrollwheel-zoom', 'transparency-color', 'transparency-style', 'use-background-color', 'zoom-multiplier'],
    EomSidebar: ['current-page'],
    EomThumbNav: ['mode', 'show-buttons', 'thumbview'],
    EomWindow: ['collection-position', 'collection-resizable', 'startup-flags'],
};

export const OWN_SIGNALS = {
    EomScrollView: ['zoom-changed'],
    EomSidebar: ['page-added', 'page-removed'],
    EomWindow: ['prepared'],
};

export const DECLS = {
    EomFileChooser: ['EomFileChooser', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkFileChooser'],
    EomPropertiesDialog: ['EomPropertiesDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EomScrollView: ['EomScrollView', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EomSidebar: ['EomSidebar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EomStatusbar: ['EomStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EomThumbNav: ['EomThumbNav', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EomThumbView: ['EomThumbView', 'GtkIconView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellLayout', 'GtkOrientable', 'GtkScrollable'],
    EomWindow: ['EomWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    EomImageMetadataStatus: ['not-read', 'not-available', 'ready'],
    EomImageStatus: ['unknown', 'loading', 'loaded', 'saving', 'failed'],
    EomJobSaveResponse: ['none', 'retry', 'skip', 'overwrite', 'cancel', 'last'],
    EomListStoreColumn: ['thumbnail', 'thumb-set', 'eom-image', 'eom-job', 'num-columns'],
    EomPropertiesDialogPage: ['page-general', 'page-exif', 'page-details', 'n-pages'],
    EomThumbNavMode: ['one-row', 'one-column', 'multiple-rows', 'multiple-columns'],
    EomThumbViewSelectionChange: ['current', 'left', 'right', 'first', 'last', 'random'],
    EomTransformType: ['none', 'rot-90', 'rot-180', 'rot-270', 'flip-horizontal', 'flip-vertical', 'transpose', 'transverse'],
    EomTransparencyStyle: ['background', 'checked', 'color'],
    EomWindowCollectionPos: ['bottom', 'left', 'top', 'right'],
    EomWindowError: ['control-not-found', 'ui-not-found', 'no-persist-file-interface', 'io', 'trash-not-found', 'generic', 'unknown'],
    EomWindowMode: ['unknown', 'normal', 'fullscreen', 'slideshow'],
};

export const SLOT_CANDIDATES = {
    EomScrollView: {
        'popup': 'set_popup',
    },
    EomSidebar: {
        'page': 'set_page',
    },
    EomThumbView: {
        'thumbnail-popup': 'set_thumbnail_popup',
    },
};

export const SINCE = {};
