// The widget vocabulary of Eog-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Eog-3.0 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Eog',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Eog'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary'],
};

export const OWN_PROPS = {
    EogClipboardHandler: ['pixbuf', 'uri'],
    EogRemotePresenter: ['next-action', 'prev-action', 'thumbview'],
    EogScrollView: ['antialiasing-in', 'antialiasing-out', 'background-color', 'image', 'scrollwheel-zoom', 'transparency-color', 'transparency-style', 'use-background-color', 'zoom-mode', 'zoom-multiplier'],
    EogSidebar: ['current-page'],
    EogThumbNav: ['mode', 'show-buttons', 'thumbview'],
    EogURIConverter: ['convert-spaces', 'counter-n-digits', 'counter-start', 'n-images', 'space-character'],
    EogWindow: ['gallery-position', 'gallery-resizable', 'startup-flags'],
};

export const OWN_SIGNALS = {
    EogImage: ['changed', 'file-changed', 'next-frame', 'save-progress', 'size-prepared', 'thumbnail-changed'],
    EogJob: ['cancelled', 'finished', 'progress'],
    EogListStore: ['draw-thumbnail'],
    EogScrollView: ['next-image', 'previous-image', 'rotation-changed', 'zoom-changed'],
    EogSidebar: ['page-added', 'page-removed'],
    EogWindow: ['prepared'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    EogApplication: ['EogApplication', 'GtkApplication', 'GApplication', 'GObject', 'GActionGroup', 'GActionMap'],
    EogClipboardHandler: ['EogClipboardHandler', 'GInitiallyUnowned', 'GObject'],
    EogDetailsDialog: ['EogDetailsDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    EogFileChooser: ['EogFileChooser', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkFileChooser'],
    EogImage: ['EogImage', 'GObject'],
    EogImageSaveInfo: ['EogImageSaveInfo', 'GObject'],
    EogJobCopy: ['EogJobCopy', 'EogJob', 'GObject'],
    EogJobLoad: ['EogJobLoad', 'EogJob', 'GObject'],
    EogJobModel: ['EogJobModel', 'EogJob', 'GObject'],
    EogJobSave: ['EogJobSave', 'EogJob', 'GObject'],
    EogJobSaveAs: ['EogJobSaveAs', 'EogJobSave', 'EogJob', 'GObject'],
    EogJobThumbnail: ['EogJobThumbnail', 'EogJob', 'GObject'],
    EogJobTransform: ['EogJobTransform', 'EogJob', 'GObject'],
    EogListStore: ['EogListStore', 'GtkListStore', 'GObject', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    EogRemotePresenter: ['EogRemotePresenter', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    EogScrollView: ['EogScrollView', 'GtkOverlay', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    EogSidebar: ['EogSidebar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    EogStatusbar: ['EogStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    EogThumbNav: ['EogThumbNav', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    EogThumbView: ['EogThumbView', 'GtkIconView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellLayout', 'GtkOrientable', 'GtkScrollable'],
    EogTransform: ['EogTransform', 'GObject'],
    EogURIConverter: ['EogURIConverter', 'GObject'],
    EogWindow: ['EogWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GActionGroup', 'GActionMap', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
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
    'EogImageMetadataStatus.not-available': 1,
    'EogImageMetadataStatus.not-read': 0,
    'EogImageMetadataStatus.ready': 2,
    'EogImageStatus.failed': 4,
    'EogImageStatus.loaded': 2,
    'EogImageStatus.loading': 1,
    'EogImageStatus.saving': 3,
    'EogImageStatus.unknown': 0,
    'EogJobPriority.n-priorities': 3,
    'EogJobPriority.priority-high': 0,
    'EogJobPriority.priority-low': 2,
    'EogJobPriority.priority-medium': 1,
    'EogListStoreColumn.eog-image': 2,
    'EogListStoreColumn.eog-job': 3,
    'EogListStoreColumn.num-columns': 4,
    'EogListStoreColumn.thumb-set': 1,
    'EogListStoreColumn.thumbnail': 0,
    'EogThumbNavMode.multiple-columns': 3,
    'EogThumbNavMode.multiple-rows': 2,
    'EogThumbNavMode.one-column': 1,
    'EogThumbNavMode.one-row': 0,
    'EogThumbViewSelectionChange.current': 0,
    'EogThumbViewSelectionChange.first': 3,
    'EogThumbViewSelectionChange.last': 4,
    'EogThumbViewSelectionChange.left': 1,
    'EogThumbViewSelectionChange.random': 5,
    'EogThumbViewSelectionChange.right': 2,
    'EogTransformType.flip-horizontal': 4,
    'EogTransformType.flip-vertical': 5,
    'EogTransformType.none': 0,
    'EogTransformType.rot-180': 2,
    'EogTransformType.rot-270': 3,
    'EogTransformType.rot-90': 1,
    'EogTransformType.transpose': 6,
    'EogTransformType.transverse': 7,
    'EogTransparencyStyle.background': 0,
    'EogTransparencyStyle.checked': 1,
    'EogTransparencyStyle.color': 2,
    'EogUCType.comment': 3,
    'EogUCType.counter': 2,
    'EogUCType.date': 4,
    'EogUCType.day': 6,
    'EogUCType.end': 12,
    'EogUCType.filename': 1,
    'EogUCType.hour': 9,
    'EogUCType.minute': 10,
    'EogUCType.month': 7,
    'EogUCType.second': 11,
    'EogUCType.string': 0,
    'EogUCType.time': 5,
    'EogUCType.year': 8,
    'EogWindowError.control-not-found': 0,
    'EogWindowError.generic': 5,
    'EogWindowError.io': 3,
    'EogWindowError.no-persist-file-interface': 2,
    'EogWindowError.trash-not-found': 4,
    'EogWindowError.ui-not-found': 1,
    'EogWindowError.unknown': 6,
    'EogWindowGalleryPos.bottom': 0,
    'EogWindowGalleryPos.left': 1,
    'EogWindowGalleryPos.right': 3,
    'EogWindowGalleryPos.top': 2,
    'EogWindowMode.fullscreen': 2,
    'EogWindowMode.normal': 1,
    'EogWindowMode.slideshow': 3,
    'EogWindowMode.unknown': 0,
    'EogZoomMode.free': 0,
    'EogZoomMode.shrink-to-fit': 1,
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
    'EogDebug.image-data': 16,
    'EogDebug.image-load': 32,
    'EogDebug.image-save': 64,
    'EogDebug.jobs': 4,
    'EogDebug.lcms': 1024,
    'EogDebug.list-store': 128,
    'EogDebug.no-debug': 0,
    'EogDebug.plugins': 2048,
    'EogDebug.preferences': 256,
    'EogDebug.printing': 512,
    'EogDebug.thumbnail': 8,
    'EogDebug.view': 2,
    'EogDebug.window': 1,
    'EogImageData.dimension': 2,
    'EogImageData.exif': 4,
    'EogImageData.image': 1,
    'EogImageData.xmp': 8,
    'EogStartupFlags.disable-gallery': 4,
    'EogStartupFlags.fullscreen': 1,
    'EogStartupFlags.single-window': 8,
    'EogStartupFlags.slide-show': 2,
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
    'EogScrollView.transparency-style': 'EogTransparencyStyle',
    'EogScrollView.zoom-mode': 'EogZoomMode',
    'EogWindow.gallery-position': 'EogWindowGalleryPos',
    'EogWindow.startup-flags': 'EogStartupFlags',
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
