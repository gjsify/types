
declare module 'gi://Fwupd?version=2.0' {
    const Fwupd20: typeof import('./fwupd-2.0.js').default
    export default Fwupd20;
}

declare module 'gi://Fwupd' {
    const Fwupd20: typeof import('./fwupd-2.0.js').default
    export default Fwupd20;
}


