import Qrtr10 from '@girs/qrtr-1.0';

declare global {
    export interface GjsGiImports {
        Qrtr: typeof Qrtr10;
    }
}

export default GjsGiImports;
