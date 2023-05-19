
import GSound10 from '@girs/gsound-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSound', ver?: '1.0'): typeof GSound10;
    }
}

export default NodeGtkGi;

