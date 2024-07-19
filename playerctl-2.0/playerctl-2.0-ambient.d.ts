declare module 'gi://Playerctl?version=2.0' {
    import Playerctl20 from '@girs/playerctl-2.0';
    export default Playerctl20;
}

declare module 'gi://Playerctl' {
    import Playerctl20 from 'gi://Playerctl?version=2.0';
    export default Playerctl20;
}
