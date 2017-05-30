// jscs:disable jsDoc
'use strict';

var path = require('path'),
	constants = require('./constants');

/**
 * iOS
 */
// iTunes Artwork
exports['ios-iTunesArtwork'] = {
	type: 'icon',
	path: path.join(':assets:', 'store', 'iTunesArtwork.png'),
	size: 512,
	platforms: ['ios'],
	sdkVersion: '<5.0.0'
};
exports['ios-iTunesArtwork@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'store', 'iTunesArtwork@2x.png'),
	size: 1024,
	platforms: ['ios'],
	sdkVersion: '<5.0.0'
};

// App icons
exports['ios-icon-Small-40'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-40.png'),
	size: 40,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-Small-40@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-40@2x.png'),
	size: 80,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-50'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-50.png'),
	size: 50,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-50@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-50@2x.png'),
	size: 100,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-72'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-72.png'),
	size: 72,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-72@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-72@2x.png'),
	size: 144,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-57'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon.png'),
	size: 57,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-57@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon@2x.png'),
	size: 114,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-60@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-60@2x.png'),
	size: 120,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-60@3x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-60@3x.png'),
	size: 180,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-76'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-76.png'),
	size: 76,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-76@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-76@2x.png'),
	size: 152,
	platforms: ['iphone'],
	minVersion: 7,
	sdkVersion: '<5.0.0'
};
exports['ios-icon-83.5@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-167.png'),
	size: 167,
	platforms: ['iphone'],
	minVersion: 9,
	sdkVersion: '<5.0.0'
};

// Spotlight & Settings icons
exports['ios-icon-Small'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-small.png'),
	size: 29,
	platforms: ['iphone'],
	sdkVersion: '<5.0.0'
};
exports['ios-icon-Small@2x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-small@2x.png'),
	size: 58,
	platforms: ['iphone'],
	sdkVersion: '<5.0.0'
};
exports['ios-icon-Small@3x'] = {
	type: 'icon',
	path: path.join(':assets:', 'icons', 'icon-small@3x.png'),
	size: 87,
	platforms: ['iphone'],
	minVersion: 8,
	sdkVersion: '<5.0.0'
};

// Splashes
exports['ios-Default'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default~iphone.png'),
	localePath: path.join('i18n', ':locale:', 'Default.png'),
	width: 640,
	height: 960,
	platforms: ['iphone']
};
exports['ios-Default@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default@2x~iphone.png'),
	localePath: path.join('i18n', ':locale:', 'Default@2x.png'),
	width: 640,
	height: 960,
	platforms: ['iphone']
};
exports['ios-Default-568h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-568h@2x~iphone.png'),
	localePath: path.join('i18n', ':locale:', 'Default-568h@2x.png'),
	width: 640,
	height: 1136,
	platforms: ['iphone']
};
exports['ios-Default-667h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-667h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-667h@2x.png'),
	width: 750,
	height: 1334,
	platforms: ['iphone']
};
exports['ios-Default-Portrait-736h@3x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-736h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait-736h@3x.png'),
	width: 1242,
	height: 2208,
	platforms: ['iphone']
};
exports['ios-Default-Landscape-736h@3x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-Landscape-736h.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape-736h@3x.png'),
	width: 2208,
	height: 1242,
	platforms: ['iphone']
};
exports['ios-Default-Portrait'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-Portrait~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait.png'),
	width: 768,
	height: 1004,
	heightFix: 1024,
	platforms: ['ipad'],
	orientation: 'portrait'
};
exports['ios-Default-Portrait@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-Portrait@2x~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Portrait@2x.png'),
	width: 1536,
	height: 2008,
	heightFix: 2048,
	platforms: ['ipad'],
	orientation: 'portrait'
};
exports['ios-Default-Landscape'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-Landscape~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape.png'),
	width: 1024,
	height: 748,
	heightFix: 768,
	platforms: ['ipad'],
	orientation: 'landscape'
};
exports['ios-Default-Landscape@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'splashes', 'Default-Landscape@2x~ipad.png'),
	localePath: path.join('i18n', ':locale:', 'Default-Landscape@2x.png'),
	width: 2048,
	height: 1496,
	heightFix: 1536,
	platforms: ['ipad'],
	orientation: 'landscape'
};
exports['ios-Store@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', '3.5-inch - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store@2x.png'),
	width: 640,
	height: 960,
	platforms: ['ios']
};
exports['ios-Store-568h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', '4-inch - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store-568h@2x.png'),
	width: 640,
	height: 1136,
	platforms: ['ios']
};
exports['ios-Store-667h@2x'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', '4.7-inch - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store-667h@2x.png'),
	width: 750,
	height: 1334,
	platforms: ['ios']
};
exports['ios-Store-Portrait-736h@3x'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', '5.5-inch - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store-Portrait-736h@3x.png'),
	width: 1242,
	height: 2208,
	platforms: ['ios']
};
exports['ios-Store-iPad-Landscape'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'iPad - Landscape - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store-iPad-Landscape.png'),
	width: 2048,
	height: 1496,
	heightFix: 1536,
	platforms: ['ios'],
	orientation: 'landscape'
};
exports['ios-Store-iPadPro-Landscape'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'iPad Pro - Landscape - 0.png'),
	localePath: path.join('i18n', ':locale:', 'Store-iPadPro-Landscape.png'),
	width: 2732,
	height: 2008,
	heightFix: 2048,
	platforms: ['ios'],
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
	platforms: ['ios', 'mobileweb', 'tizen', 'blackberry']
};

/**
 * Android
 */
// Google Play
exports['android-MarketplaceArtwork'] = {
	type: 'icon',
	path: path.join(':assets:', 'store', 'AndroidArtworkIcon.png'),
	size: 512,
	platforms: ['android']
};
exports['android-MarketplaceArtworkFeature'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'AndroidArtworkFeature.png'),
	alsoNine: true,
	width: 1024,
	height: 500,
	platforms: ['android']
};
exports['android-MarketplaceArtworkPromo'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'AndroidArtworkPromo.png'),
	alsoNine: true,
	width: 180,
	height: 120,
	platforms: ['android']
};
exports['android-MarketplaceArtworkPhone'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'Android Phone - 0.png'),
	alsoNine: true,
	width: 824,
	height: 1464,
	platforms: ['android']
};
exports['android-MarketplaceArtwork7'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'Android Tablet - 7inch - 0.png'),
	alsoNine: true,
	width: 1920,
	height: 1200,
	platforms: ['android']
};
exports['android-MarketplaceArtwork10'] = {
	type: 'splash',
	path: path.join(':assets:', 'store', 'Android Tablet - 10inch - 0.png'),
	alsoNine: true,
	width: 2560,
	height: 1600,
	platforms: ['android']
};


// icons
exports['android-icon-mdpi'] = {
	type: 'icon',
	path: path.join(':assets:', 'drawable-mdpi', 'icon.png'),
	size: 48,
	alpha: true,
	dpi: constants.dpi.mdpi,
	platforms: ['android']
};
exports['android-icon-hdpi'] = {
	type: 'icon',
	path: path.join(':assets:', 'drawable-hdpi', 'icon.png'),
	size: 72,
	alpha: true,
	dpi: constants.dpi.hdpi,
	platforms: ['android']
};
exports['android-icon-xhdpi'] = {
	type: 'icon',
	path: path.join(':assets:', 'drawable-xhdpi', 'icon.png'),
	size: 96,
	alpha: true,
	dpi: constants.dpi.xhdpi,
	platforms: ['android']
};
exports['android-icon-xxhdpi'] = {
	type: 'icon',
	path: path.join(':assets:', 'drawable-xxhdpi', 'icon.png'),
	size: 144,
	alpha: true,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android']
};
exports['android-icon-xxxhdpi'] = {
	type: 'icon',
	path: path.join(':assets:', 'drawable-xxxhdpi', 'icon.png'),
	size: 192,
	alpha: true,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android']
};

// splashes
exports['android-screen-drawable-land-xxxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-land-xxxhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-land-xxxhdpi', 'screen.png'),
	width: 1920,
	height: 1280,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-screen-drawable-land-xxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-land-xxhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-land-xxhdpi', 'screen.png'),
	width: 1600,
	height: 960,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-screen-drawable-land-xhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-land-xhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-land-xhdpi', 'screen.png'),
	width: 1280,
	height: 720,
	dpi: constants.dpi.xhdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-screen-drawable-land-hdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-land-hdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-land-hdpi', 'screen.png'),
	width: 800,
	height: 480,
	dpi: constants.dpi.hdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-screen-drawable-land-mdpi'] = { // missing in docs and needed because mdpi screen is portrait
	type: 'splash',
	path: path.join(':assets:', 'drawable-land-mdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-land-mdpi', 'screen.png'),
	width: 480,
	height: 320,
	dpi: constants.dpi.mdpi,
	platforms: ['android'],
	orientation: 'landscape'
};
exports['android-screen-drawable-port-xxxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-port-xxxhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-port-xxxhdpi', 'screen.png'),
	width: 1280,
	height: 1920,
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-screen-drawable-port-xxhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-port-xxhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-port-xxhdpi', 'screen.png'),
	width: 960,
	height: 1600,
	dpi: constants.dpi.xxhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-screen-drawable-port-xhdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-port-xhdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-port-xhdpi', 'screen.png'),
	width: 720,
	height: 1280,
	dpi: constants.dpi.xhdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-screen-drawable-port-hdpi'] = {
	type: 'splash',
	path: path.join(':assets:', 'drawable-port-hdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-port-hdpi', 'screen.png'),
	width: 480,
	height: 800,
	dpi: constants.dpi.hdpi,
	platforms: ['android'],
	orientation: 'portrait'
};
exports['android-screen-drawable-port-mdpi'] = { // missing in docs and needed for locale
	type: 'splash',
	path: path.join(':assets:', 'drawable-port-mdpi', 'screen.png'),
	localePath: path.join(':assets:', 'res-:locale:-drawable-port-mdpi', 'screen.png'),
	width: 320,
	height: 480,
	dpi: constants.dpi.mdpi,
	platforms: ['android'],
	orientation: 'portrait'
};

// assets
exports['android-res-xxxhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-xxxhdpi'),
	dpi: constants.dpi.xxxhdpi,
	platforms: ['android']
};
exports['android-res-xxhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-xxhdpi'),
	dpi: constants.dpi.xxhdpi,
	platforms: ['android']
};
exports['android-res-xhdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-xhdpi'),
	dpi: constants.dpi.xhdpi,
	platforms: ['android']
};
exports['android-res-hdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-hdpi'),
	dpi: constants.dpi.hdpi,
	platforms: ['android']
};
exports['android-res-mdpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-mdpi'),
	dpi: constants.dpi.mdpi,
	platforms: ['android']
};
exports['android-res-ldpi'] = {
	type: 'asset',
	path: path.join(':assets:', 'res-ldpi'),
	dpi: constants.dpi.ldpi,
	platforms: ['android']
};
