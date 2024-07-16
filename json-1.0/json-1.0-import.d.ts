
import Json from './json-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Json: typeof Json;
    }
}

export default GjsGiImports;


