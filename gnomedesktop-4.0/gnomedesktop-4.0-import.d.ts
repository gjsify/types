
import GnomeDesktop from './gnomedesktop-4.0.js';

declare global {
    export interface GjsGiImports {
        GnomeDesktop: typeof GnomeDesktop;
    }
}

export default GjsGiImports;


