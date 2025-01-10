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
				<defs />
				<path
					d="M93.99,8.97 C72.08,8.97 64.03,31.36 64.03,31.36 C64.03,31.36 56.09,8.97 34.03,8.97 C17.45,8.97 -1.45,22.11 5.53,51.98 C12.51,81.85 64.09,119.06 64.09,119.06 C64.09,119.06 115.48,81.85 122.47,51.98 C129.45,22.11 111.91,8.97 93.99,8.97 Z"
					fill="#F44336"
				/>
				<path
					d="M30.65,11.2 C47.85,11.2 56.39,29.69 59.15,37.18 C59.54,38.25 61.03,38.28 61.48,37.24 L64,31.35 C60.45,20.01 50.69,8.97 34.03,8.97 C27.13,8.97 19.84,11.25 14.17,16.06 C19.18,12.77 25.05,11.2 30.65,11.2 Z"
					fill="#CC3333"
				/>
				<path
					d="M93.99,8.97 C88.7,8.97 83.88,10.12 80.12,12.44 C82.76,11.42 86.03,11.2 89.27,11.2 C105.48,11.2 119.99,23.49 113.44,51.9 C107.82,76.29 74.98,105.88 64.95,117.17 C64.31,117.89 64.09,119.05 64.09,119.05 C64.09,119.05 115.48,81.84 122.47,51.97 C129.45,22.11 111.94,8.97 93.99,8.97 Z"
					fill="#CC3333"
				/>
				<path
					d="M17.04,24.82 C20.79,20.14 27.49,16.27 33.17,20.73 C36.24,23.14 34.9,28.08 32.15,30.16 C28.15,33.2 24.67,35.03 22.23,39.79 C20.77,42.65 19.89,45.78 19.44,48.97 C19.26,50.23 17.61,50.54 16.99,49.43 C12.77,41.95 11.57,31.65 17.04,24.82 Z"
					fill="#FF8A80"
				/>
				<path
					d="M77.16,34.66 C75.4,34.66 74.16,32.96 74.8,31.32 C75.99,28.3 77.53,25.38 79.38,22.78 C82.12,18.94 87.33,16.7 90.63,19.03 C94.01,21.41 93.57,26.17 91.2,28.47 C86.11,33.4 79.69,34.66 77.16,34.66 Z"
					fill="#FF8A80"
				/>
			</svg>
		),
	};

	return iconsets[ iconset ] || iconsets[ 'default' ];
};

export default Icon;
