
import Libmsi10 from '@girs/libmsi-1.0';

declare global {
    export interface GjsGiImports {
        Libmsi: typeof Libmsi10;
    }
}

export default GjsGiImports;


