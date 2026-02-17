# ✍️ ByteSizedBlogs Backend (MERN)
 
> Features and implementation details may evolve over time.

---

## 1️⃣ Project Overview (Why this project exists)

ByteSizedBlogs is a content-focused blogging platform where users can **log in, write short and readable blog posts**, and also **consume curated news content fetched from an external news source**.

The platform combines:

* **User-generated blog content**
* **Externally sourced news articles**

The goal is to provide a single place for quick reads — mixing personal blogs with trending and relevant news.

---

## 2️⃣ Core Features (What the system does)

### User Features

* User registration and authentication
* Create, update, and delete blog posts
* View blogs created by other users
* Read external news articles alongside user blogs

### Content Features

* Display user-uploaded blogs
* Fetch and display news articles from an external News API
* Unified feed combining blogs and news

### System Features

* Secure authentication using JWT
* Ownership-based authorization for blogs
* Clean REST API structure
* Scalable backend architecture

---

## 3️⃣ Tech Stack (How it is built)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (NoSQL)

> **Reasoning:**
> Blog content is flexible by nature (tags, categories, reading time, optional metadata). MongoDB allows schema flexibility and fast iteration, making it ideal for a content-driven platform.

### Other Tools

* Mongoose (ODM)
* JWT (Authentication)
* bcrypt (Password hashing)
* External News API (content fetching)
* Git & GitHub (Version control)

---

## 4️⃣ Architecture Decisions (Important Design Thinking ⭐)

* Followed a **controller-based backend architecture**
* Authentication and authorization handled via middleware
* Blog ownership enforced at the controller level
* External news fetching kept separate from core blog logic
* Centralized error handling for consistent API responses

> External APIs are treated as **data sources**, not core dependencies, ensuring the system remains stable even if the news service changes.

---

## 5️⃣ Folder Structure

```text
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── services/       # external API integrations
│   ├── utils/
│   └── app.js
├── package.json
└── README.md
```

---

## 6️⃣ Database Design (MongoDB)

### Collections Used

* users
  Stores user profile and authentication details

* blogs
  Stores user-created blog posts

> The blog schema supports flexible fields such as tags, summaries, and optional metadata without requiring schema migrations.

---

## 7️⃣ Content Handling Strategy

* User-created blogs are stored and served directly from MongoDB
* External news articles are fetched dynamically from a News API
* Both data sources are merged at the service/controller layer before being sent to the client

This separation ensures:

* Clean responsibility boundaries
* Easy replacement of external news providers
* No dependency of core features on third-party uptime

---

## 8️⃣ Authorization Rules (Security Logic)

* Only authenticated users can create blog posts
* Only the blog owner can edit or delete their posts
* Read access is public for blog and news content

This maintains content integrity while keeping the platform open for readers.

---

## 9️⃣ Development Roadmap

* [x] Authentication system
* [x] Blog CRUD operations
* [x] External news integration
* [x] Unified content feed
* [ ] Pagination & filtering
* [ ] Search functionality
* [ ] Blog reactions (likes/comments)
* [ ] Deployment

---

## 🔟 Future Enhancements

* Add bookmarking and reading history
* Introduce categories and personalized feeds
* Cache external news responses
* Add admin moderation tools

---

 
 
