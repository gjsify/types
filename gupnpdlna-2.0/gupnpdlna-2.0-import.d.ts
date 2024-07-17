
import GUPnPDLNA from './gupnpdlna-2.0.js';

declare global {
    export interface GjsGiImports {
        GUPnPDLNA: typeof GUPnPDLNA;
    }
}

export default GjsGiImports;


