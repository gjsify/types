
import GVncPulse from './gvncpulse-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GVncPulse: typeof GVncPulse;
    }
}

export default GjsGiImports;


