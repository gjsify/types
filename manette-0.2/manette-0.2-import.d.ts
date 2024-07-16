
import Manette from './manette-0.2.d.ts';

declare global {
    export interface GjsGiImports {
        Manette: typeof Manette;
    }
}

export default GjsGiImports;


