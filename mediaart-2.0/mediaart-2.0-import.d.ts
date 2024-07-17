
import MediaArt from './mediaart-2.0.js';

declare global {
    export interface GjsGiImports {
        MediaArt: typeof MediaArt;
    }
}

export default GjsGiImports;


