import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StateContext } from "./GlobalState";

const Home = () => {
	const { viewItems, mgs } = useContext(StateContext);

	const [myState, setMyState] = useState([]);

	useEffect(() => {
		const ref = JSON.parse(localStorage.getItem("view"));
		setMyState(ref);
	}, []);

	return (
		<Container>
			<Wrapper>
				{myState?.map((props) => (
					<Card key={props.title}>
						<Title>{props.quote}</Title>
						<Name>{props.title}</Name>
					</Card>
				))}
			</Wrapper>
			{mgs}
		</Container>
	);
};

export default Home;

const Name = styled.div`
	color: #004080;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
	flex: 1;
	margin-bottom: 20px;
	color: #004080;
`;

const Card = styled.div`
	padding: 20px;
	width: 400px;
	height: 200px;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 400px;
`;
