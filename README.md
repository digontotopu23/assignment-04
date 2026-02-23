#  Project Questions & Answers

---

### Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:** 
 - **getElementById()** is it used to select an element by its unique ID. It returns only one element because in should be unique in HTML.

- **getElementsByClassName()** returns a collection of elements that have the same class name. It is live HTMLCollection.

- **querySelector()** returns the first matching element based on CSS selector.

- **querySelectorAll()** returns all matching elements as a NodeList.
---

### Question 2: How do you create and insert a new element into the DOM? 

**Answer:** 
To create and insert a new element into the DOM:

- First create an element using `document.createElement()`.
- Then add content using `innerText` or `innerHTML`.
- Finally, insert  into the DOM using methods like:
  - appendChild()
  - prepend()
  - insertBefore()
---

### Question 3: What is Event Bubbling? And how does it work?
**Answer:** 
Event bubbling is the process where an event starts from the inner element and moves upward to the parent elements.

For example, if you click a button inside a div:

- First button event will run  
- Then parent div event will run  
- Then grandparent event will run  

This happens because events propagate upward in the DOM tree.

--- 

### Question 4: What is Event Delegation in JavaScript? Why is it useful?

**Answer:** 
Event delegation means attaching a single event listener to be a parent element instead of adding multiple listeners to child elements.

It is useful because:

- Improves performance
- Reduces memory usage
- Works dynamically for newly added elements

In my project, I can apply event delegation by handling to events from the container element.

---

### question 5: What is the difference between preventDefault() and stopPropagation() methods?

**Answer:** 
- **preventDefault()**
  - Stops the default browser behavior.
  - Example: Prevents form submission or link navigation.

- **stopPropagation()**
  - Stops event bubbling.
  - Prevents event from reaching parent elements.

