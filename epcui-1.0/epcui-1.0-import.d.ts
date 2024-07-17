
import EpcUi from './epcui-1.0.js';

declare global {
    export interface GjsGiImports {
        EpcUi: typeof EpcUi;
    }
}

export default GjsGiImports;


