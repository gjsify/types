
declare module 'gi://Zeitgeist?version=2.0' {
    import Zeitgeist from './zeitgeist-2.0.d.ts';
    export default Zeitgeist;
}

declare module 'gi://Zeitgeist' {
    import Zeitgeist20 from 'gi://Zeitgeist?version=2.0';
    export default Zeitgeist20;
}


