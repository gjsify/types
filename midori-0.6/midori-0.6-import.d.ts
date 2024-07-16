
import Midori from './midori-0.6.d.ts';

declare global {
    export interface GjsGiImports {
        Midori: typeof Midori;
    }
}

export default GjsGiImports;


