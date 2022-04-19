const getDetails = (req, res) =>{
    res.send ({
        name:"Ravi",
        age:23,
        designation:"developer"
    })
}

module.exports.getDetails = getDetails;