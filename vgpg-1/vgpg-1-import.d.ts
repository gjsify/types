
import Vgpg from './vgpg-1.js';

declare global {
    export interface GjsGiImports {
        Vgpg: typeof Vgpg;
    }
}

export default GjsGiImports;


