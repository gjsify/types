
declare module 'gi://GstPlayer?version=1.0' {
    import GstPlayer10 from '@girs/gstplayer-1.0';
    export default GstPlayer10;
}

declare module 'gi://GstPlayer' {
    export * from 'gi://GstPlayer?version=1.0';
}


