declare module 'gi://Soup?version=2.4' {
    import Soup24 from '@girs/soup-2.4';
    export default Soup24;
}

declare module 'gi://Soup' {
    import Soup24 from 'gi://Soup?version=2.4';
    export default Soup24;
}
