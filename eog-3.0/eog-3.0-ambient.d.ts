
declare module 'gi://Eog?version=3.0' {
    import Eog from './eog-3.0.d.ts';
    export default Eog;
}

declare module 'gi://Eog' {
    import Eog30 from 'gi://Eog?version=3.0';
    export default Eog30;
}


