/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstFft-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstFft {

/**
 * The various window functions available.
 */
enum FFTWindow {
    /**
     * Rectangular window
     */
    RECTANGULAR,
    /**
     * Hamming window
     */
    HAMMING,
    /**
     * Hann (sometimes also called Hanning) window
     */
    HANN,
    /**
     * Bartlett window
     */
    BARTLETT,
    /**
     * Blackman window
     */
    BLACKMAN,
}
function fft_next_fast_length(n: number): number
class FFTF32 {
    /* Methods of GstFft-1.0.GstFft.FFTF32 */
    /**
     * This performs the FFT on `timedata` and puts the result in `freqdata`.
     * 
     * `timedata` must have as many samples as specified with the `len` parameter while
     * allocating the #GstFFTF32 instance with gst_fft_f32_new().
     * 
     * `freqdata` must be large enough to hold `len/`2 + 1 #GstFFTF32Complex frequency
     * domain samples.
     * @param timedata Buffer of the samples in the time domain
     * @param freqdata Target buffer for the samples in the frequency domain
     */
    fft(timedata: number, freqdata: FFTF32Complex): void
    /**
     * This frees the memory allocated for `self`.
     */
    free(): void
    /**
     * This performs the inverse FFT on `freqdata` and puts the result in `timedata`.
     * 
     * `freqdata` must have `len/`2 + 1 samples, where `len` is the parameter specified
     * while allocating the #GstFFTF32 instance with gst_fft_f32_new().
     * 
     * `timedata` must be large enough to hold `len` time domain samples.
     * @param freqdata Buffer of the samples in the frequency domain
     * @param timedata Target buffer for the samples in the time domain
     */
    inverse_fft(freqdata: FFTF32Complex, timedata: number): void
    /**
     * This calls the window function `window` on the `timedata` sample buffer.
     * @param timedata Time domain samples
     * @param window Window function to apply
     */
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTF32Complex {
    /* Fields of GstFft-1.0.GstFft.FFTF32Complex */
    /**
     * Real part
     */
    r: number
    /**
     * Imaginary part
     */
    i: number
    static name: string
}
class FFTF64 {
    /* Methods of GstFft-1.0.GstFft.FFTF64 */
    /**
     * This performs the FFT on `timedata` and puts the result in `freqdata`.
     * 
     * `timedata` must have as many samples as specified with the `len` parameter while
     * allocating the #GstFFTF64 instance with gst_fft_f64_new().
     * 
     * `freqdata` must be large enough to hold `len/`2 + 1 #GstFFTF64Complex frequency
     * domain samples.
     * @param timedata Buffer of the samples in the time domain
     * @param freqdata Target buffer for the samples in the frequency domain
     */
    fft(timedata: number, freqdata: FFTF64Complex): void
    /**
     * This frees the memory allocated for `self`.
     */
    free(): void
    /**
     * This performs the inverse FFT on `freqdata` and puts the result in `timedata`.
     * 
     * `freqdata` must have `len/`2 + 1 samples, where `len` is the parameter specified
     * while allocating the #GstFFTF64 instance with gst_fft_f64_new().
     * 
     * `timedata` must be large enough to hold `len` time domain samples.
     * @param freqdata Buffer of the samples in the frequency domain
     * @param timedata Target buffer for the samples in the time domain
     */
    inverse_fft(freqdata: FFTF64Complex, timedata: number): void
    /**
     * This calls the window function `window` on the `timedata` sample buffer.
     * @param timedata Time domain samples
     * @param window Window function to apply
     */
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTF64Complex {
    /* Fields of GstFft-1.0.GstFft.FFTF64Complex */
    /**
     * Real part
     */
    r: number
    /**
     * Imaginary part
     */
    i: number
    static name: string
}
class FFTS16 {
    /* Methods of GstFft-1.0.GstFft.FFTS16 */
    /**
     * This performs the FFT on `timedata` and puts the result in `freqdata`.
     * 
     * `timedata` must have as many samples as specified with the `len` parameter while
     * allocating the #GstFFTS16 instance with gst_fft_s16_new().
     * 
     * `freqdata` must be large enough to hold `len/`2 + 1 #GstFFTS16Complex frequency
     * domain samples.
     * @param timedata Buffer of the samples in the time domain
     * @param freqdata Target buffer for the samples in the frequency domain
     */
    fft(timedata: number, freqdata: FFTS16Complex): void
    /**
     * This frees the memory allocated for `self`.
     */
    free(): void
    /**
     * This performs the inverse FFT on `freqdata` and puts the result in `timedata`.
     * 
     * `freqdata` must have `len/`2 + 1 samples, where `len` is the parameter specified
     * while allocating the #GstFFTS16 instance with gst_fft_s16_new().
     * 
     * `timedata` must be large enough to hold `len` time domain samples.
     * @param freqdata Buffer of the samples in the frequency domain
     * @param timedata Target buffer for the samples in the time domain
     */
    inverse_fft(freqdata: FFTS16Complex, timedata: number): void
    /**
     * This calls the window function `window` on the `timedata` sample buffer.
     * @param timedata Time domain samples
     * @param window Window function to apply
     */
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTS16Complex {
    /* Fields of GstFft-1.0.GstFft.FFTS16Complex */
    /**
     * Real part
     */
    r: number
    /**
     * Imaginary part
     */
    i: number
    static name: string
}
class FFTS32 {
    /* Methods of GstFft-1.0.GstFft.FFTS32 */
    /**
     * This performs the FFT on `timedata` and puts the result in `freqdata`.
     * 
     * `timedata` must have as many samples as specified with the `len` parameter while
     * allocating the #GstFFTS32 instance with gst_fft_s32_new().
     * 
     * `freqdata` must be large enough to hold `len/`2 + 1 #GstFFTS32Complex frequency
     * domain samples.
     * @param timedata Buffer of the samples in the time domain
     * @param freqdata Target buffer for the samples in the frequency domain
     */
    fft(timedata: number, freqdata: FFTS32Complex): void
    /**
     * This frees the memory allocated for `self`.
     */
    free(): void
    /**
     * This performs the inverse FFT on `freqdata` and puts the result in `timedata`.
     * 
     * `freqdata` must have `len/`2 + 1 samples, where `len` is the parameter specified
     * while allocating the #GstFFTS32 instance with gst_fft_s32_new().
     * 
     * `timedata` must be large enough to hold `len` time domain samples.
     * @param freqdata Buffer of the samples in the frequency domain
     * @param timedata Target buffer for the samples in the time domain
     */
    inverse_fft(freqdata: FFTS32Complex, timedata: number): void
    /**
     * This calls the window function `window` on the `timedata` sample buffer.
     * @param timedata Time domain samples
     * @param window Window function to apply
     */
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTS32Complex {
    /* Fields of GstFft-1.0.GstFft.FFTS32Complex */
    /**
     * Real part
     */
    r: number
    /**
     * Imaginary part
     */
    i: number
    static name: string
}
}
export default GstFft;