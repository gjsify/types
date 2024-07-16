
declare module 'gi://Gom?version=1.0' {
    import Gom from './gom-1.0.d.ts';
    export default Gom;
}

declare module 'gi://Gom' {
    import Gom10 from 'gi://Gom?version=1.0';
    export default Gom10;
}


