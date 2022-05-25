import express from 'express'
import ytdl from 'ytdl-core'
import fs from 'fs'
import yts from 'yt-search'
import axios from 'axios'
export const audio = express.Router()

audio.get("/stream", async (req, res) => {
    let { id } = req.query
    console.log(`Get media stream url: ${id}`)
    try {
        let { formats } = await ytdl.getInfo(id)
        let { url } = formats.find(item => item.itag === 251)
        res.status(200).json(url)
    } catch (err) {
        console.log("Video ID not found")
        res.status(500).json("Not found")
    }
})

audio.get("/info", async (req, res) => {
    // example: http://localhost:8888/api/info?id=dQw4w9WgXcQ
    let { id, type } = req.query
    try {
        if (type === "single") {
            const result = await yts({ videoId: id })
            res.status(200).json(result)
        } else if (type === "playlist") {
            const result = await yts({ listId: id })
            res.status(200).json(result)
        }
    } catch (err) {
        console.log(err)
    }
})

audio.post("/search", async (req, res) => {
    let { keyword, quantity } = req.body
    console.log("Search by keyword: ", keyword)
    try {
        const results = await yts(keyword)
        const videos = results.videos.slice(0, quantity)
        res.status(200).json(videos)
    } catch (err) {
        console.log(err)
    }
})

audio.get("/tracklist", async (req, res) => {
    let id = req.query.id
    const { videos } = await yts({ listId: id })
    Promise.all(videos.map(item => {
        return ytdl.getInfo(item.videoId)
    })).then(result => {
        let src = result.map(item => {
            return item.formats.find(i => i.itag === 251).url
        })
        res.status(200).json(src)
    })
})