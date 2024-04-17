
import GoVirt10 from '@girs/govirt-1.0';

declare global {
    export interface GjsGiImports {
        GoVirt: typeof GoVirt10;
    }
}

export default GjsGiImports;


