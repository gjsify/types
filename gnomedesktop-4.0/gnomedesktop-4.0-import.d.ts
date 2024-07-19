import GnomeDesktop40 from '@girs/gnomedesktop-4.0';

declare global {
    export interface GjsGiImports {
        GnomeDesktop: typeof GnomeDesktop40;
    }
}

export default GjsGiImports;
