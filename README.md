# node-hello-world

Simple node api that returns hello world when do a get request in '/' at port 3000, the aplication has a dockerfile with node 12 alpine enviroment

## Usage

You can clone project and build the image runing the bellow command in project folder:

```bash
docker build -t <your image name> .
```

or you can download the builded image with command:

```bash
docker pull jhonatanestabile/node-hello-world:12-alpine
```

the builded image is in repository: https://hub.docker.com/r/jhonatanestabile/node-hello-world
