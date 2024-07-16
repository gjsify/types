
declare module 'gi://Camel?version=1.2' {
    import Camel from './camel-1.2.d.ts';
    export default Camel;
}

declare module 'gi://Camel' {
    import Camel12 from 'gi://Camel?version=1.2';
    export default Camel12;
}


