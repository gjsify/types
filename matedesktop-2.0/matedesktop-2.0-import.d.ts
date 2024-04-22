
import MateDesktop20 from '@girs/matedesktop-2.0';

declare global {
    export interface GjsGiImports {
        MateDesktop: typeof MateDesktop20;
    }
}

export default GjsGiImports;


