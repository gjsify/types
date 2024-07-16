
declare module 'gi://MediaArt?version=1.0' {
    import MediaArt from './mediaart-1.0.d.ts';
    export default MediaArt;
}

declare module 'gi://MediaArt' {
    import MediaArt10 from 'gi://MediaArt?version=1.0';
    export default MediaArt10;
}


