
import Xdp10 from '@girs/xdp-1.0';

declare global {
    export interface GjsGiImports {
        Xdp: typeof Xdp10;
    }
}

export default GjsGiImports;


