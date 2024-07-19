import Secret1 from '@girs/secret-1';

declare global {
    export interface GjsGiImports {
        Secret: typeof Secret1;
    }
}

export default GjsGiImports;
