
declare module 'gi://GTop?version=2.0' {
    import GTop20 from '@girs/gtop-2.0';
    export default GTop20;
}

declare module 'gi://GTop' {
    export * from 'gi://GTop?version=2.0';
}


