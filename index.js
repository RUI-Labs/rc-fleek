//visit
//connect
//request notification
//allow notification
//deny notifiation
//reply

const SUPABASE_URL = 'https://ojvozirqgxgiztlmasrm.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdm96aXJxZ3hnaXp0bG1hc3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjg5MTY5OSwiZXhwIjoyMDI4NDY3Njk5fQ.RnuTetoEW2cr_2yHfiTttQcidqe3Trour21lyrTRYxA'

async function createOne(body) {
  return fetch(`${SUPABASE_URL}/rest/v1/logs`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal",
    },
    body: JSON.stringify(body)
  })
}

export const main = async (req) => {

  await createOne(req.body)

  return {
    status: 200,
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      //params: params,
      body: req.body,
    })
  }
}
