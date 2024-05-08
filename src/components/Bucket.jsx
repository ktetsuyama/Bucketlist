import { useState } from "react";
import BucketForm from "./BucketForm";

function Bucket(props) {
	const [edit, setEdit] = useState({
		id: null,
		text: "",
		eagerness: "",
	});

	console.log(props.bucket);

	const submitUpdate = (value) => {
		props.editBucketItem(edit.id, value);
		setEdit({
			id: null,
			text: "",
			eagerness: "",
		});
	};

	// If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
	if (edit.id) {
		return <BucketForm edit={edit} onSubmit={submitUpdate} />;
	}

	return props.bucket.map((item, index) => (
		<div
			className={
				item.isComplete
					? `bucket-row complete ${item.eagerness}`
					: `bucket-row ${item.eagerness}`
			}
			key={item.id}
		>
			<div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
				{item.text}
			</div>
			<div className="icons">
				<p
					onClick={() =>
						setEdit({ id: item.id, text: item.text, eagerness: item.eagerness })
					}
				>
					{" "}
					✏️
				</p>
				<p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
			</div>
		</div>
	));
}

export default Bucket;
