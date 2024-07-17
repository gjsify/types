
declare module 'gi://Handy?version=1' {
    const Handy1: typeof import('./handy-1.js').default
    export default Handy1;
}

declare module 'gi://Handy' {
    const Handy1: typeof import('./handy-1.js').default
    export default Handy1;
}


