## standalone-waterline-datastore

1. Change `.env` to your setting.
2. Then run the following.

```
yarn migrate
yarn seed
yarn start
```

3. Test waterline using the following api

```
// To try waterline model loaded
curl localhost:4000/test

// The waterline cannot find getDatastore() from model
curl localhost:4000/fail
```
