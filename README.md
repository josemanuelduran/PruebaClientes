# PruebaClientes

A hybrid app allowing to manage the list of customers, their contacts and tasks on them from a mobile device.

## Project Summary

* Tech. Stack: Ionic 3, Angular 4.
* Platforms: Android, iOS, Windows (Universal Windows Platform apps). Currently only packaged for Android.
* Form Factor: Smartphones.

## Contact

This repository is managed by [Jose Manuel Durán](mailto:josemanuelduran@gmail.com).

For functional enquiries you can ask [Jose Manuel Durán](mailto:josemanuelduran@gmail.com).

For project management issues, please consult [Jose Manuel Durán](mailto:josemanuelduran@gmail.com).


## Getting Started

### Prerequisites

You need to install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running node -v and npm -v in a terminal / console window. Older versions may produce errors.

Check if Ionic CLI and Cordova modules are installed:

```bash
$ ionic -v
$ cordova -v
```

If no version retrieved, install Ionic and/or Cordova:

```bash
$ npm install ionic -g
$ npm install cordova -g
```

### Clone repository

Clone this repo into a new project folder.

```bash
$ git clone https://github.com/josemanuelduran/PruebaClientes.git
```

### Install dependencies

> The following commands must be executed from application root folder.

Install project dependencies described in the `package.json`:

```bash
$ npm install
```

> This will install node modules dependencies locally.

> Note: If you are behind a firewall you have to configure firewall setting for npm and git.

### Quick build and run

Run `ionic serve` to build the project and lauch a lite web server. Then navigate to `http://localhost:8100`
if your browser doesn't open automatically.

## Browse, build and run

### Building for Android/iOS/Browser

Integrate Ionic with [Cordova](https://cordova.apache.org/) to bring native capabilities.

> You can see a full list of Ionic CLI commands [here](https://ionicframework.com/docs/cli/commands.html).

1. Add platforms

```bash
$ ionic cordova platform add [<platform>]
```

>  `platform` The platform to add (android, ios, browser)

2. Install plugins

```bash
$ ionic cordova prepare
```

3. Build

```bash
$ ionic cordova build [<platform>] [options]
```

> - `platform` The platform to build (android, ios, browser)
> - add the `--prod` flag to build the application for production and the `--release` flag to create a Cordova release build.

#### NPM scripts commands

| Task              | Description                                                            |
|-------------------|:-----------------------------------------------------------------------|
| `clean`           | Empty the `www/build` folder                                           |
| `build`           | Build (prepare + compile)                                              |
| `build:android`   | Build (prepare + compile) for android that can be deployed in a device |
| `serve`           | Start a local development server for app dev/testing                   |
| `serve:android`   | Start a local development server for app dev/testing with android L&F  |
| `run:android`     | Run the app on an android connected device                             |
| `lint`            | Lint with tslint                                                       |
| `test`            | Runs Karma tests                                                       |
| `test:ci`         | Runs Karma tests (run Karma in continuous integration mode)            |
| `docs`            | Generates project documentation                                        |


#### Other scripts commands

The scripts folder has some additional command scripts that are useful to serve, build and run the app in Web browser,
emulator and devices. In order to execute them correctly your current working directory must be this.

```
$ cd scripts
```

##### Check connected devices

Script `list-android-devices.cmd` will display a list of connected Android devices along with their identifiers.

```bash
$ list-android-devices.cmd
```

## [TBC] Contribution guidelines

* Writing tests.
* Code review.
* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing](CONTRIBUTING.md)
* [Coding Style Guide Reference](CODING_GUIDELINES.md)
* Other guidelines.
