import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll' 
import $ from 'jquery'
import StickyHeader from './modules/steakyHeader'
import Modal from './modules/Modal'

const mobileMenu = new MobileMenu()
new RevealOnScroll($('.feature-item'), '85%')
new RevealOnScroll($('.testimonials'),'65%')
const stickyHeader = new StickyHeader()
const modal = new Modal()


