
declare module 'gi://GES?version=1.0' {
    import GES from './ges-1.0.d.ts';
    export default GES;
}

declare module 'gi://GES' {
    import GES10 from 'gi://GES?version=1.0';
    export default GES10;
}


