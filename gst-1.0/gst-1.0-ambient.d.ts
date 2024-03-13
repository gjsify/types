
declare module 'gi://Gst?version=1.0' {
    import Gst10 from '@girs/gst-1.0';
    export default Gst10;
}

declare module 'gi://Gst' {
    export * from 'gi://Gst?version=1.0';
}


