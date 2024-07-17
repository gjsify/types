
declare module 'gi://Shell?version=12' {
    const Shell12: typeof import('./shell-12.js').default
    export default Shell12;
}

declare module 'gi://Shell' {
    const Shell12: typeof import('./shell-12.js').default
    export default Shell12;
}


