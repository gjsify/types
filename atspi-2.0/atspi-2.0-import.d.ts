
import Atspi from './atspi-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Atspi: typeof Atspi;
    }
}

export default GjsGiImports;


