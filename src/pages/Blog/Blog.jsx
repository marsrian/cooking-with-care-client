import { Accordion } from "flowbite-react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div className="mt-6 my-container">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="mr-4 text-right">
            <button
              className="px-3 py-2 font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
              onClick={toPdf}
            >
              <div className="flex gap-3 my-auto">
              <FaDownload /> Generate Pdf
              </div>
            </button>
          </div>
        )}
      </Pdf>
      <div ref={ref}>
        <h2 className="mb-4 text-3xl font-bold text-center text-blue-600">
          Frequently Asked Questions
        </h2>
        {/* Flowbite Accordion Start*/}
        <div>
          <Accordion>
            {/* 1st Question */}
            <Accordion.Panel>
              <Accordion.Title>What is the differences between uncontrolled and controlled components?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-700 dark:text-gray-400">
                Differences between uncontrolled and controlled components:
                <br />
                <span className="font-medium">controlled components:</span> In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave.
                <br />
                <span className="font-medium">uncontrolled components:</span> On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* 2nd Question */}
            <Accordion.Panel>
              <Accordion.Title>
              How to validate React props using PropTypes?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-700 dark:text-gray-400">
                <span className="font-medium">validate React props using PropTypes:</span> React provides a built-in library called PropTypes that allows you to validate the props passed to your React components.
                <br />
                <p>we can use a variety of PropTypes to validate different types of props, including:</p>
                <ul>
                  <li>PropTypes.string</li>
                  <li>PropTypes.number</li>
                  <li>PropTypes.bool</li>
                  <li>PropTypes.array</li>
                  <li>PropTypes.object</li>
                  <li>PropTypes.oneOf()</li>
                </ul>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* 3rd Question */}
            <Accordion.Panel>
              <Accordion.Title>
              What is the difference between nodejs and express js?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Difference between nodejs and express js:
                </p>
                <p><span className="font-medium">node js:</span> Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in</p>
                <p className="mt-2"><span className="font-medium">express js:</span> Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy. Express.js makes it easier to build web applications by providing a simple and consistent API that handles common tasks, such as handling requests and responses, parsing request bodies, and managing sessions.</p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* 4th Question */}
            <Accordion.Panel>
              <Accordion.Title>
              What is a custom hook, and why will you create a custom hook?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className='font-semibold text-regalBlack'>custom hook:</span> Custom hook is a function in React that allows you to extract common logic from components and reuse it across your application. custom hooks are a powerful tool in React that can help you create reusable and composable code, reduce code duplication, and make your codebase more maintainable.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        {/* Flowbite End */}
      </div>
    </div>
  );
};

export default Blog;