module.exports = {
    devServer: {
        disableHostCheck: true
    }
}
// oc new-app centos/mongodb-26-centos7 -e MONGODB_USER=admin MONGODB_DATABASE=mongo_db MONGODB_PASSWORD=secret MONGODB_ADMIN_PASSWORD=super-secret