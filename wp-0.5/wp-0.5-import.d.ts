import Wp05 from '@girs/wp-0.5';

declare global {
    export interface GjsGiImports {
        Wp: typeof Wp05;
    }
}

export default GjsGiImports;
