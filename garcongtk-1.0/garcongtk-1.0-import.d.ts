import GarconGtk10 from '@girs/garcongtk-1.0';

declare global {
    export interface GjsGiImports {
        GarconGtk: typeof GarconGtk10;
    }
}

export default GjsGiImports;
