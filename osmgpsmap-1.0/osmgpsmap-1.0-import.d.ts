import OsmGpsMap10 from '@girs/osmgpsmap-1.0';

declare global {
    export interface GjsGiImports {
        OsmGpsMap: typeof OsmGpsMap10;
    }
}

export default GjsGiImports;
