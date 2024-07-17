
import Abi from './abi-3.0.js';

declare global {
    export interface GjsGiImports {
        Abi: typeof Abi;
    }
}

export default GjsGiImports;


