
declare module 'gi://Dex?version=1' {
    import Dex1 from '@girs/dex-1';
    export default Dex1;
}

declare module 'gi://Dex' {
    export * from 'gi://Dex?version=1';
}


