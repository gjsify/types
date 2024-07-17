
declare module 'gi://OsmGpsMap?version=1.0' {
    import OsmGpsMap10 from '@girs/osmgpsmap-1.0';
    export default OsmGpsMap10;
}

declare module 'gi://OsmGpsMap' {
    import OsmGpsMap10 from 'gi://OsmGpsMap?version=1.0';
    export default OsmGpsMap10;
}


