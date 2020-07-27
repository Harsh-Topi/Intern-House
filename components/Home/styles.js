import styled from 'styled-components';

export const Background = styled.div`
	background-color: #f6fbff;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	height: 100vh;
	width: 100vw;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

// To show a white box behind container
// 	background-color: white;
//	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
export const Container = styled.div`
	position: relative;
	width: 1200px;
	margin: 7.5vh auto 2vh;

	@media (max-width: 1200px) {
		margin: 3.5vh auto 2vh;
		width: 85vw;
	}
`;

export const HeroImg = styled.img`
	display: block;
	margin: auto;
	margin-left: 25%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;
