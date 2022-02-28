#!/usr/bin/env zx

import { WebClient } from '@slack/web-api';

const { GITHUB_REPOSITORY, PR_LINK, GITHUB_ACTOR, PR_TITLE, SLACK_TOKEN } = process.env;
const client = new WebClient(SLACK_TOKEN);

await client.chat.postMessage({
  channel: '#dependabot-alerts',
  title: `:robot_face: A Dependabot PR ${PR_TITLE} is to be merged in ${GITHUB_REPOSITORY} :thumbsup:`,
  attachments: [
    {
      color: "#c90200",
      actions: [
        {
          "text": "Pull request",
          "type": "button",
          "url": PR_LINK
        }
      ],
    }
  ],
  blocks: [
    {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": `*PR title:*\n ${PR_TITLE}`
          }
        ]
    },
  ]
});


console.log('testing testing 123');
console.log('GITHUB_REPOSITORY', GITHUB_REPOSITORY);
console.log('PR_LINK', PR_LINK)
console.log('GITHUB_ACTOR', GITHUB_ACTOR);
console.log('PR_TITLE', PR_TITLE)