
declare module 'gi://Panel?version=1' {
    const Panel1: typeof import('./panel-1.js').default
    export default Panel1;
}

declare module 'gi://Panel' {
    const Panel1: typeof import('./panel-1.js').default
    export default Panel1;
}


