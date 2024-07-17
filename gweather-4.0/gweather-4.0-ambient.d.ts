
declare module 'gi://GWeather?version=4.0' {
    const GWeather40: typeof import('./gweather-4.0.js').default
    export default GWeather40;
}

declare module 'gi://GWeather' {
    const GWeather40: typeof import('./gweather-4.0.js').default
    export default GWeather40;
}


