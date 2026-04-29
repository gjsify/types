declare module 'gi://Gfls?version=1' {
    import Gfls1 from '@girs/gfls-1';
    export default Gfls1;
}

declare module 'gi://Gfls' {
    import Gfls1 from 'gi://Gfls?version=1';
    export default Gfls1;
}
