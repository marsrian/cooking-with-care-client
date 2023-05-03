import { Accordion } from "flowbite-react";
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div className="my-container mt-6">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="text-right">
            <button
              className="px-3 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-700"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          </div>
        )}
      </Pdf>
      <div ref={ref}>
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-4">
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
                validate React props using PropTypes:
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
              </Accordion.Content>
            </Accordion.Panel>
            {/* 4th Question */}
            <Accordion.Panel>
              <Accordion.Title>
              What is a custom hook, and why will you create a custom hook?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Difference between custom hook:
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