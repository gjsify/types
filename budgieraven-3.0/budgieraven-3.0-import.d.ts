import type BudgieRaven30 from '@girs/budgieraven-3.0';

declare global {
    export interface GjsGiImports {
        BudgieRaven: typeof BudgieRaven30;
    }
}

export default GjsGiImports;
