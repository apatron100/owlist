1. Express and React 
    1. express server
    2. cd server
    3. npm install
    4. npm install -g create-react-app
    5. create-react-app client

2. Proxy
    1. Add to client package.json
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
        },
        "proxy": "http://localhost:3001"
    2.