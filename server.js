var app = require("./app");
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
var PORT = process.env.PORT || 5005;
app.listen(PORT, function () {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
