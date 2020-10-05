# Task-Manager-Frontend
Frontend code for the Task Manager application

```
docker build -t task-manager:latest .
```

To Run

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    task-manager:latest
```
