
import BlockDev from './blockdev-3.0.js';

declare global {
    export interface GjsGiImports {
        BlockDev: typeof BlockDev;
    }
}

export default GjsGiImports;


