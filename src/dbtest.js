import React, { useEffect, useState } from "react"
import axios from "axios" // axios import 합니다.

const App = () => {
	// 새롭게 생성하는 todo를 관리하는 state
	const [todo, setTodo] = useState({
		id: 0,
		title: "",
		nickname: "",
		content: "",
		likes: 0,
		createdAt: "",
		updatedAt: ""
	})

	const [todos, setTodos] = useState(null)

	// patch에서 사용할 id, 수정값의 state를 추가
	const [targetID, setTargetID] = useState(null)
	const [editTodo, setEditTodo] = useState({
		title:""
	})

	const getApi = async () => {
		const { data } = await axios.get("http://100.24.18.154:3000/postss")
		const data2 = data.post

		setTodos(data2)

	}

	const onSubmitHandler = async (todo) => {
		await axios.post("http://100.24.18.154:3000/postss", todo)
	}

	// 새롭게 추가한 삭제 버튼 이벤트 핸들러
	const onClickDeleteButtonHandler = async (todoID) => {
		
		await axios.delete(`http://100.24.18.154:3000/postss/${todoID}`)
	}

	// 수정버튼이 벤트 핸들러 추가
	const onClickEditButtonHandler = async (todoID, edit) => {
		
		console.log(todoID, edit)
		const [getTodo] = await todos.filter((todo)=> {
			console.log(todo.id, Number(todoID))
			return todo.id === Number(todoID)
		})
		console.log(getTodo)
		await setTodo({getTodo, title: edit.title})
		await console.log(todo)
		// await (axios.patch(`http://100.24.18.154:3000/postss/${todoID}`, todo))
		await console.log(todo)
		getApi()
	}
	
	const runEditHandler = (todoID, todo2) => {
		console.log("run!!")
		console.log(todo2)
		axios.patch(`http://100.24.18.154:3000/postss/${todoID}`, todo2)
	}
	
	
	console.log(todos)
	const changeApi = (todo) => {
		axios.post(`http://100.24.18.154:3000ss/post/`, todo)
	}


	// 생성한 함수를 컴포넌트가 mount 됐을 때 실행하기 위해 useEffect를 사용합니다.
	

	const dummyDB = () => {
		axios.post(`http://100.24.18.154:3000/postss/`, todo)
	}
	// const login = {
	// 	"nickname" : "kimm",
	// 	"password" : "1234",
	// 	"confirm" : "1234"
	// }
	// const loginTest = () => {
	// 	axios.post(`http://100.24.18.154:3000/signup/`, login)
	// }
	useEffect(() => {
		// effect 구문에 생성한 함수를 넣어 실행합니다.
		// fetchTodos()
		getApi()
		
		// loginTest()
	}, [])

	// data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.


	return (
		<div>
			API 연결하고 싶다
			<button
				onClick={()=>dummyDB()}
			>
				더미 데이터 넣어보기
			</button>
			<form>
				{/* 수정기능에 필요한 id, 수정값 input 2개와 수정하기 버튼을 추가 */}
				<input
					value={targetID}
					type="number"
					placeholder="수정하고 싶은 Todo ID"
					onChange={(e) => {
						setTargetID(e.target.value)
					}}
				/>
				<input
					value={editTodo.title}
					type="text"
					placeholder="타이틀 수정값 입력"
					onChange={(e) => {
						setEditTodo({
							...editTodo, title: e.target.value
						})
					}}
				/>
				<button
					// type='button'을 추가해야 form의 영향에서 벗어남
					type="button"
					onClick={() => {
						onClickEditButtonHandler(targetID, editTodo)
						setTargetID(null)
						setEditTodo({ title: "" })
					}}
				>
					수정하기1
				</button>
				<button
					type="button"
					onClick={()=>runEditHandler(targetID, todo)}
				>
수정하기2
				</button>
			</form>
			<div>
				{todos?.map((todo) => (
					<div key={todo.id}>
						<ul>
							<li>id: {todo.id}</li>
							<li>title: {todo.title}</li>
							<li>nickname: {todo.nickname}</li>
							<li>content: {todo.content}</li>
							<li>likes: {todo.likes}</li>
							<li>createdAt: {todo.createdAt}</li>
							<li>updatedAt: {todo.updatedAt}</li>
						</ul>
						
						{/* 디자인이 요상하긴 하지만, 삭제 버튼 추가! */}
						<button
							type="button"
							onClick={() => onClickDeleteButtonHandler(todo.id)}
						>
							삭제하기
						</button>
					</div>
				))}
			</div>
		</div>
		// <div>


		// 		<input
		// 			value={todo.title}
		// 			type="text"
		// 			onChange={(e)=> {
		// 				const {value} = e.target;
		// 				setTodo({
		// 					...todo, title: value
		// 				})
		// 			}}
		// 		/>
		// 		<button>추가하기</button>
		// 	</form>
		// 	<div>
		// 		{todos?.map((todo)=> (
		// 			<div key={todo.id}>
		// 				{todo.title}
		// 				{/* 디자인이 요상하긴 하지만, 삭제 버튼 추가! */}
		// 				<button
		// 					type="button"
		// 					onClick={()=>onClickDeleteButtonHandler(todo.id)}
		// 				>
		// 					삭제하기
		// 				</button>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
	)
}

export default App;