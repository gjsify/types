
import GarconGtk from './garcongtk-1.0.js';

declare global {
    export interface GjsGiImports {
        GarconGtk: typeof GarconGtk;
    }
}

export default GjsGiImports;


