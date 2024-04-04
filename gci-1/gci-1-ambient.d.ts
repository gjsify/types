
declare module 'gi://GCi?version=1' {
    import GCi from '@girs/gci-1';
    export default GCi;
}

declare module 'gi://GCi' {
    import GCi1 from 'gi://GCi?version=1';
    export default GCi1;
}


