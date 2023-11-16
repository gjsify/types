
import Bump01 from '@girs/bump-0.1';

declare global {
    export interface GjsGiImports {
        Bump: typeof Bump01;
    }
}

export default GjsGiImports;


