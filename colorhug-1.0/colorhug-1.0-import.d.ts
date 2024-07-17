
import ColorHug from './colorhug-1.0.js';

declare global {
    export interface GjsGiImports {
        ColorHug: typeof ColorHug;
    }
}

export default GjsGiImports;


