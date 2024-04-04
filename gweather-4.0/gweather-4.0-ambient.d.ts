
declare module 'gi://GWeather?version=4.0' {
    import GWeather from '@girs/gweather-4.0';
    export default GWeather;
}

declare module 'gi://GWeather' {
    import GWeather40 from 'gi://GWeather?version=4.0';
    export default GWeather40;
}


