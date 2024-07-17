
import Cheese from './cheese-3.0.js';

declare global {
    export interface GjsGiImports {
        Cheese: typeof Cheese;
    }
}

export default GjsGiImports;


