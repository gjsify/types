
declare module 'gi://Retro?version=1' {
    const Retro1: typeof import('./retro-1.js').default
    export default Retro1;
}

declare module 'gi://Retro' {
    const Retro1: typeof import('./retro-1.js').default
    export default Retro1;
}


