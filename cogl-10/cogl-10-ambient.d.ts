
declare module 'gi://Cogl?version=10' {
    import Cogl from './cogl-10.d.ts';
    export default Cogl;
}

declare module 'gi://Cogl' {
    import Cogl10 from 'gi://Cogl?version=10';
    export default Cogl10;
}


