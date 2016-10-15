# HomeworkTracker

GIT memo: Always pull before making any code updates
```sh
git pull origin master
```

## Getting Started

Make sure you have [Meteor installed](https://www.meteor.com/install).

## Setup

In terminal:
```sh
cd < pick a directory to put the project >
git clone <url of this repo>
cd app
```
## Installation

Install npm packages:
```sh
meteor npm install
```
## Run

In terminal:
```sh
meteor
```
View the app in your browser at http://localhost:3000

### How to Deal with Git Branches

1. Clone the repo ( you should already cloned this :P)
2. Pull down all branches:
```sh
git fetch --all
```
3. View available branches:
```sh
git branch -a
```
4. Check out a specific branch(switch to appropriate branch):
```sh
git checkout <branchname>
```
5. Create a new branch:
```sh
git checkout -b <branchname>
```
eg git checkout 01-setup

### More Git Commands and Workflow

[Git Cheat Sheet](http://rogerdudler.github.io/git-guide/)
