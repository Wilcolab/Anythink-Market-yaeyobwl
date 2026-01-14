/**
 * Express router for handling comment-related API endpoints
 * @type {Router}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Promise<void>} JSON object with success message
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot!
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}
);


//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const { id: commentId } = req.params;
    await Comment.findByIdAndDelete(commentId);
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});