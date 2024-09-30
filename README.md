# commbank-challenge

## Requirements
- node.js latest version

## Setup

- Clone repository with `git clone https://github.com/joshuaManlunas/commbank-challenge.git`
- cd into the project directory `cd commbank-challenge`
- checkout feature branch with `git checkout feature/JoshuaManlunas-CBATest`
- Install dependencies with `npm install`
- Install Playwright dependencies with `npx playwright install --with-deps`
- Run tests with `npm run test -- --grep=@regression` or `npx playwright test --grep=@regression`

## Continuous Integration (CI)
- This project is set up to run on GitHub Actions. The workflow is defined in the `.github/workflows` folder.
- The workflow will run the tests on every Pull Request(PR) to main and every push to the `feature/JoshuaManlunas-CBATest` branch.
- CI location is [here](https://github.com/joshuaManlunas/commbank-challenge/actions)

## Notes
- If the test fails, the report will be generated in the `playwright-report` folder. A web server will be started and the report will be served to you for fast feedback.

## Core Functionality Test Cases Covered

Based on the Swagger definitions found at the [Petstore API](https://petstore.swagger.io/#/):

### 1. **Pet Entity**
- **Add Pet (POST /pet)**: Verify adding a pet with all valid fields.
- **Update Pet (PUT /pet)**: Validate updating an existing pet with new details.
- **Get Pet by ID (GET /pet/{petId})**: Check retrieval of a pet using a valid ID.
- **Delete Pet (DELETE /pet/{petId})**: Ensure deletion works correctly for a given pet ID.

### 2. **Store Entity**
- **Place an Order (POST /store/order)**: Test placing a valid order.
- **Get Order by ID (GET /store/order/{orderId})**: Retrieve a specific order.
- **Delete Order (DELETE /store/order/{orderId})**: Validate order deletion.

### 3. **User Entity**
- **Create User (POST /user)**: Add a user and verify all fields.
- **Get User by Username (GET /user/{username})**: Retrieve details of a specific user.
- **Update User (PUT /user/{username})**: Update user info.