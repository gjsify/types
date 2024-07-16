
declare module 'gi://Plasma?version=1.0' {
    import Plasma from './plasma-1.0.d.ts';
    export default Plasma;
}

declare module 'gi://Plasma' {
    import Plasma10 from 'gi://Plasma?version=1.0';
    export default Plasma10;
}


