
declare module 'gi://Unity?version=6.0' {
    const Unity60: typeof import('./unity-6.0.js').default
    export default Unity60;
}

declare module 'gi://Unity' {
    const Unity60: typeof import('./unity-6.0.js').default
    export default Unity60;
}


