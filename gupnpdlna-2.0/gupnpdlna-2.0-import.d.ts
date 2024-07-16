
import GUPnPDLNA from './gupnpdlna-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        GUPnPDLNA: typeof GUPnPDLNA;
    }
}

export default GjsGiImports;


