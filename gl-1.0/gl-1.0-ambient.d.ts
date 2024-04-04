
declare module 'gi://GL?version=1.0' {
    import GL from '@girs/gl-1.0';
    export default GL;
}

declare module 'gi://GL' {
    import GL10 from 'gi://GL?version=1.0';
    export default GL10;
}


