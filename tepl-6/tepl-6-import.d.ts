import Tepl6 from '@girs/tepl-6';

declare global {
    export interface GjsGiImports {
        Tepl: typeof Tepl6;
    }
}

export default GjsGiImports;
