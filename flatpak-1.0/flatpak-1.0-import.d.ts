
import Flatpak from './flatpak-1.0.js';

declare global {
    export interface GjsGiImports {
        Flatpak: typeof Flatpak;
    }
}

export default GjsGiImports;


