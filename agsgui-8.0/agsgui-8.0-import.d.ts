import type AgsGui80 from '@girs/agsgui-8.0';

declare global {
    export interface GjsGiImports {
        AgsGui: typeof AgsGui80;
    }
}

export default GjsGiImports;
