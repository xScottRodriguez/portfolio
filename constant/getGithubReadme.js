import React from "react";
import axios from "axios";
const getGithubReadme = async ({ username }) => {
  try {
    const res = await axios.get(
      `https://raw.githubusercontent.com/${username}/${username}/main/README.md`
    );

    const result = await res.data;
    // let latestSixRepos = repos.splice(0, 8);
    // return latestSixRepos;
    // let result = repos?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)

    return result;
  } catch (err) {
    console.log({ err });
  }
};

export default getGithubReadme;
