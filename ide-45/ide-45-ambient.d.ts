
declare module 'gi://Ide?version=45' {
    const Ide45: typeof import('./ide-45.js').default
    export default Ide45;
}

declare module 'gi://Ide' {
    const Ide45: typeof import('./ide-45.js').default
    export default Ide45;
}


