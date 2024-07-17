
import Vgda from './vgda-1.js';

declare global {
    export interface GjsGiImports {
        Vgda: typeof Vgda;
    }
}

export default GjsGiImports;


