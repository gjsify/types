
declare module 'gi://LightDM?version=1' {
    const LightDM1: typeof import('./lightdm-1.js').default
    export default LightDM1;
}

declare module 'gi://LightDM' {
    const LightDM1: typeof import('./lightdm-1.js').default
    export default LightDM1;
}


