# Chess API

[![Build Status](https://travis-ci.org/ricardotulio/chess-api.svg?branch=master)](https://travis-ci.org/ricardotulio/chess-api)
[![Coverage Status](https://coveralls.io/repos/github/ricardotulio/chess-api/badge.svg?branch=master)](https://coveralls.io/github/ricardotulio/chess-api?branch=master)

## Description

The propose of this repository is provide an interface for game developers who want to create a chess game. It abstract the chess game rules and another features that is necessary to play, like manage players, rooms and matches.

## Instalation

## Basic usage

### Running the project

This project use babel and es5. To run this project, you need build before. To build, you can execute `build` script with this command:

```
$ npm build
```

After build, you can start the project using `start` script:

```
$ npm start
```

### Creating a player

To create a player, you need to submit a POST request with player data to `signup` endpoint, like this:

```
POST /signup?username=john.due&password=123456
```

`application/json` request example:

```javascript
{
  "username": "john.due",
  "password": "123456"
}
```

### Searching for online players


### Inviting a player

## Documentation

- [Running the project](#running-the-project)
- [Creating a player](#creating-player)
- [Sign in](#sign-in)
- [Inviting a player](#inviting-player)
- [Starting a match](#starting-match)
- [Sending movements](#sending-movements)
- [Available Scripts](#available-scripts)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm start](#npm-start)
- [Endpoints](#endpoints)
  - [/signin](#endpoint-signin)
  - [/signup](#endpoint-signup)
  - [/user](#endpoint-user)
  - [/invite](#endpoint-invite)
  - [/match](#endpoint-match)
  - [/match/{id}/movements](#endpoint-movements)
