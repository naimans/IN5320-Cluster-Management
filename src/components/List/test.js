import React, {useState} from 'react';

export const Main = () => {

const [text, setText] = useState("Hello World");

	return (
		<article>
			<p> {text} </p>
		</article>
	);
}
