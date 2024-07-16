
declare module 'gi://Cogl?version=13' {
    import Cogl from './cogl-13.d.ts';
    export default Cogl;
}

declare module 'gi://Cogl' {
    import Cogl13 from 'gi://Cogl?version=13';
    export default Cogl13;
}


