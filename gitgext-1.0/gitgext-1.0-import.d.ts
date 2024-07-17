
import GitgExt from './gitgext-1.0.js';

declare global {
    export interface GjsGiImports {
        GitgExt: typeof GitgExt;
    }
}

export default GjsGiImports;


