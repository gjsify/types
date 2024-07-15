
declare module 'gi://GWeather?version=3.0' {
    import GWeather from '@girs/gweather-3.0';
    export default GWeather;
}

declare module 'gi://GWeather' {
    import GWeather30 from 'gi://GWeather?version=3.0';
    export default GWeather30;
}


