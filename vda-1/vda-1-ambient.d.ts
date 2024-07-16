
declare module 'gi://Vda?version=1' {
    import Vda from './vda-1.d.ts';
    export default Vda;
}

declare module 'gi://Vda' {
    import Vda1 from 'gi://Vda?version=1';
    export default Vda1;
}


