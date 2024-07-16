
import RygelServer from './rygelserver-2.8.d.ts';

declare global {
    export interface GjsGiImports {
        RygelServer: typeof RygelServer;
    }
}

export default GjsGiImports;


