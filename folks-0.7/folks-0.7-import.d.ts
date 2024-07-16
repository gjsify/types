
import Folks from './folks-0.7.d.ts';

declare global {
    export interface GjsGiImports {
        Folks: typeof Folks;
    }
}

export default GjsGiImports;


