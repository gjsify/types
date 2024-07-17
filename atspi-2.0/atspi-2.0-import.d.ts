
import Atspi from './atspi-2.0.js';

declare global {
    export interface GjsGiImports {
        Atspi: typeof Atspi;
    }
}

export default GjsGiImports;


