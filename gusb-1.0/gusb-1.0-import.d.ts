
import GUsb from './gusb-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GUsb: typeof GUsb;
    }
}

export default GjsGiImports;


