
import HarfBuzz00 from '@girs/harfbuzz-0.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'HarfBuzz', ver?: '0.0'): typeof HarfBuzz00;
    }
}

export default NodeGtkGi;

