
import GcrUi from './gcrui-3.d.ts';

declare global {
    export interface GjsGiImports {
        GcrUi: typeof GcrUi;
    }
}

export default GjsGiImports;


