/**
 * Copyright 2018-2021 bluefox <dogafox@gmail.com>
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/
// Version 1.0.13, 2021.06.27
// Keep this file ES5 conform! No const, let, not lambdas => , no ..., no default values for arguments, no let [arg] = abc() and other modern stuff.

// eslint-disable-next-line
'use strict';

var Types = {
    unknown: 'unknown',

    airCondition: 'airCondition',
    blind: 'blind',
    blindButtons: 'blindButtons',
    button: 'button',
    buttonSensor: 'buttonSensor',
    camera: 'camera',
    url: 'url',
    chart: 'chart',
    image: 'image',
    dimmer: 'dimmer',
    door: 'door',
    fireAlarm: 'fireAlarm',
    floodAlarm: 'floodAlarm',
    gate: 'gate',
    humidity: 'humidity',
    info: 'info',
    instance: 'instance',
    light: 'light',
    lock: 'lock',
    location: 'location',
    media: 'media',
    motion: 'motion',
    rgb: 'rgb',
    ct: 'ct',
    rgbSingle: 'rgbSingle',
    hue: 'hue',
    slider: 'slider',
    socket: 'socket',
    temperature: 'temperature',
    thermostat: 'thermostat',
    valve: 'valve',
    volume: 'volume',
    vacuumCleaner: 'vacuumCleaner',
    volumeGroup: 'volumeGroup',
    window: 'window',
    windowTilt: 'windowTilt',
    weatherCurrent: 'weatherCurrent',
    weatherForecast: 'weatherForecast',
    warning: 'warning'
};

var SharedPatterns = {
    working:   {role: /^indicator\.working$/,                 indicator: true,                    notSingle: true, name: 'WORKING',   required: false, defaultRole: 'indicator.working', defaultType: 'boolean'},
    unreach:   {role: /^indicator(\.maintenance)?\.unreach$/, indicator: true,  type: 'boolean',  notSingle: true, name: 'UNREACH',   required: false, defaultRole: 'indicator.maintenance.unreach'},
    lowbat:    {role: /^indicator(\.maintenance)?\.lowbat$|^indicator(\.maintenance)?\.battery$/, indicator: true,  type: 'boolean', notSingle: true, name: 'LOWBAT', required: false, defaultRole: 'indicator.maintenance.lowbat'},
    maintain:  {role: /^indicator\.maintenance$/,             indicator: true,  type: 'boolean',  notSingle: true, name: 'MAINTAIN',  required: false, defaultRole: 'indicator.maintenance'},
    error:     {role: /^indicator\.error$/,                   indicator: true,                    notSingle: true, name: 'ERROR',     required: false, defaultRole: 'indicator.error', defaultType: 'string'},
    direction: {role: /^indicator\.direction$/,               indicator: true,                    notSingle: true, name: 'DIRECTION', required: false, defaultRole: 'indicator.direction'},
    reachable: {role: /^indicator\.reachable$/,               indicator: true,  type: 'boolean',  notSingle: true, name: 'CONNECTED', required: false, defaultRole: 'indicator.reachable', inverted: true},
};
// Description of flags
// role - RegEx to detect role
// channelRole - RegEx to detect channel role of state
// ignoreRole - RegEx to ignore some specific roles
// indicator - is it will be shown like small icon or as a value
// type - state type: 'number', 'string' or 'boolean' or array of possible values
// name - own TAG of the state to process it in the logic
// write - if set to true or false, it will be checked the write attribute, if no attribute, so "false" will be assumed
// read - if set to true or false, it will be checked the write attribute, if no attribute, so "true" will be assumed
// min - type of attribute: number', 'string' or 'boolean'. This attribute must exists in common
// max - type of attribute: number', 'string' or 'boolean'. This attribute must exists in common
// required - if required to detect the pattern as valid
// noSubscribe - no automatic subscription for this state (e.g if write only)
// searchInParent - if this pattern should be search in device too and not only in channel
// enums - function to execute custom category detection
// multiple - if more than one state may have this pattern in channel
// noDeviceDetection - do not search indicators in parent device
// notSingle - this state may belong to more than one tile simultaneously (e.g. volume tile and media with volume)
// inverted - is state of indicator must be inverted
// stateName - regex for state names (IDs). Not suggested
// defaultStates - is for detection irrelevant, but will be used by iobroker.devices.
// defaultRole - is for detection irrelevant, but will be used by iobroker.devices.
// defaultUnit - is for detection irrelevant, but will be used by iobroker.devices.
// defaultType - is for detection irrelevant, but will be used by iobroker.devices.

function ChannelDetector() {
    if (!(this instanceof ChannelDetector)) {
        return new ChannelDetector();
    }

																																																					 
																																																								 
																																																								
																																																						 
																																																				   
																																																					   
																																																									   

    var patterns = {
        chart: {
            states: [
                {objectType: 'chart', name: 'CHART'}
            ],
            type: Types.chart
        },
        mediaPlayer: {
            // receive the state of player via media.state. Controlling of the player via buttons
            states: [
                // one of
                {role: /^media.state(\..*)?$/,                               indicator: false,                   type: ['boolean', 'number'], name: 'STATE',    required: true,   defaultRole: 'media.state'},
                // optional
                {role: /^button.play(\..*)?$|^action.play(\..*)?$/,          indicator: false,     write: true,  type: 'boolean', name: 'PLAY',     required: false, noSubscribe: true,   defaultRole: 'button.play'},
                {role: /^button.pause(\..*)?$|^action.pause(\..*)?$/,        indicator: false,     write: true,  type: 'boolean', name: 'PAUSE',    required: false, noSubscribe: true,   defaultRole: 'button.pause'},
                {role: /^button.stop(\..*)?$|^action.stop(\..*)?$/,          indicator: false,     write: true,  type: 'boolean', name: 'STOP',     required: false, noSubscribe: true,   defaultRole: 'button.stop'},
                {role: /^button.next(\..*)?$|^action.next(\..*)?$/,          indicator: false,     write: true,  type: 'boolean', name: 'NEXT',     required: false, noSubscribe: true,   defaultRole: 'button.next'},
                {role: /^button.prev(\..*)?$|^action.prev(\..*)?$/,          indicator: false,     write: true,  type: 'boolean', name: 'PREV',     required: false, noSubscribe: true,   defaultRole: 'button.prev'},
                {role: /^media.mode.shuffle(\..*)?$/,   indicator: false,     write: true,  type: 'boolean', name: 'SHUFFLE',  required: false, noSubscribe: true,   defaultRole: 'media.mode.shuffle'},
                {role: /^media.mode.repeat(\..*)?$/,    indicator: false,     write: true,  type: 'number',  name: 'REPEAT',   required: false, noSubscribe: true,   defaultRole: 'media.mode.repeat'},
                {role: /^media.artist(\..*)?$/,         indicator: false,     write: false, type: 'string',  name: 'ARTIST',   required: false,   defaultRole: 'media.artist'},
                {role: /^media.album(\..*)?$/,          indicator: false,     write: false, type: 'string',  name: 'ALBUM',    required: false,   defaultRole: 'media.album'},
                {role: /^media.title(\..*)?$/,          indicator: false,     write: false, type: 'string',  name: 'TITLE',    required: false,   defaultRole: 'media.title'},
                // one of following
                [
                    {role: /^media.cover$|^media.cover.big$/, indicator: false,     write: false, type: 'string',  name: 'COVER',    required: false, notSingle: true,   defaultRole: 'media.cover'},
                    {role: /^media.cover(\..*)$/,             indicator: false,     write: false, type: 'string',  name: 'COVER',    required: false, notSingle: true},
                ],
                {role: /^media.duration(\..*)?$/,       indicator: false,     write: false, type: 'number',  name: 'DURATION', required: false, noSubscribe: true,   defaultRole: 'media.duration', defaultUnit: 'sec'},
                {role: /^media.elapsed(\..*)?$/,        indicator: false,                   type: 'number',  name: 'ELAPSED',  required: false, noSubscribe: true,   defaultRole: 'media.elapsed', defaultUnit: 'sec'},
                {role: /^media.seek(\..*)?$/,           indicator: false,     write: true,  type: 'number',  name: 'SEEK',     required: false, noSubscribe: true,   defaultRole: 'media.seek'},
                {role: /^media.track(\..*)?$/,          indicator: false,                   type: 'string',  name: 'TRACK',    required: false, noSubscribe: true,   defaultRole: 'media.track'},
                {role: /^media.episode(\..*)?$/,        indicator: false,                   type: 'string',  name: 'EPISODE',  required: false, noSubscribe: true,   defaultRole: 'media.episode'},
                {role: /^media.season(\..*)?$/,         indicator: false,                   type: 'string',  name: 'SEASON',   required: false, noSubscribe: true,   defaultRole: 'media.season'},
                {role: /^level.volume?$/,               indicator: false,                   type: 'number',  min: 'number', max: 'number', write: true,       name: 'VOLUME',         required: false, notSingle: true, noSubscribe: true,   defaultRole: 'level.volume'},
                {role: /^value.volume?$/,               indicator: false,                   type: 'number',  min: 'number', max: 'number', write: false,      name: 'VOLUME_ACTUAL',  required: false, notSingle: true, noSubscribe: true,   defaultRole: 'value.volume'},
                {role: /^media.mute?$/,                 indicator: false,                   type: 'boolean',                               write: true,       name: 'MUTE',           required: false, notSingle: true, noSubscribe: true,   defaultRole: 'media.mute'},
                // Ignore following states of chromecast
                {stateName: /\.paused$|\.playerState$/, indicator: false,                                                                                     name: 'IGNORE',         required: false, multiple: true,  noSubscribe: true},
                SharedPatterns.reachable,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.media
        },
        weatherForecast: {
            states: [
                {role: /^weather.icon$|^weather.icon.forecast.0$/,                   indicator: false, type: 'string',  name: 'ICON',          required: true, defaultRole: 'weather.icon.forecast.0'},
                {role: /^value.temperature.min.forecast.0$/,                         indicator: false, type: 'number',  name: 'TEMP_MIN',      required: true, defaultRole: 'value.temperature.min.forecast.0'},
                {role: /^value.temperature.max.forecast.0$/,                         indicator: false, type: 'number',  name: 'TEMP_MAX',      required: true, defaultRole: 'value.temperature.max.forecast.0'},
                // optional
                {role: /^value.precipitation$|^value.precipitation.forecast.0$/,     indicator: false, type: 'number',  name: 'PRECIPITATION_CHANCE',     unit: '%', required: false, defaultRole: 'value.precipitation.forecast.0'},
                {role: /^value.precipitation$|^value.precipitation.forecast.0$/,     indicator: false, type: 'number',  name: 'PRECIPITATION',            unit: 'mm', required: false, defaultRole: 'value.precipitation.forecast.0'},
                {role: /^date$|^date.forecast.0$/,                                   indicator: false, type: 'string',  name: 'DATE',          required: false, defaultRole: 'date.forecast.0'},
                {role: /^dayofweek$|^dayofweek.forecast.0$/,                         indicator: false, type: 'string',  name: 'DOW',           required: false, defaultRole: 'dayofweek.forecast.0'},
                {role: /^weather.state$|^weather.state.forecast.0$/,                 indicator: false, type: 'string',  name: 'STATE',         required: false, defaultRole: 'weather.state.forecast.0'},
                {role: /^value.temperature$|^value.temperature.forecast.0$/,         indicator: false, type: 'number',  name: 'TEMP',          required: false, defaultRole: 'value.temperature.forecast.0'},
                {role: /^value.pressure$/,                                           indicator: false, type: 'number',  name: 'PRESSURE',      required: false, defaultRole: 'weather.icon.forecast.0'},

                {role: /^value.humidity$|value.humidity.forecast.0$/,                indicator: false, type: 'number',  name: 'HUMIDITY',      required: false, defaultRole: 'value.humidity.forecast.0'},
                
                {role: /^time.sunrise$|^time.sunrise.forecast.0$/,                   indicator: false, type: 'string',  name: 'TIME_SUNRISE',  required: false, defaultRole: 'time.sunrise'},
                {role: /^time.sunset$|^time.sunset.forecast.0$/,                     indicator: false, type: 'string',  name: 'TIME_SUNSET',   required: false, defaultRole: 'time.sunset'},

                {role: /^value.temperature.windchill$|^value.temperature.windchill.forecast.0$/, indicator: false, type: 'number',  name: 'WIND_CHILL',    required: false, defaultRole: 'value.temperature.windchill.forecast.0'},
                {role: /^value.temperature.feelslike$|^value.temperature.feelslike.forecast.0$/, indicator: false, type: 'number',  name: 'FEELS_LIKE',    required: false, defaultRole: 'value.temperature.feelslike.forecast.0'},
                {role: /^value.speed.wind$|^value.speed.wind.forecast.0$/,           indicator: false, type: 'number',  name: 'WIND_SPEED',    required: false, defaultRole: 'value.speed.wind.forecast.0'},
                {role: /^value.direction.wind$|^value.direction.wind.forecast.0$/,   indicator: false, type: 'number',  name: 'WIND_DIRECTION',required: false, defaultRole: 'value.direction.wind.forecast.0'},
                {role: /^weather.direction.wind$|^weather.direction.wind.forecast.0$/, indicator: false, type: 'string',  name: 'WIND_DIRECTION_STR',required: false, defaultRole: 'weather.direction.wind.forecast.0'},
                {role: /^weather.icon.wind$|^weather.icon.wind.forecast.0$/,         indicator: false, type: 'string',  name: 'WIND_ICON',     required: false, defaultRole: 'weather.icon.wind.forecast.0'},
                {role: /^weather.chart.url$/,                                        indicator: false, type: 'string',  name: 'HISTORY_CHART',   required: false, noSubscribe: true, defaultRole: 'weather.chart.url'},
                {role: /^weather.chart.url.forecast$/,                               indicator: false, type: 'string',  name: 'FORECAST_CHART',  required: false, noSubscribe: true, defaultRole: 'weather.chart.url.forecast'},
                {role: /^location$/,                                                 indicator: false, type: 'string',  name: 'LOCATION',        required: false, multiple: true, defaultRole: 'location'},

                // other days
                {role: /^weather.icon.forecast.(\d)$/,                               indicator: false, type: 'string',  name: 'ICON%d',          required: false, searchInParent: true, multiple: true, noSubscribe: true, notSingle: true},

                {role: /^value.temperature.min.forecast.(\d)$/,                      indicator: false, type: 'number',  name: 'TEMP_MIN%d',      required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^value.temperature.max.forecast.(\d)$/,                      indicator: false, type: 'number',  name: 'TEMP_MAX%d',      required: false, searchInParent: true, multiple: true, noSubscribe: true},

                {role: /^date.forecast.(\d)$/,                                       indicator: false, type: 'string',  name: 'DATE%d',          required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^dayofweek.forecast.(\d)$/,                                  indicator: false, type: 'string',  name: 'DOW%d',           required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^weather.state.forecast.(\d)$/,                              indicator: false, type: 'string',  name: 'STATE%d',         required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^value.temperature.forecast.(\d)$/,                          indicator: false, type: 'number',  name: 'TEMP%d',          required: false, searchInParent: true, multiple: true, noSubscribe: true},

                {role: /^value.humidity.forecast.(\d)$/,                             indicator: false, type: 'number',  name: 'HUMIDITY%d',      required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^value.humidity.max.forecast.(\d)$/,                         indicator: false, type: 'number',  name: 'HUMIDITY_MAX%d',  required: false, searchInParent: true, multiple: true, noSubscribe: true},

                {role: /^value.precipitation.forecast.(\d)$/,                        indicator: false, type: 'number',  unit: '%', name: 'PRECIPITATION_CHANCE%d', required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^value.precipitation.forecast.(\d)$/,                        indicator: false, type: 'number',  unit: 'mm', name: 'PRECIPITATION%d', required: false, searchInParent: true, multiple: true, noSubscribe: true},

                {role: /^value.speed.wind.forecast.(\d)$/,                           indicator: false, type: 'number',  name: 'WIND_SPEED%d',    required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^value.direction.wind.forecast.(\d)$/,                       indicator: false, type: 'number',  name: 'WIND_DIRECTION%d',required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^weather.direction.wind.forecast.(\d)$/,                     indicator: false, type: 'string',  name: 'WIND_DIRECTION_STR%d',required: false, searchInParent: true, multiple: true, noSubscribe: true},
                {role: /^weather.icon.wind.forecast.(\d)$/,                          indicator: false, type: 'string',  name: 'WIND_ICON%d',     required: false, searchInParent: true, multiple: true, noSubscribe: true},
            ],
            type: Types.weatherForecast
        },
        rgb: {
            states: [
                {role: /^level\.color\.red$/,                             indicator: false, type: 'number',  write: true,           name: 'RED',           required: true,   defaultRole: 'level.color.red'},
                {role: /^level\.color\.green$/,                           indicator: false, type: 'number',  write: true,           name: 'GREEN',         required: true,   defaultRole: 'level.color.green'},
                {role: /^level\.color\.blue$/,                            indicator: false, type: 'number',  write: true,           name: 'BLUE',          required: true,   defaultRole: 'level.color.blue'},
                // optional
                {role: /^level\.color\.white$/,                           indicator: false, type: 'number',  write: true,           name: 'WHITE',         required: false,  defaultRole: 'level.color.white'},
                {role: /^level\.dimmer$/,                                 indicator: false, type: 'number',  write: true,           name: 'DIMMER',        required: false,  defaultRole: 'level.dimmer', defaultUnit: '%'},
                {role: /^level\.brightness$/,                             indicator: false, type: 'number',  write: true,           name: 'BRIGHTNESS',    required: false},
                {role: /^level\.color\.saturation$/,                      indicator: false, type: 'number',  write: true,           name: 'SATURATION',    required: false},
                {role: /^level\.color\.temperature$/,                     indicator: false, type: 'number',  write: true,           name: 'TEMPERATURE',   required: false,  defaultRole: 'level.color.temperature', defaultUnit: '°K'},
                {role: /^switch\.light$/,                                 indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false,  defaultRole: 'switch.light'},
                {role: /^switch$/,                                        indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false,  defaultRole: 'switch.light'},
                {role: /^state(\.light)?$/,                               indicator: false, type: 'boolean', write: false,          name: 'ON_ACTUAL',     required: false,  defaultRole: 'state.light'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.rgb
        },
        // remove it when all adapters fixed (2018.08.15) r=>red, g=>green, b=>blue
        rgbOld: {
            states: [
                {role: /^level\.color\.r$/,                               indicator: false, type: 'number',  write: true,           name: 'RED',           required: true},
                {role: /^level\.color\.g$/,                               indicator: false, type: 'number',  write: true,           name: 'GREEN',         required: true},
                {role: /^level\.color\.b$/,                               indicator: false, type: 'number',  write: true,           name: 'BLUE',          required: true},
                // optional
                {role: /^level\.dimmer$/,                                 indicator: false, type: 'number',  write: true,           name: 'DIMMER',        required: false},
                {role: /^level\.brightness$/,                             indicator: false, type: 'number',  write: true,           name: 'BRIGHTNESS',    required: false},
                {role: /^level\.color\.saturation$/,                      indicator: false, type: 'number',  write: true,           name: 'SATURATION',    required: false},
                {role: /^level\.color\.temperature$/,                     indicator: false, type: 'number',  write: true,           name: 'TEMPERATURE',   required: false,  defaultUnit: '°K'},
                {role: /^switch\.light$/,                                 indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false,  defaultRole: 'switch.light'},
                {role: /^switch$/,                                        indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.rgb
        },
        rgbSingle: {
            states: [
                {role: /^level\.color\.rgb$/,                             indicator: false, type: 'string',  write: true,           name: 'RGB',           required: true,   defaultRole: 'level.color.rgb'},
                // optional
                {role: /^level\.dimmer$/,                                 indicator: false, type: 'number',  write: true,           name: 'DIMMER',        required: false,  defaultRole: 'level.dimmer'},
                {role: /^level\.brightness$/,                             indicator: false, type: 'number',  write: true,           name: 'BRIGHTNESS',    required: false,  defaultUnit: '%'},
                {role: /^level\.color\.saturation$/,                      indicator: false, type: 'number',  write: true,           name: 'SATURATION',    required: false},
                {role: /^level\.color\.temperature$/,                     indicator: false, type: 'number',  write: true,           name: 'TEMPERATURE',   required: false,  defaultRole: 'level.color.temperature', defaultUnit: '°K'},
                {role: /^switch\.light$/,                                 indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false,  defaultRole: 'switch.light'},
                {role: /^switch$/,                                        indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false,  defaultRole: 'switch.light'},
                {role: /^state(\.light)?$/,                               indicator: false, type: 'boolean', write: false,          name: 'ON_ACTUAL',     required: false,  defaultRole: 'state.light'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.rgbSingle
        },
        hue: {
            states: [
                {role: /^level\.color\.hue$/,                             indicator: false, type: 'number',  write: true,           name: 'HUE',           required: true,  defaultRole: 'level.color.hue', defaultUnit: '°'},
                // optional
                {role: /^level\.dimmer$/,                                 indicator: false, type: 'number',  write: true,           name: 'DIMMER',        required: false, searchInParent: true, defaultRole: 'level.dimmer', defaultUnit: '°C'},
                {role: /^level\.brightness$/,                             indicator: false, type: 'number',  write: true,           name: 'BRIGHTNESS',    required: false},
                {role: /^level\.color\.saturation$/,                      indicator: false, type: 'number',  write: true,           name: 'SATURATION',    required: false},
                {role: /^level\.color\.temperature$/,                     indicator: false, type: 'number',  write: true,           name: 'TEMPERATURE',   required: false, defaultRole: 'level.color.temperature', defaultUnit: '°K'},
                {role: /^switch\.light$/,                                 indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false, defaultRole: 'switch.light'},
                {role: /^switch$/,                                        indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false, defaultRole: 'switch.light'},
                {role: /^state(\.light)?$/,                               indicator: false, type: 'boolean', write: false,          name: 'ON_ACTUAL',     required: false,  defaultRole: 'state.light'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.hue
        },
        ct: {
            states: [
                {role: /^level\.color\.temperature$/,                     indicator: false, type: 'number',  write: true,           name: 'TEMPERATURE',   required: true,  defaultRole: 'level.color.temperature', defaultUnit: '°K'},
                // optional
                {role: /^level\.dimmer$/,                                 indicator: false, type: 'number',  write: true,           name: 'DIMMER',        required: false, defaultRole: 'level.dimmer', defaultUnit: '%'},
                {role: /^level\.brightness$/,                             indicator: false, type: 'number',  write: true,           name: 'BRIGHTNESS',    required: false},
                {role: /^level\.color\.saturation$/,                      indicator: false, type: 'number',  write: true,           name: 'SATURATION',    required: false},
                {role: /^switch\.light$/,                                 indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false, defaultRole: 'switch.light'},
                {role: /^switch$/,                                        indicator: false, type: 'boolean', write: true,           name: 'ON',            required: false},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.ct
        },
        warning: {
            states: [
                {role: /^value\.warning$/,                                indicator: false,                  name: 'LEVEL',         required: true,  defaultRole: 'value.warning'},
                // optional
                {role: /^weather\.title\.short$/,                         indicator: false, type: 'string',  name: 'TITLE',         required: false, defaultRole: 'weather.title.short'},
                {role: /^weather\.title$/,                                indicator: false, type: 'string',  name: 'INFO',          required: false, defaultRole: 'weather.title'},
                {role: /^date\.start$/,                                   indicator: false, type: 'string',  name: 'START',         required: false, defaultRole: 'date.start'},
                {role: /^date\.end$/,                                     indicator: false, type: 'string',  name: 'END',           required: false, defaultRole: 'date.end'},
                {role: /^date$/,                                          indicator: false, type: 'string',  name: 'START',         required: false},
                {role: /^weather\.chart\.url/,                            indicator: false, type: 'string',  name: 'ICON',          required: false, defaultRole: 'weather.chart.url'},

                // For detailed screen
                {role: /^weather\.state$/,                                indicator: false, type: 'string',  name: 'DESC',          required: false, noSubscribe: true, defaultRole: 'weather.state'},
            ],
            type: Types.warning
        },
        // most full description could be found here: https://yandex.ru/dev/dialogs/alice/doc/smart-home/concepts/device-type-thermostat-ac-docpage/
        airCondition: {
            states: [
                {role: /temperature(\..*)?$/,          indicator: false,     write: true,  type: 'number',                                                    name: 'SET',                required: true,  defaultRole: 'level.temperature',     defaultUnit: '°C'},
                // AUTO, COOL, HEAT, ECO, OFF, DRY, FAN_ONLY
                {role: /airconditioner$/,              indicator: false,     write: true,  type: 'number',    searchInParent: true,                           name: 'MODE',               required: true,  defaultRole: 'level.mode.airconditioner', defaultStates: {0: 'OFF', 1: 'AUTO', 2: 'COOL', 3: 'HEAT', 4: 'ECO', 5: 'FAN_ONLY', 6: 'DRY'}},
                // optional
                {role: /(speed|mode)\.fan$/,                  indicator: false,     write: true,  type: 'number',                                                    name: 'SPEED',       required: false, defaultRole: 'level.mode.fan',        defaultStates: {0: 'AUTO', 1: 'HIGH', 2: 'LOW', 3: 'MEDIUM', 4: 'QUIET', 5: 'TURBO'}},
                {role: /^switch\.power$/,              indicator: false,     write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'POWER',              required: false, defaultRole: 'switch.power'},
                {role: /^switch$/,                     indicator: false,     write: true,  type: 'boolean',   searchInParent: true,                           name: 'POWER',              required: false},
                {role: /temperature(\..*)?$/,          indicator: false,     write: false, type: 'number',    searchInParent: true,                           name: 'ACTUAL',             required: false, defaultRole: 'value.temperature',     defaultUnit: '°C'},
                {role: /humidity(\..*)?$/,             indicator: false,     write: false, type: 'number',    searchInParent: true,                           name: 'HUMIDITY',           required: false, defaultRole: 'value.humidity',        defaultUnit: '%'},
                {role: /^switch\.boost(\..*)?$/,       indicator: false,     write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'BOOST',              required: false, defaultRole: 'switch.boost'},
                {role: /swing$/,                       indicator: false,     write: true,  type: 'number',    searchInParent: true,                           name: 'SWING',              required: false, defaultRole: 'level.mode.swing',      defaultStates: {0: 'AUTO', 1: 'HORIZONTAL', 2: 'STATIONARY', 3: 'VERTICAL'}},
                {role: /swing$/,                       indicator: false,     write: true,  type: 'boolean',   searchInParent: true,                           name: 'SWING',              required: false, defaultRole: 'switch.mode.swing'},
                SharedPatterns.unreach,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.airCondition
        },
        thermostat: {
            states: [
                {role: /temperature(\..*)?$/,          indicator: false,     write: true,  type: 'number',                                                    name: 'SET',                required: true,  defaultRole: 'level.temperature', defaultUnit: '°C'},
                // optional
                {role: /temperature(\..*)?$/,          indicator: false,     write: false, type: 'number',    searchInParent: true,                           name: 'ACTUAL',             required: false, defaultRole: 'value.temperature', defaultUnit: '°C'},
                {role: /humidity(\..*)?$/,             indicator: false,     write: false, type: 'number',    searchInParent: true,                           name: 'HUMIDITY',           required: false, defaultRole: 'value.humidity', defaultUnit: '%'},
                {role: /^switch(\.mode)?\.boost(\..*)?$/, indicator: false,  write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'BOOST',              required: false, defaultRole: 'switch.mode.boost'},
                {role: /^switch\.power$/,              indicator: false,     write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'POWER',              required: false, defaultRole: 'switch.power'},
                {role: /^switch(\.mode)?\.party$/,     indicator: false,     write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'PARTY',              required: false, defaultRole: 'switch.mode.party'},
                {role: /^switch$/,                     indicator: false,     write: true,  type: 'boolean',   searchInParent: true,                           name: 'POWER',              required: false},
                {role: /^level(\.mode)?\.thermostat$/, indicator: false,     write: true,  type: 'number',    searchInParent: true,                           name: 'MODE',               required: false, defaultRole: 'level.mode.thermostat', defaultStates: {0: 'AUTO', 1: 'MANUAL'}},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.thermostat
        },
        vacuumCleaner: {
            states: [
                {role: /^switch\.power$/,              indicator: false,     write: true,  type: ['boolean', 'number'],   searchInParent: true,               name: 'POWER',              required: true,  defaultRole: 'switch.power'},
                // AUTO, ECO, EXPRESS, NORMAL, QUIET
                {role: /mode\.cleanup$/,               indicator: false,     write: true,  type: 'number',                searchInParent: true,               name: 'MODE',               required: true,  defaultRole: 'level.mode.cleanup', defaultStates: {0: 'AUTO', 1: 'NORMAL', 2: 'QUIET', 3: 'ECO', 4: 'EXPRESS'}},
                // optional
                {role: /vacuum\.map\.base64$/,         indicator: false,     write: false, type: 'string',                searchInParent: true,               name: 'MAP_BASE64',         required: false, defaultRole: 'vacuum.map.base64'},
                {role: /vacuum\.map\.url$/,            indicator: false,     write: false, type: 'string',                searchInParent: true,               name: 'MAP_URL',            required: false},
                {role: /mode\.work$/,                  indicator: false,     write: true,  type: 'number',                searchInParent: true,               name: 'WORK_MODE',          required: false, defaultRole: 'level.mode.work',    defaultStates: {0: 'AUTO', 1: 'FAST', 2: 'MEDIUM', 3: 'SLOW', 4: 'TURBO'}},
                {role: /^value\.water$/,               indicator: false,     write: false, type: 'number',                searchInParent: true, unit: '%',    name: 'WATER',              required: false, defaultRole: 'value.water',   defaultUnit: '%'},
                {role: /^value\.waste$/,               indicator: false,     write: false, type: 'number',                searchInParent: true, unit: '%',    name: 'WASTE',              required: false, defaultRole: 'value.waste',   defaultUnit: '%'},
                {role: /^value\.battery$/,             indicator: false,     write: false, type: 'number',                searchInParent: true, unit: '%',    name: 'BATTERY',            required: false, defaultRole: 'value.battery', defaultUnit: '%'},
                {role: /^value\.state$/,               indicator: false,     write: false, type: ['number', 'string'],    searchInParent: true,               name: 'STATE',              required: false, defaultRole: 'value.state'},
                {role: /^switch\.pause$/,              indicator: false,     write: true,  type: 'boolean',               searchInParent: true,               name: 'PAUSE',              required: false, defaultRole: 'switch.pause'},
                {role: /^indicator(\.maintenance)?\.waste$|^indicator(\.alarm)?\.waste/,  indicator: true,  type: 'boolean', searchInParent: true,            name: 'WASTE_ALARM',        required: false, defaultRole: 'indicator.maintenance.waste'},
                {role: /^indicator(\.maintenance)?\.water$|^indicator(\.alarm)?\.water/,  indicator: true,  type: 'boolean', searchInParent: true,            name: 'WATER_ALARM',        required: false, defaultRole: 'indicator.maintenance.water'},
                {role: /^value(\.usage)?\.filter/,     indicator: true,                    type: 'number',                searchInParent: true,               name: 'FILTER',             required: false, defaultRole: 'value.usage.filter', defaultUnit: '%'},
                {role: /^value(\.usage)?\.brush/,      indicator: true,                    type: 'number',                searchInParent: true,               name: 'BRUSH',              required: false, defaultRole: 'value.usage.brush', defaultUnit: '%'},
                {role: /^value(\.usage)?\.sensors/,    indicator: true,                    type: 'number',                searchInParent: true,               name: 'SENSORS',            required: false, defaultRole: 'value.usage.sensors', defaultUnit: '%'},
                {role: /^value(\.usage)?\.brush\.side/,indicator: true,                    type: 'number',                searchInParent: true,               name: 'SIDE_BRUSH',         required: false, defaultRole: 'value.usage.brush.side', defaultUnit: '%'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.vacuumCleaner
        },
        blinds: {
            states: [
                {role: /^level(\.blind)?$/,                       indicator: false, type: 'number',  write: true, enums: roleOrEnumBlind, name: 'SET',                 required: true, defaultRole: 'level.blind', defaultUnit: '%'},
                // optional
                {role: /^value(\.blind)?$/,                       indicator: false, type: 'number',               enums: roleOrEnumBlind, name: 'ACTUAL',              required: false, defaultRole: 'value.blind', defaultUnit: '%'},
                {role: /^button\.stop(\.blind)?$|^action\.stop$/, indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'STOP',                required: false, noSubscribe: true, defaultRole: 'button.stop.blind'},
                {role: /^button\.open(\.blind)?$/,                indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'OPEN',                required: false, noSubscribe: true, defaultRole: 'button.open.blind'},
                {role: /^button\.close(\.blind)?$/,               indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'CLOSE',               required: false, noSubscribe: true, defaultRole: 'button.close.blind'},
                {role: /^level\.tilt$/,                           indicator: false, type: 'number',  write: true, enums: roleOrEnumBlind, name: 'TILT_SET',            required: false, defaultRole: 'level.open.tilt'},
                {role: /^value\.tilt$/,                           indicator: false, type: 'number',               enums: roleOrEnumBlind, name: 'TILT_ACTUAL',         required: false, defaultRole: 'value.open.tilt'},
                {role: /^button\.stop\.tilt$/,                    indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_STOP',           required: false, noSubscribe: true, defaultRole: 'button.tilt.stop'},
                {role: /^button\.open\.tilt$/,                    indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_OPEN',           required: false, noSubscribe: true, defaultRole: 'button.tilt.open'},
                {role: /^button\.close\.tilt$/,                   indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_CLOSE',          required: false, noSubscribe: true, defaultRole: 'button.tilt.close'},
                SharedPatterns.direction,
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.blind
        },
        blindButtons: {
            states: [
                // blinds with no percentage setting / reading but buttons for up/down and stop:
                {role: /^button\.stop(\.blind)?$|^action\.stop$/, indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'STOP',                required: true,  noSubscribe: true, defaultRole: 'button.blind.stop'},
                {role: /^button\.open(\.blind)?$/,                indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'OPEN',                required: true,  noSubscribe: true, defaultRole: 'button.blind.open'},
                {role: /^button\.close(\.blind)?$/,               indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'CLOSE',               required: true,  noSubscribe: true, defaultRole: 'button.blind.close'},
                //optional tilt:
                {role: /^level\.tilt$/,                           indicator: false, type: 'number',  write: true, enums: roleOrEnumBlind, name: 'TILT_SET',            required: false, defaultRole: 'level.open.tilt'},
                {role: /^value\.tilt$/,                           indicator: false, type: 'number',               enums: roleOrEnumBlind, name: 'TILT_ACTUAL',         required: false, defaultRole: 'value.open.tilt'},
                {role: /^button\.stop\.tilt$/,                    indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_STOP',           required: false, noSubscribe: true, defaultRole: 'button.tilt.stop'},
                {role: /^button\.open\.tilt$/,                    indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_OPEN',           required: false, noSubscribe: true, defaultRole: 'button.tilt.open'},
                {role: /^button\.close\.tilt$/,                   indicator: false, type: 'boolean', write: true, enums: roleOrEnumBlind, name: 'TILT_CLOSE',          required: false, noSubscribe: true, defaultRole: 'button.tilt.close'},
                SharedPatterns.direction,
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.blindButtons
        },
        gate: {
            states: [
                {role: /^switch(\.gate)?$/,                   indicator: false, type: 'boolean',  write: true, enums: roleOrEnumGate, name: 'SET',                 required: true, defaultRole: 'switch.gate'},
                // optional
                {role: /^value(\.position)?|^value(\.gate)?$/,indicator: false, type: 'number',                enums: roleOrEnumGate,  name: 'ACTUAL',             required: false, defaultRole: 'value.blind', defaultUnit: '%'},
                {role: /^button\.stop$|^action\.stop$/,       indicator: false, type: 'boolean', write: true,  enums: roleOrEnumGate,  name: 'STOP',               required: false, noSubscribe: true, defaultRole: 'button.stop'},
                SharedPatterns.direction,
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.gate
        },
        weatherCurrent: {
            states: [
                {role: /^value(\.temperature)?$/,                     indicator: false, type: 'number',                name: 'ACTUAL',                                      required: true, defaultRole: 'value.temperature', defaultUnit: '°C'},
                {role: /^weather\.icon$/,                             indicator: false,                                name: 'ICON',                                        required: true, defaultRole: 'weather.icon'},
                // optional
                {role: /^value\.precipitation\.chance$/,              indicator: false, type: 'number',                name: 'PRECIPITATION_CHANCE',                        defaultRole: 'value.precipitation.chance', defaultUnit: '%'},
                {role: /^value\.precipitation\.type$/,                indicator: false, type: 'number',                name: 'PRECIPITATION_TYPE',                          defaultRole: 'value.precipitation.type', defaultStates: {0: 'NO', 1: 'RAIN', 2: 'SNOW', 3: 'HAIL'}},
                {role: /^value\.pressure$/,                           indicator: false, type: 'number',                name: 'PRESSURE',                                    defaultRole: 'value.pressure', defaultUnit: 'mbar'},
                {role: /^value\.pressure\.tendency$/,                 indicator: false, type: 'string',                name: 'PRESSURE_TENDENCY',                           defaultRole: 'value.pressure.tendency'},
                {role: /^value\.temperature\.windchill$/,             indicator: false, type: 'number',                name: 'REAL_FEEL_TEMPERATURE',                       defaultRole: 'value.temperature.windchill', defaultUnit: '°C'},
                {role: /^value.humidity$/,                            indicator: false, type: 'number',                name: 'HUMIDITY',                                    defaultRole: 'value.humidity', defaultUnit: '%'},
                {role: /^value.uv$/,                                  indicator: false, type: 'number',                name: 'UV',                                          defaultRole: 'value.uv'},
                {role: /^weather\.state$/,                            indicator: false, type: 'string',                name: 'WEATHER',                                     defaultRole: 'weather.state'},
                {role: /^value\.direction\.wind$/,                    indicator: false, type: 'string',                name: 'WIND_DIRECTION',                              defaultRole: 'value.direction.wind', defaultUnit: '°'},
                {role: /^value\.speed\.wind\.gust$/,                  indicator: false, type: 'number',                name: 'WIND_GUST',                                   defaultRole: 'value.speed.wind.gust', defaultUnit: 'km/h'},
                {role: /^value\.speed\.wind$/,                        indicator: false, type: 'number',                name: 'WIND_SPEED',                                  defaultRole: 'value.speed.wind$', defaultUnit: 'km/h'},
                SharedPatterns.lowbat,
                SharedPatterns.unreach,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.weatherCurrent
        },
        camera: {
            states: [
                {role: /^camera(\.\w+)?$/,                                        indicator: false, type: 'file',     name: 'FILE',                           required: true, defaultRole: 'camera'},
                // optional
                {role: /^switch(\.camera)?\.autofocus$/,                          indicator: false, type: 'boolean',  write: true,  name: 'AUTOFOCUS',        required: false, defaultRole: 'switch.camera.autofocus'},
                {role: /^switch(\.camera)?\.autowhitebalance$/,                   indicator: false, type: 'boolean',  write: true,  name: 'AUTOWHITEBALANCE', required: false, defaultRole: 'switch.camera.autowhitebalance'},
                {role: /^switch(\.camera)?\.brightness$/,                         indicator: false, type: 'boolean',  write: true,  name: 'BRIGHTNESS',       required: false, defaultRole: 'switch.camera.brightness'},
                {role: /^switch(\.camera)?\.nightmode$/,                          indicator: false, type: 'boolean',  write: true,  name: 'NIGHTMODE',        required: false, defaultRole: 'switch.camera.nightmode'},
                {role: /^level(\.camera)?\.position$|^level(\.camera)?(\.ptz)$/,  indicator: false, type: 'number',   write: true,  name: 'PTZ',              required: false, defaultRole: 'level.camera.position'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.camera,
            enumRequired: false
        },
        lock: {
            states: [
                {role: /^switch\.lock$/,                      indicator: false, type: 'boolean',  write: true,              name: 'SET',                 required: true, defaultRole: 'switch.lock'},
                // optional
                {role: /^state$/,                             indicator: false, type: 'boolean',  write: false,             name: 'ACTUAL',              required: false, defaultRole: 'state'},
                {                                             indicator: false, type: 'boolean',  write: true, read: false, name: 'OPEN',                required: false, noSubscribe: true, defaultRole: 'button'},
                SharedPatterns.direction,
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.lock
        },
        motion: {
            states: [
                {role: /^state\.motion$|^sensor\.motion$/,                   indicator: false, type: 'boolean', name: 'ACTUAL',     required: true, defaultRole: 'sensor.motion'},
                // optional
                {role: /brightness$/,                                        indicator: false, type: 'number',  name: 'SECOND',     required: false, defaultRole: 'value.brightness', defaultUnit: 'lux'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.motion
        },
        window: {
            states: [
                {role: /^state(\.window)?$|^sensor(\.window)?/,                   indicator: false, type: 'boolean', enums: roleOrEnumWindow, name: 'ACTUAL',     required: true, defaultRole: 'sensor.window'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.window
        },
        windowTilt: {
            states: [
                {role: /^state?$|^value(\.window)?$/,                             indicator: false, type: 'number',  enums: roleOrEnumWindow, name: 'ACTUAL',     required: true, defaultRole: 'value.window'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.windowTilt
        },
        fireAlarm: {
            states: [
                {role: /^state(\.alarm)?\.fire$|^sensor(\.alarm)?\.fire/,                        indicator: false, type: 'boolean', name: 'ACTUAL',     required: true, channelRole: /^sensor(\.alarm)?\.fire$/, defaultRole: 'sensor.alarm.fire', defaultChannelRole: 'sensor.alarm.fire'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.fireAlarm,
            enumRequired: false
        },
        floodAlarm: {
            states: [
                {role: /^state(\.alarm)?\.flood$|^sensor(\.alarm)?\.flood/,                        indicator: false, type: 'boolean', name: 'ACTUAL',     required: true, channelRole: /^sensor(\.alarm)?\.flood$/, defaultRole: 'sensor.alarm.flood', defaultChannelRole: 'sensor.alarm.flood'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.floodAlarm
        },
        door: {
            states: [
                {role: /^state?$|^state(\.door)?$|^sensor(\.door)?/,              indicator: false, type: 'boolean', write: false, enums: roleOrEnumDoor, name: 'ACTUAL',     required: true, defaultRole: 'sensor.door'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.door
        },
        dimmer: {
            states: [
                {role: /^level(\.dimmer)?$|^level\.brightness$/, indicator: false, type: 'number',  write: true,       enums: roleOrEnumLight, name: 'SET',        required: true, defaultRole: 'level.dimmer', ignoreRole: /^level\.dimspeed$/, defaultUnit: '%'},
                // optional
                {role: /^value(\.dimmer)?$/,                     indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'ACTUAL',      required: false, defaultRole: 'value.dimmer', defaultUnit: '%'},
                {role: /^switch(\.light)?$|^state$/,             indicator: false, type: 'boolean', write: true,       enums: roleOrEnumLight, name: 'ON_SET',      required: false, defaultRole: 'switch.light'},
                {role: /^switch(\.light)?$|^state$/,             indicator: false, type: 'boolean', write: false,      enums: roleOrEnumLight, name: 'ON_ACTUAL',   required: false, defaultRole: 'switch.light'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.dimmer
        },
        light: {
            states: [
                {role: /^switch(\.light)?$|^state$/,           indicator: false, type: 'boolean', write: true,       enums: roleOrEnumLight, name: 'SET',         required: true,  defaultRole: 'switch.light'},
                // optional
                {role: /^switch(\.light)?$|^state$/,           indicator: false, type: 'boolean', write: false,      enums: roleOrEnumLight, name: 'ACTUAL',      required: false, defaultRole: 'switch.light'},
                {role: /^value\.power$/,                       indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'ELECTRIC_POWER', required: false, defaultRole: 'value.power', defaultUnit: 'W'},
                {role: /^value\.current$/,                     indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'CURRENT',        required: false, defaultRole: 'value.current', defaultUnit: 'mA'},
                {role: /^value\.voltage$/,                     indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'VOLTAGE',        required: false, defaultRole: 'value.voltage', defaultUnit: 'V'},
                {role: /^value\.power\.consumption$/,          indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'CONSUMPTION',    required: false, defaultRole: 'value.power.consumption', defaultUnit: 'Wh'},
                {role: /^value\.frequency$/,                   indicator: false, type: 'number',  write: false,      enums: roleOrEnumLight, name: 'FREQUENCY',      required: false, defaultRole: 'value.frequency', defaultUnit: 'Hz'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.light
        },
        volume: {
            states: [
                {role: /^level\.volume$/,                   indicator: false, type: 'number',  min: 'number', max: 'number', write: true,       name: 'SET',         required: true,   defaultRole: 'level.volume'},
                // optional
                {role: /^value\.volume$/,                   indicator: false, type: 'number',  min: 'number', max: 'number', write: false,      name: 'ACTUAL',      required: false,  defaultRole: 'value.volume'},
                {role: /^media\.mute$/,                     indicator: false, type: 'boolean',                               write: true,       name: 'MUTE',        required: false,  defaultRole: 'media.mute'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.volume
        },
        location_one: {
            states: [
                {role: /^value\.gps$/,                             indicator: false, type: 'string',  write: false,      name: 'GPS',           required: true,  defaultRole: 'value.gps'},
                // optional
                {role: /^value\.gps\.elevation$/,                  indicator: false, type: 'number',  write: false,      name: 'ELEVATION',     required: false,  defaultRole: 'value.gps.elevation'},
                {role: /^value\.radius$|value\.gps\.radius$/,      indicator: false, type: 'number',  write: false,      name: 'RADIUS',        required: false,  defaultRole: 'value.gps.radius'},
                {role: /^value\.accuracy$|^value\.gps\.accuracy$/, indicator: false, type: 'number',  write: false,      name: 'ACCURACY',      required: false,  defaultRole: 'value.gps.accuracy'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.location
        },
        location: {
            states: [
                {role: /^value\.gps\.longitude$/,                  indicator: false, type: 'number',  write: false,      name: 'LONGITUDE',     required: true,  defaultRole: 'value.gps.longitude', defaultUnit: '°'},
                {role: /^value\.gps\.latitude$/,                   indicator: false, type: 'number',  write: false,      name: 'LATITUDE',      required: true,  defaultRole: 'value.gps.latitude', defaultUnit: '°'},
                // optional
                {role: /^value\.gps\.elevation$/,                  indicator: false, type: 'number',  write: false,      name: 'ELEVATION',     required: false,  defaultRole: 'value.gps.elevation'},
                {role: /^value\.radius$|value\.gps\.radius$/,      indicator: false, type: 'number',  write: false,      name: 'RADIUS',        required: false,  defaultRole: 'value.gps.radius'},
                {role: /^value\.accuracy$|^value\.gps\.accuracy$/, indicator: false, type: 'number',  write: false,      name: 'ACCURACY',      required: false,  defaultRole: 'value.gps.accuracy'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.location
        },
        volumeGroup: {
            states: [
                {role: /^level\.volume\.group?$/,            indicator: false, type: 'number',  min: 'number', max: 'number', write: true,       name: 'SET',         required: true,  defaultRole: 'level.volume.group'},
                // optional
                {role: /^value\.volume\.group$/,             indicator: false, type: 'number',  min: 'number', max: 'number', write: false,      name: 'ACTUAL',      required: false, defaultRole: 'value.volume.group'},
                {role: /^media\.mute\.group$/,               indicator: false, type: 'boolean',                               write: true,       name: 'MUTE',        required: false, defaultRole: 'media.mute.group'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.volumeGroup
        },
        levelSlider: {
            states: [
                {role: /^level(\..*)?$/,                   indicator: false, type: 'number',  min: 'number', max: 'number', write: true,       name: 'SET',         required: true, defaultRole: 'level', defaultUnit: '%'},
                // optional
                {role: /^value(\..*)?$/,                   indicator: false, type: 'number',  min: 'number', max: 'number', write: false,      name: 'ACTUAL',      required: false, defaultRole: 'value'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.slider
        },
        socket: {
            states: [
                {role: /^switch$|^state$|^switch\.active$/,           indicator: false, type: 'boolean', write: true,  name: 'SET',            required: true,  defaultRole: 'switch'},
                // optional
                {role: /^state$|^state\.active$/,                     indicator: false, type: 'boolean', write: false, name: 'ACTUAL',         required: false, defaultRole: 'switch'},
                {role: /^value\.power$/,                              indicator: false, type: 'number',  write: false, name: 'ELECTRIC_POWER', required: false, defaultRole: 'value.power', defaultUnit: 'W'},
                {role: /^value\.current$/,                            indicator: false, type: 'number',  write: false, name: 'CURRENT',        required: false, defaultRole: 'value.current', defaultUnit: 'mA'},
                {role: /^value\.voltage$/,                            indicator: false, type: 'number',  write: false, name: 'VOLTAGE',        required: false, defaultRole: 'value.voltage', defaultUnit: 'V'},
                {role: /^value\.power\.consumption$/,                 indicator: false, type: 'number',  write: false, name: 'CONSUMPTION',    required: false, defaultRole: 'value.power.consumption', defaultUnit: 'Wh'},
                {role: /^value\.frequency$/,                          indicator: false, type: 'number',  write: false, name: 'FREQUENCY',      required: false, defaultRole: 'value.frequency', defaultUnit: 'Hz'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.socket
        },
        button: {
            states: [
                {role: /^button(\.[.\w]+)?$|^action(\.[.\w]+)?$/,           indicator: false, type: 'boolean', read: false, write: true,       name: 'SET',         required: true, noSubscribe: true, defaultRole: 'button'},
                // optional
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.button
        },
        buttonSensor: {
            states: [
                {role: /^button(\.[.\w]+)?$/,           indicator: false, type: 'boolean', read: true, write: false,       name: 'PRESS',         required: true,  defaultRole: 'button.press'},
                // optional
                {role: /^button\.long/,                 indicator: false, type: 'boolean', read: true, write: false,       name: 'PRESS_LONG',    required: false, defaultRole: 'button.long'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.buttonSensor
        },
        temperature: {
            states: [
                {role: /temperature$/,             indicator: false, write: false, type: 'number',  name: 'ACTUAL',     required: true,  defaultRole: 'value.temperature', defaultUnit: '°C'},
                {role: /humidity$/,                indicator: false, write: false, type: 'number',  name: 'SECOND',     required: false, defaultRole: 'value.humidity', defaultUnit: '%'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.temperature
        },
        humidity: {
            states: [
                {role: /humidity$/,                indicator: false, write: false, type: 'number',  name: 'ACTUAL',     required: true, defaultRole: 'value.humidity', defaultUnit: '%'},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.humidity
        },
        image: {
            states: [
                {role: /\.icon$|^icon$|^icon\.|\.icon\.|\.chart\.url\.|\.chart\.url$|^url.icon$/, indicator: false, write: false, type: 'string', name: 'URL', required: true},
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.image
        },
        info: {
            states: [
                {                                  indicator: false,                                 name: 'ACTUAL',         required: true, multiple: true, noDeviceDetection: true, ignoreRole: /\.inhibit$/, defaultRole: 'state'},
                SharedPatterns.working,
                SharedPatterns.unreach,
                SharedPatterns.lowbat,
                SharedPatterns.maintain,
                SharedPatterns.error
            ],
            type: Types.info
        }
    };

    function checkEnum(obj, enums, words) {
        var found = false;
        if (enums) {
            enums.forEach(function (en) {
                var pos = en.lastIndexOf('.');
                if (pos !== -1) {
                    en = en.substring(pos + 1);
                }
                for (var lang in words) {
                    if (words.hasOwnProperty(lang)) {
                        if (words[lang].find(function (reg) { return reg.test(en); })) {
                            found = true;
                            return false;
                        }
                    }
                }
            });
        }
        return found;
    }

    function roleOrEnum(obj, enums, roles, words) {
        if (roles && roles.indexOf(obj.common.role) !== -1) {
            return true;
        }
        return checkEnum(obj, enums, words);
    }

// -------------- LIGHT -----------------------------------------
    var lightWords = {
        en: [/lights?/i,    /lamps?/i,      /ceilings?/i],
        de: [/licht(er)?/i, /lampen?/i,     /beleuchtung(en)?/i],
        ru: [/свет/i,       /ламп[аы]/i,    /торшеры?/, /подсветк[аи]/i, /лампочк[аи]/i, /светильники?/i]
    };
    var lightRoles = ['switch.light', 'dimmer', 'value.dimmer', 'level.dimmer', 'sensor.light', 'state.light'];
    function roleOrEnumLight(obj, enums) {
        return roleOrEnum(obj, enums, lightRoles, lightWords);
    }

// -------------- BLINDS -----------------------------------------
    var blindWords = {
        en: [/blinds?/i,    /windows?/i,    /shutters?/i],
        de: [/rollladen?/i, /fenstern?/i,   /beschattung(en)?/i],
        ru: [/ставни/i,     /рольставни/i,  /окна|окно/, /жалюзи/i]
    };

    var blindRoles = ['blind', 'level.blind', 'value.blind', 'action.stop', 'button.stop', 'button.stop.blind', 'button.open.blind', 'button.close.blind'];
    function roleOrEnumBlind(obj, enums) {
        return roleOrEnum(obj, enums, blindRoles, blindWords);
    }

// -------------- GATES ------------------------------------------
    var gateWords = {
        en: [/gates?/i],
        de: [/toren/i, /tor/i],
        ru: [/ворота/i],
    };

    var gateRoles = ['gate', 'value.gate', 'switch.gate', 'action.stop', 'button.stop'];
    function roleOrEnumGate(obj, enums) {
        return roleOrEnum(obj, enums, gateRoles, gateWords);
    }

// -------------- WINDOWS -----------------------------------------
    var windowRoles = ['window', 'state.window', 'sensor.window', 'value.window'];
    function roleOrEnumWindow(obj, enums) {
        return roleOrEnum(obj, enums, windowRoles, blindWords);
    }

// -------------- DOORS -----------------------------------------
    var doorsWords = {
        en: [/doors?/i,      /gates?/i,      /wickets?/i,        /entry|entries/i],
        de: [/türe?/i,       /tuere?/i,      /tore?/i,           /einfahrt(en)?/i,  /pforten?/i],
        ru: [/двери|дверь/i, /ворота/i,      /калитка|калитки/,  /въезды?/i,        /входы?/i]
    };

    var doorsRoles = ['door', 'state.door', 'sensor.door'];
    function roleOrEnumDoor(obj, enums) {
        return roleOrEnum(obj, enums, doorsRoles, doorsWords);
    }

    this.getEnums = function () {
        return {
            door: {
                roles: doorsRoles,
                words: doorsWords
            },
            window: {
                roles: windowRoles,
                words: blindWords,
            },
            blind: {
                roles: blindRoles,
                words: blindWords,
            },
            gate: {
                roles: gateRoles,
                words: gateWords
            },
            light: {
                roles: lightRoles,
                words: lightWords
            }
        }
    }

    function getAllStatesInChannel(keys, channelId) {
        var list = [];
        var reg = new RegExp('^' + channelId.replace(/([$^.)([\]{}])/g, '\\$1') + '\\.[^.]+$');
        keys.forEach(function (_id) {
            reg.test(_id) && list.push(_id);
        });
        return list;
    }

    function getAllStatesInDevice(keys, channelId) {
        var list = [];
        var reg = new RegExp('^' + channelId.replace(/([$^.)([\]{}])/g, '\\$1') + '\\.[^.]+\\.[^.]+$');
        keys.forEach(function(_id) {
            if (reg.test(_id)) list.push(_id);
        });
        return list;
    }

    function getFunctionEnums(objects) {
        var enums = [];
        var reg = /^enum\.functions\./;
        for (var id in objects) {
            if (objects.hasOwnProperty(id) && reg.test(id) && objects[id] && objects[id].type === 'enum' && objects[id].common && objects[id].common.members && objects[id].common.members.length) {
                enums.push(id);
            }
        }
        return enums;
    }

    function getParentId(id) {
        var pos = id.lastIndexOf('.');
        if (pos !== -1) {
            return id.substring(0, pos);
        } else {
            return id;
        }
    }

    this._applyPattern = function (objects, id, statePattern) {
        if (objects[id] && objects[id].common) {
            var role = null;
            if (!statePattern) {
                debugger;
            }
            if (statePattern.role) {
                role = statePattern.role.test(objects[id].common.role || '');

                if (role && statePattern.channelRole) {
                    var channelId = getParentId(id);
                    if (objects[channelId] && (objects[channelId].type === 'channel' || objects[channelId].type === 'device')) {
                        role = statePattern.channelRole.test(objects[channelId].common.role);
                    } else {
                        role = false;
                    }
                }
            }
            if (role === false) {
                return false;
            }

            if (statePattern.objectType && objects[id].type !== statePattern.objectType) {
                return false;
            }

            if (statePattern.stateName && !statePattern.stateName.test(id)) {
                return false;
            }

            if (statePattern.unit && statePattern.unit !== objects[id].common.unit) {
                return false;
            }

            if (statePattern.ignoreRole && statePattern.ignoreRole.test(objects[id].common.role)) {
                return false;
            }

            if (statePattern.indicator === false && (objects[id].common.role || '').match(/^indicator(\.[.\w]+)?$/)) {
                return false;
            }

            if (statePattern.state && !statePattern.state.test(id.split('.').pop())) {
                return false;
            }

            if (statePattern.write !== undefined && statePattern.write !== (objects[id].common.write || false)) {
                return false;
            }

            if (statePattern.min === 'number' && typeof objects[id].common.min !== 'number') {
                return false;
            }

            if (statePattern.max === 'number' && typeof objects[id].common.max !== 'number') {
                return false;
            }

            if (statePattern.read !== undefined && statePattern.read !== (objects[id].common.read === undefined ? true : objects[id].common.read)) {
                return false;
            }

            if (statePattern.type) {
                if (typeof statePattern.type === 'string') {
                    if (statePattern.type !== objects[id].common.type) {
                        return false;
                    }
                } else {
                    var noOneOk = true;
                    for (var t = 0; t < statePattern.type.length; t++) {
                        if (statePattern.type[t] === objects[id].common.type) {
                            noOneOk = false;
                            break;
                        }
                    }
                    if (noOneOk) {
                        return false;
                    }
                }
            }

            if (statePattern.enums && typeof statePattern.enums === 'function') {
                var enums = this._getEnumsForId(objects, id);
                if (!statePattern.enums(objects[id], enums)) {
                    return false;
                }
            }

            return true;
        } else {
            return false;
        }
    };

    this._getEnumsForId = function (objects, id) {
        this.enums = this.enums || getFunctionEnums(objects);
        var result = [];
        this.enums.forEach(function (e) {
            if (objects[e].common.members.indexOf(id) !== -1) {
                result.push(e);
            }
        });
        if (!result.length && objects[id] && objects[id].type === 'state') {
            var channel = getParentId(id);
            if (objects[channel] && (objects[channel].type === 'channel' || objects[channel].type === 'device')) {
                this.enums.forEach(function (e) {
                    if (objects[e].common.members.indexOf(channel) !== -1) {
                        result.push(e);
                    }
                });
            }
        }

        return result.length ? result : null;
    };

    function copyState(oldState, newState) {
        if (!newState) {
            newState = JSON.parse(JSON.stringify(oldState));
        }

        if (newState instanceof Array) {
            for (var t = 0; t < newState.length; t++) {
                newState[t].original = oldState[t].original || oldState[t];
                if (oldState[t].enums) {
                    newState[t].enums = oldState[t].enums;
                }
                if (oldState[t].role) {
                    newState[t].role = oldState[t].role;
                }
                if (oldState[t].channelRole) {
                    newState[t].channelRole = oldState[t].channelRole;
                }
                if (oldState[t].icon) {
                    newState[t].icon = oldState[t].icon;
                }
            }
        } else {
            newState.original = oldState.original || oldState;
            if (oldState.enums) {
                newState.enums = oldState.enums;
            }
            if (oldState.role) {
                newState.role = oldState.role;
            }
            if (oldState.channelRole) {
                newState.channelRole = oldState.channelRole;
            }
            if (oldState.icon) {
                newState.icon = oldState.icon;
            }
        }

        return newState;
    }

    this._testOneState = function (context) {
        var objects             = context.objects;
        var pattern             = context.pattern;
        var state               = context.state;
        var channelStates       = context.channelStates;
        var usedIds             = context.usedIds;
        var _usedIds            = context._usedIds;
        var ignoreIndicators    = context.ignoreIndicators;
        var result              = context.result;
        var found               = false;

        channelStates.forEach(function (_id) {
            if ((state.indicator || (_usedIds.indexOf(_id) === -1 && (state.notSingle || usedIds.indexOf(_id) === -1))) &&
                this._applyPattern(objects, _id, state)) {
                if (state.indicator && ignoreIndicators) {
                    var parts = _id.split('.');

                    if (ignoreIndicators.indexOf(parts.pop()) !== -1) {
                        console.log(_id + ' ignored');
                        return;
                    }
                }

                if (!state.indicator){
                    _usedIds.push(_id);
                }
                if (!result) {
                    context.result = result = JSON.parse(JSON.stringify(patterns[pattern]));
                    result.states.forEach(function (state, j) {
                        copyState(patterns[pattern].states[j], state);
                    });
                }
                if (!result.type) {
                    debugger;
                }

                if (!result.states.find(function (e) {return e.id === _id;})) {
                    var _found = false;
                    for (var u = 0; u < result.states.length; u++) {
                        if (result.states[u] instanceof Array)  {
                            for (var c = 0; c < result.states[u].length; c++) {
                                if (result.states[u][c].name === state.name && result.states[u][c].role === state.role) {
                                    result.states[u] = result.states[u][c];
                                    result.states[u].id = _id;
                                    _found = true;
                                    break;
                                }
                            }
                            if (_found) {
                                break;
                            }
                        } else {
                            if (result.states[u].name === state.name) {
                                result.states[u].id = _id;
                                _found = true;
                                break;
                            }
                        }
                    }
                    if (!_found) {
                        console.error('Cannot find state for ' + _id);
                    }
                }
                found = true;
                if (state.multiple && channelStates.length > 1) {
                    // execute this rule for every state in this channel
                    channelStates.forEach(function (cid) {
                        if (cid === _id) return;
                        if ((state.indicator || (_usedIds.indexOf(cid) === -1 && (state.notSingle || usedIds.indexOf(cid) === -1))) &&
                            this._applyPattern(objects, cid, state)) {
                            if (!state.indicator) {
                                _usedIds.push(cid);
                            }
                            var newState = copyState(state);
                            newState.id = cid;
                            result.states.push(newState);
                        }
                    }.bind(this));
                }
                return false; // stop iteration
            }
        }.bind(this));
        return found;
    };

    function getChannelStates(objects, id, keys) {
        switch (objects[id].type) {
            case 'chart':
            case 'state':
                return [id];

            case 'device':
                var result = getAllStatesInDevice(keys, id);
                if (result.length) {
                    return result;
                }

                // if no states, it may be device without channels
                return getAllStatesInChannel(keys, id);

            default:
                // channel
                return getAllStatesInChannel(keys, id);
        }
    }

    function patternIsAllowed(pattern, allowedTypes, excludedTypes) {
        if (!pattern) {
            return false;
        } else
        if (allowedTypes && allowedTypes.indexOf(pattern.type) === -1) {
            return false;
        } else {
            return !excludedTypes || excludedTypes.indexOf(pattern.type) === -1;
        }
    }

    function allRequiredStatesFound(context) {
        if (!context.result) {
            return false;
        }

        var states = context.result.states;

        for (var a = 0; a < states.length; a++) {
            if (states[a] instanceof Array) {
                // one of
                for (var b = 0; b < states[a].length; b++) {
                    if (states[a][b].required && states[a].id) {
                        return true;
                    }
                }

                return false;
            } else {
                if (states[a].required && !states[a].id) {
                    return false;
                }
            }
        }

        return true;
    }

    this._detectNext = function (options) {
        var objects           = options.objects;
        var id                = options.id;
        var keys              = options._keysOptional;
        var usedIds           = options._usedIdsOptional;
        var ignoreIndicators  = options.ignoreIndicators;
													 
													  

        if (!usedIds) {
            usedIds = [];
            options._usedIdsOptional = usedIds;
        }

        if (!objects[id] || !objects[id].common) {
            return null;

											   
									 
													   
															   
																  
											
																	
				 
							   
																
        }

															 
								   
			   
        var context = {
            objects:            objects,
            channelStates:      getChannelStates(objects, id, keys),
            usedIds:            usedIds,
            ignoreIndicators:   ignoreIndicators
        };

        for (var pattern in patterns) {
            if (
                !patternIsAllowed(
                    patterns[pattern],
                    options.allowedTypes,
                    options.excludedTypes
                )
            ) {
                continue;
            }

            context.result = null;
										 
				   

            var _usedIds = [];
            context.pattern = pattern;
            context._usedIds = _usedIds;
            patterns[pattern].states.forEach(function (state) {
                var found = false;

											  
											
					 

                // one of following
                if (state instanceof Array) {
                    for (var s = 0; s < state.length; s++) {
                        context.state = state[s];
                        if (this._testOneState(context)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        context.result = null;
                        return false;
                    }
                } else {
                    context.state = state;
                    if (this._testOneState(context)) {
                        found = true;
                    }
                    if (state.required && !found) {
                        context.result = null;
                        return false;
                    }
                }
            }.bind(this));

            if (!allRequiredStatesFound(context)) {
                continue;
									 
																			
																		
									 
											  
																					   
																										  
												 
										  
								 
							 
										 
														 
									  
							 
								
																									
														 
									  
							 
						 
					 
						
											 
            }

            _usedIds.forEach(function (id) {
                usedIds.push(id);
            });

									   
																		
											  
													  
            var deviceStates;

											 
											
					 

            // looking for indicators and special states
            if (objects[id].type !== 'device') {
                // get device name
                var deviceId = getParentId(id);
                if (
                    objects[deviceId] &&
                    (objects[deviceId].type === 'channel' ||
                        objects[deviceId].type === 'device')
                ) {
                    deviceStates = getAllStatesInDevice(keys, deviceId);
                    if (deviceStates) {
                        deviceStates.forEach(function (_id) {
                            context.result.states.forEach(function (state, i) {
                                if (
                                    !state.id &&
                                    (state.indicator || state.searchInParent) &&
                                    !state.noDeviceDetection
                                ) {
                                    if (this._applyPattern(objects, _id, state.original)) {
                                        context.result.states[i].id = _id;
                                    }
                                }
                            }.bind(this));
                        }.bind(this));
                    }
                }
            }

            context.result.states.forEach(function (state) {
                if (state.name.indexOf('%d') !== -1 && state.role && state.id) {
                    var m = state.role.exec(
                        context.objects[state.id].common.role
                    );
                    if (m) {
                        state.name = state.name.replace('%d', m[1]);
                    }
                }
                if (state.role) {
                    delete state.role;
                }
                if (state.enums) {
                    delete state.enums;
                }
                if (state.original) {
                    if (state.original.icon) {
                        state.icon = state.original.icon;
                    }
                    delete state.original;
                }
            });

            return context.result;
        }
			 
		 
					
    };

    /**
     * detect
     *
     * Detect devices in some given path. Path can show to state, channel or device.
     *
     * @param options - parameters with following fields
     *                  objects - Object, that has all objects in form {'id1': {obj1params...}, 'id2': {obj2params...}}
     *                  id - Root ID from which the detection must start
     *                  _keysOptional - Array with keys from options.objects for optimization
     *                  _usedIdsOptional - Array with yet detected devices to do not similar device under different types
     *                  ignoreIndicators - If simple indicators like "low battery", "not reachable" must be detected as device or only as a part of other device.
     *                  allowedTypes - array with names of device types, that can be detected. Not listed device types will be ignored.
     *                  excludedTypes - array with names of device types, that must be ignored. The listed device types will be ignored.
     * @returns {*|boolean|"DIR"|"FILE"|ReadonlyArray<string>}
     */
    this.detect = function (options) {
        var objects           = options.objects;
        var id                = options.id;
        var _keysOptional     = options._keysOptional;
        var _usedIdsOptional  = options._usedIdsOptional;
        // var ignoreIndicators  = options.ignoreIndicators;

        if (this.cache[id] !== undefined) {
            return this.cache[id];
        }

        if (!_keysOptional) {
            _keysOptional = Object.keys(objects);
            _keysOptional.sort();
            options._keysOptional = _keysOptional;
        }

						 
        if (_usedIdsOptional) {
            _usedIdsOptional = [];
            options._usedIdsOptional = _usedIdsOptional;
        }

        var result = [];
        var detected;

        while ((detected = this._detectNext(options))) {
            result.push(detected);
        }

        this.cache[id] = result.length ? result : null;

        return this.cache[id];
    };

    this.getPatterns = function () {
        var copyPatterns = {};
        Object.keys(patterns).forEach(function (type) {
            var item = JSON.parse(JSON.stringify(patterns[type]));
            item.states.forEach(function (state, i) {
                if (patterns[type].states[i].role) {
                    state.role = patterns[type].states[i].role.toString();
                }

                if (patterns[type].states[i].enum) {
                    state.enum = true;
                }
            });
            copyPatterns[type] = item;
        });
        return copyPatterns;
    };

    (function _constructor(that) {
        that.enums = null;
        that.cache = {};
    })(this);

    return this;
}

// Node.js
if (typeof module !== 'undefined') {
    module.exports = {
        Types: Types,
        ChannelDetector: ChannelDetector
    };
    module.exports.default = ChannelDetector;
} else
// ReactJS
if (typeof exports !== 'undefined') {
    exports = {
        Types: Types,
        ChannelDetector: ChannelDetector
    };
    exports.default = ChannelDetector;
}