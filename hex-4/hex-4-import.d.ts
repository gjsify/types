
import Hex from './hex-4.d.ts';

declare global {
    export interface GjsGiImports {
        Hex: typeof Hex;
    }
}

export default GjsGiImports;


