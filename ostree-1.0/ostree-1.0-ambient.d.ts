
declare module 'gi://OSTree?version=1.0' {
    const OSTree10: typeof import('./ostree-1.0.js').default
    export default OSTree10;
}

declare module 'gi://OSTree' {
    const OSTree10: typeof import('./ostree-1.0.js').default
    export default OSTree10;
}


