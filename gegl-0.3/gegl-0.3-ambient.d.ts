
declare module 'gi://Gegl?version=0.3' {
    import Gegl from './gegl-0.3.d.ts';
    export default Gegl;
}

declare module 'gi://Gegl' {
    import Gegl03 from 'gi://Gegl?version=0.3';
    export default Gegl03;
}


