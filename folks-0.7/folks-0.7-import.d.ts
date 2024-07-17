
import Folks from './folks-0.7.js';

declare global {
    export interface GjsGiImports {
        Folks: typeof Folks;
    }
}

export default GjsGiImports;


