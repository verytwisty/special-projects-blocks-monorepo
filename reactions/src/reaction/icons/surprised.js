/**
 * Get icon markup.
 *
 * @param {Object} props
 *
 * @return {JSX.Element} Icon component.
 */
export const Icon = ( { iconset = 'default' } ) => {
	const iconsets = {
		default: (
			<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<radialGradient
						id="face_1_"
						cx="63.6"
						cy="62.9"
						gradientUnits="userSpaceOnUse"
						r="56.9597"
					>
						<stop offset="0.5" stopColor="#FDE030" />
						<stop offset="0.92" stopColor="#F7C02B" />
						<stop offset="1" stopColor="#F4A223" />
					</radialGradient>
				</defs>
				<path
					id="face"
					d="M63.6,118.8 C35.7,118.8 5.6,101.3 5.6,62.9 C5.6,24.5 35.7,7 63.6,7 C79.1,7 93.4,12.1 104,21.4 C115.5,31.6 121.6,46 121.6,62.9 C121.6,79.8 115.5,94.1 104,104.3 C93.4,113.6 79,118.8 63.6,118.8 Z"
					fill="url(#face_1_)"
				/>
				<path
					d="M111.49,29.67 C116.82,38.27 119.6,48.51 119.6,59.9 C119.6,76.8 113.5,91.1 102,101.3 C91.4,110.6 77,115.8 61.6,115.8 C43.54,115.8 24.6,108.45 13.42,92.86 C24.18,110.52 44.42,118.8 63.6,118.8 C79,118.8 93.4,113.6 104,104.3 C115.5,94.1 121.6,79.8 121.6,62.9 C121.6,50.16 118.13,38.84 111.49,29.67 Z"
					fill="#EB8F00"
				/>
				<path
					d="M64.6,85.6 C68.41,85.61 72.21,85.41 76,85 C76.05,78.37 70.71,72.96 64.08,72.92 C57.45,72.88 52.05,78.2 52,84.83 C56.18,85.35 60.39,85.61 64.6,85.6 Z"
					fill="#FFFFFF"
				/>
				<path
					d="M52,84.83 C52,85.09 52,85.34 52,85.6 L52,97.4 C52,104.03 57.37,109.4 64,109.4 C70.63,109.4 76,104.03 76,97.4 L76,85.6 C76,85.39 76,85.18 76,84.97 C72.22,85.39 68.43,85.6 64.63,85.6 C60.41,85.61 56.19,85.35 52,84.83 Z"
					fill="#422B0D"
				/>
				<path
					d="M83.7,40.6 C87.5,40.6 91,45 91,52.4 C91,59.8 87.5,64.2 83.7,64.2 C79.9,64.2 76.4,59.8 76.4,52.4 C76.4,45 79.8,40.6 83.7,40.6 Z"
					fill="#422B0D"
				/>
				<path
					d="M44.3,40.6 C40.2,40.6 36.6,45 36.6,52.4 C36.6,59.8 40.3,64.2 44.3,64.2 C48.3,64.2 52,59.8 52,52.4 C52,45 48.3,40.6 44.3,40.6 Z"
					fill="#422B0D"
				/>
				<path
					d="M45.6,28.9 L45.6,28.9 C47.9,29.1 48.8,26 46.4,25.3 C44.51,24.79 42.55,24.59 40.6,24.7 C35.31,24.9 30.3,27.12 26.6,30.9 C24.9,32.7 27.3,34.9 29.1,33.6 C33.92,30.23 39.73,28.57 45.6,28.9 Z"
					fill="#422B0D"
				/>
				<path
					d="M82.2,28.9 L82.2,28.9 C88.1,28.56 93.95,30.21 98.8,33.6 C100.6,34.9 103,32.7 101.3,30.9 C97.59,27.14 92.58,24.92 87.3,24.7 C85.35,24.59 83.39,24.79 81.5,25.3 C80.52,25.58 79.95,26.59 80.23,27.57 C80.47,28.44 81.31,29 82.2,28.9"
					fill="#422B0D"
				/>
				<path
					d="M44.28,44.87 L44.28,44.87 C42.86,44.19 41.15,44.79 40.46,46.21 C39.93,47.32 40.17,48.65 41.06,49.51 L41.06,49.51 C42.48,50.19 44.19,49.59 44.88,48.17 C45.41,47.06 45.17,45.73 44.28,44.87 Z"
					fill="#896024"
				/>
				<path
					d="M83.31,44.87 L83.31,44.87 C81.88,44.2 80.18,44.81 79.5,46.24 C78.98,47.35 79.22,48.66 80.1,49.51 L80.1,49.51 C81.53,50.18 83.23,49.57 83.91,48.14 C84.43,47.04 84.19,45.72 83.31,44.87 Z"
					fill="#896024"
				/>
				<path
					d="M76,85.6 C75.42,82.66 73.88,79.99 71.63,78 C67.26,74.19 60.74,74.19 56.37,78 C54.12,79.99 52.59,82.66 52,85.6 C51.44,82.25 52.44,78.83 54.71,76.31 C59.2,71.18 67.01,70.66 72.14,75.16 C72.55,75.52 72.93,75.9 73.29,76.31 C74.42,77.59 75.25,79.1 75.73,80.74 C76.19,82.32 76.28,83.98 76,85.6 Z"
					fill="#EB8F00"
				/>
			</svg>
		),
	};

	return iconsets[ iconset ] || iconsets[ 'default' ];
};

export default Icon;
