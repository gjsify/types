
import EDataCal20 from '@girs/edatacal-2.0';

declare global {
    export interface GjsGiImports {
        EDataCal: typeof EDataCal20;
    }
}

export default GjsGiImports;


