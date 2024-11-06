/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state, helpers } = store( 'wpcomsp/modal', {
	state: {
		get isModalOpen() {
			const { id } = getContext();
			return state.selected === id;
		},
	},
	actions: {
		closeModal() {
			const { id } = getContext();

			// const { pageBody } = helpers.getDivs( id );

			state.selected = null;

			// pageBody.classList.remove( 'modal-open' );
		},
		openModal() {
			const { id } = getContext();

			state.selected = id;

			const modal = helpers.getModal( id );

			// modal.classList.add( 'is-open' );

			// const { pageBody, megaMenuContainer } = helpers.getDivs( id );

			// pageBody.classList.add( 'modal-open' );

			// const internalLinks = megaMenuContainer.querySelectorAll( 'a, button' );

			// if ( internalLinks.length ) {
			// 	//	Wait for the menu to be visible before focusing on the first link.
			// 	setTimeout( function() { 
			// 			[...internalLinks][ 0 ].focus();
			// 		}, 100
			// 	);
			// }
		},
		handleMenuKeydown( event ) {
			const context = getContext();

			// If Escape close the menu.
			if ( event?.key === 'Escape' ) {
				const button = helpers.getButton( context.button );

				actions.closeMenu();
				button.focus();
			}
		},
	},
	helpers: {
		getModal: ( id ) => {
			return document.getElementById( id );
		},
	},
} );
