declare module 'gi://Cally?version=13' {
    import Cally13 from '@girs/cally-13';
    export default Cally13;
}

declare module 'gi://Cally' {
    import Cally13 from 'gi://Cally?version=13';
    export default Cally13;
}
