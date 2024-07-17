
declare module 'gi://Shell?version=0.1' {
    const Shell01: typeof import('./shell-0.1.js').default
    export default Shell01;
}

declare module 'gi://Shell' {
    const Shell01: typeof import('./shell-0.1.js').default
    export default Shell01;
}


