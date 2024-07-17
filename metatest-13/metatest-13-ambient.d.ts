
declare module 'gi://MetaTest?version=13' {
    const MetaTest13: typeof import('./metatest-13.js').default
    export default MetaTest13;
}

declare module 'gi://MetaTest' {
    const MetaTest13: typeof import('./metatest-13.js').default
    export default MetaTest13;
}


