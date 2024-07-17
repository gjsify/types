
import Gdaui from './gdaui-6.0.js';

declare global {
    export interface GjsGiImports {
        Gdaui: typeof Gdaui;
    }
}

export default GjsGiImports;


