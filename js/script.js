import {SlideNav} from "./slide.js";

const slide = new SlideNav('.slide', '.wrapper');

slide.init();

slide.addControl();
slide.addArrow('.prev', '.next');
