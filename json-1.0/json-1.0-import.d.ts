
import Json from './json-1.0.js';

declare global {
    export interface GjsGiImports {
        Json: typeof Json;
    }
}

export default GjsGiImports;


