
import GUsb10 from '@girs/gusb-1.0';

declare global {
    export interface GjsGiImports {
        GUsb: typeof GUsb10;
    }
}

export default GjsGiImports;


