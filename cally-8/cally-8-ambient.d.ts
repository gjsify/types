declare module 'gi://Cally?version=8' {
    import Cally8 from '@girs/cally-8';
    export default Cally8;
}

declare module 'gi://Cally' {
    import Cally8 from 'gi://Cally?version=8';
    export default Cally8;
}
