
import Gepub05 from '@girs/gepub-0.5';

declare global {
    export interface GjsGiImports {
        Gepub: typeof Gepub05;
    }
}

export default GjsGiImports;


