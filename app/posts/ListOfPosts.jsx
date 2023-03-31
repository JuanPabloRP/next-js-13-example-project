import { LikeButton } from './LikeButtons';
import Link from 'next/link';

const fetchPosts = async () => {
	/* const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 15,
		},
	});
	return await res.json(); */

	return fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 15,
		},
	}).then((res) => res.json());
};

async function ListOfPosts() {
	const posts = await fetchPosts();

	return posts.slice(0, 5).map((post) => (
		<article key={post.id}>
			<Link href="/post/[id]" as={`/posts/${post.id}`}>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</Link>
			<LikeButton id={post.id} />
		</article>
	));
}

export default ListOfPosts;
