
import GnomeBG from './gnomebg-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        GnomeBG: typeof GnomeBG;
    }
}

export default GjsGiImports;


