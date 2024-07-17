
import GPaste from './gpaste-2.js';

declare global {
    export interface GjsGiImports {
        GPaste: typeof GPaste;
    }
}

export default GjsGiImports;


