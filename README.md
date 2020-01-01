# Project Title

Github repositories search web application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installing for notes on start the project.

### Prerequisites

you will need to install IDE to run the fron application, and server side code

```
Server side : visual studio 2019
Front Application : VS Code
```

### Installing

Download the front application

```
github-repo-search-app
```

Download the server-side code

```
github-repo-search-srv
```

opent the server side code using visual studio

```
using "open a project or solution" option. open the sln file "GitRepoSearchSrv.sln" inside the GithubRepoSearchBak->GitRepoSearchSrv folder.


```

open the front application using vscode.

```
using "open folder" option. open "github-repo-search-app" and select "select folder"
you can run the application using the build in terminal in vscode or using the windows cmd window.


select the "src" folder right click and open in terminal - run npm install.
and then use npm run in order to run the application.

```

After the projects are set change the "Access-Control-Allow-Origin" (in the Web.config - of the server project)
to work with the application address

```
for example : if the application run on localhost with port 300 use : value ="http://localhost:3000"

```

final step is to config the application get methods to work with the adress of the server
in the search-app project inside the src/components

1 : RepoUnit.jsx
change the get url domain and port to the one that the server run on

```
for example : if the server run on localhost:44384 use : "https://localhost:44384/Home/SaveRepositories"

```

2: FavoritsRepos.jsx
change the get url domain and port to the one that the server run on

```
same as RepoUnit.jsx

```
