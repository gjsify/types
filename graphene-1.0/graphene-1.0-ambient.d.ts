declare module 'gi://Graphene?version=1.0' {
    import Graphene10 from '@girs/graphene-1.0';
    export default Graphene10;
}

declare module 'gi://Graphene' {
    import Graphene10 from 'gi://Graphene?version=1.0';
    export default Graphene10;
}
