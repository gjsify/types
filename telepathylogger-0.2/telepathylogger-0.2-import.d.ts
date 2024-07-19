import TelepathyLogger02 from '@girs/telepathylogger-0.2';

declare global {
    export interface GjsGiImports {
        TelepathyLogger: typeof TelepathyLogger02;
    }
}

export default GjsGiImports;
