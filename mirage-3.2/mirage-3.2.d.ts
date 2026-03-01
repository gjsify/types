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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Mirage {
    /**
     * Mirage-3.2
     */

    /**
     * Debug message types and debug masks used to control verbosity of various
     * parts of libMirage.
     *
     * All masks except %MIRAGE_DEBUG_ERROR and %MIRAGE_DEBUG_WARNING can be combined
     * together to control verbosity of libMirage.
     */

    /**
     * Debug message types and debug masks used to control verbosity of various
     * parts of libMirage.
     *
     * All masks except %MIRAGE_DEBUG_ERROR and %MIRAGE_DEBUG_WARNING can be combined
     * together to control verbosity of libMirage.
     */
    export namespace DebugMask {
        export const $gtype: GObject.GType<DebugMask>;
    }

    enum DebugMask {
        /**
         * error message
         */
        ERROR,
        /**
         * warning message
         */
        WARNING,
        /**
         * message belonging to image parser and file stream parser
         */
        PARSER,
        /**
         * message belonging to disc
         */
        DISC,
        /**
         * message belonging to session
         */
        SESSION,
        /**
         * message belonging to track
         */
        TRACK,
        /**
         * message belonging to sector
         */
        SECTOR,
        /**
         * message belonging to fragment
         */
        FRAGMENT,
        /**
         * message belonging to CD-TEXT encoder/decoder
         */
        CDTEXT,
        /**
         * messages belonging to file and filter stream I/O operations
         */
        STREAM,
        /**
         * messages belonging to image identification part of image parsers
         */
        IMAGE_ID,
        /**
         * messages belonging to image writer
         */
        WRITER,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        static LIBRARYERROR: number;
        static PARSERERROR: number;
        static FRAGMENTERROR: number;
        static DISCERROR: number;
        static LANGUAGEERROR: number;
        static SECTORERROR: number;
        static SESSIONERROR: number;
        static TRACKERROR: number;
        static STREAMERROR: number;
        static IMAGEFILEERROR: number;
        static DATAFILEERROR: number;
        static CANNOTHANDLE: number;
        static ENCRYPTEDIMAGE: number;
        static WRITERERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Registers an error quark for libMirage if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Error codes for libMirage library.
     */

    /**
     * Error codes for libMirage library.
     */
    export namespace ErrorCode {
        export const $gtype: GObject.GType<ErrorCode>;
    }

    enum ErrorCode {
        /**
         * error in core libMirage code
         */
        LIBRARY_ERROR,
        /**
         * error in parser code
         */
        PARSER_ERROR,
        /**
         * error in fragment code
         */
        FRAGMENT_ERROR,
        /**
         * error in disc code
         */
        DISC_ERROR,
        /**
         * error in language/CD-TEXT code
         */
        LANGUAGE_ERROR,
        /**
         * error in sector code
         */
        SECTOR_ERROR,
        /**
         * error in session code
         */
        SESSION_ERROR,
        /**
         * error in track code
         */
        TRACK_ERROR,
        /**
         * error in stream code
         */
        STREAM_ERROR,
        /**
         * error related to image file
         */
        IMAGE_FILE_ERROR,
        /**
         * error related to data file
         */
        DATA_FILE_ERROR,
        /**
         * parser/writer/filter stream cannot handle given file
         */
        CANNOT_HANDLE,
        /**
         * image is encrypted and password needs to be provided
         */
        ENCRYPTED_IMAGE,
        /**
         * error in image writer code
         */
        WRITER_ERROR,
    }
    /**
     * Fragment roles.
     */

    /**
     * Fragment roles.
     */
    export namespace FragmentRole {
        export const $gtype: GObject.GType<FragmentRole>;
    }

    enum FragmentRole {
        /**
         * pregap fragment
         */
        PREGAP,
        /**
         * data fragment
         */
        DATA,
    }
    /**
     * CD-TEXT pack types.
     */

    /**
     * CD-TEXT pack types.
     */
    export namespace LanguagePackType {
        export const $gtype: GObject.GType<LanguagePackType>;
    }

    enum LanguagePackType {
        /**
         * Album name and Track titles
         */
        TITLE,
        /**
         * Singer/player/conductor/orchestra
         */
        PERFORMER,
        /**
         * Name of the songwriter
         */
        SONGWRITER,
        /**
         * Name of the composer
         */
        COMPOSER,
        /**
         * Name of the arranger
         */
        ARRANGER,
        /**
         * Message from content provider or artist
         */
        MESSAGE,
        /**
         * Disc identification information
         */
        DISC_ID,
        /**
         * Genre identification / information
         */
        GENRE,
        /**
         * TOC information
         */
        TOC,
        /**
         * Second TOC
         */
        TOC2,
        /**
         * Reserved 8A
         */
        RES_8A,
        /**
         * Reserved 8B
         */
        RES_8B,
        /**
         * Reserved 8C
         */
        RES_8C,
        /**
         * For internal use by content provider
         */
        CLOSED_INFO,
        /**
         * UPC/EAN code of album and ISRC for tracks
         */
        UPC_ISRC,
        /**
         * Size information of the block
         */
        SIZE,
    }
    /**
     * Track file data formats.
     */

    /**
     * Track file data formats.
     */
    export namespace MainDataFormat {
        export const $gtype: GObject.GType<MainDataFormat>;
    }

    enum MainDataFormat {
        /**
         * binary data
         */
        DATA,
        /**
         * audio data
         */
        AUDIO,
        /**
         * audio data that needs to be swapped
         */
        AUDIO_SWAP,
    }
    /**
     * Medium types.
     */

    /**
     * Medium types.
     */
    export namespace MediumType {
        export const $gtype: GObject.GType<MediumType>;
    }

    enum MediumType {
        /**
         * CD disc
         */
        CD,
        /**
         * DVD disc
         */
        DVD,
        /**
         * BD (Blue-Ray) disc
         */
        BD,
        /**
         * HD-DVD disc
         */
        HD,
        /**
         * Hard-disk
         */
        HDD,
    }
    /**
     * Subchannel selection flags.
     */

    /**
     * Subchannel selection flags.
     */
    export namespace SectorSubchannelFormat {
        export const $gtype: GObject.GType<SectorSubchannelFormat>;
    }

    enum SectorSubchannelFormat {
        /**
         * no subchannel
         */
        NONE,
        /**
         * PW subchannel; 96 bytes, interleaved P-W
         */
        PW,
        /**
         * Q subchannel; 16 bytes, Q subchannel
         */
        Q,
        /**
         * RW subchannel; 96 bytes, cooked R-W
         */
        RW,
    }
    /**
     * Sector type. Also implies track mode.
     */

    /**
     * Sector type. Also implies track mode.
     */
    export namespace SectorType {
        export const $gtype: GObject.GType<SectorType>;
    }

    enum SectorType {
        /**
         * Mode 0 sector
         */
        MODE0,
        /**
         * Audio sector
         */
        AUDIO,
        /**
         * Mode 1 sector
         */
        MODE1,
        /**
         * Mode 2 Formless sector
         */
        MODE2,
        /**
         * Mode 2 Form 1 sector
         */
        MODE2_FORM1,
        /**
         * Mode 2 Form 2 sector
         */
        MODE2_FORM2,
        /**
         * Mode 2 Mixed sector
         */
        MODE2_MIXED,
        /**
         * raw sector (automatic sector type detection)
         */
        RAW,
        /**
         * scrambled raw sector (automatic sector type detection)
         */
        RAW_SCRAMBLED,
    }
    /**
     * Sector data validity flags.
     */

    /**
     * Sector data validity flags.
     */
    export namespace SectorValidData {
        export const $gtype: GObject.GType<SectorValidData>;
    }

    enum SectorValidData {
        /**
         * sync pattern valid
         */
        SYNC,
        /**
         * header valid
         */
        HEADER,
        /**
         * subheader valid
         */
        SUBHEADER,
        /**
         * user data valid
         */
        DATA,
        /**
         * EDC/ECC data valid
         */
        EDC_ECC,
        /**
         * subchannel valid
         */
        SUBCHAN,
    }
    /**
     * Session type.
     */

    /**
     * Session type.
     */
    export namespace SessionType {
        export const $gtype: GObject.GType<SessionType>;
    }

    enum SessionType {
        /**
         * CD AUDIO
         */
        CDDA,
        /**
         * CD-ROM
         */
        CDROM,
        /**
         * CD-I
         */
        CDI,
        /**
         * CD-ROM XA
         */
        CDROM_XA,
    }
    /**
     * Subchannel type for interleaving/deinterleaving.
     */

    /**
     * Subchannel type for interleaving/deinterleaving.
     */
    export namespace SubChannel {
        export const $gtype: GObject.GType<SubChannel>;
    }

    enum SubChannel {
        /**
         * W subchannel data
         */
        W,
        /**
         * V subchannel data
         */
        V,
        /**
         * U subchannel data
         */
        U,
        /**
         * T subchannel data
         */
        T,
        /**
         * S subchannel data
         */
        S,
        /**
         * R subchannel data
         */
        R,
        /**
         * Q subchannel data
         */
        Q,
        /**
         * P subchannel data
         */
        P,
    }
    /**
     * Subchannel file data formats.
     */

    /**
     * Subchannel file data formats.
     */
    export namespace SubchannelDataFormat {
        export const $gtype: GObject.GType<SubchannelDataFormat>;
    }

    enum SubchannelDataFormat {
        /**
         * internal subchannel (i.e. included in track file)
         */
        INTERNAL,
        /**
         * external subchannel (i.e. provided by separate file)
         */
        EXTERNAL,
        /**
         * P-W subchannel, 96 bytes, interleaved
         */
        PW96_INTERLEAVED,
        /**
         * P-W subchannel, 96 bytes, linear
         */
        PW96_LINEAR,
        /**
         * R-W subchannel, 96 bytes, cooked
         */
        RW96,
        /**
         * Q subchannel, 16 bytes
         */
        Q16,
    }
    /**
     * Track constants.
     */

    /**
     * Track constants.
     */
    export namespace TrackConstant {
        export const $gtype: GObject.GType<TrackConstant>;
    }

    enum TrackConstant {
        /**
         * Lead-in track
         */
        LEADIN,
        /**
         * Lead-out track
         */
        LEADOUT,
    }
    /**
     * Track flags.
     */

    /**
     * Track flags.
     */
    export namespace TrackFlag {
        export const $gtype: GObject.GType<TrackFlag>;
    }

    enum TrackFlag {
        /**
         * four channel audio
         */
        FOURCHANNEL,
        /**
         * copy permitted
         */
        COPYPERMITTED,
        /**
         * pre-emphasis
         */
        PREEMPHASIS,
    }
    /**
     * Length of ISRC string.
     */
    const ISRC_SIZE: number;
    /**
     * Length of MCN string.
     */
    const MCN_SIZE: number;
    /**
     * <para>
     * The major component of semantic version of the libMirage library. Like
     * #mirage_soversion_major, but from the headers used at application compile time,
     * rather than from the library linked against at application run time.
     * </para>
     */
    const SOVERSION_MAJOR: number;
    /**
     * <para>
     * The minor component of semantic version of the libMirage library. Like
     * #mirage_soversion_minor, but from the headers used at application compile time,
     * rather than from the library linked against at application run time.
     * </para>
     */
    const SOVERSION_MINOR: number;
    /**
     * <para>
     * The patch component of semantic version of the libMirage library. Like
     * #mirage_soversion_patch, but from the headers used at application compile time,
     * rather than from the library linked against at application run time.
     * </para>
     */
    const SOVERSION_PATCH: number;
    /**
     * <para>
     * The long version string of the libMirage library. Like #mirage_version_long,
     * but from the headers used at application compile time, rather than from the
     * library linked against at application run time.
     * </para>
     */
    const VERSION_LONG: string;
    /**
     * <para>
     * The major version number of the libMirage library. Like #mirage_version_major,
     * but from the headers used at application compile time, rather than from the
     * library linked against at application run time.
     * </para>
     */
    const VERSION_MAJOR: number;
    /**
     * <para>
     * The micro version number of the libMirage library. Like #mirage_version_micro,
     * but from the headers used at application compile time, rather than from the
     * library linked against at application run time.
     * </para>
     */
    const VERSION_MICRO: number;
    /**
     * <para>
     * The minor version number of the libMirage library. Like #mirage_version_minor,
     * but from the headers used at application compile time, rather than from the
     * library linked against at application run time.
     * </para>
     */
    const VERSION_MINOR: number;
    /**
     * <para>
     * The short version string of the libMirage library. Like #mirage_version_long,
     * but from the headers used at application compile time, rather than from the
     * library linked against at application run time.
     * </para>
     */
    const VERSION_SHORT: string;
    /**
     * Retrieves block information for CD-TEXT block specified by `block`. `block`
     * must be a valid block number (0-7). Language code assigned to the block is
     * stored in `code,` code of character set used within block is stored in
     * `charset` and block's copyright flag is stored in `copyright`.
     * @param self a #MirageCdTextCoder
     * @param block block number
     * @returns %TRUE on success, %FALSE on failure
     */
    function cdtext_decoder_get_block_info(self: CdTextCoder, block: number): [boolean, number, number, number];
    /**
     * Retrieves data for CD-TEXT block specified by `block`. `block` must be a valid
     * block number (0-7). It calls `callback_func` for every data pack that has been
     * encoded in the block.
     *
     * If `callback_func` returns %FALSE, the function immediately returns %FALSE.
     * @param self a #MirageCdTextCoder
     * @param block block number
     * @param callback_func callback function
     * @returns %TRUE on success, %FALSE on failure
     */
    function cdtext_decoder_get_data(self: CdTextCoder, block: number, callback_func: CdTextDataCallback): boolean;
    /**
     * Initializes CD-TEXT decoder. `buffer` is the buffer containing encoded CD-TEXT
     * data and `buflen` is length of data in the buffer.
     *
     * This function decodes CD-TEXT data and stores it in decoder's internal representation.
     * Information about decoded CD-TEXT blocks and their data can be obtained via
     * subsequent calls to mirage_cdtext_decoder_get_block_info() and
     * mirage_cdtext_decoder_get_data().
     * @param self a #MirageCdTextCoder
     * @param buffer buffer containing encoded data
     */
    function cdtext_decoder_init(self: CdTextCoder, buffer: Uint8Array | string): void;
    /**
     * Adds data to the encoder. `code` is language code of the block the data
     * should be added to. `type` denotes pack type and should be one of #MirageLanguagePackType.
     * `track` is track number the data belongs to, or 0 if data is global (belongs to disc/session).
     * `data` is buffer containing data to be added, and `data_len` is length of data in the buffer.
     *
     * This function does not perform any encoding yet; it merely adds the data into
     * encoder's internal representation of CD-TEXT block.
     *
     * <note>
     * Block needs to have its information set with mirage_cdtext_encoder_set_block_info()
     * before data can be added to it.
     * </note>
     * @param self a #MirageCdTextCoder
     * @param code language code
     * @param type data type
     * @param track track number
     * @param data data
     */
    function cdtext_encoder_add_data(
        self: CdTextCoder,
        code: number,
        type: number,
        track: number,
        data: Uint8Array | string,
    ): void;
    /**
     * Encodes the CD-TEXT data. Pointer to buffer containing the encoded data is
     * stored in `buffer,` and length of data in buffer is stored in `buflen`.
     *
     * Note that `buffer` is the same as the argument passed to mirage_cdtext_encoder_init().
     * @param self a #MirageCdTextCoder
     */
    function cdtext_encoder_encode(self: CdTextCoder): Uint8Array;
    /**
     * Initializes CD-TEXT encoder.
     * @param self a #MirageCdTextCoder
     * @param buffer buffer into which data will be encoded
     */
    function cdtext_encoder_init(self: CdTextCoder, buffer: Uint8Array | string): void;
    /**
     * Sets block information for CD-TEXT block specified by `block`. `block` must be
     * a valid block number (0-7). `code` is the language code that is to be assigned
     * to the block (e.g. 9 for English), `charset` denotes character set that is used within
     * the block, and `copyright` is the copyright flag for the block.
     * @param self a #MirageCdTextCoder
     * @param block block number
     * @param code language code
     * @param charset character set
     * @param copyright copyright flag
     * @returns %TRUE on success, %FALSE on failure
     */
    function cdtext_encoder_set_block_info(
        self: CdTextCoder,
        block: number,
        code: number,
        charset: number,
        copyright: number,
    ): boolean;
    /**
     * Attempts to create an instance of image writer whose ID is `writer_id`.
     * @param writer_id ID of writer to create
     * @returns newly-created writer object on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
     */
    function create_writer(writer_id: string): Writer;
    /**
     * Iterates over list of supported filter streams, calling `func` for each filter stream.
     *
     * If `func` returns %FALSE, the function immediately returns %FALSE.
     * @param func callback function
     * @returns %TRUE on success, %FALSE on failure
     */
    function enumerate_filter_streams(func: EnumFilterStreamInfoCallback): boolean;
    /**
     * Iterates over list of supported parsers, calling `func` for each parser.
     *
     * If `func` returns %FALSE, the function immediately returns %FALSE.
     * @param func callback function
     * @returns %TRUE on success, %FALSE on failure
     */
    function enumerate_parsers(func: EnumParserInfoCallback): boolean;
    /**
     * Iterates over list of supported writers, calling `func` for each writers.
     *
     * If `func` returns %FALSE, the function immediately returns %FALSE.
     * @param func callback function
     * @returns %TRUE on success, %FALSE on failure
     */
    function enumerate_writers(func: EnumWriterInfoCallback): boolean;
    /**
     * Registers an error quark for libMirage if necessary.
     * @returns The error quark used for libMirage errors.
     */
    function error_quark(): GLib.Quark;
    /**
     * Retrieves information structures for supported filter streams.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_filter_streams_info(): [boolean, FilterStreamInfo[]];
    /**
     * Retrieves #GType values for supported filter streams.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_filter_streams_type(): [boolean, GObject.GType[]];
    /**
     * Retrieves information structures for supported parsers.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_parsers_info(): [boolean, ParserInfo[]];
    /**
     * Retrieves #GType values for supported parsers.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_parsers_type(): [boolean, GObject.GType[]];
    /**
     * Retrieves the pointer to array of supported debug masks and stores it in `masks`.
     * The array consists of one or more structures of type #MirageDebugMaskInfo. The
     * number of elements in the array is stored in `num_masks`. The array belongs to
     * libMirage and should not be altered or freed.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_supported_debug_masks(): [boolean, DebugMaskInfo[]];
    /**
     * Retrieves information structures for supported parsers.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_writers_info(): [boolean, WriterInfo[]];
    /**
     * Retrieves #GType values for supported writers.
     * @returns %TRUE on success, %FALSE on failure
     */
    function get_writers_type(): [boolean, GObject.GType[]];
    /**
     * Converts ASCII character `c` into ISRC character.
     * @param c ASCII character
     * @returns ISRC character
     */
    function helper_ascii2isrc(c: number): number;
    /**
     * Converts bcd-encoded integer into hex-encoded integer.
     * @param bcd bcd-encoded integer
     * @returns hex-encoded integer
     */
    function helper_bcd2hex(bcd: number): number;
    /**
     * Calculates the CRC-16 checksum of the data stored in `data`.
     * @param data buffer containing data
     * @param crctab pointer to CRC polynomial table
     * @param reflected whether to use the reflected algorithm
     * @param invert whether the result should be inverted
     * @returns CRC-16 checksum of data
     */
    function helper_calculate_crc16(
        data: Uint8Array | string,
        crctab: number[],
        reflected: boolean,
        invert: boolean,
    ): number;
    /**
     * Calculates the CRC-32 checksum of the data stored in `data`. This is
     * fast slice-by-8 implementation that processes 8 bytes at a time, and
     * requires `crctab` to be allocating using mirage_helper_init_crc32_lut()
     * with slice parameter set to 8.
     * @param data buffer containing data
     * @param crctab pointer to CRC polynomial table
     * @param reflected whether to use the reflected algorithm
     * @param invert whether the initial value and result should be inverted
     * @returns CRC-32 checksum of data
     */
    function helper_calculate_crc32_fast(
        data: Uint8Array | string,
        crctab: number[],
        reflected: boolean,
        invert: boolean,
    ): number;
    /**
     * Calculates the CRC-32 checksum of the data stored in `data`. This is
     * standard inplementation that processes 1 byte at a time, and requires
     * `crctab` to be allocated using mirage_helper_init_crc32_lut() with slice
     * parameter set to 1.
     * @param data buffer containing data
     * @param crctab pointer to CRC polynomial table
     * @param reflected whether to use the reflected algorithm
     * @param invert whether the initial value and result should be inverted
     * @returns CRC-32 checksum of data
     */
    function helper_calculate_crc32_standard(
        data: Uint8Array | string,
        crctab: number[],
        reflected: boolean,
        invert: boolean,
    ): number;
    /**
     * Determines sector type from its data, based on first 16 bytes, which
     * correspond to sync pattern and header.
     *
     * This function is intened to be used in image parsers, for determining
     * track mode in cases when full (2352-byte) sector data is available.
     * @param buf buffer containing at least first 16 bytes of sector's data
     * @returns sector type (one of %MirageSectorType)
     */
    function helper_determine_sector_type(buf: number): SectorType;
    /**
     * Tries to decode BOM provided in `buffer,` and based on the result
     * returns the following encodings: UTF-32BE, UTF32-LE, UTF-16LE, UTF-16BE
     * or UTF-8 (if BOM is not valid).
     * @param buffer a 4-byte buffer containing BOM
     * @returns the name of encoding, or %NULL if UTF-8 is assumed. The string is statically stored and should not be modified.
     */
    function helper_encoding_from_bom(buffer: Uint8Array | string): string;
    /**
     * Attempts to find a file with filename `filename` and path `path`. `filename` can
     * be file's basename or an absolute path. `path` can be either directory path (in
     * this case, it must end with '/') or a filename (i.e. of file descriptor).
     *
     * If `filename` is an absolute path, its existence is first checked. If it
     * does not exist, search (see below) is performed in `filename'`s dirname. If
     * still no match is found and `path` is not %NULL, `path'`s dirname is combined
     * with `filename'`s basename, and the combination's existence is checked. If
     * that fails as well, search (see below) is performed in `path'`s dirname.
     * Searching in the directory is performed as follows. Directory is opened
     * and its content is case-insensitively compared to `filename'`s basename.
     * All filenames whose beginning match `filename` are considered, and the
     * shortest one is returned. This way, all possible case variations
     * (i.e. file.iso, FILE.ISO, FiLe.IsO, etc.) are taken into account.
     * This function can return a filename with additional suffices, but only if
     * a file without those extra suffices does not exist. E.g., if search is
     * done for 'data.img', and only 'data.img.gz' exists, it will be returned.
     * However, if both 'data.img' and 'data.img.gz' exist, the former will be
     * returned.
     * The returned string should be freed when no longer needed.
     * @param filename declared filename
     * @param path path where to look for file (can be a filename), or %NULL
     * @returns a newly allocated string containing the fullpath of file, or %NULL.
     */
    function helper_find_data_file(filename: string, path?: string | null): string;
    /**
     * Dictionary-version of mirage_helper_format_string().
     *
     * `dictionary` is a #GHashTable where keys are replacement token strings
     * and each value is a #GVariant containing corresponding token replacement
     * value.
     * @param format format string
     * @param dictionary a #GHashTable containing replacement token/value pairs
     * @returns string with all replacement tokens either replaced or removed. The string should be freed using g_free() when no longer needed.
     */
    function helper_format_stringd(
        format: string,
        dictionary: { [key: string]: any } | GLib.HashTable<any, any>,
    ): string;
    /**
     * Retrieves suffix from `filename`.
     * @param filename filename
     * @returns pointer to character in @filename at which the suffix starts.
     */
    function helper_get_suffix(filename: string): string;
    /**
     * Checks whether file name `filename` ends with suffix `suffix`.
     * @param filename filename
     * @param suffix suffix
     * @returns %TRUE if @filename contains suffix @suffix, %FALSE if not
     */
    function helper_has_suffix(filename: string, suffix: string): boolean;
    /**
     * Converts hex-encoded integer into bcd-encoded integer.
     * @param hex hex-encoded integer
     * @returns bcd-encoded integer
     */
    function helper_hex2bcd(hex: number): number;
    /**
     * Calculates a look-up table for CRC16 based on the generator polynomial.
     * @param genpoly generator polynomial
     * @returns Pointer to the CRC16 look-up table or NULL on failure.
     */
    function helper_init_crc16_lut(genpoly: number): number;
    /**
     * Calculates a look-up table for CRC32 based on the generator polynomial.
     * The size of the lookup table depends on `slices`. The standard algorithm
     * processes 1 byte at a time and has a look-up table size of 1KiB, whereas
     * The slice-by-4 and slice-by-8 algorithms use 4 and 8 KiB look-up tables that
     * are derived from the initial look-up table.
     * @param genpoly generator polynomial
     * @param slices number of bytes to process at once
     * @returns Pointer to the CRC32 look-up table or NULL on failure.
     */
    function helper_init_crc32_lut(genpoly: number, slices: number): number;
    /**
     * Calculates a look-up table for sector data scrambler from ECMA-130,
     * Annex B. The look-up table consists of 2340 entries, each being a
     * scramble byte for corresponding byte in sector data.
     * @returns Pointer to the generated scrambler look-up table or NULL on failure.
     */
    function helper_init_ecma_130b_scrambler_lut(): number;
    /**
     * Converts ISRC character `c` into ASCII character.
     * @param c ISRC character
     * @returns ACSII character
     */
    function helper_isrc2ascii(c: number): number;
    /**
     * Converts LBA sector address stored in `lba` into MSF address, storing each field
     * into `m,` `s` and `f,` respectively.
     *
     * If `diff` is %TRUE, 150 frames difference is accounted for; this should be
     * used when converting absolute addresses. When converting relative addresses
     * (or lengths), `diff` should be set to %FALSE.
     * @param lba LBA address
     * @param diff account for the difference
     */
    function helper_lba2msf(lba: number, diff: boolean): [number, number, number];
    /**
     * Converts LBA sector address stored in `lba` into MSF address.
     *
     * If `diff` is %TRUE, 150 frames difference is accounted for; this should be
     * used when converting absolute addresses. When converting relative addresses
     * (or lengths), `diff` should be set to %FALSE.
     * @param lba LBA address
     * @param diff account for the difference
     * @returns a newly-allocated string containing MSF address; it should be freed with g_free() when no longer needed.
     */
    function helper_lba2msf_str(lba: number, diff: boolean): string;
    /**
     * Converts MSF sector address stored in `m,` `s` and `f` into LBA address.
     *
     * If `diff` is %TRUE, 150 frames difference is accounted for; this should be
     * used when converting absolute addresses. When converting relative addresses
     * (or lengths), `diff` should be set to %FALSE.
     * @param m minutes
     * @param s seconds
     * @param f frames
     * @param diff difference
     * @returns integer representing LBA address
     */
    function helper_msf2lba(m: number, s: number, f: number, diff: boolean): number;
    /**
     * Converts MSF sector address stored in `msf` string into LBA address.
     *
     * If `diff` is %TRUE, 150 frames difference is accounted for; this should be
     * used when converting absolute addresses. When converting relative addresses
     * (or lengths), `diff` should be set to %FALSE.
     * @param msf MSF string
     * @param diff difference
     * @returns integer representing LBA address or -1 on failure.
     */
    function helper_msf2lba_str(msf: string, diff: boolean): number;
    /**
     * Calculates ECC (error correction code) for data in `src` and writes the result
     * into `dest`. The code assumes 2352 byte sectors. It can calculate both P and Q
     * layer of ECC data, depending on `major_count,` `minor_count,` `major_mult` and
     * minor_inc.
     *
     * To calculate ECC (first P, then Q layer) for different types of sectors and store it into sector data, use:
     * <itemizedlist>
     * <listitem>
     * Mode 1 sector:
     * <programlisting>
     * mirage_helper_sector_edc_ecc_compute_ecc_block(sector_buffer+0xC, 86, 24, 2, 86, sector_buffer+0x81C);
     * mirage_helper_sector_edc_ecc_compute_ecc_block(sector_buffer+0xC, 52, 43, 86, 88, sector_buffer+0x8C8);
     * </programlisting>
     * </listitem>
     * <listitem>
     * Mode 2 Form 1 sector:
     * <programlisting>
     * mirage_helper_sector_edc_ecc_compute_ecc_block(sector_buffer+0xC, 86, 24, 2, 86, sector_buffer+0x81C); \n
     * mirage_helper_sector_edc_ecc_compute_ecc_block(sector_buffer+0xC, 52, 43, 86, 88, sector_buffer+0x8C8);
     * </programlisting>
     * </listitem>
     * </itemizedlist>
     * (This is assuming all other sector data, including EDC, is already stored in sector_buffer and that sector_buffer is 2532 bytes long)
     * @param src data to calculate ECC data for
     * @param major_count major count
     * @param minor_count minor count
     * @param major_mult major multiplicator
     * @param minor_inc minor increment
     */
    function helper_sector_edc_ecc_compute_ecc_block(
        src: number,
        major_count: number,
        minor_count: number,
        major_mult: number,
        minor_inc: number,
    ): number;
    /**
     * Calculates EDC (error detection code) for data in `src` of length `size` and
     * writes the result into `dest`.
     *
     * To calculate EDC for different types of sectors and store it into sector data, use:
     * <itemizedlist>
     * <listitem>
     * Mode 1 sector:
     * <programlisting>
     * mirage_helper_sector_edc_ecc_compute_edc_block(sector_buffer+0x00, 0x810, sector_buffer+0x810);
     * </programlisting>
     * </listitem>
     * <listitem>
     * Mode 2 Form 1 sector:
     * <programlisting>
     * mirage_helper_sector_edc_ecc_compute_edc_block(sector_buffer+0x10, 0x808, sector_buffer+0x818);
     * </programlisting>
     * </listitem>
     * <listitem>
     * Mode 2 Form 2 sector:
     * <programlisting>
     * mirage_helper_sector_edc_ecc_compute_edc_block(sector_buffer+0x10, 0x91C, sector_buffer+0x92C);
     * </programlisting>
     * </listitem>
     * </itemizedlist>
     * (This is assuming all other sector data is already stored in sector_buffer and that sector_buffer is 2532 bytes long)
     * @param src data to calculate EDC data for
     */
    function helper_sector_edc_ecc_compute_edc_block(src: Uint8Array | string): Uint8Array;
    /**
     * Replacement function for g_strcasecmp/strcasecmp, which can properly handle UTF-8.
     * Glib docs state this is only an approximation, albeit it should be a fairly good one.
     *
     * It compares the two strings `str1` and `str2`, ignoring the case of the characters.
     * It returns an integer less than, equal to, or greater than zero if `str1` is found,
     * respectively, to be less than, to match, or be greater than `str2`.
     * @param str1 first string
     * @param str2 second string
     * @returns an integer less than, equal to, or greater than zero  if  @str1 is  found, respectively, to  be less than, to match, or be greater than @str2.
     */
    function helper_strcasecmp(str1: string, str2: string): number;
    /**
     * Replacement function for g_strncasecmp/strncasecmp, which can properly handle UTF-8.
     * Glib docs state this is only an approximation, albeit it should be a fairly good one.
     *
     * It compares first `len` characters of string `str1` and `str2`, ignoring the case of
     * the characters. It returns an integer less than, equal to, or greater than zero if
     * first `len` characters of `str1` is found, respectively, to be less than, to match,
     * or be greater than first `len` characters of `str2`.
     * @param str1 first string
     * @param str2 second string
     * @param len length of string to compare
     * @returns an integer less than, equal to, or greater than zero  if  first @len characters of @str1 is found, respectively, to  be less than, to match, or be greater than first @len characters of @str2.
     */
    function helper_strncasecmp(str1: string, str2: string, len: number): number;
    /**
     * Deinterleaves subchannel data of type `subchan` from subchannel data stored in
     * `channel9`6 and writes the resulting subhcannel data into `subchannel1`2.
     * @param subchan subchannel type
     * @param channel96 buffer containing subchannel data to deinterleave (96 bytes)
     */
    function helper_subchannel_deinterleave(subchan: number, channel96: Uint8Array | string): Uint8Array;
    /**
     * Interleaves subchannel data of type `subchan` stored in `channel1`2 into
     * subchannel data stored in `subchannel9`6.
     * @param subchan subchannel type
     * @param channel12 buffer containing subchannel data to interleave (12 bytes)
     */
    function helper_subchannel_interleave(subchan: number, channel12: Uint8Array | string): Uint8Array;
    /**
     * Calculates the CRC-16 checksum of the Q subchannel data stored in `data`.
     * @param data buffer containing Q subchannel data (10 bytes)
     * @returns CRC-16 checksum of Q subchannel data
     */
    function helper_subchannel_q_calculate_crc(data: Uint8Array | string): number;
    /**
     * Decodes ISRC stored in `buf` into string `isrc`.
     * @param buf buffer containing encoded ISRC (8 bytes)
     */
    function helper_subchannel_q_decode_isrc(buf: Uint8Array | string): string[];
    /**
     * Decodes MCN stored in `buf` into string `mcn`.
     * @param buf buffer containing encoded MCN (7 bytes)
     */
    function helper_subchannel_q_decode_mcn(buf: Uint8Array | string): string[];
    /**
     * Encodes ISRC string `isrc` into buffer `buf`.
     * @param isrc ISRC string (12 bytes)
     */
    function helper_subchannel_q_encode_isrc(isrc: string[]): Uint8Array;
    /**
     * Encodes MCN string `mcn` into buffer `buf`.
     * @param mcn MCN string (13 bytes)
     */
    function helper_subchannel_q_encode_mcn(mcn: string[]): Uint8Array;
    /**
     * Performs a limited validation of an ISRC string.
     * @param isrc An ASCII encoded ISRC string.
     * @returns TRUE or FALSE
     */
    function helper_validate_isrc(isrc: string[]): boolean;
    /**
     * Initializes libMirage library. It should be called before any other of
     * libMirage functions.
     * @returns %TRUE on success, %FALSE on failure
     */
    function initialize(): boolean;
    /**
     * Shuts down libMirage library. It should be called when libMirage is no longer
     * needed.
     * @returns %TRUE on success, %FALSE on failure
     */
    function shutdown(): boolean;
    interface CdTextDataCallback {
        (code: number, type: number, track: number, data: Uint8Array | string): boolean;
    }
    interface EnumFilterStreamInfoCallback {
        (info: FilterStreamInfo): boolean;
    }
    interface EnumFragmentCallback {
        (fragment: Fragment): boolean;
    }
    interface EnumIndexCallback {
        (index: Index): boolean;
    }
    interface EnumLanguageCallback {
        (language: Language): boolean;
    }
    interface EnumParserInfoCallback {
        (info: ParserInfo): boolean;
    }
    interface EnumSessionCallback {
        (session: Session): boolean;
    }
    interface EnumTrackCallback {
        (track: Track): boolean;
    }
    interface EnumWriterInfoCallback {
        (info: WriterInfo): boolean;
    }
    interface PasswordFunction {
        (user_data?: any | null): string;
    }
    namespace CdTextCoder {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageCdTextCoder</structname>
     * structure are private to the #MirageCdTextCoder implementation and
     * should never be accessed directly.
     */
    class CdTextCoder extends Object implements Contextual {
        static $gtype: GObject.GType<CdTextCoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CdTextCoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CdTextCoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CdTextCoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CdTextCoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CdTextCoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CdTextCoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CdTextCoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CdTextCoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageContext</structname>
     * structure are private to the #MirageContext implementation and
     * should never be accessed directly.
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Clears all the options from the context.
         */
        clear_options(): void;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and optionally creates a chain
         * of filter streams on top of it.
         *
         * The chain of filters is described by `filter-chain,` which is a
         * NULL-terminated array of strings corresponding to type names of
         * filters, with the last filter being the one on the top. Filters are
         * passed by their name types because their actual type values are
         * determined when the plugins are loaded. If invalid filter is specified
         * in the chain, this function will fail. It is the caller's responsibility
         * to construct a valid filter chain.
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Retrieves debug context's domain name.
         * @returns pointer to buffer containing the domain name, or %NULL. The buffer belongs to the object and should not be modified.
         */
        get_debug_domain(): string;
        /**
         * Retrieves debug context's debug mask.
         * @returns debug context's debug mask
         */
        get_debug_mask(): number;
        /**
         * Retrieves debug context's name.
         * @returns pointer to buffer containing the name, or %NULL. The buffer belongs to the object and should not be modified.
         */
        get_debug_name(): string;
        /**
         * Retrieves option named `name` from the context.
         * @param name option name
         * @returns pointer to a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Creates a #MirageDisc object representing image stored in `filenames`. `filenames`
         * is a NULL-terminated list of filenames containing image data. The function tries
         * to find a parser that can handle give filename(s) and uses it to load the data
         * into disc object.
         *
         * If multiple filenames are provided and parser supports only single-file images,
         * only the first filename is used.
         * @param filenames filename(s)
         * @returns a #MirageDisc object on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        load_image(filenames: string[]): Disc;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets debug context's domain name to `domain`.
         * @param domain domain name
         */
        set_debug_domain(domain: string): void;
        /**
         * Sets debug context's debug mask.
         * @param debug_mask debug mask
         */
        set_debug_mask(debug_mask: number): void;
        /**
         * Sets debug context's name to `name`.
         * @param name name
         */
        set_debug_name(name: string): void;
        /**
         * Sets an option to the context. If option with the specified name already
         * exists, it is replaced.
         * @param name option name
         * @param value option value
         */
        set_option(name: string, value: GLib.Variant): void;
        /**
         * Sets the password function to context. The function is used by parsers
         * that support encrypted images to obtain password for unlocking such images.
         *
         * Both `func` and `user_data` can be %NULL; in that case the appropriate setting
         * will be reset.
         * @param func a password function pointer
         * @param destroy destroy notify for @user_data, or %NULL
         */
        set_password_function(func?: PasswordFunction | null, destroy?: GLib.DestroyNotify | null): void;
    }

    namespace Disc {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'layout-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageDisc</structname>
     * structure are private to the #MirageDisc implementation and
     * should never be accessed directly.
     */
    class Disc extends Object implements Contextual {
        static $gtype: GObject.GType<Disc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Disc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Disc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Disc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Disc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Disc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Disc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Disc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Disc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds session to disc layout.
         *
         * `index` is the index at which session is added. Negative index denotes
         * index going backwards (i.e. -1 adds session at the end, -2 adds session
         * second-to-last, etc.). If index, either negative or positive, is too big,
         * session is added at the beginning or at the end of the layout, respectively.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index at which session should be added
         * @param session a #MirageSession to be added
         */
        add_session_by_index(index: number, session: Session): void;
        /**
         * Adds session to disc layout.
         *
         * `number` is session number that should be assigned to added session. It determines
         * session's position in the layout. If session with that number already exists in
         * the layout, the function fails.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number session number for the added session
         * @param session a #MirageSession to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_session_by_number(number: number, session: Session): boolean;
        /**
         * Adds track to disc layout.
         *
         * `index` is the index at which track is added. The function attempts to find
         * appropriate session by iterating over sessions list and verifying index ranges,
         * then adds the track using mirage_session_add_track_by_index(). Negative
         * `index` denotes index going backwards (i.e. -1 adds track at the end of last
         * session, etc.). If `index,` either negative or positive, is too big, track is
         * respectively added  at the beginning of the first or at the end of the last
         * session in the layout.
         *
         * If disc layout is empty (i.e. contains no sessions), then session is created.
         *
         * The rest of behavior is same as of mirage_session_add_track_by_index().
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index at which track should be added
         * @param track a #MirageTrack to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_track_by_index(index: number, track: Track): boolean;
        /**
         * Adds track to disc layout.
         *
         * `number` is track number that should be assigned to added track. It determines
         * track's position in the layout. The function attempts to find appropriate session
         * using mirage_disc_get_session_by_track(), then adds the track using
         * mirage_session_add_track_by_number().
         *
         * If disc layout is empty (i.e. contains no sessions), then session is created.
         * If `number` is greater than last track's number, the track is added at the end
         * of last session.
         *
         * The rest of behavior is same as of mirage_session_add_track_by_number().
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number track number for the added track
         * @param track a #MirageTrack to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_track_by_number(number: number, track: Track): boolean;
        /**
         * Iterates over sessions list, calling `func` for each session in the layout.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_sessions(func: EnumSessionCallback): boolean;
        /**
         * Retrieves disc structure of type `type` from layer `layer`. The pointer to buffer
         * containing the disc structure is stored in `data;` the buffer belongs to the
         * object and therefore should not be modified.
         *
         * <note>
         * Disc structures are valid only for DVD and BD discs; therefore, if disc type
         * is not set to %MIRAGE_MEDIUM_DVD or %MIRAGE_MEDIUM_BD prior to calling this
         * function, the function will fail.
         * </note>
         * @param layer disc layer
         * @param type disc structure type
         * @returns %TRUE on success, %FALSE on failure
         */
        get_disc_structure(layer: number, type: number): [boolean, Uint8Array | null];
        /**
         * Retrieves DPM data for disc. The pointer to buffer containing DPM data entries
         * is stored in `data;` the buffer belongs to object and therefore should not be
         * modified.
         */
        get_dpm_data(): [number, number, number[] | null];
        /**
         * Retrieves DPM data for sector at address `address`. Two pieces of data can be
         * retrieved; first one is sector angle, expressed in rotations (i.e. 0.25 would
         * mean 1/4 of rotation or 90˚ and 1.0 means one full rotation or 360˚), and the
         * other one is sector density at given address, expressed in degrees per sector).
         * @param address address of sector to retrieve DPM data for
         * @returns %TRUE on success, %FALSE on failure
         */
        get_dpm_data_for_sector(address: number): [boolean, number, number];
        /**
         * Retrieves image filename(s).
         * @returns pointer to %NULL-terminated array of filenames. The array belongs to the object and should not be modified.
         */
        get_filenames(): string[];
        /**
         * Retrieves medium type.
         * @returns medium type
         */
        get_medium_type(): MediumType;
        /**
         * Retrieves number of sessions in the disc layout.
         * @returns number of sessions
         */
        get_number_of_sessions(): number;
        /**
         * Retrieves number of tracks in the disc layout.
         * @returns number of tracks
         */
        get_number_of_tracks(): number;
        /**
         * Retrieves sector object representing sector at sector address `address`.
         *
         * This function attempts to retrieve appropriate track using
         * mirage_disc_get_track_by_address(),
         * then retrieves sector object using mirage_track_get_sector().
         * @param address sector address
         * @returns sector object on success, %NULL on failure
         */
        get_sector(address: number): Sector;
        /**
         * Retrieves session that comes after `session`.
         * @param session a session
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_after(session: Session): Session;
        /**
         * Retrieves session that comes before `session`.
         * @param session a session
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_before(session: Session): Session;
        /**
         * Retrieves session by address. `address` must be valid (disc-relative) sector
         * address that is part of the session to be retrieved (i.e. lying between session's
         * start and end sector).
         * @param address address belonging to session to be retrieved
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_by_address(address: number): Session;
        /**
         * Retrieves session by index. If `index` is negative, sessions from the end of
         * layout are retrieved (e.g. -1 is for last session, -2 for second-to-last
         * session, etc.). If `index` is out of range, regardless of the sign, the
         * function fails.
         * @param index index of session to be retrieved
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_by_index(index: number): Session;
        /**
         * Retrieves session by session number.
         * @param number number of session to be retrieved
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_by_number(number: number): Session;
        /**
         * Retrieves session by track number. `track` must be valid track number of track
         * that is part of the session.
         * @param track number of track belonging to session to be retrieved
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_session_by_track(track: number): Session;
        /**
         * Retrieves track by address. `address` must be valid (disc-relative) sector
         * address that is part of the track to be retrieved (i.e. lying between track's
         * start and end sector).
         *
         * The function attempts to find appropriate session using
         * mirage_disc_get_session_by_address(), then retrieves the track using
         * mirage_session_get_track_by_address().
         *
         * The rest of behavior is same as of mirage_session_get_track_by_address().
         * @param address address belonging to track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_address(address: number): Track;
        /**
         * Retrieves track by index. The function attempts to find appropriate session
         * by iterating over sessions list and verifying index ranges, then retrieves
         * the track using mirage_session_get_track_by_index(). If `index` is negative,
         * tracks from the end of layout are retrieved (e.g. -1 is for last track, -2
         * for second-to-last track, etc.). If `index` is out of range, regardless of
         * the sign, the function fails.
         *
         * The rest of behavior is same as of mirage_session_get_track_by_index().
         * @param index index of track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_index(index: number): Track;
        /**
         * Retrieves track by track number. The function attempts to find appropriate session
         * using mirage_disc_get_session_by_track(), then retrieves the track using
         * mirage_session_get_track_by_number().
         *
         * The rest of behavior is same as of mirage_session_get_track_by_number().
         * @param number track number of track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_number(number: number): Track;
        /**
         * Checks whether the disc contains the given address or not.
         * @param address address to be checked
         * @returns %TRUE if @address falls inside disc, %FALSE if it does not
         */
        layout_contains_address(address: number): boolean;
        /**
         * Retrieves session number of the first session in the disc layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns first session number
         */
        layout_get_first_session(): number;
        /**
         * Retrieves track number of the first track in the disc layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns first track number
         */
        layout_get_first_track(): number;
        /**
         * Retrieves length of the disc layout. The returned length is given in sectors.
         * @returns disc layout length
         */
        layout_get_length(): number;
        /**
         * Retrieves start sector of the disc layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns start sector
         */
        layout_get_start_sector(): number;
        /**
         * Sets first session number to `first_session`. This is a number that is
         * assigned to the first session in the disc layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param first_session first session number
         */
        layout_set_first_session(first_session: number): void;
        /**
         * Sets first track number to `first_track`. This is a number that is
         * assigned to the first track in the disc layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param first_track first track number
         */
        layout_set_first_track(first_track: number): void;
        /**
         * Sets start sector of the disc layout to `start_sector`. This is a sector at which
         * the first session (and consequently first track) in the disc layout will start.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param start_sector start sector
         */
        layout_set_start_sector(start_sector: number): void;
        /**
         * Writes the `sector` to disc.
         *
         * This function attempts to retrieve appropriate track using
         * mirage_disc_get_track_by_address(),
         * then writes sector object using mirage_track_put_sector(); therefore,
         * same restrictions regarding sector address apply as when putting sector
         * directly to track.
         * @param sector a #MirageSector representing sector to be written
         * @returns %TRUE on success, %FALSE on failure.
         */
        put_sector(sector: Sector): boolean;
        /**
         * Removes session from disc layout.
         *
         * `index` is the index of the session to be removed. This function calls
         * mirage_disc_get_session_by_index() so `index` behavior is determined by that
         * function.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index of session to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_session_by_index(index: number): boolean;
        /**
         * Removes session from disc layout.
         *
         * `number` is session number of the session to be removed.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number session number of session to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_session_by_number(number: number): boolean;
        /**
         * Removes session from disc layout.
         *
         * `session` is a #MirageSession object to be removed.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param session session object to be removed
         */
        remove_session_by_object(session: Session): void;
        /**
         * Removes track from disc layout.
         *
         * `index` is the index of the track to be removed. This function calls
         * mirage_disc_get_track_by_index() so `index` behavior is determined by that
         * function.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index of track to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_track_by_index(index: number): boolean;
        /**
         * Removes track from disc layout.
         *
         * `number` is track number of the track to be removed. This function calls
         * mirage_disc_get_track_by_number() so `number` behavior is determined by that
         * function.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number track number of track to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_track_by_number(number: number): boolean;
        /**
         * Sets disc structure of type `type` to layer `layer` to disc. `data` is buffer
         * containing disc structure data and `len` is data length.
         *
         * <note>
         * Disc structures are valid only for DVD and BD discs. This function
         * silently fails on invalid disc types.
         * </note>
         * @param layer disc layer
         * @param type disc structure type
         * @param data disc structure data to be set
         */
        set_disc_structure(layer: number, type: number, data: Uint8Array | string): void;
        /**
         * Sets the DPM data for disc. If `num_entries` is not positive, DPM data is reset.
         * `start` is the address at which DPM data begins, `resolution` is resolution of
         * DPM data and `num_entries` is the number of DPM entries in buffer pointed to by
         * `data`.
         * @param start DPM start sector
         * @param resolution DPM data resolution
         * @param data buffer containing DPM data
         */
        set_dpm_data(start: number, resolution: number, data: number[]): void;
        /**
         * Sets image filename. The functionality is similar to mirage_disc_set_filenames(),
         * except that only one filename is set. It is intended to be used in parsers which
         * support only single-file images.
         *
         * <note>
         * Intended for internal use only, in image parser implementations.
         * </note>
         * @param filename filename
         */
        set_filename(filename: string): void;
        /**
         * Sets image filename(s).
         *
         * <note>
         * Intended for internal use only, in image parser implementations.
         * </note>
         * @param filenames %NULL-terminated array of filenames
         */
        set_filenames(filenames: string[]): void;
        /**
         * Sets medium type. `medium_type` must be one of #MirageMediumType.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @param medium_type medium type
         */
        set_medium_type(medium_type: MediumType | null): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FileStream {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends Object.ConstructorProps, Contextual.ConstructorProps, Stream.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageFileStream</structname>
     * structure are private to the #MirageFileStream implementation and
     * should never be accessed directly.
     */
    class FileStream extends Object implements Contextual, Stream {
        static $gtype: GObject.GType<FileStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Opens the stream on the file pointed to by `filename`. If `writable`
         * is %FALSE, the stream is opened in read-only mode; if `writable` is
         * %TRUE, the stream is opened in read-write mode.
         * @param filename name of file on which the stream is to be opened
         * @param writable a boolean indicating whether stream should be opened for read/write access
         * @returns %TRUE on success, %FALSE on failure.
         */
        open(filename: string, writable: boolean): boolean;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Retrieves the name to file on which the stream is opened. If `self` is
         * a filter stream in the filter stream chain, the filename is obtained from
         * the stream at the bottom of the chain.
         * @returns pointer to a buffer containing the filename. The buffer belongs to the stream object and should not be modified.
         */
        get_filename(): string;
        /**
         * Constructs and returns a compatibility object inheriting a #GInputStream.
         * This is to allow regular GIO stream objects (for example, a
         * #GDataInputStream) to be chained on top of our filter stream chain.
         * @returns a #GInputStream. The reference should be released using g_object_unref() when no longer needed.
         */
        get_g_input_stream(): Gio.InputStream;
        /**
         * Queries the stream (chain) for write support. For the stream to be
         * writable, the stream object implementation itself must support write
         * operations, and any stream objects below it in the stream chain must
         * also be writable.
         * @returns %TRUE if the stream (chain) is writable, %FALSE if it is not.
         */
        is_writable(): boolean;
        /**
         * Attempts to move the file on top of which the stream (chain) is opened
         * to `new_filename`. If supported, native move operations are used,
         * otherwise a copy + delete fallback is used.
         * @param new_filename the new filename
         * @returns %TRUE on success, %FALSE on failure.
         */
        move_file(new_filename: string): boolean;
        /**
         * Attempts to read `count` bytes from stream into the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to read data into
         * @param count number of bytes to read from stream
         * @returns number of bytes read, or -1 on error, or 0 on end of file.
         */
        read(buffer: any | null, count: number): number;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         * @param offset offset to seek
         * @param type seek type
         * @returns %TRUE on success, %FALSE on failure.
         */
        seek(offset: number, type: GLib.SeekType | null): boolean;
        /**
         * Retrieves the current position within the stream.
         * @returns the offset from the beginning of the stream.
         */
        tell(): number;
        /**
         * Attempts to write `count` bytes to stream from the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to write data from
         * @param count number of bytes to write to stream
         * @returns number of bytes written, or -1 on error.
         */
        write(buffer: any | null, count: number): number;
        /**
         * Retrieves the name to file on which the stream is opened. If `self` is
         * a filter stream in the filter stream chain, the filename is obtained from
         * the stream at the bottom of the chain.
         */
        vfunc_get_filename(): string;
        /**
         * Queries the stream (chain) for write support. For the stream to be
         * writable, the stream object implementation itself must support write
         * operations, and any stream objects below it in the stream chain must
         * also be writable.
         */
        vfunc_is_writable(): boolean;
        /**
         * Attempts to move the file on top of which the stream (chain) is opened
         * to `new_filename`. If supported, native move operations are used,
         * otherwise a copy + delete fallback is used.
         * @param new_filename the new filename
         */
        vfunc_move_file(new_filename: string): boolean;
        /**
         * Attempts to read `count` bytes from stream into the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to read data into
         * @param count number of bytes to read from stream
         */
        vfunc_read(buffer: any | null, count: number): number;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         * @param offset offset to seek
         * @param type seek type
         */
        vfunc_seek(offset: number, type: GLib.SeekType): boolean;
        /**
         * Retrieves the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Attempts to write `count` bytes to stream from the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to write data from
         * @param count number of bytes to write to stream
         */
        vfunc_write(buffer: any | null, count: number): number;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FilterStream {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends Object.ConstructorProps, Contextual.ConstructorProps, Stream.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageFilterStream</structname>
     * structure are private to the #MirageFilterStream implementation and
     * should never be accessed directly.
     */
    abstract class FilterStream extends Object implements Contextual, Stream {
        static $gtype: GObject.GType<FilterStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FilterStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FilterStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Opens stream on top of provided underlying stream.
         * @param stream an underlying stream
         * @param writable a flag indicating whether the stream should be opened in read/write mode or not
         */
        vfunc_open(stream: Stream, writable: boolean): boolean;
        /**
         * reads data from stream
         * @param buffer
         * @param count
         */
        vfunc_read(buffer: any | null, count: number): number;
        /**
         * seeks to a location within stream
         * @param offset
         * @param type
         */
        vfunc_seek(offset: number, type: GLib.SeekType): boolean;
        /**
         * reads a chunk of requested data from stream (part of simplified interface)
         * @param buffer
         * @param count
         */
        vfunc_simplified_partial_read(buffer: any | null, count: number): number;
        /**
         * writes a chunk of requested data to stream (part of simplified interface)
         * @param buffer
         * @param count
         */
        vfunc_simplified_partial_write(buffer: any | null, count: number): number;
        /**
         * tells the current location within stream
         */
        vfunc_tell(): number;
        /**
         * wrties data to stream
         * @param buffer
         * @param count
         */
        vfunc_write(buffer: any | null, count: number): number;

        // Methods

        /**
         * Retrieves filter stream information.
         * @returns a pointer to filter stream information structure. The structure belongs to object and therefore should not be modified.
         */
        get_info(): FilterStreamInfo;
        /**
         * Retrieves filter stream's underlying stream.
         * @returns a pointer to filter stream's underlying stream. The reference belongs to filter stream and should not be released.
         */
        get_underlying_stream(): Stream;
        /**
         * Opens stream on top of provided underlying stream.
         * @param stream an underlying stream
         * @param writable a flag indicating whether the stream should be opened in read/write mode or not
         * @returns %TRUE on success, %FALSE on failure
         */
        open(stream: Stream, writable: boolean): boolean;
        /**
         * Retrieves position in the stream.
         *
         * This function is intented for use in filter stream implementations that
         * are based on the simplified interface. It should be used by the
         * implementation's simplified_partial_read function to determine position to
         * read from without having to worry about position management and update.
         * @returns position in the stream
         */
        simplified_get_position(): number;
        /**
         * Sets size of the stream.
         *
         * This function is intented for use in filter stream implementations that
         * are based on the simplified interface. It should be used by the
         * implementation to set the stream size during stream parsing; the set
         * stream size is then used by the read function that is implemented by
         * the simplified interface.
         * @param length length of the stream
         */
        simplified_set_stream_length(length: number): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Retrieves the name to file on which the stream is opened. If `self` is
         * a filter stream in the filter stream chain, the filename is obtained from
         * the stream at the bottom of the chain.
         * @returns pointer to a buffer containing the filename. The buffer belongs to the stream object and should not be modified.
         */
        get_filename(): string;
        /**
         * Constructs and returns a compatibility object inheriting a #GInputStream.
         * This is to allow regular GIO stream objects (for example, a
         * #GDataInputStream) to be chained on top of our filter stream chain.
         * @returns a #GInputStream. The reference should be released using g_object_unref() when no longer needed.
         */
        get_g_input_stream(): Gio.InputStream;
        /**
         * Queries the stream (chain) for write support. For the stream to be
         * writable, the stream object implementation itself must support write
         * operations, and any stream objects below it in the stream chain must
         * also be writable.
         * @returns %TRUE if the stream (chain) is writable, %FALSE if it is not.
         */
        is_writable(): boolean;
        /**
         * Attempts to move the file on top of which the stream (chain) is opened
         * to `new_filename`. If supported, native move operations are used,
         * otherwise a copy + delete fallback is used.
         * @param new_filename the new filename
         * @returns %TRUE on success, %FALSE on failure.
         */
        move_file(new_filename: string): boolean;
        /**
         * Attempts to read `count` bytes from stream into the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to read data into
         * @param count number of bytes to read from stream
         * @returns number of bytes read, or -1 on error, or 0 on end of file.
         */
        read(buffer: any | null, count: number): number;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         * @param offset offset to seek
         * @param type seek type
         * @returns %TRUE on success, %FALSE on failure.
         */
        seek(offset: number, type: GLib.SeekType | null): boolean;
        /**
         * Retrieves the current position within the stream.
         * @returns the offset from the beginning of the stream.
         */
        tell(): number;
        /**
         * Attempts to write `count` bytes to stream from the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to write data from
         * @param count number of bytes to write to stream
         * @returns number of bytes written, or -1 on error.
         */
        write(buffer: any | null, count: number): number;
        /**
         * Retrieves the name to file on which the stream is opened. If `self` is
         * a filter stream in the filter stream chain, the filename is obtained from
         * the stream at the bottom of the chain.
         */
        vfunc_get_filename(): string;
        /**
         * Queries the stream (chain) for write support. For the stream to be
         * writable, the stream object implementation itself must support write
         * operations, and any stream objects below it in the stream chain must
         * also be writable.
         */
        vfunc_is_writable(): boolean;
        /**
         * Attempts to move the file on top of which the stream (chain) is opened
         * to `new_filename`. If supported, native move operations are used,
         * otherwise a copy + delete fallback is used.
         * @param new_filename the new filename
         */
        vfunc_move_file(new_filename: string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Fragment {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'layout-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageFragment</structname>
     * structure are private to the #MirageFragment implementation and
     * should never be accessed directly.
     */
    class Fragment extends Object implements Contextual {
        static $gtype: GObject.GType<Fragment>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Fragment.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Fragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks whether the fragment contains the given address or not.
         * @param address address to be checked
         * @returns %TRUE if @address falls inside fragment, %FALSE if it does not
         */
        contains_address(address: number): boolean;
        /**
         * Retrieves fragment's start address. The `address` is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns start address
         */
        get_address(): number;
        /**
         * Retrieves fragment's length. The returned `length` is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns length
         */
        get_length(): number;
        /**
         * Checks if fragment is writable, i.e., whether it has main channel data
         * stream set and this stream is writable.
         * @returns %TRUE if fragment is writable, %FALSE if it is not.
         */
        is_writable(): boolean;
        /**
         * Retrieves filename of main channel data stream.
         * @returns pointer to main channel data file name string. The string belongs to object and should not be modified.
         */
        main_data_get_filename(): string;
        /**
         * Retrieves main data file format.
         * @returns main data file format
         */
        main_data_get_format(): number;
        /**
         * Retrieves main data file offset.
         * @returns main data file offset
         */
        main_data_get_offset(): number;
        /**
         * Retrieves main data file sector size.
         * @returns main data file sector size
         */
        main_data_get_size(): number;
        /**
         * Sets main data file format. `format` must be one of #MirageMainDataFormat.
         * @param format main data file format
         */
        main_data_set_format(format: number): void;
        /**
         * Sets main data file offset.
         * @param offset main data file offset
         */
        main_data_set_offset(offset: number): void;
        /**
         * Sets main data file sector size.
         * @param size main data file sector size
         */
        main_data_set_size(size: number): void;
        /**
         * Sets main channel data stream.
         * @param stream a #MirageStream on main channel data file
         */
        main_data_set_stream(stream: Stream): void;
        /**
         * Reads main channel data for sector at fragment-relative `address` (given
         * in sectors). The buffer for reading data into is allocated by function
         * and should be freed using g_free() when no longer needed. The pointer
         * to buffer is stored into `buffer` and the length of read data is stored into
         * `length`.
         * @param address address
         * @returns %TRUE on success, %FALSE on failure
         */
        read_main_data(address: number): [boolean, Uint8Array | null];
        /**
         * Writes subchannel data for sector at fragment-relative `address` (given
         * in sectors).
         * @param address address
         * @param buffer buffer with data to write, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        read_subchannel_data(address: number, buffer?: Uint8Array | null): boolean;
        /**
         * Sets fragment's start address. The `address` is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param address start address
         */
        set_address(address: number): void;
        /**
         * Sets fragment's length. The `length` is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param length length
         */
        set_length(length: number): void;
        /**
         * Retrieves filename of subchannel data input stream.
         * @returns pointer to subchannel data file name string. The string belongs to object and should not be modified.
         */
        subchannel_data_get_filename(): string;
        /**
         * Retrieves subchannel data file format.
         * @returns subchannel data file format
         */
        subchannel_data_get_format(): number;
        /**
         * Retrieves subchannel data file offset.
         * @returns subchannel data file offset
         */
        subchannel_data_get_offset(): number;
        /**
         * Retrieves subchannel data file sector size.
         * @returns subchannel data file sector size
         */
        subchannel_data_get_size(): number;
        /**
         * Sets subchannel data file format. `format` must be a combination of
         * #MirageSubchannelDataFormat.
         * @param format subchannel data file format
         */
        subchannel_data_set_format(format: number): void;
        /**
         * Sets subchannel data file offset.
         * @param offset subchannel data file offset
         */
        subchannel_data_set_offset(offset: number): void;
        /**
         * Sets subchannel data file sector size.
         * @param size subchannel data file sector size
         */
        subchannel_data_set_size(size: number): void;
        /**
         * Sets subchannel data stream.
         * @param stream a #MirageStream on subchannel data file
         */
        subchannel_data_set_stream(stream: Stream): void;
        /**
         * Uses the rest of data file. It automatically calculates and sets fragment's
         * length.
         * @returns %TRUE on success, %FALSE on failure
         */
        use_the_rest_of_file(): boolean;
        /**
         * Writes main channel data for sector at fragment-relative `address` (given
         * in sectors).
         * @param address address
         * @param buffer buffer with data to write, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        write_main_data(address: number, buffer?: Uint8Array | null): boolean;
        /**
         * Reads subchannel data for sector at fragment-relative `address` (given
         * in sectors). The buffer for reading data into is allocated by function
         * and should be freed using g_free() when no longer needed. The pointer
         * to buffer is stored into `buffer` and the length of read data is stored into
         * `length`.
         * @param address address
         * @param buffer buffer with read data, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        write_subchannel_data(address: number, buffer?: Uint8Array | null): boolean;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Index {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageIndex</structname>
     * structure are private to the #MirageIndex implementation and
     * should never be accessed directly.
     */
    class Index extends Object implements Contextual {
        static $gtype: GObject.GType<Index>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Index.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Index.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves index' start adddress. The `address` is given in sectors.
         * @returns address
         */
        get_address(): number;
        /**
         * Retrieves index' index number.
         * @returns index number
         */
        get_number(): number;
        /**
         * Sets index' start address. The `address` is given in sectors.
         * @param address address
         */
        set_address(address: number): void;
        /**
         * Sets index' index number.
         * @param number index number
         */
        set_number(number: number): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Language {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageLanguage</structname>
     * structure are private to the #MirageLanguage implementation and
     * should never be accessed directly.
     */
    class Language extends Object implements Contextual {
        static $gtype: GObject.GType<Language>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Language.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Language.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves language's language code.
         * @returns language code
         */
        get_code(): number;
        /**
         * Retrieves pack data of type `pack_type`. A pointer to buffer containing pack
         * data is stored in `pack` data; the buffer belongs to the object and therefore
         * should not be modified.
         * @param pack_type pack type
         * @returns %TRUE on success, %FALSE on failure
         */
        get_pack_data(pack_type: LanguagePackType | null): [boolean, Uint8Array | null];
        /**
         * Sets language's language code.
         * @param code language code
         */
        set_code(code: number): void;
        /**
         * Sets pack data of type `pack_type` to data in `pack_data`. `length` is length of
         * data in `pack_data`. `pack_type` must be one of #MirageLanguagePackType.
         * @param pack_type pack type
         * @param pack_data pack data
         * @returns %TRUE on success, %FALSE on failure
         */
        set_pack_data(pack_type: LanguagePackType | null, pack_data: Uint8Array | string): boolean;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'context-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageObject</structname>
     * structure are private to the #MirageObject implementation and
     * should never be accessed directly.
     */
    class Object extends GObject.Object implements Contextual {
        static $gtype: GObject.GType<Object>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns pointer to object's parent object.
         * @returns parent object, or %NULL.
         */
        get_parent(): Object;
        /**
         * Sets object's parent. If `parent` is %NULL, the object's parent is
         * reset.
         * @param parent parent
         */
        set_parent(parent?: Object | null): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Parser {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageParser</structname>
     * structure are private to the #MirageParser implementation and
     * should never be accessed directly.
     */
    abstract class Parser extends Object implements Contextual {
        static $gtype: GObject.GType<Parser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Loads the image stored in `streams`.
         * @param streams %NULL-terminated array of data streams
         */
        vfunc_load_image(streams: Stream[]): Disc;

        // Methods

        /**
         * A helper function, intended to be used in simpler parsers that don't get proper
         * pregap information from the image file.
         *
         * First, it sets disc layout start to -150. Then, it adds 150-sector pregap to
         * first track of each session found on the layout; for this, a NULL fragment is
         * used. If track already has a pregap, then the pregaps are stacked.
         *
         * Note that the function works only on discs which have medium type set to
         * CD-ROM. On other discs, it does nothing.
         * @param disc disc object
         */
        add_redbook_pregap(disc: Disc): void;
        /**
         * Constructs a filter chain for reading text files on top of provided
         * `stream`. First, if encoding is provided via parser parameters, or if
         * a multi-byte encoding is detected, a #GConverterInputStream with a
         * #GCharsetConverter is applied. Then on top of it, a #GDataInputStream
         * is created, which can be used to read text file line-by-line.
         * @param stream a #MirageStream
         * @returns a #GDataInputStream object on success, or %NULL on failure.
         */
        create_text_stream(stream: Stream): Gio.DataInputStream;
        /**
         * Retrieves parser information.
         * @returns a pointer to parser information structure.  The structure belongs to object and should not be modified.
         */
        get_info(): ParserInfo;
        /**
         * Attempts to guess medium type by looking at the length of the disc layout.
         * Currently, it supports identification of CD-ROM media, which are assumed to
         * have layout length of 90 minutes or less.
         *
         * Note that this function does not set the medium type to disc object; you still
         * need to do it via mirage_disc_set_medium_type(). It is meant to be used in
         * simple parsers whose image files don't provide medium type information.
         * @param disc disc object
         * @returns a value from #MirageMediumType, according to the guessed medium type.
         */
        guess_medium_type(disc: Disc): number;
        /**
         * Loads the image stored in `streams`.
         * @param streams %NULL-terminated array of data streams
         * @returns a #MirageDisc object representing image on success, %NULL on failure
         */
        load_image(streams: Stream[]): Disc;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps {
            filename: string;
        }
    }

    /**
     * All the fields in the <structname>MiragePlugin</structname>
     * structure are private to the #MiragePlugin implementation and
     * should never be accessed directly.
     */
    class Plugin extends GObject.TypeModule implements GObject.TypePlugin {
        static $gtype: GObject.GType<Plugin>;

        // Properties

        get filename(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): Plugin;

        // Signals

        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the #GType of an instantiatable type to which the interface  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
        // Conflicted with GObject.TypeModule.use
        use(...args: never[]): any;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Sector {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageSector</structname>
     * structure are private to the #MirageSector implementation and
     * should never be accessed directly.
     */
    class Sector extends Object implements Contextual {
        static $gtype: GObject.GType<Sector>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sector.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Sector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Sector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Extracts data from sector. Which parts of main channel data are extracted
         * depends on provided `main_data_length`.
         *
         * <note>
         * Intended for internal use.
         * </note>
         * @param main_data_length requested length of data in main data buffer
         * @param subchannel_data location to store pointer to subchannel data buffer, or %NULL
         * @param subchannel_data_length requested length of data in subchannel data buffer
         * @returns %TRUE on success, %FALSE on failure
         */
        extract_data(
            main_data_length: number,
            subchannel_data: number | null,
            subchannel_data_length: number,
        ): [boolean, number, SectorSubchannelFormat];
        /**
         * Feeds data to sector. If `type` is %MIRAGE_SECTOR_RAW or %MIRAGE_SECTOR_RAW_SCRAMBLED,
         * the real sector type is determined during feeding.
         *
         * <note>
         * Intended for internal use.
         * </note>
         * @param address absolute disc address the sector represents. Given in sectors.
         * @param type track type (one of #MirageSectorType)
         * @param main_data main data buffer
         * @param main_data_length length of data in main data buffer
         * @param subchannel_format subchannel data format
         * @param subchannel_data subchannel data buffer
         * @param subchannel_data_length length of data in subchannel data buffer
         * @param ignore_data_mask a mask of #MirageSectorValidData values, indicating which parts of main channel sector data, if any, should be ignored and regerated even though they are provided by the data feed
         * @returns %TRUE on success, %FALSE on failure
         */
        feed_data(
            address: number,
            type: SectorType | null,
            main_data: number,
            main_data_length: number,
            subchannel_format: SectorSubchannelFormat | null,
            subchannel_data: number | null,
            subchannel_data_length: number,
            ignore_data_mask: number,
        ): boolean;
        /**
         * Retrieves absolute disc address of the sector.
         * @returns sector address
         */
        get_address(): number;
        /**
         * Retrieves sector's user data. The pointer to appropriate location in
         * sector's data buffer is stored into `ret_buf;`  therefore, the buffer should not
         * be modified.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_data(): [boolean, Uint8Array | null];
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Retrieves sector's EDC/ECC data. The pointer to appropriate location in
         * sector's data buffer is stored into `ret_buf;`  therefore, the buffer should not
         * be modified.
         *
         * If EDC/ECC data is not provided by image file(s), it is generated.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_edc_ecc(): [boolean, Uint8Array | null];
        /**
         * Retrieves sector's header. The pointer to appropriate location in
         * sector's data buffer is stored into `ret_buf;` therefore, the buffer should not
         * be modified.
         *
         * If header is not provided by image file(s), it is generated.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_header(): [boolean, Uint8Array | null];
        /**
         * Retrieves sector type (track mode); one of #MirageSectorType.
         * @returns sector type (track mode)
         */
        get_sector_type(): SectorType;
        /**
         * Retrieves sector's subchannel. `format` must be one of #MirageSectorSubchannelFormat.
         * The pointer to appropriate location in sector's data buffer is stored into
         * `ret_buf;`  therefore, the buffer should not be modified.
         *
         * If subchannel is not provided by image file(s), it is generated.
         * @param format subchannel format
         * @returns %TRUE on success, %FALSE on failure
         */
        get_subchannel(format: SectorSubchannelFormat | null): [boolean, Uint8Array | null];
        /**
         * Retrieves sector's subheader. The pointer to appropriate location in
         * sector's data buffer is stored into `ret_buf;`  therefore, the buffer should not
         * be modified.
         *
         * If subheader is not provided by image file(s), it is generated.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_subheader(): [boolean, Uint8Array | null];
        /**
         * Retrieves sector's sync pattern. The pointer to appropriate location in
         * sector's data buffer is stored into `ret_buf;` therefore, the buffer should not
         * be modified.
         *
         * If sync pattern is not provided by image file(s), it is generated.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_sync(): [boolean, Uint8Array | null];
        /**
         * Scrambles 2340 bytes of sector data after sync pattern, using scrambler
         * from ECMA-130 Annex B. Running this function on already-scrambled
         * sector results in unscrambling.
         */
        scramble(): void;
        /**
         * Sets sector's user data to that stored in `buf`.
         * @param buf buffer containing user data
         * @returns %TRUE on success, %FALSE on failure
         */
        set_data(buf: Uint8Array | string): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Sets sector's EDC/ECC data to that stored in `buf`.
         * @param buf buffer containing EDC/ECC data
         * @returns %TRUE on success, %FALSE on failure
         */
        set_edc_ecc(buf: Uint8Array | string): boolean;
        /**
         * Sets sector's header to that stored in `buf`.
         * @param buf buffer containing header
         * @returns %TRUE on success, %FALSE on failure
         */
        set_header(buf: Uint8Array | string): boolean;
        /**
         * Sets sector's subchannel data to that stored in `buf`. `format` must be
         * one of #MirageSectorSubchannelFormat.
         * @param format subchannel format
         * @param buf buffer containing subchannel data
         * @returns %TRUE on success, %FALSE on failure
         */
        set_subchannel(format: SectorSubchannelFormat | null, buf: Uint8Array | string): boolean;
        /**
         * Sets sector's subheader to that stored in `buf`.
         * @param buf buffer containing subheader
         * @returns %TRUE on success, %FALSE on failure
         */
        set_subheader(buf: Uint8Array | string): boolean;
        /**
         * Sets sector's sync pattern to that stored in `buf`.
         * @param buf buffer containing sync pattern
         * @returns %TRUE on success, %FALSE on failure
         */
        set_sync(buf: Uint8Array | string): boolean;
        /**
         * Verifies the sector data in terms of L-EC error detection/correction.
         * Data sectors (Mode 1, Mode 2 Form 1 and Mode 2 Form 2) contain error
         * detection/error correction codes which is part of so called layered
         * error correction. This function calculates the EDC for sector data and
         * compares it with EDC provided by the image file.
         *
         * As a result of comparison, the sectors with intentionally faulty EDC
         * (and possibly ECC, though ECC is not verified) can be discovered.
         *
         * This function requires EDC/ECC data to be provided by the image. If it
         * is not provided, it would be generated by #MirageSector on first access
         * via mirage_sector_get_edc_ecc() using the same algorithm as the one used
         * by this function. Therefore, in case of EDC/ECC data missing, the verification
         * automatically succeeds.
         * @returns %TRUE if sector passes verification (i.e. no L-EC errors are detected) otherwise %FALSE
         */
        verify_lec(): boolean;
        /**
         * Verifies the Q subchannel's CRC for the sector.
         *
         * As a result of comparison, the sectors with intentionally faulty Q subchannel
         * can be discovered.
         *
         * This function requires subchannel data to be provided by the image. If it
         * is not provided, it would be generated by #MirageSector on first access
         * via mirage_sector_get_subchannel() using the same algorithm as the one used
         * by this function. Therefore, in case of subchannel data missing, the verification
         * automatically succeeds.
         * @returns %TRUE if sector's Q subchannel CRC passes verification otherwise %FALSE
         */
        verify_subchannel_crc(): boolean;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'layout-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageSession</structname>
     * structure are private to the #MirageSession implementation and
     * should never be accessed directly.
     */
    class Session extends Object implements Contextual {
        static $gtype: GObject.GType<Session>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds language to session.
         *
         * `code` is language code that should be assigned to added language. If
         * language with that code is already present in the session, the function fails.
         * @param code language code for the added language
         * @param language a #MirageLanguage to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_language(code: number, language: Language): boolean;
        /**
         * Adds track to session layout.
         *
         * `index` is the index at which track is added. Negative index denotes
         * index going backwards (i.e. -1 adds track at the end, -2 adds track
         * second-to-last, etc.). If index, either negative or positive, is too big,
         * track is respectively added at the beginning or at the end of the layout.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index at which track should be added
         * @param track a #MirageTrack to be added
         */
        add_track_by_index(index: number, track: Track): void;
        /**
         * Adds track to session layout.
         *
         * `number` is track number that should be assigned to added track. It determines
         * track's position in the layout. If track with that number already exists in
         * the layout, the function fails.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number track number for the added track
         * @param track a #MirageTrack to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_track_by_number(number: number, track: Track): boolean;
        /**
         * Iterates over languages list, calling `func` for each language.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_languages(func: EnumLanguageCallback): boolean;
        /**
         * Iterates over tracks list, calling `func` for each track in the layout.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_tracks(func: EnumTrackCallback): boolean;
        /**
         * Returns CD-TEXT data for session. It internally creates and uses #MirageCdTextCoder
         * object as an encoder to encode data from #MirageLanguage objects from both session and
         * its tracks. Buffer with encoded data is stored in `data;` it should be freed with
         * g_free() when no longer needed.
         * @returns %TRUE on success, %FALSE on failure
         */
        get_cdtext_data(): [boolean, Uint8Array];
        /**
         * Retrieves language by language code.
         * @param code language code of language to be retrieved
         * @returns a #MirageLanguage on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_language_by_code(code: number): Language;
        /**
         * Retrieves language by index. If `index` is negative, languages from the end of
         * session are retrieved (e.g. -1 is for last language, -2 for second-to-last
         * language, etc.). If `index` is out of range, regardless of the sign, the
         * function fails.
         * @param index index of language to be retrieved
         * @returns a #MirageLanguage on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_language_by_index(index: number): Language;
        /**
         * Retrieves session's leadout length. The returned length is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns leadout length
         */
        get_leadout_length(): number;
        /**
         * Retrieves MCN.
         * @returns pointer to MCN string, or %NULL. The string belongs to the object and should not be modified.
         */
        get_mcn(): string;
        /**
         * Retrieves session that is placed after `self` in disc layout.
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_next(): Session;
        /**
         * Retrieves number of languages the session contains.
         * @returns number of languages
         */
        get_number_of_languages(): number;
        /**
         * Retrieves number of tracks in the session layout.
         * @returns number of tracks
         */
        get_number_of_tracks(): number;
        /**
         * Retrieves session that is placed before `self` in disc layout.
         * @returns a #MirageSession on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_prev(): Session;
        /**
         * Retrieves session type.
         * @returns session type
         */
        get_session_type(): SessionType;
        /**
         * Retrieves track that comes after `track`.
         * @param track a track
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_after(track: Track): Track;
        /**
         * Retrieves track that comes before `track`.
         * @param track a track
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_before(track: Track): Track;
        /**
         * Retrieves track by address. `address` must be valid (disc-relative) sector
         * address that is part of the track to be retrieved (i.e. lying between tracks's
         * start and end sector).
         * @param address address belonging to track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_address(address: number): Track;
        /**
         * Retrieves track by index. If `index` is negative, tracks from the end of
         * layout are retrieved (e.g. -1 is for last track, -2 for second-to-last
         * track, etc.). If `index` is out of range, regardless of the sign, the
         * function fails.
         * @param index index of track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_index(index: number): Track;
        /**
         * Retrieves track by track number.
         * @param number number of track to be retrieved
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_track_by_number(number: number): Track;
        /**
         * Checks whether the session contains the given address or not.
         * @param address address to be checked
         * @returns %TRUE if @address falls inside session, %FALSE if it does not
         */
        layout_contains_address(address: number): boolean;
        /**
         * Retrieves track number of the first track in the session layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns first track number
         */
        layout_get_first_track(): number;
        /**
         * Retrieves length of the session layout. This means the length of
         * all tracks combined, including lead-in and lead-out tracks. The returned
         * length is given in sectors.
         * @returns session layout length
         */
        layout_get_length(): number;
        /**
         * Retrieves sessions's session number.
         * @returns session number
         */
        layout_get_session_number(): number;
        /**
         * Retrieves start sector of the session layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns start sector
         */
        layout_get_start_sector(): number;
        /**
         * Sets first track number to `first_track`. This is a number that is
         * assigned to the first track in the session layout.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param first_track first track number
         */
        layout_set_first_track(first_track: number): void;
        /**
         * Sets sessions's session number.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @param number session number
         */
        layout_set_session_number(number: number): void;
        /**
         * Sets start sector of the session layout to `start_sector`. This is a sector at which
         * the first track in the session layout will start.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param start_sector start sector
         */
        layout_set_start_sector(start_sector: number): void;
        /**
         * Removes language from session.
         *
         * `code` is language code the language to be removed.
         * @param code language code of language to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_language_by_code(code: number): boolean;
        /**
         * Removes language from session.
         *
         * `index` is the index of the language to be removed. This function calls
         * mirage_session_get_language_by_index() so `index` behavior is determined by that
         * function.
         * @param index index of language to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_language_by_index(index: number): boolean;
        /**
         * Removes language from session.
         *
         * `language` is a #MirageLanguage object to be removed.
         * @param language language object to be removed
         */
        remove_language_by_object(language: Language): void;
        /**
         * Removes track from session layout.
         *
         * `index` is the index of the track to be removed. This function calls
         * mirage_session_get_track_by_index() so `index` behavior is determined by that
         * function.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index of track to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_track_by_index(index: number): boolean;
        /**
         * Removes track from session layout.
         *
         * `number` is track number of the track to be removed.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param number track number of track to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_track_by_number(number: number): boolean;
        /**
         * Removes track from session layout.
         *
         * `track` is a #MirageTrack object to be removed.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param track track object to be removed
         */
        remove_track_by_object(track: Track): void;
        /**
         * Sets CD-TEXT data for session. It internally creates and uses #MirageCdTextCoder
         * object as a decoder to decode data in `data`. Decoded data is stored in #MirageLanguage
         * objects in both session and its tracks. Therefore session must have same number of tracks
         * as the encoded CD-TEXT data.
         * @param data buffer containing encoded CD-TEXT data
         * @returns %TRUE on success, %FALSE on failure
         */
        set_cdtext_data(data: Uint8Array | string): boolean;
        /**
         * Sets session's leadout length to `length`. It does so by creating NULL fragment
         * and adding it to leadout. This function is internally used to properly handle
         * multi-session disc layouts. The length is given in sectors.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @param length leadout length
         */
        set_leadout_length(length: number): void;
        /**
         * Sets MCN (Media Catalogue Number).
         *
         * Because MCN is stored in subchannel data, this function silently
         * fails if any of session's tracks contains fragments with subchannel
         * data provided.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @param mcn MCN
         */
        set_mcn(mcn: string): void;
        /**
         * Sets session type. `type` must be one of #MirageSessionType.
         * @param type session type
         */
        set_session_type(type: SessionType | null): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Track {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'layout-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageTrack</structname>
     * structure are private to the #MirageTrack implementation and
     * should never be accessed directly.
     */
    class Track extends Object implements Contextual {
        static $gtype: GObject.GType<Track>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Track.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Track.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Track.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Track.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Track.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Track.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Track.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Track.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a fragment implementation to track. `index` is index at which fragment
         * should be added. Negative index denotes index going backwards (i.e. -1 adds
         * fragment at the end, -2 adds fragment second-to-last, etc.). If index, either
         * negative or positive, is too big, fragment is respectively added at the
         * beginning or at the end of the track.
         *
         * <note>
         * Currently, unlike in most libMirage's *_add_* functions, `fragment` argument cannot be %NULL.
         * This is because specific fragment implementation is required and therefore must be
         * provided by the caller.
         * </note>
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index at which fragment should be added
         * @param fragment a #MirageFragment to be added
         */
        add_fragment(index: number, fragment: Fragment): void;
        /**
         * Adds index to track.
         *
         * `address` is track-relative address at which index should be added. As it determines
         * position of the index, it also determines the number index will be assigned.
         *
         * If address falls before index 01 (i.e. if it's less than address that was set
         * using mirage_track_set_track_start()), the function fails.
         * @param address address at which the index is to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_index(address: number): boolean;
        /**
         * Adds language to track.
         *
         * `code` is language code that should be assigned to added language. If
         * language with that code is already present in the track, the function fails.
         * @param code language code for the added language
         * @param language a #MirageLanguage to be added
         * @returns %TRUE on success, %FALSE on failure
         */
        add_language(code: number, language?: Language | null): boolean;
        /**
         * Iterates over fragments list, calling `func` for each fragment in the layout.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_fragments(func: EnumFragmentCallback): boolean;
        /**
         * Iterates over indices list, calling `func` for each index.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_indices(func: EnumIndexCallback): boolean;
        /**
         * Iterates over languages list, calling `func` for each language.
         *
         * If `func` returns %FALSE, the function immediately returns %FALSE.
         * @param func callback function
         * @returns %TRUE on success, %FALSE on failure
         */
        enumerate_languages(func: EnumLanguageCallback): boolean;
        /**
         * Retrieves first fragment that contains subchannel data. A reference to fragment
         * is stored in `fragment;` it should be released with g_object_unref() when no
         * longer needed.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @returns a #MirageFragment on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        find_fragment_with_subchannel(): Fragment;
        /**
         * Retrieves track's ADR.
         *
         * <note>
         * At the moment, ADR is always returned as 1.
         * </note>
         * @returns ADR value
         */
        get_adr(): number;
        /**
         * Retrieves track's CTL. CTL is calculated on basis of track mode and track
         * flags.
         * @returns CTL value
         */
        get_ctl(): number;
        /**
         * Retrieves track flags.
         * @returns track flags
         */
        get_flags(): number;
        /**
         * Retrieves fragment by address. `address` must be valid (track-relative) sector
         * address that is part of the fragment to be retrieved (i.e. lying between fragment's
         * start and end address).
         * @param address address belonging to fragment to be retrieved
         * @returns a #MirageFragment on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_fragment_by_address(address: number): Fragment;
        /**
         * Retrieves fragment by index. If `index` is negative, fragments from the end of
         * track are retrieved (e.g. -1 is for last track, -2 for second-to-last
         * track, etc.). If `index` is out of range, regardless of the sign, the
         * function fails.
         * @param index index of fragment to be retrieved
         * @returns a #MirageFragment on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_fragment_by_index(index: number): Fragment;
        /**
         * Retrieves index by address. `address` must be valid (track-relative) sector
         * address that is part of the index to be retrieved (i.e. lying between index's
         * start and end sector).
         * @param address address belonging to index to be retrieved
         * @returns a #MirageIndex on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_index_by_address(address: number): Index;
        /**
         * Retrieves index by index number. If `number` is negative, indices from the end of
         * track are retrieved (e.g. -1 is for index, -2 for second-to-last index, etc.).
         * If `number` is out of range, regardless of the sign, the function fails.
         * @param number index number of index to be retrieved
         * @returns a #MirageIndex on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_index_by_number(number: number): Index;
        /**
         * Retrieves ISRC.
         * @returns pointer to ISRC string, or %NULL. The string belongs to the object and should not be modified.
         */
        get_isrc(): string;
        /**
         * Retrieves language by language code.
         * @param code language code of language to be retrieved
         * @returns a #MirageLanguage on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_language_by_code(code: number): Language;
        /**
         * Retrieves language by index. If `index` is negative, languages from the end of
         * track are retrieved (e.g. -1 is for last language, -2 for second-to-last
         * language, etc.). If `index` is out of range, regardless of the sign, the
         * function fails.
         * @param index index of language to be retrieved
         * @returns a #MirageLanguage on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_language_by_index(index: number): Language;
        /**
         * Retrieves track that is placed after `self` in session layout
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_next(): Track;
        /**
         * Retrieves number of fragments making up the track.
         * @returns number of fragments
         */
        get_number_of_fragments(): number;
        /**
         * Retrieves number of indices the track contains. Note that this includes
         * only indices greater than 01.
         * @returns number of indices
         */
        get_number_of_indices(): number;
        /**
         * Retrieves number of languages the track contains.
         * @returns number of languages
         */
        get_number_of_languages(): number;
        /**
         * Retrieves track that is placed before `self` in session layout.
         * @returns a #MirageTrack on success, %NULL on failure. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        get_prev(): Track;
        /**
         * Retrieves a sector. `address` is sector address for which a #MirageSector
         * object representing sector should be returned. `abs` specifies whether `address`
         * is absolute or relative; if %TRUE, `address` is absolute (i.e. relative to start
         * of the disc), if %FALSE, it is relative (i.e. relative to start of the track).
         *
         * A reference to sector is stored in `sector;` it should be released with
         * g_object_unref() when no longer needed.
         * @param address sector address
         * @param abs absolute address
         * @returns sector object on success, %NULL on failure. The sector object should be released with g_object_unref() when no longer needed.
         */
        get_sector(address: number, abs: boolean): Sector;
        /**
         * Retrieves type of sectors comprising the track.
         * @returns sector type
         */
        get_sector_type(): SectorType;
        /**
         * Retrieves track start address. This is track-relative address at which pregap
         * ends and track "logically" starts (i.e. where index changes from 00 to 01).
         * @returns track start address
         */
        get_track_start(): number;
        /**
         * Checks whether the track contains the given address or not.
         * @param address address to be checked
         * @returns %TRUE if @address falls inside track, %FALSE if it does not
         */
        layout_contains_address(address: number): boolean;
        /**
         * Retrieves track's length. The returned length is given in sectors.
         * @returns track length
         */
        layout_get_length(): number;
        /**
         * Retrieves track's session number. If track is not part of disc layout, 0
         * is returned.
         * @returns session number
         */
        layout_get_session_number(): number;
        /**
         * Retrieves track's start sector.
         * @returns start sector
         */
        layout_get_start_sector(): number;
        /**
         * Retrieves track's track number.
         * @returns track number
         */
        layout_get_track_number(): number;
        /**
         * Sets track's start sector.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         *
         * <note>
         * Causes top-down change.
         * </note>
         * @param start_sector start sector
         */
        layout_set_start_sector(start_sector: number): void;
        /**
         * Set track's track number.
         *
         * <note>
         * Intended for internal use only.
         * </note>
         * @param track_number track number
         */
        layout_set_track_number(track_number: number): void;
        /**
         * Writes the `sector` to track. The address at which sector is written
         * is retrieved from sector's property; for this function to succeed,
         * the address must either fall within track's layout (i.e., the track's
         * fragment(s) must have sufficient length "reserved" to accept sector),
         * or, alternatively, the sector address is allowed to equal track's
         * current lenght plus one. In the latter case, the track's length is
         * incremented when the sector is written (i.e., the corresponding track's
         * fragment is extended before data is written to it).
         * @param sector a #MirageSector representing sector to be written
         * @returns %TRUE on success, %FALSE on failure.
         */
        put_sector(sector: Sector): boolean;
        /**
         * Removes fragment from track.
         *
         * `index` is the index of the fragment to be removed. This function calls
         * mirage_track_get_fragment_by_index() so `index` behavior is determined by that
         * function.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param index index of fragment to be removed.
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_fragment_by_index(index: number): boolean;
        /**
         * Removes fragment from track.
         *
         * `fragment` is a #MirageFragment object to be removed.
         *
         * <note>
         * Causes bottom-up change.
         * </note>
         * @param fragment fragment object to be removed
         */
        remove_fragment_by_object(fragment: Fragment): void;
        /**
         * Removes index from track. This causes index numbers of remaining indices to be readjusted.
         *
         * `number` is index number of index to be removed. It must be greater or equal than 2.
         * @param number index number of index to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_index_by_number(number: number): boolean;
        /**
         * Removes index from track.This causes index numbers of remaining indices to be readjusted.
         *
         * `index` is a #MirageIndex object to be removed.
         * @param index index object to be removed
         */
        remove_index_by_object(index: Index): void;
        /**
         * Removes language from track.
         *
         * `code` is language code the language to be removed.
         * @param code language code of language to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_language_by_code(code: number): boolean;
        /**
         * Removes language from track.
         *
         * `index` is the index of the language to be removed. This function calls
         * mirage_track_get_language_by_index() so `index` behavior is determined by that
         * function.
         * @param index index of language to be removed
         * @returns %TRUE on success, %FALSE on failure
         */
        remove_language_by_index(index: number): boolean;
        /**
         * Removes language from track.
         *
         * `language` is a #MirageLanguage object to be removed.
         * @param language language object to be removed
         */
        remove_language_by_object(language: Language): void;
        /**
         * Sets track's CTL; the function translates CTL into track flags and sets them
         * using mirage_track_set_flags(). Track mode set with CTL is ignored.
         * @param ctl track's CTL
         */
        set_ctl(ctl: number): void;
        /**
         * Sets track flags. `flags` must be a combination of #MirageTrackFlags.
         * @param flags track flags
         */
        set_flags(flags: number): void;
        /**
         * Sets MCN.
         *
         * Because ISRC is stored in subchannel data, this function silently
         * fails if track contains fragments with subchannel data provided.
         * @param isrc ISRC
         */
        set_isrc(isrc: string): void;
        /**
         * Sets sector type. `mode` must be one of #MirageSectorType.
         * @param sector_type type of sectors comprising the track
         */
        set_sector_type(sector_type: SectorType | null): void;
        /**
         * Sets track start address. `track_start` is a track-relative address at which track's
         * pregap ends and track "logically" starts (i.e. where index changes from 00 to 01). Note that
         * this is not the same as start address that is set by mirage_track_layout_set_start_sector();
         * that one sets the address at which track "physically" starts (i.e. where index 00 starts).
         * @param track_start track start address
         */
        set_track_start(track_start: number): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Writer {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'conversion-progress': (arg0: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps, Contextual.ConstructorProps {}
    }

    /**
     * All the fields in the <structname>MirageWriter</structname>
     * structure are private to the #MirageWriter implementation and
     * should never be accessed directly.
     */
    abstract class Writer extends Object implements Contextual {
        static $gtype: GObject.GType<Writer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Writer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Writer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Writer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Writer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Writer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Writer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Writer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Writer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Creates a fragment with specified `role` for given `track`. The latter
         * needs to already be part of disc's layout.
         *
         * The role helps writer implementation determine what kind of fragment
         * to create; for example, some writer implementations create dummy
         * fragments for pregaps.
         * @param track track for which the fragment is to be created
         * @param role fragment role
         */
        vfunc_create_fragment(track: Track, role: FragmentRole): Fragment;
        /**
         * Finalizes the image, possibly creating the image descriptor file if
         * necessary.
         * @param disc disc object for which the image is being written
         */
        vfunc_finalize_image(disc: Disc): boolean;
        /**
         * initializes writer on specified image
         * @param disc
         */
        vfunc_open_image_impl(disc: Disc): boolean;

        // Methods

        /**
         * Adds a boolean parameter to writer's parameter sheet.
         * @param id parameter ID
         * @param name parameter name
         * @param description parameter description
         * @param default_value default value
         */
        add_parameter_boolean(id: string, name: string, description: string, default_value: boolean): void;
        /**
         * Adds an integer parameter to writer's parameter sheet.
         * @param id parameter ID
         * @param name parameter name
         * @param description parameter description
         * @param default_value default value
         */
        add_parameter_int(id: string, name: string, description: string, default_value: number): void;
        /**
         * Adds a string parameter to writer's parameter sheet.
         * @param id parameter ID
         * @param name parameter name
         * @param description parameter description
         * @param default_value default value
         */
        add_parameter_string(id: string, name: string, description: string, default_value: string): void;
        /**
         * Convenience function that converts an already-opened image stored in
         * `original_disc` and writes it to `filename`. If conversion progress
         * reporting is enabled via mirage_writer_set_conversion_progress_step(),
         * the #MirageWriter::conversion-progress signal is emitted at specified
         * time intervals during conversion.
         * @param filename filename of output image
         * @param original_disc disc layout obtained from original image
         * @param parameters writer parameters
         * @param cancellable optional %GCancellable object, NULL to ignore.
         * @returns %TRUE on success, %FALSE on failure
         */
        convert_image(
            filename: string,
            original_disc: Disc,
            parameters: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Creates a fragment with specified `role` for given `track`. The latter
         * needs to already be part of disc's layout.
         *
         * The role helps writer implementation determine what kind of fragment
         * to create; for example, some writer implementations create dummy
         * fragments for pregaps.
         * @param track track for which the fragment is to be created
         * @param role fragment role
         * @returns pointer to created fragment object on success, %NULL on failure
         */
        create_fragment(track: Track, role: FragmentRole | null): Fragment;
        /**
         * Finalizes the image, possibly creating the image descriptor file if
         * necessary.
         * @param disc disc object for which the image is being written
         * @returns %TRUE on success, %FALSE on failure
         */
        finalize_image(disc: Disc): boolean;
        /**
         * Generates writer information from the input fields. It is intended as a function
         * for creating writer information in writer implementations.
         * @param id writer ID
         * @param name writer name
         */
        generate_info(id: string, name: string): void;
        /**
         * Retrieves conversion progress step setting.
         * @returns the value of conversion progress step.
         */
        get_conversion_progress_step(): number;
        /**
         * Retrieves writer information.
         * @returns a pointer to writer information structure.  The structure belongs to object and should not be modified.
         */
        get_info(): WriterInfo;
        /**
         * Looks up the boolean parameter with specified `id` from user-supplied
         * writer parameters and returns its value. If user did not supply the
         * parameter, its default value is returned instead.
         * @param id parameter ID string
         * @returns user-supplied parameter value.
         */
        get_parameter_boolean(id: string): boolean;
        /**
         * Looks up the enum parameter with specified `id` from user-supplied
         * writer parameters and returns its value. If user did not supply the
         * parameter, its default value is returned instead.
         * @param id parameter ID string
         * @returns user-supplied parameter value.
         */
        get_parameter_enum(id: string): string;
        /**
         * Looks up the string parameter with specified `id` from user-supplied
         * writer parameters and returns its value. If user did not supply the
         * parameter, its default value is returned instead.
         * @param id parameter ID string
         * @returns user-supplied parameter value.
         */
        get_parameter_int(id: string): number;
        /**
         * Looks up the string parameter with specified `id` from user-supplied
         * writer parameters and returns its value. If user did not supply the
         * parameter, its default value is returned instead.
         * @param id parameter ID string
         * @returns user-supplied parameter value.
         */
        get_parameter_string(id: string): string;
        /**
         * Retrieves the list of parameter ID strings from writer's parameter
         * sheet. The IDs are ordered in the same way as they were inserted into
         * the parameter sheet.
         * @returns the list of parameter IDs. The list and its elements belong to the writer and should not be modified.
         */
        lookup_parameter_ids(): string[];
        /**
         * Looks up the parameter with specified `id` in writer's parameter sheet
         * and retrieves the parameter's information structure.
         * @param id parameter ID string
         * @returns the pointer to parameter's information structure on success, %NULL on failure. The information structure belong to the writer and should not be modified.
         */
        lookup_parameter_info(id: string): WriterParameter;
        /**
         * Initializes the image writer to start the writing process for `disc`.
         * The latter should have set the image filename(s) and medium type, but
         * does not have to have disc layout (sessions, tracks) built yet.
         * @param disc disc object for which the image will be created
         * @param parameters writer parameters
         * @returns %TRUE on success, %FALSE on failure
         */
        open_image(disc: Disc, parameters: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>): boolean;
        /**
         * Sets conversion progress step. Setting `step` to 0 disables conversion
         * progress reporting.
         * @param step new conversion progress step value
         */
        set_conversion_progress_step(step: number): void;

        // Inherited methods
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
        /**
         * Retrieves the attached context.
         */
        vfunc_get_context(): Context;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        vfunc_set_context(context: Context): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    type CdTextCoderClass = typeof CdTextCoder;
    abstract class CdTextCoderPrivate {
        static $gtype: GObject.GType<CdTextCoderPrivate>;
    }

    type ContextClass = typeof Context;
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;
    }

    type ContextualInterface = typeof Contextual;
    /**
     * Structure containing debug mask information.
     */
    class DebugMaskInfo {
        static $gtype: GObject.GType<DebugMaskInfo>;

        // Fields

        name: string;
        value: number;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                value: number;
            }>,
        );
    }

    type DiscClass = typeof Disc;
    abstract class DiscPrivate {
        static $gtype: GObject.GType<DiscPrivate>;
    }

    type FileStreamClass = typeof FileStream;
    abstract class FileStreamPrivate {
        static $gtype: GObject.GType<FileStreamPrivate>;
    }

    type FilterStreamClass = typeof FilterStream;
    /**
     * A structure containing filter stream information. It can be obtained
     * with call to mirage_filter_stream_get_info().
     */
    class FilterStreamInfo {
        static $gtype: GObject.GType<FilterStreamInfo>;

        // Fields

        id: string;
        name: string;
        writable: boolean;
        description: string[];
        mime_type: string[];

        // Constructors

        constructor(
            properties?: Partial<{
                id: string;
                name: string;
                writable: boolean;
                description: string[];
                mime_type: string[];
            }>,
        );

        // Methods

        /**
         * Copies parser information from `info` to `dest`.
         * @param dest a #MirageFilterStreamInfo to copy data to
         */
        copy(dest: FilterStreamInfo): void;
        /**
         * Frees the allocated fields in `info` (but not the structure itself!).
         */
        free(): void;
    }

    abstract class FilterStreamPrivate {
        static $gtype: GObject.GType<FilterStreamPrivate>;
    }

    type FragmentClass = typeof Fragment;
    abstract class FragmentPrivate {
        static $gtype: GObject.GType<FragmentPrivate>;
    }

    type IndexClass = typeof Index;
    abstract class IndexPrivate {
        static $gtype: GObject.GType<IndexPrivate>;
    }

    type LanguageClass = typeof Language;
    abstract class LanguagePrivate {
        static $gtype: GObject.GType<LanguagePrivate>;
    }

    type ObjectClass = typeof Object;
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;
    }

    type ParserClass = typeof Parser;
    /**
     * A structure containing parser information. It can be obtained with call to
     * mirage_parser_get_info().
     */
    class ParserInfo {
        static $gtype: GObject.GType<ParserInfo>;

        // Fields

        id: string;
        name: string;
        description: string[];
        mime_type: string[];

        // Constructors

        constructor(
            properties?: Partial<{
                id: string;
                name: string;
                description: string[];
                mime_type: string[];
            }>,
        );

        // Methods

        /**
         * Copies parser information from `info` to `dest`.
         * @param dest a #MirageParserInfo to copy data to
         */
        copy(dest: ParserInfo): void;
        /**
         * Frees the allocated fields in `info` (but not the structure itself!).
         */
        free(): void;
    }

    abstract class ParserPrivate {
        static $gtype: GObject.GType<ParserPrivate>;
    }

    type PluginClass = typeof Plugin;
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    type SectorClass = typeof Sector;
    abstract class SectorPrivate {
        static $gtype: GObject.GType<SectorPrivate>;
    }

    type SessionClass = typeof Session;
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;
    }

    type StreamInterface = typeof Stream;
    type TrackClass = typeof Track;
    abstract class TrackPrivate {
        static $gtype: GObject.GType<TrackPrivate>;
    }

    type WriterClass = typeof Writer;
    /**
     * A structure containing writer information. It can be obtained with call to
     * mirage_writer_get_info().
     */
    class WriterInfo {
        static $gtype: GObject.GType<WriterInfo>;

        // Fields

        id: string;
        name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                id: string;
                name: string;
            }>,
        );

        // Methods

        /**
         * Copies parser information from `info` to `dest`.
         * @param dest a #MirageWriterInfo to copy data to
         */
        copy(dest: WriterInfo): void;
        /**
         * Frees the allocated fields in `info` (but not the structure itself!).
         */
        free(): void;
    }

    /**
     * A structure encapsulating information about image writer parameters,
     * using in writer's parameter sheet.
     */
    class WriterParameter {
        static $gtype: GObject.GType<WriterParameter>;

        // Fields

        name: string;
        description: string;
    }

    abstract class WriterPrivate {
        static $gtype: GObject.GType<WriterPrivate>;
    }

    namespace Contextual {
        /**
         * Interface for implementing Contextual.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieves the attached context.
             */
            vfunc_get_context(): Context;
            /**
             * Sets/attaches a context.
             * @param context debug context (a #MirageContext)
             */
            vfunc_set_context(context: Context): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContextualNamespace {
        $gtype: GObject.GType<Contextual>;
        prototype: Contextual;
    }
    interface Contextual extends GObject.Object, Contextual.Interface {
        // Methods

        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_input_stream().
         * </note>
         * @param filename filename to create input stream on
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to access data stored in file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_input_stream(filename: string): Stream;
        /**
         * Opens a file pointed to by `filename` and creates a chain of filter
         * streams on top of it.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_create_output_stream().
         * </note>
         * @param filename filename to create output stream on
         * @param filter_chain NULL-terminated array of strings describing types of filters to include in the filter chain, or %NULL
         * @returns on success, an object implementing #MirageStream interface is returned, which can be used to write data to file. On failure, %NULL is returned. The reference to the object should be released using g_object_unref() when no longer needed.
         */
        create_output_stream(filename: string, filter_chain?: string[] | null): Stream;
        /**
         * Checks whether debug messages at debug level `level` are currently
         * active or not.
         * @param level debug level
         * @returns a boolean indicating whether debug messages at debug level @level are currently active or not.
         */
        debug_is_active(level: number): boolean;
        /**
         * Prints contents of `buffer` as a sequence of `buffer_length` two-digit
         * hexadecimal numbers, arranged in lines of `width` numbers. Each line
         * is optionally prefixed by `prefix`. If specified debug `level` is not
         * active (masked by context), this function does nothing.
         * @param level debug level
         * @param prefix prefix, or none
         * @param width output width
         * @param buffer buffer to print
         */
        debug_print_buffer(level: number, prefix: string | null, width: number, buffer: Uint8Array | string): void;
        /**
         * Retrieves the attached context.
         * @returns attached context (a #MirageContext), or %NULL. The reference to context is incremented, and should be released using g_object_unref() when no longer needed.
         */
        get_context(): Context;
        /**
         * Retrieves option named `name` from the context.
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_get_option().
         * </note>
         * @param name option name
         * @returns a #GVariant containing the option value on success, %NULL on failure.
         */
        get_option(name: string): GLib.Variant;
        /**
         * Obtains password string, using the #MiragePasswordFunction callback
         * that was provided via mirage_context_set_password_function().
         *
         * <note>
         * This is a convenience function that retrieves a #MirageContext from
         * `self` and calls mirage_context_obtain_password().
         * </note>
         * @returns password string on success, %NULL on failure. The string should be freed with g_free() when no longer needed.
         */
        obtain_password(): string;
        /**
         * Sets/attaches a context.
         * @param context debug context (a #MirageContext)
         */
        set_context(context: Context): void;
    }

    export const Contextual: ContextualNamespace & {
        new (): Contextual; // This allows `obj instanceof Contextual`
    };

    namespace Stream {
        /**
         * Interface for implementing Stream.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieves the name to file on which the stream is opened. If `self` is
             * a filter stream in the filter stream chain, the filename is obtained from
             * the stream at the bottom of the chain.
             */
            vfunc_get_filename(): string;
            /**
             * Queries the stream (chain) for write support. For the stream to be
             * writable, the stream object implementation itself must support write
             * operations, and any stream objects below it in the stream chain must
             * also be writable.
             */
            vfunc_is_writable(): boolean;
            /**
             * Attempts to move the file on top of which the stream (chain) is opened
             * to `new_filename`. If supported, native move operations are used,
             * otherwise a copy + delete fallback is used.
             * @param new_filename the new filename
             */
            vfunc_move_file(new_filename: string): boolean;
            /**
             * Attempts to read `count` bytes from stream into the buffer starting at
             * `buffer`. Will block during the operation.
             * @param buffer a buffer to read data into
             * @param count number of bytes to read from stream
             */
            vfunc_read(buffer: any | null, count: number): number;
            /**
             * Seeks in the stream by the given `offset,` modified by `type`.
             * @param offset offset to seek
             * @param type seek type
             */
            vfunc_seek(offset: number, type: GLib.SeekType): boolean;
            /**
             * Retrieves the current position within the stream.
             */
            vfunc_tell(): number;
            /**
             * Attempts to write `count` bytes to stream from the buffer starting at
             * `buffer`. Will block during the operation.
             * @param buffer a buffer to write data from
             * @param count number of bytes to write to stream
             */
            vfunc_write(buffer: any | null, count: number): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface StreamNamespace {
        $gtype: GObject.GType<Stream>;
        prototype: Stream;
    }
    interface Stream extends GObject.Object, Stream.Interface {
        // Methods

        /**
         * Retrieves the name to file on which the stream is opened. If `self` is
         * a filter stream in the filter stream chain, the filename is obtained from
         * the stream at the bottom of the chain.
         * @returns pointer to a buffer containing the filename. The buffer belongs to the stream object and should not be modified.
         */
        get_filename(): string;
        /**
         * Constructs and returns a compatibility object inheriting a #GInputStream.
         * This is to allow regular GIO stream objects (for example, a
         * #GDataInputStream) to be chained on top of our filter stream chain.
         * @returns a #GInputStream. The reference should be released using g_object_unref() when no longer needed.
         */
        get_g_input_stream(): Gio.InputStream;
        /**
         * Queries the stream (chain) for write support. For the stream to be
         * writable, the stream object implementation itself must support write
         * operations, and any stream objects below it in the stream chain must
         * also be writable.
         * @returns %TRUE if the stream (chain) is writable, %FALSE if it is not.
         */
        is_writable(): boolean;
        /**
         * Attempts to move the file on top of which the stream (chain) is opened
         * to `new_filename`. If supported, native move operations are used,
         * otherwise a copy + delete fallback is used.
         * @param new_filename the new filename
         * @returns %TRUE on success, %FALSE on failure.
         */
        move_file(new_filename: string): boolean;
        /**
         * Attempts to read `count` bytes from stream into the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to read data into
         * @param count number of bytes to read from stream
         * @returns number of bytes read, or -1 on error, or 0 on end of file.
         */
        read(buffer: any | null, count: number): number;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         * @param offset offset to seek
         * @param type seek type
         * @returns %TRUE on success, %FALSE on failure.
         */
        seek(offset: number, type: GLib.SeekType | null): boolean;
        /**
         * Retrieves the current position within the stream.
         * @returns the offset from the beginning of the stream.
         */
        tell(): number;
        /**
         * Attempts to write `count` bytes to stream from the buffer starting at
         * `buffer`. Will block during the operation.
         * @param buffer a buffer to write data from
         * @param count number of bytes to write to stream
         * @returns number of bytes written, or -1 on error.
         */
        write(buffer: any | null, count: number): number;
    }

    export const Stream: StreamNamespace & {
        new (): Stream; // This allows `obj instanceof Stream`
    };

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

export default Mirage;

// END
