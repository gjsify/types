declare module 'gi://GConf?version=2.0' {
    import GConf20 from '@girs/gconf-2.0';
    export default GConf20;
}

declare module 'gi://GConf' {
    import GConf20 from 'gi://GConf?version=2.0';
    export default GConf20;
}
