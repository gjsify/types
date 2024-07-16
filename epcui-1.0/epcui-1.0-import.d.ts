
import EpcUi from './epcui-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        EpcUi: typeof EpcUi;
    }
}

export default GjsGiImports;


