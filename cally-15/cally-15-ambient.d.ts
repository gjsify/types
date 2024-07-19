declare module 'gi://Cally?version=15' {
    import Cally15 from '@girs/cally-15';
    export default Cally15;
}

declare module 'gi://Cally' {
    import Cally15 from 'gi://Cally?version=15';
    export default Cally15;
}
