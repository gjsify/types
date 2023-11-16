
import Tepl5 from '@girs/tepl-5';

declare global {
    export interface GjsGiImports {
        Tepl: typeof Tepl5;
    }
}

export default GjsGiImports;


