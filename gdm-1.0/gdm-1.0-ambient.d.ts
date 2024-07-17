
declare module 'gi://Gdm?version=1.0' {
    const Gdm10: typeof import('./gdm-1.0.js').default
    export default Gdm10;
}

declare module 'gi://Gdm' {
    const Gdm10: typeof import('./gdm-1.0.js').default
    export default Gdm10;
}


