
import MateDesktop from './matedesktop-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        MateDesktop: typeof MateDesktop;
    }
}

export default GjsGiImports;


