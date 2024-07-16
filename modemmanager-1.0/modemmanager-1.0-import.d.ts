
import ModemManager from './modemmanager-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        ModemManager: typeof ModemManager;
    }
}

export default GjsGiImports;


