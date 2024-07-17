
declare module 'gi://Tracker?version=2.0' {
    const Tracker20: typeof import('./tracker-2.0.js').default
    export default Tracker20;
}

declare module 'gi://Tracker' {
    const Tracker20: typeof import('./tracker-2.0.js').default
    export default Tracker20;
}


