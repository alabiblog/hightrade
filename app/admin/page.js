"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  // Fetch Users
  async function fetchUsers() {
    const { data, error } = await supabase.from("User").select("*");
    if (error) console.error(error);
    else setUsers(data);
  }

  // Fetch Posts
  async function fetchPosts() {
    const { data, error } = await supabase.from("Post").select("*");
    if (error) console.error(error);
    else setPosts(data);
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  // Create a new post
  async function createPost(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Post")
      .insert([{ title, content }]);
    if (error) console.error(error);
    else {
      setPosts([...posts, data[0]]);
      setTitle("");
      setContent("");
    }
  }

  // Start editing a post
  function startEdit(post) {
    setEditingPostId(post.id);
    setTitle(post.title);
    setContent(post.content);
  }

  // Update post
  async function updatePost(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Post")
      .update({ title, content })
      .eq("id", editingPostId);
    if (error) console.error(error);
    else {
      setPosts(posts.map(p => (p.id === editingPostId ? data[0] : p)));
      setEditingPostId(null);
      setTitle("");
      setContent("");
    }
  }

  // Delete post
  async function deletePost(id) {
    const { error } = await supabase.from("Post").delete().eq("id", id);
    if (error) console.error(error);
    else setPosts(posts.filter(p => p.id !== id));
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Admin Dashboard</h1>

      <h2>{editingPostId ? "Edit Post" : "Create New Post"}</h2>
      <form onSubmit={editingPostId ? updatePost : createPost} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: "block", marginBottom: "0.5rem", width: "300px" }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ display: "block", marginBottom: "0.5rem", width: "300px", height: "100px" }}
        />
        <button type="submit" style={{ marginRight: "1rem" }}>
          {editingPostId ? "Update Post" : "Add Post"}
        </button>
        {editingPostId && (
          <button type="button" onClick={() => { setEditingPostId(null); setTitle(""); setContent(""); }}>
            Cancel
          </button>
        )}
      </form>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            <button onClick={() => startEdit(post)} style={{ marginRight: "0.5rem" }}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name || "No Name"} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
