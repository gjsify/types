
declare module 'gi://GcrUi?version=3' {
    import GcrUi from './gcrui-3.d.ts';
    export default GcrUi;
}

declare module 'gi://GcrUi' {
    import GcrUi3 from 'gi://GcrUi?version=3';
    export default GcrUi3;
}


