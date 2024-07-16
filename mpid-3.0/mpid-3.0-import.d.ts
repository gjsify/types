
import MPID from './mpid-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        MPID: typeof MPID;
    }
}

export default GjsGiImports;


