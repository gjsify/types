
import Pnl from './pnl-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        Pnl: typeof Pnl;
    }
}

export default GjsGiImports;


