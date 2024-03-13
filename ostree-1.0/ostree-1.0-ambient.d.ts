
declare module 'gi://OSTree?version=1.0' {
    import OSTree10 from '@girs/ostree-1.0';
    export default OSTree10;
}

declare module 'gi://OSTree' {
    export * from 'gi://OSTree?version=1.0';
}


