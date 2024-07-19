import Shumate10 from '@girs/shumate-1.0';

declare global {
    export interface GjsGiImports {
        Shumate: typeof Shumate10;
    }
}

export default GjsGiImports;
