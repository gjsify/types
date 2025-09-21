declare module 'gi://Cally?version=3' {
    import Cally3 from '@girs/cally-3';
    export default Cally3;
}

declare module 'gi://Cally' {
    import Cally3 from 'gi://Cally?version=3';
    export default Cally3;
}
