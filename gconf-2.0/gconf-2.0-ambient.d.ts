
declare module 'gi://GConf?version=2.0' {
    import GConf from '@girs/gconf-2.0';
    export default GConf;
}

declare module 'gi://GConf' {
    import GConf20 from 'gi://GConf?version=2.0';
    export default GConf20;
}


