
import ECal from './ecal-2.0.js';

declare global {
    export interface GjsGiImports {
        ECal: typeof ECal;
    }
}

export default GjsGiImports;


