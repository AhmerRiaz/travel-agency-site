import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
	constructor(elem,offset){
		this.featureItem = elem
		this.offsetPercentage = offset
		this.hideInitially()
		this.createWayPoiints()
	}

	hideInitially() {
		this.featureItem.addClass('reveal-item')
	}

	createWayPoiints(){
		let that = this

		this.featureItem.each(function()
		{
			let currentItem = this

			new Waypoint({
				element: currentItem,
				handler: function (){
				$(currentItem).addClass('reveal-item--is-visible')
				},
				offset: that.offsetPercentage
			}) 
		})
	}
}


export default RevealOnScroll