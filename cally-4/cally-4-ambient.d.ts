declare module 'gi://Cally?version=4' {
    import Cally4 from '@girs/cally-4';
    export default Cally4;
}

declare module 'gi://Cally' {
    import Cally4 from 'gi://Cally?version=4';
    export default Cally4;
}
