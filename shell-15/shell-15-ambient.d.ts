
declare module 'gi://Shell?version=15' {
    const Shell15: typeof import('./shell-15.js').default
    export default Shell15;
}

declare module 'gi://Shell' {
    const Shell15: typeof import('./shell-15.js').default
    export default Shell15;
}


