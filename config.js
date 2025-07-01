require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '254742063632',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NEQlBhOXo1QmIxekNGSjdJN1BGOUNhOU5HRDY3cVBtQ3lwbmkxNXYyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkRtb0oxeldMM25aVHVzY0UrNlZ1ektQRlVRYUFkMXRSS2ZQMVErMXAwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRFU0eWNTZEx2Mk1wM2M2cWlrQWxYSlp3OTdLcWt2VDdmUzNpNXdCZ21FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsazVqd0JVS0M1WThibldKTjdQZ00yOHRzdVpoTS8zdGdqOUpwZFF6UkZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QL1VlajNsUzJocjhLdDFEQXNLcUlVeXN4ZHUxaDhZLzAzTHVJUkdLV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZhak5Cam1XTTRTVEd1ajVCanFxTVFzMy93cUZnVlhycjNKMVJkZVB1RVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ08zQUJGUGcxQlV5cENhVHpzQ0NPSEVPUFp4WmlNWHljSEtqdXFyY1kyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2hHb3RMM1NsclZFQjVyVTVWRzhWcGU0K0E2TG9sRDlOalViQkFLck9HOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FYWwyMkFaYXpnYzlxY21tcnRMSTkraXU3bXNaN0tDNFJjWDJwRHJnMHE1ZStNVUZzODNZQ0ZpajRTc1Q0ZWE5ckhtMGZvcWFsNHJFbG1CcDNCTERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Im1FMktOQmoyRktDc3RHdGdPVnQ4ZDkzNjN0R3dOY3gwZlpCcTFoVzhoZm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NTU4Njc2MjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkMxNDk0NTA0QjcwQjEwRDgyNzI5QUNDMkFGNzIzMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTM0MzI4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRFZMQUszUTIiLCJtZSI6eyJpZCI6IjUwOTU1ODY3NjIyOjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDY4MjQzNzEwMzYzMjI6MjJAbGlkIiwibmFtZSI6IuOAjuKUg+KAouKbg+KDn+KcruKAjPCdkIziirnwnZCD8J2QgPCdkIzwnZCO8J2QjeKDn+Kaoe+4jvCdkIPwnZCA8J2QkfCdkIrig5/wn6q9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMlh0TFVGRUtYQmpjTUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5WkdHWHV6V2NTdDlMVTZmNDdSeHM4RG0zR3Vua3pGam4ydUNMWCtXUDBvPSIsImFjY291bnRTaWduYXR1cmUiOiJtaHUxOC9mQXUrNmpKS2JXTDJHM0FDVlJrK2lXdFpXYzF3c2xEbGxDSUw1TkkxSW50RHdvRjhVbHpJVStxRG5VcTFWQ0NsRWdLdjh2N0JUeld6VXZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSktYUER6aStXOWdMU2FKUFdsUXkzcWRDa1BHb1J5MTJnbmowK25UTklhTzN1WEJLdTBOZHNmTzFOcGFjTTNGdXNWRnNaVVR6Uk5zUkJ4OWZuNTJJRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk1NTg2NzYyMjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmV1JobDdzMW5FcmZTMU9uK08wY2JQQTV0eHJwNU14WTU5cmdpMS9sajlLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEzNDMyODIsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzJGIn0=',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
