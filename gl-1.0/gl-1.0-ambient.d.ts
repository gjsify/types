
declare module 'gi://GL?version=1.0' {
    import GL from './gl-1.0.d.ts';
    export default GL;
}

declare module 'gi://GL' {
    import GL10 from 'gi://GL?version=1.0';
    export default GL10;
}


