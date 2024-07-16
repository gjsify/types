
declare module 'gi://GSound?version=1.0' {
    import GSound from './gsound-1.0.d.ts';
    export default GSound;
}

declare module 'gi://GSound' {
    import GSound10 from 'gi://GSound?version=1.0';
    export default GSound10;
}


