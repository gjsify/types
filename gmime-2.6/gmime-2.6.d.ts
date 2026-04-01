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

export namespace GMime {
    /**
     * GMime-2.6
     */

    /**
     * The trust value of a certificate.
     * @gir-type Enum
     */
    enum CertificateTrust {
        /**
         * No trust assigned.
         */
        NONE,
        /**
         * Never trust this certificate.
         */
        NEVER,
        /**
         * Undefined trust for this certificate.
         */
        UNDEFINED,
        /**
         * Trust this certificate maginally.
         */
        MARGINAL,
        /**
         * Trust this certificate fully.
         */
        FULLY,
        /**
         * Trust this certificate ultimately.
         */
        ULTIMATE,
    }

    /**
     * A cipher algorithm.
     * @gir-type Enum
     */
    enum CipherAlgo {
        /**
         * The default (or unknown) cipher.
         */
        DEFAULT,
        /**
         * The IDEA cipher.
         */
        IDEA,
        /**
         * The 3DES cipher.
         */
        '3DES',
        /**
         * The CAST5 cipher.
         */
        CAST5,
        /**
         * The Blowfish cipher.
         */
        BLOWFISH,
        /**
         * The AES (aka RIJANDALE) cipher.
         */
        AES,
        /**
         * The AES-192 cipher.
         */
        AES192,
        /**
         * The AES-256 cipher.
         */
        AES256,
        /**
         * The Twofish cipher.
         */
        TWOFISH,
        /**
         * The Camellia-128 cipher.
         */
        CAMELLIA128,
        /**
         * The Camellia-192 cipher.
         */
        CAMELLIA192,
        /**
         * The Camellia-256 cipher.
         */
        CAMELLIA256,
    }

    /**
     * A Content-Transfer-Encoding enumeration.
     * @gir-type Enum
     */
    enum ContentEncoding {
        /**
         * Default transfer encoding.
         */
        DEFAULT,
        /**
         * 7bit text transfer encoding.
         */
        '7BIT',
        /**
         * 8bit text transfer encoding.
         */
        '8BIT',
        /**
         * Binary transfer encoding.
         */
        BINARY,
        /**
         * Base64 transfer encoding.
         */
        BASE64,
        /**
         * Quoted-printable transfer encoding.
         */
        QUOTEDPRINTABLE,
        /**
         * Uuencode transfer encoding.
         */
        UUENCODE,
    }

    /**
     * A hash algorithm.
     * @gir-type Enum
     */
    enum DigestAlgo {
        /**
         * The default hash algorithm.
         */
        DEFAULT,
        /**
         * The MD5 hash algorithm.
         */
        MD5,
        /**
         * The SHA-1 hash algorithm.
         */
        SHA1,
        /**
         * The RIPEMD-160 hash algorithm.
         */
        RIPEMD160,
        /**
         * The MD2 hash algorithm.
         */
        MD2,
        /**
         * The TIGER-192 hash algorithm.
         */
        TIGER192,
        /**
         * The HAVAL-5-160 hash algorithm.
         */
        HAVAL5160,
        /**
         * The SHA-256 hash algorithm.
         */
        SHA256,
        /**
         * The SHA-384 hash algorithm.
         */
        SHA384,
        /**
         * The SHA-512 hash algorithm.
         */
        SHA512,
        /**
         * The SHA-224 hash algorithm.
         */
        SHA224,
        /**
         * The MD4 hash algorithm.
         */
        MD4,
    }

    /**
     * Used with functions like `g_mime_filter_best_encoding()` and
     * `g_mime_object_encode()` as the 'constraint' argument. These values
     * provide a means of letting the filter know what the encoding
     * constraints are for the stream.
     * @gir-type Enum
     */
    enum EncodingConstraint {
        /**
         * The stream data must fit within the 7bit ASCII range.
         */
        '7BIT',
        /**
         * The stream data may have bytes with the high bit set, but no null bytes.
         */
        '8BIT',
        /**
         * The stream may contain any binary data.
         */
        BINARY,
    }

    /**
     * The mode for a {@link GMime.FilterFrom} filter.
     * @gir-type Enum
     */
    enum FilterFromMode {
        /**
         * Default mode.
         */
        DEFAULT,
        /**
         * Escape 'From ' lines with a '>'
         */
        ESCAPE,
        /**
         * QP-Encode 'From ' lines
         */
        ARMOR,
    }

    /**
     * The mode for the {@link GMime.FilterGZip} filter.
     * @gir-type Enum
     */
    enum FilterGZipMode {
        /**
         * Compress (zip) mode.
         */
        ZIP,
        /**
         * Uncompress (unzip) mode.
         */
        UNZIP,
    }

    /**
     * A public-key algorithm.
     * @gir-type Enum
     */
    enum PubKeyAlgo {
        /**
         * The default public-key algorithm.
         */
        DEFAULT,
        /**
         * The RSA algorithm.
         */
        RSA,
        /**
         * An encryption-only RSA algorithm.
         */
        RSA_E,
        /**
         * A signature-only RSA algorithm.
         */
        RSA_S,
        /**
         * An encryption-only ElGamal algorithm.
         */
        ELG_E,
        /**
         * The DSA algorithm.
         */
        DSA,
        /**
         * The ElGamal algorithm.
         */
        ELG,
    }

    /**
     * A message recipient type.
     * @gir-type Enum
     */
    enum RecipientType {
        /**
         * Represents the recipients in the To: header.
         */
        TO,
        /**
         * Represents the recipients in the Cc: header.
         */
        CC,
        /**
         * Represents the recipients in the Bcc: header.
         */
        BCC,
    }

    /**
     * Relative seek position.
     * @gir-type Enum
     */
    enum SeekWhence {
        /**
         * Seek relative to the beginning of the stream.
         */
        SET,
        /**
         * Seek relative to the current position in the stream.
         */
        CUR,
        /**
         * Seek relative to the end of the stream.
         */
        END,
    }

    /**
     * A value representing the signature status for a particular
     * {@link GMime.Signature}.
     * @gir-type Enum
     */
    enum SignatureStatus {
        /**
         * Good signature.
         */
        GOOD,
        /**
         * An error occurred.
         */
        ERROR,
        /**
         * Bad signature.
         */
        BAD,
    }

    /**
     * The buffering mode for a {@link GMime.StreamBuffer} stream.
     * @gir-type Enum
     */
    enum StreamBufferMode {
        /**
         * Cache all reads.
         */
        CACHE_READ,
        /**
         * Read in 4k blocks.
         */
        BLOCK_READ,
        /**
         * Write in 4k blocks.
         */
        BLOCK_WRITE,
    }

    /**
     * GMime's binary age.
     */
    const BINARY_AGE: number;
    /**
     * Standard attachment disposition.
     */
    const DISPOSITION_ATTACHMENT: string;
    /**
     * Standard inline disposition.
     */
    const DISPOSITION_INLINE: string;
    /**
     * Initialization flag to enable workarounds for badly formed rfc2047
     * encoded-words.
     */
    const ENABLE_RFC2047_WORKAROUNDS: number;
    /**
     * Initialization flag that hints to the rfc2047 encoder to use only
     * the configured user-charsets (set via `g_mime_set_user_charsets()`)
     * instead of trying to first use iso-8859-1.
     * @since 2.6.16
     */
    const ENABLE_USE_ONLY_USER_CHARSETS: number;
    /**
     * A bit flag for `g_mime_filter_enriched_new()` which signifies that
     * the filter should expect Rich Text (aka RTF).
     */
    const FILTER_ENRICHED_IS_RICHTEXT: number;
    /**
     * Cites text by prepending "&gt; " to each cited line.
     */
    const FILTER_HTML_CITE: number;
    /**
     * Wrap email addresses in "mailto:" href tags.
     */
    const FILTER_HTML_CONVERT_ADDRESSES: number;
    /**
     * Convert new-lines ('\n') into &lt;br&gt; tags.
     */
    const FILTER_HTML_CONVERT_NL: number;
    /**
     * Preserve whitespace by converting spaces into their appropriate
     * html entities.
     */
    const FILTER_HTML_CONVERT_SPACES: number;
    /**
     * Wrap detected URLs in &lt;a href=...&gt; tags.
     */
    const FILTER_HTML_CONVERT_URLS: number;
    /**
     * Converts 8bit characters to '?'.
     */
    const FILTER_HTML_ESCAPE_8BIT: number;
    /**
     * Change the colour of citation text.
     */
    const FILTER_HTML_MARK_CITATION: number;
    /**
     * Wrap stream in &lt;pre&gt; tags.
     */
    const FILTER_HTML_PRE: number;
    /**
     * GMime's interface age.
     */
    const INTERFACE_AGE: number;
    /**
     * GMime's major version.
     */
    const MAJOR_VERSION: number;
    /**
     * GMime's micro version.
     */
    const MICRO_VERSION: number;
    /**
     * GMime's minor version.
     */
    const MINOR_VERSION: number;
    /**
     * State for the `g_mime_encoding_uudecode_step()` function, denoting that
     * the 'begin' line has been found.
     */
    const UUDECODE_STATE_BEGIN: number;
    /**
     * State for the `g_mime_encoding_uudecode_step()` function, denoting that
     * the end of the UU encoded block has been found.
     */
    const UUDECODE_STATE_END: number;
    /**
     * Initial state for the `g_mime_encoding_uudecode_step()` function.
     */
    const UUDECODE_STATE_INIT: number;
    const UUDECODE_STATE_MASK: number;
    /**
     * State bit that denotes the yEnc filter has found the =ybegin line.
     */
    const YDECODE_STATE_BEGIN: number;
    /**
     * State bit that denotes yEnc filter has begun decoding the actual
     * yencoded content and will continue to do so until an =yend line is
     * found (or until there is nothing left to decode).
     */
    const YDECODE_STATE_DECODE: number;
    /**
     * State bit that denoates that `g_mime_ydecode_step()` has finished
     * decoding.
     */
    const YDECODE_STATE_END: number;
    /**
     * State bit that denotes the yEnc filter has reached an end-of-line.
     *
     * This state is for internal use only.
     */
    const YDECODE_STATE_EOLN: number;
    /**
     * State bit that denotes the yEnc filter has reached an escape
     * sequence.
     *
     * This state is for internal use only.
     */
    const YDECODE_STATE_ESCAPE: number;
    /**
     * Initial state for the `g_mime_ydecode_step()` function.
     */
    const YDECODE_STATE_INIT: number;
    /**
     * State bit that denotes the yEnc filter has found the =ypart
     * line. (Note: not all yencoded blocks have one)
     */
    const YDECODE_STATE_PART: number;
    /**
     * Initial state for the crc and pcrc state variables.
     */
    const YENCODE_CRC_INIT: number;
    /**
     * Initial state for the `g_mime_ydecode_step()` function.
     */
    const YENCODE_STATE_INIT: number;
    /**
     * Computes the best charset to use to encode this text buffer.
     * @param inbuf a UTF-8 text buffer
     * @param inlen input buffer length
     * @returns the charset name best suited for the input text or `null` if it is US-ASCII safe.
     */
    function charset_best(inbuf: string, inlen: number): string;
    /**
     * Attempts to find a canonical charset name for `charset`.
     *
     * Note: Will normally return the same value as
     * `g_mime_charset_iconv_name()` unless the system iconv does not use
     * the canonical ISO charset names (such as using ISO8859-1 rather
     * than the canonical form ISO-8859-1).
     * @param charset charset name
     * @returns a canonical charset name for `charset`.
     */
    function charset_canon_name(charset: string): string;
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     * @param charset charset name
     * @returns an iconv-friendly charset name for `charset`.
     */
    function charset_iconv_name(charset: string): string;
    /**
     * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
     * charset.
     * @param isocharset ISO-8859-# charset
     * @returns equivalent Windows charset.
     */
    function charset_iso_to_windows(isocharset: string): string;
    /**
     * Attempts to find a specific language code that is specific to
     * `charset`. Currently only handles CJK and Russian/Ukranian
     * charset->lang mapping. Everything else will return `null`.
     * @param charset charset name
     * @returns a language code that is specific to `charset`, or `null` on fail.
     */
    function charset_language(charset: string): string;
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     *
     * Note: This function is deprecated. Use `g_mime_locale_charset()`
     * instead.
     * @returns the user's locale charset (or iso-8859-1 by default).
     */
    function charset_locale_name(): string;
    /**
     * Initializes character set maps.
     *
     * Note: `g_mime_init()` calls this routine for you.
     */
    function charset_map_init(): void;
    /**
     * Frees internal lookup tables created in `g_mime_charset_map_init()`.
     */
    function charset_map_shutdown(): void;
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     *
     * Note: This function is deprecated. Use `g_mime_charset_iconv_name()`
     * instead.
     * @param charset charset name
     * @returns an iconv-friendly charset name for `charset`.
     */
    function charset_name(charset: string): string;
    /**
     * Checks that the GMime library version meets the requirements of the
     * required version.
     * @param major Minimum major version
     * @param minor Minimum minor version
     * @param micro Minimum micro version
     * @returns `true` if the requirement is met or `false` otherwise.
     */
    function check_version(major: number, minor: number, micro: number): boolean;
    /**
     * Gets the appropriate {@link GMime.ContentEncoding} enumeration value based
     * on the input string.
     * @param str a string representing a Content-Transfer-Encoding value
     * @returns the {@link GMime.ContentEncoding} specified by `str` or #GMIME_CONTENT_ENCODING_DEFAULT on error.
     */
    function content_encoding_from_string(str: string): ContentEncoding;
    /**
     * Gets the string value of the content encoding.
     * @param encoding a {@link GMime.ContentEncoding}
     * @returns the encoding type as a string or `null` on error. Available values for the encoding are: #GMIME_CONTENT_ENCODING_DEFAULT, #GMIME_CONTENT_ENCODING_7BIT, #GMIME_CONTENT_ENCODING_8BIT, #GMIME_CONTENT_ENCODING_BINARY, #GMIME_CONTENT_ENCODING_BASE64, #GMIME_CONTENT_ENCODING_QUOTEDPRINTABLE and #GMIME_CONTENT_ENCODING_UUENCODE.
     */
    function content_encoding_to_string(encoding: ContentEncoding | null): string;
    /**
     * Decodes a chunk of base64 encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded (which have been dumped in `outbuf`).
     */
    function encoding_base64_decode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Base64 encodes the input stream to the output stream. Call this
     * when finished encoding data with `g_mime_encoding_base64_encode_step()`
     * to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_base64_encode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Base64 encodes a chunk of data. Performs an 'encode step', only
     * encodes blocks of 3 characters to the output at a time, saves
     * left-over state in state and save (initialise to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_base64_encode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Decodes a block of quoted-printable encoded data. Performs a
     * 'decode step' on a chunk of QP encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded.
     */
    function encoding_quoted_decode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Quoted-printable encodes a block of text. Call this when finished
     * encoding data with `g_mime_encoding_quoted_encode_step()` to flush off
     * the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_quoted_encode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Quoted-printable encodes a block of text. Performs an 'encode
     * step', saves left-over state in state and save (initialise to -1 on
     * first invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_quoted_encode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
     * uuencoded data. Assumes the "begin mode filename" line has
     * been stripped off.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded.
     */
    function encoding_uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    /**
     * Uuencodes a chunk of data. Call this when finished encoding data
     * with `g_mime_encoding_uuencode_step()` to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_uuencode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Uuencodes a chunk of data. Performs an 'encode step', only encodes
     * blocks of 45 characters to the output at a time, saves left-over
     * state in `uubuf`, `state` and `save` (initialize to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output stream
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_uuencode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Initialize GMime's iconv cache. This *MUST* be called before any
     * gmime-iconv interfaces will work correctly.
     *
     * Note: this function is called for you by `g_mime_init()`.
     */
    function iconv_init(): void;
    /**
     * Allocates a new string buffer containing `str` in UTF-8.
     * @param str string in locale charset
     * @returns a new string buffer containing `str` converted to UTF-8.
     */
    function iconv_locale_to_utf8(str: string): string;
    /**
     * Allocates a new string buffer containing the first `n` bytes of
     * `str` converted to UTF-8.
     * @param str string in locale charset
     * @param n number of bytes to convert
     * @returns a new string buffer containing the first `n` bytes of `str` converted to UTF-8.
     */
    function iconv_locale_to_utf8_length(str: string, n: number): string;
    /**
     * Frees internal iconv caches created in `g_mime_iconv_init()`.
     *
     * Note: this function is called for you by `g_mime_shutdown()`.
     */
    function iconv_shutdown(): void;
    /**
     * Allocates a new string buffer containing `str` converted to the
     * user's locale charset.
     * @param str string in UTF-8 charset
     * @returns a new string buffer containing `str` converted to the user's locale charset.
     */
    function iconv_utf8_to_locale(str: string): string;
    /**
     * Allocates a new string buffer containing the first `n` bytes of
     * `str` converted to the user's locale charset.
     * @param str string in UTF-8 charset
     * @param n number of bytes to convert
     * @returns a new string buffer containing the first `n` bytes of `str` converted to the user's locale charset.
     */
    function iconv_utf8_to_locale_length(str: string, n: number): string;
    /**
     * Initializes GMime.
     *
     * Note: Calls `g_mime_charset_map_init()` and `g_mime_iconv_init()` as
     * well.
     * @param flags initialization flags
     */
    function init(flags: number): void;
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     * @returns the user's locale charset (or iso-8859-1 by default).
     */
    function locale_charset(): string;
    /**
     * Gets the user's locale language code (or `null` by default).
     * @returns the user's locale language code (or `null` by default).
     */
    function locale_language(): string;
    /**
     * Appends a reference to msgid to the list of references.
     * @param refs the address of a {@link GMime.References} list
     * @param msgid a message-id string
     */
    function references_append(refs: References, msgid: string): void;
    /**
     * Clears the {@link GMime.References} list and resets it to `null`.
     * @param refs address of a {@link GMime.References} list
     */
    function references_clear(refs: References): void;
    /**
     * Set a list of charsets for GMime to use as a hint for encoding and
     * decoding headers. The charset list should be in order of preference
     * (e.g. most preferred first, least preferred last).
     * @param charsets an array of user-preferred charsets
     */
    function set_user_charsets(charsets: string): void;
    /**
     * Frees internally allocated tables created in `g_mime_init()`. Also
     * calls `g_mime_charset_map_shutdown()` and `g_mime_iconv_shutdown()`.
     */
    function shutdown(): void;
    /**
     * Get the list of user-preferred charsets set with
     * `g_mime_set_user_charsets()`.
     * @returns an array of user-set charsets or `null` if none set.
     */
    function user_charsets(): string[];
    /**
     * Determines the best content encoding for the first `len` bytes of
     * `text`.
     * @param text text to encode
     * @param len text length
     * @returns a {@link GMime.ContentEncoding} that is determined to be the best encoding type for the specified block of text. ("best" in this particular case means smallest output size)
     */
    function utils_best_encoding(text: number, len: number): ContentEncoding;
    /**
     * Attempts to convert text in an unknown 8bit/multibyte charset into
     * UTF-8 by finding the charset which will convert the most bytes into
     * valid UTF-8 characters as possible. If no exact match can be found,
     * it will choose the best match and convert invalid byte sequences
     * into question-marks (?) in the returned string buffer.
     * @param text input text in   unknown 8bit/multibyte character set
     * @returns a UTF-8 string representation of `text`.
     */
    function utils_decode_8bit(text: Uint8Array | string): string;
    /**
     * Decodes a msg-id as defined by rfc822.
     * @param message_id string containing a message-id
     * @returns the addr-spec portion of the msg-id.
     */
    function utils_decode_message_id(message_id: string): string;
    /**
     * Generates a unique Message-Id.
     * @param fqdn Fully qualified domain name
     * @returns a unique string in an addr-spec format suitable for use as a Message-Id.
     */
    function utils_generate_message_id(fqdn: string): string;
    /**
     * Decodes the rfc822 date string and saves the GMT offset into
     * `tz_offset` if non-NULL.
     * @param str input date string
     * @returns the time_t representation of the date string specified by `str` or (time_t) %0 on error. If `tz_offset` is non-NULL, the value of the timezone offset will be stored.
     */
    function utils_header_decode_date(str: string): [number, number];
    /**
     * Decodes an rfc2047 encoded 'phrase' header.
     *
     * Note: See `g_mime_set_user_charsets()` for details on how charset
     * conversion is handled for unencoded 8bit text and/or wrongly
     * specified rfc2047 encoded-word tokens.
     * @param phrase header to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_phrase(phrase: string): string;
    /**
     * Decodes an rfc2047 encoded 'text' header.
     *
     * Note: See `g_mime_set_user_charsets()` for details on how charset
     * conversion is handled for unencoded 8bit text and/or wrongly
     * specified rfc2047 encoded-word tokens.
     * @param text header text to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_text(text: string): string;
    /**
     * Encodes a 'phrase' header according to the rules in rfc2047.
     * @param phrase phrase to encode
     * @returns the encoded 'phrase'. Useful for encoding internet addresses.
     */
    function utils_header_encode_phrase(phrase: string): string;
    /**
     * Encodes a 'text' header according to the rules in rfc2047.
     * @param text text to encode
     * @returns the encoded header. Useful for encoding headers like "Subject".
     */
    function utils_header_encode_text(text: string): string;
    /**
     * Folds a structured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header. WARNING: This function is obsolete. Use `g_mime_utils_structured_header_fold()` instead.
     */
    function utils_header_fold(header: string): string;
    /**
     * Allocates a string buffer containing the rfc822 formatted date
     * string represented by `time` and `tz_offset`.
     * @param date time_t date representation
     * @param tz_offset Timezone offset
     * @returns a valid string representation of the date.
     */
    function utils_header_format_date(date: number, tz_offset: number): string;
    /**
     * Quotes `string` as needed according to the rules in rfc2045.
     * @param str input string
     * @returns an allocated string containing the escaped and quoted (if needed to be) input string. The decision to quote the string is based on whether or not the input string contains any 'tspecials' as defined by rfc2045.
     */
    function utils_quote_string(str: string): string;
    /**
     * Folds a structured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_structured_header_fold(header: string): string;
    /**
     * Determines if `text` contains 8bit characters within the first `len`
     * bytes.
     * @param text text to check for 8bit chars
     * @param len text length
     * @returns `true` if the text contains 8bit characters or `false` otherwise.
     */
    function utils_text_is_8bit(text: number, len: number): boolean;
    /**
     * Unquotes and unescapes a string.
     * @param str input string
     */
    function utils_unquote_string(str: string): void;
    /**
     * Folds an unstructured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_unstructured_header_fold(header: string): string;
    /**
     * Performs a 'decode step' on a chunk of yEncoded data of length
     * `inlen` pointed to by `inbuf` and writes to `outbuf`. Assumes the =ybegin
     * and =ypart lines have already been stripped off.
     *
     * To get the crc32 value of the part, use #GMIME_YENCODE_CRC_FINAL
     * (`pcrc`). If there are more parts, you should reuse `crc` without
     * re-initializing. Once all parts have been decoded, you may get the
     * combined crc32 value of all the parts using #GMIME_YENCODE_CRC_FINAL
     * (`crc`).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state ydecode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes decoded.
     */
    function ydecode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    /**
     * Call this function when finished encoding data with
     * `g_mime_yencode_step()` to flush off the remaining state.
     *
     * #GMIME_YENCODE_CRC_FINAL (`pcrc`) will give you the crc32 of the
     * encoded "part". If there are more "parts" to encode, you should
     * re-use `crc` when encoding the next "parts" and then use
     * #GMIME_YENCODE_CRC_FINAL (`crc`) to get the combined crc32 value of
     * all the parts.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state yencode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes encoded.
     */
    function yencode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    /**
     * Performs an yEncode 'encode step' on a chunk of raw data of length
     * `inlen` pointed to by `inbuf` and writes to `outbuf`.
     *
     * `state` should be initialized to #GMIME_YENCODE_STATE_INIT before
     * beginning making the first call to this function. Subsequent calls
     * should reuse `state`.
     *
     * Along the same lines, `pcrc` and `crc` should be initialized to
     * #GMIME_YENCODE_CRC_INIT before using.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state yencode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes encoded.
     */
    function yencode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    /**
     * @gir-type Callback
     */
    interface HeaderForeachFunc {
        (name: string, value: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface HeaderWriter {
        (stream: Stream, name: string, value: string): number;
    }
    /**
     * @gir-type Callback
     */
    interface ObjectForeachFunc {
        (parent: Object, part: Object): void;
    }
    /**
     * @gir-type Callback
     */
    interface ParserHeaderRegexFunc {
        (parser: Parser, header: string, value: string, offset: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface PasswordRequestFunc {
        (ctx: CryptoContext, user_id: string, prompt_ctx: string, reprompt: boolean, response: Stream): boolean;
    }
    /**
     * Bit flags to enable charset and/or encoding scanning to make
     * educated guesses as to what the best charset and/or encodings to
     * use for the content passed through the filter.
     * @gir-type Flags
     */
    enum FilterBestFlags {
        /**
         * Enable best-charset detection.
         */
        CHARSET,
        /**
         * Enable best-encoding detection.
         */
        ENCODING,
    }

    /**
     * Possible errors that a {@link GMime.Signature} could have.
     * @gir-type Flags
     */
    enum SignatureError {
        /**
         * No error.
         */
        NONE,
        /**
         * Expired signature.
         */
        EXPSIG,
        /**
         * No public key found.
         */
        NO_PUBKEY,
        /**
         * Expired signature key.
         */
        EXPKEYSIG,
        /**
         * Revoked signature key.
         */
        REVKEYSIG,
        /**
         * Unsupported algorithm.
         */
        UNSUPP_ALGO,
    }

    namespace Certificate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing useful information about a certificate.
     * @gir-type Class
     */
    class Certificate extends GObject.Object {
        static $gtype: GObject.GType<Certificate>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Certificate.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        pubkey_algo: PubKeyAlgo;
        digest_algo: DigestAlgo;
        trust: CertificateTrust;
        issuer_serial: string;
        issuer_name: string;
        fingerprint: string;
        created: number;
        expires: number;
        keyid: string;
        email: string;
        name: string;

        // Constructors

        constructor(properties?: Partial<Certificate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Certificate;

        // Signals

        /** @signal */
        connect<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Certificate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Certificate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Certificate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the creation date of the certificate's key.
         * @returns the creation date of the certificate's key or %-1 if unknown.
         */
        get_created(): number;
        /**
         * Get the digest algorithm used by the certificate.
         * @returns the digest algorithm used by the certificate or #GMIME_DIGEST_ALGO_DEFAULT if unspecified.
         */
        get_digest_algo(): DigestAlgo;
        /**
         * Get the certificate's email.
         * @returns the certificate's email or `null` if unspecified.
         */
        get_email(): string;
        /**
         * Get the expiration date of the certificate's key.
         * @returns the expiration date of the certificate's key or %-1 if unknown.
         */
        get_expires(): number;
        /**
         * Get the certificate's key fingerprint.
         * @returns the certificate's key fingerprint or `null` if unspecified.
         */
        get_fingerprint(): string;
        /**
         * Get the certificate's issuer name.
         * @returns the certificate's issuer name or `null` if unspecified.
         */
        get_issuer_name(): string;
        /**
         * Get the certificate's issuer serial.
         * @returns the certificate's issuer serial or `null` if unspecified.
         */
        get_issuer_serial(): string;
        /**
         * Get the certificate's key id.
         * @returns the certificate's key id or `null` if unspecified.
         */
        get_key_id(): string;
        /**
         * Get the certificate's name.
         * @returns the certificate's name or `null` if unspecified.
         */
        get_name(): string;
        /**
         * Get the public-key algorithm used by the certificate.
         * @returns the public-key algorithm used by the certificate or #GMIME_PUBKEY_ALGO_DEFAULT if unspecified.
         */
        get_pubkey_algo(): PubKeyAlgo;
        /**
         * Get the certificate trust.
         * @returns the certificate trust.
         */
        get_trust(): CertificateTrust;
        /**
         * Set the creation date of the certificate's key.
         * @param created creation date
         */
        set_created(created: number): void;
        /**
         * Set the digest algorithm used by the certificate.
         * @param algo a {@link GMime.DigestAlgo}
         */
        set_digest_algo(algo: DigestAlgo | null): void;
        /**
         * Set the certificate's email.
         * @param email certificate's email
         */
        set_email(email: string): void;
        /**
         * Set the expiration date of the certificate's key.
         * @param expires expiration date
         */
        set_expires(expires: number): void;
        /**
         * Set the certificate's key fingerprint.
         * @param fingerprint fingerprint string
         */
        set_fingerprint(fingerprint: string): void;
        /**
         * Set the certificate's issuer name.
         * @param issuer_name certificate's issuer name
         */
        set_issuer_name(issuer_name: string): void;
        /**
         * Set the certificate's issuer serial.
         * @param issuer_serial certificate's issuer serial
         */
        set_issuer_serial(issuer_serial: string): void;
        /**
         * Set the certificate's key id.
         * @param key_id key id
         */
        set_key_id(key_id: string): void;
        /**
         * Set the certificate's name.
         * @param name certificate's name
         */
        set_name(name: string): void;
        /**
         * Set the public-key algorithm used by the certificate.
         * @param algo a {@link GMime.PubKeyAlgo}
         */
        set_pubkey_algo(algo: PubKeyAlgo | null): void;
        /**
         * Set the certificate trust.
         * @param trust a {@link GMime.CertificateTrust} value
         */
        set_trust(trust: CertificateTrust | null): void;
    }

    namespace CertificateList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of {@link GMime.Certificate} objects.
     * @gir-type Class
     */
    class CertificateList extends GObject.Object {
        static $gtype: GObject.GType<CertificateList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertificateList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        array: any[];

        // Constructors

        constructor(properties?: Partial<CertificateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CertificateList;

        // Signals

        /** @signal */
        connect<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CertificateList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a {@link GMime.Certificate} to the {@link GMime.CertificateList}.
         * @param cert a {@link GMime.Certificate}
         * @returns the index of the added {@link GMime.Certificate}.
         */
        add(cert: Certificate): number;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified {@link GMime.Certificate} is contained within
         * the {@link GMime.CertificateList}.
         * @param cert a {@link GMime.Certificate}
         * @returns `true` if the specified {@link GMime.Certificate} is contained within the specified {@link GMime.CertificateList} or `false` otherwise.
         */
        contains(cert: Certificate): boolean;
        /**
         * Gets the {@link GMime.Certificate} at the specified index.
         * @param index index of {@link GMime.Certificate} to get
         * @returns the {@link GMime.Certificate} at the specified index or `null` if the index is out of range.
         */
        get_certificate(index: number): Certificate;
        /**
         * Gets the index of the specified {@link GMime.Certificate} inside the
         * {@link GMime.CertificateList}.
         * @param cert a {@link GMime.Certificate}
         * @returns the index of the requested {@link GMime.Certificate} within the {@link GMime.CertificateList} or %-1 if it is not contained within the {@link GMime.CertificateList}.
         */
        index_of(cert: Certificate): number;
        /**
         * Inserts a {@link GMime.Certificate} into the {@link GMime.CertificateList} at the specified
         * index.
         * @param index index to insert at
         * @param cert a {@link GMime.Certificate}
         */
        insert(index: number, cert: Certificate): void;
        /**
         * Gets the length of the list.
         * @returns the number of {@link GMime.Certificate} objects in the list.
         */
        length(): number;
        /**
         * Removes a {@link GMime.Certificate} from the {@link GMime.CertificateList}.
         * @param cert a {@link GMime.Certificate}
         * @returns `true` if the specified {@link GMime.Certificate} was removed or `false` otherwise.
         */
        remove(cert: Certificate): boolean;
        /**
         * Removes a {@link GMime.Certificate} from the {@link GMime.CertificateList} at the specified
         * index.
         * @param index index to remove
         * @returns `true` if an {@link GMime.Certificate} was removed or `false` otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the {@link GMime.Certificate} at the specified index to `cert`.
         * @param index index of {@link GMime.Certificate} to set
         * @param cert a {@link GMime.Certificate}
         */
        set_certificate(index: number, cert: Certificate): void;
    }

    namespace ContentDisposition {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A data structure representing a Content-Disposition.
     * @gir-type Class
     */
    class ContentDisposition extends GObject.Object {
        static $gtype: GObject.GType<ContentDisposition>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentDisposition.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        disposition: string;

        // Constructors

        constructor(properties?: Partial<ContentDisposition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContentDisposition;

        static new_from_string(str: string): ContentDisposition;

        // Signals

        /** @signal */
        connect<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDisposition.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDisposition.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentDisposition.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the disposition or `null` on fail.
         * @returns the disposition string which is probably one of #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE.
         */
        get_disposition(): string;
        /**
         * Gets the parameter value specified by `name` if it's available.
         * @param name parameter name
         * @returns the value of the requested parameter or `null` if the parameter is not set. If the parameter is set, the returned string will be in UTF-8.
         */
        get_parameter(name: string): string;
        /**
         * Gets the Content-Disposition parameter list.
         * @returns the list of {@link GMime.Param}'s set on `disposition`.
         */
        get_params(): Param;
        /**
         * Determines if a Content-Disposition has a value of "attachment".
         * @returns `true` if the value matches "attachment", otherwise `false`.
         */
        is_attachment(): boolean;
        /**
         * Sets the disposition to `value` which may be one of
         * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
         * your choice, any other string which would indicate how the MIME
         * part should be displayed by the MUA.
         * @param value disposition value
         */
        set_disposition(value: string): void;
        /**
         * Sets a parameter on the Content-Disposition.
         *
         * Note: The `name` should be in US-ASCII while the `value` should be in
         * UTF-8.
         * @param name parameter name
         * @param value parameter value
         */
        set_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Disposition's parameter list.
         * @param params a list of {@link GMime.Param} objects
         */
        set_params(params: Param): void;
        /**
         * Allocates a string buffer containing the Content-Disposition header
         * represented by the disposition object `disposition`.
         * @param fold fold header if needed
         * @returns a string containing the disposition header
         */
        to_string(fold: boolean): string;
    }

    namespace ContentType {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A data structure representing a Content-Type.
     * @gir-type Class
     */
    class ContentType extends GObject.Object {
        static $gtype: GObject.GType<ContentType>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentType.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        type: string;
        subtype: string;

        // Constructors

        constructor(properties?: Partial<ContentType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string, subtype: string): ContentType;

        static new_from_string(str: string): ContentType;

        // Signals

        /** @signal */
        connect<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentType.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentType.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentType.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the Content-Type's media sub-type.
         * @returns the Content-Type's media sub-type.
         */
        get_media_subtype(): string;
        /**
         * Gets the Content-Type's media type.
         * @returns the Content-Type's media type.
         */
        get_media_type(): string;
        /**
         * Gets the parameter value specified by `name` if it's available.
         * @param name parameter name (aka attribute)
         * @returns the value of the requested parameter or `null` if the parameter is not set. If the parameter is set, the returned string will be in UTF-8.
         */
        get_parameter(name: string): string;
        /**
         * Gets the Content-Type's parameter list.
         * @returns the Content-Type's parameter list.
         */
        get_params(): Param;
        /**
         * Compares the given type and subtype with that of the given mime
         * type object.
         * @param type MIME type to compare against
         * @param subtype MIME subtype to compare against
         * @returns TRUE if the MIME types match or FALSE otherwise. You may use "*" in place of `type` and/or `subtype` as a wilcard.
         */
        is_type(type: string, subtype: string): boolean;
        /**
         * Sets the Content-Type's media subtype.
         * @param subtype media subtype
         */
        set_media_subtype(subtype: string): void;
        /**
         * Sets the Content-Type's media type.
         * @param type media type
         */
        set_media_type(type: string): void;
        /**
         * Sets a parameter on the Content-Type.
         *
         * Note: The `name` should be in US-ASCII while the `value` should be in
         * UTF-8.
         * @param name parameter name (aka attribute)
         * @param value parameter value
         */
        set_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Type's parameter list.
         * @param params a list of {@link GMime.Param} objects
         */
        set_params(params: Param): void;
        /**
         * Allocates a string buffer containing the type and subtype defined
         * by the `mime_type`.
         * @returns an allocated string containing the type and subtype of the content-type in the format: type/subtype.
         */
        to_string(): string;
    }

    namespace CryptoContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A crypto context for use with MIME.
     * @gir-type Class
     */
    class CryptoContext extends GObject.Object {
        static $gtype: GObject.GType<CryptoContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CryptoContext.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        request_passwd: PasswordRequestFunc;

        // Constructors

        constructor(properties?: Partial<CryptoContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CryptoContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CryptoContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CryptoContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting
         * cleartext to the output stream.
         *
         * If the encrypted input stream was also signed, the returned
         * {@link GMime.DecryptResult} will have a non-`null` list of signatures, each with a
         * {@link GMime.SignatureStatus} (among other details about each signature).
         *
         * On success, the returned {@link GMime.DecryptResult} will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @virtual
         */
        vfunc_decrypt(istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Decrypts the ciphertext input stream using a specific session key
         * and writes the resulting cleartext to the output stream. If
         * `session_key` is non-`null`, but is not valid for the ciphertext, the
         * decryption will fail even if other available secret key material
         * may have been able to decrypt it. If `session_key` is `null`, this
         * does the same thing as `g_mime_crypto_context_decrypt()`.
         *
         * When non-`null`, `session_key` should be a `null`-terminated string,
         * such as the one returned by `g_mime_decrypt_result_get_session_key()`
         * from a previous decryption.
         *
         * If the encrypted input stream was also signed, the returned
         * {@link GMime.DecryptResult} will have a non-`null` list of signatures, each with a
         * {@link GMime.SignatureStatus} (among other details about each signature).
         *
         * On success, the returned {@link GMime.DecryptResult} will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param session_key session key to use
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @virtual
         */
        vfunc_decrypt_session(session_key: string, istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Gets the digest id based on the digest name.
         * @param name digest name
         * @virtual
         */
        vfunc_digest_id(name: string): DigestAlgo;
        /**
         * Gets the digest name based on the digest id `digest`.
         * @param digest digest id
         * @virtual
         */
        vfunc_digest_name(digest: DigestAlgo): string;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid key id (or email address) to use when signing (assuming `sign` is `true`)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipient key ids   and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         * @virtual
         */
        vfunc_encrypt(
            sign: boolean,
            userid: string,
            digest: DigestAlgo,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         * @param keys an array of key ids
         * @param ostream output stream
         * @virtual
         */
        vfunc_export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         * @virtual
         */
        vfunc_get_encryption_protocol(): string;
        /**
         * Gets the key exchange protocol for the crypto context.
         * @virtual
         */
        vfunc_get_key_exchange_protocol(): string;
        /**
         * Gets whether or not the `ctx` is configured to retrieve a session
         * key during decryption (see `g_mime_decrypt_result_get_session_key()`).
         * @virtual
         */
        vfunc_get_retrieve_session_key(): boolean;
        /**
         * Gets the signature protocol for the crypto context.
         * @virtual
         */
        vfunc_get_signature_protocol(): string;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         * @virtual
         */
        vfunc_import_keys(istream: Stream): number;
        /**
         * Configures whether `ctx` should produce a session key during future
         * decryption operations (see
         * `g_mime_decrypt_result_get_session_key()`).
         * @param retrieve_session_key whether to retrieve session keys during decryption
         * @virtual
         */
        vfunc_set_retrieve_session_key(retrieve_session_key: boolean): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param userid private key to use to sign the stream
         * @param digest digest algorithm to use
         * @param istream input stream
         * @param ostream output stream
         * @virtual
         */
        vfunc_sign(userid: string, digest: DigestAlgo, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream,
         * you should pass `null` as the sigstream parameter. Otherwise
         * `sigstream` is assumed to be the signature stream and is used to
         * verify the integirity of the `istream`.
         * @param digest digest algorithm used, if known
         * @param istream input stream
         * @param sigstream optional detached-signature stream
         * @virtual
         */
        vfunc_verify(digest: DigestAlgo, istream: Stream, sigstream: Stream): SignatureList;

        // Methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting
         * cleartext to the output stream.
         *
         * If the encrypted input stream was also signed, the returned
         * {@link GMime.DecryptResult} will have a non-`null` list of signatures, each with a
         * {@link GMime.SignatureStatus} (among other details about each signature).
         *
         * On success, the returned {@link GMime.DecryptResult} will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @returns a {@link GMime.DecryptResult} on success or `null` on error.
         */
        decrypt(istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Decrypts the ciphertext input stream using a specific session key
         * and writes the resulting cleartext to the output stream. If
         * `session_key` is non-`null`, but is not valid for the ciphertext, the
         * decryption will fail even if other available secret key material
         * may have been able to decrypt it. If `session_key` is `null`, this
         * does the same thing as `g_mime_crypto_context_decrypt()`.
         *
         * When non-`null`, `session_key` should be a `null`-terminated string,
         * such as the one returned by `g_mime_decrypt_result_get_session_key()`
         * from a previous decryption.
         *
         * If the encrypted input stream was also signed, the returned
         * {@link GMime.DecryptResult} will have a non-`null` list of signatures, each with a
         * {@link GMime.SignatureStatus} (among other details about each signature).
         *
         * On success, the returned {@link GMime.DecryptResult} will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param session_key session key to use
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @returns a {@link GMime.DecryptResult} on success or `null` on error.
         */
        decrypt_session(session_key: string, istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Gets the digest id based on the digest name.
         * @param name digest name
         * @returns the equivalent digest id or #GMIME_DIGEST_ALGO_DEFAULT on fail.
         */
        digest_id(name: string): DigestAlgo;
        /**
         * Gets the digest name based on the digest id `digest`.
         * @param digest digest id
         * @returns the equivalent digest name or `null` on fail.
         */
        digest_name(digest: DigestAlgo | null): string;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid key id (or email address) to use when signing (assuming `sign` is `true`)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipient key ids   and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         * @returns %0 on success or %-1 on fail.
         */
        encrypt(
            sign: boolean,
            userid: string,
            digest: DigestAlgo | null,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         * @param keys an array of key ids
         * @param ostream output stream
         * @returns %0 on success or %-1 on fail.
         */
        export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         * @returns the encryption protocol or `null` if not supported.
         */
        get_encryption_protocol(): string;
        /**
         * Gets the key exchange protocol for the crypto context.
         * @returns the key exchange protocol or `null` if not supported.
         */
        get_key_exchange_protocol(): string;
        /**
         * Gets whether or not the `ctx` is configured to retrieve a session
         * key during decryption (see `g_mime_decrypt_result_get_session_key()`).
         * @returns `true` if the `ctx` is configured to retrieve a session key or `false` otherwise.
         */
        get_retrieve_session_key(): boolean;
        /**
         * Gets the signature protocol for the crypto context.
         * @returns the signature protocol or `null` if not supported.
         */
        get_signature_protocol(): string;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         * @returns %0 on success or %-1 on fail.
         */
        import_keys(istream: Stream): number;
        /**
         * Configures whether `ctx` should produce a session key during future
         * decryption operations (see
         * `g_mime_decrypt_result_get_session_key()`).
         * @param retrieve_session_key whether to retrieve session keys during decryption
         * @returns %0 on success or %-1 on fail.
         */
        set_retrieve_session_key(retrieve_session_key: boolean): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param userid private key to use to sign the stream
         * @param digest digest algorithm to use
         * @param istream input stream
         * @param ostream output stream
         * @returns the {@link GMime.DigestAlgo} used on success (useful if `digest` is specified as #GMIME_DIGEST_ALGO_DEFAULT) or %-1 on fail.
         */
        sign(userid: string, digest: DigestAlgo | null, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream,
         * you should pass `null` as the sigstream parameter. Otherwise
         * `sigstream` is assumed to be the signature stream and is used to
         * verify the integirity of the `istream`.
         * @param digest digest algorithm used, if known
         * @param istream input stream
         * @param sigstream optional detached-signature stream
         * @returns a {@link GMime.SignatureList} object containing the status of each signature or `null` on error.
         */
        verify(digest: DigestAlgo | null, istream: Stream, sigstream: Stream): SignatureList;
    }

    namespace DataWrapper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A wrapper for a stream which may be encoded.
     * @gir-type Class
     */
    class DataWrapper extends GObject.Object {
        static $gtype: GObject.GType<DataWrapper>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataWrapper.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        encoding: ContentEncoding;
        stream: Stream;

        // Constructors

        constructor(properties?: Partial<DataWrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DataWrapper;

        static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper;

        // Signals

        /** @signal */
        connect<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataWrapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataWrapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Writes the raw (decoded) data to the output stream.
         * @param stream output stream
         * @virtual
         */
        vfunc_write_to_stream(stream: Stream): number;

        // Methods

        /**
         * Gets the encoding type of the stream wrapped by `wrapper`.
         * @returns the encoding type of the internal stream.
         */
        get_encoding(): ContentEncoding;
        /**
         * Gets a reference to the stream wrapped by `wrapper`.
         * @returns a reference to the internal stream.
         */
        get_stream(): Stream;
        /**
         * Sets the encoding type of the internal stream.
         * @param encoding encoding
         */
        set_encoding(encoding: ContentEncoding | null): void;
        /**
         * Replaces the wrapper's internal stream with `stream`. Don't forget,
         * if `stream` is not of the same encoding as the old stream, you'll
         * want to call `g_mime_data_wrapper_set_encoding()` as well.
         *
         * Note: caller is responsible for its own reference on
         * `stream`.
         * @param stream a {@link GMime.Stream}
         */
        set_stream(stream: Stream): void;
        /**
         * Writes the raw (decoded) data to the output stream.
         * @param stream output stream
         * @returns the number of bytes written or %-1 on failure.
         */
        write_to_stream(stream: Stream): number;
    }

    namespace DecryptResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing the results from decrypting an encrypted stream.
     * @gir-type Class
     */
    class DecryptResult extends GObject.Object {
        static $gtype: GObject.GType<DecryptResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DecryptResult.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        recipients: CertificateList;
        signatures: SignatureList;
        cipher: CipherAlgo;
        mdc: DigestAlgo;
        session_key: string;

        // Constructors

        constructor(properties?: Partial<DecryptResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DecryptResult;

        // Signals

        /** @signal */
        connect<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DecryptResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DecryptResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DecryptResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the cipher algorithm used.
         * @returns the cipher algorithm used.
         */
        get_cipher(): CipherAlgo;
        /**
         * Get the mdc digest algorithm used.
         * @returns the mdc digest algorithm used.
         */
        get_mdc(): DigestAlgo;
        /**
         * Gets the list of certificates that the stream had been encrypted to.
         * @returns a {@link GMime.CertificateList}.
         */
        get_recipients(): CertificateList;
        /**
         * Get the session_key used for this decryption, if the underlying
         * crypto context is capable of and (configured to) retrieve session
         * keys during decryption.  See, for example,
         * `g_mime_crypto_context_set_retrieve_session_key()`.
         * @returns the session_key digest algorithm used, or NULL if no session key was requested or found.
         */
        get_session_key(): string;
        /**
         * Gets a list of signatures if the encrypted stream had also been signed.
         * @returns a {@link GMime.SignatureList} or `null` if the stream was not signed.
         */
        get_signatures(): SignatureList;
        /**
         * Set the cipher algorithm used.
         * @param cipher a {@link GMime.CipherAlgo}
         */
        set_cipher(cipher: CipherAlgo | null): void;
        /**
         * Set the mdc digest algorithm used.
         * @param mdc a {@link GMime.DigestAlgo}
         */
        set_mdc(mdc: DigestAlgo | null): void;
        /**
         * Sets the list of certificates that the stream had been encrypted to.
         * @param recipients A {@link GMime.CertificateList}
         */
        set_recipients(recipients: CertificateList): void;
        /**
         * Set the session_key to be returned by this decryption result.
         * @param session_key a pointer to a null-terminated string representing the session key
         */
        set_session_key(session_key: string): void;
        /**
         * Sets the list of signatures.
         * @param signatures A {@link GMime.SignatureList}
         */
        set_signatures(signatures: SignatureList): void;
    }

    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base class for filters used by {@link GMime.StreamFilter}.
     * @gir-type Class
     */
    abstract class Filter extends GObject.Object {
        static $gtype: GObject.GType<Filter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Filter.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        outreal: Uint8Array;
        outbuf: string;
        outptr: string;
        outsize: number;
        outpre: number;
        backbuf: string;
        backsize: number;
        backlen: number;

        // Constructors

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Completes the filtering.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         * @virtual
         */
        vfunc_complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Copies `filter` into a new GMimeFilter object.
         * @virtual
         */
        vfunc_copy(): Filter;
        /**
         * Filters the input data and writes it to `out`.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         * @virtual
         */
        vfunc_filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the filter.
         * @virtual
         */
        vfunc_reset(): void;

        // Methods

        /**
         * Sets number of bytes backed up on the input, new calls replace
         * previous ones
         * @param data data to backup
         */
        backup(data: Uint8Array | string): void;
        /**
         * Completes the filtering.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Copies `filter` into a new GMimeFilter object.
         * @returns a duplicate of `filter`.
         */
        copy(): Filter;
        /**
         * Filters the input data and writes it to `out`.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the filter.
         */
        reset(): void;
        /**
         * Ensure this much size is available for filter output (if required)
         * @param size requested size for the output buffer
         * @param keep `true` if existing data in the output buffer should be kept
         */
        set_size(size: number, keep: boolean): void;
    }

    namespace FilterBasic {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A basic encoder/decoder filter for the MIME encodings.
     * @gir-type Class
     */
    class FilterBasic extends Filter {
        static $gtype: GObject.GType<FilterBasic>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterBasic.SignalSignatures;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterBasic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encoding: ContentEncoding, encode: boolean): FilterBasic;

        // Signals

        /** @signal */
        connect<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBasic.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBasic.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterBasic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterBest {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for calculating the best encoding and/or charset to encode
     * the data passed through it.
     * @gir-type Class
     */
    class FilterBest extends Filter {
        static $gtype: GObject.GType<FilterBest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterBest.SignalSignatures;

        // Fields

        parent_object: Filter;
        flags: FilterBestFlags;
        count0: number;
        count8: number;
        total: number;
        maxline: number;
        linelen: number;
        frombuf: Uint8Array;
        fromlen: number;
        hadfrom: number;
        startline: number;
        midline: number;

        // Constructors

        constructor(properties?: Partial<FilterBest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: FilterBestFlags): FilterBest;

        // Signals

        /** @signal */
        connect<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterBest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calculates the best charset for encoding the stream filtered
         * through the `best` filter.
         * @returns a pointer to a string containing the name of the charset best suited for the text filtered through `best`.
         */
        charset(): string;
        /**
         * Calculates the most efficient Content-Transfer-Encoding for the
         * stream filtered through `best` that fits within the encoding
         * `constraint`.
         * @param constraint a {@link GMime.EncodingConstraint}
         * @returns the best encoding for the stream filtered by `best`.
         */
        encoding(constraint: EncodingConstraint | null): ContentEncoding;
    }

    namespace FilterCRLF {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert between line-ending formats and encode/decode
     * lines beginning with a '.'.
     * @gir-type Class
     */
    class FilterCRLF extends Filter {
        static $gtype: GObject.GType<FilterCRLF>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterCRLF.SignalSignatures;

        // Fields

        parent_object: Filter;
        encode: boolean;
        dots: boolean;
        saw_cr: boolean;
        saw_lf: boolean;
        saw_dot: boolean;

        // Constructors

        constructor(properties?: Partial<FilterCRLF.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encode: boolean, dots: boolean): FilterCRLF;

        // Signals

        /** @signal */
        connect<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCRLF.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCRLF.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterCRLF.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterCharset {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert between charsets.
     * @gir-type Class
     */
    class FilterCharset extends Filter {
        static $gtype: GObject.GType<FilterCharset>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterCharset.SignalSignatures;

        // Fields

        parent_object: Filter;
        from_charset: string;
        to_charset: string;

        // Constructors

        constructor(properties?: Partial<FilterCharset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](from_charset: string, to_charset: string): FilterCharset;

        // Signals

        /** @signal */
        connect<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCharset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCharset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterCharset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterEnriched {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for converting text/enriched or text/richtext textual
     * streams into text/html.
     * @gir-type Class
     */
    class FilterEnriched extends Filter {
        static $gtype: GObject.GType<FilterEnriched>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterEnriched.SignalSignatures;

        // Fields

        parent_object: Filter;
        flags: number;
        nofill: number;

        // Constructors

        constructor(properties?: Partial<FilterEnriched.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number): FilterEnriched;

        // Signals

        /** @signal */
        connect<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterEnriched.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterEnriched.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterEnriched.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterFrom {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for armoring or escaping lines beginning with "From ".
     * @gir-type Class
     */
    class FilterFrom extends Filter {
        static $gtype: GObject.GType<FilterFrom>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterFrom.SignalSignatures;

        // Fields

        parent_object: Filter;
        mode: FilterFromMode;
        midline: boolean;

        // Constructors

        constructor(properties?: Partial<FilterFrom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mode: FilterFromMode): FilterFrom;

        // Signals

        /** @signal */
        connect<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterFrom.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterFrom.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterFrom.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterGZip {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for compresing or decompressing a gzip stream.
     * @gir-type Class
     */
    class FilterGZip extends Filter {
        static $gtype: GObject.GType<FilterGZip>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterGZip.SignalSignatures;

        // Fields

        parent_object: Filter;
        priv: any;
        mode: FilterGZipMode;
        level: number;

        // Constructors

        constructor(properties?: Partial<FilterGZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mode: FilterGZipMode, level: number): FilterGZip;

        // Signals

        /** @signal */
        connect<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterGZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterGZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterHTML {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for converting text/plain into text/html.
     * @gir-type Class
     */
    class FilterHTML extends Filter {
        static $gtype: GObject.GType<FilterHTML>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterHTML.SignalSignatures;

        // Fields

        parent_object: Filter;
        scanner: any;
        flags: number;
        colour: number;
        column: number;
        pre_open: number;

        // Constructors

        constructor(properties?: Partial<FilterHTML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number, colour: number): FilterHTML;

        // Signals

        /** @signal */
        connect<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterHTML.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterHTML.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterHTML.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterMd5 {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for calculating the MD5 checksum of a stream.
     * @gir-type Class
     */
    class FilterMd5 extends Filter {
        static $gtype: GObject.GType<FilterMd5>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterMd5.SignalSignatures;

        // Fields

        parent_object: Filter;
        priv: any;

        // Constructors

        constructor(properties?: Partial<FilterMd5.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterMd5;

        // Signals

        /** @signal */
        connect<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterMd5.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterMd5.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterMd5.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Outputs the md5 digest into `digest`.
         * @param digest output buffer of at least 16 bytes
         */
        get_digest(digest: number): void;
    }

    namespace FilterStrip {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for stripping whitespace from the end of lines.
     * @gir-type Class
     */
    class FilterStrip extends Filter {
        static $gtype: GObject.GType<FilterStrip>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterStrip.SignalSignatures;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterStrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterStrip;

        // Signals

        /** @signal */
        connect<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStrip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStrip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterStrip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterWindows {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for detecting whether or not a text stream claimed to be
     * iso-8859-X is really that charset or if it is really a
     * Windows-CP125x charset.
     * @gir-type Class
     */
    class FilterWindows extends Filter {
        static $gtype: GObject.GType<FilterWindows>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterWindows.SignalSignatures;

        // Fields

        parent_object: Filter;
        is_windows: boolean;
        claimed_charset: string;

        // Constructors

        constructor(properties?: Partial<FilterWindows.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](claimed_charset: string): FilterWindows;

        // Signals

        /** @signal */
        connect<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterWindows.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterWindows.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterWindows.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determines whether or not a Windows-CP125# charset has been
         * detected so far.
         * @returns `true` if the filtered stream has been detected to contain Windows-CP125# characters or `false` otherwise.
         */
        is_windows_charset(): boolean;
        /**
         * Figures out the real charset that the text is encoded in based on whether or not Windows-CP125# characters were found.
         * @returns a const string pointer to the claimed charset if filtered text stream was found not to contain any Windows-CP125# characters or the proper Windows-CP125# charset.
         */
        real_charset(): string;
    }

    namespace FilterYenc {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for yEncoding or yDecoding a stream.
     * @gir-type Class
     */
    class FilterYenc extends Filter {
        static $gtype: GObject.GType<FilterYenc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterYenc.SignalSignatures;

        // Fields

        parent_object: Filter;
        encode: boolean;
        part: number;
        state: number;
        pcrc: number;
        crc: number;

        // Constructors

        constructor(properties?: Partial<FilterYenc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encode: boolean): FilterYenc;

        // Signals

        /** @signal */
        connect<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterYenc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterYenc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterYenc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the computed crc or (guint32) -1 on fail.
         * @returns the computed crc or (guint32) -1 on fail.
         */
        get_crc(): number;
        /**
         * Get the computed part crc or (guint32) -1 on fail.
         * @returns the computed part crc or (guint32) -1 on fail.
         */
        get_pcrc(): number;
        /**
         * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
         * @param crc crc32
         */
        set_crc(crc: number): void;
        /**
         * Sets the current state of the yencoder/ydecoder
         * @param state encode/decode state
         */
        set_state(state: number): void;
    }

    namespace GpgContext {
        // Signal signatures
        interface SignalSignatures extends CryptoContext.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends CryptoContext.ConstructorProps {}
    }

    /**
     * A GnuPG crypto context.
     * @gir-type Class
     */
    class GpgContext extends CryptoContext {
        static $gtype: GObject.GType<GpgContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GpgContext.SignalSignatures;

        // Fields

        parent_object: CryptoContext;
        auto_key_retrieve: boolean;
        always_trust: boolean;
        use_agent: boolean;
        path: string;
        retrieve_session_key: boolean;
        version: number;

        // Constructors

        constructor(properties?: Partial<GpgContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpgContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpgContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GpgContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whther or not gpg should always trust keys when encrypting.
         * @returns `true` if gpg should always trust keys when encrypting or `false` otherwise.
         */
        get_always_trust(): boolean;
        /**
         * Gets whether or not gpg should auto-retrieve keys from a keyserver
         * when verifying signatures.
         * @returns `true` if gpg should auto-retrieve keys from a keyserver or `false` otherwise.
         */
        get_auto_key_retrieve(): boolean;
        /**
         * Gets whether or not gpg should attempt to use the gpg-agent when
         * requesting credentials.
         * @returns `true` if the gpg-agent should be used when requesting credentials or `false` otherwise.
         */
        get_use_agent(): boolean;
        /**
         * Sets whether or not gpg should always trust keys when encrypting.
         * @param always_trust `true` if gpg should always trust keys when encrypting
         */
        set_always_trust(always_trust: boolean): void;
        /**
         * Sets whether or not gpg should auto-retrieve keys from a keyserver
         * when verifying signatures.
         * @param auto_key_retrieve `true` if gpg should auto-retrieve keys from a keys server
         */
        set_auto_key_retrieve(auto_key_retrieve: boolean): void;
        /**
         * Sets whether or not gpg should attempt to use the gpg-agent when
         * requesting credentials.
         * @param use_agent use agent flag
         */
        set_use_agent(use_agent: boolean): void;
    }

    namespace InternetAddress {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An RFC 2822 Address object.
     * @gir-type Class
     */
    abstract class InternetAddress extends GObject.Object {
        static $gtype: GObject.GType<InternetAddress>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InternetAddress.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        name: string;

        // Constructors

        constructor(properties?: Partial<InternetAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param flags
         * @param linelen
         * @param out
         * @virtual
         */
        vfunc_to_string(flags: number, linelen: number, out: GLib.String): void;

        // Methods

        /**
         * Gets the display name of the {@link GMime.InternetAddress}.
         * @returns the name of the mailbox or group in a form suitable for display if available or `null` otherwise. If the name is available, the returned string will be in UTF-8.
         */
        get_name(): string;
        /**
         * Set the display name of the {@link GMime.InternetAddress}.
         *
         * Note: The `name` string should be in UTF-8.
         * @param name the display name for the address group or mailbox
         */
        set_name(name: string): void;
        /**
         * Allocates a string containing the contents of the {@link GMime.InternetAddress}
         * object.
         * @param encode `true` if the address should be rfc2047 encoded
         * @returns the {@link GMime.InternetAddress} object as an allocated string in rfc822 format.
         */
        to_string(encode: boolean): string;
    }

    namespace InternetAddressGroup {
        // Signal signatures
        interface SignalSignatures extends InternetAddress.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends InternetAddress.ConstructorProps {}
    }

    /**
     * An RFC 2822 Group address.
     * @gir-type Class
     */
    class InternetAddressGroup extends InternetAddress {
        static $gtype: GObject.GType<InternetAddressGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InternetAddressGroup.SignalSignatures;

        // Fields

        parent_object: InternetAddress;
        members: InternetAddressList;

        // Constructors

        constructor(properties?: Partial<InternetAddressGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): InternetAddressGroup;

        // Signals

        /** @signal */
        connect<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressGroup.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a contact to the internet address group.
         * @param member a {@link GMime.InternetAddress}
         * @returns the index of the newly added member.
         */
        add_member(member: InternetAddress): number;
        /**
         * Gets the {@link GMime.InternetAddressList} containing the group members of an
         * rfc822 group address.
         * @returns a {@link GMime.InternetAddressList} containing the members of `group`.
         */
        get_members(): InternetAddressList;
        /**
         * Set the members of the internet address group.
         * @param members a {@link GMime.InternetAddressList}
         */
        set_members(members: InternetAddressList): void;
    }

    namespace InternetAddressList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of {@link GMime.InternetAddress} objects.
     * @gir-type Class
     */
    class InternetAddressList extends GObject.Object {
        static $gtype: GObject.GType<InternetAddressList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InternetAddressList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        array: any[];

        // Constructors

        constructor(properties?: Partial<InternetAddressList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternetAddressList;

        // Signals

        /** @signal */
        connect<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressList.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Construct a list of internet addresses from the given string.
         * @param str a string containing internet addresses
         */
        static parse_string(str: string): InternetAddressList;

        // Methods

        /**
         * Adds an {@link GMime.InternetAddress} to the {@link GMime.InternetAddressList}.
         * @param ia a {@link GMime.InternetAddress}
         * @returns the index of the added {@link GMime.InternetAddress}.
         */
        add(ia: InternetAddress): number;
        /**
         * Adds all of the addresses in `append` to `list`.
         * @param append a {@link GMime.InternetAddressList}
         */
        append(append: InternetAddressList): void;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified {@link GMime.InternetAddress} is contained
         * within the {@link GMime.InternetAddressList}.
         * @param ia a {@link GMime.InternetAddress}
         * @returns `true` if the specified {@link GMime.InternetAddress} is contained within the specified {@link GMime.InternetAddressList} or `false` otherwise.
         */
        contains(ia: InternetAddress): boolean;
        /**
         * Gets the {@link GMime.InternetAddress} at the specified index.
         * @param index index of {@link GMime.InternetAddress} to get
         * @returns the {@link GMime.InternetAddress} at the specified index or `null` if the index is out of range.
         */
        get_address(index: number): InternetAddress;
        /**
         * Gets the index of the specified {@link GMime.InternetAddress} inside the
         * {@link GMime.InternetAddressList}.
         * @param ia a {@link GMime.InternetAddress}
         * @returns the index of the requested {@link GMime.InternetAddress} within the {@link GMime.InternetAddressList} or %-1 if it is not contained within the {@link GMime.InternetAddressList}.
         */
        index_of(ia: InternetAddress): number;
        /**
         * Inserts an {@link GMime.InternetAddress} into the {@link GMime.InternetAddressList} at the
         * specified index.
         * @param index index to insert at
         * @param ia a {@link GMime.InternetAddress}
         */
        insert(index: number, ia: InternetAddress): void;
        /**
         * Gets the length of the list.
         * @returns the number of {@link GMime.InternetAddress} objects in the list.
         */
        length(): number;
        /**
         * Inserts all of the addresses in `prepend` to the beginning of `list`.
         * @param prepend a {@link GMime.InternetAddressList}
         */
        prepend(prepend: InternetAddressList): void;
        /**
         * Removes an {@link GMime.InternetAddress} from the {@link GMime.InternetAddressList}.
         * @param ia a {@link GMime.InternetAddress}
         * @returns `true` if the specified {@link GMime.InternetAddress} was removed or `false` otherwise.
         */
        remove(ia: InternetAddress): boolean;
        /**
         * Removes an {@link GMime.InternetAddress} from the {@link GMime.InternetAddressList} at the
         * specified index.
         * @param index index to remove
         * @returns `true` if an {@link GMime.InternetAddress} was removed or `false` otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the {@link GMime.InternetAddress} at the specified index to `ia`.
         * @param index index of {@link GMime.InternetAddress} to set
         * @param ia a {@link GMime.InternetAddress}
         */
        set_address(index: number, ia: InternetAddress): void;
        /**
         * Allocates a string buffer containing the rfc822 formatted addresses
         * in `list`.
         * @param encode `true` if the address should be rfc2047 encoded
         * @returns a string containing the list of addresses in rfc822 format or `null` if no addresses are contained in the list.
         */
        to_string(encode: boolean): string;
        /**
         * Writes the rfc2047-encoded rfc822 formatted addresses in `list` to
         * `str`, folding appropriately.
         * @param str string to write to
         */
        writer(str: GLib.String): void;
    }

    namespace InternetAddressMailbox {
        // Signal signatures
        interface SignalSignatures extends InternetAddress.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends InternetAddress.ConstructorProps {}
    }

    /**
     * An RFC 2822 Mailbox address.
     * @gir-type Class
     */
    class InternetAddressMailbox extends InternetAddress {
        static $gtype: GObject.GType<InternetAddressMailbox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InternetAddressMailbox.SignalSignatures;

        // Fields

        parent_object: InternetAddress;
        addr: string;

        // Constructors

        constructor(properties?: Partial<InternetAddressMailbox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, addr: string): InternetAddressMailbox;

        // Signals

        /** @signal */
        connect<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressMailbox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressMailbox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressMailbox.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the addr-spec of the internet address mailbox.
         * @returns the address of the mailbox.
         */
        get_addr(): string;
        /**
         * Set the mailbox address.
         * @param addr contact's email address
         */
        set_addr(addr: string): void;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A MIME Message object.
     * @gir-type Class
     */
    class Message extends Object {
        static $gtype: GObject.GType<Message>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Message.SignalSignatures;

        // Fields

        parent_object: Object;
        recipients: InternetAddressList;
        mime_part: Object;
        message_id: string;
        reply_to: string;
        subject: string;
        from: string;
        date: number;
        tz_offset: number;

        // Constructors

        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pretty_headers: boolean): Message;
        // Conflicted with GMime.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a recipient of a chosen type to the MIME message.
         *
         * Note: The `name` (and `addr`) strings should be in UTF-8.
         * @param type A {@link GMime.RecipientType}
         * @param name The recipient's name (or `null`)
         * @param addr The recipient's address
         */
        add_recipient(type: RecipientType | null, name: string, addr: string): void;
        /**
         * Recursively calls `callback` on each of the mime parts in the mime message.
         * @param callback function to call on each of the mime parts   contained by the mime message
         */
        foreach(callback: ObjectForeachFunc): void;
        /**
         * Gets the complete list of recipients for `message`.
         * @returns a newly allocated {@link GMime.InternetAddressList} containing all recipients of the message or `null` if no recipients are set.
         */
        get_all_recipients(): InternetAddressList;
        /**
         * Attempts to identify the MIME part containing the body of the
         * message.
         * @returns a {@link GMime.Object} containing the textual content that appears to be the main body of the message. Note: This function is NOT guarenteed to always work as it makes some assumptions that are not necessarily true. It is recommended that you traverse the MIME structure yourself.
         */
        get_body(): Object;
        /**
         * Stores the date in time_t format in `date`. If `tz_offset` is
         * non-`null`, then the timezone offset in will be stored in
         * `tz_offset`.
         */
        get_date(): [number, number];
        /**
         * Gets the message's sent-date in string format.
         * @returns a newly allocated string containing the Date header value.
         */
        get_date_as_string(): string;
        /**
         * Gets the Message-Id header of `message`.
         * @returns the Message-Id of a message.
         */
        get_message_id(): string;
        /**
         * Gets the toplevel MIME part contained within `message`.
         * @returns the toplevel MIME part of `message`.
         */
        get_mime_part(): Object;
        /**
         * Gets a list of recipients of the specified `type` from the `message`.
         * @param type A {@link GMime.RecipientType}
         * @returns a list of recipients of the specified `type` from the `message`.
         */
        get_recipients(type: RecipientType | null): InternetAddressList;
        /**
         * Gets the Reply-To address from `message`.
         * @returns the sender's Reply-To address in a form suitable for display or `null` if no Reply-To address is set. If not `null`, the returned string will be in UTF-8.
         */
        get_reply_to(): string;
        /**
         * Gets the email address of the sender from `message`.
         * @returns the sender's name and address of the `message` in a form suitable for display or `null` if no sender is set. If not `null`, the returned string will be in UTF-8.
         */
        get_sender(): string;
        /**
         * Gets the subject of the `message`.
         * @returns the subject of the `message` in a form suitable for display or `null` if no subject is set. If not `null`, the returned string will be in UTF-8.
         */
        get_subject(): string;
        /**
         * Splits `message` into an array of {@link GMime.Message} objects each
         * containing a single {@link GMime.MessagePartial} object containing
         * `max_size` bytes or fewer. `nparts` is set to the number of
         * {@link GMime.MessagePartial} objects created.
         * @param max_size max size
         * @param nparts number of parts
         * @returns an array of {@link GMime.Message} objects and sets `nparts` to the number of messages returned or `null` on fail.
         */
        partial_split_message(max_size: number, nparts: number): Message;
        /**
         * Sets the Date header on a MIME Message.
         * @param date a date to be used in the Date header
         * @param tz_offset timezone offset (in +/- hours)
         */
        set_date(date: number, tz_offset: number): void;
        /**
         * Sets the sent-date of the message.
         * @param str a date string
         */
        set_date_as_string(str: string): void;
        /**
         * Set the Message-Id on a message.
         * @param message_id message-id (addr-spec portion)
         */
        set_message_id(message_id: string): void;
        /**
         * Set the root-level MIME part of the message.
         * @param mime_part The root-level MIME Part
         */
        set_mime_part(mime_part: Object): void;
        /**
         * Set the sender's Reply-To address on the `message`.
         *
         * Note: The `reply_to` string should be the raw encoded email
         * address. It is probably best to use an {@link GMime.InternetAddress} to
         * construct and encode this value.
         * @param reply_to The Reply-To address
         */
        set_reply_to(reply_to: string): void;
        /**
         * Set the sender's name and address on the MIME Message.
         * (ex: "\"Joe Sixpack\" &lt;joe@sixpack.org&gt;")
         *
         * Note: The `sender` string should be the raw encoded email
         * address. It is probably best to use an {@link GMime.InternetAddress} to
         * construct and encode this value.
         * @param sender The name and address of the sender
         */
        set_sender(sender: string): void;
        /**
         * Set the subject of a `message`.
         *
         * Note: The `subject` string should be in UTF-8.
         * @param subject Subject string
         */
        set_subject(subject: string): void;
    }

    namespace MessagePart {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A message/rfc822 or message/news MIME part.
     * @gir-type Class
     */
    class MessagePart extends Object {
        static $gtype: GObject.GType<MessagePart>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessagePart.SignalSignatures;

        // Fields

        parent_object: Object;
        message: Message;

        // Constructors

        constructor(properties?: Partial<MessagePart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](subtype: string): MessagePart;
        // Conflicted with GMime.Object.new

        static ['new'](...args: never[]): any;

        static new_with_message(subtype: string, message: Message): MessagePart;

        // Signals

        /** @signal */
        connect<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePart.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePart.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessagePart.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the message object on the message part object `part`.
         * @returns the message part contained within `part`.
         */
        get_message(): Message;
        /**
         * Sets the `message` object on the message part object `part`.
         * @param message message
         */
        set_message(message: Message): void;
    }

    namespace MessagePartial {
        // Signal signatures
        interface SignalSignatures extends Part.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Part.ConstructorProps {}
    }

    /**
     * A message/partial MIME part.
     * @gir-type Class
     */
    class MessagePartial extends Part {
        static $gtype: GObject.GType<MessagePartial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessagePartial.SignalSignatures;

        // Fields

        parent_object: Part;
        number: number;
        total: number;
        id: string;

        // Constructors

        constructor(properties?: Partial<MessagePartial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, number: number, total: number): MessagePartial;
        // Conflicted with GMime.Part.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePartial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePartial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessagePartial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Reconstructs the GMimeMessage from the given message/partial parts
         * in `partials`.
         * @param partials an array of message/partial mime parts
         * @param num the number of elements in `partials`
         */
        static reconstruct_message(partials: MessagePartial, num: number): Message;

        // Methods

        /**
         * Gets the message/partial id parameter value.
         * @returns the message/partial id or `null` on fail.
         */
        get_id(): string;
        /**
         * Gets the message/partial part number.
         * @returns the message/partial part number or %-1 on fail.
         */
        get_number(): number;
        /**
         * Gets the total number of message/partial parts needed to
         * reconstruct the original message.
         * @returns the total number of message/partial parts needed to reconstruct the original message or -1 on fail.
         */
        get_total(): number;
    }

    namespace Multipart {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A base MIME multipart object.
     * @gir-type Class
     */
    class Multipart extends Object {
        static $gtype: GObject.GType<Multipart>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Multipart.SignalSignatures;

        // Fields

        parent_object: Object;
        children: any[];
        boundary: string;
        preface: string;
        postface: string;

        // Constructors

        constructor(properties?: Partial<Multipart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Multipart;

        static new_with_subtype(subtype: string): Multipart;

        // Signals

        /** @signal */
        connect<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Multipart.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Multipart.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Multipart.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Appends a mime part to `multipart`.
         * @param part a {@link GMime.Object}
         * @virtual
         */
        vfunc_add(part: Object): void;
        /**
         * Removes all subparts from `multipart`.
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Checks if `part` is contained within `multipart`.
         * @param part a {@link GMime.Object}
         * @virtual
         */
        vfunc_contains(part: Object): boolean;
        /**
         * Gets the boundary on the multipart. If the internal boundary is
         * `null`, then an auto-generated boundary will be set on the multipart
         * and returned.
         * @virtual
         */
        vfunc_get_boundary(): string;
        /**
         * Gets the number of parts contained within `multipart`.
         * @virtual
         */
        vfunc_get_count(): number;
        /**
         * Gets the part at the specified `index` within the multipart.
         * @param index the 0-based index of the part
         * @virtual
         */
        vfunc_get_part(index: number): Object;
        /**
         * Gets the 0-based index of `part` within `multipart`.
         * @param part a {@link GMime.Object}
         * @virtual
         */
        vfunc_index_of(part: Object): number;
        /**
         * Inserts `part` into `multipart` at the specified `index`.
         * @param index the 0-based index to insert the part
         * @param part a {@link GMime.Object}
         * @virtual
         */
        vfunc_insert(index: number, part: Object): void;
        /**
         * Removes the specified `part` from `multipart`.
         * @param part a {@link GMime.Object}
         * @virtual
         */
        vfunc_remove(part: Object): boolean;
        /**
         * Removes the part at the specified `index` from `multipart`.
         * @param index the 0-based index of the part to remove
         * @virtual
         */
        vfunc_remove_at(index: number): Object;
        /**
         * Sets `boundary` as the boundary on the multipart. If `boundary` is
         * `null`, then a boundary will be auto-generated for you.
         * @param boundary boundary or `null` to autogenerate one
         * @virtual
         */
        vfunc_set_boundary(boundary: string): void;

        // Methods

        /**
         * Appends a mime part to `multipart`.
         * @param part a {@link GMime.Object}
         */
        add(part: Object): void;
        /**
         * Removes all subparts from `multipart`.
         */
        clear(): void;
        /**
         * Checks if `part` is contained within `multipart`.
         * @param part a {@link GMime.Object}
         * @returns `true` if `part` is a subpart of `multipart` or `false` otherwise.
         */
        contains(part: Object): boolean;
        /**
         * Recursively calls `callback` on each of `multipart`'s subparts.
         * @param callback function to call for each of `multipart`'s   subparts.
         */
        foreach(callback: ObjectForeachFunc): void;
        /**
         * Gets the boundary on the multipart. If the internal boundary is
         * `null`, then an auto-generated boundary will be set on the multipart
         * and returned.
         * @returns the boundary on the multipart.
         */
        get_boundary(): string;
        /**
         * Gets the number of parts contained within `multipart`.
         * @returns the number of parts contained within `multipart`.
         */
        get_count(): number;
        /**
         * Gets the part at the specified `index` within the multipart.
         * @param index the 0-based index of the part
         * @returns the part at position `index`.
         */
        get_part(index: number): Object;
        /**
         * Gets the postface on the multipart.
         * @returns a pointer to the postface string on the multipart.
         */
        get_postface(): string;
        /**
         * Gets the preface on the multipart.
         * @returns a pointer to the preface string on the multipart.
         */
        get_preface(): string;
        /**
         * Gets the mime part with the content-id `content_id` from the
         * multipart `multipart`.
         * @param content_id the content id of the part to look for
         * @returns the {@link GMime.Object} whose content-id matches the search string, or `null` if a match cannot be found.
         */
        get_subpart_from_content_id(content_id: string): Object;
        /**
         * Gets the 0-based index of `part` within `multipart`.
         * @param part a {@link GMime.Object}
         * @returns the 0-based index of `part` within `multipart` or %-1 if not found.
         */
        index_of(part: Object): number;
        /**
         * Inserts `part` into `multipart` at the specified `index`.
         * @param index the 0-based index to insert the part
         * @param part a {@link GMime.Object}
         */
        insert(index: number, part: Object): void;
        /**
         * Removes the specified `part` from `multipart`.
         * @param part a {@link GMime.Object}
         * @returns `true` if the part was removed or `false` otherwise.
         */
        remove(part: Object): boolean;
        /**
         * Removes the part at the specified `index` from `multipart`.
         * @param index the 0-based index of the part to remove
         * @returns the mime part that was removed or `null` if the part was not contained within the multipart.
         */
        remove_at(index: number): Object;
        /**
         * Replaces the part at the specified `index` within `multipart` with
         * `replacement`.
         * @param index the 0-based index of the part to replace
         * @param replacement a {@link GMime.Object} to use as the replacement
         * @returns the part that was replaced or `null` if the part was not contained within the multipart.
         */
        replace(index: number, replacement: Object): Object;
        /**
         * Sets `boundary` as the boundary on the multipart. If `boundary` is
         * `null`, then a boundary will be auto-generated for you.
         * @param boundary boundary or `null` to autogenerate one
         */
        set_boundary(boundary: string): void;
        /**
         * Sets the postface on the multipart.
         * @param postface postface
         */
        set_postface(postface: string): void;
        /**
         * Sets the preface on the multipart.
         * @param preface preface
         */
        set_preface(preface: string): void;
    }

    namespace MultipartEncrypted {
        // Signal signatures
        interface SignalSignatures extends Multipart.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    /**
     * A multipart/encrypted MIME part.
     * @gir-type Class
     */
    class MultipartEncrypted extends Multipart {
        static $gtype: GObject.GType<MultipartEncrypted>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MultipartEncrypted.SignalSignatures;

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartEncrypted.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartEncrypted;

        // Signals

        /** @signal */
        connect<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartEncrypted.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartEncrypted.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultipartEncrypted.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attempts to decrypt the encrypted MIME part contained within the
         * multipart/encrypted object `mpe` using the `ctx` decryption context.
         *
         * If `result` is non-`null`, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated {@link GMime.DecryptResult} with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param ctx decryption context
         * @param result a `GMimeDecryptionResult`
         * @returns the decrypted MIME part on success or `null` on fail. If the decryption fails, an exception will be set on `err` to provide information as to why the failure occured.
         */
        decrypt(ctx: CryptoContext, result: DecryptResult): Object;
        /**
         * Attempts to decrypt the encrypted MIME part contained within the
         * multipart/encrypted object `mpe` using the `ctx` decryption context
         * trying only the supplied session key.  If `session_key` is
         * non-`null`, but is not valid for the ciphertext, the decryption will
         * fail even if other available secret key material may have been able
         * to decrypt it. If `session_key` is `null`, this does the same thing
         * as `g_mime_multipart_encrypted_decrypt()`.
         *
         * When non-`null`, `session_key` should be a `null`-terminated string,
         * such as the one returned by `g_mime_decrypt_result_get_session_key()`
         * from a previous decryption.
         *
         * If `result` is non-`null`, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated {@link GMime.DecryptResult} with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param ctx decryption context
         * @param session_key session key to use
         * @param result a `GMimeDecryptionResult`
         * @returns the decrypted MIME part on success or `null` on fail. If the decryption fails, an exception will be set on `err` to provide information as to why the failure occured.
         */
        decrypt_session(ctx: CryptoContext, session_key: string, result: DecryptResult): Object;
        /**
         * Attempts to encrypt (and conditionally sign) the `content` MIME part
         * to the public keys of `recipients` using the `ctx` encryption
         * context. If successful, the encrypted {@link GMime.Object} is set as the
         * encrypted part of the multipart/encrypted object `mpe`.
         * @param content MIME part to encrypt
         * @param ctx encryption context
         * @param sign `true` if the content should also be signed or `false` otherwise
         * @param userid user id to use for signing (only used if `sign` is `true`)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipients to encrypt to
         * @returns %0 on success or %-1 on fail. If the encryption fails, an exception will be set on `err` to provide information as to why the failure occured.
         */
        encrypt(
            content: Object,
            ctx: CryptoContext,
            sign: boolean,
            userid: string,
            digest: DigestAlgo | null,
            recipients: string[],
        ): number;
    }

    namespace MultipartSigned {
        // Signal signatures
        interface SignalSignatures extends Multipart.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    /**
     * A multipart/signed MIME part.
     * @gir-type Class
     */
    class MultipartSigned extends Multipart {
        static $gtype: GObject.GType<MultipartSigned>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MultipartSigned.SignalSignatures;

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartSigned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartSigned;

        // Signals

        /** @signal */
        connect<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartSigned.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartSigned.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultipartSigned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attempts to sign the `content` MIME part with `userid`'s private key
         * using the `ctx` signing context with the `digest` algorithm. If
         * successful, the signed {@link GMime.Object} is set as the signed part of
         * the multipart/signed object `mps`.
         * @param content MIME part to sign
         * @param ctx encryption crypto context
         * @param userid user id to sign with
         * @param digest preferred digest algorithm
         * @returns %0 on success or %-1 on fail. If the signing fails, an exception will be set on `err` to provide information as to why the failure occured.
         */
        sign(content: Object, ctx: CryptoContext, userid: string, digest: DigestAlgo | null): number;
        /**
         * Attempts to verify the signed MIME part contained within the
         * multipart/signed object `mps` using the `ctx` crypto context.
         * @param ctx encryption crypto context
         * @returns a new {@link GMime.SignatureList} object on success or `null` on fail. If the verification fails, an exception will be set on `err` to provide information as to why the failure occured.
         */
        verify(ctx: CryptoContext): SignatureList;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base class for all MIME parts.
     * @gir-type Class
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        disposition: ContentDisposition;
        content_type: ContentType;
        content_id: string;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](content_type: ContentType): Object;

        static new_type(type: string, subtype: string): Object;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Registers the object type `object_type` for use with the
         * `g_mime_object_new_type()` convenience function.
         *
         * Note: You may use the wildcard "*" to match any type and/or
         * subtype.
         * @param type mime type
         * @param subtype mime subtype
         * @param object_type object type
         */
        static register_type(type: string, subtype: string, object_type: GObject.GType): void;
        static type_registry_init(): void;
        static type_registry_shutdown(): void;

        // Virtual methods

        /**
         * Appends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         * @virtual
         */
        vfunc_append_header(header: string, value: string): void;
        /**
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this {@link GMime.Object} and all child parts based on the `constraint`
         * provided.
         * @param constraint a {@link GMime.EncodingConstraint}
         * @virtual
         */
        vfunc_encode(constraint: EncodingConstraint): void;
        /**
         * Gets the raw, unprocessed value of the first header with the specified name.
         * @param header header name
         * @virtual
         */
        vfunc_get_header(header: string): string;
        /**
         * Allocates a string buffer containing all of the MIME object's raw
         * headers.
         * @virtual
         */
        vfunc_get_headers(): string;
        /**
         * Prepends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         * @virtual
         */
        vfunc_prepend_header(header: string, value: string): void;
        /**
         * Removed the specified header if it exists.
         * @param header header name
         * @virtual
         */
        vfunc_remove_header(header: string): boolean;
        /**
         * Sets the content-type for the specified MIME object and then
         * serializes it to the Content-Type header field.
         * @param content_type a {@link GMime.ContentType} object
         * @virtual
         */
        vfunc_set_content_type(content_type: ContentType): void;
        /**
         * Sets an arbitrary raw, unprocessed header on the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         * @virtual
         */
        vfunc_set_header(header: string, value: string): void;
        /**
         * Write the contents of the MIME object to `stream`.
         * @param stream stream
         * @virtual
         */
        vfunc_write_to_stream(stream: Stream): number;

        // Methods

        /**
         * Appends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         */
        append_header(header: string, value: string): void;
        /**
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this {@link GMime.Object} and all child parts based on the `constraint`
         * provided.
         * @param constraint a {@link GMime.EncodingConstraint}
         */
        encode(constraint: EncodingConstraint | null): void;
        /**
         * Gets the {@link GMime.ContentDisposition} for the specified MIME object.
         * @returns the {@link GMime.ContentDisposition} set on the MIME object.
         */
        get_content_disposition(): ContentDisposition;
        /**
         * Gets the value of the Content-Disposition parameter specified by
         * `name`, or `null` if the parameter does not exist.
         * @param name parameter name
         * @returns the value of the requested content-disposition param or `null` if the param doesn't exist. If the param is set, the returned string will be in UTF-8.
         */
        get_content_disposition_parameter(name: string): string;
        /**
         * Gets the Content-Id of the MIME object or NULL if one is not set.
         * @returns a const pointer to the Content-Id header.
         */
        get_content_id(): string;
        /**
         * Gets the {@link GMime.ContentType} object for the given MIME object or
         * `null` on fail.
         * @returns the content-type object for the specified MIME object.
         */
        get_content_type(): ContentType;
        /**
         * Gets the value of the content-type param `name` set on the MIME part
         * `object`.
         * @param name param name
         * @returns the value of the requested content-type param or `null` if the param doesn't exist. If the param is set, the returned string will be in UTF-8.
         */
        get_content_type_parameter(name: string): string;
        /**
         * Gets the MIME object's disposition if set or `null` otherwise.
         * @returns the disposition string which is probably one of #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE.
         */
        get_disposition(): string;
        /**
         * Gets the raw, unprocessed value of the first header with the specified name.
         * @param header header name
         * @returns the raw, unprocessed value of the requested header if it exists or `null` otherwise. Note: The returned value should be decoded with a function such as `g_mime_utils_header_decode_text()` before displaying to the user.
         */
        get_header(header: string): string;
        /**
         * Get the header list for `object`.
         * @returns the {@link GMime.HeaderList} for `object`. Do not free this pointer when you are done with it.
         */
        get_header_list(): HeaderList;
        /**
         * Allocates a string buffer containing all of the MIME object's raw
         * headers.
         * @returns an allocated string containing all of the raw MIME headers. Note: The returned string will not be suitable for display.
         */
        get_headers(): string;
        /**
         * Prepends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         */
        prepend_header(header: string, value: string): void;
        /**
         * Removed the specified header if it exists.
         * @param header header name
         * @returns `true` if the header was removed or `false` if it could not be found.
         */
        remove_header(header: string): boolean;
        /**
         * Set the content disposition for the specified mime part and then
         * serializes it to the Content-Disposition header field.
         * @param disposition a {@link GMime.ContentDisposition} object
         */
        set_content_disposition(disposition: ContentDisposition): void;
        /**
         * Add a content-disposition parameter to the specified mime part.
         *
         * Note: The `name` string should be in US-ASCII while the `value`
         * string should be in UTF-8.
         * @param name parameter name
         * @param value parameter value
         */
        set_content_disposition_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Id of the MIME object.
         * @param content_id content-id (addr-spec portion)
         */
        set_content_id(content_id: string): void;
        /**
         * Sets the content-type for the specified MIME object and then
         * serializes it to the Content-Type header field.
         * @param content_type a {@link GMime.ContentType} object
         */
        set_content_type(content_type: ContentType): void;
        /**
         * Sets the content-type param `name` to the value `value`.
         *
         * Note: The `name` string should be in US-ASCII while the `value`
         * string should be in UTF-8.
         * @param name param name
         * @param value param value
         */
        set_content_type_parameter(name: string, value: string): void;
        /**
         * Sets the disposition to `disposition` which may be one of
         * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
         * your choice, any other string which would indicate how the MIME
         * part should be displayed by the MUA.
         * @param disposition disposition ("attachment" or "inline")
         */
        set_disposition(disposition: string): void;
        /**
         * Sets an arbitrary raw, unprocessed header on the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param header header name
         * @param value header value
         */
        set_header(header: string, value: string): void;
        /**
         * Allocates a string buffer containing the contents of `object`.
         * @returns an allocated string containing the contents of the mime object.
         */
        to_string(): string;
        /**
         * Write the contents of the MIME object to `stream`.
         * @param stream stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(stream: Stream): number;
    }

    namespace Parser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A MIME parser context.
     * @gir-type Class
     */
    class Parser extends GObject.Object {
        static $gtype: GObject.GType<Parser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parser.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;

        // Constructors

        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Parser;

        static new_with_stream(stream: Stream): Parser;

        // Signals

        /** @signal */
        connect<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Parser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Constructs a MIME message from `parser`.
         * @returns a MIME message or `null` on fail.
         */
        construct_message(): Message;
        /**
         * Constructs a MIME part from `parser`.
         * @returns a MIME part based on `parser` or `null` on fail.
         */
        construct_part(): Object;
        /**
         * Tests the end-of-stream indicator for `parser`'s internal stream.
         * @returns `true` on EOS or `false` otherwise.
         */
        eos(): boolean;
        /**
         * Gets the mbox-style From-line of the most recently parsed message
         * (gotten from `g_mime_parser_construct_message()`).
         * @returns the mbox-style From-line of the most recently parsed message or `null` on error.
         */
        get_from(): string;
        /**
         * Gets the offset of the most recently parsed mbox-style From-line
         * (gotten from `g_mime_parser_construct_message()`).
         * @returns the offset of the most recently parsed mbox-style From-line or %-1 on error.
         */
        get_from_offset(): number;
        /**
         * Gets the stream offset of the beginning of the headers of the most
         * recently parsed message.
         * @returns the offset of the beginning of the headers of the most recently parsed message or %-1 on error.
         */
        get_headers_begin(): number;
        /**
         * Gets the stream offset of the end of the headers of the most
         * recently parsed message.
         * @returns the offset of the end of the headers of the most recently parsed message or %-1 on error.
         */
        get_headers_end(): number;
        /**
         * Gets whether or not the underlying stream is persistent.
         * @returns `true` if the `parser` will leave the content on disk or `false` if it will load the content into memory.
         */
        get_persist_stream(): boolean;
        /**
         * Gets whether or not `parser` is set to use Content-Length for
         * determining the offset of the end of the message.
         * @returns whether or not `parser` is set to use Content-Length for determining the offset of the end of the message.
         */
        get_respect_content_length(): boolean;
        /**
         * Gets whether or not `parser` is set to scan mbox-style From-lines.
         * @returns whether or not `parser` is set to scan mbox-style From-lines.
         */
        get_scan_from(): boolean;
        /**
         * Initializes `parser` to use `stream`.
         *
         * WARNING: Initializing a parser with a stream is comparable to
         * selling your soul (`stream`) to the devil (`parser`). You are
         * basically giving the parser complete control of the stream, this
         * means that you had better not touch the stream so long as the
         * parser is still using it. This means no reading, writing, seeking,
         * or resetting of the stream. Anything that will/could change the
         * current stream's offset is PROHIBITED.
         *
         * It is also recommended that you not use `g_mime_stream_tell()`
         * because it will not necessarily give you the current `parser` offset
         * since `parser` handles its own internal read-ahead buffer. Instead,
         * it is recommended that you use `g_mime_parser_tell()` if you have a
         * reason to need the current offset of the `parser`.
         * @param stream raw message or part stream
         */
        init_with_stream(stream: Stream): void;
        /**
         * Sets whether or not the `parser`'s underlying stream is persistent.
         *
         * If `persist` is `true`, the `parser` will attempt to construct
         * messages/parts whose content will remain on disk rather than being
         * loaded into memory so as to reduce memory usage. This is the default.
         *
         * If `persist` is `false`, the `parser` will always load message content
         * into memory.
         *
         * Note: This attribute only serves as a hint to the `parser`. If the
         * underlying stream does not support seeking, then this attribute
         * will be ignored.
         *
         * By default, this feature is enabled if the underlying stream is seekable.
         * @param persist persist attribute
         */
        set_persist_stream(persist: boolean): void;
        /**
         * Sets whether or not `parser` should respect Content-Length headers
         * when deciding where to look for the start of the next message. Only
         * used when the parser is also set to scan for From-lines.
         *
         * Most notably useful when parsing broken Solaris mbox files (See
         * http://www.jwz.org/doc/content-length.html for details).
         *
         * By default, this feature is disabled.
         * @param respect_content_length `true` if the parser should use Content-Length headers or `false` otherwise.
         */
        set_respect_content_length(respect_content_length: boolean): void;
        /**
         * Sets whether or not `parser` should scan mbox-style From-lines.
         *
         * By default, this feature is disabled.
         * @param scan_from `true` to scan From-lines or `false` otherwise
         */
        set_scan_from(scan_from: boolean): void;
        /**
         * Gets the current stream offset from the parser's internal stream.
         * @returns the current stream offset from the parser's internal stream or %-1 on error.
         */
        tell(): number;
    }

    namespace Part {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A leaf-node MIME part object.
     * @gir-type Class
     */
    class Part extends Object {
        static $gtype: GObject.GType<Part>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Part.SignalSignatures;

        // Fields

        parent_object: Object;
        encoding: ContentEncoding;
        content_description: string;
        content_location: string;
        content_md5: string;
        content: DataWrapper;

        // Constructors

        constructor(properties?: Partial<Part.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Part;

        static new_with_type(type: string, subtype: string): Part;

        // Signals

        /** @signal */
        connect<K extends keyof Part.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Part.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Part.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Part.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Part.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Part.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Sets the content object on the mime part.
         * @param content a {@link GMime.DataWrapper} content object
         * @virtual
         */
        vfunc_set_content_object(content: DataWrapper): void;

        // Methods

        /**
         * Calculates the most efficient content encoding for the `mime_part`
         * given the `constraint`.
         * @param constraint a {@link GMime.EncodingConstraint}
         * @returns the best content encoding for the specified mime part.
         */
        get_best_content_encoding(constraint: EncodingConstraint | null): ContentEncoding;
        /**
         * Gets the value of the Content-Description for the specified mime
         * part if it exists or `null` otherwise.
         * @returns the content description for the specified mime part.
         */
        get_content_description(): string;
        /**
         * Gets the content encoding of the mime part.
         * @returns the content encoding for the specified mime part.
         */
        get_content_encoding(): ContentEncoding;
        /**
         * Gets the content-id of the specified mime part if it exists, or
         * `null` otherwise.
         * @returns the content id for the specified mime part.
         */
        get_content_id(): string;
        /**
         * Gets the value of the Content-Location header if it exists, or
         * `null` otherwise.
         * @returns the content location for the specified mime part.
         */
        get_content_location(): string;
        /**
         * Gets the md5sum contained in the Content-Md5 header of the
         * specified mime part if it exists, or `null` otherwise.
         * @returns the content md5 for the specified mime part.
         */
        get_content_md5(): string;
        /**
         * Gets the internal data-wrapper of the specified mime part, or `null`
         * on error.
         * @returns the data-wrapper for the mime part's contents.
         */
        get_content_object(): DataWrapper;
        /**
         * Gets the filename of the specificed mime part, or `null` if the
         * `mime_part` does not have the filename or name parameter set.
         * @returns the filename of the specified `mime_part` or `null` if neither of the parameters is set. If a file name is set, the returned string will be in UTF-8.
         */
        get_filename(): string;
        /**
         * Determines whether or not the part is an attachment based on the
         * value of the Content-Disposition header.
         * @returns `true` if the part is an attachment, otherwise `false`.
         */
        is_attachment(): boolean;
        /**
         * Set the content description for the specified mime part.
         * @param description content description
         */
        set_content_description(description: string): void;
        /**
         * Set the content encoding for the specified mime part.
         * @param encoding a {@link GMime.ContentEncoding}
         */
        set_content_encoding(encoding: ContentEncoding | null): void;
        /**
         * Set the content id for the specified mime part.
         * @param content_id content id
         */
        set_content_id(content_id: string): void;
        /**
         * Set the content location for the specified mime part.
         * @param content_location content location
         */
        set_content_location(content_location: string): void;
        /**
         * Set the content md5 for the specified mime part.
         * @param content_md5 content md5 or `null` to generate the md5 digest.
         */
        set_content_md5(content_md5: string): void;
        /**
         * Sets the content object on the mime part.
         * @param content a {@link GMime.DataWrapper} content object
         */
        set_content_object(content: DataWrapper): void;
        /**
         * Sets the "filename" parameter on the Content-Disposition and also sets the
         * "name" parameter on the Content-Type.
         *
         * Note: The `filename` string should be in UTF-8.
         * @param filename the file name
         */
        set_filename(filename: string): void;
        /**
         * Verify the content md5 for the specified mime part.
         * @returns `true` if the md5 is valid or `false` otherwise. Note: will return `false` if the mime part does not contain a Content-MD5.
         */
        verify_content_md5(): boolean;
    }

    namespace Pkcs7Context {
        // Signal signatures
        interface SignalSignatures extends CryptoContext.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends CryptoContext.ConstructorProps {}
    }

    /**
     * A PKCS7 crypto context.
     * @gir-type Class
     */
    class Pkcs7Context extends CryptoContext {
        static $gtype: GObject.GType<Pkcs7Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pkcs7Context.SignalSignatures;

        // Fields

        parent_object: CryptoContext;
        priv: any;

        // Constructors

        constructor(properties?: Partial<Pkcs7Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pkcs7Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pkcs7Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pkcs7Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the `always_trust` flag on the pkcs7 context.
         * @returns the `always_trust` flag on the pkcs7 context.
         */
        get_always_trust(): boolean;
        /**
         * Sets the `always_trust` flag on the pkcs7 context which is used for
         * encryption.
         * @param always_trust always trust flag
         */
        set_always_trust(always_trust: boolean): void;
    }

    namespace Signature {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing useful information about a signature.
     * @gir-type Class
     */
    class Signature extends GObject.Object {
        static $gtype: GObject.GType<Signature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Signature.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        status: SignatureStatus;
        errors: SignatureError;
        cert: Certificate;
        created: number;
        expires: number;

        // Constructors

        constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Signature;

        // Signals

        /** @signal */
        connect<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Signature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Signature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the signature's certificate.
         * @returns the signature's certificate.
         */
        get_certificate(): Certificate;
        /**
         * Get the creation date of the signature.
         * @returns the creation date of the signature or %-1 if unknown.
         */
        get_created(): number;
        /**
         * Get the signature errors. If the {@link GMime.SignatureStatus} returned from
         * `g_mime_signature_get_status()` is not #GMIME_SIGNATURE_STATUS_GOOD, then the
         * errors may provide a clue as to why.
         * @returns a bitfield of errors.
         */
        get_errors(): SignatureError;
        /**
         * Get the expiration date of the signature.
         * @returns the expiration date of the signature or %-1 if unknown.
         */
        get_expires(): number;
        /**
         * Get the signature status.
         * @returns the signature status.
         */
        get_status(): SignatureStatus;
        /**
         * Set the signature's certificate.
         * @param cert a {@link GMime.Certificate}
         */
        set_certificate(cert: Certificate): void;
        /**
         * Set the creation date of the signature.
         * @param created creation date
         */
        set_created(created: number): void;
        /**
         * Set the errors on the signature.
         * @param errors a {@link GMime.SignatureError}
         */
        set_errors(errors: SignatureError | null): void;
        /**
         * Set the expiration date of the signature.
         * @param expires expiration date
         */
        set_expires(expires: number): void;
        /**
         * Set the status on the signature.
         * @param status a {@link GMime.SignatureStatus}
         */
        set_status(status: SignatureStatus | null): void;
    }

    namespace SignatureList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of {@link GMime.Signature} objects.
     * @gir-type Class
     */
    class SignatureList extends GObject.Object {
        static $gtype: GObject.GType<SignatureList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SignatureList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        array: any[];

        // Constructors

        constructor(properties?: Partial<SignatureList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SignatureList;

        // Signals

        /** @signal */
        connect<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignatureList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignatureList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SignatureList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a {@link GMime.Signature} to the {@link GMime.SignatureList}.
         * @param sig a {@link GMime.Signature}
         * @returns the index of the added {@link GMime.Signature}.
         */
        add(sig: Signature): number;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified {@link GMime.Signature} is contained within
         * the {@link GMime.SignatureList}.
         * @param sig a {@link GMime.Signature}
         * @returns `true` if the specified {@link GMime.Signature} is contained within the specified {@link GMime.SignatureList} or `false` otherwise.
         */
        contains(sig: Signature): boolean;
        /**
         * Gets the {@link GMime.Signature} at the specified index.
         * @param index index of {@link GMime.Signature} to get
         * @returns the {@link GMime.Signature} at the specified index or `null` if the index is out of range.
         */
        get_signature(index: number): Signature;
        /**
         * Gets the index of the specified {@link GMime.Signature} inside the
         * {@link GMime.SignatureList}.
         * @param sig a {@link GMime.Signature}
         * @returns the index of the requested {@link GMime.Signature} within the {@link GMime.SignatureList} or %-1 if it is not contained within the {@link GMime.SignatureList}.
         */
        index_of(sig: Signature): number;
        /**
         * Inserts a {@link GMime.Signature} into the {@link GMime.SignatureList} at the specified
         * index.
         * @param index index to insert at
         * @param sig a {@link GMime.Signature}
         */
        insert(index: number, sig: Signature): void;
        /**
         * Gets the length of the list.
         * @returns the number of {@link GMime.Signature} objects in the list.
         */
        length(): number;
        /**
         * Removes a {@link GMime.Signature} from the {@link GMime.SignatureList}.
         * @param sig a {@link GMime.Signature}
         * @returns `true` if the specified {@link GMime.Signature} was removed or `false` otherwise.
         */
        remove(sig: Signature): boolean;
        /**
         * Removes a {@link GMime.Signature} from the {@link GMime.SignatureList} at the specified
         * index.
         * @param index index to remove
         * @returns `true` if an {@link GMime.Signature} was removed or `false` otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the {@link GMime.Signature} at the specified index to `sig`.
         * @param index index of {@link GMime.Signature} to set
         * @param sig a {@link GMime.Signature}
         */
        set_signature(index: number, sig: Signature): void;
    }

    namespace Stream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Abstract I/O stream class.
     * @gir-type Class
     */
    abstract class Stream extends GObject.Object {
        static $gtype: GObject.GType<Stream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stream.SignalSignatures;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Closes the stream.
         * @virtual
         */
        vfunc_close(): number;
        /**
         * Tests the end-of-stream indicator for `stream`.
         * @virtual
         */
        vfunc_eos(): boolean;
        /**
         * Sync's the stream to disk.
         * @virtual
         */
        vfunc_flush(): number;
        /**
         * Gets the length of the stream.
         * @virtual
         */
        vfunc_length(): number;
        /**
         * Attempts to read up to `len` bytes from `stream` into `buf`.
         * @param buf buffer
         * @virtual
         */
        vfunc_read(buf: Uint8Array | string): number;
        /**
         * Resets the stream.
         * @virtual
         */
        vfunc_reset(): number;
        /**
         * Repositions the offset of the stream `stream` to
         * the argument `offset` according to the
         * directive `whence` as follows:
         *
         *     #GMIME_STREAM_SEEK_SET: Seek `offset` bytes relative to
         *     the beginning (bound_start) of the stream.
         *
         *     #GMIME_STREAM_SEEK_CUR: Seek `offset` bytes relative to the
         *     current offset of the stream.
         *
         *     #GMIME_STREAM_SEEK_END: Seek `offset` bytes relative to the
         *     end of the stream (bound_end if non-negative).
         * @param offset positional offset
         * @param whence seek directive
         * @virtual
         */
        vfunc_seek(offset: number, whence: SeekWhence): number;
        /**
         * Creates a new substream of `stream` with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         * @virtual
         */
        vfunc_substream(start: number, end: number): Stream;
        /**
         * Gets the current offset within the stream.
         * @virtual
         */
        vfunc_tell(): number;
        /**
         * Attempts to write up to `len` bytes of `buf` to `stream`.
         * @param buf buffer
         * @param len buffer length
         * @virtual
         */
        vfunc_write(buf: string, len: number): number;

        // Methods

        /**
         * Reads in at most one less than `max` characters from `stream` and
         * stores them into the buffer pointed to by `buf`. Reading stops after
         * an EOS or newline ('\n'). If a newline is read, it is stored into
         * the buffer. A '\0' is stored after the last character in the
         * buffer.
         * @param buf line buffer
         * @param max max length of a line
         * @returns the number of characters read into `buf` on success or %-1 on fail.
         */
        buffer_gets(buf: string, max: number): number;
        /**
         * Reads a single line into `buffer`.
         * @param buffer output buffer
         */
        buffer_readln(buffer: Uint8Array | string): void;
        /**
         * Closes the stream.
         * @returns %0 on success or %-1 on fail.
         */
        close(): number;
        /**
         * Initializes a new stream with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         */
        construct(start: number, end: number): void;
        /**
         * Tests the end-of-stream indicator for `stream`.
         * @returns `true` on EOS or `false` otherwise.
         */
        eos(): boolean;
        /**
         * Sync's the stream to disk.
         * @returns %0 on success or %-1 on fail.
         */
        flush(): number;
        /**
         * Gets the length of the stream.
         * @returns the length of the stream or %-1 if unknown.
         */
        length(): number;
        /**
         * Attempts to read up to `len` bytes from `stream` into `buf`.
         * @param buf buffer
         * @returns the number of bytes read or %-1 on fail.
         */
        read(buf: Uint8Array | string): number;
        /**
         * Resets the stream.
         * @returns %0 on success or %-1 on fail.
         */
        reset(): number;
        /**
         * Repositions the offset of the stream `stream` to
         * the argument `offset` according to the
         * directive `whence` as follows:
         *
         *     #GMIME_STREAM_SEEK_SET: Seek `offset` bytes relative to
         *     the beginning (bound_start) of the stream.
         *
         *     #GMIME_STREAM_SEEK_CUR: Seek `offset` bytes relative to the
         *     current offset of the stream.
         *
         *     #GMIME_STREAM_SEEK_END: Seek `offset` bytes relative to the
         *     end of the stream (bound_end if non-negative).
         * @param offset positional offset
         * @param whence seek directive
         * @returns the resultant position on success or %-1 on fail.
         */
        seek(offset: number, whence: SeekWhence | null): number;
        /**
         * Set the bounds on a stream.
         * @param start start boundary
         * @param end end boundary
         */
        set_bounds(start: number, end: number): void;
        /**
         * Creates a new substream of `stream` with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         * @returns a substream of `stream` with bounds `start` and `end`.
         */
        substream(start: number, end: number): Stream;
        /**
         * Gets the current offset within the stream.
         * @returns the current position within the stream or %-1 on fail.
         */
        tell(): number;
        /**
         * Attempts to write up to `len` bytes of `buf` to `stream`.
         * @param buf buffer
         * @param len buffer length
         * @returns the number of bytes written or %-1 on fail.
         */
        write(buf: string, len: number): number;
        /**
         * Writes `string` to `stream`.
         * @param str string to write
         * @returns the number of bytes written or %-1 on fail.
         */
        write_string(str: string): number;
        /**
         * Attempts to write the source stream to the destination stream.
         * @param dest destination stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(dest: Stream): number;
        /**
         * Writes at most `count` blocks described by `vector` to `stream`.
         * @param vector a {@link GMime.StreamIOVector}
         * @param count number of vector elements
         * @returns the number of bytes written or %-1 on fail.
         */
        writev(vector: StreamIOVector, count: number): number;
    }

    namespace StreamBuffer {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A buffered stream wrapper around any {@link GMime.Stream} object.
     * @gir-type Class
     */
    class StreamBuffer extends Stream {
        static $gtype: GObject.GType<StreamBuffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamBuffer.SignalSignatures;

        // Fields

        parent_object: Stream;
        mode: StreamBufferMode;
        source: Stream;
        buffer: string;
        bufptr: string;
        bufend: string;
        buflen: number;

        // Constructors

        constructor(properties?: Partial<StreamBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Stream, mode: StreamBufferMode): StreamBuffer;

        // Signals

        /** @signal */
        connect<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamCat {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A concatenation of other {@link GMime.Stream} objects.
     * @gir-type Class
     */
    class StreamCat extends Stream {
        static $gtype: GObject.GType<StreamCat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamCat.SignalSignatures;

        // Fields

        parent_object: Stream;
        sources: any;
        current: any;

        // Constructors

        constructor(properties?: Partial<StreamCat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamCat;

        // Signals

        /** @signal */
        connect<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamCat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamCat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamCat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the `source` stream to the `cat`.
         * @param source a source stream
         * @returns %0 on success or %-1 on fail.
         */
        add_source(source: Stream): number;
    }

    namespace StreamFile {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} wrapper around standard-c FILE pointers.
     * @gir-type Class
     */
    class StreamFile extends Stream {
        static $gtype: GObject.GType<StreamFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamFile.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;
        fp: any;

        // Constructors

        constructor(properties?: Partial<StreamFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fp?: any | null): StreamFile;

        static new_for_path(path: string, mode: string): StreamFile;

        static new_with_bounds(fp: any | null, start: number, end: number): StreamFile;

        // Signals

        /** @signal */
        connect<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend FILE pointer.
         * @returns `true` if `stream` owns the backend FILE pointer or `false` otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend FILE pointer.
         *
         * Note: `owner` should be `true` if the stream should `fclose()` the
         * backend FILE pointer when destroyed or `false` otherwise.
         * @param owner `true` if this stream should own the FILE pointer or `false` otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamFilter {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} which passes data through any {@link GMime.Filter} objects.
     * @gir-type Class
     */
    class StreamFilter extends Stream {
        static $gtype: GObject.GType<StreamFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamFilter.SignalSignatures;

        // Fields

        parent_object: Stream;
        priv: any;
        source: Stream;

        // Constructors

        constructor(properties?: Partial<StreamFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: Stream): StreamFilter;

        // Signals

        /** @signal */
        connect<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `filter` to `stream`. Filters are applied in the same order in
         * which they are added.
         * @param filter a {@link GMime.Filter}
         * @returns an id for the filter.
         */
        add(filter: Filter): number;
        /**
         * Removed a filter from the stream based on the id (as returned from
         * filter_add).
         * @param id filter id
         */
        remove(id: number): void;
    }

    namespace StreamFs {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} wrapper around POSIX file descriptors.
     * @gir-type Class
     */
    class StreamFs extends Stream {
        static $gtype: GObject.GType<StreamFs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamFs.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;

        // Constructors

        constructor(properties?: Partial<StreamFs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number): StreamFs;

        static new_for_path(path: string, flags: number, mode: number): StreamFs;

        static new_with_bounds(fd: number, start: number, end: number): StreamFs;

        // Signals

        /** @signal */
        connect<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend file descriptor.
         * @returns `true` if `stream` owns the backend file descriptor or `false` otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend file descriptor.
         *
         * Note: `owner` should be `true` if the stream should `close()` the
         * backend file descriptor when destroyed or `false` otherwise.
         * @param owner `true` if this stream should own the file descriptor or `false` otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamGIO {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} wrapper around GLib's GIO streams.
     * @gir-type Class
     */
    class StreamGIO extends Stream {
        static $gtype: GObject.GType<StreamGIO>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamGIO.SignalSignatures;

        // Fields

        parent_object: Stream;
        ostream: Gio.OutputStream;
        istream: Gio.InputStream;
        file: Gio.File;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;

        // Constructors

        constructor(properties?: Partial<StreamGIO.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): StreamGIO;

        static new_with_bounds(file: Gio.File, start: number, end: number): StreamGIO;

        // Signals

        /** @signal */
        connect<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamGIO.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamGIO.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamGIO.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend {@link Gio.File}.
         * @returns `true` if `stream` owns the backend {@link Gio.File} or `false` otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend GIO pointer.
         *
         * Note: `owner` should be `true` if the stream should `close()` the
         * backend file descriptor when destroyed or `false` otherwise.
         * @param owner `true` if this stream should own the {@link Gio.File} or `false` otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamMem {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A memory-backed {@link GMime.Stream}.
     * @gir-type Class
     */
    class StreamMem extends Stream {
        static $gtype: GObject.GType<StreamMem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamMem.SignalSignatures;

        // Fields

        parent_object: Stream;
        buffer: Uint8Array;
        owner: boolean;

        // Constructors

        constructor(properties?: Partial<StreamMem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamMem;

        static new_with_buffer(buffer: Uint8Array | string): StreamMem;

        static new_with_byte_array(array: Uint8Array | string): StreamMem;

        // Signals

        /** @signal */
        connect<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamMem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the byte array from the memory stream.
         * @returns the byte array from the memory stream.
         */
        get_byte_array(): Uint8Array;
        /**
         * Gets whether or not `mem` owns the backend memory buffer.
         * @returns `true` if `mem` owns the backend memory buffer or `false` otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets the byte array on the memory stream.
         *
         * Note: The memory stream is not responsible for freeing the byte
         * array. Use `g_mime_stream_mem_set_owner()` to change this behavior.
         * @param array stream data
         */
        set_byte_array(array: Uint8Array | string): void;
        /**
         * Sets whether or not `mem` owns the backend memory buffer.
         *
         * Note: `owner` should be `true` if the stream should free the backend
         * memory buffer when destroyed or `false` otherwise.
         * @param owner `true` if this stream should own the {@link GLib.ByteArray} or `false` otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamMmap {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A memory-mapped {@link GMime.Stream}.
     * @gir-type Class
     */
    class StreamMmap extends Stream {
        static $gtype: GObject.GType<StreamMmap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamMmap.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;
        map: string;
        maplen: number;

        // Constructors

        constructor(properties?: Partial<StreamMmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number, prot: number, flags: number): StreamMmap;

        static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap;

        // Signals

        /** @signal */
        connect<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMmap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMmap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamMmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamNull {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} which has no backing store.
     * @gir-type Class
     */
    class StreamNull extends Stream {
        static $gtype: GObject.GType<StreamNull>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamNull.SignalSignatures;

        // Fields

        parent_object: Stream;
        written: number;
        newlines: number;

        // Constructors

        constructor(properties?: Partial<StreamNull.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamNull;

        // Signals

        /** @signal */
        connect<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamNull.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamNull.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamNull.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamPipe {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A {@link GMime.Stream} wrapper around pipes.
     * @gir-type Class
     */
    class StreamPipe extends Stream {
        static $gtype: GObject.GType<StreamPipe>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamPipe.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;

        // Constructors

        constructor(properties?: Partial<StreamPipe.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number): StreamPipe;

        // Signals

        /** @signal */
        connect<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamPipe.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamPipe.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamPipe.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend pipe descriptor.
         * @returns `true` if `stream` owns the backend pipe descriptor or `false` otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend pipe descriptor.
         *
         * Note: `owner` should be `true` if the stream should `close()` the
         * backend pipe descriptor when destroyed or `false` otherwise.
         * @param owner owner
         */
        set_owner(owner: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type CertificateClass = typeof Certificate;
    /**
     * @gir-type Alias
     */
    type CertificateListClass = typeof CertificateList;
    /**
     * State used by `g_mime_charset_best()` and `g_mime_charset_best_name()`.
     * @gir-type Struct
     */
    class Charset {
        static $gtype: GObject.GType<Charset>;

        // Fields

        mask: number;
        level: number;

        // Constructors

        constructor(
            properties?: Partial<{
                mask: number;
                level: number;
            }>,
        );

        // Static methods

        /**
         * Computes the best charset to use to encode this text buffer.
         * @param inbuf a UTF-8 text buffer
         * @param inlen input buffer length
         */
        static best(inbuf: string, inlen: number): string;
        /**
         * Attempts to find a canonical charset name for `charset`.
         *
         * Note: Will normally return the same value as
         * `g_mime_charset_iconv_name()` unless the system iconv does not use
         * the canonical ISO charset names (such as using ISO8859-1 rather
         * than the canonical form ISO-8859-1).
         * @param charset charset name
         */
        static canon_name(charset: string): string;
        /**
         * Attempts to find an iconv-friendly charset name for `charset`.
         * @param charset charset name
         */
        static iconv_name(charset: string): string;
        /**
         * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
         * charset.
         * @param isocharset ISO-8859-# charset
         */
        static iso_to_windows(isocharset: string): string;
        /**
         * Attempts to find a specific language code that is specific to
         * `charset`. Currently only handles CJK and Russian/Ukranian
         * charset->lang mapping. Everything else will return `null`.
         * @param charset charset name
         */
        static language(charset: string): string;
        /**
         * Gets the user's locale charset (or iso-8859-1 by default).
         *
         * Note: This function is deprecated. Use `g_mime_locale_charset()`
         * instead.
         */
        static locale_name(): string;
        /**
         * Initializes character set maps.
         *
         * Note: `g_mime_init()` calls this routine for you.
         */
        static map_init(): void;
        /**
         * Frees internal lookup tables created in `g_mime_charset_map_init()`.
         */
        static map_shutdown(): void;
        /**
         * Attempts to find an iconv-friendly charset name for `charset`.
         *
         * Note: This function is deprecated. Use `g_mime_charset_iconv_name()`
         * instead.
         * @param charset charset name
         */
        static name(charset: string): string;

        // Methods

        /**
         * Gets the best charset name based on the charset mask `charset`.
         * @returns a pointer to a string containing the best charset name that can represent the charset mask `charset`.
         */
        best_name(): string;
        /**
         * Check to see if the UTF-8 `text` will fit safely within `charset`.
         * @param charset a charset
         * @param text utf-8 text to check
         * @param len length of `text`
         * @returns `true` if it is safe to encode `text` into `charset` or `false` otherwise.
         */
        can_encode(charset: string, text: string, len: number): boolean;
        /**
         * Initializes a charset mask structure.
         */
        init(): void;
        /**
         * Steps through the input buffer 1 unicode character (glyph) at a
         * time (ie, not necessarily 1 byte at a time). Bitwise 'and' our
         * `charset`->mask with the mask for each glyph. This has the effect of
         * limiting what charsets our `charset`->mask can match.
         * @param inbuf input text buffer (must be in UTF-8)
         * @param inlen input buffer length
         */
        step(inbuf: string, inlen: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ContentDispositionClass = typeof ContentDisposition;
    /**
     * @gir-type Alias
     */
    type ContentTypeClass = typeof ContentType;
    /**
     * @gir-type Alias
     */
    type CryptoContextClass = typeof CryptoContext;
    /**
     * @gir-type Alias
     */
    type DataWrapperClass = typeof DataWrapper;
    /**
     * @gir-type Alias
     */
    type DecryptResultClass = typeof DecryptResult;
    /**
     * A context used for encoding or decoding data.
     * @gir-type Struct
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Fields

        encoding: ContentEncoding;
        uubuf: Uint8Array;
        encode: boolean;
        save: number;
        state: number;

        // Static methods

        /**
         * Decodes a chunk of base64 encoded data.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been decoded
         */
        static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Base64 encodes the input stream to the output stream. Call this
         * when finished encoding data with `g_mime_encoding_base64_encode_step()`
         * to flush off the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Base64 encodes a chunk of data. Performs an 'encode step', only
         * encodes blocks of 3 characters to the output at a time, saves
         * left-over state in state and save (initialise to 0 on first
         * invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Decodes a block of quoted-printable encoded data. Performs a
         * 'decode step' on a chunk of QP encoded data.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been decoded
         */
        static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Quoted-printable encodes a block of text. Call this when finished
         * encoding data with `g_mime_encoding_quoted_encode_step()` to flush off
         * the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Quoted-printable encodes a block of text. Performs an 'encode
         * step', saves left-over state in state and save (initialise to -1 on
         * first invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
         * uuencoded data. Assumes the "begin mode filename" line has
         * been stripped off.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been decoded
         */
        static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Uuencodes a chunk of data. Call this when finished encoding data
         * with `g_mime_encoding_uuencode_step()` to flush off the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param uubuf temporary buffer of 60 bytes
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static uuencode_close(
            inbuf: number,
            inlen: number,
            outbuf: number,
            uubuf: number,
            state: number,
            save: number,
        ): number;
        /**
         * Uuencodes a chunk of data. Performs an 'encode step', only encodes
         * blocks of 45 characters to the output at a time, saves left-over
         * state in `uubuf`, `state` and `save` (initialize to 0 on first
         * invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output stream
         * @param uubuf temporary buffer of 60 bytes
         * @param state holds the number of bits that are stored in `save`
         * @param save leftover bits that have not yet been encoded
         */
        static uuencode_step(
            inbuf: number,
            inlen: number,
            outbuf: number,
            uubuf: number,
            state: number,
            save: number,
        ): number;

        // Methods

        /**
         * Completes the incremental encode or decode of the input stream (see
         * `g_mime_encoding_step()` for details).
         * @param inbuf an input buffer to encode or decode
         * @param inlen input buffer length
         * @param outbuf an output buffer
         * @returns the number of bytes written to `outbuf`.
         */
        flush(inbuf: string, inlen: number, outbuf: string): number;
        /**
         * Initializes a {@link GMime.Encoding} state machine for decoding from
         * `encoding`.
         * @param encoding a {@link GMime.ContentEncoding} to use
         */
        init_decode(encoding: ContentEncoding | null): void;
        /**
         * Initializes a {@link GMime.Encoding} state machine for encoding to
         * `encoding`.
         * @param encoding a {@link GMime.ContentEncoding} to use
         */
        init_encode(encoding: ContentEncoding | null): void;
        /**
         * Given the input length, `inlen`, calculate the needed output length
         * to perform an encoding or decoding step.
         * @param inlen an input length
         * @returns the maximum number of bytes needed to encode or decode a buffer of `inlen` bytes.
         */
        outlen(inlen: number): number;
        /**
         * Resets the state of the {@link GMime.Encoding}.
         */
        reset(): void;
        /**
         * Incrementally encodes or decodes (depending on `state`) an input
         * stream by 'stepping' through a block of input at a time.
         *
         * You should make sure `outbuf` is large enough by calling
         * `g_mime_encoding_outlen()` to find out how large `outbuf` might need
         * to be.
         * @param inbuf an input buffer to encode or decode
         * @param inlen input buffer length
         * @param outbuf an output buffer
         * @returns the number of bytes written to `outbuf`.
         */
        step(inbuf: string, inlen: number, outbuf: string): number;
    }

    /**
     * @gir-type Alias
     */
    type FilterBasicClass = typeof FilterBasic;
    /**
     * @gir-type Alias
     */
    type FilterBestClass = typeof FilterBest;
    /**
     * @gir-type Alias
     */
    type FilterCRLFClass = typeof FilterCRLF;
    /**
     * @gir-type Alias
     */
    type FilterCharsetClass = typeof FilterCharset;
    /**
     * @gir-type Alias
     */
    type FilterClass = typeof Filter;
    /**
     * @gir-type Alias
     */
    type FilterEnrichedClass = typeof FilterEnriched;
    /**
     * @gir-type Alias
     */
    type FilterFromClass = typeof FilterFrom;
    /**
     * @gir-type Alias
     */
    type FilterGZipClass = typeof FilterGZip;
    /**
     * @gir-type Alias
     */
    type FilterHTMLClass = typeof FilterHTML;
    /**
     * @gir-type Alias
     */
    type FilterMd5Class = typeof FilterMd5;
    /**
     * @gir-type Alias
     */
    type FilterStripClass = typeof FilterStrip;
    /**
     * @gir-type Alias
     */
    type FilterWindowsClass = typeof FilterWindows;
    /**
     * @gir-type Alias
     */
    type FilterYencClass = typeof FilterYenc;
    /**
     * @gir-type Alias
     */
    type GpgContextClass = typeof GpgContext;
    /**
     * A message/rfc822 header.
     * @gir-type Struct
     */
    abstract class Header {
        static $gtype: GObject.GType<Header>;
    }

    /**
     * A message or mime-part header iterator. All members should be
     * considered private.
     * @gir-type Struct
     */
    class HeaderIter {
        static $gtype: GObject.GType<HeaderIter>;

        // Fields

        version: number;

        // Methods

        /**
         * Creates a dynamically allocated header iterator as a copy of
         * `iter`. You must free this iter with `g_mime_header_iter_free()`.
         * @returns a newly-allocated copy of `iter`.
         */
        copy(): HeaderIter;
        /**
         * Copies `src` to `dest`.
         * @param dest a {@link GMime.HeaderIter}
         */
        copy_to(dest: HeaderIter): void;
        /**
         * Check that `iter1` and `iter2` reference the same header.
         * @param iter2 a {@link GMime.HeaderIter}
         * @returns `true` if `iter1` and `iter2` refer to the same header or `false` otherwise.
         */
        equal(iter2: HeaderIter): boolean;
        /**
         * Updates `iter` to point to the first header.
         * @returns `true` on success or `false` otherwise.
         */
        first(): boolean;
        /**
         * Frees a dynamically-allocated {@link GMime.HeaderIter} as created by
         * `g_mime_header_iter_new()` or `g_mime_header_iter_copy()`.
         */
        free(): void;
        /**
         * Gets the current header's name.
         * @returns the header name or `null` if invalid.
         */
        get_name(): string;
        /**
         * Gets the current header's value.
         * @returns the header's raw, unprocessed value or `null` if invalid. Note: The returned value should be decoded with a function such as `g_mime_utils_header_decode_text()` before displaying to the user.
         */
        get_value(): string;
        /**
         * Checks if a {@link GMime.HeaderIter} is valid. An iterator may become
         * invalid if the {@link GMime.HeaderList} that the iterator refers to
         * changes.
         * @returns `true` if `iter` is still valid or `false` otherwise.
         */
        is_valid(): boolean;
        /**
         * Updates `iter` to point to the last header.
         * @returns `true` on success or `false` otherwise.
         */
        last(): boolean;
        /**
         * Advances to the next header.
         * @returns `true` on success or `false` otherwise.
         */
        next(): boolean;
        /**
         * Advances to the previous header.
         * @returns `true` on success or `false` otherwise.
         */
        prev(): boolean;
        /**
         * Removes the current header and advances to the next header.
         *
         * Note: If you remove the last header in the list, then `iter` will
         * become invalid regardless of whether or not other headers remain.
         * @returns `true` on success or `false` otherwise.
         */
        remove(): boolean;
        /**
         * Sets the current header's value to the new value.
         * @param value new header value
         * @returns `true` if the value was set or `false` otherwise (indicates invalid iter). Note: `value` should be encoded with a function such as `g_mime_utils_header_encode_text()`.
         */
        set_value(value: string): boolean;
    }

    /**
     * A message or mime-part header.
     * @gir-type Struct
     */
    abstract class HeaderList {
        static $gtype: GObject.GType<HeaderList>;

        // Methods

        /**
         * Appends a header. If `value` is `null`, a space will be set aside for it
         * (useful for setting the order of headers before values can be
         * obtained for them) otherwise the header will be unset.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param name header name
         * @param value header value
         */
        append(name: string, value: string): void;
        /**
         * Removes all of the headers from the {@link GMime.HeaderList}.
         */
        clear(): void;
        /**
         * Checks whether or not a header exists.
         * @param name header name
         * @returns `true` if the specified header exists or `false` otherwise.
         */
        contains(name: string): boolean;
        /**
         * Destroy the header list.
         */
        destroy(): void;
        /**
         * Calls `func` for each header name/value pair.
         * @param func function to be called for each header.
         */
        foreach(func: HeaderForeachFunc): void;
        /**
         * Gets the value of the first header with the specified name.
         * @param name header name
         * @returns the value of the header requested. Note: The returned value should be decoded with a function such as `g_mime_utils_header_decode_text()` before displaying to the user.
         */
        get(name: string): string;
        /**
         * Initializes an iterator for traversing `headers`.
         * @returns a `true` if successful or `false` if there are no headers to traverse.
         */
        get_iter(): [boolean, HeaderIter];
        /**
         * Gets the raw stream representing `headers`.
         * @returns a {@link GMime.Stream} if set or `null` otherwise.
         */
        get_stream(): Stream;
        /**
         * Prepends a header. If `value` is `null`, a space will be set aside
         * for it (useful for setting the order of headers before values can
         * be obtained for them) otherwise the header will be unset.
         *
         * Note: `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param name header name
         * @param value header value
         */
        prepend(name: string, value: string): void;
        /**
         * Remove the specified header.
         * @param name header name
         * @returns `true` if the header was successfully removed or `false` if the specified header could not be found.
         */
        remove(name: string): boolean;
        /**
         * Set the value of the specified header. If `value` is `null` and the
         * header, `name`, had not been previously set, a space will be set
         * aside for it (useful for setting the order of headers before values
         * can be obtained for them) otherwise the header will be unset.
         *
         * Note: If there are multiple headers with the specified field name,
         * the first instance of the header will be replaced and further
         * instances will be removed.
         *
         * Additionally, `value` should be encoded with a function such as
         * `g_mime_utils_header_encode_text()`.
         * @param name header name
         * @param value header value
         */
        set(name: string, value: string): void;
        /**
         * Set the raw header stream.
         * @param stream a {@link GMime.Stream}
         */
        set_stream(stream: Stream): void;
        /**
         * Allocates a string buffer containing the raw rfc822 headers
         * contained in `headers`.
         * @returns a string containing the header block.
         */
        to_string(): string;
        /**
         * Write the headers to a stream.
         * @param stream output stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(stream: Stream): number;
    }

    /**
     * @gir-type Alias
     */
    type InternetAddressClass = typeof InternetAddress;
    /**
     * @gir-type Alias
     */
    type InternetAddressGroupClass = typeof InternetAddressGroup;
    /**
     * @gir-type Alias
     */
    type InternetAddressListClass = typeof InternetAddressList;
    /**
     * @gir-type Alias
     */
    type InternetAddressMailboxClass = typeof InternetAddressMailbox;
    /**
     * @gir-type Alias
     */
    type MessageClass = typeof Message;
    /**
     * @gir-type Alias
     */
    type MessagePartClass = typeof MessagePart;
    /**
     * @gir-type Alias
     */
    type MessagePartialClass = typeof MessagePartial;
    /**
     * @gir-type Alias
     */
    type MultipartClass = typeof Multipart;
    /**
     * @gir-type Alias
     */
    type MultipartEncryptedClass = typeof MultipartEncrypted;
    /**
     * @gir-type Alias
     */
    type MultipartSignedClass = typeof MultipartSigned;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * A parameter name/value pair as used for some Content header fields.
     * @gir-type Struct
     */
    class Param {
        static $gtype: GObject.GType<Param>;

        // Fields

        name: string;
        value: string;

        // Methods

        /**
         * Releases all memory used by this mime param back to the Operating
         * System.
         */
        destroy(): void;
        /**
         * Gets the name of the parameter.
         * @returns the name of the parameter.
         */
        get_name(): string;
        /**
         * Gets the value of the parameter.
         * @returns the value of the parameter.
         */
        get_value(): string;
        /**
         * Gets the next {@link GMime.Param} node in the list.
         * @returns the next {@link GMime.Param} node in the list.
         */
        next(): Param;
        /**
         * Assumes the output string contains only the Content-* header and
         * it's immediate value.
         *
         * Writes the params out to the string `string`.
         * @param fold specifies whether or not to fold headers
         * @param str output string
         */
        write_to_string(fold: boolean, str: GLib.String): void;
    }

    /**
     * @gir-type Alias
     */
    type ParserClass = typeof Parser;
    /**
     * @gir-type Alias
     */
    type PartClass = typeof Part;
    /**
     * A MIME part iterator.
     * @gir-type Struct
     */
    abstract class PartIter {
        static $gtype: GObject.GType<PartIter>;

        // Methods

        /**
         * Frees the memory allocated by `g_mime_part_iter_new()`.
         */
        free(): void;
        /**
         * Gets the {@link GMime.Object} at the current {@link GMime.PartIter} position.
         * @returns the current {@link GMime.Object} or `null` if the state of `iter` is invalid.
         */
        get_current(): Object;
        /**
         * Gets the parent of the {@link GMime.Object} at the current {@link GMime.PartIter}
         * position.
         * @returns the parent {@link GMime.Object} or `null` if the state of `iter` is invalid.
         */
        get_parent(): Object;
        /**
         * Gets the path of the current {@link GMime.Object} in the MIME structure
         * used to initialize `iter`.
         * @returns a newly allocated string representation of the path to the {@link GMime.Object} at the current {@link GMime.PartIter} position.
         */
        get_path(): string;
        /**
         * Gets the toplevel {@link GMime.Object} used to initialize `iter`.
         * @returns the toplevel {@link GMime.Object}.
         */
        get_toplevel(): Object;
        /**
         * Checks that the current state of `iter` is valid.
         * @returns `true` if `iter` is valid or `false` otherwise.
         */
        is_valid(): boolean;
        /**
         * Updates the state of `iter` to point to the {@link GMime.Object} specified
         * by `path`.
         * @param path a string representing the path to jump to
         * @returns `true` if the {@link GMime.Object} specified by `path` exists or `false` otherwise.
         */
        jump_to(path: string): boolean;
        /**
         * Advances to the next part in the MIME structure used to initialize
         * `iter`.
         * @returns `true` if successful or `false` otherwise.
         */
        next(): boolean;
        /**
         * Rewinds to the previous part in the MIME structure used to
         * initialize `iter`.
         * @returns `true` if successful or `false` otherwise.
         */
        prev(): boolean;
        /**
         * Removes the {@link GMime.Object} at the current position from its
         * parent. If successful, `iter` is advanced to the next position
         * (since the current position will become invalid).
         * @returns `true` if the part at the current position was removed or `false` otherwise.
         */
        remove(): boolean;
        /**
         * Replaces the {@link GMime.Object} at the current position with `replacement`.
         * @param replacement a {@link GMime.Object}
         * @returns `true` if the part at the current position was replaced or `false` otherwise.
         */
        replace(replacement: Object): boolean;
        /**
         * Resets the state of `iter` to its initial state.
         */
        reset(): void;
    }

    /**
     * @gir-type Alias
     */
    type Pkcs7ContextClass = typeof Pkcs7Context;
    /**
     * A List of references, as per the References or In-Reply-To header
     * fields.
     * @gir-type Struct
     */
    class References {
        static $gtype: GObject.GType<References>;

        // Fields

        msgid: string;

        // Static methods

        /**
         * Appends a reference to msgid to the list of references.
         * @param refs the address of a {@link GMime.References} list
         * @param msgid a message-id string
         */
        static append(refs: References, msgid: string): void;
        /**
         * Clears the {@link GMime.References} list and resets it to `null`.
         * @param refs address of a {@link GMime.References} list
         */
        static clear(refs: References): void;

        // Methods

        /**
         * Frees the {@link GMime.References} list.
         */
        free(): void;
        /**
         * Gets the Message-Id reference from the {@link GMime.References} node.
         * @returns the Message-Id reference from the {@link GMime.References} node.
         */
        get_message_id(): string;
        /**
         * Advances to the next reference node in the {@link GMime.References} list.
         * @returns the next reference node in the {@link GMime.References} list.
         */
        get_next(): References;
    }

    /**
     * @gir-type Alias
     */
    type SignatureClass = typeof Signature;
    /**
     * @gir-type Alias
     */
    type SignatureListClass = typeof SignatureList;
    /**
     * @gir-type Alias
     */
    type StreamBufferClass = typeof StreamBuffer;
    /**
     * @gir-type Alias
     */
    type StreamCatClass = typeof StreamCat;
    /**
     * @gir-type Alias
     */
    type StreamClass = typeof Stream;
    /**
     * @gir-type Alias
     */
    type StreamFileClass = typeof StreamFile;
    /**
     * @gir-type Alias
     */
    type StreamFilterClass = typeof StreamFilter;
    /**
     * @gir-type Alias
     */
    type StreamFsClass = typeof StreamFs;
    /**
     * @gir-type Alias
     */
    type StreamGIOClass = typeof StreamGIO;
    /**
     * An I/O vector for use with `g_mime_stream_writev()`.
     * @gir-type Struct
     */
    class StreamIOVector {
        static $gtype: GObject.GType<StreamIOVector>;

        // Fields

        data: any;
        len: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                len: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type StreamMemClass = typeof StreamMem;
    /**
     * @gir-type Alias
     */
    type StreamMmapClass = typeof StreamMmap;
    /**
     * @gir-type Alias
     */
    type StreamNullClass = typeof StreamNull;
    /**
     * @gir-type Alias
     */
    type StreamPipeClass = typeof StreamPipe;
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

export default GMime;

// END
