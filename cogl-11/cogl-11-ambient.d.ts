
declare module 'gi://Cogl?version=11' {
    import Cogl from './cogl-11.d.ts';
    export default Cogl;
}

declare module 'gi://Cogl' {
    import Cogl11 from 'gi://Cogl?version=11';
    export default Cogl11;
}


