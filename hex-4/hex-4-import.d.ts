
import Hex from './hex-4.js';

declare global {
    export interface GjsGiImports {
        Hex: typeof Hex;
    }
}

export default GjsGiImports;


