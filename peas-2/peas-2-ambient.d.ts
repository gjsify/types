
declare module 'gi://Peas?version=2' {
    const Peas2: typeof import('./peas-2.js').default
    export default Peas2;
}

declare module 'gi://Peas' {
    const Peas2: typeof import('./peas-2.js').default
    export default Peas2;
}


