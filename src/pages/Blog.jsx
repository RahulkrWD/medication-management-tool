import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaSearch,
  FaArrowRight,
  FaComment,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import "../styles/Blog.css";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "How to Improve Medication Adherence",
      excerpt:
        "Discover proven strategies to help patients stick to their medication schedules.",
      category: "Health Tips",
      date: "May 15, 2023",
      author: "Dr. Sarah Johnson",
      comments: 12,
      featured: true,
      image:
        "https://www.sgu.edu/blog/medical/wp-content/uploads/sites/2/2018/02/Top-Medical-Blogs_FB.png",
    },
    {
      id: 2,
      title: "The Future of Digital Health",
      excerpt:
        "Exploring emerging technologies that are transforming healthcare delivery.",
      category: "Technology",
      date: "April 28, 2023",
      author: "Michael Chen",
      comments: 8,
      featured: false,
      image:
        "https://thaka.bing.com/th/id/OIP.v_143YStTUMbQJW4d5U8hgHaEF?rs=1&pid=ImgDetMain",
    },

    {
      id: 3,
      title: "Managing Chronic Conditions",
      excerpt:
        "A comprehensive guide to managing diabetes, hypertension and other chronic diseases.",
      category: "Health Tips",
      date: "April 10, 2023",
      author: "Dr. Priya Patel",
      comments: 15,
      featured: true,
      image:
        "https://hospitalnews.com/wp-content/uploads/2017/02/cover-final-696x464.jpg",
    },
    {
      id: 4,
      title: "Mental Health and Medication",
      excerpt:
        "Understanding the connection between mental health and treatment adherence.",
      category: "Mental Health",
      date: "March 22, 2023",
      author: "Dr. James Wilson",
      comments: 6,
      featured: false,
      image:
        "https://thaka.bing.com/th/id/OIP.ufaYzYyiHixpnJLdJRJIzAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      title: "Health App Security Best Practices",
      excerpt: "How we ensure your health data remains private and secure.",
      category: "Technology",
      date: "March 15, 2023",
      author: "Alex Rodriguez",
      comments: 4,
      featured: false,
      image:
        "https://thaka.bing.com/th/id/OIP.RGxZMcTwTfiGk8-_sNiqWQHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      title: "Nutrition and Medication Effectiveness",
      excerpt: "How diet can impact how well your medications work.",
      category: "Nutrition",
      date: "February 28, 2023",
      author: "Lisa Wong",
      comments: 9,
      featured: false,
      image:
        "https://nutritionepigenetics.com/wp-content/uploads/2019/09/Nutrition-and-Medicine2.jpg",
    },
  ];

  const categories = [
    "All",
    "Health Tips",
    "Technology",
    "Mental Health",
    "Nutrition",
  ];

  // Filter posts by category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <Layout>
      <div className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <h1 className="display-4 fw-bold mb-3">Medisafe Blog</h1>
              <p className="lead mb-4">
                Insights, tips, and news about medication management and digital
                health
              </p>

              {/* Search Bar */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="search-container mb-5"
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-primary" type="button">
                    <FaSearch /> Search
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="featured-posts py-5 bg-light">
            <div className="container">
              <h2 className="text-center fw-bold mb-5">Featured Articles</h2>
              <div className="row g-4">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="col-md-6">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="featured-post-card"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className="post-image"
                        style={{ backgroundImage: `url(${post.image})` }}
                      ></div>
                      <div className="post-content">
                        <span className="category-badge">{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="post-meta">
                          <span>
                            <FaCalendarAlt /> {post.date}
                          </span>
                          <span>
                            <FaUser /> {post.author}
                          </span>
                          <span>
                            <FaComment /> {post.comments} comments
                          </span>
                        </div>
                        <a href={`/blog/${post.id}`} className="read-more">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Blog Content */}
        <section className="blog-main py-5">
          <div className="container">
            <div className="row">
              {/* Main Posts Column */}
              <div className="col-lg-8">
                {/* Category Filters */}
                <div className="category-filters mb-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn ${
                        activeCategory === category
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="blog-grid">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <motion.div
                        key={post.id}
                        className="blog-post-card"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="post-thumbnail"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className="post-body">
                          <span className="post-category">{post.category}</span>
                          <h3 className="post-title">{post.title}</h3>
                          <p className="post-excerpt">{post.excerpt}</p>
                          <div className="post-footer">
                            <div className="post-meta">
                              <span>
                                <FaCalendarAlt /> {post.date}
                              </span>
                              <span>
                                <FaUser /> {post.author}
                              </span>
                            </div>
                            <a href={`#tag/${post.id}`} className="read-more">
                              Read More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="no-results">
                      <h3>No articles found</h3>
                      <p>Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  {/* About Widget */}
                  <motion.div
                    className="sidebar-widget about-widget"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4>About the Blog</h4>
                    <p>
                      Our blog provides expert insights on medication
                      management, digital health innovations, and patient care
                      strategies.
                    </p>
                  </motion.div>

                  {/* Popular Tags */}
                  <motion.div
                    className="sidebar-widget tags-widget"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4>Popular Tags</h4>
                    <div className="tags-container">
                      {[
                        "Medication",
                        "Health",
                        "Technology",
                        "Wellness",
                        "Care",
                        "Innovation",
                      ].map((tag) => (
                        <a
                          key={tag}
                          href={`#tag/${tag.toLowerCase()}`}
                          className="tag"
                        >
                          <FaTags /> {tag}
                        </a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Newsletter */}
                  <motion.div
                    className="sidebar-widget newsletter-widget"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4>Subscribe to Newsletter</h4>
                    <p>Get the latest articles delivered to your inbox</p>
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Subscribe
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
