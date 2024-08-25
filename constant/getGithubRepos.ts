import axios from 'axios'
import { GitRepo } from 'interfaces'

const pinnedRepos = ['booking-movile-app', 'booking-system']

type Props = {
  username: string
}
const getGithubRepos = async ({
  username
}: Props): Promise<GitRepo[] | undefined> => {
  try {
    const res = await axios.get<GitRepo[]>(
      `https://api.github.com/users/${username}/repos`
    )

    let repos = res.data
    // let latestSixRepos = repos.splice(0, 8);
    // return latestSixRepos;
    // let result = repos?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)

    const result = repos?.filter((repo: GitRepo) =>
      pinnedRepos.includes(repo.name)
    )
    return result
  } catch (err) {
    console.log(err)
    return []
  }
}

export default getGithubRepos
