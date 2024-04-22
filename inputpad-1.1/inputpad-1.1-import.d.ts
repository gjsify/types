
import InputPad11 from '@girs/inputpad-1.1';

declare global {
    export interface GjsGiImports {
        InputPad: typeof InputPad11;
    }
}

export default GjsGiImports;


