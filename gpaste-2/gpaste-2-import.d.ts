
import GPaste2 from '@girs/gpaste-2';

declare global {
    export interface GjsGiImports {
        GPaste: typeof GPaste2;
    }
}

export default GjsGiImports;


