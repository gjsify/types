
import Poppler from './poppler-0.18.d.ts';

declare global {
    export interface GjsGiImports {
        Poppler: typeof Poppler;
    }
}

export default GjsGiImports;


