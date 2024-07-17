
import GstAnalytics10 from '@girs/gstanalytics-1.0';

declare global {
    export interface GjsGiImports {
        GstAnalytics: typeof GstAnalytics10;
    }
}

export default GjsGiImports;


