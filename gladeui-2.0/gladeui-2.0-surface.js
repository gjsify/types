// The widget vocabulary of Gladeui-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gladeui-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gladeui.EditorProperty.property-def
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gladeui-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gladeui.EditorProperty.property-def';

export const OWN_PROPS = {
    GladeAdaptorChooser: ['project'],
    GladeBaseEditor: ['container'],
    GladeDesignView: ['project'],
    GladeEditor: ['show-boder', 'show-class-field', 'widget'],
    GladeEditorProperty: ['custom-text', 'disable-check', 'property-def', 'use-command'],
    GladeEditorTable: ['page-type'],
    GladeInspector: ['project'],
    GladePalette: ['item-appearance', 'project', 'show-selector-button', 'use-small-item-icons'],
    GladePropertyLabel: ['append-colon', 'custom-text', 'custom-tooltip', 'packing', 'property', 'property-name'],
    GladePropertyShell: ['custom-text', 'disable-check', 'editor-type', 'packing', 'property-name', 'use-command'],
    GladeSignalEditor: ['glade-widget'],
};

export const OWN_SIGNALS = {
    GladeBaseEditor: ['build-child', 'change-type', 'child-selected', 'delete-child', 'get-display-name', 'move-child'],
    GladeEditorProperty: ['commit', 'value-changed'],
    GladeInspector: ['item-activated', 'selection-changed'],
    GladeNamedIconChooserDialog: ['icon-activated', 'selection-changed'],
    GladePalette: ['refresh'],
    GladePropertyShell: ['post-commit', 'pre-commit'],
    GladeSignalEditor: ['callback-suggestions', 'detail-suggestions', 'signal-activated'],
};

export const DECLS = {
    GladeAdaptorChooser: ['GladeAdaptorChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeBaseEditor: ['GladeBaseEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeDesignView: ['GladeDesignView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropBool: ['GladeEPropBool', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropCheck: ['GladeEPropCheck', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropColor: ['GladeEPropColor', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropEnum: ['GladeEPropEnum', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropFlags: ['GladeEPropFlags', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropNamedIcon: ['GladeEPropNamedIcon', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropNumeric: ['GladeEPropNumeric', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropObject: ['GladeEPropObject', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropObjects: ['GladeEPropObjects', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropText: ['GladeEPropText', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropUnichar: ['GladeEPropUnichar', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditor: ['GladeEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorProperty: ['GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorSkeleton: ['GladeEditorSkeleton', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorTable: ['GladeEditorTable', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeInspector: ['GladeInspector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeNamedIconChooserDialog: ['GladeNamedIconChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GladePalette: ['GladePalette', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladePlaceholder: ['GladePlaceholder', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GladePropertyLabel: ['GladePropertyLabel', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable'],
    GladePropertyShell: ['GladePropertyShell', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeSignalEditor: ['GladeSignalEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

export const ENUM_NICKS = {
    GladeCreateReason: ['user', 'copy', 'load', 'rebuild', 'reasons'],
    GladeCursorType: ['selector', 'add-widget', 'resize-top-left', 'resize-top-right', 'resize-bottom-left', 'resize-bottom-right', 'resize-left', 'resize-right', 'resize-top', 'resize-bottom', 'drag'],
    GladeEditorPageType: ['general', 'common', 'packing', 'atk', 'query', 'signal'],
    GladeItemAppearance: ['icon-and-label', 'icon-only', 'label-only'],
    GladePointerMode: ['select', 'add-widget', 'drag-resize', 'margin-edit', 'align-edit'],
    GladeProjectModelColumns: ['column-icon-name', 'column-name', 'column-type-name', 'column-object', 'column-misc', 'column-warning', 'n-columns'],
    GladeSignalModelColumns: ['column-name', 'column-show-name', 'column-handler', 'column-object', 'column-swap', 'column-after', 'column-tooltip', 'column-signal', 'column-detail', 'n-columns'],
    GladeStock: ['Dummy'],
    GladeStockImage: ['Dummy'],
    GladeUIMessageType: ['info', 'warn', 'error', 'are-you-sure', 'yes-or-no'],
    GladeUtilFileDialogType: ['open', 'save'],
};

export const SLOT_CANDIDATES = {
    GladeEditorSkeleton: {
        'editor': 'add_editor',
    },
};

export const SINCE = {};
