
declare module 'gi://Unity?version=6.0' {
    import Unity from './unity-6.0.d.ts';
    export default Unity;
}

declare module 'gi://Unity' {
    import Unity60 from 'gi://Unity?version=6.0';
    export default Unity60;
}


