
import EBook12 from '@girs/node-ebook-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EBook', ver?: '1.2'): typeof EBook12;
    }
}

export default NodeGtkGi;

