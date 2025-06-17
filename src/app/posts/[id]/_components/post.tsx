import { PostsProps } from "../../page"

export async function PostInfo({id}:{id:string}) {
  
  await new Promise(resolve => setTimeout(resolve, 3000)) // Simulando uma requisicao demorada de API
  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const data: PostsProps = await response.json()

  return (
    <div>
      <div key={data.id} className="bg-gray-200 p-4 rounded-md">
        <h3 className="font-bold">{data.title}</h3>
        <p>{data.body}</p>
        <p><strong>Tags:</strong> {data.tags.join(', ')}</p>
        <p><strong>Likes:</strong> {data.reactions.likes}</p>
        <p><strong>Dislikes:</strong> {data.reactions.dislikes}</p>
        <p><strong>Views:</strong> {data.views}</p>
        <p><strong>User ID:</strong> {data.userId}</p>
      </div>
    </div>
  )
}