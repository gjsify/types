declare module 'gi://Cally?version=6' {
    import Cally6 from '@girs/cally-6';
    export default Cally6;
}

declare module 'gi://Cally' {
    import Cally6 from 'gi://Cally?version=6';
    export default Cally6;
}
