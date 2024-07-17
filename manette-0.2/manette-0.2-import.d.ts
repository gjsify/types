
import Manette from './manette-0.2.js';

declare global {
    export interface GjsGiImports {
        Manette: typeof Manette;
    }
}

export default GjsGiImports;


