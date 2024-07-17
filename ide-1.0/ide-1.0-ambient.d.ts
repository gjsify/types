
declare module 'gi://Ide?version=1.0' {
    const Ide10: typeof import('./ide-1.0.js').default
    export default Ide10;
}

declare module 'gi://Ide' {
    const Ide10: typeof import('./ide-1.0.js').default
    export default Ide10;
}


