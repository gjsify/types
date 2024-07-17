
declare module 'gi://ECal?version=2.0' {
    const ECal20: typeof import('./ecal-2.0.js').default
    export default ECal20;
}

declare module 'gi://ECal' {
    const ECal20: typeof import('./ecal-2.0.js').default
    export default ECal20;
}


