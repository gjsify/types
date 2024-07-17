
import EDataCal from './edatacal-2.0.js';

declare global {
    export interface GjsGiImports {
        EDataCal: typeof EDataCal;
    }
}

export default GjsGiImports;


