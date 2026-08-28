
import type GnomeCmd10 from '@girs/gnomecmd-1.0';

declare global {
    export interface GjsGiImports {
        GnomeCmd: typeof GnomeCmd10;
    }
}

export default GjsGiImports;


