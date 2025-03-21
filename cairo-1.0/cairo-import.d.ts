import cairo from 'cairo';

declare global {
    export interface GjsGiImports {
        cairo: typeof cairo;
    }
}

export default GjsGiImports;
