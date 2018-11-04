var handBag = {
    content:[],
    addItem: function (item) {
    this.content.push (item)
    },
    removeItem: function (item) {
        var ind = this.content.indexOf (item)
        ind < 0 ? null : this.content.splice (ind, 1)  
    }
}
// part I
function LibraryBook (title = "My-my", year = "1900", author = "Tyr"){
    var title = title
    var year = year
    var author = author
    var readerName = null
    var readerData = null
    
    function giveTheBook (client) {
        readerName = client
        readerData = new Date ().toLocaleString().split(",")[0]
    }
    
    this.getBookInfo = function () {
        console.log(`${title} ${year} ${author} книга ${readerName ? "занята" : "свободна"}`)
        return !Boolean(readerName)
    }
    
    this.getTheBook = function (client) {
        return this.getBookInfo () ? giveTheBook (client) : null
    }
    
    this.returnBook = function () {
    readerName = null
    readerData = null

    }
}
// part II