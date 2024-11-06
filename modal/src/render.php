<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$wpcomsp_blocks_modal_label = isset( $attributes['label'] ) ? esc_html( $attributes['label'] ) : null;
$wpcomsp_blocks_modal_slug  = isset( $attributes['menuSlug'] ) ? esc_attr( $attributes['menuSlug'] ) : null;


if ( ! $wpcomsp_blocks_modal_label || ! $wpcomsp_blocks_modal_slug ) {
	return null;
}

$wpcomsp_blocks_modal_button_classes = apply_filters( 'wpcomsp_blocks_modal_button_classes', array() );
$wpcomsp_blocks_modal_button         = wp_unique_id( 'modal-btn-' );

wp_interactivity_state(
	'wpcomsp/modal',
	array(
		'selected' => null,
	)
);

?>
<button
	<?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $wpcomsp_blocks_modal_button_classes ) ) ); ?>
	data-wp-interactive="wpcomsp/modal"
	<?php
	echo wp_kses_data(
		wp_interactivity_data_wp_context(
			array(
				'id'     => $wpcomsp_blocks_modal_slug,
				'button' => $wpcomsp_blocks_modal_button,
			)
		)
	);
	?>
	data-wp-on--click="actions.openModal"
	data-wp-bind--aria-expanded="state.isModalOpen"
	data-wp-on--keydown="actions.handleMenuKeydown"
	id="<?php echo esc_attr( $wpcomsp_blocks_modal_button ); ?>"
	aria-haspopup="menu"
>
	<?php echo esc_html( $wpcomsp_blocks_modal_label ); ?>
</button>
