
import Gandiva from './gandiva-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gandiva: typeof Gandiva;
    }
}

export default GjsGiImports;


