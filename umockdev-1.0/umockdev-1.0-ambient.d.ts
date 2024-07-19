declare module 'gi://UMockdev?version=1.0' {
    import UMockdev10 from '@girs/umockdev-1.0';
    export default UMockdev10;
}

declare module 'gi://UMockdev' {
    import UMockdev10 from 'gi://UMockdev?version=1.0';
    export default UMockdev10;
}
