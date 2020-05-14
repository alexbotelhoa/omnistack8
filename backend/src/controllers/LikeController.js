const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const loggedDev = await Dev.findById(req.headers.user)
        const targetDev = await Dev.findById(req.params.id)

        if (!targetDev) return res.status(400).json({ error: 'Dev not exists' })

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log("Deu match")
        }

        loggedDev.likes.push(targetDev._id)
        await loggedDev.save()

      return res.json(loggedDev)
   }
}