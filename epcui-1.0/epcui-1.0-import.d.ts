
import EpcUi10 from '@girs/epcui-1.0';

declare global {
    export interface GjsGiImports {
        EpcUi: typeof EpcUi10;
    }
}

export default GjsGiImports;


