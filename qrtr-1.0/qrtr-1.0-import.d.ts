
import Qrtr from './qrtr-1.0.js';

declare global {
    export interface GjsGiImports {
        Qrtr: typeof Qrtr;
    }
}

export default GjsGiImports;


