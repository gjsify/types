
import Eog30 from '@girs/eog-3.0';

declare global {
    export interface GjsGiImports {
        Eog: typeof Eog30;
    }
}

export default GjsGiImports;


