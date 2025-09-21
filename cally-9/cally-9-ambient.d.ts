declare module 'gi://Cally?version=9' {
    import Cally9 from '@girs/cally-9';
    export default Cally9;
}

declare module 'gi://Cally' {
    import Cally9 from 'gi://Cally?version=9';
    export default Cally9;
}
