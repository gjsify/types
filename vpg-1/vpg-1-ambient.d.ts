
declare module 'gi://Vpg?version=1' {
    const Vpg1: typeof import('./vpg-1.js').default
    export default Vpg1;
}

declare module 'gi://Vpg' {
    const Vpg1: typeof import('./vpg-1.js').default
    export default Vpg1;
}


