/**
 * Get icon markup.
 *
 * @param {Object} props
 *
 * @return {JSX.Element} Icon component.
 */
export const Icon = ( { iconset = 'default' } ) => {
	// Needed for this specific icon to prevent rendering issues in the editor.
	const uid = Math.random().toString( 36 ).substr( 2, 3 );
	const iconsets = {
		default: (
			<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<radialGradient
						id={ `SVGID_1_${ uid }` }
						cx="-62.754725"
						cy="75.590237"
						gradientTransform="matrix(-1 -0.004343 -0.007126 1.6408 0 0)"
						gradientUnits="userSpaceOnUse"
						r="70.587"
					>
						<stop offset="0.3144" stopColor="#FF9800" />
						<stop offset="0.6616" stopColor="#FF6D00" />
						<stop offset="0.9715" stopColor="#F44336" />
					</radialGradient>
					<radialGradient
						id={ `SVGID_2_${ uid }` }
						cx="53.390048"
						cy="88.663211"
						gradientTransform="matrix(-0.0101 0.9999 0.7525 0.007604 0 0)"
						gradientUnits="userSpaceOnUse"
						r="73.8599"
					>
						<stop offset="0.2141" stopColor="#FFF176" />
						<stop offset="0.3275" stopColor="#FFF27D" />
						<stop offset="0.4868" stopColor="#FFF48F" />
						<stop offset="0.6722" stopColor="#FFF7AD" />
						<stop offset="0.7931" stopColor="#FFF9C4" />
						<stop
							offset="0.8221"
							stopColor="#FFF8BD"
							stopOpacity="0.804"
						/>
						<stop
							offset="0.8627"
							stopColor="#FFF6AB"
							stopOpacity="0.529"
						/>
						<stop
							offset="0.9101"
							stopColor="#FFF38D"
							stopOpacity="0.2088"
						/>
						<stop
							offset="0.9409"
							stopColor="#FFF176"
							stopOpacity="0"
						/>
					</radialGradient>
				</defs>
				<path
					d="M35.56,40.73 C34.99,46.81 34.59,57.57 38.18,62.15 C38.18,62.15 36.49,50.33 51.64,35.5 C57.74,29.53 59.15,21.41 57.02,15.32 C55.81,11.87 53.6,9.02 51.68,7.03 C50.56,5.86 51.42,3.93 53.05,4 C62.91,4.44 78.89,7.18 85.68,24.22 C88.66,31.7 88.88,39.43 87.46,47.29 C86.56,52.31 83.36,63.47 90.66,64.84 C95.87,65.82 98.39,61.68 99.52,58.7 C99.99,57.46 101.62,57.15 102.5,58.14 C111.3,68.15 112.05,79.94 110.23,90.09 C106.71,109.71 86.84,123.99 67.1,123.99 C42.44,123.99 22.81,109.88 17.72,84.34 C15.67,74.03 16.71,53.63 32.61,39.23 C33.79,38.15 35.72,39.11 35.56,40.73 Z"
					fill={ `url(#SVGID_1_${ uid })` }
				/>
				<path
					d="M76.11,77.42 C67.02,65.72 71.09,52.37 73.32,47.05 C73.62,46.35 72.82,45.69 72.19,46.12 C68.28,48.78 60.27,55.04 56.54,63.85 C51.49,75.76 51.85,81.59 54.84,88.71 C56.64,93 54.55,93.91 53.5,94.07 C52.48,94.23 51.54,93.55 50.79,92.84 C48.64,90.79 47.09,88.12 46.35,85.24 C46.19,84.62 45.38,84.45 45.01,84.96 C42.21,88.83 40.76,95.04 40.69,99.43 C40.47,113 51.68,124 65.24,124 C82.33,124 94.78,105.1 84.96,89.3 C82.11,84.7 79.43,81.69 76.11,77.42 Z"
					fill={ `url(#SVGID_2_${ uid })` }
				/>
			</svg>
		),
	};

	return iconsets[ iconset ] || iconsets[ 'default' ];
};

export default Icon;
