
import GstMpegts10 from '@girs/node-gstmpegts-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstMpegts', ver?: '1.0'): typeof GstMpegts10;
    }
}

export default NodeGtkGi;

