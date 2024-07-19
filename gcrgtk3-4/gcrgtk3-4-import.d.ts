import GcrGtk34 from '@girs/gcrgtk3-4';

declare global {
    export interface GjsGiImports {
        GcrGtk3: typeof GcrGtk34;
    }
}

export default GjsGiImports;
