import Pnl10 from '@girs/pnl-1.0';

declare global {
    export interface GjsGiImports {
        Pnl: typeof Pnl10;
    }
}

export default GjsGiImports;
