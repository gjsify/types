import Retro2 from '@girs/retro-2';

declare global {
    export interface GjsGiImports {
        Retro: typeof Retro2;
    }
}

export default GjsGiImports;
