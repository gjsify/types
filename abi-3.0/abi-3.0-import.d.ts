
import Abi from './abi-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Abi: typeof Abi;
    }
}

export default GjsGiImports;


