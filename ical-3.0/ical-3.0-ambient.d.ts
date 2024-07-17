
declare module 'gi://ICal?version=3.0' {
    const ICal30: typeof import('./ical-3.0.js').default
    export default ICal30;
}

declare module 'gi://ICal' {
    const ICal30: typeof import('./ical-3.0.js').default
    export default ICal30;
}


