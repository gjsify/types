
declare module 'gi://Egg?version=1.0' {
    const Egg10: typeof import('./egg-1.0.js').default
    export default Egg10;
}

declare module 'gi://Egg' {
    const Egg10: typeof import('./egg-1.0.js').default
    export default Egg10;
}


