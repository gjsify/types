
import SoupGNOME from './soupgnome-2.4.js';

declare global {
    export interface GjsGiImports {
        SoupGNOME: typeof SoupGNOME;
    }
}

export default GjsGiImports;


