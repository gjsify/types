declare module 'gi://GooCanvas?version=3.0' {
    import GooCanvas30 from '@girs/goocanvas-3.0';
    export default GooCanvas30;
}

declare module 'gi://GooCanvas' {
    import GooCanvas30 from 'gi://GooCanvas?version=3.0';
    export default GooCanvas30;
}
