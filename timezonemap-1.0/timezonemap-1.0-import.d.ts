
import TimezoneMap from './timezonemap-1.0.js';

declare global {
    export interface GjsGiImports {
        TimezoneMap: typeof TimezoneMap;
    }
}

export default GjsGiImports;


