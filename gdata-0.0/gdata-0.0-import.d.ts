
import GData from './gdata-0.0.js';

declare global {
    export interface GjsGiImports {
        GData: typeof GData;
    }
}

export default GjsGiImports;


