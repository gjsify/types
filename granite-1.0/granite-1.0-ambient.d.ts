
declare module 'gi://Granite?version=1.0' {
    const Granite10: typeof import('./granite-1.0.js').default
    export default Granite10;
}

declare module 'gi://Granite' {
    const Granite10: typeof import('./granite-1.0.js').default
    export default Granite10;
}


