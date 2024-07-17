
declare module 'gi://Shell?version=14' {
    const Shell14: typeof import('./shell-14.js').default
    export default Shell14;
}

declare module 'gi://Shell' {
    const Shell14: typeof import('./shell-14.js').default
    export default Shell14;
}


