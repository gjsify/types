
declare module 'gi://Gpseq?version=1.0' {
    import Gpseq10 from '@girs/gpseq-1.0';
    export default Gpseq10;
}

declare module 'gi://Gpseq' {
    export * from 'gi://Gpseq?version=1.0';
}


