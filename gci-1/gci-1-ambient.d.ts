
declare module 'gi://GCi?version=1' {
    import GCi from './gci-1.d.ts';
    export default GCi;
}

declare module 'gi://GCi' {
    import GCi1 from 'gi://GCi?version=1';
    export default GCi1;
}


