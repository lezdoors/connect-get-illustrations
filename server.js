import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.static(path.join(__dirname, 'dist')))

// Rate limiting storage (simple in-memory for now)
const rateLimitStore = new Map()

// Rate limiting middleware
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress
  const now = Date.now()
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, [])
  }
  
  const requests = rateLimitStore.get(ip).filter(time => now - time < 60000) // 1 minute
  
  if (requests.length >= 3) {
    return res.status(429).json({ 
      error: 'Trop de demandes. Veuillez patienter avant de soumettre à nouveau.' 
    })
  }
  
  requests.push(now)
  rateLimitStore.set(ip, requests)
  next()
}

// API Routes
app.post('/api/leads', rateLimit, async (req, res) => {
  try {
    const lead = {
      ...req.body,
      timestamp: new Date().toISOString(),
      ip_address: req.ip || req.connection.remoteAddress
    }
    
    console.log('📧 New lead received:', {
      source: lead.source,
      step: lead.step,
      type: lead.type_raccordement,
      postal: lead.code_postal,
      name: `${lead.prenom} ${lead.nom}`,
      phone: lead.telephone
    })
    
    // Here you would normally:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Send to Google Sheets
    // 4. Send SMS notifications
    
    // For now, just simulate success
    const leadId = 'REC-' + Math.random().toString(36).substr(2, 5).toUpperCase()
    
    res.json({ 
      success: true, 
      leadId,
      message: 'Lead enregistré avec succès'
    })
    
  } catch (error) {
    console.error('Error saving lead:', error)
    res.status(500).json({ 
      error: 'Erreur lors de l\'enregistrement de votre demande. Veuillez réessayer.' 
    })
  }
})

// File upload endpoint (for step 3)
app.post('/api/upload', rateLimit, (req, res) => {
  // Simple file upload simulation
  // In production, use multer and cloud storage
  res.json({ 
    success: true, 
    url: '/uploads/demo-file.pdf',
    message: 'Fichier uploadé avec succès' 
  })
})

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`)
})