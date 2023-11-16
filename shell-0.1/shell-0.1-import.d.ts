
import Shell01 from '@girs/shell-0.1';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell01;
    }
}

export default GjsGiImports;


