
import Gladeui from './gladeui-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gladeui: typeof Gladeui;
    }
}

export default GjsGiImports;


