
declare module 'gi://Snapd?version=2' {
    const Snapd2: typeof import('./snapd-2.js').default
    export default Snapd2;
}

declare module 'gi://Snapd' {
    const Snapd2: typeof import('./snapd-2.js').default
    export default Snapd2;
}


