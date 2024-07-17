
import Totem from './totem-1.0.js';

declare global {
    export interface GjsGiImports {
        Totem: typeof Totem;
    }
}

export default GjsGiImports;


