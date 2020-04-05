const express = require('express');
const Post = require('../models/Post.model');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('hello')
// });

// GET REQUEST ROUTE
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

// GET SINGLE REQUEST ROUTE

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json({
            "status": 200,
            "result": post
        });
    } catch (err) {
        res.json({ message: err.message })
    }

})

// DELETE REQUEST ROUTE

router.delete('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.remove({ _id: req.params.postId });
        res.json({
            "status": 200,
            "result": deletePost
        });
    } catch (err) {
        res.json({ message: err.message })
    }

})

// UPDATE REQUEST ROUTE

router.patch('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json({
            "status": 200,
            "result": deletePost
        });
    } catch (err) {
        res.json({ message: err.message })
    }

})

// POST REQUEST ROUTE
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }

});

router.get('/singlepost', (req, res) => {
    res.send('single post')
});

module.exports = router;