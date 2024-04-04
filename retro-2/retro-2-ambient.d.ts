
declare module 'gi://Retro?version=2' {
    import Retro from '@girs/retro-2';
    export default Retro;
}

declare module 'gi://Retro' {
    import Retro2 from 'gi://Retro?version=2';
    export default Retro2;
}


