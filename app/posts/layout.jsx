import React from 'react';

const PostsLayout = ({ children }) => {
	return (
		<div>
			<small>Home &bull; Posts</small>
			{children}
		</div>
	);
};

export default PostsLayout;
