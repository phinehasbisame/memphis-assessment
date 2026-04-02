# MemphisCorps Interview Assessment

## Project setup
To setup the project, clone the github repository using the command `git clone https://github.com/phinehasbisame/memphis-assessment.git`. Navigate to the directory which you cloned the project onto and run the command `npm install` or `npm i` for short. Run `npm run dev` after all the dependencies are done installing to open the project

## Folder Structure
```
/public - contains only my logo for now
/src
  /app - entry point for creating pages
  /components
    /common - all commonly used components resides here
    /table - all components relating to table reside in this directory
  /constants - all constants are kept here
  /hooks - all reusable business logic 
  /interfaces - all types and interfaces are kept in this directory
```

## State management
Because the complexity of the application is not complex, only `useState` is used for state management. A basic use of useState is shown below. Since it is a hook, it must be marked as a client component

```ts
"use client"
import { useState } from "react"

const Home = () => {
  const [filter, setFilter] = useState<string>("")
}
```

## Filter
Filtering the content of the data required the use of a filter method as shown below

```ts
  const filteredUser = users.filter(({role}) => role === filter)
```

## Best Practices
Separation of concern is keep with component composition vital here too