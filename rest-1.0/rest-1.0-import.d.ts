
import Rest from './rest-1.0.js';

declare global {
    export interface GjsGiImports {
        Rest: typeof Rest;
    }
}

export default GjsGiImports;


