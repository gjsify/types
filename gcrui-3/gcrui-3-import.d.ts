
import GcrUi3 from '@girs/gcrui-3';

declare global {
    export interface GjsGiImports {
        GcrUi: typeof GcrUi3;
    }
}

export default GjsGiImports;


