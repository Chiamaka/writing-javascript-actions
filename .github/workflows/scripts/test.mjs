#!/usr/bin/env zx

import { WebClient } from '@slack/web-api';

const { GITHUB_REPOSITORY, PR_LINK, GITHUB_ACTOR, PR_TITLE, SLACK_TOKEN } = process.env;
const client = new WebClient(SLACK_TOKEN);

await client.chat.postMessage({
  channel: '#dependabot-alerts',
  attachments: [
    {
      color: "#c90200",
      title: `:robots: A Dependabot PR failed to be merged in ${GITHUB_REPOSITORY} :thumbsdown:`,
      actions: [
        {
          "text": "Jira Ticket",
          "type": "button",
          "url": JIRA_ISSUE
        },
        {
          "text": "Pull request",
          "type": "button"
          "url": PR_LINK
        }
      ]
    }
  ]
});


console.log('testing testing 123');
console.log('GITHUB_REPOSITORY', GITHUB_REPOSITORY);
console.log('PR_LINK', PR_LINK)
console.log('GITHUB_ACTOR', GITHUB_ACTOR);
console.log('PR_TITLE', PR_TITLE)