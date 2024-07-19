import MediaArt20 from '@girs/mediaart-2.0';

declare global {
    export interface GjsGiImports {
        MediaArt: typeof MediaArt20;
    }
}

export default GjsGiImports;
