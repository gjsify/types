
import Qmi from './qmi-1.0.js';

declare global {
    export interface GjsGiImports {
        Qmi: typeof Qmi;
    }
}

export default GjsGiImports;


