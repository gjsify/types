
import SpiceClientGLib from './spiceclientglib-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        SpiceClientGLib: typeof SpiceClientGLib;
    }
}

export default GjsGiImports;


