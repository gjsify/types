
import Gsk from './gsk-4.0.js';

declare global {
    export interface GjsGiImports {
        Gsk: typeof Gsk;
    }
}

export default GjsGiImports;


