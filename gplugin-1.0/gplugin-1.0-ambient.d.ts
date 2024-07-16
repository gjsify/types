
declare module 'gi://GPlugin?version=1.0' {
    import GPlugin from './gplugin-1.0.d.ts';
    export default GPlugin;
}

declare module 'gi://GPlugin' {
    import GPlugin10 from 'gi://GPlugin?version=1.0';
    export default GPlugin10;
}


