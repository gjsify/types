
import Goa from './goa-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Goa: typeof Goa;
    }
}

export default GjsGiImports;


