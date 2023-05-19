

import SoupGNOME24 from '@girs/soupgnome-2.4';

declare global {
    export interface GjsGiImports {
        SoupGNOME: typeof SoupGNOME24;
    }
}

export default GjsGiImports;


