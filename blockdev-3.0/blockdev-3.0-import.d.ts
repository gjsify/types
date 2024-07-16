
import BlockDev from './blockdev-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        BlockDev: typeof BlockDev;
    }
}

export default GjsGiImports;


