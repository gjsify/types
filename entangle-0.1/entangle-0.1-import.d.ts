import Entangle01 from '@girs/entangle-0.1';

declare global {
    export interface GjsGiImports {
        Entangle: typeof Entangle01;
    }
}

export default GjsGiImports;
