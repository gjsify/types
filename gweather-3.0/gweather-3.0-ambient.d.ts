
declare module 'gi://GWeather?version=3.0' {
    const GWeather30: typeof import('./gweather-3.0.js').default
    export default GWeather30;
}

declare module 'gi://GWeather' {
    const GWeather30: typeof import('./gweather-3.0.js').default
    export default GWeather30;
}


