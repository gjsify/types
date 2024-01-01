
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gweather-4.0-import.d.ts';
    
/**
 * GWeather-4.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * The current or forecasted significant phenomenon.
 */
export enum ConditionPhenomenon {
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
export enum ConditionQualifier {
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
export enum DistanceUnit {
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
export enum LocationLevel {
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
export enum PressureUnit {
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
export enum Sky {
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
export enum SpeedUnit {
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
export enum TemperatureUnit {
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
export enum WindDirection {
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
 * @bitfield 
 */
export enum FormatOptions {
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
export enum Provider {
    /**
     * no provider, no weather information available
     */
    NONE,
    /**
     * METAR office, providing current conditions worldwide
     */
    METAR,
    /**
     * US weather office (old API), providing 7 days of forecast
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
     * US weather office (new API), providing 7 days of hourly forecast (available since 4.2)
     */
    NWS,
    /**
     * enable all available providers
     */
    ALL,
}
/**
 * Returns the location level as a string, useful for debugging
 * purposes.
 * @param level a #GWeatherLocationLevel
 * @returns a string
 */
export function locationLevelToString(level: LocationLevel): string
export function skyToString(sky: Sky): string
export function skyToStringFull(sky: Sky, options: FormatOptions): string
/**
 * Creates a human-readable, localized representation of `unit`
 * @param unit a speed unit, or %GWEATHER_SPEED_UNIT_DEFAULT
 */
export function speedUnitToString(unit: SpeedUnit): string
/**
 * Resolve `unit` into a real temperature unit, potentially considering
 * locale defaults.
 * @param unit a tempeature unit, or %GWEATHER_TEMP_UNIT_DEFAULT
 */
export function temperatureUnitToReal(unit: TemperatureUnit): TemperatureUnit
export function windDirectionToString(wind: WindDirection): string
export function windDirectionToStringFull(wind: WindDirection, options: FormatOptions): string
/**
 * A filter function for locations.
 * @callback 
 * @param location the location to check
 * @returns `FALSE` if the location should be skipped, and `TRUE` otherwise
 */
export interface FilterFunc {
    (location: Location): boolean
}
export module Info {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GWeather-4.0.GWeather.Info

        /**
         * A unique identifier, typically in the form of reverse DNS notation,
         * for the application that is querying the weather information.
         * 
         * Weather providers require this information.
         */
        applicationId?: string | null
        /**
         * An email address or any other contact form URL.
         * 
         * Weather providers require this information.
         */
        contactInfo?: string | null
        /**
         * The enabled weather providers.
         */
        enabledProviders?: Provider | null
        /**
         * The location of the weather information.
         */
        location?: Location | null
    }

}

export interface Info {

    // Own properties of GWeather-4.0.GWeather.Info

    /**
     * A unique identifier, typically in the form of reverse DNS notation,
     * for the application that is querying the weather information.
     * 
     * Weather providers require this information.
     */
    applicationId: string | null
    /**
     * An email address or any other contact form URL.
     * 
     * Weather providers require this information.
     */
    contactInfo: string | null
    /**
     * The enabled weather providers.
     */
    enabledProviders: Provider
    /**
     * The location of the weather information.
     */
    location: Location
    __gtype__: number

    // Owm methods of GWeather-4.0.GWeather.Info

    abort(): void
    getApparent(): string | null
    /**
     * Get the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather.
     * @returns the application ID
     */
    getApplicationId(): string
    /**
     * Some weather services require the application showing the
     * data to include an attribution text, possibly including links
     * to the service website.
     * This must be shown prominently toghether with the data.
     * @returns the required attribution text, in Pango          markup form, or %NULL if not required
     */
    getAttribution(): string
    getConditions(): string | null
    /**
     * Get the contact information of the application fetching the weather.
     * @returns the contact information
     */
    getContactInfo(): string
    getDew(): string | null
    /**
     * Gets the bitmask of enabled #GWeatherProvider weather
     * providers.
     */
    getEnabledProviders(): Provider
    getForecastList(): Info[]
    getHumidity(): string | null
    getIconName(): string
    getLocation(): Location
    getLocationName(): string | null
    getPressure(): string | null
    getSky(): string | null
    getSunrise(): string | null
    getSunset(): string | null
    getSymbolicIconName(): string
    getTemp(): string | null
    getTempMax(): string | null
    getTempMin(): string | null
    getTempSummary(): string | null
    getUpcomingMoonphases(phases: number): boolean
    getUpdate(): string | null
    getValueApparent(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `phenomenon` and `qualifier` with current weather conditions.
     * @returns TRUE is out arguments are valid, FALSE otherwise.
     */
    getValueConditions(): [ /* returnType */ boolean, /* phenomenon */ ConditionPhenomenon, /* qualifier */ ConditionQualifier ]
    getValueDew(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueMoonphase(): [ /* returnType */ boolean, /* value */ MoonPhase, /* lat */ MoonLatitude ]
    getValuePressure(unit: PressureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `sky` with current sky conditions.
     * @returns TRUE is @sky is valid, FALSE otherwise.
     */
    getValueSky(): [ /* returnType */ boolean, /* sky */ Sky ]
    getValueSunrise(): [ /* returnType */ boolean, /* value */ number ]
    getValueSunset(): [ /* returnType */ boolean, /* value */ number ]
    getValueTemp(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueTempMax(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueTempMin(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Note that `value` may be 0 if `info` has not yet been updated.
     * @returns TRUE is @value is valid, FALSE otherwise.
     */
    getValueUpdate(): [ /* returnType */ boolean, /* value */ number ]
    getValueVisibility(unit: DistanceUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueWind(unit: SpeedUnit): [ /* returnType */ boolean, /* speed */ number, /* direction */ WindDirection ]
    getVisibility(): string | null
    getWeatherSummary(): string | null
    getWind(): string | null
    isDaytime(): boolean
    isValid(): boolean
    networkError(): boolean
    nextSunEvent(): number
    /**
     * Sets the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather. It is a requirement
     * for using any of the online weather providers.
     * 
     * If the application uses #GApplication, then the application ID
     * will be automatically filled in.
     * @param applicationId the application ID to set
     */
    setApplicationId(applicationId: string): void
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
     * @param contactInfo the contact information for the application
     */
    setContactInfo(contactInfo: string): void
    /**
     * Sets the enabled providers for fetching the weather. Note
     * that it is up to the application developer to make sure that
     * the terms of use for each service are respected.
     * 
     * Online providers will not be enabled if the application ID is
     * not set to a valid value.
     * @param providers a bitmask of #GWeatherProvider
     */
    setEnabledProviders(providers: Provider): void
    /**
     * Changes the location of the weather report.
     * 
     * Note that this will clear any forecast or current conditions, and
     * you must call [method`GWeather`.Info.update] to obtain the new data.
     * @param location a location for which weather is desired
     */
    setLocation(location: Location | null): void
    /**
     * Requests a reload of weather conditions and forecast data from
     * enabled network services.
     * This call does no synchronous IO: rather, the result is delivered
     * by emitting the #GWeatherInfo::updated signal.
     * Note that if no network services are enabled, the signal will not
     * be emitted. See #GWeatherInfo:enabled-providers for details.
     */
    update(): void

    // Own signals of GWeather-4.0.GWeather.Info

    connect(sigName: "updated", callback: Info.UpdatedSignalCallback): number
    on(sigName: "updated", callback: Info.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: Info.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: Info.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of GWeather-4.0.GWeather.Info

    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::contact-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::contact-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contact-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contact-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contact-info", ...args: any[]): void
    connect(sigName: "notify::enabled-providers", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled-providers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled-providers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled-providers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled-providers", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `GWeatherInfo` provides a handy way to access weather conditions
 * and forecasts from a [class`GWeather`.Location], aggregating multiple
 * different web services.
 * 
 * It includes also astronomical data such as sunrise times and
 * moon phases.
 * @class 
 */
export class Info extends GObject.Object {

    // Own properties of GWeather-4.0.GWeather.Info

    static name: string

    // Constructors of GWeather-4.0.GWeather.Info

    constructor(config?: Info.ConstructorProperties) 
    /**
     * Builds a new `GWeatherInfo` that will provide weather information about
     * the given location.
     * 
     * In order to retrieve the weather information, you will need to enable
     * the desired providers and then call [method`GWeather`.Info.update]. If
     * you want to be notified of the completion of the weather information
     * update, you should connect to the [signal`GWeather`.Info::updated]
     * signal before updating the `GWeatherInfo` instance.
     * @constructor 
     * @param location the desidered location
     * @returns a new weather information instance
     */
    constructor(location: Location | null) 
    /**
     * Builds a new `GWeatherInfo` that will provide weather information about
     * the given location.
     * 
     * In order to retrieve the weather information, you will need to enable
     * the desired providers and then call [method`GWeather`.Info.update]. If
     * you want to be notified of the completion of the weather information
     * update, you should connect to the [signal`GWeather`.Info::updated]
     * signal before updating the `GWeatherInfo` instance.
     * @constructor 
     * @param location the desidered location
     * @returns a new weather information instance
     */
    static new(location: Location | null): Info
    _init(config?: Info.ConstructorProperties): void
    /**
     * Ensures that any data cached from the network is stored to disk.
     * Calling this is not necessary, as the cache will be saved when
     * the last reference to a #GWeatherInfo will be dropped.
     * On the other hand, it must be called if there is any chance that
     * the application will be closed without unreffing all objects, such
     * as when using a language binding that employs a GC.
     */
    static storeCache(): void
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Location {

    // Own properties of GWeather-4.0.GWeather.Location

    __gtype__: number

    // Owm methods of GWeather-4.0.GWeather.Location

    /**
     * This call undoes the effect of gweather_location_serialize(), that
     * is, it turns a #GVariant into a #GWeatherLocation. The conversion
     * happens in the context of `world` (i.e, for a city or weather station,
     * the resulting location will be attached to a administrative division,
     * country and region as appropriate).
     * @param serialized the #GVariant representing the #GWeatherLocation
     * @returns the deserialized location.
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
    detectNearestCity(lat: number, lon: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @returns %TRUE if the two locations represent the same place as          far as libgweather can tell, and %FALSE otherwise.
     */
    equal(two: Location): boolean
    /**
     * Retrieves the country identified by the specified ISO 3166 code,
     * if present in the database.
     * @param countryCode a country code
     * @returns a country level #GWeatherLocation, or %NULL.
     */
    findByCountryCode(countryCode: string): Location
    /**
     * Retrieves the weather station identifier by `station_code`.
     * 
     * Note that multiple instances of the same weather station can exist
     * in the database, and this function will return any of them, so this
     * not usually what you want.
     * 
     * See [method`GWeather`.Location.deserialize] to recover a stored location.
     * @param stationCode a 4 letter METAR code
     * @returns a weather station level location   for the given station code, or `NULL` if none exists in the database
     */
    findByStationCode(stationCode: string): Location | null
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
     * @returns the city closest to (@lat, @lon), in the   region or administrative district of @loc.
     */
    findNearestCity(lat: number, lon: number): Location
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
     * @returns the city closest to (@lat, @lon), in the   region or administrative district of @loc with validation of   filter function
     */
    findNearestCityFull(lat: number, lon: number, func: FilterFunc | null): Location
    /**
     * Frees the array of timezones returned by
     * gweather_location_get_timezones().
     * @param zones an array of timezones   returned by [method`GWeather`.Location.get_timezones]
     */
    freeTimezones(zones: GLib.TimeZone[]): void
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
     * @returns the city name of the location
     */
    getCityName(): string | null
    /**
     * Gets the METAR station code associated with a
     * `GWEATHER_LOCATION_WEATHER_STATION` location.
     * @returns the location's METAR station code
     */
    getCode(): string | null
    /**
     * Gets `loc'`s coordinates.
     * 
     * You must call [method`GWeather`.Location.has_coords] before calling
     * this function.
     */
    getCoords(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the ISO 3166 country code of the given location.
     * 
     * For `GWEATHER_LOCATION_WORLD` and `GWEATHER_LOCATION_REGION`, this
     * function returns `NULL`.
     * @returns the location's country code
     */
    getCountry(): string | null
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
     * @returns the location's country name
     */
    getCountryName(): string | null
    /**
     * Determines the distance in kilometers between `loc` and `loc2`.
     * @param loc2 a second #GWeatherLocation
     * @returns the distance between @loc and @loc2.
     */
    getDistance(loc2: Location): number
    /**
     * Gets the location's name.
     * @returns the location's name
     */
    getEnglishName(): string | null
    /**
     * Gets the location's name, in a representation useful for comparisons.
     * 
     * The "sort name" is the location's name after having g_utf8_normalize()
     * (with `G_NORMALIZE_ALL`) and g_utf8_casefold() called on it. You can
     * use this to sort locations, or to comparing user input against a
     * location name.
     * @returns the sort name of the location
     */
    getEnglishSortName(): string | null
    /**
     * Gets `loc'`s level, from %GWEATHER_LOCATION_WORLD, to
     * %GWEATHER_LOCATION_WEATHER_STATION.
     * @returns @loc's level
     */
    getLevel(): LocationLevel
    /**
     * Gets the location's name, localized into the current language.
     * @returns the location's name
     */
    getName(): string | null
    /**
     * Gets the location's parent.
     * @returns the location's parent
     */
    getParent(): Location | null
    /**
     * Gets the location's name, localized into the current language,
     * in a representation useful for comparisons.
     * 
     * The "sort name" is the location's name after having g_utf8_normalize()
     * (with `G_NORMALIZE_ALL`) and g_utf8_casefold() called on it. You can
     * use this to sort locations, or to comparing user input against a
     * location name.
     * @returns the sort name of the location
     */
    getSortName(): string | null
    /**
     * Gets the timezone associated with `loc,` if known.
     * @returns the location's timezone
     */
    getTimezone(): GLib.TimeZone | null
    /**
     * Gets the timezone associated with `loc,` if known, as a string.
     * @returns the location's timezone as   a string
     */
    getTimezoneStr(): string | null
    /**
     * Gets an array of all timezones associated with any location under
     * `loc`.
     * 
     * Use gweather_location_free_timezones() to free this array.
     * @returns the timezones   associated with the location
     */
    getTimezones(): GLib.TimeZone[]
    /**
     * Checks if `loc` has valid latitude and longitude.
     * @returns %TRUE if @loc has valid latitude and longitude.
     */
    hasCoords(): boolean
    /**
     * Checks whether the location has a timezone.
     * @returns true if the location has a timezone; false otherwise
     */
    hasTimezone(): boolean
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
     * @returns The next child, if one exists
     */
    nextChild(child: Location | null): Location | null
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
     * @returns the serialization of @location.
     */
    serialize(): GLib.Variant

    // Class property signals of GWeather-4.0.GWeather.Location

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A `GWeatherLocation` represents a "location" of some type known to
 * libgweather; anything from a single weather station to the entire
 * world.
 * 
 * See [enum`GWeather`.LocationLevel] for information about how the
 * hierarchy of locations works.
 * @class 
 */
export class Location extends GObject.Object {

    // Own properties of GWeather-4.0.GWeather.Location

    static name: string

    // Constructors of GWeather-4.0.GWeather.Location

    constructor(config?: Location.ConstructorProperties) 
    /**
     * Construct a new location from the given data, supplementing
     * any missing information from the static database.
     * @constructor 
     * @param name the user visible location name
     * @param icao the ICAO code of the location
     * @param latitude the latitude of the location
     * @param longitude the longitude of the location
     * @returns the newly created detached location
     */
    static newDetached(name: string, icao: string | null, latitude: number, longitude: number): Location
    _init(config?: Location.ConstructorProperties): void
    /**
     * Fetches the location from `result`.
     * @param result the result of the asynchronous operation
     * @returns Customized GWeatherLocation
     */
    static detectNearestCityFinish(result: Gio.AsyncResult): Location
    /**
     * Obtains the shared `GWeatherLocation` of type `GWEATHER_LOCATION_WORLD`,
     * representing a hierarchy containing all of the locations from the
     * location data.
     * @returns a `GWEATHER_LOCATION_WORLD`   location, or `NULL` if the locations data could not be found or could   not be parsed.
     */
    static getWorld(): Location | null
}

export interface Conditions {

    // Own fields of GWeather-4.0.GWeather.Conditions

    /**
     * %TRUE if the struct contains usable data, %FALSE otherwise
     * @field 
     */
    significant: boolean
    /**
     * the main weather phenomenon
     * @field 
     */
    phenomenon: ConditionPhenomenon
    /**
     * a modifier for `phenomenon`
     * @field 
     */
    qualifier: ConditionQualifier

    // Owm methods of GWeather-4.0.GWeather.Conditions

    toString(): string
    toStringFull(options: FormatOptions): string
}

/**
 * A convenient way to describe the current or forecast
 * weather phenomenon, if significant, and its associated
 * modifier. If the value is not significant, the weather conditions
 * are described by gweather_info_get_sky() instead.
 * 
 * In general it is discouraged to use this value directly to compute
 * the forecast icon: applications should instead use
 * gweather_info_get_icon_name() or
 * gweather_info_get_symbolic_icon_name().
 * @record 
 */
export class Conditions {

    // Own properties of GWeather-4.0.GWeather.Conditions

    static name: string
}

export interface InfoClass {

    // Own fields of GWeather-4.0.GWeather.InfoClass

    parentClass: GObject.ObjectClass
}

export abstract class InfoClass {

    // Own properties of GWeather-4.0.GWeather.InfoClass

    static name: string
}

export interface LocationClass {

    // Own fields of GWeather-4.0.GWeather.LocationClass

    parentClass: GObject.ObjectClass
}

export abstract class LocationClass {

    // Own properties of GWeather-4.0.GWeather.LocationClass

    static name: string
}

    export type MoonLatitude = number
    export type MoonPhase = number
// END