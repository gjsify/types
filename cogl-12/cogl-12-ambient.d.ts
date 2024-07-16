
declare module 'gi://Cogl?version=12' {
    import Cogl from './cogl-12.d.ts';
    export default Cogl;
}

declare module 'gi://Cogl' {
    import Cogl12 from 'gi://Cogl?version=12';
    export default Cogl12;
}


