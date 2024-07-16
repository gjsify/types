
import AgsGui from './agsgui-6.0.d.ts';

declare global {
    export interface GjsGiImports {
        AgsGui: typeof AgsGui;
    }
}

export default GjsGiImports;


