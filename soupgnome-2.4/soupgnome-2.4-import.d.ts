
import SoupGNOME from './soupgnome-2.4.d.ts';

declare global {
    export interface GjsGiImports {
        SoupGNOME: typeof SoupGNOME;
    }
}

export default GjsGiImports;


