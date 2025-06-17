// Server Component - bloco de codigo originalmente renderizado no servidor, para compilar no lado cliente, descomentar a diretiva abaixo:
// 'use client'

import { Button } from "@/components/button";
import Link from "next/link";

// acessivel em outro arquivo (export):
export interface PostsProps {
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

  async function buscar(formData: FormData) {
    'use server'
    // console.log(formData.values)
    const id = formData.get('id')
    const response = await fetch(`https://dummyjson.com/posts/user/${id}`)
    const data: ResponseProps = await response.json()
    console.log(data)
  }

  return (
    <div>
      <h2 className="text-center mt-5 font-bold text-2xl">Todos os Posts</h2>

      <Button></Button>

      <form className="flex gap-2 my-4" action={buscar}>
        <input type="text" name="id" placeholder="ID" className="border border-gray-200 p-2"/>
        <button className="btn btn-success" type="submit">Buscar</button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map(post => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
            <p><strong>Likes:</strong> {post.reactions.likes}</p>
            <p><strong>Dislikes:</strong> {post.reactions.dislikes}</p>
            <p><strong>Views:</strong> {post.views}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p><strong><Link href={`/posts/${post.userId}`}>Ver detalhes</Link></strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}
