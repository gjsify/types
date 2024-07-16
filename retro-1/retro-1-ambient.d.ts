
declare module 'gi://Retro?version=1' {
    import Retro from './retro-1.d.ts';
    export default Retro;
}

declare module 'gi://Retro' {
    import Retro1 from 'gi://Retro?version=1';
    export default Retro1;
}


