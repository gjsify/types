
declare module 'gi://EDataServer?version=1.2' {
    import EDataServer from './edataserver-1.2.d.ts';
    export default EDataServer;
}

declare module 'gi://EDataServer' {
    import EDataServer12 from 'gi://EDataServer?version=1.2';
    export default EDataServer12;
}


