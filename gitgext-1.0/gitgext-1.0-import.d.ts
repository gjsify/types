
import GitgExt from './gitgext-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GitgExt: typeof GitgExt;
    }
}

export default GjsGiImports;


