declare module 'gi://GstRtsp?version=1.0' {
    import GstRtsp10 from '@girs/gstrtsp-1.0';
    export default GstRtsp10;
}

declare module 'gi://GstRtsp' {
    import GstRtsp10 from 'gi://GstRtsp?version=1.0';
    export default GstRtsp10;
}
