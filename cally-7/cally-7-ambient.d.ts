declare module 'gi://Cally?version=7' {
    import Cally7 from '@girs/cally-7';
    export default Cally7;
}

declare module 'gi://Cally' {
    import Cally7 from 'gi://Cally?version=7';
    export default Cally7;
}
