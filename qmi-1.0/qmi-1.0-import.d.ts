
import Qmi from './qmi-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Qmi: typeof Qmi;
    }
}

export default GjsGiImports;


