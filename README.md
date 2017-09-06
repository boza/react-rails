# React/Rails App example

## Set up/Installation
This tool uses Docker to bootstrap itself. If you don't have docker installed you can download it from here:
https://store.docker.com/search?offering=community&type=edition

In the past we tried to use Docker to also manage the app dependencies, but that's just too much of a pain.
Instead, we've packaged up all the commands in a script. Run it like this:

```
bin/dev_setup
```

As a reference, here's what it does:
1. Set up app dependencies (Ruby, Node, Postgres, etc.):
```docker-compose build```
2. Bundle
```docker-compose run rails bundle```
3. Install Yarn Packages
```docker-compose run webpack yarn```
4. Migrate
```docker-compose run rails bin/rake db:migrate```

## Running
Start the required services by running:

```
docker-compose up
```

You want to leave it running at all times so that spring is preloaded when invoking `docker-compose run`
