
declare module 'gi://Sushi?version=1.0' {
    import Sushi10 from '@girs/sushi-1.0';
    export default Sushi10;
}

declare module 'gi://Sushi' {
    export * from 'gi://Sushi?version=1.0';
}


