
import Dee from './dee-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Dee: typeof Dee;
    }
}

export default GjsGiImports;


