
declare module 'gi://fontconfig?version=2.0' {
    import fontconfig from './fontconfig-2.0.d.ts';
    export default fontconfig;
}

declare module 'gi://fontconfig' {
    import Fontconfig20 from 'gi://fontconfig?version=2.0';
    export default Fontconfig20;
}


