This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node 14+ (https://nodejs.org/en/download/)
* Git (https://git-scm.com/downloads)
* Docker 20+ (https://docs.docker.com/get-docker/) - *Optional*

### Clone repository

For this step, make sure the GIT is installed.

If you're in doubt whether you have installed, run the command ```git --version```. This command will display the GIT version if it's installed.

```sh
git clone https://github.com/RNunes13/movie-mania-front
cd movie-mania-front
```

## Using docker

If you want to use docker to run the project, just follow this step. Make sure docker is installed on your computer and run the command below to up the Docker container;

```sh
./scripts/dev up
```

### Install dependencies

For this step, make sure NodeJS and NPM are installed.

**Obs.:** NPM is already installed next to NodeJS.

If you're in doubt if both are installed, in the terminal the commands, ```node -v ``` (This command will display the NodeJS version, if installed) and ```npm -v ``` (This command will display the version of NPM, if installed).

Also, ensure that your computer has internet access at the time of the command execution

```sh
npm install
```

After running the command on the terminal, wait for the packages to download. This procedure can take time depending on the speed of your internet.

If you're running on a system that requires administrator permission, a error may occur.

If you're on a **Windows** system, simply open the terminal (Command Prompt or other) with administrator permission.

If you're on **Linux** or **MAC** system, run the same command with **sudo** (```sudo npm install```).

## Development

To compile the files and watch the changes in **Development** environment, and to be able to test the website, execute the command below

```sh
npm run dev
```

On **Linux** or **MAC** systems, at times, you'll need to use **sudo** to execute this command. So, just added before the command (```sudo npm run start```).

Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Production

To compile the files in **Production** environment, run the command below.

```sh
npm run start
```

On **Linux** or **MAC** systems, at times, you'll need to use **sudo** to execute this command. So, just added before the command (```sudo npm run build```).

The build artifacts will be stored in the `dist/` directory. This script (```npm run build```) already has the `--prod` flag.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Authors
  * **Rodrigo Nunes** - Initial work - [RNunes](https://github.com/RNunes13)

See also the list of [contributors](https://github.com/RNunes13/challengeEstudarComVc/contributors) who participated in this project.
