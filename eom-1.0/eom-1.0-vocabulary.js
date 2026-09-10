// The widget vocabulary of Eom-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Eom-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Eom',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

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

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

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

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'EomImageMetadataStatus.not-available': 1,
    'EomImageMetadataStatus.not-read': 0,
    'EomImageMetadataStatus.ready': 2,
    'EomImageStatus.failed': 4,
    'EomImageStatus.loaded': 2,
    'EomImageStatus.loading': 1,
    'EomImageStatus.saving': 3,
    'EomImageStatus.unknown': 0,
    'EomJobSaveResponse.cancel': 4,
    'EomJobSaveResponse.last': 5,
    'EomJobSaveResponse.none': 0,
    'EomJobSaveResponse.overwrite': 3,
    'EomJobSaveResponse.retry': 1,
    'EomJobSaveResponse.skip': 2,
    'EomListStoreColumn.eom-image': 2,
    'EomListStoreColumn.eom-job': 3,
    'EomListStoreColumn.num-columns': 4,
    'EomListStoreColumn.thumb-set': 1,
    'EomListStoreColumn.thumbnail': 0,
    'EomPropertiesDialogPage.n-pages': 3,
    'EomPropertiesDialogPage.page-details': 2,
    'EomPropertiesDialogPage.page-exif': 1,
    'EomPropertiesDialogPage.page-general': 0,
    'EomThumbNavMode.multiple-columns': 3,
    'EomThumbNavMode.multiple-rows': 2,
    'EomThumbNavMode.one-column': 1,
    'EomThumbNavMode.one-row': 0,
    'EomThumbViewSelectionChange.current': 0,
    'EomThumbViewSelectionChange.first': 3,
    'EomThumbViewSelectionChange.last': 4,
    'EomThumbViewSelectionChange.left': 1,
    'EomThumbViewSelectionChange.random': 5,
    'EomThumbViewSelectionChange.right': 2,
    'EomTransformType.flip-horizontal': 4,
    'EomTransformType.flip-vertical': 5,
    'EomTransformType.none': 0,
    'EomTransformType.rot-180': 2,
    'EomTransformType.rot-270': 3,
    'EomTransformType.rot-90': 1,
    'EomTransformType.transpose': 6,
    'EomTransformType.transverse': 7,
    'EomTransparencyStyle.background': 0,
    'EomTransparencyStyle.checked': 1,
    'EomTransparencyStyle.color': 2,
    'EomWindowCollectionPos.bottom': 0,
    'EomWindowCollectionPos.left': 1,
    'EomWindowCollectionPos.right': 3,
    'EomWindowCollectionPos.top': 2,
    'EomWindowError.control-not-found': 0,
    'EomWindowError.generic': 5,
    'EomWindowError.io': 3,
    'EomWindowError.no-persist-file-interface': 2,
    'EomWindowError.trash-not-found': 4,
    'EomWindowError.ui-not-found': 1,
    'EomWindowError.unknown': 6,
    'EomWindowMode.fullscreen': 2,
    'EomWindowMode.normal': 1,
    'EomWindowMode.slideshow': 3,
    'EomWindowMode.unknown': 0,
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'EomDebug.image-data': 16,
    'EomDebug.image-load': 32,
    'EomDebug.image-save': 64,
    'EomDebug.jobs': 4,
    'EomDebug.lcms': 1024,
    'EomDebug.list-store': 128,
    'EomDebug.no-debug': 0,
    'EomDebug.plugins': 2048,
    'EomDebug.preferences': 256,
    'EomDebug.printing': 512,
    'EomDebug.thumbnail': 8,
    'EomDebug.view': 2,
    'EomDebug.window': 1,
    'EomImageData.dimension': 2,
    'EomImageData.exif': 4,
    'EomImageData.image': 1,
    'EomImageData.xmp': 8,
    'EomStartupFlags.disable-collection': 4,
    'EomStartupFlags.fullscreen': 1,
    'EomStartupFlags.preserve-order': 8,
    'EomStartupFlags.slide-show': 2,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

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
