
import BudgieRaven from './budgieraven-1.0.js';

declare global {
    export interface GjsGiImports {
        BudgieRaven: typeof BudgieRaven;
    }
}

export default GjsGiImports;


