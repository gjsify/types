
import GstTranscoder10 from '@girs/gsttranscoder-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstTranscoder', ver?: '1.0'): typeof GstTranscoder10;
    }
}

export default NodeGtkGi;

