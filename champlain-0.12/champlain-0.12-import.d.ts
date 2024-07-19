import Champlain012 from '@girs/champlain-0.12';

declare global {
    export interface GjsGiImports {
        Champlain: typeof Champlain012;
    }
}

export default GjsGiImports;
