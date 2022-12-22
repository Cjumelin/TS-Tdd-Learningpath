# TDD in simple words
Tdd got some rules and philosophy that aim to drive you through your development
#### Philosophy
- You test on things at time.
- Incrementally step into complexity.
- What is the next simple smallest straightforward behavior to code ?
- Seeking Incremental feedbacks.
- Defer complexity until you truly need it.
- Practice safe coding by testing
  early and often, so you usually have but one reason to fail.
- If you get into trouble, you can easily revert to a known good state and
  try again.
- Every passing test represents a proven piece
  of behavior that you’ve added to the system.
- We want to first ensure that a newly coded assertion doesn’t pass. (Sometimes it does,
  which is usually not a good thing). This ensures our
  test is honest.
- Primary refactoring focus on increasing expressiveness and eliminating duplication.
#### Rules
- Write production code only to make a failing test pass. 
- Write no more of a unit test than sufficient to fail. Compilation failures
are failures.
- Write only the production code needed to pass the one failing test.
- If no test describes a behavior, it either doesn’t exist or isn’t intended.
## Interesting tools to look at
- Test list
- Tpp
- Test triangulation