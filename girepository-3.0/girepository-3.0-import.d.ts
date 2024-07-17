
import GIRepository from './girepository-3.0.js';

declare global {
    export interface GjsGiImports {
        GIRepository: typeof GIRepository;
    }
}

export default GjsGiImports;


