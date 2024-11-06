/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PlainText,
	RichText,
	useBlockProps,
	URLInput,
} from '@wordpress/block-editor';

import { useDispatch } from '@wordpress/data';

import {
	ComboboxControl,
	PanelBody,
	TextControl,
	ToggleControl,
	ButtonGroup,
	Button,
	PanelRow,
} from '@wordpress/components';

import {
	useEntityRecords,
	useEntityProp,
	store as coreStore,
} from '@wordpress/core-data';

import { useEffect, useState } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { menuSlug, label } = attributes;
	const blockProps = useBlockProps();

	// Fetch all template parts.
	const { hasResolved, records } = useEntityRecords(
		'postType',
		'wp_template_part',
		{ per_page: -1 }
	);

	let menuOptions = [];

	// Filter the template parts for those in the 'menu' area.
	if ( hasResolved ) {
		menuOptions = records
			.filter( ( item ) => item.area === 'modal' )
			.map( ( item ) => ( {
				label: item.title.rendered, // Title of the template part.
				value: item.slug, // Template part slug.
				id: item.id, // Template part ID.
			} ) );
	}

	const [ modalMeta ] = useEntityProp( 'root', 'site', 'modal_meta' );
	const { editEntityRecord } = useDispatch( coreStore );

	const [ modalTitle, setModalTitle ] = useState( '' );
	const [ modalDescription, setModalDescription ] = useState( '' );

	useEffect( () => {
		if ( ! modalMeta || ! menuSlug ) {
			return;
		}

		setModalTitle( modalMeta[ menuSlug ]?.modalTitle || '' );
		setModalDescription( modalMeta[ menuSlug ]?.modalDescription || '' );
	}, [ modalMeta, menuSlug, modalTitle, modalDescription ] );

	const setModalMetaValue = ( key, value ) => {
		const newValue = modalMeta ? { ...modalMeta } : {};

		if ( ! ( menuSlug in newValue ) ) {
			newValue[ menuSlug ] = {
				modalTitle: undefined,
				modalDescription: undefined,
			};

			newValue[ menuSlug ][ key ] = value;
		} else {
			const modalSetting = { ...modalMeta[ menuSlug ] };
			modalSetting[ key ] = value;
			newValue[ menuSlug ] = modalSetting;
		}

		const updatedMeta = {
			modal_meta: newValue,
		};

		editEntityRecord( 'root', 'site', undefined, updatedMeta );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'modal' ) }
					initialOpen={ true }
				>
					{
						menuOptions.length > 0 ? (
							<ComboboxControl
								label={ __( 'Modal Template', 'modal' ) }
								value={ menuSlug }
								options={ menuOptions }
								onChange={ ( slugValue ) =>
									setAttributes( { menuSlug: slugValue } )
								}
							/>
						) : (
							<p>
								{ __(
									'No menu templates found. Please create a menu template part with the category of "Modal".',
									'modal'
								) }
							</p>
						)
					}

					{
						menuSlug && (

							<>
								<TextControl
									label={ __(
										'Modal Title',
										'modal'
									) }
									type="text"
									value={ modalTitle }
									onChange={ ( value ) =>
										setModalMetaValue( 'modalTitle', value )
									}
									autoComplete="off"
									help={ __(
										'Add a modal title for screen readers',
										'modal'
									) }
								/>
								<h3>
									{ __(
										'Modal Description',
										'modal'
									) }
								</h3>
								<PlainText
									label={ __(
										'Modal Description',
										'modal'
									) }
									value={ modalDescription }
									onChange={ ( value ) =>
										setModalMetaValue(
											'modalDescription',
											value
										)
									}
									placeholder={ __(
										'Add modal description for screen readers',
										'modal'
									) }
								/>
							</>
						)
					}
					
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<button className="wp-block-navigation-item__content">
					<RichText
						identifier="label"
						className="wp-block-navigation-item__label"
						value={ label }
						onChange={ ( labelValue ) =>
							setAttributes( {
								label: labelValue,
							} )
						}
						aria-label={ __(
							'Mega menu link text',
							'modal'
						) }
						placeholder={ __(
							'Add label…',
							'modal'
						) }
						allowedFormats={ [] }
					/>
				</button>
			</div>
		</>
	);
}
