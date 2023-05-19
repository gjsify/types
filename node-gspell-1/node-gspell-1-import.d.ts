
import Gspell1 from '@girs/gspell-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gspell', ver?: '1'): typeof Gspell1;
    }
}

export default NodeGtkGi;

