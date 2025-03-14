Backend:

I've decide to use Express because of a few reasons:

- the backend is basic, it is just exposing an api endpoint, so it is best to keep it simple and not load an entire library.
- the decision was made with the performance in mind, since we have only a few basic dependencies. Faster loading and delivery.

Frontend:

It is made with Vite, in my opinion at the moment the best solution for those kinds of simple, small websites. Create react app is deprecated.

- the design is basic, I didn't want to complicate things. I've used MUI for the UI, with a responsive approach.
- for the state management, redux toolkit. Since redux is the proper solution for dealing with state I've taken advantage of its power. Ok, extra dependency but worthed.
- react hook forms for dealing with forms. Since it is part of the bonus requirements, I've decided to give it a try. To be honest I didn't use it before but I understand his power for dealing with forms. Good learning.
- typescript. Every modern app should use typescript because it is helping the developer to deliver a better product. Less room for bugs.
