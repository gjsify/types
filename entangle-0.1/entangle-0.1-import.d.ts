
import Entangle from './entangle-0.1.d.ts';

declare global {
    export interface GjsGiImports {
        Entangle: typeof Entangle;
    }
}

export default GjsGiImports;


