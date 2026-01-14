const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Express router for handling comment-related API endpoints
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */
module.exports = router;
// Hey GitHub Copilot, please implement the following routes for comments:


/**
 * GET /
 * Retrieves all comments from the database
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} 500 - Failed to fetch comments
 */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});


/**
 * POST /
 * Creates a new comment with the provided data
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.body - Comment data to create
 * @param {Object} res - Express response object
 * @returns {Promise<void>} 201 - Created comment object with generated ID
 * @throws {Error} 400 - Failed to create comment
 */
router.post("/", async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});


/**
 * GET /:id
 * Retrieves a specific comment by ID
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - MongoDB comment ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON comment object
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Failed to fetch comment
 */
router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
});


/**
 * PUT /:id
 * Updates an existing comment by ID
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - MongoDB comment ID
 * @param {Object} req.body - Fields to update
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Updated comment object
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 400 - Failed to update comment
 */
router.put("/:id", async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ error: "Failed to update comment" });
    }
});


/**
 * DELETE /:id
 * Deletes a comment by ID
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - MongoDB comment ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Success message
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Failed to delete comment
 */
router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});