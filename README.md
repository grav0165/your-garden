# Your Garden

Your Garden is a simplified gardening tracker in order to give the user the ability to quickly research different types of plants they might add to their garden, add specific plants to their own garden, and track daily the watering needs of any plants they may have. This gives the user an easy way to manage an otherwise complicated process.

## Getting Started

Fork the repo to your own github, then clone down to your machine. You will need an API key from [Perenual](https://perenual.com/docs/api) in order to make the correct search calls to the database. You will also need a working local database to hold user and plant information. Using Postgres, copy all tables in database.sql file included in the repo.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MaterialUI](https://mui.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Redux](https://react.dev/)
- [ReduxSaga](https://redux-saga.js.org/)
- [Momentjs](https://momentjs.com/)
- [Perenual](https://perenual.com/docs/api)

### Installing

The project has all dependencies sources in the package.json file. However, additional icons were used from the MaterialUI project which can be sourced from https://mui.com/material-ui/material-icons/. 

1. Create a database named `your_garden`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Upon launching the server and client, you will be taken to a landing page of To-Do and search.
2. Each plant card in the user's garden will be clickable if the plant is added to the garden is it is due to be watered.
3. To add a plant to the user's garden, the user can type in any information into the search box, and click 'search'.
4. All results will return as clickable cards which will take the user to additional details
5. The details will show a larger image, further description, planting/sun information, and etc.
6. Clicking add will bring up a popper window to ask the user how often they'd like to water their plant, and confirm if they truly desire to add
7. Clicking remove will bring up a popper window allowing the user to then remove a plant from their garden
8. The top nav bar has 'To Do', which lists out different plants that the user needs to water that day.
9. Any cards in red indicate the user missed watering that plant the day prior and are in dire need of attention
10. The top nav bar has 'Your Garden', which displays all plants within a given users garden, allowing to navigation back to the details screen

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [Javascript](https://www.javascript.com/)
* [React](https://react.dev/)
* [Node.js](https://nodejs.org/en/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Aubrey Graves** - *Initial work* - [Grav0165](https://github.com/grav0165)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Special thanks to Perenual API for having excellent documentation on how to access and use their features.
* Inspiration for this project came from a personal desire to become a better gardener through a simple application. A skill I picked up during COVID lockdown was tending to plants to give myself peace of mind and something to do while we were all stuck inside. It made the world seem just a little less crazy and personally felt like I was accomplishing things.


