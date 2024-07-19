declare module 'gi://Xed?version=1.0' {
    import Xed10 from '@girs/xed-1.0';
    export default Xed10;
}

declare module 'gi://Xed' {
    import Xed10 from 'gi://Xed?version=1.0';
    export default Xed10;
}
