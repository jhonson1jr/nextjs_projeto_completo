// Server Component - bloco de codigo originalmente renderizado no servidor, para compilar no lado cliente, decomentar a diretiva abaixo:
// 'use client'

interface PostsProps {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number,
  userId: string
}

interface ResponseProps {
  posts: PostsProps[]
}

export default async function PostsPage() {
  const response = await fetch('https://dummyjson.com/posts')
  const data: ResponseProps = await response.json()
  // console.info(data)
  return (
    <div>
      <h1 className="text-center mt-5 mb-5 font-bold text-2xl">Todos os Posts</h1>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map(post => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
            <p><strong>Likes:</strong> {post.reactions.likes}</p>
            <p><strong>Dislikes:</strong> {post.reactions.dislikes}</p>
            <p><strong>Views:</strong> {post.views}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  )
}