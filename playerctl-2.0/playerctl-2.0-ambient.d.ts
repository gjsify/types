
declare module 'gi://Playerctl?version=2.0' {
    const Playerctl20: typeof import('./playerctl-2.0.js').default
    export default Playerctl20;
}

declare module 'gi://Playerctl' {
    const Playerctl20: typeof import('./playerctl-2.0.js').default
    export default Playerctl20;
}


