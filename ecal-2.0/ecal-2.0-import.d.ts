
import ECal from './ecal-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        ECal: typeof ECal;
    }
}

export default GjsGiImports;


