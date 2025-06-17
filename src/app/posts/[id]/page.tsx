// Rota dinamica: /posts/[num_id]

import { Suspense } from "react"
import { PostInfo } from "./_components/post"

export default async function DetailPost(
  {params}:{
    params: Promise<{id:string}> // o parametro é o nome da pasta entre colchetes
  }){
  

  const {id} = await params

  return (
    <div>
      <h3>Detalhes do Post: {id}</h3>
      
      <div className="flex flex-col gap-4 mx-2">
        <Suspense fallback={<p>Carregando...</p>}> {/* <Suspense> Executa enquanto há requisição em andamento */}
          <PostInfo id={id}></PostInfo>
        </Suspense>
      </div>
    </div>
  )
}

// 1h03