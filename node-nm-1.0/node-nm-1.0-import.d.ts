
import NM10 from '@girs/nm-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'NM', ver?: '1.0'): typeof NM10;
    }
}

export default NodeGtkGi;

