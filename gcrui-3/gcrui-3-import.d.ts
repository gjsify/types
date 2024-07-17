
import GcrUi from './gcrui-3.js';

declare global {
    export interface GjsGiImports {
        GcrUi: typeof GcrUi;
    }
}

export default GjsGiImports;


