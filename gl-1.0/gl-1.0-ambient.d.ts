
declare module 'gi://GL?version=1.0' {
    import GL10 from '@girs/gl-1.0';
    export default GL10;
}

declare module 'gi://GL' {
    export * from 'gi://GL?version=1.0';
}


