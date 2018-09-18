import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

class StickyHeader {
	constructor()
	{
		this.siteHeader = $('.site-header')
		this.headerTriggerElement = $('.large-hero__title')
		this.pageSections = $('.page-section')
		this.headerLinks = $('.primary-menu a')
		this.turnDark()
		this.createPageSectionWayPoints()
		this.addSmoothScrolling()
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll()
	}

		turnDark() {
			let that = this
			new Waypoint({
				element: this.headerTriggerElement[0],
				handler: function(direction){
					if(direction == 'down'){
						that.siteHeader.addClass('site-header--turn-dark')
					}
					else {
						that.siteHeader.removeClass('site-header--turn-dark')
					}
				}
			})

		}

		createPageSectionWayPoints() {
			let that = this
			this.pageSections.each(function()
			{
				let currentElement = this
				new Waypoint({
					element: currentElement,
					handler: function (direction){
						if(direction == 'down')
						{
						let matchingHeaderLink = currentElement.getAttribute('data-matching-links')
						that.headerLinks.removeClass('is-current-link')
						$(matchingHeaderLink).addClass('is-current-link')
						}
					},

					offset: '18%'
				})

				new Waypoint({
					element: currentElement,
					handler: function (direction){
						if(direction == 'up')
						{
						let matchingHeaderLink = currentElement.getAttribute('data-matching-links')
						that.headerLinks.removeClass('is-current-link')
						$(matchingHeaderLink).addClass('is-current-link')
						}
					},

					offset: '-40%' 
			})
		})

	}

}

export default StickyHeader