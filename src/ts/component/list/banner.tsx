import React, { FC } from 'react';
import { Banner } from 'Component';
import { observer } from 'mobx-react';
import { Renderer, S, translate, U } from 'Lib';

const ListBanner: FC = observer(() => {
	// 更新功能已禁用
	// const { updateVersion } = S.Common;

	return (
		<>
			{/* 更新提示已禁用
			{updateVersion ? (
				<Banner
					id="sidebarUpdateBanner"
					title={translate('commonUpdateAvailable')}
					text={U.Common.sprintf(translate('commonNewVersion'), updateVersion)}
					button={translate('commonUpdateApp')}
					buttonColor="black"
					onClick={() => {
						Renderer.send('updateConfirm');
						S.Common.updateVersionSet('');
						U.Common.checkUpdateVersion(updateVersion);
					}}
					onClose={() => {
						S.Common.updateVersionSet('');
						Renderer.send('updateCancel');
					}}
				/>
			) : ''}
			*/}
		</>
	);
});

export default ListBanner;