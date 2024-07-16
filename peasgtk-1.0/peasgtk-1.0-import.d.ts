
import PeasGtk from './peasgtk-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        PeasGtk: typeof PeasGtk;
    }
}

export default GjsGiImports;


