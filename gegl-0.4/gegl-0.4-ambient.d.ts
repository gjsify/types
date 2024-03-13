
declare module 'gi://Gegl?version=0.4' {
    import Gegl04 from '@girs/gegl-0.4';
    export default Gegl04;
}

declare module 'gi://Gegl' {
    export * from 'gi://Gegl?version=0.4';
}


