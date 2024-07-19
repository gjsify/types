import ColorHug10 from '@girs/colorhug-1.0';

declare global {
    export interface GjsGiImports {
        ColorHug: typeof ColorHug10;
    }
}

export default GjsGiImports;
