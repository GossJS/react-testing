# React testing with Jest and Enzyme

Jest
* made for React by React
* easily integrated
* reach output
* asserts with Expect.js
* each test run in separate process
* async tests
* import mocks
* watch testing
* test coverage
* snapshot testing

But:
* starts slowly
* no browser testing
* poor docs

Enzyme:
* TestUtils (React testing)
* jsdom
* CheerIO

Render:
* shallow
* mount
* static

How to test React components:
1. Define component's contract (expected behavior).
    * render
    * props
    * state
    * user interactions (events)
2. Also contract, but less common:
    * context
    * methods on instance (using ref)
    * side effects
