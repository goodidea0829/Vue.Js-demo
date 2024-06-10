<template>
  <article class="question">
    <header>
      <h4 @click="expanded = !expanded" class="question-title">
        {{ index + 1 }}.&nbsp;{{ title }}
      </h4>
      <button class="btn" @click="expanded = !expanded">
        <svg
          v-show="expanded"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          ></path>
        </svg>
        <svg
          v-show="!expanded"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </header>
    <div :style="contentStyle" class="content">
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">allow_forking: </span>
        <span>{{ info.allow_forking }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">archive_url: </span>
        <span>{{ info.archive_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">archived: </span>
        <span>{{ info.archived }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">assignees_url: </span>
        <span>{{ info.assignees_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">blobs_url: </span>
        <span>{{ info.blobs_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">branches_url: </span>
        <span>{{ info.branches_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">clone_url: </span>
        <span>{{ info.clone_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">collaborators_url: </span>
        <span>{{ info.collaborators_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">comments_url: </span>
        <span>{{ info.comments_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">compare_url: </span>
        <span>{{ info.compare_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">contents_url: </span>
        <span>{{ info.contents_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">contributors_url: </span>
        <span>{{ info.contributors_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">created_at: </span>
        <span>{{ info.created_at }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">default_branch: </span>
        <span>{{ info.default_branch }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">deployments_url: </span>
        <span>{{ info.deployments_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">description: </span>
        <span>{{ info.description }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">disabled: </span>
        <span>{{ info.disabled }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">downloads_url: </span>
        <span>{{ info.downloads_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">events_url: </span>
        <span>{{ info.events_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">fork: </span>
        <span>{{ info.fork }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">forks: </span>
        <span>{{ info.forks }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">forks_count: </span>
        <span>{{ info.forks_count }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">forks_url: </span>
        <span>{{ info.forks_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">full_name: </span>
        <span>{{ info.full_name }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">git_commits_url: </span>
        <span>{{ info.git_commits_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">git_refs_url: </span>
        <span>{{ info.git_refs_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">git_tags_url: </span>
        <span>{{ info.git_tags_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">git_url: </span>
        <span>{{ info.git_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_discussions: </span>
        <span>{{ info.has_discussions }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_downloads: </span>
        <span>{{ info.has_downloads }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_issues: </span>
        <span>{{ info.has_issues }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_pages: </span>
        <span>{{ info.has_pages }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_projects: </span>
        <span>{{ info.has_projects }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">has_wiki: </span>
        <span>{{ info.has_wiki }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">homepage: </span>
        <span>{{ info.homepage }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">hooks_url: </span>
        <span>{{ info.hooks_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">html_url: </span>
        <span>{{ info.html_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">id: </span>
        <span>{{ info.id }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">issue_comment_url: </span>
        <span>{{ info.issue_comment_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">issue_events_url: </span>
        <span>{{ info.issue_events_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">issues_url: </span>
        <span>{{ info.issues_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">keys_url: </span>
        <span>{{ info.keys_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">labels_url: </span>
        <span>{{ info.labels_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">language: </span>
        <span>{{ info.language }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">owner:<br>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">avatar_url: </span>
            <span>{{ info.owner.avatar_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">events_url: </span>
            <span>{{ info.owner.events_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">followers_url: </span>
            <span>{{ info.owner.followers_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">following_url: </span>
            <span>{{ info.owner.following_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">gists_url: </span>
            <span>{{ info.owner.gists_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">gravatar_id: </span>
            <span>{{ info.owner.gravatar_id }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">html_url: </span>
            <span>{{ info.owner.html_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">id: </span>
            <span>{{ info.owner.id }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">login: </span>
            <span>{{ info.owner.login }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">node_id: </span>
            <span>{{ info.owner.node_id }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">organizations_url: </span>
            <span>{{ info.owner.organizations_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">received_events_url: </span>
            <span>{{ info.owner.received_events_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">repos_url: </span>
            <span>{{ info.owner.repos_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">site_admin: </span>
            <span>{{ info.owner.site_admin }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">starred_url: </span>
            <span>{{ info.owner.starred_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">subscriptions_url: </span>
            <span>{{ info.owner.subscriptions_url }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">type: </span>
            <span>{{ info.owner.type }}</span><br>
          </span>
          <span>
            <span class="mr-3 is-size-6 has-text-weight-semibold">url: </span>
            <span>{{ info.owner.url }}</span><br>
          </span>
        </span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">private: </span>
        <span>{{ info.private }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">pulls_url: </span>
        <span>{{ info.pulls_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">pushed_at: </span>
        <span>{{ info.pushed_at }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">releases_url: </span>
        <span>{{ info.releases_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">score: </span>
        <span>{{ info.score }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">size: </span>
        <span>{{ info.size }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">ssh_url: </span>
        <span>{{ info.ssh_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">stargazers_count: </span>
        <span>{{ info.stargazers_count }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">stargazers_url: </span>
        <span>{{ info.stargazers_url}}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">statuses_url: </span>
        <span>{{ info.statuses_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">teams_url: </span>
        <span>{{ info.teams_url }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">visibility: </span>
        <span>{{ info.visibility }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">watchers: </span>
        <span>{{ info.watchers }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">watchers_count: </span>
        <span>{{ info.watchers_count }}</span>
      </p>
      <p class="info repo-detail" :style="infoStyle">
        <span class="mr-3 is-size-6 has-text-weight-semibold">web_commit_signoff_required: </span>
        <span>{{ info.web_commit_signoff_required }}</span>
      </p>
    </div>
  </article>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "QuestionField",
  props: {
    title: String,
    index: Number,
    info: Object,
  },
  setup(props) {
    const expanded = ref(false);
    const contentStyle = computed(() => {
      return { "max-height": expanded.value ? "3000px" : 0, opacity: expanded.value ? 1 : 0 };
    });

    const infoStyle = computed(() => {
      return { opacity: expanded.value ? 1 : 0 };
    });
    const infoEntries = computed(() => {
      return Object.entries(props.info || {});
    })

    return { expanded, contentStyle, infoStyle, infoEntries };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.question {
  padding: 1rem 1.5rem;
  width: 70%;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  margin: auto;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
}
.question h4 {
  text-transform: none;
  line-height: 1.5;
}
.question p {
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question header h4 {
  margin-bottom: 0;
}
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
  z-index: 1;
}

.question-title {
  cursor: pointer;
}

.content {
  min-height: 0;
  transition: max-height 0.5s ease-in-out;
}
.info {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  width: 80%;
  margin: auto;
  text-align: left;
}
</style>
