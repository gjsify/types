
import GoVirt from './govirt-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GoVirt: typeof GoVirt;
    }
}

export default GjsGiImports;


