# TODO

- change category 'name' to 'slug'? don't display IT, display a string associated with it
- need to make sure that the category names are 'normalized' as either all caps or all lowercase, and maybe separated with dashes?

- add admin flow (authentication, authorization)
- Create admin flow:
- allow for product creation
- allow for variant creation
- allow for category creation

- add filtering to GET routes (GET products?audience=men&category=shirts)

- should I have a client function for each server endpoint?
- then I could type out the arguments... and the return type

- move shared devdeps to the root package.json (shared is currently only buildable by accident since it relies on tsc but only has it as a result of peer packages having it)

- shared tsconfig?

- decide what things go into shared...
- DTOs? (the whole point of these is transferring data between client and server... right?)
- Zod stuff? does that make sense?
- the return types for every endpoint? (the backend needs to return something... and the frontend needs to know what that thing is... the alternative would be to recreate the types in the frontend... but the great thing about everything being in TS is that you can share types across server and client... should I recreate the endpoints in types and share them?)
