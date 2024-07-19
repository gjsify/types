import TelepathyGLib012 from '@girs/telepathyglib-0.12';

declare global {
    export interface GjsGiImports {
        TelepathyGLib: typeof TelepathyGLib012;
    }
}

export default GjsGiImports;
