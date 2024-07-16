
declare module 'gi://Cogl?version=15' {
    import Cogl from './cogl-15.d.ts';
    export default Cogl;
}

declare module 'gi://Cogl' {
    import Cogl15 from 'gi://Cogl?version=15';
    export default Cogl15;
}


