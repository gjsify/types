
declare module 'gi://GConf?version=2.0' {
    const GConf20: typeof import('./gconf-2.0.js').default
    export default GConf20;
}

declare module 'gi://GConf' {
    const GConf20: typeof import('./gconf-2.0.js').default
    export default GConf20;
}


