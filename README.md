# Learn Redux with real implementation

Instead of making simple todolist, I tried to create "real" Redux app that manages all data with React, JS, and Redux Toolkit. Soon I'll make it to Typescript version. 
I already learned and used ContextAPI on this [repo](https://github.com/AlvaJufinto/School-Hall-management-system) and I think it's time to scale up with other state management!

## Acknowledgements

- [Redux Toolkit](https://github.com/AlvaJufinto/) - Tech.


## Tech Stack

<p float="left">
  <img src="https://media.discordapp.net/attachments/1021751620331126865/1021757797475561542/js-logo.png" width="100" />
  <img src="https://media.discordapp.net/attachments/1021751620331126865/1021757798259888240/node-logo.png" width="100" />
  <img src="https://media.discordapp.net/attachments/1021751620331126865/1021757798612217927/react-logo.png" width="100" /> 
  <img src="https://media.discordapp.net/attachments/1021751620331126865/1022763916285194290/unknown.png?width=458&height=458" width="100" />
</p>

## Getting started

To use this repo run :

```
  npm install
```

```
  npm start
```

```
  npm json-server --watch data/db.json --port 8000

```



## Code and app understanding
- Because I want to use API but I don't want to waste time on making an API, I use a library called [json-server](https://www.npmjs.com/package/json-server) to make an virtual API based on JSON

- I make a file in data/[db.json](https://github.com/AlvaJufinto/Learn-redux-toolkit/tree/main/data) to store all data of virtual API

- A piece of code to make connection to virtual API to port 8000
  ![alt text](https://media.discordapp.net/attachments/1021751620331126865/1022769602683482122/unknown.png)

- This code create a store that contains store nane, store data, and method to edit store data
  ![alt text](https://media.discordapp.net/attachments/1021751620331126865/1022776950705627148/unknown.png?width=406&height=457)
