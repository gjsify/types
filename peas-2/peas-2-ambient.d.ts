
declare module 'gi://Peas?version=2' {
    import Peas from './peas-2.d.ts';
    export default Peas;
}

declare module 'gi://Peas' {
    import Peas2 from 'gi://Peas?version=2';
    export default Peas2;
}


