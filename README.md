# ExpressJS + Typescript (Boilerplate)

>> **Note:** This repo is folk from https://github.com/sunhak-hout/express-ts-api-boilerplate which use MongoDB for database.

All you have been looking for with ExpressJS + Typescript + Relational Database with Prisma:

* Simple Clean Code Structure
* Custom Error Handlings
* Module Aliases
* Prisma Example
* Existing Sample Code

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Feel free to play around ;)

### Prerequisites

Make sure your NodeJS and NPM on your local machine is up to date.

```
node --version # v14.16.0
npm --verions  # 6.14.11
```

### Installing and Running

Clone the project

```
git clone https://github.com/sinh117801/express-ts-api-boilerplate.git
```

Move into the project folder

```
cd express-ts-api-boilerplate
```

Config Environment Variables

```
cp .env.example .env
# set value of each variables in '.env' file
```

Install dependencies, prisma migration and start

```
npm install
npx prisma migrate dev
npm run dev
```

## Contributing

All pull requests and feedbacks are welcome and appreciated ;)

## Author

* **Sinh Noun** - *Javascript Developer* - [Mbanq Cloud](https://mbanq.com/cloud)

## Acknowledgments

To all NodeJS and Typescript and other related field contributors, thank you! <3
