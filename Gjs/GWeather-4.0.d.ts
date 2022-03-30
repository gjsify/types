/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GWeather-4.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GWeather {

/**
 * The current or forecasted significant phenomenon.
 */
enum ConditionPhenomenon {
    /**
     * value not available
     */
    INVALID,
    /**
     * no significant phenomenon
     */
    NONE,
    DRIZZLE,
    RAIN,
    SNOW,
    SNOW_GRAINS,
    ICE_CRYSTALS,
    ICE_PELLETS,
    HAIL,
    SMALL_HAIL,
    UNKNOWN_PRECIPITATION,
    MIST,
    FOG,
    SMOKE,
    VOLCANIC_ASH,
    SAND,
    HAZE,
    SPRAY,
    DUST,
    SQUALL,
    SANDSTORM,
    DUSTSTORM,
    FUNNEL_CLOUD,
    TORNADO,
    DUST_WHIRLS,
    LAST,
}
/**
 * An additional modifier applied to a #GWeatherConditionPhenomenon to
 * describe the current or forecasted weather conditions.
 * 
 * The exact meaning of each qualifier is described at
 * http://www.weather.com/glossary/ and
 * http://www.crh.noaa.gov/arx/wx.tbl.php
 */
enum ConditionQualifier {
    /**
     * value not available
     */
    INVALID,
    /**
     * no qualifier for the phenomenon
     */
    NONE,
    /**
     * phenomenon happening in the proximity of the
     *   location, not in the actual location
     */
    VICINITY,
    /**
     * phenomenon is light or predicted to be light
     */
    LIGHT,
    /**
     * phenomenon is moderate or predicted to be
     *   moderate
     */
    MODERATE,
    /**
     * phenomenon is heavy or predicted to be heavy
     */
    HEAVY,
    /**
     * shallow fog (only valid with
     *   %GWEATHER_PHENOMENON_FOG)
     */
    SHALLOW,
    /**
     * patches of fog (only valid with
     *   %GWEATHER_PHENOMENON_FOG)
     */
    PATCHES,
    /**
     * partial fog (only valid with
     *   %GWEATHER_PHENOMENON_FOG)
     */
    PARTIAL,
    /**
     * phenomenon will be a thunderstorm and/or
     *   will include lightning
     */
    THUNDERSTORM,
    /**
     * phenomenon is blowing (valid with
     *   %GWEATHER_PHENOMENON_SNOW, %GWEATHER_PHENOMENON_SAND,
     *   %GWEATHER_PHENOMENON_SPRAY, %GWEATHER_PHENOMENON_DUST)
     */
    BLOWING,
    /**
     * phenomenon is heavy and involves showers
     */
    SHOWERS,
    /**
     * phenomenon is moving across (valid with
     *   %GWEATHER_PHENOMENON_SAND and %GWEATHER_PHENOMENON_DUST)
     */
    DRIFTING,
    /**
     * phenomenon is freezing and involves ice
     */
    FREEZING,
    /**
     * maximum value of the enumeration
     */
    LAST,
}
/**
 * The measure unit to use for sky visibility values, when retrieved
 * by gweather_info_get_value_visibility().
 */
enum DistanceUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred distance unit
     */
    DEFAULT,
    /**
     * meters
     */
    METERS,
    /**
     * kilometers (= 1000 meters)
     */
    KM,
    /**
     * miles
     */
    MILES,
}
/**
 * The size/scope of a particular [class`GWeather`.Location].
 * 
 * Locations form a hierarchy, with a `GWEATHER_LOCATION_WORLD` location
 * at the top, divided into regions or countries, and so on.
 * 
 * Countries may or may not be divided into "adm1"s, and "adm1"s may or
 * may not be divided into "adm2"s. A city will have at least one, and
 * possibly several, weather stations inside it. Weather stations will
 * never appear outside of cities.
 * 
 * Building a database with [func`GWeather`.Location.get_world] will never
 * create detached instances, but deserializing might.
 */
enum LocationLevel {
    /**
     * A location representing the entire world
     */
    WORLD,
    /**
     * A location representing a continent or other
     *   top-level region
     */
    REGION,
    /**
     * A location representing a "country" (or other
     *   geographic unit that has an ISO-3166 country code)
     */
    COUNTRY,
    /**
     * A location representing a "first-level
     *   administrative division"; ie, a state, province, or similar division
     */
    ADM1,
    /**
     * A location representing a city
     */
    CITY,
    /**
     * A location representing a weather
     *   station
     */
    WEATHER_STATION,
    /**
     * A location that is detached from the database,
     *   for example because it was loaded from external storage and could not be
     *   fully recovered. The parent of this location is the nearest weather
     *   station
     */
    DETACHED,
    /**
     * A location representing a named or
     *   special timezone in the world, such as UTC
     */
    NAMED_TIMEZONE,
}
/**
 * The measure unit to use for atmospheric pressure values, when
 * retrieved by gweather_info_get_value_pressure().
 */
enum PressureUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred pressure unit
     */
    DEFAULT,
    /**
     * kiloPascal (* 10^3 Pa)
     */
    KPA,
    /**
     * hectoPascal (* 10^2 Pa); also known
     *   as millibars, but formatted differently
     */
    HPA,
    /**
     * millibars; same as %GWEATHER_PRESSURE_UNIT_HPA
     */
    MB,
    /**
     * millimeters of mercury
     */
    MM_HG,
    /**
     * inches of mercury
     */
    INCH_HG,
    /**
     * atmospheres
     */
    ATM,
}
/**
 * The sky and cloud visibility. In general it is discouraged to
 * use this value directly to compute the forecast icon: applications
 * should instead use gweather_info_get_icon_name() or
 * gweather_info_get_symbolic_icon_name().
 */
enum Sky {
    /**
     * value not available
     */
    INVALID,
    /**
     * sky completely clear, no clouds visible
     */
    CLEAR,
    /**
     * sky mostly clear, few clouds
     */
    BROKEN,
    /**
     * sky mostly clear, patches of clouds
     */
    SCATTERED,
    /**
     * few clouds, sky cloudy but patches of sky visible
     */
    FEW,
    /**
     * sky completely clouded, sun not visible
     */
    OVERCAST,
    /**
     * the maximum value for the enumeration
     */
    LAST,
}
/**
 * The measure unit to use for wind speed values, when retrieved by
 * gweather_info_get_value_wind().
 */
enum SpeedUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred speed unit
     */
    DEFAULT,
    /**
     * meters per second
     */
    MS,
    /**
     * kilometers per hour
     */
    KPH,
    /**
     * miles per hour
     */
    MPH,
    /**
     * knots
     */
    KNOTS,
    /**
     * Beaufort scale
     */
    BFT,
}
/**
 * The measure unit to use for temperature values, when retrieved by
 * the gweather_info_get_value_temp() family of functions.
 */
enum TemperatureUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred temperature unit
     */
    DEFAULT,
    /**
     * Kelvin (absolute) temperature scale
     */
    KELVIN,
    /**
     * Celsius temperature scale
     */
    CENTIGRADE,
    /**
     * Fahrenheit temperature scale
     */
    FAHRENHEIT,
}
/**
 * The direction of the prevailing wind. Composite values
 * such as north-north-east indicate a direction between the
 * two component value (north and north-east).
 */
enum WindDirection {
    /**
     * value not available
     */
    INVALID,
    /**
     * variable throughout the day
     */
    VARIABLE,
    /**
     * north
     */
    N,
    /**
     * north-north-east
     */
    NNE,
    /**
     * north-east
     */
    NE,
    /**
     * east-north-east
     */
    ENE,
    /**
     * east
     */
    E,
    /**
     * east-south-east
     */
    ESE,
    /**
     * south-east
     */
    SE,
    /**
     * south-south-east
     */
    SSE,
    /**
     * south
     */
    S,
    /**
     * south-south-west
     */
    SSW,
    /**
     * south-west
     */
    SW,
    /**
     * west-south-west
     */
    WSW,
    /**
     * west
     */
    W,
    /**
     * west-north-west
     */
    WNW,
    /**
     * north-west
     */
    NW,
    /**
     * north-north-west
     */
    NNW,
    /**
     * maximum value for the enumeration
     */
    LAST,
}
/**
 * Format options to influence the text returned by the
 * `gweather_*_to_string_full()` functions.
 */
enum FormatOptions {
    /**
     * The default string format
     */
    DEFAULT,
    /**
     * Capitalize as if the string
     *   was starting a sentence
     */
    SENTENCE_CAPITALIZATION,
    /**
     * Capitalize as if the string was
     *   appearing within a sentence
     */
    NO_CAPITALIZATION,
}
enum Provider {
    /**
     * no provider, no weather information available
     */
    NONE,
    /**
     * METAR office, providing current conditions worldwide
     */
    METAR,
    /**
     * US weather office, providing 7 days of forecast
     */
    IWIN,
    /**
     * MET.no service, worldwide but requires attribution and a subscription to the [API users mailing-list](https://lists.met.no/mailman/listinfo/api-users).
     */
    MET_NO,
    /**
     * OpenWeatherMap, worldwide and possibly more reliable, but requires attribution and is limited in the number of queries
     */
    OWM,
    /**
     * enable all available providers
     */
    ALL,
}
function location_level_to_string(level: LocationLevel): string
function sky_to_string(sky: Sky): string
function sky_to_string_full(sky: Sky, options: FormatOptions): string
function speed_unit_to_string(unit: SpeedUnit): string
function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit
function wind_direction_to_string(wind: WindDirection): string
function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string
/**
 * A filter function for locations.
 */
interface FilterFunc {
    (location: Location): boolean
}
interface Info_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GWeather-4.0.GWeather.Info */
    /**
     * A unique identifier, typically in the form of reverse DNS notation,
     * for the application that is querying the weather information.
     * 
     * Weather providers require this information.
     */
    application_id?: string
    /**
     * An email address or any other contact form URL.
     * 
     * Weather providers require this information.
     */
    contact_info?: string
    /**
     * The enabled weather providers.
     */
    enabled_providers?: Provider
    /**
     * The location of the weather information.
     */
    location?: Location
}
class Info {
    /* Properties of GWeather-4.0.GWeather.Info */
    /**
     * A unique identifier, typically in the form of reverse DNS notation,
     * for the application that is querying the weather information.
     * 
     * Weather providers require this information.
     */
    application_id: string
    /**
     * An email address or any other contact form URL.
     * 
     * Weather providers require this information.
     */
    contact_info: string
    /**
     * The enabled weather providers.
     */
    enabled_providers: Provider
    /**
     * The location of the weather information.
     */
    location: Location
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Info */
    abort(): void
    get_apparent(): string
    /**
     * Get the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather.
     */
    get_application_id(): string
    /**
     * Some weather services require the application showing the
     * data to include an attribution text, possibly including links
     * to the service website.
     * This must be shown prominently toghether with the data.
     */
    get_attribution(): string
    get_conditions(): string
    /**
     * Get the contact information of the application fetching the weather.
     */
    get_contact_info(): string
    get_dew(): string
    /**
     * Gets the bitmask of enabled #GWeatherProvider weather
     * providers.
     */
    get_enabled_providers(): Provider
    get_forecast_list(): Info[]
    get_humidity(): string
    get_icon_name(): string
    get_location(): Location
    get_location_name(): string
    get_pressure(): string
    get_sky(): string
    get_sunrise(): string
    get_sunset(): string
    get_symbolic_icon_name(): string
    get_temp(): string
    get_temp_max(): string
    get_temp_min(): string
    get_temp_summary(): string
    get_upcoming_moonphases(phases: number): boolean
    get_update(): string
    get_value_apparent(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `phenomenon` and `qualifier` with current weather conditions.
     */
    get_value_conditions(): [ /* returnType */ boolean, /* phenomenon */ ConditionPhenomenon, /* qualifier */ ConditionQualifier ]
    get_value_dew(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_moonphase(): [ /* returnType */ boolean, /* value */ MoonPhase, /* lat */ MoonLatitude ]
    get_value_pressure(unit: PressureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `sky` with current sky conditions.
     */
    get_value_sky(): [ /* returnType */ boolean, /* sky */ Sky ]
    get_value_sunrise(): [ /* returnType */ boolean, /* value */ number ]
    get_value_sunset(): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_max(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_min(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Note that `value` may be 0 if `info` has not yet been updated.
     */
    get_value_update(): [ /* returnType */ boolean, /* value */ number ]
    get_value_visibility(unit: DistanceUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_wind(unit: SpeedUnit): [ /* returnType */ boolean, /* speed */ number, /* direction */ WindDirection ]
    get_visibility(): string
    get_weather_summary(): string
    get_wind(): string
    is_daytime(): boolean
    is_valid(): boolean
    network_error(): boolean
    next_sun_event(): number
    /**
     * Sets the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather. It is a requirement
     * for using any of the online weather providers.
     * 
     * If the application uses #GApplication, then the application ID
     * will be automatically filled in.
     * @param application_id the application ID to set
     */
    set_application_id(application_id: string): void
    /**
     * Sets the contact information for the application fetching the
     * weather. It is a requirement for using any of the online
     * weather providers as it allows API providers to contact application
     * developers in case of terms of use breaches.
     * 
     * The contact information should be an email address, or the full
     * URL to an online contact form which weather providers can use
     * to contact the application developer. Avoid using bug tracker
     * URLs which require creating accounts.
     * @param contact_info the contact information for the application
     */
    set_contact_info(contact_info: string): void
    /**
     * Sets the enabled providers for fetching the weather. Note
     * that it is up to the application developer to make sure that
     * the terms of use for each service are respected.
     * 
     * Online providers will not be enabled if the application ID is
     * not set to a valid value.
     * @param providers a bitmask of #GWeatherProvider
     */
    set_enabled_providers(providers: Provider): void
    /**
     * Changes the location of the weather report.
     * 
     * Note that this will clear any forecast or current conditions, and
     * you must call [method`GWeather`.Info.update] to obtain the new data.
     * @param location a location for which weather is desired
     */
    set_location(location?: Location | null): void
    /**
     * Requests a reload of weather conditions and forecast data from
     * enabled network services.
     * This call does no synchronous IO: rather, the result is delivered
     * by emitting the #GWeatherInfo::updated signal.
     * Note that if no network services are enabled, the signal will not
     * be emitted. See #GWeatherInfo:enabled-providers for details.
     */
    update(): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GWeather-4.0.GWeather.Info */
    /**
     * This signal is emitted after the initial fetch of the weather
     * data from upstream services, and after every successful call
     * to [method`GWeather`.Info.update].
     */
    connect(sigName: "updated", callback: (($obj: Info) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Info) => void)): number
    emit(sigName: "updated"): void
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
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(location?: Location | null): Info
    /**
     * Ensures that any data cached from the network is stored to disk.
     * Calling this is not necessary, as the cache will be saved when
     * the last reference to a #GWeatherInfo will be dropped.
     * On the other hand, it must be called if there is any chance that
     * the application will be closed without unreffing all objects, such
     * as when using a language binding that employs a GC.
     */
    static store_cache(): void
    static $gtype: GObject.Type
}
interface Location_ConstructProps extends GObject.Object_ConstructProps {
}
class Location {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Location */
    /**
     * This call undoes the effect of gweather_location_serialize(), that
     * is, it turns a #GVariant into a #GWeatherLocation. The conversion
     * happens in the context of `world` (i.e, for a city or weather station,
     * the resulting location will be attached to a administrative division,
     * country and region as appropriate).
     * @param serialized the #GVariant representing the #GWeatherLocation
     */
    deserialize(serialized: GLib.Variant): Location
    /**
     * Initializes geocode reversing to find place for (`lat,` `lon)` coordinates.
     * 
     * Calls the callback function passed by user when the result is ready.
     * 
     * The given location must be at most a %GWEATHER_LOCATION_ADM1 location; this
     * restriction may be lifted in a future version.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     * @param cancellable a cancellable instance
     * @param callback callback function
     */
    detect_nearest_city(lat: number, lon: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Compares two #GWeatherLocation and sees if they represent the same
     * place.
     * It is only legal to call this for cities, weather stations or
     * detached locations.
     * Note that this function only checks for geographical characteristics,
     * such as coordinates and METAR code. It is still possible that the two
     * locations belong to different worlds (in which case care must be
     * taken when passing them GWeatherLocationEntry and GWeatherInfo), or
     * if one is them is detached it could have a custom name.
     * @param two another #GWeatherLocation
     */
    equal(two: Location): boolean
    /**
     * Retrieves the country identified by the specified ISO 3166 code,
     * if present in the database.
     * @param country_code a country code
     */
    find_by_country_code(country_code: string): Location
    /**
     * Retrieves the weather station identifier by `station_code`.
     * 
     * Note that multiple instances of the same weather station can exist
     * in the database, and this function will return any of them, so this
     * not usually what you want.
     * 
     * See [method`GWeather`.Location.deserialize] to recover a stored location.
     * @param station_code a 4 letter METAR code
     */
    find_by_station_code(station_code: string): Location | null
    /**
     * Finds the nearest city to the passed latitude and
     * longitude, among the descendants of `loc`.
     * 
     * The given location must be at most a %GWEATHER_LOCATION_ADM1 location.
     * This restriction may be lifted in a future version.
     * 
     * Note that this function does not check if (`lat,` `lon)` fall inside
     * `loc,` or are in the same region and time zone as the return value.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     */
    find_nearest_city(lat: number, lon: number): Location
    /**
     * Finds the nearest city to the passed latitude and
     * longitude, among the descendants of `loc`.
     * 
     * Supports the use of own filter function to filter out locations.
     * 
     * Geocoding should be done on the application side if needed.
     * 
     * `loc` must be at most a %GWEATHER_LOCATION_ADM1 location.
     * This restriction may be lifted in a future version.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     * @param func a function to iterate   over the locations; the function must return `TRUE` to continue checking   for the location, and `FALSE` to filter the location out
     */
    find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null): Location
    /**
     * Frees the array of timezones returned by
     * gweather_location_get_timezones().
     * @param zones an array of timezones   returned by [method`GWeather`.Location.get_timezones]
     */
    free_timezones(zones: GLib.TimeZone[]): void
    /**
     * Retrieves the city name for the given location.
     * 
     * For a `GWEATHER_LOCATION_CITY` or `GWEATHER_LOCATION_DETACHED` location,
     * this method is equivalent to [method`GWeather`.Location.get_name].
     * 
     * For a `GWEATHER_LOCATION_WEATHER_STATION` location, this is equivalent to
     * calling [method`GWeather`.Location.get_name] on the location's parent.
     * 
     * For other locations this method will return `NULL`.
     */
    get_city_name(): string | null
    /**
     * Gets the METAR station code associated with a
     * `GWEATHER_LOCATION_WEATHER_STATION` location.
     */
    get_code(): string | null
    /**
     * Gets `loc'`s coordinates.
     * 
     * You must call [method`GWeather`.Location.has_coords] before calling
     * this function.
     */
    get_coords(): [ /* latitude */ number | null, /* longitude */ number | null ]
    /**
     * Gets the ISO 3166 country code of the given location.
     * 
     * For `GWEATHER_LOCATION_WORLD` and `GWEATHER_LOCATION_REGION`, this
     * function returns `NULL`.
     */
    get_country(): string | null
    /**
     * Retrieves the country name for the given location.
     * 
     * For a `GWEATHER_LOCATION_COUNTRY` location, this is equivalent to
     * [method`GWeather`.Location.get_name].
     * 
     * For a `GWEATHER_LOCATION_REGION` and `GWEATHER_LOCATION_WORLD` location,
     * this method will return `NULL`.
     * 
     * For other location levels, this method will find the parent
     * `GWEATHER_LOCATION_COUNTRY` and return its name.
     */
    get_country_name(): string | null
    /**
     * Determines the distance in kilometers between `loc` and `loc2`.
     * @param loc2 a second #GWeatherLocation
     */
    get_distance(loc2: Location): number
    /**
     * Gets the location's name.
     */
    get_english_name(): string | null
    /**
     * Gets the location's name, in a representation useful for comparisons.
     * 
     * The "sort name" is the location's name after having g_utf8_normalize()
     * (with `G_NORMALIZE_ALL`) and g_utf8_casefold() called on it. You can
     * use this to sort locations, or to comparing user input against a
     * location name.
     */
    get_english_sort_name(): string | null
    /**
     * Gets `loc'`s level, from %GWEATHER_LOCATION_WORLD, to
     * %GWEATHER_LOCATION_WEATHER_STATION.
     */
    get_level(): LocationLevel
    /**
     * Gets the location's name, localized into the current language.
     */
    get_name(): string | null
    /**
     * Gets the location's parent.
     */
    get_parent(): Location | null
    /**
     * Gets the location's name, localized into the current language,
     * in a representation useful for comparisons.
     * 
     * The "sort name" is the location's name after having g_utf8_normalize()
     * (with `G_NORMALIZE_ALL`) and g_utf8_casefold() called on it. You can
     * use this to sort locations, or to comparing user input against a
     * location name.
     */
    get_sort_name(): string | null
    /**
     * Gets the timezone associated with `loc,` if known.
     */
    get_timezone(): GLib.TimeZone | null
    /**
     * Gets the timezone associated with `loc,` if known, as a string.
     */
    get_timezone_str(): string | null
    /**
     * Gets an array of all timezones associated with any location under
     * `loc`.
     * 
     * Use gweather_location_free_timezones() to free this array.
     */
    get_timezones(): GLib.TimeZone[]
    /**
     * Checks if `loc` has valid latitude and longitude.
     */
    has_coords(): boolean
    /**
     * Checks whether the location has a timezone.
     */
    has_timezone(): boolean
    /**
     * Allows iterating all children of a location.
     * 
     * Pass `NULL` to get the first child, and any child to get the next one.
     * 
     * Note that the reference to `child` is taken, meaning iterating all
     * children is as simple as:
     * 
     * ```c
     *   g_autoptr (GWeatherLocation) child = NULL;
     *   while ((child = gweather_location_next_child (location, child)))
     *     {
     *        // Do something with child
     *     }
     * ```
     * @param child the next child
     */
    next_child(child?: Location | null): Location | null
    /**
     * Transforms a #GWeatherLocation into a #GVariant, in a way that
     * calling gweather_location_deserialize() will hold an equivalent
     * #GWeatherLocation.
     * The resulting variant can then be stored into GSettings or on disk.
     * This call is only valid for cities, weather stations and detached
     * locations.
     * The format of the resulting #GVariant is private to libgweather,
     * and it is subject to change. You should use the "v" format in GSettings,
     * to ensure maximum compatibility with future versions of the library.
     */
    serialize(): GLib.Variant
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location
    /**
     * Fetches the location from `result`.
     * @param result the result of the asynchronous operation
     */
    static detect_nearest_city_finish(result: Gio.AsyncResult): Location
    /**
     * Obtains the shared `GWeatherLocation` of type `GWEATHER_LOCATION_WORLD`,
     * representing a hierarchy containing all of the locations from the
     * location data.
     */
    static get_world(): Location | null
    static $gtype: GObject.Type
}
class Conditions {
    /* Fields of GWeather-4.0.GWeather.Conditions */
    /**
     * %TRUE if the struct contains usable data, %FALSE otherwise
     */
    significant: boolean
    /**
     * the main weather phenomenon
     */
    phenomenon: ConditionPhenomenon
    /**
     * a modifier for `phenomenon`
     */
    qualifier: ConditionQualifier
    /* Methods of GWeather-4.0.GWeather.Conditions */
    to_string(): string
    to_string_full(options: FormatOptions): string
    static name: string
}
abstract class InfoClass {
    /* Fields of GWeather-4.0.GWeather.InfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class LocationClass {
    /* Fields of GWeather-4.0.GWeather.LocationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
    type MoonLatitude = number
    type MoonPhase = number
}
export default GWeather;