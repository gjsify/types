// The widget vocabulary of GnomeBluetooth-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GnomeBluetooth-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GnomeBluetooth',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    BluetoothChooser: ['device-selected', 'device-service-filter', 'device-type-filter', 'has-internal-device-filter', 'show-connected', 'show-device-category', 'show-device-type', 'show-device-type-column', 'show-pairing', 'show-searching'],
    BluetoothChooserButton: ['device'],
    BluetoothChooserCombo: ['device'],
    BluetoothFilterWidget: ['device-service-filter', 'device-type-filter', 'show-device-category', 'show-device-type'],
};

export const OWN_SIGNALS = {
    BluetoothChooser: ['selected-device-activated', 'selected-device-changed'],
    BluetoothChooserButton: ['chooser-created'],
    BluetoothChooserCombo: ['chooser-created'],
    BluetoothSettingsWidget: ['adapter-status-changed', 'panel-changed'],
};

export const DECLS = {
    BluetoothChooser: ['BluetoothChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    BluetoothChooserButton: ['BluetoothChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    BluetoothChooserCombo: ['BluetoothChooserCombo', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    BluetoothFilterWidget: ['BluetoothFilterWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    BluetoothSettingsWidget: ['BluetoothSettingsWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
