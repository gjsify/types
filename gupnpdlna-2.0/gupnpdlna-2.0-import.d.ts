
import GUPnPDLNA20 from '@girs/gupnpdlna-2.0';

declare global {
    export interface GjsGiImports {
        GUPnPDLNA: typeof GUPnPDLNA20;
    }
}

export default GjsGiImports;


