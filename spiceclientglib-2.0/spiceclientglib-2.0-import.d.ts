
import SpiceClientGLib from './spiceclientglib-2.0.js';

declare global {
    export interface GjsGiImports {
        SpiceClientGLib: typeof SpiceClientGLib;
    }
}

export default GjsGiImports;


