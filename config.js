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
    sessionBase64: process.env.SESSION || 'GV0YWlscyI6IkNJMlh0TFVGRUtYQmpjTUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5WkdHWHV6V2NTdDlMVTZmNDdSeHM4RG0zR3Vua3pGam4ydUNMWCtXUDBvPSIsImFjY291bnRTaWduYXR1cmUiOiJtaHUxOC9mQXUrNmpKS2JXTDJHM0FDVlJrK2lXdFpXYzF3c2xEbGxDSUw1TkkxSW50RHdvRjhVbHpJVStxRG5VcTFWQ0NsRWdLdjh2N0JUeld6VXZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSktYUER6aStXOWdMU2FKUFdsUXkzcWRDa1BHb1J5MTJnbmowK25UTklhTzN1WEJLdTBOZHNmTzFOcGFjTTNGdXNWRnNaVVR6Uk5zUkJ4OWZuNTJJRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk1NTg2NzYyMjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmV1JobDdzMW5FcmZTMU9uK08wY2JQQTV0eHJwNU14WTU5cmdpMS9sajlLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEzNDMyODIsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzJGIn0=',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
