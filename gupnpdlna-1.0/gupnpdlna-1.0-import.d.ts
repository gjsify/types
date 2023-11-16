
import GUPnPDLNA10 from '@girs/gupnpdlna-1.0';

declare global {
    export interface GjsGiImports {
        GUPnPDLNA: typeof GUPnPDLNA10;
    }
}

export default GjsGiImports;


