

// api for adding Doctor


const addDoctor =  async (req,res) => {

    try {

       const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

    //    console.log({name,email,password,speciality,degree,experience,about,fees,address},imageFile)

        // add the details in DB...
        //CHEKING ALL FIELD TO ADD DATA IN DB 

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({
                success:false,
                message:"Missing Details"
            })
        }

        

        res.status(200).json({
        success: true,
        message: "Doctor data received successfully!",
        data: { name, email, password, speciality, degree, experience, about, fees, address ,imageFile},
    });
       
        
    } catch (error) {
        console.log("error")
    }
}


export {addDoctor}