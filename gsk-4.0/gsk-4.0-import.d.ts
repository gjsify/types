
import Gsk from './gsk-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gsk: typeof Gsk;
    }
}

export default GjsGiImports;


