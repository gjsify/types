
import GL from './gl-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GL: typeof GL;
    }
}

export default GjsGiImports;


