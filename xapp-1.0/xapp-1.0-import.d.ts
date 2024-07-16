
import XApp from './xapp-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        XApp: typeof XApp;
    }
}

export default GjsGiImports;


