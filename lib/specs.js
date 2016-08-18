// jscs:disable jsDoc
'use strict';

var path = require('path'),
	constants = require('./constants');

exports['DefaultIcon'] = {
	type: 'icon',
	path: path.join('DefaultIcon.png'),
	size: 1024,
	platforms: ['ios', 'windows']
};

/**
 * iOS
 */

// DefaultIcon
exports['ios-DefaultIcon'] = {
	type: 'icon',
	path: path.join('DefaultIcon-ios.png'),
	size: 1024,
	platforms: ['ios']
};

// iTunes Artwork
exports['ios-iTunesArtwork'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'iTunesArtwork.png'),
	size: 512,
	platforms: ['ios'],
	sdkVersion: '<5.0.0'
};
exports['ios-iTunesArtwork@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'iTunesArtwork@2x.png'),
	size: 1024,
	platforms: ['ios'],
	sdkVersion: '<5.0.0'
};

// App icons
exports['ios-appicon-Small-40'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-40.png'),
	size: 40,
	platforms: ['ios'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-Small-40@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-40@2x.png'),
	size: 80,
	platforms: ['ios'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-60@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-60@2x.png'),
	size: 120,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-60@3x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-60@3x.png'),
	size: 180,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-76'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-76.png'),
	size: 76,
	platforms: ['ipad'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-76@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-76@2x.png'),
	size: 152,
	platforms: ['ipad'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-83.5@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-167.png'),
	size: 167,
	platforms: ['ipad'],
	minVersion: 9,
	sdkVersion: '<5.0.0'
};

// Spotlight & Settings icons
exports['ios-appicon-Small'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-small.png'),
	size: 29,
	platforms: ['iphone', 'ios'],
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-Small@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-small@2x.png'),
	size: 58,
	platforms: ['iphone', 'ios'],
	sdkVersion: '<5.0.0'
};
exports['ios-appicon-Small@3x'] = {
	type: 'icon',
	path: path.join(':assets:', 'iphone', 'icon-small@3x.png'),
	size: 87,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};

// Splashes
exports['ios-Default@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default@2x~iphone.png'),
	localePath: path.join('i18n', ':locale:', 'Default@2x.png'),
	width: 640,
	height: 960,
	platforms: ['iphone']
};
exports['ios-Default-568h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-568h@2x~iphone.png'),
	localePath: path.join('i18n', ':locale:', 'Default-568h@2x.png'),
	width: 640,
	height: 1136,
	platforms: ['iphone']
};
exports['ios-Default-667h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-667h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-667h@2x.png'),
	width: 750,
	height: 1334,
	platforms: ['iphone']
};
exports['ios-Default-Portrait-736h@3x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-736h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait-736h@3x.png'),
	width: 1242,
	height: 2208,
	platforms: ['iphone']
};
exports['ios-Default-Landscape-736h@3x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-Landscape-736h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape-736h@3x.png'),
	width: 2208,
	height: 1242,
	platforms: ['iphone']
};
exports['ios-Default-Portrait'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-Portrait~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait.png'),
	width: 768,
	height: 1004,
	heightFix: 1024,
	platforms: ['ipad'],
	orientation: 'portrait'
};
exports['ios-Default-Portrait@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-Portrait@2x~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait@2x.png'),
	width: 1536,
	height: 2008,
	heightFix: 2048,
	platforms: ['ipad'],
	orientation: 'portrait'
};
exports['ios-Default-Landscape'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-Landscape~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape.png'),
	width: 1024,
	height: 748,
	heightFix: 768,
	platforms: ['ipad'],
	orientation: 'landscape'
};
exports['ios-Default-Landscape@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Default-Landscape@2x~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape@2x.png'),
	width: 2048,
	height: 1496,
	heightFix: 1536,
	platforms: ['ipad'],
	orientation: 'landscape'
};
exports['ios-Store-Landscape'] = {
	type: 'splash',
	path: path.join(':assets:', 'iphone', 'Store-Landscape.png'),
	localePath: path.join('i18n', ':locale:', 'Store-Landscape.png.png'),
	width: 2732,
	height: 2008,
	heightFix: 2048,
	platforms: ['ipad'],
	orientation: 'landscape'
};

// assets
exports['ios-images@3x'] = {
	type: 'asset',
	path: path.join(':assets:', 'iphone', 'images'),
	dpi: constants.dpi.xxhdpi,
	platforms: ['ios'],
	suffix: '@3x'
};
exports['ios-images@2x'] = {
	type: 'asset',
	path: path.join(':assets:', 'iphone', 'images'),
	dpi: constants.dpi.xhdpi,
	platforms: ['ios'],
	suffix: '@2x'
};
exports['ios-images'] = {
	type: 'asset',
	path: path.join(':assets:', 'images'),
	dpi: constants.dpi.mdpi,
	platforms: ['ios', 'android', 'mobileweb', 'tizen', 'blackberry']
};

/**
 * Android
 */

// Google Play
exports['android-MarketplaceArtwork'] = {
	type: 'icon',
	path: path.join('MarketplaceArtwork.png'),
	size: 512,
	platforms: ['android']
};
exports['android-MarketplaceArtworkFeature'] = {
	type: 'splash',
	path: path.join('MarketplaceArtworkFeature.png'),
	alsoNine: true,
	width: 1024,
	height: 500,
	platforms: ['android']
};

// icons
exports['android-appicon'] = {
	type: 'icon',
	path: path.join(':assets:', 'android', 'appicon.png'),
	size: 128,
	alpha: true,
	platforms: ['android']
};
exports['android-appicon-ldpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-ldpi', 'appicon.png'),
	size: 36,
	alpha: true,
	dpi: constants.dpi.ldpi,
	platforms: ['android']
};
exports['android-appicon-mdpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-mdpi', 'appicon.png'),
	size: 48,
	alpha: true,
	dpi: constants.dpi.mdpi,
	platforms: ['android']
};
exports['android-appicon-hdpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-hdpi', 'appicon.png'),
	size: 72,
	alpha: true,
	dpi: constants.dpi.hdpi,
	platforms: ['android']
};
exports['android-appicon-xhdpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-xhdpi', 'appicon.png'),
	size: 96,
	alpha: true,
	dpi: constants.dpi.xhdpi,
	platforms: ['android']
};
exports['android-appicon-xxhdpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-xxhdpi', 'appicon.png'),
	size: 144,
	alpha: true,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android']
};
exports['android-appicon-xxxhdpi'] = {
	type: 'icon',
	path: path.join('platform', 'android', 'res', 'drawable-xxxhdpi', 'appicon.png'),
	size: 192,
	alpha: true,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android']
};

// splashes
exports['android-default'] = { // mdpi
	type: 'splash',
	path: path.join(':assets:', 'android', 'default.png'),
	width: 320,
	height: 480,
	platforms: ['android']
};
exports['android-default-long-land-xxxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-xxxhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-xxxhdpi', 'default.png'),
	width: 1920,
	height: 1280,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-land-xxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-xxhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-xxhdpi', 'default.png'),
	width: 1600,
	height: 960,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-land-xhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-xhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-xhdpi', 'default.png'),
	width: 960,
	height: 640,
	dpi: constants.dpi.xhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-land-hdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-hdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-hdpi', 'default.png'),
	width: 800,
	height: 480,
	dpi: constants.dpi.hdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-land-mdpi'] = { // missing in docs and needed because mdpi default is portrait
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-mdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-mdpi', 'default.png'),
	width: 480,
	height: 320,
	dpi: constants.dpi.mdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-land-ldpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-land-ldpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-land-ldpi', 'default.png'),
	width: 400,
	height: 240,
	dpi: constants.dpi.ldpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-default-long-port-xxxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-xxxhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-xxxhdpi', 'default.png'),
	width: 1280,
	height: 1920,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-default-long-port-xxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-xxhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-xxhdpi', 'default.png'),
	width: 960,
	height: 1600,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-default-long-port-xhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-xhdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-xhdpi', 'default.png'),
	width: 640,
	height: 960,
	dpi: constants.dpi.xhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-default-long-port-hdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-hdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-hdpi', 'default.png'),
	width: 480,
	height: 800,
	dpi: constants.dpi.hdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-default-long-port-mdpi'] = { // missing in docs and needed for locale
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-mdpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-mdpi', 'default.png'),
	width: 320,
	height: 480,
	dpi: constants.dpi.mdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-default-long-port-ldpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'android', 'images', 'res-long-port-ldpi', 'default.png'),
	localePath: path.join(':assets:', 'android', 'images', 'res-:locale:-long-port-ldpi', 'default.png'),
	width: 240,
	height: 400,
	dpi: constants.dpi.ldpi,
	platforms: ['android'],
	orientation: 'portrait'
};

// assets
exports['android-res-xxxhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-xxxhdpi'),
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android']
};
exports['android-res-xxhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-xxhdpi'),
	dpi: constants.dpi.xxhdpi,
	platforms: ['android']
};
exports['android-res-xhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-xhdpi'),
	dpi: constants.dpi.xhdpi,
	platforms: ['android']
};
exports['android-res-hdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-hdpi'),
	dpi: constants.dpi.hdpi,
	platforms: ['android']
};
exports['android-res-mdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-mdpi'),
	dpi: constants.dpi.mdpi,
	platforms: ['android']
};
exports['android-res-ldpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'android', 'images', 'res-ldpi'),
	dpi: constants.dpi.ldpi,
	platforms: ['android']
};
