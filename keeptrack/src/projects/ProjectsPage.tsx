
import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
    /* React components can only return one root element so you
        will need to wrap the <h1> and <pre> tags in a React Fragement <></>

        Wrapping output in a HTML <pre></pre> (preformatted) tag retains whitespace

        To switch to JavaScript in JSX use { }

        JSON.stringify(MOCK_PROJECTS, null, ' ')'s third argument is used to insert
        white space into the output JSON string for readability purposes. The second
        argument is a replacer function so we can pass null because we don't need to
        replace anything.
    */
    return (
        <>
            <h1>projects</h1>
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </>
    );
}

export default ProjectsPage