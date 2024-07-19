declare module 'gi://Gepub?version=0.7' {
    import Gepub07 from '@girs/gepub-0.7';
    export default Gepub07;
}

declare module 'gi://Gepub' {
    import Gepub07 from 'gi://Gepub?version=0.7';
    export default Gepub07;
}
