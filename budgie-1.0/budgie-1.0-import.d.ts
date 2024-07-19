import Budgie10 from '@girs/budgie-1.0';

declare global {
    export interface GjsGiImports {
        Budgie: typeof Budgie10;
    }
}

export default GjsGiImports;
