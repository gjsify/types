
import ZBar from './zbar-1.0.js';

declare global {
    export interface GjsGiImports {
        ZBar: typeof ZBar;
    }
}

export default GjsGiImports;


