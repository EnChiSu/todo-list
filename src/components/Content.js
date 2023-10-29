import { useState } from 'react';

const Content = ({todoList, onDelete, onEdit}) => {

	const [editIds, setEditIds] = useState([]);

	const deleteTodo = (index)=>{
        onDelete(index)
    }

	const updEditIds = (index)=>{
		// 方法一：
		// 如果要用splice記得要先用解構賦值的方式new一個新的array，因為splice只是拿原本的array來修改，react發現是原本的array就不update
		// const id = editIds.indexOf(index);
		// editIds.splice(id, 1)
		// setEditIds(editIds)

		// 要改成像下面這樣
		const id = editIds.indexOf(index);
		const newEditIds = [...editIds]
		newEditIds.splice(id, 1)
		setEditIds(newEditIds)

		// 不能像下面這樣改是因為splice是回傳"被刪除的元素"，不是原陣列
		// const updEditIds = (index)=>{
		// 	const id = editIds.indexOf(index);
		// 	const newEditIds = [...editIds]
		// 	setEditIds(newEditIds.splice(id, 1))
		// }	
	
		// 方法二：
		// setEditIds((prevEditIds) => prevEditIds.filter((id) => id !== index));
	}	

	return (
		<div className="Content">
			<ul>
				{todoList.map((todo, index) => (
					<li key={index}>
						<span>
							{editIds.includes(index) ? (
								<span>
									<input
										value={todo}
										onChange={(e) => onEdit(e.target.value, index)}
									/>
								</span>
							) : (
								<span>{todo}</span>
							)}

						
							{/* onClick要寫() => deleteTodo(index)用閉包把它包起來，
							如果你直接onClick={deleteTodo(index)}，他會在render時直接被觸發，而不是在被點的時候觸發，
							但實際上你是想要在他被點的時候才觸發 */}
							<button onClick={() =>deleteTodo(index)}>Delete</button>
							{/* <button onClick={deleteTodo(index)}>Delete</button> */}

							{!editIds.includes(index) ? (
								<button onClick={() => setEditIds([...editIds, index])}>Edit</button>
							) : (
								<button onClick={() => updEditIds(index)}>Save</button>
							)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Content;
