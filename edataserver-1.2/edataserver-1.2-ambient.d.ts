declare module 'gi://EDataServer?version=1.2' {
    import EDataServer12 from '@girs/edataserver-1.2';
    export default EDataServer12;
}

declare module 'gi://EDataServer' {
    import EDataServer12 from 'gi://EDataServer?version=1.2';
    export default EDataServer12;
}
