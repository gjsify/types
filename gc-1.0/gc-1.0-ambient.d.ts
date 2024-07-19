declare module 'gi://Gc?version=1.0' {
    import Gc10 from '@girs/gc-1.0';
    export default Gc10;
}

declare module 'gi://Gc' {
    import Gc10 from 'gi://Gc?version=1.0';
    export default Gc10;
}
