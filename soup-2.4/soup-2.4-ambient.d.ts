
declare module 'gi://Soup?version=2.4' {
    import Soup from './soup-2.4.d.ts';
    export default Soup;
}

declare module 'gi://Soup' {
    import Soup24 from 'gi://Soup?version=2.4';
    export default Soup24;
}


