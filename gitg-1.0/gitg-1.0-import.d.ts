
import Gitg from './gitg-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gitg: typeof Gitg;
    }
}

export default GjsGiImports;


