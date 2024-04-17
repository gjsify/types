
import GVncPulse10 from '@girs/gvncpulse-1.0';

declare global {
    export interface GjsGiImports {
        GVncPulse: typeof GVncPulse10;
    }
}

export default GjsGiImports;


