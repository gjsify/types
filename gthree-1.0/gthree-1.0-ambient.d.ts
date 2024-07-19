declare module 'gi://Gthree?version=1.0' {
    import Gthree10 from '@girs/gthree-1.0';
    export default Gthree10;
}

declare module 'gi://Gthree' {
    import Gthree10 from 'gi://Gthree?version=1.0';
    export default Gthree10;
}
