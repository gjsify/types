
declare module 'gi://Gedit?version=3.0' {
    import Gedit30 from '@girs/gedit-3.0';
    export default Gedit30;
}

declare module 'gi://Gedit' {
    export * from 'gi://Gedit?version=3.0';
}


