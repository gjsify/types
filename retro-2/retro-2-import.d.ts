
import Retro from './retro-2.js';

declare global {
    export interface GjsGiImports {
        Retro: typeof Retro;
    }
}

export default GjsGiImports;


