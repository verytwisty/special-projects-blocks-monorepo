import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { defaultMode } = attributes;

	// Ensure the mode is set to either 'light' or 'dark' in the button class.
	const className = [ defaultMode ? `mode-${ defaultMode }` : '' ]
		.join( ' ' )
		.trim();

	return (
		<button
			{ ...useBlockProps.save( { className } ) }
			data-default-mode={ defaultMode }
		></button>
	);
}
