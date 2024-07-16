
import Libmsi from './libmsi-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Libmsi: typeof Libmsi;
    }
}

export default GjsGiImports;


