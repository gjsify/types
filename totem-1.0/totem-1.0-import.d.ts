
import Totem from './totem-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Totem: typeof Totem;
    }
}

export default GjsGiImports;


