
import libxml2 from './libxml2-2.0.js';

declare global {
    export interface GjsGiImports {
        libxml2: typeof libxml2;
    }
}

export default GjsGiImports;


