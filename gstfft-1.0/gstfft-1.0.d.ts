/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstFft {
    /**
     * GstFft-1.0
     */

    /**
     * The various window functions available.
     */

    /**
     * The various window functions available.
     */
    export namespace FFTWindow {
        export const $gtype: GObject.GType<FFTWindow>;
    }

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
    /**
     * Returns the next number to `n` that is entirely a product
     * of 2, 3 and 5. Using this as the `len` parameter for
     * the different GstFFT types will provide the best performance.
     * @param n Number for which the next fast length should be returned
     * @returns the next fast FFT length.
     */
    function fft_next_fast_length(n: number): number;
    /**
     * #GstFFTF32 provides a FFT implementation and related functions for
     * 32 bit float samples. To use this call gst_fft_f32_new() for
     * allocating a #GstFFTF32 instance with the appropriate parameters and
     * then call gst_fft_f32_fft() or gst_fft_f32_inverse_fft() to perform the
     * FFT or inverse FFT on a buffer of samples.
     *
     * After use free the #GstFFTF32 instance with gst_fft_f32_free().
     *
     * For the best performance use gst_fft_next_fast_length() to get a
     * number that is entirely a product of 2, 3 and 5 and use this as the
     * `len` parameter for gst_fft_f32_new().
     *
     * The `len` parameter specifies the number of samples in the time domain that
     * will be processed or generated. The number of samples in the frequency domain
     * is `len/`2 + 1. To get n samples in the frequency domain use 2*n - 2 as `len`.
     *
     * Before performing the FFT on time domain data it usually makes sense
     * to apply a window function to it. For this gst_fft_f32_window() can comfortably
     * be used.
     *
     * Be aware, that you can't simply run gst_fft_f32_inverse_fft() on the
     * resulting frequency data of gst_fft_f32_fft() to get the original data back.
     * The relation between them is iFFT (FFT (x)) = x * nfft where nfft is the
     * length of the FFT. This also has to be taken into account when calculation
     * the magnitude of the frequency data.
     */
    abstract class FFTF32 {
        static $gtype: GObject.GType<FFTF32>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        fft(timedata: number, freqdata: FFTF32Complex): void;
        /**
         * This frees the memory allocated for `self`.
         */
        free(): void;
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
        inverse_fft(freqdata: FFTF32Complex, timedata: number): void;
        /**
         * This calls the window function `window` on the `timedata` sample buffer.
         * @param timedata Time domain samples
         * @param window Window function to apply
         */
        window(timedata: number, window: FFTWindow | null): void;
    }

    /**
     * Data type for complex numbers composed of
     * 32 bit float.
     */
    class FFTF32Complex {
        static $gtype: GObject.GType<FFTF32Complex>;

        // Fields

        r: number;
        i: number;

        // Constructors

        constructor(
            properties?: Partial<{
                r: number;
                i: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * #GstFFTF64 provides a FFT implementation and related functions for
     * 64 bit float samples. To use this call gst_fft_f64_new() for
     * allocating a #GstFFTF64 instance with the appropriate parameters and
     * then call gst_fft_f64_fft() or gst_fft_f64_inverse_fft() to perform the
     * FFT or inverse FFT on a buffer of samples.
     *
     * After use free the #GstFFTF64 instance with gst_fft_f64_free().
     *
     * For the best performance use gst_fft_next_fast_length() to get a
     * number that is entirely a product of 2, 3 and 5 and use this as the
     * `len` parameter for gst_fft_f64_new().
     *
     * The `len` parameter specifies the number of samples in the time domain that
     * will be processed or generated. The number of samples in the frequency domain
     * is `len/`2 + 1. To get n samples in the frequency domain use 2*n - 2 as `len`.
     *
     * Before performing the FFT on time domain data it usually makes sense
     * to apply a window function to it. For this gst_fft_f64_window() can comfortably
     * be used.
     *
     * Be aware, that you can't simply run gst_fft_f32_inverse_fft() on the
     * resulting frequency data of gst_fft_f32_fft() to get the original data back.
     * The relation between them is iFFT (FFT (x)) = x * nfft where nfft is the
     * length of the FFT. This also has to be taken into account when calculation
     * the magnitude of the frequency data.
     */
    abstract class FFTF64 {
        static $gtype: GObject.GType<FFTF64>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        fft(timedata: number, freqdata: FFTF64Complex): void;
        /**
         * This frees the memory allocated for `self`.
         */
        free(): void;
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
        inverse_fft(freqdata: FFTF64Complex, timedata: number): void;
        /**
         * This calls the window function `window` on the `timedata` sample buffer.
         * @param timedata Time domain samples
         * @param window Window function to apply
         */
        window(timedata: number, window: FFTWindow | null): void;
    }

    /**
     * Data type for complex numbers composed of
     * 64 bit float.
     */
    class FFTF64Complex {
        static $gtype: GObject.GType<FFTF64Complex>;

        // Fields

        r: number;
        i: number;

        // Constructors

        constructor(
            properties?: Partial<{
                r: number;
                i: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * #GstFFTS16 provides a FFT implementation and related functions for
     * signed 16 bit integer samples. To use this call gst_fft_s16_new() for
     * allocating a #GstFFTS16 instance with the appropriate parameters and
     * then call gst_fft_s16_fft() or gst_fft_s16_inverse_fft() to perform the
     * FFT or inverse FFT on a buffer of samples.
     *
     * After use free the #GstFFTS16 instance with gst_fft_s16_free().
     *
     * For the best performance use gst_fft_next_fast_length() to get a
     * number that is entirely a product of 2, 3 and 5 and use this as the
     * `len` parameter for gst_fft_s16_new().
     *
     * The `len` parameter specifies the number of samples in the time domain that
     * will be processed or generated. The number of samples in the frequency domain
     * is `len/`2 + 1. To get n samples in the frequency domain use 2*n - 2 as `len`.
     *
     * Before performing the FFT on time domain data it usually makes sense
     * to apply a window function to it. For this gst_fft_s16_window() can comfortably
     * be used.
     *
     * Be aware, that you can't simply run gst_fft_s16_inverse_fft() on the
     * resulting frequency data of gst_fft_s16_fft() to get the original data back.
     * The relation between them is iFFT (FFT (x)) = x / nfft where nfft is the
     * length of the FFT. This also has to be taken into account when calculation
     * the magnitude of the frequency data.
     */
    abstract class FFTS16 {
        static $gtype: GObject.GType<FFTS16>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        fft(timedata: number, freqdata: FFTS16Complex): void;
        /**
         * This frees the memory allocated for `self`.
         */
        free(): void;
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
        inverse_fft(freqdata: FFTS16Complex, timedata: number): void;
        /**
         * This calls the window function `window` on the `timedata` sample buffer.
         * @param timedata Time domain samples
         * @param window Window function to apply
         */
        window(timedata: number, window: FFTWindow | null): void;
    }

    /**
     * Data type for complex numbers composed of
     * signed 16 bit integers.
     */
    class FFTS16Complex {
        static $gtype: GObject.GType<FFTS16Complex>;

        // Fields

        r: number;
        i: number;

        // Constructors

        constructor(
            properties?: Partial<{
                r: number;
                i: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * #GstFFTS32 provides a FFT implementation and related functions for
     * signed 32 bit integer samples. To use this call gst_fft_s32_new() for
     * allocating a #GstFFTS32 instance with the appropriate parameters and
     * then call gst_fft_s32_fft() or gst_fft_s32_inverse_fft() to perform the
     * FFT or inverse FFT on a buffer of samples.
     *
     * After use free the #GstFFTS32 instance with gst_fft_s32_free().
     *
     * For the best performance use gst_fft_next_fast_length() to get a
     * number that is entirely a product of 2, 3 and 5 and use this as the
     * `len` parameter for gst_fft_s32_new().
     *
     * The `len` parameter specifies the number of samples in the time domain that
     * will be processed or generated. The number of samples in the frequency domain
     * is `len/`2 + 1. To get n samples in the frequency domain use 2*n - 2 as `len`.
     *
     * Before performing the FFT on time domain data it usually makes sense
     * to apply a window function to it. For this gst_fft_s32_window() can comfortably
     * be used.
     *
     * Be aware, that you can't simply run gst_fft_s32_inverse_fft() on the
     * resulting frequency data of gst_fft_s32_fft() to get the original data back.
     * The relation between them is iFFT (FFT (x)) = x / nfft where nfft is the
     * length of the FFT. This also has to be taken into account when calculation
     * the magnitude of the frequency data.
     */
    abstract class FFTS32 {
        static $gtype: GObject.GType<FFTS32>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        fft(timedata: number, freqdata: FFTS32Complex): void;
        /**
         * This frees the memory allocated for `self`.
         */
        free(): void;
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
        inverse_fft(freqdata: FFTS32Complex, timedata: number): void;
        /**
         * This calls the window function `window` on the `timedata` sample buffer.
         * @param timedata Time domain samples
         * @param window Window function to apply
         */
        window(timedata: number, window: FFTWindow | null): void;
    }

    /**
     * Data type for complex numbers composed of
     * signed 32 bit integers.
     */
    class FFTS32Complex {
        static $gtype: GObject.GType<FFTS32Complex>;

        // Fields

        r: number;
        i: number;

        // Constructors

        constructor(
            properties?: Partial<{
                r: number;
                i: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GstFft;

// END
