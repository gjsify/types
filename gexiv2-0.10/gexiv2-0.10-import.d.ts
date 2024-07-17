
import GExiv2 from './gexiv2-0.10.js';

declare global {
    export interface GjsGiImports {
        GExiv2: typeof GExiv2;
    }
}

export default GjsGiImports;


