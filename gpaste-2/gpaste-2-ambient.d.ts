
declare module 'gi://GPaste?version=2' {
    const GPaste2: typeof import('./gpaste-2.js').default
    export default GPaste2;
}

declare module 'gi://GPaste' {
    const GPaste2: typeof import('./gpaste-2.js').default
    export default GPaste2;
}


