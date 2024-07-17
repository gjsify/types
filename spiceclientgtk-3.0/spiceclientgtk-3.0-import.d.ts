
import SpiceClientGtk from './spiceclientgtk-3.0.js';

declare global {
    export interface GjsGiImports {
        SpiceClientGtk: typeof SpiceClientGtk;
    }
}

export default GjsGiImports;


