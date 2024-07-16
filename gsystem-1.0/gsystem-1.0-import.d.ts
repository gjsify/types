
import GSystem from './gsystem-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GSystem: typeof GSystem;
    }
}

export default GjsGiImports;


