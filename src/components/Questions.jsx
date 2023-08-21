import React, { useState } from 'react'
import { PencilIcon, HandThumbUpIcon, EyeIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import moment from 'moment';

function timeAgoFromTimestamp(timestamp) {
// Convert Unix timestamp to JavaScript Date object
  const date = new Date(timestamp * 1000); 
  return moment(date).fromNow();
}

export default function Questions() {


  const dummyData = {
    items: [
      {
        tags: [
          "api",
          "shopware"
        ],
        owner: {
          account_id: 22072300,
          reputation: 155,
          user_id: 16333126,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/6532903c6e4d44c0c79338e31c1c5ad8?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Grimclaw Draven",
          link: "https://stackoverflow.com/users/16333126/grimclaw-draven"
        },
        is_answered: true,
        view_count: 388,
        accepted_answer_id: 70619786,
        answer_count: 2,
        score: 2,
        last_activity_date: 1692625401,
        creation_date: 1641549319,
        last_edit_date: 1642413388,
        question_id: 70619460,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/70619460/shopware-6-send-multiple-objects-over-one-api-call",
        title: "Shopware 6 send multiple objects over one API Call"
      },
      {
        tags: [
          "docker"
        ],
        owner: {
          account_id: 29205688,
          reputation: 1,
          user_id: 22374826,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AAcHTtcdl5mTP_ue7jixXRYZhIdaQQt6Q-6-IFiEVLzr0C0l=k-s256",
          display_name: "Naga Nandhini K",
          link: "https://stackoverflow.com/users/22374826/naga-nandhini-k"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625400,
        creation_date: 1692625400,
        question_id: 76945869,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945869/unable-to-run-windows-service-inside-container",
        title: "Unable to run Windows service inside container"
      },
      {
        tags: [
          "javascript",
          "reactjs",
          "react-context"
        ],
        owner: {
          account_id: 85903,
          reputation: 32795,
          user_id: 239219,
          user_type: "registered",
          accept_rate: 69,
          profile_image: "https://i.stack.imgur.com/DHquN.jpg?s=256&g=1",
          display_name: "J&#225;nos",
          link: "https://stackoverflow.com/users/239219/j%c3%a1nos"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625399,
        creation_date: 1692625399,
        question_id: 76945868,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945868/multiple-instances-of-auth-variable-when-using-react-context",
        title: "Multiple Instances of Auth Variable When Using React Context"
      },
      {
        tags: [
          "kubernetes",
          "kubernetes-helm"
        ],
        owner: {
          account_id: 15618830,
          reputation: 27,
          user_id: 11268315,
          user_type: "registered",
          profile_image: "https://lh4.googleusercontent.com/-1ZvNCs4_8j0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfGX37IN21-2BgnRkwOib8LoPuClg/mo/photo.jpg?sz=256",
          display_name: "Joachim Karlsson",
          link: "https://stackoverflow.com/users/11268315/joachim-karlsson"
        },
        is_answered: true,
        view_count: 60,
        accepted_answer_id: 76809512,
        answer_count: 2,
        score: 0,
        last_activity_date: 1692625391,
        creation_date: 1690439989,
        last_edit_date: 1690454427,
        question_id: 76777085,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76777085/setting-vm-max-map-count-for-mongodb-with-helm-chart",
        title: "Setting vm.max_map_count for mongodb with helm chart"
      },
      {
        tags: [
          "python",
          "machine-learning",
          "pytorch",
          "neural-network",
          "conv-neural-network"
        ],
        owner: {
          account_id: 17745842,
          reputation: 25,
          user_id: 12885142,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/42138c619315dee159f43c7cf68eec0f?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Rocket",
          link: "https://stackoverflow.com/users/12885142/rocket"
        },
        is_answered: false,
        view_count: 39,
        answer_count: 1,
        score: 0,
        last_activity_date: 1692625386,
        creation_date: 1692113879,
        last_edit_date: 1692625386,
        question_id: 76907266,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76907266/error-with-input-and-output-size-while-generating-cnn-layers",
        title: "Error with input and output size while generating CNN Layers"
      },
      {
        tags: [
          "github-actions"
        ],
        owner: {
          account_id: 11884500,
          reputation: 29,
          user_id: 8697266,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/3fef50af5c9d36279ad02b050d92db73?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Dustin",
          link: "https://stackoverflow.com/users/8697266/dustin"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625383,
        creation_date: 1692625383,
        question_id: 76945866,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945866/trigger-github-actions-workflow-with-environment-is-created-or-repo-environment",
        title: "Trigger GitHub Actions Workflow with environment is created or repo/environment variables are modified"
      },
      {
        tags: [
          "sql",
          "oracle"
        ],
        owner: {
          account_id: 29250720,
          reputation: 3,
          user_id: 22410144,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AAcHTtfSHmaA_9EKwq0kmZQoWUFGARs7_Fgkb4XEVIY1iDgm=k-s256",
          display_name: "soorya kumar",
          link: "https://stackoverflow.com/users/22410144/soorya-kumar"
        },
        is_answered: false,
        view_count: 13,
        answer_count: 1,
        score: 0,
        last_activity_date: 1692625381,
        creation_date: 1692624149,
        last_edit_date: 1692624676,
        question_id: 76945699,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945699/how-to-loopthrough-a-table-without-cursor-oracle-sql-developer",
        title: "How to loopthrough a table without cursor- oracle sql developer"
      },
      {
        tags: [
          "mustache",
          "tinymce-6"
        ],
        owner: {
          account_id: 13377920,
          reputation: 3,
          user_id: 9654218,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/13db1827a0d3081c7fba3051dc6d98c5?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Jepthy",
          link: "https://stackoverflow.com/users/9654218/jepthy"
        },
        is_answered: false,
        view_count: 10,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625374,
        creation_date: 1692490691,
        last_edit_date: 1692625374,
        question_id: 76937505,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76937505/how-to-integrate-mustache-templating-into-tinymce-without-having-html-wrappers-p",
        title: "How to integrate mustache templating into TinyMCE without having HTML wrappers put around Mustache Code"
      },
      {
        tags: [
          "javascript"
        ],
        owner: {
          account_id: 21754851,
          reputation: 15,
          user_id: 16060363,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/0570ca915480452f7a4a9d6547954828?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Naigun",
          link: "https://stackoverflow.com/users/16060363/naigun"
        },
        is_answered: true,
        view_count: 62,
        answer_count: 3,
        score: 1,
        last_activity_date: 1692625370,
        creation_date: 1692623920,
        last_edit_date: 1692624609,
        question_id: 76945674,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945674/why-my-function-updatecounters-doesnt-work",
        title: "Why my function updateCounters() doesnt work?"
      },
      {
        tags: [
          "javascript",
          "arrays",
          "javascript-objects"
        ],
        owner: {
          account_id: 2876771,
          reputation: 799,
          user_id: 2468607,
          user_type: "registered",
          accept_rate: 91,
          profile_image: "https://i.stack.imgur.com/rZ5EE.png?s=256&g=1",
          display_name: "TK421",
          link: "https://stackoverflow.com/users/2468607/tk421"
        },
        is_answered: false,
        view_count: 3,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625369,
        creation_date: 1692625369,
        question_id: 76945863,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945863/how-can-i-swap-array-object-values-using-vanilla-javascript",
        title: "How can I swap array object values using Vanilla JavaScript?"
      },
      {
        tags: [
          "laravel",
          "laravel-10"
        ],
        owner: {
          account_id: 1905485,
          reputation: 85,
          user_id: 1720455,
          user_type: "registered",
          accept_rate: 35,
          profile_image: "https://www.gravatar.com/avatar/dc98363729a99be68ee6b331d310a3cf?s=256&d=identicon&r=PG",
          display_name: "David TG",
          link: "https://stackoverflow.com/users/1720455/david-tg"
        },
        is_answered: true,
        view_count: 71,
        answer_count: 3,
        score: 0,
        last_activity_date: 1692625369,
        creation_date: 1692103279,
        last_edit_date: 1692625369,
        question_id: 76906055,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76906055/laravel-working-on-local-but-not-on-server",
        title: "Laravel working on local but not on server"
      },
      {
        tags: [
          "swift",
          "core-data",
          "cloudkit"
        ],
        owner: {
          account_id: 111565,
          reputation: 11106,
          user_id: 294661,
          user_type: "registered",
          accept_rate: 81,
          profile_image: "https://www.gravatar.com/avatar/5a30bc36a26af18b7d9b95db19d81286?s=256&d=identicon&r=PG",
          display_name: "Peter Warbo",
          link: "https://stackoverflow.com/users/294661/peter-warbo"
        },
        is_answered: false,
        view_count: 13,
        bounty_amount: 200,
        bounty_closes_date: 1693230169,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625369,
        creation_date: 1692445003,
        question_id: 76934899,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76934899/unable-to-deduplicate-both-private-and-public-store",
        title: "Unable to deduplicate both private and public store"
      },
      {
        tags: [
          "caching",
          "typo3",
          "extbase",
          "typo3-10.x"
        ],
        owner: {
          account_id: 21728508,
          reputation: 11,
          user_id: 16037605,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/6432d8b3ddb12e1c50fbec42bfdb0a38?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "axelp",
          link: "https://stackoverflow.com/users/16037605/axelp"
        },
        is_answered: true,
        view_count: 443,
        answer_count: 4,
        score: 1,
        last_activity_date: 1692625367,
        creation_date: 1622032966,
        last_edit_date: 1622189978,
        question_id: 67705128,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/67705128/class-does-not-exist-by-migrate-the-cachemanager-to-constructor-injection",
        title: "Class does not exist by migrate the cacheManager to constructor injection"
      },
      {
        tags: [
          "html",
          "css",
          "github",
          "github-pages"
        ],
        owner: {
          account_id: 29268113,
          reputation: 1,
          user_id: 22423520,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/e1fa34f28ac24146da6f2df6f4a77e59?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Preksha Garg",
          link: "https://stackoverflow.com/users/22423520/preksha-garg"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625363,
        creation_date: 1692625363,
        question_id: 76945862,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945862/images-are-not-displaying-in-github-pages",
        title: "Images are not displaying in Github pages"
      },
      {
        tags: [
          "javascript",
          "node.js",
          "react-native",
          "npm",
          "expo"
        ],
        owner: {
          account_id: 29268162,
          reputation: 1,
          user_id: 22423558,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AAcHTteCc6ybWOPpLPGvr4Ggr13-rH8E1E0Azhkcyg0OeQlY=k-s256",
          display_name: "Monish Ks",
          link: "https://stackoverflow.com/users/22423558/monish-ks"
        },
        is_answered: false,
        view_count: 6,
        answer_count: 0,
        score: -1,
        last_activity_date: 1692625353,
        creation_date: 1692625295,
        last_edit_date: 1692625353,
        question_id: 76945852,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945852/syntaxerror-unexpected-token-in-react-native-while-running-the-default-app",
        title: "SyntaxError: Unexpected token &#39;&lt;&#39; In React Native while running the default App.js"
      },
      {
        tags: [
          "api",
          "shopware"
        ],
        owner: {
          account_id: 17329816,
          reputation: 949,
          user_id: 12553209,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/6BOOH.jpg?s=256&g=1",
          display_name: "newgennerd",
          link: "https://stackoverflow.com/users/12553209/newgennerd"
        },
        is_answered: true,
        view_count: 405,
        answer_count: 1,
        score: 1,
        last_activity_date: 1692625347,
        creation_date: 1627897408,
        last_edit_date: 1692625347,
        question_id: 68619419,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/68619419/shopware-6-store-api-set-newsletter-recipient-tags",
        title: "Shopware 6 Store-API set newsletter recipient tags"
      },
      {
        tags: [
          "php",
          "mysql",
          "mariadb"
        ],
        owner: {
          account_id: 5771883,
          reputation: 3814,
          user_id: 4555102,
          user_type: "registered",
          accept_rate: 35,
          profile_image: "https://i.stack.imgur.com/2RQHU.jpg?s=256&g=1",
          display_name: "shuba.ivan",
          link: "https://stackoverflow.com/users/4555102/shuba-ivan"
        },
        is_answered: false,
        view_count: 12,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625342,
        creation_date: 1692624221,
        last_edit_date: 1692625342,
        question_id: 76945714,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945714/how-to-use-loop-or-cursor-on-pagination-suggestion-when-offset-is-too-big",
        title: "How to use loop or cursor on pagination suggestion when offset is too big"
      },
      {
        tags: [
          "flutter"
        ],
        owner: {
          account_id: 19329485,
          reputation: 2056,
          user_id: 14131411,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/486028d269fbadad0b1b793e28193b49?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "dosytres",
          link: "https://stackoverflow.com/users/14131411/dosytres"
        },
        is_answered: false,
        view_count: 4,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625338,
        creation_date: 1692625338,
        question_id: 76945861,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945861/how-to-attach-a-flutter-project-as-a-zip-file-in-gmail",
        title: "How to attach a Flutter project as a zip file in gmail"
      },
      {
        tags: [
          "powerquery"
        ],
        owner: {
          account_id: 29268148,
          reputation: 1,
          user_id: 22423547,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AAcHTtfU3kfcIixAslUZxY5brj54g6HspS67q5eXIux4pu5N98w=k-s256",
          display_name: "Nishitaa Kartik",
          link: "https://stackoverflow.com/users/22423547/nishitaa-kartik"
        },
        is_answered: false,
        view_count: 7,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625338,
        creation_date: 1692624988,
        last_edit_date: 1692625338,
        question_id: 76945802,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945802/code-for-items-in-gallery-to-filter-using-dropdown-on-power-apps",
        title: "Code for items in gallery to filter using dropdown on Power apps"
      },
      {
        tags: [
          "html",
          "css",
          "sass"
        ],
        owner: {
          account_id: 29122706,
          reputation: 7,
          user_id: 22309789,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/XhYZp.jpg?s=256&g=1",
          display_name: "8bitmd",
          link: "https://stackoverflow.com/users/22309789/8bitmd"
        },
        is_answered: false,
        view_count: 13,
        answer_count: 2,
        score: 0,
        last_activity_date: 1692625334,
        creation_date: 1692621733,
        question_id: 76945381,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945381/make-text-stay-on-the-top-right-of-a-card-at-all-times",
        title: "Make text stay on the top right of a card at all times"
      },
      {
        tags: [
          "python",
          "pydantic"
        ],
        owner: {
          account_id: 27402564,
          reputation: 3,
          user_id: 20903742,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AEdFTp5GhuRZjgftGjaCaOaji8DxwfI_uDS3ZZ48c7_O=k-s256",
          display_name: "Ali Joghataee",
          link: "https://stackoverflow.com/users/20903742/ali-joghataee"
        },
        is_answered: false,
        view_count: 18,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625330,
        creation_date: 1692448261,
        last_edit_date: 1692625330,
        question_id: 76935101,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76935101/how-to-get-a-list-in-pydantic-basesetings",
        title: "How to get a list in pydantic basesetings"
      },
      {
        tags: [
          "reactjs",
          "material-ui",
          "components",
          "material-design",
          "storybook"
        ],
        owner: {
          account_id: 19526577,
          reputation: 31,
          user_id: 14287315,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/c34c211caa1eece69ea51688e3f7a7c0?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "ozaimoglu",
          link: "https://stackoverflow.com/users/14287315/ozaimoglu"
        },
        is_answered: false,
        view_count: 3,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625329,
        creation_date: 1692625329,
        question_id: 76945859,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945859/materials-themeprovider-does-not-apply-for-my-custom-material-components",
        title: "Material&#39;s ThemeProvider does not apply for my custom Material components"
      },
      {
        tags: [
          "selenium-webdriver",
          "xpath",
          "dynamic",
          "robotframework"
        ],
        owner: {
          account_id: 29268097,
          reputation: 1,
          user_id: 22423508,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/5044c20aff08483cb6cbf08cb43ac1f2?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "McDutch",
          link: "https://stackoverflow.com/users/22423508/mcdutch"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625324,
        creation_date: 1692625324,
        question_id: 76945858,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945858/using-selenium-robotframework-to-press-a-button-in-a-variable-form-with-generic",
        title: "Using Selenium/Robotframework to press a button in a variable form with generic code"
      },
      {
        tags: [
          "letter",
          "significance",
          "dunn.test"
        ],
        owner: {
          account_id: 29192395,
          reputation: 1,
          user_id: 22364266,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/60013a8ab1c71c8fbf483e0cdfcdcea9?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Mars_87",
          link: "https://stackoverflow.com/users/22364266/mars-87"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625318,
        creation_date: 1692625318,
        question_id: 76945857,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945857/how-to-add-significance-letters-after-dunn-test",
        title: "How to add significance letters after Dunn.test"
      },
      {
        tags: [
          "django",
          "docker",
          "nginx",
          "docker-compose"
        ],
        owner: {
          account_id: 20188929,
          reputation: 3,
          user_id: 14807616,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a-/AOh14GiXOJ5DdDiV2YebOnhXU8N9b6HQ9Lgku0yRlss5=k-s256",
          display_name: "Comrade",
          link: "https://stackoverflow.com/users/14807616/comrade"
        },
        is_answered: false,
        view_count: 3,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625317,
        creation_date: 1692625201,
        last_edit_date: 1692625317,
        question_id: 76945835,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945835/nginxproxymanager-doesnt-serve-mediafiles-in-django",
        title: "Nginxproxymanager doesn&#39;t serve mediafiles in django"
      },
      {
        tags: [
          "google-chrome"
        ],
        owner: {
          account_id: 22980714,
          reputation: 9,
          user_id: 17107683,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a-/AOh14Gixy-W1Je7OnYmoPgZJ_PW9sxLMZ7_UAfu4UQtuUQ=k-s256",
          display_name: "Arsh",
          link: "https://stackoverflow.com/users/17107683/arsh"
        },
        is_answered: true,
        view_count: 2661,
        answer_count: 3,
        score: 0,
        last_activity_date: 1692625316,
        creation_date: 1633705839,
        question_id: 69498084,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/69498084/alternative-to-web-server-for-chrome",
        title: "Alternative to &quot;Web Server for Chrome&quot;?"
      },
      {
        tags: [
          "powershell",
          "scheduled-tasks",
          "mapped-drive"
        ],
        owner: {
          account_id: 7407387,
          reputation: 35,
          user_id: 5635921,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/378cb4513e2a506cf448cc8a7207a520?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Amos",
          link: "https://stackoverflow.com/users/5635921/amos"
        },
        is_answered: false,
        view_count: 18,
        answer_count: 1,
        score: 1,
        last_activity_date: 1692625308,
        creation_date: 1692615403,
        last_edit_date: 1692617905,
        question_id: 76944624,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76944624/using-powershell-5-1-on-windows-10-i-successfully-map-a-drive-but-it-doesnt-w",
        title: "Using PowerShell 5.1 on Windows 10, I successfully map a drive, but it doesn&#39;t when running by Scheduled Task"
      },
      {
        tags: [
          "powerbi",
          "dax",
          "powerquery",
          "powerbi-desktop"
        ],
        owner: {
          account_id: 10391258,
          reputation: 126,
          user_id: 7662484,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/a2bf14cd620059fda618f7f029e00055?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "Prem Chand",
          link: "https://stackoverflow.com/users/7662484/prem-chand"
        },
        is_answered: false,
        view_count: 10,
        answer_count: 1,
        score: 0,
        last_activity_date: 1692625308,
        creation_date: 1692619142,
        question_id: 76945069,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945069/concatenatex-txt-details-with-condition-statement-dax",
        title: "CONCATENATEX txt details with condition statement Dax"
      },
      {
        tags: [
          "spring",
          "spring-boot"
        ],
        owner: {
          account_id: 16282396,
          reputation: 1,
          user_id: 11757941,
          user_type: "registered",
          profile_image: "https://lh5.googleusercontent.com/-QsBSjGJZ7hM/AAAAAAAAAAI/AAAAAAAAAJw/5Clpf5dXALQ/photo.jpg?sz=256",
          display_name: "Rohit Reddy",
          link: "https://stackoverflow.com/users/11757941/rohit-reddy"
        },
        is_answered: false,
        view_count: 4,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625297,
        creation_date: 1692625297,
        question_id: 76945854,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945854/error-while-upgrading-spring-boot-version-to-2-7-14-creating-bean-with-name-en",
        title: "Error while upgrading spring-boot version to 2.7.14. creating bean with name &#39;entityManagerFactory defined in class path resource"
      },
      {
        tags: [
          "html",
          "css",
          "svg"
        ],
        owner: {
          account_id: 29268130,
          reputation: 1,
          user_id: 22423532,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/f5c7bd8c1bf4b1c7da62a3ddfa57c289?s=256&d=identicon&r=PG&f=y&so-version=2",
          display_name: "john",
          link: "https://stackoverflow.com/users/22423532/john"
        },
        is_answered: false,
        view_count: 2,
        answer_count: 0,
        score: 0,
        last_activity_date: 1692625296,
        creation_date: 1692625296,
        question_id: 76945853,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/76945853/create-shape-with-curve-and-non-equal-width",
        title: "Create shape with curve and non equal width"
      }
    ],
    has_more: true,
    quota_max: 10000,
    quota_remaining: 9995
  }

  const [questions, setQuestions] = useState(dummyData);
  return (
    <>
      <div className='w-full '>
        <h1 className='mt-16 ml-8 text-slate-400 text-xl'>Questions</h1>
        <div className='flex gap-12 w-full text-slate-400 text-sm mt-12 border-b pb-4 pl-12 cursor-pointer'>
          <div className='flex px-3 pb-1 cborder rounded-xl bg-[#f88100]'>
            <p className='text-white m-auto'>interesting</p>
          </div>
          <div className='flex gap-2' >
            <p>featured </p>
            <p className='border rounded-xl px-2 text-[#f88100] text-xs m-auto '>432</p>

          </div>
          <p>hot</p>
          <p>week</p>
          <p>month</p>
        </div>
      </div>

      {/* TOP QUESTIONS WRAPPER */}
      <section className='px-12 py-8'>

        {questions.items.map((item) => {
          return (
            <div className='flex justify-between items-center border-b pb-4' key={item.owner.account_id}>
              <div className='flex flex-col gap-2' >
                <h1 className='text-[#85bce4] text-base font-bold mt-6'>{item.title}</h1>
                <div className='flex gap-3 font-medium w-full mt-3 text-sm text-slate-400'>
                  {item.tags.map((tag,index) => {
                    return (
                      <div className=' w-auto border-2 rounded-xl px-3 py-[1px] ' key={index}>
                        <p className='m-auto' >{tag}</p>
                      </div>
                    )
                  })}

                </div>
                <div className='flex gap-2 '>
                  <div className='flex border-2 rounded-[50%] w-6 h-6 '><PencilIcon className='w-3 m-auto text-[#f88100]' /></div>
                  <p className='text-sm text-slate-400'>{item.is_answered? `answered ${timeAgoFromTimestamp(item.last_activity_date)}` :`modified ${timeAgoFromTimestamp(item.creation_date)}`}<b>&nbsp;{item.owner.display_name }</b><b>&nbsp;{item.owner.reputation }</b></p>
                </div>
              </div>



              <div className='flex gap-5  text-slate-500 text-sm justify-center items-center '>
                <div className='flex gap-1 flex-col justify-center items-center'>
                  <h1 className='text-base'>{item.score}</h1>
                  <h1>votes</h1>
                  <HandThumbUpIcon className='w-5' />
                </div>
                <div className='flex gap-1 flex-col justify-center items-center'>
                  <h1 className='text-base'>{item.answer_count}</h1>
                  <h1>answer</h1>
                  <ChatBubbleLeftIcon className='w-5' />
                </div>
                <div className='flex gap-1 flex-col justify-center items-center'>
                  <h1 className='text-base'>{item.view_count}</h1>
                  <h1>views</h1>
                  <EyeIcon className='w-5' />
                </div>
              </div>

            </div>
          )
        })}
        {/* <div className='flex justify-between items-center border-b pb-4'>
          <div className='flex flex-col gap-2' >
            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Front End Developer with Angular</h1>
            <div className='flex gap-3 font-medium w-full mt-3 text-sm text-slate-400'>
              <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                <p className='m-auto' >iOS</p>
              </div>
              <div className='w-auto  border-2 rounded-xl px-3'>
                <p>iPhone</p>
              </div>
            </div>
            <div className='flex gap-2 '>
              <div className='flex border-2 rounded-[50%] w-6 h-6 '><PencilIcon className='w-3 m-auto text-[#f88100]' /></div>
              <p className='text-sm text-slate-400'>modified 1 minute ago</p>
            </div>
          </div>



          <div className='flex gap-5  text-slate-500 text-sm justify-center items-center '>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <HandThumbUpIcon className='w-5' />
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <ChatBubbleLeftIcon className='w-5' />
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <EyeIcon className='w-5' />
            </div>
          </div>

        </div>
        <div className='flex justify-between items-center border-b pb-4'>
          <div className='flex flex-col gap-2' >
            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Front End Developer with Angular</h1>
            <div className='flex gap-3 font-medium w-full mt-3 text-sm text-slate-400'>
              <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                <p className='m-auto' >iOS</p>
              </div>
              <div className='w-auto  border-2 rounded-xl px-3'>
                <p>iPhone</p>
              </div>
            </div>
            <div className='flex gap-2 '>
              <div className='flex border-2 rounded-[50%] w-6 h-6 '><PencilIcon className='w-3 m-auto text-[#f88100]' /></div>
              <p className='text-sm text-slate-400'>modified 1 minute ago</p>
            </div>
          </div>



          <div className='flex gap-5  text-slate-500 text-sm justify-center items-center '>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <HandThumbUpIcon className='w-5' />
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <ChatBubbleLeftIcon className='w-5' />
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <EyeIcon className='w-5' />
            </div>
          </div>

        </div> */}


      </section>

      <section className='flex flex-col items-center text-slate-500'>
        <img src="/assets/lookingForMore.PNG" alt="" />
        <h1 className='text-3xl'>Looking For more?</h1>
        <div className='flex'>
          <p>Browse the&nbsp;</p><p className='text-[#85bce4]'>complete list of questions</p><p>{", or "}&nbsp;</p><p className='text-[#85bce4]'>{" popular tags."}</p><p>&nbsp;Helps us answer unanswered questions </p>
        </div>
      </section>
    </>
  )
}
