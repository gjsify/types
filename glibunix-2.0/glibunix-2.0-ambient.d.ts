declare module 'gi://GLibUnix?version=2.0' {
    import GLibUnix20 from '@girs/glibunix-2.0';
    export default GLibUnix20;
}

declare module 'gi://GLibUnix' {
    import GLibUnix20 from 'gi://GLibUnix?version=2.0';
    export default GLibUnix20;
}
