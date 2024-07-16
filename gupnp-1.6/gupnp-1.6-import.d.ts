
import GUPnP from './gupnp-1.6.d.ts';

declare global {
    export interface GjsGiImports {
        GUPnP: typeof GUPnP;
    }
}

export default GjsGiImports;


