import Liferea30 from '@girs/liferea-3.0';

declare global {
    export interface GjsGiImports {
        Liferea: typeof Liferea30;
    }
}

export default GjsGiImports;
