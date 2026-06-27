const { Client } = require('pg')

const client = new Client({
  host: "aws-1-ap-southeast-2.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  user: "postgres.crtkxgxwczdptjsdgewo",
  password: "smaxkordieonrepeat",
  ssl: { rejectUnauthorized: false }
})

client.connect()
  .then(() => {
    console.log("✅ Berhasil konek ke Supabase!")
    client.end()
  })
  .catch((err) => {
    console.error("❌ Gagal:", err.message)
    client.end()
  })