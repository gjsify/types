
import InputPad from './inputpad-1.1.js';

declare global {
    export interface GjsGiImports {
        InputPad: typeof InputPad;
    }
}

export default GjsGiImports;


