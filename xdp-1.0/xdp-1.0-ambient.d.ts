
declare module 'gi://Xdp?version=1.0' {
    import Xdp from './xdp-1.0.d.ts';
    export default Xdp;
}

declare module 'gi://Xdp' {
    import Xdp10 from 'gi://Xdp?version=1.0';
    export default Xdp10;
}


