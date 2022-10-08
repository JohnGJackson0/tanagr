# Tanagr

The goal of the project is to practice modern tools to React Native inside one project and complete a full stack app, a single native multi-platform app including web, a Micro Architecture backend and serverless in a single code base. 

With the help of AWS, Amplify, React Native & Expo of course. 

## Roadmap

As a pet project, the idea is to exercise my high level architecture to integrate and maximize modern tools to their highest ability and to test new architectural patterns. So currently not trying to deploy.

Here are the main ideas which can change in the future.

 * Basic Social Media Platform
 * Implement SSR solution for React Native with Web
 * Moving to Serverless Framework
 * Only Functional Architecture (Maybe with RXJS)
 * Cleanest JS code possible & Clean Architecture
 * CI CD Conventional Commits
 * Possibly convert this to React Native CLI instead

## Philosophy

I believe results are determined by good architecture. When we worry about the future ability to scale a project rather than completing a large project quickly without tests, or architecture, we see massive results in the beginning and the results become harder as the project scales. The idea is to flip it. 

### Serverless

In React ecosystem most recommend Node JS, I think it is incorrect for the requirements of most apps. 

For example, when we bring in serverless architecture, it's because it solves horizontal scaling at the business model level. It simplifies the code base and provides properties where optimization of API can cause immediate savings. The serverless business model is an architecture that can handle large spikes of traffic without code optimization. 

The serverless model provides code as infrastructure. The Lambda is not written in a console. The code for the lambda and the configuration for cloud infrastructure accounts are easily seen on a single project. A new account can easily deploy the same code. The serverless framework, one of our stretch goals, is agnostic to a cloud provider. It can switch between AWS lambda and Google Cloud with a little effort, provided someone undercuts the price of the other.

### Micro Architecture

A backend team doesn't need to work within the same code base. They can be split up and have the responsibility of a service. This is a business choice to provide even more scalability. The architecture allows it immediately, as it's already one of the main points of cloud formation. 

Let's think about this in an everyday scenario. We don't always just use a service for restful API, it is used in bucket storage, in notification systems and various cloud service triggers. This is what microservice brings us. These are not necessarily for multiple teams, but for keeping track of implementation details by providing powerful abstractions. 

### React Native 

It runs the application natively in each platform in a language that many developers have used in the past, JS. It's a single code base being deployed in several platforms. React Native no longer uses bridge code which was the biggest reason to use Flutter over it. The drawback is they still struggle with higher performance as splitting to use the platform code in each, and usually cannot utilize all the capabilities of that platform.

### TDD CICD Clean Architecture

The code itself should be easily testable, tested and should be written with known tactics that show to make it as clear as possible and prevent bugs. What clean architecture brings is maximum ability to change, scale and provide the lessons learned by developers more experienced than me. 
