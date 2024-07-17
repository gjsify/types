
declare module 'gi://Snapd?version=1' {
    const Snapd1: typeof import('./snapd-1.js').default
    export default Snapd1;
}

declare module 'gi://Snapd' {
    const Snapd1: typeof import('./snapd-1.js').default
    export default Snapd1;
}


