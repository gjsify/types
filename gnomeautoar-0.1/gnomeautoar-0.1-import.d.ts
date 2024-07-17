
import GnomeAutoar from './gnomeautoar-0.1.js';

declare global {
    export interface GjsGiImports {
        GnomeAutoar: typeof GnomeAutoar;
    }
}

export default GjsGiImports;


