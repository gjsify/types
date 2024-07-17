
declare module 'gi://Cheese?version=3.0' {
    const Cheese30: typeof import('./cheese-3.0.js').default
    export default Cheese30;
}

declare module 'gi://Cheese' {
    const Cheese30: typeof import('./cheese-3.0.js').default
    export default Cheese30;
}


