declare module 'gi://Cally?version=12' {
    import Cally12 from '@girs/cally-12';
    export default Cally12;
}

declare module 'gi://Cally' {
    import Cally12 from 'gi://Cally?version=12';
    export default Cally12;
}
