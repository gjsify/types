
import ZBar from './zbar-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        ZBar: typeof ZBar;
    }
}

export default GjsGiImports;


