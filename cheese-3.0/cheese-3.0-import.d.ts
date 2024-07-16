
import Cheese from './cheese-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Cheese: typeof Cheese;
    }
}

export default GjsGiImports;


