
import type GnomeQR40 from '@girs/gnomeqr-4.0';

declare global {
    export interface GjsGiImports {
        GnomeQR: typeof GnomeQR40;
    }
}

export default GjsGiImports;


