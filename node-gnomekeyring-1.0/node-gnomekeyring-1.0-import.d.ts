
import GnomeKeyring10 from '@girs/gnomekeyring-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeKeyring', ver?: '1.0'): typeof GnomeKeyring10;
    }
}

export default NodeGtkGi;

