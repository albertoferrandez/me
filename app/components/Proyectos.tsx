"use client"

import Image from "next/image"
import { Props, Repo } from "../type/type"
import { useMemo, useState } from "react"

const Proyectos = ({ repos }: Props) => {

  const [reposTopic, setReposTopic] = useState<Repo[]>([])
  const filteredRepos = repos.filter((r: { name: string }) => r.name !== 'albertoferrandez' && r.name !== 'me')

  const filteredTopics = useMemo<string[]>(() => {
    const topics: string[] = filteredRepos.flatMap((r: Repo) => r.topics)
    const uniqueTopics: string[] = Array.from(new Set(topics))
    return uniqueTopics
  }, [filteredRepos])
  
  const handleTopic = (topic: string) => {
    const filterByTopic = filteredRepos.filter((r: Repo) => r.topics.includes(topic))
    setReposTopic(filterByTopic)
  }

  const Repositories = reposTopic.length === 0 ? filteredRepos : reposTopic

  return (
    <section className="mt-4">
      <div  className="flex flex-row flex-wrap gap-2 ">
        {
          filteredTopics.map((topic: string) => (
            <span onClick={() => handleTopic(topic)} key={topic} 
            className="bg-gray-100 text-gray-800 text-xs uppercase
            font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 hover:bg-slate-300
            dark:text-gray-400 dark:hover:bg-gray-800 border border-gray-500 cursor-pointer">
              {topic}
            </span>
          ))                  
        }
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {Repositories?.map((repo: Repo) => (
            <article className="flex bg-slate-300 dark:bg-slate-700 h-70 rounded" key={repo.id}>
            <div className="flex flex-col w-full flex-grow">
              <div className="flex justify-between p-2 items-center border-b border-slate-400">
                <h2 className="text-base">
                  {repo.name}
                </h2>
                <a href={repo.homepage} target="_blank">
                  <Image src={'/link.svg'} alt="link" width={20} height={20}/>
                </a>
              </div>
              <p className="text-sm p-2 h-1/2">
                {repo.description}
              </p>
              <div className="p-2">
                {repo.topics.map(topic => (
                  <span key={topic} className="bg-gray-100 text-gray-800 
                  text-xs font-medium inline-flex items-center px-2.5 
                  py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 
                  border border-gray-500">
                    #
                    {' ' + topic}
                  </span>
                ))}
              </div>
            </div>
          </article>
          ))}
      </div>
    </section>
  )
}

export default Proyectos
