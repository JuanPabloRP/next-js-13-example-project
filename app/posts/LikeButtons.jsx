'use client';
import { useState } from 'react';

export function LikeButton({ id }) {
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
		//alert('Me gusta el post');
	};

	return <button onClick={handleClick}>{liked ? '<3' : '</3'}</button>;
}
