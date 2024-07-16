
declare module 'gi://Sushi?version=1.0' {
    import Sushi from './sushi-1.0.d.ts';
    export default Sushi;
}

declare module 'gi://Sushi' {
    import Sushi10 from 'gi://Sushi?version=1.0';
    export default Sushi10;
}


