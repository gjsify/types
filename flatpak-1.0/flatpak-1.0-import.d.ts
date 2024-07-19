import Flatpak10 from '@girs/flatpak-1.0';

declare global {
    export interface GjsGiImports {
        Flatpak: typeof Flatpak10;
    }
}

export default GjsGiImports;
