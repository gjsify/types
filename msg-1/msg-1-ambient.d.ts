
declare module 'gi://Msg?version=1' {
    import Msg1 from '@girs/msg-1';
    export default Msg1;
}

declare module 'gi://Msg' {
    import Msg1 from 'gi://Msg?version=1';
    export default Msg1;
}


