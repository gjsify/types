/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TotemPlParser-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
const PARSER_CONTENT_RATING_CLEAN: string
const PARSER_CONTENT_RATING_EXPLICIT: string
const PARSER_CONTENT_RATING_UNRATED: string
/**
 * Metadata field for an entry's abstract text.
 */
const PARSER_FIELD_ABSTRACT: string
/**
 * Metadata field for an entry's album.
 */
const PARSER_FIELD_ALBUM: string
/**
 * Metadata field for an entry's default audio-track selection. The default
 * track is defined as NULL. Note that the value is sent as a string.
 */
const PARSER_FIELD_AUDIO_TRACK: string
/**
 * Metadata field for an entry's author/composer/director.
 */
const PARSER_FIELD_AUTHOR: string
/**
 * Metadata field for an entry's "autoplay" flag, which is %TRUE if the entry should play automatically.
 */
const PARSER_FIELD_AUTOPLAY: string
/**
 * Metadata field for an entry's base path.
 */
const PARSER_FIELD_BASE: string
/**
 * Metadata field for an entry's contact details for the webmaster.
 */
const PARSER_FIELD_CONTACT: string
/**
 * Metadata field for an entry's content rating. It is
 * %TOTEM_PL_PARSER_CONTENT_RATING_CLEAN for clean content,
 * %TOTEM_PL_PARSER_CONTENT_RATING_EXPLICIT for explicit content and
 * %TOTEM_PL_PARSER_CONTENT_RATING_UNRATED for content which is not
 * rated.
 */
const PARSER_FIELD_CONTENT_RATING: string
/**
 * Metadata field for an entry's content-type (usually a mime-type coming
 * from a web server).
 */
const PARSER_FIELD_CONTENT_TYPE: string
/**
 * Metadata field for an entry's copyright line.
 */
const PARSER_FIELD_COPYRIGHT: string
/**
 * Metadata field for an entry's description.
 */
const PARSER_FIELD_DESCRIPTION: string
/**
 * Metadata field for an entry's download URI. Only used if an alternate download
 * location is available for the entry.
 */
const PARSER_FIELD_DOWNLOAD_URI: string
/**
 * Metadata field for an entry's playback duration, which should be parsed using totem_pl_parser_parse_duration().
 */
const PARSER_FIELD_DURATION: string
/**
 * Metadata field for an entry's playback duration, in milliseconds. It's only used when an entry's
 * duration is available in that format, so one would get either the %TOTEM_PL_PARSER_FIELD_DURATION
 * or %TOTEM_PL_PARSER_FIELD_DURATION_MS as metadata.
 */
const PARSER_FIELD_DURATION_MS: string
/**
 * Metadata field for an entry's playback end time.
 */
const PARSER_FIELD_ENDTIME: string
/**
 * Metadata field for an entry's filesize in bytes. This is only advisory, and can sometimes not match the actual filesize of the stream.
 */
const PARSER_FIELD_FILESIZE: string
/**
 * Metadata field for an entry's primary genre. This is a string of
 * the form 'Genre1' or 'Genre1/SubGenre1".
 */
const PARSER_FIELD_GENRE: string
/**
 * Metadata field for an entry's full genre. This is a concatenated
 * string of the form 'Genre1/SubGenre1,Genre2/SubGenre2" etc.
 */
const PARSER_FIELD_GENRES: string
/**
 * Metadata field for an entry's identifier. Its use is dependent on the format
 * of the playlist parsed, and its origin.
 */
const PARSER_FIELD_ID: string
/**
 * Metadata field for an entry's thumbnail image URI.
 */
const PARSER_FIELD_IMAGE_URI: string
/**
 * Metadata field used to tell the calling code that the parsing of a playlist
 * started. It is only %TRUE for the metadata passed to #TotemPlParser::playlist-started or
 * #TotemPlParser::playlist-ended signal handlers.
 */
const PARSER_FIELD_IS_PLAYLIST: string
/**
 * Metadata field for an entry's audio language.
 */
const PARSER_FIELD_LANGUAGE: string
/**
 * Metadata field for an entry's "more info" URI.
 */
const PARSER_FIELD_MOREINFO: string
/**
 * Metadata field for an entry's status in a playlist. This is usually
 * used when saving the state of an on-going playlist.
 */
const PARSER_FIELD_PLAYING: string
/**
 * Metadata field for an entry's publication date, which should be parsed using totem_pl_parser_parse_date().
 */
const PARSER_FIELD_PUB_DATE: string
/**
 * Metadata field for an entry's preferred screen size.
 */
const PARSER_FIELD_SCREENSIZE: string
/**
 * Metadata field for an entry's playback start time, which should be parsed using totem_pl_parser_parse_duration().
 */
const PARSER_FIELD_STARTTIME: string
/**
 * The URI of the entry's subtitle file.
 */
const PARSER_FIELD_SUBTITLE_URI: string
/**
 * Metadata field for an entry's displayable title.
 */
const PARSER_FIELD_TITLE: string
/**
 * Metadata field for an entry's preferred UI mode.
 */
const PARSER_FIELD_UI_MODE: string
/**
 * Metadata field for an entry's URI.
 */
const PARSER_FIELD_URI: string
/**
 * Metadata field for an entry's playback volume.
 */
const PARSER_FIELD_VOLUME: string
const PARSER_VERSION_MAJOR: number
const PARSER_VERSION_MICRO: number
const PARSER_VERSION_MINOR: number
function parserErrorQuark(): GLib.Quark
function parserMetadataGetType(): GObject.Type
interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TotemPlParser-1.0.TotemPlParser.Parser */
    /**
     * If %TRUE, the parser will output debug information.
     */
    debug?: boolean
    /**
     * If %TRUE, the parser will not parse unsafe locations, such as local devices
     * and local files if the playlist isn't local. This is useful if the library
     * is parsing a playlist from a remote location such as a website.
     */
    disableUnsafe?: boolean
    /**
     * If %TRUE, the parser will attempt to parse a playlist, even if it
     * appears to be unsupported (usually because of its filename extension).
     */
    force?: boolean
    /**
     * If %TRUE, the parser will recursively fetch playlists linked to by
     * the current one.
     */
    recurse?: boolean
}
class Parser {
    /* Properties of TotemPlParser-1.0.TotemPlParser.Parser */
    /**
     * If %TRUE, the parser will output debug information.
     */
    debug: boolean
    /**
     * If %TRUE, the parser will not parse unsafe locations, such as local devices
     * and local files if the playlist isn't local. This is useful if the library
     * is parsing a playlist from a remote location such as a website.
     */
    disableUnsafe: boolean
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Parser */
    /**
     * Adds a glob to the list of mimetypes to ignore, so that
     * any URI of that glob is ignored during playlist parsing.
     * @param glob a glob to ignore
     */
    addIgnoredGlob(glob: string): void
    /**
     * Adds a mimetype to the list of mimetypes to ignore, so that
     * any URI of that mimetype is ignored during playlist parsing.
     * @param mimetype the mimetype to ignore
     */
    addIgnoredMimetype(mimetype: string): void
    /**
     * Adds a scheme to the list of schemes to ignore, so that
     * any URI using that scheme is ignored during playlist parsing.
     * @param scheme the scheme to ignore
     */
    addIgnoredScheme(scheme: string): void
    /**
     * Parses a playlist given by the absolute URI `uri`. This method is
     * synchronous, and will block on (e.g.) network requests to slow
     * servers. totem_pl_parser_parse_async() is recommended instead.
     * 
     * Return values are as totem_pl_parser_parse_with_base().
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     */
    parse(uri: string, fallback: boolean): ParserResult
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
    parseAsync(uri: string, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous playlist parsing operation started with totem_pl_parser_parse_async()
     * or totem_pl_parser_parse_with_base_async().
     * 
     * If parsing of the playlist is cancelled part-way through, %TOTEM_PL_PARSER_RESULT_CANCELLED is returned when
     * this function is called.
     * @param asyncResult a #GAsyncResult
     */
    parseFinish(asyncResult: Gio.AsyncResult): ParserResult
    /**
     * Parses a playlist given by the absolute URI `uri,` using
     * `base` to resolve relative paths where appropriate.
     * @param uri the URI of the playlist to parse
     * @param base the base path for relative filenames, or %NULL
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     */
    parseWithBase(uri: string, base: string | null, fallback: boolean): ParserResult
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
    parseWithBaseAsync(uri: string, base: string | null, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean
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
    saveAsync(playlist: Playlist, dest: Gio.File, title: string, type: ParserType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous playlist saving operation started with totem_pl_parser_save_async().
     * 
     * If saving of the playlist is cancelled part-way through, %G_IO_ERROR_CANCELLED will be
     * returned when this function is called.
     * @param asyncResult a #GAsyncResult
     */
    saveFinish(asyncResult: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of TotemPlParser-1.0.TotemPlParser.Parser */
    /**
     * The ::entry-parsed signal is emitted when a new entry is parsed.
     * @param uri the URI of the entry parsed
     * @param metadata a #GHashTable of metadata relating to the entry added
     */
    connect(sigName: "entry-parsed", callback: ((uri: string, metadata: GLib.HashTable) => void)): number
    on(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "entry-parsed", uri: string, metadata: GLib.HashTable): void
    /**
     * The ::playlist-ended signal is emitted when a playlist is finished
     * parsing. It is only called when #TotemPlParser::playlist-started
     * has been called for that playlist.
     * @param uri the URI of the playlist that finished parsing.
     */
    connect(sigName: "playlist-ended", callback: ((uri: string) => void)): number
    on(sigName: "playlist-ended", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playlist-ended", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playlist-ended", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "playlist-ended", uri: string): void
    /**
     * The ::playlist-started signal is emitted when a playlist parsing has
     * started. This signal isn't emitted for all types of playlists, but
     * can be relied on to be called for playlists which support playlist
     * metadata, such as title.
     * @param uri the URI of the new playlist started
     * @param metadata a #GHashTable of metadata relating to the playlist that started.
     */
    connect(sigName: "playlist-started", callback: ((uri: string, metadata: GLib.HashTable) => void)): number
    on(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "playlist-started", uri: string, metadata: GLib.HashTable): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::debug", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-unsafe", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-unsafe", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recurse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    /**
     * Checks if the first `len` bytes of `data` can be parsed.
     * @param data the data to check for parsability
     * @param len the length of data to check
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromData(data: string, len: number, debug: boolean): boolean
    /**
     * Checks if the file can be parsed. Files can be parsed if:
     * <itemizedlist>
     *  <listitem><para>they have a special mimetype, or</para></listitem>
     *  <listitem><para>they have a mimetype which could be a video or a playlist.</para></listitem>
     * </itemizedlist>
     * @param filename the file to check for parsability
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromFilename(filename: string, debug: boolean): boolean
    /**
     * Checks if the remote URI can be parsed. Note that this does
     * not actually try to open the remote URI, or deduce its mime-type
     * from filename, as this would bring too many false positives.
     * @param uri the remote URI to check for parsability
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromUri(uri: string, debug: boolean): boolean
    /**
     * Parses the given date string and returns it as a <type>gint64</type>
     * denoting the date in seconds since the UNIX Epoch.
     * @param dateStr the date string to parse
     * @param debug %TRUE if debug statements should be printed
     */
    static parseDate(dateStr: string, debug: boolean): number
    /**
     * Parses the given duration string and returns it as a <type>gint64</type>
     * denoting the duration in seconds.
     * @param duration the duration string to parse
     * @param debug %TRUE if debug statements should be printed
     */
    static parseDuration(duration: string, debug: boolean): number
    static $gtype: GObject.Type
}
interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
}
class Playlist {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Playlist */
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
     */
    getValue(iter: PlaylistIter, key: string, value: any): boolean
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
     */
    iterFirst(): [ /* returnType */ boolean, /* iter */ PlaylistIter ]
    /**
     * Modifies `iter` so it points to the next element it previously
     * pointed to. This function will return %FALSE if there was no
     * next element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     */
    iterNext(iter: PlaylistIter): boolean
    /**
     * Modifies `iter` so it points to the previous element it previously
     * pointed to. This function will return %FALSE if there was no
     * previous element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     */
    iterPrev(iter: PlaylistIter): boolean
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
     */
    setValue(iter: PlaylistIter, key: string, value: any): boolean
    /**
     * Returns the number of elements in `playlist`.
     */
    size(): number
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playlist
    static $gtype: GObject.Type
}
abstract class ParserClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.ParserClass */
    /**
     * the parent class
     */
    parentClass: GObject.ObjectClass
    entryParsed: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistStarted: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistEnded: (parser: Parser, uri: string) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PlaylistClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.PlaylistClass */
    /**
     * the parent class
     */
    parentClass: GObject.ObjectClass
    static name: string
}
class PlaylistIter {
    static name: string
}
}
export default TotemPlParser;