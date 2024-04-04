
declare module 'gi://Accounts?version=1.0' {
    import Accounts from '@girs/accounts-1.0';
    export default Accounts;
}

declare module 'gi://Accounts' {
    import Accounts10 from 'gi://Accounts?version=1.0';
    export default Accounts10;
}


