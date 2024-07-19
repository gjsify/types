import Grl03 from '@girs/grl-0.3';

declare global {
    export interface GjsGiImports {
        Grl: typeof Grl03;
    }
}

export default GjsGiImports;
