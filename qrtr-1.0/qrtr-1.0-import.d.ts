
import Qrtr from './qrtr-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Qrtr: typeof Qrtr;
    }
}

export default GjsGiImports;


