
declare module 'gi://GCi?version=1' {
    import GCi1 from '@girs/gci-1';
    export default GCi1;
}

declare module 'gi://GCi' {
    import GCi1 from 'gi://GCi?version=1';
    export default GCi1;
}


