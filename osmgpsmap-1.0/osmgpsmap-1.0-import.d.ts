
import OsmGpsMap from './osmgpsmap-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        OsmGpsMap: typeof OsmGpsMap;
    }
}

export default GjsGiImports;


