
declare module 'gi://Mx?version=1.0' {
    import Mx from './mx-1.0.d.ts';
    export default Mx;
}

declare module 'gi://Mx' {
    import Mx10 from 'gi://Mx?version=1.0';
    export default Mx10;
}


