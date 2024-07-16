
import Retro from './retro-2.d.ts';

declare global {
    export interface GjsGiImports {
        Retro: typeof Retro;
    }
}

export default GjsGiImports;


