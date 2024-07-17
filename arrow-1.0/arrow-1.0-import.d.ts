
import Arrow from './arrow-1.0.js';

declare global {
    export interface GjsGiImports {
        Arrow: typeof Arrow;
    }
}

export default GjsGiImports;


