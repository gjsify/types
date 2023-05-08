
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * TotemPlParser-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace TotemPlParser {

/**
 * Allows you to differentiate between different
 * errors occurring during file operations in a #TotemPlParser.
 */
enum ParserError {
    /**
     * Error attempting to open a disc device when no disc is present
     */
    NO_DISC,
    /**
     * An attempted mount operation failed
     */
    MOUNT_FAILED,
    /**
     * Playlist to be saved is empty
     */
    EMPTY_PLAYLIST,
}
/**
 * Gives the result of parsing a playlist.
 */
enum ParserResult {
    /**
     * The playlist could not be handled.
     */
    UNHANDLED,
    /**
     * There was an error parsing the playlist.
     */
    ERROR,
    /**
     * The playlist was parsed successfully.
     */
    SUCCESS,
    /**
     * The playlist was ignored due to its scheme or MIME type (see totem_pl_parser_add_ignored_scheme()
     * and totem_pl_parser_add_ignored_mimetype()).
     */
    IGNORED,
    /**
     * Parsing of the playlist was cancelled part-way through.
     */
    CANCELLED,
}
/**
 * The type of playlist a #TotemPlParser will parse.
 */
enum ParserType {
    /**
     * PLS parser
     */
    PLS,
    /**
     * M3U parser
     */
    M3U,
    /**
     * M3U (DOS linebreaks) parser
     */
    M3U_DOS,
    /**
     * XSPF parser
     */
    XSPF,
    /**
     * iRiver PLA parser
     */
    IRIVER_PLA,
}
const PARSER_CONTENT_RATING_CLEAN: string | null
const PARSER_CONTENT_RATING_EXPLICIT: string | null
const PARSER_CONTENT_RATING_UNRATED: string | null
/**
 * Metadata field for an entry's abstract text.
 */
const PARSER_FIELD_ABSTRACT: string | null
/**
 * Metadata field for an entry's album.
 */
const PARSER_FIELD_ALBUM: string | null
/**
 * Metadata field for an entry's default audio-track selection. The default
 * track is defined as NULL. Note that the value is sent as a string.
 */
const PARSER_FIELD_AUDIO_TRACK: string | null
/**
 * Metadata field for an entry's author/composer/director.
 */
const PARSER_FIELD_AUTHOR: string | null
/**
 * Metadata field for an entry's "autoplay" flag, which is %TRUE if the entry should play automatically.
 */
const PARSER_FIELD_AUTOPLAY: string | null
/**
 * Metadata field for an entry's base path.
 */
const PARSER_FIELD_BASE: string | null
/**
 * Metadata field for an entry's contact details for the webmaster.
 */
const PARSER_FIELD_CONTACT: string | null
/**
 * Metadata field for an entry's content rating. It is
 * %TOTEM_PL_PARSER_CONTENT_RATING_CLEAN for clean content,
 * %TOTEM_PL_PARSER_CONTENT_RATING_EXPLICIT for explicit content and
 * %TOTEM_PL_PARSER_CONTENT_RATING_UNRATED for content which is not
 * rated.
 */
const PARSER_FIELD_CONTENT_RATING: string | null
/**
 * Metadata field for an entry's content-type (usually a mime-type coming
 * from a web server).
 */
const PARSER_FIELD_CONTENT_TYPE: string | null
/**
 * Metadata field for an entry's copyright line.
 */
const PARSER_FIELD_COPYRIGHT: string | null
/**
 * Metadata field for an entry's description.
 */
const PARSER_FIELD_DESCRIPTION: string | null
/**
 * Metadata field for an entry's download URI. Only used if an alternate download
 * location is available for the entry.
 */
const PARSER_FIELD_DOWNLOAD_URI: string | null
/**
 * Metadata field for an entry's playback duration, which should be parsed using totem_pl_parser_parse_duration().
 */
const PARSER_FIELD_DURATION: string | null
/**
 * Metadata field for an entry's playback duration, in milliseconds. It's only used when an entry's
 * duration is available in that format, so one would get either the %TOTEM_PL_PARSER_FIELD_DURATION
 * or %TOTEM_PL_PARSER_FIELD_DURATION_MS as metadata.
 */
const PARSER_FIELD_DURATION_MS: string | null
/**
 * Metadata field for an entry's playback end time.
 */
const PARSER_FIELD_ENDTIME: string | null
/**
 * Metadata field for an entry's filesize in bytes. This is only advisory, and can sometimes not match the actual filesize of the stream.
 */
const PARSER_FIELD_FILESIZE: string | null
/**
 * Metadata field for an entry's primary genre. This is a string of
 * the form 'Genre1' or 'Genre1/SubGenre1".
 */
const PARSER_FIELD_GENRE: string | null
/**
 * Metadata field for an entry's full genre. This is a concatenated
 * string of the form 'Genre1/SubGenre1,Genre2/SubGenre2" etc.
 */
const PARSER_FIELD_GENRES: string | null
/**
 * Metadata field for an entry's identifier. Its use is dependent on the format
 * of the playlist parsed, and its origin.
 */
const PARSER_FIELD_ID: string | null
/**
 * Metadata field for an entry's thumbnail image URI.
 */
const PARSER_FIELD_IMAGE_URI: string | null
/**
 * Metadata field used to tell the calling code that the parsing of a playlist
 * started. It is only %TRUE for the metadata passed to #TotemPlParser::playlist-started or
 * #TotemPlParser::playlist-ended signal handlers.
 */
const PARSER_FIELD_IS_PLAYLIST: string | null
/**
 * Metadata field for an entry's audio language.
 */
const PARSER_FIELD_LANGUAGE: string | null
/**
 * Metadata field for an entry's "more info" URI.
 */
const PARSER_FIELD_MOREINFO: string | null
/**
 * Metadata field for an entry's status in a playlist. This is usually
 * used when saving the state of an on-going playlist.
 */
const PARSER_FIELD_PLAYING: string | null
/**
 * Metadata field for an entry's publication date, which should be parsed using totem_pl_parser_parse_date().
 */
const PARSER_FIELD_PUB_DATE: string | null
/**
 * Metadata field for an entry's preferred screen size.
 */
const PARSER_FIELD_SCREENSIZE: string | null
/**
 * Metadata field for an entry's playback start time, which should be parsed using totem_pl_parser_parse_duration().
 */
const PARSER_FIELD_STARTTIME: string | null
/**
 * The URI of the entry's subtitle file.
 */
const PARSER_FIELD_SUBTITLE_URI: string | null
/**
 * Metadata field for an entry's displayable title.
 */
const PARSER_FIELD_TITLE: string | null
/**
 * Metadata field for an entry's preferred UI mode.
 */
const PARSER_FIELD_UI_MODE: string | null
/**
 * Metadata field for an entry's URI.
 */
const PARSER_FIELD_URI: string | null
/**
 * Metadata field for an entry's playback volume.
 */
const PARSER_FIELD_VOLUME: string | null
const PARSER_VERSION_MAJOR: number
const PARSER_VERSION_MICRO: number
const PARSER_VERSION_MINOR: number
function parser_error_quark(): GLib.Quark
function parser_metadata_get_type(): GObject.GType
module Parser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `entry-parsed`
     */
    interface EntryParsedSignalCallback {
        ($obj: Parser, uri: string | null, metadata: GLib.HashTable): void
    }

    /**
     * Signal callback interface for `playlist-ended`
     */
    interface PlaylistEndedSignalCallback {
        ($obj: Parser, uri: string | null): void
    }

    /**
     * Signal callback interface for `playlist-started`
     */
    interface PlaylistStartedSignalCallback {
        ($obj: Parser, uri: string | null, metadata: GLib.HashTable): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TotemPlParser-1.0.TotemPlParser.Parser

        /**
         * If %TRUE, the parser will output debug information.
         */
        debug?: boolean | null
        /**
         * If %TRUE, the parser will not parse unsafe locations, such as local devices
         * and local files if the playlist isn't local. This is useful if the library
         * is parsing a playlist from a remote location such as a website.
         */
        disable_unsafe?: boolean | null
        /**
         * If %TRUE, the parser will attempt to parse a playlist, even if it
         * appears to be unsupported (usually because of its filename extension).
         */
        force?: boolean | null
        /**
         * If %TRUE, the parser will recursively fetch playlists linked to by
         * the current one.
         */
        recurse?: boolean | null
    }

}

interface Parser {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Parser

    /**
     * If %TRUE, the parser will output debug information.
     */
    debug: boolean
    /**
     * If %TRUE, the parser will not parse unsafe locations, such as local devices
     * and local files if the playlist isn't local. This is useful if the library
     * is parsing a playlist from a remote location such as a website.
     */
    disable_unsafe: boolean
    /**
     * If %TRUE, the parser will attempt to parse a playlist, even if it
     * appears to be unsupported (usually because of its filename extension).
     */
    force: boolean
    /**
     * If %TRUE, the parser will recursively fetch playlists linked to by
     * the current one.
     */
    recurse: boolean

    // Own fields of TotemPlParser-1.0.TotemPlParser.Parser

    parent: GObject.Object
    priv: ParserPrivate

    // Owm methods of TotemPlParser-1.0.TotemPlParser.Parser

    /**
     * Adds a glob to the list of mimetypes to ignore, so that
     * any URI of that glob is ignored during playlist parsing.
     * @param glob a glob to ignore
     */
    add_ignored_glob(glob: string | null): void
    /**
     * Adds a mimetype to the list of mimetypes to ignore, so that
     * any URI of that mimetype is ignored during playlist parsing.
     * @param mimetype the mimetype to ignore
     */
    add_ignored_mimetype(mimetype: string | null): void
    /**
     * Adds a scheme to the list of schemes to ignore, so that
     * any URI using that scheme is ignored during playlist parsing.
     * @param scheme the scheme to ignore
     */
    add_ignored_scheme(scheme: string | null): void
    /**
     * Parses a playlist given by the absolute URI `uri`. This method is
     * synchronous, and will block on (e.g.) network requests to slow
     * servers. totem_pl_parser_parse_async() is recommended instead.
     * 
     * Return values are as totem_pl_parser_parse_with_base().
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @returns a #TotemPlParserResult
     */
    parse(uri: string | null, fallback: boolean): ParserResult
    /**
     * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
     * when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
     * to get the results of the operation.
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when parsing is finished
     */
    parse_async(uri: string | null, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of parse_async

    /**
     * Promisified version of {@link parse_async}
     * 
     * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
     * when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
     * to get the results of the operation.
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A Promise of: a #TotemPlParserResult
     */
    parse_async(uri: string | null, fallback: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<ParserResult>
    /**
     * Finishes an asynchronous playlist parsing operation started with totem_pl_parser_parse_async()
     * or totem_pl_parser_parse_with_base_async().
     * 
     * If parsing of the playlist is cancelled part-way through, %TOTEM_PL_PARSER_RESULT_CANCELLED is returned when
     * this function is called.
     * @param async_result a #GAsyncResult
     * @returns a #TotemPlParserResult
     */
    parse_finish(async_result: Gio.AsyncResult): ParserResult
    /**
     * Parses a playlist given by the absolute URI `uri,` using
     * `base` to resolve relative paths where appropriate.
     * @param uri the URI of the playlist to parse
     * @param base the base path for relative filenames, or %NULL
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @returns a #TotemPlParserResult
     */
    parse_with_base(uri: string | null, base: string | null, fallback: boolean): ParserResult
    /**
     * Starts asynchronous parsing of a playlist given by the absolute URI `uri,` using `base` to resolve relative paths where appropriate.
     * `parser` and `uri` are both reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see totem_pl_parser_parse_with_base(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
     * to get the results of the operation.
     * @param uri the URI of the playlist to parse
     * @param base the base path for relative filenames, or %NULL
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when parsing is finished
     */
    parse_with_base_async(uri: string | null, base: string | null, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Writes the playlist held by `parser` and `playlist` out to the path
     * pointed by `dest`. The playlist is written in the format `type` and is
     * given the title `title`.
     * 
     * If the `output` file is a directory the #G_IO_ERROR_IS_DIRECTORY error
     * will be returned, and if the file is some other form of non-regular file
     * then a #G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some file
     * systems don't allow all file names, and may return a
     * #G_IO_ERROR_INVALID_FILENAME error, and if the name is too long,
     * #G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are possible
     * too, and depend on what kind of filesystem the file is on.
     * 
     * In extreme cases, a #G_IO_ERROR_INVALID_ARGUMENT error can be returned, if
     * parts of the playlist to be written are too long.
     * 
     * If writing a PLA playlist and there is an error converting a URI's encoding,
     * a code from #GConvertError will be returned.
     * @param playlist a #TotemPlPlaylist
     * @param dest output #GFile
     * @param title the playlist title
     * @param type a #TotemPlParserType for the outputted playlist
     * @returns %TRUE on success
     */
    save(playlist: Playlist, dest: Gio.File, title: string | null, type: ParserType): boolean
    /**
     * Starts asynchronous version of totem_pl_parser_save(). For more details
     * see totem_pl_parser_save().
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * totem_pl_parser_save_finish() to get the results of the operation.
     * @param playlist a #TotemPlPlaylist
     * @param dest output #GFile
     * @param title the playlist title
     * @param type a #TotemPlParserType for the outputted playlist
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when saving has finished
     */
    save_async(playlist: Playlist, dest: Gio.File, title: string | null, type: ParserType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_async

    /**
     * Promisified version of {@link save_async}
     * 
     * Starts asynchronous version of totem_pl_parser_save(). For more details
     * see totem_pl_parser_save().
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * totem_pl_parser_save_finish() to get the results of the operation.
     * @param playlist a #TotemPlPlaylist
     * @param dest output #GFile
     * @param title the playlist title
     * @param type a #TotemPlParserType for the outputted playlist
     * @param cancellable a #GCancellable, or %NULL
     * @returns A Promise of: %TRUE on success, %FALSE on failure.
     */
    save_async(playlist: Playlist, dest: Gio.File, title: string | null, type: ParserType, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes an asynchronous playlist saving operation started with totem_pl_parser_save_async().
     * 
     * If saving of the playlist is cancelled part-way through, %G_IO_ERROR_CANCELLED will be
     * returned when this function is called.
     * @param async_result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure.
     */
    save_finish(async_result: Gio.AsyncResult): boolean

    // Own virtual methods of TotemPlParser-1.0.TotemPlParser.Parser

    vfunc_entry_parsed(uri: string | null, metadata: GLib.HashTable): void
    vfunc_playlist_ended(uri: string | null): void
    vfunc_playlist_started(uri: string | null, metadata: GLib.HashTable): void

    // Own signals of TotemPlParser-1.0.TotemPlParser.Parser

    connect(sigName: "entry-parsed", callback: Parser.EntryParsedSignalCallback): number
    connect_after(sigName: "entry-parsed", callback: Parser.EntryParsedSignalCallback): number
    emit(sigName: "entry-parsed", uri: string | null, metadata: GLib.HashTable, ...args: any[]): void
    connect(sigName: "playlist-ended", callback: Parser.PlaylistEndedSignalCallback): number
    connect_after(sigName: "playlist-ended", callback: Parser.PlaylistEndedSignalCallback): number
    emit(sigName: "playlist-ended", uri: string | null, ...args: any[]): void
    connect(sigName: "playlist-started", callback: Parser.PlaylistStartedSignalCallback): number
    connect_after(sigName: "playlist-started", callback: Parser.PlaylistStartedSignalCallback): number
    emit(sigName: "playlist-started", uri: string | null, metadata: GLib.HashTable, ...args: any[]): void

    // Class property signals of TotemPlParser-1.0.TotemPlParser.Parser

    connect(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debug", ...args: any[]): void
    connect(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-unsafe", ...args: any[]): void
    connect(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recurse", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #TotemPlParser structure are private and should never be accessed directly.
 * @class 
 */
class Parser extends GObject.Object {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of TotemPlParser-1.0.TotemPlParser.Parser

    constructor(config?: Parser.ConstructorProperties) 
    /**
     * Creates a #TotemPlParser object.
     * @constructor 
     * @returns a new #TotemPlParser
     */
    constructor() 
    /**
     * Creates a #TotemPlParser object.
     * @constructor 
     * @returns a new #TotemPlParser
     */
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
    /**
     * Checks if the first `len` bytes of `data` can be parsed.
     * @param data the data to check for parsability
     * @param len the length of data to check
     * @param debug %TRUE if debug statements should be printed
     * @returns %TRUE if @data can be parsed
     */
    static can_parse_from_data(data: string | null, len: number, debug: boolean): boolean
    /**
     * Checks if the file can be parsed. Files can be parsed if:
     * <itemizedlist>
     *  <listitem><para>they have a special mimetype, or</para></listitem>
     *  <listitem><para>they have a mimetype which could be a video or a playlist.</para></listitem>
     * </itemizedlist>
     * @param filename the file to check for parsability
     * @param debug %TRUE if debug statements should be printed
     * @returns %TRUE if @filename can be parsed
     */
    static can_parse_from_filename(filename: string | null, debug: boolean): boolean
    /**
     * Checks if the remote URI can be parsed. Note that this does
     * not actually try to open the remote URI, or deduce its mime-type
     * from filename, as this would bring too many false positives.
     * @param uri the remote URI to check for parsability
     * @param debug %TRUE if debug statements should be printed
     * @returns %TRUE if @uri could be parsed
     */
    static can_parse_from_uri(uri: string | null, debug: boolean): boolean
    /**
     * Parses the given date string and returns it as a <type>gint64</type>
     * denoting the date in seconds since the UNIX Epoch.
     * @param date_str the date string to parse
     * @param debug %TRUE if debug statements should be printed
     * @returns the date in seconds, or -1 on error
     */
    static parse_date(date_str: string | null, debug: boolean): number
    /**
     * Parses the given duration string and returns it as a <type>gint64</type>
     * denoting the duration in seconds.
     * @param duration the duration string to parse
     * @param debug %TRUE if debug statements should be printed
     * @returns the duration in seconds, or -1 on error
     */
    static parse_duration(duration: string | null, debug: boolean): number
}

module Playlist {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Playlist {

    // Own fields of TotemPlParser-1.0.TotemPlParser.Playlist

    parent_instance: GObject.Object

    // Owm methods of TotemPlParser-1.0.TotemPlParser.Playlist

    /**
     * Appends a new empty element to `playlist,` and modifies `iter` so
     * it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     */
    append(): /* iter */ PlaylistIter
    /**
     * Gets the value for `key` (Such as %TOTEM_PL_PARSER_FIELD_URI) in
     * the playlist item pointed by `iter`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @param key data key
     * @param value an empty #GValue to set
     * @returns %TRUE if @iter contains data for @key.
     */
    get_value(iter: PlaylistIter, key: string | null, value: any): boolean
    /**
     * Inserts a new empty element to `playlist` at `position,` and modifies
     * `iter` so it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     * 
     * `position` may be minor than 0 to prepend elements, or bigger than
     * the current `playlist` size to append elements.
     * @param position position in the playlist
     */
    insert(position: number): /* iter */ PlaylistIter
    /**
     * Modifies `iter` so it points to the first element in `playlist`.
     * @returns %TRUE if there is such first element.
     */
    iter_first(): [ /* returnType */ boolean, /* iter */ PlaylistIter ]
    /**
     * Modifies `iter` so it points to the next element it previously
     * pointed to. This function will return %FALSE if there was no
     * next element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @returns %TRUE if there was next element.
     */
    iter_next(iter: PlaylistIter): boolean
    /**
     * Modifies `iter` so it points to the previous element it previously
     * pointed to. This function will return %FALSE if there was no
     * previous element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @returns %TRUE if there was previous element.
     */
    iter_prev(iter: PlaylistIter): boolean
    /**
     * Prepends a new empty element to `playlist,` and modifies `iter` so
     * it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     */
    prepend(): /* iter */ PlaylistIter
    /**
     * Sets the value for `key` in the element pointed by `iter`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @param key key to set the value for
     * @param value #GValue containing the key value
     * @returns %TRUE if the value could be stored in @playlist
     */
    set_value(iter: PlaylistIter, key: string | null, value: any): boolean
    /**
     * Returns the number of elements in `playlist`.
     * @returns The number of elements
     */
    size(): number

    // Class property signals of TotemPlParser-1.0.TotemPlParser.Playlist

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #TotemPlPlaylist structure are private and should never be accessed directly.
 * @class 
 */
class Playlist extends GObject.Object {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Playlist

    static name: string
    static $gtype: GObject.GType<Playlist>

    // Constructors of TotemPlParser-1.0.TotemPlParser.Playlist

    constructor(config?: Playlist.ConstructorProperties) 
    /**
     * Creates a new #TotemPlPlaylist object.
     * @constructor 
     * @returns The newly created #TotemPlPlaylist
     */
    constructor() 
    /**
     * Creates a new #TotemPlPlaylist object.
     * @constructor 
     * @returns The newly created #TotemPlPlaylist
     */
    static new(): Playlist
    _init(config?: Playlist.ConstructorProperties): void
}

interface ParserClass {

    // Own fields of TotemPlParser-1.0.TotemPlParser.ParserClass

    /**
     * the parent class
     * @field 
     */
    parent_class: GObject.ObjectClass
    entry_parsed: (parser: Parser, uri: string | null, metadata: GLib.HashTable) => void
    playlist_started: (parser: Parser, uri: string | null, metadata: GLib.HashTable) => void
    playlist_ended: (parser: Parser, uri: string | null) => void
}

/**
 * The class structure for the #TotemPlParser type.
 * @record 
 */
abstract class ParserClass {

    // Own properties of TotemPlParser-1.0.TotemPlParser.ParserClass

    static name: string
}

interface ParserPrivate {
}

class ParserPrivate {

    // Own properties of TotemPlParser-1.0.TotemPlParser.ParserPrivate

    static name: string
}

interface PlaylistClass {

    // Own fields of TotemPlParser-1.0.TotemPlParser.PlaylistClass

    /**
     * the parent class
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * All the fields in the #TotemPlPlaylistClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PlaylistClass {

    // Own properties of TotemPlParser-1.0.TotemPlParser.PlaylistClass

    static name: string
}

interface PlaylistIter {
}

/**
 * All the fields in the #TotemPlPlaylistIter structure are private and should never be accessed directly.
 * @record 
 */
class PlaylistIter {

    // Own properties of TotemPlParser-1.0.TotemPlParser.PlaylistIter

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default TotemPlParser;
// END