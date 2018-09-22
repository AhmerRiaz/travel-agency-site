	import $ from 'jquery'

	class Modal {
		constructor()
		{
			this.modal = $('.modal')
			this.btnModal = $('.open-modal')
			this.modalClose = $('.modal__close')
			this.event()
		}

		event()
		{
			this.btnModal.click(this.openModal.bind(this))
			this.modalClose.click(this.closeModal.bind(this))
			$(document).keyup(this.keyPress.bind(this))
		}

		keyPress(e)
		{
			if(e.keyCode == 27)
			{
				this.closeModal()	
			}
		}

		openModal()
		{
			this.modal.addClass('modal--visible')
			return false
		}

		closeModal()
		{
			this.modal.removeClass('modal--visible')
		}
	}

export default Modal