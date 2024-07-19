declare module 'gi://AccountsService?version=1.0' {
    import AccountsService10 from '@girs/accountsservice-1.0';
    export default AccountsService10;
}

declare module 'gi://AccountsService' {
    import AccountsService10 from 'gi://AccountsService?version=1.0';
    export default AccountsService10;
}
