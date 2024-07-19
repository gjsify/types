declare module 'gi://Gegl?version=0.3' {
    import Gegl03 from '@girs/gegl-0.3';
    export default Gegl03;
}

declare module 'gi://Gegl' {
    import Gegl03 from 'gi://Gegl?version=0.3';
    export default Gegl03;
}
