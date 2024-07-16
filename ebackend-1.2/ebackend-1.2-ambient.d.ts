
declare module 'gi://EBackend?version=1.2' {
    import EBackend from './ebackend-1.2.d.ts';
    export default EBackend;
}

declare module 'gi://EBackend' {
    import EBackend12 from 'gi://EBackend?version=1.2';
    export default EBackend12;
}


