
import GUPnP from './gupnp-1.6.js';

declare global {
    export interface GjsGiImports {
        GUPnP: typeof GUPnP;
    }
}

export default GjsGiImports;


