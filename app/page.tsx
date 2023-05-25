import { getRepos } from "./actions/getRepos"
import Main from "./components/Main"

export default async function Page() {
  const repos = await getRepos()

  return (
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <Main repos={repos}/>
      </div>
  )
}
