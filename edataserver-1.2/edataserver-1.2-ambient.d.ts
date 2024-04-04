
declare module 'gi://EDataServer?version=1.2' {
    import EDataServer from '@girs/edataserver-1.2';
    export default EDataServer;
}

declare module 'gi://EDataServer' {
    import EDataServer12 from 'gi://EDataServer?version=1.2';
    export default EDataServer12;
}


