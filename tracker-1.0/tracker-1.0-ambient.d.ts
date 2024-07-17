
declare module 'gi://Tracker?version=1.0' {
    const Tracker10: typeof import('./tracker-1.0.js').default
    export default Tracker10;
}

declare module 'gi://Tracker' {
    const Tracker10: typeof import('./tracker-1.0.js').default
    export default Tracker10;
}


