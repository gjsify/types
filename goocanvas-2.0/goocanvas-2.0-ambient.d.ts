
declare module 'gi://GooCanvas?version=2.0' {
    import GooCanvas from './goocanvas-2.0.d.ts';
    export default GooCanvas;
}

declare module 'gi://GooCanvas' {
    import GooCanvas20 from 'gi://GooCanvas?version=2.0';
    export default GooCanvas20;
}


