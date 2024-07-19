import AgsGui60 from '@girs/agsgui-6.0';

declare global {
    export interface GjsGiImports {
        AgsGui: typeof AgsGui60;
    }
}

export default GjsGiImports;
