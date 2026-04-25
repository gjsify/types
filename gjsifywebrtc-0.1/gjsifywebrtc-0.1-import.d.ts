import type GjsifyWebrtc01 from '@girs/gjsifywebrtc-0.1';

declare global {
    export interface GjsGiImports {
        GjsifyWebrtc: typeof GjsifyWebrtc01;
    }
}

export default GjsGiImports;
