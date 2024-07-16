
declare module 'gi://MediaArt?version=2.0' {
    import MediaArt from './mediaart-2.0.d.ts';
    export default MediaArt;
}

declare module 'gi://MediaArt' {
    import MediaArt20 from 'gi://MediaArt?version=2.0';
    export default MediaArt20;
}


