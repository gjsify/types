
declare module 'gi://Cally?version=10' {
    import Cally10 from '@girs/cally-10';
    export default Cally10;
}

declare module 'gi://Cally' {
    import Cally10 from 'gi://Cally?version=10';
    export default Cally10;
}


