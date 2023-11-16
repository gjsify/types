
import Cheese30 from '@girs/cheese-3.0';

declare global {
    export interface GjsGiImports {
        Cheese: typeof Cheese30;
    }
}

export default GjsGiImports;


