# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a User Interface Component Library and uses components to build out user interfaces. It helps to deal with complex states so that multiple pieces of data can be updated on the page without re-rendering the entire page.  It is scalable and unopinionated on how you manage data.

2. What does it mean to think in react?

Basing construction of UI around components so that the code can be reused, replaced, and debugged easily.  Much more modular approach to designing UI.

3. Describe state.

State is an object that stores properties of a component.  When state is changed the component rerenders.

4. Describe props.

Props are properties of components.  You pass down props from a parent module to use in a child module.  You do this by calling the "prop" value (which can be named whatever you like) followed by the property you are calling.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affects the function that are outside the scope of the function.  We can sync with state and props using the useEffect hook.
