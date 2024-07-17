
declare module 'gi://Caja?version=2.0' {
    import Caja20 from '@girs/caja-2.0';
    export default Caja20;
}

declare module 'gi://Caja' {
    import Caja20 from 'gi://Caja?version=2.0';
    export default Caja20;
}


