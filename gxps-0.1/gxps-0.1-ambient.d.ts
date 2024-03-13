
declare module 'gi://GXPS?version=0.1' {
    import GXPS01 from '@girs/gxps-0.1';
    export default GXPS01;
}

declare module 'gi://GXPS' {
    export * from 'gi://GXPS?version=0.1';
}


