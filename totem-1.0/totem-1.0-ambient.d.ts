declare module 'gi://Totem?version=1.0' {
    import Totem10 from '@girs/totem-1.0';
    export default Totem10;
}

declare module 'gi://Totem' {
    import Totem10 from 'gi://Totem?version=1.0';
    export default Totem10;
}
