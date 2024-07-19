import ArrowFlight10 from '@girs/arrowflight-1.0';

declare global {
    export interface GjsGiImports {
        ArrowFlight: typeof ArrowFlight10;
    }
}

export default GjsGiImports;
