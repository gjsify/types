declare module 'gi://Xdp?version=1.0' {
    import Xdp10 from '@girs/xdp-1.0';
    export default Xdp10;
}

declare module 'gi://Xdp' {
    import Xdp10 from 'gi://Xdp?version=1.0';
    export default Xdp10;
}
