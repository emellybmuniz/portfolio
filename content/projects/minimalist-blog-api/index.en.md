---
title: "Minimalist Blog API"
date: "2024-01-01"
featured: true
weight: 10
draft: false
description: "RESTful API built with Node.js and TypeScript to manage blog authors, posts, and categories."
imageCover: ""
imageCoverFallback: ""
categories: 
  - "Backend"
  - "API"
technologies:
  - "TypeScript"
  - "Node.js"
  - "Express"
  - "PostgreSQL"
  - "TypeORM"
liveDemo: "https://minimalist-blog-api-7hzq.onrender.com/api-docs/"
repositoryUrl: "https://github.com/emellybmuniz/minimalist-blog-api"

techReasons:
  TypeScript: "Prevents errors during development by adding static typing to JavaScript."
  Node.js: "A fast and lightweight runtime environment that allows running JavaScript on the server."
  Express: "A simple framework used to set up HTTP routes and organize application middlewares."
  PostgreSQL: "A stable relational database chosen to store information securely."
  TypeORM: "An ORM that simplifies database connections using classes and TypeScript via the Data Mapper pattern."

metadata:
  status: "Completed"
  platform: "Backend API"
  role: "Backend Developer"
  industry: "Technology"
  
  challenges:
    - kicker: "Challenge 1: Security and Unique Identifiers"
      title: "Transitioning from sequential IDs to UUID"
      description: "Using simple numeric (sequential) IDs can expose data structure and record volume through the URL."
      resolution: "A database migration was created to change primary key fields to UUID in the posts and categories tables, updating foreign keys and the junction table accordingly."
      
features:
  - "Full management (CRUD) of users, posts, and categories"
  - "Search filter to find posts by keywords in the title"
  - "One-to-Many relationship between authors and posts"
  - "Many-to-Many relationship between posts and categories"
  - "Relation loading (Eager Loading) to fetch linked data inside queries"
  - "Structured database management using Migrations"
  - "Interactive API documentation generated with Swagger UI"
---

## About the Project

This project is a RESTful API designed to manage the internal structure of a minimalist blog. The main goal of the system is to allow user registration (authors), post creation, and content organization into multiple categories.

The application solves the problem of relational data storage and structuring for content platforms. Before the API was implemented, there was no clear separation between business logic and database tables, making simple tasks difficult—such as listing an article with its author's name or assigning multiple categories to a single post.

## Architecture and Technical Decisions

The project is structured into clear development layers to keep the codebase organized and maintainable:
* **Controllers:** Solely responsible for receiving HTTP requests and returning responses to the client.
* **Services:** Where all business logic and core validations live (such as verifying if the title or body of a post is filled before saving).
* **Entities:** Where database tables are mapped using classes and TypeORM decorators.

Persistence uses a PostgreSQL database combined with TypeORM running under the Data Mapper pattern. This choice isolates how data is saved from the blog's core business rules. Relationships were configured directly through the ORM, applying explicit relation loading (`relations`) to ensure that nested data (like the post's author and categories) comes formatted correctly in the final JSON response without needing complex manual SQL queries.

{{< technologies >}}

## Engineering Challenges and Solutions

During development, adjusting the database structure was necessary to improve security and better control the stored records.

{{< challenges >}}

## Impact and Results

* **Data Integrity:** Validations directly implemented within the service layer prevent incomplete records from being created in the database.
* **Seamless Database Workflow:** Using database migrations (`migrations`) allows the schema to be reliably recreated by any developer or in deployment environments like Render.
* **Ready-to-Use Documentation:** The Swagger integration provides an accessible visual interface for frontend developers to immediately consume and test the API.