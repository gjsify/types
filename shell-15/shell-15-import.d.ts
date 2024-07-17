
import Shell from './shell-15.js';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell;
    }
}

export default GjsGiImports;


