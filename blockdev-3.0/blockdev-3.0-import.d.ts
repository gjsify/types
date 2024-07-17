
import BlockDev30 from '@girs/blockdev-3.0';

declare global {
    export interface GjsGiImports {
        BlockDev: typeof BlockDev30;
    }
}

export default GjsGiImports;


