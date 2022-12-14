import CommentModel from "../model/commentModel.js"

const commentsRoutes = ({ app }) => {
  //GET all comments
  app.get("/comments", async (req, res) => {
    const comments = await CommentModel.query()
    res.send(comments)
  })

  //post Comment
  app.post("/comments", async (req, res) => {
    const {
      body: { content, is_published, userId, postId },
    } = req

    const comment = await CommentModel.query().insertAndFetch({
      content,
      is_published,
      userId,
      postId,
    })

    res.send(comment)
  })
}

export default commentsRoutes
