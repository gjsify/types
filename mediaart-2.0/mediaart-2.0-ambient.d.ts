declare module 'gi://MediaArt?version=2.0' {
    import MediaArt20 from '@girs/mediaart-2.0';
    export default MediaArt20;
}

declare module 'gi://MediaArt' {
    import MediaArt20 from 'gi://MediaArt?version=2.0';
    export default MediaArt20;
}
