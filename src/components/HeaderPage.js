import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderPage = () => {
	return (
		<Container>
			<Wrapper>
				<Logo to="/">CodeLab Build</Logo>
				<Nav to="post">Create a Post</Nav>
			</Wrapper>
		</Container>
	);
};

export default HeaderPage;

const Nav = styled(Link)`
	padding: 15px 30px;
	transition: all 350ms;
	transform: scale(1);
	font-weight: bold;
	margin: 0 40px;
	border-radius: 3px;
	text-decoration: none;
	color: white;

	:hover {
		background-color: white;
		transform: scale(1.07);
		cursor: pointer;
		color: #004080;
	}
`;

const Logo = styled(Link)`
	font-style: italic;
	font-weight: bold;
	padding: 0 40px;
	text-decoration: none;
	color: white;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 100%;
	height: 100px;
	background-color: #004080;
	color: white;
`;
