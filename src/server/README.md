# API

## Supported REST endpoints
### GET api/homepage
route which returns home-page data

**Response**

*Status Code: 200*

```ts
{
  slideshow: String[],
  arrivals: IProduct[]  
  banners: IBanner[]
}
```

### POST api/subscriptions
add email to subscriptions

***Request body***
```json
{ email: 'example@domain.com' }
```
***Response***

*Status Code: 201* - subscription has been added

*Status Code: 400* - this email was already added

### DELETE api/subscriptions
delete email from subscriptions

***Request body***
```json
{ email: 'example@domain.com' }
```
***Response***

*Status Code: 202* - Deleted subscription

*Status Code: 404* - Email has not been found


### GET api/products
returns products list

***Response***

*Status Code: 200*

```json
{
"total": number,
"products": IProduct[]
}
```

#### Supported queries:

`ids=1,2,3`

returns products list with appropriate id numbers.

`price=10,100`

returns products list  within the price range.

`categories=t-shirt,shoes`

returns products list that belong to certain categories

`gender=man`

returns products list for specific gender

`size=l,s`

returns products with appropriate sizes

`brand=nike,adidas`

returns products by selected brands

`start=0&end=9`

returns specific quantity of products

Example `api/products?price=20,100&size=l`

### GET products/:id
returns product details including related products, description etc.

***Response***

*Status Code: 200*
```ts
IProduct
```

### GET api/filters
returns filters list

***Response***

*Status Code: 200*

Example:
```ts
[
  {
      "type": "radio",
      "name": "gender",
      "fields": ["man", "woman", "children"]
  },
  {
      "type": "checkbox",
      "name": "category",
      "fields": ["t-shirts", "shoes", "shorts"]
  },
  {
      "type": "checkbox",
      "name": "size",
      "fields": ["s", "m", "l", "xl"]
  },
  {
      "type": "range",
      "name": "price",
      "range": [20,200]
  },
  {
      "type": "checkbox",
      "name": "brand",
      "fields": ["nike", "adiddas", "reebok", "active"]
  }
]
```





