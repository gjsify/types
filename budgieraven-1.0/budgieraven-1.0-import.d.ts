import BudgieRaven10 from '@girs/budgieraven-1.0';

declare global {
    export interface GjsGiImports {
        BudgieRaven: typeof BudgieRaven10;
    }
}

export default GjsGiImports;
