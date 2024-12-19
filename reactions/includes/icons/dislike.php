<?php
/**
 * Icon markup.
 */
$reaction = array(
	'label'    => esc_html__( 'Dislike', 'wpcomsp-reactions' ),
	'iconsets' => array(
		'default' => '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="e" cx="-96.716357" cy="-65.48731" gradientTransform="matrix(-0.002181 -1 -0.7873 0.001717 0 0)" gradientUnits="userSpaceOnUse" r="87.039"> <stop offset=".6" stop-color="#FFCA28"/> <stop offset="1" stop-color="#FFB300"/> </radialGradient> <radialGradient id="d" cx="-76.682225" cy="92.985092" gradientTransform="matrix(-1.3883 -0.0794 -0.0374 0.6794 0 0)" gradientUnits="userSpaceOnUse" r="20.331"> <stop offset=".5993" stop-color="#FFCA28"/> <stop offset="1" stop-color="#FFB300"/> </radialGradient> <radialGradient id="c" cx="-63.199111" cy="73.488851" gradientTransform="matrix(-1.6967 0.001885 0.002913 0.6804 0 0)" gradientUnits="userSpaceOnUse" r="18.753"> <stop offset=".5993" stop-color="#FFCA28"/> <stop offset="1" stop-color="#FFB300"/> </radialGradient> <radialGradient id="b" cx="-77.424336" cy="23.352528" gradientTransform="matrix(-1.3069 0.00626 0.004522 0.6804 0 0)" gradientUnits="userSpaceOnUse" r="20.446"> <stop offset=".5993" stop-color="#FFCA28"/> <stop offset="1" stop-color="#FFB300"/> </radialGradient> <radialGradient id="a" cx="-64.122779" cy="46.801112" gradientTransform="matrix(-1.6358 0.001885 0.002809 0.6804 0 0)" gradientUnits="userSpaceOnUse" r="18.611"> <stop offset=".5993" stop-color="#FFCA28"/> <stop offset="1" stop-color="#FFB300"/> </radialGradient> </defs> <path d="M62.05,122.19 C59.54,122.19 57.18,121.47 55.04,120.06 C54.16,119.48 54.16,115.44 54.17,112.2 C54.18,107.18 54.19,100.93 52.17,95.21 C50.14,89.46 46.14,83.85 41.49,80.21 C31.59,72.47 18.46,68.19 17.9,68.01 C17.83,67.99 17.75,67.97 17.67,67.96 C13.2,67.26 9.96,63.46 9.98,58.94 L10.06,26.19 C10.07,21.3 13.49,17.09 18.37,15.93 C19,15.78 19.76,15.69 20.56,15.59 C22.43,15.36 24.55,15.09 26.5,13.99 C33.38,10.09 42.44,8.78 51.21,7.95 C63.95,6.75 76.9,6.41 85.53,6.34 C88.53,6.34 91.26,7.47 93.31,9.53 C95.36,11.58 96.49,14.32 96.49,17.22 L96.44,59.43 C96.43,67.59 89.78,74.22 81.63,74.22 L81.5,74.22 C81.5,74.22 74.26,73.97 74.25,73.97 C73.63,73.97 73.07,74.36 72.85,74.94 C71.36,78.89 73.01,84.7 74.91,91.43 C76.52,97.12 78.18,103 77.97,107.97 C77.65,115.15 69.77,122.19 62.05,122.19 Z" fill="url(#e)"/> <path d="M85.61,7.83 C88.12,7.83 90.47,8.81 92.24,10.58 C94.01,12.35 94.98,14.7 94.98,17.21 L94.93,59.42 C94.92,66.75 88.95,72.72 81.62,72.72 L81.56,72.72 L74.36,72.47 L74.25,72.47 C73.01,72.47 71.88,73.24 71.44,74.41 C69.78,78.82 71.48,84.85 73.46,91.83 C75.04,97.4 76.67,103.17 76.46,107.9 C76.18,114.24 68.91,120.69 62.05,120.69 C59.92,120.69 57.91,120.1 56.08,118.94 C55.66,117.94 55.67,114.64 55.67,112.2 C55.68,107.07 55.69,100.68 53.58,94.7 C51.46,88.69 47.28,82.82 42.41,79.02 C32.3,71.12 18.92,66.75 18.36,66.57 C18.21,66.52 18.06,66.49 17.91,66.46 C14.18,65.87 11.47,62.7 11.49,58.92 L11.57,26.17 C11.58,21.98 14.52,18.36 18.72,17.37 C19.28,17.24 19.99,17.15 20.75,17.05 C22.66,16.81 25.04,16.51 27.24,15.27 C33.88,11.51 42.75,10.24 51.35,9.42 C64.03,8.22 76.94,7.89 85.54,7.82 L85.61,7.83 M85.61,4.83 L85.51,4.83 C76.47,4.9 63.66,5.26 51.06,6.45 C40.88,7.41 32.38,8.92 25.75,12.67 C23.27,14.08 20.24,13.93 18.02,14.46 C12.53,15.76 8.58,20.53 8.56,26.17 L8.48,58.93 C8.46,64.16 12.27,68.63 17.44,69.44 C17.44,69.44 30.76,73.73 40.56,81.4 C44.24,84.27 48.51,89.37 50.75,95.72 C54.49,106.3 50.98,119.18 54.21,121.32 C56.72,122.98 59.4,123.7 62.05,123.7 C70.79,123.7 79.12,115.84 79.46,108.04 C79.94,97.05 71.75,82.11 74.25,75.47 L81.49,75.72 L81.61,75.72 C90.6,75.72 97.91,68.43 97.92,59.43 L97.97,17.22 C97.99,10.37 92.44,4.83 85.61,4.83 Z" fill="#EDA600"/> <path d="M66.12,65.5 C68,60.5 68.02,52.7 66.12,47.88 C63.37,40.92 56.64,34.83 48.87,33.76 C46.97,33.5 48.1,31.75 49.99,32.01 C58.4,33.17 69.78,36.58 72.74,44.13 C80.86,64.88 71.36,75.75 67.12,72.51 C65.08,70.93 65.06,68.33 66.12,65.5 Z" fill="#EDA600"/> <path d="M95.63,78.7 C82.51,78.7 73.19,76.49 69.41,72.47 C67.96,70.94 67.32,69.16 67.45,67.04 C67.88,59.63 77.94,58.08 86.29,58.08 C95.63,58.08 104.89,60 104.98,60.02 C105.05,60.04 105.13,60.05 105.2,60.05 C109.59,60.31 112.92,64.63 112.62,69.68 C112.33,74.57 108.78,78.4 104.53,78.4 C104.39,78.4 104.26,78.4 104.12,78.39 L104.03,78.39 C103.99,78.39 103.94,78.39 103.9,78.4 C103.86,78.39 100.39,78.7 95.63,78.7 Z" fill="url(#d)"/> <path d="M86.28,59.58 C95.44,59.58 104.57,61.47 104.66,61.49 C104.8,61.52 104.95,61.54 105.1,61.55 C106.76,61.65 108.29,62.49 109.42,63.93 C110.63,65.47 111.23,67.49 111.11,69.6 C110.87,73.69 107.98,76.9 104.52,76.9 C104.41,76.9 104.3,76.9 104.2,76.89 C104.14,76.89 104.08,76.88 104.03,76.88 C103.94,76.88 103.85,76.88 103.76,76.89 C103.73,76.89 100.31,77.19 95.63,77.19 C83.11,77.19 73.95,75.09 70.5,71.43 C69.34,70.2 68.84,68.82 68.94,67.11 C69.04,65.47 69.64,63.09 73.75,61.41 C76.75,60.2 80.96,59.58 86.28,59.58 M86.28,56.58 C76.47,56.58 66.43,58.64 65.94,66.95 C65.27,78.47 84.21,80.2 95.63,80.2 C100.52,80.2 104.03,79.88 104.03,79.88 C104.2,79.89 104.36,79.89 104.53,79.89 C109.54,79.89 113.78,75.47 114.11,69.76 C114.45,63.87 110.5,58.85 105.28,58.54 C105.28,58.55 95.89,56.58 86.28,56.58 Z" fill="#EDA600"/> <path d="M92.55,60.18 C81.64,60.18 68.64,58.35 68.64,49.61 C68.64,40.88 81.64,39.04 92.55,39.04 C101.81,39.04 110.23,40.39 110.31,40.4 C110.39,40.41 110.47,40.42 110.55,40.42 C114.76,40.42 118.03,45.54 118.03,49.95 C118.03,54.13 114.96,58.79 110.55,58.79 C110.47,58.79 110.39,58.8 110.31,58.81 C110.22,58.83 101.8,60.18 92.55,60.18 Z" fill="url(#c)"/> <path d="M92.55,40.55 C101.67,40.55 109.99,41.88 110.07,41.89 C110.23,41.92 110.39,41.93 110.55,41.93 C113.77,41.93 116.53,46.34 116.53,49.96 C116.53,53.43 113.97,57.3 110.55,57.3 C110.39,57.3 110.23,57.31 110.07,57.34 C109.99,57.35 101.69,58.68 92.55,58.68 C85.72,58.68 80.29,57.96 76.4,56.53 C70.79,54.47 70.14,51.59 70.14,49.61 C70.14,47.62 70.79,44.75 76.4,42.69 C80.28,41.27 85.72,40.55 92.55,40.55 M92.55,37.55 C80.62,37.55 67.14,39.74 67.14,49.62 C67.14,59.5 80.61,61.69 92.55,61.69 C102.04,61.69 110.55,60.31 110.55,60.31 C115.71,60.31 119.53,55.08 119.53,49.97 C119.53,44.86 115.71,38.94 110.55,38.94 C110.55,38.93 102.03,37.55 92.55,37.55 Z" fill="#EDA600"/> <path d="M91.85,24.59 C76.19,24.59 67.21,21.58 67.19,16.33 C67.19,14.95 67.73,13.73 68.86,12.6 C75.31,6.13 96.65,5.8 100.86,5.8 C101.48,5.8 101.84,5.81 101.84,5.81 C106.75,5.81 110.7,9.92 110.72,14.96 C110.73,17.42 109.81,19.74 108.14,21.48 C106.48,23.21 104.28,24.16 101.94,24.17 C101.9,24.17 101.85,24.17 101.81,24.18 C101.76,24.19 97.42,24.59 91.85,24.59 Z" fill="url(#b)"/> <path d="M100.86,7.31 C101.46,7.31 101.8,7.32 101.81,7.32 L101.9,7.32 C105.92,7.32 109.2,10.76 109.21,14.98 C109.22,17.05 108.45,19 107.05,20.46 C105.68,21.89 103.86,22.68 101.93,22.69 C101.84,22.69 101.75,22.69 101.66,22.7 C101.62,22.7 97.36,23.1 91.86,23.1 C77.59,23.1 68.71,20.51 68.7,16.34 C68.7,15.73 68.82,14.79 69.93,13.68 C72.85,10.73 82.7,7.31 100.86,7.31 M100.86,4.31 C95,4.31 65.66,4.88 65.7,16.34 C65.73,24.65 81.15,26.09 91.86,26.09 C97.57,26.09 101.94,25.68 101.94,25.68 C107.63,25.66 112.23,20.86 112.21,14.96 C112.19,9.07 107.58,4.31 101.9,4.31 L101.87,4.31 L100.86,4.31 Z" fill="#EDA600"/> <path d="M91.29,41.26 C82.31,41.26 67.23,40.07 67.23,32.14 C67.23,22.69 88.13,21.67 97.12,21.67 C102.35,21.67 106.19,21.98 106.23,21.98 L106.35,21.98 C111.08,21.98 115.38,26.98 115.38,32.48 C115.38,38.29 110.51,40.35 106.35,40.35 C106.29,40.35 106.22,40.35 106.16,40.36 C106.09,40.39 99.22,41.26 91.29,41.26 Z" fill="url(#a)"/> <path d="M97.12,23.18 C102.27,23.18 106.07,23.49 106.11,23.49 C106.19,23.5 106.27,23.5 106.36,23.5 C110.23,23.5 113.89,27.87 113.89,32.5 C113.89,37.2 110,38.87 106.36,38.87 C106.23,38.87 106.1,38.88 105.97,38.89 C105.9,38.9 99.12,39.77 91.29,39.77 C84.48,39.77 79.02,39.14 75.08,37.9 C68.74,35.9 68.74,33.08 68.74,32.15 C68.74,29.11 71.76,26.77 77.71,25.18 C83.87,23.52 91.67,23.18 97.12,23.18 M97.12,20.18 C85.13,20.18 65.73,21.78 65.73,32.15 C65.73,40.95 79.73,42.77 91.29,42.77 C99.42,42.77 106.35,41.87 106.35,41.87 C111.99,41.87 116.88,38.67 116.88,32.5 C116.88,26.33 111.99,20.5 106.35,20.5 C106.35,20.5 102.47,20.18 97.12,20.18 Z" fill="#EDA600"/> <path d="M27.79,13.1 L23,32 L21,15 Z" fill="#EDA600"/> </svg>',
	),
);
