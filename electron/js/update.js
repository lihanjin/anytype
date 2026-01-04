const { app } = require('electron');
const { is } = require('electron-util');
const { autoUpdater } = require('electron-updater');

const ConfigManager = require('./config.js');
const Util = require('./util.js');

const TIMEOUT_UPDATE = 600 * 1000;

class UpdateManager {

	win = null;
	isUpdating = false;
	autoUpdate = false;
	timeout = 0;

	setWindow (win) {
		this.win = win;
	};

	init () {
		// 更新功能已禁用
		console.log('[UpdateManager].init, 更新功能已禁用');
		return;
		
		/* 以下代码已注释，防止意外进入
		const { channel } = ConfigManager.config;

		console.log('[UpdateManager].init, channel: ', channel);

		autoUpdater.logger = Util.getLogger();
		autoUpdater.logger.transports.file.level = 'debug';
		autoUpdater.autoDownload = false;
		autoUpdater.autoInstallOnAppQuit = false;
		autoUpdater.channel = channel;

		this.setTimeout();

		autoUpdater.on('checking-for-update', () => {
			Util.log('info', 'Checking for update');
		});

		autoUpdater.on('update-available', (info) => {
			this.clearTimeout();

			Util.log('info', 'Update available: ' + JSON.stringify(info, null, 3));
			this.download();
		});

		autoUpdater.on('update-not-available', (info) => {
			Util.log('info', 'Update not available: ' + JSON.stringify(info, null, 3));
			Util.send(this.win, 'update-not-available', this.autoUpdate);
		});
		
		autoUpdater.on('error', (err) => { 
			Util.log('Error: ' + err);
			Util.send(this.win, 'update-error', err, this.autoUpdate);
		});
		
		autoUpdater.on('download-progress', (progress) => {
			this.isUpdating = true;

			const msg = [
				`Download speed: ${progress.bytesPerSecond}`,
				'-',
				`Downloaded: ${progress.percent}%`,
				`(${progress.transferred}/${progress.total})`
			];

			Util.log('info', msg.join(' '));
			Util.send(this.win, 'download-progress', progress);
		});

		autoUpdater.on('update-downloaded', info => {
			this.isUpdating = false;

			Util.log('info', 'Update downloaded: ' + JSON.stringify(info, null, 3));
			Util.send(this.win, 'update-downloaded', info);
		});
		*/
	};

	isAllowed () {
		const { config } = ConfigManager;

		if (config.updateDisabled) {
			console.log('[UpdateManager].isAllowed, updateDisabled');
			return false;
		};

		const [ osMajor, osMinor, osPatch ] = String(process.getSystemVersion() || '').split('.');
		const [ appMajor, appMinor, appPatch ] = String(app.getVersion() || '').split('.');
		
		console.log('[UpdateManager].isAllowed, osVersion: ', [ osMajor, osMinor, osPatch ], 'appVersion', [ appMajor, appMinor, appPatch ]);

		if (is.windows && (osMajor <= 8)) {
			console.log('[UpdateManager].isAllowed, Windows version <= 8');
			return false;
		};

		if (is.macos && (osMajor <= 10)) {
			console.log('[UpdateManager].isAllowed, MacOS version <= 10');
			return false;
		};

		if (!/-(alpha|beta)/.test(appPatch) && isNaN(appPatch)) {
			console.log('[UpdateManager].isAllowed, App version is not valid');
			return false;
		};

		return true;
	};

	setChannel (channel) {
		// 更新功能已禁用
		console.log('[UpdateManager].setChannel, 更新功能已禁用');
		return;
		
		/* 以下代码已注释，防止意外进入
		autoUpdater.channel = channel;
		this.checkUpdate(false);
		*/
	};

	checkUpdate (auto) {
		// 更新功能已禁用
		console.log('[UpdateManager].checkUpdate, 更新功能已禁用');
		return;
		
		/* 以下代码已注释，防止意外进入
		if (!this.isAllowed() || this.isUpdating) {
			return;
		};

		autoUpdater.checkForUpdatesAndNotify().catch((err) => {
			Util.log('info', `checkForUpdatesAndNotify error: ${err}`);
		});

		this.setTimeout();
		this.autoUpdate = auto;
		*/
	};

	download () {
		autoUpdater.downloadUpdate();
	};

	relaunch () {
		// 更新功能已禁用
		console.log('[UpdateManager].relaunch, 更新功能已禁用');
		return;
		
		/* 以下代码已注释，防止意外进入
		Util.log('info', 'Relaunch');
		app.isQuiting = true;

		autoUpdater.quitAndInstall();
		*/
	};

	cancel () {
		this.isUpdating = false;
		this.clearTimeout();
	};

	setTimeout () {
		// 更新功能已禁用，不再设置自动检查更新的定时器
		return;
		
		/* 以下代码已注释，防止意外进入
		const { config } = ConfigManager;
		const t = Number(config.updateTimeout) || TIMEOUT_UPDATE;

		this.clearTimeout();
		this.timeout = setTimeout(() => this.checkUpdate(true), t);
		*/
	};

	clearTimeout () {
		clearTimeout(this.timeout);
	};

};

module.exports = new UpdateManager();
