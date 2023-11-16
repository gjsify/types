
import ECal20 from '@girs/ecal-2.0';

declare global {
    export interface GjsGiImports {
        ECal: typeof ECal20;
    }
}

export default GjsGiImports;


