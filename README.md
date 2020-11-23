# propertygallery-service

An Image gallery component for an Airbnb mockup rental web application.

## Technologies
  * React 16.3.1
  * Styled-Components
  * Node.js
  * MongoDB/Mongoose
  * Jest
  * Enzyme
  * Webpack

## API

### Get Property Info
  * GET `property/:id`

**Path Parameters:**
  * `:id` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "_id": "Number",
      "name": "String",
      "rating": "Number",
      "totalratings": "Number",
      "superhost": "Boolean",
      "location": "String",
      "saved": "Boolean",
      "photos": [
        {
          "_id": "Number",
          "url": "String",
          "caption": "String",
          "verified": "Boolean",
        },
      ],
    }
```

## Images

![main](main-img.jpg)

![modal](modal-img.jpg)
