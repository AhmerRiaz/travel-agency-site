import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll' 
import $ from 'jquery'

const mobileMenu = new MobileMenu()
new RevealOnScroll($('.feature-item'), '85%')
new RevealOnScroll($('.testimonials'),'65%')


