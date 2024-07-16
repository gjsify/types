
import NMClient from './nmclient-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        NMClient: typeof NMClient;
    }
}

export default GjsGiImports;


