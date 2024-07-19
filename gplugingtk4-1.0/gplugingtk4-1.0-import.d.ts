import GPluginGtk410 from '@girs/gplugingtk4-1.0';

declare global {
    export interface GjsGiImports {
        GPluginGtk4: typeof GPluginGtk410;
    }
}

export default GjsGiImports;
