# TODO

Site Structure:

- Home
- Audience: /mens /womens
- Category: /mens/[category] /womens/[category]
- Product(Variant): /products/[sku]

- Add 'transformer' functions that turn DTOs into UI types before passing down the UI tree

- think through nice API for 'shared' exports...
- should there be a default export? Or everything separately exported?
- what should the thing we import be called?

- is there any way to ensure that the server implements the contracts?
- what if I create a contract and the server just never implements it?

- interesting observation/thought: if the contracts contain all relevant information about an exchange...
  do we need to expose types at all? Or schemas? or anything extra? Could just expose the contracts and some utility types that extract types from the contracts...
  then use those throughout the server and client... why would we need to expose things separately?

- change category 'name' to 'slug'? don't display IT, display a string associated with it
- need to make sure that the category names are 'normalized' as either all caps or all lowercase, and maybe separated with dashes?

- add admin flow (authentication, authorization)
- Create admin flow:
- allow for product creation
- allow for variant creation
- allow for category creation

- add filtering to GET routes (GET products?audience=men&category=shirts)

- shared tsconfig?
