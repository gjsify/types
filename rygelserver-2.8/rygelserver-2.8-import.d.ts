
import RygelServer from './rygelserver-2.8.js';

declare global {
    export interface GjsGiImports {
        RygelServer: typeof RygelServer;
    }
}

export default GjsGiImports;


