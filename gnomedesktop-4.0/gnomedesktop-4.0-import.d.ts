
import GnomeDesktop from './gnomedesktop-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        GnomeDesktop: typeof GnomeDesktop;
    }
}

export default GjsGiImports;


