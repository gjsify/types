declare module 'gi://MateDesktop?version=2.0' {
    import MateDesktop20 from '@girs/matedesktop-2.0';
    export default MateDesktop20;
}

declare module 'gi://MateDesktop' {
    import MateDesktop20 from 'gi://MateDesktop?version=2.0';
    export default MateDesktop20;
}
