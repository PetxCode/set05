import React, { useState, useContext } from "react";
import styled from "styled-components";
import { StateContext } from "./GlobalState";

const Post = () => {
	const { viewItems, setViewItems } = useContext(StateContext);

	const [inputData, setInputData] = useState();
	const [inputDataTitle, setInputDataTitle] = useState();

	const submit = () => {
		const data = {
			id: Math.ceil(Math.random() * 1000),
			quote: inputData,
			title: inputDataTitle,
		};

		setViewItems([...viewItems, data]);

		localStorage.setItem("view", JSON.stringify(viewItems));
	};

	console.log(viewItems);

	return (
		<Container>
			<Wrapper>
				<Card>
					<PostInput
						placeholder="Enter your Post"
						value={inputData}
						onChange={(e) => {
							setInputData(e.target.value);
						}}
					/>
					<Input
						placeholder="Enter Quote"
						value={inputDataTitle}
						onChange={(e) => {
							setInputDataTitle(e.target.value);
						}}
					/>
					<Button onClick={submit}>Submit</Button>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Post;

const Input = styled.input`
	flex: 1;
	width: 80%;
	height: 50px;
	border: 1px solid silver;
	border-radius: 3px;
	padding: 10px;
	outline: none;
`;

const PostInput = styled.textarea`
	margin: 20px 0;
	width: 80%;
	height: 150px;
	border: 1px solid silver;
	border-radius: 3px;
	padding: 10px;
	outline: none;
	resize: none;
`;

const Button = styled.div`
	padding: 15px 30px;
	transition: all 350ms;
	transform: scale(1);
	font-weight: bold;
	margin: 0 40px;
	border-radius: 3px;
	text-decoration: none;
	color: white;
	background-color: #004080;
	margin: 30px 0;

	:hover {
		transform: scale(1.07);
		cursor: pointer;
		color: white;
	}
`;

const Name = styled.div`
	color: #004080;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
`;

const Card = styled.div`
	width: 400px;
	height: 100%;
	min-height: 200px;
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
