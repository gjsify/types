
declare module 'gi://GConf?version=2.0' {
    import GConf from './gconf-2.0.d.ts';
    export default GConf;
}

declare module 'gi://GConf' {
    import GConf20 from 'gi://GConf?version=2.0';
    export default GConf20;
}


