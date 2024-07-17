
import EDataServer from './edataserver-1.2.js';

declare global {
    export interface GjsGiImports {
        EDataServer: typeof EDataServer;
    }
}

export default GjsGiImports;


