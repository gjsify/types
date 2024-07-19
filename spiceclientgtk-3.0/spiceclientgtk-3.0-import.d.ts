import SpiceClientGtk30 from '@girs/spiceclientgtk-3.0';

declare global {
    export interface GjsGiImports {
        SpiceClientGtk: typeof SpiceClientGtk30;
    }
}

export default GjsGiImports;
