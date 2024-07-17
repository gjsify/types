
import ZBar10 from '@girs/zbar-1.0';

declare global {
    export interface GjsGiImports {
        ZBar: typeof ZBar10;
    }
}

export default GjsGiImports;


