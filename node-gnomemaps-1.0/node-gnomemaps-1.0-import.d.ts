
import GnomeMaps10 from '@girs/node-gnomemaps-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeMaps', ver?: '1.0'): typeof GnomeMaps10;
    }
}

export default NodeGtkGi;

