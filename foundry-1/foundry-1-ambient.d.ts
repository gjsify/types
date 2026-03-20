declare module 'gi://Foundry?version=1' {
    import Foundry1 from '@girs/foundry-1';
    export default Foundry1;
}

declare module 'gi://Foundry' {
    import Foundry1 from 'gi://Foundry?version=1';
    export default Foundry1;
}
