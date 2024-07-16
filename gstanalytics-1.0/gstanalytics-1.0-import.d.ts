
import GstAnalytics from './gstanalytics-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstAnalytics: typeof GstAnalytics;
    }
}

export default GjsGiImports;


