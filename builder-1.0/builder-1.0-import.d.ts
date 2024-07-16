
import Builder from './builder-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Builder: typeof Builder;
    }
}

export default GjsGiImports;


