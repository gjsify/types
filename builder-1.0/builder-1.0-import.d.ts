
import Builder from './builder-1.0.js';

declare global {
    export interface GjsGiImports {
        Builder: typeof Builder;
    }
}

export default GjsGiImports;


