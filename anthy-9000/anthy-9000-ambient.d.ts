
declare module 'gi://Anthy?version=9000' {
    import Anthy9000 from '@girs/anthy-9000';
    export default Anthy9000;
}

declare module 'gi://Anthy' {
    export * from 'gi://Anthy?version=9000';
}


