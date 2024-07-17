
import MPID30 from '@girs/mpid-3.0';

declare global {
    export interface GjsGiImports {
        MPID: typeof MPID30;
    }
}

export default GjsGiImports;


