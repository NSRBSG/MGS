import { createGlobalStyle } from 'styled-components';

import NanumGothicRegularWOFF2 from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Regular.woff2';
import NanumGothicRegularWOFF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Regular.woff';
import NanumGothicRegularTTF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf';

import NanumGothicBoldWOFF2 from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Bold.woff2';
import NanumGothicBoldWOFF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Bold.woff';
import NanumGothicBoldTTF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf';

import NanumGothicExtraBoldWOFF2 from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.woff2';
import NanumGothicExtraBoldWOFF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.woff';
import NanumGothicExtraBoldTTF from '../lib/assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf';

import NanumGothicCodingRegularWOFF2 from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Regular.woff2';
import NanumGothicCodingRegularWOFF from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Regular.woff';
import NanumGothicCodingRegularTTF from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Regular.ttf';

import NanumGothicCodingBoldWOFF2 from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Bold.woff2';
import NanumGothicCodingBoldWOFF from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Bold.woff';
import NanumGothicCodingBoldTTF from '../lib/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Bold.ttf';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "NanumGothic";
		font-weight: 400;
		src:
		url(${NanumGothicRegularWOFF2}) format('woff2'),
		url(${NanumGothicRegularWOFF}) format('woff'),
		url(${NanumGothicRegularTTF}) format('truetype'); 
	}
	@font-face {
		font-family: "NanumGothic";
		font-weight: 700;
		src:
		url(${NanumGothicBoldWOFF2}) format('woff2'),
		url(${NanumGothicBoldWOFF}) format('woff'),
		url(${NanumGothicBoldTTF}) format('truetype'); 
	}
	@font-face {
		font-family: "NanumGothic";
		font-weight: 800;
		src:
		url(${NanumGothicExtraBoldWOFF2}) format('woff2'),
		url(${NanumGothicExtraBoldWOFF}) format('woff'),
		url(${NanumGothicExtraBoldTTF}) format('truetype'); 
	}
	@font-face {
		font-family: "NanumGothicCoding";
		font-weight: 400;
		src:
		url(${NanumGothicCodingRegularWOFF2}) format('woff2'),
		url(${NanumGothicCodingRegularWOFF}) format('woff'),
		url(${NanumGothicCodingRegularTTF}) format('truetype');
	}
	@font-face {
		font-family: "NanumGothicCoding";
		font-weight: 700;
		src:
		url(${NanumGothicCodingBoldWOFF2}) format('woff2'),
		url(${NanumGothicCodingBoldWOFF}) format('woff'),
		url(${NanumGothicCodingBoldTTF}) format('truetype');
	}
	* {
		box-sizing: border-box;
	}
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button {
		background: none;
		border: none;
		outline: none;
		margin: 0;
		padding: 0;
		cursor: pointer;
	}
`;

export default GlobalStyle;
