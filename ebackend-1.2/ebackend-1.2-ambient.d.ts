
declare module 'gi://EBackend?version=1.2' {
    import EBackend12 from '@girs/ebackend-1.2';
    export default EBackend12;
}

declare module 'gi://EBackend' {
    export * from 'gi://EBackend?version=1.2';
}


