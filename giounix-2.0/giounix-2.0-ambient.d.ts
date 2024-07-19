declare module 'gi://GioUnix?version=2.0' {
    import GioUnix20 from '@girs/giounix-2.0';
    export default GioUnix20;
}

declare module 'gi://GioUnix' {
    import GioUnix20 from 'gi://GioUnix?version=2.0';
    export default GioUnix20;
}
