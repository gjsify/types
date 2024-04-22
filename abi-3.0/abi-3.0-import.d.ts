
import Abi30 from '@girs/abi-3.0';

declare global {
    export interface GjsGiImports {
        Abi: typeof Abi30;
    }
}

export default GjsGiImports;


