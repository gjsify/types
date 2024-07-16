
import EDataServer from './edataserver-1.2.d.ts';

declare global {
    export interface GjsGiImports {
        EDataServer: typeof EDataServer;
    }
}

export default GjsGiImports;


