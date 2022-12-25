# TDD in simple words

Tdd got some rules and philosophy that aim to drive you through your development

#### Philosophy

- You test on things at time.
- Incrementally step into complexity.
- What is the next simple smallest straightforward behavior to code ?
- Seeking Incremental feedbacks.
- Defer complexity until you truly need it.
- Practice safe coding by testing early and often, so you usually have but one reason to fail.
- If you get into trouble, you can easily revert to a known good state and try again.
- Every passing test represents a proven piece of behavior that you’ve added to the system.
- We want to first ensure that a newly coded assertion doesn’t pass. (Sometimes it does, which is usually not a good
  thing). This ensures our test is honest.
- Primary refactoring focus on increasing expressiveness and eliminating duplication.
- Ability to move forward in the face of incomplete information.
- Ability to correct earlier choices as new information arises.
- Move toward a more generalized solution for the concern instead of "if" forest.
- TDD is not a hard science; think of it as a craft-person’s tool for incrementally growing a codebase.
- TDD allow serenity of experimentation, discovery, and refinement.
- During refactoring steps, we aim to enhance design by:
    - Separate interfaces from implementations.
- Part of doing TDD is thinking outside of what we’re given.

#### Rules

- Write production code only to make a failing test pass.
- Write no more of a unit test than sufficient to fail. Compilation failures are failures.
- Write only the production code needed to pass the one failing test.
- If no test describes a behavior, it either doesn’t exist or isn’t intended.
- Each test is independent.
- Make it work, make it beautiful, make it optimize:
    - This statement imply to build good design, with consistent
      interfaces and expressive code during refactoring phase before optimizing it.

## Interesting tools and concepts to look at

- Test list
- Tpp
- Test triangulation
- Test abstraction