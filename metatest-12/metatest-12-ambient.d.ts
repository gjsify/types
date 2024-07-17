
declare module 'gi://MetaTest?version=12' {
    const MetaTest12: typeof import('./metatest-12.js').default
    export default MetaTest12;
}

declare module 'gi://MetaTest' {
    const MetaTest12: typeof import('./metatest-12.js').default
    export default MetaTest12;
}


