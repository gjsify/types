
import MateDesktop from './matedesktop-2.0.js';

declare global {
    export interface GjsGiImports {
        MateDesktop: typeof MateDesktop;
    }
}

export default GjsGiImports;


