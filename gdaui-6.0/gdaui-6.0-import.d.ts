
import Gdaui from './gdaui-6.0.d.ts';

declare global {
    export interface GjsGiImports {
        Gdaui: typeof Gdaui;
    }
}

export default GjsGiImports;


