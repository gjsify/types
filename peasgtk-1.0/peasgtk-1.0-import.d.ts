
import PeasGtk from './peasgtk-1.0.js';

declare global {
    export interface GjsGiImports {
        PeasGtk: typeof PeasGtk;
    }
}

export default GjsGiImports;


