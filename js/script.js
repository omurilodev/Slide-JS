import {SlideNav} from "./slide.js";

const slide = new SlideNav('.slide', '.wrapper');

slide.init();

slide.addControl('.custom-controls');
slide.addArrow('.prev', '.next');
