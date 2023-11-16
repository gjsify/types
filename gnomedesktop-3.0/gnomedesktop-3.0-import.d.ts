
import GnomeDesktop30 from '@girs/gnomedesktop-3.0';

declare global {
    export interface GjsGiImports {
        GnomeDesktop: typeof GnomeDesktop30;
    }
}

export default GjsGiImports;


