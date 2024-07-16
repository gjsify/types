
import GPaste from './gpaste-2.d.ts';

declare global {
    export interface GjsGiImports {
        GPaste: typeof GPaste;
    }
}

export default GjsGiImports;


