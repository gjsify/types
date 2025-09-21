declare module 'gi://Cally?version=5' {
    import Cally5 from '@girs/cally-5';
    export default Cally5;
}

declare module 'gi://Cally' {
    import Cally5 from 'gi://Cally?version=5';
    export default Cally5;
}
